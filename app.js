(function () {
  const D = window.SARGANY;
  const $ = (s, el = document) => el.querySelector(s);
  const zl = n => n.toLocaleString("pl-PL") + " zł";
  // logo inline, żeby napisy w nim łapały font strony (SVG w <img> nie widzi web fontów)
  fetch("logo.svg").then(r => r.text()).then(svg => {
    document.querySelectorAll('img[src="logo.svg"]').forEach(img => {
      const w = document.createElement("span");
      w.innerHTML = svg;
      const el = w.firstElementChild;
      el.setAttribute("class", img.className);
      el.setAttribute("width", img.getAttribute("width"));
      el.setAttribute("height", img.getAttribute("height"));
      if (!img.alt) el.setAttribute("aria-hidden", "true");
      img.replaceWith(el);
    });
  }).catch(() => {});
  const poId = Object.fromEntries(D.trunki.map(t => [t.id, t]));

  const schowek = {
    get(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch { return def; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  // koszyk: { "kawa|0,5 L": 2 }
  let koszyk = schowek.get("sargany-koszyk", {});

  /* ---------- półka ---------- */
  const polka = $("#polka");
  polka.innerHTML = D.trunki.map((t, i) => {
    const od = Math.min(...Object.values(t.ceny));
    return `<li>
      <button class="polka__btn" type="button" data-trunek="${t.id}" style="--d:${(i * 0.09).toFixed(2)}s" aria-label="${t.nazwa}: szczegóły">
        ${butelka(t, { prefix: "p" })}
      </button>
      <span class="deska" aria-hidden="true"></span>
      <span class="metka">od ${od} zł</span>
    </li>`;
  }).join("");
  requestAnimationFrame(() => polka.classList.add("nalewaj"));

  /* ---------- cennik ---------- */
  const cenaBtn = (t, poj) =>
    `<button class="cena" type="button" data-dodaj="${t.id}|${poj}" aria-label="Dodaj ${t.nazwa} ${poj} za ${t.ceny[poj]} zł">
      <span class="cena__kwota">${t.ceny[poj]} zł</span>
      <span class="cena__poj">${poj}</span>
      <span class="cena__licznik" data-licznik="${t.id}|${poj}" hidden>0</span>
    </button>`;

  $("#grupy").innerHTML = D.grupy.map(g => `
    <section class="grupa" aria-labelledby="g-${g.id}">
      <div class="grupa__glowa"><h3 id="g-${g.id}">${g.nazwa}</h3><p>${g.opis}</p></div>
      ${D.trunki.filter(t => t.grupa === g.id).map(t => `
        <article class="wiersz">
          <button class="wiersz__mini" type="button" data-trunek="${t.id}" aria-label="${t.nazwa}: szczegóły" tabindex="-1">${butelka(t, { prefix: "m" })}</button>
          <div class="wiersz__tekst">
            <button class="wiersz__nazwa" type="button" data-trunek="${t.id}">${t.nazwa}</button>
            <p class="wiersz__opis">${t.opis}</p>
            ${t.uwagi ? `<div class="wiersz__uwagi">${t.uwagi.map(u => `<span class="stempel">${u}</span>`).join("")}</div>` : ""}
          </div>
          <div class="wiersz__moc">${t.moc}%<small>moc</small></div>
          <div class="wiersz__ceny">${Object.keys(t.ceny).map(p => cenaBtn(t, p)).join("")}</div>
        </article>`).join("")}
    </section>`).join("");

  /* ---------- okno trunku ---------- */
  const oknoT = $("#okno-trunek");
  function pokazTrunek(id) {
    const t = poId[id];
    $("#t-butelka").innerHTML = butelka(t, { prefix: "d" });
    $("#t-butelka").classList.remove("nalewaj"); void $("#t-butelka").offsetWidth; $("#t-butelka").classList.add("nalewaj");
    $("#t-podpis").textContent = t.podpis || "";
    $("#t-nazwa").textContent = t.nazwa;
    $("#t-opis").textContent = t.opis;
    $("#t-moc").textContent = t.moc + "%";
    $("#t-baza").textContent = t.baza;
    const u = $("#t-uwaga");
    u.hidden = !t.uwagaDluga; u.textContent = t.uwagaDluga || "";
    $("#t-ceny").innerHTML = Object.keys(t.ceny).map(p => cenaBtn(t, p)).join("");
    odswiezLiczniki();
    oknoT.showModal();
  }

  /* ---------- koszyk ---------- */
  const oknoK = $("#okno-koszyk");
  const pozycje = () => Object.entries(koszyk).filter(([, n]) => n > 0).map(([k, n]) => {
    const [id, poj] = k.split("|"); const t = poId[id];
    return t && t.ceny[poj] ? { k, t, poj, n, kwota: t.ceny[poj] * n } : null;
  }).filter(Boolean);
  const suma = () => pozycje().reduce((s, p) => s + p.kwota, 0);
  const sztuk = () => pozycje().reduce((s, p) => s + p.n, 0);

  function zmien(k, o) {
    koszyk[k] = Math.max(0, (koszyk[k] || 0) + o);
    if (!koszyk[k]) delete koszyk[k];
    schowek.set("sargany-koszyk", koszyk);
    odswiez();
  }

  function odswiezLiczniki() {
    document.querySelectorAll("[data-licznik]").forEach(el => {
      const n = koszyk[el.dataset.licznik] || 0;
      el.hidden = !n; el.textContent = n;
    });
  }

  function tekstZamowienia() {
    const imie = $("#k-imie").value.trim();
    const uwagi = $("#k-uwagi").value.trim();
    const linie = pozycje().map(p => `• ${p.t.nazwa} ${p.poj} × ${p.n} = ${zl(p.kwota)}`);
    return [
      `Zamówienie Sargany Distillery${imie ? " — " + imie : ""}`,
      ...linie,
      `Razem: ${zl(suma())}`,
      uwagi ? `Uwagi: ${uwagi}` : ""
    ].filter(Boolean).join("\n");
  }

  function odswiez() {
    const lista = pozycje();
    const fab = $("#fab");
    const ile = sztuk();
    fab.hidden = ile === 0;
    $("#fab-ile").textContent = ile;
    $("#fab-suma").textContent = zl(suma());
    odswiezLiczniki();

    $("#k-lista").innerHTML = lista.length
      ? lista.map(p => `<div class="poz">
          <div class="poz__nazwa">${p.t.nazwa} <small>${p.poj} · ${p.t.ceny[p.poj]} zł</small></div>
          <div class="poz__ilosc">
            <button type="button" data-zmien="${p.k}|-1" aria-label="Odejmij ${p.t.nazwa} ${p.poj}">−</button>
            <span>${p.n}</span>
            <button type="button" data-zmien="${p.k}|1" aria-label="Dodaj ${p.t.nazwa} ${p.poj}">+</button>
          </div>
          <div class="poz__kwota">${zl(p.kwota)}</div>
        </div>`).join("") + `<div class="suma"><span>Razem</span><span>${zl(suma())}</span></div>`
      : `<p class="pusto">Na razie pusto. Dodaj coś z karty trunków.</p>`;

    const sms = $("#k-sms");
    if (D.telefon && lista.length) {
      sms.hidden = false;
      sms.href = `sms:${D.telefon}?&body=${encodeURIComponent(tekstZamowienia())}`;
    } else sms.hidden = true;
    $("#k-kopiuj").disabled = !lista.length;
  }

  $("#k-imie").value = schowek.get("sargany-imie", "");
  ["#k-imie", "#k-uwagi"].forEach(s => $(s).addEventListener("input", () => {
    schowek.set("sargany-imie", $("#k-imie").value);
    odswiez();
  }));

  $("#k-kopiuj").addEventListener("click", async () => {
    const txt = tekstZamowienia();
    const st = $("#k-status");
    try {
      await navigator.clipboard.writeText(txt);
      st.textContent = "Skopiowane. Wklej w wiadomości na Messengerze, WhatsAppie albo SMS-ie.";
    } catch {
      st.textContent = "Nie udało się skopiować automatycznie — zaznacz i skopiuj tekst poniżej.";
      const pre = document.createElement("textarea");
      pre.value = txt; pre.rows = 6; pre.style.cssText = "width:100%;margin-top:8px;font:inherit";
      st.after(pre); pre.select();
    }
  });
  $("#k-wyczysc").addEventListener("click", () => {
    koszyk = {}; schowek.set("sargany-koszyk", koszyk); $("#k-status").textContent = "Wyczyszczone."; odswiez();
  });

  /* ---------- kliknięcia ---------- */
  document.addEventListener("click", e => {
    const tr = e.target.closest("[data-trunek]");
    if (tr) { pokazTrunek(tr.dataset.trunek); return; }

    const d = e.target.closest("[data-dodaj]");
    if (d) {
      zmien(d.dataset.dodaj, 1);
      [d, $("#fab")].forEach(el => { el.classList.remove("dodano", "bump"); void el.offsetWidth; el.classList.add(el.id === "fab" ? "bump" : "dodano"); });
      return;
    }
    const z = e.target.closest("[data-zmien]");
    if (z) { const parts = z.dataset.zmien.split("|"); zmien(parts[0] + "|" + parts[1], +parts[2]); return; }

    if (e.target.closest("[data-otworz-koszyk]")) {
      if (oknoT.open) oknoT.close();
      $("#k-status").textContent = ""; odswiez(); oknoK.showModal(); return;
    }
    if (e.target.closest("[data-zamknij]")) { e.target.closest("dialog").close(); return; }
    // klik w tło zamyka okno
    if (e.target.tagName === "DIALOG" && e.target.id !== "okno-wiek") e.target.close();
  });

  /* ---------- 18+ ---------- */
  const oknoW = $("#okno-wiek");
  if (!schowek.get("sargany-18", false)) {
    oknoW.showModal();
    oknoW.addEventListener("cancel", e => e.preventDefault());
  }
  $("#w-tak").addEventListener("click", () => {
    schowek.set("sargany-18", true); oknoW.close();
    polka.classList.remove("nalewaj"); void polka.offsetWidth; polka.classList.add("nalewaj");
  });

  odswiez();
})();

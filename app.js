(function () {
  const D = window.SARGANY;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const zl = n => n.toLocaleString("pl-PL") + " zł";
  const poId = Object.fromEntries(D.trunki.map(t => [t.id, t]));
  const grupaNazwa = Object.fromEntries(D.grupy.map(g => [g.id, g.nazwa]));
  const foto = id => `img/prod-${id}.webp`;
  const od = t => Math.min(...Object.values(t.ceny));

  const schowek = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };
  let koszyk = schowek.get("sargany-koszyk", {});

  /* ---------- manifest z pigułkami ---------- */
  const pig = (id, tekst) => {
    const t = poId[id];
    return `<button class="pigulka" type="button" data-trunek="${id}" style="background:${t.tlo};color:${t.tekst}"><img src="${foto(id)}" alt="" loading="lazy">${tekst || t.nazwa}</button>`;
  };
  $("#manifest").innerHTML =
    `Jedna piwnica, jedna miedź, jedenaście charakterów. Od czystego ${pig("bimber")} przez leżakowaną na dębie ${pig("whisky")}, ziołowego ${pig("jager")} i ognistą ${pig("sliwka")}, aż po deserowy ${pig("karmel")}. Pędzone ręcznie, w małych partiach, dla swoich.`;

  /* ---------- wariant (przycisk dodania) ---------- */
  const wariantBtn = (t, poj) =>
    `<button class="wariant" type="button" data-dodaj="${t.id}|${poj}" aria-label="Dodaj ${t.nazwa} ${poj}, ${t.ceny[poj]} zł">
      <span>${poj} <span class="wariant__cena">${t.ceny[poj]} zł</span></span>
      <span class="wariant__plus" aria-hidden="true">+</span>
      <span class="wariant__ile" data-ile="${t.id}|${poj}">0</span>
    </button>`;

  /* ---------- filtry + siatka ---------- */
  $("#filtry").innerHTML = [{ id: "", nazwa: "Wszystkie" }, ...D.grupy]
    .map((g, i) => `<button type="button" data-filtr="${g.id}" aria-pressed="${i === 0}">${g.nazwa}</button>`).join("");

  $("#siatka").innerHTML = D.trunki.map(t => `
    <li class="karta" data-grupa="${t.grupa}">
      <button class="karta__foto" type="button" data-trunek="${t.id}" style="--tlo:${t.tlo}" aria-label="${t.nazwa} — szczegóły">
        <img src="${foto(t.id)}" alt="Butelka Sargany ${t.nazwa}" width="900" height="1125" loading="lazy">
        <span class="karta__moc">${t.moc}%</span>
      </button>
      <div class="karta__tekst">
        <button class="karta__nazwa" type="button" data-trunek="${t.id}">${t.nazwa}</button>
        <span class="karta__od">od ${od(t)} zł</span>
        <p class="karta__nuta">${t.nuta}</p>
      </div>
      <div class="karta__warianty">${Object.keys(t.ceny).map(p => wariantBtn(t, p)).join("")}</div>
    </li>`).join("") + `
    <li class="karta karta--cta" data-grupa="">
      <img class="karta--cta__znak" src="img/sygnet-jasne.svg" alt="" width="56" height="76" loading="lazy">
      <h3>Wybrane? Złóż zamówienie</h3>
      <p>Wpisujesz imię, kopiujesz gotową listę i wysyłasz na Messengerze albo WhatsAppie. Odbiór osobisty, płatność przy odbiorze.</p>
      <button class="przycisk przycisk--jasny" type="button" data-koszyk>Otwórz zamówienie</button>
    </li>`;

  $("#filtry").addEventListener("click", e => {
    const b = e.target.closest("[data-filtr]"); if (!b) return;
    $$("#filtry button").forEach(x => x.setAttribute("aria-pressed", x === b));
    $$(".karta").forEach(k => { k.hidden = !!b.dataset.filtr && k.dataset.grupa !== b.dataset.filtr; });
  });

  /* ---------- cennik ---------- */
  $("#tabela").innerHTML = D.trunki.map(t => `
    <tr>
      <td><button class="tabela__nazwa" type="button" data-trunek="${t.id}">${t.nazwa}</button><span class="tabela__nuta">${t.nuta}${t.mocUwaga ? ". " + t.mocUwaga : ""}</span></td>
      <td>${t.moc}%</td>
      <td class="kwota">${t.ceny["0,5 L"]} zł</td>
      <td class="kwota">${t.ceny["1 L"]} zł</td>
    </tr>`).join("");

  /* ---------- okno trunku ---------- */
  const oknoT = $("#okno-trunek");
  function pokaz(id) {
    const t = poId[id];
    $("#t-foto").style.setProperty("--tlo", t.tlo);
    $("#t-foto").innerHTML = `<img src="${foto(id)}" alt="Butelka Sargany ${t.nazwa}">`;
    $("#t-grupa").textContent = grupaNazwa[t.grupa];
    $("#t-nazwa").textContent = t.nazwa;
    $("#t-nuta").textContent = t.nuta;
    $("#t-opis").textContent = t.opis;
    $("#t-moc").textContent = t.moc + "%" + (t.mocUwaga ? " · " + t.mocUwaga : "");
    $("#t-baza").textContent = t.baza;
    $("#t-podawanie").textContent = t.podawanie;
    $("#t-uwagi").innerHTML = (t.uwagi || []).map(u => `<li>${u}</li>`).join("");
    $("#t-ceny").innerHTML = Object.keys(t.ceny).map(p => wariantBtn(t, p)).join("");
    odswiezLiczniki();
    if (!oknoT.open) oknoT.showModal();
    $(".okno-trunek__info").scrollTop = 0;
  }

  /* ---------- koszyk ---------- */
  const szuflada = $("#szuflada");
  const pozycje = () => Object.entries(koszyk).map(([k, n]) => {
    const [id, poj] = k.split("|"); const t = poId[id];
    return t && t.ceny[poj] && n > 0 ? { k, t, poj, n, kwota: t.ceny[poj] * n } : null;
  }).filter(Boolean);
  const suma = () => pozycje().reduce((s, p) => s + p.kwota, 0);

  function zmien(k, o) {
    koszyk[k] = Math.max(0, (koszyk[k] || 0) + o);
    if (!koszyk[k]) delete koszyk[k];
    schowek.set("sargany-koszyk", koszyk);
    odswiez();
  }

  function odswiezLiczniki() {
    $$("[data-ile]").forEach(el => {
      const n = koszyk[el.dataset.ile] || 0;
      el.textContent = n;
      el.closest(".wariant").classList.toggle("ma", n > 0);
    });
  }

  function tekstZamowienia() {
    const imie = $("#k-imie").value.trim(), uwagi = $("#k-uwagi").value.trim();
    return [
      `Zamówienie Sargany${imie ? " — " + imie : ""}`,
      ...pozycje().map(p => `• ${p.t.nazwa} ${p.poj} × ${p.n} = ${zl(p.kwota)}`),
      `Razem: ${zl(suma())}`,
      uwagi ? `Uwagi: ${uwagi}` : ""
    ].filter(Boolean).join("\n");
  }

  function odswiez() {
    const lista = pozycje();
    const ile = lista.reduce((s, p) => s + p.n, 0);
    $("#nav-ile").textContent = ile;
    $("#k-suma").textContent = zl(suma());
    $("#k-kopiuj").disabled = !lista.length;
    odswiezLiczniki();
    $("#k-lista").innerHTML = lista.length ? lista.map(p => `
      <div class="poz">
        <div class="poz__foto" style="--tlo:${p.t.tlo}"><img src="${foto(p.t.id)}" alt=""></div>
        <div><div class="poz__nazwa">${p.t.nazwa}</div><div class="poz__wariant">${p.poj} · ${p.t.ceny[p.poj]} zł</div></div>
        <div class="poz__prawa">
          <span class="poz__kwota">${zl(p.kwota)}</span>
          <span class="licznik">
            <button type="button" data-zmien="${p.k}" data-o="-1" aria-label="Odejmij ${p.t.nazwa} ${p.poj}">−</button>
            <span>${p.n}</span>
            <button type="button" data-zmien="${p.k}" data-o="1" aria-label="Dodaj ${p.t.nazwa} ${p.poj}">+</button>
          </span>
        </div>
      </div>`).join("")
      : `<div class="pusto"><strong>Na razie pusto</strong>Dodaj coś z kolekcji — przy każdym trunku wybierasz 0,5 L albo 1 L.</div>`;
  }

  $("#k-imie").value = schowek.get("sargany-imie", "");
  $("#k-imie").addEventListener("input", e => schowek.set("sargany-imie", e.target.value));

  $("#k-kopiuj").addEventListener("click", async () => {
    const txt = tekstZamowienia(), st = $("#k-status");
    try {
      await navigator.clipboard.writeText(txt);
      st.textContent = "Skopiowane. Wklej na Messengerze albo WhatsAppie.";
    } catch {
      st.textContent = "Skopiuj ręcznie:";
      const ta = document.createElement("textarea");
      ta.value = txt; ta.rows = 6; ta.style.cssText = "width:100%;font:inherit;padding:10px;border-radius:8px";
      st.after(ta); ta.select();
    }
  });

  /* ---------- kliknięcia ---------- */
  document.addEventListener("click", e => {
    const d = e.target.closest("[data-dodaj]");
    if (d) {
      zmien(d.dataset.dodaj, 1);
      d.classList.remove("dodano"); void d.offsetWidth; d.classList.add("dodano");
      const ile = $("#nav-ile"); ile.classList.add("bump"); setTimeout(() => ile.classList.remove("bump"), 300);
      return;
    }
    const z = e.target.closest("[data-zmien]");
    if (z) { zmien(z.dataset.zmien, +z.dataset.o); return; }
    const t = e.target.closest("[data-trunek]");
    if (t) { pokaz(t.dataset.trunek); return; }
    if (e.target.closest("[data-koszyk]")) {
      if (oknoT.open) oknoT.close();
      $("#k-status").textContent = ""; odswiez(); szuflada.showModal(); return;
    }
    if (e.target.closest("[data-zamknij]")) { e.target.closest("dialog").close(); return; }
    if ((e.target === oknoT || e.target === szuflada)) e.target.close();
  });

  /* ---------- nawigacja: jasna po zjechaniu z hero ---------- */
  const nav = $("#nav"), hero = $(".hero");
  new IntersectionObserver(([w]) => nav.classList.toggle("nav--jasna", !w.isIntersecting), { rootMargin: "-70px 0px 0px 0px" }).observe(hero);

  /* ---------- 18+ ---------- */
  const wiek = $("#wiek");
  if (!schowek.get("sargany-18", false)) {
    wiek.showModal();
    wiek.addEventListener("cancel", e => e.preventDefault());
  }
  $("#w-tak").addEventListener("click", () => { schowek.set("sargany-18", true); wiek.close(); });

  odswiez();
})();

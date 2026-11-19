// Rysuje butelki jako SVG z danych trunku.
(function () {
  const INK = "#1E2747";
  const KSZTALTY = {
    flaszka: {
      d: "M48,26 L72,26 L72,105 C72,125 102,135 102,165 L102,296 Q102,310 88,310 L32,310 Q18,310 18,296 L18,165 C18,135 48,125 48,105 Z",
      etykieta: [24, 182, 72, 84], blask: "M28,170 L28,290"
    },
    kwadrat: {
      d: "M50,40 L70,40 L70,95 C70,108 104,106 104,124 L104,302 Q104,310 96,310 L24,310 Q16,310 16,302 L16,124 C16,106 50,108 50,95 Z",
      etykieta: [22, 172, 76, 98], blask: "M25,135 L25,295"
    },
    rum: {
      d: "M50,30 L70,30 L70,140 C70,160 108,165 108,200 L108,296 Q108,310 94,310 L26,310 Q12,310 12,296 L12,200 C12,165 50,160 50,140 Z",
      etykieta: [22, 210, 76, 80], blask: "M22,200 L22,292"
    },
    liker: {
      d: "M50,30 L70,30 L70,128 C70,150 110,168 110,230 C110,285 90,310 60,310 C30,310 10,285 10,230 C10,168 50,150 50,128 Z",
      etykieta: [24, 198, 72, 74], blask: "M20,215 C18,250 24,275 34,292"
    },
    apteka: {
      d: "M48,30 L72,30 L72,108 Q72,122 86,124 L98,126 Q106,128 106,138 L106,300 Q106,310 96,310 L24,310 Q14,310 14,300 L14,138 Q14,128 22,126 L34,124 Q48,122 48,108 Z",
      etykieta: [22, 168, 76, 96], blask: "M24,145 L24,295"
    }
  };

  function zamkniecie(t) {
    if (t.zamkniecie === "wosk") {
      const c = t.woskKolor || "#B3261E";
      return `<path d="M44,6 Q60,0 76,6 L77,30 Q77,44 74,46 Q71,48 71,38 L71,34 Q69,52 66,54 Q62,56 63,40 Q60,36 57,40 Q57,58 53,58 Q49,58 50,42 Q47,36 45,38 Q45,48 43,48 Q41,48 43,30 Z" fill="${c}" stroke="${INK}" stroke-width="2"/>
        <path d="M50,10 Q60,7 70,10" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none"/>`;
    }
    if (t.zamkniecie === "kapsel") {
      return `<rect x="45" y="10" width="30" height="24" rx="3" fill="#9AA1A8" stroke="${INK}" stroke-width="2"/>
        <path d="M51,12 v20 M57,12 v20 M63,12 v20 M69,12 v20" stroke="${INK}" stroke-opacity=".35" stroke-width="1.5"/>`;
    }
    return `<path d="M47,6 L73,6 L71,34 L49,34 Z" fill="#C49663" stroke="${INK}" stroke-width="2"/>
      <path d="M52,12 l3,2 M62,10 l2,3 M58,22 l3,2 M66,24 l2,2 M53,28 l2,1" stroke="${INK}" stroke-opacity=".4" stroke-width="1.5"/>`;
  }

  function etykieta(t, [x, y, w, h]) {
    const slowa = t.nazwa.toUpperCase().split(" ");
    const linie = slowa.length > 1 ? slowa : [slowa[0]];
    const najdl = Math.max(...linie.map(s => s.length));
    const fs = Math.min(24, Math.floor((w - 10) / (najdl * 0.5)));
    const cx = x + w / 2;
    const yNazwa = y + 30 + (linie.length > 1 ? -4 : 4);
    const nazwa = linie.map((s, i) =>
      `<text x="${cx}" y="${yNazwa + i * (fs * 0.95)}" font-family="'Big Shoulders Stencil',Impact,sans-serif" font-weight="900" font-size="${fs}" text-anchor="middle" fill="${INK}" letter-spacing=".5">${s}</text>`
    ).join("");
    const yPod = yNazwa + (linie.length - 1) * fs * 0.95 + 16;
    return `<g class="etykieta">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#E8D6B0" stroke="${INK}" stroke-width="1.5"/>
      <rect x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" fill="none" stroke="${INK}" stroke-width=".6" stroke-dasharray="1.5 2"/>
      <text x="${cx}" y="${y + 14}" font-family="'Spectral',Georgia,serif" font-size="7" letter-spacing="2.2" text-anchor="middle" fill="#B3261E" font-weight="600">SARGANY</text>
      ${nazwa}
      <text x="${cx}" y="${yPod}" font-family="'Caveat',cursive" font-size="13" text-anchor="middle" fill="#5B3A22">${t.podpis || ""}</text>
      <text x="${cx}" y="${y + h - 8}" font-family="'Spectral',Georgia,serif" font-size="7.5" letter-spacing="1" text-anchor="middle" fill="${INK}">${t.moc}% VOL.</text>
    </g>`;
  }

  window.butelka = function (t, opcje = {}) {
    const k = KSZTALTY[t.ksztalt] || KSZTALTY.flaszka;
    const id = (opcje.prefix || "b") + "-" + t.id;
    const gora = 40, dol = 310;
    const yPlyn = dol - t.poziom * (dol - gora);
    const szklo = t.szklo || "#DDE9EA";
    const szkloKrycie = t.szklo ? 0.85 : 0.35;
    const zdzblo = t.zdzblo
      ? `<path d="M72,306 C68,240 60,170 58,${yPlyn + 6}" stroke="#6E7F2C" stroke-width="3" fill="none" stroke-linecap="round"/>
         <path d="M66,306 C64,250 66,200 74,${yPlyn + 30}" stroke="#87963A" stroke-width="2" fill="none" stroke-linecap="round"/>`
      : "";
    return `<svg class="butelka" viewBox="0 0 120 320" role="img" aria-label="Butelka: ${t.nazwa}" xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id="${id}-c"><path d="${k.d}"/></clipPath></defs>
      <ellipse cx="60" cy="312" rx="46" ry="5" fill="${INK}" opacity=".25"/>
      <path d="${k.d}" fill="${szklo}" fill-opacity="${szkloKrycie}"/>
      <g clip-path="url(#${id}-c)">
        <g class="plyn">
          <rect x="0" y="${yPlyn}" width="120" height="${dol - yPlyn + 4}" fill="${t.plyn}" fill-opacity="${t.krycie}"/>
          <rect x="0" y="${yPlyn}" width="120" height="3" fill="#fff" fill-opacity=".35"/>
          ${zdzblo}
        </g>
        ${t.szklo ? `<path d="${k.d}" fill="${t.szklo}" fill-opacity=".35"/>` : ""}
      </g>
      <path d="${k.d}" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="${k.blask}" stroke="#fff" stroke-opacity=".55" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M56,46 L56,96" stroke="#fff" stroke-opacity=".45" stroke-width="2.5" stroke-linecap="round"/>
      ${etykieta(t, k.etykieta)}
      ${zamkniecie(t)}
    </svg>`;
  };
})();

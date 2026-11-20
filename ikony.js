// Ikonki liniowe 24×24 (stroke = currentColor)
window.IKONY = {
  kropla: '<path d="M12 3c3.2 4.6 6 7.9 6 11.2a6 6 0 0 1-12 0C6 10.9 8.8 7.6 12 3z"/><path d="M9.5 15.5a2.5 2.5 0 0 0 2.5 2.3"/>',
  woda: '<path d="M3 8c1.5-1.3 3-1.3 4.5 0s3 1.3 4.5 0 3-1.3 4.5 0 3 1.3 4.5 0"/><path d="M3 13c1.5-1.3 3-1.3 4.5 0s3 1.3 4.5 0 3-1.3 4.5 0 3 1.3 4.5 0"/><path d="M3 18c1.5-1.3 3-1.3 4.5 0s3 1.3 4.5 0 3-1.3 4.5 0 3 1.3 4.5 0"/>',
  dab: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2.3"/><path d="M12 3.5v4"/>',
  trawa: '<path d="M6 21c-.2-5.5.8-10.5 3-15.5"/><path d="M12 21V3.5"/><path d="M18 21c.2-5.5-.8-10.5-3-15.5"/><path d="M9 21c0-3 .5-6 1.5-8.5"/>',
  flaszka: '<path d="M10 2.5h4v3.2l2.2 3V20a1.5 1.5 0 0 1-1.5 1.5H9.3A1.5 1.5 0 0 1 7.8 20V8.7L10 5.7z"/><path d="M7.8 12.5h8.4v5H7.8z"/>',
  pipeta: '<path d="M14.5 3.5l6 6-2 2-6-6z"/><path d="M12.5 7.5l-7 7v3.5H9l7-7"/><path d="M5.5 18l-2 3 3-2"/>',
  kawa: '<ellipse cx="12" cy="12" rx="5.5" ry="8" transform="rotate(35 12 12)"/><path d="M8.5 6.5c3.4 2.6.2 8.4 7 11"/>',
  kokos: '<circle cx="12" cy="13" r="8"/><circle cx="9.5" cy="9" r=".9" fill="currentColor"/><circle cx="12.5" cy="7.8" r=".9" fill="currentColor"/><circle cx="11" cy="11" r=".9" fill="currentColor"/>',
  karmel: '<circle cx="12" cy="12" r="4.2"/><path d="M7.8 12L3.5 8.8v6.4z"/><path d="M16.2 12l4.3-3.2v6.4z"/><path d="M10.4 10.4l3.2 3.2"/>',
  zamrazarka: '<path d="M12 3v18"/><path d="M4.2 7.5l15.6 9"/><path d="M4.2 16.5l15.6-9"/><path d="M9.5 4.5L12 7l2.5-2.5"/><path d="M9.5 19.5L12 17l2.5 2.5"/>',
  lodowka: '<rect x="6" y="2.5" width="12" height="19" rx="1.5"/><path d="M6 10h12"/><path d="M9 5.5v2"/><path d="M9 13v3"/>',
  lod: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4"/><path d="M12 12v8"/>',
  shaker: '<path d="M7.5 9h9l-1.2 12H8.7z"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2"/><path d="M11 2.5h2"/>',
  kieliszek: '<path d="M6.5 3.5h11L16 20.5H8z"/><path d="M7.2 10h9.6"/>',
  filizanka: '<path d="M4 10h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11.5h1.5a2.2 2.2 0 0 1 0 4.4H16"/><path d="M8 3.5c0 1.6 1.5 1.9 1.5 3.5"/><path d="M12 3.5c0 1.6 1.5 1.9 1.5 3.5"/>',
  kubek: '<path d="M5 6h11v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M9 6V3.5"/>',
  deser: '<path d="M8 11.5l4 10 4-10"/><path d="M6.8 11.5a5.2 5.2 0 0 1 10.4 0z"/><path d="M12 3.2v3"/>',
  termometr: '<path d="M12 3a2 2 0 0 0-2 2v9.6a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2z"/><path d="M12 9v8"/>',
  talerz: '<path d="M6.5 3v7.5a2 2 0 0 0 4 0V3"/><path d="M8.5 10.5V21"/><path d="M17 3c-2.2 2-2.2 7 0 9v9"/>',
  kolumna: '<path d="M9 4h6"/><path d="M8 2.5h8v1.5H8z"/><path d="M10.5 4v11"/><path d="M13.5 4v11"/><path d="M6 15h12v6H6z"/><path d="M13.5 8h3v3"/>'
};
window.IKONA_NAZWA = {
  zamrazarka: "Z zamrażarki", lodowka: "Z lodówki", lod: "Z lodem", shaker: "W drinkach",
  kieliszek: "Solo, w kieliszku", filizanka: "Do kawy", kubek: "Do herbaty", deser: "Do deseru"
};
window.ikona = (n, rozmiar = 24) =>
  `<svg class="ikona" viewBox="0 0 24 24" width="${rozmiar}" height="${rozmiar}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(window.IKONY[n] || "")}</svg>`;

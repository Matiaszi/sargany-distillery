// Cennik Sargany Distillery — tu zmieniasz ceny, opisy i dostępność.
// ksztalt: flaszka | kwadrat | rum | liker | apteka
// plyn: kolor trunku, krycie: 0–1 (1 = mętny/kremowy), poziom: 0–1 nalania
// zamkniecie: korek | wosk | kapsel, woskKolor gdy wosk
window.SARGANY = {
  // Numer do zamówień (SMS). Zostaw pusty, to będzie tylko „Kopiuj zamówienie”.
  telefon: "",
  grupy: [
    { id: "czyste", nazwa: "Czyste i leżakowane", opis: "Destylat w wersji saute albo podrasowany dębem i ziołem." },
    { id: "owocowe", nazwa: "Owocowe i ziołowe", opis: "Nalewkowy charakter, 40% mocy. Najlepsze lekko schłodzone." },
    { id: "deserowe", nazwa: "Deserowe", opis: "Do kawy, do lodów, do ciasta. Kremowe trzymaj w lodówce." }
  ],
  trunki: [
    {
      id: "bimber", nazwa: "Bimber", podpis: "Czysty", grupa: "czyste",
      opis: "Czysty destylat bez żadnych dodatków. Punkt wyjścia dla wszystkiego innego na tej półce.",
      baza: "Destylat własny",
      moc: 40, ceny: { "0,5 L": 20, "1 L": 40 },
      uwagi: ["Moc do ustalenia"], uwagaDluga: "Standardowo 40%. Mocniejszy na życzenie — dogadamy się.",
      ksztalt: "flaszka", plyn: "#F1F7F7", krycie: 0.5, poziom: 0.86, zamkniecie: "wosk", woskKolor: "#1E2747"
    },
    {
      id: "whisky", nazwa: "Whisky", podpis: "Na dębie", grupa: "czyste",
      opis: "Destylat leżakowany na amerykańskich płatkach dębowych, średnio opiekanych. Wanilia, karmel, trochę dymu.",
      baza: "Płatki dębu amerykańskiego, średnie opiekanie",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 },
      ksztalt: "kwadrat", plyn: "#B5651D", krycie: 0.72, poziom: 0.82, zamkniecie: "wosk", woskKolor: "#2A1A12"
    },
    {
      id: "rum", nazwa: "Rum", podpis: "Light style", grupa: "czyste",
      opis: "W stylu jasnego rumu — trzcina, wanilia, lekka słodycz. Pod colę, do mojito, do daiquiri.",
      baza: "Aromat Strands Light Rum",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 },
      ksztalt: "rum", plyn: "#D79A3D", krycie: 0.6, poziom: 0.8, zamkniecie: "korek"
    },
    {
      id: "zubrowka", nazwa: "Żubrówka", podpis: "Trawa turówka", grupa: "czyste",
      opis: "Na trawie żubrowej: delikatnie ziołowa, z nutą siana i wanilii. Z sokiem jabłkowym robi się szarlotka.",
      baza: "Trawa żubrowa (turówka)",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 },
      ksztalt: "flaszka", plyn: "#D9DE8E", krycie: 0.45, poziom: 0.86, zamkniecie: "korek", zdzblo: true
    },
    {
      id: "jager", nazwa: "Jager", podpis: "Waldmeister", grupa: "owocowe",
      opis: "Ziołowy, słodko-gorzki, na marzance wonnej. Podawać prosto z zamrażarki, najlepiej w kieliszku z grubym dnem.",
      baza: "Koncentrat Profimator Waldmeister",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 },
      ksztalt: "apteka", plyn: "#4A1E12", krycie: 0.9, poziom: 0.84, zamkniecie: "kapsel", szklo: "#2F5D4A"
    },
    {
      id: "sliwka", nazwa: "Śliwka", podpis: "Ognista", grupa: "owocowe",
      opis: "Śliwowica w ognistym stylu: suszona śliwka, migdał, ciepło, które schodzi aż do żołądka.",
      baza: "Esencja Alcoblend Ognista Śliwowica",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 },
      ksztalt: "flaszka", plyn: "#C77B2A", krycie: 0.68, poziom: 0.85, zamkniecie: "korek"
    },
    {
      id: "pigwa", nazwa: "Pigwa", podpis: "Pigwówka", grupa: "owocowe",
      opis: "Kwaskowo-słodka, cytrusowa, mocno owocowa. Na jesienne wieczory i na pierwsze kichnięcie.",
      baza: "Koncentrat Profimator Pigwa",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 },
      ksztalt: "liker", plyn: "#E4B42F", krycie: 0.7, poziom: 0.8, zamkniecie: "korek"
    },
    {
      id: "wisniowka", nazwa: "Wiśniówka", podpis: "Wiśnia", grupa: "owocowe",
      opis: "Głęboka, ciemna wiśnia: słodka na wejściu, kwaśna na końcu. Klasyk babcinej szafki.",
      baza: "Koncentrat Profimator Wiśnia",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 },
      ksztalt: "flaszka", plyn: "#7A0E1C", krycie: 0.88, poziom: 0.84, zamkniecie: "wosk", woskKolor: "#B3261E"
    },
    {
      id: "kawa", nazwa: "Kawa", podpis: "Kawówka", grupa: "deserowe",
      opis: "Mocna, palona kawa i słodycz. Do deseru, do lodów waniliowych albo zamiast espresso po obiedzie.",
      baza: "Koncentrat Profimator Kawówka",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 },
      ksztalt: "rum", plyn: "#2E170C", krycie: 0.95, poziom: 0.82, zamkniecie: "korek"
    },
    {
      id: "kokos", nazwa: "Kokos", podpis: "Kremowy", grupa: "deserowe",
      opis: "Gęsty, mleczny kokos. Smakuje jak batonik, tylko bardziej. Z lodem albo do kawy.",
      baza: "Koncentrat Profimator Kokos",
      moc: 30, ceny: { "0,5 L": 25, "1 L": 50 },
      uwagi: ["Wstrząśnij", "Do lodówki"], uwagaDluga: "Wstrząśnij przed nalaniem i trzymaj w lodówce.",
      ksztalt: "liker", plyn: "#F3EEE2", krycie: 1, poziom: 0.82, zamkniecie: "korek"
    },
    {
      id: "karmel", nazwa: "Słony karmel", podpis: "Kremowy", grupa: "deserowe",
      opis: "Toffi, masło i szczypta soli. Deser w kieliszku — najlepszy do kawy i na lody.",
      baza: "Koncentrat Profimator Słony Karmel",
      moc: 30, ceny: { "0,5 L": 25, "1 L": 50 },
      uwagi: ["Wstrząśnij", "Do lodówki"], uwagaDluga: "Wstrząśnij przed nalaniem i trzymaj w lodówce.",
      ksztalt: "liker", plyn: "#B9773A", krycie: 1, poziom: 0.82, zamkniecie: "korek"
    }
  ]
};

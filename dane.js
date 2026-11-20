// Kolekcja Sargany — tu zmieniasz ceny, opisy i kolejność.
// tlo: kolor tła zdjęcia (pasuje do zdjęcia produktu), akcent: kolor „pigułki” w manifeście
window.SARGANY = {
  grupy: [
    { id: "czyste", nazwa: "Czyste i leżakowane" },
    { id: "owocowe", nazwa: "Owocowe i ziołowe" },
    { id: "deserowe", nazwa: "Deserowe" }
  ],
  trunki: [
    {
      id: "bimber", nazwa: "Bimber", nuta: "Czysty destylat, bez dodatków", grupa: "czyste",
      opis: "Punkt wyjścia dla wszystkiego innego w tej piwnicy. Czysty, gładki destylat bez żadnych dodatków — tak, jak wychodzi z chłodnicy.",
      baza: "Destylat własny", podawanie: "Mocno schłodzony, w kieliszku z grubym dnem.",
      moc: 40, mocUwaga: "Mocniejszy na życzenie — do ustalenia.",
      ceny: { "0,5 L": 20, "1 L": 40 }, tlo: "#9FB0B9", tekst: "#1C1814"
    },
    {
      id: "whisky", nazwa: "Whisky", nuta: "Wanilia, karmel, opiekany dąb", grupa: "czyste",
      opis: "Destylat leżakowany na płatkach amerykańskiego dębu, średnio opiekanych. Dąb oddaje wanilię, karmel i lekki dym.",
      baza: "Płatki dębu amerykańskiego, średnie opiekanie", podawanie: "Z jedną dużą kostką lodu.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#704226", tekst: "#F3ECE1"
    },
    {
      id: "rum", nazwa: "Rum", nuta: "Trzcina, wanilia, lekka słodycz", grupa: "czyste",
      opis: "W stylu jasnego rumu: trzcina cukrowa, wanilia i delikatna słodycz. Do coli, do mojito, do daiquiri.",
      baza: "Aromat Strands Light Rum", podawanie: "Z limonką i colą albo w mojito.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#A07D5A", tekst: "#F3ECE1"
    },
    {
      id: "zubrowka", nazwa: "Żubrówka", nuta: "Trawa żubrowa, siano, wanilia", grupa: "czyste",
      opis: "Nastawiana na trawie żubrowej. Delikatnie ziołowa, z nutą siana i wanilii. Z sokiem jabłkowym robi się z niej szarlotka.",
      baza: "Trawa żubrowa (turówka)", podawanie: "Pół na pół z mętnym sokiem jabłkowym.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#6D7B5E", tekst: "#F3ECE1"
    },
    {
      id: "jager", nazwa: "Jager", nuta: "Marzanka wonna, zioła, gorycz", grupa: "owocowe",
      opis: "Ziołowy, słodko-gorzki likier na marzance wonnej. Najlepszy prosto z zamrażarki.",
      baza: "Koncentrat Profimator Waldmeister", podawanie: "Z zamrażarki, w zmrożonym kieliszku.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#233D30", tekst: "#F3ECE1"
    },
    {
      id: "sliwka", nazwa: "Śliwka", nuta: "Suszona śliwka, migdał, ciepło", grupa: "owocowe",
      opis: "Śliwowica w ognistym stylu: suszona śliwka, migdał i ciepło, które schodzi aż do żołądka.",
      baza: "Esencja Alcoblend Ognista Śliwowica", podawanie: "Lekko schłodzona, do mięs i serów.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#614050", tekst: "#F3ECE1"
    },
    {
      id: "pigwa", nazwa: "Pigwa", nuta: "Pigwa, cytrus, kwaskowa słodycz", grupa: "owocowe",
      opis: "Kwaskowo-słodka, cytrusowa, mocno owocowa pigwówka. Na jesienne wieczory i na pierwsze kichnięcie.",
      baza: "Koncentrat Profimator Pigwa", podawanie: "W temperaturze pokojowej, do herbaty.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#AE7326", tekst: "#F3ECE1"
    },
    {
      id: "wisniowka", nazwa: "Wiśniówka", nuta: "Ciemna wiśnia, pestka, słodycz", grupa: "owocowe",
      opis: "Głęboka, ciemna wiśnia: słodka na wejściu, kwaśna na końcu. Klasyk z babcinej szafki.",
      baza: "Koncentrat Profimator Wiśnia", podawanie: "Do deseru albo do szarlotki.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#5F1018", tekst: "#F3ECE1"
    },
    {
      id: "kawa", nazwa: "Kawa", nuta: "Palona kawa, kakao, słodycz", grupa: "deserowe",
      opis: "Mocna, palona kawa i słodycz. Do deseru, do lodów waniliowych albo zamiast espresso po obiedzie.",
      baza: "Koncentrat Profimator Kawówka", podawanie: "Na lody waniliowe albo do espresso.",
      moc: 40, ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#43291C", tekst: "#F3ECE1"
    },
    {
      id: "kokos", nazwa: "Kokos", nuta: "Kremowy kokos, mleko, wanilia", grupa: "deserowe",
      opis: "Gęsty, mleczny kokos — smakuje jak batonik, tylko lepiej. Z lodem albo do kawy.",
      baza: "Koncentrat Profimator Kokos", podawanie: "Z lodem albo do kawy.",
      moc: 30, uwagi: ["Wstrząśnij przed nalaniem", "Trzymaj w lodówce"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#EBD1AD", tekst: "#1C1814"
    },
    {
      id: "karmel", nazwa: "Słony karmel", nuta: "Toffi, masło, szczypta soli", grupa: "deserowe",
      opis: "Toffi, masło i szczypta soli. Deser w kieliszku, najlepszy do kawy i na lody.",
      baza: "Koncentrat Profimator Słony Karmel", podawanie: "Do kawy, na lody, solo z lodem.",
      moc: 30, uwagi: ["Wstrząśnij przed nalaniem", "Trzymaj w lodówce"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#D99C60", tekst: "#1C1814"
    }
  ]
};

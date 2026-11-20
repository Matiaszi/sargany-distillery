// Kolekcja Sargany — tu zmieniasz ceny, opisy, składniki i przepisy.
// profil: 0–5 (słodycz, moc w smaku, owoc, zioła i przyprawy)
// sklad: ik = nazwa ikonki z ikony.js; jak: ikonki „jak pić”
// tlo: kolor tła zdjęcia, tekst: kolor napisu na pigułce w manifeście
window.SARGANY = {
  sprzet: "kolumna D-S V3 TC od DAB-SPAW z automatem Dest-Master",
  grupy: [
    { id: "czyste", nazwa: "Czyste i leżakowane" },
    { id: "owocowe", nazwa: "Owocowe i ziołowe" },
    { id: "deserowe", nazwa: "Deserowe" }
  ],
  trunki: [
    {
      id: "bimber", nazwa: "Bimber", nuta: "Czysty destylat, bez dodatków", grupa: "czyste",
      opis: "Punkt wyjścia dla wszystkiego innego w tej piwnicy. Czysty, gładki destylat bez żadnych dodatków — tak, jak schodzi z kolumny.",
      moc: 40, mocUwaga: "Mocniejszy na życzenie — do ustalenia.",
      profil: { slodycz: 0, moc: 5, owoc: 0, ziola: 0 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Samo serce destylacji, bez przedgonu i pogonu" },
        { ik: "woda", nazwa: "Woda", opis: "Do zejścia z mocą do 40% albo tyle, ile zamówisz" }
      ],
      proces: ["Nastaw fermentuje w gąsiorach", "Destylacja na kolumnie z automatem — odcięty przedgon i pogon", "Rozcieńczenie wodą do zadanej mocy", "Odpoczynek, rozlew, nakrętka i etykieta"],
      temp: "Mocno schłodzony, 2–4°C", jak: ["zamrazarka", "kieliszek"],
      przepis: { nazwa: "Klasyk z piwnicy", tekst: "Zmrożony kieliszek, do tego kiszony ogórek albo śledź w oleju. Nic więcej nie trzeba." },
      pasuje: ["Ogórki kiszone", "Śledź", "Smalec ze skwarkami"],
      ceny: { "0,5 L": 20, "1 L": 40 }, tlo: "#9FB0B9", tekst: "#1C1814"
    },
    {
      id: "whisky", nazwa: "Whisky", nuta: "Wanilia, karmel, opiekany dąb", grupa: "czyste",
      opis: "Destylat nastawiony na płatkach amerykańskiego dębu, średnio opiekanych. Dąb oddaje kolor, wanilię, karmel i odrobinę dymu.",
      moc: 40,
      profil: { slodycz: 2, moc: 4, owoc: 1, ziola: 3 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "dab", nazwa: "Płatki dębu amerykańskiego", opis: "Średnio opiekane — wanilia, karmel, dym" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat trafia na opiekane płatki dębowe", "Maceracja, aż nabierze koloru i wanilii", "Przecedzenie i rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Pokojowa, 16–18°C", jak: ["lod", "kieliszek", "shaker"],
      przepis: { nazwa: "Whisky Sour", tekst: "50 ml Whisky, 25 ml soku z cytryny, 15 ml syropu cukrowego, lód. Mocno wstrząśnij i przecedź do szklanki z lodem." },
      pasuje: ["Gorzka czekolada", "Orzechy włoskie", "Grillowane mięsa"],
      ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#704226", tekst: "#F3ECE1"
    },
    {
      id: "rum", nazwa: "Rum", nuta: "Trzcina, wanilia, lekka słodycz", grupa: "czyste",
      opis: "W stylu jasnego rumu: trzcina cukrowa, wanilia i delikatna słodycz. Stworzony do drinków.",
      moc: 40,
      profil: { slodycz: 3, moc: 3, owoc: 2, ziola: 1 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "pipeta", nazwa: "Aromat Strands Light Rum", opis: "Trzcina, wanilia, lekka melasa" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat łączony z aromatem rumowym", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Schłodzony albo z lodem", jak: ["shaker", "lod"],
      przepis: { nazwa: "Mojito", tekst: "40 ml Rumu, pół limonki w ćwiartkach, 2 łyżeczki cukru, garść mięty. Ugnieć, zasyp kruszonym lodem i dopełnij wodą gazowaną." },
      pasuje: ["Cola i limonka", "Ananas", "Lody waniliowe"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#A07D5A", tekst: "#F3ECE1"
    },
    {
      id: "zubrowka", nazwa: "Żubrówka", nuta: "Trawa żubrowa, siano, wanilia", grupa: "czyste",
      opis: "Nastawiana na trawie żubrowej. Delikatnie ziołowa, z nutą siana i wanilii. Z sokiem jabłkowym robi się z niej szarlotka.",
      moc: 40,
      profil: { slodycz: 1, moc: 4, owoc: 1, ziola: 4 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "trawa", nazwa: "Trawa żubrowa (turówka)", opis: "Siano, wanilia, kumaryna" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat nastawiony na trawie żubrowej", "Maceracja, aż oddaje kolor i aromat", "Przecedzenie i rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Schłodzona, 4–6°C", jak: ["shaker", "zamrazarka"],
      przepis: { nazwa: "Szarlotka", tekst: "40 ml Żubrówki, 120 ml mętnego soku jabłkowego, dużo lodu i szczypta cynamonu na wierzch." },
      pasuje: ["Szarlotka", "Sery dojrzewające", "Pieczone jabłka"],
      ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#6D7B5E", tekst: "#F3ECE1"
    },
    {
      id: "jager", nazwa: "Jager", nuta: "Marzanka wonna, zioła, gorycz", grupa: "owocowe",
      opis: "Ziołowy, słodko-gorzki likier na marzance wonnej. Najlepszy prosto z zamrażarki, gęstnieje i robi się jak syrop.",
      moc: 40,
      profil: { slodycz: 3, moc: 3, owoc: 1, ziola: 5 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "flaszka", nazwa: "Koncentrat Profimator Waldmeister", opis: "Marzanka wonna, zioła, słodycz" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat łączony z ziołowym koncentratem", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Z zamrażarki, −18°C", jak: ["zamrazarka", "kieliszek"],
      przepis: { nazwa: "Jager Bomb", tekst: "Kieliszek zmrożonego Jagera wrzucony do szklanki z energetykiem. Pić od razu." },
      pasuje: ["Energetyk", "Solo po obiedzie", "Zimne przekąski"],
      ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#233D30", tekst: "#F3ECE1"
    },
    {
      id: "sliwka", nazwa: "Śliwka", nuta: "Suszona śliwka, migdał, ciepło", grupa: "owocowe",
      opis: "Śliwowica w ognistym stylu: suszona śliwka, migdał i ciepło, które schodzi aż do żołądka.",
      moc: 40,
      profil: { slodycz: 2, moc: 4, owoc: 5, ziola: 1 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "pipeta", nazwa: "Esencja Alcoblend Ognista Śliwowica", opis: "Suszona śliwka, migdał, wędzone nuty" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat łączony ze śliwkową esencją", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Lekko schłodzona, 10–12°C", jak: ["kieliszek", "kubek"],
      przepis: { nazwa: "Herbata po góralsku", tekst: "30 ml Śliwki do kubka mocnej czarnej herbaty, goździk i plaster pomarańczy." },
      pasuje: ["Pieczeń i pasztet", "Sery pleśniowe", "Suszone śliwki w czekoladzie"],
      ceny: { "0,5 L": 25, "1 L": 45 }, tlo: "#614050", tekst: "#F3ECE1"
    },
    {
      id: "pigwa", nazwa: "Pigwa", nuta: "Pigwa, cytrus, kwaskowa słodycz", grupa: "owocowe",
      opis: "Kwaskowo-słodka, cytrusowa, mocno owocowa pigwówka. Na jesienne wieczory i na pierwsze kichnięcie.",
      moc: 40,
      profil: { slodycz: 3, moc: 3, owoc: 5, ziola: 0 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "flaszka", nazwa: "Koncentrat Profimator Pigwa", opis: "Pigwa, cytrus, słodycz" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat łączony z pigwowym koncentratem", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Pokojowa, 18–20°C", jak: ["kubek", "kieliszek"],
      przepis: { nazwa: "Herbata z pigwą", tekst: "30 ml Pigwy do gorącej herbaty, plaster cytryny i łyżeczka miodu. Na przeziębienie i na wieczór." },
      pasuje: ["Herbata", "Piernik", "Sery kozie"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#AE7326", tekst: "#F3ECE1"
    },
    {
      id: "wisniowka", nazwa: "Wiśniówka", nuta: "Ciemna wiśnia, pestka, słodycz", grupa: "owocowe",
      opis: "Głęboka, ciemna wiśnia: słodka na wejściu, kwaśna na końcu. Klasyk z babcinej szafki.",
      moc: 40,
      profil: { slodycz: 4, moc: 3, owoc: 5, ziola: 0 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "flaszka", nazwa: "Koncentrat Profimator Wiśnia", opis: "Ciemna wiśnia, pestka, słodycz" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat łączony z wiśniowym koncentratem", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Lekko schłodzona, 10–14°C", jak: ["kieliszek", "lod", "deser"],
      przepis: { nazwa: "Wiśniowy tonik", tekst: "40 ml Wiśniówki, 100 ml toniku, dużo lodu i plaster limonki." },
      pasuje: ["Sernik", "Gorzka czekolada", "Kaczka"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#5F1018", tekst: "#F3ECE1"
    },
    {
      id: "kawa", nazwa: "Kawa", nuta: "Palona kawa, kakao, słodycz", grupa: "deserowe",
      opis: "Mocna, palona kawa i słodycz. Do deseru, do lodów waniliowych albo zamiast espresso po obiedzie.",
      moc: 40,
      profil: { slodycz: 4, moc: 3, owoc: 0, ziola: 2 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "kawa", nazwa: "Koncentrat Profimator Kawówka", opis: "Palona kawa, kakao, słodycz" },
        { ik: "woda", nazwa: "Woda", opis: "Do 40%" }
      ],
      proces: ["Destylat łączony z kawowym koncentratem", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 40%", "Rozlew, nakrętka i etykieta"],
      temp: "Schłodzona, 6–8°C", jak: ["shaker", "deser", "filizanka"],
      przepis: { nazwa: "Espresso Martini", tekst: "40 ml Kawy, 30 ml świeżego espresso, dużo lodu. Wstrząśnij bardzo mocno, aż zrobi się pianka, i przecedź do kieliszka." },
      pasuje: ["Tiramisu", "Lody waniliowe", "Brownie"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#43291C", tekst: "#F3ECE1"
    },
    {
      id: "kokos", nazwa: "Kokos", nuta: "Kremowy kokos, mleko, wanilia", grupa: "deserowe",
      opis: "Gęsty, mleczny kokos — smakuje jak batonik, tylko lepiej. Z lodem albo do kawy.",
      moc: 30, uwagi: ["Wstrząśnij przed nalaniem", "Trzymaj w lodówce"],
      profil: { slodycz: 5, moc: 2, owoc: 2, ziola: 0 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "kokos", nazwa: "Koncentrat Profimator Kokos", opis: "Kremowy kokos, wanilia" },
        { ik: "woda", nazwa: "Woda", opis: "Do 30%" }
      ],
      proces: ["Destylat łączony z kokosowym koncentratem", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 30%", "Rozlew, nakrętka i etykieta — potem do lodówki"],
      temp: "Z lodówki, 4–6°C", jak: ["lodowka", "lod", "filizanka"],
      przepis: { nazwa: "Kokosowa mrożona kawa", tekst: "40 ml Kokosa, 60 ml zimnego espresso, szklanka lodu. Zamieszaj i gotowe." },
      pasuje: ["Ananas i mango", "Lody", "Kawa"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#EBD1AD", tekst: "#1C1814"
    },
    {
      id: "karmel", nazwa: "Słony karmel", nuta: "Toffi, masło, szczypta soli", grupa: "deserowe",
      opis: "Toffi, masło i szczypta soli. Deser w kieliszku, najlepszy do kawy i na lody.",
      moc: 30, uwagi: ["Wstrząśnij przed nalaniem", "Trzymaj w lodówce"],
      profil: { slodycz: 5, moc: 2, owoc: 0, ziola: 1 },
      sklad: [
        { ik: "kropla", nazwa: "Destylat Sargany", opis: "Czysta baza z kolumny" },
        { ik: "karmel", nazwa: "Koncentrat Profimator Słony Karmel", opis: "Toffi, masło, sól" },
        { ik: "woda", nazwa: "Woda", opis: "Do 30%" }
      ],
      proces: ["Destylat łączony z karmelowym koncentratem", "Odpoczynek, aż smaki się przegryzą", "Rozcieńczenie do 30%", "Rozlew, nakrętka i etykieta — potem do lodówki"],
      temp: "Z lodówki, 4–6°C", jak: ["lodowka", "deser", "filizanka"],
      przepis: { nazwa: "Affogato", tekst: "Gałka lodów waniliowych, zalana gorącym espresso i 30 ml Słonego karmelu." },
      pasuje: ["Lody waniliowe", "Szarlotka", "Kawa"],
      ceny: { "0,5 L": 25, "1 L": 50 }, tlo: "#D99C60", tekst: "#1C1814"
    }
  ]
};

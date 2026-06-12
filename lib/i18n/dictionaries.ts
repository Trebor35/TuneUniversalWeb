import "server-only";
import { defaultLocale, getContentLocale, isLocale, localeNames, type BaseLocale, type Locale } from "./locales";

export type ToolDictionary = {
  title: string;
  description: string;
  howItWorks: string[];
  faq: { question: string; answer: string }[];
};

export type Dictionary = {
  localeName: string;
  meta: { title: string; description: string };
  nav: { home: string; tools: string; language: string };
  hero: { eyebrow: string; title: string; description: string; cta: string };
  home: { toolHeading: string; faqHeading: string; howHeading: string };
  tool: {
    detectedNote: string;
    frequency: string;
    cents: string;
    flat: string;
    sharp: string;
    inTune: string;
    requestMic: string;
    stopMic: string;
    micError: string;
    micPermissionDenied?: string;
    micNotFound?: string;
    micNotSupported?: string;
    micNeedsSecureContext?: string;
    bpm: string;
    start: string;
    stop: string;
    reset: string;
    tap: string;
    history: string;
    meter: string;
    inputChords: string;
    semitones: string;
    outputChords: string;
  };
  tools: Record<string, ToolDictionary>;
  common: { howItWorks: string; faq: string; otherTools: string };
  cookie: {
    text: string;
    privacy: string;
    accept: string;
    decline: string;
    customize: string;
    savePrefs: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    advertising: string;
    advertisingDesc: string;
  };
};

type DictionaryOverride = Partial<Omit<Dictionary, "meta" | "nav" | "hero" | "home" | "tool" | "common" | "tools">> & {
  meta?: Partial<Dictionary["meta"]>;
  nav?: Partial<Dictionary["nav"]>;
  hero?: Partial<Dictionary["hero"]>;
  home?: Partial<Dictionary["home"]>;
  tool?: Partial<Dictionary["tool"]>;
  common?: Partial<Dictionary["common"]>;
  tools?: Partial<Record<string, Partial<ToolDictionary>>>;
};

const loaders: Record<BaseLocale, () => Promise<Dictionary>> = {
  it: () => import("@/dictionaries/it.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  de: () => import("@/dictionaries/de.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  pt: () => import("@/dictionaries/pt.json").then((m) => m.default),
  zh: () => import("@/dictionaries/zh.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
  ja: () => import("@/dictionaries/ja.json").then((m) => m.default),
  ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
  ar: () => import("@/dictionaries/ar.json").then((m) => m.default)
};

const localeOverrides: Partial<Record<Locale, DictionaryOverride>> = {
  nl: {
    meta: {
      title: "TuneUniversal - gratis muziektools",
      description: "Stem instrumenten, oefen ritme en transponeer akkoorden met gratis online muziektools."
    },
    nav: { home: "Home", tools: "Tools", language: "Taal" },
    hero: {
      eyebrow: "Gratis muziektools",
      title: "TuneUniversal",
      description: "Een snel platform voor stemmen, ritmeoefeningen en akkoordwerk op elk apparaat.",
      cta: "Verken tools"
    },
    home: {
      toolHeading: "Muziektools",
      faqHeading: "Veelgestelde vragen",
      howHeading: "Hoe TuneUniversal werkt"
    },
    tool: {
      detectedNote: "Gedetecteerde noot",
      frequency: "Frequentie",
      cents: "Cents",
      flat: "Te laag",
      sharp: "Te hoog",
      inTune: "In tune",
      requestMic: "Microfoon inschakelen",
      stopMic: "Microfoon stoppen",
      micError: "Microfoontoegang mislukt. Controleer de browsermachtigingen en probeer opnieuw.",
      bpm: "BPM",
      start: "Start",
      stop: "Stop",
      reset: "Reset",
      tap: "Tik",
      history: "Recente tikken",
      meter: "Maatsoort",
      inputChords: "Akkoordinvoer",
      semitones: "Halve tonen",
      outputChords: "Getransponeerd resultaat"
    },
    common: { howItWorks: "Hoe het werkt", faq: "Veelgestelde vragen", otherTools: "Andere tools" },
    cookie: {
      text: "Wij gebruiken cookies om uw ervaring te verbeteren, advertenties te tonen en het verkeer te analyseren.",
      privacy: "Privacybeleid",
      accept: "Alles accepteren",
      decline: "Alles weigeren",
      customize: "Voorkeuren aanpassen",
      savePrefs: "Voorkeuren opslaan",
      necessary: "Noodzakelijk",
      necessaryDesc: "Vereist voor de basisfunctionaliteit van de site.",
      analytics: "Analyse",
      analyticsDesc: "Helpt ons het gebruik van de site te begrijpen.",
      advertising: "Advertenties",
      advertisingDesc: "Ondersteunt gratis toegang via advertentie-inkomsten."
    },
    tools: {
      "guitar-tuner": {
        title: "Online gitaartuner", description: "Gebruik de microfoon om snel gitaar te stemmen, met ondersteuning voor veelgebruikte en alternatieve stemmingen.",
        howItWorks: ["Klik op 'Microfoon inschakelen' en geef de browser toegang.", "Kies een stemming in het menu.", "Toets één snaar aan en laat hem naklinken.", "Kijk naar de naald: links = te laag, rechts = te hoog, midden = perfect.", "Draai de stemsleutel langzaam totdat de naald centreert.", "Herhaal voor alle snaren."],
        faq: [{ question: "Hoe schakel ik de microfoon in?", answer: "Klik op 'Microfoon inschakelen' en klik op Toestaan. Als het mislukt, herstel dan de microfoonrechten in je browserinstellingen voor deze pagina." }, { question: "Kan ik via mijn smartphone stemmen?", answer: "Ja. Open de tuner in je mobiele browser. Op iOS werkt Safari 14.3+; op Android werken Chrome en Firefox." }, { question: "Hoe vaak moet ik mijn gitaar stemmen?", answer: "Elke keer dat je speelt. Temperatuur, vochtigheid en snarenspanning veroorzaken altijd enige verstemming." }, { question: "Waarom schommelt de gedetecteerde noot?", answer: "Pitchdetectie schommelt terwijl de snaar trilt. Toets krachtig aan en vermijd achtergrondgeluiden." }, { question: "Heb ik een app nodig?", answer: "Nee. TuneUniversal werkt in de browser zonder installatie op Windows, macOS, iOS en Android." }]
      },
      "bass-tuner": {
        title: "Online bastuner", description: "Stem basgitaar snel met microfoon, met standaard- en alternatieve stemmingen.",
        howItWorks: ["Klik op 'Microfoon inschakelen'.", "Selecteer een basstemming in het menu.", "Toets één snaar aan.", "Kijk naar noot en naaldpositie.", "Pas de stemsleutel aan totdat de naald centreert.", "Herhaal voor alle vier snaren."],
        faq: [{ question: "Werkt de tuner voor basgitaar?", answer: "Ja. De tuner detecteert basfrequenties net zo goed als gitaarfrequenties. Houd de microfoon dicht bij de bas." }, { question: "Wat is de standaardstemming van basgitaar?", answer: "De standaardstemming is E1-A1-D2-G2, van laagste naar hoogste snaar." }, { question: "Zijn er alternatieve stemmingen beschikbaar?", answer: "Ja. Selecteer presets zoals Drop D of D Standard in het menu." }, { question: "Waarom is detectie langzamer voor lage tonen?", answer: "Lage frequenties hebben langere golflengtes. Laat de snaar langer naklinken voor stabiliteit." }, { question: "Kan ik een elektrische bas stemmen?", answer: "Ja, via microfoon of door je bas op je audiosysteem aan te sluiten." }]
      },
      "ukulele-tuner": {
        title: "Online ukeleletuner", description: "Stem ukelele met microfoon, met ondersteuning voor GCEA en alternatieve stemmingen.",
        howItWorks: ["Klik op 'Microfoon inschakelen'.", "Selecteer een ukelele-stemming (standaard GCEA).", "Toets de G-snaar aan.", "Pas de stemsleutel aan.", "Herhaal voor C, E en A.", "Controleer alle snaren opnieuw aan het einde."],
        faq: [{ question: "Wat is de standaardstemming van ukelele?", answer: "Sopraan/concert/tenor gebruikt G4-C4-E4-A4. Bariton gebruikt D3-G3-B3-E4." }, { question: "Welke stemmingen zijn beschikbaar?", answer: "De tuner ondersteunt GCEA, D-stemming, Low G en andere alternatieve stemmingen." }, { question: "Kan ik ukelele via de telefoon stemmen?", answer: "Ja. Open de tuner in je mobiele browser en geef microfoontoestemming." }, { question: "Waarom schommelt de detectie bij ukelele?", answer: "Nylonsnaren reageren trager. Toets krachtig aan en houd de microfoon dicht bij de ukelele." }, { question: "Werkt de tuner voor alle ukelematen?", answer: "Ja, voor sopraan, concert, tenor en bariton." }]
      },
      metronome: {
        title: "Online metronoom", description: "Oefen met instelbare BPM, onderverdelingen, accenten en veelgebruikte maatsoorten.",
        howItWorks: ["Stel het gewenste BPM in.", "Kies de maatsoort (4/4, 3/4, 6/8 enz.).", "Klik op Start.", "Speel mee op het klikgeluid.", "Pas het tempo aan indien nodig.", "Verhoog het BPM geleidelijk als je het stuk beheerst."],
        faq: [{ question: "Wat is een goed BPM om te beginnen?", answer: "Begin op 50-70% van je doeltempo. Verhoog pas als je drie keer achter elkaar foutloos speelt." }, { question: "Welke maatsoort moet ik kiezen?", answer: "4/4 voor pop en rock, 3/4 voor wals, 6/8 voor ballads." }, { question: "Kan ik het metronoom voor elk instrument gebruiken?", answer: "Ja. Metronomen zijn universeel voor gitaar, piano, drums, viool en zang." }, { question: "Wat zijn ritmische onderverdelingen?", answer: "Onderverdelingen splitsen elke tel in 2, 3 of 4 gelijke delen, waardoor je tempo intern preciezer voelt." }, { question: "Verschil metronoom en click track?", answer: "Een metronoom is zelfstandig. Een click track is de DAW-versie in studio of live. TuneUniversal werkt als zelfstandig metronoom." }]
      },
      "tap-bpm": {
        title: "Tap BPM-teller", description: "Tik mee met de muziek en bereken het gemiddelde BPM in seconden.",
        howItWorks: ["Open de Tap BPM-pagina.", "Zet de muziek aan.", "Tik op de knop of de spatiebalk op elke beat.", "Ga door voor minimaal 8-16 taps.", "Lees het gemiddelde BPM af.", "Druk op Reset om opnieuw te beginnen."],
        faq: [{ question: "Kan ik tappen terwijl muziek speelt?", answer: "Ja, dat is het hoofdgebruik. Speel de muziek af en tik mee op de beat." }, { question: "Hoeveel taps voor nauwkeurige meting?", answer: "Minimaal 4 taps; na 8-16 taps stabiliseert de lezing aanzienlijk." }, { question: "Verandert het BPM tijdens het luisteren?", answer: "Niet bij de meeste pop, rock en elektronische muziek. Live-opnames en jazz kunnen tempowisselingen hebben." }, { question: "Hoe gebruik ik het BPM met het metronoom?", answer: "Kopieer het BPM-getal, open het metronoom en voer het in. Oefen dan op dat tempo." }, { question: "Spatiebalk of klik?", answer: "De spatiebalk is vaak nauwkeuriger dan muisklikken. Op mobiel: tik op de grote knop." }]
      },
      "chord-transposer": {
        title: "Akkoordtransponeerder", description: "Transponeer akkoordprogressies omhoog of omlaag per halve toon.",
        howItWorks: ["Voer je akkoordenreeks in het tekstvak in.", "Kies het aantal halve tonen (+ omhoog, - omlaag).", "Bekijk de getransponeerde akkoorden direct.", "Kopieer het resultaat.", "Probeer verschillende transposities voor de beste toonsoort.", "Reset om opnieuw te beginnen."],
        faq: [{ question: "Welke akkoordsymbolen worden herkend?", answer: "Hoofdletters (C, D, E), mineurtekens (m, min), septiemen (7, maj7, m7), verminderd (dim) en verhoogd (aug)." }, { question: "Hoeveel halve tonen kan ik transponeren?", answer: "Van -11 tot +11 halve tonen, waarmee alle 12 toonsoorten bereikbaar zijn." }, { question: "Waarom transponeren?", answer: "Om een nummer aan je stem of instrument-stemming aan te passen, of samen te spelen met anderen in een andere toonsoort." }, { question: "Kan ik ook transponeren voor capo?", answer: "Ja. Bereken de capo-positie op basis van de doeltoonsoort en de getransponeerde akkoorden." }, { question: "Zijn er invoerbeperkingen?", answer: "Voer standaard akkoordsymbolen in, gescheiden door spaties. De meeste veelgebruikte jazz- en pop-akkoorden worden herkend." }]
      },
      "sound-level-meter": {
        title: "Online geluidsmeter", description: "Meet het geschatte geluidsniveau in dB met microfoon en instelbare gevoeligheid.",
        howItWorks: ["Klik op 'Microfoon inschakelen'.", "Kies een stabiele plek in de kamer.", "Kijk naar de actuele dB-waarde en de grafiek.", "Noteer minimum, maximum en gemiddeld niveau.", "Houd het apparaat stil voor nauwkeurigere metingen.", "Vergelijk waarden in verschillende omgevingen."],
        faq: [{ question: "Hoe nauwkeurig is de meter?", answer: "Het is een schatting gebaseerd op je microfoonsignaal. Niet gecertificeerd voor professionele toepassingen." }, { question: "Normaal niveau voor oefenen?", answer: "60-75 dB voor akoestisch instrument. Boven 85 dB gedurende lange tijd kan gehoorschade veroorzaken." }, { question: "Kan ik ruimtegeluid controleren?", answer: "Ja. Gebruik de gemiddelde dB om te beoordelen hoe rustig of luidruchtig een ruimte is." }, { question: "Werkt het zonder microfoon?", answer: "Nee. De meter heeft microfoontoestemming nodig om geluid te meten." }, { question: "Hoe lees ik de grafiek?", answer: "De grafiek toont de laatste 30 seconden dB-niveaus. Gebruik hem om pieken en stiltes te vergelijken." }]
      },
      "pitch-generator": {
        title: "Toongenerator", description: "Genereer een zuivere toon van 20 Hz tot 20000 Hz voor gehoortraining en audiotests.",
        howItWorks: ["Stel de gewenste frequentie in.", "Stel een veilig volume in.", "Klik op Start om de toon te starten.", "Gebruik de toon als referentienoot of voor training.", "Pas de frequentie aan om andere noten te verkennen.", "Klik op Stop als je klaar bent."],
        faq: [{ question: "Welk frequentiebereik is beschikbaar?", answer: "Van 20 Hz tot 20000 Hz, het volledige hoorbare bereik." }, { question: "Kan ik de toon gebruiken voor gehoortraining?", answer: "Ja. Stel een referentiefrequentie in en oefen het herkennen van noten of intervallen." }, { question: "Is het veilig bij hoge frequenties?", answer: "Begin altijd op laag volume, zeker boven 8000 Hz. Verhoog het volume geleidelijk." }, { question: "Kan ik de toon gebruiken voor luidsprekertest?", answer: "Ja. Sweep door frequenties om je luidsprekers of koptelefoon te testen." }, { question: "Hoe lang kan de toon spelen?", answer: "Onbeperkt. Stop hem altijd als je klaar bent om onnodige blootstelling te vermijden." }]
      }
    }
  },
  pl: {
    meta: {
      title: "TuneUniversal - darmowe narzędzia muzyczne",
      description: "Strajkuj instrumenty, ćwicz rytm i transponuj akordy za pomocą darmowych narzędzi muzycznych online."
    },
    nav: { home: "Strona główna", tools: "Narzędzia", language: "Język" },
    hero: {
      eyebrow: "Darmowe narzędzia muzyczne",
      title: "TuneUniversal",
      description: "Szybka platforma do strojenia, treningu rytmu i pracy z akordami na każdym urządzeniu.",
      cta: "Poznaj narzędzia"
    },
    home: {
      toolHeading: "Narzędzia muzyczne",
      faqHeading: "Często zadawane pytania",
      howHeading: "Jak działa TuneUniversal"
    },
    tool: {
      detectedNote: "Wykryta nuta",
      frequency: "Częstotliwość",
      cents: "Centy",
      flat: "Za nisko",
      sharp: "Za wysoko",
      inTune: "Czysto",
      requestMic: "Włącz mikrofon",
      stopMic: "Wyłącz mikrofon",
      micError: "Brak dostępu do mikrofonu. Sprawdź uprawnienia przeglądarki i spróbuj ponownie.",
      bpm: "BPM",
      start: "Start",
      stop: "Stop",
      reset: "Resetuj",
      tap: "Tap",
      history: "Ostatnie tapy",
      meter: "Metrum",
      inputChords: "Wprowadź akordy",
      semitones: "Półtony",
      outputChords: "Transponowany wynik"
    },
    common: { howItWorks: "Jak to działa", faq: "Często zadawane pytania", otherTools: "Inne narzędzia" },
    cookie: {
      text: "Używamy plików cookie, aby poprawić Twoje doświadczenie, wyświetlać reklamy i analizować ruch.",
      privacy: "Polityka prywatności",
      accept: "Zaakceptuj wszystkie",
      decline: "Odrzuć wszystkie",
      customize: "Dostosuj preferencje",
      savePrefs: "Zapisz preferencje",
      necessary: "Niezbędne",
      necessaryDesc: "Wymagane do podstawowego działania strony.",
      analytics: "Analityka",
      analyticsDesc: "Pomaga nam zrozumieć korzystanie ze strony.",
      advertising: "Reklamy",
      advertisingDesc: "Wspiera bezpłatny dostęp dzięki przychodom z reklam."
    },
    tools: {
      "guitar-tuner": {
        title: "Internetowy stroik do gitary", description: "Użyj mikrofonu, aby szybko nastroić gitarę z obsługą popularnych i alternatywnych strojów.",
        howItWorks: ["Kliknij 'Włącz mikrofon' i udziel dostępu przeglądarce.", "Wybierz strój z menu.", "Szarpnij jedną strunę i pozwól jej wybrzmieć.", "Obserwuj igłę: lewo = za nisko, prawo = za wysoko, środek = czysto.", "Kręć klucz powoli, aż igła wycentruje się.", "Powtórz dla wszystkich strun."],
        faq: [{ question: "Jak włączyć mikrofon?", answer: "Kliknij 'Włącz mikrofon' i kliknij Zezwól. Jeśli odmówiono, przejdź do ustawień witryny i przywróć uprawnienia mikrofonu." }, { question: "Czy mogę stroić przez telefon?", answer: "Tak. Otwórz stroik w przeglądarce mobilnej. Na iOS działa Safari 14.3+; na Android Chrome i Firefox." }, { question: "Jak często stroić gitarę?", answer: "Przed każdym graniem. Temperatura, wilgotność i napięcie strun powodują rozstrajanie." }, { question: "Dlaczego wykrywana nuta drga?", answer: "Wykrywanie oscyluje podczas drgania struny. Szarpnij mocno i unikaj hałasów w tle." }, { question: "Czy potrzebuję aplikacji?", answer: "Nie. TuneUniversal działa w przeglądarce bez instalacji na Windows, macOS, iOS i Android." }]
      },
      "bass-tuner": {
        title: "Internetowy stroik do basu", description: "Nastraj bas szybko przez mikrofon ze strojami standardowymi i alternatywnymi.",
        howItWorks: ["Kliknij 'Włącz mikrofon'.", "Wybierz strój basu.", "Szarpnij jedną strunę.", "Obserwuj wskazanie noty i igły.", "Kręć klucz, aż igła wycentruje się.", "Powtórz dla wszystkich czterech strun."],
        faq: [{ question: "Czy stroik działa dla basu?", answer: "Tak. Wykrywa niskie częstotliwości basu równie dokładnie jak gitary." }, { question: "Jaki jest standardowy strój basu?", answer: "Standardowy strój to E1-A1-D2-G2, od najniższej do najwyższej." }, { question: "Czy są dostępne alternatywne stroje?", answer: "Tak, w tym Drop D i D Standard." }, { question: "Dlaczego wykrywanie niskich tonów jest wolniejsze?", answer: "Niskie częstotliwości mają dłuższe fale. Pozwól strunie dłużej wybrzmiewać." }, { question: "Czy mogę stroić bas elektryczny?", answer: "Tak, przez mikrofon lub podłączone urządzenie audio." }]
      },
      "ukulele-tuner": {
        title: "Internetowy stroik do ukulele", description: "Nastraj ukulele przez mikrofon z obsługą GCEA i innych strojów.",
        howItWorks: ["Kliknij 'Włącz mikrofon'.", "Wybierz strój ukulele (standardowo GCEA).", "Szarpnij strunę G.", "Kręć klucz.", "Powtórz dla C, E i A.", "Sprawdź wszystkie struny na końcu."],
        faq: [{ question: "Jaki jest standardowy strój ukulele?", answer: "Sopran/koncert/tenor używa G4-C4-E4-A4. Baryton D3-G3-B3-E4." }, { question: "Jakie stroje są dostępne?", answer: "GCEA, strój D, Low G i inne alternatywne stroje." }, { question: "Czy mogę stroić przez telefon?", answer: "Tak. Otwórz stroik w przeglądarce mobilnej." }, { question: "Dlaczego wykrywanie na ukulele drga?", answer: "Struny nylonowe reagują wolniej. Szarpnij mocno i trzymaj mikrofon blisko." }, { question: "Czy działa dla wszystkich rozmiarów?", answer: "Tak, dla sopranu, koncertu, tenoru i barytonu." }]
      },
      metronome: {
        title: "Internetowy metronom", description: "Ćwicz z regulowanym BPM, podziałami, akcentami i popularnymi metrami.",
        howItWorks: ["Ustaw żądane BPM.", "Wybierz metrum (4/4, 3/4, 6/8 itp.).", "Kliknij Start.", "Graj razem z kliknięciami.", "Dostosuj tempo w razie potrzeby.", "Stopniowo zwiększaj BPM."],
        faq: [{ question: "Od jakiego BPM zacząć?", answer: "Od 50-70% docelowego tempa. Zwiększaj dopiero gdy grasz czysto trzy razy z rzędu." }, { question: "Jakie metrum wybrać?", answer: "4/4 dla pop i rocka, 3/4 dla walca, 6/8 dla ballad." }, { question: "Czy działa dla każdego instrumentu?", answer: "Tak. Metronom jest narzędziem uniwersalnym." }, { question: "Czym są podziały rytmiczne?", answer: "Dzielą każdy takt na 2, 3 lub 4 równe części dla precyzyjniejszego wyczucia czasu." }, { question: "Różnica między metronomem a click trackiem?", answer: "Metronom to samodzielne narzędzie. Click track to wersja DAW. TuneUniversal działa jako metronom." }]
      },
      "tap-bpm": {
        title: "Licznik Tap BPM", description: "Tapuj razem z muzyką i oblicz średnie BPM w kilka sekund.",
        howItWorks: ["Otwórz stronę Tap BPM.", "Włącz muzykę.", "Tapuj przycisk lub spację na każdy beat.", "Kontynuuj przez co najmniej 8-16 tapnięć.", "Odczytaj średnie BPM.", "Naciśnij Reset, aby zacząć od nowa."],
        faq: [{ question: "Czy mogę tapować podczas odtwarzania muzyki?", answer: "Tak, to jest główne zastosowanie." }, { question: "Ile tapnięć potrzeba?", answer: "Minimum 4; po 8-16 wynik jest stabilny." }, { question: "Czy BPM zmienia się podczas słuchania?", answer: "Nie przy większości muzyki pop i elektronicznej. Live i jazz mogą mieć zmienne tempo." }, { question: "Jak użyć BPM z metronomem?", answer: "Skopiuj BPM, otwórz metronom i wpisz tę samą liczbę." }, { question: "Spacja czy klik?", answer: "Spacja jest zazwyczaj dokładniejsza niż kliknięcie myszą." }]
      },
      "chord-transposer": {
        title: "Transponator akordów", description: "Transponuj progresje akordów w górę lub w dół o półtony.",
        howItWorks: ["Wpisz swoje akordy w polu tekstowym.", "Wybierz liczbę półtonów (+ w górę, - w dół).", "Zobacz przetransponowane akordy od razu.", "Skopiuj wynik.", "Wypróbuj różne transpozycje dla najlepszej tonacji.", "Resetuj, aby zacząć od nowa."],
        faq: [{ question: "Jakie symbole akordów są obsługiwane?", answer: "Wielkie litery (C, D, E), minorowe (m, min), septymy (7, maj7, m7), diminished (dim) i augmented (aug)." }, { question: "O ile półtonów można transponować?", answer: "Od -11 do +11 półtonów, obejmując wszystkie 12 tonacji." }, { question: "Po co transponować?", answer: "Aby dopasować tonację do głosu, instrumentu lub gry z innymi muzykami." }, { question: "Czy działa dla capo?", answer: "Tak. Oblicz pozycję capo na podstawie przetransponowanej tonacji." }, { question: "Czy są ograniczenia wejścia?", answer: "Wpisuj standardowe symbole akordów oddzielone spacjami." }]
      },
      "sound-level-meter": {
        title: "Internetowy miernik poziomu dźwięku", description: "Mierz szacowany poziom dźwięku w dB z mikrofonem i regulowaną czułością.",
        howItWorks: ["Kliknij 'Włącz mikrofon'.", "Wybierz stabilne miejsce w pomieszczeniu.", "Obserwuj aktualny poziom dB i wykres.", "Zanotuj minimum, maksimum i średnią.", "Trzymaj urządzenie nieruchomo.", "Porównaj wartości w różnych środowiskach."],
        faq: [{ question: "Jak dokładny jest miernik?", answer: "To szacowanie na podstawie mikrofonu. Nie jest certyfikowane do profesjonalnych zastosowań." }, { question: "Normalny poziom do ćwiczeń?", answer: "60-75 dB dla akustycznych instrumentów. Powyżej 85 dB może uszkodzić słuch." }, { question: "Czy sprawdzę hałas pomieszczenia?", answer: "Tak. Używaj średniego dB do oceny, jak ciche lub głośne jest pomieszczenie." }, { question: "Działa bez mikrofonu?", answer: "Nie. Miernik wymaga dostępu do mikrofonu." }, { question: "Jak czytać wykres?", answer: "Wykres pokazuje ostatnie 30 sekund poziomów dB." }]
      },
      "pitch-generator": {
        title: "Generator tonu", description: "Generuj czysty ton od 20 Hz do 20000 Hz do treningu słuchu i testów audio.",
        howItWorks: ["Ustaw żądaną częstotliwość.", "Ustaw bezpieczną głośność.", "Kliknij Start.", "Użyj tonu jako nuty odniesienia lub do treningu.", "Dostosuj częstotliwość, aby zbadać inne nuty.", "Kliknij Stop."],
        faq: [{ question: "Jaki zakres częstotliwości?", answer: "Od 20 Hz do 20000 Hz, pełny zakres słyszalny." }, { question: "Do treningu słuchu?", answer: "Tak. Ustaw częstotliwość odniesienia i ćwicz rozpoznawanie nut lub interwałów." }, { question: "Czy bezpieczny przy wysokich częstotliwościach?", answer: "Zawsze zacznij od niskiej głośności, szczególnie powyżej 8000 Hz." }, { question: "Do testowania głośników?", answer: "Tak. Przeglądaj częstotliwości, aby przetestować głośniki lub słuchawki." }, { question: "Jak długo gra ton?", answer: "Nieograniczenie. Zawsze zatrzymaj go po zakończeniu." }]
      }
    }
  },
  tr: {
    meta: {
      title: "TuneUniversal - ücretsiz müzik araçları",
      description: "Enstrümanları akort edin, ritim çalışın ve akoru transpoze edin - ücretsiz çevrimiçi müzik araçlarıyla."
    },
    nav: { home: "Ana sayfa", tools: "Araçlar", language: "Dil" },
    hero: {
      eyebrow: "Ücretsiz müzik araçları",
      title: "TuneUniversal",
      description: "Her cihazda akort, ritim pratiği ve akor çalışması için hızlı bir platform.",
      cta: "Araçları keşfet"
    },
    home: {
      toolHeading: "Müzik araçları",
      faqHeading: "Sık sorulan sorular",
      howHeading: "TuneUniversal nasıl çalışır"
    },
    tool: {
      detectedNote: "Algılanan nota",
      frequency: "Frekans",
      cents: "Sent",
      flat: "Düşük",
      sharp: "Yüksek",
      inTune: "Akorda",
      requestMic: "Mikrofonu etkinleştir",
      stopMic: "Mikrofonu durdur",
      micError: "Mikrofon erişimi başarısız. Tarayıcı izinlerini kontrol edip tekrar deneyin.",
      bpm: "BPM",
      start: "Başlat",
      stop: "Durdur",
      reset: "Sıfırla",
      tap: "Vur",
      history: "Son vuruşlar",
      meter: "Ölçü",
      inputChords: "Akor girişi",
      semitones: "Yarım ton",
      outputChords: "Transpoze sonuç"
    },
    common: { howItWorks: "Nasıl çalışır", faq: "Sık sorulan sorular", otherTools: "Diğer araçlar" },
    cookie: {
      text: "Deneyiminizi geliştirmek, reklam göstermek ve trafiği analiz etmek için çerez kullanıyoruz.",
      privacy: "Gizlilik politikası",
      accept: "Tümünü kabul et",
      decline: "Tümünü reddet",
      customize: "Tercihleri özelleştir",
      savePrefs: "Tercihleri kaydet",
      necessary: "Zorunlu",
      necessaryDesc: "Sitenin temel işlevleri için gereklidir.",
      analytics: "Analitik",
      analyticsDesc: "Sitenin nasıl kullanıldığını anlamamıza yardımcı olur.",
      advertising: "Reklamcılık",
      advertisingDesc: "Reklam geliri aracılığıyla ücretsiz erişimi destekler."
    },
    tools: {
      "guitar-tuner": {
        title: "Online gitar akordörü", description: "Mikrofonu kullanarak gitarı hızlıca akort edin, yaygın ve alternatif akortları destekler.",
        howItWorks: ["'Mikrofonu etkinleştir'e tıklayın ve erişime izin verin.", "Menüden bir akort seçin.", "Tek bir teli çalın ve titreşmesini bekleyin.", "İbreye bakın: sol = çok düşük, sağ = çok yüksek, orta = tam.", "İbre ortalayana kadar akort anahtarını yavaşça çevirin.", "Tüm teller için tekrarlayın."],
        faq: [{ question: "Mikrofonu nasıl etkinleştiririm?", answer: "Mikrofonu Etkinleştir'e tıklayın ve İzin Ver'e basın. Erişim reddedildiyse tarayıcı ayarlarından mikrofon izinlerini geri yükleyin." }, { question: "Telefon ile akort yapabilir miyim?", answer: "Evet. Mobil tarayıcıyı açın ve mikrofon iznine izin verin. iOS'ta Safari 14.3+, Android'de Chrome ve Firefox çalışır." }, { question: "Ne sıklıkla akort yapmalıyım?", answer: "Her çaldığınızda. Sıcaklık, nem ve tel gerilimi her zaman biraz bozulma yaratır." }, { question: "Neden algılanan nota titreşiyor?", answer: "Perde algılaması tel titreşirken salınır. Teli güçlüce çalın ve arka plan gürültüsünden kaçının." }, { question: "Uygulama gerekiyor mu?", answer: "Hayır. TuneUniversal kurulum gerektirmeden tarayıcıda çalışır." }]
      },
      "bass-tuner": {
        title: "Online bas akordörü", description: "Mikrofon ile bas gitarı hızlıca akort edin, standart ve alternatif akortları destekler.",
        howItWorks: ["'Mikrofonu etkinleştir'e tıklayın.", "Menüden bas akordunu seçin.", "Tek bir teli çalın.", "Nota ve ibre pozisyonunu izleyin.", "İbre ortalayana kadar anahtarı çevirin.", "Dört tel için tekrarlayın."],
        faq: [{ question: "Bas için akordör çalışıyor mu?", answer: "Evet. Düşük frekansları gitar kadar doğru algılar." }, { question: "Standart bas akort nedir?", answer: "E1-A1-D2-G2, en düşükten en yükseğe." }, { question: "Alternatif akortlar var mı?", answer: "Evet, Drop D ve D Standart dahil." }, { question: "Düşük perdeler neden daha yavaş algılanır?", answer: "Düşük frekansların daha uzun dalga boyu vardır. Telin daha uzun çınlamasına izin verin." }, { question: "Elektrik bası akort edilebilir mi?", answer: "Evet, mikrofon veya ses sistemi bağlantısıyla." }]
      },
      "ukulele-tuner": {
        title: "Online ukulele akordörü", description: "Mikrofon ile ukulele akort edin, GCEA ve alternatif akortları destekler.",
        howItWorks: ["'Mikrofonu etkinleştir'e tıklayın.", "Ukulele akordunu seçin (varsayılan GCEA).", "G telini çalın.", "Anahtarı çevirin.", "C, E ve A için tekrarlayın.", "Sonunda tüm telleri kontrol edin."],
        faq: [{ question: "Ukulele standart akort nedir?", answer: "Soprano/concert/tenor G4-C4-E4-A4 kullanır. Bariton D3-G3-B3-E4." }, { question: "Hangi akortlar destekleniyor?", answer: "GCEA, D akort, Low G ve diğer alternatifler." }, { question: "Telefonla akort yapabilir miyim?", answer: "Evet. Mobil tarayıcıda açın ve mikrofon iznine izin verin." }, { question: "Ukulelede algılama neden sallanır?", answer: "Naylon teller daha yavaş yanıt verir. Güçlüce çalın ve mikrofonu yakın tutun." }, { question: "Tüm boyutlar için çalışıyor mu?", answer: "Evet, soprano, concert, tenor ve bariton için." }]
      },
      metronome: {
        title: "Online metronom", description: "Ayarlanabilir BPM, bölünmeler, vurgular ve yaygın ölçülerle pratik yapın.",
        howItWorks: ["İstediğiniz BPM'yi ayarlayın.", "Ölçüyü seçin (4/4, 3/4, 6/8 vb.).", "Başlat'a tıklayın.", "Tıklamalarla birlikte çalın.", "Gerekirse tempoyu ayarlayın.", "BPM'yi kademeli olarak artırın."],
        faq: [{ question: "Başlamak için iyi BPM nedir?", answer: "Hedef temponun %50-70'inde başlayın. Üç kez hatasız çalabildiğinizde artırın." }, { question: "Hangi ölçüyü seçmeliyim?", answer: "Pop ve rock için 4/4, vals için 3/4, balad için 6/8." }, { question: "Her enstrüman için kullanılabilir mi?", answer: "Evet. Metronom evrensel bir araçtır." }, { question: "Ritmik bölünmeler nedir?", answer: "Her vuruşu 2, 3 veya 4 eşit parçaya böler ve iç ritim duygunuzu hassaslaştırır." }, { question: "Metronom ile click track farkı nedir?", answer: "Metronom bağımsız bir araçtır. Click track DAW'da kullanılan dijital versiyondur." }]
      },
      "tap-bpm": {
        title: "Tap BPM sayacı", description: "Müzikle birlikte vurun ve saniyeler içinde ortalama BPM'yi hesaplayın.",
        howItWorks: ["Tap BPM sayfasını açın.", "Müziği çalın.", "Her vuruşta butona veya boşluk tuşuna basın.", "En az 8-16 kez vurun.", "Ortalama BPM'yi okuyun.", "Sıfırla'ya basarak yeniden başlayın."],
        faq: [{ question: "Müzik çalarken kullanabilir miyim?", answer: "Evet, bu ana kullanım durumudur." }, { question: "Kaç vuruş gerekiyor?", answer: "Minimum 4; 8-16 vuruştan sonra sonuç kararlı hale gelir." }, { question: "BPM değişiyor mu?", answer: "Pop ve elektronik müziğin çoğu sabit BPM'ye sahiptir. Canlı ve jazz tempo değişikliğine sahip olabilir." }, { question: "BPM'yi metronom ile nasıl kullanırım?", answer: "BPM'yi kopyalayın, metronoma açın ve aynı sayıyı girin." }, { question: "Boşluk tuşu mu, tıklama mı?", answer: "Boşluk tuşu genellikle fare tıklamasından daha doğrudur." }]
      },
      "chord-transposer": {
        title: "Akor transpoze aracı", description: "Akor ilerlemelerini yarım ton olarak yukarı veya aşağı transpoze edin.",
        howItWorks: ["Akorlarınızı metin kutusuna girin.", "Yarım ton sayısını seçin (+ yukarı, - aşağı).", "Transpoze edilmiş akorları hemen görün.", "Sonucu kopyalayın.", "En iyi tonalite için farklı transpoze değerleri deneyin.", "Sıfırla ile yeniden başlayın."],
        faq: [{ question: "Hangi akor sembolleri destekleniyor?", answer: "Büyük harf (C, D, E), minör (m, min), yedili (7, maj7, m7), diminished (dim) ve augmented (aug)." }, { question: "Kaç yarım ton transpoze edebilirim?", answer: "-11'den +11'e kadar, 12 tonaliteyi kapsıyor." }, { question: "Neden transpoze yapılır?", answer: "Sesi sesinize veya enstrüman akorduna uyarlamak için." }, { question: "Capo için kullanabilir miyim?", answer: "Evet. Hedef tonaliteye göre capo pozisyonunu hesaplayın." }, { question: "Giriş sınırlamaları var mı?", answer: "Boşlukla ayrılmış standart akor sembolleri girin." }]
      },
      "sound-level-meter": {
        title: "Online ses seviyesi ölçer", description: "Mikrofon ve ayarlanabilir hassasiyetle tahmini ses seviyesini dB cinsinden ölçün.",
        howItWorks: ["'Mikrofonu etkinleştir'e tıklayın.", "Odada sabit bir yer seçin.", "Mevcut dB değerini ve grafiği izleyin.", "Minimum, maksimum ve ortalamayı kaydedin.", "Daha doğru ölçüm için cihazı sabit tutun.", "Farklı ortamlarda değerleri karşılaştırın."],
        faq: [{ question: "Ölçer ne kadar doğru?", answer: "Mikrofon sinyaline dayalı tahmini bir ölçümdür. Profesyonel kullanım için sertifikalı değildir." }, { question: "Normal pratik seviyesi nedir?", answer: "Akustik enstrümanlar için 60-75 dB. 85 dB üzerinde uzun süre maruz kalma işitme hasarına yol açabilir." }, { question: "Oda gürültüsünü kontrol edebilir miyim?", answer: "Evet. Ortamın ne kadar sessiz veya gürültülü olduğunu değerlendirmek için ortalama dB kullanın." }, { question: "Mikrofon olmadan çalışıyor mu?", answer: "Hayır. Ölçer mikrofon erişimi gerektirir." }, { question: "Grafiği nasıl okurum?", answer: "Grafik son 30 saniyelik dB seviyelerini gösterir." }]
      },
      "pitch-generator": {
        title: "Ses tonu üreteci", description: "İşitme eğitimi ve ses testleri için 20 Hz ile 20000 Hz arasında saf ton üretin.",
        howItWorks: ["İstediğiniz frekansı ayarlayın.", "Güvenli bir ses seviyesi ayarlayın.", "Başlat'a tıklayın.", "Tonu referans nota veya eğitim için kullanın.", "Diğer notaları keşfetmek için frekansı ayarlayın.", "Durdur'a tıklayın."],
        faq: [{ question: "Hangi frekans aralığı mevcut?", answer: "20 Hz ile 20000 Hz, tam işitilebilir aralık." }, { question: "İşitme eğitimi için kullanabilir miyim?", answer: "Evet. Referans frekansı ayarlayın ve nota veya aralık tanımayı pratik yapın." }, { question: "Yüksek frekanslarda güvenli mi?", answer: "Her zaman düşük ses seviyesinden başlayın, özellikle 8000 Hz üzerinde." }, { question: "Hoparlör testi için kullanabilir miyim?", answer: "Evet. Hoparlörlerinizi veya kulaklıklarınızı test etmek için frekansları tarayın." }, { question: "Ton ne kadar süre çalabilir?", answer: "Sınırsız. İşiniz bittiğinde her zaman durdurun." }]
      }
    }
  },
  cs: {
    meta: {
      title: "TuneUniversal - bezplatné hudební nástroje",
      description: "Ladujte nástroje, cvičte rytmus a transponujte akordy pomocí bezplatných online hudebních nástrojů."
    },
    nav: { home: "Domů", tools: "Nástroje", language: "Jazyk" },
    hero: {
      eyebrow: "Bezplatné hudební nástroje",
      title: "TuneUniversal",
      description: "Rychlá platforma pro ladění, rytmické cvičení a práci s akordy na jakémkoli zařízení.",
      cta: "Prozkoumat nástroje"
    },
    home: {
      toolHeading: "Hudební nástroje",
      faqHeading: "Časté dotazy",
      howHeading: "Jak TuneUniversal funguje"
    },
    tool: {
      detectedNote: "Zjištěná nota",
      frequency: "Frekvence",
      cents: "Centy",
      flat: "Příliš nízko",
      sharp: "Příliš vysoko",
      inTune: "Naladěno",
      requestMic: "Zapnout mikrofon",
      stopMic: "Vypnout mikrofon",
      micError: "Přístup k mikrofonu se nezdařil. Zkontrolujte oprávnění prohlížeče a zkuste to znovu.",
      bpm: "BPM",
      start: "Start",
      stop: "Stop",
      reset: "Resetovat",
      tap: "Tap",
      history: "Poslední tapy",
      meter: "Takt",
      inputChords: "Zadejte akordy",
      semitones: "Půltóny",
      outputChords: "Transponovaný výsledek"
    },
    common: { howItWorks: "Jak to funguje", faq: "Časté dotazy", otherTools: "Další nástroje" },
    cookie: {
      text: "Používáme cookies ke zlepšení vašeho zážitku, zobrazování reklam a analýze provozu.",
      privacy: "Zásady ochrany soukromí",
      accept: "Přijmout vše",
      decline: "Odmítnout vše",
      customize: "Přizpůsobit předvolby",
      savePrefs: "Uložit předvolby",
      necessary: "Nezbytné",
      necessaryDesc: "Vyžadováno pro základní funkce webu.",
      analytics: "Analytika",
      analyticsDesc: "Pomáhá nám pochopit, jak se web používá.",
      advertising: "Reklama",
      advertisingDesc: "Podporuje bezplatný přístup prostřednictvím příjmů z reklam."
    },
    tools: {
      "guitar-tuner": {
        title: "Online ladička kytary", description: "Použijte mikrofon k rychlému ladění kytary s podporou běžných i alternativních ladění.",
        howItWorks: ["Klikněte na 'Zapnout mikrofon' a udělte přístup prohlížeče.", "Vyberte ladění z menu.", "Zahrajte jednu strunu a nechte ji doznít.", "Sledujte jehlu: vlevo = příliš nízko, vpravo = příliš vysoko, střed = perfektně.", "Pomalu otáčejte ladíkem, dokud se jehla nevystředí.", "Opakujte pro všechny struny."],
        faq: [{ question: "Jak zapnout mikrofon?", answer: "Klikněte na Zapnout mikrofon a povolte přístup. Pokud byl odmítnut, obnovte oprávnění mikrofonu v nastavení prohlížeče." }, { question: "Mohu ladit přes telefon?", answer: "Ano. Otevřete ladičku v mobilním prohlížeči. Na iOS funguje Safari 14.3+; na Androidu Chrome a Firefox." }, { question: "Jak často ladit kytaru?", answer: "Před každým hraním. Teplota, vlhkost a napětí strun způsobují rozladění." }, { question: "Proč kmitá zjišťovaná nota?", answer: "Detekce výšky kmitá při vibraci struny. Zahrajte silně a vyhněte se hluku v pozadí." }, { question: "Potřebuji aplikaci?", answer: "Ne. TuneUniversal funguje v prohlížeči bez instalace." }]
      },
      "bass-tuner": {
        title: "Online ladička baskytary", description: "Nalaďte baskytaru rychle pomocí mikrofonu se standardními i alternativními laděními.",
        howItWorks: ["Klikněte na 'Zapnout mikrofon'.", "Vyberte ladění basové kytary.", "Zahrajte jednu strunu.", "Sledujte notu a polohu jehly.", "Otáčejte ladíkem, dokud se jehla nevystředí.", "Opakujte pro všechny čtyři struny."],
        faq: [{ question: "Funguje ladička pro basovou kytaru?", answer: "Ano. Detekuje nízké frekvence stejně přesně jako kytaru." }, { question: "Jaké je standardní ladění basové kytary?", answer: "E1-A1-D2-G2, od nejnižší po nejvyšší." }, { question: "Jsou k dispozici alternativní ladění?", answer: "Ano, včetně Drop D a D Standard." }, { question: "Proč je detekce nízkých tónů pomalejší?", answer: "Nízké frekvence mají delší vlnové délky. Nechte strunu déle doznít." }, { question: "Mohu ladit elektrickou baskytaru?", answer: "Ano, přes mikrofon nebo zvukové zařízení." }]
      },
      "ukulele-tuner": {
        title: "Online ladička ukulele", description: "Nalaďte ukulele pomocí mikrofonu s podporou GCEA a dalších ladění.",
        howItWorks: ["Klikněte na 'Zapnout mikrofon'.", "Vyberte ladění ukulele (výchozí GCEA).", "Zahrajte strunu G.", "Otočte ladíkem.", "Opakujte pro C, E a A.", "Na konci zkontrolujte všechny struny."],
        faq: [{ question: "Jaké je standardní ladění ukulele?", answer: "Soprán/koncert/tenor používá G4-C4-E4-A4. Baryton D3-G3-B3-E4." }, { question: "Jaká ladění jsou k dispozici?", answer: "GCEA, D ladění, Low G a další alternativy." }, { question: "Mohu ladit přes telefon?", answer: "Ano. Otevřete ladičku v mobilním prohlížeči." }, { question: "Proč kmitá detekce ukulele?", answer: "Nylonové struny reagují pomaleji. Zahrajte silně a držte mikrofon blízko." }, { question: "Funguje pro všechny velikosti?", answer: "Ano, pro soprán, koncert, tenor a baryton." }]
      },
      metronome: {
        title: "Online metronom", description: "Cvičte s nastavitelným BPM, dělením, přízvuky a běžnými takty.",
        howItWorks: ["Nastavte požadované BPM.", "Zvolte takt (4/4, 3/4, 6/8 atd.).", "Klikněte na Start.", "Hrajte s klikáním.", "Podle potřeby upravte tempo.", "Postupně zvyšujte BPM."],
        faq: [{ question: "Jaké BPM začít?", answer: "Na 50-70 % cílového tempa. Zvyšujte až po třech čistých opakováních za sebou." }, { question: "Jaký takt vybrat?", answer: "4/4 pro pop a rock, 3/4 pro valčík, 6/8 pro balady." }, { question: "Funguje pro každý nástroj?", answer: "Ano. Metronom je univerzální nástroj." }, { question: "Co jsou rytmická dělení?", answer: "Dělí každou dobu na 2, 3 nebo 4 stejné části pro přesnější vnitřní cit pro rytmus." }, { question: "Rozdíl metronom a click track?", answer: "Metronom je samostatný nástroj. Click track je verze pro DAW." }]
      },
      "tap-bpm": {
        title: "Počítadlo Tap BPM", description: "Klepejte spolu s hudbou a vypočítejte průměrné BPM během několika sekund.",
        howItWorks: ["Otevřete stránku Tap BPM.", "Spusťte hudbu.", "Klepejte na tlačítko nebo mezerník na každý úder.", "Pokračujte alespoň 8-16 klepnutí.", "Přečtěte průměrné BPM.", "Stiskněte Reset pro nové měření."],
        faq: [{ question: "Mohu klepat při přehrávání hudby?", answer: "Ano, to je hlavní použití." }, { question: "Kolik klepnutí je potřeba?", answer: "Minimum 4; po 8-16 se výsledek stabilizuje." }, { question: "Mění se BPM při poslechu?", answer: "Většina pop a elektronické hudby má konstantní BPM. Live a jazz mohou mít změny tempa." }, { question: "Jak použít BPM s metronomem?", answer: "Zkopírujte BPM, otevřete metronom a zadejte stejné číslo." }, { question: "Mezerník nebo kliknutí?", answer: "Mezerník je obvykle přesnější než kliknutí myší." }]
      },
      "chord-transposer": {
        title: "Transponér akordů", description: "Transponujte akordy nahoru nebo dolů o půltóny.",
        howItWorks: ["Zadejte akordy do textového pole.", "Vyberte počet půltónů (+ nahoru, - dolů).", "Okamžitě zobrazte transponované akordy.", "Zkopírujte výsledek.", "Vyzkoušejte různé transpozice pro nejlepší tóninu.", "Reset pro nový začátek."],
        faq: [{ question: "Jaké symboly akordů jsou podporovány?", answer: "Velká písmena (C, D, E), molové (m, min), septimy (7, maj7, m7), zmenšené (dim) a zvětšené (aug)." }, { question: "Kolik půltónů mohu transponovat?", answer: "Od -11 do +11, pokrývá všech 12 tónin." }, { question: "Proč transponovat?", answer: "Pro přizpůsobení tóniny hlasu nebo nástroji, nebo ke hře s jinými hudebníky." }, { question: "Mohu použít pro capo?", answer: "Ano. Vypočítejte pozici capo na základě cílové tóniny." }, { question: "Jsou omezení vstupu?", answer: "Zadejte standardní symboly akordů oddělené mezerami." }]
      },
      "sound-level-meter": {
        title: "Online měřič hlasitosti", description: "Měřte odhadovanou hladinu zvuku v dB pomocí mikrofonu s nastavitelnou citlivostí.",
        howItWorks: ["Klikněte na 'Zapnout mikrofon'.", "Zvolte stabilní místo v místnosti.", "Sledujte aktuální hodnotu dB a graf.", "Zaznamenejte minimum, maximum a průměr.", "Pro přesnější měření držte zařízení v klidu.", "Porovnejte hodnoty v různých prostředích."],
        faq: [{ question: "Jak přesný je měřič?", answer: "Jde o odhad na základě mikrofonu. Není certifikován pro profesionální použití." }, { question: "Normální úroveň pro cvičení?", answer: "60-75 dB pro akustické nástroje. Nad 85 dB dlouhodobě může poškodit sluch." }, { question: "Mohu kontrolovat hluk místnosti?", answer: "Ano. Průměrnou hodnotou dB posoudíte, jak tichý nebo hlasitý prostor je." }, { question: "Funguje bez mikrofonu?", answer: "Ne. Měřič vyžaduje přístup k mikrofonu." }, { question: "Jak číst graf?", answer: "Graf zobrazuje posledních 30 sekund úrovní dB." }]
      },
      "pitch-generator": {
        title: "Generátor tónu", description: "Generujte čistý tón od 20 Hz do 20000 Hz pro trénink sluchu a zvukové testy.",
        howItWorks: ["Nastavte požadovanou frekvenci.", "Nastavte bezpečnou hlasitost.", "Klikněte na Start.", "Použijte tón jako referenční notu nebo pro trénink.", "Upravte frekvenci pro průzkum dalších not.", "Klikněte na Stop."],
        faq: [{ question: "Jaký frekvenční rozsah je k dispozici?", answer: "Od 20 Hz do 20000 Hz, celý slyšitelný rozsah." }, { question: "Mohu ho použít pro trénink sluchu?", answer: "Ano. Nastavte referenční frekvenci a cvičte rozpoznávání not nebo intervalů." }, { question: "Je bezpečný při vysokých frekvencích?", answer: "Vždy začněte s nízkou hlasitostí, zejména nad 8000 Hz." }, { question: "Mohu ho použít pro test reproduktorů?", answer: "Ano. Procházejte frekvencemi pro test reproduktorů nebo sluchátek." }, { question: "Jak dlouho může tón hrát?", answer: "Neomezeně. Po dokončení vždy zastavte." }]
      }
    }
  },
  sv: {
    meta: {
      title: "TuneUniversal - gratis musikverktyg",
      description: "Stäm instrument, öva rytm och transponera ackord med gratis onlineverktyg för musik."
    },
    nav: { home: "Hem", tools: "Verktyg", language: "Språk" },
    hero: {
      eyebrow: "Gratis musikverktyg",
      title: "TuneUniversal",
      description: "En snabb plattform för stämning, rytmövning och ackordarbete på alla enheter.",
      cta: "Utforska verktyg"
    },
    home: {
      toolHeading: "Musikverktyg",
      faqHeading: "Vanliga frågor",
      howHeading: "Hur TuneUniversal fungerar"
    },
    tool: {
      detectedNote: "Identifierad not",
      frequency: "Frekvens",
      cents: "Cent",
      flat: "För låg",
      sharp: "För hög",
      inTune: "I stämning",
      requestMic: "Aktivera mikrofon",
      stopMic: "Stäng av mikrofon",
      micError: "Mikrofonåtkomst misslyckades. Kontrollera webbläsarbehörigheter och försök igen.",
      bpm: "BPM",
      start: "Starta",
      stop: "Stoppa",
      reset: "Återställ",
      tap: "Tappa",
      history: "Senaste tapp",
      meter: "Taktart",
      inputChords: "Ange ackord",
      semitones: "Halvtoner",
      outputChords: "Transponerat resultat"
    },
    common: { howItWorks: "Hur det fungerar", faq: "Vanliga frågor", otherTools: "Andra verktyg" },
    cookie: {
      text: "Vi använder cookies för att förbättra din upplevelse, visa annonser och analysera trafik.",
      privacy: "Integritetspolicy",
      accept: "Acceptera alla",
      decline: "Avvisa alla",
      customize: "Anpassa inställningar",
      savePrefs: "Spara inställningar",
      necessary: "Nödvändiga",
      necessaryDesc: "Krävs för grundläggande webbplatsfunktioner.",
      analytics: "Analys",
      analyticsDesc: "Hjälper oss förstå hur webbplatsen används.",
      advertising: "Annonsering",
      advertisingDesc: "Stöder gratis tillgång via annonsintäkter."
    },
    tools: {
      "guitar-tuner": {
        title: "Online gitarrstämmare", description: "Använd mikrofonen för att snabbt stämma gitarr med stöd för vanliga och alternativa stämningar.",
        howItWorks: ["Klicka på 'Aktivera mikrofon' och ge åtkomst.", "Välj en stämning i menyn.", "Plocka en sträng och låt den ringa ut.", "Titta på nålen: vänster = för lågt, höger = för högt, mitt = perfekt.", "Vrid stämskruven långsamt tills nålen centreras.", "Upprepa för alla strängar."],
        faq: [{ question: "Hur aktiverar jag mikrofonen?", answer: "Klicka på Aktivera mikrofon och tillåt åtkomst. Om det misslyckas, återställ mikrofonbehörigheter i webbläsarens inställningar." }, { question: "Kan jag stämma med mobilen?", answer: "Ja. Öppna stämmaren i mobilwebbläsaren. På iOS fungerar Safari 14.3+; på Android fungerar Chrome och Firefox." }, { question: "Hur ofta ska jag stämma gitarren?", answer: "Varje gång du spelar. Temperatur, luftfuktighet och strängspänning orsakar alltid viss avstemning." }, { question: "Varför oscillerar den detekterade tonen?", answer: "Tondetekteringen oscillerar medan strängen vibrerar. Plocka kraftigt och undvik bakgrundsljud." }, { question: "Behöver jag en app?", answer: "Nej. TuneUniversal fungerar i webbläsaren utan installation på Windows, macOS, iOS och Android." }]
      },
      "bass-tuner": {
        title: "Online basstämmare", description: "Stäm bas snabbt med mikrofon med standard- och alternativa stämningar.",
        howItWorks: ["Klicka på 'Aktivera mikrofon'.", "Välj en basstämning.", "Plocka en sträng.", "Titta på not och nålposition.", "Vrid skruven tills nålen centreras.", "Upprepa för alla fyra strängar."],
        faq: [{ question: "Fungerar stämmaren för basgitarr?", answer: "Ja. Den detekterar låga frekvenser lika noggrant som gitarr." }, { question: "Vilken är standardstämningen för bas?", answer: "E1-A1-D2-G2, från lägst till högst." }, { question: "Finns alternativa stämningar?", answer: "Ja, inklusive Drop D och D Standard." }, { question: "Varför är detektion av låga toner långsammare?", answer: "Låga frekvenser har längre våglängder. Låt strängen ringa längre." }, { question: "Kan jag stämma elbas?", answer: "Ja, via mikrofon eller ljudsystem." }]
      },
      "ukulele-tuner": {
        title: "Online ukulelestämmare", description: "Stäm ukulele med mikrofon med stöd för GCEA och alternativa stämningar.",
        howItWorks: ["Klicka på 'Aktivera mikrofon'.", "Välj ukulelestämning (standard GCEA).", "Plocka G-strängen.", "Vrid stämskruven.", "Upprepa för C, E och A.", "Kontrollera alla strängar i slutet."],
        faq: [{ question: "Vilken är standardstämningen för ukulele?", answer: "Sopran/konsert/tenor använder G4-C4-E4-A4. Baryton D3-G3-B3-E4." }, { question: "Vilka stämningar finns?", answer: "GCEA, D-stämning, Low G och andra alternativ." }, { question: "Kan jag stämma med telefon?", answer: "Ja. Öppna stämmaren i mobilwebbläsaren." }, { question: "Varför oscillerar ukulele-detekteringen?", answer: "Nylonsträngar svarar långsammare. Plocka kraftigt och håll mikrofonen nära." }, { question: "Fungerar för alla storlekar?", answer: "Ja, för sopran, konsert, tenor och baryton." }]
      },
      metronome: {
        title: "Online metronom", description: "Öva med justerbar BPM, underdelningar, accenter och vanliga taktarter.",
        howItWorks: ["Ställ in önskad BPM.", "Välj taktart (4/4, 3/4, 6/8 osv.).", "Klicka på Start.", "Spela med klicken.", "Justera tempot vid behov.", "Öka BPM gradvis."],
        faq: [{ question: "Vilken BPM ska jag börja på?", answer: "På 50-70% av måltempot. Öka när du spelar rent tre gånger i rad." }, { question: "Vilken taktart ska jag välja?", answer: "4/4 för pop och rock, 3/4 för vals, 6/8 för ballader." }, { question: "Kan det användas för alla instrument?", answer: "Ja. Metronomen är universell." }, { question: "Vad är rytmiska underdelningar?", answer: "De delar upp varje slag i 2, 3 eller 4 lika delar för mer exakt inre rytmkänsla." }, { question: "Skillnad metronom och click track?", answer: "Metronomen är fristående. Click track är DAW-versionen." }]
      },
      "tap-bpm": {
        title: "Tap BPM-räknare", description: "Tappa med musiken och beräkna genomsnittlig BPM på några sekunder.",
        howItWorks: ["Öppna Tap BPM-sidan.", "Starta musiken.", "Tryck på knappen eller mellanslagstangenten på varje slag.", "Fortsätt i minst 8-16 tryckningar.", "Läs av genomsnittlig BPM.", "Tryck på Återställ för att börja om."],
        faq: [{ question: "Kan jag tappa medan musik spelas?", answer: "Ja, det är huvudanvändningen." }, { question: "Hur många tryckningar behövs?", answer: "Minimum 4; efter 8-16 stabiliseras resultatet." }, { question: "Ändras BPM under lyssning?", answer: "Inte i de flesta pop och elektronisk musik. Live och jazz kan ha tempoförändringar." }, { question: "Hur använder jag BPM med metronomen?", answer: "Kopiera BPM, öppna metronomen och ange samma siffra." }, { question: "Mellanslagstangent eller klick?", answer: "Mellanslagstangenten är ofta mer exakt än musklick." }]
      },
      "chord-transposer": {
        title: "Ackordstransponerare", description: "Transponera ackordprogressioner uppåt eller nedåt i halvtoner.",
        howItWorks: ["Ange dina ackord i textrutan.", "Välj antal halvtoner (+ uppåt, - nedåt).", "Se de transponerade ackorden direkt.", "Kopiera resultatet.", "Prova olika transponeringar för bästa tonart.", "Återställ för att börja om."],
        faq: [{ question: "Vilka ackordssymboler stöds?", answer: "Versaler (C, D, E), mollsuffix (m, min), septimer (7, maj7, m7), diminished (dim) och augmented (aug)." }, { question: "Hur många halvtoner kan jag transponera?", answer: "Från -11 till +11, vilket täcker alla 12 tonarter." }, { question: "Varför transponera?", answer: "För att anpassa tonarten till rösten, instrumentet eller andra musiker." }, { question: "Kan jag använda det för capo?", answer: "Ja. Beräkna capo-positionen baserat på måltonnarten." }, { question: "Finns det inmatningsbegränsningar?", answer: "Ange standardackordssymboler separerade med mellanslag." }]
      },
      "sound-level-meter": {
        title: "Online ljudnivåmätare", description: "Mät uppskattad ljudnivå i dB med mikrofon och justerbar känslighet.",
        howItWorks: ["Klicka på 'Aktivera mikrofon'.", "Välj en stabil plats i rummet.", "Titta på aktuellt dB-värde och grafik.", "Notera minimum, maximum och genomsnitt.", "Håll enheten still för noggrannare mätning.", "Jämför värden i olika miljöer."],
        faq: [{ question: "Hur noggrann är mätaren?", answer: "Det är en uppskattning baserad på mikrofonsignalen. Inte certifierad för professionellt bruk." }, { question: "Normal nivå för övning?", answer: "60-75 dB för akustiska instrument. Över 85 dB länge kan orsaka hörselskada." }, { question: "Kan jag kontrollera rumsgrus?", answer: "Ja. Använd genomsnittligt dB för att bedöma hur tyst eller bullrigt ett rum är." }, { question: "Fungerar utan mikrofon?", answer: "Nej. Mätaren kräver mikrofonåtkomst." }, { question: "Hur läser jag grafen?", answer: "Grafen visar de senaste 30 sekundernas dB-nivåer." }]
      },
      "pitch-generator": {
        title: "Tongenerator", description: "Generera en ren ton från 20 Hz till 20000 Hz för gehörträning och ljudtester.",
        howItWorks: ["Ställ in önskad frekvens.", "Ställ in en säker volym.", "Klicka på Start.", "Använd tonen som referensnot eller för träning.", "Justera frekvensen för att utforska andra noter.", "Klicka på Stopp."],
        faq: [{ question: "Vilket frekvensområde finns?", answer: "Från 20 Hz till 20000 Hz, hela det hörbara området." }, { question: "Kan jag använda det för gehörträning?", answer: "Ja. Ställ in en referensfrekvens och öva på att känna igen noter eller intervaller." }, { question: "Är det säkert vid höga frekvenser?", answer: "Börja alltid med låg volym, särskilt över 8000 Hz." }, { question: "Kan jag använda det för högtalartest?", answer: "Ja. Svepa genom frekvenser för att testa högtalare eller hörlurar." }, { question: "Hur länge kan tonen spela?", answer: "Obegränsat. Stoppa alltid när du är klar." }]
      }
    }
  },
  "pt-BR": {
    meta: {
      title: "TuneUniversal - ferramentas musicais grátis",
      description: "Afine instrumentos, pratique ritmo e transpõe acordes com ferramentas musicais grátis e online."
    },
    nav: {
      home: "Início",
      tools: "Ferramentas",
      language: "Idioma"
    },
    hero: {
      eyebrow: "Ferramentas musicais grátis",
      title: "TuneUniversal",
      description: "Uma plataforma rápida para afinação, ritmo e acordes em qualquer dispositivo.",
      cta: "Explorar ferramentas"
    },
    home: {
      toolHeading: "Ferramentas musicais",
      faqHeading: "Perguntas frequentes",
      howHeading: "Como funciona o TuneUniversal"
    },
    tool: {
      history: "Toques recentes",
      meter: "Compasso",
      inputChords: "Entrada de acordes",
      outputChords: "Resultado transposto"
    },
    common: {
      howItWorks: "Como funciona",
      faq: "Perguntas frequentes",
      otherTools: "Outras ferramentas"
    },
    tools: {
      "guitar-tuner": {
        title: "Afinador de guitarra online",
        description: "Use o microfone para afinar guitarra rapidamente, com suporte a afinações comuns e alternativas."
      },
      metronome: {
        title: "Metrônomo online",
        description: "Pratique com BPM ajustável, subdivisões, acentos e compassos comuns."
      },
      "tap-bpm": {
        title: "Contador de Tap BPM",
        description: "Toque junto com a música e calcule o BPM médio em segundos."
      },
      "chord-transposer": {
        title: "Transpositor de acordes",
        description: "Transponha progressões de acordes para cima ou para baixo por semitons."
      },
      "bass-tuner": {
        title: "Afinador de contrabaixo online",
        description: "Afine o contrabaixo rapidamente pelo microfone com afinações padrão e alternativas."
      },
      "ukulele-tuner": {
        title: "Afinador de ukulele online",
        description: "Afine o ukulele pelo microfone com suporte a GCEA e outras afinações."
      },
      "sound-level-meter": {
        title: "Medidor de som online",
        description: "Meça o nível de som estimado em dB com o microfone e sensibilidade ajustável."
      },
      "pitch-generator": {
        title: "Gerador de tom",
        description: "Gere um tom puro de 20 Hz a 20000 Hz para treino auditivo e testes de áudio."
      }
    },
    cookie: {
      text: "Usamos cookies para melhorar sua experiência, exibir anúncios e analisar o tráfego.",
      privacy: "Política de privacidade",
      accept: "Aceitar tudo",
      decline: "Recusar tudo",
      customize: "Personalizar preferências",
      savePrefs: "Salvar preferências",
      necessary: "Necessários",
      necessaryDesc: "Necessários para o funcionamento básico do site.",
      analytics: "Análise",
      analyticsDesc: "Ajuda-nos a entender como o site é usado.",
      advertising: "Publicidade",
      advertisingDesc: "Apoia o acesso gratuito por meio de receitas publicitárias."
    }
  },
  hi: {
    meta: {
      title: "TuneUniversal - मुफ्त संगीत टूल्स",
      description: "वाद्य यंत्र ट्यून करें, ताल का अभ्यास करें और कॉर्ड्स ट्रांसपोज़ करें मुफ्त ऑनलाइन संगीत टूल्स के साथ।"
    },
    nav: {
      home: "होम",
      tools: "टूल्स",
      language: "भाषा"
    },
    hero: {
      eyebrow: "मुफ्त संगीत टूल्स",
      title: "TuneUniversal",
      description: "ट्यूनिंग, रिदम प्रैक्टिस और कॉर्ड्स के लिए हर डिवाइस पर तेज़ ऑनलाइन प्लेटफ़ॉर्म।",
      cta: "टूल्स देखें"
    },
    home: {
      toolHeading: "संगीत टूल्स",
      faqHeading: "अक्सर पूछे जाने वाले सवाल",
      howHeading: "TuneUniversal कैसे काम करता है"
    },
    tool: {
      detectedNote: "पहचाना गया नोट",
      frequency: "फ्रीक्वेंसी",
      cents: "सेंट्स",
      flat: "नीचा",
      sharp: "ऊँचा",
      inTune: "सही ट्यून",
      requestMic: "माइक्रोफ़ोन चालू करें",
      stopMic: "माइक्रोफ़ोन बंद करें",
      micError: "माइक्रोफ़ोन एक्सेस नहीं मिला। ब्राउज़र परमिशन जाँचें और फिर कोशिश करें।",
      bpm: "BPM",
      start: "शुरू करें",
      stop: "रोकें",
      reset: "रीसेट",
      tap: "टैप",
      history: "हाल के टैप",
      meter: "मीटर",
      inputChords: "कॉर्ड इनपुट",
      semitones: "सेमिटोन",
      outputChords: "ट्रांसपोज़ किया गया आउटपुट"
    },
    common: {
      howItWorks: "यह कैसे काम करता है",
      faq: "सवाल-जवाब",
      otherTools: "अन्य टूल्स"
    },
    tools: {
      "guitar-tuner": {
        title: "ऑनलाइन गिटार ट्यूनर", description: "माइक्रोफ़ोन का उपयोग करके गिटार को जल्दी और आसानी से ट्यून करें।",
        howItWorks: ["'माइक्रोफ़ोन चालू करें' पर क्लिक करें और अनुमति दें।", "ड्रॉपडाउन से ट्यूनिंग चुनें।", "एक स्ट्रिंग बजाएं और गूंजने दें।", "सुई देखें: बाईं ओर = नीचा, दाईं ओर = ऊँचा, बीच में = सही।", "पेग धीरे-धीरे घुमाएं जब तक सुई बीच में न आ जाए।", "सभी स्ट्रिंग्स के लिए दोहराएं।"],
        faq: [{ question: "माइक्रोफ़ोन कैसे चालू करें?", answer: "माइक्रोफ़ोन चालू करें पर क्लिक करें और अनुमति दें। अगर नहीं हो, ब्राउज़र सेटिंग्स में परमिशन रीसेट करें।" }, { question: "क्या मोबाइल पर काम करता है?", answer: "हाँ। iOS पर Safari 14.3+ और Android पर Chrome या Firefox में खोलें।" }, { question: "कितनी बार ट्यून करें?", answer: "हर बार बजाने से पहले। तापमान और नमी स्ट्रिंग टेंशन बदलते हैं।" }, { question: "डिटेक्टेड नोट क्यों हिलता है?", answer: "स्ट्रिंग वाइब्रेट करते समय पिच डिटेक्शन बदलती है। जोर से बजाएं और बैकग्राउंड शोर कम करें।" }, { question: "क्या ऐप की जरूरत है?", answer: "नहीं। TuneUniversal ब्राउज़र में काम करता है, कोई इंस्टॉलेशन नहीं।" }]
      },
      "bass-tuner": {
        title: "ऑनलाइन बास ट्यूनर", description: "माइक्रोफ़ोन से बास गिटार को जल्दी ट्यून करें, स्टैंडर्ड और वैकल्पिक ट्यूनिंग के साथ।",
        howItWorks: ["'माइक्रोफ़ोन चालू करें' पर क्लिक करें।", "बास ट्यूनिंग चुनें।", "एक स्ट्रिंग बजाएं।", "नोट और सुई की स्थिति देखें।", "पेग घुमाएं जब तक सुई बीच में न आए।", "चारों स्ट्रिंग्स के लिए दोहराएं।"],
        faq: [{ question: "क्या बास गिटार के लिए काम करता है?", answer: "हाँ। यह बास की कम फ्रीक्वेंसी को भी सटीक रूप से डिटेक्ट करता है।" }, { question: "बास की स्टैंडर्ड ट्यूनिंग क्या है?", answer: "E1-A1-D2-G2, सबसे कम से सबसे ऊँचा।" }, { question: "वैकल्पिक ट्यूनिंग्स हैं?", answer: "हाँ, Drop D और D Standard सहित।" }, { question: "कम नोट्स धीरे क्यों डिटेक्ट होते हैं?", answer: "कम फ्रीक्वेंसी की तरंगदैर्ध्य लंबी होती है। स्ट्रिंग को अधिक देर गूंजने दें।" }, { question: "इलेक्ट्रिक बास के लिए काम करता है?", answer: "हाँ, माइक्रोफ़ोन या साउंड सिस्टम के माध्यम से।" }]
      },
      "ukulele-tuner": {
        title: "ऑनलाइन उकुलेले ट्यूनर", description: "माइक्रोफ़ोन से उकुलेले ट्यून करें, GCEA और अन्य ट्यूनिंग के साथ।",
        howItWorks: ["'माइक्रोफ़ोन चालू करें' पर क्लिक करें।", "उकुलेले ट्यूनिंग चुनें (स्टैंडर्ड GCEA)।", "G स्ट्रिंग बजाएं।", "पेग घुमाएं।", "C, E, A के लिए दोहराएं।", "अंत में सभी स्ट्रिंग्स चेक करें।"],
        faq: [{ question: "उकुलेले की स्टैंडर्ड ट्यूनिंग क्या है?", answer: "सोप्रानो/कंसर्ट/टेनर G4-C4-E4-A4 और बेरिटोन D3-G3-B3-E4 उपयोग करते हैं।" }, { question: "कौन-सी ट्यूनिंग्स हैं?", answer: "GCEA, D-ट्यूनिंग, Low G और अन्य।" }, { question: "मोबाइल पर काम करता है?", answer: "हाँ। मोबाइल ब्राउज़र में खोलें।" }, { question: "उकुलेले डिटेक्शन क्यों हिलता है?", answer: "नायलॉन स्ट्रिंग्स धीमी प्रतिक्रिया देती हैं। जोर से बजाएं और माइक्रोफ़ोन पास रखें।" }, { question: "सभी साइज़ के लिए काम करता है?", answer: "हाँ, सोप्रानो, कंसर्ट, टेनर और बेरिटोन के लिए।" }]
      },
      metronome: {
        title: "ऑनलाइन मेट्रोनोम", description: "एडजस्टेबल BPM, एक्सेंट और सामान्य मीटर के साथ अभ्यास करें।",
        howItWorks: ["मनचाहा BPM सेट करें।", "टाइम सिग्नेचर चुनें (4/4, 3/4, 6/8)।", "Start पर क्लिक करें।", "क्लिक के साथ बजाएं।", "जरूरत पड़ने पर टेम्पो एडजस्ट करें।", "धीरे-धीरे BPM बढ़ाएं।"],
        faq: [{ question: "शुरुआत में कौन-सा BPM चुनें?", answer: "टारगेट टेम्पो का 50-70%। तीन बार सही बजाने पर बढ़ाएं।" }, { question: "कौन-सा टाइम सिग्नेचर चुनें?", answer: "पॉप और रॉक के लिए 4/4, वाल्ट्ज के लिए 3/4, बैलाड के लिए 6/8।" }, { question: "क्या हर वाद्य के लिए काम करता है?", answer: "हाँ। मेट्रोनोम यूनिवर्सल है।" }, { question: "रिदमिक सबडिविज़न क्या हैं?", answer: "ये हर बीट को 2, 3 या 4 बराबर हिस्सों में बाँटते हैं।" }, { question: "मेट्रोनोम और क्लिक ट्रैक में फर्क?", answer: "मेट्रोनोम स्वतंत्र टूल है। क्लिक ट्रैक DAW वर्जन है।" }]
      },
      "tap-bpm": {
        title: "टैप BPM काउंटर", description: "संगीत के साथ टैप करें और औसत BPM जल्दी निकालें।",
        howItWorks: ["Tap BPM पेज खोलें।", "संगीत शुरू करें।", "हर बीट पर बटन या स्पेसबार दबाएं।", "कम से कम 8-16 टैप करें।", "औसत BPM पढ़ें।", "रीसेट दबाएं और फिर से शुरू करें।"],
        faq: [{ question: "क्या संगीत चलते समय टैप कर सकते हैं?", answer: "हाँ, यही मुख्य उपयोग है।" }, { question: "कितने टैप चाहिए?", answer: "न्यूनतम 4; 8-16 के बाद रिज़ल्ट स्थिर हो जाता है।" }, { question: "क्या BPM बदलता है सुनते समय?", answer: "ज़्यादातर पॉप और इलेक्ट्रॉनिक में नहीं। लाइव और जैज़ में टेम्पो बदल सकता है।" }, { question: "BPM को मेट्रोनोम में कैसे उपयोग करें?", answer: "BPM कॉपी करें, मेट्रोनोम खोलें और वही नंबर डालें।" }, { question: "स्पेसबार या क्लिक?", answer: "स्पेसबार अक्सर माउस क्लिक से ज़्यादा सटीक होता है।" }]
      },
      "chord-transposer": {
        title: "कॉर्ड ट्रांसपोज़र", description: "कॉर्ड प्रोग्रेशन को सेमिटोन के हिसाब से ऊपर या नीचे ट्रांसपोज़ करें।",
        howItWorks: ["टेक्स्टबॉक्स में अपने कॉर्ड्स डालें।", "सेमिटोन की संख्या चुनें (+ ऊपर, - नीचे)।", "ट्रांसपोज़ किए हुए कॉर्ड्स तुरंत देखें।", "रिजल्ट कॉपी करें।", "बेस्ट की के लिए अलग-अलग ट्रांसपोज़िशन आज़माएं।", "रीसेट करें।"],
        faq: [{ question: "कौन-से कॉर्ड सिंबल सपोर्ट हैं?", answer: "कैपिटल (C, D, E), माइनर (m, min), सेवेंथ (7, maj7, m7), diminished (dim) और augmented (aug)।" }, { question: "कितने सेमिटोन ट्रांसपोज़ कर सकते हैं?", answer: "-11 से +11 तक, जो सभी 12 कीज़ कवर करता है।" }, { question: "ट्रांसपोज़ क्यों करें?", answer: "की को आवाज़, वाद्य या अन्य संगीतकारों के अनुसार ढालने के लिए।" }, { question: "क्या capo के लिए उपयोग कर सकते हैं?", answer: "हाँ। टारगेट की के आधार पर capo पोज़िशन कैलकुलेट करें।" }, { question: "क्या कोई इनपुट लिमिट है?", answer: "स्टैंडर्ड कॉर्ड सिंबल स्पेस से अलग करके डालें।" }]
      },
      "sound-level-meter": {
        title: "ऑनलाइन साउंड लेवल मीटर", description: "माइक्रोफ़ोन से अनुमानित dB स्तर को समायोज्य संवेदनशीलता के साथ मापें।",
        howItWorks: ["'माइक्रोफ़ोन चालू करें' पर क्लिक करें।", "कमरे में एक स्थिर जगह चुनें।", "मौजूदा dB वैल्यू और ग्राफिक देखें।", "मिनिमम, मैक्सिमम और एवरेज नोट करें।", "सटीक माप के लिए डिवाइस स्थिर रखें।", "अलग-अलग वातावरण में मूल्यों की तुलना करें।"],
        faq: [{ question: "मीटर कितना सटीक है?", answer: "यह माइक्रोफ़ोन सिग्नल पर आधारित अनुमान है। पेशेवर उपयोग के लिए प्रमाणित नहीं।" }, { question: "अभ्यास के लिए सामान्य स्तर?", answer: "अकूस्टिक वाद्य के लिए 60-75 dB। 85 dB से ऊपर लंबे समय तक सुनने से सुनने की क्षमता प्रभावित हो सकती है।" }, { question: "क्या कमरे का शोर चेक कर सकते हैं?", answer: "हाँ। औसत dB से कमरे की शांति आंकें।" }, { question: "क्या माइक्रोफ़ोन के बिना काम करता है?", answer: "नहीं। मीटर के लिए माइक्रोफ़ोन एक्सेस ज़रूरी है।" }, { question: "ग्राफ कैसे पढ़ें?", answer: "ग्राफ पिछले 30 सेकंड की dB लेवल दिखाता है।" }]
      },
      "pitch-generator": {
        title: "पिच जनरेटर", description: "20 Hz से 20000 Hz तक शुद्ध टोन जनरेट करें, ईयर ट्रेनिंग और ऑडियो टेस्ट के लिए।",
        howItWorks: ["मनचाहा फ्रीक्वेंसी सेट करें।", "सुरक्षित वॉल्यूम सेट करें।", "Start पर क्लिक करें।", "टोन को रेफरेंस नोट या ट्रेनिंग के लिए उपयोग करें।", "अन्य नोट्स एक्सप्लोर करने के लिए फ्रीक्वेंसी बदलें।", "Stop पर क्लिक करें।"],
        faq: [{ question: "कौन-सा फ्रीक्वेंसी रेंज उपलब्ध है?", answer: "20 Hz से 20000 Hz तक, पूरा श्रव्य क्षेत्र।" }, { question: "क्या ईयर ट्रेनिंग के लिए उपयोग कर सकते हैं?", answer: "हाँ। रेफरेंस फ्रीक्वेंसी सेट करें और नोट्स या इंटरवल पहचानने का अभ्यास करें।" }, { question: "क्या हाई फ्रीक्वेंसी सुरक्षित है?", answer: "हमेशा कम वॉल्यूम से शुरू करें, खासकर 8000 Hz से ऊपर।" }, { question: "क्या स्पीकर टेस्ट के लिए उपयोग कर सकते हैं?", answer: "हाँ। स्पीकर या हेडफोन टेस्ट करने के लिए फ्रीक्वेंसी स्वीप करें।" }, { question: "टोन कितनी देर बज सकती है?", answer: "असीमित। काम पूरा होने पर हमेशा रोकें।" }]
      }
    },
    cookie: {
      text: "हम आपके अनुभव को बेहतर बनाने, विज्ञापन दिखाने और ट्रैफिक विश्लेषण के लिए कुकीज़ का उपयोग करते हैं।",
      privacy: "गोपनीयता नीति",
      accept: "सभी स्वीकार करें",
      decline: "सभी अस्वीकार करें",
      customize: "प्राथमिकताएं अनुकूलित करें",
      savePrefs: "प्राथमिकताएं सहेजें",
      necessary: "आवश्यक",
      necessaryDesc: "साइट की बुनियादी कार्यक्षमता के लिए जरूरी।",
      analytics: "विश्लेषण",
      analyticsDesc: "हमें साइट के उपयोग को समझने में मदद करता है।",
      advertising: "विज्ञापन",
      advertisingDesc: "विज्ञापन राजस्व के माध्यम से मुफ्त पहुंच का समर्थन करता है।"
    }
  },
  no: {
    meta: {
      title: "TuneUniversal - gratis musikkverktøy",
      description: "Stem instrumenter, øv på tempo og transponer akkorder med gratis musikkverktøy på nett."
    },
    nav: {
      home: "Hjem",
      tools: "Verktøy",
      language: "Språk"
    },
    hero: {
      eyebrow: "Gratis musikkverktøy",
      title: "TuneUniversal",
      description: "En rask plattform for stemming, rytmetrening og akkordarbeid på alle enheter.",
      cta: "Utforsk verktøy"
    },
    home: {
      toolHeading: "Musikkverktøy",
      faqHeading: "Vanlige spørsmål",
      howHeading: "Slik fungerer TuneUniversal"
    },
    tool: {
      detectedNote: "Registrert tone",
      frequency: "Frekvens",
      cents: "Cents",
      flat: "For lav",
      sharp: "For høy",
      inTune: "I tone",
      requestMic: "Aktiver mikrofon",
      stopMic: "Stopp mikrofon",
      micError: "Mikrofontilgang mislyktes. Sjekk nettlesertillatelsene og prøv igjen.",
      bpm: "BPM",
      start: "Start",
      stop: "Stopp",
      reset: "Nullstill",
      tap: "Trykk",
      history: "Siste trykk",
      meter: "Taktart",
      inputChords: "Akkordinndata",
      semitones: "Semitoner",
      outputChords: "Transponert resultat"
    },
    common: {
      howItWorks: "Slik fungerer det",
      faq: "Vanlige spørsmål",
      otherTools: "Andre verktøy"
    },
    tools: {
      "guitar-tuner": {
        title: "Gitartuner på nett", description: "Bruk mikrofonen for å stemme gitar raskt, med støtte for vanlige og alternative stemminger.",
        howItWorks: ["Klikk på 'Aktiver mikrofon' og gi tilgang.", "Velg en stemming fra menyen.", "Plukk en streng og la den ringe.", "Se på nålen: venstre = for lav, høyre = for høy, midten = perfekt.", "Drei stemmeskruen sakte til nålen er sentrert.", "Gjenta for alle strenger."],
        faq: [{ question: "Hvordan aktiverer jeg mikrofonen?", answer: "Klikk på Aktiver mikrofon og tillat tilgang. Hvis det mislykkes, tilbakestill mikrofontillatelser i nettleserinnstillingene." }, { question: "Kan jeg stemme med mobil?", answer: "Ja. Åpne stemmetuneren i mobilnettleseren. På iOS fungerer Safari 14.3+; på Android fungerer Chrome og Firefox." }, { question: "Hvor ofte bør jeg stemme gitaren?", answer: "Hver gang du spiller. Temperatur, luftfuktighet og strengspenning endres alltid litt." }, { question: "Hvorfor svinger den registrerte tonen?", answer: "Tonregistreringen svinger mens strengen vibrerer. Plukk hardt og unngå bakgrunnsstøy." }, { question: "Trenger jeg en app?", answer: "Nei. TuneUniversal fungerer i nettleseren uten installasjon på Windows, macOS, iOS og Android." }]
      },
      "bass-tuner": {
        title: "Online bastuner", description: "Stem bass raskt med mikrofon, med standard- og alternative stemminger.",
        howItWorks: ["Klikk på 'Aktiver mikrofon'.", "Velg en basstemming.", "Plukk en streng.", "Se på note og nålposisjon.", "Drei skruen til nålen er sentrert.", "Gjenta for alle fire strenger."],
        faq: [{ question: "Fungerer stemmetuneren for bassgitar?", answer: "Ja. Den registrerer lave frekvenser like nøyaktig som gitar." }, { question: "Hva er standardstemming for bass?", answer: "E1-A1-D2-G2, fra lavest til høyest." }, { question: "Finnes det alternative stemminger?", answer: "Ja, inkludert Drop D og D Standard." }, { question: "Hvorfor er registrering av lave toner tregere?", answer: "Lave frekvenser har lengre bølgelengder. La strengen ringe lenger." }, { question: "Kan jeg stemme elbass?", answer: "Ja, via mikrofon eller lydsystem." }]
      },
      "ukulele-tuner": {
        title: "Online ukuleletuner", description: "Stem ukulele med mikrofon, med støtte for GCEA og alternative stemminger.",
        howItWorks: ["Klikk på 'Aktiver mikrofon'.", "Velg ukulelestemming (standard GCEA).", "Plukk G-strengen.", "Drei stemmeskruen.", "Gjenta for C, E og A.", "Sjekk alle strenger til slutt."],
        faq: [{ question: "Hva er standardstemming for ukulele?", answer: "Sopran/konsert/tenor bruker G4-C4-E4-A4. Baryton D3-G3-B3-E4." }, { question: "Hvilke stemminger finnes?", answer: "GCEA, D-stemming, Low G og andre alternativer." }, { question: "Kan jeg stemme med telefon?", answer: "Ja. Åpne stemmetuneren i mobilnettleseren." }, { question: "Hvorfor svinger ukuleleregistreringen?", answer: "Nylonstrenger reagerer tregere. Plukk hardt og hold mikrofonen nær." }, { question: "Fungerer for alle størrelser?", answer: "Ja, for sopran, konsert, tenor og baryton." }]
      },
      metronome: {
        title: "Metronom på nett", description: "Øv med justerbar BPM, underdelinger, aksenter og vanlige taktarter.",
        howItWorks: ["Still inn ønsket BPM.", "Velg taktart (4/4, 3/4, 6/8 osv.).", "Klikk på Start.", "Spill med klikket.", "Juster tempoet ved behov.", "Øk BPM gradvis."],
        faq: [{ question: "Hvilken BPM bør jeg starte med?", answer: "50-70% av måltempet. Øk når du spiller rent tre ganger på rad." }, { question: "Hvilken taktart velger jeg?", answer: "4/4 for pop og rock, 3/4 for vals, 6/8 for ballader." }, { question: "Kan det brukes for alle instrumenter?", answer: "Ja. Metronomen er universell." }, { question: "Hva er rytmiske underdelinger?", answer: "De deler hvert slag i 2, 3 eller 4 like deler for mer presis indre rytmefølelse." }, { question: "Forskjell mellom metronom og click track?", answer: "Metronomen er frittstående. Click track er DAW-versjonen." }]
      },
      "tap-bpm": {
        title: "Tap BPM-teller", description: "Trykk sammen med musikken og beregn gjennomsnittlig BPM på få sekunder.",
        howItWorks: ["Åpne Tap BPM-siden.", "Start musikken.", "Trykk på knappen eller mellomromstasten på hvert slag.", "Fortsett i minst 8-16 trykk.", "Les av gjennomsnittlig BPM.", "Trykk på Nullstill for å starte på nytt."],
        faq: [{ question: "Kan jeg tappe mens musikk spilles?", answer: "Ja, det er hovedbruken." }, { question: "Hvor mange trykk trengs?", answer: "Minimum 4; etter 8-16 stabiliserer resultatet seg." }, { question: "Endres BPM under lytting?", answer: "Ikke i de fleste pop og elektronisk musikk. Live og jazz kan ha tempoendringer." }, { question: "Hvordan bruker jeg BPM med metronomen?", answer: "Kopier BPM, åpne metronomen og legg inn samme tall." }, { question: "Mellomromstast eller klikk?", answer: "Mellomromstasten er ofte mer presis enn museklikk." }]
      },
      "chord-transposer": {
        title: "Akkordtransponering", description: "Transponer akkordprogresjoner opp eller ned med semitoner.",
        howItWorks: ["Skriv inn akkordene dine i tekstboksen.", "Velg antall semitoner (+ opp, - ned).", "Se de transponerte akkordene umiddelbart.", "Kopier resultatet.", "Prøv ulike transposisjoner for beste toneart.", "Nullstill for å starte på nytt."],
        faq: [{ question: "Hvilke akkordsymboler støttes?", answer: "Store bokstaver (C, D, E), mollsuffikser (m, min), septimer (7, maj7, m7), diminished (dim) og augmented (aug)." }, { question: "Hvor mange semitoner kan jeg transponere?", answer: "Fra -11 til +11, som dekker alle 12 tonearter." }, { question: "Hvorfor transponere?", answer: "For å tilpasse tonearten til stemmen, instrumentet eller andre musikere." }, { question: "Kan jeg bruke det for capo?", answer: "Ja. Beregn capo-posisjonen basert på måltonearten." }, { question: "Er det noen inndatabegrensninger?", answer: "Skriv inn standard akkordsymboler atskilt med mellomrom." }]
      },
      "sound-level-meter": {
        title: "Lydmåler på nett", description: "Mål estimert lydnivå i dB med mikrofon og justerbar følsomhet.",
        howItWorks: ["Klikk på 'Aktiver mikrofon'.", "Velg et stabilt sted i rommet.", "Se på gjeldende dB-verdi og grafikk.", "Noter minimum, maksimum og gjennomsnitt.", "Hold enheten stille for mer nøyaktig måling.", "Sammenlign verdier i ulike miljøer."],
        faq: [{ question: "Hvor nøyaktig er måleren?", answer: "Det er et estimat basert på mikrofonsignalet. Ikke sertifisert for profesjonell bruk." }, { question: "Normalt nivå for øving?", answer: "60-75 dB for akustiske instrumenter. Over 85 dB lenge kan gi hørselsskade." }, { question: "Kan jeg sjekke romstøy?", answer: "Ja. Bruk gjennomsnittlig dB for å vurdere hvor stille eller støyende et rom er." }, { question: "Fungerer uten mikrofon?", answer: "Nei. Måleren krever mikrofontilgang." }, { question: "Hvordan leser jeg grafen?", answer: "Grafen viser dB-nivåene de siste 30 sekundene." }]
      },
      "pitch-generator": {
        title: "Tonegenerator", description: "Generer en ren tone fra 20 Hz til 20000 Hz for gehørtrening og lydtester.",
        howItWorks: ["Still inn ønsket frekvens.", "Still inn et trygt volum.", "Klikk på Start.", "Bruk tonen som referansetone eller for trening.", "Juster frekvensen for å utforske andre noter.", "Klikk på Stopp."],
        faq: [{ question: "Hvilket frekvensområde er tilgjengelig?", answer: "Fra 20 Hz til 20000 Hz, hele det hørbare spekteret." }, { question: "Kan jeg bruke det for gehørtrening?", answer: "Ja. Still inn en referansefrekvens og øv på å gjenkjenne noter eller intervaller." }, { question: "Er det trygt ved høye frekvenser?", answer: "Start alltid med lavt volum, særlig over 8000 Hz." }, { question: "Kan jeg bruke det for høyttalertest?", answer: "Ja. Sveip gjennom frekvenser for å teste høyttalere eller hodetelefoner." }, { question: "Hvor lenge kan tonen spille?", answer: "Ubegrenset. Stopp alltid når du er ferdig." }]
      }
    },
    cookie: {
      text: "Vi bruker informasjonskapsler for å forbedre opplevelsen din, vise annonser og analysere trafikk.",
      privacy: "Personvernerklæring",
      accept: "Godta alle",
      decline: "Avvis alle",
      customize: "Tilpass innstillinger",
      savePrefs: "Lagre innstillinger",
      necessary: "Nødvendige",
      necessaryDesc: "Kreves for grunnleggende nettstedsfunksjoner.",
      analytics: "Analyse",
      analyticsDesc: "Hjelper oss å forstå hvordan nettstedet brukes.",
      advertising: "Annonsering",
      advertisingDesc: "Støtter gratis tilgang gjennom annonseinntekter."
    }
  }
};

function applyDictionaryOverride(dictionary: Dictionary, override?: DictionaryOverride, locale?: Locale): Dictionary {
  if (!override) {
    return locale ? { ...dictionary, localeName: localeNames[locale] } : dictionary;
  }

  const mergedTools = Object.fromEntries(
    Object.entries(dictionary.tools).map(([slug, content]) => [slug, { ...content, ...(override.tools?.[slug] ?? {}) }])
  );

  return {
    ...dictionary,
    ...override,
    localeName: locale ? localeNames[locale] : dictionary.localeName,
    meta: { ...dictionary.meta, ...(override.meta ?? {}) },
    nav: { ...dictionary.nav, ...(override.nav ?? {}) },
    hero: { ...dictionary.hero, ...(override.hero ?? {}) },
    home: { ...dictionary.home, ...(override.home ?? {}) },
    tool: { ...dictionary.tool, ...(override.tool ?? {}) },
    common: { ...dictionary.common, ...(override.common ?? {}) },
    tools: mergedTools
  };
}

export async function getDictionary(locale: string | undefined): Promise<Dictionary> {
  const requestedLocale = isLocale(locale) ? locale : defaultLocale;
  const key = getContentLocale(requestedLocale);
  const dictionary = await loaders[key]();

  if (requestedLocale === key && !localeOverrides[requestedLocale]) {
    return dictionary;
  }

  return applyDictionaryOverride(dictionary, localeOverrides[requestedLocale], requestedLocale);
}

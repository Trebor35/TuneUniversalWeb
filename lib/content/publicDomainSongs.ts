import { getContentLocale, withLocaleFallbacks, type BaseLocale, type Locale } from "@/lib/i18n/locales";

export type PublicDomainSongSlug =
  | "ode-to-joy"
  | "amazing-grace"
  | "greensleeves"
  | "frere-jacques"
  | "au-clair-de-la-lune"
  | "sakura-sakura"
  | "twinkle-twinkle-little-star"
  | "mary-had-a-little-lamb"
  | "row-row-row-your-boat"
  | "london-bridge"
  | "hot-cross-buns"
  | "baa-baa-black-sheep"
  | "old-macdonald-had-a-farm"
  | "skip-to-my-lou"
  | "the-muffin-man"
  | "yankee-doodle"
  | "jingle-bells"
  | "silent-night"
  | "auld-lang-syne"
  | "oh-susanna"
  | "alouette"
  | "when-the-saints-go-marching-in";

export type PublicDomainSong = {
  slug: PublicDomainSongSlug;
  title: string;
  origin: string;
  key: string;
  meter: string;
  bpm: number;
  chords: string[];
  melody: string[];
  audience?: "children" | "general";
  sourceNote: string;
  practiceTips: string[];
};

export const publicDomainSongSlugs: PublicDomainSongSlug[] = [
  "ode-to-joy",
  "amazing-grace",
  "greensleeves",
  "frere-jacques",
  "au-clair-de-la-lune",
  "sakura-sakura",
  "twinkle-twinkle-little-star",
  "mary-had-a-little-lamb",
  "row-row-row-your-boat",
  "london-bridge",
  "hot-cross-buns",
  "baa-baa-black-sheep",
  "old-macdonald-had-a-farm",
  "skip-to-my-lou",
  "the-muffin-man",
  "yankee-doodle",
  "jingle-bells",
  "silent-night",
  "auld-lang-syne",
  "oh-susanna",
  "alouette",
  "when-the-saints-go-marching-in"
];

export const publicDomainSongs: Record<PublicDomainSongSlug, PublicDomainSong> = {
  "ode-to-joy": {
    slug: "ode-to-joy",
    title: "Ode to Joy",
    origin: "Ludwig van Beethoven, melody from Symphony No. 9, 1824",
    key: "D major",
    meter: "4/4",
    bpm: 92,
    chords: ["D", "A", "D", "G", "D", "A", "D"],
    melody: ["F# F# G A", "A G F# E", "D D E F#", "F# E E", "F# F# G A", "A G F# E", "D D E F#", "E D D"],
    sourceNote: "Public-domain composition. This is a simplified educational TuneUniversal arrangement, not copied from a modern edition.",
    practiceTips: ["Tune to standard pitch before playing.", "Use a steady 4/4 pulse.", "Start slowly and keep every quarter note even."]
  },
  "amazing-grace": {
    slug: "amazing-grace",
    title: "Amazing Grace",
    origin: "Traditional hymn melody New Britain, 19th century",
    key: "G major",
    meter: "3/4",
    bpm: 76,
    chords: ["G", "C", "G", "D", "G", "C", "G", "D", "G"],
    melody: ["D G B", "B A G", "B A G", "E D", "D G B", "B A G", "B A G", "D G"],
    sourceNote: "Public-domain hymn tune. This page uses an original simplified chord and note guide without reproducing copyrighted editions.",
    practiceTips: ["Count three beats per bar.", "Let long notes ring.", "Try the chord transposer if the key is too high."]
  },
  greensleeves: {
    slug: "greensleeves",
    title: "Greensleeves",
    origin: "English traditional melody, 16th century",
    key: "A minor",
    meter: "6/8",
    bpm: 72,
    chords: ["Am", "G", "Am", "E", "Am", "C", "G", "Am", "E", "Am"],
    melody: ["E A B C", "D C B G", "E A B C", "B A G# E", "E A B C", "D C B G", "A G# A"],
    sourceNote: "Traditional public-domain melody. The notation here is a short educational reduction created for TuneUniversal.",
    practiceTips: ["Feel two large beats in 6/8.", "Keep the minor character soft.", "Practice slowly with the metronome accent on beat one."]
  },
  "frere-jacques": {
    slug: "frere-jacques",
    title: "Frere Jacques",
    origin: "French traditional round",
    key: "C major",
    meter: "4/4",
    bpm: 96,
    chords: ["C", "C", "G", "C"],
    melody: ["C D E C", "C D E C", "E F G", "E F G", "G A G F E C", "G A G F E C", "C G C", "C G C"],
    sourceNote: "Traditional public-domain children's round. TuneUniversal provides a simplified note-and-chord study version.",
    practiceTips: ["Use it as a warm-up.", "Try playing the melody as a round with two instruments.", "Keep the tempo relaxed."]
  },
  "au-clair-de-la-lune": {
    slug: "au-clair-de-la-lune",
    title: "Au Clair de la Lune",
    origin: "French traditional song, 18th century",
    key: "C major",
    meter: "4/4",
    bpm: 82,
    chords: ["C", "G", "C", "F", "C", "G", "C"],
    melody: ["C C C D", "E D C E", "D D C", "C C C D", "E D C E", "D C"],
    sourceNote: "Traditional public-domain melody. This is a compact educational arrangement made for the site.",
    practiceTips: ["Good first melody for beginners.", "Use open-position chords.", "Listen for clean note endings."]
  },
  "sakura-sakura": {
    slug: "sakura-sakura",
    title: "Sakura Sakura",
    origin: "Japanese traditional melody",
    key: "A minor pentatonic",
    meter: "4/4",
    bpm: 68,
    chords: ["Am", "Em", "Am", "G", "Am"],
    melody: ["A B C B", "A B C B", "A C D C B", "A B C B A"],
    sourceNote: "Traditional public-domain melody. TuneUniversal uses a simplified study version, not a copied modern score.",
    practiceTips: ["Keep the phrasing calm.", "Use the reference tone before starting.", "Try a slower BPM first."]
  },
  "twinkle-twinkle-little-star": {
    slug: "twinkle-twinkle-little-star",
    title: "Twinkle Twinkle Little Star",
    origin: "Traditional melody Ah! vous dirai-je, maman, 18th century",
    key: "C major",
    meter: "4/4",
    bpm: 84,
    chords: ["C", "F", "C", "G", "C", "F", "C", "G", "C"],
    melody: [
      "C C G G",
      "A A G",
      "F F E E",
      "D D C",
      "G G F F",
      "E E D",
      "G G F F",
      "E E D",
      "C C G G",
      "A A G",
      "F F E E",
      "D D C"
    ],
    audience: "children",
    sourceNote:
      "Traditional public-domain melody. TuneUniversal provides a simplified note-and-chord study version for children.",
    practiceTips: ["Start with one note per beat.", "Clap the rhythm before playing.", "Use C, F and G slowly."]
  },
  "mary-had-a-little-lamb": {
    slug: "mary-had-a-little-lamb",
    title: "Mary Had a Little Lamb",
    origin: "Traditional children's melody, 19th century",
    key: "C major",
    meter: "4/4",
    bpm: 88,
    chords: ["C", "G", "C"],
    melody: ["E D C D", "E E E", "D D D", "E G G", "E D C D", "E E E", "E D D E", "D C"],
    audience: "children",
    sourceNote: "Public-domain children's melody. This is a simplified educational arrangement created for TuneUniversal.",
    practiceTips: ["Use fingers 1, 2 and 3 first.", "Keep the rhythm even.", "Try it on piano, recorder or ukulele."]
  },
  "row-row-row-your-boat": {
    slug: "row-row-row-your-boat",
    title: "Row Row Row Your Boat",
    origin: "Traditional round, 19th century",
    key: "C major",
    meter: "4/4",
    bpm: 92,
    chords: ["C", "G", "C"],
    melody: ["C C C D", "E", "E D E F", "G", "C C C G", "G E E C", "G F E D", "C"],
    audience: "children",
    sourceNote:
      "Traditional public-domain round. TuneUniversal uses a short simplified study version without publishing protected modern editions.",
    practiceTips: ["Sing or hum the rhythm before playing.", "Try it as a round with two players.", "Use the metronome at a slow speed."]
  },
  "london-bridge": {
    slug: "london-bridge",
    title: "London Bridge",
    origin: "English traditional children's song",
    key: "G major",
    meter: "4/4",
    bpm: 96,
    chords: ["G", "D", "G"],
    melody: ["G A G F#", "E F# G", "D E F#", "E F# G", "G A G F#", "E F# G", "D G E C", "D G"],
    audience: "children",
    sourceNote: "Traditional public-domain melody. The notes and chords are a simplified TuneUniversal teaching version.",
    practiceTips: ["Play the melody in short phrases.", "Use G and D chords first.", "Keep the tempo playful but steady."]
  },
  "hot-cross-buns": {
    slug: "hot-cross-buns",
    title: "Hot Cross Buns",
    origin: "English traditional nursery tune",
    key: "C major",
    meter: "4/4",
    bpm: 76,
    chords: ["C", "G", "C"],
    melody: ["E D C", "E D C", "C C C C", "D D D D", "E D C"],
    audience: "children",
    sourceNote: "Traditional public-domain nursery tune. This page uses a very short simplified arrangement for beginners.",
    practiceTips: ["Perfect for the first three notes.", "Play slowly and count aloud.", "Repeat until each note is clean."]
  },
  "baa-baa-black-sheep": {
    slug: "baa-baa-black-sheep",
    title: "Baa Baa Black Sheep",
    origin: "Traditional nursery rhyme melody",
    key: "C major",
    meter: "4/4",
    bpm: 84,
    chords: ["C", "F", "C", "G", "C"],
    melody: [
      "C C G G",
      "A A A A",
      "G",
      "F F E E",
      "D D C",
      "G G F F",
      "E E D",
      "G G F F",
      "E E D",
      "C C G G",
      "A A G",
      "F F E E",
      "D D C"
    ],
    audience: "children",
    sourceNote: "Traditional public-domain nursery melody. TuneUniversal provides a simplified note-and-chord learning page.",
    practiceTips: ["Use the same melody shape as Twinkle Twinkle.", "Try clapping first.", "Keep the chord changes slow."]
  },
  "old-macdonald-had-a-farm": {
    slug: "old-macdonald-had-a-farm",
    title: "Old MacDonald Had a Farm",
    origin: "Traditional children's song, 19th century",
    key: "G major",
    meter: "4/4",
    bpm: 104,
    chords: ["G", "D", "G", "C", "G", "D", "G"],
    melody: ["G G G D", "E E D", "B B A A", "G", "D D G G", "G G G", "D D G"],
    audience: "children",
    sourceNote:
      "Traditional public-domain children's melody. TuneUniversal uses a simplified educational note-and-chord version without publishing protected lyrics.",
    practiceTips: ["Keep a light 4/4 pulse.", "Practice the G to D change slowly.", "Use the Tap BPM tool to find a comfortable speed."]
  },
  "skip-to-my-lou": {
    slug: "skip-to-my-lou",
    title: "Skip to My Lou",
    origin: "American traditional play-party song, 19th century",
    key: "C major",
    meter: "4/4",
    bpm: 112,
    chords: ["C", "G", "C", "F", "C", "G", "C"],
    melody: ["G E E", "G E E", "F D D", "F D D", "E C C D", "E F G", "G E C"],
    audience: "children",
    sourceNote:
      "Traditional public-domain tune. This is a compact study arrangement created for TuneUniversal beginners.",
    practiceTips: ["Use short, clean phrases.", "Count four steady beats.", "Try clapping the rhythm before playing."]
  },
  "the-muffin-man": {
    slug: "the-muffin-man",
    title: "The Muffin Man",
    origin: "English traditional nursery song, 19th century",
    key: "G major",
    meter: "4/4",
    bpm: 96,
    chords: ["G", "D", "G", "C", "G", "D", "G"],
    melody: ["D G G A", "B G", "D G G A", "B G", "B C B A", "G A B", "A D"],
    audience: "children",
    sourceNote:
      "Traditional public-domain nursery song. TuneUniversal provides simplified notes and chords for practice only.",
    practiceTips: ["Play slowly first.", "Keep the melody even.", "Use G and D as the first chord targets."]
  },
  "yankee-doodle": {
    slug: "yankee-doodle",
    title: "Yankee Doodle",
    origin: "Traditional American melody, 18th century",
    key: "D major",
    meter: "2/4",
    bpm: 108,
    chords: ["D", "A", "D", "G", "D", "A", "D"],
    melody: ["D D E F#", "D F# E A", "D D E F#", "D C# D", "A D A B", "A G F# E", "D D E F#", "E D D"],
    audience: "children",
    sourceNote:
      "Traditional public-domain melody. This page uses an original simplified study version for beginners.",
    practiceTips: ["Feel two beats per bar.", "Use alternate picking on guitar.", "Slow the metronome if the eighth notes rush."]
  },
  "jingle-bells": {
    slug: "jingle-bells",
    title: "Jingle Bells",
    origin: "James Lord Pierpont, 1857",
    key: "G major",
    meter: "4/4",
    bpm: 116,
    chords: ["G", "C", "G", "A7", "D", "G"],
    melody: ["B B B", "B B B", "B D G A", "B", "C C C C", "C B B B", "B A A B", "A D"],
    audience: "children",
    sourceNote:
      "Public-domain composition. TuneUniversal offers a simplified educational guide, not a copy of a modern edition.",
    practiceTips: ["Keep the repeated notes light.", "Use a bright but controlled tempo.", "Practice the A7 to D change slowly."]
  },
  "silent-night": {
    slug: "silent-night",
    title: "Silent Night",
    origin: "Franz Xaver Gruber and Joseph Mohr, 1818",
    key: "G major",
    meter: "3/4",
    bpm: 72,
    chords: ["G", "D", "G", "C", "G", "D", "G"],
    melody: ["D E D B", "D E D B", "A A F#", "G G D", "E E G F# E D", "E E G F# E D", "A A C A F#", "G"],
    sourceNote:
      "Public-domain Christmas carol. The notes and chords here are a simplified educational arrangement made for TuneUniversal.",
    practiceTips: ["Count three gentle beats.", "Let each phrase breathe.", "Use a slow metronome and avoid rushing the rests."]
  },
  "auld-lang-syne": {
    slug: "auld-lang-syne",
    title: "Auld Lang Syne",
    origin: "Traditional Scottish melody, 18th century",
    key: "G major",
    meter: "4/4",
    bpm: 78,
    chords: ["G", "D", "Em", "C", "G", "D", "G"],
    melody: ["D G G B", "A G A B", "G B D E", "D B G", "D G G B", "A G A B", "G E D B", "A G"],
    sourceNote:
      "Traditional public-domain melody. TuneUniversal provides a short simplified chord and note guide.",
    practiceTips: ["Use a warm legato feel.", "Keep chord changes relaxed.", "Transpose if the key is uncomfortable."]
  },
  "oh-susanna": {
    slug: "oh-susanna",
    title: "Oh! Susanna",
    origin: "Stephen Foster, 1848",
    key: "G major",
    meter: "4/4",
    bpm: 100,
    chords: ["G", "D", "G", "C", "G", "D", "G"],
    melody: ["D G G A", "B B A G", "E G G A", "B A G", "D G G A", "B B A G", "E E D D", "G"],
    sourceNote:
      "Public-domain melody. This page contains a simplified instrumental study version and does not reproduce protected editions.",
    practiceTips: ["Keep the rhythm bouncy.", "Start with G and D chords.", "Use the metronome accent to stabilize the phrase."]
  },
  alouette: {
    slug: "alouette",
    title: "Alouette",
    origin: "French-Canadian traditional song, 19th century",
    key: "C major",
    meter: "4/4",
    bpm: 108,
    chords: ["C", "G", "C", "F", "C", "G", "C"],
    melody: ["G A G E", "G A G E", "G G A B C", "B A G", "G A G E", "F E D C"],
    audience: "children",
    sourceNote:
      "Traditional public-domain melody. TuneUniversal uses a simplified educational arrangement without publishing protected lyrics.",
    practiceTips: ["Use small phrases.", "Practice slowly before increasing BPM.", "Try it with guitar, piano or ukulele."]
  },
  "when-the-saints-go-marching-in": {
    slug: "when-the-saints-go-marching-in",
    title: "When the Saints Go Marching In",
    origin: "Traditional gospel melody, early 20th century",
    key: "C major",
    meter: "4/4",
    bpm: 96,
    chords: ["C", "F", "C", "G", "C"],
    melody: ["C E F G", "C E F G", "C E F G E", "C E D", "E E D C", "C E G G", "G F E F", "G E C"],
    sourceNote:
      "Traditional public-domain melody in a simplified educational arrangement created for TuneUniversal.",
    practiceTips: ["Use a steady swing-free pulse first.", "Make the melody sing clearly.", "Add expression only after the notes are stable."]
  }
};

export const songsUi: Record<
  Locale,
  {
    allSongs: string;
    bpm: string;
    chords: string;
    description: string;
    hero: string;
    key: string;
    legalNote: string;
    melody: string;
    meter: string;
    origin: string;
    practice: string;
    publicDomain: string;
    source: string;
    title: string;
    tools: string;
  }
> = withLocaleFallbacks({
  ar: {
    allSongs: "كل القطع",
    bpm: "السرعة",
    chords: "الأكوردات",
    description: "قطع موسيقية من الملكية العامة مع أكوردات ونوتات مبسطة للتدريب.",
    hero: "تدرب على ألحان آمنة قانونيا مع أدوات TuneUniversal.",
    key: "المقام",
    legalNote: "لا ننشر كلمات أغان حديثة أو نسخا محمية. هذه ترتيبات تعليمية مبسطة.",
    melody: "النوتات المبسطة",
    meter: "الميزان",
    origin: "الأصل",
    practice: "نصائح تدريب",
    publicDomain: "ملكية عامة",
    source: "ملاحظة الحقوق",
    title: "مقطوعات وسبارتات مجانية",
    tools: "أدوات مفيدة"
  },
  de: {
    allSongs: "Alle Stücke",
    bpm: "BPM",
    chords: "Akkorde",
    description: "Gemeinfreie Stücke mit vereinfachten Akkorden und Noten zum Üben.",
    hero: "Übe rechtlich sichere Melodien mit den TuneUniversal-Werkzeugen.",
    key: "Tonart",
    legalNote: "Wir veröffentlichen keine modernen Songtexte oder geschützten Ausgaben. Diese Studienfassungen sind vereinfacht.",
    melody: "Vereinfachte Noten",
    meter: "Takt",
    origin: "Ursprung",
    practice: "Übetipps",
    publicDomain: "Gemeinfrei",
    source: "Rechtehinweis",
    title: "Kostenlose gemeinfreie Noten",
    tools: "Nützliche Werkzeuge"
  },
  en: {
    allSongs: "All pieces",
    bpm: "BPM",
    chords: "Chords",
    description: "Public-domain pieces with simplified chords and note sheets for practice.",
    hero: "Practice legally safe melodies with TuneUniversal tools.",
    key: "Key",
    legalNote: "We do not publish modern lyrics or protected editions. These are simplified educational arrangements.",
    melody: "Simplified notes",
    meter: "Meter",
    origin: "Origin",
    practice: "Practice tips",
    publicDomain: "Public domain",
    source: "Rights note",
    title: "Free public-domain sheet music",
    tools: "Useful tools"
  },
  es: {
    allSongs: "Todas las piezas",
    bpm: "BPM",
    chords: "Acordes",
    description: "Piezas de dominio público con acordes y notas simplificadas para practicar.",
    hero: "Practica melodías legalmente seguras con las herramientas de TuneUniversal.",
    key: "Tonalidad",
    legalNote: "No publicamos letras modernas ni ediciones protegidas. Estos arreglos son educativos y simplificados.",
    melody: "Notas simplificadas",
    meter: "Compás",
    origin: "Origen",
    practice: "Consejos de práctica",
    publicDomain: "Dominio público",
    source: "Nota de derechos",
    title: "Partituras gratis de dominio público",
    tools: "Herramientas útiles"
  },
  fr: {
    allSongs: "Toutes les pièces",
    bpm: "BPM",
    chords: "Accords",
    description: "Morceaux du domaine public avec accords et notes simplifiées pour travailler.",
    hero: "Travaillez des mélodies juridiquement sûres avec TuneUniversal.",
    key: "Tonalité",
    legalNote: "Nous ne publions pas de paroles modernes ni d'éditions protégées. Ces versions sont pédagogiques et simplifiées.",
    melody: "Notes simplifiées",
    meter: "Mesure",
    origin: "Origine",
    practice: "Conseils de pratique",
    publicDomain: "Domaine public",
    source: "Note de droits",
    title: "Partitions gratuites du domaine public",
    tools: "Outils utiles"
  },
  it: {
    allSongs: "Tutti gli spartiti",
    bpm: "BPM",
    chords: "Accordi",
    description: "Brani di pubblico dominio con accordi e spartiti semplificati per esercitarsi.",
    hero: "Studia melodie sicure dal punto di vista dei diritti con gli strumenti TuneUniversal.",
    key: "Tonalità",
    legalNote: "Non pubblichiamo testi moderni o edizioni protette. Questi sono arrangiamenti didattici semplificati.",
    melody: "Note semplificate",
    meter: "Metrica",
    origin: "Origine",
    practice: "Consigli di studio",
    publicDomain: "Pubblico dominio",
    source: "Nota sui diritti",
    title: "Spartiti gratis di pubblico dominio",
    tools: "Strumenti utili"
  },
  ja: {
    allSongs: "すべての曲",
    bpm: "BPM",
    chords: "コード",
    description: "練習用に簡略化したパブリックドメイン曲のコードと音名。",
    hero: "TuneUniversalのツールで安全に使えるメロディを練習できます。",
    key: "キー",
    legalNote: "現代曲の歌詞や保護された版は掲載しません。これは学習用の簡略アレンジです。",
    melody: "簡略音名",
    meter: "拍子",
    origin: "由来",
    practice: "練習のヒント",
    publicDomain: "パブリックドメイン",
    source: "権利メモ",
    title: "無料パブリックドメイン楽譜",
    tools: "便利なツール"
  },
  ko: {
    allSongs: "모든 곡",
    bpm: "BPM",
    chords: "코드",
    description: "연습용으로 단순화한 퍼블릭 도메인 곡의 코드와 음표입니다.",
    hero: "TuneUniversal 도구로 안전하게 사용할 수 있는 멜로디를 연습하세요.",
    key: "키",
    legalNote: "현대 가사나 보호된 판본은 게시하지 않습니다. 이 자료는 교육용 단순 편곡입니다.",
    melody: "단순 음표",
    meter: "박자",
    origin: "출처",
    practice: "연습 팁",
    publicDomain: "퍼블릭 도메인",
    source: "권리 안내",
    title: "무료 퍼블릭 도메인 악보",
    tools: "유용한 도구"
  },
  pt: {
    allSongs: "Todas as peças",
    bpm: "BPM",
    chords: "Acordes",
    description: "Peças em domínio público com acordes e notas simplificadas para praticar.",
    hero: "Pratique melodias juridicamente seguras com as ferramentas TuneUniversal.",
    key: "Tonalidade",
    legalNote: "Não publicamos letras modernas nem edições protegidas. Estes arranjos são educativos e simplificados.",
    melody: "Notas simplificadas",
    meter: "Compasso",
    origin: "Origem",
    practice: "Dicas de prática",
    publicDomain: "Domínio público",
    source: "Nota de direitos",
    title: "Partituras grátis em domínio público",
    tools: "Ferramentas úteis"
  },
  ru: {
    allSongs: "Все пьесы",
    bpm: "BPM",
    chords: "Аккорды",
    description: "Произведения общественного достояния с упрощенными аккордами и нотами для практики.",
    hero: "Разучивайте юридически безопасные мелодии с инструментами TuneUniversal.",
    key: "Тональность",
    legalNote: "Мы не публикуем современные тексты песен или защищенные редакции. Это упрощенные учебные аранжировки.",
    melody: "Упрощенные ноты",
    meter: "Размер",
    origin: "Происхождение",
    practice: "Советы",
    publicDomain: "Общественное достояние",
    source: "Правовая пометка",
    title: "Бесплатные ноты общественного достояния",
    tools: "Полезные инструменты"
  },
  zh: {
    allSongs: "全部曲目",
    bpm: "BPM",
    chords: "和弦",
    description: "公有领域曲目的简化和弦与音名练习页。",
    hero: "使用 TuneUniversal 工具练习版权风险更低的旋律。",
    key: "调",
    legalNote: "我们不发布现代歌词或受保护版本。这些是教学用简化编配。",
    melody: "简化音名",
    meter: "拍号",
    origin: "来源",
    practice: "练习建议",
    publicDomain: "公有领域",
    source: "版权说明",
    title: "免费公有领域乐谱",
    tools: "实用工具"
  }
} satisfies Record<BaseLocale, {
  allSongs: string;
  bpm: string;
  chords: string;
  description: string;
  hero: string;
  key: string;
  legalNote: string;
  melody: string;
  meter: string;
  origin: string;
  practice: string;
  publicDomain: string;
  source: string;
  title: string;
  tools: string;
}>, {
  nl: { allSongs: "Alle stukken", bpm: "BPM", chords: "Akkoorden", description: "Gemeinfreie stukken met vereenvoudigde akkoorden en noten om te oefenen.", hero: "Oefen juridisch veilige melodieën met TuneUniversal-tools.", key: "Toonsoort", legalNote: "We publiceren geen moderne songteksten of beschermde edities. Dit zijn vereenvoudigde educatieve arrangementen.", melody: "Vereenvoudigde noten", meter: "Maat", origin: "Oorsprong", practice: "Oefentips", publicDomain: "Publiek domein", source: "Rechtenopmerking", title: "Gratis bladmuziek uit het publiek domein", tools: "Nuttige tools" },
  pl: { allSongs: "Wszystkie utwory", bpm: "BPM", chords: "Akordy", description: "Utwory z domeny publicznej z uproszczonymi akordami i nutami do ćwiczeń.", hero: "Ćwicz prawnie bezpieczne melodie z narzędziami TuneUniversal.", key: "Tonacja", legalNote: "Nie publikujemy nowoczesnych tekstów ani chronionych wydań. Są to uproszczone aranżacje edukacyjne.", melody: "Uproszczone nuty", meter: "Metrum", origin: "Pochodzenie", practice: "Wskazówki do ćwiczeń", publicDomain: "Domena publiczna", source: "Uwaga o prawach", title: "Darmowe nuty z domeny publicznej", tools: "Przydatne narzędzia" },
  tr: { allSongs: "Tüm parçalar", bpm: "BPM", chords: "Akorlar", description: "Basitleştirilmiş akorlar ve nota sayfalarıyla kamu malı parçalar.", hero: "TuneUniversal araçlarıyla yasal olarak güvenli melodileri çalışın.", key: "Ton", legalNote: "Modern şarkı sözleri veya korunan baskılar yayınlamıyoruz. Bunlar basitleştirilmiş eğitim düzenlemeleridir.", melody: "Basitleştirilmiş notalar", meter: "Ölçü", origin: "Kaynak", practice: "Pratik ipuçları", publicDomain: "Kamu malı", source: "Haklar notu", title: "Ücretsiz kamu malı nota kağıdı", tools: "Faydalı araçlar" },
  cs: { allSongs: "Všechny skladby", bpm: "BPM", chords: "Akordy", description: "Skladby veřejné domény s jednoduchými akordy a notami pro procvičování.", hero: "Cvičte právně bezpečné melodie s nástroji TuneUniversal.", key: "Tónina", legalNote: "Nezveřejňujeme moderní texty písní ani chráněná vydání. Jde o zjednodušené vzdělávací aranžmá.", melody: "Zjednodušené noty", meter: "Takt", origin: "Původ", practice: "Tipy pro cvičení", publicDomain: "Veřejná doména", source: "Poznámka k právům", title: "Bezplatné noty z veřejné domény", tools: "Užitečné nástroje" },
  sv: { allSongs: "Alla stycken", bpm: "BPM", chords: "Ackord", description: "Stycken i det fria med förenklade ackord och noter för övning.", hero: "Öva juridiskt säkra melodier med TuneUniversal-verktyg.", key: "Tonart", legalNote: "Vi publicerar inga moderna låttexter eller skyddade utgåvor. Dessa är förenklade pedagogiska arrangemang.", melody: "Förenklade noter", meter: "Taktart", origin: "Ursprung", practice: "Övningstips", publicDomain: "Fritt material", source: "Rättsanmärkning", title: "Gratis noter från det fria", tools: "Användbara verktyg" },
  "pt-BR": { allSongs: "Todas as peças", bpm: "BPM", chords: "Acordes", description: "Peças em domínio público com acordes e notas simplificadas para prática.", hero: "Pratique melodias legalmente seguras com as ferramentas TuneUniversal.", key: "Tonalidade", legalNote: "Não publicamos letras modernas nem edições protegidas. São arranjos educacionais simplificados.", melody: "Notas simplificadas", meter: "Compasso", origin: "Origem", practice: "Dicas de prática", publicDomain: "Domínio público", source: "Nota de direitos", title: "Partituras grátis de domínio público", tools: "Ferramentas úteis" },
  hi: { allSongs: "सभी टुकड़े", bpm: "BPM", chords: "कॉर्ड्स", description: "अभ्यास के लिए सरल कॉर्ड और नोट शीट के साथ पब्लिक डोमेन के टुकड़े।", hero: "TuneUniversal टूल्स के साथ कानूनी रूप से सुरक्षित धुनों का अभ्यास करें।", key: "की", legalNote: "हम आधुनिक गीत या संरक्षित संस्करण प्रकाशित नहीं करते। ये सरलीकृत शैक्षणिक व्यवस्थाएं हैं।", melody: "सरलीकृत नोट्स", meter: "मीटर", origin: "उत्पत्ति", practice: "अभ्यास टिप्स", publicDomain: "पब्लिक डोमेन", source: "अधिकार नोट", title: "मुफ्त पब्लिक डोमेन शीट म्यूज़िक", tools: "उपयोगी टूल्स" },
  no: { allSongs: "Alle stykker", bpm: "BPM", chords: "Akkorder", description: "Offentlige stykker med forenklede akkorder og noter for øving.", hero: "Øv juridisk trygge melodier med TuneUniversal-verktøy.", key: "Toneart", legalNote: "Vi publiserer ikke moderne sangtekster eller beskyttede utgaver. Dette er forenklede pedagogiske arrangementer.", melody: "Forenklede noter", meter: "Taktart", origin: "Opprinnelse", practice: "Øvingstips", publicDomain: "Offentlig domene", source: "Rettighetsnotat", title: "Gratis noter fra offentlig domene", tools: "Nyttige verktøy" }
});

export function isPublicDomainSongSlug(value: string): value is PublicDomainSongSlug {
  return publicDomainSongSlugs.includes(value as PublicDomainSongSlug);
}

export function getPublicDomainSong(slug: PublicDomainSongSlug) {
  return publicDomainSongs[slug];
}

export type SongLocalization = {
  origin?: string;
  sourceNote?: string;
  practiceTips?: string[];
};

// Per-locale translations for the prose fields of each song (origin, legal note,
// practice tips). Title, key, meter, bpm, chords and melody stay in the shared
// international form. Any field left out falls back to the English base entry.
const songLocalizations: Partial<Record<BaseLocale, Partial<Record<PublicDomainSongSlug, SongLocalization>>>> = {
  it: {
    "ode-to-joy": { origin: "Ludwig van Beethoven, melodia dalla Sinfonia n. 9, 1824", sourceNote: "Composizione di pubblico dominio. Questo è un arrangiamento didattico semplificato di TuneUniversal, non copiato da un'edizione moderna.", practiceTips: ["Accorda all'intonazione standard prima di suonare.", "Mantieni una pulsazione stabile in 4/4.", "Inizia lentamente e tieni ogni semiminima uniforme."] },
    "amazing-grace": { origin: "Melodia di inno tradizionale New Britain, XIX secolo", sourceNote: "Melodia di inno di pubblico dominio. Questa pagina usa una guida originale semplificata di accordi e note, senza riprodurre edizioni protette.", practiceTips: ["Conta tre battiti per misura.", "Lascia risuonare le note lunghe.", "Prova il traspositore di accordi se la tonalità è troppo alta."] },
    greensleeves: { origin: "Melodia tradizionale inglese, XVI secolo", sourceNote: "Melodia tradizionale di pubblico dominio. La notazione qui è una breve riduzione didattica creata per TuneUniversal.", practiceTips: ["Senti due grandi battiti nel 6/8.", "Mantieni morbido il carattere minore.", "Esercitati lentamente con l'accento del metronomo sul primo battito."] },
    "frere-jacques": { origin: "Canone tradizionale francese", sourceNote: "Canone per bambini tradizionale di pubblico dominio. TuneUniversal offre una versione di studio semplificata di note e accordi.", practiceTips: ["Usalo come riscaldamento.", "Prova a suonare la melodia come canone con due strumenti.", "Mantieni il tempo rilassato."] },
    "au-clair-de-la-lune": { origin: "Canzone tradizionale francese, XVIII secolo", sourceNote: "Melodia tradizionale di pubblico dominio. Questo è un arrangiamento didattico compatto creato per il sito.", practiceTips: ["Ottima prima melodia per principianti.", "Usa accordi in posizione aperta.", "Ascolta le chiusure pulite delle note."] },
    "sakura-sakura": { origin: "Melodia tradizionale giapponese", sourceNote: "Melodia tradizionale di pubblico dominio. TuneUniversal usa una versione di studio semplificata, non uno spartito moderno copiato.", practiceTips: ["Mantieni il fraseggio calmo.", "Usa il tono di riferimento prima di iniziare.", "Prova prima un BPM più lento."] },
    "twinkle-twinkle-little-star": { origin: "Melodia tradizionale Ah! vous dirai-je, maman, XVIII secolo", sourceNote: "Melodia tradizionale di pubblico dominio. TuneUniversal offre una versione di studio semplificata di note e accordi per bambini.", practiceTips: ["Inizia con una nota per battito.", "Batti il ritmo prima di suonare.", "Usa C, F e G lentamente."] },
    "mary-had-a-little-lamb": { origin: "Melodia tradizionale per bambini, XIX secolo", sourceNote: "Melodia per bambini di pubblico dominio. Questo è un arrangiamento didattico semplificato creato per TuneUniversal.", practiceTips: ["Usa prima le dita 1, 2 e 3.", "Mantieni il ritmo uniforme.", "Provala al pianoforte, al flauto dolce o all'ukulele."] },
    "row-row-row-your-boat": { origin: "Canone tradizionale, XIX secolo", sourceNote: "Canone tradizionale di pubblico dominio. TuneUniversal usa una breve versione di studio semplificata, senza pubblicare edizioni moderne protette.", practiceTips: ["Canta o canticchia il ritmo prima di suonare.", "Provalo come canone con due esecutori.", "Usa il metronomo a velocità lenta."] },
    "london-bridge": { origin: "Canzone tradizionale inglese per bambini", sourceNote: "Melodia tradizionale di pubblico dominio. Le note e gli accordi sono una versione didattica semplificata di TuneUniversal.", practiceTips: ["Suona la melodia in brevi frasi.", "Usa prima gli accordi di G e D.", "Mantieni il tempo giocoso ma stabile."] },
    "hot-cross-buns": { origin: "Filastrocca tradizionale inglese", sourceNote: "Filastrocca tradizionale di pubblico dominio. Questa pagina usa un arrangiamento molto breve e semplificato per principianti.", practiceTips: ["Perfetta per le prime tre note.", "Suona lentamente e conta ad alta voce.", "Ripeti finché ogni nota è pulita."] },
    "baa-baa-black-sheep": { origin: "Melodia tradizionale di filastrocca", sourceNote: "Melodia tradizionale di filastrocca di pubblico dominio. TuneUniversal offre una pagina di apprendimento semplificata di note e accordi.", practiceTips: ["Usa la stessa forma melodica di Twinkle Twinkle.", "Prova prima a battere le mani.", "Mantieni lenti i cambi di accordo."] },
    "old-macdonald-had-a-farm": { origin: "Canzone tradizionale per bambini, XIX secolo", sourceNote: "Melodia per bambini tradizionale di pubblico dominio. TuneUniversal usa una versione didattica semplificata di note e accordi, senza pubblicare testi protetti.", practiceTips: ["Mantieni una leggera pulsazione in 4/4.", "Esercitati lentamente nel passaggio da G a D.", "Usa lo strumento Tap BPM per trovare una velocità comoda."] },
    "skip-to-my-lou": { origin: "Canzone tradizionale americana da gioco, XIX secolo", sourceNote: "Melodia tradizionale di pubblico dominio. Questo è un arrangiamento di studio compatto creato per i principianti di TuneUniversal.", practiceTips: ["Usa frasi brevi e pulite.", "Conta quattro battiti stabili.", "Prova a battere il ritmo prima di suonare."] },
    "the-muffin-man": { origin: "Canzone tradizionale inglese per bambini, XIX secolo", sourceNote: "Canzone per bambini tradizionale di pubblico dominio. TuneUniversal offre note e accordi semplificati solo per esercizio.", practiceTips: ["Suona prima lentamente.", "Mantieni la melodia uniforme.", "Usa G e D come primi obiettivi di accordo."] },
    "yankee-doodle": { origin: "Melodia tradizionale americana, XVIII secolo", sourceNote: "Melodia tradizionale di pubblico dominio. Questa pagina usa una versione di studio originale semplificata per principianti.", practiceTips: ["Senti due battiti per misura.", "Usa la pennata alternata alla chitarra.", "Rallenta il metronomo se le crome corrono."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857", sourceNote: "Composizione di pubblico dominio. TuneUniversal offre una guida didattica semplificata, non una copia di un'edizione moderna.", practiceTips: ["Mantieni leggere le note ripetute.", "Usa un tempo brillante ma controllato.", "Esercitati lentamente nel passaggio da A7 a D."] },
    "silent-night": { origin: "Franz Xaver Gruber e Joseph Mohr, 1818", sourceNote: "Canto natalizio di pubblico dominio. Le note e gli accordi qui sono un arrangiamento didattico semplificato creato per TuneUniversal.", practiceTips: ["Conta tre battiti delicati.", "Lascia respirare ogni frase.", "Usa un metronomo lento ed evita di affrettare le pause."] },
    "auld-lang-syne": { origin: "Melodia tradizionale scozzese, XVIII secolo", sourceNote: "Melodia tradizionale di pubblico dominio. TuneUniversal offre una breve guida semplificata di accordi e note.", practiceTips: ["Usa un legato caldo.", "Mantieni rilassati i cambi di accordo.", "Trasponi se la tonalità è scomoda."] },
    "oh-susanna": { origin: "Stephen Foster, 1848", sourceNote: "Melodia di pubblico dominio. Questa pagina contiene una versione di studio strumentale semplificata e non riproduce edizioni protette.", practiceTips: ["Mantieni il ritmo saltellante.", "Inizia con gli accordi di G e D.", "Usa l'accento del metronomo per stabilizzare la frase."] },
    alouette: { origin: "Canzone tradizionale franco-canadese, XIX secolo", sourceNote: "Melodia tradizionale di pubblico dominio. TuneUniversal usa un arrangiamento didattico semplificato, senza pubblicare testi protetti.", practiceTips: ["Usa frasi brevi.", "Esercitati lentamente prima di aumentare il BPM.", "Provala con chitarra, pianoforte o ukulele."] },
    "when-the-saints-go-marching-in": { origin: "Melodia gospel tradizionale, inizio XX secolo", sourceNote: "Melodia tradizionale di pubblico dominio in un arrangiamento didattico semplificato creato per TuneUniversal.", practiceTips: ["Usa prima una pulsazione stabile senza swing.", "Fai cantare chiaramente la melodia.", "Aggiungi espressione solo dopo che le note sono stabili."] }
  },
  fr: {
    "ode-to-joy": { origin: "Ludwig van Beethoven, mélodie de la Symphonie n° 9, 1824", sourceNote: "Œuvre du domaine public. Il s'agit d'un arrangement pédagogique simplifié de TuneUniversal, non copié d'une édition moderne.", practiceTips: ["Accordez au diapason standard avant de jouer.", "Gardez une pulsation régulière en 4/4.", "Commencez lentement et gardez chaque noire bien égale."] },
    "amazing-grace": { origin: "Mélodie d'hymne traditionnelle New Britain, XIXe siècle", sourceNote: "Mélodie d'hymne du domaine public. Cette page utilise un guide original simplifié d'accords et de notes, sans reproduire d'éditions protégées.", practiceTips: ["Comptez trois temps par mesure.", "Laissez résonner les notes longues.", "Essayez le transpositeur d'accords si la tonalité est trop haute."] },
    greensleeves: { origin: "Mélodie traditionnelle anglaise, XVIe siècle", sourceNote: "Mélodie traditionnelle du domaine public. La notation ici est une courte réduction pédagogique créée pour TuneUniversal.", practiceTips: ["Ressentez deux grands temps en 6/8.", "Gardez le caractère mineur tout en douceur.", "Travaillez lentement avec l'accent du métronome sur le premier temps."] },
    "frere-jacques": { origin: "Canon traditionnel français", sourceNote: "Canon pour enfants traditionnel du domaine public. TuneUniversal propose une version d'étude simplifiée de notes et d'accords.", practiceTips: ["Utilisez-le comme échauffement.", "Essayez de jouer la mélodie en canon à deux instruments.", "Gardez un tempo détendu."] },
    "au-clair-de-la-lune": { origin: "Chanson traditionnelle française, XVIIIe siècle", sourceNote: "Mélodie traditionnelle du domaine public. Il s'agit d'un arrangement pédagogique compact réalisé pour le site.", practiceTips: ["Excellente première mélodie pour débutants.", "Utilisez des accords en position ouverte.", "Écoutez la netteté des fins de notes."] },
    "sakura-sakura": { origin: "Mélodie traditionnelle japonaise", sourceNote: "Mélodie traditionnelle du domaine public. TuneUniversal utilise une version d'étude simplifiée, et non une partition moderne copiée.", practiceTips: ["Gardez un phrasé calme.", "Utilisez la note de référence avant de commencer.", "Essayez d'abord un BPM plus lent."] },
    "twinkle-twinkle-little-star": { origin: "Mélodie traditionnelle Ah! vous dirai-je, maman, XVIIIe siècle", sourceNote: "Mélodie traditionnelle du domaine public. TuneUniversal propose une version d'étude simplifiée de notes et d'accords pour les enfants.", practiceTips: ["Commencez par une note par temps.", "Frappez le rythme avant de jouer.", "Utilisez C, F et G lentement."] },
    "mary-had-a-little-lamb": { origin: "Mélodie traditionnelle pour enfants, XIXe siècle", sourceNote: "Mélodie pour enfants du domaine public. Il s'agit d'un arrangement pédagogique simplifié créé pour TuneUniversal.", practiceTips: ["Utilisez d'abord les doigts 1, 2 et 3.", "Gardez un rythme régulier.", "Essayez-la au piano, à la flûte à bec ou au ukulélé."] },
    "row-row-row-your-boat": { origin: "Canon traditionnel, XIXe siècle", sourceNote: "Canon traditionnel du domaine public. TuneUniversal utilise une courte version d'étude simplifiée, sans publier d'éditions modernes protégées.", practiceTips: ["Chantez ou fredonnez le rythme avant de jouer.", "Essayez-le en canon à deux joueurs.", "Utilisez le métronome à vitesse lente."] },
    "london-bridge": { origin: "Chanson traditionnelle anglaise pour enfants", sourceNote: "Mélodie traditionnelle du domaine public. Les notes et accords sont une version d'enseignement simplifiée de TuneUniversal.", practiceTips: ["Jouez la mélodie en courtes phrases.", "Utilisez d'abord les accords G et D.", "Gardez un tempo enjoué mais régulier."] },
    "hot-cross-buns": { origin: "Comptine traditionnelle anglaise", sourceNote: "Comptine traditionnelle du domaine public. Cette page utilise un arrangement très court et simplifié pour débutants.", practiceTips: ["Parfaite pour les trois premières notes.", "Jouez lentement et comptez à voix haute.", "Répétez jusqu'à ce que chaque note soit nette."] },
    "baa-baa-black-sheep": { origin: "Mélodie de comptine traditionnelle", sourceNote: "Mélodie de comptine traditionnelle du domaine public. TuneUniversal propose une page d'apprentissage simplifiée de notes et d'accords.", practiceTips: ["Utilisez la même forme mélodique que Twinkle Twinkle.", "Essayez d'abord de frapper le rythme.", "Gardez les changements d'accord lents."] },
    "old-macdonald-had-a-farm": { origin: "Chanson traditionnelle pour enfants, XIXe siècle", sourceNote: "Mélodie pour enfants traditionnelle du domaine public. TuneUniversal utilise une version pédagogique simplifiée de notes et d'accords, sans publier de paroles protégées.", practiceTips: ["Gardez une pulsation légère en 4/4.", "Travaillez lentement le passage de G à D.", "Utilisez l'outil Tap BPM pour trouver une vitesse confortable."] },
    "skip-to-my-lou": { origin: "Chanson traditionnelle américaine de jeu, XIXe siècle", sourceNote: "Mélodie traditionnelle du domaine public. Il s'agit d'un arrangement d'étude compact créé pour les débutants de TuneUniversal.", practiceTips: ["Utilisez des phrases courtes et nettes.", "Comptez quatre temps réguliers.", "Essayez de frapper le rythme avant de jouer."] },
    "the-muffin-man": { origin: "Chanson traditionnelle anglaise pour enfants, XIXe siècle", sourceNote: "Chanson pour enfants traditionnelle du domaine public. TuneUniversal propose des notes et accords simplifiés pour la pratique uniquement.", practiceTips: ["Jouez d'abord lentement.", "Gardez la mélodie régulière.", "Visez d'abord les accords G et D."] },
    "yankee-doodle": { origin: "Mélodie traditionnelle américaine, XVIIIe siècle", sourceNote: "Mélodie traditionnelle du domaine public. Cette page utilise une version d'étude originale simplifiée pour débutants.", practiceTips: ["Ressentez deux temps par mesure.", "Utilisez un jeu en aller-retour à la guitare.", "Ralentissez le métronome si les croches s'emballent."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857", sourceNote: "Œuvre du domaine public. TuneUniversal propose un guide pédagogique simplifié, et non une copie d'une édition moderne.", practiceTips: ["Gardez les notes répétées légères.", "Utilisez un tempo vif mais maîtrisé.", "Travaillez lentement le passage de A7 à D."] },
    "silent-night": { origin: "Franz Xaver Gruber et Joseph Mohr, 1818", sourceNote: "Chant de Noël du domaine public. Les notes et accords ici sont un arrangement pédagogique simplifié réalisé pour TuneUniversal.", practiceTips: ["Comptez trois temps doux.", "Laissez respirer chaque phrase.", "Utilisez un métronome lent et ne précipitez pas les silences."] },
    "auld-lang-syne": { origin: "Mélodie traditionnelle écossaise, XVIIIe siècle", sourceNote: "Mélodie traditionnelle du domaine public. TuneUniversal propose un court guide simplifié d'accords et de notes.", practiceTips: ["Adoptez un legato chaleureux.", "Gardez des changements d'accord détendus.", "Transposez si la tonalité est inconfortable."] },
    "oh-susanna": { origin: "Stephen Foster, 1848", sourceNote: "Mélodie du domaine public. Cette page contient une version d'étude instrumentale simplifiée et ne reproduit pas d'éditions protégées.", practiceTips: ["Gardez un rythme sautillant.", "Commencez par les accords G et D.", "Utilisez l'accent du métronome pour stabiliser la phrase."] },
    alouette: { origin: "Chanson traditionnelle franco-canadienne, XIXe siècle", sourceNote: "Mélodie traditionnelle du domaine public. TuneUniversal utilise un arrangement pédagogique simplifié, sans publier de paroles protégées.", practiceTips: ["Utilisez de petites phrases.", "Travaillez lentement avant d'augmenter le BPM.", "Essayez-la à la guitare, au piano ou au ukulélé."] },
    "when-the-saints-go-marching-in": { origin: "Mélodie gospel traditionnelle, début du XXe siècle", sourceNote: "Mélodie traditionnelle du domaine public dans un arrangement pédagogique simplifié créé pour TuneUniversal.", practiceTips: ["Utilisez d'abord une pulsation régulière sans swing.", "Faites chanter clairement la mélodie.", "N'ajoutez de l'expression qu'une fois les notes stables."] }
  },
  de: {
    "ode-to-joy": { origin: "Ludwig van Beethoven, Melodie aus der Sinfonie Nr. 9, 1824", sourceNote: "Gemeinfreie Komposition. Dies ist eine vereinfachte pädagogische TuneUniversal-Fassung, nicht aus einer modernen Ausgabe kopiert.", practiceTips: ["Stimme vor dem Spielen auf Standardtonhöhe.", "Halte einen gleichmäßigen 4/4-Puls.", "Beginne langsam und halte jede Viertelnote gleichmäßig."] },
    "amazing-grace": { origin: "Traditionelle Choralmelodie New Britain, 19. Jahrhundert", sourceNote: "Gemeinfreie Choralmelodie. Diese Seite verwendet eine eigene vereinfachte Akkord- und Notenhilfe, ohne geschützte Ausgaben zu reproduzieren.", practiceTips: ["Zähle drei Schläge pro Takt.", "Lass lange Noten ausklingen.", "Probiere den Akkord-Transponierer, falls die Tonart zu hoch ist."] },
    greensleeves: { origin: "Englische traditionelle Melodie, 16. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. Die Notation hier ist eine kurze pädagogische Reduktion für TuneUniversal.", practiceTips: ["Spüre zwei große Schläge im 6/8.", "Halte den Moll-Charakter weich.", "Übe langsam mit dem Metronom-Akzent auf Schlag eins."] },
    "frere-jacques": { origin: "Französischer traditioneller Kanon", sourceNote: "Traditioneller gemeinfreier Kinderkanon. TuneUniversal bietet eine vereinfachte Übungsfassung mit Noten und Akkorden.", practiceTips: ["Nutze ihn zum Aufwärmen.", "Spiele die Melodie als Kanon mit zwei Instrumenten.", "Halte das Tempo entspannt."] },
    "au-clair-de-la-lune": { origin: "Französisches traditionelles Lied, 18. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. Dies ist ein kompaktes pädagogisches Arrangement für die Seite.", practiceTips: ["Gute erste Melodie für Anfänger.", "Verwende Akkorde in offener Lage.", "Achte auf saubere Notenenden."] },
    "sakura-sakura": { origin: "Japanische traditionelle Melodie", sourceNote: "Traditionelle gemeinfreie Melodie. TuneUniversal verwendet eine vereinfachte Übungsfassung, keine kopierte moderne Partitur.", practiceTips: ["Halte die Phrasierung ruhig.", "Nutze den Referenzton vor dem Start.", "Versuche zuerst ein langsameres BPM."] },
    "twinkle-twinkle-little-star": { origin: "Traditionelle Melodie Ah! vous dirai-je, maman, 18. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. TuneUniversal bietet eine vereinfachte Übungsfassung mit Noten und Akkorden für Kinder.", practiceTips: ["Beginne mit einer Note pro Schlag.", "Klatsche den Rhythmus vor dem Spielen.", "Verwende C, F und G langsam."] },
    "mary-had-a-little-lamb": { origin: "Traditionelle Kindermelodie, 19. Jahrhundert", sourceNote: "Gemeinfreie Kindermelodie. Dies ist ein vereinfachtes pädagogisches Arrangement für TuneUniversal.", practiceTips: ["Verwende zuerst die Finger 1, 2 und 3.", "Halte den Rhythmus gleichmäßig.", "Probiere sie auf Klavier, Blockflöte oder Ukulele."] },
    "row-row-row-your-boat": { origin: "Traditioneller Kanon, 19. Jahrhundert", sourceNote: "Traditioneller gemeinfreier Kanon. TuneUniversal verwendet eine kurze vereinfachte Übungsfassung, ohne geschützte moderne Ausgaben zu veröffentlichen.", practiceTips: ["Singe oder summe den Rhythmus vor dem Spielen.", "Probiere ihn als Kanon mit zwei Spielern.", "Verwende das Metronom bei langsamem Tempo."] },
    "london-bridge": { origin: "Englisches traditionelles Kinderlied", sourceNote: "Traditionelle gemeinfreie Melodie. Die Noten und Akkorde sind eine vereinfachte TuneUniversal-Lehrfassung.", practiceTips: ["Spiele die Melodie in kurzen Phrasen.", "Verwende zuerst die Akkorde G und D.", "Halte das Tempo verspielt, aber gleichmäßig."] },
    "hot-cross-buns": { origin: "Englischer traditioneller Kinderreim", sourceNote: "Traditioneller gemeinfreier Kinderreim. Diese Seite verwendet ein sehr kurzes, vereinfachtes Arrangement für Anfänger.", practiceTips: ["Perfekt für die ersten drei Noten.", "Spiele langsam und zähle laut.", "Wiederhole, bis jede Note sauber ist."] },
    "baa-baa-black-sheep": { origin: "Traditionelle Kinderreim-Melodie", sourceNote: "Traditionelle gemeinfreie Kinderreim-Melodie. TuneUniversal bietet eine vereinfachte Lernseite mit Noten und Akkorden.", practiceTips: ["Verwende dieselbe Melodieform wie Twinkle Twinkle.", "Versuche zuerst zu klatschen.", "Halte die Akkordwechsel langsam."] },
    "old-macdonald-had-a-farm": { origin: "Traditionelles Kinderlied, 19. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Kindermelodie. TuneUniversal verwendet eine vereinfachte pädagogische Noten- und Akkordfassung, ohne geschützte Texte zu veröffentlichen.", practiceTips: ["Halte einen leichten 4/4-Puls.", "Übe den Wechsel von G zu D langsam.", "Nutze das Tap-BPM-Werkzeug für ein angenehmes Tempo."] },
    "skip-to-my-lou": { origin: "Amerikanisches traditionelles Spiellied, 19. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. Dies ist ein kompaktes Übungsarrangement für TuneUniversal-Anfänger.", practiceTips: ["Verwende kurze, saubere Phrasen.", "Zähle vier gleichmäßige Schläge.", "Klatsche den Rhythmus vor dem Spielen."] },
    "the-muffin-man": { origin: "Englisches traditionelles Kinderlied, 19. Jahrhundert", sourceNote: "Traditionelles gemeinfreies Kinderlied. TuneUniversal bietet vereinfachte Noten und Akkorde nur zum Üben.", practiceTips: ["Spiele zuerst langsam.", "Halte die Melodie gleichmäßig.", "Verwende G und D als erste Akkordziele."] },
    "yankee-doodle": { origin: "Traditionelle amerikanische Melodie, 18. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. Diese Seite verwendet eine eigene vereinfachte Übungsfassung für Anfänger.", practiceTips: ["Spüre zwei Schläge pro Takt.", "Verwende Wechselschlag auf der Gitarre.", "Verlangsame das Metronom, wenn die Achtelnoten hetzen."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857", sourceNote: "Gemeinfreie Komposition. TuneUniversal bietet eine vereinfachte pädagogische Anleitung, keine Kopie einer modernen Ausgabe.", practiceTips: ["Halte die wiederholten Noten leicht.", "Verwende ein helles, aber kontrolliertes Tempo.", "Übe den Wechsel von A7 zu D langsam."] },
    "silent-night": { origin: "Franz Xaver Gruber und Joseph Mohr, 1818", sourceNote: "Gemeinfreies Weihnachtslied. Die Noten und Akkorde hier sind ein vereinfachtes pädagogisches Arrangement für TuneUniversal.", practiceTips: ["Zähle drei sanfte Schläge.", "Lass jede Phrase atmen.", "Verwende ein langsames Metronom und überhaste die Pausen nicht."] },
    "auld-lang-syne": { origin: "Traditionelle schottische Melodie, 18. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. TuneUniversal bietet eine kurze vereinfachte Akkord- und Notenhilfe.", practiceTips: ["Verwende ein warmes Legato.", "Halte die Akkordwechsel entspannt.", "Transponiere, wenn die Tonart unbequem ist."] },
    "oh-susanna": { origin: "Stephen Foster, 1848", sourceNote: "Gemeinfreie Melodie. Diese Seite enthält eine vereinfachte instrumentale Übungsfassung und reproduziert keine geschützten Ausgaben.", practiceTips: ["Halte den Rhythmus federnd.", "Beginne mit den Akkorden G und D.", "Nutze den Metronom-Akzent, um die Phrase zu stabilisieren."] },
    alouette: { origin: "Französisch-kanadisches traditionelles Lied, 19. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie. TuneUniversal verwendet ein vereinfachtes pädagogisches Arrangement, ohne geschützte Texte zu veröffentlichen.", practiceTips: ["Verwende kleine Phrasen.", "Übe langsam, bevor du das BPM erhöhst.", "Probiere sie mit Gitarre, Klavier oder Ukulele."] },
    "when-the-saints-go-marching-in": { origin: "Traditionelle Gospelmelodie, frühes 20. Jahrhundert", sourceNote: "Traditionelle gemeinfreie Melodie in einem vereinfachten pädagogischen Arrangement für TuneUniversal.", practiceTips: ["Verwende zuerst einen gleichmäßigen Puls ohne Swing.", "Lass die Melodie klar singen.", "Füge Ausdruck erst hinzu, wenn die Noten stabil sind."] }
  },
  es: {
    "ode-to-joy": { origin: "Ludwig van Beethoven, melodía de la Sinfonía n.º 9, 1824", sourceNote: "Composición de dominio público. Es un arreglo educativo simplificado de TuneUniversal, no copiado de una edición moderna.", practiceTips: ["Afina al tono estándar antes de tocar.", "Mantén un pulso estable en 4/4.", "Empieza despacio y mantén cada negra uniforme."] },
    "amazing-grace": { origin: "Melodía de himno tradicional New Britain, siglo XIX", sourceNote: "Melodía de himno de dominio público. Esta página usa una guía original simplificada de acordes y notas, sin reproducir ediciones protegidas.", practiceTips: ["Cuenta tres tiempos por compás.", "Deja sonar las notas largas.", "Prueba el transpositor de acordes si la tonalidad es muy alta."] },
    greensleeves: { origin: "Melodía tradicional inglesa, siglo XVI", sourceNote: "Melodía tradicional de dominio público. La notación aquí es una breve reducción educativa creada para TuneUniversal.", practiceTips: ["Siente dos tiempos grandes en 6/8.", "Mantén suave el carácter menor.", "Practica despacio con el acento del metrónomo en el primer tiempo."] },
    "frere-jacques": { origin: "Canon tradicional francés", sourceNote: "Canon infantil tradicional de dominio público. TuneUniversal ofrece una versión de estudio simplificada de notas y acordes.", practiceTips: ["Úsalo como calentamiento.", "Prueba a tocar la melodía como canon con dos instrumentos.", "Mantén el tempo relajado."] },
    "au-clair-de-la-lune": { origin: "Canción tradicional francesa, siglo XVIII", sourceNote: "Melodía tradicional de dominio público. Es un arreglo educativo compacto hecho para el sitio.", practiceTips: ["Buena primera melodía para principiantes.", "Usa acordes en posición abierta.", "Escucha los finales limpios de las notas."] },
    "sakura-sakura": { origin: "Melodía tradicional japonesa", sourceNote: "Melodía tradicional de dominio público. TuneUniversal usa una versión de estudio simplificada, no una partitura moderna copiada.", practiceTips: ["Mantén el fraseo tranquilo.", "Usa el tono de referencia antes de empezar.", "Prueba primero un BPM más lento."] },
    "twinkle-twinkle-little-star": { origin: "Melodía tradicional Ah! vous dirai-je, maman, siglo XVIII", sourceNote: "Melodía tradicional de dominio público. TuneUniversal ofrece una versión de estudio simplificada de notas y acordes para niños.", practiceTips: ["Empieza con una nota por tiempo.", "Da palmas al ritmo antes de tocar.", "Usa C, F y G despacio."] },
    "mary-had-a-little-lamb": { origin: "Melodía infantil tradicional, siglo XIX", sourceNote: "Melodía infantil de dominio público. Es un arreglo educativo simplificado creado para TuneUniversal.", practiceTips: ["Usa primero los dedos 1, 2 y 3.", "Mantén el ritmo uniforme.", "Pruébala en piano, flauta dulce o ukelele."] },
    "row-row-row-your-boat": { origin: "Canon tradicional, siglo XIX", sourceNote: "Canon tradicional de dominio público. TuneUniversal usa una breve versión de estudio simplificada, sin publicar ediciones modernas protegidas.", practiceTips: ["Canta o tararea el ritmo antes de tocar.", "Pruébalo como canon con dos intérpretes.", "Usa el metrónomo a velocidad lenta."] },
    "london-bridge": { origin: "Canción infantil tradicional inglesa", sourceNote: "Melodía tradicional de dominio público. Las notas y acordes son una versión didáctica simplificada de TuneUniversal.", practiceTips: ["Toca la melodía en frases cortas.", "Usa primero los acordes G y D.", "Mantén el tempo juguetón pero estable."] },
    "hot-cross-buns": { origin: "Tonadilla infantil tradicional inglesa", sourceNote: "Tonadilla infantil tradicional de dominio público. Esta página usa un arreglo muy corto y simplificado para principiantes.", practiceTips: ["Perfecta para las primeras tres notas.", "Toca despacio y cuenta en voz alta.", "Repite hasta que cada nota sea limpia."] },
    "baa-baa-black-sheep": { origin: "Melodía de canción infantil tradicional", sourceNote: "Melodía infantil tradicional de dominio público. TuneUniversal ofrece una página de aprendizaje simplificada de notas y acordes.", practiceTips: ["Usa la misma forma melódica que Twinkle Twinkle.", "Prueba primero a dar palmas.", "Mantén lentos los cambios de acorde."] },
    "old-macdonald-had-a-farm": { origin: "Canción infantil tradicional, siglo XIX", sourceNote: "Melodía infantil tradicional de dominio público. TuneUniversal usa una versión educativa simplificada de notas y acordes, sin publicar letras protegidas.", practiceTips: ["Mantén un pulso ligero en 4/4.", "Practica el cambio de G a D despacio.", "Usa la herramienta Tap BPM para hallar una velocidad cómoda."] },
    "skip-to-my-lou": { origin: "Canción tradicional estadounidense de juego, siglo XIX", sourceNote: "Melodía tradicional de dominio público. Es un arreglo de estudio compacto creado para principiantes de TuneUniversal.", practiceTips: ["Usa frases cortas y limpias.", "Cuenta cuatro tiempos estables.", "Prueba a dar palmas al ritmo antes de tocar."] },
    "the-muffin-man": { origin: "Canción infantil tradicional inglesa, siglo XIX", sourceNote: "Canción infantil tradicional de dominio público. TuneUniversal ofrece notas y acordes simplificados solo para practicar.", practiceTips: ["Toca primero despacio.", "Mantén la melodía uniforme.", "Usa G y D como primeros objetivos de acorde."] },
    "yankee-doodle": { origin: "Melodía tradicional estadounidense, siglo XVIII", sourceNote: "Melodía tradicional de dominio público. Esta página usa una versión de estudio original simplificada para principiantes.", practiceTips: ["Siente dos tiempos por compás.", "Usa púa alterna en la guitarra.", "Baja el metrónomo si las corcheas se aceleran."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857", sourceNote: "Composición de dominio público. TuneUniversal ofrece una guía educativa simplificada, no una copia de una edición moderna.", practiceTips: ["Mantén ligeras las notas repetidas.", "Usa un tempo brillante pero controlado.", "Practica el cambio de A7 a D despacio."] },
    "silent-night": { origin: "Franz Xaver Gruber y Joseph Mohr, 1818", sourceNote: "Villancico de dominio público. Las notas y acordes aquí son un arreglo educativo simplificado hecho para TuneUniversal.", practiceTips: ["Cuenta tres tiempos suaves.", "Deja respirar cada frase.", "Usa un metrónomo lento y no apresures los silencios."] },
    "auld-lang-syne": { origin: "Melodía tradicional escocesa, siglo XVIII", sourceNote: "Melodía tradicional de dominio público. TuneUniversal ofrece una breve guía simplificada de acordes y notas.", practiceTips: ["Usa un legato cálido.", "Mantén relajados los cambios de acorde.", "Transpón si la tonalidad es incómoda."] },
    "oh-susanna": { origin: "Stephen Foster, 1848", sourceNote: "Melodía de dominio público. Esta página contiene una versión de estudio instrumental simplificada y no reproduce ediciones protegidas.", practiceTips: ["Mantén el ritmo saltarín.", "Empieza con los acordes G y D.", "Usa el acento del metrónomo para estabilizar la frase."] },
    alouette: { origin: "Canción tradicional francocanadiense, siglo XIX", sourceNote: "Melodía tradicional de dominio público. TuneUniversal usa un arreglo educativo simplificado, sin publicar letras protegidas.", practiceTips: ["Usa frases pequeñas.", "Practica despacio antes de subir el BPM.", "Pruébala con guitarra, piano o ukelele."] },
    "when-the-saints-go-marching-in": { origin: "Melodía gospel tradicional, principios del siglo XX", sourceNote: "Melodía tradicional de dominio público en un arreglo educativo simplificado creado para TuneUniversal.", practiceTips: ["Usa primero un pulso estable sin swing.", "Haz que la melodía cante con claridad.", "Añade expresión solo cuando las notas estén estables."] }
  },
  pt: {
    "ode-to-joy": { origin: "Ludwig van Beethoven, melodia da Sinfonia n.º 9, 1824", sourceNote: "Composição em domínio público. É um arranjo educativo simplificado da TuneUniversal, não copiado de uma edição moderna.", practiceTips: ["Afine no tom padrão antes de tocar.", "Mantenha uma pulsação estável em 4/4.", "Comece devagar e mantenha cada semínima uniforme."] },
    "amazing-grace": { origin: "Melodia de hino tradicional New Britain, século XIX", sourceNote: "Melodia de hino em domínio público. Esta página usa um guia original simplificado de acordes e notas, sem reproduzir edições protegidas.", practiceTips: ["Conte três tempos por compasso.", "Deixe as notas longas soarem.", "Experimente o transpositor de acordes se o tom estiver alto demais."] },
    greensleeves: { origin: "Melodia tradicional inglesa, século XVI", sourceNote: "Melodia tradicional em domínio público. A notação aqui é uma breve redução educativa criada para a TuneUniversal.", practiceTips: ["Sinta dois grandes tempos no 6/8.", "Mantenha o caráter menor suave.", "Pratique devagar com o acento do metrônomo no primeiro tempo."] },
    "frere-jacques": { origin: "Cânone tradicional francês", sourceNote: "Cânone infantil tradicional em domínio público. A TuneUniversal oferece uma versão de estudo simplificada de notas e acordes.", practiceTips: ["Use-o como aquecimento.", "Tente tocar a melodia como cânone com dois instrumentos.", "Mantenha o andamento relaxado."] },
    "au-clair-de-la-lune": { origin: "Canção tradicional francesa, século XVIII", sourceNote: "Melodia tradicional em domínio público. É um arranjo educativo compacto feito para o site.", practiceTips: ["Boa primeira melodia para iniciantes.", "Use acordes em posição aberta.", "Ouça os finais limpos das notas."] },
    "sakura-sakura": { origin: "Melodia tradicional japonesa", sourceNote: "Melodia tradicional em domínio público. A TuneUniversal usa uma versão de estudo simplificada, não uma partitura moderna copiada.", practiceTips: ["Mantenha o fraseado calmo.", "Use o tom de referência antes de começar.", "Tente primeiro um BPM mais lento."] },
    "twinkle-twinkle-little-star": { origin: "Melodia tradicional Ah! vous dirai-je, maman, século XVIII", sourceNote: "Melodia tradicional em domínio público. A TuneUniversal oferece uma versão de estudo simplificada de notas e acordes para crianças.", practiceTips: ["Comece com uma nota por tempo.", "Bata o ritmo antes de tocar.", "Use C, F e G devagar."] },
    "mary-had-a-little-lamb": { origin: "Melodia infantil tradicional, século XIX", sourceNote: "Melodia infantil em domínio público. É um arranjo educativo simplificado criado para a TuneUniversal.", practiceTips: ["Use primeiro os dedos 1, 2 e 3.", "Mantenha o ritmo uniforme.", "Experimente no piano, flauta doce ou ukulele."] },
    "row-row-row-your-boat": { origin: "Cânone tradicional, século XIX", sourceNote: "Cânone tradicional em domínio público. A TuneUniversal usa uma breve versão de estudo simplificada, sem publicar edições modernas protegidas.", practiceTips: ["Cante ou cantarole o ritmo antes de tocar.", "Tente como cânone com dois músicos.", "Use o metrônomo em velocidade lenta."] },
    "london-bridge": { origin: "Canção infantil tradicional inglesa", sourceNote: "Melodia tradicional em domínio público. As notas e acordes são uma versão didática simplificada da TuneUniversal.", practiceTips: ["Toque a melodia em frases curtas.", "Use primeiro os acordes G e D.", "Mantenha o andamento brincalhão, mas estável."] },
    "hot-cross-buns": { origin: "Cantiga infantil tradicional inglesa", sourceNote: "Cantiga infantil tradicional em domínio público. Esta página usa um arranjo muito curto e simplificado para iniciantes.", practiceTips: ["Perfeita para as três primeiras notas.", "Toque devagar e conte em voz alta.", "Repita até cada nota ficar limpa."] },
    "baa-baa-black-sheep": { origin: "Melodia de cantiga infantil tradicional", sourceNote: "Melodia infantil tradicional em domínio público. A TuneUniversal oferece uma página de aprendizado simplificada de notas e acordes.", practiceTips: ["Use a mesma forma melódica de Twinkle Twinkle.", "Tente primeiro bater palmas.", "Mantenha as trocas de acorde lentas."] },
    "old-macdonald-had-a-farm": { origin: "Canção infantil tradicional, século XIX", sourceNote: "Melodia infantil tradicional em domínio público. A TuneUniversal usa uma versão educativa simplificada de notas e acordes, sem publicar letras protegidas.", practiceTips: ["Mantenha uma pulsação leve em 4/4.", "Pratique a troca de G para D devagar.", "Use a ferramenta Tap BPM para achar uma velocidade confortável."] },
    "skip-to-my-lou": { origin: "Canção tradicional americana de brincadeira, século XIX", sourceNote: "Melodia tradicional em domínio público. É um arranjo de estudo compacto criado para iniciantes da TuneUniversal.", practiceTips: ["Use frases curtas e limpas.", "Conte quatro tempos estáveis.", "Tente bater o ritmo antes de tocar."] },
    "the-muffin-man": { origin: "Canção infantil tradicional inglesa, século XIX", sourceNote: "Canção infantil tradicional em domínio público. A TuneUniversal oferece notas e acordes simplificados apenas para prática.", practiceTips: ["Toque primeiro devagar.", "Mantenha a melodia uniforme.", "Use G e D como primeiros alvos de acorde."] },
    "yankee-doodle": { origin: "Melodia tradicional americana, século XVIII", sourceNote: "Melodia tradicional em domínio público. Esta página usa uma versão de estudo original simplificada para iniciantes.", practiceTips: ["Sinta dois tempos por compasso.", "Use palhetada alternada na guitarra.", "Diminua o metrônomo se as colcheias acelerarem."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857", sourceNote: "Composição em domínio público. A TuneUniversal oferece um guia educativo simplificado, não uma cópia de uma edição moderna.", practiceTips: ["Mantenha as notas repetidas leves.", "Use um andamento brilhante, mas controlado.", "Pratique a troca de A7 para D devagar."] },
    "silent-night": { origin: "Franz Xaver Gruber e Joseph Mohr, 1818", sourceNote: "Canção natalina em domínio público. As notas e acordes aqui são um arranjo educativo simplificado feito para a TuneUniversal.", practiceTips: ["Conte três tempos suaves.", "Deixe cada frase respirar.", "Use um metrônomo lento e não apresse as pausas."] },
    "auld-lang-syne": { origin: "Melodia tradicional escocesa, século XVIII", sourceNote: "Melodia tradicional em domínio público. A TuneUniversal oferece um breve guia simplificado de acordes e notas.", practiceTips: ["Use um legato caloroso.", "Mantenha as trocas de acorde relaxadas.", "Transponha se o tom estiver desconfortável."] },
    "oh-susanna": { origin: "Stephen Foster, 1848", sourceNote: "Melodia em domínio público. Esta página contém uma versão de estudo instrumental simplificada e não reproduz edições protegidas.", practiceTips: ["Mantenha o ritmo saltitante.", "Comece com os acordes G e D.", "Use o acento do metrônomo para estabilizar a frase."] },
    alouette: { origin: "Canção tradicional franco-canadense, século XIX", sourceNote: "Melodia tradicional em domínio público. A TuneUniversal usa um arranjo educativo simplificado, sem publicar letras protegidas.", practiceTips: ["Use frases pequenas.", "Pratique devagar antes de aumentar o BPM.", "Experimente com guitarra, piano ou ukulele."] },
    "when-the-saints-go-marching-in": { origin: "Melodia gospel tradicional, início do século XX", sourceNote: "Melodia tradicional em domínio público num arranjo educativo simplificado criado para a TuneUniversal.", practiceTips: ["Use primeiro uma pulsação estável sem swing.", "Faça a melodia cantar com clareza.", "Acrescente expressão só depois que as notas estiverem estáveis."] }
  },
  zh: {
    "ode-to-joy": { origin: "路德维希·范·贝多芬，选自《第九交响曲》的旋律，1824 年", sourceNote: "公有领域作品。这是 TuneUniversal 的简化教学编配，并非抄录自现代版本。", practiceTips: ["演奏前先调到标准音高。", "保持稳定的 4/4 律动。", "从慢速开始，保持每个四分音符均匀。"] },
    "amazing-grace": { origin: "传统赞美诗旋律 New Britain，19 世纪", sourceNote: "公有领域赞美诗旋律。本页使用原创的简化和弦与音名指南，不复制受保护的版本。", practiceTips: ["每小节数三拍。", "让长音充分延续。", "若调太高，试试和弦移调器。"] },
    greensleeves: { origin: "英格兰传统旋律，16 世纪", sourceNote: "公有领域传统旋律。此处记谱是为 TuneUniversal 制作的简短教学缩编。", practiceTips: ["在 6/8 中感受两个大拍。", "保持小调色彩柔和。", "把节拍器重音放在第一拍，慢速练习。"] },
    "frere-jacques": { origin: "法国传统轮唱曲", sourceNote: "公有领域传统儿童轮唱曲。TuneUniversal 提供简化的音名与和弦学习版本。", practiceTips: ["用作热身。", "尝试用两件乐器轮唱演奏旋律。", "保持轻松的速度。"] },
    "au-clair-de-la-lune": { origin: "法国传统歌曲，18 世纪", sourceNote: "公有领域传统旋律。这是为本站制作的精简教学编配。", practiceTips: ["很适合初学者的第一首旋律。", "使用开放把位和弦。", "注意音符干净的收尾。"] },
    "sakura-sakura": { origin: "日本传统旋律", sourceNote: "公有领域传统旋律。TuneUniversal 使用简化学习版本，并非抄录现代乐谱。", practiceTips: ["保持平静的乐句。", "开始前先听参考音。", "先尝试较慢的 BPM。"] },
    "twinkle-twinkle-little-star": { origin: "传统旋律 Ah! vous dirai-je, maman，18 世纪", sourceNote: "公有领域传统旋律。TuneUniversal 为儿童提供简化的音名与和弦学习版本。", practiceTips: ["从每拍一个音开始。", "演奏前先拍出节奏。", "慢慢使用 C、F 和 G。"] },
    "mary-had-a-little-lamb": { origin: "传统儿童旋律，19 世纪", sourceNote: "公有领域儿童旋律。这是为 TuneUniversal 制作的简化教学编配。", practiceTips: ["先用 1、2、3 指。", "保持节奏均匀。", "试着用钢琴、竖笛或尤克里里演奏。"] },
    "row-row-row-your-boat": { origin: "传统轮唱曲，19 世纪", sourceNote: "公有领域传统轮唱曲。TuneUniversal 使用简短的简化学习版本，不发布受保护的现代版本。", practiceTips: ["演奏前先唱或哼出节奏。", "试着两人轮唱演奏。", "用慢速节拍器。"] },
    "london-bridge": { origin: "英格兰传统儿童歌曲", sourceNote: "公有领域传统旋律。这些音符与和弦是 TuneUniversal 的简化教学版本。", practiceTips: ["把旋律分成短乐句演奏。", "先用 G 和 D 和弦。", "保持轻快但稳定的速度。"] },
    "hot-cross-buns": { origin: "英格兰传统童谣曲调", sourceNote: "公有领域传统童谣曲调。本页使用非常简短的简化编配，适合初学者。", practiceTips: ["非常适合最初的三个音。", "慢速演奏并大声数拍。", "重复直到每个音都干净。"] },
    "baa-baa-black-sheep": { origin: "传统童谣旋律", sourceNote: "公有领域传统童谣旋律。TuneUniversal 提供简化的音名与和弦学习页面。", practiceTips: ["使用与 Twinkle Twinkle 相同的旋律形态。", "先试着拍手。", "保持和弦变换缓慢。"] },
    "old-macdonald-had-a-farm": { origin: "传统儿童歌曲，19 世纪", sourceNote: "公有领域传统儿童旋律。TuneUniversal 使用简化的教学音名与和弦版本，不发布受保护的歌词。", practiceTips: ["保持轻盈的 4/4 律动。", "慢慢练习从 G 到 D 的转换。", "用 Tap BPM 工具找到舒适的速度。"] },
    "skip-to-my-lou": { origin: "美国传统游戏歌曲，19 世纪", sourceNote: "公有领域传统旋律。这是为 TuneUniversal 初学者制作的精简学习编配。", practiceTips: ["使用简短干净的乐句。", "数四个稳定的拍子。", "演奏前先试着拍出节奏。"] },
    "the-muffin-man": { origin: "英格兰传统儿童歌曲，19 世纪", sourceNote: "公有领域传统儿童歌曲。TuneUniversal 仅为练习提供简化的音名与和弦。", practiceTips: ["先慢速演奏。", "保持旋律均匀。", "把 G 和 D 作为最初的和弦目标。"] },
    "yankee-doodle": { origin: "美国传统旋律，18 世纪", sourceNote: "公有领域传统旋律。本页使用原创的简化学习版本，适合初学者。", practiceTips: ["每小节感受两拍。", "在吉他上使用交替拨弦。", "若八分音符抢拍，就调慢节拍器。"] },
    "jingle-bells": { origin: "James Lord Pierpont，1857 年", sourceNote: "公有领域作品。TuneUniversal 提供简化的教学指南，并非现代版本的复制。", practiceTips: ["保持重复音轻盈。", "使用明亮但受控的速度。", "慢慢练习从 A7 到 D 的转换。"] },
    "silent-night": { origin: "Franz Xaver Gruber 与 Joseph Mohr，1818 年", sourceNote: "公有领域圣诞颂歌。这里的音符与和弦是为 TuneUniversal 制作的简化教学编配。", practiceTips: ["数三个轻柔的拍子。", "让每个乐句呼吸。", "使用慢速节拍器，不要赶休止符。"] },
    "auld-lang-syne": { origin: "苏格兰传统旋律，18 世纪", sourceNote: "公有领域传统旋律。TuneUniversal 提供简短的简化和弦与音名指南。", practiceTips: ["使用温暖的连奏。", "保持和弦变换放松。", "若调不舒服就移调。"] },
    "oh-susanna": { origin: "Stephen Foster，1848 年", sourceNote: "公有领域旋律。本页包含简化的器乐学习版本，不复制受保护的版本。", practiceTips: ["保持节奏富有弹性。", "从 G 和 D 和弦开始。", "用节拍器重音稳定乐句。"] },
    alouette: { origin: "法裔加拿大传统歌曲，19 世纪", sourceNote: "公有领域传统旋律。TuneUniversal 使用简化的教学编配，不发布受保护的歌词。", practiceTips: ["使用短小的乐句。", "提高 BPM 前先慢速练习。", "试着用吉他、钢琴或尤克里里演奏。"] },
    "when-the-saints-go-marching-in": { origin: "传统福音旋律，20 世纪初", sourceNote: "公有领域传统旋律，采用为 TuneUniversal 制作的简化教学编配。", practiceTips: ["先用稳定、不摇摆的律动。", "让旋律清晰地歌唱。", "等音符稳定后再加入表现力。"] }
  },
  ru: {
    "ode-to-joy": { origin: "Людвиг ван Бетховен, мелодия из Симфонии № 9, 1824", sourceNote: "Произведение общественного достояния. Это упрощенная учебная аранжировка TuneUniversal, не скопированная с современного издания.", practiceTips: ["Перед игрой настройтесь на стандартную высоту.", "Держите ровный пульс в 4/4.", "Начните медленно и держите каждую четверть ровно."] },
    "amazing-grace": { origin: "Традиционная гимновая мелодия New Britain, XIX век", sourceNote: "Гимновая мелодия общественного достояния. На этой странице используется оригинальное упрощенное руководство по аккордам и нотам, без воспроизведения защищенных изданий.", practiceTips: ["Считайте три доли в такте.", "Дайте длинным нотам прозвучать.", "Попробуйте транспонировщик аккордов, если тональность слишком высока."] },
    greensleeves: { origin: "Английская традиционная мелодия, XVI век", sourceNote: "Традиционная мелодия общественного достояния. Здесь приведена краткая учебная редукция, созданная для TuneUniversal.", practiceTips: ["Почувствуйте две большие доли в 6/8.", "Сохраняйте мягкий минорный характер.", "Занимайтесь медленно, с акцентом метронома на первой доле."] },
    "frere-jacques": { origin: "Французский традиционный канон", sourceNote: "Традиционный детский канон общественного достояния. TuneUniversal предлагает упрощенную учебную версию с нотами и аккордами.", practiceTips: ["Используйте как разминку.", "Попробуйте сыграть мелодию каноном на двух инструментах.", "Держите спокойный темп."] },
    "au-clair-de-la-lune": { origin: "Французская традиционная песня, XVIII век", sourceNote: "Традиционная мелодия общественного достояния. Это компактная учебная аранжировка, сделанная для сайта.", practiceTips: ["Хорошая первая мелодия для начинающих.", "Используйте аккорды в открытой позиции.", "Следите за чистым окончанием нот."] },
    "sakura-sakura": { origin: "Японская традиционная мелодия", sourceNote: "Традиционная мелодия общественного достояния. TuneUniversal использует упрощенную учебную версию, а не скопированную современную партитуру.", practiceTips: ["Сохраняйте спокойную фразировку.", "Перед началом используйте опорный тон.", "Сначала попробуйте более медленный BPM."] },
    "twinkle-twinkle-little-star": { origin: "Традиционная мелодия Ah! vous dirai-je, maman, XVIII век", sourceNote: "Традиционная мелодия общественного достояния. TuneUniversal предлагает упрощенную учебную версию с нотами и аккордами для детей.", practiceTips: ["Начните с одной ноты на долю.", "Прохлопайте ритм перед игрой.", "Используйте C, F и G медленно."] },
    "mary-had-a-little-lamb": { origin: "Традиционная детская мелодия, XIX век", sourceNote: "Детская мелодия общественного достояния. Это упрощенная учебная аранжировка, созданная для TuneUniversal.", practiceTips: ["Сначала используйте пальцы 1, 2 и 3.", "Держите ритм ровным.", "Попробуйте на фортепиано, блокфлейте или укулеле."] },
    "row-row-row-your-boat": { origin: "Традиционный канон, XIX век", sourceNote: "Традиционный канон общественного достояния. TuneUniversal использует краткую упрощенную учебную версию, не публикуя защищенные современные издания.", practiceTips: ["Пропойте или напойте ритм перед игрой.", "Попробуйте каноном на двух исполнителей.", "Используйте метроном на медленной скорости."] },
    "london-bridge": { origin: "Английская традиционная детская песня", sourceNote: "Традиционная мелодия общественного достояния. Ноты и аккорды — упрощенная обучающая версия TuneUniversal.", practiceTips: ["Играйте мелодию короткими фразами.", "Сначала используйте аккорды G и D.", "Держите темп игривым, но ровным."] },
    "hot-cross-buns": { origin: "Английская традиционная детская песенка", sourceNote: "Традиционная детская песенка общественного достояния. На этой странице используется очень короткая упрощенная аранжировка для начинающих.", practiceTips: ["Идеально для первых трех нот.", "Играйте медленно и считайте вслух.", "Повторяйте, пока каждая нота не станет чистой."] },
    "baa-baa-black-sheep": { origin: "Традиционная мелодия детской песенки", sourceNote: "Традиционная детская мелодия общественного достояния. TuneUniversal предлагает упрощенную обучающую страницу с нотами и аккордами.", practiceTips: ["Используйте ту же мелодическую форму, что и в Twinkle Twinkle.", "Сначала попробуйте прохлопать.", "Держите смену аккордов медленной."] },
    "old-macdonald-had-a-farm": { origin: "Традиционная детская песня, XIX век", sourceNote: "Традиционная детская мелодия общественного достояния. TuneUniversal использует упрощенную учебную версию с нотами и аккордами, не публикуя защищенный текст.", practiceTips: ["Держите легкий пульс в 4/4.", "Медленно отрабатывайте смену G на D.", "Используйте инструмент Tap BPM для удобной скорости."] },
    "skip-to-my-lou": { origin: "Американская традиционная игровая песня, XIX век", sourceNote: "Традиционная мелодия общественного достояния. Это компактная учебная аранжировка для начинающих TuneUniversal.", practiceTips: ["Используйте короткие чистые фразы.", "Считайте четыре ровные доли.", "Попробуйте прохлопать ритм перед игрой."] },
    "the-muffin-man": { origin: "Английская традиционная детская песня, XIX век", sourceNote: "Традиционная детская песня общественного достояния. TuneUniversal предлагает упрощенные ноты и аккорды только для практики.", practiceTips: ["Сначала играйте медленно.", "Держите мелодию ровной.", "Используйте G и D как первые целевые аккорды."] },
    "yankee-doodle": { origin: "Традиционная американская мелодия, XVIII век", sourceNote: "Традиционная мелодия общественного достояния. На этой странице используется оригинальная упрощенная учебная версия для начинающих.", practiceTips: ["Почувствуйте две доли в такте.", "Используйте переменный штрих на гитаре.", "Замедлите метроном, если восьмые торопятся."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857", sourceNote: "Произведение общественного достояния. TuneUniversal предлагает упрощенное учебное руководство, а не копию современного издания.", practiceTips: ["Держите повторяющиеся ноты легкими.", "Используйте яркий, но контролируемый темп.", "Медленно отрабатывайте смену A7 на D."] },
    "silent-night": { origin: "Franz Xaver Gruber и Joseph Mohr, 1818", sourceNote: "Рождественская песнь общественного достояния. Ноты и аккорды здесь — упрощенная учебная аранжировка, сделанная для TuneUniversal.", practiceTips: ["Считайте три мягкие доли.", "Дайте каждой фразе дышать.", "Используйте медленный метроном и не торопите паузы."] },
    "auld-lang-syne": { origin: "Традиционная шотландская мелодия, XVIII век", sourceNote: "Традиционная мелодия общественного достояния. TuneUniversal предлагает краткое упрощенное руководство по аккордам и нотам.", practiceTips: ["Используйте теплое легато.", "Держите смену аккордов расслабленной.", "Транспонируйте, если тональность неудобна."] },
    "oh-susanna": { origin: "Stephen Foster, 1848", sourceNote: "Мелодия общественного достояния. Эта страница содержит упрощенную инструментальную учебную версию и не воспроизводит защищенные издания.", practiceTips: ["Держите ритм упругим.", "Начните с аккордов G и D.", "Используйте акцент метронома для стабилизации фразы."] },
    alouette: { origin: "Франко-канадская традиционная песня, XIX век", sourceNote: "Традиционная мелодия общественного достояния. TuneUniversal использует упрощенную учебную аранжировку, не публикуя защищенный текст.", practiceTips: ["Используйте короткие фразы.", "Занимайтесь медленно, прежде чем увеличивать BPM.", "Попробуйте на гитаре, фортепиано или укулеле."] },
    "when-the-saints-go-marching-in": { origin: "Традиционная госпел-мелодия, начало XX века", sourceNote: "Традиционная мелодия общественного достояния в упрощенной учебной аранжировке, созданной для TuneUniversal.", practiceTips: ["Сначала используйте ровный пульс без свинга.", "Пусть мелодия поет ясно.", "Добавляйте выразительность только после того, как ноты станут устойчивыми."] }
  },
  ja: {
    "ode-to-joy": { origin: "ルートヴィヒ・ヴァン・ベートーヴェン、交響曲第9番より、1824年", sourceNote: "パブリックドメインの作品です。これは TuneUniversal の簡略化した学習用アレンジで、現代版からの複製ではありません。", practiceTips: ["演奏前に標準ピッチに合わせましょう。", "4/4 の安定した拍を保ちましょう。", "ゆっくり始め、四分音符を均等に保ちましょう。"] },
    "amazing-grace": { origin: "伝統的な賛美歌の旋律 New Britain、19世紀", sourceNote: "パブリックドメインの賛美歌旋律です。このページは独自の簡略化したコードと音名のガイドを用い、保護された版を複製していません。", practiceTips: ["1小節に3拍数えましょう。", "長い音はしっかり響かせましょう。", "キーが高すぎる場合はコード移調ツールを試しましょう。"] },
    greensleeves: { origin: "イギリスの伝統旋律、16世紀", sourceNote: "パブリックドメインの伝統旋律です。ここでの記譜は TuneUniversal 向けに作られた短い学習用の縮約です。", practiceTips: ["6/8 で大きな2拍を感じましょう。", "短調の響きを柔らかく保ちましょう。", "メトロノームの強拍を1拍目に置き、ゆっくり練習しましょう。"] },
    "frere-jacques": { origin: "フランスの伝統的な輪唱", sourceNote: "パブリックドメインの伝統的な子ども向け輪唱です。TuneUniversal は音名とコードの簡略学習版を提供します。", practiceTips: ["ウォームアップに使いましょう。", "2つの楽器で輪唱として演奏してみましょう。", "テンポはリラックスして保ちましょう。"] },
    "au-clair-de-la-lune": { origin: "フランスの伝統的な歌、18世紀", sourceNote: "パブリックドメインの伝統旋律です。これはサイト向けに作られたコンパクトな学習用アレンジです。", practiceTips: ["初心者の最初の旋律に最適です。", "オープンポジションのコードを使いましょう。", "音のきれいな終わりを聴きましょう。"] },
    "sakura-sakura": { origin: "日本の伝統旋律", sourceNote: "パブリックドメインの伝統旋律です。TuneUniversal は簡略化した学習版を用い、現代の楽譜を複製していません。", practiceTips: ["フレーズを穏やかに保ちましょう。", "始める前に基準音を使いましょう。", "まずは遅い BPM を試しましょう。"] },
    "twinkle-twinkle-little-star": { origin: "伝統旋律 Ah! vous dirai-je, maman、18世紀", sourceNote: "パブリックドメインの伝統旋律です。TuneUniversal は子ども向けに音名とコードの簡略学習版を提供します。", practiceTips: ["1拍に1音から始めましょう。", "演奏前にリズムを手拍子しましょう。", "C、F、G をゆっくり使いましょう。"] },
    "mary-had-a-little-lamb": { origin: "伝統的な子どもの旋律、19世紀", sourceNote: "パブリックドメインの子ども向け旋律です。これは TuneUniversal 向けに作られた簡略化した学習用アレンジです。", practiceTips: ["まず指1、2、3を使いましょう。", "リズムを均等に保ちましょう。", "ピアノ、リコーダー、ウクレレで試しましょう。"] },
    "row-row-row-your-boat": { origin: "伝統的な輪唱、19世紀", sourceNote: "パブリックドメインの伝統的な輪唱です。TuneUniversal は短い簡略学習版を用い、保護された現代版を公開していません。", practiceTips: ["演奏前にリズムを歌うかハミングしましょう。", "2人で輪唱として試しましょう。", "メトロノームを遅い速度で使いましょう。"] },
    "london-bridge": { origin: "イギリスの伝統的な子どもの歌", sourceNote: "パブリックドメインの伝統旋律です。音符とコードは TuneUniversal の簡略化した教育版です。", practiceTips: ["旋律を短いフレーズで演奏しましょう。", "まず G と D のコードを使いましょう。", "テンポは楽しくも安定して保ちましょう。"] },
    "hot-cross-buns": { origin: "イギリスの伝統的なわらべ歌", sourceNote: "パブリックドメインの伝統的なわらべ歌です。このページは初心者向けにごく短い簡略アレンジを用いています。", practiceTips: ["最初の3音に最適です。", "ゆっくり演奏し声に出して数えましょう。", "各音がきれいになるまで繰り返しましょう。"] },
    "baa-baa-black-sheep": { origin: "伝統的なわらべ歌の旋律", sourceNote: "パブリックドメインの伝統的なわらべ歌旋律です。TuneUniversal は音名とコードの簡略学習ページを提供します。", practiceTips: ["Twinkle Twinkle と同じ旋律の形を使いましょう。", "まず手拍子してみましょう。", "コードチェンジはゆっくり保ちましょう。"] },
    "old-macdonald-had-a-farm": { origin: "伝統的な子どもの歌、19世紀", sourceNote: "パブリックドメインの伝統的な子ども向け旋律です。TuneUniversal は簡略化した教育用の音名とコード版を用い、保護された歌詞を公開していません。", practiceTips: ["4/4 の軽い拍を保ちましょう。", "G から D の切り替えをゆっくり練習しましょう。", "Tap BPM ツールで快適な速度を見つけましょう。"] },
    "skip-to-my-lou": { origin: "アメリカの伝統的な遊び歌、19世紀", sourceNote: "パブリックドメインの伝統旋律です。これは TuneUniversal の初心者向けに作られたコンパクトな学習用アレンジです。", practiceTips: ["短くきれいなフレーズを使いましょう。", "安定した4拍を数えましょう。", "演奏前にリズムを手拍子してみましょう。"] },
    "the-muffin-man": { origin: "イギリスの伝統的な子どもの歌、19世紀", sourceNote: "パブリックドメインの伝統的な子どもの歌です。TuneUniversal は練習用のみに簡略化した音名とコードを提供します。", practiceTips: ["まずゆっくり演奏しましょう。", "旋律を均等に保ちましょう。", "最初のコードの目標として G と D を使いましょう。"] },
    "yankee-doodle": { origin: "アメリカの伝統旋律、18世紀", sourceNote: "パブリックドメインの伝統旋律です。このページは初心者向けの独自の簡略学習版を用いています。", practiceTips: ["1小節に2拍を感じましょう。", "ギターではオルタネートピッキングを使いましょう。", "八分音符が走るならメトロノームを遅くしましょう。"] },
    "jingle-bells": { origin: "James Lord Pierpont、1857年", sourceNote: "パブリックドメインの作品です。TuneUniversal は簡略化した学習用ガイドを提供し、現代版の複製ではありません。", practiceTips: ["繰り返す音は軽く保ちましょう。", "明るくも抑制したテンポを使いましょう。", "A7 から D の切り替えをゆっくり練習しましょう。"] },
    "silent-night": { origin: "Franz Xaver Gruber と Joseph Mohr、1818年", sourceNote: "パブリックドメインのクリスマスキャロルです。ここの音符とコードは TuneUniversal 向けに作られた簡略化した学習用アレンジです。", practiceTips: ["3つの穏やかな拍を数えましょう。", "各フレーズに呼吸を持たせましょう。", "遅いメトロノームを使い、休符を急がないようにしましょう。"] },
    "auld-lang-syne": { origin: "スコットランドの伝統旋律、18世紀", sourceNote: "パブリックドメインの伝統旋律です。TuneUniversal は短い簡略化したコードと音名のガイドを提供します。", practiceTips: ["温かいレガートを使いましょう。", "コードチェンジをリラックスして保ちましょう。", "キーが合わなければ移調しましょう。"] },
    "oh-susanna": { origin: "Stephen Foster、1848年", sourceNote: "パブリックドメインの旋律です。このページは簡略化した器楽学習版を含み、保護された版を複製していません。", practiceTips: ["リズムを弾むように保ちましょう。", "G と D のコードから始めましょう。", "メトロノームの強拍でフレーズを安定させましょう。"] },
    alouette: { origin: "フランス系カナダの伝統的な歌、19世紀", sourceNote: "パブリックドメインの伝統旋律です。TuneUniversal は簡略化した学習用アレンジを用い、保護された歌詞を公開していません。", practiceTips: ["小さなフレーズを使いましょう。", "BPM を上げる前にゆっくり練習しましょう。", "ギター、ピアノ、ウクレレで試しましょう。"] },
    "when-the-saints-go-marching-in": { origin: "伝統的なゴスペル旋律、20世紀初頭", sourceNote: "TuneUniversal 向けに作られた簡略化した学習用アレンジによるパブリックドメインの伝統旋律です。", practiceTips: ["まずスウィングのない安定した拍を使いましょう。", "旋律をはっきり歌わせましょう。", "音が安定してから表現を加えましょう。"] }
  },
  ko: {
    "ode-to-joy": { origin: "루트비히 판 베토벤, 교향곡 9번의 선율, 1824년", sourceNote: "퍼블릭 도메인 작품입니다. 이것은 TuneUniversal의 단순화된 교육용 편곡이며, 현대 판본을 복제한 것이 아닙니다.", practiceTips: ["연주 전에 표준 음높이로 조율하세요.", "4/4의 안정적인 박을 유지하세요.", "천천히 시작하고 각 4분음표를 고르게 유지하세요."] },
    "amazing-grace": { origin: "전통 찬송가 선율 New Britain, 19세기", sourceNote: "퍼블릭 도메인 찬송가 선율입니다. 이 페이지는 보호된 판본을 복제하지 않고 자체 단순화 코드와 음표 안내를 사용합니다.", practiceTips: ["마디당 세 박을 세세요.", "긴 음을 충분히 울리게 하세요.", "조가 너무 높으면 코드 조옮김 도구를 사용해 보세요."] },
    greensleeves: { origin: "영국 전통 선율, 16세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. 여기의 악보는 TuneUniversal을 위해 만든 짧은 교육용 축약본입니다.", practiceTips: ["6/8에서 큰 두 박을 느끼세요.", "단조의 색채를 부드럽게 유지하세요.", "메트로놈 악센트를 첫 박에 두고 천천히 연습하세요."] },
    "frere-jacques": { origin: "프랑스 전통 돌림노래", sourceNote: "퍼블릭 도메인 전통 어린이 돌림노래입니다. TuneUniversal은 음표와 코드의 단순 학습 버전을 제공합니다.", practiceTips: ["준비 운동으로 사용하세요.", "두 악기로 돌림노래처럼 선율을 연주해 보세요.", "템포는 편안하게 유지하세요."] },
    "au-clair-de-la-lune": { origin: "프랑스 전통 노래, 18세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. 이것은 사이트를 위해 만든 간결한 교육용 편곡입니다.", practiceTips: ["초보자의 첫 선율로 좋습니다.", "오픈 포지션 코드를 사용하세요.", "음의 깔끔한 마무리를 들어보세요."] },
    "sakura-sakura": { origin: "일본 전통 선율", sourceNote: "퍼블릭 도메인 전통 선율입니다. TuneUniversal은 복제한 현대 악보가 아닌 단순 학습 버전을 사용합니다.", practiceTips: ["프레이징을 차분하게 유지하세요.", "시작 전에 기준음을 사용하세요.", "먼저 더 느린 BPM을 시도하세요."] },
    "twinkle-twinkle-little-star": { origin: "전통 선율 Ah! vous dirai-je, maman, 18세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. TuneUniversal은 어린이를 위한 음표와 코드의 단순 학습 버전을 제공합니다.", practiceTips: ["박당 한 음으로 시작하세요.", "연주 전에 리듬을 손뼉으로 쳐보세요.", "C, F, G를 천천히 사용하세요."] },
    "mary-had-a-little-lamb": { origin: "전통 어린이 선율, 19세기", sourceNote: "퍼블릭 도메인 어린이 선율입니다. 이것은 TuneUniversal을 위해 만든 단순화된 교육용 편곡입니다.", practiceTips: ["먼저 손가락 1, 2, 3을 사용하세요.", "리듬을 고르게 유지하세요.", "피아노, 리코더, 우쿨렐레로 시도해 보세요."] },
    "row-row-row-your-boat": { origin: "전통 돌림노래, 19세기", sourceNote: "퍼블릭 도메인 전통 돌림노래입니다. TuneUniversal은 보호된 현대 판본을 게시하지 않고 짧은 단순 학습 버전을 사용합니다.", practiceTips: ["연주 전에 리듬을 노래하거나 흥얼거리세요.", "두 사람이 돌림노래로 시도해 보세요.", "메트로놈을 느린 속도로 사용하세요."] },
    "london-bridge": { origin: "영국 전통 어린이 노래", sourceNote: "퍼블릭 도메인 전통 선율입니다. 음표와 코드는 TuneUniversal의 단순화된 교육 버전입니다.", practiceTips: ["선율을 짧은 악구로 연주하세요.", "먼저 G와 D 코드를 사용하세요.", "템포를 경쾌하지만 안정적으로 유지하세요."] },
    "hot-cross-buns": { origin: "영국 전통 동요 곡조", sourceNote: "퍼블릭 도메인 전통 동요 곡조입니다. 이 페이지는 초보자를 위해 매우 짧은 단순 편곡을 사용합니다.", practiceTips: ["처음 세 음에 완벽합니다.", "천천히 연주하고 소리 내어 세세요.", "각 음이 깔끔해질 때까지 반복하세요."] },
    "baa-baa-black-sheep": { origin: "전통 동요 선율", sourceNote: "퍼블릭 도메인 전통 동요 선율입니다. TuneUniversal은 음표와 코드의 단순 학습 페이지를 제공합니다.", practiceTips: ["Twinkle Twinkle와 같은 선율 형태를 사용하세요.", "먼저 손뼉을 쳐보세요.", "코드 전환을 느리게 유지하세요."] },
    "old-macdonald-had-a-farm": { origin: "전통 어린이 노래, 19세기", sourceNote: "퍼블릭 도메인 전통 어린이 선율입니다. TuneUniversal은 보호된 가사를 게시하지 않고 단순화된 교육용 음표와 코드 버전을 사용합니다.", practiceTips: ["4/4의 가벼운 박을 유지하세요.", "G에서 D로의 전환을 천천히 연습하세요.", "Tap BPM 도구로 편안한 속도를 찾으세요."] },
    "skip-to-my-lou": { origin: "미국 전통 놀이 노래, 19세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. 이것은 TuneUniversal 초보자를 위해 만든 간결한 학습용 편곡입니다.", practiceTips: ["짧고 깔끔한 악구를 사용하세요.", "안정적인 네 박을 세세요.", "연주 전에 리듬을 손뼉으로 쳐보세요."] },
    "the-muffin-man": { origin: "영국 전통 어린이 노래, 19세기", sourceNote: "퍼블릭 도메인 전통 어린이 노래입니다. TuneUniversal은 연습용으로만 단순화된 음표와 코드를 제공합니다.", practiceTips: ["먼저 천천히 연주하세요.", "선율을 고르게 유지하세요.", "첫 코드 목표로 G와 D를 사용하세요."] },
    "yankee-doodle": { origin: "미국 전통 선율, 18세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. 이 페이지는 초보자를 위한 자체 단순 학습 버전을 사용합니다.", practiceTips: ["마디당 두 박을 느끼세요.", "기타에서 얼터네이트 피킹을 사용하세요.", "8분음표가 빨라지면 메트로놈을 늦추세요."] },
    "jingle-bells": { origin: "James Lord Pierpont, 1857년", sourceNote: "퍼블릭 도메인 작품입니다. TuneUniversal은 현대 판본의 복제가 아닌 단순화된 교육용 안내를 제공합니다.", practiceTips: ["반복되는 음을 가볍게 유지하세요.", "밝지만 절제된 템포를 사용하세요.", "A7에서 D로의 전환을 천천히 연습하세요."] },
    "silent-night": { origin: "Franz Xaver Gruber와 Joseph Mohr, 1818년", sourceNote: "퍼블릭 도메인 크리스마스 캐럴입니다. 여기의 음표와 코드는 TuneUniversal을 위해 만든 단순화된 교육용 편곡입니다.", practiceTips: ["부드러운 세 박을 세세요.", "각 악구가 숨 쉬게 하세요.", "느린 메트로놈을 사용하고 쉼표를 서두르지 마세요."] },
    "auld-lang-syne": { origin: "스코틀랜드 전통 선율, 18세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. TuneUniversal은 짧은 단순화 코드와 음표 안내를 제공합니다.", practiceTips: ["따뜻한 레가토를 사용하세요.", "코드 전환을 편안하게 유지하세요.", "조가 불편하면 조옮김하세요."] },
    "oh-susanna": { origin: "Stephen Foster, 1848년", sourceNote: "퍼블릭 도메인 선율입니다. 이 페이지는 단순화된 기악 학습 버전을 담고 있으며 보호된 판본을 복제하지 않습니다.", practiceTips: ["리듬을 탄력 있게 유지하세요.", "G와 D 코드로 시작하세요.", "메트로놈 악센트로 악구를 안정시키세요."] },
    alouette: { origin: "프랑스계 캐나다 전통 노래, 19세기", sourceNote: "퍼블릭 도메인 전통 선율입니다. TuneUniversal은 보호된 가사를 게시하지 않고 단순화된 교육용 편곡을 사용합니다.", practiceTips: ["짧은 악구를 사용하세요.", "BPM을 올리기 전에 천천히 연습하세요.", "기타, 피아노 또는 우쿨렐레로 시도해 보세요."] },
    "when-the-saints-go-marching-in": { origin: "전통 가스펠 선율, 20세기 초", sourceNote: "TuneUniversal을 위해 만든 단순화된 교육용 편곡의 퍼블릭 도메인 전통 선율입니다.", practiceTips: ["먼저 스윙 없는 안정적인 박을 사용하세요.", "선율이 또렷하게 노래하게 하세요.", "음이 안정된 후에만 표현을 더하세요."] }
  },
  ar: {
    "ode-to-joy": { origin: "لودفيغ فان بيتهوفن، لحن من السيمفونية رقم 9، 1824", sourceNote: "مؤلَّف من الملكية العامة. هذا ترتيب تعليمي مبسط من TuneUniversal، وليس منسوخا من نسخة حديثة.", practiceTips: ["اضبط على درجة الصوت القياسية قبل العزف.", "حافظ على نبض ثابت في 4/4.", "ابدأ ببطء واحفظ كل نوتة ربع متساوية."] },
    "amazing-grace": { origin: "لحن ترنيمة تقليدي New Britain، القرن التاسع عشر", sourceNote: "لحن ترنيمة من الملكية العامة. تستخدم هذه الصفحة دليلا أصليا مبسطا للأكوردات والنوتات دون نسخ نسخ محمية.", practiceTips: ["عُد ثلاث نبضات في كل مازورة.", "اترك النوتات الطويلة ترن.", "جرّب ناقل الأكوردات إذا كان المقام عاليا جدا."] },
    greensleeves: { origin: "لحن إنجليزي تقليدي، القرن السادس عشر", sourceNote: "لحن تقليدي من الملكية العامة. التدوين هنا اختزال تعليمي قصير أُعد لـ TuneUniversal.", practiceTips: ["اشعر بنبضتين كبيرتين في 6/8.", "حافظ على طابع السلم الصغير ناعما.", "تدرّب ببطء مع تشديد المترونوم على النبضة الأولى."] },
    "frere-jacques": { origin: "أغنية دائرية فرنسية تقليدية", sourceNote: "أغنية أطفال دائرية تقليدية من الملكية العامة. تقدّم TuneUniversal نسخة دراسية مبسطة للنوتات والأكوردات.", practiceTips: ["استخدمها للإحماء.", "جرّب عزف اللحن كأغنية دائرية بآلتين.", "حافظ على إيقاع مريح."] },
    "au-clair-de-la-lune": { origin: "أغنية فرنسية تقليدية، القرن الثامن عشر", sourceNote: "لحن تقليدي من الملكية العامة. هذا ترتيب تعليمي مدمج أُعد للموقع.", practiceTips: ["لحن أول جيد للمبتدئين.", "استخدم أكوردات في الوضع المفتوح.", "أنصت إلى نهايات النوتات النظيفة."] },
    "sakura-sakura": { origin: "لحن ياباني تقليدي", sourceNote: "لحن تقليدي من الملكية العامة. تستخدم TuneUniversal نسخة دراسية مبسطة وليست نوتة حديثة منسوخة.", practiceTips: ["حافظ على عبارات هادئة.", "استخدم النغمة المرجعية قبل البدء.", "جرّب سرعة BPM أبطأ أولا."] },
    "twinkle-twinkle-little-star": { origin: "لحن تقليدي Ah! vous dirai-je, maman، القرن الثامن عشر", sourceNote: "لحن تقليدي من الملكية العامة. تقدّم TuneUniversal نسخة دراسية مبسطة للنوتات والأكوردات للأطفال.", practiceTips: ["ابدأ بنوتة واحدة لكل نبضة.", "صفّق الإيقاع قبل العزف.", "استخدم C وF وG ببطء."] },
    "mary-had-a-little-lamb": { origin: "لحن أطفال تقليدي، القرن التاسع عشر", sourceNote: "لحن أطفال من الملكية العامة. هذا ترتيب تعليمي مبسط أُعد لـ TuneUniversal.", practiceTips: ["استخدم الأصابع 1 و2 و3 أولا.", "حافظ على إيقاع متساوٍ.", "جرّبه على البيانو أو الريكوردر أو اليوكوليلي."] },
    "row-row-row-your-boat": { origin: "أغنية دائرية تقليدية، القرن التاسع عشر", sourceNote: "أغنية دائرية تقليدية من الملكية العامة. تستخدم TuneUniversal نسخة دراسية قصيرة مبسطة دون نشر نسخ حديثة محمية.", practiceTips: ["غنِّ أو دندن الإيقاع قبل العزف.", "جرّبها كأغنية دائرية مع عازفين اثنين.", "استخدم المترونوم بسرعة بطيئة."] },
    "london-bridge": { origin: "أغنية أطفال إنجليزية تقليدية", sourceNote: "لحن تقليدي من الملكية العامة. النوتات والأكوردات نسخة تعليمية مبسطة من TuneUniversal.", practiceTips: ["اعزف اللحن في عبارات قصيرة.", "استخدم أكوردي G وD أولا.", "حافظ على إيقاع مرح لكن ثابت."] },
    "hot-cross-buns": { origin: "لحن أطفال إنجليزي تقليدي", sourceNote: "لحن أطفال تقليدي من الملكية العامة. تستخدم هذه الصفحة ترتيبا قصيرا جدا ومبسطا للمبتدئين.", practiceTips: ["مثالي للنوتات الثلاث الأولى.", "اعزف ببطء وعُد بصوت عالٍ.", "كرّر حتى تصبح كل نوتة نظيفة."] },
    "baa-baa-black-sheep": { origin: "لحن أنشودة أطفال تقليدي", sourceNote: "لحن أنشودة أطفال تقليدي من الملكية العامة. تقدّم TuneUniversal صفحة تعلّم مبسطة للنوتات والأكوردات.", practiceTips: ["استخدم الشكل اللحني نفسه لـ Twinkle Twinkle.", "جرّب التصفيق أولا.", "حافظ على تبديل الأكوردات بطيئا."] },
    "old-macdonald-had-a-farm": { origin: "أغنية أطفال تقليدية، القرن التاسع عشر", sourceNote: "لحن أطفال تقليدي من الملكية العامة. تستخدم TuneUniversal نسخة تعليمية مبسطة للنوتات والأكوردات دون نشر كلمات محمية.", practiceTips: ["حافظ على نبض خفيف في 4/4.", "تدرّب على الانتقال من G إلى D ببطء.", "استخدم أداة Tap BPM لإيجاد سرعة مريحة."] },
    "skip-to-my-lou": { origin: "أغنية لعب أمريكية تقليدية، القرن التاسع عشر", sourceNote: "لحن تقليدي من الملكية العامة. هذا ترتيب دراسي مدمج أُعد لمبتدئي TuneUniversal.", practiceTips: ["استخدم عبارات قصيرة ونظيفة.", "عُد أربع نبضات ثابتة.", "جرّب تصفيق الإيقاع قبل العزف."] },
    "the-muffin-man": { origin: "أغنية أطفال إنجليزية تقليدية، القرن التاسع عشر", sourceNote: "أغنية أطفال تقليدية من الملكية العامة. تقدّم TuneUniversal نوتات وأكوردات مبسطة للتدريب فقط.", practiceTips: ["اعزف ببطء أولا.", "حافظ على اللحن متساويا.", "استخدم G وD كأول أهداف للأكوردات."] },
    "yankee-doodle": { origin: "لحن أمريكي تقليدي، القرن الثامن عشر", sourceNote: "لحن تقليدي من الملكية العامة. تستخدم هذه الصفحة نسخة دراسية أصلية مبسطة للمبتدئين.", practiceTips: ["اشعر بنبضتين في كل مازورة.", "استخدم النقر المتناوب على الغيتار.", "أبطئ المترونوم إذا تسارعت النوتات الثمنية."] },
    "jingle-bells": { origin: "James Lord Pierpont، 1857", sourceNote: "مؤلَّف من الملكية العامة. تقدّم TuneUniversal دليلا تعليميا مبسطا، وليس نسخة من نسخة حديثة.", practiceTips: ["حافظ على النوتات المكررة خفيفة.", "استخدم إيقاعا مشرقا لكن منضبطا.", "تدرّب على الانتقال من A7 إلى D ببطء."] },
    "silent-night": { origin: "Franz Xaver Gruber وJoseph Mohr، 1818", sourceNote: "ترنيمة عيد ميلاد من الملكية العامة. النوتات والأكوردات هنا ترتيب تعليمي مبسط أُعد لـ TuneUniversal.", practiceTips: ["عُد ثلاث نبضات لطيفة.", "اترك كل عبارة تتنفس.", "استخدم مترونوما بطيئا ولا تستعجل الصمتات."] },
    "auld-lang-syne": { origin: "لحن إسكتلندي تقليدي، القرن الثامن عشر", sourceNote: "لحن تقليدي من الملكية العامة. تقدّم TuneUniversal دليلا قصيرا مبسطا للأكوردات والنوتات.", practiceTips: ["استخدم إحساس ليغاتو دافئ.", "حافظ على تبديل الأكوردات مسترخيا.", "انقل المقام إذا كان غير مريح."] },
    "oh-susanna": { origin: "Stephen Foster، 1848", sourceNote: "لحن من الملكية العامة. تحتوي هذه الصفحة على نسخة دراسية آلية مبسطة ولا تعيد إنتاج نسخ محمية.", practiceTips: ["حافظ على إيقاع راقص.", "ابدأ بأكوردي G وD.", "استخدم تشديد المترونوم لتثبيت العبارة."] },
    alouette: { origin: "أغنية فرنسية كندية تقليدية، القرن التاسع عشر", sourceNote: "لحن تقليدي من الملكية العامة. تستخدم TuneUniversal ترتيبا تعليميا مبسطا دون نشر كلمات محمية.", practiceTips: ["استخدم عبارات صغيرة.", "تدرّب ببطء قبل زيادة BPM.", "جرّبها مع الغيتار أو البيانو أو اليوكوليلي."] },
    "when-the-saints-go-marching-in": { origin: "لحن غوسبل تقليدي، أوائل القرن العشرين", sourceNote: "لحن تقليدي من الملكية العامة في ترتيب تعليمي مبسط أُعد لـ TuneUniversal.", practiceTips: ["استخدم نبضا ثابتا دون سوينغ أولا.", "اجعل اللحن يغنّي بوضوح.", "أضف التعبير فقط بعد أن تستقر النوتات."] }
  }
};

export function getLocalizedSong(slug: PublicDomainSongSlug, locale: Locale): PublicDomainSong {
  const base = publicDomainSongs[slug];
  const overrides = songLocalizations[getContentLocale(locale)]?.[slug];
  if (!overrides) {
    return base;
  }
  return {
    ...base,
    origin: overrides.origin ?? base.origin,
    sourceNote: overrides.sourceNote ?? base.sourceNote,
    practiceTips: overrides.practiceTips ?? base.practiceTips
  };
}

import { withLocaleFallbacks, type BaseLocale, type Locale } from "@/lib/i18n/locales";

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

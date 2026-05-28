import type { Locale } from "@/lib/i18n/locales";

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
  | "baa-baa-black-sheep";

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
  "baa-baa-black-sheep"
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
> = {
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
};

export function isPublicDomainSongSlug(value: string): value is PublicDomainSongSlug {
  return publicDomainSongSlugs.includes(value as PublicDomainSongSlug);
}

export function getPublicDomainSong(slug: PublicDomainSongSlug) {
  return publicDomainSongs[slug];
}

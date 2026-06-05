import { getGuideContent, type GuideSlug } from "@/lib/content/guides";
import { withLocaleFallbacks, type BaseLocale, type Locale } from "@/lib/i18n/locales";

export type TuningHubGroup = {
  description: string;
  guides: GuideSlug[];
  title: string;
};

export type TuningHubContent = {
  description: string;
  faq: { answer: string; question: string }[];
  intro: string;
  keywords: string[];
  title: string;
};

export const tuningHubContent: Record<Locale, TuningHubContent> = withLocaleFallbacks({
  ar: {
    title: "ضبطات الآلات",
    description: "دليل TuneUniversal للضبطات الشائعة للغيتار والباس واليوكوليلي والبانجو.",
    intro: "ابدأ من الضبط القياسي، ثم انتقل إلى الضبطات البديلة عندما تحتاج مدى أخفض أو أوتارا مفتوحة أو صوتا مختلفا.",
    keywords: ["ضبط الغيتار", "Drop D", "Open G", "ضبط الباس", "ضبط اليوكوليلي", "TuneUniversal"],
    faq: [
      { question: "ما أفضل ضبط للمبتدئين؟", answer: "ابدأ دائما بالضبط القياسي للآلة، لأنه الأكثر استخداما في الدروس والأغاني." },
      { question: "هل يمكن استخدام نفس الموالف لكل الضبطات؟", answer: "نعم، اختر الآلة أو الضبط المناسب ثم اضبط كل وتر حسب النغمات المرجعية." }
    ]
  },
  de: {
    title: "Instrumenten-Stimmungen",
    description: "TuneUniversal Guide für häufige Stimmungen von Gitarre, Bass, Ukulele und Banjo.",
    intro: "Starte mit der Standardstimmung und nutze alternative Stimmungen, wenn du tiefere Riffs, offene Akkorde oder eine andere Klangfarbe brauchst.",
    keywords: ["gitarrenstimmung", "Drop D", "Open G", "bass stimmung", "ukulele stimmung", "TuneUniversal"],
    faq: [
      { question: "Welche Stimmung ist für Anfänger am besten?", answer: "Beginne mit der Standardstimmung deines Instruments, weil sie in den meisten Songs und Lektionen verwendet wird." },
      { question: "Kann ich denselben Tuner für alternative Stimmungen nutzen?", answer: "Ja. Wähle das Instrument oder den Preset und stimme jede Saite nach den Referenznoten." }
    ]
  },
  en: {
    title: "Instrument Tunings",
    description: "TuneUniversal guide to common tunings for guitar, bass, ukulele and banjo.",
    intro: "Start with standard tuning, then use alternate tunings when you need lower riffs, open chords or a different sound.",
    keywords: ["guitar tunings", "Drop D", "Open G", "bass tuning", "ukulele tuning", "TuneUniversal"],
    faq: [
      { question: "Which tuning is best for beginners?", answer: "Start with the standard tuning for your instrument because it is used in most songs, lessons and chord charts." },
      { question: "Can one tuner handle alternate tunings?", answer: "Yes. Choose the instrument or preset and tune each string to the reference notes." }
    ]
  },
  es: {
    title: "Afinaciones de instrumentos",
    description: "Guía TuneUniversal de afinaciones comunes para guitarra, bajo, ukulele y banjo.",
    intro: "Empieza con la afinación estándar y usa afinaciones alternativas cuando necesites riffs graves, acordes abiertos u otro color.",
    keywords: ["afinaciones guitarra", "Drop D", "Open G", "afinación bajo", "afinación ukulele", "TuneUniversal"],
    faq: [
      { question: "¿Qué afinación es mejor para principiantes?", answer: "Empieza con la afinación estándar de tu instrumento, porque aparece en la mayoría de canciones y lecciones." },
      { question: "¿Un afinador sirve para afinaciones alternativas?", answer: "Sí. Elige el instrumento o preset y ajusta cada cuerda según las notas de referencia." }
    ]
  },
  fr: {
    title: "Accordages d'instruments",
    description: "Guide TuneUniversal des accordages courants pour guitare, basse, ukulélé et banjo.",
    intro: "Commencez par l'accordage standard, puis utilisez les accordages alternatifs pour des riffs plus graves, des accords ouverts ou une autre couleur.",
    keywords: ["accordages guitare", "Drop D", "Open G", "accordage basse", "accordage ukulélé", "TuneUniversal"],
    faq: [
      { question: "Quel accordage choisir quand on débute ?", answer: "Commencez avec l'accordage standard de votre instrument, car il est utilisé dans la plupart des morceaux et méthodes." },
      { question: "Le même accordeur fonctionne-t-il pour les accordages alternatifs ?", answer: "Oui. Choisissez l'instrument ou le preset, puis accordez chaque corde avec les notes de référence." }
    ]
  },
  it: {
    title: "Accordature strumenti",
    description: "Guida TuneUniversal alle accordature comuni per chitarra, basso, ukulele e banjo.",
    intro: "Parti dall'accordatura standard, poi usa le accordature alternative quando ti servono riff più bassi, accordi aperti o un suono diverso.",
    keywords: ["accordature chitarra", "Drop D", "Open G", "accordatura basso", "accordatura ukulele", "TuneUniversal"],
    faq: [
      { question: "Quale accordatura è migliore per iniziare?", answer: "Inizia con l'accordatura standard del tuo strumento, perché è quella usata nella maggior parte di canzoni, lezioni e diagrammi." },
      { question: "Lo stesso accordatore funziona con accordature alternative?", answer: "Sì. Scegli lo strumento o il preset e accorda ogni corda sulle note di riferimento." }
    ]
  },
  ja: {
    title: "楽器のチューニング",
    description: "ギター、ベース、ウクレレ、バンジョーの一般的なチューニングガイドです。",
    intro: "まず標準チューニングから始め、低いリフ、開放弦の響き、別の音色が必要なときに別チューニングを使います。",
    keywords: ["ギター チューニング", "Drop D", "Open G", "ベース チューニング", "ウクレレ チューニング", "TuneUniversal"],
    faq: [
      { question: "初心者に最適なチューニングは？", answer: "多くの曲やレッスンで使われるため、まずは楽器の標準チューニングから始めます。" },
      { question: "同じチューナーで別チューニングもできますか？", answer: "はい。楽器またはプリセットを選び、各弦を基準音に合わせます。" }
    ]
  },
  ko: {
    title: "악기 튜닝",
    description: "기타, 베이스, 우쿨렐레, 밴조의 일반적인 튜닝 가이드입니다.",
    intro: "스탠더드 튜닝에서 시작하고, 더 낮은 리프나 오픈 코드, 다른 음색이 필요할 때 대체 튜닝을 사용하세요.",
    keywords: ["기타 튜닝", "Drop D", "Open G", "베이스 튜닝", "우쿨렐레 튜닝", "TuneUniversal"],
    faq: [
      { question: "초보자는 어떤 튜닝이 좋나요?", answer: "대부분의 곡과 레슨에서 쓰이는 각 악기의 스탠더드 튜닝부터 시작하세요." },
      { question: "같은 튜너로 대체 튜닝도 가능한가요?", answer: "네. 악기나 프리셋을 선택한 뒤 각 줄을 기준 음에 맞추면 됩니다." }
    ]
  },
  pt: {
    title: "Afinações de instrumentos",
    description: "Guia TuneUniversal de afinações comuns para guitarra, baixo, ukulele e banjo.",
    intro: "Comece pela afinação padrão e use afinações alternativas quando precisar de riffs graves, acordes abertos ou outro som.",
    keywords: ["afinações guitarra", "Drop D", "Open G", "afinação baixo", "afinação ukulele", "TuneUniversal"],
    faq: [
      { question: "Qual afinação é melhor para começar?", answer: "Comece pela afinação padrão do instrumento, pois ela aparece na maioria das músicas e aulas." },
      { question: "O mesmo afinador serve para afinações alternativas?", answer: "Sim. Escolha o instrumento ou preset e afine cada corda pelas notas de referência." }
    ]
  },
  ru: {
    title: "Строи инструментов",
    description: "Гид TuneUniversal по популярным строям для гитары, баса, укулеле и банджо.",
    intro: "Начните со стандартного строя, а альтернативные строи используйте для низких риффов, открытых аккордов или другого звучания.",
    keywords: ["строи гитары", "Drop D", "Open G", "строй баса", "строй укулеле", "TuneUniversal"],
    faq: [
      { question: "Какой строй лучше для новичка?", answer: "Начните со стандартного строя инструмента, потому что он используется в большинстве песен и уроков." },
      { question: "Один тюнер подходит для альтернативных строев?", answer: "Да. Выберите инструмент или пресет и настройте каждую струну по опорным нотам." }
    ]
  },
  zh: {
    title: "乐器调弦",
    description: "TuneUniversal 吉他、贝斯、尤克里里和班卓琴常见调弦指南。",
    intro: "从标准调弦开始，当你需要更低的 riff、开放和弦或不同音色时，再使用替代调弦。",
    keywords: ["吉他调弦", "Drop D", "Open G", "贝斯调弦", "尤克里里调弦", "TuneUniversal"],
    faq: [
      { question: "初学者应该用哪种调弦？", answer: "先使用该乐器的标准调弦，因为大多数歌曲、课程和和弦图都会使用它。" },
      { question: "同一个调音器能用于替代调弦吗？", answer: "可以。选择乐器或预设，然后按参考音逐弦调音。" }
    ]
  }
} satisfies Record<BaseLocale, TuningHubContent>);

const tuningGroupDefinitions: { guides: GuideSlug[]; key: "banjo" | "bass" | "guitar" | "ukulele" }[] = [
  {
    key: "guitar",
    guides: [
      "standard-guitar-tuning",
      "common-guitar-tunings",
      "eb-standard-tuning",
      "half-step-down-tuning",
      "d-standard-tuning",
      "full-step-down-tuning",
      "drop-d-tuning",
      "drop-d-sharp-tuning",
      "drop-c-sharp-tuning",
      "drop-c-tuning",
      "open-d-tuning",
      "open-g-tuning",
      "dadgad-tuning",
      "drop-a-7-string-tuning",
      "drop-e-8-string-tuning"
    ]
  },
  { key: "bass", guides: ["standard-bass-tuning", "five-string-bass-tuning"] },
  { key: "ukulele", guides: ["ukulele-standard-tuning", "baritone-ukulele-tuning", "low-g-ukulele-tuning", "d-ukulele-tuning"] },
  { key: "banjo", guides: ["banjo-open-g-tuning", "double-c-banjo-tuning", "sawmill-banjo-tuning"] }
];

const tuningGroupCopy: Record<Locale, Record<(typeof tuningGroupDefinitions)[number]["key"], Omit<TuningHubGroup, "guides">>> = withLocaleFallbacks({
  ar: {
    guitar: { title: "ضبطات الغيتار", description: "Standard و Drop و Open والضبطات المنخفضة للغيتار الحديث." },
    bass: { title: "ضبطات الباس", description: "الضبط القياسي وأوتار الخمس للمدى المنخفض." },
    ukulele: { title: "ضبطات اليوكوليلي", description: "High G و Low G وضبط D لأنماط مختلفة." },
    banjo: { title: "ضبطات البانجو", description: "Double C و Sawmill لتقنيات البانجو التقليدية." }
  },
  de: {
    guitar: { title: "Gitarrenstimmungen", description: "Standard, Drop, Open und tiefe Stimmungen für moderne Gitarre." },
    bass: { title: "Bass-Stimmungen", description: "Standardbass und fünfsaitige Low-B-Stimmung." },
    ukulele: { title: "Ukulele-Stimmungen", description: "High G, Low G und D-Tuning für verschiedene Stile." },
    banjo: { title: "Banjo-Stimmungen", description: "Double C und Sawmill für traditionelle Banjo-Spielweisen." }
  },
  en: {
    guitar: { title: "Guitar tunings", description: "Standard, drop, open and extended-range tunings for modern guitar." },
    bass: { title: "Bass tunings", description: "Standard bass and five-string low B tuning for lower range." },
    ukulele: { title: "Ukulele tunings", description: "High G, Low G and D tuning for different ukulele styles." },
    banjo: { title: "Banjo tunings", description: "Double C and Sawmill tunings for traditional banjo sounds." }
  },
  es: {
    guitar: { title: "Afinaciones de guitarra", description: "Standard, drop, abiertas y graves para guitarra moderna." },
    bass: { title: "Afinaciones de bajo", description: "Bajo estándar y bajo de cinco cuerdas con Si grave." },
    ukulele: { title: "Afinaciones de ukulele", description: "High G, Low G y D tuning para distintos estilos." },
    banjo: { title: "Afinaciones de banjo", description: "Double C y Sawmill para sonidos tradicionales de banjo." }
  },
  fr: {
    guitar: { title: "Accordages guitare", description: "Standard, drop, ouverts et graves pour guitare moderne." },
    bass: { title: "Accordages basse", description: "Basse standard et cinq cordes avec Si grave." },
    ukulele: { title: "Accordages ukulélé", description: "High G, Low G et D tuning pour différents styles." },
    banjo: { title: "Accordages banjo", description: "Double C et Sawmill pour les sonorités traditionnelles du banjo." }
  },
  it: {
    guitar: { title: "Accordature chitarra", description: "Standard, drop, aperte e ribassate per chitarra moderna." },
    bass: { title: "Accordature basso", description: "Basso standard e basso a cinque corde con Si grave." },
    ukulele: { title: "Accordature ukulele", description: "High G, Low G e D tuning per stili diversi." },
    banjo: { title: "Accordature banjo", description: "Double C e Sawmill per sonorità tradizionali del banjo." }
  },
  ja: {
    guitar: { title: "ギターチューニング", description: "標準、ドロップ、オープン、低音域向けのチューニング。" },
    bass: { title: "ベースチューニング", description: "標準ベースと5弦 Low B チューニング。" },
    ukulele: { title: "ウクレレチューニング", description: "High G、Low G、D チューニング。" },
    banjo: { title: "バンジョーチューニング", description: "伝統的な響きの Double C と Sawmill。" }
  },
  ko: {
    guitar: { title: "기타 튜닝", description: "스탠더드, 드롭, 오픈, 저음역 기타 튜닝." },
    bass: { title: "베이스 튜닝", description: "스탠더드 베이스와 5현 Low B 튜닝." },
    ukulele: { title: "우쿨렐레 튜닝", description: "High G, Low G, D 튜닝." },
    banjo: { title: "밴조 튜닝", description: "전통적인 밴조 사운드를 위한 Double C와 Sawmill." }
  },
  pt: {
    guitar: { title: "Afinações de guitarra", description: "Standard, drop, abertas e graves para guitarra moderna." },
    bass: { title: "Afinações de baixo", description: "Baixo padrão e baixo de cinco cordas com Si grave." },
    ukulele: { title: "Afinações de ukulele", description: "High G, Low G e D tuning para estilos diferentes." },
    banjo: { title: "Afinações de banjo", description: "Double C e Sawmill para sons tradicionais de banjo." }
  },
  ru: {
    guitar: { title: "Строи гитары", description: "Standard, drop, open и пониженные строи для современной гитары." },
    bass: { title: "Строи баса", description: "Стандартный бас и пятиструнный строй с низкой B." },
    ukulele: { title: "Строи укулеле", description: "High G, Low G и D tuning для разных стилей." },
    banjo: { title: "Строи банджо", description: "Double C и Sawmill для традиционного звучания банджо." }
  },
  zh: {
    guitar: { title: "吉他调弦", description: "标准、Drop、Open 和现代低音域调弦。" },
    bass: { title: "贝斯调弦", description: "标准贝斯和五弦 Low B 调弦。" },
    ukulele: { title: "尤克里里调弦", description: "High G、Low G 和 D tuning。" },
    banjo: { title: "班卓琴调弦", description: "Double C 和 Sawmill 传统班卓琴音色。" }
  }
} satisfies Record<BaseLocale, Record<(typeof tuningGroupDefinitions)[number]["key"], Omit<TuningHubGroup, "guides">>>);

export function getTuningHubGroups(locale: Locale): TuningHubGroup[] {
  return tuningGroupDefinitions.map((group) => ({
    ...tuningGroupCopy[locale][group.key],
    guides: group.guides.filter((guide) => getGuideContent(locale, guide))
  }));
}

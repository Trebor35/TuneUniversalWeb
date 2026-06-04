import type { GuideSlug } from "@/lib/content/guides";
import type { PublicDomainSongSlug } from "@/lib/content/publicDomainSongs";
import type { Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export const featuredGuideSlugs: GuideSlug[] = [
  "common-guitar-tunings",
  "drop-d-tuning",
  "standard-bass-tuning",
  "how-to-tune-violin",
  "metronome-subdivisions",
  "how-to-read-chords"
];

export const featuredGuideIndexTools: ToolSlug[] = [
  "guitar-tuner",
  "metronome",
  "tap-bpm",
  "sound-level-meter",
  "chord-transposer"
];

export const internalLinkingContent: Record<
  Locale,
  {
    guidesHub: {
      featuredToolsDescription: string;
      featuredToolsTitle: string;
      hubCards: { description: string; href: "tools" | "tunings"; title: string }[];
    };
    toolsHub: {
      featuredGuidesDescription: string;
      featuredGuidesTitle: string;
      hubCards: { description: string; href: "guides" | "tunings"; title: string }[];
    };
  }
> = {
  ar: {
    guidesHub: {
      featuredToolsTitle: "اربط الدروس بالأدوات",
      featuredToolsDescription: "افتح الأداة المناسبة مباشرة من الدليل وانتقل بسرعة بين التمرين، الضبط والإيقاع.",
      hubCards: [
        { href: "tools", title: "كل الأدوات", description: "ابدأ من صفحة الأدوات للوصول إلى الموالف والميتـرونوم وعداد BPM." },
        { href: "tunings", title: "كل الضبطات", description: "انتقل إلى مركز الضبطات لمقارنة Standard و Drop و Open والضبطات الخاصة." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "ابدأ من الأدلة الأكثر فائدة",
      featuredGuidesDescription: "هذه الروابط تجمع بين أكثر الصفحات فائدة للمبتدئين والصفحات التي تربط الأدوات بالممارسة اليومية.",
      hubCards: [
        { href: "guides", title: "كل الأدلة", description: "استكشف أدلة الضبط، الإيقاع، قراءة الأوتار والتدريب خطوة بخطوة." },
        { href: "tunings", title: "مركز الضبطات", description: "قارن بين Accordature Standard و Drop و Open واختر الإعداد المناسب." }
      ]
    }
  },
  de: {
    guidesHub: {
      featuredToolsTitle: "Guides mit Tools verbinden",
      featuredToolsDescription: "Ã–ffne direkt das passende Werkzeug und wechsle schnell zwischen Anleitung, Tuner und Rhythmus-Training.",
      hubCards: [
        { href: "tools", title: "Alle Tools", description: "Starte im Tool-Hub fÃ¼r Tuner, Metronom, Tap BPM und Audio-Werkzeuge." },
        { href: "tunings", title: "Alle Stimmungen", description: "Wechsle zum Stimmungs-Hub, um Standard-, Drop- und Open-Tunings zu vergleichen." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Beliebte Guides zum Einstieg",
      featuredGuidesDescription: "Diese internen Links fÃ¼hren zu den nÃ¼tzlichsten Seiten fÃ¼r Einsteiger und zu hÃ¤ufig gesuchten Musikthemen.",
      hubCards: [
        { href: "guides", title: "Alle Guides", description: "Entdecke Anleitungen zu Stimmung, Rhythmus, Akkorden und Ãœberoutine." },
        { href: "tunings", title: "Tuning-Hub", description: "Vergleiche Standard-, Drop- und Open-Tunings auf einer zentralen Seite." }
      ]
    }
  },
  en: {
    guidesHub: {
      featuredToolsTitle: "Connect guides with tools",
      featuredToolsDescription: "Open the right tool straight from a guide and move quickly between tuning, rhythm work and practical practice.",
      hubCards: [
        { href: "tools", title: "All tools", description: "Start from the main tool hub for tuners, metronome, Tap BPM and audio utilities." },
        { href: "tunings", title: "All tunings", description: "Jump to the tuning hub to compare standard, drop and open setups in one place." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Popular guides to start with",
      featuredGuidesDescription: "These internal links cover the most useful beginner pages and the topics already attracting search visibility.",
      hubCards: [
        { href: "guides", title: "All guides", description: "Explore short guides for tuning, rhythm, chord reading and daily practice." },
        { href: "tunings", title: "Tuning hub", description: "Browse standard, drop and open tuning pages from a single index." }
      ]
    }
  },
  es: {
    guidesHub: {
      featuredToolsTitle: "Conectar guÃ­as con herramientas",
      featuredToolsDescription: "Abre la herramienta adecuada directamente desde cada guÃ­a y cambia rÃ¡pido entre afinaciÃ³n, ritmo y prÃ¡ctica.",
      hubCards: [
        { href: "tools", title: "Todas las herramientas", description: "Empieza en el hub principal para afinadores, metrÃ³nomo, Tap BPM y utilidades de audio." },
        { href: "tunings", title: "Todas las afinaciones", description: "Entra al hub de afinaciones para comparar Standard, Drop y Open en una sola vista." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "GuÃ­as populares para empezar",
      featuredGuidesDescription: "Estos enlaces internos reÃºnen las pÃ¡ginas mÃ¡s Ãºtiles para principiantes y las consultas musicales con mayor potencial.",
      hubCards: [
        { href: "guides", title: "Todas las guÃ­as", description: "Explora guÃ­as de afinaciÃ³n, ritmo, acordes y estudio diario." },
        { href: "tunings", title: "Hub de afinaciones", description: "Consulta afinaciones standard, drop y open desde una sola pÃ¡gina." }
      ]
    }
  },
  fr: {
    guidesHub: {
      featuredToolsTitle: "Relier les guides aux outils",
      featuredToolsDescription: "Ouvrez l'outil adaptÃ© directement depuis une page guide et passez vite de l'explication Ã  la pratique.",
      hubCards: [
        { href: "tools", title: "Tous les outils", description: "Commencez par le hub principal pour les accordeurs, le mÃ©tronome, Tap BPM et les outils audio." },
        { href: "tunings", title: "Tous les accordages", description: "AccÃ©dez au hub des accordages pour comparer Standard, Drop et Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guides populaires pour commencer",
      featuredGuidesDescription: "Ces liens internes regroupent les pages les plus utiles pour dÃ©buter et les sujets qui attirent dÃ©jÃ  des recherches.",
      hubCards: [
        { href: "guides", title: "Tous les guides", description: "Explorez des guides sur l'accordage, le rythme, les accords et la pratique quotidienne." },
        { href: "tunings", title: "Hub des accordages", description: "Parcourez les accordages standard, drop et open depuis une page centrale." }
      ]
    }
  },
  it: {
    guidesHub: {
      featuredToolsTitle: "Collega le guide agli strumenti",
      featuredToolsDescription: "Apri subito il tool giusto da ogni guida e passa rapidamente da teoria, accordatura, ritmo e pratica.",
      hubCards: [
        { href: "tools", title: "Tutti gli strumenti", description: "Parti dalla pagina strumenti per trovare accordatori, metronomo, Tap BPM e utility audio." },
        { href: "tunings", title: "Tutte le accordature", description: "Vai al centro accordature per confrontare Standard, Drop, Open e preset specifici." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guide popolari da cui partire",
      featuredGuidesDescription: "Questi link interni raccolgono le pagine piÃ¹ utili per chi inizia e i temi musicali che stanno giÃ portando traffico.",
      hubCards: [
        { href: "guides", title: "Tutte le guide", description: "Esplora guide rapide su accordatura, ritmo, lettura accordi e studio quotidiano." },
        { href: "tunings", title: "Hub accordature", description: "Consulta in un solo posto accordature standard, drop, open e varianti piÃ¹ cercate." }
      ]
    }
  },
  ja: {
    guidesHub: {
      featuredToolsTitle: "ã‚¬ã‚¤ãƒ‰ã¨ãƒ„ãƒ¼ãƒ«ã‚’ã¤ãªã",
      featuredToolsDescription: "ã‚¬ã‚¤ãƒ‰ã‹ã‚‰é©åˆ‡ãªãƒ„ãƒ¼ãƒ«ã‚’ã™ãã«é–‹ãã€ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ã€ãƒªã‚ºãƒ ã€ç·´ç¿’ã‚’å¾€å¾©ã§ãã¾ã™ã€‚",
      hubCards: [
        { href: "tools", title: "ã™ã¹ã¦ã®ãƒ„ãƒ¼ãƒ«", description: "ãƒãƒ¥ãƒ¼ãƒŠãƒ¼ã€ãƒ¡ãƒˆãƒ­ãƒŽãƒ¼ãƒ ã€Tap BPMã€ã‚ªãƒ¼ãƒ‡ã‚£ã‚ªãƒ„ãƒ¼ãƒ«ã®ãƒãƒ–ã«ç§»å‹•ã—ã¾ã™ã€‚" },
        { href: "tunings", title: "ã™ã¹ã¦ã®ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°", description: "Standardã€Dropã€Open ã®é•ã„ã‚’ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ãƒãƒ–ã§æ¯”è¼ƒã§ãã¾ã™ã€‚" }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "ã¾ãšèª­ã¿ãŸã„äººæ°—ã‚¬ã‚¤ãƒ‰",
      featuredGuidesDescription: "åˆå¿ƒè€…ã«å½¹ç«‹ã¤ãƒšãƒ¼ã‚¸ã¨ã€æ¤œç´¢ã§è¦‹ã¤ã‹ã‚Šã‚„ã™ã„éŸ³æ¥½ãƒ†ãƒ¼ãƒžã‚’ã¾ã¨ã‚ã¦ã„ã¾ã™ã€‚",
      hubCards: [
        { href: "guides", title: "ã™ã¹ã¦ã®ã‚¬ã‚¤ãƒ‰", description: "ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ã€ãƒªã‚ºãƒ ã€ã‚³ãƒ¼ãƒ‰ã€ç·´ç¿’ã®ã‚¬ã‚¤ãƒ‰ã‚’ä¸€è¦§ã§ç¢ºèªã§ãã¾ã™ã€‚" },
        { href: "tunings", title: "ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ãƒãƒ–", description: "æ¨™æº–ã€Dropã€Open ãªã©ã®ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ã‚’ä¸€ã‹æ‰€ã‹ã‚‰æŽ¢ã›ã¾ã™ã€‚" }
      ]
    }
  },
  ko: {
    guidesHub: {
      featuredToolsTitle: "ê°€ì´ë“œì™€ ë„êµ¬ ì—°ê²°",
      featuredToolsDescription: "ê°€ì´ë“œì—ì„œ ë°”ë¡œ í•„ìš”í•œ ë„êµ¬ë¥¼ ì—´ê³  íŠœë‹, ë¦¬ë“¬, ì—°ìŠµ ë™ì„ ë‹¨ê³„ë¡œ ì´ì–´ê°€ì„¸ìš”.",
      hubCards: [
        { href: "tools", title: "ëª¨ë“  ë„êµ¬", description: "íŠœë„ˆ, ë©”íŠ¸ë¡œë†ˆ, Tap BPM, ì˜¤ë””ì˜¤ ìœ í‹¸ë¦¬í‹°ë¥¼ í•œ ê³³ì—ì„œ ë³´ì„¸ìš”." },
        { href: "tunings", title: "ëª¨ë“  íŠœë‹", description: "íŠœë‹ í—ˆë¸Œì—ì„œ Standard, Drop, Open íŠœë‹ì„ ë¹ ë¥´ê²Œ ë¹„êµí•˜ì„¸ìš”." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "ë¨¼ì € ë³´ê¸° ì¢‹ì€ ì¸ê¸° ê°€ì´ë“œ",
      featuredGuidesDescription: "ì´ˆë³´ìžì—ê²Œ ìœ ìš©í•œ íŽ˜ì´ì§€ì™€ ê²€ìƒ‰ì—ì„œ í¬ì°©ë˜ê³  ìžˆëŠ” ì£¼ì œë¥¼ í•œë° ëª¨ì•˜ìŠµë‹ˆë‹¤.",
      hubCards: [
        { href: "guides", title: "ëª¨ë“  ê°€ì´ë“œ", description: "íŠœë‹, ë¦¬ë“¬, ì½”ë“œ, ì¼ìƒ ì—°ìŠµ ê°€ì´ë“œë¥¼ ìƒ´ìƒ‰í•˜ì„¸ìš”." },
        { href: "tunings", title: "íŠœë‹ í—ˆë¸Œ", description: "Standard, Drop, Open ë“±ì˜ íŠœë‹ íŽ˜ì´ì§€ë¥¼ í•œ ê³³ì—ì„œ ë³´ì„¸ìš”." }
      ]
    }
  },
  pt: {
    guidesHub: {
      featuredToolsTitle: "Ligar guias Ã s ferramentas",
      featuredToolsDescription: "Abra a ferramenta certa a partir de cada guia e passe rapidamente entre afinaÃ§Ã£o, ritmo e prÃ¡tica.",
      hubCards: [
        { href: "tools", title: "Todas as ferramentas", description: "Comece no hub principal para afinadores, metrÃ´nomo, Tap BPM e utilidades de Ã¡udio." },
        { href: "tunings", title: "Todas as afinaÃ§Ãµes", description: "Abra o hub de afinaÃ§Ãµes para comparar Standard, Drop e Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guias populares para comeÃ§ar",
      featuredGuidesDescription: "Estes links internos reÃºnem as pÃ¡ginas mais Ãºteis para iniciantes e temas com bom potencial de busca.",
      hubCards: [
        { href: "guides", title: "Todos os guias", description: "Explore guias de afinaÃ§Ã£o, ritmo, acordes e estudo diÃ¡rio." },
        { href: "tunings", title: "Hub de afinaÃ§Ãµes", description: "Navegue por afinaÃ§Ãµes standard, drop e open em uma pÃ¡gina central." }
      ]
    }
  },
  ru: {
    guidesHub: {
      featuredToolsTitle: "Связать гайды с инструментами",
      featuredToolsDescription: "Открывайте нужный инструмент прямо из гайда и быстро переходите между настройкой, ритмом и практикой.",
      hubCards: [
        { href: "tools", title: "Все инструменты", description: "Начните с главного хаба тюнеров, метронома, Tap BPM и аудио-утилит." },
        { href: "tunings", title: "Все строи", description: "Перейдите в хаб строев, чтобы сравнить Standard, Drop и Open на одной странице." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Популярные гайды для старта",
      featuredGuidesDescription: "Здесь собраны самые полезные страницы для новичков и темы, которые уже получают поисковый спрос.",
      hubCards: [
        { href: "guides", title: "Все гайды", description: "Изучайте короткие гайды по настройке, ритму, аккордам и ежедневной практике." },
        { href: "tunings", title: "Хаб строев", description: "Смотрите Standard, Drop, Open и другие строи в одном месте." }
      ]
    }
  },
  zh: {
    guidesHub: {
      featuredToolsTitle: "把指南和工具连起来",
      featuredToolsDescription: "从指南里直接打开合适的工具，在调音、节奏训练和实际练习之间快速切换。",
      hubCards: [
        { href: "tools", title: "全部工具", description: "从主工具页进入调音器、节拍器、Tap BPM 和音频实用工具。" },
        { href: "tunings", title: "全部调弦", description: "前往调弦中心，对比 Standard、Drop 和 Open 等常见方案。" }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "先看这些热门指南",
      featuredGuidesDescription: "这里汇总了最适合初学者的页面，以及已经开始获得搜索曝光的核心主题。",
      hubCards: [
        { href: "guides", title: "全部指南", description: "浏览调音、节奏、和弦阅读与日常练习指南。" },
        { href: "tunings", title: "调弦中心", description: "在一个页面里查看 standard、drop、open 等调弦方案。" }
      ]
    }
  }
};

const toolClusterGuides: Partial<Record<string, GuideSlug[]>> = {
  "7-string-guitar-tuner": ["how-to-tune-7-string-guitar", "drop-a-7-string-tuning", "common-guitar-tunings"],
  "8-string-guitar-tuner": ["how-to-tune-8-string-guitar", "drop-e-8-string-tuning", "common-guitar-tunings"],
  "12-string-guitar-tuner": ["how-to-tune-12-string-guitar", "standard-guitar-tuning", "common-guitar-tunings"],
  "bass-tuner": ["how-to-tune-bass", "standard-bass-tuning", "five-string-bass-tuning"],
  "violin-tuner": ["how-to-tune-violin", "violin-standard-tuning", "how-to-use-metronome"],
  "cello-tuner": ["how-to-tune-cello", "how-to-use-metronome", "chromatic-tuner-guide"],
  "cimbalom-tuner": ["how-to-tune-cimbalom", "chromatic-tuner-guide", "how-to-find-bpm"],
  "koto-tuner": ["how-to-tune-koto", "chromatic-tuner-guide", "how-to-find-bpm"]
};

const childrenSongSlugs: PublicDomainSongSlug[] = [
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
  "alouette"
];

const compoundAndWaltzSongSlugs: PublicDomainSongSlug[] = ["amazing-grace", "greensleeves", "silent-night"];

export const clusterSectionLabels: Record<
  Locale,
  {
    songGuidesDescription: string;
    songGuidesTitle: string;
    songToolsDescription: string;
    songToolsTitle: string;
    toolGuidesDescription: string;
    toolGuidesTitle: string;
  }
> = {
  ar: {
    songGuidesDescription: "اختر أدلة قصيرة تساعدك على قراءة الأكوردات، تثبيت الإيقاع أو تغيير المقام لهذا النوع من القطع.",
    songGuidesTitle: "أدلة مناسبة لهذا البران",
    songToolsDescription: "هذه الأدوات هي الأكثر فائدة لهذا النوع من الدراسة بين الإيقاع، الضبط وتغيير المقام.",
    songToolsTitle: "أدوات مناسبة للتدريب",
    toolGuidesDescription: "هذه الصفحات مرتبطة مباشرة بهذا النوع من الآلات أو بهذه العائلة من الضبطات.",
    toolGuidesTitle: "صفحات مخصصة لهذا النوع"
  },
  de: {
    songGuidesDescription: "Diese kurzen Guides passen besonders gut zu diesem StÃ¼cktyp, egal ob du Akkorde, Rhythmus oder Tonart Ã¼bst.",
    songGuidesTitle: "Passende Guides zu diesem StÃ¼ck",
    songToolsDescription: "Diese Tools sind fÃ¼r diese Art von Ãœbung am nÃ¼tzlichsten: Tempo, Stimmung und Tonart.",
    songToolsTitle: "Passende Ãœbungs-Tools",
    toolGuidesDescription: "Diese Seiten sind direkt mit diesem Instrumenttyp oder seiner typischen Stimmung verbunden.",
    toolGuidesTitle: "Passende Spezialseiten"
  },
  en: {
    songGuidesDescription: "These short guides match this kind of piece especially well, whether you want chord reading, rhythm control or an easier key.",
    songGuidesTitle: "Guides that fit this song",
    songToolsDescription: "These tools are the most useful companions for this kind of practice: tempo, tuning and key control.",
    songToolsTitle: "Tools that fit this practice",
    toolGuidesDescription: "These pages are closely related to this instrument type or its most common tuning setups.",
    toolGuidesTitle: "Specialized pages for this instrument"
  },
  es: {
    songGuidesDescription: "Estas guÃ­as cortas encajan bien con este tipo de pieza si quieres trabajar acordes, ritmo o una tonalidad mÃ¡s cÃ³moda.",
    songGuidesTitle: "GuÃ­as que encajan con esta canciÃ³n",
    songToolsDescription: "Estas herramientas acompaÃ±an mejor este tipo de estudio: tempo, afinaciÃ³n y control de tonalidad.",
    songToolsTitle: "Herramientas para esta prÃ¡ctica",
    toolGuidesDescription: "Estas pÃ¡ginas estÃ¡n conectadas directamente con este instrumento o con sus afinaciones mÃ¡s usadas.",
    toolGuidesTitle: "PÃ¡ginas especializadas para este instrumento"
  },
  fr: {
    songGuidesDescription: "Ces guides courts correspondent bien Ã  ce type de morceau si vous travaillez les accords, le rythme ou une tonalitÃ© plus confortable.",
    songGuidesTitle: "Guides adaptÃ©s Ã  ce morceau",
    songToolsDescription: "Ces outils accompagnent le mieux ce type de pratique: tempo, accordage et tonalitÃ©.",
    songToolsTitle: "Outils utiles pour cette pratique",
    toolGuidesDescription: "Ces pages sont directement liÃ©es Ã  ce type dâ€™instrument ou Ã  ses accordages les plus courants.",
    toolGuidesTitle: "Pages spÃ©cialisÃ©es pour cet instrument"
  },
  it: {
    songGuidesDescription: "Queste guide brevi si adattano bene a questo tipo di brano se vuoi lavorare su accordi, ritmo o una tonalitÃ  piÃ¹ comoda.",
    songGuidesTitle: "Guide adatte a questo brano",
    songToolsDescription: "Questi tool sono i compagni migliori per questo tipo di studio: tempo, accordatura e controllo della tonalitÃ .",
    songToolsTitle: "Tool utili per questa pratica",
    toolGuidesDescription: "Queste pagine sono collegate direttamente a questo tipo di strumento o alle sue accordature piÃ¹ usate.",
    toolGuidesTitle: "Pagine specializzate per questo strumento"
  },
  ja: {
    songGuidesDescription: "ã“ã®æ›²ã®ç·´ç¿’ã«åˆã†çŸ­ã„ã‚¬ã‚¤ãƒ‰ã‚’é¸ã¹ã¾ã™ã€‚ã‚³ãƒ¼ãƒ‰ã€ãƒªã‚ºãƒ ã€ã‚­ãƒ¼å¤‰æ›´ã«å½¹ç«‹ã¡ã¾ã™ã€‚",
    songGuidesTitle: "ã“ã®æ›²ã«åˆã†ã‚¬ã‚¤ãƒ‰",
    songToolsDescription: "ã“ã®ç¨®é¡žã®ç·´ç¿’ã«ã¯ã€ãƒ†ãƒ³ãƒã€ãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ã€ã‚­ãƒ¼èª¿æ•´ã®ãƒ„ãƒ¼ãƒ«ãŒå½¹ç«‹ã¡ã¾ã™ã€‚",
    songToolsTitle: "ã“ã®ç·´ç¿’ã«åˆã†ãƒ„ãƒ¼ãƒ«",
    toolGuidesDescription: "ã“ã‚Œã‚‰ã®ãƒšãƒ¼ã‚¸ã¯ã€ã“ã®æ¥½å™¨ã‚¿ã‚¤ãƒ—ã‚„å…¸åž‹çš„ãªãƒãƒ¥ãƒ¼ãƒ‹ãƒ³ã‚°ã¨ç›´æŽ¥é–¢ä¿‚ã—ã¦ã„ã¾ã™ã€‚",
    toolGuidesTitle: "ã“ã®æ¥½å™¨ã«é©ã—ãŸãƒšãƒ¼ã‚¸"
  },
  ko: {
    songGuidesDescription: "ì½”ë“œ, ë¦¬ë“¬, í‚¤ ë³€ê²½ì„ ì—°ìŠµí• ã„¸ìœ¼ë¡œ í•  ë•Œ ì´ ê³¡ ìœ í˜•ì— ì˜ ë§žëŠ” ì§§ì€ ê°€ì´ë“œë“¤ìž…ë‹ˆë‹¤.",
    songGuidesTitle: "ì´ ê³¡ì— ë§žëŠ” ê°€ì´ë“œ",
    songToolsDescription: "ì´ëŸ° ì—°ìŠµì—ëŠ” í…œí¬, íŠœë‹, í‚¤ ì¡°ì • ë„êµ¬ê°€ ê°€ìž¥ ìœ ìš©í•©ë‹ˆë‹¤.",
    songToolsTitle: "ì´ ì—°ìŠµì— ë§žëŠ” ë„êµ¬",
    toolGuidesDescription: "ì´ íŽ˜ì´ì§€ë“¤ì€ í˜„ìž¬ ì•…ê¸° ìœ í˜•ì´ë‚˜ ìžì£¼ ì“°ëŠ” íŠœë‹ê³¼ ì§ì ‘ ì—°ê²°ë©ë‹ˆë‹¤.",
    toolGuidesTitle: "ì´ ì•…ê¸°ì— ë§žëŠ” ì „ìš© íŽ˜ì´ì§€"
  },
  pt: {
    songGuidesDescription: "Estes guias curtos combinam bem com este tipo de peÃ§a quando vocÃª quer estudar acordes, ritmo ou uma tonalidade mais confortÃ¡vel.",
    songGuidesTitle: "Guias que combinam com esta mÃºsica",
    songToolsDescription: "Estas ferramentas acompanham melhor este tipo de estudo: tempo, afinaÃ§Ã£o e controle de tonalidade.",
    songToolsTitle: "Ferramentas para esta prÃ¡tica",
    toolGuidesDescription: "Estas pÃ¡ginas estÃ£o ligadas diretamente a este tipo de instrumento ou Ã s afinaÃ§Ãµes mais usadas dele.",
    toolGuidesTitle: "PÃ¡ginas especializadas para este instrumento"
  },
  ru: {
    songGuidesDescription: "Ð­Ñ‚Ð¸ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ðµ Ð³Ð°Ð¹Ð´Ñ‹ Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‚ Ðº Ñ‚Ð°ÐºÐ¾Ð¼Ñƒ Ñ‚Ð¸Ð¿Ñƒ Ð¿Ñ€Ð¾Ð¸Ð·Ð²ÐµÐ´ÐµÐ½Ð¸Ñ, ÐµÑÐ»Ð¸ Ð²Ñ‹ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚Ðµ Ð½Ð°Ð´ Ð°ÐºÐºÐ¾Ñ€Ð´Ð°Ð¼Ð¸, Ñ€Ð¸Ñ‚Ð¼Ð¾Ð¼ Ð¸Ð»Ð¸ ÑƒÐ´Ð¾Ð±Ð½Ð¾Ð¹ Ñ‚Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒÑŽ.",
    songGuidesTitle: "Ð“Ð°Ð¹Ð´Ñ‹ Ð´Ð»Ñ ÑÑ‚Ð¾Ð¹ Ð¿ÐµÑÐ½Ð¸",
    songToolsDescription: "Ð”Ð»Ñ Ñ‚Ð°ÐºÐ¾Ð¹ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ Ð¿Ð¾Ð»ÐµÐ·Ð½Ñ‹ Ñ‚ÐµÐ¼Ð¿, Ñ‚ÑŽÐ½Ð¸Ð½Ð³ Ð¸ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÑŒ Ñ‚Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸.",
    songToolsTitle: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹ Ð´Ð»Ñ ÑÑ‚Ð¾Ð¹ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸",
    toolGuidesDescription: "Ð­Ñ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð½Ð°Ð¿Ñ€ÑÐ¼ÑƒÑŽ ÑÐ²ÑÐ·Ð°Ð½Ñ‹ Ñ ÑÑ‚Ð¸Ð¼ Ñ‚Ð¸Ð¿Ð¾Ð¼ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð¸Ð»Ð¸ Ñ ÐµÐ³Ð¾ ÑÐ°Ð¼Ñ‹Ð¼Ð¸ Ð²Ð¾ÑÑ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¼Ð¸ ÑÑ‚Ñ€Ð¾ÑÐ¼Ð¸.",
    toolGuidesTitle: "Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ðµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð´Ð»Ñ ÑÑ‚Ð¾Ð³Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð°"
  },
  zh: {
    songGuidesDescription: "è¿™äº›ç®€çŸ­æŒ‡å—å¾ˆé€‚åˆè¿™ç±»æ›²ç›®çš„ç»ƒä¹ ï¼Œä¸ç®¡ä½ æ˜¯åœ¨ç»ƒå’Œå¼¦ã€èŠ‚å¥è¿˜æ˜¯æ›´èˆ’æœçš„è°ƒæ€§ã€‚",
    songGuidesTitle: "é€‚åˆè¿™é¦–æ›²çš„æŒ‡å—",
    songToolsDescription: "è¿™ç±»ç»ƒä¹ æœ€å¸¸ç”¨çš„å·¥å…·æ˜¯èŠ‚æ‹ã€è°ƒéŸ³å’Œè°ƒæ€§æŽ§åˆ¶ã€‚",
    songToolsTitle: "é€‚åˆè¿™ç§ç»ƒä¹ çš„å·¥å…·",
    toolGuidesDescription: "è¿™äº›é¡µé¢ä¸Žå½“å‰ä¹å™¨ç±»åž‹æˆ–å…¶æœ€å¸¸ç”¨çš„è°ƒå¼¦æ–¹æ¡ˆç›´æŽ¥ç›¸å…³ã€‚",
    toolGuidesTitle: "é€‚åˆè¿™ä¸ªä¹å™¨çš„ä¸“é¢˜é¡µ"
  }
};

export function getToolClusterGuides(toolOrRoute: string): GuideSlug[] {
  return toolClusterGuides[toolOrRoute] ?? [];
}

export function getSongClusterGuides(songSlug: PublicDomainSongSlug): GuideSlug[] {
  if (childrenSongSlugs.includes(songSlug)) return ["how-to-read-chords", "how-to-find-bpm", "common-guitar-tunings"];
  if (compoundAndWaltzSongSlugs.includes(songSlug)) return ["how-to-use-metronome", "metronome-subdivisions", "how-to-transpose-chords"];
  return ["how-to-transpose-chords", "metronome-subdivisions", "common-guitar-tunings"];
}

export function getSongClusterTools(songSlug: PublicDomainSongSlug): ToolSlug[] {
  if (childrenSongSlugs.includes(songSlug)) return ["metronome", "tap-bpm", "guitar-tuner", "pitch-generator"];
  if (compoundAndWaltzSongSlugs.includes(songSlug)) return ["metronome", "tap-bpm", "chord-transposer", "guitar-tuner"];
  return ["guitar-tuner", "metronome", "chord-transposer", "tap-bpm"];
}

export type SearchIntentTarget =
  | { type: "guide"; slug: GuideSlug }
  | { type: "tool"; slug: ToolSlug }
  | { type: "hub"; slug: "guides" | "songs" | "tools" | "tunings" };

export type FollowUpQuestion = {
  answer: string;
  question: string;
  target?: SearchIntentTarget;
};

export const searchIntentLabels: Record<
  Locale,
  {
    questionsDescription: string;
    questionsTitle: string;
    searchesDescription: string;
    searchesTitle: string;
  }
> = {
  ar: {
    questionsDescription: "أسئلة قصيرة تساعد المستخدم على اختيار الصفحة أو الأداة التالية بدون تشتيت.",
    questionsTitle: "أسئلة مرتبطة",
    searchesDescription: "روابط داخلية مبنية على نية البحث الفعلية حول هذه الصفحة.",
    searchesTitle: "عمليات بحث مرتبطة"
  },
  de: {
    questionsDescription: "Kurze Folgefragen, die Nutzerinnen und Nutzer oft nach dieser Seite haben.",
    questionsTitle: "Verwandte Fragen",
    searchesDescription: "Interne Ziele, die zur typischen Suchabsicht rund um diese Seite passen.",
    searchesTitle: "Verwandte Suchen"
  },
  en: {
    questionsDescription: "Short follow-up questions that naturally come after this page.",
    questionsTitle: "Related questions",
    searchesDescription: "Internal destinations that match the search intent around this topic.",
    searchesTitle: "Related searches"
  },
  es: {
    questionsDescription: "Preguntas cortas que suelen aparecer justo despues de esta pagina.",
    questionsTitle: "Preguntas relacionadas",
    searchesDescription: "Enlaces internos alineados con la intencion de busqueda de este tema.",
    searchesTitle: "Busquedas relacionadas"
  },
  fr: {
    questionsDescription: "Petites questions de suite qui reviennent souvent apres cette page.",
    questionsTitle: "Questions associees",
    searchesDescription: "Liens internes en phase avec l'intention de recherche autour de ce sujet.",
    searchesTitle: "Recherches associees"
  },
  it: {
    questionsDescription: "Domande brevi che spesso arrivano subito dopo questa pagina.",
    questionsTitle: "Domande correlate",
    searchesDescription: "Link interni allineati all'intento di ricerca attorno a questo argomento.",
    searchesTitle: "Ricerche correlate"
  },
  ja: {
    questionsDescription: "このページの次に出やすい疑問を短くまとめました。",
    questionsTitle: "関連する質問",
    searchesDescription: "このテーマの検索意図に合う内部ページです。",
    searchesTitle: "関連検索"
  },
  ko: {
    questionsDescription: "이 페이지 다음에 자주 이어지는 질문을 짧게 모았습니다.",
    questionsTitle: "관련 질문",
    searchesDescription: "이 주제의 검색 의도에 맞는 내부 페이지입니다.",
    searchesTitle: "관련 검색"
  },
  pt: {
    questionsDescription: "Perguntas curtas que costumam vir logo depois desta pagina.",
    questionsTitle: "Perguntas relacionadas",
    searchesDescription: "Links internos alinhados com a intencao de busca deste tema.",
    searchesTitle: "Pesquisas relacionadas"
  },
  ru: {
    questionsDescription: "Короткие вопросы, которые часто возникают сразу после этой страницы.",
    questionsTitle: "Связанные вопросы",
    searchesDescription: "Внутренние ссылки, совпадающие с поисковым намерением по этой теме.",
    searchesTitle: "Связанные запросы"
  },
  zh: {
    questionsDescription: "把这页之后常见的下一步问题放在一起，方便继续浏览。",
    questionsTitle: "相关问题",
    searchesDescription: "这些内部链接更贴近这个主题的真实搜索意图。",
    searchesTitle: "相关搜索"
  }
};

const toolSearchTargetMap: Partial<Record<string, SearchIntentTarget[]>> = {
  "7-string-guitar-tuner": [
    { type: "guide", slug: "how-to-tune-7-string-guitar" },
    { type: "guide", slug: "drop-a-7-string-tuning" },
    { type: "guide", slug: "common-guitar-tunings" },
    { type: "tool", slug: "metronome" }
  ],
  "8-string-guitar-tuner": [
    { type: "guide", slug: "how-to-tune-8-string-guitar" },
    { type: "guide", slug: "drop-e-8-string-tuning" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "tool", slug: "metronome" }
  ],
  "12-string-guitar-tuner": [
    { type: "guide", slug: "how-to-tune-12-string-guitar" },
    { type: "guide", slug: "standard-guitar-tuning" },
    { type: "guide", slug: "guitar-tuner-with-microphone" },
    { type: "tool", slug: "chord-transposer" }
  ],
  "bass-tuner": [
    { type: "guide", slug: "how-to-tune-bass" },
    { type: "guide", slug: "standard-bass-tuning" },
    { type: "guide", slug: "five-string-bass-tuning" },
    { type: "tool", slug: "metronome" }
  ],
  "cello-tuner": [
    { type: "guide", slug: "how-to-tune-cello" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "guide", slug: "how-to-use-metronome" },
    { type: "tool", slug: "pitch-generator" }
  ],
  "chord-transposer": [
    { type: "guide", slug: "how-to-transpose-chords" },
    { type: "guide", slug: "how-to-read-chords" },
    { type: "tool", slug: "guitar-tuner" },
    { type: "tool", slug: "tap-bpm" }
  ],
  "cimbalom-tuner": [
    { type: "guide", slug: "how-to-tune-cimbalom" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "guide", slug: "how-to-find-bpm" },
    { type: "tool", slug: "pitch-generator" }
  ],
  "guitar-tuner": [
    { type: "guide", slug: "guitar-tuner-with-microphone" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "guide", slug: "common-guitar-tunings" },
    { type: "tool", slug: "metronome" },
    { type: "tool", slug: "chord-transposer" }
  ],
  "koto-tuner": [
    { type: "guide", slug: "how-to-tune-koto" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "guide", slug: "how-to-find-bpm" },
    { type: "tool", slug: "pitch-generator" }
  ],
  metronome: [
    { type: "guide", slug: "how-to-use-metronome" },
    { type: "guide", slug: "metronome-subdivisions" },
    { type: "guide", slug: "metronome-for-guitar" },
    { type: "tool", slug: "tap-bpm" }
  ],
  "pitch-generator": [
    { type: "guide", slug: "pitch-generator-guide" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "guide", slug: "sound-meter-db-guide" },
    { type: "tool", slug: "sound-level-meter" }
  ],
  "sound-level-meter": [
    { type: "guide", slug: "sound-meter-db-guide" },
    { type: "guide", slug: "pitch-generator-guide" },
    { type: "guide", slug: "how-to-find-bpm" },
    { type: "tool", slug: "pitch-generator" }
  ],
  "tap-bpm": [
    { type: "guide", slug: "how-to-find-bpm" },
    { type: "guide", slug: "how-to-use-metronome" },
    { type: "guide", slug: "metronome-subdivisions" },
    { type: "tool", slug: "metronome" }
  ],
  "violin-tuner": [
    { type: "guide", slug: "how-to-tune-violin" },
    { type: "guide", slug: "violin-standard-tuning" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "tool", slug: "pitch-generator" }
  ]
};

const guideSearchTargetMap: Partial<Record<GuideSlug, SearchIntentTarget[]>> = {
  "chromatic-tuner-guide": [
    { type: "tool", slug: "guitar-tuner" },
    { type: "tool", slug: "pitch-generator" },
    { type: "guide", slug: "guitar-tuner-with-microphone" },
    { type: "guide", slug: "sound-meter-db-guide" }
  ],
  "common-guitar-tunings": [
    { type: "tool", slug: "guitar-tuner" },
    { type: "guide", slug: "standard-guitar-tuning" },
    { type: "guide", slug: "drop-d-tuning" },
    { type: "guide", slug: "open-g-tuning" }
  ],
  "drop-c-tuning": [
    { type: "tool", slug: "guitar-tuner" },
    { type: "guide", slug: "drop-d-tuning" },
    { type: "guide", slug: "drop-c-sharp-tuning" },
    { type: "guide", slug: "full-step-down-tuning" }
  ],
  "drop-d-tuning": [
    { type: "tool", slug: "guitar-tuner" },
    { type: "guide", slug: "standard-guitar-tuning" },
    { type: "guide", slug: "drop-c-tuning" },
    { type: "guide", slug: "dadgad-tuning" }
  ],
  "how-to-tune-bass": [
    { type: "tool", slug: "bass-tuner" },
    { type: "guide", slug: "standard-bass-tuning" },
    { type: "guide", slug: "five-string-bass-tuning" },
    { type: "tool", slug: "metronome" }
  ],
  "how-to-tune-violin": [
    { type: "tool", slug: "violin-tuner" },
    { type: "guide", slug: "violin-standard-tuning" },
    { type: "guide", slug: "chromatic-tuner-guide" },
    { type: "tool", slug: "pitch-generator" }
  ],
  "metronome-subdivisions": [
    { type: "tool", slug: "metronome" },
    { type: "tool", slug: "tap-bpm" },
    { type: "guide", slug: "how-to-use-metronome" },
    { type: "guide", slug: "metronome-for-guitar" }
  ],
  "standard-bass-tuning": [
    { type: "tool", slug: "bass-tuner" },
    { type: "guide", slug: "how-to-tune-bass" },
    { type: "guide", slug: "five-string-bass-tuning" },
    { type: "tool", slug: "metronome" }
  ]
};

const toolQuestionMap: Partial<Record<string, Record<Locale, FollowUpQuestion[]>>> = {
  "chord-transposer": buildLocaleQuestions({
    en: [
      { question: "How many semitones should I move a song?", answer: "Start with one or two semitones and compare which version fits your voice or instrument more naturally.", target: { type: "guide", slug: "how-to-transpose-chords" } },
      { question: "Can I transpose slash chords too?", answer: "Yes. TuneUniversal keeps the chord quality and also moves the bass note after the slash.", target: { type: "tool", slug: "chord-transposer" } }
    ],
    it: [
      { question: "Di quanti semitoni conviene spostare un brano?", answer: "Di solito si parte da uno o due semitoni e si confronta quale versione risulta piu comoda da cantare o suonare.", target: { type: "guide", slug: "how-to-transpose-chords" } },
      { question: "I slash chord vengono trasposti bene?", answer: "Si. TuneUniversal mantiene la qualita dell'accordo e sposta anche la nota di basso dopo la slash.", target: { type: "tool", slug: "chord-transposer" } }
    ]
  }),
  "guitar-tuner": buildLocaleQuestions({
    en: [
      { question: "Should I use chromatic mode or a fixed guitar preset?", answer: "Use the guitar preset for everyday standard tuning and chromatic mode when you want to catch notes more freely.", target: { type: "guide", slug: "chromatic-tuner-guide" } },
      { question: "Why does the tuner react to background noise?", answer: "Move closer to the instrument, pluck one string at a time and use the guide for microphone-based tuning tips.", target: { type: "guide", slug: "guitar-tuner-with-microphone" } }
    ],
    it: [
      { question: "Meglio modalita cromatica o preset chitarra?", answer: "Il preset chitarra va bene per l'uso quotidiano, mentre la modalita cromatica e utile quando vuoi intercettare le note in modo piu libero.", target: { type: "guide", slug: "chromatic-tuner-guide" } },
      { question: "Perche il tuner prende anche il rumore attorno?", answer: "Conviene stare vicino allo strumento, pizzicare una corda alla volta e seguire la guida con i consigli per l'uso del microfono.", target: { type: "guide", slug: "guitar-tuner-with-microphone" } }
    ]
  }),
  metronome: buildLocaleQuestions({
    en: [
      { question: "Which subdivision should I practice first?", answer: "Start with straight eighth notes, then move to triplets and sixteenths once the pulse feels stable.", target: { type: "guide", slug: "metronome-subdivisions" } },
      { question: "Should I set the BPM with Tap Tempo first?", answer: "Yes, Tap BPM is a quick way to estimate the tempo of a song before starting metronome practice.", target: { type: "tool", slug: "tap-bpm" } }
    ],
    it: [
      { question: "Da quale suddivisione conviene partire?", answer: "Di solito si parte dagli ottavi regolari, poi si passa a terzine e sedicesimi quando il click e stabile.", target: { type: "guide", slug: "metronome-subdivisions" } },
      { question: "Conviene trovare prima il BPM con Tap Tempo?", answer: "Si. Tap BPM aiuta a stimare in pochi secondi il tempo del brano prima di iniziare lo studio col metronomo.", target: { type: "tool", slug: "tap-bpm" } }
    ]
  }),
  "sound-level-meter": buildLocaleQuestions({
    en: [
      { question: "Is the sound meter a lab-grade decibel tool?", answer: "No. It is a practical microphone-based estimate, useful for comparing environments and practice levels.", target: { type: "guide", slug: "sound-meter-db-guide" } },
      { question: "How can I compare pitch and volume together?", answer: "Open the pitch generator for a stable tone, then use the sound meter to watch how the level changes.", target: { type: "tool", slug: "pitch-generator" } }
    ],
    it: [
      { question: "Il fonometro e uno strumento da laboratorio?", answer: "No. E una stima pratica basata sul microfono, utile per confrontare ambienti e livelli di studio.", target: { type: "guide", slug: "sound-meter-db-guide" } },
      { question: "Come confronto altezza del suono e volume insieme?", answer: "Puoi aprire il pitch generator per avere un tono stabile e usare il fonometro per vedere come cambia il livello.", target: { type: "tool", slug: "pitch-generator" } }
    ]
  }),
  "tap-bpm": buildLocaleQuestions({
    en: [
      { question: "Is instant BPM or average BPM more reliable?", answer: "Average BPM is more stable over a few taps, while instant BPM helps when you want to react quickly.", target: { type: "tool", slug: "tap-bpm" } },
      { question: "What should I do after finding the BPM?", answer: "Send that tempo to the metronome and practice the groove with the same pulse.", target: { type: "tool", slug: "metronome" } }
    ],
    it: [
      { question: "E piu affidabile il BPM istantaneo o quello medio?", answer: "Il BPM medio e piu stabile dopo alcuni tap, mentre quello istantaneo e utile per reagire subito.", target: { type: "tool", slug: "tap-bpm" } },
      { question: "Cosa faccio dopo aver trovato il BPM?", answer: "Il passo naturale e passare al metronomo e studiare il groove con quello stesso tempo.", target: { type: "tool", slug: "metronome" } }
    ]
  })
};

const guideQuestionMap: Partial<Record<GuideSlug, Record<Locale, FollowUpQuestion[]>>> = {
  "chromatic-tuner-guide": buildLocaleQuestions({
    en: [
      { question: "When is a chromatic tuner better than a fixed preset?", answer: "A chromatic tuner is better when you move across many notes, alternate tunings or instruments outside one standard layout.", target: { type: "tool", slug: "guitar-tuner" } },
      { question: "Can I pair this with a generated reference tone?", answer: "Yes. Use the pitch generator when you want a clean target tone, then compare it with your instrument.", target: { type: "tool", slug: "pitch-generator" } }
    ],
    it: [
      { question: "Quando conviene un accordatore cromatico rispetto a un preset fisso?", answer: "L'accordatore cromatico e piu utile quando ti muovi tra tante note, accordature alternative o strumenti fuori dallo schema standard.", target: { type: "tool", slug: "guitar-tuner" } },
      { question: "Posso abbinarlo a un tono di riferimento generato?", answer: "Si. Il pitch generator e utile quando vuoi avere una nota pulita da confrontare con lo strumento.", target: { type: "tool", slug: "pitch-generator" } }
    ]
  }),
  "drop-d-tuning": buildLocaleQuestions({
    en: [
      { question: "Is Drop D enough for heavier riffs?", answer: "For many rock and alternative riffs yes. If you need even more tension relief, compare it with Drop C next.", target: { type: "guide", slug: "drop-c-tuning" } },
      { question: "Do I need to retune every string?", answer: "No. In Drop D only the lowest guitar string changes from E to D.", target: { type: "tool", slug: "guitar-tuner" } }
    ],
    it: [
      { question: "Il Drop D basta per riff piu pesanti?", answer: "Per molti riff rock e alternative si. Se vuoi scendere ancora, il confronto naturale e con il Drop C.", target: { type: "guide", slug: "drop-c-tuning" } },
      { question: "Devo riaccordare tutte le corde?", answer: "No. Nel Drop D cambia solo la corda piu grave, da E a D.", target: { type: "tool", slug: "guitar-tuner" } }
    ]
  }),
  "metronome-subdivisions": buildLocaleQuestions({
    en: [
      { question: "Should I practice subdivisions at one tempo or many?", answer: "Start at one comfortable tempo, then raise the BPM gradually so the pulse stays clean.", target: { type: "tool", slug: "metronome" } },
      { question: "Can Tap BPM help before subdivision practice?", answer: "Yes. Tap the song first, then send the estimated tempo into your metronome session.", target: { type: "tool", slug: "tap-bpm" } }
    ],
    it: [
      { question: "Le suddivisioni si studiano a un solo tempo o a piu velocita?", answer: "Meglio partire da un tempo comodo e poi salire gradualmente, cosi il click resta chiaro.", target: { type: "tool", slug: "metronome" } },
      { question: "Tap BPM puo aiutare prima dello studio delle suddivisioni?", answer: "Si. Prima batti il tempo del brano, poi porti quel BPM dentro al metronomo.", target: { type: "tool", slug: "tap-bpm" } }
    ]
  }),
  "standard-bass-tuning": buildLocaleQuestions({
    en: [
      { question: "When should I move from 4-string to 5-string bass tuning?", answer: "A five-string setup is useful when you need low B notes regularly or want more low range without detuning.", target: { type: "guide", slug: "five-string-bass-tuning" } },
      { question: "Can I practice intonation after tuning?", answer: "Yes. Open the metronome and work slowly on long notes after the bass is in tune.", target: { type: "tool", slug: "metronome" } }
    ],
    it: [
      { question: "Quando ha senso passare dal basso 4 corde al 5 corde?", answer: "Il 5 corde e utile quando ti serve spesso il Si grave o vuoi piu estensione in basso senza scendere di accordatura.", target: { type: "guide", slug: "five-string-bass-tuning" } },
      { question: "Dopo l'accordatura conviene studiare anche l'intonazione?", answer: "Si. Un buon passo e aprire il metronomo e lavorare lentamente su note lunghe dopo aver accordato il basso.", target: { type: "tool", slug: "metronome" } }
    ]
  })
};

function buildLocaleQuestions(
  partial: Partial<Record<Locale, FollowUpQuestion[]>>
): Record<Locale, FollowUpQuestion[]> {
  const fallback = partial.en ?? [];
  return {
    ar: partial.ar ?? fallback,
    de: partial.de ?? fallback,
    en: partial.en ?? fallback,
    es: partial.es ?? fallback,
    fr: partial.fr ?? fallback,
    it: partial.it ?? fallback,
    ja: partial.ja ?? fallback,
    ko: partial.ko ?? fallback,
    pt: partial.pt ?? fallback,
    ru: partial.ru ?? fallback,
    zh: partial.zh ?? fallback
  };
}

export function getToolSearchIntentTargets(toolOrRoute: string): SearchIntentTarget[] {
  return toolSearchTargetMap[toolOrRoute] ?? [];
}

export function getGuideSearchIntentTargets(guide: GuideSlug): SearchIntentTarget[] {
  return guideSearchTargetMap[guide] ?? [];
}

export function getToolFollowUpQuestions(locale: Locale, toolOrRoute: string): FollowUpQuestion[] {
  return toolQuestionMap[toolOrRoute]?.[locale] ?? [];
}

export function getGuideFollowUpQuestions(locale: Locale, guide: GuideSlug): FollowUpQuestion[] {
  return guideQuestionMap[guide]?.[locale] ?? [];
}

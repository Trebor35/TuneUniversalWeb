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

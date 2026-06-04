import type { GuideSlug } from "@/lib/content/guides";
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

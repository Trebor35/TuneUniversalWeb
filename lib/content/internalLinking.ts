import type { GuideSlug } from "@/lib/content/guides";
import type { PublicDomainSongSlug } from "@/lib/content/publicDomainSongs";
import { withLocaleFallbacks, type BaseLocale, type Locale } from "@/lib/i18n/locales";
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
> = withLocaleFallbacks({
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
        { href: "tunings", title: "مركز الضبطات", description: "قارن بين Standard و Drop و Open واختر الإعداد المناسب." }
      ]
    }
  },
  de: {
    guidesHub: {
      featuredToolsTitle: "Guides mit Tools verbinden",
      featuredToolsDescription: "Öffne direkt das passende Werkzeug und wechsle schnell zwischen Anleitung, Tuner und Rhythmus-Training.",
      hubCards: [
        { href: "tools", title: "Alle Tools", description: "Starte im Tool-Hub für Tuner, Metronom, Tap BPM und Audio-Werkzeuge." },
        { href: "tunings", title: "Alle Stimmungen", description: "Wechsle zum Stimmungs-Hub, um Standard-, Drop- und Open-Tunings zu vergleichen." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Beliebte Guides zum Einstieg",
      featuredGuidesDescription: "Diese internen Links führen zu den nützlichsten Seiten für Einsteiger und zu häufig gesuchten Musikthemen.",
      hubCards: [
        { href: "guides", title: "Alle Guides", description: "Entdecke Anleitungen zu Stimmung, Rhythmus, Akkorden und Überoutine." },
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
      featuredToolsTitle: "Conectar guías con herramientas",
      featuredToolsDescription: "Abre la herramienta adecuada directamente desde cada guía y cambia rápido entre afinación, ritmo y práctica.",
      hubCards: [
        { href: "tools", title: "Todas las herramientas", description: "Empieza en el hub principal para afinadores, metrónomo, Tap BPM y utilidades de audio." },
        { href: "tunings", title: "Todas las afinaciones", description: "Entra al hub de afinaciones para comparar Standard, Drop y Open en una sola vista." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guías populares para empezar",
      featuredGuidesDescription: "Estos enlaces internos reúnen las páginas más útiles para principiantes y las consultas musicales con mayor potencial.",
      hubCards: [
        { href: "guides", title: "Todas las guías", description: "Explora guías de afinación, ritmo, acordes y estudio diario." },
        { href: "tunings", title: "Hub de afinaciones", description: "Consulta afinaciones standard, drop y open desde una sola página." }
      ]
    }
  },
  fr: {
    guidesHub: {
      featuredToolsTitle: "Relier les guides aux outils",
      featuredToolsDescription: "Ouvrez l'outil adapté directement depuis une page guide et passez vite de l'explication à la pratique.",
      hubCards: [
        { href: "tools", title: "Tous les outils", description: "Commencez par le hub principal pour les accordeurs, le métronome, Tap BPM et les outils audio." },
        { href: "tunings", title: "Tous les accordages", description: "Accédez au hub des accordages pour comparer Standard, Drop et Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guides populaires pour commencer",
      featuredGuidesDescription: "Ces liens internes regroupent les pages les plus utiles pour débuter et les sujets qui attirent déjà des recherches.",
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
      featuredGuidesDescription: "Questi link interni raccolgono le pagine più utili per chi inizia e i temi musicali che stanno già portando traffico.",
      hubCards: [
        { href: "guides", title: "Tutte le guide", description: "Esplora guide rapide su accordatura, ritmo, lettura accordi e studio quotidiano." },
        { href: "tunings", title: "Hub accordature", description: "Consulta in un solo posto accordature standard, drop, open e varianti più cercate." }
      ]
    }
  },
  ja: {
    guidesHub: {
      featuredToolsTitle: "ガイドとツールをつなぐ",
      featuredToolsDescription: "ガイドから適切なツールをすぐに開き、チューニング、リズム、練習を往復できます。",
      hubCards: [
        { href: "tools", title: "すべてのツール", description: "チューナー、メトロノーム、Tap BPM、オーディオツールのハブに移動します。" },
        { href: "tunings", title: "すべてのチューニング", description: "Standard、Drop、Open の違いをチューニングハブで比較できます。" }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "まず読みたい人気ガイド",
      featuredGuidesDescription: "初心者に役立つページと、検索で見つかりやすい音楽テーマをまとめています。",
      hubCards: [
        { href: "guides", title: "すべてのガイド", description: "チューニング、リズム、コード、練習のガイドを一覧で確認できます。" },
        { href: "tunings", title: "チューニングハブ", description: "標準、Drop、Open などのチューニングを一か所から探せます。" }
      ]
    }
  },
  ko: {
    guidesHub: {
      featuredToolsTitle: "가이드와 도구 연결",
      featuredToolsDescription: "가이드에서 바로 필요한 도구를 열고 튜닝, 리듬, 연습 단계로 이어가세요.",
      hubCards: [
        { href: "tools", title: "모든 도구", description: "튜너, 메트로놈, Tap BPM, 오디오 유틸리티를 한 곳에서 보세요." },
        { href: "tunings", title: "모든 튜닝", description: "튜닝 허브에서 Standard, Drop, Open 튜닝을 빠르게 비교하세요." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "먼저 보기 좋은 인기 가이드",
      featuredGuidesDescription: "초보자에게 유용한 페이지와 검색에서 포착되고 있는 주제를 한데 모았습니다.",
      hubCards: [
        { href: "guides", title: "모든 가이드", description: "튜닝, 리듬, 코드, 일상 연습 가이드를 샅샅이 살펴보세요." },
        { href: "tunings", title: "튜닝 허브", description: "Standard, Drop, Open 등의 튜닝 페이지를 한 곳에서 보세요." }
      ]
    }
  },
  pt: {
    guidesHub: {
      featuredToolsTitle: "Ligar guias às ferramentas",
      featuredToolsDescription: "Abra a ferramenta certa a partir de cada guia e passe rapidamente entre afinação, ritmo e prática.",
      hubCards: [
        { href: "tools", title: "Todas as ferramentas", description: "Comece no hub principal para afinadores, metrônomo, Tap BPM e utilidades de áudio." },
        { href: "tunings", title: "Todas as afinações", description: "Abra o hub de afinações para comparar Standard, Drop e Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guias populares para começar",
      featuredGuidesDescription: "Estes links internos reúnem as páginas mais úteis para iniciantes e temas com bom potencial de busca.",
      hubCards: [
        { href: "guides", title: "Todos os guias", description: "Explore guias de afinação, ritmo, acordes e estudo diário." },
        { href: "tunings", title: "Hub de afinações", description: "Navegue por afinações standard, drop e open em uma página central." }
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
} satisfies Record<BaseLocale, {
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
}>, {
  nl: {
    guidesHub: {
      featuredToolsTitle: "Gidsen koppelen aan tools",
      featuredToolsDescription: "Open het juiste tool direct vanuit een gids en schakel snel tussen afstemming, ritme en oefening.",
      hubCards: [
        { href: "tools", title: "Alle tools", description: "Begin bij de tool-hub voor stemmers, metronoom, Tap BPM en audio-hulpmiddelen." },
        { href: "tunings", title: "Alle stemmingen", description: "Ga naar de stemminghub om Standard, Drop en Open te vergelijken." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Populaire gidsen om mee te beginnen",
      featuredGuidesDescription: "Deze interne links verzamelen de meest nuttige beginnersspagina's en muzikale onderwerpen.",
      hubCards: [
        { href: "guides", title: "Alle gidsen", description: "Verken gidsen voor stemmen, ritme, akkoorden en dagelijks oefenen." },
        { href: "tunings", title: "Stemminghub", description: "Bekijk Standard, Drop en Open stemmingen op één pagina." }
      ]
    }
  },
  pl: {
    guidesHub: {
      featuredToolsTitle: "Łącz poradniki z narzędziami",
      featuredToolsDescription: "Otwórz właściwe narzędzie bezpośrednio z poradnika i szybko przechodź między strojeniem, rytmem i ćwiczeniami.",
      hubCards: [
        { href: "tools", title: "Wszystkie narzędzia", description: "Zacznij od głównego centrum narzędzi dla stroików, metronomu i Tap BPM." },
        { href: "tunings", title: "Wszystkie stroje", description: "Przejdź do centrum strojenia, aby porównać Standard, Drop i Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Popularne poradniki na start",
      featuredGuidesDescription: "Te linki wewnętrzne zbierają najużyteczniejsze strony dla początkujących i tematy muzyczne.",
      hubCards: [
        { href: "guides", title: "Wszystkie poradniki", description: "Przeglądaj poradniki dotyczące strojenia, rytmu, akordów i codziennych ćwiczeń." },
        { href: "tunings", title: "Hub strojenia", description: "Przeglądaj stroje standard, drop i open na jednej stronie." }
      ]
    }
  },
  tr: {
    guidesHub: {
      featuredToolsTitle: "Rehberleri araçlarla bağla",
      featuredToolsDescription: "Doğru aracı doğrudan bir rehberden aç ve akort, ritim ve pratik arasında hızla geç.",
      hubCards: [
        { href: "tools", title: "Tüm araçlar", description: "Akordörler, metronom, Tap BPM ve ses araçları için ana hub'dan başla." },
        { href: "tunings", title: "Tüm akortlar", description: "Standard, Drop ve Open akortları karşılaştırmak için akort hub'ına git." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Başlamak için popüler rehberler",
      featuredGuidesDescription: "Bu iç bağlantılar, yeni başlayanlar için en faydalı sayfaları ve müzik konularını bir araya getirir.",
      hubCards: [
        { href: "guides", title: "Tüm rehberler", description: "Akort, ritim, akor okuma ve günlük pratik için rehberleri keşfet." },
        { href: "tunings", title: "Akort merkezi", description: "Standard, Drop ve Open akortlarını tek sayfadan incele." }
      ]
    }
  },
  cs: {
    guidesHub: {
      featuredToolsTitle: "Propojte průvodce s nástroji",
      featuredToolsDescription: "Otevřete správný nástroj přímo z průvodce a rychle přecházejte mezi laděním, rytmem a praxí.",
      hubCards: [
        { href: "tools", title: "Všechny nástroje", description: "Začněte u hlavního hubu nástrojů pro ladičky, metronom a Tap BPM." },
        { href: "tunings", title: "Všechna ladění", description: "Přejděte na hub ladění, abyste porovnali Standard, Drop a Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Oblíbené průvodce pro začátek",
      featuredGuidesDescription: "Tyto interní odkazy shromažďují nejužitečnější stránky pro začátečníky a hudební témata.",
      hubCards: [
        { href: "guides", title: "Všechny průvodce", description: "Prozkoumejte průvodce laděním, rytmem, akordy a denní praxí." },
        { href: "tunings", title: "Centrum ladění", description: "Prohlédněte ladění standard, drop a open na jedné stránce." }
      ]
    }
  },
  sv: {
    guidesHub: {
      featuredToolsTitle: "Koppla guider till verktyg",
      featuredToolsDescription: "Öppna rätt verktyg direkt från en guide och växla snabbt mellan stämning, rytm och övning.",
      hubCards: [
        { href: "tools", title: "Alla verktyg", description: "Börja vid huvudhubben för stämmers, metronom, Tap BPM och ljudverktyg." },
        { href: "tunings", title: "Alla stämningar", description: "Gå till stämningshubben för att jämföra Standard, Drop och Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Populära guider att börja med",
      featuredGuidesDescription: "Dessa interna länkar samlar de mest användbara nybörjarsidorna och musikämnena.",
      hubCards: [
        { href: "guides", title: "Alla guider", description: "Utforska guider för stämning, rytm, ackord och daglig övning." },
        { href: "tunings", title: "Stämningshubb", description: "Bläddra bland standard-, drop- och open-stämningar på en sida." }
      ]
    }
  },
  "pt-BR": {
    guidesHub: {
      featuredToolsTitle: "Conectar guias às ferramentas",
      featuredToolsDescription: "Abra a ferramenta certa diretamente de um guia e alterne rapidamente entre afinação, ritmo e prática.",
      hubCards: [
        { href: "tools", title: "Todas as ferramentas", description: "Comece no hub principal para afinadores, metrônomo, Tap BPM e utilitários de áudio." },
        { href: "tunings", title: "Todas as afinações", description: "Acesse o hub de afinações para comparar Standard, Drop e Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Guias populares para começar",
      featuredGuidesDescription: "Estes links internos reúnem as páginas mais úteis para iniciantes e temas musicais com bom potencial.",
      hubCards: [
        { href: "guides", title: "Todos os guias", description: "Explore guias de afinação, ritmo, acordes e estudo diário." },
        { href: "tunings", title: "Hub de afinações", description: "Navegue por afinações standard, drop e open em uma página central." }
      ]
    }
  },
  hi: {
    guidesHub: {
      featuredToolsTitle: "गाइड और टूल जोड़ें",
      featuredToolsDescription: "गाइड से सीधे सही टूल खोलें और ट्यूनिंग, रिदम और प्रैक्टिस के बीच जल्दी जाएं।",
      hubCards: [
        { href: "tools", title: "सभी टूल", description: "ट्यूनर, मेट्रोनोम, Tap BPM और ऑडियो टूल के मुख्य हब से शुरू करें।" },
        { href: "tunings", title: "सभी ट्यूनिंग", description: "Standard, Drop और Open की तुलना के लिए ट्यूनिंग हब पर जाएं।" }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "शुरुआत के लिए लोकप्रिय गाइड",
      featuredGuidesDescription: "ये आंतरिक लिंक शुरुआती लोगों के लिए सबसे उपयोगी पेज और संगीत विषय एकत्र करते हैं।",
      hubCards: [
        { href: "guides", title: "सभी गाइड", description: "ट्यूनिंग, रिदम, कॉर्ड रीडिंग और दैनिक अभ्यास के गाइड देखें।" },
        { href: "tunings", title: "ट्यूनिंग हब", description: "एक पेज पर standard, drop और open ट्यूनिंग देखें।" }
      ]
    }
  },
  no: {
    guidesHub: {
      featuredToolsTitle: "Koble guider til verktøy",
      featuredToolsDescription: "Åpne riktig verktøy direkte fra en guide og bytt raskt mellom stemming, rytme og øving.",
      hubCards: [
        { href: "tools", title: "Alle verktøy", description: "Start fra hovedhubben for stemmere, metronom, Tap BPM og lydverktøy." },
        { href: "tunings", title: "Alle stemminger", description: "Gå til stemmehubben for å sammenligne Standard, Drop og Open." }
      ]
    },
    toolsHub: {
      featuredGuidesTitle: "Populære guider å starte med",
      featuredGuidesDescription: "Disse interne lenkene samler de mest nyttige nybegynnersidene og musikalske temaene.",
      hubCards: [
        { href: "guides", title: "Alle guider", description: "Utforsk guider for stemming, rytme, akkorder og daglig øving." },
        { href: "tunings", title: "Stemmehubb", description: "Bla gjennom standard-, drop- og open-stemminger på én side." }
      ]
    }
  }
});

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
> = withLocaleFallbacks({
  ar: {
    songGuidesDescription: "اختر أدلة قصيرة تساعدك على قراءة الأكوردات، تثبيت الإيقاع أو تغيير المقام لهذا النوع من القطع.",
    songGuidesTitle: "أدلة مناسبة لهذا البران",
    songToolsDescription: "هذه الأدوات هي الأكثر فائدة لهذا النوع من الدراسة بين الإيقاع، الضبط وتغيير المقام.",
    songToolsTitle: "أدوات مناسبة للتدريب",
    toolGuidesDescription: "هذه الصفحات مرتبطة مباشرة بهذا النوع من الآلات أو بهذه العائلة من الضبطات.",
    toolGuidesTitle: "صفحات مخصصة لهذا النوع"
  },
  de: {
    songGuidesDescription: "Diese kurzen Guides passen besonders gut zu diesem Stücktyp, egal ob du Akkorde, Rhythmus oder Tonart übst.",
    songGuidesTitle: "Passende Guides zu diesem Stück",
    songToolsDescription: "Diese Tools sind für diese Art von Übung am nützlichsten: Tempo, Stimmung und Tonart.",
    songToolsTitle: "Passende Übungs-Tools",
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
    songGuidesDescription: "Estas guías cortas encajan bien con este tipo de pieza si quieres trabajar acordes, ritmo o una tonalidad más cómoda.",
    songGuidesTitle: "Guías que encajan con esta canción",
    songToolsDescription: "Estas herramientas acompañan mejor este tipo de estudio: tempo, afinación y control de tonalidad.",
    songToolsTitle: "Herramientas para esta práctica",
    toolGuidesDescription: "Estas páginas están conectadas directamente con este instrumento o con sus afinaciones más usadas.",
    toolGuidesTitle: "Páginas especializadas para este instrumento"
  },
  fr: {
    songGuidesDescription: "Ces guides courts correspondent bien à ce type de morceau si vous travaillez les accords, le rythme ou une tonalité plus confortable.",
    songGuidesTitle: "Guides adaptés à ce morceau",
    songToolsDescription: "Ces outils accompagnent le mieux ce type de pratique: tempo, accordage et tonalité.",
    songToolsTitle: "Outils utiles pour cette pratique",
    toolGuidesDescription: "Ces pages sont directement liées à ce type d'instrument ou à ses accordages les plus courants.",
    toolGuidesTitle: "Pages spécialisées pour cet instrument"
  },
  it: {
    songGuidesDescription: "Queste guide brevi si adattano bene a questo tipo di brano se vuoi lavorare su accordi, ritmo o una tonalità più comoda.",
    songGuidesTitle: "Guide adatte a questo brano",
    songToolsDescription: "Questi tool sono i compagni migliori per questo tipo di studio: tempo, accordatura e controllo della tonalità.",
    songToolsTitle: "Tool utili per questa pratica",
    toolGuidesDescription: "Queste pagine sono collegate direttamente a questo tipo di strumento o alle sue accordature più usate.",
    toolGuidesTitle: "Pagine specializzate per questo strumento"
  },
  ja: {
    songGuidesDescription: "この曲の練習に合う短いガイドを選べます。コード、リズム、キー変更に役立ちます。",
    songGuidesTitle: "この曲に合うガイド",
    songToolsDescription: "この種類の練習には、テンポ、チューニング、キー調整のツールが役立ちます。",
    songToolsTitle: "この練習に合うツール",
    toolGuidesDescription: "これらのページは、この楽器タイプや典型的なチューニングと直接関係しています。",
    toolGuidesTitle: "この楽器に適したページ"
  },
  ko: {
    songGuidesDescription: "코드, 리듬, 키 변경을 연습할 때 이 곡 유형에 잘 맞는 짧은 가이드들입니다.",
    songGuidesTitle: "이 곡에 맞는 가이드",
    songToolsDescription: "이런 연습에는 템포, 튜닝, 키 조정 도구가 가장 유용합니다.",
    songToolsTitle: "이 연습에 맞는 도구",
    toolGuidesDescription: "이 페이지들은 현재 악기 유형이나 자주 쓰는 튜닝과 직접 연결됩니다.",
    toolGuidesTitle: "이 악기에 맞는 전용 페이지"
  },
  pt: {
    songGuidesDescription: "Estes guias curtos combinam bem com este tipo de peça quando você quer estudar acordes, ritmo ou uma tonalidade mais confortável.",
    songGuidesTitle: "Guias que combinam com esta música",
    songToolsDescription: "Estas ferramentas acompanham melhor este tipo de estudo: tempo, afinação e controle de tonalidade.",
    songToolsTitle: "Ferramentas para esta prática",
    toolGuidesDescription: "Estas páginas estão ligadas diretamente a este tipo de instrumento ou às afinações mais usadas dele.",
    toolGuidesTitle: "Páginas especializadas para este instrumento"
  },
  ru: {
    songGuidesDescription: "Эти короткие гайды хорошо подходят к такому типу произведения, если вы работаете над аккордами, ритмом или удобной тональностью.",
    songGuidesTitle: "Гайды для этой песни",
    songToolsDescription: "Для такой практики особенно полезны темп, тюнинг и контроль тональности.",
    songToolsTitle: "Инструменты для этой практики",
    toolGuidesDescription: "Эти страницы напрямую связаны с этим типом инструмента или с его самыми востребованными строями.",
    toolGuidesTitle: "Специальные страницы для этого инструмента"
  },
  zh: {
    songGuidesDescription: "这些简短指南很适合这类曲目的练习，不管你是在练和弦、节奏还是更舒适的调性。",
    songGuidesTitle: "适合这首曲的指南",
    songToolsDescription: "这类练习最常用的工具是节拍、调音和调性控制。",
    songToolsTitle: "适合这种练习的工具",
    toolGuidesDescription: "这些页面与当前乐器类型或其最常用的调弦方案直接相关。",
    toolGuidesTitle: "适合这个乐器的专题页"
  }
} satisfies Record<BaseLocale, {
  songGuidesDescription: string;
  songGuidesTitle: string;
  songToolsDescription: string;
  songToolsTitle: string;
  toolGuidesDescription: string;
  toolGuidesTitle: string;
}>, {
  nl: {
    songGuidesDescription: "Deze korte gidsen passen goed bij dit soort stuk als je akkoorden, ritme of een eenvoudigere toonsoort wilt oefenen.",
    songGuidesTitle: "Gidsen die passen bij dit nummer",
    songToolsDescription: "Deze tools zijn de meest nuttige hulpmiddelen voor dit soort oefening: tempo, stemming en toonsoort.",
    songToolsTitle: "Tools voor deze oefening",
    toolGuidesDescription: "Deze pagina's zijn direct gerelateerd aan dit instrumenttype of de meest gebruikte stemmingen.",
    toolGuidesTitle: "Gespecialiseerde pagina's voor dit instrument"
  },
  pl: {
    songGuidesDescription: "Te krótkie poradniki dobrze pasują do tego rodzaju utworu, gdy ćwiczysz akordy, rytm lub łatwiejszą tonację.",
    songGuidesTitle: "Poradniki pasujące do tej piosenki",
    songToolsDescription: "Te narzędzia są najlepszymi pomocnikami dla tego rodzaju ćwiczeń: tempo, strojenie i tonacja.",
    songToolsTitle: "Narzędzia do tej praktyki",
    toolGuidesDescription: "Te strony są bezpośrednio powiązane z tym typem instrumentu lub jego najczęstszymi strojami.",
    toolGuidesTitle: "Wyspecjalizowane strony dla tego instrumentu"
  },
  tr: {
    songGuidesDescription: "Bu kısa rehberler, akor, ritim veya daha rahat bir tonalite üzerinde çalışmak istediğinizde bu tür parçalara özellikle uygundur.",
    songGuidesTitle: "Bu şarkıya uyan rehberler",
    songToolsDescription: "Bu araçlar bu tür pratik için en faydalı yardımcılardır: tempo, akort ve tonalite kontrolü.",
    songToolsTitle: "Bu pratik için araçlar",
    toolGuidesDescription: "Bu sayfalar bu enstrüman tipiyle veya en yaygın akort kurulumlarıyla doğrudan ilgilidir.",
    toolGuidesTitle: "Bu enstrüman için özel sayfalar"
  },
  cs: {
    songGuidesDescription: "Tyto krátké průvodce se dobře hodí k tomuto druhu skladby, ať už chcete procvičovat akordy, rytmus nebo pohodlnější tóninu.",
    songGuidesTitle: "Průvodce vhodné pro tuto píseň",
    songToolsDescription: "Tyto nástroje jsou nejlepšími pomocníky pro tento druh praxe: tempo, ladění a kontrola tóniny.",
    songToolsTitle: "Nástroje pro tuto praxi",
    toolGuidesDescription: "Tyto stránky jsou přímo propojeny s tímto typem nástroje nebo jeho nejběžnějšími laděními.",
    toolGuidesTitle: "Specializované stránky pro tento nástroj"
  },
  sv: {
    songGuidesDescription: "Dessa korta guider passar bra för det här stycket om du vill träna ackord, rytm eller en bekvämare tonart.",
    songGuidesTitle: "Guider som passar det här låten",
    songToolsDescription: "Dessa verktyg är de mest användbara för den här typen av övning: tempo, stämning och tonartskontroll.",
    songToolsTitle: "Verktyg för den här övningen",
    toolGuidesDescription: "Dessa sidor är direkt relaterade till den här instrumenttypen eller de vanligaste stämningarna.",
    toolGuidesTitle: "Specialiserade sidor för det här instrumentet"
  },
  "pt-BR": {
    songGuidesDescription: "Estes guias curtos combinam bem com este tipo de peça quando você quer estudar acordes, ritmo ou uma tonalidade mais confortável.",
    songGuidesTitle: "Guias que combinam com esta música",
    songToolsDescription: "Estas ferramentas são as melhores companheiras para este tipo de prática: tempo, afinação e tonalidade.",
    songToolsTitle: "Ferramentas para esta prática",
    toolGuidesDescription: "Estas páginas estão diretamente relacionadas a este tipo de instrumento ou às suas afinações mais comuns.",
    toolGuidesTitle: "Páginas especializadas para este instrumento"
  },
  hi: {
    songGuidesDescription: "ये छोटे गाइड इस प्रकार के टुकड़े के लिए अच्छे हैं, चाहे आप कॉर्ड, रिदम या आसान की पर काम करना चाहते हों।",
    songGuidesTitle: "इस गाने के लिए उपयुक्त गाइड",
    songToolsDescription: "इस प्रकार के अभ्यास के लिए ये टूल सबसे उपयोगी हैं: टेम्पो, ट्यूनिंग और की कंट्रोल।",
    songToolsTitle: "इस अभ्यास के लिए टूल",
    toolGuidesDescription: "ये पेज इस वाद्य यंत्र के प्रकार या उसके सबसे सामान्य ट्यूनिंग सेटअप से सीधे संबंधित हैं।",
    toolGuidesTitle: "इस वाद्य के लिए विशेष पेज"
  },
  no: {
    songGuidesDescription: "Disse korte guidene passer godt til denne typen stykke, enten du vil øve akkorder, rytme eller en enklere toneart.",
    songGuidesTitle: "Guider som passer til denne sangen",
    songToolsDescription: "Disse verktøyene er de mest nyttige for denne typen øving: tempo, stemming og toneartskontroll.",
    songToolsTitle: "Verktøy for denne øvingen",
    toolGuidesDescription: "Disse sidene er direkte relatert til denne instrumenttypen eller de vanligste stemmingene.",
    toolGuidesTitle: "Spesialiserte sider for dette instrumentet"
  }
});

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

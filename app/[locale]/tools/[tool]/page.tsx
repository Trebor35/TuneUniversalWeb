import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ToolNavigation } from "@/components/layout/ToolNavigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { BassTuner } from "@/components/tools/BassTuner";
import { ChordTransposer } from "@/components/tools/ChordTransposer";
import { GuitarTuner } from "@/components/tools/GuitarTuner";
import { Metronome } from "@/components/tools/Metronome";
import { PitchGenerator } from "@/components/tools/PitchGenerator";
import { SoundLevelMeter } from "@/components/tools/SoundLevelMeter";
import { TapBpm } from "@/components/tools/TapBpm";
import { UkuleleTuner } from "@/components/tools/UkuleleTuner";
import {
  alternativeTuningGuideSlugs,
  getGuideContent,
  type GuideSlug,
  guidesForInstrument,
  guidesForTool
} from "@/lib/content/guides";
import { clusterSectionLabels, getToolClusterGuides } from "@/lib/content/internalLinking";
import {
  getInstrumentTunerContent,
  instrumentFromTunerSlug,
  instrumentTunerSlugs
} from "@/lib/content/instrumentTuners";
import { getToolSeoEnhancement } from "@/lib/content/seoEnhancements";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocaleFallbacks, isLocale, locales, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { buildInstrumentTunerMetadata, buildToolMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, howToSchema, instrumentTunerSchema, toolSchema } from "@/lib/seo/schema";
import { isToolSlug, toolSlugs, tunerTools, type Instrument, type ToolSlug } from "@/lib/tools/toolConfig";

type PageProps = { params: Promise<{ locale: string; tool: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const toolPageLabels: Record<
  Locale,
  { allGuides: string; allTools: string; exploreMore: string; exploreMoreDescription: string; relatedTunings: string; tuningHub: string }
> = withLocaleFallbacks({
  ar: { allGuides: "كل الأدلة", allTools: "كل الأدوات", exploreMore: "واصل من هنا", exploreMoreDescription: "استخدم هذه الروابط للانتقال بين الأداة، الأدلة العملية ومركز الضبطات المرتبط بها.", relatedTunings: "ضبطات مرتبطة", tuningHub: "مركز الضبطات" },
  de: { allGuides: "Alle Guides", allTools: "Alle Tools", exploreMore: "Hier sinnvoll weitergehen", exploreMoreDescription: "Nutze diese Links, um schnell zwischen Tool, passenden Anleitungen und dem Stimmungs-Hub zu wechseln.", relatedTunings: "Verwandte Stimmungen", tuningHub: "Tuning-Hub" },
  en: { allGuides: "All guides", allTools: "All tools", exploreMore: "Explore the next step", exploreMoreDescription: "Use these links to move between the tool, practical guides and the matching tuning hub.", relatedTunings: "Related tunings", tuningHub: "Tuning hub" },
  es: { allGuides: "Todas las guías", allTools: "Todas las herramientas", exploreMore: "Sigue desde aquí", exploreMoreDescription: "Usa estos enlaces para pasar rápido entre la herramienta, las guías prácticas y el hub de afinaciones.", relatedTunings: "Afinaciones relacionadas", tuningHub: "Hub de afinaciones" },
  fr: { allGuides: "Tous les guides", allTools: "Tous les outils", exploreMore: "Continuer depuis ici", exploreMoreDescription: "Utilisez ces liens pour passer rapidement entre l'outil, les guides pratiques et le hub des accordages.", relatedTunings: "Accordages liés", tuningHub: "Hub des accordages" },
  it: { allGuides: "Tutte le guide", allTools: "Tutti i tool", exploreMore: "Continua da qui", exploreMoreDescription: "Usa questi link per passare velocemente tra il tool, le guide pratiche e l’hub delle accordature collegate.", relatedTunings: "Accordature correlate", tuningHub: "Hub accordature" },
  ja: { allGuides: "すべてのガイド", allTools: "すべてのツール", exploreMore: "次に見るページ", exploreMoreDescription: "このツールから実践ガイドやチューニングハブへ自然に移動できます。", relatedTunings: "関連チューニング", tuningHub: "チューニングハブ" },
  ko: { allGuides: "모든 가이드", allTools: "모든 도구", exploreMore: "다음으로 보기 좋은 페이지", exploreMoreDescription: "이 링크를 통해 현재 도구, 실전 가이드, 관련 튜닝 허브를 자연스럽게 오갈 수 있습니다.", relatedTunings: "관련 튜닝", tuningHub: "튜닝 허브" },
  pt: { allGuides: "Todos os guias", allTools: "Todas as ferramentas", exploreMore: "Continue daqui", exploreMoreDescription: "Use estes links para passar rapidamente entre a ferramenta, os guias práticos e o hub de afinações.", relatedTunings: "Afinações relacionadas", tuningHub: "Hub de afinações" },
  ru: { allGuides: "Все гайды", allTools: "Все инструменты", exploreMore: "Куда перейти дальше", exploreMoreDescription: "Эти ссылки помогают быстро перейти от инструмента к практическим гайдам и к хабу строев.", relatedTunings: "Связанные строи", tuningHub: "Хаб строев" },
  zh: { allGuides: "全部指南", allTools: "全部工具", exploreMore: "下一步可以看这里", exploreMoreDescription: "通过这些链接，可以在当前工具、实用指南和相关调弦中心之间快速切换。", relatedTunings: "相关调弦", tuningHub: "调弦中心" }
} satisfies Record<BaseLocale, { allGuides: string; allTools: string; exploreMore: string; exploreMoreDescription: string; relatedTunings: string; tuningHub: string }>, {
  hi: { allGuides: "सभी गाइड", allTools: "सभी टूल", exploreMore: "आगे क्या देखें", exploreMoreDescription: "इन लिंक से टूल, प्रैक्टिकल गाइड और ट्यूनिंग हब के बीच आसानी से जाएं।", relatedTunings: "संबंधित ट्यूनिंग", tuningHub: "ट्यूनिंग हब" },
  "pt-BR": { allGuides: "Todos os guias", allTools: "Todas as ferramentas", exploreMore: "Continue por aqui", exploreMoreDescription: "Use estes links para navegar entre a ferramenta, os guias práticos e o hub de afinações.", relatedTunings: "Afinações relacionadas", tuningHub: "Hub de afinações" },
  nl: { allGuides: "Alle gidsen", allTools: "Alle tools", exploreMore: "Ga hier verder", exploreMoreDescription: "Gebruik deze links om snel te schakelen tussen het tool, praktische gidsen en de stemminghub.", relatedTunings: "Gerelateerde stemmingen", tuningHub: "Stemminghub" },
  pl: { allGuides: "Wszystkie poradniki", allTools: "Wszystkie narzędzia", exploreMore: "Idź dalej stąd", exploreMoreDescription: "Użyj tych linków, aby szybko przechodzić między narzędziem, poradnikami i hubem strojenia.", relatedTunings: "Powiązane stroje", tuningHub: "Hub strojenia" },
  tr: { allGuides: "Tüm rehberler", allTools: "Tüm araçlar", exploreMore: "Buradan devam edin", exploreMoreDescription: "Bu bağlantıları araç, pratik rehberler ve akort merkezi arasında hızlıca geçmek için kullanın.", relatedTunings: "İlgili akortlar", tuningHub: "Akort merkezi" },
  sv: { allGuides: "Alla guider", allTools: "Alla verktyg", exploreMore: "Fortsätt härifrån", exploreMoreDescription: "Använd dessa länkar för att snabbt växla mellan verktyget, praktiska guider och stämningshubben.", relatedTunings: "Relaterade stämningar", tuningHub: "Stämningshubb" },
  no: { allGuides: "Alle guider", allTools: "Alle verktøy", exploreMore: "Fortsett herfra", exploreMoreDescription: "Bruk disse lenkene for å bevege deg mellom verktøyet, praktiske guider og stemmehubben.", relatedTunings: "Relaterte stemminger", tuningHub: "Stemmehubb" },
  cs: { allGuides: "Všechny průvodce", allTools: "Všechny nástroje", exploreMore: "Pokračujte odtud", exploreMoreDescription: "Použijte tyto odkazy pro rychlý přechod mezi nástrojem, praktickými průvodci a centrem ladění.", relatedTunings: "Příbuzná ladění", tuningHub: "Centrum ladění" }
});

const guideHeadings: Record<Locale, string> = withLocaleFallbacks({
  ar: "أدلة ذات صلة",
  de: "Verwandte Anleitungen",
  en: "Related guides",
  es: "Guías relacionadas",
  fr: "Guides associés",
  it: "Guide correlate",
  ja: "関連ガイド",
  ko: "관련 가이드",
  pt: "Guias relacionados",
  ru: "Связанные руководства",
  zh: "相关指南"
} satisfies Record<BaseLocale, string>, {
  hi: "संबंधित गाइड",
  "pt-BR": "Guias relacionados",
  nl: "Gerelateerde gidsen",
  pl: "Powiązane poradniki",
  tr: "İlgili rehberler",
  sv: "Relaterade guider",
  no: "Relaterte guider",
  cs: "Příbuzné průvodce"
});

const contextualSectionLabels: Record<
  Locale,
  {
    highlightsDescription: string;
    highlightsTitle: string;
    quickAnswersDescription: string;
    quickAnswersTitle: string;
  }
> = withLocaleFallbacks({
  ar: {
    highlightsDescription: "نقاط سريعة تعطيك فكرة واضحة عن كيفية استخدام هذه الأداة.",
    highlightsTitle: "نظرة سريعة",
    quickAnswersDescription: "إجابات مختصرة على الأسئلة التي تساعدك على البدء بشكل أسرع.",
    quickAnswersTitle: "إجابات سريعة"
  },
  de: {
    highlightsDescription: "Die wichtigsten Punkte auf einen Blick, bevor du tiefer einsteigst.",
    highlightsTitle: "Auf einen Blick",
    quickAnswersDescription: "Kurze Antworten auf typische Einstiegsfragen zu diesem Tool.",
    quickAnswersTitle: "Schnelle Antworten"
  },
  en: {
    highlightsDescription: "The key details to understand this tool at a glance.",
    highlightsTitle: "At a glance",
    quickAnswersDescription: "Short answers to the most common first-step questions.",
    quickAnswersTitle: "Quick answers"
  },
  es: {
    highlightsDescription: "Los puntos clave para entender esta herramienta de un vistazo.",
    highlightsTitle: "Resumen rápido",
    quickAnswersDescription: "Respuestas breves a las preguntas más comunes para empezar mejor.",
    quickAnswersTitle: "Respuestas rápidas"
  },
  fr: {
    highlightsDescription: "Les points essentiels pour comprendre l'outil en un coup d'œil.",
    highlightsTitle: "En bref",
    quickAnswersDescription: "Réponses courtes aux questions les plus fréquentes pour bien commencer.",
    quickAnswersTitle: "Réponses rapides"
  },
  it: {
    highlightsDescription: "I dettagli chiave per capire subito come usare questo tool.",
    highlightsTitle: "In breve",
    quickAnswersDescription: "Risposte rapide alle domande più comuni prima di iniziare.",
    quickAnswersTitle: "Risposte rapide"
  },
  ja: {
    highlightsDescription: "このツールの要点を短くまとめて確認できます。",
    highlightsTitle: "ひと目で",
    quickAnswersDescription: "はじめる前に役立つよくある質問への簡単な答えです。",
    quickAnswersTitle: "すぐ分かる答え"
  },
  ko: {
    highlightsDescription: "이 도구를 빠르게 이해할 수 있는 핵심 포인트를 모았습니다.",
    highlightsTitle: "한눈에",
    quickAnswersDescription: "시작하기 전 자주 나오는 질문에 대한 짧고 실용적인 답변입니다.",
    quickAnswersTitle: "빠른 답변"
  },
  pt: {
    highlightsDescription: "Os pontos principais para entender esta ferramenta rapidamente.",
    highlightsTitle: "Visão rápida",
    quickAnswersDescription: "Respostas curtas para as dúvidas mais comuns antes de começar.",
    quickAnswersTitle: "Respostas rápidas"
  },
  ru: {
    highlightsDescription: "Главные моменты, чтобы быстро понять, как пользоваться этим инструментом.",
    highlightsTitle: "Коротко",
    quickAnswersDescription: "Краткие ответы на частые вопросы перед началом работы.",
    quickAnswersTitle: "Быстрые ответы"
  },
  zh: {
    highlightsDescription: "先快速看懂这个工具最重要的使用信息。",
    highlightsTitle: "一眼看懂",
    quickAnswersDescription: "开始之前，先看几条最常见问题的简短答案。",
    quickAnswersTitle: "快速解答"
  }
} satisfies Record<BaseLocale, {
  highlightsDescription: string;
  highlightsTitle: string;
  quickAnswersDescription: string;
  quickAnswersTitle: string;
}>, {
  hi: {
    highlightsTitle: "एक नज़र में",
    highlightsDescription: "इस टूल को जल्दी समझने के लिए मुख्य बातें।",
    quickAnswersTitle: "त्वरित उत्तर",
    quickAnswersDescription: "शुरुआत करने से पहले सबसे आम सवालों के संक्षिप्त उत्तर।"
  },
  "pt-BR": {
    highlightsTitle: "Visão rápida",
    highlightsDescription: "Os pontos principais para entender esta ferramenta rapidamente.",
    quickAnswersTitle: "Respostas rápidas",
    quickAnswersDescription: "Respostas curtas para as dúvidas mais comuns antes de começar."
  },
  nl: {
    highlightsTitle: "In een oogopslag",
    highlightsDescription: "De belangrijkste details om dit tool snel te begrijpen.",
    quickAnswersTitle: "Snelle antwoorden",
    quickAnswersDescription: "Korte antwoorden op de meestgestelde vragen voor beginners."
  },
  pl: {
    highlightsTitle: "W skrócie",
    highlightsDescription: "Najważniejsze informacje, aby szybko zrozumieć to narzędzie.",
    quickAnswersTitle: "Szybkie odpowiedzi",
    quickAnswersDescription: "Krótkie odpowiedzi na najczęstsze pytania na początku."
  },
  tr: {
    highlightsTitle: "Bir bakışta",
    highlightsDescription: "Bu aracı hızlıca anlamak için gereken temel bilgiler.",
    quickAnswersTitle: "Hızlı yanıtlar",
    quickAnswersDescription: "Başlamadan önce en sık sorulan sorulara kısa yanıtlar."
  },
  cs: {
    highlightsTitle: "Stručně",
    highlightsDescription: "Klíčové informace pro rychlé pochopení tohoto nástroje.",
    quickAnswersTitle: "Rychlé odpovědi",
    quickAnswersDescription: "Krátké odpovědi na nejčastější otázky před začátkem."
  },
  sv: {
    highlightsTitle: "Snabböversikt",
    highlightsDescription: "De viktigaste punkterna för att snabbt förstå det här verktyget.",
    quickAnswersTitle: "Snabba svar",
    quickAnswersDescription: "Korta svar på de vanligaste startfrågorna."
  },
  no: {
    highlightsTitle: "Rask oversikt",
    highlightsDescription: "De viktigste punktene for å forstå dette verktøyet raskt.",
    quickAnswersTitle: "Raske svar",
    quickAnswersDescription: "Korte svar på de vanligste spørsmålene for å komme i gang."
  }
});

const toolIntentLabels: Record<
  Locale,
  {
    questionsDescription: string;
    questionsTitle: string;
    searchesDescription: string;
    searchesTitle: string;
  }
> = withLocaleFallbacks({
  ar: {
    questionsDescription: "أسئلة سريعة للانتقال إلى الخطوة التالية.",
    questionsTitle: "أسئلة مرتبطة",
    searchesDescription: "روابط داخلية مفيدة لمن يستخدم هذه الأداة.",
    searchesTitle: "روابط مفيدة"
  },
  de: {
    questionsDescription: "Kurze Anschlussfragen, die beim Weiterlernen helfen.",
    questionsTitle: "Nächste Fragen",
    searchesDescription: "Interne Seiten, die inhaltlich gut zu diesem Tool passen.",
    searchesTitle: "Nützliche nächste Seiten"
  },
  en: {
    questionsDescription: "Short follow-up questions to keep practice moving.",
    questionsTitle: "Related questions",
    searchesDescription: "Internal pages that naturally match the next step after this tool.",
    searchesTitle: "Related searches"
  },
  es: {
    questionsDescription: "Preguntas breves para seguir practicando sin perder el hilo.",
    questionsTitle: "Preguntas relacionadas",
    searchesDescription: "Paginas internas que encajan bien como siguiente paso despues de esta herramienta.",
    searchesTitle: "Busquedas relacionadas"
  },
  fr: {
    questionsDescription: "Petites questions utiles pour continuer juste apres cet outil.",
    questionsTitle: "Questions associees",
    searchesDescription: "Pages internes qui correspondent bien a l'etape suivante.",
    searchesTitle: "Recherches associees"
  },
  it: {
    questionsDescription: "Domande rapide per capire qual e il passo successivo piu utile.",
    questionsTitle: "Domande correlate",
    searchesDescription: "Pagine interne che si collegano bene a questo tool e alla pratica successiva.",
    searchesTitle: "Ricerche correlate"
  },
  ja: {
    questionsDescription: "このツールの次に役立つ短い質問です。",
    questionsTitle: "関連する質問",
    searchesDescription: "次に見るのに合う内部ページです。",
    searchesTitle: "関連検索"
  },
  ko: {
    questionsDescription: "이 도구 다음에 바로 도움이 될 질문입니다.",
    questionsTitle: "관련 질문",
    searchesDescription: "다음 단계에 맞는 내부 페이지를 모았습니다.",
    searchesTitle: "관련 검색"
  },
  pt: {
    questionsDescription: "Perguntas curtas para continuar a pratica com mais clareza.",
    questionsTitle: "Perguntas relacionadas",
    searchesDescription: "Paginas internas que fazem sentido como proximo passo depois desta ferramenta.",
    searchesTitle: "Pesquisas relacionadas"
  },
  ru: {
    questionsDescription: "Короткие вопросы, которые помогают понять следующий шаг.",
    questionsTitle: "Связанные вопросы",
    searchesDescription: "Внутренние страницы, которые хорошо дополняют этот инструмент.",
    searchesTitle: "Связанные поиски"
  },
  zh: {
    questionsDescription: "帮你继续练习的简短下一步问题。",
    questionsTitle: "相关问题",
    searchesDescription: "这些内部页面很适合作为使用这个工具后的下一步。",
    searchesTitle: "相关搜索"
  }
} satisfies Record<BaseLocale, {
  questionsDescription: string;
  questionsTitle: string;
  searchesDescription: string;
  searchesTitle: string;
}>, {
  hi: {
    questionsTitle: "संबंधित प्रश्न",
    questionsDescription: "इस टूल के बाद प्रैक्टिस जारी रखने के लिए छोटे प्रश्न।",
    searchesTitle: "संबंधित खोज",
    searchesDescription: "वे आंतरिक पेज जो इस टूल के बाद अगले कदम के रूप में उपयुक्त हैं।"
  },
  "pt-BR": {
    questionsTitle: "Perguntas relacionadas",
    questionsDescription: "Perguntas curtas para continuar a prática com mais clareza.",
    searchesTitle: "Pesquisas relacionadas",
    searchesDescription: "Páginas internas que fazem sentido como próximo passo depois desta ferramenta."
  },
  nl: {
    questionsTitle: "Gerelateerde vragen",
    questionsDescription: "Korte vervolgvragen om de oefening voort te zetten.",
    searchesTitle: "Gerelateerde zoekopdrachten",
    searchesDescription: "Interne pagina's die goed passen als volgende stap na dit tool."
  },
  pl: {
    questionsTitle: "Powiązane pytania",
    questionsDescription: "Krótkie pytania uzupełniające, które pomogą w dalszej nauce.",
    searchesTitle: "Powiązane wyszukiwania",
    searchesDescription: "Wewnętrzne strony pasujące jako następny krok po tym narzędziu."
  },
  tr: {
    questionsTitle: "İlgili sorular",
    questionsDescription: "Pratik yapmaya devam etmek için kısa takip soruları.",
    searchesTitle: "İlgili aramalar",
    searchesDescription: "Bu araçtan sonra doğal bir sonraki adım olan iç sayfalar."
  },
  cs: {
    questionsTitle: "Relacionované otázky",
    questionsDescription: "Krátké otázky pro pokračování ve cvičení.",
    searchesTitle: "Relacionované vyhledávání",
    searchesDescription: "Interní stránky vhodné jako další krok po tomto nástroji."
  },
  sv: {
    questionsTitle: "Relaterade frågor",
    questionsDescription: "Korta följdfrågor för att hålla övningen igång.",
    searchesTitle: "Relaterade sökningar",
    searchesDescription: "Interna sidor som passar bra som nästa steg efter det här verktyget."
  },
  no: {
    questionsTitle: "Relaterte spørsmål",
    questionsDescription: "Korte oppfølgingsspørsmål for å fortsette praksisen.",
    searchesTitle: "Relaterte søk",
    searchesDescription: "Interne sider som passer godt som neste steg etter dette verktøyet."
  }
});

type ToolFollowUp = {
  answer: string;
  href: string;
  label: string;
  question: string;
};

type ToolFollowUpCopy = {
  metronomeBpmAnswer: string;
  metronomeBpmQuestion: string;
  metronomeSubdivisionAnswer: string;
  metronomeSubdivisionQuestion: string;
  nextToolAnswer: string;
  nextToolQuestion: string;
  nextStepAnswer: string;
  nextStepQuestion: string;
};

const toolFollowUpCopy: Record<Locale, ToolFollowUpCopy> = withLocaleFallbacks({
  ar: { metronomeBpmAnswer: "استخدم Tap BPM لتقدير سرعة المقطوعة ثم تدرب عليها مباشرة باستخدام المترونوم.", metronomeBpmQuestion: "هل يجب تحديد BPM للمقطوعة أولا؟", metronomeSubdivisionAnswer: "لبداية ثابتة، تدرب على أثمان منتظمة ثم انتقل إلى الثلاثيات أو السداسيات عشر.", metronomeSubdivisionQuestion: "بأي تقسيم إيقاعي تبدأ؟", nextToolAnswer: "إذا كنت تتدرب على مقطوعة، فاستخدام المترونوم أو Tap BPM مع هذه الأداة يجعل التدريب أكثر فاعلية.", nextToolQuestion: "ما الأداة الأخرى المناسبة معها؟", nextStepAnswer: "بعد هذه الأداة، تكون الخطوة الأكثر فائدة عادة فتح دليل عملي مرتبط أو صفحة ضبط.", nextStepQuestion: "ما الخطوة التالية الأكثر فائدة؟" },
  de: { metronomeBpmAnswer: "Mit Tap BPM kannst du das Tempo eines Songs schätzen und ihn danach direkt mit dem Metronom üben.", metronomeBpmQuestion: "Solltest du zuerst die BPM des Songs bestimmen?", metronomeSubdivisionAnswer: "Beginne für einen stabilen Einstieg mit geraden Achteln und wechsle später zu Triolen oder Sechzehnteln.", metronomeSubdivisionQuestion: "Mit welcher Unterteilung solltest du beginnen?", nextToolAnswer: "Wenn du einen Song übst, macht die Kombination mit Metronom oder Tap BPM das Training meist wirkungsvoller.", nextToolQuestion: "Welches andere Tool passt dazu?", nextStepAnswer: "Nach diesem Tool ist meist eine passende Praxisanleitung oder eine Stimmungsseite der sinnvollste nächste Schritt.", nextStepQuestion: "Was ist der sinnvollste nächste Schritt?" },
  en: { metronomeBpmAnswer: "You can estimate the song tempo with Tap BPM and then practice it right away with the metronome.", metronomeBpmQuestion: "Should you find the BPM of the song first?", metronomeSubdivisionAnswer: "For a stable start, begin with straight eighth notes and move to triplets or sixteenths later.", metronomeSubdivisionQuestion: "Which subdivision should you practice first?", nextToolAnswer: "If you are practicing a song, pairing this with the metronome or Tap BPM usually makes practice more effective.", nextToolQuestion: "Which other tool should you open alongside this one?", nextStepAnswer: "After this tool, the most useful next step is usually a related practical guide or a tuning page.", nextStepQuestion: "What is the most useful next step?" },
  es: { metronomeBpmAnswer: "Puedes estimar el tempo con Tap BPM y practicarlo enseguida con el metrónomo.", metronomeBpmQuestion: "¿Conviene encontrar primero el BPM de la canción?", metronomeSubdivisionAnswer: "Para empezar con estabilidad, practica corcheas regulares y pasa después a tresillos o semicorcheas.", metronomeSubdivisionQuestion: "¿Con qué subdivisión conviene empezar?", nextToolAnswer: "Si estás practicando una canción, combinar esta herramienta con el metrónomo o Tap BPM suele hacer el estudio más eficaz.", nextToolQuestion: "¿Qué otra herramienta conviene abrir junto a esta?", nextStepAnswer: "Después de esta herramienta, el paso más útil suele ser abrir una guía práctica relacionada o una página de afinación.", nextStepQuestion: "¿Cuál es el siguiente paso más útil?" },
  fr: { metronomeBpmAnswer: "Utilisez Tap BPM pour estimer le tempo du morceau, puis travaillez-le immédiatement avec le métronome.", metronomeBpmQuestion: "Faut-il d'abord trouver le BPM du morceau ?", metronomeSubdivisionAnswer: "Pour commencer régulièrement, travaillez des croches droites avant de passer aux triolets ou aux doubles croches.", metronomeSubdivisionQuestion: "Quelle subdivision travailler en premier ?", nextToolAnswer: "Pour travailler un morceau, associer cet outil au métronome ou à Tap BPM rend généralement la pratique plus efficace.", nextToolQuestion: "Quel autre outil ouvrir avec celui-ci ?", nextStepAnswer: "Après cet outil, l'étape la plus utile est généralement un guide pratique associé ou une page d'accordage.", nextStepQuestion: "Quelle est l'étape suivante la plus utile ?" },
  it: { metronomeBpmAnswer: "Puoi usare Tap BPM per stimare il tempo del brano e poi studiarlo subito col metronomo.", metronomeBpmQuestion: "Conviene trovare prima il BPM del brano?", metronomeSubdivisionAnswer: "Per iniziare in modo stabile, parti dagli ottavi regolari e poi passa a terzine o sedicesimi.", metronomeSubdivisionQuestion: "Da quale suddivisione conviene partire?", nextToolAnswer: "Se stai studiando un brano, affiancare metronomo o Tap BPM rende l'allenamento molto più concreto.", nextToolQuestion: "Quale altro tool conviene aprire insieme?", nextStepAnswer: "Dopo questo tool, il passo più utile di solito è aprire una guida pratica collegata o una pagina di accordature.", nextStepQuestion: "Qual è il passo successivo più utile?" },
  ja: { metronomeBpmAnswer: "Tap BPMで曲のテンポを確認し、そのままメトロノームで練習できます。", metronomeBpmQuestion: "最初に曲のBPMを確認するべきですか？", metronomeSubdivisionAnswer: "安定して始めるには、均等な8分音符から練習し、その後3連符や16分音符に進みます。", metronomeSubdivisionQuestion: "最初にどの分割を練習しますか？", nextToolAnswer: "曲を練習している場合は、メトロノームやTap BPMを組み合わせると練習がより効果的になります。", nextToolQuestion: "一緒に使うとよいツールは？", nextStepAnswer: "このツールの後は、関連する実践ガイドやチューニングページを見るのが便利です。", nextStepQuestion: "次に行うとよいことは？" },
  ko: { metronomeBpmAnswer: "Tap BPM으로 곡의 템포를 확인한 뒤 메트로놈으로 바로 연습할 수 있습니다.", metronomeBpmQuestion: "먼저 곡의 BPM을 찾아야 하나요?", metronomeSubdivisionAnswer: "안정적으로 시작하려면 일정한 8분음표부터 연습하고 이후 셋잇단음표나 16분음표로 넘어가세요.", metronomeSubdivisionQuestion: "어떤 박자 분할부터 연습해야 하나요?", nextToolAnswer: "곡을 연습한다면 메트로놈이나 Tap BPM을 함께 사용하면 연습 효과가 더 좋아집니다.", nextToolQuestion: "어떤 도구를 함께 사용하면 좋나요?", nextStepAnswer: "이 도구 다음에는 관련 실전 가이드나 튜닝 페이지를 여는 것이 가장 유용합니다.", nextStepQuestion: "가장 유용한 다음 단계는 무엇인가요?" },
  pt: { metronomeBpmAnswer: "Use o Tap BPM para estimar o andamento da música e depois pratique imediatamente com o metrônomo.", metronomeBpmQuestion: "Vale a pena descobrir primeiro o BPM da música?", metronomeSubdivisionAnswer: "Para começar com estabilidade, pratique colcheias regulares e depois avance para tercinas ou semicolcheias.", metronomeSubdivisionQuestion: "Com qual subdivisão começar?", nextToolAnswer: "Ao estudar uma música, combinar esta ferramenta com o metrônomo ou Tap BPM torna a prática mais eficaz.", nextToolQuestion: "Qual outra ferramenta usar junto?", nextStepAnswer: "Depois desta ferramenta, o próximo passo mais útil costuma ser um guia prático relacionado ou uma página de afinação.", nextStepQuestion: "Qual é o próximo passo mais útil?" },
  ru: { metronomeBpmAnswer: "Определите темп композиции с помощью Tap BPM, а затем сразу тренируйтесь с метрономом.", metronomeBpmQuestion: "Стоит ли сначала определить BPM композиции?", metronomeSubdivisionAnswer: "Для устойчивого начала тренируйте ровные восьмые, а затем переходите к триолям или шестнадцатым.", metronomeSubdivisionQuestion: "С какого деления ритма начать?", nextToolAnswer: "При разучивании композиции сочетание этого инструмента с метрономом или Tap BPM обычно делает занятия эффективнее.", nextToolQuestion: "Какой ещё инструмент открыть вместе с этим?", nextStepAnswer: "После этого инструмента полезнее всего открыть связанное практическое руководство или страницу строя.", nextStepQuestion: "Какой следующий шаг самый полезный?" },
  zh: { metronomeBpmAnswer: "可以先用Tap BPM估算歌曲速度，然后立即用节拍器练习。", metronomeBpmQuestion: "是否应该先找到歌曲的BPM？", metronomeSubdivisionAnswer: "为了稳定开始，先练习均匀的八分音符，再练三连音或十六分音符。", metronomeSubdivisionQuestion: "应该先练哪种节奏细分？", nextToolAnswer: "练习歌曲时，同时使用节拍器或Tap BPM通常会让练习更有效。", nextToolQuestion: "还适合同时打开哪个工具？", nextStepAnswer: "使用此工具后，最有帮助的下一步通常是查看相关实用指南或调弦页面。", nextStepQuestion: "最有帮助的下一步是什么？" }
} satisfies Record<BaseLocale, ToolFollowUpCopy>, {
  nl: { metronomeBpmAnswer: "Bepaal het tempo met Tap BPM en oefen het daarna direct met de metronoom.", metronomeBpmQuestion: "Moet je eerst de BPM van het nummer bepalen?", metronomeSubdivisionAnswer: "Begin voor een stabiele basis met rechte achtste noten en ga later verder met triolen of zestienden.", metronomeSubdivisionQuestion: "Met welke onderverdeling begin je?", nextToolAnswer: "Als je een nummer oefent, maakt de combinatie met de metronoom of Tap BPM de oefening meestal effectiever.", nextToolQuestion: "Welk ander tool kun je erbij gebruiken?", nextStepAnswer: "Na dit tool is een gerelateerde praktijkgids of stempagina meestal de nuttigste volgende stap.", nextStepQuestion: "Wat is de nuttigste volgende stap?" },
  pl: { metronomeBpmAnswer: "Użyj Tap BPM, aby oszacować tempo utworu, a następnie od razu ćwicz z metronomem.", metronomeBpmQuestion: "Czy najpierw znaleźć BPM utworu?", metronomeSubdivisionAnswer: "Na początek ćwicz równe ósemki, a później przejdź do triol lub szesnastek.", metronomeSubdivisionQuestion: "Od jakiego podziału rytmicznego zacząć?", nextToolAnswer: "Podczas ćwiczenia utworu połączenie tego narzędzia z metronomem lub Tap BPM zwykle zwiększa skuteczność nauki.", nextToolQuestion: "Jakie inne narzędzie warto otworzyć?", nextStepAnswer: "Po tym narzędziu najbardziej użyteczny jest zwykle powiązany poradnik praktyczny lub strona strojenia.", nextStepQuestion: "Jaki jest najbardziej użyteczny następny krok?" },
  tr: { metronomeBpmAnswer: "Tap BPM ile parçanın temposunu tahmin edin ve ardından metronomla hemen çalışın.", metronomeBpmQuestion: "Önce parçanın BPM değerini bulmalı mısınız?", metronomeSubdivisionAnswer: "Dengeli bir başlangıç için düz sekizliklerle başlayın, sonra üçlemelere veya onaltılıklara geçin.", metronomeSubdivisionQuestion: "Önce hangi alt bölümü çalışmalısınız?", nextToolAnswer: "Bir parça çalışıyorsanız bu aracı metronom veya Tap BPM ile kullanmak çalışmayı daha verimli hale getirir.", nextToolQuestion: "Bunun yanında hangi araç açılmalı?", nextStepAnswer: "Bu araçtan sonra en yararlı adım genellikle ilgili bir pratik rehber veya akort sayfasıdır.", nextStepQuestion: "En yararlı sonraki adım nedir?" },
  cs: { metronomeBpmAnswer: "Pomocí Tap BPM odhadněte tempo skladby a potom ji hned procvičujte s metronomem.", metronomeBpmQuestion: "Máte nejprve zjistit BPM skladby?", metronomeSubdivisionAnswer: "Pro stabilní začátek procvičujte rovné osminy a později přejděte k triolám nebo šestnáctinám.", metronomeSubdivisionQuestion: "Kterým rytmickým dělením začít?", nextToolAnswer: "Při nácviku skladby bývá spojení s metronomem nebo Tap BPM účinnější.", nextToolQuestion: "Který další nástroj použít společně?", nextStepAnswer: "Po tomto nástroji je obvykle nejužitečnější související praktický průvodce nebo stránka ladění.", nextStepQuestion: "Jaký je nejužitečnější další krok?" },
  sv: { metronomeBpmAnswer: "Använd Tap BPM för att uppskatta låtens tempo och öva sedan direkt med metronomen.", metronomeBpmQuestion: "Bör du hitta låtens BPM först?", metronomeSubdivisionAnswer: "Börja med raka åttondelar och gå senare vidare till trioler eller sextondelar.", metronomeSubdivisionQuestion: "Vilken underdelning bör du börja med?", nextToolAnswer: "När du övar en låt blir träningen ofta effektivare om du kombinerar detta med metronomen eller Tap BPM.", nextToolQuestion: "Vilket annat verktyg passar tillsammans med detta?", nextStepAnswer: "Efter det här verktyget är en relaterad praktisk guide eller stämningssida oftast nästa bästa steg.", nextStepQuestion: "Vilket är det mest användbara nästa steget?" },
  "pt-BR": { metronomeBpmAnswer: "Use o Tap BPM para estimar o andamento da música e depois pratique imediatamente com o metrônomo.", metronomeBpmQuestion: "Vale a pena descobrir primeiro o BPM da música?", metronomeSubdivisionAnswer: "Para começar com estabilidade, pratique colcheias regulares e depois avance para tercinas ou semicolcheias.", metronomeSubdivisionQuestion: "Com qual subdivisão começar?", nextToolAnswer: "Ao estudar uma música, combinar esta ferramenta com o metrônomo ou Tap BPM torna a prática mais eficaz.", nextToolQuestion: "Qual outra ferramenta usar junto?", nextStepAnswer: "Depois desta ferramenta, o próximo passo mais útil costuma ser um guia prático relacionado ou uma página de afinação.", nextStepQuestion: "Qual é o próximo passo mais útil?" },
  hi: { metronomeBpmAnswer: "Tap BPM से गाने की गति का अनुमान लगाएं और फिर मेट्रोनोम के साथ तुरंत अभ्यास करें।", metronomeBpmQuestion: "क्या पहले गाने का BPM पता करना चाहिए?", metronomeSubdivisionAnswer: "स्थिर शुरुआत के लिए समान आठवें नोट से अभ्यास शुरू करें, फिर ट्रिपलेट या सोलहवें नोट पर जाएं।", metronomeSubdivisionQuestion: "सबसे पहले किस ताल विभाजन का अभ्यास करें?", nextToolAnswer: "यदि आप किसी गाने का अभ्यास कर रहे हैं, तो मेट्रोनोम या Tap BPM को साथ उपयोग करने से अभ्यास अधिक प्रभावी होता है।", nextToolQuestion: "इसके साथ कौन-सा दूसरा टूल खोलना चाहिए?", nextStepAnswer: "इस टूल के बाद सबसे उपयोगी अगला कदम आमतौर पर संबंधित व्यावहारिक गाइड या ट्यूनिंग पेज खोलना है।", nextStepQuestion: "सबसे उपयोगी अगला कदम क्या है?" },
  no: { metronomeBpmAnswer: "Bruk Tap BPM til å anslå tempoet og øv deretter med metronomen med en gang.", metronomeBpmQuestion: "Bør du finne BPM for sangen først?", metronomeSubdivisionAnswer: "Start med jevne åttedeler og gå senere videre til trioler eller sekstendeler.", metronomeSubdivisionQuestion: "Hvilken underdeling bør du starte med?", nextToolAnswer: "Når du øver på en sang, blir treningen ofte mer effektiv sammen med metronomen eller Tap BPM.", nextToolQuestion: "Hvilket annet verktøy passer sammen med dette?", nextStepAnswer: "Etter dette verktøyet er en relevant praktisk guide eller stemmeside vanligvis det nyttigste neste steget.", nextStepQuestion: "Hva er det nyttigste neste steget?" }
});

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Array.from(new Set([...toolSlugs, ...instrumentTunerSlugs])).map((tool) => ({ locale, tool }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, tool: rawTool } = await params;
  if (!isLocale(rawLocale)) return {};

  if (isToolSlug(rawTool)) {
    const dictionary = await getDictionary(rawLocale);
    return buildToolMetadata(rawLocale, rawTool, dictionary);
  }

  const instrument = instrumentFromTunerSlug(rawTool);
  if (!instrument) return {};
  return buildInstrumentTunerMetadata(rawLocale, rawTool, getInstrumentTunerContent(rawLocale, instrument));
}

function ToolComponent({
  dictionary,
  instrument,
  locale,
  tool
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  instrument?: Instrument;
  locale: Locale;
  tool?: ToolSlug;
}) {
  if (instrument) return <GuitarTuner dictionary={dictionary} instrument={instrument} locale={locale} />;

  switch (tool) {
    case "guitar-tuner":
      return <GuitarTuner dictionary={dictionary} locale={locale} />;
    case "bass-tuner":
      return <BassTuner dictionary={dictionary} locale={locale} />;
    case "ukulele-tuner":
      return <UkuleleTuner dictionary={dictionary} locale={locale} />;
    case "metronome":
      return <Metronome dictionary={dictionary} locale={locale} />;
    case "tap-bpm":
      return <TapBpm dictionary={dictionary} locale={locale} />;
    case "chord-transposer":
      return <ChordTransposer dictionary={dictionary} locale={locale} />;
    case "sound-level-meter":
      return <SoundLevelMeter dictionary={dictionary} locale={locale} />;
    case "pitch-generator":
      return <PitchGenerator locale={locale} />;
    default:
      return null;
  }
}

export default async function ToolPage({ params }: PageProps) {
  const { locale: rawLocale, tool: rawTool } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);
  const coreTool = isToolSlug(rawTool) ? (rawTool as ToolSlug) : null;
  const instrument = coreTool ? null : instrumentFromTunerSlug(rawTool);

  if (!coreTool && !instrument) notFound();

  const instrumentContent = instrument ? getInstrumentTunerContent(locale, instrument) : null;
  const content = coreTool ? dictionary.tools[coreTool] : instrumentContent!;
  const pageLabels = toolPageLabels[locale];
  const clusterLabels = clusterSectionLabels[locale];
  const contextualLabels = contextualSectionLabels[locale];
  const intentLabels = toolIntentLabels[locale];
  const seoEnhancement = coreTool ? getToolSeoEnhancement(locale, coreTool) : null;
  const heroTitle = seoEnhancement?.heroTitle ?? content.title;
  const heroDescription = seoEnhancement?.heroDescription ?? content.description;
  const faqContent = seoEnhancement ? [...content.faq, ...seoEnhancement.faqs] : content.faq;
  const relatedTools: ToolSlug[] =
    coreTool && !tunerTools.includes(coreTool as (typeof tunerTools)[number])
      ? (["guitar-tuner", "metronome", "tap-bpm", "sound-level-meter", "pitch-generator", "chord-transposer"].filter((slug) => slug !== coreTool) as ToolSlug[])
      : ["metronome", "tap-bpm", "chord-transposer", "sound-level-meter", "pitch-generator"];
  const relatedGuides = coreTool ? guidesForTool(coreTool) : instrument ? guidesForInstrument(instrument) : [];
  const clusterGuides = (coreTool ? getToolClusterGuides(coreTool) : getToolClusterGuides(rawTool)).filter(
    (guide, index, source) => source.indexOf(guide) === index
  );
  const relatedTuningGuides: GuideSlug[] = relatedGuides.filter((guide): guide is GuideSlug =>
    alternativeTuningGuideSlugs.includes(guide as (typeof alternativeTuningGuideSlugs)[number])
  );
  const relatedPracticeGuides: GuideSlug[] = relatedGuides.filter(
    (guide): guide is GuideSlug => !relatedTuningGuides.includes(guide as GuideSlug)
  );
  const relatedSearchGuides: GuideSlug[] = [...relatedPracticeGuides, ...relatedTuningGuides]
    .filter((guide, index, source) => source.indexOf(guide) === index)
    .slice(0, 4);
  const followUpCopy = toolFollowUpCopy[locale];
  const followUpQuestions: ToolFollowUp[] =
    coreTool === "metronome"
      ? [
          {
            answer: followUpCopy.metronomeSubdivisionAnswer,
            href: `/${locale}/guides/metronome-subdivisions`,
            label: getGuideContent(locale, "metronome-subdivisions").title,
            question: followUpCopy.metronomeSubdivisionQuestion
          },
          {
            answer: followUpCopy.metronomeBpmAnswer,
            href: `/${locale}/tools/tap-bpm`,
            label: dictionary.tools["tap-bpm"].title,
            question: followUpCopy.metronomeBpmQuestion
          }
        ]
      : [
          {
            answer: followUpCopy.nextStepAnswer,
            href: `/${locale}/guides`,
            label: pageLabels.allGuides,
            question: followUpCopy.nextStepQuestion
          },
          {
            answer: followUpCopy.nextToolAnswer,
            href: `/${locale}/tools/metronome`,
            label: dictionary.tools.metronome.title,
            question: followUpCopy.nextToolQuestion
          }
        ];

  return (
    <main className="mx-auto w-full max-w-7xl overflow-hidden px-2 py-8 sm:px-4 sm:py-10">
      {coreTool ? <JsonLd data={toolSchema(locale, coreTool, dictionary)} /> : null}
      {coreTool ? <JsonLd data={howToSchema(locale, coreTool, dictionary)} /> : null}
      {instrumentContent ? <JsonLd data={instrumentTunerSchema(locale, rawTool, instrumentContent)} /> : null}
      {coreTool ? <JsonLd data={faqItemsSchema(faqContent)} /> : <JsonLd data={faqItemsSchema(content.faq)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: dictionary.nav.tools, url: `${siteUrl}/${locale}/tools` },
          { name: content.title, url: `${siteUrl}/${locale}/tools/${rawTool}` }
        ])}
      />
      <AdSlot className="mb-8" />
      <div className="grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,920px)_340px] lg:gap-10">
        <article className="w-full min-w-0 space-y-8 sm:space-y-10">
          <header className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint sm:text-sm sm:tracking-[0.18em]">TuneUniversal</p>
            <h1 className="mt-3 max-w-full break-words text-2xl font-black leading-tight sm:text-5xl">{heroTitle}</h1>
            <p className="mt-4 max-w-2xl break-words text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{heroDescription}</p>
          </header>
          <div className="w-full min-w-0 max-w-full overflow-hidden">
            <ToolComponent tool={coreTool ?? undefined} instrument={instrument ?? undefined} dictionary={dictionary} locale={locale} />
          </div>
          <div className="flex flex-wrap gap-3">
            {relatedTools.slice(0, 3).map((slug) => (
              <Link
                key={slug}
                href={`/${locale}/tools/${slug}`}
                className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold transition hover:border-mint hover:shadow-soft"
              >
                {dictionary.tools[slug].title}
              </Link>
            ))}
            <Link
              href={`/${locale}/guides`}
              className="rounded-lg border border-line bg-mint/5 px-4 py-3 text-sm font-semibold transition hover:border-mint hover:bg-white"
            >
              {pageLabels.allGuides}
            </Link>
          </div>
          {seoEnhancement?.highlights?.length ? (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{contextualLabels.highlightsTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{contextualLabels.highlightsDescription}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {seoEnhancement.highlights.map((item) => (
                  <article key={item.label} className="rounded-lg border border-line bg-mint/5 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-mint">{item.label}</p>
                    <p className="mt-2 text-lg font-bold text-ink">{item.value}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
          <AdSlot variant="mobileBanner" className="lg:hidden" />
          <AdSlot className="hidden lg:flex" />
          <section>
            <h2 className="text-2xl font-bold">{dictionary.common.howItWorks}</h2>
            <ol className="mt-4 grid gap-3">
              {content.howItWorks.map((item) => (
                <li key={item} className="rounded-lg border border-line bg-white p-4">
                  {item}
                </li>
              ))}
            </ol>
          </section>
          <AdSlot variant="mobileBanner" className="lg:hidden" />
          <AdSlot className="hidden lg:flex" />
          {seoEnhancement ? (
            <section>
              <h2 className="text-2xl font-bold">{guideHeadings[locale]}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {seoEnhancement.sections.map((section) => (
                  <article key={section.title} className="rounded-lg border border-line bg-white p-4 shadow-soft">
                    <h3 className="text-lg font-bold">{section.title}</h3>
                    <p className="mt-2 leading-7 text-ink/72">{section.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
          {seoEnhancement?.quickAnswers?.length ? (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{contextualLabels.quickAnswersTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{contextualLabels.quickAnswersDescription}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {seoEnhancement.quickAnswers.map((item) => (
                  <article key={item.title} className="rounded-lg border border-line bg-mint/4 p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-ink/72">{item.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{pageLabels.exploreMore}</h2>
            <p className="mt-3 leading-7 text-ink/72">{pageLabels.exploreMoreDescription}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link href={`/${locale}/tools`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {pageLabels.allTools}
              </Link>
              <Link href={`/${locale}/guides`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {pageLabels.allGuides}
              </Link>
              <Link href={`/${locale}/tunings`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {pageLabels.tuningHub}
              </Link>
            </div>
          </section>
          {relatedPracticeGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">{guideHeadings[locale]}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedPracticeGuides.map((guide) => {
                  const guideContent = getGuideContent(locale, guide);
                  return (
                    <Link
                      key={guide}
                      className="rounded-lg border border-line bg-white p-4 transition hover:border-mint hover:shadow-soft"
                      href={`/${locale}/guides/${guide}`}
                    >
                      <span className="block font-semibold">{guideContent.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-ink/68">{guideContent.description}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          {relatedTuningGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">{pageLabels.relatedTunings}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedTuningGuides.map((guide) => {
                  const guideContent = getGuideContent(locale, guide);
                  return (
                    <Link
                      key={guide}
                      className="rounded-lg border border-line bg-white p-4 transition hover:border-mint hover:shadow-soft"
                      href={`/${locale}/guides/${guide}`}
                    >
                      <span className="block font-semibold">{guideContent.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-ink/68">{guideContent.description}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          {clusterGuides.length > 0 && (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{clusterLabels.toolGuidesTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{clusterLabels.toolGuidesDescription}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {clusterGuides.map((guide) => {
                  const guideContent = getGuideContent(locale, guide);
                  return (
                    <Link
                      key={guide}
                      className="rounded-lg border border-line bg-mint/5 p-4 transition hover:border-mint hover:bg-white"
                      href={`/${locale}/guides/${guide}`}
                    >
                      <span className="block font-semibold">{guideContent.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-ink/68">{guideContent.description}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          {relatedSearchGuides.length > 0 && (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{intentLabels.searchesTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{intentLabels.searchesDescription}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedSearchGuides.map((guide) => {
                  const resolved = getGuideContent(locale, guide);
                  return (
                    <Link
                      key={guide}
                      className="rounded-lg border border-line bg-mint/5 p-4 transition hover:border-mint hover:bg-white"
                      href={`/${locale}/guides/${guide}`}
                    >
                      <span className="block font-semibold">{resolved.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-ink/68">{resolved.description}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          {followUpQuestions.length > 0 && (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{intentLabels.questionsTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{intentLabels.questionsDescription}</p>
              <div className="mt-4 grid gap-3">
                {followUpQuestions.map((item) => (
                  <article key={item.question} className="rounded-lg border border-line bg-mint/4 p-4">
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="mt-2 leading-7 text-ink/72">{item.answer}</p>
                    <Link className="mt-3 inline-flex text-sm font-semibold text-mint hover:underline" href={item.href}>
                      {item.label}
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
          <section>
            <h2 className="text-2xl font-bold">{dictionary.common.faq}</h2>
            <div className="mt-4 grid gap-3">
              {faqContent.map((item) => (
                <details key={item.question} className="rounded-lg border border-line bg-white p-4">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="mt-3 leading-7 text-ink/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
          <AdSlot className="mb-2 mt-2" />
        </article>
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="rectangle" className="mb-6 hidden lg:flex" />
          <h2 className="mb-4 text-xl font-bold">{dictionary.common.otherTools}</h2>
          <ToolNavigation locale={locale} dictionary={dictionary} tools={relatedTools} variant="sidebar" />
        </aside>
      </div>
    </main>
  );
}

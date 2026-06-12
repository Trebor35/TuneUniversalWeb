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
  no: { allGuides: "Alle guider", allTools: "Alle verktøy", exploreMore: "Fortsett herfra", exploreMoreDescription: "Bruk disse lenkene for å bevege deg mellom verktøyet, praktiske guider og stemmehubben.", relatedTunings: "Relaterte stemminger", tuningHub: "Stemmehubb" }
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
  no: "Relaterte guider"
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
    highlightsDescription: "Ù†Ù‚Ø§Ø· Ø³Ø±ÙŠØ¹Ø© ØªØ¹Ø·ÙŠÙƒ ÙÙƒØ±Ø© ÙˆØ§Ø¶Ø­Ø© Ø¹Ù† ÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù‡Ø°Ù‡ Ø§Ù„Ø£Ø¯Ø§Ø©.",
    highlightsTitle: "Ù†Ø¸Ø±Ø© Ø³Ø±ÙŠØ¹Ø©",
    quickAnswersDescription: "Ø¥Ø¬Ø§Ø¨Ø§Øª Ù…Ø®ØªØµØ±Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„ØªÙŠ ØªØ³Ø§Ø¹Ø¯Ùƒ Ø¹Ù„Ù‰ Ø§Ù„Ø¨Ø¯Ø¡ Ø¨Ø´ÙƒÙ„ Ø£Ø³Ø±Ø¹.",
    quickAnswersTitle: "Ø¥Ø¬Ø§Ø¨Ø§Øª Ø³Ø±ÙŠØ¹Ø©"
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
    highlightsDescription: "ã“ã®ãƒ„ãƒ¼ãƒ«ã®è¦ç‚¹ã‚’çŸ­ãã¾ã¨ã‚ã¦ç¢ºèªã§ãã¾ã™ã€‚",
    highlightsTitle: "ã²ã¨ç›®ã§",
    quickAnswersDescription: "ã¯ã˜ã‚ã‚‹å‰ã«å½¹ç«‹ã¤ã‚ˆãã‚ã‚‹è³ªå•ã¸ã®ç°¡å˜ãªç­”ãˆã§ã™ã€‚",
    quickAnswersTitle: "ã™ãåˆ†ã‹ã‚‹ç­”ãˆ"
  },
  ko: {
    highlightsDescription: "ì´ ë„êµ¬ë¥¼ ë¹ ë¥´ê²Œ ì´í•´í•  ìˆ˜ ìžˆëŠ” í•µì‹¬ í¬ì¸íŠ¸ë¥¼ ëª¨ì•˜ìŠµë‹ˆë‹¤.",
    highlightsTitle: "í•œëˆˆì—",
    quickAnswersDescription: "ì‹œìž‘í•˜ê¸° ì „ ìžì£¼ ë‚˜ì˜¤ëŠ” ì§ˆë¬¸ì— ëŒ€í•œ ì§§ê³  ì‹¤ìš©ì ì¸ ë‹µë³€ìž…ë‹ˆë‹¤.",
    quickAnswersTitle: "ë¹ ë¥¸ ë‹µë³€"
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
    questionsDescription: "Ø£Ø³Ø¦Ù„Ø© Ø³Ø±ÙŠØ¹Ø© Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¥Ù„Ù‰ Ø§Ù„Ø®Ø·ÙˆØ© Ø§Ù„ØªØ§Ù„ÙŠØ©.",
    questionsTitle: "Ø£Ø³Ø¦Ù„Ø© Ù…Ø±ØªØ¨Ø·Ø©",
    searchesDescription: "Ø±ÙˆØ§Ø¨Ø· Ø¯Ø§Ø®Ù„ÙŠØ© Ù…ÙÙŠØ¯Ø© Ù„Ù…Ù† ÙŠØ³ØªØ®Ø¯Ù… Ù‡Ø°Ù‡ Ø§Ù„Ø£Ø¯Ø§Ø©.",
    searchesTitle: "Ø±ÙˆØ§Ø¨Ø· Ù…ÙÙŠØ¯Ø©"
  },
  de: {
    questionsDescription: "Kurze Anschlussfragen, die beim Weiterlernen helfen.",
    questionsTitle: "NÃ¤chste Fragen",
    searchesDescription: "Interne Seiten, die inhaltlich gut zu diesem Tool passen.",
    searchesTitle: "NÃ¼tzliche nÃ¤chste Seiten"
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
    questionsDescription: "ã“ã®ãƒ„ãƒ¼ãƒ«ã®æ¬¡ã«å½¹ç«‹ã¤çŸ­ã„è³ªå•ã§ã™ã€‚",
    questionsTitle: "é–¢é€£ã™ã‚‹è³ªå•",
    searchesDescription: "æ¬¡ã«è¦‹ã‚‹ã®ã«åˆã†å†…éƒ¨ãƒšãƒ¼ã‚¸ã§ã™ã€‚",
    searchesTitle: "é–¢é€£æ¤œç´¢"
  },
  ko: {
    questionsDescription: "ì´ ë„êµ¬ ë‹¤ìŒì— ë°”ë¡œ ë„ì›€ì´ ë  ì§ˆë¬¸ì…ë‹ˆë‹¤.",
    questionsTitle: "ê´€ë ¨ ì§ˆë¬¸",
    searchesDescription: "ë‹¤ìŒ ë‹¨ê³„ì— ë§žëŠ” ë‚´ë¶€ íŽ˜ì´ì§€ë¥¼ ëª¨ì•˜ìŠµë‹ˆë‹¤.",
    searchesTitle: "ê´€ë ¨ ê²€ìƒ‰"
  },
  pt: {
    questionsDescription: "Perguntas curtas para continuar a pratica com mais clareza.",
    questionsTitle: "Perguntas relacionadas",
    searchesDescription: "Paginas internas que fazem sentido como proximo passo depois desta ferramenta.",
    searchesTitle: "Pesquisas relacionadas"
  },
  ru: {
    questionsDescription: "ÐšÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ðµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÑŽÑ‚ Ð¿Ð¾Ð½ÑÑ‚ÑŒ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ ÑˆÐ°Ð³.",
    questionsTitle: "Ð¡Ð²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹",
    searchesDescription: "Ð’Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½Ð¸Ðµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾ Ð´Ð¾Ð¿Ð¾Ð»Ð½ÑÑŽÑ‚ ÑÑ‚Ð¾Ñ‚ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚.",
    searchesTitle: "Ð¡Ð²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ð¾Ð¸ÑÐºÐ¸"
  },
  zh: {
    questionsDescription: "å¸®ä½ ç»§ç»­ç»ƒä¹ çš„ç®€çŸ­ä¸‹ä¸€æ­¥é—®é¢˜ã€‚",
    questionsTitle: "ç›¸å…³é—®é¢˜",
    searchesDescription: "è¿™äº›å†…éƒ¨é¡µé¢å¾ˆé€‚åˆä½œä¸ºä½¿ç”¨è¿™ä¸ªå·¥å…·åŽçš„ä¸‹ä¸€æ­¥ã€‚",
    searchesTitle: "ç›¸å…³æœç´¢"
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
  const followUpQuestions: ToolFollowUp[] =
    coreTool === "metronome"
      ? [
          {
            answer:
              locale === "it"
                ? "Per iniziare in modo stabile, parti dagli ottavi regolari e poi passa a terzine o sedicesimi."
                : "For a stable start, begin with straight eighth notes and move to triplets or sixteenths later.",
            href: `/${locale}/guides/metronome-subdivisions`,
            label: getGuideContent(locale, "metronome-subdivisions").title,
            question:
              locale === "it"
                ? "Da quale suddivisione conviene partire?"
                : "Which subdivision should you practice first?"
          },
          {
            answer:
              locale === "it"
                ? "Puoi usare Tap BPM per stimare il tempo del brano e poi studiarlo subito col metronomo."
                : "You can estimate the song tempo with Tap BPM and then practice it right away with the metronome.",
            href: `/${locale}/tools/tap-bpm`,
            label: dictionary.tools["tap-bpm"].title,
            question:
              locale === "it"
                ? "Conviene trovare prima il BPM del brano?"
                : "Should you find the BPM of the song first?"
          }
        ]
      : [
          {
            answer:
              locale === "it"
                ? "Dopo questo tool, il passo piu utile di solito e aprire una guida pratica collegata o una pagina di accordature."
                : "After this tool, the most useful next step is usually a related practical guide or a tuning page.",
            href: `/${locale}/guides`,
            label: pageLabels.allGuides,
            question:
              locale === "it"
                ? "Qual e il passo successivo piu utile?"
                : "What is the most useful next step?"
          },
          {
            answer:
              locale === "it"
                ? "Se stai studiando un brano, affiancare metronomo o Tap BPM rende l'allenamento molto piu concreto."
                : "If you are practicing a song, pairing this with the metronome or Tap BPM usually makes practice more effective.",
            href: `/${locale}/tools/metronome`,
            label: dictionary.tools.metronome.title,
            question:
              locale === "it"
                ? "Quale altro tool conviene aprire insieme?"
                : "Which other tool should you open alongside this one?"
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

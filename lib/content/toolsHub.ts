import { withLocaleFallbacks, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export type ToolsHubContent = {
  chromaticBody: string;
  chromaticCta: string;
  chromaticTitle: string;
  description: string;
  faq: { answer: string; question: string }[];
  groups: { description: string; title: string; tools: ToolSlug[] }[];
  instrumentIntro: string;
  keywords: string[];
  title: string;
};

export const toolsHubContent: Record<Locale, ToolsHubContent> = withLocaleFallbacks({
  ar: {
    title: "Ø£Ø¯ÙˆØ§Øª Ù…ÙˆØ³ÙŠÙ‚ÙŠØ© Ù…Ø¬Ø§Ù†ÙŠØ©",
    description: "Ù…ÙˆØ§Ù„Ù Ø¹Ø§Ù…ØŒ Ù…ÙŠØªØ±ÙˆÙ†ÙˆÙ…ØŒ Tap BPM ÙˆÙ†Ø§Ù‚Ù„ Ø£ÙˆØªØ§Ø± Ù„Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„ÙŠÙˆÙ…ÙŠ.",
    chromaticTitle: "Ø§Ù„Ù…ÙˆØ§Ù„Ù Ø§Ù„Ø¹Ø§Ù… Ø¹Ù„Ù‰ Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª",
    chromaticBody: "Ø§Ø³ØªØ®Ø¯Ù… Ø§Ù„Ù…ÙŠÙƒØ±ÙˆÙÙˆÙ† Ù„Ø¶Ø¨Ø· Ø§Ù„ØºÙŠØªØ§Ø± ÙˆØ§Ù„Ø¨Ø§Ø³ ÙˆØ§Ù„ÙŠÙˆÙƒÙˆÙ„ÙŠÙ„ÙŠ ÙˆØ§Ù„Ø¹Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„Ø¢Ù„Ø§Øª Ø§Ù„ÙˆØªØ±ÙŠØ©. ÙŠØ¹Ù…Ù„ Ø§Ù„Ù…ÙˆØ§Ù„Ù ÙƒØ±ÙˆÙ…Ø§ØªÙŠÙƒÙŠØ§ ÙˆÙŠØ¹Ø±Ø¶ Ø§Ù„Ù†ØºÙ…Ø© ÙˆØ§Ù„ØªØ±Ø¯Ø¯ ÙˆØ§Ù„Ø§Ù†Ø­Ø±Ø§Ù Ø¨Ø§Ù„Ø³Ù†Øª.",
    chromaticCta: "Ø§ÙØªØ­ Ø§Ù„Ù…ÙˆØ§Ù„Ù Ø§Ù„Ø¹Ø§Ù…",
    instrumentIntro: "Ø§Ø®ØªØ± Ø¢Ù„Ø© Ù…Ø­Ø¯Ø¯Ø© Ø¥Ø°Ø§ ÙƒÙ†Øª ØªØ±ÙŠØ¯ ØµÙØ­Ø© Ù…Ø®ØµØµØ© Ø¨Ù†ØºÙ…Ø§Øª Ù…Ø±Ø¬Ø¹ÙŠØ© ÙˆØ±ÙˆØ§Ø¨Ø· Ø¯Ù„ÙŠÙ„ Ù…Ù†Ø§Ø³Ø¨Ø©.",
    keywords: ["Ù…ÙˆØ§Ù„Ù Ø¹Ø§Ù…", "Ø£Ø¯ÙˆØ§Øª Ù…ÙˆØ³ÙŠÙ‚ÙŠØ© Ù…Ø¬Ø§Ù†ÙŠØ©", "Ù…ÙŠØªØ±ÙˆÙ†ÙˆÙ…", "Tap BPM", "Ù†Ø§Ù‚Ù„ Ø£ÙˆØªØ§Ø±"],
    groups: [
      { title: "Ø¶Ø¨Ø· Ø§Ù„Ø¢Ù„Ø§Øª", description: "Ù„Ø¶Ø¨Ø· Ø§Ù„Ø¢Ù„Ø§Øª Ø¨Ø§Ù„Ù…ÙŠÙƒØ±ÙˆÙÙˆÙ† Ø£Ùˆ Ø§Ø®ØªÙŠØ§Ø± Ø¢Ù„Ø© Ù…Ø­Ø¯Ø¯Ø©.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ø§Ù„Ø¥ÙŠÙ‚Ø§Ø¹ Ùˆ BPM", description: "Ù„Ù„Ø¯Ø±Ø§Ø³Ø© Ø¨Ø§Ù„Ù…ÙŠØªØ±ÙˆÙ†ÙˆÙ… Ø£Ùˆ Ø­Ø³Ø§Ø¨ Ø³Ø±Ø¹Ø© Ø£ØºÙ†ÙŠØ©.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Ø§Ù„Ø£ÙˆØªØ§Ø± ÙˆØ§Ù„Ù†Ø¸Ø±ÙŠØ©", description: "Ù„ØªØºÙŠÙŠØ± Ù…Ù‚Ø§Ù… ØªÙ‚Ø¯Ù…Ø§Øª Ø§Ù„Ø£ÙˆØªØ§Ø± Ø¨Ø³Ø±Ø¹Ø©.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Ø£ÙŠ Ø£Ø¯Ø§Ø© Ø£Ø³ØªØ®Ø¯Ù… Ù„Ù„Ø¶Ø¨Ø·ØŸ", answer: "Ø§Ø¨Ø¯Ø£ Ø¨Ø§Ù„Ù…ÙˆØ§Ù„Ù Ø§Ù„Ø¹Ø§Ù…ØŒ Ø£Ùˆ Ø§Ø®ØªØ± ØµÙØ­Ø© Ø§Ù„Ø¢Ù„Ø© Ø¥Ø°Ø§ ÙƒÙ†Øª ØªØ±ÙŠØ¯ Ù†ØºÙ…Ø§Øª Ù…Ø±Ø¬Ø¹ÙŠØ© Ù…Ø­Ø¯Ø¯Ø©." },
      { question: "Ù‡Ù„ ÙŠØ³Ø¬Ù„ TuneUniversal ØµÙˆØª Ø§Ù„Ù…ÙŠÙƒØ±ÙˆÙÙˆÙ†ØŸ", answer: "Ù„Ø§ØŒ ÙŠØªÙ… ØªØ­Ù„ÙŠÙ„ ØµÙˆØª Ø§Ù„Ù…ÙˆØ§Ù„Ù Ù…Ø­Ù„ÙŠØ§ ÙÙŠ Ø§Ù„Ù…ØªØµÙØ­ Ø¹Ø¨Ø± Web Audio API." },
      { question: "Ù‡Ù„ ØªØ¹Ù…Ù„ Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø¹Ù„Ù‰ Ø§Ù„Ù‡Ø§ØªÙØŸ", answer: "Ù†Ø¹Ù…ØŒ ØªØ¹Ù…Ù„ ÙÙŠ Ø§Ù„Ù…ØªØµÙØ­ Ø¹Ù„Ù‰ Ø§Ù„Ù‡Ø§ØªÙ ÙˆØ§Ù„ÙƒÙ…Ø¨ÙŠÙˆØªØ± Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø£Ø°ÙˆÙ†Ø§Øª Ø§Ù„ØµÙˆØª ÙˆØ§Ù„Ù…ÙŠÙƒØ±ÙˆÙÙˆÙ† Ù…ØªØ§Ø­Ø©." }
    ]
  },
  de: {
    title: "Kostenlose Musiktools",
    description: "Universeller Tuner, Metronom, Tap BPM und Akkord-Transposer fÃ¼r tÃ¤gliches Ãœben.",
    chromaticTitle: "Universeller Online-Tuner",
    chromaticBody: "Nutze das Mikrofon, um Gitarre, Bass, Ukulele und viele Saiteninstrumente zu stimmen. Der Tuner arbeitet chromatisch und zeigt Note, Frequenz und Cent-Abweichung.",
    chromaticCta: "Universellen Tuner Ã¶ffnen",
    instrumentIntro: "WÃ¤hle ein konkretes Instrument, wenn du eine Seite mit passenden Referenznoten und Guide-Links mÃ¶chtest.",
    keywords: ["universeller tuner", "kostenlose musiktools", "metronom online", "tap bpm", "akkorde transponieren"],
    groups: [
      { title: "Instrumente stimmen", description: "FÃ¼r Mikrofon-Stimmung und instrumentenspezifische Referenznoten.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Rhythmus und BPM", description: "FÃ¼r Metronomtraining und schnelle Tempo-SchÃ¤tzung.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Akkorde und Theorie", description: "FÃ¼r schnelle Tonartwechsel in Akkordfolgen.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Welches Tool brauche ich zum Stimmen?", answer: "Starte mit dem universellen Tuner oder wÃ¤hle ein Instrument fÃ¼r passende Referenznoten." },
      { question: "Nimmt TuneUniversal mein Mikrofon auf?", answer: "Nein. Tuner-Audio wird lokal im Browser mit der Web Audio API analysiert." },
      { question: "Funktionieren die Tools auf dem Smartphone?", answer: "Ja, wenn Browser und GerÃ¤t Audio- beziehungsweise Mikrofonzugriff erlauben." }
    ]
  },
  en: {
    title: "Free Music Tools",
    description: "Universal tuner, metronome, Tap BPM and chord transposer for daily practice.",
    chromaticTitle: "Universal online tuner",
    chromaticBody: "Use your microphone to tune guitar, bass, ukulele and many string instruments. The tuner works chromatically and shows note, frequency and cents.",
    chromaticCta: "Open universal tuner",
    instrumentIntro: "Choose a specific instrument when you want a dedicated page with reference notes, tuning presets and guide links.",
    keywords: ["universal tuner", "free music tools", "online metronome", "tap bpm", "chord transposer"],
    groups: [
      { title: "Tune instruments", description: "For microphone tuning and instrument-specific reference notes.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Rhythm and BPM", description: "For metronome practice and quick song tempo estimates.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Chords and theory", description: "For changing key and moving chord progressions.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Which tool should I use for tuning?", answer: "Start with the universal tuner, or choose a specific instrument page if you want exact reference notes." },
      { question: "Does TuneUniversal record microphone audio?", answer: "No. Tuner audio is analyzed locally in your browser with the Web Audio API." },
      { question: "Do the tools work on mobile?", answer: "Yes. They work in modern mobile browsers when audio and microphone permissions are available." }
    ]
  },
  es: {
    title: "Herramientas musicales gratis",
    description: "Afinador universal, metrÃ³nomo, Tap BPM y transpositor de acordes para practicar.",
    chromaticTitle: "Afinador universal online",
    chromaticBody: "Usa el micrÃ³fono para afinar guitarra, bajo, ukulele y muchos instrumentos de cuerda. El afinador funciona de forma cromÃ¡tica y muestra nota, frecuencia y cents.",
    chromaticCta: "Abrir afinador universal",
    instrumentIntro: "Elige un instrumento especÃ­fico si quieres una pÃ¡gina con notas de referencia, presets y guÃ­as.",
    keywords: ["afinador universal", "herramientas musicales gratis", "metrÃ³nomo online", "tap bpm", "transpositor acordes"],
    groups: [
      { title: "Afinar instrumentos", description: "Para afinar con micrÃ³fono y usar notas de referencia por instrumento.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ritmo y BPM", description: "Para practicar con metrÃ³nomo y calcular tempo.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Acordes y teorÃ­a", description: "Para cambiar tonalidad y mover progresiones.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Â¿QuÃ© herramienta uso para afinar?", answer: "Empieza con el afinador universal o elige una pÃ¡gina de instrumento para notas exactas." },
      { question: "Â¿TuneUniversal graba el micrÃ³fono?", answer: "No. El audio se analiza localmente en el navegador con Web Audio API." },
      { question: "Â¿Funciona en mÃ³vil?", answer: "SÃ­, en navegadores modernos con permisos de audio y micrÃ³fono." }
    ]
  },
  fr: {
    title: "Outils musicaux gratuits",
    description: "Accordeur universel, mÃ©tronome, Tap BPM et transposeur d'accords pour la pratique.",
    chromaticTitle: "Accordeur universel en ligne",
    chromaticBody: "Utilisez le micro pour accorder guitare, basse, ukulÃ©lÃ© et de nombreux instruments Ã  cordes. L'accordeur fonctionne en chromatique et affiche note, frÃ©quence et cents.",
    chromaticCta: "Ouvrir l'accordeur universel",
    instrumentIntro: "Choisissez un instrument prÃ©cis pour une page avec notes de rÃ©fÃ©rence, presets et guides.",
    keywords: ["accordeur universel", "outils musicaux gratuits", "mÃ©tronome en ligne", "tap bpm", "transposeur accords"],
    groups: [
      { title: "Accorder les instruments", description: "Pour l'accordage au micro et les notes de rÃ©fÃ©rence par instrument.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Rythme et BPM", description: "Pour travailler au mÃ©tronome et estimer le tempo.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Accords et thÃ©orie", description: "Pour changer de tonalitÃ© et dÃ©placer les progressions.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Quel outil utiliser pour accorder ?", answer: "Commencez par l'accordeur universel ou choisissez une page instrument pour des notes prÃ©cises." },
      { question: "TuneUniversal enregistre-t-il le micro ?", answer: "Non. L'audio est analysÃ© localement dans le navigateur avec la Web Audio API." },
      { question: "Les outils fonctionnent-ils sur mobile ?", answer: "Oui, dans les navigateurs mobiles modernes avec les permissions nÃ©cessaires." }
    ]
  },
  it: {
    title: "Strumenti musicali gratuiti",
    description: "Accordatore universale, metronomo, Tap BPM e traspositore accordi per lo studio quotidiano.",
    chromaticTitle: "Accordatore universale online",
    chromaticBody: "Usa il microfono per accordare chitarra, basso, ukulele e molti strumenti a corda. L'accordatore lavora in modo cromatico e mostra nota, frequenza e scostamento in cents.",
    chromaticCta: "Apri accordatore universale",
    instrumentIntro: "Scegli uno strumento specifico se vuoi una pagina dedicata con note di riferimento, preset di accordatura e guide correlate.",
    keywords: ["accordatore universale", "strumenti musicali gratis", "metronomo online", "tap bpm", "traspositore accordi"],
    groups: [
      { title: "Accordare strumenti", description: "Per accordare con il microfono e usare note di riferimento specifiche.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ritmo e BPM", description: "Per studiare con il metronomo e calcolare il tempo di un brano.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Accordi e teoria", description: "Per cambiare tonalitÃ  e spostare progressioni di accordi.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Quale strumento devo usare per accordare?", answer: "Parti dall'accordatore universale, oppure scegli la pagina dello strumento se vuoi note di riferimento precise." },
      { question: "TuneUniversal registra l'audio del microfono?", answer: "No. L'audio dell'accordatore viene analizzato localmente nel browser tramite Web Audio API." },
      { question: "Funziona da smartphone?", answer: "SÃ¬, funziona nei browser mobile moderni quando sono disponibili i permessi audio e microfono." }
    ]
  },
  ja: {
    title: "ç„¡æ–™éŸ³æ¥½ãƒ„ãƒ¼ãƒ«",
    description: "ãƒ¦ãƒ‹ãƒãƒ¼ã‚µãƒ«ãƒãƒ¥ãƒ¼ãƒŠãƒ¼ã€ãƒ¡ãƒˆãƒ­ãƒŽãƒ¼ãƒ ã€Tap BPMã€ã‚³ãƒ¼ãƒ‰ç§»èª¿ãƒ„ãƒ¼ãƒ«ã€‚",
    chromaticTitle: "ã‚ªãƒ³ãƒ©ã‚¤ãƒ³ãƒ»ãƒ¦ãƒ‹ãƒãƒ¼ã‚µãƒ«ãƒãƒ¥ãƒ¼ãƒŠãƒ¼",
    chromaticBody: "ãƒžã‚¤ã‚¯ã‚’ä½¿ã£ã¦ã‚®ã‚¿ãƒ¼ã€ãƒ™ãƒ¼ã‚¹ã€ã‚¦ã‚¯ãƒ¬ãƒ¬ã€å¤šãã®å¼¦æ¥½å™¨ã‚’èª¿å¾‹ã§ãã¾ã™ã€‚ã‚¯ãƒ­ãƒžãƒãƒƒã‚¯ã«éŸ³åã€å‘¨æ³¢æ•°ã€ã‚»ãƒ³ãƒˆå·®ã‚’è¡¨ç¤ºã—ã¾ã™ã€‚",
    chromaticCta: "ãƒãƒ¥ãƒ¼ãƒŠãƒ¼ã‚’é–‹ã",
    instrumentIntro: "åŸºæº–éŸ³ã€ãƒ—ãƒªã‚»ãƒƒãƒˆã€ã‚¬ã‚¤ãƒ‰ãŒå¿…è¦ãªå ´åˆã¯æ¥½å™¨ãƒšãƒ¼ã‚¸ã‚’é¸ã³ã¾ã™ã€‚",
    keywords: ["ãƒ¦ãƒ‹ãƒãƒ¼ã‚µãƒ«ãƒãƒ¥ãƒ¼ãƒŠãƒ¼", "ç„¡æ–™éŸ³æ¥½ãƒ„ãƒ¼ãƒ«", "ãƒ¡ãƒˆãƒ­ãƒŽãƒ¼ãƒ ", "Tap BPM", "ã‚³ãƒ¼ãƒ‰ç§»èª¿"],
    groups: [
      { title: "æ¥½å™¨ã‚’èª¿å¾‹", description: "ãƒžã‚¤ã‚¯èª¿å¾‹ã¨æ¥½å™¨åˆ¥ã®åŸºæº–éŸ³ã€‚", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "ãƒªã‚ºãƒ ã¨ BPM", description: "ãƒ¡ãƒˆãƒ­ãƒŽãƒ¼ãƒ ç·´ç¿’ã¨ãƒ†ãƒ³ãƒæ¸¬å®šã€‚", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "ã‚³ãƒ¼ãƒ‰ã¨ç†è«–", description: "ã‚­ãƒ¼å¤‰æ›´ã¨ã‚³ãƒ¼ãƒ‰é€²è¡Œã®ç§»èª¿ã€‚", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "èª¿å¾‹ã«ã¯ã©ã®ãƒ„ãƒ¼ãƒ«ã‚’ä½¿ã„ã¾ã™ã‹ï¼Ÿ", answer: "ã¾ãšãƒ¦ãƒ‹ãƒãƒ¼ã‚µãƒ«ãƒãƒ¥ãƒ¼ãƒŠãƒ¼ã‚’ä½¿ã†ã‹ã€æ­£ç¢ºãªåŸºæº–éŸ³ãŒå¿…è¦ãªã‚‰æ¥½å™¨ãƒšãƒ¼ã‚¸ã‚’é¸ã³ã¾ã™ã€‚" },
      { question: "ãƒžã‚¤ã‚¯éŸ³å£°ã¯éŒ²éŸ³ã•ã‚Œã¾ã™ã‹ï¼Ÿ", answer: "ã„ã„ãˆã€‚éŸ³å£°ã¯ãƒ–ãƒ©ã‚¦ã‚¶å†…ã§ãƒ­ãƒ¼ã‚«ãƒ«è§£æžã•ã‚Œã¾ã™ã€‚" },
      { question: "ã‚¹ãƒžãƒ¼ãƒˆãƒ•ã‚©ãƒ³ã§ä½¿ãˆã¾ã™ã‹ï¼Ÿ", answer: "ã¯ã„ã€‚éŸ³å£°ã¨ãƒžã‚¤ã‚¯ã®è¨±å¯ãŒã‚ã‚‹ãƒ¢ãƒã‚¤ãƒ«ãƒ–ãƒ©ã‚¦ã‚¶ã§ä½¿ãˆã¾ã™ã€‚" }
    ]
  },
  ko: {
    title: "ë¬´ë£Œ ìŒì•… ë„êµ¬",
    description: "ìœ ë‹ˆë²„ì„¤ íŠœë„ˆ, ë©”íŠ¸ë¡œë†ˆ, Tap BPM, ì½”ë“œ ì¡°ì˜®ê¹€ ë„êµ¬.",
    chromaticTitle: "ì˜¨ë¼ì¸ ìœ ë‹ˆë²„ì„¤ íŠœë„ˆ",
    chromaticBody: "ë§ˆì´í¬ë¡œ ê¸°íƒ€, ë² ì´ìŠ¤, ìš°ì¿¨ë ë ˆì™€ ì—¬ëŸ¬ í˜„ì•…ê¸°ë¥¼ ì¡°ìœ¨í•˜ì„¸ìš”. í¬ë¡œë§¤í‹± ë°©ì‹ìœ¼ë¡œ ìŒ, ì£¼íŒŒìˆ˜, ì„¼íŠ¸ ì°¨ì´ë¥¼ í‘œì‹œí•©ë‹ˆë‹¤.",
    chromaticCta: "ìœ ë‹ˆë²„ì„¤ íŠœë„ˆ ì—´ê¸°",
    instrumentIntro: "ê¸°ì¤€ ìŒ, í”„ë¦¬ì…‹, ê´€ë ¨ ê°€ì´ë“œê°€ í•„ìš”í•˜ë©´ íŠ¹ì • ì•…ê¸° íŽ˜ì´ì§€ë¥¼ ì„ íƒí•˜ì„¸ìš”.",
    keywords: ["ìœ ë‹ˆë²„ì„¤ íŠœë„ˆ", "ë¬´ë£Œ ìŒì•… ë„êµ¬", "ë©”íŠ¸ë¡œë†ˆ", "Tap BPM", "ì½”ë“œ ì¡°ì˜®ê¹€"],
    groups: [
      { title: "ì•…ê¸° ì¡°ìœ¨", description: "ë§ˆì´í¬ íŠœë‹ê³¼ ì•…ê¸°ë³„ ê¸°ì¤€ ìŒ.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "ë¦¬ë“¬ê³¼ BPM", description: "ë©”íŠ¸ë¡œë†ˆ ì—°ìŠµê³¼ í…œí¬ ì¸¡ì •.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "ì½”ë“œì™€ ì´ë¡ ", description: "í‚¤ ë³€ê²½ê³¼ ì½”ë“œ ì§„í–‰ ì¡°ì˜®ê¹€.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "íŠœë‹ì—ëŠ” ì–´ë–¤ ë„êµ¬ë¥¼ ì“°ë‚˜ìš”?", answer: "ìœ ë‹ˆë²„ì„¤ íŠœë„ˆë¡œ ì‹œìž‘í•˜ê±°ë‚˜ ì •í™•í•œ ê¸°ì¤€ ìŒì´ í•„ìš”í•˜ë©´ ì•…ê¸° íŽ˜ì´ì§€ë¥¼ ì„ íƒí•˜ì„¸ìš”." },
      { question: "ë§ˆì´í¬ ì˜¤ë””ì˜¤ë¥¼ ë…¹ìŒí•˜ë‚˜ìš”?", answer: "ì•„ë‹ˆìš”. ì˜¤ë””ì˜¤ëŠ” ë¸Œë¼ìš°ì € ì•ˆì—ì„œ ë¡œì»¬ë¡œ ë¶„ì„ë©ë‹ˆë‹¤." },
      { question: "ëª¨ë°”ì¼ì—ì„œë„ ìž‘ë™í•˜ë‚˜ìš”?", answer: "ë„¤. ì˜¤ë””ì˜¤ì™€ ë§ˆì´í¬ ê¶Œí•œì´ ìžˆëŠ” ìµœì‹  ëª¨ë°”ì¼ ë¸Œë¼ìš°ì €ì—ì„œ ìž‘ë™í•©ë‹ˆë‹¤." }
    ]
  },
  pt: {
    title: "Ferramentas musicais grÃ¡tis",
    description: "Afinador universal, metrÃ´nomo, Tap BPM e transpositor de acordes para estudo diÃ¡rio.",
    chromaticTitle: "Afinador universal online",
    chromaticBody: "Use o microfone para afinar guitarra, baixo, ukulele e muitos instrumentos de corda. O afinador trabalha de forma cromÃ¡tica e mostra nota, frequÃªncia e cents.",
    chromaticCta: "Abrir afinador universal",
    instrumentIntro: "Escolha um instrumento especÃ­fico para uma pÃ¡gina com notas de referÃªncia, presets e guias.",
    keywords: ["afinador universal", "ferramentas musicais grÃ¡tis", "metrÃ´nomo online", "tap bpm", "transpositor acordes"],
    groups: [
      { title: "Afinar instrumentos", description: "Para afinar com microfone e usar notas especÃ­ficas.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ritmo e BPM", description: "Para praticar com metrÃ´nomo e calcular tempo.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "Acordes e teoria", description: "Para mudar tonalidade e mover progressÃµes.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Qual ferramenta uso para afinar?", answer: "Comece pelo afinador universal ou escolha a pÃ¡gina do instrumento para notas exatas." },
      { question: "O TuneUniversal grava o microfone?", answer: "NÃ£o. O Ã¡udio Ã© analisado localmente no navegador com Web Audio API." },
      { question: "Funciona no celular?", answer: "Sim, em navegadores modernos com permissÃµes de Ã¡udio e microfone." }
    ]
  },
  ru: {
    title: "Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ðµ Ð¼ÑƒÐ·Ñ‹ÐºÐ°Ð»ÑŒÐ½Ñ‹Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹",
    description: "Ð£Ð½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ‚ÑŽÐ½ÐµÑ€, Ð¼ÐµÑ‚Ñ€Ð¾Ð½Ð¾Ð¼, Tap BPM Ð¸ Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€ Ð°ÐºÐºÐ¾Ñ€Ð´Ð¾Ð².",
    chromaticTitle: "Ð£Ð½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¾Ð½Ð»Ð°Ð¹Ð½-Ñ‚ÑŽÐ½ÐµÑ€",
    chromaticBody: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ Ð¼Ð¸ÐºÑ€Ð¾Ñ„Ð¾Ð½ Ð´Ð»Ñ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð³Ð¸Ñ‚Ð°Ñ€Ñ‹, Ð±Ð°ÑÐ°, ÑƒÐºÑƒÐ»ÐµÐ»Ðµ Ð¸ Ð¼Ð½Ð¾Ð³Ð¸Ñ… ÑÑ‚Ñ€ÑƒÐ½Ð½Ñ‹Ñ… Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð². Ð¢ÑŽÐ½ÐµÑ€ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚ Ñ…Ñ€Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¸ Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÑ‚ Ð½Ð¾Ñ‚Ñƒ, Ñ‡Ð°ÑÑ‚Ð¾Ñ‚Ñƒ Ð¸ Ñ†ÐµÐ½Ñ‚Ñ‹.",
    chromaticCta: "ÐžÑ‚ÐºÑ€Ñ‹Ñ‚ÑŒ ÑƒÐ½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ‚ÑŽÐ½ÐµÑ€",
    instrumentIntro: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚Ð½Ñ‹Ð¹ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚, ÐµÑÐ»Ð¸ Ð½ÑƒÐ¶Ð½Ñ‹ Ð¾Ð¿Ð¾Ñ€Ð½Ñ‹Ðµ Ð½Ð¾Ñ‚Ñ‹, Ð¿Ñ€ÐµÑÐµÑ‚Ñ‹ Ð¸ ÑÐ²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ñ€ÑƒÐºÐ¾Ð²Ð¾Ð´ÑÑ‚Ð²Ð°.",
    keywords: ["ÑƒÐ½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ‚ÑŽÐ½ÐµÑ€", "Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ðµ Ð¼ÑƒÐ·Ñ‹ÐºÐ°Ð»ÑŒÐ½Ñ‹Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹", "Ð¼ÐµÑ‚Ñ€Ð¾Ð½Ð¾Ð¼", "Tap BPM", "Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€ Ð°ÐºÐºÐ¾Ñ€Ð´Ð¾Ð²"],
    groups: [
      { title: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ° Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð²", description: "Ð”Ð»Ñ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ñ‡ÐµÑ€ÐµÐ· Ð¼Ð¸ÐºÑ€Ð¾Ñ„Ð¾Ð½ Ð¸ Ð¾Ð¿Ð¾Ñ€Ð½Ñ‹Ñ… Ð½Ð¾Ñ‚ Ð¿Ð¾ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð°Ð¼.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ð Ð¸Ñ‚Ð¼ Ð¸ BPM", description: "Ð”Ð»Ñ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸ Ñ Ð¼ÐµÑ‚Ñ€Ð¾Ð½Ð¾Ð¼Ð¾Ð¼ Ð¸ Ð¾Ñ†ÐµÐ½ÐºÐ¸ Ñ‚ÐµÐ¼Ð¿Ð°.", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "ÐÐºÐºÐ¾Ñ€Ð´Ñ‹ Ð¸ Ñ‚ÐµÐ¾Ñ€Ð¸Ñ", description: "Ð”Ð»Ñ ÑÐ¼ÐµÐ½Ñ‹ Ñ‚Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¸ Ñ‚Ñ€Ð°Ð½ÑÐ¿Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "ÐšÐ°ÐºÐ¾Ð¹ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸?", answer: "ÐÐ°Ñ‡Ð½Ð¸Ñ‚Ðµ Ñ ÑƒÐ½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ñ‚ÑŽÐ½ÐµÑ€Ð° Ð¸Ð»Ð¸ Ð²Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð´Ð»Ñ Ñ‚Ð¾Ñ‡Ð½Ñ‹Ñ… Ð¾Ð¿Ð¾Ñ€Ð½Ñ‹Ñ… Ð½Ð¾Ñ‚." },
      { question: "TuneUniversal Ð·Ð°Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÑ‚ Ð¼Ð¸ÐºÑ€Ð¾Ñ„Ð¾Ð½?", answer: "ÐÐµÑ‚. ÐÑƒÐ´Ð¸Ð¾ Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€ÑƒÐµÑ‚ÑÑ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾ Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ Ñ‡ÐµÑ€ÐµÐ· Web Audio API." },
      { question: "Ð Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚ Ð»Ð¸ Ð½Ð° Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ðµ?", answer: "Ð”Ð°, Ð² ÑÐ¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ñ… Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ñ‹Ñ… Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°Ñ… Ð¿Ñ€Ð¸ Ð½Ð°Ð»Ð¸Ñ‡Ð¸Ð¸ Ñ€Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹." }
    ]
  },
  zh: {
    title: "å…è´¹éŸ³ä¹å·¥å…·",
    description: "é€šç”¨è°ƒéŸ³å™¨ã€èŠ‚æ‹å™¨ã€Tap BPM å’Œå’Œå¼¦ç§»è°ƒå™¨ã€‚",
    chromaticTitle: "åœ¨çº¿é€šç”¨è°ƒéŸ³å™¨",
    chromaticBody: "ä½¿ç”¨éº¦å…‹é£Žä¸ºå‰ä»–ã€è´æ–¯ã€å°¤å…‹é‡Œé‡Œå’Œå¤šç§å¼¦ä¹å™¨è°ƒéŸ³ã€‚è°ƒéŸ³å™¨æ”¯æŒåŠéŸ³é˜¶è¯†åˆ«ï¼Œå¹¶æ˜¾ç¤ºéŸ³åã€é¢‘çŽ‡å’ŒéŸ³åˆ†åå·®ã€‚",
    chromaticCta: "æ‰“å¼€é€šç”¨è°ƒéŸ³å™¨",
    instrumentIntro: "å¦‚æžœéœ€è¦å‚è€ƒéŸ³ã€é¢„è®¾å’Œç›¸å…³æŒ‡å—ï¼Œè¯·é€‰æ‹©å…·ä½“ä¹å™¨é¡µé¢ã€‚",
    keywords: ["é€šç”¨è°ƒéŸ³å™¨", "å…è´¹éŸ³ä¹å·¥å…·", "èŠ‚æ‹å™¨", "Tap BPM", "å’Œå¼¦ç§»è°ƒå™¨"],
    groups: [
      { title: "ä¹å™¨è°ƒéŸ³", description: "ä½¿ç”¨éº¦å…‹é£Žå’Œä¹å™¨å‚è€ƒéŸ³è°ƒéŸ³ã€‚", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "èŠ‚å¥å’Œ BPM", description: "ç”¨äºŽèŠ‚æ‹å™¨ç»ƒä¹ å’Œé€Ÿåº¦ä¼°ç®—ã€‚", tools: ["metronome", "tap-bpm", "sound-level-meter", "pitch-generator"] },
      { title: "å’Œå¼¦ä¸Žä¹ç†", description: "ç”¨äºŽæ”¹å˜è°ƒæ€§å’Œç§»åŠ¨å’Œå¼¦è¿›è¡Œã€‚", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "è°ƒéŸ³åº”è¯¥ç”¨å“ªä¸ªå·¥å…·ï¼Ÿ", answer: "å…ˆä½¿ç”¨é€šç”¨è°ƒéŸ³å™¨ï¼Œæˆ–é€‰æ‹©å…·ä½“ä¹å™¨é¡µé¢èŽ·å¾—å‡†ç¡®å‚è€ƒéŸ³ã€‚" },
      { question: "TuneUniversal ä¼šå½•åˆ¶éº¦å…‹é£Žå—ï¼Ÿ", answer: "ä¸ä¼šã€‚éŸ³é¢‘é€šè¿‡ Web Audio API åœ¨æµè§ˆå™¨æœ¬åœ°åˆ†æžã€‚" },
      { question: "æ‰‹æœºå¯ä»¥ä½¿ç”¨å—ï¼Ÿ", answer: "å¯ä»¥ï¼Œåœ¨æ”¯æŒéŸ³é¢‘å’Œéº¦å…‹é£Žæƒé™çš„çŽ°ä»£ç§»åŠ¨æµè§ˆå™¨ä¸­ä½¿ç”¨ã€‚" }
    ]
  }
} satisfies Record<BaseLocale, ToolsHubContent>);

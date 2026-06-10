import "server-only";
import { defaultLocale, getContentLocale, isLocale, localeNames, type BaseLocale, type Locale } from "./locales";

export type ToolDictionary = {
  title: string;
  description: string;
  howItWorks: string[];
  faq: { question: string; answer: string }[];
};

export type Dictionary = {
  localeName: string;
  meta: { title: string; description: string };
  nav: { home: string; tools: string; language: string };
  hero: { eyebrow: string; title: string; description: string; cta: string };
  home: { toolHeading: string; faqHeading: string; howHeading: string };
  tool: {
    detectedNote: string;
    frequency: string;
    cents: string;
    flat: string;
    sharp: string;
    inTune: string;
    requestMic: string;
    stopMic: string;
    micError: string;
    micPermissionDenied?: string;
    micNotFound?: string;
    micNotSupported?: string;
    micNeedsSecureContext?: string;
    bpm: string;
    start: string;
    stop: string;
    reset: string;
    tap: string;
    history: string;
    meter: string;
    inputChords: string;
    semitones: string;
    outputChords: string;
  };
  tools: Record<string, ToolDictionary>;
  common: { howItWorks: string; faq: string; otherTools: string };
  cookie: {
    text: string;
    privacy: string;
    accept: string;
    decline: string;
    customize: string;
    savePrefs: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    advertising: string;
    advertisingDesc: string;
  };
};

type DictionaryOverride = Partial<Omit<Dictionary, "meta" | "nav" | "hero" | "home" | "tool" | "common" | "tools">> & {
  meta?: Partial<Dictionary["meta"]>;
  nav?: Partial<Dictionary["nav"]>;
  hero?: Partial<Dictionary["hero"]>;
  home?: Partial<Dictionary["home"]>;
  tool?: Partial<Dictionary["tool"]>;
  common?: Partial<Dictionary["common"]>;
  tools?: Partial<Record<string, Partial<ToolDictionary>>>;
};

const loaders: Record<BaseLocale, () => Promise<Dictionary>> = {
  it: () => import("@/dictionaries/it.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  de: () => import("@/dictionaries/de.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  pt: () => import("@/dictionaries/pt.json").then((m) => m.default),
  zh: () => import("@/dictionaries/zh.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
  ja: () => import("@/dictionaries/ja.json").then((m) => m.default),
  ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
  ar: () => import("@/dictionaries/ar.json").then((m) => m.default)
};

const localeOverrides: Partial<Record<Locale, DictionaryOverride>> = {
  "pt-BR": {
    meta: {
      title: "TuneUniversal - ferramentas musicais grátis",
      description: "Afine instrumentos, pratique ritmo e transpõe acordes com ferramentas musicais grátis e online."
    },
    nav: {
      home: "Início",
      tools: "Ferramentas",
      language: "Idioma"
    },
    hero: {
      eyebrow: "Ferramentas musicais grátis",
      title: "TuneUniversal",
      description: "Uma plataforma rápida para afinação, ritmo e acordes em qualquer dispositivo.",
      cta: "Explorar ferramentas"
    },
    home: {
      toolHeading: "Ferramentas musicais",
      faqHeading: "Perguntas frequentes",
      howHeading: "Como funciona o TuneUniversal"
    },
    tool: {
      history: "Toques recentes",
      meter: "Compasso",
      inputChords: "Entrada de acordes",
      outputChords: "Resultado transposto"
    },
    common: {
      howItWorks: "Como funciona",
      faq: "Perguntas frequentes",
      otherTools: "Outras ferramentas"
    },
    tools: {
      "guitar-tuner": {
        title: "Afinador de guitarra online",
        description: "Use o microfone para afinar guitarra rapidamente, com suporte a afinações comuns e alternativas."
      },
      metronome: {
        title: "Metrônomo online",
        description: "Pratique com BPM ajustável, subdivisões, acentos e compassos comuns."
      },
      "tap-bpm": {
        title: "Contador de Tap BPM",
        description: "Toque junto com a música e calcule o BPM médio em segundos."
      },
      "chord-transposer": {
        title: "Transpositor de acordes",
        description: "Transponha progressões de acordes para cima ou para baixo por semitons."
      },
      "sound-level-meter": {
        title: "Medidor de som online",
        description: "Meça o nível de som estimado em dB com o microfone e sensibilidade ajustável."
      },
      "pitch-generator": {
        title: "Gerador de tom",
        description: "Gere um tom puro de 20 Hz a 20000 Hz para treino auditivo e testes de áudio."
      }
    }
  },
  hi: {
    meta: {
      title: "TuneUniversal - मुफ्त संगीत टूल्स",
      description: "वाद्य यंत्र ट्यून करें, ताल का अभ्यास करें और कॉर्ड्स ट्रांसपोज़ करें मुफ्त ऑनलाइन संगीत टूल्स के साथ।"
    },
    nav: {
      home: "होम",
      tools: "टूल्स",
      language: "भाषा"
    },
    hero: {
      eyebrow: "मुफ्त संगीत टूल्स",
      title: "TuneUniversal",
      description: "ट्यूनिंग, रिदम प्रैक्टिस और कॉर्ड्स के लिए हर डिवाइस पर तेज़ ऑनलाइन प्लेटफ़ॉर्म।",
      cta: "टूल्स देखें"
    },
    home: {
      toolHeading: "संगीत टूल्स",
      faqHeading: "अक्सर पूछे जाने वाले सवाल",
      howHeading: "TuneUniversal कैसे काम करता है"
    },
    tool: {
      detectedNote: "पहचाना गया नोट",
      frequency: "फ्रीक्वेंसी",
      cents: "सेंट्स",
      flat: "नीचा",
      sharp: "ऊँचा",
      inTune: "सही ट्यून",
      requestMic: "माइक्रोफ़ोन चालू करें",
      stopMic: "माइक्रोफ़ोन बंद करें",
      micError: "माइक्रोफ़ोन एक्सेस नहीं मिला। ब्राउज़र परमिशन जाँचें और फिर कोशिश करें।",
      bpm: "BPM",
      start: "शुरू करें",
      stop: "रोकें",
      reset: "रीसेट",
      tap: "टैप",
      history: "हाल के टैप",
      meter: "मीटर",
      inputChords: "कॉर्ड इनपुट",
      semitones: "सेमिटोन",
      outputChords: "ट्रांसपोज़ किया गया आउटपुट"
    },
    common: {
      howItWorks: "यह कैसे काम करता है",
      faq: "सवाल-जवाब",
      otherTools: "अन्य टूल्स"
    },
    tools: {
      "guitar-tuner": {
        title: "ऑनलाइन गिटार ट्यूनर",
        description: "माइक्रोफ़ोन का उपयोग करके गिटार को जल्दी और आसानी से ट्यून करें।"
      },
      metronome: {
        title: "ऑनलाइन मेट्रोनोम",
        description: "एडजस्टेबल BPM, एक्सेंट और सामान्य मीटर के साथ अभ्यास करें।"
      },
      "tap-bpm": {
        title: "टैप BPM काउंटर",
        description: "संगीत के साथ टैप करें और औसत BPM जल्दी निकालें।"
      },
      "chord-transposer": {
        title: "कॉर्ड ट्रांसपोज़र",
        description: "कॉर्ड प्रोग्रेशन को सेमिटोन के हिसाब से ऊपर या नीचे ट्रांसपोज़ करें।"
      },
      "sound-level-meter": {
        title: "ऑनलाइन साउंड लेवल मीटर",
        description: "माइक्रोफ़ोन से अनुमानित dB स्तर को समायोज्य संवेदनशीलता के साथ मापें।"
      },
      "pitch-generator": {
        title: "पिच जनरेटर",
        description: "20 Hz से 20000 Hz तक शुद्ध टोन जनरेट करें, ईयर ट्रेनिंग और ऑडियो टेस्ट के लिए।"
      }
    }
  },
  no: {
    meta: {
      title: "TuneUniversal - gratis musikkverktøy",
      description: "Stem instrumenter, øv på tempo og transponer akkorder med gratis musikkverktøy på nett."
    },
    nav: {
      home: "Hjem",
      tools: "Verktøy",
      language: "Språk"
    },
    hero: {
      eyebrow: "Gratis musikkverktøy",
      title: "TuneUniversal",
      description: "En rask plattform for stemming, rytmetrening og akkordarbeid på alle enheter.",
      cta: "Utforsk verktøy"
    },
    home: {
      toolHeading: "Musikkverktøy",
      faqHeading: "Vanlige spørsmål",
      howHeading: "Slik fungerer TuneUniversal"
    },
    tool: {
      detectedNote: "Registrert tone",
      frequency: "Frekvens",
      cents: "Cents",
      flat: "For lav",
      sharp: "For høy",
      inTune: "I tone",
      requestMic: "Aktiver mikrofon",
      stopMic: "Stopp mikrofon",
      micError: "Mikrofontilgang mislyktes. Sjekk nettlesertillatelsene og prøv igjen.",
      bpm: "BPM",
      start: "Start",
      stop: "Stopp",
      reset: "Nullstill",
      tap: "Trykk",
      history: "Siste trykk",
      meter: "Taktart",
      inputChords: "Akkordinndata",
      semitones: "Semitoner",
      outputChords: "Transponert resultat"
    },
    common: {
      howItWorks: "Slik fungerer det",
      faq: "Vanlige spørsmål",
      otherTools: "Andre verktøy"
    },
    tools: {
      "guitar-tuner": {
        title: "Gitartuner på nett",
        description: "Bruk mikrofonen for å stemme gitar raskt, med støtte for vanlige og alternative stemminger."
      },
      metronome: {
        title: "Metronom på nett",
        description: "Øv med justerbar BPM, underdelinger, aksenter og vanlige taktarter."
      },
      "tap-bpm": {
        title: "Tap BPM-teller",
        description: "Trykk sammen med musikken og beregn gjennomsnittlig BPM på få sekunder."
      },
      "chord-transposer": {
        title: "Akkordtransponering",
        description: "Transponer akkordprogresjoner opp eller ned med semitoner."
      },
      "sound-level-meter": {
        title: "Lydmåler på nett",
        description: "Mål estimert lydnivå i dB med mikrofon og justerbar følsomhet."
      },
      "pitch-generator": {
        title: "Tonegenerator",
        description: "Generer en ren tone fra 20 Hz til 20000 Hz for gehørtrening og lydtester."
      }
    }
  }
};

function applyDictionaryOverride(dictionary: Dictionary, override?: DictionaryOverride, locale?: Locale): Dictionary {
  if (!override) {
    return locale ? { ...dictionary, localeName: localeNames[locale] } : dictionary;
  }

  const mergedTools = Object.fromEntries(
    Object.entries(dictionary.tools).map(([slug, content]) => [slug, { ...content, ...(override.tools?.[slug] ?? {}) }])
  );

  return {
    ...dictionary,
    ...override,
    localeName: locale ? localeNames[locale] : dictionary.localeName,
    meta: { ...dictionary.meta, ...(override.meta ?? {}) },
    nav: { ...dictionary.nav, ...(override.nav ?? {}) },
    hero: { ...dictionary.hero, ...(override.hero ?? {}) },
    home: { ...dictionary.home, ...(override.home ?? {}) },
    tool: { ...dictionary.tool, ...(override.tool ?? {}) },
    common: { ...dictionary.common, ...(override.common ?? {}) },
    tools: mergedTools
  };
}

export async function getDictionary(locale: string | undefined): Promise<Dictionary> {
  const requestedLocale = isLocale(locale) ? locale : defaultLocale;
  const key = getContentLocale(requestedLocale);
  const dictionary = await loaders[key]();

  if (requestedLocale === key && !localeOverrides[requestedLocale]) {
    return dictionary;
  }

  return applyDictionaryOverride(dictionary, localeOverrides[requestedLocale], requestedLocale);
}

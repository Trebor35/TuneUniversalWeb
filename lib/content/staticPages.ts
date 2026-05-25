import type { Locale } from "@/lib/i18n/locales";

export const staticPageSlugs = ["privacy-policy", "cookie-policy", "about"] as const;

export type StaticPageSlug = (typeof staticPageSlugs)[number];

type StaticPageContent = {
  description: string;
  sections: { body: string[]; title: string }[];
  title: string;
};

const commonEmail = "hello@tuneuniversal.com";

const enPages: Record<StaticPageSlug, StaticPageContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: "How TuneUniversal handles privacy for free browser-based music tools.",
    sections: [
      {
        title: "Data we process",
        body: [
          "TuneUniversal is designed to run music tools directly in your browser. Tuner audio is analyzed locally by the Web Audio API and is not uploaded to our servers.",
          "We may process basic technical data such as page requests, device type, browser type and approximate region through hosting, analytics or security services."
        ]
      },
      {
        title: "Microphone access",
        body: [
          "Microphone permission is requested only when you activate a tuner. The browser controls that permission, and you can revoke it at any time from site settings.",
          "We do not intentionally record, store or sell microphone audio."
        ]
      },
      {
        title: "Your choices",
        body: [
          "You can use most tools without an account. You can clear local browser storage to remove saved preferences such as notation system or metronome presets.",
          `For privacy questions, contact ${commonEmail}.`
        ]
      }
    ]
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description: "Information about cookies and local storage used by TuneUniversal.",
    sections: [
      {
        title: "Essential storage",
        body: [
          "The site may use essential browser storage to remember interface preferences and make tools easier to use.",
          "Examples include selected note notation and saved metronome presets."
        ]
      },
      {
        title: "Analytics and ads",
        body: [
          "Future versions may use privacy-aware analytics or advertising partners. If non-essential cookies are introduced, the site should add a consent flow before enabling them where required.",
          "Advertising spaces currently shown in the layout are reserved placements and can be connected to an ad provider later."
        ]
      },
      {
        title: "Managing cookies",
        body: [
          "You can block or delete cookies and local storage from your browser settings. Some saved preferences may reset when you do this."
        ]
      }
    ]
  },
  about: {
    title: "About TuneUniversal",
    description: "A free multilingual collection of practical music tools for tuning, timing and chord work.",
    sections: [
      {
        title: "Mission",
        body: [
          "TuneUniversal helps musicians tune instruments, practice tempo and transpose chords quickly from any modern device.",
          "The project is mobile-first, multilingual and built around lightweight tools that work without installing an app."
        ]
      },
      {
        title: "Tools",
        body: [
          "The first version includes a universal tuner, metronome, tap BPM counter and chord transposer.",
          "More tuning presets, notation systems and educational pages can be added as the library grows."
        ]
      }
    ]
  },
  
};

const localizedTitles: Record<Locale, Partial<Record<StaticPageSlug, Partial<StaticPageContent>>>> = {
  it: {
    "privacy-policy": {
      title: "Privacy Policy",
      description: "Come TuneUniversal gestisce la privacy nei tool musicali gratuiti basati sul browser.",
      sections: [
        {
          title: "Dati trattati",
          body: [
            "TuneUniversal e progettato per eseguire gli strumenti musicali direttamente nel browser. L'audio dell'accordatore viene analizzato localmente tramite Web Audio API e non viene caricato sui nostri server.",
            "Possiamo trattare dati tecnici di base, come richieste di pagina, tipo di dispositivo, browser e area geografica approssimativa, tramite servizi di hosting, sicurezza o analytics."
          ]
        },
        {
          title: "Accesso al microfono",
          body: [
            "Il permesso microfono viene richiesto solo quando attivi un accordatore. Il browser controlla quel permesso e puoi revocarlo in qualsiasi momento dalle impostazioni del sito.",
            "Non registriamo, archiviamo o vendiamo intenzionalmente l'audio del microfono."
          ]
        },
        {
          title: "Le tue scelte",
          body: [
            "Puoi usare la maggior parte degli strumenti senza account. Puoi cancellare la memoria locale del browser per rimuovere preferenze salvate, come sistema di notazione o preset del metronomo.",
            `Per domande sulla privacy, scrivi a ${commonEmail}.`
          ]
        }
      ]
    },
    "cookie-policy": {
      title: "Cookie Policy",
      description: "Informazioni su cookie e memoria locale usati da TuneUniversal.",
      sections: [
        {
          title: "Memoria essenziale",
          body: [
            "Il sito puo usare memoria locale del browser per ricordare preferenze dell'interfaccia e rendere gli strumenti piu comodi da usare.",
            "Esempi: sistema di notazione selezionato e preset salvati del metronomo."
          ]
        },
        {
          title: "Analytics e annunci",
          body: [
            "Versioni future potranno usare analytics rispettosi della privacy o partner pubblicitari. Se saranno introdotti cookie non essenziali, il sito dovra mostrare un consenso dove richiesto.",
            "Gli spazi pubblicitari visibili nel layout sono al momento posizioni riservate, collegabili in futuro a un provider pubblicitario."
          ]
        },
        {
          title: "Gestione dei cookie",
          body: [
            "Puoi bloccare o cancellare cookie e memoria locale dalle impostazioni del browser. Alcune preferenze salvate potrebbero azzerarsi."
          ]
        }
      ]
    },
    about: {
      title: "Chi siamo",
      description: "Una raccolta gratuita e multilingua di strumenti musicali pratici per accordatura, tempo e accordi.",
      sections: [
        {
          title: "Missione",
          body: [
            "TuneUniversal aiuta musicisti e studenti ad accordare strumenti, studiare il tempo e trasporre accordi rapidamente da qualsiasi dispositivo moderno.",
            "Il progetto e mobile-first, multilingua e costruito intorno a strumenti leggeri che funzionano senza installare app."
          ]
        },
        {
          title: "Strumenti",
          body: [
            "La prima versione include accordatore universale, metronomo, conta BPM tap e traspositore accordi.",
            "In futuro si potranno aggiungere accordature, sistemi di notazione e pagine didattiche dedicate."
          ]
        }
      ]
    },
  },
  en: {},
  fr: {
    "privacy-policy": { title: "Politique de confidentialite", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Politique relative aux cookies", description: enPages["cookie-policy"].description },
    about: { title: "A propos", description: enPages.about.description },
  },
  de: {
    "privacy-policy": { title: "Datenschutzrichtlinie", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Cookie-Richtlinie", description: enPages["cookie-policy"].description },
    about: { title: "Uber uns", description: enPages.about.description },
  },
  es: {
    "privacy-policy": { title: "Politica de privacidad", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Politica de cookies", description: enPages["cookie-policy"].description },
    about: { title: "Acerca de", description: enPages.about.description },
  },
  pt: {
    "privacy-policy": { title: "Politica de privacidade", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Politica de cookies", description: enPages["cookie-policy"].description },
    about: { title: "Sobre", description: enPages.about.description },
  },
  zh: {
    "privacy-policy": { title: "éšç§æ”¿ç­–", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Cookie æ”¿ç­–", description: enPages["cookie-policy"].description },
    about: { title: "å…³äºŽ", description: enPages.about.description },
  },
  ru: {
    "privacy-policy": { title: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° cookie", description: enPages["cookie-policy"].description },
    about: { title: "Ðž Ð¿Ñ€Ð¾ÐµÐºÑ‚Ðµ", description: enPages.about.description },
  },
  ja: {
    "privacy-policy": { title: "ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Cookie ãƒãƒªã‚·ãƒ¼", description: enPages["cookie-policy"].description },
    about: { title: "æ¦‚è¦", description: enPages.about.description },
  },
  ko: {
    "privacy-policy": { title: "ê°œì¸ì •ë³´ ì²˜ë¦¬ë°©ì¹¨", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "ì¿ í‚¤ ì •ì±…", description: enPages["cookie-policy"].description },
    about: { title: "ì†Œê°œ", description: enPages.about.description },
  },
  ar: {
    "privacy-policy": { title: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©", description: enPages["privacy-policy"].description },
    "cookie-policy": { title: "Ø³ÙŠØ§Ø³Ø© Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·", description: enPages["cookie-policy"].description },
    about: { title: "Ø­ÙˆÙ„", description: enPages.about.description },
  }
};

export function isStaticPageSlug(value: string | undefined): value is StaticPageSlug {
  return Boolean(value && staticPageSlugs.includes(value as StaticPageSlug));
}

export function getStaticPageContent(locale: Locale, slug: StaticPageSlug): StaticPageContent {
  const base = enPages[slug];
  const localized = localizedTitles[locale][slug];
  return localized ? { ...base, ...localized } : base;
}

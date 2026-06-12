import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
type ExtendedLocale = "nl" | "pl" | "tr" | "cs" | "sv" | "pt-BR" | "hi" | "no";

export const staticPageSlugs = ["privacy-policy", "cookie-policy", "about", "contact", "terms-of-use"] as const;

export type StaticPageSlug = (typeof staticPageSlugs)[number];

export type StaticPageSectionItem = {
  body: string[];
  title: string;
};

export type StaticPageSection = {
  body: string[];
  items?: StaticPageSectionItem[];
  title: string;
};

export type StaticPageFaqItem = {
  answer: string;
  question: string;
};

export type StaticPageCta = {
  href: string;
  label: string;
};

export type StaticPageContent = {
  ctas?: StaticPageCta[];
  description: string;
  faq?: StaticPageFaqItem[];
  seoDescription?: string;
  seoTitle?: string;
  sections: StaticPageSection[];
  title: string;
};

const supportEmail = "contact@tuneuniversal.com";
const commonEmail = supportEmail;

const enPages: Record<StaticPageSlug, StaticPageContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: "Learn how TuneUniversal handles privacy, analytics, advertising and consent for its free browser-based music tools.",
    seoTitle: "Privacy Policy | TuneUniversal",
    seoDescription:
      "Read TuneUniversal's Privacy Policy for Google Analytics, Google AdSense, cookies, GDPR, CCPA and anonymous data handling.",
    sections: [
      {
        title: "Overview",
        body: [
          "TuneUniversal is a browser-based platform with free music tools such as online tuners, metronome utilities, audio tools and educational resources. This Privacy Policy explains what data may be processed when you browse the site and use its features.",
          "The platform is designed to keep core music activity lightweight. Tuner and audio analysis features work primarily in the browser, and the project aims to minimize unnecessary collection of personal data."
        ]
      },
      {
        title: "Microphone access and audio analysis",
        body: [
          "Microphone permission is requested only when you actively enable a tool that needs it, such as an instrument tuner, sound meter or pitch-related utility. Permission is managed by your browser and can be revoked at any time from browser or site settings.",
          "TuneUniversal does not intentionally upload, store or sell raw microphone recordings as part of normal tool use. Pitch detection and sound-level calculations are intended to happen locally in the browser whenever possible."
        ]
      },
      {
        title: "Analytics and anonymous usage data",
        body: [
          "TuneUniversal may use analytics services such as Google Analytics to understand how the site is used, which pages perform best and how the experience can be improved. These services may collect information such as page views, approximate location, device category, browser type, referring source and general interaction data.",
          "The goal of this data is to measure site performance and improve the quality of the tools, not to build intrusive personal profiles. Where possible, data is handled in aggregated or pseudonymous form."
        ]
      },
      {
        title: "Advertising and third-party services",
        body: [
          "TuneUniversal may display advertising through services such as Google AdSense. Advertising partners can use cookies or similar technologies to help measure ad performance, limit repeated ads and provide more relevant advertising where permitted.",
          "If third-party advertising is active, those partners may process technical and usage data according to their own privacy documentation. TuneUniversal may also use hosting, security, CDN and performance services that process limited technical data to deliver the website safely."
        ]
      },
      {
        title: "Cookies, consent and legal frameworks",
        body: [
          "TuneUniversal may use essential cookies, analytics cookies and advertising cookies. Where legally required, a consent mechanism can be used before non-essential cookies are activated.",
          "For users in the European Economic Area, the United Kingdom and similar jurisdictions, TuneUniversal aims to respect GDPR principles such as transparency, minimization and user choice. For users in California, TuneUniversal also aims to support CCPA-style disclosure and control expectations where applicable."
        ]
      },
      {
        title: "Your choices and contact",
        body: [
          "Most tools can be used without creating an account. You can clear browser storage, adjust cookie preferences through your browser or future consent tools, and revoke microphone permissions whenever you choose.",
          `For privacy questions or policy requests, contact ${supportEmail}.`
        ]
      }
    ]
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description: "Understand how TuneUniversal uses essential cookies, analytics cookies and advertising cookies across its music tools.",
    seoTitle: "Cookie Policy | TuneUniversal",
    seoDescription:
      "Read TuneUniversal's Cookie Policy covering essential cookies, analytics cookies, advertising cookies and consent management.",
    sections: [
      {
        title: "What this policy covers",
        body: [
          "This Cookie Policy explains how TuneUniversal may use cookies, local storage and similar technologies to keep the site working, measure performance and support advertising where enabled.",
          "Some technologies are essential for functionality, while others are optional and may depend on user consent in regions where consent is required."
        ]
      },
      {
        title: "Essential cookies and local storage",
        body: [
          "Essential storage may be used to remember interface preferences, maintain language settings, store selected notation systems, keep metronome presets or preserve other core user choices that improve the experience.",
          "These technologies help the site function properly and are generally not used to identify you personally."
        ]
      },
      {
        title: "Analytics cookies",
        body: [
          "Analytics tools such as Google Analytics may use cookies or similar identifiers to measure page performance, understand traffic sources, estimate audience behavior and improve the quality of the platform.",
          "These cookies help TuneUniversal understand what musicians use most, which pages load well and where the site experience can be improved."
        ]
      },
      {
        title: "Advertising cookies",
        body: [
          "If TuneUniversal serves ads through Google AdSense or similar providers, advertising cookies may be used to measure ad effectiveness, reduce repetitive ads and support ad relevance where allowed by law.",
          "Advertising features may rely on third-party technology and can be subject to those providers' own policies."
        ]
      },
      {
        title: "Consent management and browser controls",
        body: [
          "When required, TuneUniversal may present a consent message that lets users manage non-essential cookies before they are activated. You can also block or delete cookies from your browser settings at any time.",
          "Disabling cookies may reset saved preferences or reduce some non-essential features, but the site should remain usable for its main functions."
        ]
      }
    ]
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with TuneUniversal for questions, suggestions or feedback about the project and its music tools.",
    seoTitle: "Contact Us | TuneUniversal",
    seoDescription: "Contact TuneUniversal for questions, suggestions or feedback about our online tuner, metronome and music tools.",
    sections: [
      {
        title: "How to contact TuneUniversal",
        body: [
          "Have questions, suggestions or feedback about TuneUniversal? We'd love to hear from you.",
          `Email: ${supportEmail}`,
          "Email address will be updated when support services become available."
        ]
      },
      {
        title: "What to use this page for",
        body: [
          "You can use this page to report issues, suggest new music tools, point out translation problems or share ideas that could improve the platform for musicians around the world.",
          "TuneUniversal is still expanding, so feedback is especially helpful when it relates to accessibility, trust, AdSense readiness, SEO quality or the practical usefulness of the tools."
        ]
      }
    ],
    ctas: [
      { href: "/about", label: "Learn more about TuneUniversal" },
      { href: "/tools", label: "Explore music tools" }
    ]
  },
  "terms-of-use": {
    title: "Terms of Use",
    description: "Read the basic terms for using TuneUniversal and its free online music tools.",
    seoTitle: "Terms of Use | TuneUniversal",
    seoDescription: "Read TuneUniversal's Terms of Use for free music tools, service limitations, intellectual property and future updates.",
    sections: [
      {
        title: "Free use of the services",
        body: [
          "TuneUniversal provides free browser-based music tools, guides and educational pages for general use. You may use the site for personal, educational and routine practice purposes as long as your use is lawful and does not interfere with the platform.",
          "The site may evolve over time, and some tools, features or layouts may be updated, expanded or removed as the project grows."
        ]
      },
      {
        title: "Accuracy and informational use",
        body: [
          "TuneUniversal aims to provide useful and reliable music tools, but no tool or page should be treated as an absolute professional guarantee. Pitch analysis, tempo estimation, sound-level estimates and educational content are offered for general guidance and practical use.",
          "Users remain responsible for how they apply the information and tools in lessons, rehearsal, performance, recording or technical environments."
        ]
      },
      {
        title: "Limitation of liability",
        body: [
          "TuneUniversal is provided on an as-is basis to the extent permitted by applicable law. The project does not promise uninterrupted availability, error-free operation or suitability for every musical, educational or technical context.",
          "TuneUniversal will not be responsible for indirect losses, data loss, device problems or other consequences arising from the use or inability to use the site, except where liability cannot be excluded by law."
        ]
      },
      {
        title: "Intellectual property",
        body: [
          "The TuneUniversal brand, site structure, original interface elements, original text and original educational materials remain protected by applicable intellectual property rules unless otherwise stated.",
          "Public-domain educational songs or openly usable reference material may appear in dedicated sections, but that does not create permission to copy protected third-party works into the site or reuse site content in ways not allowed by law."
        ]
      },
      {
        title: "Future changes",
        body: [
          "TuneUniversal may update these Terms of Use in the future to reflect new features, legal obligations, analytics changes, advertising changes or improvements to the service.",
          "When important changes are made, the revised version on the site becomes the reference version for continued use."
        ]
      }
    ],
    ctas: [
      { href: "/privacy-policy", label: "Read the Privacy Policy" },
      { href: "/cookie-policy", label: "Read the Cookie Policy" }
    ]
  },
  about: {
    title: "About TuneUniversal",
    description: "Learn what TuneUniversal is, why the project exists and how its free music tools help musicians practise, tune and study online.",
    seoTitle: "About TuneUniversal | Free Music Tools Online",
    seoDescription: "Learn about TuneUniversal, its mission, free online tuner, metronome and music tools for musicians everywhere.",
    sections: [
      {
        title: "Introduction to TuneUniversal",
        body: [
          "TuneUniversal is a free online platform built for musicians who want practical tools that are fast, simple and available from any modern device. The project brings together an online tuner, instrument-specific tuners, a metronome, Tap BPM, a sound meter, chord transposition utilities and educational guides in one place.",
          "Instead of forcing musicians to install different apps for each small task, TuneUniversal aims to make common music workflows easier directly in the browser. Whether someone needs an online tuner before rehearsal, a guitar tuner for daily practice, a metronome online for rhythm training or quick music tools for lessons, the goal is to keep everything accessible and ready in seconds."
        ]
      },
      {
        title: "Our mission",
        body: [
          "The mission of TuneUniversal is to make useful music technology available to as many people as possible. Good tuning, rhythm control and basic music education should not depend on expensive software, complex setup or a specific operating system.",
          "That is why the platform focuses on free music tools that are clear enough for beginners, flexible enough for regular practice and fast enough for everyday use. The long-term vision is to grow into a trusted international reference point for tuning, rhythm, theory support and browser-based practice tools."
        ]
      },
      {
        title: "Why TuneUniversal was created",
        body: [
          "Many musicians only need a quick and reliable utility: a free tuner before a lesson, a metronome online during practice, a Tap BPM tool to check a song tempo or a chord transposer to move a progression into a better key. Too often, those tasks are split across multiple apps, cluttered websites or tools that are hard to use on mobile.",
          "TuneUniversal was created to reduce that friction. The idea is simple: offer lightweight, multilingual tools that open quickly, work in the browser and solve real musical needs without unnecessary steps. This approach also supports music education by giving students and teachers easy access to practical tools during practice sessions, rehearsals and lessons."
        ]
      },
      {
        title: "What you can find on TuneUniversal",
        body: [
          "TuneUniversal is designed as a growing library of useful digital tools and educational resources for musicians. The platform already includes multiple categories that work together."
        ],
        items: [
          {
            title: "Online tuning tools",
            body: [
              "The platform includes a universal online tuner plus dedicated pages such as guitar tuner, bass tuner, ukulele tuner and violin tuner. These tools are designed for quick access, microphone-based pitch detection and support for common tuning workflows."
            ]
          },
          {
            title: "Rhythm and tempo tools",
            body: [
              "Musicians can use a metronome online with adjustable BPM, practice options and time-signature support, plus Tap BPM for estimating tempo from a song or performance."
            ]
          },
          {
            title: "Audio and utility tools",
            body: [
              "TuneUniversal also includes tools such as a sound meter, chord transposer and other small browser-based helpers that support practice, setup and listening tasks."
            ]
          },
          {
            title: "Guides and music education resources",
            body: [
              "Beyond tools, the site includes tuning guides, practical articles and music education content that help beginners and intermediate players understand what they are doing, not just click buttons."
            ]
          }
        ]
      },
      {
        title: "A project built for musicians at every level",
        body: [
          "One of the strengths of TuneUniversal is that it is not limited to one type of user. The platform is meant to be useful at different stages of a musical journey."
        ],
        items: [
          {
            title: "Beginners",
            body: [
              "Beginners need clarity, confidence and tools that do not feel intimidating. A simple instrument tuner, visual feedback and step-by-step guides help them build good habits from the start."
            ]
          },
          {
            title: "Students",
            body: [
              "Students often move between practice routines, assignments and lessons. Fast access to guitar tuning, metronome practice and chord support saves time and keeps the focus on learning."
            ]
          },
          {
            title: "Teachers",
            body: [
              "Teachers benefit from tools that can be opened instantly on desktop or mobile during a lesson. This makes TuneUniversal useful as a teaching companion for rhythm work, tuning demonstrations and quick musical checks."
            ]
          },
          {
            title: "Professional musicians",
            body: [
              "Professional musicians may already use advanced hardware and software, but they still need fast browser tools for quick reference, rehearsals, travel situations and lightweight daily work."
            ]
          }
        ]
      },
      {
        title: "Accessible everywhere",
        body: [
          "TuneUniversal is built around accessibility and flexibility. The platform is designed to work across modern browsers so musicians can open their preferred tools wherever they are."
        ],
        items: [
          {
            title: "Desktop",
            body: [
              "On desktop, the site supports longer practice sessions, lesson preparation and side-by-side use with scores, DAWs or teaching materials."
            ]
          },
          {
            title: "Tablet",
            body: [
              "On tablet, TuneUniversal works well as a rehearsal or classroom companion, with touch-friendly controls and readable layouts."
            ]
          },
          {
            title: "Smartphone",
            body: [
              "On smartphone, it becomes a fast pocket toolkit for tuning before playing, checking BPM, opening a guide or using quick music tools on the go."
            ]
          }
        ]
      },
      {
        title: "The future of TuneUniversal",
        body: [
          "TuneUniversal is not a fixed collection of pages. It is an expanding project that can continue to grow with new instrument support, more tuning presets, deeper educational content and better digital tools for musicians in different languages.",
          "Future development can include broader guide coverage, additional instrument tuner pages, more music education content, stronger rhythm tools, richer browser-based utilities and a clearer connection between practical tools and learning resources. The direction is to keep the platform lightweight, useful and increasingly authoritative over time."
        ]
      }
    ],
    faq: [
      {
        question: "What is TuneUniversal?",
        answer:
          "TuneUniversal is a free multilingual platform with browser-based music tools such as an online tuner, guitar tuner, metronome online, Tap BPM, sound meter and chord transposer."
      },
      {
        question: "Who is TuneUniversal for?",
        answer:
          "The site is designed for beginners, students, teachers and professional musicians who need fast and practical music tools on desktop, tablet or smartphone."
      },
      {
        question: "Do I need to install an app to use TuneUniversal?",
        answer:
          "No. TuneUniversal is designed to work directly in the browser, so most tools can be used without installing extra software."
      },
      {
        question: "Is TuneUniversal only an online tuner?",
        answer:
          "No. The platform includes an instrument tuner family, a metronome online, Tap BPM, a sound meter, a chord transposer, tuning guides and music education resources."
      },
      {
        question: "Will TuneUniversal keep adding new music tools?",
        answer:
          "Yes. The project is built to expand over time with new tools, new educational pages and more support for musicians in multiple languages."
      }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Open the online tuner" },
      { href: "/tools/metronome", label: "Use the metronome" },
      { href: "/tools/tap-bpm", label: "Try Tap BPM" },
      { href: "/guides", label: "Explore music guides" }
    ]
  },
  
};

const localizedTitles: Record<BaseLocale, Partial<Record<StaticPageSlug, Partial<StaticPageContent>>>> = {
  it: {
    "privacy-policy": {
      title: "Privacy Policy",
      description: "Come TuneUniversal gestisce privacy, analytics, pubblicita e consenso nei suoi strumenti musicali gratuiti online.",
      seoTitle: "Privacy Policy | TuneUniversal",
      seoDescription:
        "Leggi la Privacy Policy di TuneUniversal per Google Analytics, Google AdSense, cookie, GDPR, CCPA e dati anonimi.",
      sections: [
        {
          title: "Panoramica",
          body: [
            "TuneUniversal e una piattaforma musicale online con strumenti gratuiti come accordatori, metronomo, tool audio e risorse educative. Questa Privacy Policy spiega quali dati possono essere trattati quando navighi il sito o usi le sue funzioni.",
            "Il progetto e pensato per ridurre al minimo la raccolta di dati non necessari e per mantenere l'esperienza semplice, veloce e accessibile da browser."
          ]
        },
        {
          title: "Accesso al microfono",
          body: [
            "Il permesso microfono viene richiesto solo quando attivi un accordatore. Il browser controlla quel permesso e puoi revocarlo in qualsiasi momento dalle impostazioni del sito.",
            "TuneUniversal non carica, registra o vende intenzionalmente audio grezzo del microfono come parte del normale utilizzo degli strumenti."
          ]
        },
        {
          title: "Analytics e dati anonimi",
          body: [
            "Il sito puo usare servizi di analytics, inclusi strumenti come Google Analytics, per misurare pagine visitate, tipologia di dispositivo, sorgenti di traffico e uso generale del progetto.",
            "Quando possibile, questi dati vengono gestiti in forma aggregata o pseudonimizzata per migliorare prestazioni, struttura e utilita del sito."
          ]
        },
        {
          title: "Pubblicita e servizi di terze parti",
          body: [
            "TuneUniversal puo integrare pubblicita tramite servizi come Google AdSense. Questi provider possono usare cookie o tecnologie simili per misurare gli annunci e gestire la frequenza di visualizzazione.",
            "Il sito puo inoltre usare servizi di hosting, sicurezza, CDN o performance che trattano dati tecnici strettamente necessari alla consegna del servizio."
          ]
        },
        {
          title: "GDPR, CCPA e consenso",
          body: [
            "Per gli utenti nello Spazio Economico Europeo e in altre aree dove richiesto, TuneUniversal punta a rispettare principi come trasparenza, minimizzazione dei dati e gestione del consenso per i cookie non essenziali.",
            "Per utenti soggetti a regole come il CCPA, il sito mira a fornire una descrizione chiara dei dati trattati e delle scelte disponibili."
          ]
        },
        {
          title: "Le tue scelte e contatti",
          body: [
            "Puoi usare la maggior parte degli strumenti senza account. Puoi cancellare la memoria locale del browser, modificare le impostazioni cookie nel browser e revocare in qualsiasi momento i permessi del microfono.",
            `Per domande sulla privacy, scrivi a ${supportEmail}.`
          ]
        }
      ]
    },
    "cookie-policy": {
      title: "Cookie Policy",
      description: "Informazioni su cookie essenziali, analytics, cookie pubblicitari e gestione del consenso su TuneUniversal.",
      seoTitle: "Cookie Policy | TuneUniversal",
      seoDescription:
        "Scopri come TuneUniversal usa cookie essenziali, analytics, cookie pubblicitari e strumenti di consenso.",
      sections: [
        {
          title: "Cosa copre questa policy",
          body: [
            "Questa Cookie Policy spiega come TuneUniversal puo usare cookie, memoria locale e tecnologie simili per far funzionare il sito, misurarne l'uso e supportare eventuali attivita pubblicitarie.",
            "Alcuni strumenti sono essenziali per il funzionamento, altri possono essere facoltativi e soggetti a consenso."
          ]
        },
        {
          title: "Cookie essenziali",
          body: [
            "TuneUniversal puo usare cookie tecnici o memoria locale per ricordare lingua, preferenze dell'interfaccia, sistema di notazione, preset del metronomo e altre impostazioni necessarie a un uso piu comodo del sito.",
            "Questi strumenti servono soprattutto a mantenere l'esperienza stabile e coerente."
          ]
        },
        {
          title: "Cookie analitici",
          body: [
            "Servizi di analytics come Google Analytics possono usare cookie o identificatori simili per misurare pagine visitate, prestazioni dei contenuti e comportamento generale degli utenti sul sito.",
            "Queste informazioni aiutano TuneUniversal a migliorare i music tools e la struttura delle pagine."
          ]
        },
        {
          title: "Cookie pubblicitari",
          body: [
            "Se il sito mostra annunci tramite Google AdSense o servizi simili, possono essere usati cookie pubblicitari per misurare il rendimento degli annunci, limitarne la ripetizione e supportare una migliore rilevanza dove consentito.",
            "Queste tecnologie possono dipendere da provider di terze parti e dalle rispettive policy."
          ]
        },
        {
          title: "Gestione del consenso",
          body: [
            "Dove richiesto dalla normativa, TuneUniversal puo mostrare un messaggio di consenso prima di attivare cookie non essenziali. In aggiunta, puoi sempre bloccare o cancellare cookie e memoria locale dalle impostazioni del browser.",
            "Disattivare alcuni cookie puo comportare il reset di preferenze salvate o la riduzione di alcune funzioni non essenziali."
          ]
        }
      ]
    },
    contact: {
      title: "Contatti",
      description: "Contatta TuneUniversal per domande, suggerimenti o feedback sul progetto e sui suoi strumenti musicali online.",
      seoTitle: "Contatti | TuneUniversal",
      seoDescription:
        "Contatta TuneUniversal per domande, suggerimenti o feedback su accordatore online, metronomo e altri music tools.",
      sections: [
        {
          title: "Contatta TuneUniversal",
          body: [
            "Hai domande, suggerimenti o feedback su TuneUniversal? Saremo felici di leggerli.",
            `Email: ${supportEmail}`,
            "L'indirizzo email potra essere aggiornato quando saranno disponibili servizi di supporto piu strutturati."
          ]
        },
        {
          title: "Quando usare questa pagina",
          body: [
            "Puoi usare questa pagina per segnalare problemi, suggerire nuovi strumenti musicali, indicare errori nelle traduzioni o proporre miglioramenti utili per musicisti, studenti e insegnanti.",
            "I feedback relativi ad accessibilita, fiducia, esperienza mobile, AdSense readiness e qualita generale del sito sono particolarmente utili."
          ]
        }
      ],
      ctas: [
        { href: "/about", label: "Scopri il progetto" },
        { href: "/tools", label: "Esplora gli strumenti" }
      ]
    },
    "terms-of-use": {
      title: "Termini di utilizzo",
      description: "Condizioni di base per l'uso gratuito degli strumenti musicali online di TuneUniversal.",
      seoTitle: "Termini di utilizzo | TuneUniversal",
      seoDescription:
        "Leggi i termini di utilizzo di TuneUniversal per strumenti gratuiti, limiti di responsabilita, proprieta intellettuale e aggiornamenti futuri.",
      sections: [
        {
          title: "Uso gratuito dei servizi",
          body: [
            "TuneUniversal offre strumenti musicali, guide e risorse educative accessibili gratuitamente via browser per uso personale, didattico e pratico, nel rispetto della legge e del normale funzionamento della piattaforma.",
            "Il sito puo evolvere nel tempo e alcune funzioni, strumenti o sezioni possono essere aggiornati, ampliati o rimossi."
          ]
        },
        {
          title: "Accuratezza delle informazioni",
          body: [
            "TuneUniversal cerca di offrire strumenti affidabili, ma contenuti, stime di BPM, misurazioni audio, accordature e materiali educativi devono essere considerati come supporto pratico e informativo, non come garanzia assoluta per ogni contesto professionale o tecnico.",
            "Ogni utente resta responsabile dell'uso che fa degli strumenti durante studio, lezioni, prove, performance o registrazioni."
          ]
        },
        {
          title: "Limitazione di responsabilita",
          body: [
            "Il sito viene fornito, nei limiti consentiti dalla legge, cosi com'e. TuneUniversal non garantisce disponibilita continua, assenza totale di errori o perfetta idoneita per ogni esigenza specifica.",
            "TuneUniversal non risponde di perdite indirette, problemi tecnici, perdita di dati o conseguenze derivanti dall'uso o dall'impossibilita di usare il sito, salvo quanto non escludibile per legge."
          ]
        },
        {
          title: "Proprieta intellettuale",
          body: [
            "Brand, struttura del sito, testi originali, elementi originali dell'interfaccia e materiali educativi originali di TuneUniversal restano protetti dalle regole applicabili sulla proprieta intellettuale, salvo diversa indicazione.",
            "Eventuali materiali di pubblico dominio o apertamente riutilizzabili presenti sul sito non autorizzano l'inserimento o la ripubblicazione di opere protette di terzi."
          ]
        },
        {
          title: "Modifiche future ai servizi",
          body: [
            "TuneUniversal puo aggiornare questi termini in futuro per riflettere nuove funzioni, obblighi legali, cambiamenti negli analytics, nelle policy pubblicitarie o nell'organizzazione del progetto.",
            "La versione pubblicata sul sito e la versione di riferimento per l'uso continuato dei servizi."
          ]
        }
      ],
      ctas: [
        { href: "/privacy-policy", label: "Leggi la Privacy Policy" },
        { href: "/cookie-policy", label: "Leggi la Cookie Policy" }
      ]
    },
    about: {
      title: "Chi siamo",
      description: "Scopri cos'è TuneUniversal, perché è nato e come aiuta musicisti di tutto il mondo con strumenti musicali online gratuiti.",
      seoTitle: "Chi siamo | TuneUniversal",
      seoDescription: "Scopri TuneUniversal: online tuner, guitar tuner, metronomo online e music tools gratuiti per musicisti di ogni livello.",
      sections: [
        {
          title: "Introduzione a TuneUniversal",
          body: [
            "TuneUniversal è una piattaforma online gratuita pensata per musicisti, studenti, insegnanti e appassionati che cercano strumenti musicali semplici, veloci e accessibili da qualsiasi dispositivo. Il progetto riunisce in un unico spazio un online tuner, accordatori dedicati per diversi strumenti, un metronomo online, Tap BPM, un fonometro, un chord transposer e contenuti educativi utili per lo studio quotidiano.",
            "L'idea alla base del sito è molto concreta: offrire strumenti musicali digitali che risolvano problemi reali senza costringere l'utente a installare app, creare account o passare da un sito all'altro. Quando serve un guitar tuner rapido, un instrument tuner per accordare prima di una prova, un metronome online per lavorare sul tempo o una risorsa di music education per capire meglio accordature e teoria, TuneUniversal vuole essere la risposta più immediata e affidabile."
          ]
        },
        {
          title: "La nostra missione",
          body: [
            "La missione di TuneUniversal è rendere più semplice l'accesso a strumenti musicali utili, gratuiti e ben progettati. L'accordatura, il controllo del tempo, la gestione degli accordi e l'apprendimento musicale di base non dovrebbero dipendere da software costosi o da flussi complicati.",
            "Per questo il progetto punta su music tools veloci da aprire, facili da capire e concreti da usare. L'obiettivo non è riempire il sito di funzioni inutili, ma costruire una piattaforma affidabile che aiuti davvero chi suona a lavorare meglio ogni giorno, sia che stia iniziando ora sia che abbia già una pratica avanzata."
          ]
        },
        {
          title: "Perché è nato TuneUniversal",
          body: [
            "Molti musicisti hanno bisogno di strumenti rapidi per attività molto specifiche: accordare uno strumento prima di una lezione, controllare il BPM di un brano, studiare con il metronomo, trasporre una progressione o verificare un'accordatura alternativa. Spesso però queste esigenze vengono coperte da strumenti sparsi, app separate o pagine lente e poco chiare, soprattutto da smartphone.",
            "TuneUniversal è nato proprio per ridurre questa frammentazione. Il progetto parte dall'idea che una piattaforma musicale online possa essere utile davvero solo se è leggera, leggibile, multilingua e orientata alla pratica. In questo senso il sito non vuole essere soltanto un free tuner, ma un ambiente di lavoro semplice per attività musicali frequenti e immediate."
          ]
        },
        {
          title: "Cosa puoi trovare su TuneUniversal",
          body: [
            "La piattaforma è organizzata per offrire strumenti utili sia nel momento dell'esecuzione sia nello studio quotidiano. Ogni area è pensata per collegarsi alle altre, così l'utente può passare rapidamente dalla teoria alla pratica."
          ],
          items: [
            {
              title: "Accordatori online",
              body: [
                "TuneUniversal include un accordatore universale e accordatori dedicati come guitar tuner, accordatore per basso, accordatore per ukulele, accordatore per violino e pagine per numerosi altri strumenti. L'obiettivo è offrire un instrument tuner chiaro e rapido per diversi contesti musicali."
              ]
            },
            {
              title: "Metronomo e controllo del tempo",
              body: [
                "Il metronomo online aiuta a lavorare su BPM, suddivisioni, accenti e pratica ritmica. A questo si aggiunge Tap BPM, utile per trovare velocemente il tempo di un brano o impostare una sessione di studio in modo più preciso."
              ]
            },
            {
              title: "Strumenti audio e utility musicali",
              body: [
                "Tra gli strumenti presenti ci sono anche fonometro, chord transposer, pitch generator e altre utility musicali pensate per supportare studio, ascolto, accordature e lavoro armonico."
              ]
            },
            {
              title: "Guide e risorse educative",
              body: [
                "TuneUniversal include guide all'accordatura, contenuti su accordature standard e alternative, risorse pratiche per music education e pagine che aiutano a capire meglio strumenti, tempo e teoria musicale."
              ]
            }
          ]
        },
        {
          title: "Un progetto pensato per musicisti di ogni livello",
          body: [
            "Una delle caratteristiche più importanti di TuneUniversal è la sua utilità trasversale. Il sito è costruito per accompagnare esigenze diverse senza rendere l'esperienza complicata."
          ],
          items: [
            {
              title: "Principianti",
              body: [
                "Chi inizia ha bisogno di strumenti chiari, istruzioni semplici e feedback immediati. Un online tuner leggibile, una guida pratica e un metronome online intuitivo aiutano a costruire buone basi fin dall'inizio."
              ]
            },
            {
              title: "Studenti",
              body: [
                "Gli studenti hanno bisogno di passare velocemente da esercizi tecnici a brani, accordature e lavoro sul ritmo. Avere più music tools nello stesso ambiente riduce attrito e perdita di tempo."
              ]
            },
            {
              title: "Insegnanti",
              body: [
                "Gli insegnanti possono usare il sito come supporto immediato durante lezioni, laboratori e spiegazioni. Uno strumento accessibile via browser è utile quando serve mostrare rapidamente un'accordatura, una pulsazione o una trasposizione."
              ]
            },
            {
              title: "Musicisti professionisti",
              body: [
                "Anche chi lavora già con setup avanzati continua ad aver bisogno di strumenti rapidi per controlli veloci, prove, studio personale e riferimenti immediati mentre si è in movimento."
              ]
            }
          ]
        },
        {
          title: "Accessibile ovunque",
          body: [
            "TuneUniversal è progettato per funzionare bene su più dispositivi e in contesti diversi. La piattaforma nasce con un approccio mobile-first, ma viene pensata per restare utile anche su schermi più grandi."
          ],
          items: [
            {
              title: "Desktop",
              body: [
                "Su desktop il sito si adatta bene allo studio prolungato, alle lezioni e al lavoro parallelo con spartiti, software musicali o materiale didattico."
              ]
            },
            {
              title: "Tablet",
              body: [
                "Su tablet diventa un compagno molto comodo per prove, esercizi e attività in aula, grazie a un'interfaccia leggibile e controlli facili da toccare."
              ]
            },
            {
              title: "Smartphone",
              body: [
                "Su smartphone si trasforma in un kit tascabile utile prima di suonare, durante una prova o in ogni situazione in cui serve uno strumento rapido senza installazione."
              ]
            }
          ]
        },
        {
          title: "Il futuro di TuneUniversal",
          body: [
            "TuneUniversal è un progetto in crescita. La piattaforma è pensata per espandersi con nuovi strumenti, nuove guide, più pagine dedicate alle accordature, più supporto multilingua e nuove funzioni utili per studio e pratica musicale.",
            "La direzione è chiara: continuare a costruire una libreria sempre più completa di music tools, tuning resources e contenuti educativi davvero utili, mantenendo però un'esperienza veloce, leggera e affidabile. In questo modo TuneUniversal può crescere come brand e come punto di riferimento per chi cerca guitar tuning, instrument tuner, metronome online, music education e utility musicali gratuite."
          ]
        }
      ],
      faq: [
        {
          question: "Che cos'è TuneUniversal?",
          answer:
            "TuneUniversal è una piattaforma online gratuita che raccoglie online tuner, guitar tuner, instrument tuner, metronome online, Tap BPM, fonometro, chord transposer e risorse educative per musicisti."
        },
        {
          question: "TuneUniversal è adatto solo ai chitarristi?",
          answer:
            "No. Il sito nasce per una platea molto più ampia e include strumenti per chitarra, basso, ukulele, violino e altri strumenti a corda, oltre a utility musicali trasversali."
        },
        {
          question: "Serve installare un'app per usare TuneUniversal?",
          answer:
            "No. La piattaforma è pensata per funzionare direttamente nel browser, su desktop, tablet e smartphone."
        },
        {
          question: "Perché una pagina Chi Siamo è importante su TuneUniversal?",
          answer:
            "Aiuta a spiegare la missione del progetto, rafforza la fiducia degli utenti, migliora la chiarezza del brand e rende il sito più solido anche dal punto di vista SEO e pubblicitario."
        },
        {
          question: "TuneUniversal continuerà ad aggiungere nuovi strumenti?",
          answer:
            "Sì. Il progetto è in continua evoluzione e punta ad ampliare strumenti, guide, accordature alternative e contenuti di music education."
        }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "Apri l'accordatore online" },
        { href: "/tools/metronome", label: "Vai al metronomo" },
        { href: "/tools/tap-bpm", label: "Usa Tap BPM" },
        { href: "/guides", label: "Esplora le guide musicali" }
      ]
    },
  },
  en: {},
  fr: {
    contact: {
      title: "Contact",
      description: "Contactez TuneUniversal pour toute question, suggestion ou retour sur le projet et ses outils musicaux.",
      seoTitle: "Contact | TuneUniversal",
      seoDescription: "Contactez TuneUniversal pour des questions, suggestions ou retours sur l'accordeur en ligne, le métronome et les autres outils.",
      sections: [
        { title: "Comment nous contacter", body: ["Vous avez des questions, suggestions ou retours sur TuneUniversal ? Nous serions ravis de les lire.", `E-mail : ${supportEmail}`] },
        { title: "À quoi sert cette page", body: ["Utilisez cette page pour signaler un problème, proposer de nouveaux outils musicaux ou indiquer une erreur de traduction.", "Les retours sur l'accessibilité, la confiance et l'utilité pratique sont particulièrement appréciés."] }
      ],
      ctas: [{ href: "/about", label: "En savoir plus sur TuneUniversal" }, { href: "/tools", label: "Explorer les outils musicaux" }]
    },
    "terms-of-use": {
      title: "Conditions d'utilisation",
      description: "Lisez les conditions de base pour utiliser TuneUniversal et ses outils musicaux en ligne gratuits.",
      seoTitle: "Conditions d'utilisation | TuneUniversal",
      seoDescription: "Lisez les conditions d'utilisation de TuneUniversal : outils gratuits, limites de responsabilité, propriété intellectuelle et mises à jour.",
      sections: [
        { title: "Utilisation gratuite des services", body: ["TuneUniversal propose des outils musicaux, des guides et des pages éducatives gratuits pour un usage personnel et pédagogique, tant que cet usage est licite.", "Le site peut évoluer avec le temps et certains outils peuvent être mis à jour ou retirés."] },
        { title: "Exactitude et responsabilité", body: ["Les outils sont fournis à titre d'orientation générale et pour un usage pratique, sans garantie absolue pour tout contexte professionnel. Le site est fourni en l'état, dans la mesure permise par la loi.", "L'utilisateur reste responsable de la façon dont il applique les informations et les outils."] },
        { title: "Propriété intellectuelle et modifications", body: ["La marque, la structure, les textes originaux et les supports éducatifs de TuneUniversal restent protégés. TuneUniversal peut mettre à jour ces conditions à l'avenir.", "La version publiée sur le site est la version de référence pour l'usage continu."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Lire la politique de confidentialité" }, { href: "/cookie-policy", label: "Lire la politique relative aux cookies" }]
    },
    about: {
      title: "À propos de TuneUniversal",
      description: "Découvrez TuneUniversal, ses outils musicaux gratuits et sa mission d'aider les musiciens du monde entier.",
      seoTitle: "À propos | TuneUniversal",
      seoDescription: "Découvrez TuneUniversal : accordeur en ligne, métronome, Tap BPM et outils musicaux gratuits pour tous les musiciens.",
      sections: [
        {
          title: "Introduction à TuneUniversal",
          body: [
            "TuneUniversal est une plateforme musicale gratuite conçue pour les musiciens, les étudiants et les enseignants qui cherchent des outils simples, rapides et accessibles depuis n'importe quel appareil moderne. Le projet réunit en un seul endroit un accordeur en ligne, des accordeurs dédiés par instrument, un métronome, Tap BPM, un sonomètre, un transposeur d'accords et des guides pratiques.",
            "L'objectif est simple : proposer des outils musicaux utiles qui s'ouvrent directement dans le navigateur, sans installation, sans compte obligatoire et sans complexité inutile."
          ]
        },
        {
          title: "Notre mission",
          body: [
            "La mission de TuneUniversal est de rendre les outils musicaux essentiels accessibles au plus grand nombre. L'accordage, la gestion du tempo et les bases de l'harmonie ne devraient pas dépendre de logiciels coûteux ou de configurations complexes.",
            "Le projet vise une expérience claire pour les débutants, flexible pour la pratique régulière et rapide pour l'usage quotidien."
          ]
        },
        {
          title: "Ce que vous trouverez sur TuneUniversal",
          body: ["La plateforme propose plusieurs catégories d'outils et de ressources qui fonctionnent ensemble."],
          items: [
            { title: "Accordeurs en ligne", body: ["Un accordeur universel et des pages dédiées comme accordeur guitare, accordeur basse, accordeur ukulélé et accordeur violon, pour un accordage rapide par microphone."] },
            { title: "Rythme et tempo", body: ["Un métronome en ligne avec BPM réglable et Tap BPM pour estimer rapidement le tempo d'un morceau ou d'une session."] },
            { title: "Outils audio et utilitaires", body: ["Sonomètre, transposeur d'accords et d'autres petits outils pratiques pour le travail harmonique, l'écoute et la configuration."] },
            { title: "Guides et ressources pédagogiques", body: ["Des guides d'accordage, des articles pratiques et du contenu éducatif pour aider les débutants et les joueurs intermédiaires à mieux comprendre ce qu'ils font."] }
          ]
        },
        {
          title: "Pour tous les niveaux",
          body: ["TuneUniversal est conçu pour accompagner des besoins variés sans rendre l'expérience compliquée."],
          items: [
            { title: "Débutants", body: ["Des outils visuels clairs, des guides étape par étape et un retour immédiat pour construire de bonnes habitudes dès le départ."] },
            { title: "Étudiants", body: ["Un accès rapide à l'accordage, au métronome et à l'accompagnement harmonique pour rester concentré sur l'apprentissage."] },
            { title: "Enseignants", body: ["Des outils utilisables instantanément sur desktop ou mobile pendant les cours, pour démontrer rapidement une note, un tempo ou une transposition."] },
            { title: "Musiciens professionnels", body: ["Des outils légers pour les vérifications rapides, les répétitions, les déplacements et le travail quotidien."] }
          ]
        },
        {
          title: "L'avenir de TuneUniversal",
          body: [
            "TuneUniversal est un projet en expansion. La direction est de continuer à développer une bibliothèque de plus en plus complète d'outils musicaux, de ressources d'accordage et de contenus éducatifs, tout en restant rapide, léger et fiable.",
            "Les développements futurs peuvent inclure de nouveaux instruments, davantage de préréglages d'accordage, des guides plus détaillés et un meilleur support multilingue."
          ]
        }
      ],
      faq: [
        { question: "Qu'est-ce que TuneUniversal ?", answer: "TuneUniversal est une plateforme gratuite avec des outils musicaux basés sur le navigateur : accordeur en ligne, métronome, Tap BPM, sonomètre et transposeur d'accords." },
        { question: "Faut-il installer une application ?", answer: "Non. Tous les outils fonctionnent directement dans le navigateur, sur ordinateur, tablette ou smartphone." },
        { question: "TuneUniversal est-il uniquement pour les guitaristes ?", answer: "Non. La plateforme propose des accordeurs pour guitare, basse, ukulélé, violon et de nombreux autres instruments, ainsi que des outils musicaux polyvalents." },
        { question: "TuneUniversal va-t-il continuer à s'enrichir ?", answer: "Oui. Le projet est conçu pour évoluer avec de nouveaux outils, de nouvelles pages éducatives et un meilleur support pour les musiciens du monde entier." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "Ouvrir l'accordeur en ligne" },
        { href: "/tools/metronome", label: "Utiliser le métronome" },
        { href: "/guides", label: "Explorer les guides musicaux" }
      ]
    },
    "privacy-policy": {
      title: "Politique de confidentialité",
      description: "Comment TuneUniversal protège la vie privée dans ses outils musicaux gratuits basés sur le navigateur.",
      sections: [
        {
          title: "Données traitées",
          body: [
            "TuneUniversal est conçu pour exécuter les outils musicaux directement dans votre navigateur. L'audio de l'accordeur est analysé localement avec la Web Audio API et n'est pas envoyé à nos serveurs.",
            "Nous pouvons traiter des données techniques de base, comme les requêtes de page, le type d'appareil, le navigateur et la région approximative, via des services d'hébergement, d'analyse ou de sécurité."
          ]
        },
        {
          title: "Accès au microphone",
          body: [
            "L'autorisation du microphone est demandée uniquement lorsque vous activez un accordeur. Le navigateur contrôle cette permission et vous pouvez la retirer à tout moment dans les réglages du site.",
            "Nous n'enregistrons pas, ne stockons pas et ne vendons pas volontairement l'audio du microphone."
          ]
        },
        {
          title: "Vos choix",
          body: [
            "Vous pouvez utiliser la plupart des outils sans compte. Vous pouvez effacer le stockage local du navigateur pour supprimer les préférences enregistrées, comme le système de notation ou les presets du métronome.",
            `Pour toute question sur la confidentialité, contactez ${commonEmail}.`
          ]
        }
      ]
    },
    "cookie-policy": {
      title: "Politique relative aux cookies",
      description: "Informations sur les cookies et le stockage local utilisés par TuneUniversal.",
      sections: [
        {
          title: "Stockage essentiel",
          body: [
            "Le site peut utiliser le stockage essentiel du navigateur pour mémoriser les préférences d'interface et rendre les outils plus pratiques.",
            "Cela inclut par exemple le système de notation choisi et les presets enregistrés du métronome."
          ]
        },
        {
          title: "Analytics et annonces",
          body: [
            "TuneUniversal peut utiliser des services d'analyse respectueux de la confidentialité ou des partenaires publicitaires. Si des cookies non essentiels sont activés, un consentement sera demandé lorsque la loi l'exige.",
            "Les espaces publicitaires visibles dans la mise en page sont des emplacements réservés pouvant être reliés à un fournisseur d'annonces."
          ]
        },
        {
          title: "Gestion des cookies",
          body: [
            "Vous pouvez bloquer ou supprimer les cookies et le stockage local dans les paramètres de votre navigateur. Certaines préférences enregistrées peuvent alors être réinitialisées."
          ]
        }
      ]
    },
  },
  de: {
    contact: {
      title: "Kontakt",
      description: "Kontaktiere TuneUniversal bei Fragen, Vorschlägen oder Feedback zum Projekt und seinen Musiktools.",
      seoTitle: "Kontakt | TuneUniversal",
      seoDescription: "Kontaktiere TuneUniversal bei Fragen, Vorschlägen oder Feedback zum Online-Stimmgerät, Metronom und weiteren Tools.",
      sections: [
        { title: "So erreichst du uns", body: ["Hast du Fragen, Vorschläge oder Feedback zu TuneUniversal? Wir freuen uns, davon zu hören.", `E-Mail: ${supportEmail}`] },
        { title: "Wofür diese Seite gedacht ist", body: ["Nutze diese Seite, um Probleme zu melden, neue Musiktools vorzuschlagen oder Übersetzungsfehler zu nennen.", "Feedback zu Barrierefreiheit, Vertrauen und praktischem Nutzen ist besonders willkommen."] }
      ],
      ctas: [{ href: "/about", label: "Mehr über TuneUniversal" }, { href: "/tools", label: "Musiktools entdecken" }]
    },
    "terms-of-use": {
      title: "Nutzungsbedingungen",
      description: "Lies die grundlegenden Bedingungen für die Nutzung von TuneUniversal und seinen kostenlosen Online-Musiktools.",
      seoTitle: "Nutzungsbedingungen | TuneUniversal",
      seoDescription: "Lies die Nutzungsbedingungen von TuneUniversal: kostenlose Tools, Haftungsgrenzen, geistiges Eigentum und Aktualisierungen.",
      sections: [
        { title: "Kostenlose Nutzung der Dienste", body: ["TuneUniversal bietet kostenlose Musiktools, Anleitungen und Bildungsseiten für den persönlichen und pädagogischen Gebrauch, sofern die Nutzung rechtmäßig ist.", "Die Website kann sich im Lauf der Zeit weiterentwickeln und Tools können aktualisiert oder entfernt werden."] },
        { title: "Genauigkeit und Haftung", body: ["Die Tools werden als allgemeine Orientierung und zur praktischen Nutzung bereitgestellt, ohne absolute Garantie für jeden professionellen Kontext. Die Website wird im gesetzlich zulässigen Rahmen wie besehen bereitgestellt.", "Nutzer bleiben dafür verantwortlich, wie sie die Informationen und Tools anwenden."] },
        { title: "Geistiges Eigentum und Änderungen", body: ["Marke, Struktur, Originaltexte und Bildungsmaterialien von TuneUniversal bleiben geschützt. TuneUniversal kann diese Bedingungen in Zukunft aktualisieren.", "Die auf der Website veröffentlichte Version ist die maßgebliche Version für die weitere Nutzung."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Datenschutzerklärung lesen" }, { href: "/cookie-policy", label: "Cookie-Richtlinie lesen" }]
    },
    about: {
      title: "Über TuneUniversal",
      description: "Erfahren Sie mehr über TuneUniversal, seine kostenlosen Musiktools und seine Mission, Musikern weltweit zu helfen.",
      seoTitle: "Über uns | TuneUniversal",
      seoDescription: "Entdecken Sie TuneUniversal: Online-Stimmgerät, Metronom, Tap BPM und kostenlose Musiktools für alle Musiker.",
      sections: [
        {
          title: "Einführung in TuneUniversal",
          body: [
            "TuneUniversal ist eine kostenlose Musikplattform für Musiker, Schüler und Lehrer, die einfache, schnelle und von jedem modernen Gerät zugängliche Tools suchen. Das Projekt vereint an einem Ort ein Online-Stimmgerät, instrumentspezifische Stimmgeräte, ein Metronom, Tap BPM, einen Schallpegelmesser, einen Akkord-Transposer und praktische Anleitungen.",
            "Das Ziel ist klar: nützliche Musiktools anbieten, die direkt im Browser funktionieren, ohne Installation, ohne Pflicht zur Kontoerstellung und ohne unnötige Komplexität."
          ]
        },
        {
          title: "Unsere Mission",
          body: [
            "Die Mission von TuneUniversal ist es, wesentliche Musiktools so vielen Menschen wie möglich zugänglich zu machen. Stimmen, Tempoarbeit und Harmoniebasics sollten nicht von teurer Software oder komplexer Einrichtung abhängen.",
            "Das Projekt setzt auf eine übersichtliche Erfahrung für Anfänger, Flexibilität für regelmäßiges Üben und Geschwindigkeit für den täglichen Einsatz."
          ]
        },
        {
          title: "Was Sie auf TuneUniversal finden",
          body: ["Die Plattform bietet mehrere Kategorien von Tools und Ressourcen, die zusammen funktionieren."],
          items: [
            { title: "Online-Stimmgeräte", body: ["Ein universelles Stimmgerät und dedizierte Seiten wie Gitarrenstimmgerät, Bassstimmgerät, Ukulelenstimmgerät und Violinenstimmgerät für schnelles mikrofon-basiertes Stimmen."] },
            { title: "Rhythmus und Tempo", body: ["Ein Online-Metronom mit einstellbarem BPM und Tap BPM, um das Tempo eines Stücks oder einer Übungssession schnell zu schätzen."] },
            { title: "Audio- und Hilfstools", body: ["Schallpegelmesser, Akkord-Transposer und andere praktische kleine Tools für Harmoniearbeit, Zuhören und Setup."] },
            { title: "Anleitungen und Lernressourcen", body: ["Stimm-Anleitungen, praktische Artikel und Lerninhalte, die Anfängern und Fortgeschrittenen helfen zu verstehen, was sie tun."] }
          ]
        },
        {
          title: "Für alle Niveaus",
          body: ["TuneUniversal ist so gestaltet, dass es verschiedene Bedürfnisse begleitet, ohne die Erfahrung kompliziert zu machen."],
          items: [
            { title: "Anfänger", body: ["Klare visuelle Tools, schrittweise Anleitungen und sofortiges Feedback, um von Anfang an gute Gewohnheiten aufzubauen."] },
            { title: "Schüler", body: ["Schneller Zugriff auf Stimmung, Metronom und Harmonieunterstützung, um den Fokus auf das Lernen zu behalten."] },
            { title: "Lehrer", body: ["Tools, die sofort auf Desktop oder Mobil während des Unterrichts geöffnet werden können, um eine Note, ein Tempo oder eine Transposition schnell zu zeigen."] },
            { title: "Professionelle Musiker", body: ["Leichte Tools für schnelle Checks, Proben, Reisen und tägliche Arbeit."] }
          ]
        },
        {
          title: "Die Zukunft von TuneUniversal",
          body: [
            "TuneUniversal ist ein wachsendes Projekt. Die Richtung ist, eine immer vollständigere Bibliothek an Musiktools, Stimm-Ressourcen und Bildungsinhalten aufzubauen, während es schnell, leicht und zuverlässig bleibt.",
            "Zukünftige Entwicklungen können neue Instrumente, mehr Stimmungs-Presets, detailliertere Anleitungen und bessere Mehrsprachigkeit umfassen."
          ]
        }
      ],
      faq: [
        { question: "Was ist TuneUniversal?", answer: "TuneUniversal ist eine kostenlose Plattform mit browserbasierten Musiktools: Online-Stimmgerät, Metronom, Tap BPM, Schallpegelmesser und Akkord-Transposer." },
        { question: "Muss ich eine App installieren?", answer: "Nein. Alle Tools funktionieren direkt im Browser, auf Desktop, Tablet oder Smartphone." },
        { question: "Ist TuneUniversal nur für Gitarristen?", answer: "Nein. Die Plattform bietet Stimmgeräte für Gitarre, Bass, Ukulele, Violine und viele andere Instrumente sowie vielseitige Musiktools." },
        { question: "Wird TuneUniversal weiter ausgebaut?", answer: "Ja. Das Projekt ist darauf ausgelegt, mit neuen Tools, neuen Bildungsseiten und besserem Support für Musiker weltweit zu wachsen." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "Online-Stimmgerät öffnen" },
        { href: "/tools/metronome", label: "Metronom verwenden" },
        { href: "/guides", label: "Musikanleitungen erkunden" }
      ]
    },
    "privacy-policy": {
      title: "Datenschutzerklärung",
      description: "Wie TuneUniversal Datenschutz bei kostenlosen browserbasierten Musiktools behandelt.",
      sections: [
        { title: "Verarbeitete Daten", body: ["TuneUniversal ist so gebaut, dass die Musiktools direkt im Browser laufen. Das Audio des Stimmgeräts wird lokal mit der Web Audio API analysiert und nicht auf unsere Server hochgeladen.", "Wir können grundlegende technische Daten wie Seitenaufrufe, Gerätetyp, Browsertyp und ungefähre Region über Hosting-, Analyse- oder Sicherheitsdienste verarbeiten."] },
        { title: "Mikrofonzugriff", body: ["Die Mikrofonberechtigung wird nur angefragt, wenn du ein Stimmgerät aktivierst. Der Browser verwaltet diese Berechtigung und du kannst sie jederzeit in den Website-Einstellungen widerrufen.", "Wir zeichnen Mikrofon-Audio nicht absichtlich auf, speichern es nicht und verkaufen es nicht."] },
        { title: "Deine Auswahl", body: ["Die meisten Tools können ohne Konto genutzt werden. Du kannst den lokalen Browserspeicher löschen, um gespeicherte Einstellungen wie Notationssystem oder Metronom-Presets zu entfernen.", `Bei Datenschutzfragen kontaktiere ${commonEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Cookie-Richtlinie",
      description: "Informationen zu Cookies und lokalem Speicher bei TuneUniversal.",
      sections: [
        { title: "Essentieller Speicher", body: ["Die Website kann essenziellen Browserspeicher nutzen, um Interface-Einstellungen zu merken und die Tools einfacher nutzbar zu machen.", "Beispiele sind das ausgewählte Notationssystem und gespeicherte Metronom-Presets."] },
        { title: "Analytics und Anzeigen", body: ["TuneUniversal kann datenschutzfreundliche Analyse- oder Werbedienste verwenden. Wenn nicht essenzielle Cookies aktiviert werden, wird dort um Zustimmung gebeten, wo es erforderlich ist.", "Die sichtbaren Anzeigenflächen im Layout sind reservierte Platzierungen, die mit einem Werbeanbieter verbunden werden können."] },
        { title: "Cookies verwalten", body: ["Du kannst Cookies und lokalen Speicher in den Browsereinstellungen blockieren oder löschen. Einige gespeicherte Einstellungen werden dadurch möglicherweise zurückgesetzt."] }
      ]
    },
  },
  es: {
    contact: {
      title: "Contacto",
      description: "Contacta con TuneUniversal para preguntas, sugerencias o comentarios sobre el proyecto y sus herramientas musicales.",
      seoTitle: "Contacto | TuneUniversal",
      seoDescription: "Contacta con TuneUniversal para preguntas, sugerencias o comentarios sobre el afinador online, el metrónomo y otras herramientas.",
      sections: [
        { title: "Cómo contactarnos", body: ["¿Tienes preguntas, sugerencias o comentarios sobre TuneUniversal? Nos encantará leerlos.", `Correo: ${supportEmail}`] },
        { title: "Para qué sirve esta página", body: ["Usa esta página para informar de problemas, sugerir nuevas herramientas musicales o señalar errores de traducción.", "Los comentarios sobre accesibilidad, confianza y utilidad práctica son especialmente bienvenidos."] }
      ],
      ctas: [{ href: "/about", label: "Más sobre TuneUniversal" }, { href: "/tools", label: "Explorar herramientas musicales" }]
    },
    "terms-of-use": {
      title: "Términos de uso",
      description: "Lee los términos básicos para usar TuneUniversal y sus herramientas musicales online gratuitas.",
      seoTitle: "Términos de uso | TuneUniversal",
      seoDescription: "Lee los términos de uso de TuneUniversal: herramientas gratuitas, límites de responsabilidad, propiedad intelectual y actualizaciones.",
      sections: [
        { title: "Uso gratuito de los servicios", body: ["TuneUniversal ofrece herramientas musicales, guías y páginas educativas gratuitas para uso personal y educativo, siempre que sea lícito.", "El sitio puede evolucionar con el tiempo y algunas herramientas pueden actualizarse o eliminarse."] },
        { title: "Precisión y responsabilidad", body: ["Las herramientas se ofrecen como orientación general y para uso práctico, sin garantía absoluta para todo contexto profesional. El sitio se proporciona tal cual, en la medida permitida por la ley.", "El usuario sigue siendo responsable de cómo aplica la información y las herramientas."] },
        { title: "Propiedad intelectual y cambios", body: ["La marca, la estructura, los textos originales y los materiales educativos de TuneUniversal permanecen protegidos. TuneUniversal puede actualizar estos términos en el futuro.", "La versión publicada en el sitio es la versión de referencia para el uso continuado."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Leer la política de privacidad" }, { href: "/cookie-policy", label: "Leer la política de cookies" }]
    },
    about: {
      title: "Acerca de TuneUniversal",
      description: "Descubre TuneUniversal, sus herramientas musicales gratuitas y su misión de ayudar a músicos de todo el mundo.",
      seoTitle: "Acerca de | TuneUniversal",
      seoDescription: "Descubre TuneUniversal: afinador online, metrónomo, Tap BPM y herramientas musicales gratuitas para todos los músicos.",
      sections: [
        {
          title: "Introducción a TuneUniversal",
          body: [
            "TuneUniversal es una plataforma musical gratuita diseñada para músicos, estudiantes y profesores que buscan herramientas simples, rápidas y accesibles desde cualquier dispositivo moderno. El proyecto reúne en un solo lugar un afinador online, afinadores dedicados por instrumento, un metrónomo, Tap BPM, un sonómetro, un transpositor de acordes y guías prácticas.",
            "El objetivo es claro: ofrecer herramientas musicales útiles que funcionen directamente en el navegador, sin instalación, sin cuenta obligatoria y sin complejidad innecesaria."
          ]
        },
        {
          title: "Nuestra misión",
          body: [
            "La misión de TuneUniversal es hacer que las herramientas musicales esenciales sean accesibles para el mayor número de personas posible. La afinación, el control del tempo y los fundamentos de la armonía no deberían depender de software costoso ni de configuraciones complejas.",
            "El proyecto apuesta por una experiencia clara para principiantes, flexible para la práctica habitual y rápida para el uso diario."
          ]
        },
        {
          title: "Qué encontrarás en TuneUniversal",
          body: ["La plataforma ofrece varias categorías de herramientas y recursos que funcionan de forma conjunta."],
          items: [
            { title: "Afinadores online", body: ["Un afinador universal y páginas dedicadas como afinador de guitarra, afinador de bajo, afinador de ukulele y afinador de violín, para afinar rápidamente por micrófono."] },
            { title: "Ritmo y tempo", body: ["Un metrónomo online con BPM ajustable y Tap BPM para estimar rápidamente el tempo de una canción o sesión."] },
            { title: "Herramientas de audio y utilidades", body: ["Sonómetro, transpositor de acordes y otras pequeñas herramientas prácticas para el trabajo armónico, la escucha y la configuración."] },
            { title: "Guías y recursos educativos", body: ["Guías de afinación, artículos prácticos y contenido educativo que ayudan a principiantes e intérpretes intermedios a entender mejor lo que hacen."] }
          ]
        },
        {
          title: "Para todos los niveles",
          body: ["TuneUniversal está diseñado para acompañar necesidades diversas sin complicar la experiencia."],
          items: [
            { title: "Principiantes", body: ["Herramientas visuales claras, guías paso a paso y respuesta inmediata para construir buenos hábitos desde el principio."] },
            { title: "Estudiantes", body: ["Acceso rápido a la afinación, el metrónomo y el apoyo armónico para mantener el foco en el aprendizaje."] },
            { title: "Profesores", body: ["Herramientas que se pueden abrir al instante en desktop o móvil durante las clases, para mostrar rápidamente una nota, un tempo o una transposición."] },
            { title: "Músicos profesionales", body: ["Herramientas ligeras para comprobaciones rápidas, ensayos, viajes y trabajo cotidiano."] }
          ]
        },
        {
          title: "El futuro de TuneUniversal",
          body: [
            "TuneUniversal es un proyecto en expansión. La dirección es seguir construyendo una biblioteca cada vez más completa de herramientas musicales, recursos de afinación y contenidos educativos, manteniendo una experiencia rápida, ligera y fiable.",
            "Los desarrollos futuros pueden incluir nuevos instrumentos, más presets de afinación, guías más detalladas y mejor soporte multilingüe."
          ]
        }
      ],
      faq: [
        { question: "¿Qué es TuneUniversal?", answer: "TuneUniversal es una plataforma gratuita con herramientas musicales basadas en el navegador: afinador online, metrónomo, Tap BPM, sonómetro y transpositor de acordes." },
        { question: "¿Hay que instalar una aplicación?", answer: "No. Todas las herramientas funcionan directamente en el navegador, en ordenador, tablet o smartphone." },
        { question: "¿TuneUniversal es solo para guitarristas?", answer: "No. La plataforma ofrece afinadores para guitarra, bajo, ukulele, violín y muchos otros instrumentos, además de herramientas musicales versátiles." },
        { question: "¿TuneUniversal seguirá creciendo?", answer: "Sí. El proyecto está diseñado para evolucionar con nuevas herramientas, nuevas páginas educativas y mejor soporte para músicos de todo el mundo." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "Abrir el afinador online" },
        { href: "/tools/metronome", label: "Usar el metrónomo" },
        { href: "/guides", label: "Explorar las guías musicales" }
      ]
    },
    "privacy-policy": {
      title: "Política de privacidad",
      description: "Cómo TuneUniversal gestiona la privacidad en sus herramientas musicales gratuitas basadas en el navegador.",
      sections: [
        { title: "Datos que procesamos", body: ["TuneUniversal está diseñado para ejecutar las herramientas musicales directamente en tu navegador. El audio del afinador se analiza localmente con la Web Audio API y no se sube a nuestros servidores.", "Podemos procesar datos técnicos básicos, como solicitudes de página, tipo de dispositivo, navegador y región aproximada, mediante servicios de alojamiento, analítica o seguridad."] },
        { title: "Acceso al micrófono", body: ["El permiso del micrófono se solicita solo cuando activas un afinador. El navegador controla ese permiso y puedes revocarlo en cualquier momento desde la configuración del sitio.", "No grabamos, almacenamos ni vendemos intencionadamente el audio del micrófono."] },
        { title: "Tus opciones", body: ["Puedes usar la mayoría de las herramientas sin cuenta. Puedes borrar el almacenamiento local del navegador para eliminar preferencias guardadas, como el sistema de notación o los presets del metrónomo.", `Para preguntas de privacidad, contacta con ${commonEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Política de cookies",
      description: "Información sobre cookies y almacenamiento local utilizados por TuneUniversal.",
      sections: [
        { title: "Almacenamiento esencial", body: ["El sitio puede usar almacenamiento esencial del navegador para recordar preferencias de interfaz y facilitar el uso de las herramientas.", "Por ejemplo, el sistema de notación seleccionado y los presets guardados del metrónomo."] },
        { title: "Analítica y anuncios", body: ["TuneUniversal puede usar servicios de analítica respetuosos con la privacidad o socios publicitarios. Si se activan cookies no esenciales, se solicitará consentimiento cuando sea necesario.", "Los espacios publicitarios visibles en el diseño son ubicaciones reservadas que pueden conectarse a un proveedor de anuncios."] },
        { title: "Gestionar cookies", body: ["Puedes bloquear o eliminar cookies y almacenamiento local desde la configuración del navegador. Algunas preferencias guardadas pueden restablecerse."] }
      ]
    },
  },
  pt: {
    contact: {
      title: "Contacto",
      description: "Contacte o TuneUniversal para questões, sugestões ou comentários sobre o projeto e as suas ferramentas musicais.",
      seoTitle: "Contacto | TuneUniversal",
      seoDescription: "Contacte o TuneUniversal para questões, sugestões ou comentários sobre o afinador online, o metrónomo e outras ferramentas.",
      sections: [
        { title: "Como contactar", body: ["Tem questões, sugestões ou comentários sobre o TuneUniversal? Teremos todo o gosto em recebê-los.", `E-mail: ${supportEmail}`] },
        { title: "Para que serve esta página", body: ["Use esta página para reportar problemas, sugerir novas ferramentas musicais ou indicar erros de tradução.", "Os comentários sobre acessibilidade, confiança e utilidade prática são especialmente bem-vindos."] }
      ],
      ctas: [{ href: "/about", label: "Saber mais sobre o TuneUniversal" }, { href: "/tools", label: "Explorar ferramentas musicais" }]
    },
    "terms-of-use": {
      title: "Termos de utilização",
      description: "Leia os termos básicos para utilizar o TuneUniversal e as suas ferramentas musicais online gratuitas.",
      seoTitle: "Termos de utilização | TuneUniversal",
      seoDescription: "Leia os termos de utilização do TuneUniversal: ferramentas gratuitas, limites de responsabilidade, propriedade intelectual e atualizações.",
      sections: [
        { title: "Utilização gratuita dos serviços", body: ["O TuneUniversal oferece ferramentas musicais, guias e páginas educativas gratuitas para uso pessoal e educativo, desde que seja lícito.", "O site pode evoluir ao longo do tempo e algumas ferramentas podem ser atualizadas ou removidas."] },
        { title: "Exatidão e responsabilidade", body: ["As ferramentas são oferecidas como orientação geral e para uso prático, sem garantia absoluta para qualquer contexto profissional. O site é fornecido tal como está, na medida permitida por lei.", "O utilizador continua responsável pela forma como aplica as informações e ferramentas."] },
        { title: "Propriedade intelectual e alterações", body: ["A marca, a estrutura, os textos originais e os materiais educativos do TuneUniversal permanecem protegidos. O TuneUniversal pode atualizar estes termos no futuro.", "A versão publicada no site é a versão de referência para a utilização continuada."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Ler a Política de Privacidade" }, { href: "/cookie-policy", label: "Ler a Política de Cookies" }]
    },
    about: {
      title: "Sobre o TuneUniversal",
      description: "Conheça o TuneUniversal, suas ferramentas musicais gratuitas e sua missão de ajudar músicos em todo o mundo.",
      seoTitle: "Sobre | TuneUniversal",
      seoDescription: "Conheça o TuneUniversal: afinador online, metrônomo, Tap BPM e ferramentas musicais gratuitas para todos os músicos.",
      sections: [
        {
          title: "Introdução ao TuneUniversal",
          body: [
            "O TuneUniversal é uma plataforma musical gratuita criada para músicos, estudantes e professores que buscam ferramentas simples, rápidas e acessíveis a partir de qualquer dispositivo moderno. O projeto reúne em um só lugar um afinador online, afinadores dedicados por instrumento, um metrônomo, Tap BPM, um decibelímetro, um transpositor de acordes e guias práticos.",
            "O objetivo é claro: oferecer ferramentas musicais úteis que funcionem diretamente no navegador, sem instalação, sem conta obrigatória e sem complexidade desnecessária."
          ]
        },
        {
          title: "Nossa missão",
          body: [
            "A missão do TuneUniversal é tornar as ferramentas musicais essenciais acessíveis ao maior número possível de pessoas. Afinação, controle de tempo e fundamentos de harmonia não deveriam depender de softwares caros ou configurações complexas.",
            "O projeto aposta em uma experiência clara para iniciantes, flexível para a prática regular e rápida para o uso diário."
          ]
        },
        {
          title: "O que você encontrará no TuneUniversal",
          body: ["A plataforma oferece várias categorias de ferramentas e recursos que funcionam em conjunto."],
          items: [
            { title: "Afinadores online", body: ["Um afinador universal e páginas dedicadas como afinador de guitarra, afinador de baixo, afinador de ukulele e afinador de violino, para afinar rapidamente pelo microfone."] },
            { title: "Ritmo e tempo", body: ["Um metrônomo online com BPM ajustável e Tap BPM para estimar rapidamente o tempo de uma música ou sessão."] },
            { title: "Ferramentas de áudio e utilitários", body: ["Decibelímetro, transpositor de acordes e outras pequenas ferramentas práticas para trabalho harmônico, escuta e configuração."] },
            { title: "Guias e recursos educativos", body: ["Guias de afinação, artigos práticos e conteúdo educativo que ajudam iniciantes e músicos intermediários a entender melhor o que estão fazendo."] }
          ]
        },
        {
          title: "Para todos os níveis",
          body: ["O TuneUniversal foi projetado para acompanhar necessidades variadas sem tornar a experiência complicada."],
          items: [
            { title: "Iniciantes", body: ["Ferramentas visuais claras, guias passo a passo e resposta imediata para construir bons hábitos desde o início."] },
            { title: "Estudantes", body: ["Acesso rápido à afinação, ao metrônomo e ao suporte harmônico para manter o foco no aprendizado."] },
            { title: "Professores", body: ["Ferramentas que podem ser abertas instantaneamente no desktop ou no celular durante as aulas, para mostrar rapidamente uma nota, um tempo ou uma transposição."] },
            { title: "Músicos profissionais", body: ["Ferramentas leves para verificações rápidas, ensaios, viagens e trabalho diário."] }
          ]
        },
        {
          title: "O futuro do TuneUniversal",
          body: [
            "O TuneUniversal é um projeto em expansão. A direção é continuar construindo uma biblioteca cada vez mais completa de ferramentas musicais, recursos de afinação e conteúdo educativo, mantendo uma experiência rápida, leve e confiável.",
            "Os desenvolvimentos futuros podem incluir novos instrumentos, mais presets de afinação, guias mais detalhados e melhor suporte multilíngue."
          ]
        }
      ],
      faq: [
        { question: "O que é o TuneUniversal?", answer: "O TuneUniversal é uma plataforma gratuita com ferramentas musicais baseadas no navegador: afinador online, metrônomo, Tap BPM, decibelímetro e transpositor de acordes." },
        { question: "É necessário instalar um aplicativo?", answer: "Não. Todas as ferramentas funcionam diretamente no navegador, no computador, tablet ou smartphone." },
        { question: "O TuneUniversal é só para guitarristas?", answer: "Não. A plataforma oferece afinadores para guitarra, baixo, ukulele, violino e muitos outros instrumentos, além de ferramentas musicais versáteis." },
        { question: "O TuneUniversal vai continuar crescendo?", answer: "Sim. O projeto foi desenvolvido para evoluir com novas ferramentas, novas páginas educativas e melhor suporte para músicos em todo o mundo." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "Abrir o afinador online" },
        { href: "/tools/metronome", label: "Usar o metrônomo" },
        { href: "/guides", label: "Explorar os guias musicais" }
      ]
    },
    "privacy-policy": {
      title: "Política de privacidade",
      description: "Como o TuneUniversal trata a privacidade em ferramentas musicais gratuitas baseadas no navegador.",
      sections: [
        { title: "Dados processados", body: ["O TuneUniversal foi criado para executar ferramentas musicais diretamente no navegador. O áudio do afinador é analisado localmente pela Web Audio API e não é enviado aos nossos servidores.", "Podemos processar dados técnicos básicos, como pedidos de página, tipo de dispositivo, navegador e região aproximada, por meio de serviços de hospedagem, análise ou segurança."] },
        { title: "Acesso ao microfone", body: ["A permissão do microfone é solicitada apenas quando você ativa um afinador. O navegador controla essa permissão e você pode revogá-la a qualquer momento nas configurações do site.", "Não gravamos, armazenamos nem vendemos intencionalmente o áudio do microfone."] },
        { title: "Suas escolhas", body: ["Você pode usar a maioria das ferramentas sem conta. Também pode limpar o armazenamento local do navegador para remover preferências salvas, como sistema de notação ou presets do metrônomo.", `Para perguntas sobre privacidade, entre em contato: ${commonEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Política de cookies",
      description: "Informações sobre cookies e armazenamento local usados pelo TuneUniversal.",
      sections: [
        { title: "Armazenamento essencial", body: ["O site pode usar armazenamento essencial do navegador para lembrar preferências de interface e facilitar o uso das ferramentas.", "Exemplos incluem o sistema de notação escolhido e presets salvos do metrônomo."] },
        { title: "Analytics e anúncios", body: ["O TuneUniversal pode usar serviços de análise com foco em privacidade ou parceiros de publicidade. Se cookies não essenciais forem ativados, o consentimento será solicitado quando exigido.", "Os espaços de anúncios visíveis no layout são posições reservadas que podem ser conectadas a um provedor de anúncios."] },
        { title: "Gerenciar cookies", body: ["Você pode bloquear ou excluir cookies e armazenamento local nas configurações do navegador. Algumas preferências salvas podem ser redefinidas."] }
      ]
    },
  },
  zh: {
    contact: {
      title: "联系我们",
      description: "就项目及其音乐工具的问题、建议或反馈联系 TuneUniversal。",
      seoTitle: "联系我们 | TuneUniversal",
      seoDescription: "就在线调音器、节拍器及其他工具的问题、建议或反馈联系 TuneUniversal。",
      sections: [
        { title: "如何联系", body: ["对 TuneUniversal 有疑问、建议或反馈吗？我们很乐意听取。", `邮箱：${supportEmail}`] },
        { title: "此页面的用途", body: ["使用此页面报告问题、建议新的音乐工具或指出翻译错误。", "关于无障碍、信任和实用性的反馈尤其受欢迎。"] }
      ],
      ctas: [{ href: "/about", label: "了解更多 TuneUniversal" }, { href: "/tools", label: "探索音乐工具" }]
    },
    "terms-of-use": {
      title: "使用条款",
      description: "阅读使用 TuneUniversal 及其免费在线音乐工具的基本条款。",
      seoTitle: "使用条款 | TuneUniversal",
      seoDescription: "阅读 TuneUniversal 的使用条款：免费工具、责任限制、知识产权和未来更新。",
      sections: [
        { title: "免费使用服务", body: ["TuneUniversal 提供免费的浏览器音乐工具、指南和教育页面，供个人和教育用途使用，前提是合法使用。", "网站可能随时间演变，部分工具可能更新或移除。"] },
        { title: "准确性与责任", body: ["这些工具作为一般指导和实用用途提供，对任何专业场景不作绝对保证。在法律允许的范围内，网站按现状提供。", "用户对如何使用这些信息和工具负责。"] },
        { title: "知识产权与变更", body: ["TuneUniversal 的品牌、结构、原创文本和教育材料受到保护。TuneUniversal 未来可能更新这些条款。", "网站上发布的版本是继续使用的参考版本。"] }
      ],
      ctas: [{ href: "/privacy-policy", label: "阅读隐私政策" }, { href: "/cookie-policy", label: "阅读 Cookie 政策" }]
    },
    about: {
      title: "关于 TuneUniversal",
      description: "了解 TuneUniversal、其免费音乐工具及其帮助全球音乐人的使命。",
      seoTitle: "关于 | TuneUniversal",
      seoDescription: "了解 TuneUniversal：在线调音器、节拍器、Tap BPM 及面向所有音乐人的免费音乐工具。",
      sections: [
        {
          title: "TuneUniversal 简介",
          body: [
            "TuneUniversal 是一款免费的音乐平台，专为寻求简单、快速且可在任何现代设备上使用工具的音乐人、学生和教师而设计。该项目将在线调音器、专用乐器调音器、节拍器、Tap BPM、分贝计、和弦转调器和实用指南集于一处。",
            "目标很明确：提供直接在浏览器中运行的实用音乐工具，无需安装、无需强制注册，也没有不必要的复杂性。"
          ]
        },
        {
          title: "我们的使命",
          body: [
            "TuneUniversal 的使命是让尽可能多的人能够使用基本音乐工具。调音、节拍控制和和声基础不应依赖昂贵的软件或复杂的配置。",
            "该项目致力于为初学者提供清晰的体验，为日常练习提供灵活性，为日常使用提供速度。"
          ]
        },
        {
          title: "TuneUniversal 上有什么",
          body: ["该平台提供多个协同工作的工具和资源类别。"],
          items: [
            { title: "在线调音器", body: ["通用调音器及专用页面，如吉他调音器、贝斯调音器、尤克里里调音器和小提琴调音器，支持麦克风快速调音。"] },
            { title: "节奏与速度", body: ["可调节 BPM 的在线节拍器和 Tap BPM，用于快速估算一首歌或练习课的速度。"] },
            { title: "音频工具与实用程序", body: ["分贝计、和弦转调器及其他小型实用工具，用于和声练习、听音和设置。"] },
            { title: "指南与教育资源", body: ["调音指南、实用文章和教育内容，帮助初学者和中级演奏者更好地理解他们正在做的事情。"] }
          ]
        },
        {
          title: "适合所有水平",
          body: ["TuneUniversal 旨在满足各种需求，同时不使体验变得复杂。"],
          items: [
            { title: "初学者", body: ["清晰的视觉工具、分步指南和即时反馈，从一开始就养成良好习惯。"] },
            { title: "学生", body: ["快速访问调音、节拍器和和声支持，保持学习专注。"] },
            { title: "教师", body: ["可在课堂上即时在桌面或手机上打开的工具，快速演示音符、速度或转调。"] },
            { title: "专业音乐人", body: ["轻量级工具，用于快速检查、排练、出行和日常工作。"] }
          ]
        },
        {
          title: "TuneUniversal 的未来",
          body: [
            "TuneUniversal 是一个不断扩展的项目。其方向是继续构建越来越完整的音乐工具、调音资源和教育内容库，同时保持快速、轻量和可靠。",
            "未来的发展可能包括新乐器、更多调音预设、更详细的指南和更好的多语言支持。"
          ]
        }
      ],
      faq: [
        { question: "TuneUniversal 是什么？", answer: "TuneUniversal 是一个免费平台，提供基于浏览器的音乐工具：在线调音器、节拍器、Tap BPM、分贝计和和弦转调器。" },
        { question: "需要安装应用吗？", answer: "不需要。所有工具直接在浏览器中运行，支持台式机、平板电脑和智能手机。" },
        { question: "TuneUniversal 只适合吉他手吗？", answer: "不是。该平台提供吉他、贝斯、尤克里里、小提琴等多种乐器的调音器，以及多功能音乐工具。" },
        { question: "TuneUniversal 会继续增加功能吗？", answer: "会的。该项目旨在通过新工具、新教育页面和更好的支持持续发展，服务全球音乐人。" }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "打开在线调音器" },
        { href: "/tools/metronome", label: "使用节拍器" },
        { href: "/guides", label: "探索音乐指南" }
      ]
    },
    "privacy-policy": {
      title: "隐私政策",
      description: "TuneUniversal 如何在免费的浏览器音乐工具中处理隐私。",
      sections: [
        { title: "我们处理的数据", body: ["TuneUniversal 的音乐工具设计为直接在浏览器中运行。调音器音频通过 Web Audio API 在本地分析，不会上传到我们的服务器。", "我们可能通过托管、分析或安全服务处理基本技术数据，例如页面请求、设备类型、浏览器类型和大致地区。"] },
        { title: "麦克风访问", body: ["只有在你启用调音器时才会请求麦克风权限。该权限由浏览器控制，你可以随时在网站设置中撤销。", "我们不会有意录制、存储或出售麦克风音频。"] },
        { title: "你的选择", body: ["大多数工具无需账号即可使用。你可以清除浏览器本地存储，以删除已保存的偏好，例如记谱系统或节拍器预设。", `如有隐私问题，请联系 ${commonEmail}。`] }
      ]
    },
    "cookie-policy": {
      title: "Cookie 政策",
      description: "TuneUniversal 使用 Cookie 和本地存储的说明。",
      sections: [
        { title: "必要存储", body: ["网站可能使用必要的浏览器存储来记住界面偏好，并让工具更易使用。", "例如所选的记谱系统和已保存的节拍器预设。"] },
        { title: "分析与广告", body: ["TuneUniversal 可能使用注重隐私的分析服务或广告合作伙伴。如果启用非必要 Cookie，将在法律要求时请求同意。", "页面中的广告区域是预留位置，可连接到广告服务提供商。"] },
        { title: "管理 Cookie", body: ["你可以在浏览器设置中阻止或删除 Cookie 和本地存储。这样做可能会重置某些已保存的偏好。"] }
      ]
    },
  },
  ru: {
    contact: {
      title: "Контакты",
      description: "Свяжитесь с TuneUniversal по вопросам, предложениям или отзывам о проекте и его музыкальных инструментах.",
      seoTitle: "Контакты | TuneUniversal",
      seoDescription: "Свяжитесь с TuneUniversal по вопросам, предложениям или отзывам об онлайн-тюнере, метрономе и других инструментах.",
      sections: [
        { title: "Как связаться", body: ["Есть вопросы, предложения или отзывы о TuneUniversal? Будем рады их получить.", `Эл. почта: ${supportEmail}`] },
        { title: "Для чего эта страница", body: ["Используйте эту страницу, чтобы сообщить о проблемах, предложить новые музыкальные инструменты или указать на ошибки перевода.", "Особенно приветствуются отзывы о доступности, доверии и практической пользе."] }
      ],
      ctas: [{ href: "/about", label: "Подробнее о TuneUniversal" }, { href: "/tools", label: "Изучить музыкальные инструменты" }]
    },
    "terms-of-use": {
      title: "Условия использования",
      description: "Ознакомьтесь с основными условиями использования TuneUniversal и его бесплатных онлайн-инструментов.",
      seoTitle: "Условия использования | TuneUniversal",
      seoDescription: "Условия использования TuneUniversal: бесплатные инструменты, ограничение ответственности, интеллектуальная собственность и обновления.",
      sections: [
        { title: "Бесплатное использование сервисов", body: ["TuneUniversal предоставляет бесплатные музыкальные инструменты, руководства и образовательные страницы для личного и учебного использования, если оно законно.", "Сайт может со временем развиваться, а инструменты могут обновляться или удаляться."] },
        { title: "Точность и ответственность", body: ["Инструменты предоставляются как общее руководство и для практического использования, без абсолютной гарантии для любого профессионального контекста. Сайт предоставляется как есть, в пределах, разрешённых законом.", "Пользователь несёт ответственность за то, как он применяет информацию и инструменты."] },
        { title: "Интеллектуальная собственность и изменения", body: ["Бренд, структура, оригинальные тексты и образовательные материалы TuneUniversal остаются защищёнными. TuneUniversal может обновлять эти условия в будущем.", "Версия, опубликованная на сайте, является эталонной для дальнейшего использования."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Читать политику конфиденциальности" }, { href: "/cookie-policy", label: "Читать политику Cookie" }]
    },
    about: {
      title: "О TuneUniversal",
      description: "Узнайте о TuneUniversal, его бесплатных музыкальных инструментах и миссии помогать музыкантам по всему миру.",
      seoTitle: "О проекте | TuneUniversal",
      seoDescription: "Узнайте о TuneUniversal: онлайн-тюнер, метроном, Tap BPM и бесплатные музыкальные инструменты для всех музыкантов.",
      sections: [
        {
          title: "Введение в TuneUniversal",
          body: [
            "TuneUniversal — это бесплатная музыкальная платформа для музыкантов, студентов и преподавателей, которым нужны простые, быстрые и доступные с любого современного устройства инструменты. Проект объединяет в одном месте онлайн-тюнер, специализированные тюнеры для разных инструментов, метроном, Tap BPM, шумомер, транспозитор аккордов и практические руководства.",
            "Цель проста: предлагать полезные музыкальные инструменты, работающие прямо в браузере, без установки, без обязательной регистрации и без лишних сложностей."
          ]
        },
        {
          title: "Наша миссия",
          body: [
            "Миссия TuneUniversal — сделать основные музыкальные инструменты доступными для как можно большего числа людей. Настройка, контроль темпа и основы гармонии не должны зависеть от дорогостоящего программного обеспечения или сложных настроек.",
            "Проект ставит на чёткий интерфейс для начинающих, гибкость для регулярных занятий и скорость для ежедневного использования."
          ]
        },
        {
          title: "Что вы найдёте на TuneUniversal",
          body: ["Платформа предлагает несколько категорий инструментов и ресурсов, которые работают вместе."],
          items: [
            { title: "Онлайн-тюнеры", body: ["Универсальный тюнер и специальные страницы: тюнер для гитары, тюнер для баса, тюнер для укулеле и тюнер для скрипки — для быстрой настройки по микрофону."] },
            { title: "Ритм и темп", body: ["Онлайн-метроном с настраиваемым BPM и Tap BPM для быстрой оценки темпа песни или сессии."] },
            { title: "Аудиоинструменты и утилиты", body: ["Шумомер, транспозитор аккордов и другие небольшие практичные инструменты для гармонической работы, прослушивания и настройки."] },
            { title: "Руководства и образовательные ресурсы", body: ["Руководства по настройке, практические статьи и учебный контент, которые помогают начинающим и музыкантам среднего уровня лучше понимать, что они делают."] }
          ]
        },
        {
          title: "Для всех уровней",
          body: ["TuneUniversal разработан для удовлетворения разнообразных потребностей без усложнения работы."],
          items: [
            { title: "Начинающие", body: ["Понятные визуальные инструменты, пошаговые руководства и мгновенная обратная связь для формирования хороших привычек с самого начала."] },
            { title: "Студенты", body: ["Быстрый доступ к настройке, метроному и гармонической поддержке для сохранения фокуса на обучении."] },
            { title: "Преподаватели", body: ["Инструменты, открываемые мгновенно на компьютере или смартфоне во время урока, чтобы быстро показать ноту, темп или транспозицию."] },
            { title: "Профессиональные музыканты", body: ["Лёгкие инструменты для быстрых проверок, репетиций, поездок и ежедневной работы."] }
          ]
        },
        {
          title: "Будущее TuneUniversal",
          body: [
            "TuneUniversal — развивающийся проект. Направление — продолжать создавать всё более полную библиотеку музыкальных инструментов, ресурсов по настройке и образовательного контента, сохраняя при этом быстроту, лёгкость и надёжность.",
            "В будущем могут появиться новые инструменты, дополнительные пресеты настройки, более подробные руководства и лучшая многоязычная поддержка."
          ]
        }
      ],
      faq: [
        { question: "Что такое TuneUniversal?", answer: "TuneUniversal — бесплатная платформа с браузерными музыкальными инструментами: онлайн-тюнер, метроном, Tap BPM, шумомер и транспозитор аккордов." },
        { question: "Нужно ли устанавливать приложение?", answer: "Нет. Все инструменты работают прямо в браузере на компьютере, планшете или смартфоне." },
        { question: "TuneUniversal только для гитаристов?", answer: "Нет. Платформа предлагает тюнеры для гитары, баса, укулеле, скрипки и многих других инструментов, а также универсальные музыкальные инструменты." },
        { question: "TuneUniversal будет развиваться дальше?", answer: "Да. Проект создан для роста: новые инструменты, учебные страницы и поддержка музыкантов по всему миру." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "Открыть онлайн-тюнер" },
        { href: "/tools/metronome", label: "Использовать метроном" },
        { href: "/guides", label: "Изучить музыкальные руководства" }
      ]
    },
    "privacy-policy": {
      title: "Политика конфиденциальности",
      description: "Как TuneUniversal обрабатывает конфиденциальность в бесплатных музыкальных инструментах браузера.",
      sections: [
        { title: "Какие данные обрабатываются", body: ["TuneUniversal создан так, чтобы музыкальные инструменты работали прямо в браузере. Звук тюнера анализируется локально через Web Audio API и не загружается на наши серверы.", "Мы можем обрабатывать базовые технические данные, например запросы страниц, тип устройства, браузер и примерный регион, через сервисы хостинга, аналитики или безопасности."] },
        { title: "Доступ к микрофону", body: ["Разрешение на микрофон запрашивается только при включении тюнера. Этим разрешением управляет браузер, и вы можете отозвать его в настройках сайта.", "Мы намеренно не записываем, не храним и не продаем звук с микрофона."] },
        { title: "Ваш выбор", body: ["Большинство инструментов можно использовать без аккаунта. Вы можете очистить локальное хранилище браузера, чтобы удалить сохраненные настройки, например систему нот или пресеты метронома.", `По вопросам конфиденциальности пишите на ${commonEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Политика Cookie",
      description: "Информация о cookie и локальном хранилище, используемых TuneUniversal.",
      sections: [
        { title: "Необходимое хранилище", body: ["Сайт может использовать необходимое хранилище браузера, чтобы запоминать настройки интерфейса и делать инструменты удобнее.", "Например, выбранную систему нот и сохраненные пресеты метронома."] },
        { title: "Аналитика и реклама", body: ["TuneUniversal может использовать аналитические сервисы с учетом приватности или рекламных партнеров. Если будут включены необязательные cookie, согласие будет запрошено там, где это требуется.", "Рекламные блоки в макете являются зарезервированными местами и могут быть подключены к рекламному провайдеру."] },
        { title: "Управление cookie", body: ["Вы можете блокировать или удалять cookie и локальное хранилище в настройках браузера. Некоторые сохраненные предпочтения могут сброситься."] }
      ]
    },
  },
  ja: {
    contact: {
      title: "お問い合わせ",
      description: "プロジェクトや音楽ツールに関する質問、提案、フィードバックは TuneUniversal までご連絡ください。",
      seoTitle: "お問い合わせ | TuneUniversal",
      seoDescription: "オンラインチューナー、メトロノームなどのツールに関する質問、提案、フィードバックは TuneUniversal まで。",
      sections: [
        { title: "連絡方法", body: ["TuneUniversal について質問、提案、フィードバックはありますか？ぜひお聞かせください。", `メール: ${supportEmail}`] },
        { title: "このページの用途", body: ["このページは、問題の報告、新しい音楽ツールの提案、翻訳の誤りの指摘にご利用ください。", "アクセシビリティ、信頼性、実用性に関するフィードバックは特に歓迎します。"] }
      ],
      ctas: [{ href: "/about", label: "TuneUniversal について詳しく" }, { href: "/tools", label: "音楽ツールを見る" }]
    },
    "terms-of-use": {
      title: "利用規約",
      description: "TuneUniversal と無料のオンライン音楽ツールを利用するための基本的な規約をお読みください。",
      seoTitle: "利用規約 | TuneUniversal",
      seoDescription: "TuneUniversal の利用規約：無料ツール、責任の制限、知的財産、今後の更新について。",
      sections: [
        { title: "サービスの無料利用", body: ["TuneUniversal は、合法的な利用である限り、個人および教育目的で無料のブラウザ音楽ツール、ガイド、教育ページを提供します。", "サイトは時間とともに進化し、ツールが更新または削除されることがあります。"] },
        { title: "正確性と責任", body: ["ツールは一般的な案内および実用目的で提供され、あらゆる専門的な状況に対する絶対的な保証はありません。サイトは法律で許される範囲で現状のまま提供されます。", "利用者は情報やツールの適用方法について責任を負います。"] },
        { title: "知的財産と変更", body: ["TuneUniversal のブランド、構造、オリジナルのテキスト、教育素材は保護されています。TuneUniversal は将来この規約を更新する場合があります。", "サイトに公開されたバージョンが、継続利用の基準となるバージョンです。"] }
      ],
      ctas: [{ href: "/privacy-policy", label: "プライバシーポリシーを読む" }, { href: "/cookie-policy", label: "Cookie ポリシーを読む" }]
    },
    about: {
      title: "TuneUniversal について",
      description: "TuneUniversal、その無料の音楽ツール、そして世界中のミュージシャンを支援するミッションについて学びましょう。",
      seoTitle: "概要 | TuneUniversal",
      seoDescription: "TuneUniversal を発見してください：オンラインチューナー、メトロノーム、Tap BPM、すべてのミュージシャンのための無料音楽ツール。",
      sections: [
        {
          title: "TuneUniversal の紹介",
          body: [
            "TuneUniversal は、シンプルで高速、あらゆる現代デバイスからアクセス可能なツールを求めるミュージシャン、学生、教師のための無料音楽プラットフォームです。このプロジェクトは、オンラインチューナー、楽器専用チューナー、メトロノーム、Tap BPM、騒音計、コードトランスポーザー、実用的なガイドを一か所に集めています。",
            "目標は明確です：インストールなし、強制的なアカウント作成なし、不必要な複雑さなしで、ブラウザ内で直接動作する便利な音楽ツールを提供することです。"
          ]
        },
        {
          title: "私たちのミッション",
          body: [
            "TuneUniversal のミッションは、基本的な音楽ツールをできるだけ多くの人々が利用できるようにすることです。チューニング、テンポ管理、ハーモニーの基礎は、高価なソフトウェアや複雑な設定に依存すべきではありません。",
            "このプロジェクトは、初心者には明確な体験、定期的な練習には柔軟性、日常的な使用には速度を提供することを目指しています。"
          ]
        },
        {
          title: "TuneUniversal で見つかるもの",
          body: ["プラットフォームは、連携して機能するツールとリソースのいくつかのカテゴリーを提供しています。"],
          items: [
            { title: "オンラインチューナー", body: ["ユニバーサルチューナーと、ギターチューナー、ベースチューナー、ウクレレチューナー、バイオリンチューナーなどの専用ページ。マイクを使った素早いチューニングに対応しています。"] },
            { title: "リズムとテンポ", body: ["BPM 調整可能なオンラインメトロノームと、曲やセッションのテンポを素早く推定できる Tap BPM。"] },
            { title: "オーディオツールとユーティリティ", body: ["騒音計、コードトランスポーザー、ハーモニー作業、リスニング、セットアップのための小さな実用ツール。"] },
            { title: "ガイドと教育リソース", body: ["チューニングガイド、実用的な記事、初心者と中級者が何をしているかをよりよく理解するための教育コンテンツ。"] }
          ]
        },
        {
          title: "あらゆるレベルに対応",
          body: ["TuneUniversal は、経験を複雑にせずにさまざまなニーズに対応するように設計されています。"],
          items: [
            { title: "初心者", body: ["最初から良い習慣を築くための、明確なビジュアルツール、ステップバイステップのガイド、即時フィードバック。"] },
            { title: "学生", body: ["学習に集中し続けるための、チューニング、メトロノーム、ハーモニーサポートへの素早いアクセス。"] },
            { title: "教師", body: ["授業中にデスクトップまたはモバイルで即座に開けるツール、音符、テンポ、転調を素早くデモンストレーションできます。"] },
            { title: "プロのミュージシャン", body: ["素早いチェック、リハーサル、旅行、日常作業のための軽量ツール。"] }
          ]
        },
        {
          title: "TuneUniversal の未来",
          body: [
            "TuneUniversal は拡張中のプロジェクトです。方向性は、音楽ツール、チューニングリソース、教育コンテンツのますます完全なライブラリを構築し続け、高速で軽量、信頼性の高い状態を維持することです。",
            "将来の開発には、新しい楽器、より多くのチューニングプリセット、より詳細なガイド、より良い多言語サポートが含まれる可能性があります。"
          ]
        }
      ],
      faq: [
        { question: "TuneUniversal とは何ですか？", answer: "TuneUniversal は、ブラウザベースの音楽ツールを提供する無料プラットフォームです：オンラインチューナー、メトロノーム、Tap BPM、騒音計、コードトランスポーザー。" },
        { question: "アプリをインストールする必要がありますか？", answer: "いいえ。すべてのツールはデスクトップ、タブレット、スマートフォンでブラウザ内で直接動作します。" },
        { question: "TuneUniversal はギタリスト専用ですか？", answer: "いいえ。プラットフォームはギター、ベース、ウクレレ、バイオリン、その他多くの楽器のチューナー、および多目的音楽ツールを提供しています。" },
        { question: "TuneUniversal は今後も成長し続けますか？", answer: "はい。このプロジェクトは新しいツール、新しい教育ページ、世界中のミュージシャンへのより良いサポートとともに進化するよう設計されています。" }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "オンラインチューナーを開く" },
        { href: "/tools/metronome", label: "メトロノームを使う" },
        { href: "/guides", label: "音楽ガイドを探索する" }
      ]
    },
    "privacy-policy": {
      title: "プライバシーポリシー",
      description: "TuneUniversal が無料のブラウザ音楽ツールでプライバシーをどのように扱うかについて。",
      sections: [
        { title: "処理するデータ", body: ["TuneUniversal は、音楽ツールがブラウザ内で直接動作するように設計されています。チューナーの音声は Web Audio API によりローカルで解析され、サーバーにはアップロードされません。", "ホスティング、分析、セキュリティサービスを通じて、ページリクエスト、デバイス種別、ブラウザ種別、おおよその地域などの基本的な技術データを処理する場合があります。"] },
        { title: "マイクへのアクセス", body: ["マイクの許可は、チューナーを有効にしたときだけ求められます。この許可はブラウザが管理し、サイト設定からいつでも取り消せます。", "マイク音声を意図的に録音、保存、販売することはありません。"] },
        { title: "選択肢", body: ["ほとんどのツールはアカウントなしで利用できます。ブラウザのローカルストレージを消去すると、記譜方式やメトロノームのプリセットなどの保存済み設定を削除できます。", `プライバシーに関する質問は ${commonEmail} までご連絡ください。`] }
      ]
    },
    "cookie-policy": {
      title: "Cookie ポリシー",
      description: "TuneUniversal が使用する Cookie とローカルストレージについて。",
      sections: [
        { title: "必須ストレージ", body: ["サイトは、インターフェース設定を記憶しツールを使いやすくするために、必須のブラウザストレージを使用する場合があります。", "例として、選択した記譜方式や保存済みメトロノームプリセットがあります。"] },
        { title: "分析と広告", body: ["TuneUniversal は、プライバシーに配慮した分析サービスや広告パートナーを使用する場合があります。必須でない Cookie を有効にする場合、必要な地域では同意を求めます。", "レイアウト内の広告スペースは予約枠であり、広告プロバイダーに接続できます。"] },
        { title: "Cookie の管理", body: ["ブラウザ設定から Cookie とローカルストレージをブロックまたは削除できます。一部の保存済み設定はリセットされる場合があります。"] }
      ]
    },
  },
  ko: {
    contact: {
      title: "문의하기",
      description: "프로젝트와 음악 도구에 대한 질문, 제안 또는 피드백은 TuneUniversal로 문의하세요.",
      seoTitle: "문의하기 | TuneUniversal",
      seoDescription: "온라인 튜너, 메트로놈 등 도구에 대한 질문, 제안 또는 피드백은 TuneUniversal로 문의하세요.",
      sections: [
        { title: "연락 방법", body: ["TuneUniversal에 대한 질문, 제안 또는 피드백이 있으신가요? 기꺼이 듣겠습니다.", `이메일: ${supportEmail}`] },
        { title: "이 페이지의 용도", body: ["이 페이지를 사용해 문제를 신고하거나 새로운 음악 도구를 제안하거나 번역 오류를 알려주세요.", "접근성, 신뢰, 실용성에 대한 피드백은 특히 환영합니다."] }
      ],
      ctas: [{ href: "/about", label: "TuneUniversal 더 알아보기" }, { href: "/tools", label: "음악 도구 둘러보기" }]
    },
    "terms-of-use": {
      title: "이용 약관",
      description: "TuneUniversal과 무료 온라인 음악 도구를 사용하기 위한 기본 약관을 읽어보세요.",
      seoTitle: "이용 약관 | TuneUniversal",
      seoDescription: "TuneUniversal 이용 약관: 무료 도구, 책임 제한, 지적 재산권 및 향후 업데이트.",
      sections: [
        { title: "서비스의 무료 이용", body: ["TuneUniversal은 합법적인 사용인 한 개인 및 교육 목적을 위해 무료 브라우저 음악 도구, 가이드 및 교육 페이지를 제공합니다.", "사이트는 시간이 지나면서 발전할 수 있으며 도구가 업데이트되거나 제거될 수 있습니다."] },
        { title: "정확성과 책임", body: ["도구는 일반적인 안내와 실용적인 사용을 위해 제공되며 모든 전문적 상황에 대한 절대적 보장은 없습니다. 사이트는 법이 허용하는 범위에서 있는 그대로 제공됩니다.", "사용자는 정보와 도구를 어떻게 적용하는지에 대한 책임이 있습니다."] },
        { title: "지적 재산권과 변경", body: ["TuneUniversal의 브랜드, 구조, 원본 텍스트 및 교육 자료는 보호됩니다. TuneUniversal은 향후 이 약관을 업데이트할 수 있습니다.", "사이트에 게시된 버전이 지속적인 사용을 위한 기준 버전입니다."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "개인정보 처리방침 읽기" }, { href: "/cookie-policy", label: "쿠키 정책 읽기" }]
    },
    about: {
      title: "TuneUniversal 소개",
      description: "TuneUniversal, 무료 음악 도구 및 전 세계 음악가를 돕는 사명에 대해 알아보세요.",
      seoTitle: "소개 | TuneUniversal",
      seoDescription: "TuneUniversal을 발견하세요: 온라인 튜너, 메트로놈, Tap BPM 및 모든 음악가를 위한 무료 음악 도구.",
      sections: [
        {
          title: "TuneUniversal 소개",
          body: [
            "TuneUniversal은 모든 현대 기기에서 간단하고 빠르게 접근할 수 있는 도구를 찾는 음악가, 학생, 교사를 위한 무료 음악 플랫폼입니다. 이 프로젝트는 온라인 튜너, 악기별 전용 튜너, 메트로놈, Tap BPM, 소음 측정기, 코드 전조기 및 실용 가이드를 한 곳에 모았습니다.",
            "목표는 명확합니다: 설치 없이, 필수 계정 생성 없이, 불필요한 복잡성 없이 브라우저에서 직접 작동하는 유용한 음악 도구를 제공하는 것입니다."
          ]
        },
        {
          title: "우리의 사명",
          body: [
            "TuneUniversal의 사명은 기본적인 음악 도구를 가능한 한 많은 사람들이 이용할 수 있도록 하는 것입니다. 조율, 템포 제어 및 화성의 기초는 비싼 소프트웨어나 복잡한 설정에 의존해서는 안 됩니다.",
            "이 프로젝트는 초보자를 위한 명확한 경험, 규칙적인 연습을 위한 유연성, 일상적인 사용을 위한 속도를 제공하는 것을 목표로 합니다."
          ]
        },
        {
          title: "TuneUniversal에서 찾을 수 있는 것",
          body: ["플랫폼은 함께 작동하는 여러 카테고리의 도구와 리소스를 제공합니다."],
          items: [
            { title: "온라인 튜너", body: ["마이크를 통한 빠른 조율을 위한 범용 튜너와 기타 튜너, 베이스 튜너, 우쿨렐레 튜너, 바이올린 튜너 등의 전용 페이지."] },
            { title: "리듬과 템포", body: ["조절 가능한 BPM의 온라인 메트로놈과 곡이나 세션의 템포를 빠르게 추정할 수 있는 Tap BPM."] },
            { title: "오디오 도구와 유틸리티", body: ["소음 측정기, 코드 전조기 및 화성 작업, 청음, 설정을 위한 기타 실용적인 소형 도구."] },
            { title: "가이드와 교육 자료", body: ["조율 가이드, 실용적인 기사 및 초보자와 중급 연주자가 자신이 하는 일을 더 잘 이해할 수 있도록 돕는 교육 콘텐츠."] }
          ]
        },
        {
          title: "모든 수준에 적합",
          body: ["TuneUniversal은 경험을 복잡하게 만들지 않으면서 다양한 요구를 충족하도록 설계되었습니다."],
          items: [
            { title: "초보자", body: ["처음부터 좋은 습관을 형성하기 위한 명확한 시각적 도구, 단계별 가이드 및 즉각적인 피드백."] },
            { title: "학생", body: ["학습에 집중할 수 있도록 조율, 메트로놈 및 화성 지원에 빠르게 접근."] },
            { title: "교사", body: ["수업 중 데스크탑이나 모바일에서 즉시 열 수 있는 도구로 음표, 템포 또는 전조를 빠르게 시연."] },
            { title: "전문 음악가", body: ["빠른 확인, 리허설, 여행 및 일상 작업을 위한 경량 도구."] }
          ]
        },
        {
          title: "TuneUniversal의 미래",
          body: [
            "TuneUniversal은 확장 중인 프로젝트입니다. 방향은 빠르고 가볍고 안정적인 상태를 유지하면서 음악 도구, 조율 리소스 및 교육 콘텐츠의 점점 더 완전한 라이브러리를 계속 구축하는 것입니다.",
            "미래 개발에는 새로운 악기, 더 많은 조율 프리셋, 더 자세한 가이드 및 더 나은 다국어 지원이 포함될 수 있습니다."
          ]
        }
      ],
      faq: [
        { question: "TuneUniversal이란 무엇인가요?", answer: "TuneUniversal은 브라우저 기반 음악 도구를 제공하는 무료 플랫폼입니다: 온라인 튜너, 메트로놈, Tap BPM, 소음 측정기 및 코드 전조기." },
        { question: "앱을 설치해야 하나요?", answer: "아니요. 모든 도구는 데스크탑, 태블릿 또는 스마트폰의 브라우저에서 직접 작동합니다." },
        { question: "TuneUniversal은 기타리스트만을 위한 것인가요?", answer: "아니요. 플랫폼은 기타, 베이스, 우쿨렐레, 바이올린 및 기타 많은 악기를 위한 튜너와 다목적 음악 도구를 제공합니다." },
        { question: "TuneUniversal은 계속 성장할 건가요?", answer: "네. 이 프로젝트는 새로운 도구, 새로운 교육 페이지 및 전 세계 음악가를 위한 더 나은 지원으로 발전하도록 설계되었습니다." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "온라인 튜너 열기" },
        { href: "/tools/metronome", label: "메트로놈 사용하기" },
        { href: "/guides", label: "음악 가이드 탐색하기" }
      ]
    },
    "privacy-policy": {
      title: "개인정보 처리방침",
      description: "TuneUniversal이 무료 브라우저 기반 음악 도구에서 개인정보를 다루는 방식입니다.",
      sections: [
        { title: "처리하는 데이터", body: ["TuneUniversal은 음악 도구가 브라우저 안에서 직접 실행되도록 설계되었습니다. 튜너 오디오는 Web Audio API로 로컬에서 분석되며 서버로 업로드되지 않습니다.", "호스팅, 분석 또는 보안 서비스를 통해 페이지 요청, 기기 유형, 브라우저 유형, 대략적인 지역과 같은 기본 기술 데이터를 처리할 수 있습니다."] },
        { title: "마이크 접근", body: ["마이크 권한은 튜너를 활성화할 때만 요청됩니다. 이 권한은 브라우저가 관리하며 사이트 설정에서 언제든지 철회할 수 있습니다.", "마이크 오디오를 의도적으로 녹음, 저장 또는 판매하지 않습니다."] },
        { title: "사용자 선택", body: ["대부분의 도구는 계정 없이 사용할 수 있습니다. 브라우저 로컬 저장소를 지우면 표기법이나 메트로놈 프리셋 같은 저장된 설정을 삭제할 수 있습니다.", `개인정보 관련 문의는 ${commonEmail} 로 연락하세요.`] }
      ]
    },
    "cookie-policy": {
      title: "쿠키 정책",
      description: "TuneUniversal에서 사용하는 쿠키와 로컬 저장소에 대한 안내입니다.",
      sections: [
        { title: "필수 저장소", body: ["사이트는 인터페이스 설정을 기억하고 도구를 더 쉽게 사용하기 위해 필수 브라우저 저장소를 사용할 수 있습니다.", "예를 들면 선택한 음표 표기법과 저장된 메트로놈 프리셋이 있습니다."] },
        { title: "분석 및 광고", body: ["TuneUniversal은 개인정보 보호를 고려한 분석 서비스 또는 광고 파트너를 사용할 수 있습니다. 필수가 아닌 쿠키가 활성화되는 경우 필요한 지역에서는 동의를 요청합니다.", "레이아웃의 광고 공간은 예약된 위치이며 광고 제공업체와 연결할 수 있습니다."] },
        { title: "쿠키 관리", body: ["브라우저 설정에서 쿠키와 로컬 저장소를 차단하거나 삭제할 수 있습니다. 일부 저장된 설정은 초기화될 수 있습니다."] }
      ]
    },
  },
  ar: {
    contact: {
      title: "اتصل بنا",
      description: "تواصل مع TuneUniversal لأي أسئلة أو اقتراحات أو ملاحظات حول المشروع وأدواته الموسيقية.",
      seoTitle: "اتصل بنا | TuneUniversal",
      seoDescription: "تواصل مع TuneUniversal لأسئلة أو اقتراحات أو ملاحظات حول الموالف عبر الإنترنت والميترونوم وأدوات أخرى.",
      sections: [
        { title: "كيفية التواصل", body: ["هل لديك أسئلة أو اقتراحات أو ملاحظات حول TuneUniversal؟ يسعدنا سماعها.", `البريد الإلكتروني: ${supportEmail}`] },
        { title: "الغرض من هذه الصفحة", body: ["استخدم هذه الصفحة للإبلاغ عن المشكلات أو اقتراح أدوات موسيقية جديدة أو الإشارة إلى أخطاء الترجمة.", "الملاحظات حول إمكانية الوصول والثقة والفائدة العملية مرحب بها بشكل خاص."] }
      ],
      ctas: [{ href: "/about", label: "اعرف المزيد عن TuneUniversal" }, { href: "/tools", label: "استكشف الأدوات الموسيقية" }]
    },
    "terms-of-use": {
      title: "شروط الاستخدام",
      description: "اقرأ الشروط الأساسية لاستخدام TuneUniversal وأدواته الموسيقية المجانية عبر الإنترنت.",
      seoTitle: "شروط الاستخدام | TuneUniversal",
      seoDescription: "اقرأ شروط استخدام TuneUniversal: أدوات مجانية، حدود المسؤولية، الملكية الفكرية والتحديثات المستقبلية.",
      sections: [
        { title: "الاستخدام المجاني للخدمات", body: ["يوفر TuneUniversal أدوات موسيقية وأدلة وصفحات تعليمية مجانية للاستخدام الشخصي والتعليمي، طالما كان الاستخدام قانونيا.", "قد يتطور الموقع بمرور الوقت وقد يتم تحديث بعض الأدوات أو إزالتها."] },
        { title: "الدقة والمسؤولية", body: ["تُقدَّم الأدوات كإرشاد عام وللاستخدام العملي، من دون ضمان مطلق لأي سياق احترافي. يُقدَّم الموقع كما هو، في حدود ما يسمح به القانون.", "يظل المستخدم مسؤولا عن كيفية تطبيق المعلومات والأدوات."] },
        { title: "الملكية الفكرية والتغييرات", body: ["تبقى علامة TuneUniversal وهيكله ونصوصه الأصلية وموادّه التعليمية محمية. قد يحدّث TuneUniversal هذه الشروط مستقبلا.", "النسخة المنشورة على الموقع هي النسخة المرجعية للاستخدام المستمر."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "اقرأ سياسة الخصوصية" }, { href: "/cookie-policy", label: "اقرأ سياسة ملفات تعريف الارتباط" }]
    },
    "privacy-policy": {
      title: "سياسة الخصوصية",
      description: "كيف يتعامل TuneUniversal مع الخصوصية في أدوات الموسيقى المجانية داخل المتصفح.",
      sections: [
        { title: "البيانات التي نعالجها", body: ["تم تصميم TuneUniversal لتعمل أدوات الموسيقى مباشرة داخل المتصفح. يتم تحليل صوت الموالف محليا عبر Web Audio API ولا يتم رفعه إلى خوادمنا.", "قد نعالج بيانات تقنية أساسية مثل طلبات الصفحات ونوع الجهاز ونوع المتصفح والمنطقة التقريبية عبر خدمات الاستضافة أو التحليلات أو الأمان."] },
        { title: "الوصول إلى الميكروفون", body: ["يتم طلب إذن الميكروفون فقط عند تفعيل الموالف. يتحكم المتصفح بهذا الإذن ويمكنك سحبه في أي وقت من إعدادات الموقع.", "نحن لا نسجل أو نخزن أو نبيع صوت الميكروفون عمدا."] },
        { title: "اختياراتك", body: ["يمكنك استخدام معظم الأدوات من دون حساب. يمكنك حذف التخزين المحلي في المتصفح لإزالة التفضيلات المحفوظة مثل نظام تدوين النغمات أو إعدادات الميترونوم.", `لأسئلة الخصوصية، تواصل عبر ${commonEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "سياسة ملفات تعريف الارتباط",
      description: "معلومات حول ملفات تعريف الارتباط والتخزين المحلي المستخدم في TuneUniversal.",
      sections: [
        { title: "التخزين الأساسي", body: ["قد يستخدم الموقع التخزين الأساسي في المتصفح لتذكر تفضيلات الواجهة وجعل الأدوات أسهل في الاستخدام.", "تشمل الأمثلة نظام تدوين النغمات المختار وإعدادات الميترونوم المحفوظة."] },
        { title: "التحليلات والإعلانات", body: ["قد يستخدم TuneUniversal خدمات تحليلات تراعي الخصوصية أو شركاء إعلانات. إذا تم تفعيل ملفات تعريف ارتباط غير أساسية، فسيتم طلب الموافقة حيثما كان ذلك مطلوبا.", "مساحات الإعلانات الظاهرة في التخطيط هي مواضع محجوزة يمكن ربطها بمزود إعلانات."] },
        { title: "إدارة ملفات تعريف الارتباط", body: ["يمكنك حظر أو حذف ملفات تعريف الارتباط والتخزين المحلي من إعدادات المتصفح. قد تتم إعادة تعيين بعض التفضيلات المحفوظة."] }
      ]
    },
    about: {
      title: "حول TuneUniversal",
      description: "تعرف على TuneUniversal وأدواته الموسيقية المجانية ومهمته في مساعدة الموسيقيين حول العالم.",
      seoTitle: "حول | TuneUniversal",
      seoDescription: "اكتشف TuneUniversal: موالف عبر الإنترنت، ميترونوم، Tap BPM وأدوات موسيقية مجانية لكل الموسيقيين.",
      sections: [
        {
          title: "مقدمة عن TuneUniversal",
          body: [
            "TuneUniversal منصة موسيقية مجانية مصممة للموسيقيين والطلاب والمعلمين الذين يبحثون عن أدوات بسيطة وسريعة ويمكن الوصول إليها من أي جهاز حديث. يجمع المشروع في مكان واحد موالفا عبر الإنترنت، وموالفات مخصصة لكل آلة، وميترونوم، وTap BPM، ومقياس مستوى الصوت، وناقل أكوردات، وأدلة عملية.",
            "الهدف واضح: تقديم أدوات موسيقية مفيدة تعمل مباشرة في المتصفح، من دون تثبيت، ومن دون حساب إلزامي، ومن دون تعقيد غير ضروري."
          ]
        },
        {
          title: "مهمتنا",
          body: [
            "مهمة TuneUniversal هي جعل الأدوات الموسيقية الأساسية في متناول أكبر عدد ممكن من الناس. لا ينبغي أن يعتمد الضبط والتحكم في الإيقاع وأساسيات الهارموني على برامج باهظة أو إعدادات معقدة.",
            "يركز المشروع على تجربة واضحة للمبتدئين، ومرونة للتدريب المنتظم، وسرعة للاستخدام اليومي."
          ]
        },
        {
          title: "ماذا تجد على TuneUniversal",
          body: ["توفر المنصة عدة فئات من الأدوات والموارد التي تعمل معا."],
          items: [
            { title: "موالفات عبر الإنترنت", body: ["موالف عام وصفحات مخصصة مثل موالف الغيتار وموالف الباس وموالف اليوكليلي وموالف الكمان، للضبط السريع عبر الميكروفون."] },
            { title: "الإيقاع والتمبو", body: ["ميترونوم عبر الإنترنت مع BPM قابل للتعديل وTap BPM لتقدير إيقاع أغنية أو جلسة بسرعة."] },
            { title: "أدوات الصوت والأدوات المساعدة", body: ["مقياس مستوى الصوت وناقل الأكوردات وأدوات عملية صغيرة أخرى للعمل الهارموني والاستماع والإعداد."] },
            { title: "الأدلة والموارد التعليمية", body: ["أدلة الضبط والمقالات العملية والمحتوى التعليمي الذي يساعد المبتدئين والعازفين المتوسطين على فهم ما يفعلونه بشكل أفضل."] }
          ]
        },
        {
          title: "لجميع المستويات",
          body: ["تم تصميم TuneUniversal لمواكبة احتياجات متنوعة من دون جعل التجربة معقدة."],
          items: [
            { title: "المبتدئون", body: ["أدوات بصرية واضحة وأدلة خطوة بخطوة وملاحظات فورية لبناء عادات جيدة منذ البداية."] },
            { title: "الطلاب", body: ["وصول سريع إلى الضبط والميترونوم والدعم الهارموني للبقاء مركزا على التعلم."] },
            { title: "المعلمون", body: ["أدوات يمكن فتحها فورا على سطح المكتب أو الجوال أثناء الدرس، لعرض نغمة أو إيقاع أو نقل بسرعة."] },
            { title: "الموسيقيون المحترفون", body: ["أدوات خفيفة للفحوصات السريعة والبروفات والسفر والعمل اليومي."] }
          ]
        },
        {
          title: "مستقبل TuneUniversal",
          body: [
            "TuneUniversal مشروع متنامٍ. الاتجاه هو الاستمرار في بناء مكتبة أكثر اكتمالا من الأدوات الموسيقية وموارد الضبط والمحتوى التعليمي، مع الحفاظ على السرعة والخفة والموثوقية.",
            "قد تشمل التطورات المستقبلية آلات جديدة والمزيد من إعدادات الضبط وأدلة أكثر تفصيلا ودعما أفضل لتعدد اللغات."
          ]
        }
      ],
      faq: [
        { question: "ما هو TuneUniversal؟", answer: "TuneUniversal منصة مجانية تضم أدوات موسيقية تعمل في المتصفح: موالف عبر الإنترنت، ميترونوم، Tap BPM، مقياس مستوى الصوت وناقل أكوردات." },
        { question: "هل يجب تثبيت تطبيق؟", answer: "لا. تعمل كل الأدوات مباشرة في المتصفح، على سطح المكتب أو الجهاز اللوحي أو الهاتف الذكي." },
        { question: "هل TuneUniversal مخصص لعازفي الغيتار فقط؟", answer: "لا. توفر المنصة موالفات للغيتار والباس واليوكليلي والكمان والعديد من الآلات الأخرى، إضافة إلى أدوات موسيقية متعددة الاستخدامات." },
        { question: "هل سيستمر TuneUniversal في النمو؟", answer: "نعم. صُمم المشروع للتطور بأدوات جديدة وصفحات تعليمية ودعم أفضل للموسيقيين حول العالم." }
      ],
      ctas: [
        { href: "/tools/guitar-tuner", label: "افتح الموالف عبر الإنترنت" },
        { href: "/tools/metronome", label: "استخدم الميترونوم" },
        { href: "/guides", label: "استكشف الأدلة الموسيقية" }
      ]
    },
  }
};

const extendedAboutPages: Partial<Record<ExtendedLocale, Partial<StaticPageContent>>> = {
  nl: {
    title: "Over TuneUniversal",
    description: "Lees meer over TuneUniversal, zijn gratis muziektools en zijn missie om muzikanten wereldwijd te helpen.",
    seoTitle: "Over ons | TuneUniversal",
    seoDescription: "Ontdek TuneUniversal: online stemmer, metronoom, Tap BPM en gratis muziektools voor alle muzikanten.",
    sections: [
      {
        title: "Introductie tot TuneUniversal",
        body: [
          "TuneUniversal is een gratis muziekplatform voor muzikanten, studenten en leraren die eenvoudige, snelle en op elk modern apparaat toegankelijke tools zoeken. Het project brengt op één plek een online stemmer, instrumentspecifieke stemmers, een metronoom, Tap BPM, een geluidsmeter, een akkoordtransponeerder en praktische gidsen samen.",
          "Het doel is duidelijk: nuttige muziektools aanbieden die rechtstreeks in de browser werken, zonder installatie, zonder verplicht account en zonder onnodige complexiteit."
        ]
      },
      {
        title: "Onze missie",
        body: [
          "De missie van TuneUniversal is om essentiële muziektools toegankelijk te maken voor zoveel mogelijk mensen. Stemmen, tempobeheer en de basisprincipes van harmonie mogen niet afhangen van dure software of ingewikkelde configuraties.",
          "Het project biedt een duidelijke ervaring voor beginners, flexibiliteit voor regelmatige oefening en snelheid voor dagelijks gebruik."
        ]
      },
      {
        title: "Wat je vindt op TuneUniversal",
        body: ["Het platform biedt meerdere categorieën tools en middelen die samenwerken."],
        items: [
          { title: "Online stemmers", body: ["Een universele stemmer en speciale pagina's zoals gitaarstemmer, basstemmer, ukelelestemmer en vioolstemmer, voor snel stemmen via microfoon."] },
          { title: "Ritme en tempo", body: ["Een online metronoom met instelbare BPM en Tap BPM om snel het tempo van een nummer of sessie te schatten."] },
          { title: "Audiohulpmiddelen", body: ["Geluidsmeter, akkoordtransponeerder en andere kleine praktische tools voor harmoniewerk, luisteren en instellen."] },
          { title: "Gidsen en leermiddelen", body: ["Stemgidsen, praktische artikelen en educatieve inhoud die beginners en gevorderde spelers helpen beter te begrijpen wat ze doen."] }
        ]
      },
      {
        title: "Voor alle niveaus",
        body: ["TuneUniversal is ontworpen om diverse behoeften te begeleiden zonder de ervaring ingewikkeld te maken."],
        items: [
          { title: "Beginners", body: ["Duidelijke visuele tools, stapsgewijze gidsen en directe feedback om vanaf het begin goede gewoonten op te bouwen."] },
          { title: "Studenten", body: ["Snelle toegang tot stemmen, metronoom en harmonieondersteuning om gefocust te blijven op leren."] },
          { title: "Leraren", body: ["Tools die direct op desktop of mobiel tijdens de les geopend kunnen worden, om snel een noot, tempo of transpositie te demonstreren."] },
          { title: "Professionele muzikanten", body: ["Lichte tools voor snelle controles, repetities, reizen en dagelijks werk."] }
        ]
      },
      {
        title: "De toekomst van TuneUniversal",
        body: [
          "TuneUniversal is een groeiend project. De richting is om een steeds completere bibliotheek van muziektools, stemhulpbronnen en educatieve inhoud te blijven opbouwen, terwijl het snel, licht en betrouwbaar blijft.",
          "Toekomstige ontwikkelingen kunnen nieuwe instrumenten, meer stemmingsinstellingen, gedetailleerdere gidsen en betere meertalige ondersteuning omvatten."
        ]
      }
    ],
    faq: [
      { question: "Wat is TuneUniversal?", answer: "TuneUniversal is een gratis platform met browsergebaseerde muziektools: online stemmer, metronoom, Tap BPM, geluidsmeter en akkoordtransponeerder." },
      { question: "Moet ik een app installeren?", answer: "Nee. Alle tools werken rechtstreeks in de browser, op desktop, tablet of smartphone." },
      { question: "Is TuneUniversal alleen voor gitaristen?", answer: "Nee. Het platform biedt stemmers voor gitaar, bas, ukelele, viool en vele andere instrumenten, plus veelzijdige muziektools." },
      { question: "Blijft TuneUniversal groeien?", answer: "Ja. Het project is ontworpen om te groeien met nieuwe tools, nieuwe educatieve pagina's en betere ondersteuning voor muzikanten wereldwijd." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Online stemmer openen" },
      { href: "/tools/metronome", label: "Metronoom gebruiken" },
      { href: "/guides", label: "Muziekgidsen verkennen" }
    ]
  },
  pl: {
    title: "O TuneUniversal",
    description: "Dowiedz się o TuneUniversal, jego darmowych narzędziach muzycznych i misji pomagania muzykom na całym świecie.",
    seoTitle: "O nas | TuneUniversal",
    seoDescription: "Odkryj TuneUniversal: internetowy stroik, metronom, Tap BPM i darmowe narzędzia muzyczne dla wszystkich muzyków.",
    sections: [
      {
        title: "Wprowadzenie do TuneUniversal",
        body: [
          "TuneUniversal to darmowa platforma muzyczna dla muzyków, studentów i nauczycieli, którzy szukają prostych, szybkich i dostępnych z każdego nowoczesnego urządzenia narzędzi. Projekt łączy w jednym miejscu internetowy stroik, dedykowane stroiki dla różnych instrumentów, metronom, Tap BPM, miernik poziomu dźwięku, transponator akordów i praktyczne poradniki.",
          "Cel jest jasny: oferować przydatne narzędzia muzyczne działające bezpośrednio w przeglądarce, bez instalacji, bez obowiązkowego konta i bez zbędnej złożoności."
        ]
      },
      {
        title: "Nasza misja",
        body: [
          "Misją TuneUniversal jest udostępnienie podstawowych narzędzi muzycznych jak największej liczbie osób. Strojenie, kontrola tempa i podstawy harmonii nie powinny zależeć od drogiego oprogramowania ani skomplikowanych konfiguracji.",
          "Projekt stawia na przejrzyste doświadczenie dla początkujących, elastyczność dla regularnych ćwiczeń i szybkość do codziennego użytku."
        ]
      },
      {
        title: "Co znajdziesz na TuneUniversal",
        body: ["Platforma oferuje kilka kategorii narzędzi i zasobów, które współpracują ze sobą."],
        items: [
          { title: "Internetowe stroiki", body: ["Uniwersalny stroik i dedykowane strony jak stroik do gitary, stroik do basu, stroik do ukulele i stroik do skrzypiec, do szybkiego strojenia przez mikrofon."] },
          { title: "Rytm i tempo", body: ["Internetowy metronom z regulowanym BPM i Tap BPM do szybkiego szacowania tempa piosenki lub sesji."] },
          { title: "Narzędzia audio i narzędzia pomocnicze", body: ["Miernik poziomu dźwięku, transponator akordów i inne małe praktyczne narzędzia do pracy harmonicznej, słuchania i konfiguracji."] },
          { title: "Poradniki i materiały edukacyjne", body: ["Poradniki strojenia, praktyczne artykuły i treści edukacyjne pomagające początkującym i średnio zaawansowanym lepiej rozumieć to, co robią."] }
        ]
      },
      {
        title: "Dla wszystkich poziomów",
        body: ["TuneUniversal jest zaprojektowany, aby towarzyszyć różnorodnym potrzebom bez komplikowania doświadczenia."],
        items: [
          { title: "Początkujący", body: ["Czytelne narzędzia wizualne, przewodniki krok po kroku i natychmiastowa informacja zwrotna, by od początku budować dobre nawyki."] },
          { title: "Studenci", body: ["Szybki dostęp do strojenia, metronomu i wsparcia harmonicznego, by pozostać skupionym na nauce."] },
          { title: "Nauczyciele", body: ["Narzędzia otwierane natychmiast na komputerze lub telefonie podczas lekcji, by szybko zademonstrować nutę, tempo lub transpozycję."] },
          { title: "Profesjonalni muzycy", body: ["Lekkie narzędzia do szybkich sprawdzeń, prób, podróży i codziennej pracy."] }
        ]
      },
      {
        title: "Przyszłość TuneUniversal",
        body: [
          "TuneUniversal to rozwijający się projekt. Kierunek jest jeden: budować coraz pełniejszą bibliotekę narzędzi muzycznych, zasobów strojenia i treści edukacyjnych, zachowując przy tym szybkość, lekkość i niezawodność.",
          "Przyszłe prace mogą obejmować nowe instrumenty, więcej presetów strojenia, bardziej szczegółowe poradniki i lepszą obsługę wielu języków."
        ]
      }
    ],
    faq: [
      { question: "Czym jest TuneUniversal?", answer: "TuneUniversal to darmowa platforma z narzędziami muzycznymi opartymi na przeglądarce: internetowy stroik, metronom, Tap BPM, miernik dźwięku i transponator akordów." },
      { question: "Czy trzeba instalować aplikację?", answer: "Nie. Wszystkie narzędzia działają bezpośrednio w przeglądarce, na komputerze, tablecie lub smartfonie." },
      { question: "Czy TuneUniversal jest tylko dla gitarzystów?", answer: "Nie. Platforma oferuje stroiki do gitary, basu, ukulele, skrzypiec i wielu innych instrumentów, a także wszechstronne narzędzia muzyczne." },
      { question: "Czy TuneUniversal będzie się rozwijać?", answer: "Tak. Projekt jest zaprojektowany, by rosnąć wraz z nowymi narzędziami, stronami edukacyjnymi i lepszym wsparciem dla muzyków na całym świecie." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Otwórz internetowy stroik" },
      { href: "/tools/metronome", label: "Użyj metronomu" },
      { href: "/guides", label: "Przeglądaj poradniki muzyczne" }
    ]
  },
  tr: {
    title: "TuneUniversal Hakkında",
    description: "TuneUniversal, ücretsiz müzik araçları ve dünya genelinde müzisyenlere yardım etme misyonu hakkında bilgi edinin.",
    seoTitle: "Hakkımızda | TuneUniversal",
    seoDescription: "TuneUniversal'i keşfedin: online akordör, metronom, Tap BPM ve tüm müzisyenler için ücretsiz müzik araçları.",
    sections: [
      {
        title: "TuneUniversal'e Giriş",
        body: [
          "TuneUniversal, basit, hızlı ve herhangi bir modern cihazdan erişilebilir araçlar arayan müzisyenler, öğrenciler ve öğretmenler için ücretsiz bir müzik platformudur. Proje; online akordör, enstrümana özel akordörler, metronom, Tap BPM, ses seviyesi ölçer, akor transpoze aracı ve pratik rehberleri tek bir yerde bir araya getirir.",
          "Amaç nettir: kurulum gerektirmeden, zorunlu hesap oluşturmadan ve gereksiz karmaşıklık olmadan doğrudan tarayıcıda çalışan kullanışlı müzik araçları sunmak."
        ]
      },
      {
        title: "Misyonumuz",
        body: [
          "TuneUniversal'in misyonu, temel müzik araçlarını mümkün olduğunca çok insanın erişimine açmaktır. Akort etme, tempo kontrolü ve temel harmoni, pahalı yazılımlara veya karmaşık yapılandırmalara bağımlı olmamalıdır.",
          "Proje; yeni başlayanlar için net bir deneyim, düzenli pratik için esneklik ve günlük kullanım için hız sunmayı hedeflemektedir."
        ]
      },
      {
        title: "TuneUniversal'de Neler Bulacaksınız",
        body: ["Platform, birlikte çalışan birçok araç ve kaynak kategorisi sunar."],
        items: [
          { title: "Online akordörler", body: ["Mikrofon ile hızlı akort için evrensel akordör ve gitar akordörü, bas akordörü, ukulele akordörü ve keman akordörü gibi özel sayfalar."] },
          { title: "Ritim ve tempo", body: ["Ayarlanabilir BPM'li online metronom ve bir şarkının veya seansın temposunu hızlıca tahmin etmek için Tap BPM."] },
          { title: "Ses araçları ve yardımcı programlar", body: ["Ses seviyesi ölçer, akor transpoze aracı ve harmoni çalışması, dinleme ve ayarlama için küçük pratik araçlar."] },
          { title: "Rehberler ve eğitim kaynakları", body: ["Yeni başlayanların ve orta seviye müzisyenlerin ne yaptıklarını daha iyi anlamalarına yardımcı olan akort rehberleri, pratik makaleler ve eğitim içerikleri."] }
        ]
      },
      {
        title: "Her Seviyeye Uygun",
        body: ["TuneUniversal, deneyimi zorlaştırmadan çeşitli ihtiyaçlara eşlik edecek şekilde tasarlanmıştır."],
        items: [
          { title: "Yeni başlayanlar", body: ["Baştan iyi alışkanlıklar oluşturmak için net görsel araçlar, adım adım rehberler ve anlık geri bildirim."] },
          { title: "Öğrenciler", body: ["Öğrenmeye odaklanmak için akort, metronom ve harmoni desteğine hızlı erişim."] },
          { title: "Öğretmenler", body: ["Ders sırasında masaüstü veya mobilde anında açılabilen araçlar; bir notayı, tempoyu veya transpozeyi hızlıca göstermek için."] },
          { title: "Profesyonel müzisyenler", body: ["Hızlı kontroller, provalar, seyahatler ve günlük çalışma için hafif araçlar."] }
        ]
      },
      {
        title: "TuneUniversal'in Geleceği",
        body: [
          "TuneUniversal büyüyen bir projedir. Hedef; hızlı, hafif ve güvenilir kalırken müzik araçları, akort kaynakları ve eğitim içeriklerinden oluşan giderek daha eksiksiz bir kütüphane oluşturmaya devam etmektir.",
          "Gelecekteki geliştirmeler; yeni enstrümanlar, daha fazla akort önayarı, daha ayrıntılı rehberler ve daha iyi çok dilli destek içerebilir."
        ]
      }
    ],
    faq: [
      { question: "TuneUniversal nedir?", answer: "TuneUniversal, tarayıcı tabanlı müzik araçları sunan ücretsiz bir platformdur: online akordör, metronom, Tap BPM, ses seviyesi ölçer ve akor transpoze aracı." },
      { question: "Bir uygulama yüklemek gerekiyor mu?", answer: "Hayır. Tüm araçlar, masaüstü, tablet veya akıllı telefonda doğrudan tarayıcıda çalışır." },
      { question: "TuneUniversal sadece gitaristler için mi?", answer: "Hayır. Platform; gitar, bas, ukulele, keman ve diğer birçok enstrüman için akordörler ile çok yönlü müzik araçları sunar." },
      { question: "TuneUniversal büyümeye devam edecek mi?", answer: "Evet. Proje; yeni araçlar, eğitim sayfaları ve dünya genelindeki müzisyenler için daha iyi destek ile gelişmeye devam etmek üzere tasarlanmıştır." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Online akordörü aç" },
      { href: "/tools/metronome", label: "Metronomu kullan" },
      { href: "/guides", label: "Müzik rehberlerini keşfet" }
    ]
  },
  cs: {
    title: "O TuneUniversal",
    description: "Zjistěte více o TuneUniversal, jeho bezplatných hudebních nástrojích a misi pomáhat hudebníkům po celém světě.",
    seoTitle: "O nás | TuneUniversal",
    seoDescription: "Objevte TuneUniversal: online ladička, metronom, Tap BPM a bezplatné hudební nástroje pro všechny hudebníky.",
    sections: [
      {
        title: "Představení TuneUniversal",
        body: [
          "TuneUniversal je bezplatná hudební platforma pro hudebníky, studenty a učitele, kteří hledají jednoduché, rychlé a na každém moderním zařízení přístupné nástroje. Projekt sdružuje na jednom místě online ladičku, ladičky pro konkrétní nástroje, metronom, Tap BPM, měřič hlasitosti, transponér akordů a praktické průvodce.",
          "Cíl je jasný: nabízet užitečné hudební nástroje fungující přímo v prohlížeči, bez instalace, bez povinného účtu a bez zbytečné složitosti."
        ]
      },
      {
        title: "Naše poslání",
        body: [
          "Posláním TuneUniversal je zpřístupnit základní hudební nástroje co největšímu počtu lidí. Ladění, kontrola tempa a základy harmonie by neměly záviset na drahém softwaru ani složitých konfiguracích.",
          "Projekt vsází na přehledný zážitek pro začátečníky, flexibilitu pro pravidelné cvičení a rychlost pro každodenní použití."
        ]
      },
      {
        title: "Co najdete na TuneUniversal",
        body: ["Platforma nabízí několik kategorií nástrojů a zdrojů, které spolupracují."],
        items: [
          { title: "Online ladičky", body: ["Univerzální ladička a specializované stránky jako ladička kytary, ladička baskytary, ladička ukulele a ladička housle pro rychlé ladění pomocí mikrofonu."] },
          { title: "Rytmus a tempo", body: ["Online metronom s nastavitelným BPM a Tap BPM pro rychlý odhad tempa skladby nebo cvičební relace."] },
          { title: "Zvukové nástroje a pomůcky", body: ["Měřič hlasitosti, transponér akordů a další malé praktické nástroje pro harmonickou práci, poslech a nastavení."] },
          { title: "Průvodci a vzdělávací zdroje", body: ["Průvodci laděním, praktické články a vzdělávací obsah, který pomáhá začátečníkům i mírně pokročilým lépe rozumět tomu, co dělají."] }
        ]
      },
      {
        title: "Pro všechny úrovně",
        body: ["TuneUniversal je navržen tak, aby doprovázel různorodé potřeby, aniž by zážitek komplikoval."],
        items: [
          { title: "Začátečníci", body: ["Přehledné vizuální nástroje, průvodci krok za krokem a okamžitá zpětná vazba pro budování dobrých návyků od samého začátku."] },
          { title: "Studenti", body: ["Rychlý přístup k ladění, metronomu a harmonické podpoře, aby zůstali soustředěni na učení."] },
          { title: "Učitelé", body: ["Nástroje okamžitě otevřitelné na počítači nebo mobilu během hodiny, aby rychle předvedli notu, tempo nebo transpozici."] },
          { title: "Profesionální hudebníci", body: ["Lehké nástroje pro rychlé kontroly, zkoušky, cestování a každodenní práci."] }
        ]
      },
      {
        title: "Budoucnost TuneUniversal",
        body: [
          "TuneUniversal je rostoucí projekt. Směr je jasný: budovat stále kompletnější knihovnu hudebních nástrojů, zdrojů pro ladění a vzdělávacího obsahu, přičemž zůstat rychlý, lehký a spolehlivý.",
          "Budoucí rozvoj může zahrnovat nové nástroje, více předvoleb ladění, podrobnější průvodce a lepší vícejazyčnou podporu."
        ]
      }
    ],
    faq: [
      { question: "Co je TuneUniversal?", answer: "TuneUniversal je bezplatná platforma s hudebními nástroji v prohlížeči: online ladička, metronom, Tap BPM, měřič hlasitosti a transponér akordů." },
      { question: "Je potřeba instalovat aplikaci?", answer: "Ne. Všechny nástroje fungují přímo v prohlížeči, na počítači, tabletu nebo smartphonu." },
      { question: "Je TuneUniversal pouze pro kytaristy?", answer: "Ne. Platforma nabízí ladičky pro kytaru, baskytaru, ukulele, housle a mnoho dalších nástrojů, plus všestranné hudební pomůcky." },
      { question: "Bude TuneUniversal dále růst?", answer: "Ano. Projekt je navržen tak, aby se vyvíjel s novými nástroji, vzdělávacími stránkami a lepší podporou pro hudebníky po celém světě." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Otevřít online ladičku" },
      { href: "/tools/metronome", label: "Použít metronom" },
      { href: "/guides", label: "Prozkoumat hudební průvodce" }
    ]
  },
  sv: {
    title: "Om TuneUniversal",
    description: "Lär dig mer om TuneUniversal, dess gratis musikverktyg och uppdraget att hjälpa musiker världen över.",
    seoTitle: "Om oss | TuneUniversal",
    seoDescription: "Upptäck TuneUniversal: online stämmare, metronom, Tap BPM och gratis musikverktyg för alla musiker.",
    sections: [
      {
        title: "Introduktion till TuneUniversal",
        body: [
          "TuneUniversal är en gratis musikplattform för musiker, studenter och lärare som söker enkla, snabba och tillgängliga verktyg från vilken modern enhet som helst. Projektet samlar på ett ställe en online-stämmare, instrumentspecifika stämmare, ett metronom, Tap BPM, en ljudnivåmätare, en ackordstransponerare och praktiska guider.",
          "Målet är tydligt: erbjuda användbara musikverktyg som fungerar direkt i webbläsaren, utan installation, utan obligatoriskt konto och utan onödig komplexitet."
        ]
      },
      {
        title: "Vårt uppdrag",
        body: [
          "TuneUniversals uppdrag är att göra grundläggande musikverktyg tillgängliga för så många som möjligt. Stämning, tempokontroll och harmonins grunder ska inte behöva bero på dyr programvara eller komplicerade konfigurationer.",
          "Projektet strävar efter en tydlig upplevelse för nybörjare, flexibilitet för regelbunden övning och hastighet för dagligt bruk."
        ]
      },
      {
        title: "Vad du hittar på TuneUniversal",
        body: ["Plattformen erbjuder flera kategorier av verktyg och resurser som samarbetar."],
        items: [
          { title: "Online-stämmare", body: ["En universell stämmare och dedikerade sidor som gitarrstämmare, basstämmare, ukulelestämmare och fiolstämmare för snabb stämning via mikrofon."] },
          { title: "Rytm och tempo", body: ["Ett online-metronom med justerbar BPM och Tap BPM för att snabbt uppskatta tempot i en låt eller session."] },
          { title: "Ljudverktyg och hjälpmedel", body: ["Ljudnivåmätare, ackordstransponerare och andra små praktiska verktyg för harmoniskt arbete, lyssnande och inställningar."] },
          { title: "Guider och utbildningsresurser", body: ["Stämningsguider, praktiska artiklar och utbildningsinnehåll som hjälper nybörjare och medelavancerade att bättre förstå vad de gör."] }
        ]
      },
      {
        title: "För alla nivåer",
        body: ["TuneUniversal är utformat för att möta varierande behov utan att göra upplevelsen komplicerad."],
        items: [
          { title: "Nybörjare", body: ["Tydliga visuella verktyg, steg-för-steg-guider och omedelbar feedback för att bygga goda vanor från start."] },
          { title: "Studenter", body: ["Snabb åtkomst till stämning, metronom och harmoniestöd för att hålla fokus på lärandet."] },
          { title: "Lärare", body: ["Verktyg som omedelbart kan öppnas på dator eller mobil under lektionen, för att snabbt demonstrera en not, ett tempo eller en transponering."] },
          { title: "Professionella musiker", body: ["Lätta verktyg för snabba kontroller, repetitioner, resor och dagligt arbete."] }
        ]
      },
      {
        title: "TuneUniversals framtid",
        body: [
          "TuneUniversal är ett växande projekt. Inriktningen är att fortsätta bygga ett allt mer komplett bibliotek av musikverktyg, stämningsresurser och utbildningsinnehåll, med bibehållen snabbhet, lätthet och tillförlitlighet.",
          "Framtida utveckling kan inkludera nya instrument, fler stämningsinställningar, mer detaljerade guider och bättre flerspråkigt stöd."
        ]
      }
    ],
    faq: [
      { question: "Vad är TuneUniversal?", answer: "TuneUniversal är en gratis plattform med webbläsarbaserade musikverktyg: online-stämmare, metronom, Tap BPM, ljudnivåmätare och ackordstransponerare." },
      { question: "Behöver jag installera en app?", answer: "Nej. Alla verktyg fungerar direkt i webbläsaren, på dator, surfplatta eller smartphone." },
      { question: "Är TuneUniversal bara för gitarrister?", answer: "Nej. Plattformen erbjuder stämmare för gitarr, bas, ukulele, fiol och många andra instrument, plus mångsidiga musikverktyg." },
      { question: "Kommer TuneUniversal att fortsätta växa?", answer: "Ja. Projektet är utformat för att utvecklas med nya verktyg, utbildningssidor och bättre stöd för musiker världen över." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Öppna online-stämmare" },
      { href: "/tools/metronome", label: "Använd metronom" },
      { href: "/guides", label: "Utforska musikguider" }
    ]
  },
  "pt-BR": {
    title: "Sobre o TuneUniversal",
    description: "Conheça o TuneUniversal, suas ferramentas musicais gratuitas e sua missão de ajudar músicos em todo o mundo.",
    seoTitle: "Sobre | TuneUniversal",
    seoDescription: "Conheça o TuneUniversal: afinador online, metrônomo, Tap BPM e ferramentas musicais gratuitas para todos os músicos.",
    sections: [
      {
        title: "Introdução ao TuneUniversal",
        body: [
          "O TuneUniversal é uma plataforma musical gratuita para músicos, estudantes e professores que buscam ferramentas simples, rápidas e acessíveis em qualquer dispositivo moderno. O projeto reúne em um só lugar um afinador online, afinadores dedicados por instrumento, um metrônomo, Tap BPM, um decibelímetro, um transpositor de acordes e guias práticos.",
          "O objetivo é claro: oferecer ferramentas musicais úteis que funcionem diretamente no navegador, sem instalação, sem conta obrigatória e sem complexidade desnecessária."
        ]
      },
      {
        title: "Nossa missão",
        body: [
          "A missão do TuneUniversal é tornar as ferramentas musicais essenciais acessíveis ao maior número possível de pessoas. Afinação, controle de tempo e fundamentos de harmonia não deveriam depender de softwares caros nem de configurações complicadas.",
          "O projeto aposta em uma experiência clara para iniciantes, flexível para a prática regular e rápida para o uso diário."
        ]
      },
      {
        title: "O que você vai encontrar no TuneUniversal",
        body: ["A plataforma oferece várias categorias de ferramentas e recursos que trabalham juntos."],
        items: [
          { title: "Afinadores online", body: ["Um afinador universal e páginas dedicadas como afinador de violão, afinador de contrabaixo, afinador de ukulele e afinador de violino para afinar rapidamente pelo microfone."] },
          { title: "Ritmo e tempo", body: ["Um metrônomo online com BPM ajustável e Tap BPM para estimar rapidamente o andamento de uma música ou sessão."] },
          { title: "Ferramentas de áudio e utilitários", body: ["Decibelímetro, transpositor de acordes e outras ferramentas práticas para trabalho harmônico, escuta e configuração."] },
          { title: "Guias e recursos educativos", body: ["Guias de afinação, artigos práticos e conteúdo educativo que ajudam iniciantes e músicos intermediários a entender melhor o que estão fazendo."] }
        ]
      },
      {
        title: "Para todos os níveis",
        body: ["O TuneUniversal foi projetado para atender necessidades variadas sem tornar a experiência complicada."],
        items: [
          { title: "Iniciantes", body: ["Ferramentas visuais claras, guias passo a passo e resposta imediata para construir bons hábitos desde o início."] },
          { title: "Estudantes", body: ["Acesso rápido à afinação, ao metrônomo e ao suporte harmônico para manter o foco no aprendizado."] },
          { title: "Professores", body: ["Ferramentas que abrem instantaneamente no computador ou celular durante as aulas, para demonstrar rapidamente uma nota, um andamento ou uma transposição."] },
          { title: "Músicos profissionais", body: ["Ferramentas leves para verificações rápidas, ensaios, viagens e trabalho diário."] }
        ]
      },
      {
        title: "O futuro do TuneUniversal",
        body: [
          "O TuneUniversal é um projeto em expansão. A direção é continuar construindo uma biblioteca cada vez mais completa de ferramentas musicais, recursos de afinação e conteúdo educativo, mantendo sempre uma experiência rápida, leve e confiável.",
          "Os desenvolvimentos futuros podem incluir novos instrumentos, mais presets de afinação, guias mais detalhados e melhor suporte multilíngue."
        ]
      }
    ],
    faq: [
      { question: "O que é o TuneUniversal?", answer: "O TuneUniversal é uma plataforma gratuita com ferramentas musicais no navegador: afinador online, metrônomo, Tap BPM, decibelímetro e transpositor de acordes." },
      { question: "Preciso instalar um aplicativo?", answer: "Não. Todas as ferramentas funcionam diretamente no navegador, no computador, tablet ou smartphone." },
      { question: "O TuneUniversal é só para violonistas?", answer: "Não. A plataforma oferece afinadores para violão, contrabaixo, ukulele, violino e muitos outros instrumentos, além de ferramentas musicais versáteis." },
      { question: "O TuneUniversal vai continuar crescendo?", answer: "Sim. O projeto foi criado para evoluir com novas ferramentas, páginas educativas e melhor suporte para músicos no mundo inteiro." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Abrir o afinador online" },
      { href: "/tools/metronome", label: "Usar o metrônomo" },
      { href: "/guides", label: "Explorar os guias musicais" }
    ]
  },
  hi: {
    title: "TuneUniversal के बारे में",
    description: "TuneUniversal, इसके मुफ्त संगीत टूल्स और दुनिया भर के संगीतकारों की मदद करने के मिशन के बारे में जानें।",
    seoTitle: "हमारे बारे में | TuneUniversal",
    seoDescription: "TuneUniversal खोजें: ऑनलाइन ट्यूनर, मेट्रोनोम, Tap BPM और सभी संगीतकारों के लिए मुफ्त संगीत टूल्स।",
    sections: [
      {
        title: "TuneUniversal का परिचय",
        body: [
          "TuneUniversal एक मुफ्त संगीत प्लेटफ़ॉर्म है जो संगीतकारों, छात्रों और शिक्षकों के लिए बनाया गया है जो किसी भी आधुनिक डिवाइस पर सरल, तेज़ और सुलभ टूल्स चाहते हैं। यह प्रोजेक्ट एक ऑनलाइन ट्यूनर, समर्पित इंस्ट्रूमेंट ट्यूनर, एक मेट्रोनोम, Tap BPM, एक साउंड लेवल मीटर, एक कॉर्ड ट्रांसपोज़र और व्यावहारिक गाइड को एक जगह एकत्रित करता है।",
          "लक्ष्य स्पष्ट है: उपयोगी संगीत टूल्स प्रदान करना जो सीधे ब्राउज़र में काम करें, बिना इंस्टॉलेशन के, बिना अनिवार्य अकाउंट के और बिना अनावश्यक जटिलता के।"
        ]
      },
      {
        title: "हमारा मिशन",
        body: [
          "TuneUniversal का मिशन है कि मूलभूत संगीत टूल्स को जितने संभव हो उतने लोगों तक पहुंचाया जाए। ट्यूनिंग, टेम्पो नियंत्रण और हार्मनी की बुनियाद महंगे सॉफ्टवेयर या जटिल सेटअप पर निर्भर नहीं होनी चाहिए।",
          "यह प्रोजेक्ट शुरुआती लोगों के लिए स्पष्ट अनुभव, नियमित अभ्यास के लिए लचीलापन और दैनिक उपयोग के लिए गति प्रदान करता है।"
        ]
      },
      {
        title: "TuneUniversal पर क्या मिलेगा",
        body: ["प्लेटफ़ॉर्म टूल्स और संसाधनों की कई श्रेणियां प्रदान करता है जो मिलकर काम करती हैं।"],
        items: [
          { title: "ऑनलाइन ट्यूनर", body: ["एक यूनिवर्सल ट्यूनर और समर्पित पेज जैसे गिटार ट्यूनर, बास ट्यूनर, उकुलेले ट्यूनर और वायलिन ट्यूनर, माइक्रोफ़ोन से तेज़ ट्यूनिंग के लिए।"] },
          { title: "लय और टेम्पो", body: ["एडजस्टेबल BPM वाला ऑनलाइन मेट्रोनोम और किसी गाने या सेशन का टेम्पो तेज़ी से अनुमान लगाने के लिए Tap BPM।"] },
          { title: "ऑडियो टूल्स और यूटिलिटीज़", body: ["साउंड लेवल मीटर, कॉर्ड ट्रांसपोज़र और अन्य छोटे व्यावहारिक टूल्स जो हार्मोनिक वर्क, सुनने और सेटअप के लिए हैं।"] },
          { title: "गाइड और शैक्षिक संसाधन", body: ["ट्यूनिंग गाइड, व्यावहारिक लेख और शैक्षिक सामग्री जो शुरुआती और मध्यम स्तर के वादकों को बेहतर समझने में मदद करती है।"] }
        ]
      },
      {
        title: "सभी स्तरों के लिए",
        body: ["TuneUniversal को अनुभव को जटिल बनाए बिना विभिन्न जरूरतों को पूरा करने के लिए डिज़ाइन किया गया है।"],
        items: [
          { title: "शुरुआती लोग", body: ["शुरू से अच्छी आदतें बनाने के लिए स्पष्ट विज़ुअल टूल्स, चरण-दर-चरण गाइड और तत्काल फीडबैक।"] },
          { title: "छात्र", body: ["सीखने पर ध्यान केंद्रित रखने के लिए ट्यूनिंग, मेट्रोनोम और हार्मनी सपोर्ट तक तेज़ पहुंच।"] },
          { title: "शिक्षक", body: ["पाठ के दौरान डेस्कटॉप या मोबाइल पर तुरंत खुलने वाले टूल्स, कोई नोट, टेम्पो या ट्रांसपोज़िशन जल्दी दिखाने के लिए।"] },
          { title: "पेशेवर संगीतकार", body: ["त्वरित जांच, रिहर्सल, यात्रा और दैनिक काम के लिए हल्के टूल्स।"] }
        ]
      },
      {
        title: "TuneUniversal का भविष्य",
        body: [
          "TuneUniversal एक बढ़ता हुआ प्रोजेक्ट है। दिशा है: तेज़, हल्का और विश्वसनीय रहते हुए संगीत टूल्स, ट्यूनिंग संसाधनों और शैक्षिक सामग्री की एक पूर्ण लाइब्रेरी बनाना जारी रखना।",
          "भविष्य के विकास में नए वाद्य यंत्र, अधिक ट्यूनिंग प्रीसेट, अधिक विस्तृत गाइड और बेहतर बहुभाषी समर्थन शामिल हो सकते हैं।"
        ]
      }
    ],
    faq: [
      { question: "TuneUniversal क्या है?", answer: "TuneUniversal एक मुफ्त प्लेटफ़ॉर्म है जिसमें ब्राउज़र-आधारित संगीत टूल्स हैं: ऑनलाइन ट्यूनर, मेट्रोनोम, Tap BPM, साउंड लेवल मीटर और कॉर्ड ट्रांसपोज़र।" },
      { question: "क्या कोई ऐप इंस्टॉल करनी होगी?", answer: "नहीं। सभी टूल्स सीधे ब्राउज़र में काम करते हैं, डेस्कटॉप, टैबलेट या स्मार्टफोन पर।" },
      { question: "क्या TuneUniversal केवल गिटारिस्ट के लिए है?", answer: "नहीं। प्लेटफ़ॉर्म गिटार, बास, उकुलेले, वायलिन और कई अन्य वाद्य यंत्रों के लिए ट्यूनर और बहुमुखी संगीत टूल्स प्रदान करता है।" },
      { question: "क्या TuneUniversal बढ़ता रहेगा?", answer: "हां। यह प्रोजेक्ट नए टूल्स, शैक्षिक पेजों और दुनिया भर के संगीतकारों के लिए बेहतर समर्थन के साथ विकसित होने के लिए बनाया गया है।" }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "ऑनलाइन ट्यूनर खोलें" },
      { href: "/tools/metronome", label: "मेट्रोनोम उपयोग करें" },
      { href: "/guides", label: "संगीत गाइड देखें" }
    ]
  },
  no: {
    title: "Om TuneUniversal",
    description: "Lær mer om TuneUniversal, dets gratis musikkverktøy og oppdraget med å hjelpe musikere verden over.",
    seoTitle: "Om oss | TuneUniversal",
    seoDescription: "Oppdag TuneUniversal: online stemmer, metronom, Tap BPM og gratis musikkverktøy for alle musikere.",
    sections: [
      {
        title: "Introduksjon til TuneUniversal",
        body: [
          "TuneUniversal er en gratis musikkplattform for musikere, studenter og lærere som søker enkle, raske og tilgjengelige verktøy fra hvilken som helst moderne enhet. Prosjektet samler på ett sted en online stemmer, instrumentspesifikke stemmere, et metronom, Tap BPM, en lydnivåmåler, en akkordtransponerer og praktiske guider.",
          "Målet er klart: tilby nyttige musikkverktøy som fungerer direkte i nettleseren, uten installasjon, uten obligatorisk konto og uten unødvendig kompleksitet."
        ]
      },
      {
        title: "Vårt oppdrag",
        body: [
          "TuneUniversals oppdrag er å gjøre grunnleggende musikkverktøy tilgjengelige for flest mulig. Stemming, tempokontroll og harmoniens grunnleggende prinsipper bør ikke avhenge av dyr programvare eller kompliserte oppsett.",
          "Prosjektet sikter mot en tydelig opplevelse for nybegynnere, fleksibilitet for regelmessig øving og hastighet for daglig bruk."
        ]
      },
      {
        title: "Hva du finner på TuneUniversal",
        body: ["Plattformen tilbyr flere kategorier av verktøy og ressurser som samarbeider."],
        items: [
          { title: "Online stemmere", body: ["En universell stemmer og dedikerte sider som gitarstemmer, bassstemmer, ukulelcstemmer og fiolinstemmer for rask stemming via mikrofon."] },
          { title: "Rytme og tempo", body: ["Et online metronom med justerbar BPM og Tap BPM for raskt å estimere tempoet i en sang eller øvingsøkt."] },
          { title: "Lydverktøy og hjelpemidler", body: ["Lydnivåmåler, akkordtransponerer og andre små praktiske verktøy for harmonisk arbeid, lytting og oppsett."] },
          { title: "Guider og læringsressurser", body: ["Stemmeguider, praktiske artikler og pedagogisk innhold som hjelper nybegynnere og videregående spillere å forstå bedre hva de gjør."] }
        ]
      },
      {
        title: "For alle nivåer",
        body: ["TuneUniversal er utformet for å ledsage ulike behov uten å gjøre opplevelsen komplisert."],
        items: [
          { title: "Nybegynnere", body: ["Tydelige visuelle verktøy, trinn-for-trinn-guider og umiddelbar tilbakemelding for å bygge gode vaner fra starten."] },
          { title: "Studenter", body: ["Rask tilgang til stemming, metronom og harmonistøtte for å holde fokus på læringen."] },
          { title: "Lærere", body: ["Verktøy som umiddelbart kan åpnes på datamaskin eller mobil under timen, for raskt å demonstrere en tone, et tempo eller en transponering."] },
          { title: "Profesjonelle musikere", body: ["Lette verktøy for raske kontroller, prøver, reiser og daglig arbeid."] }
        ]
      },
      {
        title: "TuneUniversals fremtid",
        body: [
          "TuneUniversal er et voksende prosjekt. Retningen er å fortsette å bygge et stadig mer komplett bibliotek av musikkverktøy, stemmingsressurser og pedagogisk innhold, samtidig som det forblir raskt, lett og pålitelig.",
          "Fremtidig utvikling kan inkludere nye instrumenter, flere stemmingsforhåndsinnstillinger, mer detaljerte guider og bedre flerspråklig støtte."
        ]
      }
    ],
    faq: [
      { question: "Hva er TuneUniversal?", answer: "TuneUniversal er en gratis plattform med nettleserbaserte musikkverktøy: online stemmer, metronom, Tap BPM, lydnivåmåler og akkordtransponerer." },
      { question: "Må jeg installere en app?", answer: "Nei. Alle verktøy fungerer direkte i nettleseren, på datamaskin, nettbrett eller smarttelefon." },
      { question: "Er TuneUniversal bare for gitarister?", answer: "Nei. Plattformen tilbyr stemmere for gitar, bass, ukulele, fiolin og mange andre instrumenter, pluss allsidige musikkverktøy." },
      { question: "Vil TuneUniversal fortsette å vokse?", answer: "Ja. Prosjektet er utformet for å utvikle seg med nye verktøy, utdanningssider og bedre støtte for musikere verden over." }
    ],
    ctas: [
      { href: "/tools/guitar-tuner", label: "Åpne online stemmer" },
      { href: "/tools/metronome", label: "Bruk metronom" },
      { href: "/guides", label: "Utforsk musikkguider" }
    ]
  }
};

const extendedLegalPages: Partial<Record<ExtendedLocale, Partial<Record<StaticPageSlug, Partial<StaticPageContent>>>>> = {
  nl: {
    "privacy-policy": {
      title: "Privacybeleid",
      description: "Hoe TuneUniversal omgaat met privacy, analyse, advertenties en toestemming in zijn gratis muziektools.",
      sections: [
        { title: "Overzicht", body: ["TuneUniversal is een browsergebaseerd platform met gratis muziektools zoals online stemmers, metronoom, audiotools en educatieve bronnen. Dit beleid legt uit welke gegevens kunnen worden verwerkt wanneer je de site gebruikt.", "Het platform is ontworpen om de kernactiviteit licht te houden en onnodige verzameling van persoonsgegevens te beperken."] },
        { title: "Microfoontoegang", body: ["Microfoontoestemming wordt alleen gevraagd wanneer je een tool inschakelt die deze nodig heeft, zoals een stemmer. De browser beheert deze toestemming en je kunt deze op elk moment intrekken.", "TuneUniversal uploadt, bewaart of verkoopt geen ruwe microfoonopnames bij normaal gebruik."] },
        { title: "Analyse en advertenties", body: ["De site kan analysediensten zoals Google Analytics en advertentiediensten zoals Google AdSense gebruiken. Waar wettelijk vereist wordt toestemming gevraagd voor niet-essentiële cookies.", `Voor privacyvragen kun je contact opnemen via ${supportEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Cookiebeleid",
      description: "Informatie over essentiële cookies, analysecookies, advertentiecookies en toestemmingsbeheer bij TuneUniversal.",
      sections: [
        { title: "Wat dit beleid dekt", body: ["Dit cookiebeleid legt uit hoe TuneUniversal cookies, lokale opslag en vergelijkbare technologieën kan gebruiken om de site te laten werken, prestaties te meten en advertenties te ondersteunen.", "Sommige technologieën zijn essentieel, andere zijn optioneel en kunnen afhangen van toestemming."] },
        { title: "Essentiële en analytische cookies", body: ["Essentiële opslag onthoudt voorkeuren zoals taal, notatiesysteem en metronoom-presets. Analysecookies helpen het sitegebruik en de prestaties te meten.", "Deze gegevens worden waar mogelijk geaggregeerd of gepseudonimiseerd verwerkt."] },
        { title: "Advertentiecookies en beheer", body: ["Als advertenties via Google AdSense worden getoond, kunnen advertentiecookies worden gebruikt om effectiviteit te meten en herhaling te beperken. Je kunt cookies blokkeren of verwijderen via je browserinstellingen.", "Het uitschakelen van cookies kan opgeslagen voorkeuren resetten, maar de site blijft bruikbaar."] }
      ]
    },
    contact: {
      title: "Contact",
      description: "Neem contact op met TuneUniversal voor vragen, suggesties of feedback over het project en zijn muziektools.",
      sections: [
        { title: "Contact opnemen", body: ["Heb je vragen, suggesties of feedback over TuneUniversal? We horen graag van je.", `E-mail: ${supportEmail}`] },
        { title: "Waarvoor je deze pagina kunt gebruiken", body: ["Gebruik deze pagina om problemen te melden, nieuwe muziektools voor te stellen of vertaalfouten aan te geven.", "Feedback over toegankelijkheid, vertrouwen en bruikbaarheid is bijzonder welkom."] }
      ],
      ctas: [{ href: "/about", label: "Meer over TuneUniversal" }, { href: "/tools", label: "Muziektools verkennen" }]
    },
    "terms-of-use": {
      title: "Gebruiksvoorwaarden",
      description: "Lees de basisvoorwaarden voor het gebruik van TuneUniversal en zijn gratis online muziektools.",
      sections: [
        { title: "Gratis gebruik van de diensten", body: ["TuneUniversal biedt gratis browsergebaseerde muziektools, gidsen en educatieve pagina's voor persoonlijk en educatief gebruik, zolang dit rechtmatig is.", "De site kan in de loop van de tijd evolueren en tools kunnen worden bijgewerkt of verwijderd."] },
        { title: "Nauwkeurigheid en aansprakelijkheid", body: ["De tools worden aangeboden voor algemene begeleiding en praktisch gebruik, zonder absolute garantie voor elke professionele context. De site wordt geleverd zoals deze is, voor zover wettelijk toegestaan.", "Gebruikers blijven verantwoordelijk voor hoe ze de informatie en tools toepassen."] },
        { title: "Intellectueel eigendom en wijzigingen", body: ["Het merk, de structuur, originele teksten en educatieve materialen van TuneUniversal blijven beschermd. TuneUniversal kan deze voorwaarden in de toekomst bijwerken.", "De gepubliceerde versie op de site is de referentieversie voor voortgezet gebruik."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Lees het privacybeleid" }, { href: "/cookie-policy", label: "Lees het cookiebeleid" }]
    }
  },
  pl: {
    "privacy-policy": {
      title: "Polityka prywatności",
      description: "Jak TuneUniversal traktuje prywatność, analitykę, reklamy i zgodę w swoich darmowych narzędziach muzycznych.",
      sections: [
        { title: "Przegląd", body: ["TuneUniversal to platforma przeglądarkowa z darmowymi narzędziami muzycznymi, takimi jak stroiki online, metronom, narzędzia audio i materiały edukacyjne. Polityka ta wyjaśnia, jakie dane mogą być przetwarzane podczas korzystania z witryny.", "Platforma została zaprojektowana tak, aby ograniczyć zbędne gromadzenie danych osobowych."] },
        { title: "Dostęp do mikrofonu", body: ["Uprawnienie do mikrofonu jest wymagane tylko po włączeniu narzędzia, które go potrzebuje, np. stroika. Przeglądarka zarządza tym uprawnieniem i możesz je w każdej chwili cofnąć.", "TuneUniversal nie przesyła, nie przechowuje ani nie sprzedaje surowych nagrań z mikrofonu podczas normalnego użytkowania."] },
        { title: "Analityka i reklamy", body: ["Witryna może korzystać z usług analitycznych, takich jak Google Analytics, oraz reklamowych, takich jak Google AdSense. Tam gdzie wymaga tego prawo, prosimy o zgodę na pliki cookie inne niż niezbędne.", `W sprawach prywatności pisz na ${supportEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Polityka plików cookie",
      description: "Informacje o niezbędnych plikach cookie, plikach analitycznych, reklamowych i zarządzaniu zgodą w TuneUniversal.",
      sections: [
        { title: "Czego dotyczy ta polityka", body: ["Ta polityka wyjaśnia, jak TuneUniversal może używać plików cookie, pamięci lokalnej i podobnych technologii, aby witryna działała, mierzyć wydajność i wspierać reklamy.", "Niektóre technologie są niezbędne, inne opcjonalne i mogą zależeć od zgody."] },
        { title: "Niezbędne i analityczne pliki cookie", body: ["Niezbędna pamięć zapamiętuje ustawienia, takie jak język, system notacji i ustawienia metronomu. Pliki analityczne pomagają mierzyć użycie i wydajność witryny.", "Dane te są w miarę możliwości przetwarzane w formie zagregowanej lub pseudonimizowanej."] },
        { title: "Pliki reklamowe i zarządzanie", body: ["Jeśli reklamy są wyświetlane przez Google AdSense, pliki reklamowe mogą mierzyć skuteczność i ograniczać powtarzalność. Możesz blokować lub usuwać pliki cookie w ustawieniach przeglądarki.", "Wyłączenie plików cookie może zresetować zapisane preferencje, ale witryna pozostaje użyteczna."] }
      ]
    },
    contact: {
      title: "Kontakt",
      description: "Skontaktuj się z TuneUniversal w sprawie pytań, sugestii lub opinii o projekcie i jego narzędziach muzycznych.",
      sections: [
        { title: "Jak się skontaktować", body: ["Masz pytania, sugestie lub opinie o TuneUniversal? Chętnie je poznamy.", `E-mail: ${supportEmail}`] },
        { title: "Do czego służy ta strona", body: ["Użyj tej strony, aby zgłaszać problemy, proponować nowe narzędzia muzyczne lub wskazywać błędy w tłumaczeniach.", "Opinie dotyczące dostępności, zaufania i użyteczności są szczególnie cenne."] }
      ],
      ctas: [{ href: "/about", label: "Więcej o TuneUniversal" }, { href: "/tools", label: "Poznaj narzędzia muzyczne" }]
    },
    "terms-of-use": {
      title: "Warunki użytkowania",
      description: "Przeczytaj podstawowe warunki korzystania z TuneUniversal i jego darmowych narzędzi muzycznych online.",
      sections: [
        { title: "Bezpłatne korzystanie z usług", body: ["TuneUniversal udostępnia darmowe narzędzia muzyczne, przewodniki i strony edukacyjne do użytku osobistego i edukacyjnego, o ile jest on zgodny z prawem.", "Witryna może się z czasem rozwijać, a narzędzia mogą być aktualizowane lub usuwane."] },
        { title: "Dokładność i odpowiedzialność", body: ["Narzędzia są oferowane jako ogólne wsparcie i do praktycznego użytku, bez bezwzględnej gwarancji dla każdego kontekstu zawodowego. Witryna jest dostarczana taka, jaka jest, w zakresie dozwolonym przez prawo.", "Użytkownicy pozostają odpowiedzialni za sposób wykorzystania informacji i narzędzi."] },
        { title: "Własność intelektualna i zmiany", body: ["Marka, struktura, oryginalne teksty i materiały edukacyjne TuneUniversal pozostają chronione. TuneUniversal może w przyszłości zaktualizować te warunki.", "Wersja opublikowana w witrynie jest wersją odniesienia dla dalszego korzystania."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Przeczytaj politykę prywatności" }, { href: "/cookie-policy", label: "Przeczytaj politykę cookie" }]
    }
  },
  tr: {
    "privacy-policy": {
      title: "Gizlilik Politikası",
      description: "TuneUniversal'in ücretsiz müzik araçlarında gizlilik, analitik, reklam ve onayı nasıl ele aldığı.",
      sections: [
        { title: "Genel Bakış", body: ["TuneUniversal; online akordörler, metronom, ses araçları ve eğitim kaynakları gibi ücretsiz müzik araçları sunan tarayıcı tabanlı bir platformdur. Bu politika, siteyi kullanırken hangi verilerin işlenebileceğini açıklar.", "Platform, gereksiz kişisel veri toplamayı en aza indirmek için tasarlanmıştır."] },
        { title: "Mikrofon Erişimi", body: ["Mikrofon izni yalnızca akordör gibi buna ihtiyaç duyan bir aracı etkinleştirdiğinizde istenir. Bu izni tarayıcı yönetir ve istediğiniz zaman geri alabilirsiniz.", "TuneUniversal normal kullanım sırasında ham mikrofon kayıtlarını yüklemez, saklamaz veya satmaz."] },
        { title: "Analitik ve Reklamlar", body: ["Site, Google Analytics gibi analitik ve Google AdSense gibi reklam hizmetleri kullanabilir. Yasal olarak gerektiğinde, zorunlu olmayan çerezler için onay istenir.", `Gizlilik sorularınız için ${supportEmail} adresinden ulaşabilirsiniz.`] }
      ]
    },
    "cookie-policy": {
      title: "Çerez Politikası",
      description: "TuneUniversal'de zorunlu çerezler, analitik çerezler, reklam çerezleri ve onay yönetimi hakkında bilgi.",
      sections: [
        { title: "Bu Politikanın Kapsamı", body: ["Bu politika, TuneUniversal'in siteyi çalıştırmak, performansı ölçmek ve reklamları desteklemek için çerezleri, yerel depolamayı ve benzer teknolojileri nasıl kullanabileceğini açıklar.", "Bazı teknolojiler zorunludur, diğerleri isteğe bağlıdır ve onaya bağlı olabilir."] },
        { title: "Zorunlu ve Analitik Çerezler", body: ["Zorunlu depolama; dil, notasyon sistemi ve metronom ayarları gibi tercihleri hatırlar. Analitik çerezler site kullanımını ve performansını ölçmeye yardımcı olur.", "Bu veriler mümkün olduğunda toplu veya takma adlı biçimde işlenir."] },
        { title: "Reklam Çerezleri ve Yönetim", body: ["Reklamlar Google AdSense aracılığıyla gösterilirse, reklam çerezleri etkinliği ölçebilir ve tekrarı azaltabilir. Çerezleri tarayıcı ayarlarınızdan engelleyebilir veya silebilirsiniz.", "Çerezleri devre dışı bırakmak kaydedilen tercihleri sıfırlayabilir, ancak site kullanılabilir kalır."] }
      ]
    },
    contact: {
      title: "İletişim",
      description: "Proje ve müzik araçları hakkında sorular, öneriler veya geri bildirim için TuneUniversal ile iletişime geçin.",
      sections: [
        { title: "Nasıl İletişim Kurulur", body: ["TuneUniversal hakkında sorularınız, önerileriniz veya geri bildiriminiz mi var? Sizden haber almaktan memnuniyet duyarız.", `E-posta: ${supportEmail}`] },
        { title: "Bu Sayfayı Ne İçin Kullanabilirsiniz", body: ["Bu sayfayı sorunları bildirmek, yeni müzik araçları önermek veya çeviri hatalarını belirtmek için kullanın.", "Erişilebilirlik, güven ve kullanışlılıkla ilgili geri bildirimler özellikle değerlidir."] }
      ],
      ctas: [{ href: "/about", label: "TuneUniversal hakkında daha fazla" }, { href: "/tools", label: "Müzik araçlarını keşfet" }]
    },
    "terms-of-use": {
      title: "Kullanım Koşulları",
      description: "TuneUniversal ve ücretsiz çevrimiçi müzik araçlarını kullanmaya ilişkin temel koşulları okuyun.",
      sections: [
        { title: "Hizmetlerin Ücretsiz Kullanımı", body: ["TuneUniversal; kişisel ve eğitim amaçlı kullanım için ücretsiz tarayıcı tabanlı müzik araçları, kılavuzlar ve eğitim sayfaları sunar; kullanım yasal olduğu sürece.", "Site zamanla gelişebilir ve araçlar güncellenebilir veya kaldırılabilir."] },
        { title: "Doğruluk ve Sorumluluk", body: ["Araçlar, her profesyonel bağlam için mutlak garanti olmadan genel rehberlik ve pratik kullanım için sunulur. Site, yasaların izin verdiği ölçüde olduğu gibi sağlanır.", "Kullanıcılar, bilgileri ve araçları nasıl uyguladıklarından sorumlu kalır."] },
        { title: "Fikri Mülkiyet ve Değişiklikler", body: ["TuneUniversal markası, yapısı, özgün metinleri ve eğitim materyalleri korunmaya devam eder. TuneUniversal bu koşulları gelecekte güncelleyebilir.", "Sitede yayınlanan sürüm, devam eden kullanım için referans sürümdür."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Gizlilik Politikasını oku" }, { href: "/cookie-policy", label: "Çerez Politikasını oku" }]
    }
  },
  cs: {
    "privacy-policy": {
      title: "Zásady ochrany soukromí",
      description: "Jak TuneUniversal nakládá se soukromím, analytikou, reklamou a souhlasem ve svých bezplatných hudebních nástrojích.",
      sections: [
        { title: "Přehled", body: ["TuneUniversal je platforma v prohlížeči s bezplatnými hudebními nástroji, jako jsou online ladičky, metronom, zvukové nástroje a vzdělávací zdroje. Tyto zásady vysvětlují, jaká data mohou být zpracována při používání webu.", "Platforma je navržena tak, aby minimalizovala zbytečné shromažďování osobních údajů."] },
        { title: "Přístup k mikrofonu", body: ["Oprávnění k mikrofonu se vyžaduje pouze při zapnutí nástroje, který jej potřebuje, například ladičky. Toto oprávnění spravuje prohlížeč a můžete jej kdykoli odvolat.", "TuneUniversal při běžném používání nenahrává, neukládá ani neprodává surové nahrávky z mikrofonu."] },
        { title: "Analytika a reklama", body: ["Web může používat analytické služby jako Google Analytics a reklamní služby jako Google AdSense. Tam, kde to vyžaduje zákon, je vyžádán souhlas s cookies, které nejsou nezbytné.", `S dotazy na soukromí pište na ${supportEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Zásady používání cookies",
      description: "Informace o nezbytných cookies, analytických cookies, reklamních cookies a správě souhlasu v TuneUniversal.",
      sections: [
        { title: "Co tyto zásady pokrývají", body: ["Tyto zásady vysvětlují, jak může TuneUniversal používat cookies, místní úložiště a podobné technologie k provozu webu, měření výkonu a podpoře reklamy.", "Některé technologie jsou nezbytné, jiné volitelné a mohou záviset na souhlasu."] },
        { title: "Nezbytné a analytické cookies", body: ["Nezbytné úložiště si pamatuje předvolby jako jazyk, systém notace a předvolby metronomu. Analytické cookies pomáhají měřit využití a výkon webu.", "Tato data jsou pokud možno zpracovávána v agregované nebo pseudonymizované podobě."] },
        { title: "Reklamní cookies a správa", body: ["Pokud jsou reklamy zobrazovány přes Google AdSense, reklamní cookies mohou měřit účinnost a omezovat opakování. Cookies můžete blokovat nebo mazat v nastavení prohlížeče.", "Vypnutí cookies může resetovat uložené předvolby, ale web zůstává použitelný."] }
      ]
    },
    contact: {
      title: "Kontakt",
      description: "Kontaktujte TuneUniversal s dotazy, návrhy nebo zpětnou vazbou k projektu a jeho hudebním nástrojům.",
      sections: [
        { title: "Jak nás kontaktovat", body: ["Máte dotazy, návrhy nebo zpětnou vazbu k TuneUniversal? Rádi se o nich dozvíme.", `E-mail: ${supportEmail}`] },
        { title: "K čemu tato stránka slouží", body: ["Tuto stránku použijte k nahlášení problémů, návrhu nových hudebních nástrojů nebo upozornění na chyby v překladech.", "Zpětná vazba k přístupnosti, důvěře a užitečnosti je obzvláště cenná."] }
      ],
      ctas: [{ href: "/about", label: "Více o TuneUniversal" }, { href: "/tools", label: "Prozkoumat hudební nástroje" }]
    },
    "terms-of-use": {
      title: "Podmínky používání",
      description: "Přečtěte si základní podmínky používání TuneUniversal a jeho bezplatných online hudebních nástrojů.",
      sections: [
        { title: "Bezplatné používání služeb", body: ["TuneUniversal poskytuje bezplatné hudební nástroje, průvodce a vzdělávací stránky pro osobní a vzdělávací použití, pokud je v souladu se zákonem.", "Web se může v čase vyvíjet a nástroje mohou být aktualizovány nebo odstraněny."] },
        { title: "Přesnost a odpovědnost", body: ["Nástroje jsou nabízeny jako obecné vodítko a pro praktické použití, bez absolutní záruky pro každý profesionální kontext. Web je poskytován tak, jak je, v rozsahu povoleném zákonem.", "Uživatelé zůstávají odpovědní za to, jak informace a nástroje používají."] },
        { title: "Duševní vlastnictví a změny", body: ["Značka, struktura, původní texty a vzdělávací materiály TuneUniversal zůstávají chráněny. TuneUniversal může tyto podmínky v budoucnu aktualizovat.", "Verze zveřejněná na webu je referenční verzí pro další používání."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Přečíst zásady ochrany soukromí" }, { href: "/cookie-policy", label: "Přečíst zásady cookies" }]
    }
  },
  sv: {
    "privacy-policy": {
      title: "Integritetspolicy",
      description: "Hur TuneUniversal hanterar integritet, analys, annonser och samtycke i sina gratis musikverktyg.",
      sections: [
        { title: "Översikt", body: ["TuneUniversal är en webbläsarbaserad plattform med gratis musikverktyg som online-stämmare, metronom, ljudverktyg och utbildningsresurser. Denna policy förklarar vilka uppgifter som kan behandlas när du använder webbplatsen.", "Plattformen är utformad för att minimera onödig insamling av personuppgifter."] },
        { title: "Mikrofonåtkomst", body: ["Mikrofontillstånd begärs endast när du aktiverar ett verktyg som behöver det, till exempel en stämmare. Webbläsaren hanterar detta tillstånd och du kan återkalla det när som helst.", "TuneUniversal laddar inte upp, lagrar eller säljer råa mikrofoninspelningar vid normal användning."] },
        { title: "Analys och annonser", body: ["Webbplatsen kan använda analystjänster som Google Analytics och annonstjänster som Google AdSense. Där lagen kräver det begärs samtycke för icke-nödvändiga cookies.", `För integritetsfrågor, kontakta ${supportEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Cookiepolicy",
      description: "Information om nödvändiga cookies, analyscookies, annonscookies och samtyckeshantering hos TuneUniversal.",
      sections: [
        { title: "Vad policyn omfattar", body: ["Denna policy förklarar hur TuneUniversal kan använda cookies, lokal lagring och liknande tekniker för att driva webbplatsen, mäta prestanda och stödja annonser.", "Vissa tekniker är nödvändiga, andra är valfria och kan bero på samtycke."] },
        { title: "Nödvändiga och analytiska cookies", body: ["Nödvändig lagring kommer ihåg inställningar som språk, notationssystem och metronominställningar. Analyscookies hjälper till att mäta användning och prestanda.", "Dessa data behandlas där det är möjligt i aggregerad eller pseudonymiserad form."] },
        { title: "Annonscookies och hantering", body: ["Om annonser visas via Google AdSense kan annonscookies mäta effektivitet och begränsa upprepning. Du kan blockera eller radera cookies i webbläsarens inställningar.", "Att inaktivera cookies kan återställa sparade inställningar, men webbplatsen förblir användbar."] }
      ]
    },
    contact: {
      title: "Kontakt",
      description: "Kontakta TuneUniversal med frågor, förslag eller feedback om projektet och dess musikverktyg.",
      sections: [
        { title: "Så kontaktar du oss", body: ["Har du frågor, förslag eller feedback om TuneUniversal? Vi hör gärna från dig.", `E-post: ${supportEmail}`] },
        { title: "Vad sidan kan användas till", body: ["Använd denna sida för att rapportera problem, föreslå nya musikverktyg eller påpeka översättningsfel.", "Feedback om tillgänglighet, förtroende och användbarhet är särskilt välkommen."] }
      ],
      ctas: [{ href: "/about", label: "Mer om TuneUniversal" }, { href: "/tools", label: "Utforska musikverktyg" }]
    },
    "terms-of-use": {
      title: "Användarvillkor",
      description: "Läs de grundläggande villkoren för att använda TuneUniversal och dess gratis musikverktyg online.",
      sections: [
        { title: "Gratis användning av tjänsterna", body: ["TuneUniversal erbjuder gratis webbläsarbaserade musikverktyg, guider och utbildningssidor för personligt och utbildningssyfte, så länge användningen är laglig.", "Webbplatsen kan utvecklas över tid och verktyg kan uppdateras eller tas bort."] },
        { title: "Noggrannhet och ansvar", body: ["Verktygen erbjuds som allmän vägledning och för praktiskt bruk, utan absolut garanti för varje professionellt sammanhang. Webbplatsen tillhandahålls i befintligt skick, i den utsträckning lagen tillåter.", "Användare ansvarar själva för hur de tillämpar informationen och verktygen."] },
        { title: "Immateriella rättigheter och ändringar", body: ["TuneUniversals varumärke, struktur, originaltexter och utbildningsmaterial förblir skyddade. TuneUniversal kan uppdatera dessa villkor i framtiden.", "Den publicerade versionen på webbplatsen är referensversionen för fortsatt användning."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Läs integritetspolicyn" }, { href: "/cookie-policy", label: "Läs cookiepolicyn" }]
    }
  },
  "pt-BR": {
    contact: {
      title: "Contato",
      description: "Entre em contato com o TuneUniversal para dúvidas, sugestões ou feedback sobre o projeto e suas ferramentas musicais.",
      sections: [
        { title: "Como entrar em contato", body: ["Tem dúvidas, sugestões ou feedback sobre o TuneUniversal? Vamos adorar saber.", `E-mail: ${supportEmail}`] },
        { title: "Para que usar esta página", body: ["Use esta página para relatar problemas, sugerir novas ferramentas musicais ou apontar erros de tradução.", "Feedback sobre acessibilidade, confiança e utilidade é especialmente bem-vindo."] }
      ],
      ctas: [{ href: "/about", label: "Saiba mais sobre o TuneUniversal" }, { href: "/tools", label: "Explorar ferramentas musicais" }]
    },
    "terms-of-use": {
      title: "Termos de uso",
      description: "Leia os termos básicos para usar o TuneUniversal e suas ferramentas musicais online gratuitas.",
      sections: [
        { title: "Uso gratuito dos serviços", body: ["O TuneUniversal oferece ferramentas musicais, guias e páginas educativas gratuitas para uso pessoal e educativo, desde que seja legal.", "O site pode evoluir com o tempo e as ferramentas podem ser atualizadas ou removidas."] },
        { title: "Precisão e responsabilidade", body: ["As ferramentas são oferecidas como orientação geral e para uso prático, sem garantia absoluta para todo contexto profissional. O site é fornecido no estado em que se encontra, na medida permitida por lei.", "Os usuários continuam responsáveis por como aplicam as informações e ferramentas."] },
        { title: "Propriedade intelectual e mudanças", body: ["A marca, a estrutura, os textos originais e os materiais educativos do TuneUniversal permanecem protegidos. O TuneUniversal pode atualizar estes termos no futuro.", "A versão publicada no site é a versão de referência para uso continuado."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Ler a Política de Privacidade" }, { href: "/cookie-policy", label: "Ler a Política de Cookies" }]
    }
  },
  hi: {
    "privacy-policy": {
      title: "गोपनीयता नीति",
      description: "TuneUniversal अपने मुफ्त संगीत टूल्स में गोपनीयता, एनालिटिक्स, विज्ञापन और सहमति को कैसे संभालता है।",
      sections: [
        { title: "अवलोकन", body: ["TuneUniversal एक ब्राउज़र-आधारित प्लेटफ़ॉर्म है जिसमें ऑनलाइन ट्यूनर, मेट्रोनोम, ऑडियो टूल्स और शैक्षिक संसाधन जैसे मुफ्त संगीत टूल्स हैं। यह नीति बताती है कि साइट का उपयोग करते समय कौन सा डेटा संसाधित किया जा सकता है।", "प्लेटफ़ॉर्म को अनावश्यक व्यक्तिगत डेटा संग्रह को कम करने के लिए डिज़ाइन किया गया है।"] },
        { title: "माइक्रोफ़ोन एक्सेस", body: ["माइक्रोफ़ोन अनुमति केवल तभी मांगी जाती है जब आप ट्यूनर जैसे टूल को सक्षम करते हैं जिसे इसकी आवश्यकता होती है। यह अनुमति ब्राउज़र द्वारा प्रबंधित होती है और आप इसे कभी भी रद्द कर सकते हैं।", "TuneUniversal सामान्य उपयोग के दौरान कच्ची माइक्रोफ़ोन रिकॉर्डिंग को अपलोड, संग्रहीत या बिक्री नहीं करता।"] },
        { title: "एनालिटिक्स और विज्ञापन", body: ["साइट Google Analytics जैसी एनालिटिक्स और Google AdSense जैसी विज्ञापन सेवाओं का उपयोग कर सकती है। जहां कानूनी रूप से आवश्यक हो, गैर-आवश्यक कुकीज़ के लिए सहमति मांगी जाती है।", `गोपनीयता प्रश्नों के लिए ${supportEmail} पर संपर्क करें।`] }
      ]
    },
    "cookie-policy": {
      title: "कुकी नीति",
      description: "TuneUniversal में आवश्यक कुकीज़, एनालिटिक्स कुकीज़, विज्ञापन कुकीज़ और सहमति प्रबंधन के बारे में जानकारी।",
      sections: [
        { title: "यह नीति क्या कवर करती है", body: ["यह नीति बताती है कि TuneUniversal साइट को चलाने, प्रदर्शन मापने और विज्ञापन का समर्थन करने के लिए कुकीज़, स्थानीय भंडारण और समान तकनीकों का उपयोग कैसे कर सकता है।", "कुछ तकनीकें आवश्यक हैं, अन्य वैकल्पिक हैं और सहमति पर निर्भर हो सकती हैं।"] },
        { title: "आवश्यक और एनालिटिक्स कुकीज़", body: ["आवश्यक भंडारण भाषा, नोटेशन सिस्टम और मेट्रोनोम सेटिंग्स जैसी प्राथमिकताओं को याद रखता है। एनालिटिक्स कुकीज़ साइट उपयोग और प्रदर्शन मापने में मदद करती हैं।", "यह डेटा जहां संभव हो, एकत्रित या छद्म-नामित रूप में संसाधित किया जाता है।"] },
        { title: "विज्ञापन कुकीज़ और प्रबंधन", body: ["यदि विज्ञापन Google AdSense के माध्यम से दिखाए जाते हैं, तो विज्ञापन कुकीज़ प्रभावशीलता माप सकती हैं और दोहराव को सीमित कर सकती हैं। आप ब्राउज़र सेटिंग्स में कुकीज़ को ब्लॉक या हटा सकते हैं।", "कुकीज़ अक्षम करने से सहेजी गई प्राथमिकताएं रीसेट हो सकती हैं, लेकिन साइट उपयोग योग्य रहती है।"] }
      ]
    },
    contact: {
      title: "संपर्क करें",
      description: "परियोजना और उसके संगीत टूल्स के बारे में प्रश्नों, सुझावों या प्रतिक्रिया के लिए TuneUniversal से संपर्क करें।",
      sections: [
        { title: "कैसे संपर्क करें", body: ["TuneUniversal के बारे में प्रश्न, सुझाव या प्रतिक्रिया है? हमें सुनकर खुशी होगी।", `ईमेल: ${supportEmail}`] },
        { title: "इस पृष्ठ का उपयोग किसलिए करें", body: ["इस पृष्ठ का उपयोग समस्याओं की रिपोर्ट करने, नए संगीत टूल्स सुझाने या अनुवाद त्रुटियों को इंगित करने के लिए करें।", "पहुंच, विश्वास और उपयोगिता से संबंधित प्रतिक्रिया विशेष रूप से स्वागत योग्य है।"] }
      ],
      ctas: [{ href: "/about", label: "TuneUniversal के बारे में और जानें" }, { href: "/tools", label: "संगीत टूल्स देखें" }]
    },
    "terms-of-use": {
      title: "उपयोग की शर्तें",
      description: "TuneUniversal और उसके मुफ्त ऑनलाइन संगीत टूल्स के उपयोग की बुनियादी शर्तें पढ़ें।",
      sections: [
        { title: "सेवाओं का मुफ्त उपयोग", body: ["TuneUniversal व्यक्तिगत और शैक्षिक उपयोग के लिए मुफ्त ब्राउज़र-आधारित संगीत टूल्स, गाइड और शैक्षिक पृष्ठ प्रदान करता है, जब तक कि उपयोग कानूनी हो।", "साइट समय के साथ विकसित हो सकती है और टूल्स अपडेट या हटाए जा सकते हैं।"] },
        { title: "सटीकता और दायित्व", body: ["टूल्स सामान्य मार्गदर्शन और व्यावहारिक उपयोग के लिए पेश किए जाते हैं, हर पेशेवर संदर्भ के लिए पूर्ण गारंटी के बिना। साइट कानून द्वारा अनुमत सीमा तक जैसी है वैसी प्रदान की जाती है।", "उपयोगकर्ता इस बात के लिए जिम्मेदार रहते हैं कि वे जानकारी और टूल्स का उपयोग कैसे करते हैं।"] },
        { title: "बौद्धिक संपदा और परिवर्तन", body: ["TuneUniversal का ब्रांड, संरचना, मूल पाठ और शैक्षिक सामग्री संरक्षित रहती है। TuneUniversal भविष्य में इन शर्तों को अपडेट कर सकता है।", "साइट पर प्रकाशित संस्करण निरंतर उपयोग के लिए संदर्भ संस्करण है।"] }
      ],
      ctas: [{ href: "/privacy-policy", label: "गोपनीयता नीति पढ़ें" }, { href: "/cookie-policy", label: "कुकी नीति पढ़ें" }]
    }
  },
  no: {
    "privacy-policy": {
      title: "Personvernerklæring",
      description: "Hvordan TuneUniversal håndterer personvern, analyse, annonser og samtykke i sine gratis musikkverktøy.",
      sections: [
        { title: "Oversikt", body: ["TuneUniversal er en nettleserbasert plattform med gratis musikkverktøy som online stemmere, metronom, lydverktøy og læringsressurser. Denne erklæringen forklarer hvilke data som kan behandles når du bruker nettstedet.", "Plattformen er utformet for å minimere unødvendig innsamling av personopplysninger."] },
        { title: "Mikrofontilgang", body: ["Mikrofontillatelse bes kun om når du aktiverer et verktøy som trenger det, for eksempel en stemmer. Nettleseren håndterer denne tillatelsen og du kan trekke den tilbake når som helst.", "TuneUniversal laster ikke opp, lagrer eller selger rå mikrofonopptak ved normal bruk."] },
        { title: "Analyse og annonser", body: ["Nettstedet kan bruke analysetjenester som Google Analytics og annonsetjenester som Google AdSense. Der loven krever det, bes det om samtykke til ikke-nødvendige informasjonskapsler.", `For personvernspørsmål, kontakt ${supportEmail}.`] }
      ]
    },
    "cookie-policy": {
      title: "Retningslinjer for informasjonskapsler",
      description: "Informasjon om nødvendige informasjonskapsler, analyse, annonser og samtykkehåndtering hos TuneUniversal.",
      sections: [
        { title: "Hva disse retningslinjene dekker", body: ["Disse retningslinjene forklarer hvordan TuneUniversal kan bruke informasjonskapsler, lokal lagring og liknende teknologier for å drive nettstedet, måle ytelse og støtte annonser.", "Noen teknologier er nødvendige, andre er valgfrie og kan avhenge av samtykke."] },
        { title: "Nødvendige og analytiske informasjonskapsler", body: ["Nødvendig lagring husker innstillinger som språk, notasjonssystem og metronominnstillinger. Analytiske informasjonskapsler hjelper med å måle bruk og ytelse.", "Disse dataene behandles der det er mulig i aggregert eller pseudonymisert form."] },
        { title: "Annonse-informasjonskapsler og håndtering", body: ["Hvis annonser vises via Google AdSense, kan annonse-informasjonskapsler måle effektivitet og begrense gjentakelse. Du kan blokkere eller slette informasjonskapsler i nettleserinnstillingene.", "Å deaktivere informasjonskapsler kan tilbakestille lagrede innstillinger, men nettstedet forblir brukbart."] }
      ]
    },
    contact: {
      title: "Kontakt",
      description: "Kontakt TuneUniversal med spørsmål, forslag eller tilbakemeldinger om prosjektet og musikkverktøyene.",
      sections: [
        { title: "Slik kontakter du oss", body: ["Har du spørsmål, forslag eller tilbakemeldinger om TuneUniversal? Vi hører gjerne fra deg.", `E-post: ${supportEmail}`] },
        { title: "Hva siden kan brukes til", body: ["Bruk denne siden til å rapportere problemer, foreslå nye musikkverktøy eller påpeke oversettelsesfeil.", "Tilbakemeldinger om tilgjengelighet, tillit og nytte er spesielt velkomne."] }
      ],
      ctas: [{ href: "/about", label: "Mer om TuneUniversal" }, { href: "/tools", label: "Utforsk musikkverktøy" }]
    },
    "terms-of-use": {
      title: "Bruksvilkår",
      description: "Les de grunnleggende vilkårene for bruk av TuneUniversal og de gratis musikkverktøyene på nett.",
      sections: [
        { title: "Gratis bruk av tjenestene", body: ["TuneUniversal tilbyr gratis nettleserbaserte musikkverktøy, guider og læringssider for personlig og pedagogisk bruk, så lenge bruken er lovlig.", "Nettstedet kan utvikle seg over tid, og verktøy kan oppdateres eller fjernes."] },
        { title: "Nøyaktighet og ansvar", body: ["Verktøyene tilbys som generell veiledning og for praktisk bruk, uten absolutt garanti for enhver profesjonell sammenheng. Nettstedet leveres som det er, i den grad loven tillater.", "Brukere er selv ansvarlige for hvordan de anvender informasjonen og verktøyene."] },
        { title: "Immaterielle rettigheter og endringer", body: ["TuneUniversals merkevare, struktur, originaltekster og læringsmateriell forblir beskyttet. TuneUniversal kan oppdatere disse vilkårene i fremtiden.", "Den publiserte versjonen på nettstedet er referanseversjonen for fortsatt bruk."] }
      ],
      ctas: [{ href: "/privacy-policy", label: "Les personvernerklæringen" }, { href: "/cookie-policy", label: "Les retningslinjene for informasjonskapsler" }]
    }
  }
};

export function isStaticPageSlug(value: string | undefined): value is StaticPageSlug {
  return Boolean(value && staticPageSlugs.includes(value as StaticPageSlug));
}

export function getStaticPageContent(locale: Locale, slug: StaticPageSlug): StaticPageContent {
  const contentLocale = getContentLocale(locale);
  const base = enPages[slug];
  // Extended locales (nl, pl, tr, cs, sv, pt-BR, hi, no): dedicated legal + about translations
  const extendedLegal = extendedLegalPages[locale as ExtendedLocale]?.[slug];
  if (extendedLegal) {
    return { ...base, ...extendedLegal };
  }
  const extendedAbout = extendedAboutPages[locale as ExtendedLocale];
  if (slug === "about" && extendedAbout) {
    return { ...base, ...extendedAbout };
  }
  // Base locales: use the localized translation when available, otherwise English base
  const localized = localizedTitles[contentLocale][slug];
  return localized ? { ...base, ...localized } : base;
}

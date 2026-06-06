import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";

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
const legalPageSlugs = ["privacy-policy", "cookie-policy", "contact", "terms-of-use"] as const;

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
      { href: "/tools/guitar-tuner", label: "Apri l'accordatore online" },
      { href: "/tools/metronome", label: "Usa il metronomo" },
      { href: "/tools/tap-bpm", label: "Prova Tap BPM" },
      { href: "/guides", label: "Esplora le guide musicali" }
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
    about: {
      title: "À propos",
      description: "Une collection gratuite et multilingue d'outils musicaux pratiques pour l'accordage, le tempo et les accords.",
      sections: [
        {
          title: "Mission",
          body: [
            "TuneUniversal aide les musiciens et les élèves à accorder leurs instruments, travailler le tempo et transposer des accords depuis n'importe quel appareil moderne.",
            "Le projet est mobile-first, multilingue et construit autour d'outils légers qui fonctionnent sans installer d'application."
          ]
        },
        {
          title: "Outils",
          body: [
            "La première version comprend un accordeur universel, un métronome, un compteur Tap BPM et un transposeur d'accords.",
            "De nouveaux accordages, systèmes de notation et contenus pédagogiques pourront être ajoutés au fur et à mesure."
          ]
        }
      ]
    },
  },
  de: {
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
    about: {
      title: "Über uns",
      description: "Eine kostenlose mehrsprachige Sammlung praktischer Musiktools zum Stimmen, Üben von Tempo und Arbeiten mit Akkorden.",
      sections: [
        { title: "Mission", body: ["TuneUniversal hilft Musikerinnen, Musikern und Lernenden dabei, Instrumente zu stimmen, Tempo zu üben und Akkorde schnell auf jedem modernen Gerät zu transponieren.", "Das Projekt ist mobile-first, mehrsprachig und basiert auf leichten Tools, die ohne App-Installation funktionieren."] },
        { title: "Werkzeuge", body: ["Die erste Version enthält ein universelles Stimmgerät, ein Metronom, einen Tap-BPM-Zähler und einen Akkord-Transposer.", "Weitere Stimmungen, Notationssysteme und Lernseiten können mit der Bibliothek wachsen."] }
      ]
    },
  },
  es: {
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
    about: {
      title: "Acerca de",
      description: "Una colección gratuita y multilingüe de herramientas musicales prácticas para afinación, tempo y acordes.",
      sections: [
        { title: "Misión", body: ["TuneUniversal ayuda a músicos y estudiantes a afinar instrumentos, practicar tempo y transportar acordes rápidamente desde cualquier dispositivo moderno.", "El proyecto es mobile-first, multilingüe y está construido alrededor de herramientas ligeras que funcionan sin instalar una app."] },
        { title: "Herramientas", body: ["La primera versión incluye afinador universal, metrónomo, contador Tap BPM y transpositor de acordes.", "Se podrán añadir más afinaciones, sistemas de notación y páginas educativas a medida que crezca la biblioteca."] }
      ]
    },
  },
  pt: {
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
    about: {
      title: "Sobre",
      description: "Uma coleção gratuita e multilíngue de ferramentas musicais práticas para afinação, tempo e acordes.",
      sections: [
        { title: "Missão", body: ["O TuneUniversal ajuda músicos e estudantes a afinar instrumentos, praticar tempo e transpor acordes rapidamente em qualquer dispositivo moderno.", "O projeto é mobile-first, multilíngue e baseado em ferramentas leves que funcionam sem instalar aplicativo."] },
        { title: "Ferramentas", body: ["A primeira versão inclui afinador universal, metrônomo, contador Tap BPM e transpositor de acordes.", "Mais afinações, sistemas de notação e páginas educativas podem ser adicionados com o crescimento da biblioteca."] }
      ]
    },
  },
  zh: {
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
    about: {
      title: "关于",
      description: "一套免费的多语言实用音乐工具，用于调音、节拍练习和和弦处理。",
      sections: [
        { title: "使命", body: ["TuneUniversal 帮助音乐人和学生在任何现代设备上快速调音乐器、练习节拍并移调和弦。", "项目采用移动优先、多语言设计，围绕无需安装应用即可使用的轻量工具构建。"] },
        { title: "工具", body: ["第一版包含通用调音器、节拍器、Tap BPM 计数器和和弦移调器。", "随着内容库扩展，可以继续添加更多调弦、记谱系统和教学页面。"] }
      ]
    },
  },
  ru: {
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
    about: {
      title: "О проекте",
      description: "Бесплатная многоязычная коллекция практичных музыкальных инструментов для настройки, темпа и аккордов.",
      sections: [
        { title: "Миссия", body: ["TuneUniversal помогает музыкантам и ученикам быстро настраивать инструменты, тренировать темп и транспонировать аккорды на любом современном устройстве.", "Проект ориентирован на мобильные устройства, поддерживает несколько языков и построен вокруг легких инструментов без установки приложения."] },
        { title: "Инструменты", body: ["Первая версия включает универсальный тюнер, метроном, счетчик Tap BPM и транспозитор аккордов.", "Новые строи, системы нотной записи и обучающие страницы могут добавляться по мере роста библиотеки."] }
      ]
    },
  },
  ja: {
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
    about: {
      title: "概要",
      description: "チューニング、テンポ練習、コード作業のための無料多言語音楽ツール集です。",
      sections: [
        { title: "ミッション", body: ["TuneUniversal は、ミュージシャンや学習者が現代的なデバイスから楽器を調律し、テンポを練習し、コードをすばやく移調できるよう支援します。", "このプロジェクトはモバイルファースト、多言語対応で、アプリをインストールせずに使える軽量ツールを中心に構成されています。"] },
        { title: "ツール", body: ["最初のバージョンには、ユニバーサルチューナー、メトロノーム、Tap BPM カウンター、コードトランスポーザーが含まれます。", "ライブラリの拡充に合わせて、追加のチューニング、記譜方式、学習ページを追加できます。"] }
      ]
    },
  },
  ko: {
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
    about: {
      title: "소개",
      description: "튜닝, 템포 연습, 코드 작업을 위한 무료 다국어 음악 도구 모음입니다.",
      sections: [
        { title: "목표", body: ["TuneUniversal은 음악가와 학습자가 최신 기기에서 악기를 조율하고 템포를 연습하며 코드를 빠르게 조옮김할 수 있도록 돕습니다.", "이 프로젝트는 모바일 우선, 다국어 지원을 바탕으로 앱 설치 없이 작동하는 가벼운 도구로 구성되어 있습니다."] },
        { title: "도구", body: ["첫 버전에는 유니버설 튜너, 메트로놈, Tap BPM 카운터, 코드 트랜스포저가 포함됩니다.", "라이브러리가 커지면서 더 많은 튜닝, 표기 시스템, 교육 페이지를 추가할 수 있습니다."] }
      ]
    },
  },
  ar: {
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
      title: "حول",
      description: "مجموعة مجانية متعددة اللغات من أدوات موسيقية عملية للضبط والإيقاع والعمل على الأكوردات.",
      sections: [
        { title: "المهمة", body: ["يساعد TuneUniversal الموسيقيين والطلاب على ضبط الآلات والتدرب على الإيقاع ونقل الأكوردات بسرعة من أي جهاز حديث.", "المشروع مصمم أولا للجوال، متعدد اللغات، ومبني حول أدوات خفيفة تعمل من دون تثبيت تطبيق."] },
        { title: "الأدوات", body: ["تتضمن النسخة الأولى موالفا عاما وميترونوما وعداد Tap BPM وناقل أكوردات.", "يمكن إضافة المزيد من الضبطات وأنظمة التدوين والصفحات التعليمية مع نمو المكتبة."] }
      ]
    },
  }
};

export function isStaticPageSlug(value: string | undefined): value is StaticPageSlug {
  return Boolean(value && staticPageSlugs.includes(value as StaticPageSlug));
}

export function getStaticPageContent(locale: Locale, slug: StaticPageSlug): StaticPageContent {
  const contentLocale = getContentLocale(locale);
  const base = enPages[slug];
  if (legalPageSlugs.includes(slug as (typeof legalPageSlugs)[number]) && contentLocale !== "it") {
    return base;
  }
  const localized = localizedTitles[contentLocale][slug];
  return localized ? { ...base, ...localized } : base;
}

import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";

export const staticPageSlugs = ["privacy-policy", "cookie-policy", "about"] as const;

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
  const localized = localizedTitles[contentLocale][slug];
  return localized ? { ...base, ...localized } : base;
}

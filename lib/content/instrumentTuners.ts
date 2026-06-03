import type { Locale } from "@/lib/i18n/locales";
import { instrumentIds, type Instrument } from "@/lib/tools/toolConfig";
import { getInstrumentLabel } from "@/lib/tools/instruments";
import { formatNoteName, tunings } from "@/lib/tools/tuner";

export type InstrumentTunerSlug = `${Instrument}-tuner`;

export type InstrumentTunerContent = {
  description: string;
  faq: { answer: string; question: string }[];
  howItWorks: string[];
  instrument: Instrument;
  keywords: string[];
  title: string;
};

type InstrumentTunerOverride = Partial<Omit<InstrumentTunerContent, "instrument">>;
type PriorityInstrument =
  | "7-string-guitar"
  | "8-string-guitar"
  | "12-string-guitar"
  | "bass"
  | "violin"
  | "cello"
  | "cimbalom"
  | "koto";

const instrumentTunerOverrides: Partial<Record<Locale, Partial<Record<Instrument, InstrumentTunerOverride>>>> = {
  de: {
    bass: {
      description:
        "Stimme 4- oder 5-Saiter-Bass online mit Mikrofon, stabiler Tonerkennung und schnellen Referenznoten fuer Probe und Ueben."
    },
    "8-string-guitar": {
      description:
        "Stimme 8-Saiter Gitarre online mit Mikrofon, Referenznoten und klarer Browser-Anzeige fuer Extended-Range-Riffs."
    }
  },
  en: {
    "12-string-guitar": {
      description:
        "Tune 12 string guitar online with microphone help, octave-pair reference notes and a steadier browser tuner for chorus-rich strings.",
      faq: [
        {
          question: "Should I tune single strings or pairs?",
          answer: "Start by checking one course at a time, then strum both strings together to confirm the octave pair sounds balanced."
        },
        {
          question: "Can I use this for standard 12 string tuning?",
          answer: "Yes. The page is built for standard 12 string reference notes and works well for quick daily tuning."
        }
      ],
      title: "Online 12 string guitar tuner"
    },
    "8-string-guitar": {
      description:
        "Tune 8 string guitar online with microphone detection, reference notes and support for F# standard and other extended-range setups.",
      faq: [
        {
          question: "Does it work for modern metal tunings?",
          answer: "Yes. Start from the 8 string reference notes here, then fine-tune your preferred extended-range setup."
        },
        {
          question: "Why is the low string harder to read?",
          answer: "Very low notes need a clean attack and less room noise. Play one string clearly and let the pitch settle."
        }
      ],
      title: "Online 8 string guitar tuner"
    }
  },
  es: {
    "7-string-guitar": {
      description:
        "Afina guitarra de 7 cuerdas online con microfono, cuerda grave Si y lectura estable para practica, ensayo y metal moderno."
    },
    "8-string-guitar": {
      description:
        "Afina guitarra de 8 cuerdas online con microfono, notas de referencia y ayuda clara para afinaciones extendidas."
    },
    "12-string-guitar": {
      description:
        "Afina guitarra de 12 cuerdas online con microfono, notas de referencia y apoyo para pares de cuerdas y octavas."
    },
    koto: {
      description:
        "Usa un afinador de koto online con microfono y notas de referencia para estudiar afinacion de forma rapida en el navegador."
    }
  },
  fr: {
    "7-string-guitar": {
      description:
        "Accordez une guitare 7 cordes en ligne avec micro, corde grave Si et lecture stable pour riffs modernes et pratique quotidienne."
    },
    "8-string-guitar": {
      description:
        "Accordez une guitare 8 cordes en ligne avec micro, notes de reference et aide claire pour les accordages etendus."
    },
    violin: {
      description:
        "Accordez votre violon en ligne avec le micro du navigateur, les notes G D A E et une lecture simple pour l'etude quotidienne."
    }
  },
  it: {
    "8-string-guitar": {
      description:
        "Accorda la chitarra 8 corde online con microfono, note di riferimento e supporto per accordature estese e moderne.",
      faq: [
        {
          question: "Supporta anche accordature moderne per metal?",
          answer: "Si. Puoi partire dalle note di riferimento della 8 corde e poi rifinire la tua accordatura estesa preferita."
        },
        {
          question: "Perche la corda piu bassa e piu difficile da leggere?",
          answer: "Le note molto gravi richiedono un attacco pulito e poco rumore di fondo. Suona una corda alla volta e aspetta che si stabilizzi."
        }
      ]
    },
    "12-string-guitar": {
      description:
        "Accorda la chitarra 12 corde online con microfono, cori in ottava e note di riferimento utili per controllare ogni coppia.",
      faq: [
        {
          question: "Meglio controllare corde singole o coppie?",
          answer: "Conviene accordare prima una corda per volta e poi verificare la coppia insieme, cosi senti subito se il coro e bilanciato."
        },
        {
          question: "Va bene per l'accordatura standard della 12 corde?",
          answer: "Si. Questa pagina nasce proprio per l'accordatura standard della chitarra 12 corde."
        }
      ]
    }
  },
  ru: {
    cello: {
      description:
        "Tune cello online with microphone support, clear reference notes and a quick browser workflow for practice and rehearsal."
    },
    cimbalom: {
      description:
        "Tune cimbalom online with microphone input, reference notes and a fast browser tuner for regular maintenance."
    },
    guitar: {
      description:
        "Tune guitar online with free chromatic microphone detection, reference notes and help for standard and alternate tunings."
    },
    "12-string-guitar": {
      description:
        "Tune a 12 string guitar online with microphone help, reference notes and stable support for octave-pair tuning."
    }
  }
};

const priorityInstrumentSeoCopy: Record<
  Locale,
  Partial<Record<PriorityInstrument, Pick<InstrumentTunerContent, "description" | "title">>>
> = {
  ar: {
    "7-string-guitar": {
      title: "موالف جيتار 7 اوتار اونلاين",
      description: "اضبط جيتار 7 اوتار اونلاين مع دعم الوتر المنخفض Si وقراءة واضحة للتدريب اليومي والريفات الحديثة."
    },
    "8-string-guitar": {
      title: "موالف جيتار 8 اوتار اونلاين",
      description: "اضبط جيتار 8 اوتار اونلاين بالميكروفون مع نغمات مرجعية ودعم للضبطات الممتدة الحديثة."
    },
    "12-string-guitar": {
      title: "موالف جيتار 12 وتر اونلاين",
      description: "اضبط جيتار 12 وتر اونلاين مع الميكروفون ونغمات مرجعية تساعدك على ضبط ازواج الاوتار والاكتافات."
    },
    bass: {
      title: "موالف باس اونلاين",
      description: "اضبط الباس اونلاين مع الميكروفون ونغمات مرجعية واضحة لاعدادات 4 و5 اوتار."
    },
    violin: {
      title: "موالف كمان اونلاين",
      description: "اضبط الكمان اونلاين مع الميكروفون ونغمات G D A E المرجعية لتمرين يومي سريع."
    },
    cello: {
      title: "موالف تشيلو اونلاين",
      description: "اضبط التشيلو اونلاين مع الميكروفون ونغمات مرجعية واضحة لجلسات الدراسة والبروفات."
    },
    cimbalom: {
      title: "موالف سيمبالوم اونلاين",
      description: "استعمل موالف سيمبالوم اونلاين مع الميكروفون ونغمات مرجعية للمراجعة السريعة والصيانة المنتظمة."
    },
    koto: {
      title: "موالف كوتو اونلاين",
      description: "استعمل موالف كوتو اونلاين مع الميكروفون ونغمات مرجعية لتثبيت الضبط بسرعة داخل المتصفح."
    }
  },
  de: {
    "7-string-guitar": {
      title: "7-Saiter Gitarre Tuner online",
      description: "Stimme 7-Saiter Gitarre online mit tiefem H, Mikrofon-Erkennung und klarer Anzeige fuer moderne Riffs und taegliches Ueben."
    },
    "8-string-guitar": {
      title: "8-Saiter Gitarre Tuner online",
      description: "Stimme 8-Saiter Gitarre online mit Mikrofon, Referenznoten und klarer Hilfe fuer moderne Extended-Range-Setups."
    },
    "12-string-guitar": {
      title: "12-Saiter Gitarre Tuner online",
      description: "Stimme 12-Saiter Gitarre online mit Mikrofon, Referenznoten und Unterstuetzung fuer Oktavpaare und Doppelchore."
    },
    bass: {
      title: "Bass Tuner online",
      description: "Stimme Bass online mit Mikrofon, stabiler Tonerkennung und Referenznoten fuer 4- und 5-Saiter-Setups."
    },
    violin: {
      title: "Geige Tuner online",
      description: "Stimme Geige online mit Mikrofon und Referenznoten G D A E fuer den taeglichen Unterricht und schnelle Kontrolle."
    },
    cello: {
      title: "Cello Tuner online",
      description: "Stimme Cello online mit Mikrofon, Referenznoten und einer schnellen Browser-Loesung fuer Probe und Ueben."
    },
    cimbalom: {
      title: "Cimbalom Tuner online",
      description: "Stimme Cimbalom online mit Mikrofon, Referenznoten und schneller Hilfe fuer regelmaessige Kontrolle im Browser."
    },
    koto: {
      title: "Koto Tuner online",
      description: "Stimme Koto online mit Mikrofon und Referenznoten, um die Stimmung schnell und einfach im Browser zu pruefen."
    }
  },
  en: {
    "7-string-guitar": {
      title: "Online 7 string guitar tuner",
      description: "Tune 7 string guitar online with low B support, microphone pitch detection and a steadier display for daily practice and modern riffs."
    },
    "8-string-guitar": {
      title: "Online 8 string guitar tuner",
      description: "Tune 8 string guitar online with microphone detection, reference notes and extended-range support for modern metal and low tunings."
    },
    "12-string-guitar": {
      title: "Online 12 string guitar tuner",
      description: "Tune 12 string guitar online with microphone help, reference notes and extra support for octave pairs and chorus-rich strings."
    },
    bass: {
      title: "Online bass tuner",
      description: "Tune bass online with your microphone, stable note detection and quick reference notes for 4 string and 5 string setups."
    },
    violin: {
      title: "Online violin tuner",
      description: "Tune violin online with browser microphone input, G D A E reference notes and a clear display for beginner-friendly daily tuning."
    },
    cello: {
      title: "Online cello tuner",
      description: "Tune cello online with microphone support, clear reference notes and a quick browser workflow for practice and rehearsal."
    },
    cimbalom: {
      title: "Online cimbalom tuner",
      description: "Tune cimbalom online with microphone input, reference notes and a fast browser tuner for regular maintenance."
    },
    koto: {
      title: "Online koto tuner",
      description: "Tune koto online with microphone input, reference notes and a fast browser workflow for everyday tuning practice."
    }
  },
  es: {
    "7-string-guitar": {
      title: "Afinador de guitarra de 7 cuerdas online",
      description: "Afina guitarra de 7 cuerdas online con microfono, cuerda grave Si y lectura estable para practica y riffs modernos."
    },
    "8-string-guitar": {
      title: "Afinador de guitarra de 8 cuerdas online",
      description: "Afina guitarra de 8 cuerdas online con microfono, notas de referencia y soporte para afinaciones extendidas modernas."
    },
    "12-string-guitar": {
      title: "Afinador de guitarra de 12 cuerdas online",
      description: "Afina guitarra de 12 cuerdas online con microfono, notas de referencia y apoyo para pares de cuerdas y octavas."
    },
    bass: {
      title: "Afinador de bajo online",
      description: "Afina bajo online con microfono, deteccion estable y notas de referencia para configuraciones de 4 y 5 cuerdas."
    },
    violin: {
      title: "Afinador de violin online",
      description: "Afina violin online con microfono, notas G D A E y una lectura clara para estudio diario y principiantes."
    },
    cello: {
      title: "Afinador de violonchelo online",
      description: "Afina violonchelo online con microfono, notas de referencia claras y una forma rapida de revisar la afinacion en el navegador."
    },
    cimbalom: {
      title: "Afinador de cimbalom online",
      description: "Usa un afinador de cimbalom online con microfono y notas de referencia para mantenimiento regular y practica."
    },
    koto: {
      title: "Afinador de koto online",
      description: "Usa un afinador de koto online con microfono y notas de referencia para estudiar afinacion de forma rapida en el navegador."
    }
  },
  fr: {
    "7-string-guitar": {
      title: "Accordeur guitare 7 cordes en ligne",
      description: "Accordez une guitare 7 cordes en ligne avec micro, corde grave Si et lecture stable pour riffs modernes et travail quotidien."
    },
    "8-string-guitar": {
      title: "Accordeur guitare 8 cordes en ligne",
      description: "Accordez une guitare 8 cordes en ligne avec micro, notes de reference et aide claire pour les accordages etendus."
    },
    "12-string-guitar": {
      title: "Accordeur guitare 12 cordes en ligne",
      description: "Accordez une guitare 12 cordes en ligne avec micro, notes de reference et soutien pour les paires a l'octave."
    },
    bass: {
      title: "Accordeur basse en ligne",
      description: "Accordez une basse en ligne avec micro, detection stable et notes de reference pour configurations 4 et 5 cordes."
    },
    violin: {
      title: "Accordeur violon en ligne",
      description: "Accordez votre violon en ligne avec le micro du navigateur, les notes G D A E et une lecture simple pour l'etude quotidienne."
    },
    cello: {
      title: "Accordeur violoncelle en ligne",
      description: "Accordez votre violoncelle en ligne avec micro, notes de reference claires et un flux rapide dans le navigateur."
    },
    cimbalom: {
      title: "Accordeur cimbalom en ligne",
      description: "Accordez un cimbalom en ligne avec micro et notes de reference pour verifier rapidement l'accord quotidien."
    },
    koto: {
      title: "Accordeur koto en ligne",
      description: "Accordez un koto en ligne avec micro, notes de reference et une aide simple pour l'accord quotidien."
    }
  },
  it: {
    "7-string-guitar": {
      title: "Accordatore chitarra 7 corde online",
      description: "Accorda la chitarra 7 corde online con microfono, supporto per il Si basso e lettura stabile per riff moderni e studio quotidiano."
    },
    "8-string-guitar": {
      title: "Accordatore chitarra 8 corde online",
      description: "Accorda la chitarra 8 corde online con microfono, note di riferimento e supporto per accordature estese e moderne."
    },
    "12-string-guitar": {
      title: "Accordatore chitarra 12 corde online",
      description: "Accorda la chitarra 12 corde online con microfono, cori in ottava e note di riferimento utili per controllare ogni coppia."
    },
    bass: {
      title: "Accordatore basso online",
      description: "Accorda il basso online con microfono, rilevamento stabile e note di riferimento per setup a 4 e 5 corde."
    },
    violin: {
      title: "Accordatore violino online",
      description: "Accorda il violino online con microfono, note G D A E e una lettura chiara pensata per studio e utilizzo quotidiano."
    },
    cello: {
      title: "Accordatore violoncello online",
      description: "Accorda il violoncello online con microfono, note di riferimento chiare e un flusso rapido nel browser per studio e prove."
    },
    cimbalom: {
      title: "Accordatore cimbalom online",
      description: "Usa un accordatore cimbalom online con microfono e note di riferimento per controlli rapidi e manutenzione regolare."
    },
    koto: {
      title: "Accordatore koto online",
      description: "Usa un accordatore koto online con microfono e note di riferimento per verificare l'accordatura direttamente dal browser."
    }
  },
  ja: {
    "7-string-guitar": {
      title: "オンライン 7弦ギターチューナー",
      description: "低い B 弦に対応した 7弦ギター用オンラインチューナー。マイク検出と安定表示で日々の練習に使えます。"
    },
    "8-string-guitar": {
      title: "オンライン 8弦ギターチューナー",
      description: "マイク入力と基準音に対応した 8弦ギター用オンラインチューナー。低音域や拡張チューニングの確認に便利です。"
    },
    "12-string-guitar": {
      title: "オンライン 12弦ギターチューナー",
      description: "オクターブペアやコース弦の確認に便利な 12弦ギター用オンラインチューナーです。"
    },
    bass: {
      title: "オンライン ベースチューナー",
      description: "4弦・5弦ベースに対応したオンラインチューナー。マイク検出と基準音で素早くチューニングできます。"
    },
    violin: {
      title: "オンライン バイオリンチューナー",
      description: "G D A E の基準音とマイク入力に対応したオンラインバイオリンチューナーです。"
    },
    cello: {
      title: "オンライン チェロチューナー",
      description: "チェロをオンラインで素早くチューニング。マイク入力と基準音で毎日の練習前に確認できます。"
    },
    cimbalom: {
      title: "オンライン ツィンバロムチューナー",
      description: "ツィンバロムの調弦をブラウザで確認できるオンラインチューナー。マイク入力と基準音に対応します。"
    },
    koto: {
      title: "オンライン 箏チューナー",
      description: "箏の調弦をオンラインで確認できるチューナー。マイク入力と基準音で日常の調整をすばやく行えます。"
    }
  },
  ko: {
    "7-string-guitar": {
      title: "온라인 7현 기타 튜너",
      description: "저음 B현을 지원하는 7현 기타용 온라인 튜너입니다. 마이크 감지와 안정된 표시로 연습과 리프 점검에 적합합니다."
    },
    "8-string-guitar": {
      title: "온라인 8현 기타 튜너",
      description: "마이크 입력과 기준음을 지원하는 8현 기타용 온라인 튜너로 확장 튜닝과 저음 세팅을 빠르게 확인할 수 있습니다."
    },
    "12-string-guitar": {
      title: "온라인 12현 기타 튜너",
      description: "옥타브 페어와 코러스 줄 점검에 유용한 12현 기타용 온라인 튜너입니다."
    },
    bass: {
      title: "온라인 베이스 튜너",
      description: "4현과 5현 베이스에 맞춘 온라인 튜너로 마이크 감지와 기준음을 사용해 빠르게 튜닝할 수 있습니다."
    },
    violin: {
      title: "온라인 바이올린 튜너",
      description: "G D A E 기준음과 마이크 입력을 지원하는 온라인 바이올린 튜너입니다."
    },
    cello: {
      title: "온라인 첼로 튜너",
      description: "첼로를 온라인에서 빠르게 조율하세요. 마이크 입력과 기준음으로 연습 전 점검에 편리합니다."
    },
    cimbalom: {
      title: "온라인 침발롬 튜너",
      description: "침발롬의 조율을 브라우저에서 확인할 수 있는 온라인 튜너입니다. 마이크 입력과 기준음을 지원합니다."
    },
    koto: {
      title: "온라인 코토 튜너",
      description: "코토 조율을 빠르게 확인할 수 있는 온라인 튜너입니다. 마이크 입력과 기준음으로 일상 조율에 적합합니다."
    }
  },
  pt: {
    "7-string-guitar": {
      title: "Afinador de guitarra de 7 cordas online",
      description: "Afine guitarra de 7 cordas online com microfone, suporte para a corda Si grave e leitura estavel para riffs modernos."
    },
    "8-string-guitar": {
      title: "Afinador de guitarra de 8 cordas online",
      description: "Afine guitarra de 8 cordas online com microfone, notas de referencia e suporte para afinacoes estendidas modernas."
    },
    "12-string-guitar": {
      title: "Afinador de guitarra de 12 cordas online",
      description: "Afine guitarra de 12 cordas online com microfone, notas de referencia e apoio para pares em oitava."
    },
    bass: {
      title: "Afinador de baixo online",
      description: "Afine baixo online com microfone, deteccao estavel e notas de referencia para configuracoes de 4 e 5 cordas."
    },
    violin: {
      title: "Afinador de violino online",
      description: "Afine violino online com microfone, notas G D A E e leitura clara para estudo e uso diario."
    },
    cello: {
      title: "Afinador de violoncelo online",
      description: "Afine violoncelo online com microfone, notas de referencia claras e um fluxo rapido no navegador."
    },
    cimbalom: {
      title: "Afinador de cimbalom online",
      description: "Use um afinador de cimbalom online com microfone e notas de referencia para manutencao regular e verificacao rapida."
    },
    koto: {
      title: "Afinador de koto online",
      description: "Use um afinador de koto online com microfone e notas de referencia para checar a afinacao diretamente no navegador."
    }
  },
  ru: {
    "7-string-guitar": {
      title: "Online 7 string guitar tuner",
      description: "Tune 7 string guitar online with low B support, microphone pitch detection and a stable browser display for practice."
    },
    "8-string-guitar": {
      title: "Online 8 string guitar tuner",
      description: "Tune 8 string guitar online with microphone input, reference notes and support for extended-range tuning setups."
    },
    "12-string-guitar": {
      title: "Online 12 string guitar tuner",
      description: "Tune a 12 string guitar online with microphone help, reference notes and stable support for octave-pair tuning."
    },
    bass: {
      title: "Online bass tuner",
      description: "Tune bass online with microphone support, stable note detection and quick reference notes for 4 and 5 string setups."
    },
    violin: {
      title: "Online violin tuner",
      description: "Tune violin online with browser microphone input, G D A E reference notes and a clear daily tuning workflow."
    },
    cello: {
      title: "Online cello tuner",
      description: "Tune cello online with microphone support, clear reference notes and a quick browser workflow for practice and rehearsal."
    },
    cimbalom: {
      title: "Online cimbalom tuner",
      description: "Tune cimbalom online with microphone input, reference notes and a fast browser tuner for regular maintenance."
    },
    koto: {
      title: "Online koto tuner",
      description: "Tune koto online with microphone input, reference notes and a quick browser workflow for everyday tuning practice."
    }
  },
  zh: {
    "7-string-guitar": {
      title: "在线七弦吉他调音器",
      description: "使用在线七弦吉他调音器，通过麦克风识别低音 B 弦和其余弦的音高，适合现代演奏和日常练习。"
    },
    "8-string-guitar": {
      title: "在线八弦吉他调音器",
      description: "使用麦克风和参考音在线为八弦吉他调音，适合扩展音域和低音调弦设置。"
    },
    "12-string-guitar": {
      title: "在线十二弦吉他调音器",
      description: "在线为十二弦吉他调音，支持八度成对弦和合唱效果弦组的日常校准。"
    },
    bass: {
      title: "在线贝斯调音器",
      description: "在线为贝斯调音，支持麦克风检测和参考音，适用于 4 弦与 5 弦配置。"
    },
    violin: {
      title: "在线小提琴调音器",
      description: "使用浏览器麦克风和 G D A E 参考音在线调音，适合日常练习与初学者。"
    },
    cello: {
      title: "在线大提琴调音器",
      description: "在线快速为大提琴调音，支持麦克风输入和清晰的参考音，适合练习前快速检查。"
    },
    cimbalom: {
      title: "在线扬琴调音器",
      description: "使用在线扬琴调音器，通过麦克风和参考音进行快速校准和日常维护。"
    },
    koto: {
      title: "在线筝调音器",
      description: "使用在线筝调音器，通过麦克风输入和参考音在浏览器中快速检查调弦状态。"
    }
  }
};

const templates: Record<
  Locale,
  {
    description: (instrument: string, tuning: string) => string;
    faq: (instrument: string, tuning: string) => { answer: string; question: string }[];
    howItWorks: (instrument: string) => string[];
    keywords: (instrument: string) => string[];
    title: (instrument: string) => string;
  }
> = {
  ar: {
    description: (instrument, tuning) => `استخدم الميكروفون لضبط ${instrument} عبر الإنترنت. النغمات المرجعية: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `هل يعمل موالف ${instrument} على الهاتف؟`, answer: "نعم، يعمل في المتصفح إذا سمحت بالوصول إلى الميكروفون." },
      { question: "ما النغمات المرجعية؟", answer: `النغمات المعروضة لهذه الآلة هي: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`اختر ${instrument} في الموالف.`, "اسمح بالوصول إلى الميكروفون.", "اعزف وتراً أو نغمة واحدة.", "اضبط حتى يصبح المؤشر في الوسط."],
    keywords: (instrument) => [`موالف ${instrument} اونلاين`, `ضبط ${instrument}`, `موالف ${instrument} مجاني`, `${instrument} بالميكروفون`],
    title: (instrument) => `موالف ${instrument} اونلاين`
  },
  de: {
    description: (instrument, tuning) => `Stimme ${instrument} online mit dem Mikrofon. Referenznoten: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `Funktioniert der ${instrument}-Tuner auf dem Smartphone?`, answer: "Ja, wenn der Browser Zugriff auf das Mikrofon hat." },
      { question: "Welche Referenznoten werden genutzt?", answer: `Für dieses Instrument zeigt TuneUniversal: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Wähle ${instrument} im Tuner.`, "Erlaube den Mikrofonzugriff.", "Spiele eine Saite oder Note.", "Stimme, bis die Anzeige mittig steht."],
    keywords: (instrument) => [`${instrument} tuner online`, `${instrument} stimmen`, `${instrument} stimmgerät`, `kostenloser ${instrument} tuner`],
    title: (instrument) => `${instrument} Tuner online`
  },
  en: {
    description: (instrument, tuning) => `Tune ${instrument} online with your microphone. Reference notes: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `Does the ${instrument} tuner work on mobile?`, answer: "Yes. Open TuneUniversal in your browser and allow microphone access." },
      { question: "Which reference notes are included?", answer: `This tuner page uses these reference notes: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Select ${instrument} in the tuner.`, "Allow microphone access.", "Play one string or note at a time.", "Tune until the indicator is centered."],
    keywords: (instrument) => [`online ${instrument} tuner`, `tune ${instrument}`, `free ${instrument} tuner`, `${instrument} microphone tuner`],
    title: (instrument) => `Online ${instrument} tuner`
  },
  es: {
    description: (instrument, tuning) => `Afina ${instrument} online con el micrófono. Notas de referencia: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `¿El afinador de ${instrument} funciona en móvil?`, answer: "Sí, funciona en el navegador si permites el acceso al micrófono." },
      { question: "¿Qué notas incluye?", answer: `Esta página usa estas notas de referencia: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Selecciona ${instrument} en el afinador.`, "Permite el acceso al micrófono.", "Toca una cuerda o nota cada vez.", "Ajusta hasta que el indicador quede centrado."],
    keywords: (instrument) => [`afinador ${instrument} online`, `afinar ${instrument}`, `afinador ${instrument} gratis`, `${instrument} con micrófono`],
    title: (instrument) => `Afinador ${instrument} online`
  },
  fr: {
    description: (instrument, tuning) => `Accordez ${instrument} en ligne avec le micro. Notes de référence: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `L'accordeur ${instrument} fonctionne-t-il sur mobile ?`, answer: "Oui, il fonctionne dans le navigateur si vous autorisez le micro." },
      { question: "Quelles notes sont incluses ?", answer: `Cette page utilise ces notes de référence: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Sélectionnez ${instrument} dans l'accordeur.`, "Autorisez l'accès au micro.", "Jouez une corde ou une note à la fois.", "Ajustez jusqu'à ce que l'indicateur soit centré."],
    keywords: (instrument) => [`accordeur ${instrument} en ligne`, `accorder ${instrument}`, `accordeur ${instrument} gratuit`, `${instrument} avec micro`],
    title: (instrument) => `Accordeur ${instrument} en ligne`
  },
  it: {
    description: (instrument, tuning) => `Accorda ${instrument} online con il microfono. Note di riferimento: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `L'accordatore ${instrument} funziona su smartphone?`, answer: "Sì, funziona nel browser se consenti l'accesso al microfono." },
      { question: "Quali note include?", answer: `Questa pagina usa queste note di riferimento: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Seleziona ${instrument} nell'accordatore.`, "Consenti l'accesso al microfono.", "Suona una corda o una nota alla volta.", "Regola finché l'indicatore è al centro."],
    keywords: (instrument) => [`accordatore ${instrument} online`, `accordare ${instrument}`, `accordatore ${instrument} gratis`, `${instrument} con microfono`],
    title: (instrument) => `Accordatore ${instrument} online`
  },
  ja: {
    description: (instrument, tuning) => `マイクを使って ${instrument} をオンラインでチューニングします。基準音: ${tuning}。`,
    faq: (instrument, tuning) => [
      { question: `${instrument} チューナーはスマートフォンで使えますか？`, answer: "はい。ブラウザでマイクを許可すると使えます。" },
      { question: "どの基準音がありますか？", answer: `このページの基準音は ${tuning} です。` }
    ],
    howItWorks: (instrument) => [`チューナーで ${instrument} を選択します。`, "マイクを許可します。", "1 つの弦または音を鳴らします。", "表示が中央になるまで調整します。"],
    keywords: (instrument) => [`${instrument} チューナー`, `${instrument} チューニング`, `オンライン ${instrument} チューナー`, `無料 ${instrument} チューナー`],
    title: (instrument) => `オンライン ${instrument} チューナー`
  },
  ko: {
    description: (instrument, tuning) => `마이크로 ${instrument}을 온라인에서 조율합니다. 기준 음: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `${instrument} 튜너는 모바일에서 작동하나요?`, answer: "네. 브라우저에서 마이크 접근을 허용하면 사용할 수 있습니다." },
      { question: "어떤 기준 음이 포함되나요?", answer: `이 페이지의 기준 음은 ${tuning}입니다.` }
    ],
    howItWorks: (instrument) => [`튜너에서 ${instrument}을 선택합니다.`, "마이크 접근을 허용합니다.", "한 번에 하나의 줄 또는 음을 연주합니다.", "표시가 중앙에 올 때까지 조율합니다."],
    keywords: (instrument) => [`온라인 ${instrument} 튜너`, `${instrument} 튜닝`, `무료 ${instrument} 튜너`, `${instrument} 마이크 튜너`],
    title: (instrument) => `온라인 ${instrument} 튜너`
  },
  pt: {
    description: (instrument, tuning) => `Afine ${instrument} online com o microfone. Notas de referência: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `O afinador de ${instrument} funciona no celular?`, answer: "Sim, funciona no navegador se você permitir o acesso ao microfone." },
      { question: "Quais notas estão incluídas?", answer: `Esta página usa estas notas de referência: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Selecione ${instrument} no afinador.`, "Permita o acesso ao microfone.", "Toque uma corda ou nota por vez.", "Ajuste até o indicador ficar no centro."],
    keywords: (instrument) => [`afinador ${instrument} online`, `afinar ${instrument}`, `afinador ${instrument} grátis`, `${instrument} com microfone`],
    title: (instrument) => `Afinador ${instrument} online`
  },
  ru: {
    description: (instrument, tuning) => `Настройте ${instrument} онлайн с микрофоном. Опорные ноты: ${tuning}.`,
    faq: (instrument, tuning) => [
      { question: `Работает ли тюнер ${instrument} на телефоне?`, answer: "Да, если открыть сайт в браузере и разрешить доступ к микрофону." },
      { question: "Какие опорные ноты используются?", answer: `Эта страница использует ноты: ${tuning}.` }
    ],
    howItWorks: (instrument) => [`Выберите ${instrument} в тюнере.`, "Разрешите доступ к микрофону.", "Сыграйте одну струну или ноту.", "Настраивайте, пока индикатор не окажется в центре."],
    keywords: (instrument) => [`тюнер ${instrument} онлайн`, `настроить ${instrument}`, `бесплатный тюнер ${instrument}`, `${instrument} с микрофоном`],
    title: (instrument) => `Тюнер ${instrument} онлайн`
  },
  zh: {
    description: (instrument, tuning) => `使用麦克风在线为${instrument}调音。参考音：${tuning}。`,
    faq: (instrument, tuning) => [
      { question: `${instrument}调音器可以在手机上使用吗？`, answer: "可以。用浏览器打开 TuneUniversal，并允许麦克风访问即可。" },
      { question: "包含哪些参考音？", answer: `此页面使用这些参考音：${tuning}。` }
    ],
    howItWorks: (instrument) => [`在调音器中选择${instrument}。`, "允许麦克风访问。", "一次弹奏一根弦或一个音。", "调整到指针居中。"],
    keywords: (instrument) => [`在线${instrument}调音器`, `${instrument}调音`, `免费${instrument}调音器`, `${instrument}麦克风调音器`],
    title: (instrument) => `在线${instrument}调音器`
  }
};

export const instrumentTunerSlugs = instrumentIds.map((instrument) => `${instrument}-tuner` as InstrumentTunerSlug);

export function instrumentToTunerSlug(instrument: Instrument): InstrumentTunerSlug {
  return `${instrument}-tuner`;
}

export function instrumentFromTunerSlug(slug: string | undefined): Instrument | null {
  if (!slug?.endsWith("-tuner")) return null;
  const instrument = slug.slice(0, -"-tuner".length) as Instrument;
  return instrumentIds.includes(instrument) ? instrument : null;
}

export function isInstrumentTunerSlug(value: string | undefined): value is InstrumentTunerSlug {
  return instrumentFromTunerSlug(value) !== null;
}

export function getInstrumentTunerContent(locale: Locale, instrument: Instrument): InstrumentTunerContent {
  const label = getInstrumentLabel(instrument, locale);
  const tuning = tunings[instrument].map((note) => formatNoteName(`${note.name}${note.octave ?? ""}`, "latin", false)).join(" - ");
  const template = templates[locale];
  const baseContent: InstrumentTunerContent = {
    description: template.description(label, tuning),
    faq: template.faq(label, tuning),
    howItWorks: template.howItWorks(label),
    instrument,
    keywords: template.keywords(label),
    title: template.title(label)
  };
  const override = instrumentTunerOverrides[locale]?.[instrument];
  const priorityCopy = priorityInstrumentSeoCopy[locale]?.[instrument as PriorityInstrument];
  return { ...baseContent, ...override, ...priorityCopy, instrument };
}

import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { getInstrumentLabel } from "@/lib/tools/instruments";
import { instrumentIds, type Instrument, type ToolSlug } from "@/lib/tools/toolConfig";
import { formatNoteName, tuningPresets, tunings, type TuningNote } from "@/lib/tools/tuner";

export const instrumentGuideSlugs = [
  "how-to-tune-guitar",
  "how-to-tune-7-string-guitar",
  "how-to-tune-8-string-guitar",
  "how-to-tune-12-string-guitar",
  "how-to-tune-bass",
  "how-to-tune-banjo",
  "how-to-tune-cello",
  "how-to-tune-cimbalom",
  "how-to-tune-contrabass",
  "how-to-tune-dulcimer",
  "how-to-tune-erhu",
  "how-to-tune-harp",
  "how-to-tune-koto",
  "how-to-tune-lute",
  "how-to-tune-mandolin",
  "how-to-tune-piano",
  "how-to-tune-santur",
  "how-to-tune-sitar",
  "how-to-tune-ukulele",
  "how-to-tune-viola",
  "how-to-tune-viola-da-gamba",
  "how-to-tune-violin",
  "how-to-tune-yangqin"
] as const;

export const utilityGuideSlugs = [
  "standard-bass-tuning",
  "how-to-use-metronome",
  "how-to-find-bpm",
  "how-to-read-chords",
  "how-to-transpose-chords",
  "common-guitar-tunings",
  "metronome-subdivisions",
  "chromatic-tuner-guide",
  "guitar-tuner-with-microphone",
  "metronome-for-guitar",
  "sound-meter-db-guide",
  "pitch-generator-guide",
  "what-is-a-guitar-tuner",
  "what-is-a-metronome",
  "what-is-a-chromatic-tuner"
] as const;

export const alternativeTuningGuideSlugs = [
  "standard-guitar-tuning",
  "eb-standard-tuning",
  "half-step-down-tuning",
  "d-standard-tuning",
  "full-step-down-tuning",
  "drop-d-tuning",
  "drop-d-sharp-tuning",
  "drop-c-sharp-tuning",
  "drop-c-tuning",
  "open-d-tuning",
  "open-g-tuning",
  "dadgad-tuning",
  "ukulele-standard-tuning",
  "baritone-ukulele-tuning",
  "violin-standard-tuning",
  "mandolin-standard-tuning",
  "banjo-open-g-tuning",
  "drop-a-7-string-tuning",
  "drop-e-8-string-tuning",
  "low-g-ukulele-tuning",
  "d-ukulele-tuning",
  "double-c-banjo-tuning",
  "sawmill-banjo-tuning",
  "five-string-bass-tuning"
] as const;

export const guideSlugs = [...instrumentGuideSlugs, ...alternativeTuningGuideSlugs, ...utilityGuideSlugs] as const;

export type GuideSlug = (typeof guideSlugs)[number];
type AlternativeTuningGuideSlug = (typeof alternativeTuningGuideSlugs)[number];
type UtilityGuideSlug = (typeof utilityGuideSlugs)[number];
type ExtraUtilityGuideSlug = Exclude<
  UtilityGuideSlug,
  | "standard-bass-tuning"
  | "how-to-use-metronome"
  | "how-to-find-bpm"
  | "chromatic-tuner-guide"
  | "guitar-tuner-with-microphone"
  | "metronome-for-guitar"
  | "sound-meter-db-guide"
  | "pitch-generator-guide"
  | "what-is-a-guitar-tuner"
  | "what-is-a-metronome"
  | "what-is-a-chromatic-tuner"
>;

type WhatIsGuideSlug = "what-is-a-guitar-tuner" | "what-is-a-metronome" | "what-is-a-chromatic-tuner";

export type GuideContent = {
  description: string;
  faq?: { answer: string; question: string }[];
  intro: string;
  keywords: string[];
  noteRows?: { frequency: string; label: string; note: string }[];
  relatedGuides?: GuideSlug[];
  relatedTools?: { description: string; href: string; title: string }[];
  sections: { body: string; title: string }[];
  steps: string[];
  commonMistakes?: string[];
  targetDescription?: string;
  targetPath?: string;
  targetTitle?: string;
  title: string;
  tool: ToolSlug;
};

type GuideOverride = Partial<Omit<GuideContent, "tool">>;

type TuningGuideCopy = {
  description: (instrument: string, tuning: string) => string;
  intro: (instrument: string, tuning: string) => string;
  keywords: (instrument: string, tuning: string) => string[];
  sections: (instrument: string, tuning: string) => { body: string; title: string }[];
  steps: (instrument: string) => string[];
  targetTitle: (instrument: string) => string;
  title: (instrument: string) => string;
};

export const guideIndexContent: Record<BaseLocale, { description: string; title: string }> = {
  ar: {
    title: "أدلة TuneUniversal",
    description: "أدلة سريعة لضبط الآلات واستخدام الميترونوم وحساب BPM بلغتك."
  },
  de: {
    title: "TuneUniversal Anleitungen",
    description: "Kurze Musik-Guides zum Stimmen, Metronom-Üben und BPM-Finden."
  },
  en: {
    title: "TuneUniversal Guides",
    description: "Short music guides for tuning instruments, practicing with a metronome and finding BPM."
  },
  es: {
    title: "Guías de TuneUniversal",
    description: "Guías rápidas para afinar instrumentos, practicar con metrónomo y calcular BPM."
  },
  fr: {
    title: "Guides TuneUniversal",
    description: "Guides rapides pour accorder, travailler au métronome et trouver le BPM."
  },
  it: {
    title: "Guide TuneUniversal",
    description: "Guide rapide per accordare strumenti, studiare con il metronomo e calcolare i BPM."
  },
  ja: {
    title: "TuneUniversal ガイド",
    description: "チューニング、メトロノーム練習、BPM 計測のための短い音楽ガイド。"
  },
  ko: {
    title: "TuneUniversal 가이드",
    description: "튜닝, 메트로놈 연습, BPM 계산을 위한 짧은 음악 가이드입니다."
  },
  pt: {
    title: "Guias TuneUniversal",
    description: "Guias rápidos para afinar instrumentos, praticar com metrônomo e encontrar BPM."
  },
  ru: {
    title: "Руководства TuneUniversal",
    description: "Краткие музыкальные руководства по настройке, метроному и определению BPM."
  },
  zh: {
    title: "TuneUniversal 指南",
    description: "用于乐器调音、节拍器练习和 BPM 计算的简明音乐指南。"
  }
};

const tuningGuideCopy: Record<BaseLocale, TuningGuideCopy> = {
  ar: {
    title: (instrument) => `كيفية ضبط ${instrument} على الإنترنت`,
    description: (instrument, tuning) => `دليل سريع لضبط ${instrument} بالميكروفون. النغمات المرجعية: ${tuning}.`,
    intro: (instrument, tuning) => `يساعدك TuneUniversal على ضبط ${instrument} مباشرة في المتصفح. اختر الآلة، اسمح بالوصول إلى الميكروفون، ثم استخدم النغمات المرجعية: ${tuning}.`,
    steps: (instrument) => [`افتح موالف ${instrument}.`, "اسمح بالوصول إلى الميكروفون.", "اعزف وترا أو نغمة واحدة بوضوح.", "اضبط حتى يصبح المؤشر في الوسط."],
    sections: (instrument, tuning) => [
      { title: "النغمات المرجعية", body: `النغمات المستخدمة لهذه الصفحة هي: ${tuning}. اعزف نغمة واحدة في كل مرة للحصول على قراءة مستقرة.` },
      { title: "نصائح للميكروفون", body: `ضع ${instrument} قريبا من الميكروفون، قلل الضوضاء في الغرفة، وانتظر لحظة بعد العزف حتى تستقر النغمة.` }
    ],
    keywords: (instrument) => [`ضبط ${instrument}`, `موالف ${instrument} اونلاين`, `موالف ${instrument} مجاني`, `${instrument} بالميكروفون`],
    targetTitle: (instrument) => `موالف ${instrument}`
  },
  de: {
    title: (instrument) => `${instrument} online stimmen`,
    description: (instrument, tuning) => `Kurzanleitung zum Stimmen von ${instrument} mit Mikrofon. Referenznoten: ${tuning}.`,
    intro: (instrument, tuning) => `Mit TuneUniversal kannst du ${instrument} direkt im Browser stimmen. Wähle das Instrument, erlaube den Mikrofonzugriff und orientiere dich an diesen Referenznoten: ${tuning}.`,
    steps: (instrument) => [`Öffne den ${instrument}-Tuner.`, "Erlaube den Mikrofonzugriff.", "Spiele eine Saite oder Note klar an.", "Stimme, bis die Anzeige mittig steht."],
    sections: (instrument, tuning) => [
      { title: "Referenznoten", body: `Diese Seite nutzt die Referenznoten ${tuning}. Spiele immer nur eine Note gleichzeitig, damit die Erkennung stabil bleibt.` },
      { title: "Bessere Mikrofonerkennung", body: `Halte ${instrument} nah am Mikrofon, reduziere Nebengeräusche und warte nach dem Anschlag kurz, bis sich die Tonhöhe stabilisiert.` }
    ],
    keywords: (instrument) => [`${instrument} stimmen`, `${instrument} tuner online`, `${instrument} stimmgerät`, `kostenloser ${instrument} tuner`],
    targetTitle: (instrument) => `${instrument} Tuner`
  },
  en: {
    title: (instrument) => `How to tune ${instrument} online`,
    description: (instrument, tuning) => `A step-by-step guide to tuning ${instrument} with a browser microphone. Reference notes: ${tuning}. No app required.`,
    intro: (instrument, tuning) => `TuneUniversal helps you tune ${instrument} directly in your browser using your device microphone. Select the instrument, allow microphone access, and match each string to the reference notes: ${tuning}. The tuner shows you in real time whether each string is flat, sharp, or in tune.`,
    steps: (instrument) => [
      `Open the ${instrument} tuner page and click Enable microphone — your browser will ask for permission the first time.`,
      "Play one open string at a time, letting it ring clearly without touching other strings.",
      "Watch the needle and cent display: green means in tune, red means you need to adjust.",
      "Turn the tuning peg slowly toward the target note — small adjustments make a big difference near the correct pitch.",
      "Repeat for each string, working from the lowest to the highest.",
      "After tuning all strings, play a chord or two and re-check — strings often settle slightly after the first pass."
    ],
    sections: (instrument, tuning) => [
      { title: "Reference notes", body: `This page uses ${tuning} as the standard reference notes for ${instrument}. Each note corresponds to one open string. Matching these pitches puts you in tune with other instruments and with recorded music. If you want to explore alternate tunings, visit the tuning hub where each variant has its own page with a dedicated preset.` },
      { title: "Getting the best microphone reading", body: `Keep ${instrument} within 20–30 cm of the microphone for the clearest signal. Reduce background noise — turn off fans, TVs, or anything that creates a continuous hum. After plucking a string, wait a moment for the pitch to stabilize before judging the reading. The needle will settle and give you an accurate cent value once the note sustains cleanly.` },
      { title: "Why strings go out of tune", body: `Strings drift out of tune for several reasons: temperature and humidity changes, playing stretching the strings, mechanical play in the tuning pegs, and new strings that have not fully settled yet. New strings need to be tuned and played several times before they hold pitch reliably. A well set-up instrument with quality tuning pegs will hold tune much better between sessions.` },
      { title: "Common tuning mistakes to avoid", body: `Always tune up to the target note rather than down — this helps the string hold tension in the tuning peg and stay in tune longer. Tune one string at a time and let each note ring clearly before checking. Avoid plucking too hard, as strong attack gives a sharp initial spike that settles flat. If a string reads sharp, go slightly below the target and tune up to it.` }
    ],
    keywords: (instrument) => [`tune ${instrument}`, `online ${instrument} tuner`, `free ${instrument} tuner`, `${instrument} microphone tuner`, `how to tune ${instrument}`],
    targetTitle: (instrument) => `${instrument} tuner`
  },
  es: {
    title: (instrument) => `Cómo afinar ${instrument} online`,
    description: (instrument, tuning) => `Guía rápida para afinar ${instrument} con micrófono. Notas de referencia: ${tuning}.`,
    intro: (instrument, tuning) => `TuneUniversal te ayuda a afinar ${instrument} directamente en el navegador. Selecciona el instrumento, permite el micrófono y usa estas notas de referencia: ${tuning}.`,
    steps: (instrument) => [`Abre el afinador de ${instrument}.`, "Permite el acceso al micrófono.", "Toca una cuerda o nota clara.", "Ajusta hasta que el indicador quede centrado."],
    sections: (instrument, tuning) => [
      { title: "Notas de referencia", body: `Esta página usa ${tuning} como notas de referencia. Toca una sola nota cada vez para mantener una detección estable.` },
      { title: "Mejor lectura del micrófono", body: `Mantén ${instrument} cerca del micrófono, reduce el ruido ambiente y espera un momento después de tocar para que la altura se estabilice.` }
    ],
    keywords: (instrument) => [`afinar ${instrument}`, `afinador ${instrument} online`, `afinador ${instrument} gratis`, `${instrument} con micrófono`],
    targetTitle: (instrument) => `Afinador de ${instrument}`
  },
  fr: {
    title: (instrument) => `Comment accorder ${instrument} en ligne`,
    description: (instrument, tuning) => `Guide rapide pour accorder ${instrument} avec le micro. Notes de référence : ${tuning}.`,
    intro: (instrument, tuning) => `TuneUniversal vous aide à accorder ${instrument} directement dans le navigateur. Sélectionnez l'instrument, autorisez le micro et utilisez ces notes de référence : ${tuning}.`,
    steps: (instrument) => [`Ouvrez l'accordeur ${instrument}.`, "Autorisez l'accès au micro.", "Jouez une corde ou une note claire.", "Ajustez jusqu'à ce que l'indicateur soit centré."],
    sections: (instrument, tuning) => [
      { title: "Notes de référence", body: `Cette page utilise ${tuning} comme notes de référence. Jouez une seule note à la fois pour garder une détection stable.` },
      { title: "Meilleure détection micro", body: `Gardez ${instrument} près du micro, réduisez le bruit ambiant et attendez un instant après l'attaque pour laisser la hauteur se stabiliser.` }
    ],
    keywords: (instrument) => [`accorder ${instrument}`, `accordeur ${instrument} en ligne`, `accordeur ${instrument} gratuit`, `${instrument} avec micro`],
    targetTitle: (instrument) => `Accordeur ${instrument}`
  },
  it: {
    title: (instrument) => `Come accordare ${instrument} online`,
    description: (instrument, tuning) => `Guida passo-passo per accordare ${instrument} con il microfono del browser. Note di riferimento: ${tuning}. Nessuna app richiesta.`,
    intro: (instrument, tuning) => `TuneUniversal ti aiuta ad accordare ${instrument} direttamente nel browser usando il microfono del tuo dispositivo. Seleziona lo strumento, consenti l'accesso al microfono e avvicina ogni corda alle note di riferimento: ${tuning}. L'accordatore mostra in tempo reale se ogni corda è calante, crescente o intonata.`,
    steps: (instrument) => [
      `Apri la pagina dell'accordatore per ${instrument} e clicca Attiva microfono — il browser chiedera il permesso la prima volta.`,
      "Suona una corda a vuoto alla volta, lasciandola vibrare chiaramente senza toccare le altre.",
      "Osserva l'ago e il display in cent: verde significa intonata, rosso indica che devi correggere.",
      "Gira la chiave di accordatura lentamente verso la nota obiettivo — piccoli movimenti fanno grande differenza vicino all'intonazione.",
      "Ripeti per ogni corda, dalla piu bassa alla piu alta.",
      "Dopo aver accordato tutte le corde, suona un accordo e ricontrolla — le corde si assestano spesso leggermente al primo passaggio."
    ],
    sections: (instrument, tuning) => [
      { title: "Note di riferimento", body: `Questa pagina usa ${tuning} come note di riferimento standard per ${instrument}. Ogni nota corrisponde a una corda a vuoto. Sintonizzarti su queste frequenze ti mette in accordo con altri strumenti e con la musica registrata. Se vuoi esplorare accordature alternative, visita l'hub delle accordature dove ogni variante ha la sua pagina con un preset dedicato.` },
      { title: "Come ottenere la migliore lettura del microfono", body: `Tieni ${instrument} entro 20-30 cm dal microfono per il segnale piu chiaro. Riduci il rumore di fondo: spegni ventole, TV o qualsiasi cosa che produca un ronzio continuo. Dopo aver pizzicato una corda, aspetta un momento che il pitch si stabilizzi prima di giudicare la lettura. L'ago si stabilizzera e dara un valore in cent preciso una volta che la nota risuona in modo pulito.` },
      { title: "Perche le corde si scordano", body: `Le corde escono dall'accordatura per diverse ragioni: variazioni di temperatura e umidita, lo stretching causato dal suono, il gioco meccanico nelle chiavi, e le corde nuove che non si sono ancora assettate. Le corde nuove devono essere accordate e suonate piu volte prima di tenere il pitch in modo affidabile. Uno strumento ben regolato con chiavi di qualita tiene l'accordatura molto meglio tra una sessione e l'altra.` },
      { title: "Errori comuni da evitare", body: `Accorda sempre salendo verso la nota obiettivo invece di scendere — questo aiuta la corda a tenere la tensione nella chiave e rimanere intonata piu a lungo. Accorda una corda alla volta e lascia risuonare ogni nota chiaramente prima di controllare. Evita di pizzicare troppo forte, perche un attacco energico produce un picco inizialmente acuto che poi si abbassa. Se una corda legge troppo acuta, scendi leggermente sotto e sali verso l'obiettivo.` }
    ],
    keywords: (instrument) => [`accordare ${instrument}`, `accordatore ${instrument} online`, `accordatore ${instrument} gratis`, `${instrument} con microfono`, `come accordare ${instrument}`],
    targetTitle: (instrument) => `Accordatore ${instrument}`
  },
  ja: {
    title: (instrument) => `${instrument}をオンラインでチューニングする方法`,
    description: (instrument, tuning) => `${instrument}をマイクでチューニングする短いガイド。基準音: ${tuning}。`,
    intro: (instrument, tuning) => `TuneUniversal ではブラウザ上で ${instrument} をチューニングできます。楽器を選び、マイクを許可し、基準音 ${tuning} を使って確認します。`,
    steps: (instrument) => [`${instrument}チューナーを開きます。`, "マイクの使用を許可します。", "1つの弦または音をはっきり鳴らします。", "表示が中央になるまで調整します。"],
    sections: (instrument, tuning) => [
      { title: "基準音", body: `このページでは ${tuning} を基準音として使います。音程検出を安定させるため、1音ずつ鳴らしてください。` },
      { title: "マイク検出のコツ", body: `${instrument}をマイクの近くに置き、周囲のノイズを減らし、音を鳴らした後に少し待って音程を安定させます。` }
    ],
    keywords: (instrument) => [`${instrument} チューニング`, `${instrument} チューナー`, `オンライン ${instrument} チューナー`, `無料 ${instrument} チューナー`],
    targetTitle: (instrument) => `${instrument}チューナー`
  },
  ko: {
    title: (instrument) => `${instrument} 온라인 튜닝 방법`,
    description: (instrument, tuning) => `마이크로 ${instrument}을 조율하는 빠른 가이드입니다. 기준 음: ${tuning}.`,
    intro: (instrument, tuning) => `TuneUniversal은 브라우저에서 바로 ${instrument}을 조율할 수 있게 도와줍니다. 악기를 선택하고 마이크를 허용한 뒤 기준 음 ${tuning}을 사용하세요.`,
    steps: (instrument) => [`${instrument} 튜너를 엽니다.`, "마이크 접근을 허용합니다.", "한 번에 하나의 줄 또는 음을 또렷하게 연주합니다.", "표시가 가운데에 올 때까지 조율합니다."],
    sections: (instrument, tuning) => [
      { title: "기준 음", body: `이 페이지는 ${tuning}을 기준 음으로 사용합니다. 피치 감지를 안정적으로 유지하려면 한 번에 한 음만 연주하세요.` },
      { title: "마이크 감지 팁", body: `${instrument}을 마이크 가까이에 두고 주변 소음을 줄인 뒤, 소리를 낸 후 잠시 기다려 음정이 안정되게 하세요.` }
    ],
    keywords: (instrument) => [`${instrument} 튜닝`, `온라인 ${instrument} 튜너`, `무료 ${instrument} 튜너`, `${instrument} 마이크 튜너`],
    targetTitle: (instrument) => `${instrument} 튜너`
  },
  pt: {
    title: (instrument) => `Como afinar ${instrument} online`,
    description: (instrument, tuning) => `Guia rápido para afinar ${instrument} com microfone. Notas de referência: ${tuning}.`,
    intro: (instrument, tuning) => `O TuneUniversal ajuda você a afinar ${instrument} diretamente no navegador. Selecione o instrumento, permita o microfone e use estas notas de referência: ${tuning}.`,
    steps: (instrument) => [`Abra o afinador de ${instrument}.`, "Permita o acesso ao microfone.", "Toque uma corda ou nota clara.", "Ajuste até o indicador ficar no centro."],
    sections: (instrument, tuning) => [
      { title: "Notas de referência", body: `Esta página usa ${tuning} como notas de referência. Toque uma nota por vez para manter a detecção estável.` },
      { title: "Melhor leitura do microfone", body: `Mantenha ${instrument} perto do microfone, reduza o ruído ambiente e espere um instante depois de tocar para a altura estabilizar.` }
    ],
    keywords: (instrument) => [`afinar ${instrument}`, `afinador ${instrument} online`, `afinador ${instrument} grátis`, `${instrument} com microfone`],
    targetTitle: (instrument) => `Afinador de ${instrument}`
  },
  ru: {
    title: (instrument) => `Как настроить ${instrument} онлайн`,
    description: (instrument, tuning) => `Краткое руководство по настройке ${instrument} с микрофоном. Опорные ноты: ${tuning}.`,
    intro: (instrument, tuning) => `TuneUniversal помогает настроить ${instrument} прямо в браузере. Выберите инструмент, разрешите микрофон и используйте опорные ноты: ${tuning}.`,
    steps: (instrument) => [`Откройте тюнер для ${instrument}.`, "Разрешите доступ к микрофону.", "Сыграйте одну чистую струну или ноту.", "Настраивайте, пока индикатор не окажется в центре."],
    sections: (instrument, tuning) => [
      { title: "Опорные ноты", body: `Эта страница использует опорные ноты ${tuning}. Играйте по одной ноте, чтобы распознавание оставалось стабильным.` },
      { title: "Лучшее распознавание микрофона", body: `Держите ${instrument} ближе к микрофону, уменьшите шум в комнате и подождите мгновение после атаки, чтобы высота звука стабилизировалась.` }
    ],
    keywords: (instrument) => [`настроить ${instrument}`, `тюнер ${instrument} онлайн`, `бесплатный тюнер ${instrument}`, `${instrument} с микрофоном`],
    targetTitle: (instrument) => `Тюнер ${instrument}`
  },
  zh: {
    title: (instrument) => `如何在线调${instrument}`,
    description: (instrument, tuning) => `使用麦克风调${instrument}的快速指南。参考音: ${tuning}。`,
    intro: (instrument, tuning) => `TuneUniversal 可以帮助你直接在浏览器中调${instrument}。选择乐器，允许麦克风访问，并使用这些参考音: ${tuning}。`,
    steps: (instrument) => [`打开${instrument}调音器。`, "允许麦克风访问。", "清楚地弹奏一根弦或一个音。", "调整到指针居中。"],
    sections: (instrument, tuning) => [
      { title: "参考音", body: `此页面使用 ${tuning} 作为参考音。一次只弹一个音，可以让音高识别更稳定。` },
      { title: "更好的麦克风识别", body: `让${instrument}靠近麦克风，减少环境噪音，并在发声后稍等片刻，让音高稳定。` }
    ],
    keywords: (instrument) => [`${instrument}调音`, `在线${instrument}调音器`, `免费${instrument}调音器`, `${instrument}麦克风调音器`],
    targetTitle: (instrument) => `${instrument}调音器`
  }
};

function whatIsGuides(locale: Locale): Record<WhatIsGuideSlug, Omit<GuideContent, "targetPath">> {
  const copy = {
    ar: {
      tuner: ["ما هو موالف الجيتار؟", "موالف الجيتار أداة تكشف طبقة الصوت وتخبرك إن كانت العلامة حادة أو خافتة أو في الضبط الصحيح.", "يستخدم الموالف الميكروفون لاكتشاف الاهتزاز، ثم يقارنه بالنغمة المثالية لكل وتر.", "موالف جيتار", "ضبط جيتار اونلاين"],
      metronome: ["ما هو الميترونوم؟", "الميترونوم جهاز ينتج نبضة ثابتة بإيقاع محدد لمساعدة العازفين على الإبقاء على الوقت بانتظام.", "كلما تدربت مع الميترونوم، أصبح إحساسك بالوقت أقوى وأكثر ثباتا.", "ميترونوم اونلاين", "ما هو BPM"],
      chromatic: ["ما هو الموالف الكروماتيكي؟", "الموالف الكروماتيكي يكشف أي من النغمات الاثنتي عشرة في السلم الكروماتيكي، مما يجعله أكثر مرونة من موالفات الآلات المحددة.", "بدلا من أن يعرف فقط نغمات الجيتار مثلا، يستطيع الموالف الكروماتيكي كشف أي نغمة موسيقية.", "موالف كروماتيكي", "أنواع الموالفات"]
    },
    de: {
      tuner: ["Was ist ein Gitarrenstimmgeraet?", "Ein Gitarrenstimmgeraet erkennt die Tonhoehe einer Saite und zeigt an, ob sie zu hoch, zu tief oder gestimmt ist.", "Das Stimmgeraet nutzt das Mikrofon, um die Schwingung zu erfassen, und vergleicht sie mit der Solltonhoehe jeder Saite.", "gitarrentuner online", "gitarre stimmen"],
      metronome: ["Was ist ein Metronom?", "Ein Metronom erzeugt einen gleichmaessigen Puls bei einem eingestellten Tempo in BPM, damit Musiker ein stabiles Zeitgefuehl entwickeln.", "Je mehr du mit Metronom uebst, desto staerker und zuverlaessiger wird dein inneres Zeitgefuehl.", "metronom online", "was ist BPM"],
      chromatic: ["Was ist ein chromatisches Stimmgeraet?", "Ein chromatisches Stimmgeraet erkennt alle 12 Toene der chromatischen Skala und ist damit vielseitiger als geraetespezifische Stimmgeraete.", "Statt nur Gitarrentoene zu kennen, erkennt das chromatische Geraet jede musikalische Note.", "chromatischer tuner", "stimmgeraet arten"]
    },
    en: {
      tuner: ["What is a guitar tuner?", "A guitar tuner is a device or app that detects the pitch of a string and tells you whether it is sharp, flat, or in tune.", "The tuner uses a microphone to capture the vibration, then compares it against the ideal frequency for each string.", "guitar tuner online", "what is a guitar tuner"],
      metronome: ["What is a metronome?", "A metronome is a device that produces a steady pulse at a set tempo in BPM to help musicians keep consistent time.", "The more you practise with a metronome, the stronger and more reliable your internal sense of rhythm becomes.", "online metronome", "what is BPM"],
      chromatic: ["What is a chromatic tuner?", "A chromatic tuner detects any of the 12 notes in the chromatic scale, making it more versatile than instrument-specific tuners.", "Instead of only recognising guitar pitches, a chromatic tuner identifies any musical note regardless of the instrument.", "chromatic tuner online", "types of guitar tuner"]
    },
    es: {
      tuner: ["¿Qué es un afinador de guitarra?", "Un afinador de guitarra es un dispositivo o app que detecta la altura de una cuerda y te indica si está alta, baja o afinada.", "El afinador usa el micrófono para captar la vibración y la compara con la frecuencia ideal de cada cuerda.", "afinador guitarra online", "qué es un afinador"],
      metronome: ["¿Qué es un metrónomo?", "Un metrónomo es un dispositivo que produce un pulso estable a un tempo en BPM para ayudar a los músicos a mantener el ritmo.", "Cuanto más practiques con metrónomo, más fuerte y fiable se vuelve tu sentido interno del tiempo.", "metrónomo online", "qué es el BPM"],
      chromatic: ["¿Qué es un afinador cromático?", "Un afinador cromático detecta cualquiera de las 12 notas de la escala cromática, lo que lo hace más versátil que los afinadores específicos.", "En lugar de reconocer solo notas de guitarra, identifica cualquier nota musical independientemente del instrumento.", "afinador cromático online", "tipos de afinador"]
    },
    fr: {
      tuner: ["Qu'est-ce qu'un accordeur de guitare ?", "Un accordeur de guitare est un appareil ou une application qui détecte la hauteur d'une corde et indique si elle est trop haute, trop basse ou juste.", "L'accordeur utilise le microphone pour capter la vibration et la compare à la fréquence idéale de chaque corde.", "accordeur guitare en ligne", "qu'est-ce qu'un accordeur"],
      metronome: ["Qu'est-ce qu'un métronome ?", "Un métronome est un appareil qui produit une pulsation régulière à un tempo défini en BPM pour aider les musiciens à garder un rythme stable.", "Plus vous pratiquez avec un métronome, plus votre sens interne du temps devient fort et fiable.", "métronome en ligne", "qu'est-ce que le BPM"],
      chromatic: ["Qu'est-ce qu'un accordeur chromatique ?", "Un accordeur chromatique détecte n'importe laquelle des 12 notes de la gamme chromatique, ce qui le rend plus polyvalent que les accordeurs spécifiques.", "Au lieu de reconnaître seulement les notes de guitare, il identifie n'importe quelle note musicale quel que soit l'instrument.", "accordeur chromatique en ligne", "types d'accordeur"]
    },
    it: {
      tuner: ["Cos'è un accordatore per chitarra?", "Un accordatore per chitarra è un dispositivo o app che rileva l'intonazione di una corda e indica se è troppo alta, troppo bassa o accordata.", "L'accordatore usa il microfono per catturare la vibrazione e la confronta con la frequenza ideale di ogni corda.", "accordatore chitarra online", "cos'è un accordatore"],
      metronome: ["Cos'è un metronomo?", "Un metronomo è uno strumento che produce un impulso stabile a un tempo impostato in BPM per aiutare i musicisti a mantenere il tempo.", "Più pratichi con il metronomo, più il tuo senso interno del ritmo diventa solido e preciso.", "metronomo online", "cos'è il BPM"],
      chromatic: ["Cos'è un accordatore cromatico?", "Un accordatore cromatico rileva qualsiasi delle 12 note della scala cromatica, rendendolo più versatile degli accordatori specifici per strumento.", "Invece di riconoscere solo le note della chitarra, identifica qualsiasi nota musicale indipendentemente dallo strumento.", "accordatore cromatico online", "tipi di accordatore"]
    },
    ja: {
      tuner: ["ギターチューナーとは？", "ギターチューナーは弦の音程を検出し、高い・低い・合っているかを教えるデバイスまたはアプリです。", "マイクで振動を拾い、各弦の理想的な周波数と比較します。", "ギターチューナー オンライン", "ギターチューナー とは"],
      metronome: ["メトロノームとは？", "メトロノームは設定されたテンポ（BPM）で一定のパルスを刻み、演奏者が安定したリズムを保つのを助けます。", "メトロノームで練習するほど、内部のリズム感が強く安定します。", "メトロノーム オンライン", "BPM とは"],
      chromatic: ["クロマチックチューナーとは？", "クロマチックチューナーは半音階の12音すべてを検出でき、楽器専用チューナーより汎用性が高いです。", "ギターの音だけでなく、あらゆる楽器の音符を識別できます。", "クロマチックチューナー オンライン", "チューナーの種類"]
    },
    ko: {
      tuner: ["기타 튜너란?", "기타 튜너는 줄의 음정을 감지해 너무 높은지, 낮은지, 정확히 맞는지 알려주는 장치 또는 앱입니다.", "마이크로 진동을 감지해 각 줄의 이상적인 주파수와 비교합니다.", "기타 튜너 온라인", "기타 튜너 란"],
      metronome: ["메트로놈이란?", "메트로놈은 설정된 BPM 템포로 일정한 박자를 만들어 연주자가 안정적인 리듬을 유지하도록 돕는 장치입니다.", "메트로놈으로 연습할수록 내부 리듬 감각이 강해집니다.", "메트로놈 온라인", "BPM 이란"],
      chromatic: ["크로매틱 튜너란?", "크로매틱 튜너는 반음계의 12음 모두를 감지할 수 있어 악기별 전용 튜너보다 범용성이 높습니다.", "기타 음만이 아니라 어떤 악기의 음도 식별할 수 있습니다.", "크로매틱 튜너 온라인", "튜너 종류"]
    },
    pt: {
      tuner: ["O que é um afinador de guitarra?", "Um afinador de guitarra é um dispositivo ou app que detecta a altura de uma corda e indica se está alta, baixa ou afinada.", "O afinador usa o microfone para captar a vibração e compara com a frequência ideal de cada corda.", "afinador guitarra online", "o que é um afinador"],
      metronome: ["O que é um metrônomo?", "Um metrônomo é um dispositivo que produz um pulso estável em um tempo definido em BPM para ajudar os músicos a manter o ritmo.", "Quanto mais você pratica com metrônomo, mais forte e confiável fica seu sentido interno de tempo.", "metrônomo online", "o que é BPM"],
      chromatic: ["O que é um afinador cromático?", "Um afinador cromático detecta qualquer uma das 12 notas da escala cromática, tornando-o mais versátil que os afinadores específicos.", "Em vez de reconhecer apenas notas de guitarra, identifica qualquer nota musical independente do instrumento.", "afinador cromático online", "tipos de afinador"]
    },
    ru: {
      tuner: ["Что такое гитарный тюнер?", "Гитарный тюнер — устройство или приложение, которое определяет высоту струны и сообщает, завышена она, занижена или в строе.", "Тюнер использует микрофон для захвата вибрации и сравнивает её с идеальной частотой каждой струны.", "онлайн тюнер для гитары", "что такое тюнер"],
      metronome: ["Что такое метроном?", "Метроном — устройство, создающее равномерный пульс при заданном темпе в BPM, чтобы музыканты поддерживали стабильный ритм.", "Чем больше вы занимаетесь с метрономом, тем сильнее становится внутреннее чувство ритма.", "онлайн метроном", "что такое BPM"],
      chromatic: ["Что такое хроматический тюнер?", "Хроматический тюнер определяет любую из 12 нот хроматической гаммы, что делает его более универсальным, чем тюнеры для конкретных инструментов.", "Вместо распознавания только гитарных нот он определяет любую музыкальную ноту.", "хроматический тюнер онлайн", "виды тюнеров"]
    },
    zh: {
      tuner: ["吉他调音器是什么？", "吉他调音器是一种设备或应用程序，用于检测弦的音高，并告知是偏高、偏低还是准确。", "调音器使用麦克风捕捉振动，然后与每根弦的理想频率进行比较。", "吉他调音器 在线", "什么是调音器"],
      metronome: ["节拍器是什么？", "节拍器是一种以设定BPM产生稳定脉冲的设备，帮助音乐人保持稳定的节奏感。", "用节拍器练习得越多，你内在的节奏感就越强越可靠。", "在线节拍器", "什么是BPM"],
      chromatic: ["半音调音器是什么？", "半音调音器可以检测半音阶中的任意12个音符，比特定乐器的调音器更通用。", "它不只识别吉他音符，而是识别任何乐器的任何音符。", "半音调音器 在线", "调音器类型"]
    }
  }[getContentLocale(locale)];

  const steps = {
    tuner: {
      ar: ["العب وترا واحدا.", "راقب النغمة المكتشفة على الشاشة.", "اضبط الملف باتجاه المركز.", "كرر لجميع الأوتار الستة."],
      de: ["Eine Saite spielen.", "Den angezeigten Ton und die Abweichung ablesen.", "Den Wirbel in Richtung Mitte drehen.", "Alle sechs Saiten nacheinander wiederholen."],
      en: ["Play one string.", "Read the detected note on screen.", "Turn the tuning peg toward center.", "Repeat for all six strings."],
      es: ["Toca una cuerda.", "Lee la nota detectada en pantalla.", "Gira la clavija hacia el centro.", "Repite con las seis cuerdas."],
      fr: ["Jouez une corde.", "Lisez la note détectée à l'écran.", "Tournez la cheville vers le centre.", "Répétez pour les six cordes."],
      it: ["Suona una corda.", "Leggi la nota rilevata sullo schermo.", "Gira il pirolo verso il centro.", "Ripeti per tutte e sei le corde."],
      ja: ["1本の弦を弾く。", "画面で検出された音を確認する。", "ペグを中央に向けて回す。", "6本全ての弦を繰り返す。"],
      ko: ["줄 하나를 연주한다.", "화면에서 감지된 음을 읽는다.", "튜닝 페그를 중앙 쪽으로 돌린다.", "6줄 모두 반복한다."],
      pt: ["Toque uma corda.", "Leia a nota detectada na tela.", "Gire a tarraxa em direção ao centro.", "Repita para as seis cordas."],
      ru: ["Ударьте одну струну.", "Прочитайте определённую ноту на экране.", "Поверните колок в сторону центра.", "Повторите для всех шести струн."],
      zh: ["拨动一根弦。", "查看屏幕上检测到的音符。", "将弦钮向中心方向转动。", "对所有六根弦重复操作。"]
    }[getContentLocale(locale)],
    metronome: {
      ar: ["اختر BPM مريحا.", "شغّل النبض واستمع جيدا.", "العب أو غنّ مع النبضات.", "ارفع السرعة فقط بعد أن تكون عدة جولات نظيفة."],
      de: ["Ein angenehmes BPM wählen.", "Den Puls starten und genau hinhören.", "Dazu spielen oder singen.", "Nur nach mehreren sauberen Durchläufen beschleunigen."],
      en: ["Choose a comfortable BPM.", "Start the pulse and listen carefully.", "Play or sing along.", "Raise the speed only after several clean rounds."],
      es: ["Elige un BPM cómodo.", "Inicia el pulso y escucha con atención.", "Toca o canta a la vez.", "Sube la velocidad solo después de varias rondas limpias."],
      fr: ["Choisissez un BPM confortable.", "Démarrez le pulse et écoutez attentivement.", "Jouez ou chantez dessus.", "Augmentez la vitesse seulement après plusieurs passages propres."],
      it: ["Scegli un BPM comodo.", "Avvia il pulse e ascolta con attenzione.", "Suona o canta insieme.", "Aumenta la velocità solo dopo diversi giri puliti."],
      ja: ["快適なBPMを選ぶ。", "パルスをスタートし、よく聴く。", "一緒に演奏または歌う。", "何度かきれいにできてからテンポを上げる。"],
      ko: ["편안한 BPM을 선택한다.", "박자를 시작하고 잘 듣는다.", "함께 연주하거나 노래한다.", "여러 번 깨끗이 된 후에만 속도를 올린다."],
      pt: ["Escolha um BPM confortável.", "Inicie o pulso e ouça com atenção.", "Toque ou cante junto.", "Aumente o tempo só após várias rodadas limpas."],
      ru: ["Выберите комфортный BPM.", "Запустите пульс и внимательно слушайте.", "Играйте или пойте вместе.", "Ускоряйтесь только после нескольких чистых прогонов."],
      zh: ["选择一个舒适的BPM。", "开始脉冲并仔细聆听。", "跟着演奏或演唱。", "只在几轮干净后再提速。"]
    }[getContentLocale(locale)],
    chromatic: {
      ar: ["افتح الموالف.", "العب نغمة واحدة بوضوح.", "اقرأ اسم النغمة المعروضة.", "اضبط حتى يستقر المؤشر في المنتصف."],
      de: ["Das Stimmgeraet öffnen.", "Eine Note klar spielen.", "Den angezeigten Tonnamen lesen.", "Nachstimmen, bis der Zeiger in der Mitte einrastet."],
      en: ["Open the tuner.", "Play one note clearly.", "Read the displayed note name.", "Adjust until the needle settles at centre."],
      es: ["Abre el afinador.", "Toca una nota con claridad.", "Lee el nombre de la nota mostrada.", "Ajusta hasta que la aguja se centre."],
      fr: ["Ouvrez l'accordeur.", "Jouez une note clairement.", "Lisez le nom de la note affichée.", "Ajustez jusqu'à ce que l'aiguille soit au centre."],
      it: ["Apri l'accordatore.", "Suona una nota in modo chiaro.", "Leggi il nome della nota visualizzata.", "Correggi finché l'ago si centra."],
      ja: ["チューナーを開く。", "1音をはっきり演奏する。", "表示された音符名を読む。", "針が中央に落ち着くまで調整する。"],
      ko: ["튜너를 연다.", "음 하나를 명확히 연주한다.", "표시된 음표 이름을 읽는다.", "바늘이 중앙에 안정될 때까지 조율한다."],
      pt: ["Abra o afinador.", "Toque uma nota com clareza.", "Leia o nome da nota exibida.", "Ajuste até a agulha centralizar."],
      ru: ["Откройте тюнер.", "Сыграйте одну ноту чисто.", "Прочитайте отображаемое название ноты.", "Настраивайте, пока стрелка не встанет по центру."],
      zh: ["打开调音器。", "清晰地演奏一个音符。", "读取显示的音符名称。", "调整直到指针稳定在中央。"]
    }[getContentLocale(locale)]
  };

  const sections = {
    ar: {
      tuner: [
        { title: "كيف يعمل الموالف", body: "يستخدم الموالف FFT لتحليل الموجة الصوتية وتحويلها إلى قراءة بالهرتز، ثم مقارنتها بتوليفة السنتات الصحيحة. والنتيجة هي سهم يشير إلى الضبط النقي." },
        { title: "متى يجب استخدام الموالف", body: "ضع دائما في الضبط قبل كل جلسة عزف، وبعد تغيير الأوتار، وعند الانتقال من مساحة باردة إلى دافئة." }
      ],
      metronome: [
        { title: "BPM والإيقاع", body: "BPM يعني نبضات في الدقيقة. 60 BPM تعني نبضة واحدة في الثانية، و120 تعني نبضتين. كلما زادت BPM، زادت السرعة." },
        { title: "كيف يساعد في التدريب", body: "يجعل الميترونوم الأخطاء الإيقاعية مسموعة وقابلة للتصحيح. ابدأ ببطء وزد السرعة تدريجيا للحصول على نتائج أفضل." }
      ],
      chromatic: [
        { title: "الفرق بين الموالف الكروماتيكي والموالف الخاص", body: "يعرف الموالف الخاص بالجيتار فقط 6 نغمات. أما الكروماتيكي فيعرف كل النغمات الـ12، مما يجعله مناسبا لأي آلة." },
        { title: "متى تستخدم الموالف الكروماتيكي", body: "استخدمه عند الضبط بالسنتات الغريبة مثل Drop D أو Open G، أو لأي آلة ليست الجيتار." }
      ]
    },
    de: {
      tuner: [
        { title: "Wie ein Gitarren-Tuner funktioniert", body: "Der Tuner analysiert die eingehende Schallwelle per FFT, ermittelt die Frequenz in Hz und vergleicht sie mit dem Soll-Wert. Das Ergebnis ist eine Anzeige in Cents, die dir zeigt, wie weit du daneben liegst." },
        { title: "Wann du stimmen solltest", body: "Stimme vor jeder Spielsession, nach jedem Saitenwechsel und wenn du das Instrument von einem kalten in einen warmen Raum bringst." }
      ],
      metronome: [
        { title: "BPM und Tempo", body: "BPM steht für Beats per Minute. 60 BPM bedeutet ein Schlag pro Sekunde, 120 BPM zwei. Je höher der Wert, desto schneller das Tempo." },
        { title: "Warum das Metronom beim Üben hilft", body: "Es macht rhythmische Fehler hörbar und korrigierbar. Beginne langsam und steigere das Tempo schrittweise für die besten Ergebnisse." }
      ],
      chromatic: [
        { title: "Unterschied zwischen chromatisch und instrumentspezifisch", body: "Ein Gitarren-Stimmgeraet kennt nur die 6 Saiten. Das chromatische kennt alle 12 Toene und eignet sich fuer jedes Instrument." },
        { title: "Wann du das chromatische Stimmgeraet nutzt", body: "Nutze es fuer alternative Stimmungen wie Drop D oder Open G oder fuer Instrumente ausserhalb der Gitarre." }
      ]
    },
    en: {
      tuner: [
        { title: "How a guitar tuner works", body: "The tuner analyses the incoming sound wave using FFT, determines the frequency in Hz, then compares it against the target. The result is a cents reading that shows you how far off you are — green means in tune." },
        { title: "When to tune", body: "Tune before every playing session, after any string change, and whenever you move the guitar from a cold to a warm room or vice versa." }
      ],
      metronome: [
        { title: "BPM and tempo", body: "BPM stands for beats per minute. 60 BPM means one beat per second; 120 BPM means two. The higher the number, the faster the tempo — most pop songs sit between 90 and 130 BPM." },
        { title: "Why a metronome helps practice", body: "It makes rhythmic errors audible and correctable. Start slow, play cleanly, then raise the tempo — this is the most effective way to build reliable rhythm." }
      ],
      chromatic: [
        { title: "Chromatic vs instrument-specific tuner", body: "An instrument-specific tuner only knows the standard pitches for that instrument. A chromatic tuner recognises all 12 notes of the chromatic scale, making it suitable for any instrument and any tuning." },
        { title: "When to use a chromatic tuner", body: "Use it for alternate tunings (Drop D, Open G, half-step down), for non-guitar instruments, or whenever you need to check a single pitch without preset string names." }
      ]
    },
    es: {
      tuner: [
        { title: "Cómo funciona un afinador de guitarra", body: "El afinador analiza la onda de sonido con FFT, determina la frecuencia en Hz y la compara con el objetivo. El resultado es una lectura en cents que muestra cuánto te alejas — verde significa afinado." },
        { title: "Cuándo afinar", body: "Afina antes de cada sesión, tras cambiar cuerdas y siempre que muevas la guitarra de un ambiente frío a uno cálido." }
      ],
      metronome: [
        { title: "BPM y tempo", body: "BPM significa pulsos por minuto. 60 BPM equivale a un pulso por segundo; 120 BPM son dos. Cuanto más alto el número, más rápido el tempo." },
        { title: "Por qué el metrónomo ayuda en el estudio", body: "Hace audibles y corregibles los errores rítmicos. Empieza despacio, toca limpio y sube el tempo progresivamente." }
      ],
      chromatic: [
        { title: "Afinador cromático vs específico por instrumento", body: "Un afinador específico solo conoce las notas estándar de ese instrumento. El cromático reconoce las 12 notas, siendo válido para cualquier instrumento y afinación." },
        { title: "Cuándo usar el afinador cromático", body: "Úsalo para afinaciones alternativas como Drop D u Open G, para instrumentos distintos a la guitarra, o cuando necesites comprobar una nota concreta." }
      ]
    },
    fr: {
      tuner: [
        { title: "Comment fonctionne un accordeur de guitare", body: "L'accordeur analyse l'onde sonore par FFT, détermine la fréquence en Hz et la compare à l'objectif. Le résultat est une lecture en cents indiquant l'écart — vert signifie juste." },
        { title: "Quand accorder", body: "Accordez avant chaque session, après chaque changement de corde et chaque fois que vous passez la guitare d'un environnement froid à chaud." }
      ],
      metronome: [
        { title: "BPM et tempo", body: "BPM signifie battements par minute. 60 BPM correspond à un temps par seconde ; 120 BPM à deux. Plus le chiffre est élevé, plus le tempo est rapide." },
        { title: "Pourquoi le métronome aide à la pratique", body: "Il rend les erreurs rythmiques audibles et corrigeables. Commencez lentement, jouez proprement puis montez le tempo." }
      ],
      chromatic: [
        { title: "Accordeur chromatique vs spécifique", body: "Un accordeur spécifique ne connaît que les notes standard de cet instrument. Le chromatique reconnaît les 12 notes de la gamme, convenant à tout instrument et tout accordage." },
        { title: "Quand utiliser l'accordeur chromatique", body: "Utilisez-le pour les accordages alternatifs comme Drop D ou Open G, les instruments autres que la guitare, ou pour vérifier une note isolée." }
      ]
    },
    it: {
      tuner: [
        { title: "Come funziona un accordatore per chitarra", body: "L'accordatore analizza l'onda sonora con FFT, determina la frequenza in Hz e la confronta con il target. Il risultato è una lettura in cents che mostra quanto sei distante — verde significa accordato." },
        { title: "Quando accordare", body: "Accorda prima di ogni sessione, dopo ogni cambio di corde e ogni volta che porti la chitarra da un ambiente freddo a uno caldo." }
      ],
      metronome: [
        { title: "BPM e tempo", body: "BPM sta per battiti al minuto. 60 BPM equivale a un beat al secondo; 120 BPM sono due. Più alto il numero, più veloce il tempo — la maggior parte dei brani pop si trova tra 90 e 130 BPM." },
        { title: "Perché il metronomo aiuta nello studio", body: "Rende gli errori ritmici udibili e correggibili. Inizia lento, suona pulito, poi alza il tempo — è il metodo più efficace per costruire un ritmo solido." }
      ],
      chromatic: [
        { title: "Accordatore cromatico vs specifico per strumento", body: "Un accordatore specifico riconosce solo le note standard di quello strumento. Il cromatico riconosce tutte le 12 note della scala, adatto a qualsiasi strumento e accordatura." },
        { title: "Quando usare l'accordatore cromatico", body: "Usalo per accordature alternative come Drop D o Open G, per strumenti diversi dalla chitarra, o per verificare una singola nota senza nomi di corde preimpostati." }
      ]
    },
    ja: {
      tuner: [
        { title: "ギターチューナーの仕組み", body: "チューナーはFFTで音波を解析し、Hzで周波数を測定してターゲットと比較します。結果はセント単位の読み取りで表示され、グリーンは合っているサインです。" },
        { title: "いつチューニングすべきか", body: "演奏前、弦を交換した後、楽器を寒い場所から暖かい場所に移動した後にチューニングしましょう。" }
      ],
      metronome: [
        { title: "BPMとテンポ", body: "BPMは1分あたりの拍数を意味します。60 BPMは1秒に1拍、120 BPMは2拍です。数値が高いほどテンポが速くなります。" },
        { title: "メトロノームが練習に役立つ理由", body: "リズムのミスを耳で聞いて修正できます。遅くから始めて、きれいに弾けたらテンポを上げるのが最も効果的な方法です。" }
      ],
      chromatic: [
        { title: "クロマチックチューナーと楽器専用チューナーの違い", body: "楽器専用チューナーはその楽器の標準音だけを認識します。クロマチックは12音すべてを認識し、あらゆる楽器とチューニングに対応します。" },
        { title: "クロマチックチューナーを使う場面", body: "ドロップDやオープンGなどのオルタナティブチューニング、ギター以外の楽器、または単一の音符を確認する場合に使用します。" }
      ]
    },
    ko: {
      tuner: [
        { title: "기타 튜너의 작동 원리", body: "튜너는 FFT로 음파를 분석해 Hz로 주파수를 결정하고 목표 주파수와 비교합니다. 결과는 센트 단위로 표시되며 그린은 맞다는 신호입니다." },
        { title: "언제 튜닝해야 하는가", body: "모든 연주 세션 전, 줄 교체 후, 기타를 차가운 곳에서 따뜻한 곳으로 이동할 때마다 튜닝하세요." }
      ],
      metronome: [
        { title: "BPM과 템포", body: "BPM은 분당 박자수입니다. 60 BPM은 1초에 1박, 120 BPM은 2박입니다. 숫자가 높을수록 템포가 빠릅니다." },
        { title: "메트로놈이 연습에 도움되는 이유", body: "리듬 실수를 들을 수 있게 해 수정할 수 있습니다. 천천히 시작해 깨끗하게 연주한 후 템포를 올리는 것이 가장 효과적인 방법입니다." }
      ],
      chromatic: [
        { title: "크로매틱 튜너와 악기별 전용 튜너의 차이", body: "악기별 튜너는 해당 악기의 표준 음만 인식합니다. 크로매틱은 12음 모두를 인식해 모든 악기와 튜닝에 적합합니다." },
        { title: "크로매틱 튜너를 사용하는 경우", body: "Drop D나 Open G 같은 대안 튜닝, 기타 이외의 악기, 또는 프리셋 없이 단일 음을 확인할 때 사용합니다." }
      ]
    },
    pt: {
      tuner: [
        { title: "Como funciona um afinador de guitarra", body: "O afinador analisa a onda sonora via FFT, determina a frequência em Hz e compara com o alvo. O resultado é uma leitura em cents que mostra o desvio — verde significa afinado." },
        { title: "Quando afinar", body: "Afine antes de cada sessão, após trocar cordas e sempre que mover o violão de um ambiente frio para um quente." }
      ],
      metronome: [
        { title: "BPM e andamento", body: "BPM significa batidas por minuto. 60 BPM equivale a um tempo por segundo; 120 BPM são dois. Quanto maior o número, mais rápido o andamento." },
        { title: "Por que o metrônomo ajuda no estudo", body: "Torna os erros rítmicos audíveis e corrigíveis. Comece devagar, toque limpo e suba o tempo gradualmente." }
      ],
      chromatic: [
        { title: "Afinador cromático vs específico por instrumento", body: "Um afinador específico só reconhece as notas padrão daquele instrumento. O cromático reconhece todas as 12 notas, servindo para qualquer instrumento e afinação." },
        { title: "Quando usar o afinador cromático", body: "Use para afinações alternativas como Drop D ou Open G, para instrumentos além da guitarra, ou para verificar uma nota isolada." }
      ]
    },
    ru: {
      tuner: [
        { title: "Как работает гитарный тюнер", body: "Тюнер анализирует звуковую волну с помощью FFT, определяет частоту в Гц и сравнивает с целевым значением. Результат — показание в центах; зелёный цвет означает строй." },
        { title: "Когда настраивать гитару", body: "Настраивайте перед каждой сессией, после замены струн и при смене температурного режима." }
      ],
      metronome: [
        { title: "BPM и темп", body: "BPM — это ударов в минуту. 60 BPM — один удар в секунду; 120 BPM — два. Чем выше число, тем быстрее темп." },
        { title: "Почему метроном помогает при занятиях", body: "Он делает ритмические ошибки слышимыми и исправимыми. Начинайте медленно, играйте чисто, затем повышайте темп." }
      ],
      chromatic: [
        { title: "Хроматический тюнер vs инструментальный", body: "Инструментальный тюнер знает только стандартные ноты своего инструмента. Хроматический распознаёт все 12 нот и подходит для любого инструмента." },
        { title: "Когда использовать хроматический тюнер", body: "Используйте для альтернативных строев (Drop D, Open G), для нестандартных инструментов или для проверки одной ноты." }
      ]
    },
    zh: {
      tuner: [
        { title: "吉他调音器的工作原理", body: "调音器通过FFT分析声波，以Hz确定频率并与目标对比。结果以音分显示偏差——绿色表示准确。" },
        { title: "何时调音", body: "每次演奏前、更换琴弦后以及将吉他从寒冷环境带到温暖环境时都应调音。" }
      ],
      metronome: [
        { title: "BPM与速度", body: "BPM代表每分钟节拍数。60 BPM等于每秒一拍；120 BPM等于两拍。数值越高，速度越快。" },
        { title: "节拍器为何有助于练习", body: "它使节奏错误变得可听见且可纠正。从慢速开始，弹奏干净后再提速，这是建立稳定节奏感最有效的方法。" }
      ],
      chromatic: [
        { title: "半音调音器与乐器专用调音器的区别", body: "乐器专用调音器只识别该乐器的标准音。半音调音器识别所有12个音符，适用于任何乐器和调弦方式。" },
        { title: "何时使用半音调音器", body: "用于Drop D或Open G等替代调弦、非吉他乐器，或需要在没有预设弦名的情况下检查单个音符时使用。" }
      ]
    }
  }[getContentLocale(locale)];

  const cl = getContentLocale(locale);
  return {
    "what-is-a-guitar-tuner": {
      title: copy.tuner[0],
      description: copy.tuner[1],
      intro: copy.tuner[2],
      keywords: [copy.tuner[3], copy.tuner[4]],
      steps: steps.tuner,
      sections: sections.tuner,
      tool: "guitar-tuner" as ToolSlug,
      relatedGuides: ["chromatic-tuner-guide", "guitar-tuner-with-microphone", "what-is-a-chromatic-tuner"]
    },
    "what-is-a-metronome": {
      title: copy.metronome[0],
      description: copy.metronome[1],
      intro: copy.metronome[2],
      keywords: [copy.metronome[3], copy.metronome[4]],
      steps: steps.metronome,
      sections: sections.metronome,
      tool: "metronome" as ToolSlug,
      relatedGuides: ["how-to-use-metronome", "metronome-subdivisions", "how-to-find-bpm"]
    },
    "what-is-a-chromatic-tuner": {
      title: copy.chromatic[0],
      description: copy.chromatic[1],
      intro: copy.chromatic[2],
      keywords: [copy.chromatic[3], copy.chromatic[4]],
      steps: steps.chromatic,
      sections: sections.chromatic,
      tool: "guitar-tuner" as ToolSlug,
      relatedGuides: ["chromatic-tuner-guide", "what-is-a-guitar-tuner", "guitar-tuner-with-microphone"]
    }
  };
}

const utilityGuides: Record<BaseLocale, Record<UtilityGuideSlug, Omit<GuideContent, "targetPath">>> = {
  ar: {
    "how-to-find-bpm": {
      title: "كيفية معرفة BPM للأغنية",
      description: "استخدم Tap BPM لتقدير سرعة الأغنية بالنقر مع الإيقاع.",
      intro: "انقر مع الموسيقى وسيحسب TuneUniversal متوسط BPM من النقرات الأخيرة.",
      keywords: ["حساب BPM", "Tap BPM", "نبضات في الدقيقة"],
      steps: ["شغل الأغنية.", "انقر مع كل نبضة.", "استمر لثماني نقرات أو أكثر.", "اقرأ متوسط BPM."],
      sections: [{ title: "ما هو BPM", body: "BPM يعني عدد النبضات في الدقيقة." }, { title: "قياس ثابت", body: "انقر دائما على نفس موضع الإيقاع الرئيسي." }],
      tool: "tap-bpm"
    },
    "how-to-use-metronome": {
      title: "كيفية استخدام الميترونوم",
      description: "تدرب على BPM والميزان والنبرات والتقسيمات الإيقاعية.",
      intro: "يساعد الميترونوم على بناء إحساس ثابت بالوقت أثناء التدريب.",
      keywords: ["استخدام ميترونوم", "ميترونوم اونلاين", "BPM موسيقى"],
      steps: ["اختر BPM بطيئا.", "حدد الميزان.", "ابدأ النقر.", "زد السرعة تدريجيا."],
      sections: [{ title: "BPM والميزان", body: "BPM يعني نبضات في الدقيقة. الميزان ينظم مواضع النبرات." }, { title: "التقسيمات", body: "الثنائيات والثلاثيات والرباعيات تساعد على دقة الإيقاع." }],
      tool: "metronome"
    },
    ...extraUtilityGuides("ar"),
    ...queryDrivenUtilityGuides("ar"),
    ...whatIsGuides("ar"),
    "standard-bass-tuning": standardBassUtility("ar")
  },
  de: {
    "how-to-find-bpm": utilityBpm("de"),
    "how-to-use-metronome": utilityMetronome("de"),
    ...extraUtilityGuides("de"),
    ...queryDrivenUtilityGuides("de"),
    ...whatIsGuides("de"),
    "standard-bass-tuning": standardBassUtility("de")
  },
  en: {
    "how-to-find-bpm": utilityBpm("en"),
    "how-to-use-metronome": utilityMetronome("en"),
    ...extraUtilityGuides("en"),
    ...queryDrivenUtilityGuides("en"),
    ...whatIsGuides("en"),
    "standard-bass-tuning": standardBassUtility("en")
  },
  es: {
    "how-to-find-bpm": utilityBpm("es"),
    "how-to-use-metronome": utilityMetronome("es"),
    ...extraUtilityGuides("es"),
    ...queryDrivenUtilityGuides("es"),
    ...whatIsGuides("es"),
    "standard-bass-tuning": standardBassUtility("es")
  },
  fr: {
    "how-to-find-bpm": utilityBpm("fr"),
    "how-to-use-metronome": utilityMetronome("fr"),
    ...extraUtilityGuides("fr"),
    ...queryDrivenUtilityGuides("fr"),
    ...whatIsGuides("fr"),
    "standard-bass-tuning": standardBassUtility("fr")
  },
  it: {
    "how-to-find-bpm": utilityBpm("it"),
    "how-to-use-metronome": utilityMetronome("it"),
    ...extraUtilityGuides("it"),
    ...queryDrivenUtilityGuides("it"),
    ...whatIsGuides("it"),
    "standard-bass-tuning": standardBassUtility("it")
  },
  ja: {
    "how-to-find-bpm": utilityBpm("ja"),
    "how-to-use-metronome": utilityMetronome("ja"),
    ...extraUtilityGuides("ja"),
    ...queryDrivenUtilityGuides("ja"),
    ...whatIsGuides("ja"),
    "standard-bass-tuning": standardBassUtility("ja")
  },
  ko: {
    "how-to-find-bpm": utilityBpm("ko"),
    "how-to-use-metronome": utilityMetronome("ko"),
    ...extraUtilityGuides("ko"),
    ...queryDrivenUtilityGuides("ko"),
    ...whatIsGuides("ko"),
    "standard-bass-tuning": standardBassUtility("ko")
  },
  pt: {
    "how-to-find-bpm": utilityBpm("pt"),
    "how-to-use-metronome": utilityMetronome("pt"),
    ...extraUtilityGuides("pt"),
    ...queryDrivenUtilityGuides("pt"),
    ...whatIsGuides("pt"),
    "standard-bass-tuning": standardBassUtility("pt")
  },
  ru: {
    "how-to-find-bpm": utilityBpm("ru"),
    "how-to-use-metronome": utilityMetronome("ru"),
    ...extraUtilityGuides("ru"),
    ...queryDrivenUtilityGuides("ru"),
    ...whatIsGuides("ru"),
    "standard-bass-tuning": standardBassUtility("ru")
  },
  zh: {
    "how-to-find-bpm": utilityBpm("zh"),
    "how-to-use-metronome": utilityMetronome("zh"),
    ...extraUtilityGuides("zh"),
    ...queryDrivenUtilityGuides("zh"),
    ...whatIsGuides("zh"),
    "standard-bass-tuning": standardBassUtility("zh")
  }
};

const guideContentOverrides: Partial<Record<Locale, Partial<Record<GuideSlug, GuideOverride>>>> = {
  en: {
    "d-standard-tuning": {
      intro:
        "D Standard tuning lowers every guitar string by a full step to D G C F A D. It gives riffs a heavier voice while keeping interval shapes familiar.",
      sections: [
        {
          title: "When players use D Standard",
          body: "D Standard is common in heavy rock, metal and darker singer-songwriter arrangements where players want a lower register without changing every chord shape."
        },
        {
          title: "Practical tuning tip",
          body: "Tune from the lowest string upward, then play a few power chords to check that string tension and intonation feel even across the neck."
        }
      ]
    },
    "drop-c-tuning": {
      intro:
        "Drop C tuning gives you C G C F A D, making low power chords easy while keeping the upper strings close to familiar guitar shapes.",
      sections: [
        {
          title: "Where Drop C is common",
          body: "Drop C is popular in modern hard rock and metal because it combines a deep low string with chord shapes that still feel close to standard tuning."
        },
        {
          title: "Before you start",
          body: "If the strings feel loose, use a slightly heavier gauge. Tune slowly and re-check the low string after the others settle."
        }
      ]
    },
    "drop-d-tuning": {
      intro:
        "Drop D tuning changes standard guitar tuning to D A D G B E, giving you a heavier low string and easier one-finger power chords.",
      sections: [
        {
          title: "Why guitarists use Drop D",
          body: "Drop D is one of the easiest alternate tunings to learn because only the lowest string changes. It works well for rock riffs, acoustic writing and heavier rhythm parts."
        },
        {
          title: "Quick check after tuning",
          body: "Play the open sixth and fourth strings together. They should reinforce each other cleanly when the tuning is correct."
        }
      ]
    },
    "eb-standard-tuning": {
      intro:
        "Eb Standard lowers every guitar string by one semitone to Eb Ab Db Gb Bb Eb, giving a slightly softer feel and a lower vocal key.",
      sections: [
        {
          title: "Why use Eb Standard",
          body: "Many players use Eb Standard for a warmer, slightly darker sound and to reduce string tension without changing familiar chord and scale shapes."
        },
        {
          title: "Best way to check it",
          body: "Tune each string carefully, then test a few open chords and octaves to make sure the lower tension still feels balanced."
        }
      ]
    },
    "how-to-tune-12-string-guitar": {
      intro:
        "Use this guide to tune a 12 string guitar course by course, balance the octave pairs and keep the shimmer without making the strings feel unstable."
    },
    "how-to-tune-bass": {
      intro:
        "This bass tuning guide helps you lock in standard bass notes quickly, whether you play a 4-string practice bass or move between 4 and 5 string setups."
    },
    "how-to-tune-violin": {
      intro:
        "Tune violin strings to G D A E with the browser microphone, then use steady bow strokes or clean plucks so the pitch settles clearly."
    },
    "open-d-tuning": {
      intro:
        "Open D tuning gives you D A D F# A D, creating a full open chord that works beautifully for slide guitar, fingerstyle and songwriting.",
      sections: [
        {
          title: "What Open D is good for",
          body: "Open D is widely used for slide parts, drone notes and chord voicings that sound wider and more resonant than standard tuning."
        },
        {
          title: "How to hear it quickly",
          body: "After tuning, strum all strings open. If the tuning is correct, you should hear a full D major chord immediately."
        }
      ]
    }
  },
  es: {
    "common-guitar-tunings": {
      intro:
        "Esta guia resume las afinaciones de guitarra mas usadas para que puedas comparar Standard, Drop, Open y afinaciones graves antes de abrir el afinador."
    },
    "how-to-tune-12-string-guitar": {
      intro:
        "Aprende a afinar guitarra de 12 cuerdas por pares, controlar octavas y mantener un coro equilibrado sin perder estabilidad."
    },
    "how-to-tune-7-string-guitar": {
      intro:
        "Esta guia te ayuda a afinar guitarra de 7 cuerdas con cuerda grave Si, lectura estable y pasos simples para ensayo o practica."
    },
    "how-to-tune-8-string-guitar": {
      intro:
        "Usa esta guia para afinar guitarra de 8 cuerdas con microfono, revisar la cuerda mas grave y mantener claridad en afinaciones extendidas."
    },
    "how-to-tune-bass": {
      intro:
        "Afina bajo online con esta guia sencilla para notas estandar, lectura clara del microfono y comprobacion rapida de las cuerdas graves."
    },
    "standard-bass-tuning": {
      intro:
        "La afinacion estandar de bajo usa E A D G. Esta pagina te ayuda a reconocer las notas, comprobar cada cuerda y abrir el afinador correcto en un clic."
    }
  },
  ru: {
    "drop-c-sharp-tuning": {
      intro:
        "Drop C sharp lowers the guitar for a heavier register while keeping fast riff shapes practical. Use this page to check the exact notes before opening the tuner."
    }
  }
};

function searchConsolePriorityGuideOverrides(locale: Locale): Partial<Record<GuideSlug, GuideOverride>> {
  const copy = {
    ar: {
      twelve: ["كيفية ضبط جيتار 12 وتر", "اضبط جيتار 12 وتر زوجاً بعد زوج مع مرجع واضح للأوكتافات والطبقة الأساسية.", "هذه الصفحة تشرح طريقة ضبط جيتار 12 وتر خطوة بخطوة حتى تبقى الأزواج متناغمة ومتوازنة من دون إحساس غير ثابت في الشد."],
      eight: ["كيفية ضبط جيتار 8 أوتار", "اضبط جيتار 8 أوتار عبر المتصفح مع دعم للنغمات المنخفضة والضبط الحديث الممتد.", "استخدم هذا الدليل عندما تريد قراءة أوضح للوترين المنخفضين والحفاظ على دقة النغمات في الضبط الممتد."],
      cello: ["كيفية ضبط التشيلو", "اضبط التشيلو أونلاين على C G D A مع خطوات بسيطة تساعدك على قراءة أكثر ثباتاً.", "هذا الدليل مناسب للمبتدئين الذين يريدون ضبط التشيلو بسرعة ثم التأكد من توازن كل وتر قبل التدريب أو الدرس."],
      dropCSharp: ["دليل ضبط Drop C#", "تعرف على نغمات Drop C# ومتى يستخدم هذا الضبط للجيتار الثقيل والريفات الحديثة.", "ضبط Drop C# يخفض المجال مع الحفاظ على أشكال عملية للريفات السريعة. استخدم هذه الصفحة لفحص النغمات ثم افتح الموالف."],
      subdiv: ["دليل تقسيمات الميترونوم", "تدرب على الثنائيات والثلاثيات والرباعيات داخل النبضة لتحسين الإحساس الإيقاعي.", "إذا كان العد مع الميترونوم يبدو جامداً، فالتقسيمات تساعدك على سماع المسافات داخل كل نبضة بدقة أكبر."]
    },
    de: {
      twelve: ["12-saitige Gitarre stimmen", "Stimme eine 12-saitige Gitarre online mit klaren Referenznoten fuer Grund- und Oktavpaare.", "Diese Seite zeigt dir, wie du jede Saitenpaarung sauber abstimmst, damit Chorus und Schimmer kontrolliert bleiben."],
      eight: ["8-saitige Gitarre stimmen", "Stimme eine 8-Saiter-Gitarre online mit Hilfe fuer tiefe Saiten und moderne Extended-Range-Setups.", "Nutze diesen Guide, wenn du die tiefen Saiten stabil lesen und eine saubere Extended-Range-Stimmung aufbauen willst."],
      cello: ["Cello stimmen", "Stimme Cello online auf C G D A mit Browser-Mikrofon und einfachen Schritten fuer den Alltag.", "Der Guide hilft dir, jede Cellosaite einzeln zu kontrollieren und am Ende den Gesamtklang noch einmal sauber zu pruefen."],
      dropCSharp: ["Drop C# Tuning Guide", "Lerne die exakten Noten von Drop C# und wann diese Gitarrenstimmung fuer harte Riffs sinnvoll ist.", "Drop C# ist beliebt fuer moderne, tiefere Gitarrenparts. Hier findest du die Saiten, Hinweise und den direkten Weg zum Tuner."],
      subdiv: ["Metronom-Unterteilungen Guide", "Arbeite Duolen, Triolen und Vierergruppen systematisch mit einem Online-Metronom.", "Wenn sich der Klick zu grob anfuehlt, helfen Unterteilungen dabei, den inneren Puls und das Timing genauer zu entwickeln."]
    },
    en: {
      twelve: ["How to tune a 12 string guitar", "Tune a 12 string guitar online with clear reference notes for standard strings and octave pairs.", "This guide shows you how to balance each course so the shimmer of a 12 string stays rich, stable and easy to control."],
      eight: ["How to tune an 8 string guitar", "Tune an 8 string guitar online with better support for low strings and extended-range metal setups.", "Use this page when you need a clearer method for the lowest strings and want a steadier reading for modern 8 string tuning."],
      cello: ["How to tune a cello", "Tune cello strings to C G D A online with a simple microphone workflow for practice and lessons.", "This guide helps you check each cello string one at a time, then confirm the overall balance before you start playing."],
      dropCSharp: ["Drop C sharp tuning guide", "Learn the exact notes of Drop C# tuning and when guitarists use it for heavier modern riffs.", "Drop C sharp tuning lowers the register while keeping fast riff shapes practical. Check the notes here, then open the tuner."],
      subdiv: ["Metronome subdivisions guide", "Practice duplets, triplets and quadruplets with an online metronome to improve internal timing.", "If the main click feels too broad, subdivisions make it easier to hear the rhythm inside every beat and clean up your timing."]
    },
    es: {
      twelve: ["Cómo afinar guitarra de 12 cuerdas", "Afina guitarra de 12 cuerdas online con notas de referencia claras para cuerdas simples y pares en octava.", "Esta guía te ayuda a equilibrar cada par para mantener el brillo típico de la 12 cuerdas sin perder estabilidad."],
      eight: ["Cómo afinar guitarra de 8 cuerdas", "Afina guitarra de 8 cuerdas online con mejor apoyo para cuerdas graves y afinaciones modernas extendidas.", "Usa esta página si quieres una lectura más firme en las cuerdas bajas y un método claro para afinaciones de rango extendido."],
      cello: ["Cómo afinar violonchelo", "Afina violonchelo online en C G D A con micrófono del navegador y pasos fáciles para estudio diario.", "La guía te ayuda a revisar cada cuerda del cello por separado y luego confirmar el equilibrio general antes de tocar."],
      dropCSharp: ["Guía de afinación Drop C#", "Aprende las notas exactas de Drop C# y cuándo se usa esta afinación de guitarra para riffs más pesados.", "Drop C# baja el registro y mantiene formas prácticas para riffs rápidos. Aquí puedes revisar las notas y abrir el afinador."],
      subdiv: ["Guía de subdivisiones del metrónomo", "Practica duinas, tresillos y cuatrillos con un metrónomo online para mejorar el pulso interno.", "Si el click principal te parece demasiado amplio, las subdivisiones te ayudan a escuchar mejor el ritmo dentro de cada pulso."]
    },
    fr: {
      twelve: ["Comment accorder une guitare 12 cordes", "Accordez une guitare 12 cordes en ligne avec des notes de référence claires pour les paires et les octaves.", "Cette page vous aide à équilibrer chaque chœur pour garder la brillance d'une 12 cordes sans sensation instable."],
      eight: ["Comment accorder une guitare 8 cordes", "Accordez une guitare 8 cordes en ligne avec une meilleure aide pour les cordes graves et les accordages étendus.", "Utilisez ce guide si vous voulez une lecture plus stable sur les graves et une méthode claire pour les réglages modernes."],
      cello: ["Comment accorder un violoncelle", "Accordez un violoncelle en ligne en C G D A avec le micro du navigateur et des étapes simples.", "Le guide vous aide à contrôler chaque corde du violoncelle séparément puis à vérifier l'équilibre général avant de jouer."],
      dropCSharp: ["Guide de l'accordage Drop C#", "Découvrez les notes exactes du Drop C# et les contextes où cet accordage guitare est le plus utile.", "Le Drop C# donne un registre plus grave tout en gardant des formes rapides pour les riffs. Vérifiez les notes ici avant d'ouvrir l'accordeur."],
      subdiv: ["Guide des subdivisions du métronome", "Travaillez duos, triolets et groupes de quatre avec un métronome en ligne pour affiner le tempo.", "Si le clic principal semble trop large, les subdivisions vous aident à mieux sentir le rythme entre chaque battement."]
    },
    it: {
      twelve: ["Come accordare la chitarra 12 corde", "Accorda la chitarra 12 corde online con note di riferimento chiare per cori standard e coppie in ottava.", "Questa guida ti aiuta a bilanciare ogni coppia di corde per mantenere il classico shimmer della 12 corde senza perdere stabilità."],
      eight: ["Come accordare la chitarra 8 corde", "Accorda la chitarra 8 corde online con un supporto migliore per le corde più gravi e le accordature moderne estese.", "Usa questa pagina se vuoi una lettura più stabile sulle corde basse e un metodo chiaro per l'accordatura di una 8 corde."],
      cello: ["Come accordare il violoncello", "Accorda il violoncello online in Do Sol Re La con microfono del browser e passaggi semplici da seguire.", "La guida ti aiuta a controllare una corda alla volta e poi a verificare l'equilibrio generale del violoncello prima di studiare."],
      dropCSharp: ["Guida accordatura Drop C#", "Scopri le note esatte della Drop C# e quando usarla per riff più pesanti e sonorità moderne.", "La Drop C# abbassa il registro mantenendo forme pratiche per riff veloci. Qui puoi controllare le note e aprire subito l'accordatore."],
      subdiv: ["Guida alle suddivisioni del metronomo", "Studia duine, terzine e quartine con un metronomo online per migliorare il tempo interno.", "Se il click principale ti sembra troppo largo, le suddivisioni ti aiutano a sentire meglio il ritmo dentro ogni battito."]
    },
    ja: {
      twelve: ["12弦ギターのチューニング方法", "12弦ギターの各コースとオクターブペアをオンラインで確認しながら調弦できます。", "このガイドでは、12弦ギター特有のきらびやかな響きを保ちながら各ペアを安定して合わせる方法を説明します。"],
      eight: ["8弦ギターのチューニング方法", "低音弦や拡張レンジ向けセットアップに対応した形で8弦ギターをオンライン調弦します。", "最低音弦の読み取りを安定させたい時や、モダンな8弦チューニングを整えたい時に使えるガイドです。"],
      cello: ["チェロのチューニング方法", "チェロを C G D A にオンラインで合わせるためのシンプルな手順をまとめています。", "このガイドではチェロの各弦を順番に確認し、最後に全体のバランスを聞き直す流れを紹介します。"],
      dropCSharp: ["Drop C# チューニングガイド", "Drop C# の正確な音名と、よりヘヴィなギターリフで使われる理由を解説します。", "Drop C# は音域を下げつつ高速リフの形を保ちやすい調弦です。ここで音を確認してからチューナーを開けます。"],
      subdiv: ["メトロノーム細分化ガイド", "2連・3連・4連をオンラインメトロノームで練習し、内部の拍感を強化します。", "メインのクリックだけでは粗く感じる時、細分化を使うと各拍の中のリズムをより正確に感じられます。"]
    },
    ko: {
      twelve: ["12현 기타 튜닝 방법", "12현 기타의 기본현과 옥타브 페어를 온라인에서 확인하며 조율하는 방법입니다.", "이 가이드는 12현 특유의 화사한 울림을 살리면서 각 코스를 안정적으로 맞추는 데 도움을 줍니다."],
      eight: ["8현 기타 튜닝 방법", "저음현과 확장 레인지 세팅에 맞춰 8현 기타를 온라인에서 조율하는 방법입니다.", "가장 낮은 현의 판독을 더 안정적으로 보고 싶거나 모던한 8현 세팅을 정리하고 싶을 때 유용합니다."],
      cello: ["첼로 튜닝 방법", "브라우저 마이크를 이용해 첼로를 C G D A 로 맞추는 간단한 단계별 가이드입니다.", "각 첼로 현을 하나씩 확인한 뒤 전체 밸런스를 다시 들어 보는 흐름으로 구성되어 있습니다."],
      dropCSharp: ["Drop C# 튜닝 가이드", "Drop C#의 정확한 음과 더 무거운 기타 리프에 자주 쓰이는 이유를 정리했습니다.", "Drop C#은 음역을 낮추면서도 빠른 리프 운지를 유지하기 쉬운 세팅입니다. 여기서 음을 확인하고 바로 튜너로 이동할 수 있습니다."],
      subdiv: ["메트로놈 세분화 가이드", "2연음, 3연음, 4연음을 온라인 메트로놈으로 연습해 내부 박감을 강화합니다.", "메인 클릭만으로는 거칠게 느껴질 때 세분화를 쓰면 각 박 안의 리듬을 더 정확하게 들을 수 있습니다."]
    },
    pt: {
      twelve: ["Como afinar guitarra de 12 cordas", "Afine guitarra de 12 cordas online com notas de referência claras para pares e oitavas.", "Este guia ajuda a equilibrar cada curso para manter o brilho típico da 12 cordas sem deixar a afinação instável."],
      eight: ["Como afinar guitarra de 8 cordas", "Afine guitarra de 8 cordas online com melhor apoio para cordas graves e afinações estendidas modernas.", "Use esta página quando quiser uma leitura mais estável nas cordas baixas e um método claro para setups de 8 cordas."],
      cello: ["Como afinar violoncelo", "Afine violoncelo online em C G D A com microfone do navegador e passos simples.", "O guia ajuda a conferir cada corda do cello separadamente e depois revisar o equilíbrio geral antes do estudo."],
      dropCSharp: ["Guia de afinação Drop C#", "Veja as notas exatas da Drop C# e quando essa afinação de guitarra faz mais sentido para riffs pesados.", "Drop C# abaixa o registro sem perder formas práticas para riffs rápidos. Aqui você revisa as notas e abre o afinador."],
      subdiv: ["Guia de subdivisões do metrônomo", "Pratique duínas, tercinas e quartinas com um metrônomo online para melhorar o pulso interno.", "Se o clique principal parecer amplo demais, as subdivisões ajudam a sentir melhor o ritmo dentro de cada batida."]
    },
    ru: {
      twelve: ["Как настроить 12-струнную гитару", "Настройте 12-струнную гитару онлайн с понятными опорными нотами для основных и октавных пар.", "Эта страница помогает выровнять каждую пару струн так, чтобы сохранить характерное сияние 12-струнной гитары без нестабильности."],
      eight: ["Как настроить 8-струнную гитару", "Настройте 8-струнную гитару онлайн с лучшей поддержкой для низких струн и расширенных современных строев.", "Используйте это руководство, если хотите более стабильное считывание низких струн и понятный способ настройки 8-струнной гитары."],
      cello: ["Как настроить виолончель", "Настройте виолончель онлайн в C G D A с помощью микрофона браузера и простых шагов.", "Руководство помогает проверить каждую струну виолончели по отдельности и затем услышать общий баланс перед занятием."],
      dropCSharp: ["Гид по строю Drop C#", "Узнайте точные ноты строя Drop C# и когда он особенно полезен для более тяжёлых гитарных риффов.", "Drop C# понижает регистр, но сохраняет удобные формы для быстрых риффов. Здесь можно проверить ноты и сразу открыть тюнер."],
      subdiv: ["Гид по делениям метронома", "Практикуйте дуоли, триоли и группы по четыре с онлайн-метрономом, чтобы укрепить внутренний пульс.", "Если одного основного клика мало, деления помогают точнее услышать ритм внутри каждой доли."]
    },
    zh: {
      twelve: ["如何给12弦吉他调音", "使用清晰的参考音在线调整12弦吉他的标准弦组和八度配对。", "这份指南会帮助你把每一组弦调得更平衡，让12弦吉他的明亮合唱感稳定又清晰。"],
      eight: ["如何给8弦吉他调音", "在线为8弦吉他调音，更好地处理低音弦和现代扩展音域设置。", "如果你想让最低音弦的读数更稳定，或者需要更清楚的8弦调音流程，这页会很有帮助。"],
      cello: ["如何给大提琴调音", "用浏览器麦克风把大提琴调到 C G D A，并按简单步骤逐根检查。", "这份指南帮助你逐根确认大提琴的音高，然后再整体听一遍平衡感后开始练习。"],
      dropCSharp: ["Drop C# 调弦指南", "了解 Drop C# 的准确音名，以及它为何常用于更厚重的现代吉他 riff。", "Drop C# 会降低音域，同时保留适合快速 riff 的实用指型。你可以先在这里确认音名，再打开调音器。"],
      subdiv: ["节拍器细分练习指南", "用在线节拍器练习二连音、三连音和四连音，提升内部节奏感。", "如果只有主点击还不够细，细分练习会帮助你更准确地听见每一拍内部的节奏。"]
    }
  }[getContentLocale(locale)];

  return {
    "how-to-tune-12-string-guitar": {
      title: copy.twelve[0],
      description: copy.twelve[1],
      intro: copy.twelve[2],
      relatedGuides: ["standard-guitar-tuning", "how-to-tune-guitar", "guitar-tuner-with-microphone"]
    },
    "how-to-tune-8-string-guitar": {
      title: copy.eight[0],
      description: copy.eight[1],
      intro: copy.eight[2],
      relatedGuides: ["drop-e-8-string-tuning", "how-to-tune-guitar", "chromatic-tuner-guide"]
    },
    "how-to-tune-cello": {
      title: copy.cello[0],
      description: copy.cello[1],
      intro: copy.cello[2],
      relatedGuides: ["how-to-tune-violin", "chromatic-tuner-guide"]
    },
    "drop-c-sharp-tuning": {
      title: copy.dropCSharp[0],
      description: copy.dropCSharp[1],
      intro: copy.dropCSharp[2],
      relatedGuides: ["drop-c-tuning", "d-standard-tuning", "how-to-tune-guitar"]
    },
    "metronome-subdivisions": {
      title: copy.subdiv[0],
      description: copy.subdiv[1],
      intro: copy.subdiv[2],
      relatedGuides: ["how-to-use-metronome", "metronome-for-guitar", "how-to-find-bpm"]
    }
  };
}

function guideCtrRecoveryOverrides(locale: Locale): Partial<Record<GuideSlug, GuideOverride>> {
  const copy = {
    ar: {
      bass: ["كيفية ضبط الباس", "اضبط الباس أونلاين على E A D G مع دعم واضح لإعدادات 4 و5 أوتار.", "هذه الصفحة تساعدك على ضبط كل وتر في الباس بسرعة، ثم التحقق من توازن الآلة قبل التدريب أو البروفة."],
      violin: ["كيفية ضبط الكمان", "اضبط الكمان أونلاين على G D A E مع خطوات بسيطة مناسبة للمبتدئين.", "استخدم هذا الدليل عندما تريد قراءة أوضح من الميكروفون وضبطًا يوميًا سريعًا للكمان."],
      bassStd: ["دليل الضبط القياسي للباس", "تعرف على نغمات الباس القياسية E A D G ومتى تستخدم هذا الضبط الأكثر شيوعًا.", "الضبط القياسي للباس هو نقطة البداية لمعظم العازفين لأنه متوازن وسهل الدمج مع الدروس والتمارين المعتادة."],
      tunings: ["أشهر ضبطات الجيتار", "راجع Standard و Drop D و Eb Standard و Open D و Open G في صفحة واحدة.", "هذا الدليل يجمع أشهر ضبطات الجيتار لمساعدتك على اختيار الإحساس المناسب للصوت أو الأسلوب قبل فتح الموالف."],
      dropD: ["دليل ضبط Drop D", "اضبط الجيتار على D A D G B E للحصول على وتر منخفض أقوى وريفات أسهل.", "Drop D من أكثر الضبطات انتشارًا لأنه يعطيك صوتًا أثقل مع الحفاظ على أغلب أشكال العزف المألوفة."],
      dropC: ["دليل ضبط Drop C", "تعرف على نغمات Drop C ومتى يستخدم هذا الضبط للروك والميتال الحديث.", "Drop C يجمع بين طبقة منخفضة قوية وسهولة استخدام أشكال قريبة من الضبط القياسي على الأوتار العليا."],
      openD: ["دليل ضبط Open D", "استخدم Open D للحصول على أوتار مفتوحة رنانة وأشكال سهلة للسلايد والفينغرستايل.", "Open D مناسب عندما تريد كوردًا مفتوحًا غنيًا وصوتًا واسعًا للأغاني الهادئة أو العزف بالسلايد."],
      eb: ["دليل ضبط Eb Standard", "اخفض كل أوتار الجيتار نصف درجة إلى Eb Ab Db Gb Bb Eb للحصول على شد أخف وصوت أدفأ.", "Eb Standard شائع عندما تريد راحة أكبر في الغناء أو إحساسًا أخف تحت الأصابع من دون تغيير كبير في الأشكال."]
    },
    de: {
      bass: ["Bass online stimmen", "Stimme Bass online auf E A D G mit klarer Hilfe fuer 4- und 5-Saiter-Setups.", "Dieser Guide hilft dir, jede Basssaite schnell zu pruefen und danach den Gesamtklang vor Probe oder Ueben sauber abzugleichen."],
      violin: ["Violine online stimmen", "Stimme Violine online auf G D A E mit einfachen Schritten fuer Alltag und Unterricht.", "Nutze diese Seite, wenn du eine stabilere Mikrofonanzeige und einen einfachen Ablauf fuer das taegliche Stimmen suchst."],
      bassStd: ["Standard-Bass-Stimmung Guide", "Sieh dir die Standard-Bass-Stimmung E A D G an und erfahre, warum sie fuer die meisten Songs die beste Basis ist.", "Die Standard-Stimmung ist fuer die meisten Bassisten der Ausgangspunkt, weil sie ausgewogen ist und mit den meisten Uebungen und Songs sofort funktioniert."],
      tunings: ["Haeufige Gitarrenstimmungen", "Vergleiche Standard, Drop D, Eb Standard, Open D und Open G in einer kompakten Uebersicht.", "Dieser Guide sammelt beliebte Gitarrenstimmungen, damit du vor dem Oeffnen des Tuners schneller die passende Klangfarbe findest."],
      dropD: ["Drop D Tuning Guide", "Stimme Gitarre auf D A D G B E fuer tiefere Riffs und einfachere Powerchords.", "Drop D ist eine der beliebtesten Alternativstimmungen, weil sie sofort mehr Tiefe gibt und trotzdem nah an Standard bleibt."],
      dropC: ["Drop C Tuning Guide", "Lerne die Noten von Drop C und wann diese Stimmung fuer modernen Rock und Metal sinnvoll ist.", "Drop C kombiniert eine tiefe Basssaite mit Griffbildern, die sich auf den oberen Saiten noch vertraut anfuehlen."],
      openD: ["Open D Tuning Guide", "Nutze Open D fuer offene Resonanz, Slide-Gitarre und weite Akkordklangfarben.", "Open D passt gut zu Fingerstyle, Slide und Songs, bei denen offene Saiten stark mitschwingen sollen."],
      eb: ["Eb Standard Tuning Guide", "Senke alle Gitarrensaiten um einen Halbton auf Eb Ab Db Gb Bb Eb fuer weichere Spannung und tieferen Klang.", "Eb Standard ist beliebt, wenn du etwas tiefer singen willst oder sich die Gitarre entspannter anfuehlen soll, ohne die Griffbilder neu zu lernen."]
    },
    en: {
      bass: ["How to tune a bass online", "Tune bass online to E A D G with clearer help for 4 string and 5 string setups.", "This guide helps you check each bass string quickly, then confirm the overall balance before practice, rehearsal or recording."],
      violin: ["How to tune a violin online", "Tune violin online to G D A E with simple steps that work well for beginners and daily warmups.", "Use this guide when you want a steadier microphone reading and a straightforward routine for everyday violin tuning."],
      bassStd: ["Standard bass tuning guide", "See the standard bass tuning E A D G and learn why it is still the default setup for most bass players.", "Standard bass tuning is the safest starting point for lessons, band practice and most song material because it stays balanced and familiar."],
      tunings: ["Common guitar tunings", "Compare Standard, Drop D, Eb Standard, Open D and Open G in one practical guitar tuning guide.", "This page brings together the guitar tunings players search for most often, so you can choose a sound quickly before opening the tuner."],
      dropD: ["Drop D tuning guide", "Tune guitar to D A D G B E for heavier low riffs and faster one-finger power chords.", "Drop D remains one of the most common alternate tunings because it adds weight to the low string without making the rest of the neck feel unfamiliar."],
      dropC: ["Drop C tuning guide", "Learn the exact Drop C notes and when players use this tuning for modern rock and metal.", "Drop C gives you a lower register while keeping familiar upper-string shapes, which is why it works so well for heavy riffs and modern rhythm parts."],
      openD: ["Open D tuning guide", "Use Open D tuning for resonant open strings, slide guitar and wider acoustic chord voicings.", "Open D is useful when you want a full open-chord sound, easier slide shapes and a more spacious acoustic feel."],
      eb: ["Eb Standard tuning guide", "Lower every guitar string by a semitone to Eb Ab Db Gb Bb Eb for softer tension and a darker voice.", "Eb Standard is common when players want a slightly lower singing range or a looser feel without relearning standard chord shapes."]
    },
    es: {
      bass: ["Cómo afinar bajo online", "Afina bajo online en E A D G con ayuda más clara para configuraciones de 4 y 5 cuerdas.", "Esta guía te ayuda a revisar cada cuerda del bajo con rapidez y luego confirmar el equilibrio general antes de ensayar o estudiar."],
      violin: ["Cómo afinar violín online", "Afina violín online en G D A E con pasos sencillos pensados para principiantes y estudio diario.", "Usa esta guía si quieres una lectura más estable del micrófono y un método simple para afinar violín todos los días."],
      bassStd: ["Guía de afinación estándar de bajo", "Consulta la afinación estándar E A D G y por qué sigue siendo la base más usada por los bajistas.", "La afinación estándar del bajo es el punto de partida más seguro para clases, ensayo y la mayoría del repertorio habitual."],
      tunings: ["Afinaciones comunes de guitarra", "Compara Standard, Drop D, Eb Standard, Open D y Open G en una sola guía práctica.", "Aquí encuentras las afinaciones de guitarra más buscadas para elegir rápidamente la sonoridad adecuada antes de abrir el afinador."],
      dropD: ["Guía de afinación Drop D", "Afina la guitarra en D A D G B E para riffs graves y power chords más fáciles.", "Drop D es una de las afinaciones alternativas más populares porque añade profundidad sin alejarte demasiado de las posiciones habituales."],
      dropC: ["Guía de afinación Drop C", "Aprende las notas exactas de Drop C y cuándo se usa en rock moderno y metal.", "Drop C baja el registro de la guitarra pero mantiene posiciones conocidas en las cuerdas agudas, por eso funciona tan bien para riffs pesados."],
      openD: ["Guía de afinación Open D", "Usa Open D para cuerdas abiertas resonantes, slide y acordes acústicos más amplios.", "Open D va muy bien para fingerstyle, slide y canciones donde quieres un acorde abierto grande y lleno."],
      eb: ["Guía de afinación Eb Standard", "Baja todas las cuerdas medio tono a Eb Ab Db Gb Bb Eb para una tensión más suave y un color más grave.", "Eb Standard es habitual cuando buscas una voz un poco más baja o una sensación más blanda sin cambiar por completo las formas de acordes."]
    },
    fr: {
      bass: ["Comment accorder une basse en ligne", "Accordez une basse en ligne en E A D G avec une aide plus claire pour les basses 4 et 5 cordes.", "Ce guide vous aide à vérifier chaque corde de basse rapidement puis à contrôler l'équilibre général avant le travail ou la répétition."],
      violin: ["Comment accorder un violon en ligne", "Accordez un violon en ligne en G D A E avec des étapes simples adaptées aux débutants et au travail quotidien.", "Utilisez cette page si vous voulez une lecture micro plus stable et une routine claire pour accorder le violon chaque jour."],
      bassStd: ["Guide de l'accordage standard de basse", "Retrouvez l'accordage standard E A D G et pourquoi il reste la base la plus utilisée chez les bassistes.", "L'accordage standard de basse est la référence la plus sûre pour les cours, les répétitions et la majorité des morceaux courants."],
      tunings: ["Accordages courants de guitare", "Comparez Standard, Drop D, Eb Standard, Open D et Open G dans un seul guide pratique.", "Cette page réunit les accordages guitare les plus recherchés pour vous aider à choisir rapidement la bonne couleur sonore avant d'ouvrir l'accordeur."],
      dropD: ["Guide de l'accordage Drop D", "Accordez la guitare en D A D G B E pour obtenir un grave plus puissant et des power chords plus simples.", "Le Drop D est l'un des accordages alternatifs les plus populaires parce qu'il ajoute de la profondeur sans rendre le manche étrange."],
      dropC: ["Guide de l'accordage Drop C", "Apprenez les notes exactes du Drop C et quand l'utiliser pour le rock moderne et le metal.", "Le Drop C abaisse le registre tout en gardant des formes familières sur les cordes aiguës, ce qui le rend pratique pour les riffs lourds."],
      openD: ["Guide de l'accordage Open D", "Utilisez l'Open D pour les cordes ouvertes résonantes, le slide et des accords acoustiques plus larges.", "L'Open D convient bien au fingerstyle, au slide et aux morceaux où l'on cherche un grand accord ouvert et chantant."],
      eb: ["Guide de l'accordage Eb Standard", "Baissez chaque corde d'un demi-ton vers Eb Ab Db Gb Bb Eb pour une tension plus souple et un timbre plus sombre.", "Eb Standard est utile quand on veut chanter un peu plus bas ou obtenir une guitare plus souple sans changer complètement ses repères."]
    },
    it: {
      bass: ["Come accordare il basso online", "Accorda il basso online in Mi La Re Sol con un supporto più chiaro per setup a 4 e 5 corde.", "Questa guida ti aiuta a controllare ogni corda del basso rapidamente e poi a verificare l'equilibrio generale prima di studiare o provare."],
      violin: ["Come accordare il violino online", "Accorda il violino online in Sol Re La Mi con passaggi semplici adatti a principianti e studio quotidiano.", "Usa questa guida se vuoi una lettura più stabile del microfono e una routine chiara per l'accordatura quotidiana del violino."],
      bassStd: ["Guida all'accordatura standard del basso", "Scopri l'accordatura standard del basso E A D G e perché resta la base più usata dai bassisti.", "L'accordatura standard del basso è il punto di partenza più sicuro per lezioni, sala prove e la maggior parte del repertorio comune."],
      tunings: ["Accordature comuni per chitarra", "Confronta Standard, Drop D, Eb Standard, Open D e Open G in un'unica guida pratica.", "Questa pagina raccoglie le accordature per chitarra più cercate, così puoi scegliere più in fretta il carattere sonoro giusto prima di aprire l'accordatore."],
      dropD: ["Guida accordatura Drop D", "Accorda la chitarra in Re La Re Sol Si Mi per ottenere riff più gravi e power chord più rapidi.", "La Drop D è una delle accordature alternative più usate perché aggiunge profondità alla corda bassa senza rendere estranee le altre forme."],
      dropC: ["Guida accordatura Drop C", "Impara le note esatte della Drop C e quando usarla per rock moderno e metal.", "La Drop C abbassa il registro della chitarra ma lascia forme ancora familiari sulle corde alte, per questo funziona bene nei riff pesanti."],
      openD: ["Guida accordatura Open D", "Usa la Open D per corde aperte più risonanti, slide e voicing acustici più ampi.", "La Open D è utile quando vuoi un accordo aperto più grande, un suono più largo e forme comode per slide e fingerstyle."],
      eb: ["Guida accordatura Eb Standard", "Abbassa tutte le corde di un semitono su Eb Ab Db Gb Bb Eb per meno tensione e un timbro più scuro.", "La Eb Standard è comune quando vuoi cantare leggermente più basso o ottenere una sensazione più morbida sotto le dita senza cambiare diteggiature."]
    },
    ja: {
      bass: ["ベースをオンラインでチューニングする方法", "4弦・5弦ベースに対応しながら E A D G を基準にオンラインでベースを調弦するためのガイドです。", "このガイドでは各ベース弦をすばやく確認し、最後に全体のバランスを整えてから練習やリハーサルに入る流れを紹介します。"],
      violin: ["バイオリンをオンラインでチューニングする方法", "G D A E を基準に、初心者でも使いやすい手順でオンライン調弦できます。", "毎日のバイオリン調弦をもっと安定して行いたい時に使える、シンプルで分かりやすいガイドです。"],
      bassStd: ["標準ベースチューニングガイド", "標準ベースチューニング E A D G と、それが今でも多くのベーシストの基本である理由をまとめています。", "標準ベースチューニングは、レッスン・バンド練習・一般的な曲に最も合わせやすい出発点です。"],
      tunings: ["よく使われるギターチューニング", "Standard、Drop D、Eb Standard、Open D、Open G をひとつの実用ガイドで比較できます。", "よく検索されるギターチューニングをまとめているので、チューナーを開く前に欲しい音の方向性を選びやすくなります。"],
      dropD: ["Drop D チューニングガイド", "ギターを D A D G B E にして、低音リフとワンフィンガーのパワーコードを扱いやすくします。", "Drop D は低音の迫力を加えながら、他の弦では標準に近い感覚を保てるため、とても人気のある変則チューニングです。"],
      dropC: ["Drop C チューニングガイド", "Drop C の正確な音名と、ロックやメタルでよく使われる理由を確認できます。", "Drop C は低音域を広げつつ高音弦側の運指を大きく変えずに済むため、ヘヴィなリフに向いています。"],
      openD: ["Open D チューニングガイド", "Open D は開放弦の響き、スライド、広がりのあるアコースティックコードに向いています。", "開放感のある大きなコード感や、スライド向けの弾きやすさを求める時に Open D はとても便利です。"],
      eb: ["Eb Standard チューニングガイド", "すべての弦を半音下げて Eb Ab Db Gb Bb Eb にし、やわらかいテンションと少し低めの響きを得ます。", "Eb Standard は、少し低い歌いやすいレンジや、標準より少し緩い弾き心地を求める時によく使われます。"]
    },
    ko: {
      bass: ["온라인으로 베이스 튜닝하는 방법", "4현과 5현 세팅을 고려하면서 E A D G 기준으로 베이스를 온라인 조율하는 가이드입니다.", "이 가이드는 각 베이스 줄을 빠르게 확인한 뒤 전체 밸런스를 다시 점검하고 연습이나 합주에 들어가도록 도와줍니다."],
      violin: ["온라인으로 바이올린 튜닝하는 방법", "G D A E 기준으로 초보자도 따라가기 쉬운 단계로 바이올린을 온라인 조율할 수 있습니다.", "바이올린을 매일 더 안정적으로 튜닝하고 싶을 때 쓰기 좋은 간단하고 명확한 가이드입니다."],
      bassStd: ["스탠다드 베이스 튜닝 가이드", "스탠다드 베이스 튜닝 E A D G 와 이것이 여전히 가장 널리 쓰이는 기본 세팅인 이유를 정리했습니다.", "스탠다드 베이스 튜닝은 레슨, 밴드 연습, 일반적인 곡 연주에 가장 무난하게 시작할 수 있는 기준점입니다."],
      tunings: ["자주 쓰는 기타 튜닝", "Standard, Drop D, Eb Standard, Open D, Open G 를 한 페이지에서 비교하는 실용 가이드입니다.", "자주 검색되는 기타 튜닝을 모아 두었기 때문에 튜너를 열기 전에 원하는 사운드 방향을 빠르게 고를 수 있습니다."],
      dropD: ["Drop D 튜닝 가이드", "기타를 D A D G B E 로 맞춰 더 무거운 저음 리프와 쉬운 파워코드를 만들 수 있습니다.", "Drop D 는 저음을 강화하면서도 다른 줄의 감각은 표준 튜닝과 가깝게 유지할 수 있어서 매우 널리 쓰입니다."],
      dropC: ["Drop C 튜닝 가이드", "Drop C 의 정확한 음과 모던 록, 메탈에서 자주 쓰이는 이유를 확인하세요.", "Drop C 는 음역을 낮추면서도 높은 줄 쪽 운지는 비교적 익숙하게 유지할 수 있어 헤비한 리프에 잘 맞습니다."],
      openD: ["Open D 튜닝 가이드", "Open D 는 개방현 울림, 슬라이드 연주, 더 넓은 어쿠스틱 코드 보이싱에 적합합니다.", "더 넓고 울림 있는 오픈 코드 사운드나 슬라이드 연주를 원할 때 Open D 는 매우 유용한 선택입니다."],
      eb: ["Eb Standard 튜닝 가이드", "모든 줄을 반음씩 내려 Eb Ab Db Gb Bb Eb 로 맞춰 더 부드러운 장력과 약간 낮은 음색을 얻습니다.", "Eb Standard 는 조금 더 낮은 보컬 범위가 필요하거나 손가락 아래 느낌을 조금 더 부드럽게 만들고 싶을 때 자주 사용됩니다."]
    },
    pt: {
      bass: ["Como afinar baixo online", "Afine baixo online em E A D G com ajuda mais clara para configurações de 4 e 5 cordas.", "Este guia ajuda você a conferir cada corda do baixo rapidamente e depois revisar o equilíbrio geral antes de estudar ou ensaiar."],
      violin: ["Como afinar violino online", "Afine violino online em G D A E com passos simples pensados para iniciantes e estudo diário.", "Use este guia quando quiser uma leitura mais estável do microfone e uma rotina clara para afinar violino todos os dias."],
      bassStd: ["Guia da afinação padrão de baixo", "Veja a afinação padrão do baixo E A D G e por que ela continua sendo a base mais usada pelos baixistas.", "A afinação padrão do baixo é o ponto de partida mais seguro para aulas, ensaios e a maior parte do repertório comum."],
      tunings: ["Afinações comuns de guitarra", "Compare Standard, Drop D, Eb Standard, Open D e Open G em um único guia prático.", "Esta página reúne as afinações de guitarra mais procuradas para ajudar você a escolher mais rápido o timbre certo antes de abrir o afinador."],
      dropD: ["Guia de afinação Drop D", "Afine a guitarra em D A D G B E para riffs graves e power chords mais fáceis.", "Drop D é uma das afinações alternativas mais populares porque adiciona peso à corda grave sem deixar o braço estranho."],
      dropC: ["Guia de afinação Drop C", "Aprenda as notas exatas da Drop C e quando ela faz sentido para rock moderno e metal.", "Drop C abaixa o registro da guitarra e ainda mantém formas familiares nas cordas agudas, o que a torna ótima para riffs pesados."],
      openD: ["Guia de afinação Open D", "Use Open D para cordas soltas ressonantes, slide e aberturas acústicas mais amplas.", "Open D funciona muito bem para fingerstyle, slide e músicas em que você quer um acorde aberto grande e cheio."],
      eb: ["Guia de afinação Eb Standard", "Baixe todas as cordas meio tom para Eb Ab Db Gb Bb Eb e obtenha menos tensão com um timbre mais escuro.", "Eb Standard é comum quando você quer cantar um pouco mais grave ou sentir a guitarra mais macia sem reaprender formas."]
    },
    ru: {
      bass: ["Как настроить бас онлайн", "Настройте бас онлайн на E A D G с более понятной помощью для 4- и 5-струнных конфигураций.", "Это руководство помогает быстро проверить каждую струну баса, а затем подтвердить общий баланс перед практикой, репетицией или записью."],
      violin: ["Как настроить скрипку онлайн", "Настройте скрипку онлайн на G D A E с простыми шагами, которые хорошо подходят для начинающих и ежедневной разминки.", "Используйте это руководство, когда нужно более стабильное считывание с микрофона и понятный порядок повседневной настройки скрипки."],
      bassStd: ["Руководство по стандартному строю баса", "Изучите стандартный строй баса E A D G и узнайте, почему он остаётся базовым для большинства басистов.", "Стандартный строй баса — самая надёжная отправная точка для уроков, репетиций и большинства песен, потому что он сбалансирован и привычен."],
      tunings: ["Распространённые гитарные строи", "Сравните Standard, Drop D, Eb Standard, Open D и Open G в одном практичном руководстве по строям гитары.", "Эта страница собирает гитарные строи, которые ищут чаще всего, чтобы вы могли быстро выбрать звучание перед открытием тюнера."],
      dropD: ["Руководство по строю Drop D", "Настройте гитару на D A D G B E для более тяжёлых низких риффов и быстрых пауэр-аккордов одним пальцем.", "Drop D остаётся одним из самых популярных альтернативных строёв, потому что добавляет вес нижней струне, не делая остальной гриф непривычным."],
      dropC: ["Руководство по строю Drop C", "Узнайте точные ноты Drop C и когда музыканты используют этот строй для современного рока и метала.", "Drop C даёт более низкий регистр, сохраняя привычные формы на верхних струнах, поэтому он отлично подходит для тяжёлых риффов и современных ритм-партий."],
      openD: ["Руководство по строю Open D", "Используйте строй Open D для звонких открытых струн, слайд-гитары и более широких акустических аккордов.", "Open D полезен, когда нужен насыщенный звук открытых аккордов, удобные формы для слайда и более просторное акустическое звучание."],
      eb: ["Руководство по строю Eb Standard", "Опустите все струны гитары на полтона до Eb Ab Db Gb Bb Eb для более мягкого натяжения и тёмного звучания.", "Eb Standard распространён, когда музыканты хотят чуть более низкий вокальный диапазон или более свободное ощущение без переучивания стандартных форм аккордов."]
    },
    zh: {
      bass: ["如何在线给贝斯调音", "用更清晰的步骤在线把贝斯调到 E A D G，并兼顾 4 弦与 5 弦配置。", "这份指南会帮助你快速检查每一根贝斯弦，然后在练习、排练或录音前再次确认整体平衡。"],
      violin: ["如何在线给小提琴调音", "以 G D A E 为基准，按简单步骤在线调好小提琴，适合初学者和日常练习。", "如果你想要更稳定的麦克风读数，并建立一套清晰的小提琴日常调音流程，这页会很有帮助。"],
      bassStd: ["标准贝斯调弦指南", "查看标准贝斯调弦 E A D G，并了解它为何仍然是多数贝斯手的默认基础。", "标准贝斯调弦是课程、乐队排练和大多数常见曲目的稳妥起点，因为它平衡、熟悉又通用。"],
      tunings: ["常见吉他调弦", "在一页中比较 Standard、Drop D、Eb Standard、Open D 和 Open G。", "这份指南整理了最常被搜索的吉他调弦方式，方便你在打开调音器之前先选好想要的声音方向。"],
      dropD: ["Drop D 调弦指南", "把吉他调成 D A D G B E，获得更厚实的低音 riff 和更容易的 power chord。", "Drop D 是最常见的替代调弦之一，因为它能增强低音力度，同时又不会让其他弦位变得陌生。"],
      dropC: ["Drop C 调弦指南", "了解 Drop C 的准确音名，以及它为何常用于现代摇滚和金属。", "Drop C 可以降低整体音域，同时保留高音弦侧较熟悉的按法，因此很适合厚重 riff 和现代节奏演奏。"],
      openD: ["Open D 调弦指南", "Open D 适合更有共鸣的空弦、slide 演奏以及更宽广的原声和弦。", "当你想获得更大的开放和弦感、更适合 slide 的指型和更宽阔的原声氛围时，Open D 很值得使用。"],
      eb: ["Eb Standard 调弦指南", "把所有吉他弦降半音到 Eb Ab Db Gb Bb Eb，得到更柔和的张力和更低沉的音色。", "Eb Standard 常用于想要稍微降低演唱音区，或想让手感更柔和、又不想重学标准按法的时候。"]
    }
  }[getContentLocale(locale)];

  return {
    "how-to-tune-bass": {
      title: copy.bass[0],
      description: copy.bass[1],
      intro: copy.bass[2],
      relatedGuides: ["standard-bass-tuning", "five-string-bass-tuning", "how-to-find-bpm"]
    },
    "how-to-tune-violin": {
      title: copy.violin[0],
      description: copy.violin[1],
      intro: copy.violin[2],
      relatedGuides: ["violin-standard-tuning", "chromatic-tuner-guide", "how-to-tune-cello"]
    },
    "standard-bass-tuning": {
      title: copy.bassStd[0],
      description: copy.bassStd[1],
      intro: copy.bassStd[2],
      relatedGuides: ["how-to-tune-bass", "five-string-bass-tuning", "chromatic-tuner-guide"]
    },
    "common-guitar-tunings": {
      title: copy.tunings[0],
      description: copy.tunings[1],
      intro: copy.tunings[2],
      relatedGuides: ["standard-guitar-tuning", "drop-d-tuning", "open-d-tuning", "open-g-tuning", "eb-standard-tuning"]
    },
    "drop-d-tuning": {
      title: copy.dropD[0],
      description: copy.dropD[1],
      intro: copy.dropD[2],
      relatedGuides: ["standard-guitar-tuning", "drop-c-tuning", "common-guitar-tunings"]
    },
    "drop-c-tuning": {
      title: copy.dropC[0],
      description: copy.dropC[1],
      intro: copy.dropC[2],
      relatedGuides: ["drop-d-tuning", "drop-c-sharp-tuning", "d-standard-tuning"]
    },
    "open-d-tuning": {
      title: copy.openD[0],
      description: copy.openD[1],
      intro: copy.openD[2],
      relatedGuides: ["open-g-tuning", "dadgad-tuning", "common-guitar-tunings"]
    },
    "eb-standard-tuning": {
      title: copy.eb[0],
      description: copy.eb[1],
      intro: copy.eb[2],
      relatedGuides: ["half-step-down-tuning", "d-standard-tuning", "common-guitar-tunings"]
    }
  };
}

function applyGuideOverride(base: GuideContent, locale: Locale, guide: GuideSlug): GuideContent {
  const priorityOverride = searchConsolePriorityGuideOverrides(locale)[guide];
  const ctrOverride = guideCtrRecoveryOverrides(locale)[guide];
  const manualOverride = guideContentOverrides[getContentLocale(locale)]?.[guide];
  const override = priorityOverride || ctrOverride || manualOverride ? { ...priorityOverride, ...ctrOverride, ...manualOverride } : null;
  return override ? { ...base, ...override } : base;
}

function extraUtilityGuides(locale: Locale): Record<ExtraUtilityGuideSlug, Omit<GuideContent, "targetPath">> {
  const copy = {
    ar: {
      chords: ["كيفية قراءة رموز الأوتار", "تعلم معنى C و Am و G7 والرموز الشائعة للأوتار.", "رموز الأوتار تختصر النغمة الأساسية ونوع الوتر. الحرف يحدد الجذر، و m يعني صغير، و 7 يضيف السابعة.", "قراءة الأوتار", "رموز أوتار الغيتار"],
      transpose: ["كيفية نقل الأوتار إلى مقام آخر", "انقل تقدمات الأوتار لأعلى أو لأسفل بنصف نغمة.", "النقل يغير المقام مع الحفاظ على العلاقات بين الأوتار. ارفع أو اخفض نصف النغمات حتى يناسب الصوت أو الآلة.", "نقل الأوتار", "تغيير مقام الأغنية"],
      tunings: ["أشهر ضبطات الغيتار", "دليل سريع لضبط Standard و Drop D و Eb Standard و Open G.", "يبدأ معظم العازفين بضبط E A D G B E، ثم ينتقلون إلى Drop D أو Eb Standard أو Open G حسب الأسلوب.", "ضبطات الغيتار", "Drop D و Open G"],
      subdiv: ["تقسيمات المترونوم", "تدرب على الثنائيات والثلاثيات والرباعيات داخل كل نبضة.", "تساعد التقسيمات على جعل الإيقاع أدق من النبضة الأساسية، خصوصا عند التمرين البطيء.", "تقسيمات إيقاعية", "ثلاثيات و رباعيات"]
    },
    de: {
      chords: ["Akkordsymbole lesen", "Lerne, was C, Am, G7 und gängige Akkordsymbole bedeuten.", "Akkordsymbole zeigen Grundton und Akkordtyp. Der Buchstabe ist der Grundton, m bedeutet Moll und 7 ergänzt die Septime.", "akkorde lesen", "gitarrenakkorde verstehen"],
      transpose: ["Akkorde in eine andere Tonart transponieren", "Verschiebe Akkordfolgen in Halbtonschritten nach oben oder unten.", "Transponieren ändert die Tonart, lässt aber die Abstände zwischen den Akkorden gleich.", "akkorde transponieren", "tonart ändern"],
      tunings: ["Häufige Gitarrenstimmungen", "Kurzer Überblick zu Standard, Drop D, Eb Standard und Open G.", "Die meisten Spieler starten mit E A D G B E und nutzen Drop D, Eb Standard oder Open G für andere Klangfarben.", "gitarrenstimmungen", "drop d open g"],
      subdiv: ["Metronom-Unterteilungen üben", "Übe Duolen, Triolen und Vierergruppen innerhalb eines Beats.", "Unterteilungen machen den Puls genauer und helfen besonders beim langsamen Üben.", "metronom unterteilungen", "triolen üben"]
    },
    en: {
      chords: ["How to read chord symbols", "Learn what C, Am, G7 and common chord names mean.", "Chord symbols compress the root note and chord quality. The letter is the root, m means minor and 7 adds the seventh.", "read chord symbols", "guitar chord names"],
      transpose: ["How to transpose chords", "Move chord progressions up or down by semitones.", "Transposing changes the key while keeping the relationships between chords intact.", "transpose chords", "change song key"],
      tunings: ["Common guitar tunings", "A quick guide to Standard, Drop D, Eb Standard, D Standard, Open D and Open G.", "Most players start with E A D G B E, then use alternate tunings for lower riffs, open chords or different vocal ranges.", "common guitar tunings", "drop d open g tuning"],
      subdiv: ["Metronome subdivisions", "Practice duplets, triplets and quadruplets inside the beat.", "Subdivisions make the pulse more precise and help you hear rhythm between main clicks.", "metronome subdivisions", "triplet practice"]
    },
    es: {
      chords: ["Cómo leer símbolos de acordes", "Aprende qué significan C, Am, G7 y otros acordes comunes.", "Los símbolos resumen la nota raíz y el tipo de acorde. La letra es la raíz, m indica menor y 7 añade la séptima.", "leer acordes", "nombres de acordes"],
      transpose: ["Cómo transportar acordes", "Mueve progresiones de acordes arriba o abajo por semitonos.", "Transportar cambia la tonalidad manteniendo la relación entre los acordes.", "transportar acordes", "cambiar tonalidad"],
      tunings: ["Afinaciones comunes de guitarra", "Guía rápida de Standard, Drop D, Eb Standard, D Standard, Open D y Open G.", "La mayoría empieza con E A D G B E y usa afinaciones alternativas para riffs graves o acordes abiertos.", "afinaciones guitarra", "drop d open g"],
      subdiv: ["Subdivisiones del metrónomo", "Practica duinas, tresillos y cuatrillos dentro del pulso.", "Las subdivisiones ayudan a escuchar mejor el ritmo entre los clics principales.", "subdivisiones metrónomo", "practicar tresillos"]
    },
    fr: {
      chords: ["Comment lire les accords", "Comprendre C, Am, G7 et les symboles d'accords courants.", "Un symbole d'accord indique la fondamentale et la couleur. La lettre donne la note, m signifie mineur et 7 ajoute la septième.", "lire accords", "symboles accords guitare"],
      transpose: ["Comment transposer des accords", "Déplacez une suite d'accords vers le haut ou le bas par demi-tons.", "Transposer change la tonalité tout en gardant les mêmes relations entre les accords.", "transposer accords", "changer tonalité"],
      tunings: ["Accordages courants de guitare", "Guide rapide pour Standard, Drop D, Eb Standard, D Standard, Open D et Open G.", "La plupart des guitaristes commencent en E A D G B E puis utilisent des accordages alternatifs pour changer de couleur.", "accordages guitare", "drop d open g"],
      subdiv: ["Subdivisions du métronome", "Travaillez les duos, triolets et groupes de quatre dans chaque temps.", "Les subdivisions rendent le tempo plus précis et aident à sentir le rythme entre les clics.", "subdivisions métronome", "travailler triolets"]
    },
    it: {
      chords: ["Come leggere gli accordi", "Capisci cosa significano C, Am, G7 e le sigle più comuni.", "Le sigle degli accordi indicano nota fondamentale e qualità. La lettera è la nota, m significa minore e 7 aggiunge la settima.", "leggere accordi", "sigle accordi chitarra"],
      transpose: ["Come trasporre gli accordi", "Sposta una progressione di accordi su o giù per semitoni.", "Trasporre cambia tonalità mantenendo uguali i rapporti tra gli accordi.", "trasporre accordi", "cambiare tonalità canzone"],
      tunings: ["Accordature comuni per chitarra", "Guida rapida a Standard, Drop D, Eb Standard, D Standard, Open D e Open G.", "La maggior parte dei chitarristi parte da Mi La Re Sol Si Mi, poi usa accordature alternative per riff più bassi, accordi aperti o tonalità vocali diverse.", "accordature chitarra", "drop d open g"],
      subdiv: ["Suddivisioni del metronomo", "Studia duine, terzine e quartine dentro ogni battito.", "Le suddivisioni rendono il tempo più preciso e aiutano a sentire il ritmo tra i click principali.", "suddivisioni metronomo", "studiare terzine"]
    },
    ja: {
      chords: ["コード記号の読み方", "C、Am、G7 など基本的なコード名の意味を学びます。", "コード記号はルート音とコードの種類を表します。文字はルート、m はマイナー、7 はセブンスを示します。", "コード 読み方", "ギターコード 記号"],
      transpose: ["コードを移調する方法", "コード進行を半音ずつ上下に移動します。", "移調はコード同士の関係を保ったままキーを変える作業です。", "コード 移調", "キー変更"],
      tunings: ["一般的なギターチューニング", "Standard、Drop D、Eb Standard、D Standard、Open D、Open G の短いガイドです。", "多くの奏者は E A D G B E から始め、曲調に合わせて別のチューニングを使います。", "ギター チューニング", "Drop D Open G"],
      subdiv: ["メトロノームの細分化", "2連、3連、4連を拍の中で練習します。", "細分化はクリックの間のリズムを感じる助けになります。", "メトロノーム 細分化", "三連符 練習"]
    },
    ko: {
      chords: ["코드 기호 읽는 법", "C, Am, G7 같은 기본 코드 이름을 이해합니다.", "코드 기호는 근음과 코드 성격을 압축해 보여 줍니다. 글자는 근음, m은 마이너, 7은 세븐스를 뜻합니다.", "코드 읽기", "기타 코드 이름"],
      transpose: ["코드 조옮김 방법", "코드 진행을 반음 단위로 올리거나 내립니다.", "조옮김은 코드 사이 관계를 유지하면서 키를 바꾸는 작업입니다.", "코드 조옮김", "키 변경"],
      tunings: ["일반적인 기타 튜닝", "Standard, Drop D, Eb Standard, D Standard, Open D, Open G 빠른 가이드입니다.", "대부분은 E A D G B E에서 시작하고 곡 스타일에 따라 다른 튜닝을 사용합니다.", "기타 튜닝", "Drop D Open G"],
      subdiv: ["메트로놈 subdivision", "박 안에서 2연음, 3연음, 4연음을 연습합니다.", "세분화는 주요 클릭 사이의 리듬을 더 정확히 느끼게 합니다.", "메트로놈 세분화", "셋잇단음 연습"]
    },
    pt: {
      chords: ["Como ler cifras de acordes", "Entenda C, Am, G7 e nomes comuns de acordes.", "A cifra mostra a nota fundamental e o tipo do acorde. A letra é a fundamental, m significa menor e 7 adiciona a sétima.", "ler acordes", "cifras de guitarra"],
      transpose: ["Como transpor acordes", "Mova progressões de acordes para cima ou para baixo em semitons.", "Transpor muda a tonalidade mantendo a relação entre os acordes.", "transpor acordes", "mudar tonalidade"],
      tunings: ["Afinações comuns de guitarra", "Guia rápido para Standard, Drop D, Eb Standard, D Standard, Open D e Open G.", "A maioria começa em E A D G B E e usa afinações alternativas para riffs graves ou acordes abertos.", "afinações guitarra", "drop d open g"],
      subdiv: ["Subdivisões do metrônomo", "Pratique duínas, tercinas e quartinas dentro do pulso.", "As subdivisões ajudam a sentir o ritmo entre os cliques principais.", "subdivisões metrônomo", "praticar tercinas"]
    },
    ru: {
      chords: ["Как читать обозначения аккордов", "Разберите C, Am, G7 и другие распространенные названия аккордов.", "Обозначение аккорда показывает основной тон и тип. Буква означает корень, m - минор, 7 - добавленную септиму.", "читать аккорды", "обозначения аккордов"],
      transpose: ["Как транспонировать аккорды", "Перемещайте последовательности аккордов вверх или вниз по полутонам.", "Транспонирование меняет тональность, сохраняя интервальные отношения между аккордами.", "транспонировать аккорды", "сменить тональность"],
      tunings: ["Популярные строи гитары", "Краткий гид по Standard, Drop D, Eb Standard, D Standard, Open D и Open G.", "Большинство начинает с E A D G B E, а затем использует альтернативные строи для другого звучания.", "строи гитары", "drop d open g"],
      subdiv: ["Деления метронома", "Практикуйте дуоли, триоли и группы по четыре внутри доли.", "Деления помогают точнее чувствовать ритм между основными кликами.", "деления метронома", "триоли практика"]
    },
    zh: {
      chords: ["如何阅读和弦符号", "了解 C、Am、G7 和常见和弦名称的含义。", "和弦符号包含根音和和弦性质。字母是根音，m 表示小三和弦，7 表示加入七音。", "阅读和弦", "吉他和弦名称"],
      transpose: ["如何移调和弦", "按半音向上或向下移动和弦进行。", "移调会改变调性，但保持和弦之间的关系不变。", "和弦移调", "改变歌曲调性"],
      tunings: ["常见吉他调弦", "Standard、Drop D、Eb Standard、D Standard、Open D 和 Open G 快速指南。", "多数演奏者从 E A D G B E 开始，再根据风格使用其他调弦。", "吉他调弦", "Drop D Open G"],
      subdiv: ["节拍器细分练习", "在每一拍中练习二连、三连和四连。", "细分可以帮助你更准确地感受主拍之间的节奏。", "节拍器细分", "三连音练习"]
    }
  }[getContentLocale(locale)];
  const ui = {
    ar: {
      chordTool: "ناقل الأوتار",
      guitarTool: "موالِف الغيتار",
      metronomeTool: "الميترونوم",
      rootMajor: "الجذر والوتر الكبير",
      extensions: "m و 7 و maj7",
      semitones: "أنصاف النغمات",
      progression: "حافظ على التقدم",
      standard: "الضبط القياسي",
      alternate: "الضبطات البديلة",
      duplets: "الثنائيات",
      triplets: "الثلاثيات والرباعيات",
      chordSteps: ["حدد النغمة الجذرية.", "اقرأ نوع الوتر.", "انتبه للأرقام أو الإضافات.", "تدرب على الشكل ببطء."],
      transposeSteps: ["الصق تقدم الأوتار.", "اختر قيمة من -12 إلى +12 نصف نغمة.", "راجع النتيجة المنقولة.", "اعزف المقام الجديد ببطء."],
      tuningSteps: ["اختر ضبطا مسبقا.", "اضبط الوتر الأكثر انخفاضا أولا.", "تابع وترا بعد وتر.", "أعد فحص كل الأوتار."],
      subdivSteps: ["ابدأ بسرعة BPM بطيئة.", "اختر الميزان.", "اختر التقسيم.", "زد السرعة فقط عندما يصبح الإيقاع مريحا."]
    },
    de: {
      chordTool: "Akkord-Transposer",
      guitarTool: "Gitarren-Tuner",
      metronomeTool: "Metronom",
      rootMajor: "Grundton und Dur",
      extensions: "m, 7 und maj7",
      semitones: "Halbtöne",
      progression: "Akkordfolge erhalten",
      standard: "Standardstimmung",
      alternate: "Alternative Stimmungen",
      duplets: "Duolen",
      triplets: "Triolen und Vierergruppen",
      chordSteps: ["Finde den Grundton.", "Lies die Akkordqualität.", "Prüfe Zahlen und Erweiterungen.", "Übe den Griff langsam."],
      transposeSteps: ["Füge die Akkordfolge ein.", "Wähle einen Halbtonwert von -12 bis +12.", "Prüfe das Ergebnis.", "Spiele die neue Tonart langsam."],
      tuningSteps: ["Wähle einen Stimmungs-Preset.", "Stimme zuerst die tiefste Saite.", "Gehe Saite für Saite weiter.", "Kontrolliere danach alle Saiten erneut."],
      subdivSteps: ["Starte mit langsamem BPM.", "Wähle die Taktart.", "Wähle die Unterteilung.", "Erhöhe das Tempo erst, wenn es locker klingt."]
    },
    en: {
      chordTool: "Chord transposer",
      guitarTool: "Guitar tuner",
      metronomeTool: "Metronome",
      rootMajor: "Root and major chords",
      extensions: "m, 7 and maj7",
      semitones: "Semitones",
      progression: "Keep the progression",
      standard: "Standard tuning",
      alternate: "Alternate tunings",
      duplets: "Duplets",
      triplets: "Triplets and quadruplets",
      chordSteps: ["Find the root note.", "Read the chord quality.", "Check added numbers or extensions.", "Practice the shape slowly."],
      transposeSteps: ["Paste the chord progression.", "Choose a semitone value from -12 to +12.", "Check the transposed output.", "Play the new key slowly."],
      tuningSteps: ["Choose a tuning preset.", "Tune the lowest string first.", "Continue string by string.", "Recheck all strings after the first pass."],
      subdivSteps: ["Start with a slow BPM.", "Choose the meter.", "Select the subdivision.", "Increase speed only when the rhythm feels relaxed."]
    },
    es: {
      chordTool: "Transpositor de acordes",
      guitarTool: "Afinador de guitarra",
      metronomeTool: "Metrónomo",
      rootMajor: "Raíz y acorde mayor",
      extensions: "m, 7 y maj7",
      semitones: "Semitonos",
      progression: "Mantén la progresión",
      standard: "Afinación estándar",
      alternate: "Afinaciones alternativas",
      duplets: "Duinas",
      triplets: "Tresillos y cuatrillos",
      chordSteps: ["Encuentra la nota raíz.", "Lee la cualidad del acorde.", "Revisa números o extensiones.", "Practica la posición lentamente."],
      transposeSteps: ["Pega la progresión.", "Elige un valor de -12 a +12 semitonos.", "Comprueba el resultado.", "Toca la nueva tonalidad despacio."],
      tuningSteps: ["Elige un preset de afinación.", "Afina primero la cuerda más grave.", "Continúa cuerda por cuerda.", "Vuelve a comprobar todas las cuerdas."],
      subdivSteps: ["Empieza con BPM lento.", "Elige el compás.", "Selecciona la subdivisión.", "Sube la velocidad solo cuando suene cómodo."]
    },
    fr: {
      chordTool: "Transposeur d'accords",
      guitarTool: "Accordeur guitare",
      metronomeTool: "Métronome",
      rootMajor: "Fondamentale et majeur",
      extensions: "m, 7 et maj7",
      semitones: "Demi-tons",
      progression: "Gardez la progression",
      standard: "Accordage standard",
      alternate: "Accordages alternatifs",
      duplets: "Duolets",
      triplets: "Triolets et groupes de quatre",
      chordSteps: ["Trouvez la fondamentale.", "Lisez la couleur de l'accord.", "Repérez les chiffres ou extensions.", "Travaillez la position lentement."],
      transposeSteps: ["Collez la progression.", "Choisissez une valeur de -12 à +12 demi-tons.", "Vérifiez le résultat.", "Jouez lentement la nouvelle tonalité."],
      tuningSteps: ["Choisissez un preset d'accordage.", "Accordez d'abord la corde la plus grave.", "Continuez corde par corde.", "Revérifiez toutes les cordes."],
      subdivSteps: ["Commencez avec un BPM lent.", "Choisissez la mesure.", "Sélectionnez la subdivision.", "Augmentez seulement quand le rythme est détendu."]
    },
    it: {
      chordTool: "Traspositore accordi",
      guitarTool: "Accordatore chitarra",
      metronomeTool: "Metronomo",
      rootMajor: "Fondamentale e accordo maggiore",
      extensions: "m, 7 e maj7",
      semitones: "Semitoni",
      progression: "Mantieni la progressione",
      standard: "Accordatura standard",
      alternate: "Accordature alternative",
      duplets: "Duine",
      triplets: "Terzine e quartine",
      chordSteps: ["Trova la nota fondamentale.", "Leggi la qualità dell'accordo.", "Controlla numeri o estensioni.", "Studia la posizione lentamente."],
      transposeSteps: ["Incolla la progressione di accordi.", "Scegli un valore da -12 a +12 semitoni.", "Controlla l'output trasposto.", "Suona lentamente la nuova tonalità."],
      tuningSteps: ["Scegli un preset di accordatura.", "Accorda prima la corda più grave.", "Procedi corda per corda.", "Ricontrolla tutte le corde alla fine."],
      subdivSteps: ["Parti con BPM lento.", "Scegli la metrica.", "Seleziona la suddivisione.", "Aumenta la velocità solo quando il ritmo è rilassato."]
    },
    ja: {
      chordTool: "コード移調",
      guitarTool: "ギターチューナー",
      metronomeTool: "メトロノーム",
      rootMajor: "ルートとメジャーコード",
      extensions: "m、7、maj7",
      semitones: "半音",
      progression: "進行を保つ",
      standard: "標準チューニング",
      alternate: "別チューニング",
      duplets: "2連",
      triplets: "3連と4連",
      chordSteps: ["ルート音を見つけます。", "コードの種類を読みます。", "数字や拡張音を確認します。", "フォームをゆっくり練習します。"],
      transposeSteps: ["コード進行を貼り付けます。", "-12 から +12 半音を選びます。", "移調後の結果を確認します。", "新しいキーをゆっくり弾きます。"],
      tuningSteps: ["チューニングプリセットを選びます。", "一番低い弦から合わせます。", "弦ごとに進めます。", "最後に全弦を確認します。"],
      subdivSteps: ["遅い BPM から始めます。", "拍子を選びます。", "細分化を選びます。", "リズムが安定してから速度を上げます。"]
    },
    ko: {
      chordTool: "코드 조옮김",
      guitarTool: "기타 튜너",
      metronomeTool: "메트로놈",
      rootMajor: "근음과 메이저 코드",
      extensions: "m, 7, maj7",
      semitones: "반음",
      progression: "진행 유지",
      standard: "스탠더드 튜닝",
      alternate: "대체 튜닝",
      duplets: "2연음",
      triplets: "3연음과 4연음",
      chordSteps: ["근음을 찾습니다.", "코드 성격을 읽습니다.", "숫자와 확장음을 확인합니다.", "폼을 천천히 연습합니다."],
      transposeSteps: ["코드 진행을 붙여넣습니다.", "-12부터 +12까지 반음 값을 고릅니다.", "조옮김 결과를 확인합니다.", "새 키를 천천히 연주합니다."],
      tuningSteps: ["튜닝 프리셋을 고릅니다.", "가장 낮은 줄부터 맞춥니다.", "줄마다 차례로 진행합니다.", "마지막에 모든 줄을 다시 확인합니다."],
      subdivSteps: ["느린 BPM으로 시작합니다.", "박자를 선택합니다.", "세분화를 선택합니다.", "리듬이 편해질 때만 속도를 올립니다."]
    },
    pt: {
      chordTool: "Transpositor de acordes",
      guitarTool: "Afinador de guitarra",
      metronomeTool: "Metrônomo",
      rootMajor: "Fundamental e acorde maior",
      extensions: "m, 7 e maj7",
      semitones: "Semitons",
      progression: "Mantenha a progressão",
      standard: "Afinação padrão",
      alternate: "Afinações alternativas",
      duplets: "Duínas",
      triplets: "Tercinas e quartinas",
      chordSteps: ["Encontre a nota fundamental.", "Leia a qualidade do acorde.", "Confira números ou extensões.", "Pratique a forma devagar."],
      transposeSteps: ["Cole a progressão.", "Escolha um valor de -12 a +12 semitons.", "Confira o resultado.", "Toque a nova tonalidade devagar."],
      tuningSteps: ["Escolha um preset de afinação.", "Afine primeiro a corda mais grave.", "Continue corda por corda.", "Verifique todas as cordas no final."],
      subdivSteps: ["Comece com BPM lento.", "Escolha o compasso.", "Selecione a subdivisão.", "Aumente a velocidade só quando estiver confortável."]
    },
    ru: {
      chordTool: "Транспозитор аккордов",
      guitarTool: "Гитарный тюнер",
      metronomeTool: "Метроном",
      rootMajor: "Основной тон и мажор",
      extensions: "m, 7 и maj7",
      semitones: "Полутоны",
      progression: "Сохраните последовательность",
      standard: "Стандартный строй",
      alternate: "Альтернативные строи",
      duplets: "Дуоли",
      triplets: "Триоли и группы по четыре",
      chordSteps: ["Найдите основной тон.", "Определите тип аккорда.", "Проверьте цифры и расширения.", "Медленно отработайте аппликатуру."],
      transposeSteps: ["Вставьте последовательность аккордов.", "Выберите значение от -12 до +12 полутонов.", "Проверьте результат.", "Медленно сыграйте новую тональность."],
      tuningSteps: ["Выберите пресет строя.", "Сначала настройте самую низкую струну.", "Продолжайте струна за струной.", "В конце проверьте все струны снова."],
      subdivSteps: ["Начните с медленного BPM.", "Выберите размер.", "Выберите деление.", "Увеличивайте скорость только при расслабленном ритме."]
    },
    zh: {
      chordTool: "和弦移调器",
      guitarTool: "吉他调音器",
      metronomeTool: "节拍器",
      rootMajor: "根音与大三和弦",
      extensions: "m、7 和 maj7",
      semitones: "半音",
      progression: "保持和弦进行",
      standard: "标准调弦",
      alternate: "替代调弦",
      duplets: "二连音",
      triplets: "三连音和四连音",
      chordSteps: ["找到根音。", "阅读和弦性质。", "检查数字或扩展音。", "慢速练习指法。"],
      transposeSteps: ["粘贴和弦进行。", "选择 -12 到 +12 的半音值。", "检查移调结果。", "慢速弹奏新调性。"],
      tuningSteps: ["选择调弦预设。", "先调最低音弦。", "逐弦继续。", "最后重新检查所有弦。"],
      subdivSteps: ["从慢 BPM 开始。", "选择拍号。", "选择细分。", "节奏放松后再加速。"]
    }
  }[getContentLocale(locale)];

  return {
    "how-to-read-chords": {
      title: copy.chords[0],
      description: copy.chords[1],
      intro: copy.chords[2],
      keywords: [copy.chords[3], copy.chords[4], "chord symbols", "guitar chords", "TuneUniversal"],
      sections: [
        { title: ui.rootMajor, body: copy.chords[2] },
        { title: ui.extensions, body: copy.chords[1] }
      ],
      steps: ui.chordSteps,
      targetTitle: ui.chordTool,
      targetDescription: copy.transpose[1],
      tool: "chord-transposer"
    },
    "how-to-transpose-chords": {
      title: copy.transpose[0],
      description: copy.transpose[1],
      intro: copy.transpose[2],
      keywords: [copy.transpose[3], copy.transpose[4], "transpose chords", "change key", "TuneUniversal"],
      sections: [
        { title: ui.semitones, body: copy.transpose[2] },
        { title: ui.progression, body: copy.transpose[1] }
      ],
      steps: ui.transposeSteps,
      targetTitle: ui.chordTool,
      targetDescription: copy.transpose[1],
      tool: "chord-transposer"
    },
    "common-guitar-tunings": {
      title: copy.tunings[0],
      description: copy.tunings[1],
      intro: copy.tunings[2],
      keywords: [copy.tunings[3], copy.tunings[4], "guitar tunings", "Drop D", "Open G", "TuneUniversal"],
      sections: [
        { title: ui.standard, body: copy.tunings[2] },
        { title: ui.alternate, body: copy.tunings[1] }
      ],
      steps: ui.tuningSteps,
      targetTitle: ui.guitarTool,
      targetDescription: copy.tunings[1],
      tool: "guitar-tuner"
    },
    "metronome-subdivisions": {
      title: copy.subdiv[0],
      description: copy.subdiv[1],
      intro: copy.subdiv[2],
      keywords: [copy.subdiv[3], copy.subdiv[4], "metronome subdivisions", "triplets", "rhythm practice", "TuneUniversal"],
      sections: [
        { title: ui.duplets, body: copy.subdiv[2] },
        { title: ui.triplets, body: copy.subdiv[1] }
      ],
      steps: ui.subdivSteps,
      targetTitle: ui.metronomeTool,
      targetDescription: copy.subdiv[1],
      tool: "metronome"
    }
  };
}

type QueryDrivenGuideSlug =
  | "chromatic-tuner-guide"
  | "guitar-tuner-with-microphone"
  | "metronome-for-guitar"
  | "sound-meter-db-guide"
  | "pitch-generator-guide";

function queryDrivenUtilityGuides(locale: Locale): Record<QueryDrivenGuideSlug, Omit<GuideContent, "targetPath">> {
  const copy = {
    ar: {
      chromatic: ["دليل الموالف الكروماتيكي", "تعرف على استخدام موالف كروماتيكي لالتقاط اي نغمة بسرعة.", "استخدم هذا الدليل عندما تريد ضبط الجيتار او الكمان او اي الة لحنية نغمة بنغمة."],
      microphone: ["موالف جيتار بالميكروفون", "استخدم ميكروفون المتصفح لالتقاط نغمة الجيتار بدون تطبيق اضافي.", "هذه الصفحة تشرح كيف تحصل على قراءة اكثر ثباتا عند ضبط الجيتار بالميكروفون."],
      metronomeGuitar: ["مترونوم للجيتار", "تدرب على الريف والتمارين والاربيجيو بالجيتار مع BPM واضح.", "استخدم المترونوم للجيتار عندما تريد بناء توقيت ثابت وزيادة السرعة تدريجيا."],
      sound: ["دليل قياس الصوت بالديسيبل", "استخدم الفونومتر لقياس مستوى الصوت في الغرفة بشكل تقديري.", "هذا الدليل مناسب للتحقق من ضوضاء الغرفة ومستوى التدريب والفرق بين البيئات الهادئة والصاخبة."],
      pitch: ["مولد ترددات اونلاين", "شغل نغمة ثابتة من 20Hz الى 20000Hz للتدريب والفحص الصوتي.", "استخدم مولد الترددات لتمرين الاذن او لمطابقة نغمة مرجعية بسرعة."]
    },
    de: {
      chromatic: ["Chromatisches Stimmgeraet Guide", "Lerne, wie ein chromatischer Tuner jede Note schnell erkennt.", "Nutze diesen Guide, wenn du Gitarre, Violine oder andere Melodieinstrumente Note fuer Note stimmen willst."],
      microphone: ["Gitarren Tuner mit Mikrofon", "Nutze das Browser-Mikrofon, um Gitarrentoene ohne App zu erkennen.", "Diese Seite zeigt, wie du beim Stimmen mit Mikrofon eine stabilere Anzeige bekommst."],
      metronomeGuitar: ["Metronom fuer Gitarre", "Uebe Riffs, Technik und Arpeggios mit klarem BPM fuer Gitarre.", "Nutze ein Gitarren-Metronom, wenn du sauberes Timing aufbauen und das Tempo schrittweise steigern willst."],
      sound: ["dB Meter Guide", "Nutze das Sound Meter, um die Lautstaerke im Raum geschaetzt in dB zu pruefen.", "Dieser Guide hilft dir, Zimmergeraesche, Uebelautstaerke und typische dB-Bereiche besser einzuordnen."],
      pitch: ["Pitch Generator online", "Erzeuge einen konstanten Ton von 20 Hz bis 20000 Hz fuer Gehoertraining und Audiotests.", "Nutze den Pitch Generator als Referenzton oder fuer schnelle Audio-Checks im Browser."]
    },
    en: {
      chromatic: ["Chromatic tuner guide", "Learn when to use a chromatic tuner to catch any note quickly and accurately.", "Use this guide when you want to tune guitar, violin or any pitched instrument note by note with a browser tuner."],
      microphone: ["Guitar tuner with microphone", "Use your browser microphone to detect guitar pitch without installing an app.", "This page explains how to get a steadier reading when tuning guitar with a microphone online."],
      metronomeGuitar: ["Metronome for guitar practice", "Practice riffs, picking and chord changes with a guitar-friendly online metronome.", "Use a metronome for guitar when you want steadier timing, cleaner rhythm and a controlled speed-building routine."],
      sound: ["Sound meter dB guide", "Measure estimated room volume in dB and compare quiet practice, conversation and loud environments.", "This guide helps you use the sound meter for room checks, practice volume and quick dB comparisons."],
      pitch: ["Pitch generator online guide", "Generate a steady tone from 20 Hz to 20000 Hz for ear training, reference pitch and audio checks.", "Use the pitch generator when you need a fixed reference tone, hearing test sweep or quick speaker check in the browser."]
    },
    es: {
      chromatic: ["Guia de afinador cromatico", "Aprende cuando usar un afinador cromatico para detectar cualquier nota con rapidez.", "Usa esta guia si quieres afinar guitarra, violin u otro instrumento nota por nota en el navegador."],
      microphone: ["Afinador de guitarra con microfono", "Usa el microfono del navegador para detectar la afinacion de la guitarra sin instalar una app.", "Esta pagina explica como conseguir una lectura mas estable al afinar guitarra con microfono online."],
      metronomeGuitar: ["Metronomo para guitarra", "Practica riffs, picking y cambios de acordes con un metronomo online pensado para guitarra.", "Usa el metronomo para guitarra cuando quieras mejorar tempo, limpieza ritmica y velocidad progresiva."],
      sound: ["Guia de sonometro en dB", "Mide el volumen estimado de una habitacion en dB y compara ambientes tranquilos o ruidosos.", "Esta guia te ayuda a usar el sonometro para revisar ruido de sala, volumen de practica y referencias de dB."],
      pitch: ["Guia de generador de tono online", "Genera un tono fijo de 20 Hz a 20000 Hz para entrenamiento auditivo y pruebas de audio.", "Usa el generador de tono como referencia rapida, barrido simple o comprobacion de altavoces en el navegador."]
    },
    fr: {
      chromatic: ["Guide de l'accordeur chromatique", "Apprenez quand utiliser un accordeur chromatique pour reconnaitre n'importe quelle note.", "Utilisez ce guide si vous voulez accorder guitare, violon ou autre instrument note par note dans le navigateur."],
      microphone: ["Accordeur guitare avec micro", "Utilisez le micro du navigateur pour detecter la hauteur de la guitare sans application.", "Cette page explique comment obtenir une lecture plus stable avec un accordeur guitare en ligne au microphone."],
      metronomeGuitar: ["Metronome pour guitare", "Travaillez riffs, picking et changements d'accords avec un metronome en ligne pour guitare.", "Utilisez le metronome pour guitare pour construire un tempo regulier et augmenter la vitesse progressivement."],
      sound: ["Guide du sonometre en dB", "Mesurez le volume estime d'une piece en dB et comparez differents environnements.", "Ce guide vous aide a utiliser le sonometre pour controler le bruit de la piece et le volume de travail."],
      pitch: ["Guide du generateur de frequence", "Generez un son fixe de 20 Hz a 20000 Hz pour l'oreille et les tests audio.", "Utilisez le generateur de frequence comme note de reference, balayage simple ou verification audio dans le navigateur."]
    },
    it: {
      chromatic: ["Guida accordatore cromatico", "Scopri quando usare un accordatore cromatico per riconoscere qualsiasi nota con precisione.", "Usa questa guida quando vuoi accordare chitarra, violino o un altro strumento nota per nota direttamente nel browser."],
      microphone: ["Accordatore chitarra con microfono", "Usa il microfono del browser per rilevare l'intonazione della chitarra senza installare app.", "Questa pagina spiega come ottenere una lettura piu stabile quando accordi la chitarra online con il microfono."],
      metronomeGuitar: ["Metronomo per chitarra", "Studia riff, plettrate e cambi di accordi con un metronomo online pensato per chitarra.", "Usa il metronomo per chitarra quando vuoi migliorare tempo, precisione ritmica e velocita in modo controllato."],
      sound: ["Guida fonometro in dB", "Misura il volume stimato di una stanza in dB e confronta ambienti tranquilli o rumorosi.", "Questa guida ti aiuta a usare il fonometro per controllare rumore, volume di studio e riferimenti pratici in decibel."],
      pitch: ["Guida pitch generator online", "Genera una nota fissa da 20 Hz a 20000 Hz per orecchio, riferimento e controlli audio.", "Usa il pitch generator come nota di riferimento, sweep semplice o controllo rapido di casse e cuffie nel browser."]
    },
    ja: {
      chromatic: ["クロマチックチューナーガイド", "あらゆる音を素早く確認するためのクロマチックチューナーの使い方です。", "ギター、バイオリン、その他の楽器を1音ずつ確認したいときに使えるガイドです。"],
      microphone: ["マイク対応ギターチューナー", "ブラウザのマイクでギターの音程を検出する方法を説明します。", "オンラインでギターを合わせるときに、より安定した読み取りを得るためのガイドです。"],
      metronomeGuitar: ["ギター練習用メトロノーム", "リフ、ピッキング、コードチェンジの練習に役立つガイドです。", "ギターのテンポ感を整え、少しずつ速度を上げたいときに使えます。"],
      sound: ["dBサウンドメーターガイド", "部屋の音量をdBで目安として確認するための使い方です。", "静かな部屋、会話、交通音などを比較しながら音量感をつかむためのガイドです。"],
      pitch: ["ピッチジェネレーターガイド", "20Hzから20000Hzまでの固定音を出す使い方をまとめています。", "耳のトレーニング、基準音、簡単なオーディオチェックに使えるガイドです。"]
    },
    ko: {
      chromatic: ["크로매틱 튜너 가이드", "어떤 음이든 빠르게 확인할 수 있는 크로매틱 튜너 사용법입니다.", "기타, 바이올린 등 음정을 한 음씩 맞추고 싶을 때 유용한 가이드입니다."],
      microphone: ["마이크 기타 튜너", "브라우저 마이크로 기타 음정을 감지하는 방법을 설명합니다.", "온라인 기타 튜닝에서 더 안정적인 읽기를 얻는 데 도움이 되는 가이드입니다."],
      metronomeGuitar: ["기타용 메트로놈", "리프, 피킹, 코드 체인지 연습에 맞는 메트로놈 사용 가이드입니다.", "기타 타이밍을 안정시키고 속도를 점진적으로 올리고 싶을 때 사용합니다."],
      sound: ["dB 사운드 미터 가이드", "방의 음량을 dB 기준으로 확인하는 방법을 안내합니다.", "연습 볼륨, 방 소음, 일상 환경의 음량 차이를 빠르게 비교할 수 있습니다."],
      pitch: ["피치 제너레이터 가이드", "20Hz에서 20000Hz까지 고정 톤을 만드는 방법을 설명합니다.", "귀 훈련, 기준음, 간단한 오디오 체크에 사용할 수 있는 가이드입니다."]
    },
    pt: {
      chromatic: ["Guia do afinador cromatico", "Aprenda quando usar um afinador cromatico para reconhecer qualquer nota rapidamente.", "Use este guia quando quiser afinar guitarra, violino ou outro instrumento nota por nota no navegador."],
      microphone: ["Afinador de guitarra com microfone", "Use o microfone do navegador para detectar a altura da guitarra sem instalar app.", "Esta pagina explica como conseguir uma leitura mais estavel ao afinar guitarra online com microfone."],
      metronomeGuitar: ["Metronomo para guitarra", "Pratique riffs, palhetada e trocas de acordes com um metronomo online para guitarra.", "Use o metronomo para guitarra quando quiser melhorar tempo, precisao ritmica e velocidade de forma progressiva."],
      sound: ["Guia do medidor de som em dB", "Meça o volume estimado de um ambiente em dB e compare situacoes mais calmas ou mais altas.", "Este guia ajuda a usar o medidor de som para ruido da sala, volume de estudo e referencias praticas em dB."],
      pitch: ["Guia do gerador de frequencia", "Gere um tom fixo de 20 Hz a 20000 Hz para ouvido, referencia e testes de audio.", "Use o gerador de frequencia como tom de referencia, varredura simples ou conferencia rapida de caixas e fones."]
    },
    ru: {
      chromatic: ["Гид по хроматическому тюнеру", "Узнайте, когда использовать хроматический тюнер для любой ноты.", "Используйте этот гид, если хотите настраивать гитару, скрипку или другой инструмент по одной ноте."],
      microphone: ["Гитарный тюнер с микрофоном", "Используйте микрофон браузера, чтобы определить высоту гитары без приложения.", "Эта страница объясняет, как получить более стабильное считывание при онлайн-настройке гитары."],
      metronomeGuitar: ["Метроном для гитары", "Тренируйте риффы, штрихи и смену аккордов с онлайн-метрономом для гитары.", "Используйте метроном для гитары, чтобы укрепить чувство времени и постепенно повышать скорость."],
      sound: ["Гид по dB шумомеру", "Измеряйте примерную громкость комнаты в dB и сравнивайте разные условия.", "Этот гид помогает использовать шумомер для контроля громкости занятий и фонового шума."],
      pitch: ["Гид по генератору тона", "Создавайте устойчивый тон от 20 Hz до 20000 Hz для слуха и аудиопроверок.", "Используйте генератор тона как опорный звук, простой sweep или быстрый тест динамиков."]
    },
    zh: {
      chromatic: ["半音调音器指南", "了解何时使用半音调音器来快速识别任意音高。", "如果你想在浏览器里逐音调节吉他、小提琴或其他乐器，可以先看这份指南。"],
      microphone: ["带麦克风的吉他调音器", "使用浏览器麦克风检测吉他音高，无需安装应用。", "这页会说明如何在在线吉他调音时获得更稳定的读数。"],
      metronomeGuitar: ["吉他练习节拍器", "用适合吉他的在线节拍器练习riff、拨弦和换和弦。", "当你想提升节奏稳定性并逐步提速时，可以先看这份吉他节拍器指南。"],
      sound: ["dB声音计指南", "测量房间的大致dB音量，并比较安静与嘈杂环境。", "这份指南适合用来检查练习音量、房间噪声和常见分贝参考。"],
      pitch: ["在线音高发生器指南", "生成20Hz到20000Hz的固定音，用于听力训练和音频检查。", "当你需要参考音、简单扫频或快速检查扬声器时，可以使用这份指南。"]
    }
  }[getContentLocale(locale)];

  const englishShared = {
    chromaticSteps: ["Open the tuner.", "Play one note at a time.", "Watch the detected note and cents.", "Adjust until the pitch settles in tune."],
    microphoneSteps: ["Open the guitar tuner.", "Allow microphone access.", "Pick one string clearly.", "Wait for the reading to settle before adjusting."],
    metronomeSteps: ["Choose a comfortable BPM.", "Start with simple downbeats.", "Practice riffs or chord changes in time.", "Raise the speed only after several clean rounds."],
    soundSteps: ["Allow microphone access.", "Choose a stable room position.", "Watch current, minimum, maximum and average dB.", "Use the graph to compare the last 30 seconds."],
    pitchSteps: ["Choose a frequency.", "Set a safe volume.", "Start the tone.", "Stop it when you finish the test or exercise."],
    whyTitle: "When to use it",
    tipTitle: "Practical tip"
  };

  const italianShared = {
    chromaticSteps: ["Apri l'accordatore.", "Suona una nota alla volta.", "Osserva nota rilevata e cents.", "Correggi finche la lettura si stabilizza intonata."],
    microphoneSteps: ["Apri l'accordatore per chitarra.", "Consenti il microfono.", "Pizzica una corda in modo pulito.", "Aspetta che la lettura si stabilizzi prima di correggere."],
    metronomeSteps: ["Scegli un BPM comodo.", "Parti con accenti semplici.", "Studia riff o cambi di accordi a tempo.", "Aumenta la velocita solo dopo diversi giri puliti."],
    soundSteps: ["Consenti il microfono.", "Scegli una posizione stabile nella stanza.", "Controlla dB attuale, minimo, massimo e medio.", "Usa il grafico per confrontare gli ultimi 30 secondi."],
    pitchSteps: ["Scegli la frequenza.", "Imposta un volume sicuro.", "Avvia il tono.", "Ferma il segnale quando finisci il test o l'esercizio."],
    whyTitle: "Quando usarlo",
    tipTitle: "Consiglio pratico"
  };

  const frenchShared = {
    chromaticSteps: ["Ouvrez l'accordeur.", "Jouez une note à la fois.", "Observez la note détectée et les cents.", "Ajustez jusqu'à ce que la hauteur se stabilise juste."],
    microphoneSteps: ["Ouvrez l'accordeur de guitare.", "Autorisez l'accès au micro.", "Pincez une corde de façon nette.", "Attendez que la lecture se stabilise avant d'ajuster."],
    metronomeSteps: ["Choisissez un BPM confortable.", "Commencez par des temps forts simples.", "Travaillez riffs ou changements d'accords en rythme.", "Augmentez la vitesse seulement après plusieurs passages propres."],
    soundSteps: ["Autorisez l'accès au micro.", "Choisissez une position stable dans la pièce.", "Observez les dB actuels, minimum, maximum et moyens.", "Utilisez le graphique pour comparer les 30 dernières secondes."],
    pitchSteps: ["Choisissez une fréquence.", "Réglez un volume sûr.", "Lancez le son.", "Arrêtez-le quand le test ou l'exercice est terminé."],
    whyTitle: "Quand l'utiliser",
    tipTitle: "Conseil pratique"
  };

  const germanShared = {
    chromaticSteps: ["Öffne das Stimmgerät.", "Spiele eine Note nach der anderen.", "Beobachte den erkannten Ton und die Cents.", "Stelle nach, bis sich die Tonhöhe gestimmt einpendelt."],
    microphoneSteps: ["Öffne das Gitarrenstimmgerät.", "Erlaube den Mikrofonzugriff.", "Schlage eine Saite sauber an.", "Warte, bis sich die Anzeige beruhigt, bevor du nachstellst."],
    metronomeSteps: ["Wähle eine angenehme BPM.", "Beginne mit einfachen betonten Schlägen.", "Übe Riffs oder Akkordwechsel im Takt.", "Erhöhe das Tempo erst nach mehreren sauberen Durchläufen."],
    soundSteps: ["Erlaube den Mikrofonzugriff.", "Wähle eine stabile Position im Raum.", "Beobachte aktuelle, minimale, maximale und durchschnittliche dB.", "Nutze das Diagramm, um die letzten 30 Sekunden zu vergleichen."],
    pitchSteps: ["Wähle eine Frequenz.", "Stelle eine sichere Lautstärke ein.", "Starte den Ton.", "Stoppe ihn, wenn der Test oder die Übung beendet ist."],
    whyTitle: "Wann man es nutzt",
    tipTitle: "Praktischer Tipp"
  };

  const spanishShared = {
    chromaticSteps: ["Abre el afinador.", "Toca una nota a la vez.", "Observa la nota detectada y los cents.", "Ajusta hasta que la altura se estabilice afinada."],
    microphoneSteps: ["Abre el afinador de guitarra.", "Permite el acceso al micrófono.", "Pulsa una cuerda de forma limpia.", "Espera a que la lectura se estabilice antes de ajustar."],
    metronomeSteps: ["Elige un BPM cómodo.", "Empieza con tiempos fuertes simples.", "Practica riffs o cambios de acordes a tempo.", "Sube la velocidad solo después de varias rondas limpias."],
    soundSteps: ["Permite el acceso al micrófono.", "Elige una posición estable en la habitación.", "Observa los dB actual, mínimo, máximo y medio.", "Usa el gráfico para comparar los últimos 30 segundos."],
    pitchSteps: ["Elige una frecuencia.", "Ajusta un volumen seguro.", "Inicia el tono.", "Detente cuando termines el test o el ejercicio."],
    whyTitle: "Cuándo usarlo",
    tipTitle: "Consejo práctico"
  };

  const portugueseShared = {
    chromaticSteps: ["Abra o afinador.", "Toque uma nota por vez.", "Observe a nota detectada e os cents.", "Ajuste até a altura se estabilizar afinada."],
    microphoneSteps: ["Abra o afinador de guitarra.", "Permita o acesso ao microfone.", "Toque uma corda de forma limpa.", "Aguarde a leitura se estabilizar antes de ajustar."],
    metronomeSteps: ["Escolha um BPM confortável.", "Comece com tempos fortes simples.", "Pratique riffs ou mudanças de acordes no tempo.", "Aumente a velocidade só após várias rodadas limpas."],
    soundSteps: ["Permita o acesso ao microfone.", "Escolha uma posição estável na sala.", "Observe os dB atual, mínimo, máximo e médio.", "Use o gráfico para comparar os últimos 30 segundos."],
    pitchSteps: ["Escolha uma frequência.", "Ajuste um volume seguro.", "Inicie o tom.", "Pare quando terminar o teste ou exercício."],
    whyTitle: "Quando usar",
    tipTitle: "Dica prática"
  };

  const chineseShared = {
    chromaticSteps: ["打开调音器。", "每次只演奏一个音符。", "观察检测到的音符和音分。", "调整直到音高稳定在准确位置。"],
    microphoneSteps: ["打开吉他调音器。", "允许麦克风访问。", "清晰地拨动一根弦。", "等待读数稳定后再调整。"],
    metronomeSteps: ["选择一个舒适的BPM。", "从简单的强拍开始。", "按节奏练习riff或换和弦。", "只在几轮干净后再提速。"],
    soundSteps: ["允许麦克风访问。", "在房间里选一个稳定的位置。", "观察当前、最小、最大和平均dB。", "用图表比较最近30秒。"],
    pitchSteps: ["选择一个频率。", "设置一个安全的音量。", "开始音调。", "测试或练习结束时停止。"],
    whyTitle: "何时使用",
    tipTitle: "实用建议"
  };

  const russianShared = {
    chromaticSteps: ["Откройте тюнер.", "Играйте по одной ноте.", "Следите за определяемой нотой и центами.", "Настраивайте, пока высота не стабилизируется."],
    microphoneSteps: ["Откройте гитарный тюнер.", "Разрешите доступ к микрофону.", "Чисто зацепите одну струну.", "Подождите, пока показание стабилизируется."],
    metronomeSteps: ["Выберите комфортный BPM.", "Начните с простых сильных долей.", "Тренируйте риффы или смену аккордов в темпе.", "Ускоряйтесь только после нескольких чистых прогонов."],
    soundSteps: ["Разрешите доступ к микрофону.", "Выберите стабильное место в комнате.", "Следите за текущим, минимальным, максимальным и средним dB.", "Используйте график для сравнения последних 30 секунд."],
    pitchSteps: ["Выберите частоту.", "Установите безопасную громкость.", "Запустите тон.", "Остановите по завершении теста или упражнения."],
    whyTitle: "Когда использовать",
    tipTitle: "Практический совет"
  };

  const japaneseShared = {
    chromaticSteps: ["チューナーを開く。", "1音ずつ演奏する。", "検出された音符とセントを確認する。", "音程が安定するまで調整する。"],
    microphoneSteps: ["ギターチューナーを開く。", "マイクのアクセスを許可する。", "1本の弦を清音でピックする。", "読み取りが安定してから調整する。"],
    metronomeSteps: ["快適なBPMを選ぶ。", "シンプルな拍から始める。", "リフやコードチェンジを拍に合わせて練習する。", "何度かきれいにできてからテンポを上げる。"],
    soundSteps: ["マイクのアクセスを許可する。", "部屋の安定した場所を選ぶ。", "現在・最小・最大・平均dBを確認する。", "グラフで直近30秒を比較する。"],
    pitchSteps: ["周波数を選ぶ。", "安全な音量に設定する。", "トーンを開始する。", "テストや練習が終わったら停止する。"],
    whyTitle: "使うタイミング",
    tipTitle: "実践のコツ"
  };

  const koreanShared = {
    chromaticSteps: ["튜너를 연다.", "한 번에 한 음씩 연주한다.", "감지된 음표와 센트를 확인한다.", "음정이 안정될 때까지 조율한다."],
    microphoneSteps: ["기타 튜너를 연다.", "마이크 접근을 허용한다.", "한 줄을 깨끗하게 픽한다.", "읽기가 안정된 후 조정한다."],
    metronomeSteps: ["편안한 BPM을 선택한다.", "간단한 강박부터 시작한다.", "리프나 코드 체인지를 템포에 맞춰 연습한다.", "몇 번 깨끗하게 된 후에만 속도를 올린다."],
    soundSteps: ["마이크 접근을 허용한다.", "방 안의 안정된 위치를 선택한다.", "현재, 최소, 최대, 평균 dB를 확인한다.", "그래프로 최근 30초를 비교한다."],
    pitchSteps: ["주파수를 선택한다.", "안전한 볼륨을 설정한다.", "톤을 시작한다.", "테스트나 연습이 끝나면 중지한다."],
    whyTitle: "사용 시점",
    tipTitle: "실전 팁"
  };

  const arabicShared = {
    chromaticSteps: ["افتح الموالف.", "العب نغمة واحدة في كل مرة.", "راقب النغمة المكتشفة والسنتات.", "اضبط حتى يستقر الصوت في الضبط الصحيح."],
    microphoneSteps: ["افتح موالف الجيتار.", "اسمح بالوصول إلى الميكروفون.", "انقر وترًا واحدًا بوضوح.", "انتظر حتى تستقر القراءة قبل الضبط."],
    metronomeSteps: ["اختر BPM مريحًا.", "ابدأ بنبضات قوية بسيطة.", "تدرب على الريف أو تغييرات الأوتار على الإيقاع.", "ارفع السرعة فقط بعد عدة جولات نظيفة."],
    soundSteps: ["اسمح بالوصول إلى الميكروفون.", "اختر موضعًا ثابتًا في الغرفة.", "راقب dB الحالي والأدنى والأعلى والمتوسط.", "استخدم الرسم البياني لمقارنة آخر 30 ثانية."],
    pitchSteps: ["اختر التردد.", "اضبط مستوى صوت آمنًا.", "ابدأ النغمة.", "أوقفها عند انتهاء الاختبار أو التمرين."],
    whyTitle: "متى تستخدمه",
    tipTitle: "نصيحة عملية"
  };

  const contentLocale = getContentLocale(locale);
  const shared = contentLocale === "it" ? italianShared : contentLocale === "fr" ? frenchShared : contentLocale === "de" ? germanShared : contentLocale === "es" ? spanishShared : contentLocale === "pt" ? portugueseShared : contentLocale === "zh" ? chineseShared : contentLocale === "ru" ? russianShared : contentLocale === "ja" ? japaneseShared : contentLocale === "ko" ? koreanShared : contentLocale === "ar" ? arabicShared : englishShared;
  const isFr = contentLocale === "fr";
  const isDe = contentLocale === "de";
  const isEs = contentLocale === "es";
  const isPt = contentLocale === "pt";
  const isZh = contentLocale === "zh";
  const isRu = contentLocale === "ru";
  const isJa = contentLocale === "ja";
  const isKo = contentLocale === "ko";
  const isAr = contentLocale === "ar";

  return {
    "chromatic-tuner-guide": {
      title: copy.chromatic[0],
      description: copy.chromatic[1],
      intro: copy.chromatic[2],
      keywords: [copy.chromatic[0], "chromatic tuner", "online tuner", "TuneUniversal"],
      steps: shared.chromaticSteps,
      sections: [
        {
          title: shared.whyTitle,
          body:
            locale === "it"
              ? "Un accordatore cromatico e utile quando non vuoi limitarti alle sole corde standard e hai bisogno di riconoscere qualsiasi nota o accordatura."
              : isFr
              ? "Un accordeur chromatique est utile quand vous ne voulez pas vous limiter aux seules cordes standard et devez reconnaître n'importe quelle note ou accordage."
              : isDe
              ? "Ein chromatisches Stimmgerät hilft, wenn du dich nicht nur auf Standardsaiten verlassen willst und jede Note oder alternative Stimmung erkennen musst."
              : isEs
              ? "Un afinador cromático es útil cuando no quieres limitarte a las cuerdas estándar y necesitas detectar cualquier nota o afinación alternativa."
              : isPt
              ? "Um afinador cromático é útil quando você não quer se limitar às cordas padrão e precisa detectar qualquer nota ou afinação alternativa."
              : isZh
              ? "半音调音器在你不想局限于标准弦并需要识别任何音符或替代调音时非常有用。"
              : isRu
              ? "Хроматический тюнер помогает, когда вы не хотите ограничиваться стандартными струнами и нужно определить любую ноту или альтернативный строй."
              : isJa
              ? "クロマチックチューナーは、標準の弦だけに頼りたくないときや、どんな音符や代替チューニングも検出したいときに役立ちます。"
              : isKo
              ? "크로매틱 튜너는 표준 현에만 의존하고 싶지 않을 때, 어떤 음표나 대체 조율도 감지해야 할 때 유용합니다."
              : isAr
              ? "الموالف الكروماتيكي مفيد عندما لا تريد الاقتصار على الأوتار القياسية وتحتاج إلى التعرف على أي نغمة أو ضبط بديل."
              : "A chromatic tuner helps when you do not want to rely only on standard strings and need to detect any note or alternate tuning."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Suona una sola nota per volta e riduci il rumore ambientale: il rilevamento diventa molto piu stabile."
              : isFr
              ? "Jouez une seule note à la fois et réduisez le bruit ambiant : la détection devient bien plus stable."
              : isDe
              ? "Spiele eine Note nach der anderen und reduziere Umgebungslärm, damit die Tonhöhenerkennung stabiler bleibt."
              : isEs
              ? "Toca una nota a la vez y reduce el ruido de fondo para que la detección sea más estable."
              : isPt
              ? "Toque uma nota por vez e reduza o ruído de fundo para que a detecção de altura seja mais estável."
              : isZh
              ? "每次只演奏一个音符并减少背景噪音，这样音高检测会更稳定。"
              : isRu
              ? "Играйте по одной ноте и уменьшайте фоновый шум — это сделает определение высоты значительно стабильнее."
              : isJa
              ? "1音ずつ演奏し、背景ノイズを減らすと、音程検出がより安定します。"
              : isKo
              ? "한 번에 한 음씩 연주하고 배경 소음을 줄이면 음정 감지가 더 안정됩니다."
              : isAr
              ? "العب نغمة واحدة في كل مرة وقلل من الضوضاء الخلفية حتى تصبح الكشف عن الطبقة أكثر استقرارًا."
              : "Play one note at a time and reduce background noise so pitch detection stays steadier."
        }
      ],
      relatedGuides: ["standard-guitar-tuning", "how-to-tune-guitar", "how-to-tune-violin"],
      relatedTools: relatedToolsForGuide(locale, "guitar-tuner", "tools/guitar-tuner"),
      tool: "guitar-tuner"
    },
    "guitar-tuner-with-microphone": {
      title: copy.microphone[0],
      description: copy.microphone[1],
      intro: copy.microphone[2],
      keywords: [copy.microphone[0], "guitar tuner with microphone", "online guitar tuner", "TuneUniversal"],
      steps: shared.microphoneSteps,
      sections: [
        {
          title: shared.whyTitle,
          body:
            locale === "it"
              ? "Il microfono del browser e il modo piu rapido per accordare senza cavi, app o pedali aggiuntivi."
              : isFr
              ? "Le micro du navigateur est l'un des moyens les plus rapides d'accorder sans câbles, applications ni pédales supplémentaires."
              : isDe
              ? "Das Browser-Mikrofon ist einer der schnellsten Wege zu stimmen — ohne zusätzliche Kabel, Apps oder Pedale."
              : isEs
              ? "El micrófono del navegador es una de las formas más rápidas de afinar sin cables, apps ni pedales adicionales."
              : isPt
              ? "O microfone do navegador é uma das formas mais rápidas de afinar sem cabos, apps ou pedais adicionais."
              : isZh
              ? "浏览器麦克风是最快的调音方式之一，无需额外的线缆、应用或踏板。"
              : isRu
              ? "Микрофон браузера — один из самых быстрых способов настройки без лишних кабелей, приложений или педалей."
              : isJa
              ? "ブラウザのマイクは、余分なケーブル、アプリ、ペダルなしでチューニングする最も速い方法の一つです。"
              : isKo
              ? "브라우저 마이크는 추가 케이블, 앱이나 페달 없이 조율하는 가장 빠른 방법 중 하나입니다."
              : isAr
              ? "الميكروفون في المتصفح من أسرع طرق الضبط دون كابلات إضافية أو تطبيقات أو دواسات."
              : "A browser microphone is one of the fastest ways to tune without extra cables, apps or pedals."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Tieni la chitarra vicino al telefono o al laptop, suona una corda alla volta e lascia decadere la nota prima di regolare."
              : isFr
              ? "Gardez la guitare près du téléphone ou de l'ordinateur, jouez une corde à la fois et laissez la note résonner avant d'ajuster."
              : isDe
              ? "Halte die Gitarre nahe an Telefon oder Laptop, spiele eine Saite nach der anderen und lass die Note ausklingen, bevor du nachstellst."
              : isEs
              ? "Mantén la guitarra cerca del teléfono o portátil, toca una cuerda a la vez y deja resonar la nota antes de ajustar."
              : isPt
              ? "Mantenha a guitarra perto do celular ou laptop, toque uma corda por vez e deixe a nota ressoar antes de ajustar."
              : isZh
              ? "将吉他靠近手机或笔记本，每次拨一根弦，让音符充分震荡后再调整。"
              : isRu
              ? "Держите гитару близко к телефону или ноутбуку, играйте по одной струне и дайте ноте отзвучать перед настройкой."
              : isJa
              ? "ギターをスマホかノートPCの近くに置き、1本ずつ弦を弾いて、調整する前に音を十分に響かせましょう。"
              : isKo
              ? "기타를 폰이나 노트북 가까이 두고, 한 번에 한 줄씩 튕기며 조정하기 전에 음이 충분히 울리게 하세요."
              : isAr
              ? "أبقِ الجيتار قريبًا من الهاتف أو الحاسوب، اعزف وترًا واحدًا في كل مرة واترك النغمة تتردد قبل الضبط."
              : "Keep the guitar close to the phone or laptop, play one string at a time and let the note ring before adjusting."
        }
      ],
      relatedGuides: ["how-to-tune-guitar", "standard-guitar-tuning", "drop-d-tuning"],
      relatedTools: relatedToolsForGuide(locale, "guitar-tuner", "tools/guitar-tuner"),
      tool: "guitar-tuner"
    },
    "metronome-for-guitar": {
      title: copy.metronomeGuitar[0],
      description: copy.metronomeGuitar[1],
      intro: copy.metronomeGuitar[2],
      keywords: [copy.metronomeGuitar[0], "guitar metronome", "online metronome", "TuneUniversal"],
      steps: shared.metronomeSteps,
      sections: [
        {
          title: shared.whyTitle,
          body:
            locale === "it"
              ? "Un metronomo per chitarra serve per migliorare groove, plettrata, precisione dei riff e pulizia nei cambi di accordi."
              : isFr
              ? "Un métronome pour guitare aide à améliorer le groove, le contrôle du médiator, la précision des riffs et la propreté des changements d'accords."
              : isDe
              ? "Ein Gitarren-Metronom hilft dir, Groove, Anschlagkontrolle, Riff-Präzision und sauberere Akkordwechsel zu verbessern."
              : isEs
              ? "Un metrónomo para guitarra te ayuda a mejorar el groove, el control del plectro, la precisión de los riffs y la limpieza en los cambios de acordes."
              : isPt
              ? "Um metrônomo para guitarra ajuda a melhorar o groove, o controle do plectro, a precisão dos riffs e a limpeza nas mudanças de acordes."
              : isZh
              ? "吉他节拍器有助于改善律动、拨弦控制、riff精确度和换和弦的清晰度。"
              : isRu
              ? "Метроном для гитары помогает улучшить грув, контроль медиатора, точность риффов и чистоту смены аккордов."
              : isJa
              ? "ギター用メトロノームはグルーヴ、ピッキングコントロール、リフの精度、コードチェンジのクリーンさの改善に役立ちます。"
              : isKo
              ? "기타용 메트로놈은 그루브, 피킹 컨트롤, 리프 정확도, 코드 체인지의 깔끔함을 향상시키는 데 도움이 됩니다."
              : isAr
              ? "يساعد المترونوم للجيتار على تحسين الإيقاع والتحكم بالريشة ودقة الريف ونظافة تغيير الأوتار."
              : "A guitar metronome helps you improve groove, picking control, riff accuracy and cleaner chord changes."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Lavora prima su quarti e ottavi, poi aggiungi suddivisioni e cicli progressivi per salire di velocita."
              : isFr
              ? "Travaillez d'abord les noires et les croches, puis ajoutez des subdivisions et des cycles progressifs pour gagner en vitesse."
              : isDe
              ? "Arbeite zuerst an Vierteln und Achteln, füge dann Unterteilungen und progressive Zyklen hinzu, um Tempo aufzubauen."
              : isEs
              ? "Trabaja primero con negras y corcheas, luego añade subdivisiones y ciclos progresivos para ganar velocidad."
              : isPt
              ? "Trabalhe primeiro com semibreves e colcheias, depois adicione subdivisões e ciclos progressivos para ganhar velocidade."
              : isZh
              ? "先练四分音符和八分音符，然后添加细分节奏和渐进练习来提高速度。"
              : isRu
              ? "Сначала работайте с четвертями и восьмыми, затем добавляйте дробления и прогрессивные циклы для набора скорости."
              : isJa
              ? "まず4分音符と8分音符から始め、次に細分やプログレッシブサイクルを加えてスピードアップしましょう。"
              : isKo
              ? "먼저 4분음표와 8분음표로 작업하고, 그다음 세분화와 점진적 사이클을 추가하여 속도를 높이세요."
              : isAr
              ? "اعمل أولًا على النوتات الرباعية والثمانية ثم أضف التقسيمات والدورات التدريجية لرفع السرعة."
              : "Start with quarter notes and eighths, then add subdivisions and progressive cycles to build speed."
        }
      ],
      relatedGuides: ["how-to-use-metronome", "metronome-subdivisions", "how-to-find-bpm"],
      relatedTools: relatedToolsForGuide(locale, "metronome"),
      tool: "metronome"
    },
    "sound-meter-db-guide": {
      title: copy.sound[0],
      description: copy.sound[1],
      intro: copy.sound[2],
      keywords: [copy.sound[0], "sound meter db", "online db meter", "TuneUniversal"],
      steps: shared.soundSteps,
      sections: [
        {
          title: shared.whyTitle,
          body:
            locale === "it"
              ? "Il fonometro e utile per controllare il volume della stanza, il livello di pratica e la differenza tra ambienti silenziosi e rumorosi."
              : isFr
              ? "Le sonomètre est utile pour vérifier le volume de la pièce, le niveau de travail et la différence entre environnements calmes et bruyants."
              : isDe
              ? "Ein Schallpegelmesser ist nützlich, um Raumlautstärke, Übungspegel und den Unterschied zwischen ruhigen und lauten Umgebungen zu prüfen."
              : isEs
              ? "Un sonómetro es útil para controlar el volumen de la sala, el nivel de práctica y la diferencia entre entornos silenciosos y ruidosos."
              : isPt
              ? "Um medidor de som é útil para verificar o volume da sala, o nível de prática e a diferença entre ambientes silenciosos e ruidosos."
              : isZh
              ? "声音计对于检查房间响度、练习音量以及安静和嘈杂环境之间的差异非常有用。"
              : isRu
              ? "Шумомер полезен для проверки громкости в комнате, уровня занятий и разницы между тихой и шумной обстановкой."
              : isJa
              ? "サウンドメーターは部屋の音量、練習レベル、静かな環境とうるさい環境の違いを確認するのに便利です。"
              : isKo
              ? "사운드 미터는 방의 음량, 연습 볼륨, 조용한 환경과 시끄러운 환경 간의 차이를 확인하는 데 유용합니다."
              : isAr
              ? "مقياس الصوت مفيد للتحقق من مستوى صوت الغرفة وحجم التدريب والفرق بين البيئات الهادئة والصاخبة."
              : "A sound meter is useful for checking room loudness, practice volume and the difference between quiet and noisy environments."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Lascia il telefono o il computer fermo per qualche secondo: media, minimo e massimo diventano piu affidabili."
              : isFr
              ? "Laissez le téléphone ou l'ordinateur immobile quelques secondes : moyenne, minimum et maximum deviennent plus fiables."
              : isDe
              ? "Halte Telefon oder Computer einige Sekunden still, damit Durchschnitt, Minimum und Maximum zuverlässiger werden."
              : isEs
              ? "Deja el dispositivo quieto unos segundos para que los valores medio, mínimo y máximo sean más útiles."
              : isPt
              ? "Deixe o dispositivo quieto por alguns segundos para que os valores médio, mínimo e máximo se tornem mais confiáveis."
              : isZh
              ? "将设备静止几秒钟，使平均值、最小值和最大值的读数更加可靠。"
              : isRu
              ? "Держите устройство неподвижно несколько секунд, чтобы значения среднего, минимума и максимума стали более надёжными."
              : isJa
              ? "デバイスを数秒間静止させると、平均・最小・最大の読み取りがより信頼性の高いものになります。"
              : isKo
              ? "장치를 몇 초 동안 정지하면 평균, 최소, 최대 읽기가 더 신뢰할 수 있게 됩니다."
              : isAr
              ? "أبقِ الجهاز ثابتًا لبضع ثوانٍ حتى تصبح قراءات المتوسط والحد الأدنى والحد الأقصى أكثر موثوقية."
              : "Keep the device still for a few seconds so average, minimum and maximum readings become more useful."
        }
      ],
      relatedGuides: ["how-to-find-bpm"],
      relatedTools: relatedToolsForGuide(locale, "sound-level-meter"),
      tool: "sound-level-meter"
    },
    "pitch-generator-guide": {
      title: copy.pitch[0],
      description: copy.pitch[1],
      intro: copy.pitch[2],
      keywords: [copy.pitch[0], "pitch generator", "tone generator", "TuneUniversal"],
      steps: shared.pitchSteps,
      sections: [
        {
          title: shared.whyTitle,
          body:
            locale === "it"
              ? "Un pitch generator e utile per ear training, note di riferimento, controlli rapidi di casse, cuffie e frequenze specifiche."
              : isFr
              ? "Un générateur de hauteur est utile pour l'entraînement de l'oreille, les notes de référence et les vérifications rapides d'enceintes, de casques et de fréquences précises."
              : isDe
              ? "Ein Pitch Generator ist nützlich für Gehörtraining, Referenznoten und schnelle Checks von Lautsprechern, Kopfhörern und bestimmten Frequenzen."
              : isEs
              ? "Un generador de tono es útil para el entrenamiento auditivo, notas de referencia y comprobaciones rápidas de altavoces, auriculares y frecuencias específicas."
              : isPt
              ? "Um gerador de frequência é útil para treino auditivo, notas de referência e verificações rápidas de caixas de som, fones e frequências específicas."
              : isZh
              ? "音高发生器对于听力训练、参考音符以及快速检查扬声器、耳机和特定频率非常有用。"
              : isRu
              ? "Генератор тона полезен для тренировки слуха, опорных нот и быстрой проверки динамиков, наушников и конкретных частот."
              : isJa
              ? "ピッチジェネレーターは耳のトレーニング、参照音符、スピーカーやヘッドフォン、特定の周波数のクイックチェックに役立ちます。"
              : isKo
              ? "피치 제너레이터는 귀 훈련, 기준음, 스피커와 헤드폰, 특정 주파수를 빠르게 확인하는 데 유용합니다."
              : isAr
              ? "مولد النغمات مفيد لتدريب الأذن وملاحظات المرجعية والتحقق السريع من السماعات وسماعات الرأس والترددات المحددة."
              : "A pitch generator is useful for ear training, reference notes and quick checks of speakers, headphones and specific frequencies."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Parti sempre con volume basso, soprattutto sulle frequenze acute, poi alzalo solo quanto basta."
              : isFr
              ? "Commencez toujours à faible volume, surtout sur les fréquences aiguës, puis augmentez seulement autant que nécessaire."
              : isDe
              ? "Beginne immer mit niedriger Lautstärke, besonders bei hohen Frequenzen, und erhöhe sie nur so weit wie nötig."
              : isEs
              ? "Empieza siempre con volumen bajo, especialmente en frecuencias agudas, y auméntalo solo lo necesario."
              : isPt
              ? "Sempre comece com volume baixo, especialmente em frequências agudas, e aumente apenas o quanto for necessário."
              : isZh
              ? "始终以低音量开始，特别是在高频时，只在必要时提高音量。"
              : isRu
              ? "Всегда начинайте с низкой громкости, особенно на высоких частотах, и повышайте её только по необходимости."
              : isJa
              ? "特に高周波では必ず低音量から始め、必要な分だけ音量を上げましょう。"
              : isKo
              ? "특히 고주파에서는 항상 낮은 볼륨으로 시작하고, 필요한 만큼만 높이세요."
              : isAr
              ? "ابدأ دائمًا بصوت منخفض، خاصة عند الترددات العالية، وارفعه فقط بالقدر الضروري."
              : "Always start at a low volume, especially at high frequencies, and raise it only as much as needed."
        }
      ],
      relatedGuides: ["chromatic-tuner-guide", "how-to-find-bpm"],
      relatedTools: relatedToolsForGuide(locale, "pitch-generator"),
      tool: "pitch-generator"
    }
  };
}

function utilityBpm(locale: Locale): Omit<GuideContent, "targetPath"> {
  const data = {
    de: ["BPM eines Songs finden", "Schätze das Tempo eines Songs, indem du mit Tap BPM zum Beat tippst.", "Tippe zum Beat und TuneUniversal berechnet einen Durchschnitt aus deinen letzten Taps.", "bpm finden"],
    en: ["How to find the BPM of a song", "Use Tap BPM to estimate a song tempo by tapping with the beat.", "Tap along with the music and TuneUniversal calculates an average BPM from your recent taps.", "find bpm"],
    es: ["Cómo calcular el BPM de una canción", "Usa Tap BPM para estimar el tempo tocando con el pulso.", "Toca junto con la música y TuneUniversal calcula un BPM medio.", "calcular bpm"],
    fr: ["Comment trouver le BPM d'un morceau", "Utilisez Tap BPM pour estimer le tempo en tapant le rythme.", "Tapez avec la musique et TuneUniversal calcule un BPM moyen.", "trouver bpm"],
    it: ["Come calcolare i BPM di una canzone", "Usa Tap BPM per trovare il tempo medio di un brano battendo il ritmo.", "Batti il tempo con la musica e TuneUniversal calcola il BPM medio.", "calcolare bpm"],
    ja: ["曲の BPM を調べる方法", "Tap BPM を使って曲のテンポを推定します。", "音楽に合わせてタップすると平均 BPM が計算されます。", "BPM 計測"],
    ko: ["노래 BPM 찾는 방법", "Tap BPM으로 박자에 맞춰 눌러 템포를 추정합니다.", "음악에 맞춰 탭하면 평균 BPM을 계산합니다.", "BPM 계산"],
    pt: ["Como encontrar o BPM de uma música", "Use Tap BPM para estimar o tempo tocando junto com a batida.", "Toque junto com a música e o TuneUniversal calcula o BPM médio.", "encontrar bpm"],
    ru: ["Как узнать BPM песни", "Используйте Tap BPM, чтобы определить темп по ритму.", "Нажимайте в такт музыке, и TuneUniversal рассчитает средний BPM.", "узнать bpm"],
    zh: ["如何计算歌曲 BPM", "使用 Tap BPM 跟随节拍点击，估算歌曲速度。", "跟着音乐点击，TuneUniversal 会计算平均 BPM。", "计算 BPM"],
    ar: ["كيفية معرفة BPM للأغنية", "استخدم Tap BPM لتقدير سرعة الأغنية بالنقر مع الإيقاع.", "انقر مع الموسيقى وسيحسب TuneUniversal متوسط BPM.", "حساب BPM"]
  }[getContentLocale(locale)];
  const cl = getContentLocale(locale);
  const isIt = cl === "it";
  const isFr = cl === "fr";
  const isDe = cl === "de";
  const isEs = cl === "es";
  const isPt = cl === "pt";
  const isZh = cl === "zh";
  const isRu = cl === "ru";
  const isJa = cl === "ja";
  const isKo = cl === "ko";
  const isAr = cl === "ar";
  return {
    title: data[0],
    description: data[1],
    intro: data[2],
    keywords: [data[3], "tap bpm", "beats per minute"],
    steps: isIt
      ? ["Apri la pagina Tap BPM — non serve microfono.", "Avvia il brano che vuoi misurare.", "Premi il pulsante Tap (o la barra spaziatrice) una volta per ogni beat.", "Continua per almeno 8-16 tap per una lettura stabile.", "Leggi il BPM medio visualizzato — questo è il tempo del brano.", "Premi Reset per ricominciare con un nuovo brano."]
      : isFr
      ? ["Ouvrez la page Tap BPM — aucun micro nécessaire.", "Lancez le morceau que vous voulez mesurer.", "Appuyez sur le bouton Tap (ou la barre d'espace) une fois par temps, en rythme avec la musique.", "Continuez pendant au moins 8 à 16 taps pour une lecture stable.", "Lisez le BPM moyen affiché — c'est le tempo du morceau.", "Appuyez sur Réinitialiser pour démarrer une nouvelle mesure pour un autre titre."]
      : isDe
      ? ["Öffne die Tap-BPM-Seite — kein Mikrofon nötig.", "Starte den Song, den du messen willst.", "Drücke die Tap-Taste (oder die Leertaste) einmal pro Schlag im Takt der Musik.", "Tippe mindestens 8–16 Mal für eine stabile Anzeige.", "Lies die angezeigte durchschnittliche BPM ab — das ist das Song-Tempo.", "Drücke Reset, um eine neue Messung für einen anderen Titel zu starten."]
      : isEs
      ? ["Abre la página Tap BPM — no se necesita micrófono.", "Reproduce la canción que quieres medir.", "Pulsa el botón Tap (o la barra espaciadora) una vez por tiempo, al ritmo de la música.", "Continúa durante al menos 8-16 taps para una lectura estable.", "Lee el BPM medio mostrado — ese es el tempo de la canción.", "Pulsa Reiniciar para empezar una nueva medición con otra pista."]
      : isPt
      ? ["Abra a página Tap BPM — não é necessário microfone.", "Inicie a música que deseja medir.", "Pressione o botão Tap (ou a barra de espaço) uma vez por batida, no ritmo da música.", "Continue por pelo menos 8-16 taps para uma leitura estável.", "Leia o BPM médio exibido — esse é o tempo da música.", "Pressione Reiniciar para começar uma nova medição com outra faixa."]
      : isZh
      ? ["打开Tap BPM页面——无需麦克风。", "播放你想测量的歌曲。", "随音乐的节拍按Tap按钮（或空格键）。", "至少点击8-16次以获得稳定的读数。", "读取显示的平均BPM——那就是歌曲的速度。", "按重置键开始测量另一首曲目。"]
      : isRu
      ? ["Откройте страницу Tap BPM — микрофон не нужен.", "Запустите песню, которую хотите измерить.", "Нажимайте кнопку Tap (или пробел) один раз на каждый удар в такт музыке.", "Продолжайте не менее 8–16 нажатий для стабильного показания.", "Прочитайте средний BPM — это темп песни.", "Нажмите Сброс для нового измерения другого трека."]
      : isJa
      ? ["Tap BPMページを開く——マイク不要。", "測定したい曲を再生する。", "音楽のビートに合わせてTapボタン（またはスペースキー）を1回ずつ押す。", "安定した読み取りのために少なくとも8〜16回タップする。", "表示される平均BPMを読む——それが曲のテンポ。", "別の曲の計測を始めるにはリセットを押す。"]
      : isKo
      ? ["Tap BPM 페이지를 연다 — 마이크 불필요.", "측정하고 싶은 곡을 재생한다.", "음악의 박자에 맞춰 Tap 버튼(또는 스페이스바)을 한 번씩 누른다.", "안정적인 읽기를 위해 최소 8-16번 탭한다.", "표시된 평균 BPM을 읽는다 — 그것이 곡의 템포.", "다른 트랙을 측정하려면 초기화를 누른다."]
      : isAr
      ? ["افتح صفحة Tap BPM — لا حاجة لميكروفون.", "شغّل الأغنية التي تريد قياسها.", "اضغط زر Tap (أو مسافة) مرة واحدة لكل نبضة مع إيقاع الموسيقى.", "استمر لمدة 8-16 نقرة على الأقل للحصول على قراءة مستقرة.", "اقرأ متوسط BPM المعروض — هذا هو إيقاع الأغنية.", "اضغط إعادة الضبط لبدء قياس جديد لمسار مختلف."]
      : ["Open the Tap BPM page — no microphone needed.", "Start the song you want to measure.", "Press the Tap button (or spacebar) once per beat in time with the music.", "Continue for at least 8–16 taps for a stable reading.", "Read the average BPM displayed — that is the song tempo.", "Press Reset to start a new measurement for a different track."],
    sections: isIt
      ? [
          { title: "Cos'è il BPM", body: "BPM significa battiti al minuto e descrive la velocità del pulse in un brano. Un valore basso (60-80 BPM) indica un brano lento o una ballad, mentre un valore alto (140-180 BPM) indica un brano veloce come un punk rock o una dance track. Conoscere il BPM ti permette di impostare il metronomo alla velocità esatta e programmare drum machine o DAW senza dover indovinare." },
          { title: "Quanti tap servono", body: "Per una stima affidabile servono almeno quattro tap, ma la lettura diventa molto più stabile dopo otto o sedici tap. Il tool calcola la media degli intervalli tra i tap e la converte in BPM — più tap fai, più la media si stabilizza. Se i primi tap danno un valore molto diverso dagli ultimi, probabilmente hai leggermente cambiato il punto ritmico su cui batti." },
          { title: "Come battere il tap in modo preciso", body: "Batti sempre sullo stesso punto del beat — tipicamente il downbeat, cioè il tempo 1 di ogni battuta. Evita di battere sulle sincopi o sul controtempo. Con la barra spaziatrice è spesso più facile mantenere un ritmo uniforme rispetto a cliccare con il mouse. Su mobile, premi il pulsante grande con il polso invece del dito per un contatto più stabile." },
          { title: "Usare il BPM per studiare un brano", body: "Una volta trovato il BPM, inseriscilo nel metronomo online e suona il brano a quella velocità. Questo è il modo più rapido per capire se riesci a seguire il tempo originale o se devi partire più lento e costruire la velocità gradualmente. Molti musicisti usano Tap BPM come primo passo prima di ogni sessione di studio." }
        ]
      : isFr
      ? [
          { title: "Ce que signifie le BPM", body: "BPM signifie battements par minute et décrit la vitesse du pulse d'un morceau. Une valeur basse (60–80 BPM) indique une ballade lente, tandis qu'une valeur élevée (140–180 BPM) évoque un morceau dance rapide ou un punk. Connaître le BPM permet de régler un métronome au tempo exact et de programmer boîtes à rythmes et stations audionumériques sans deviner." },
          { title: "Combien de taps faut-il", body: "Il faut au moins quatre taps pour une première estimation, mais la lecture se stabilise nettement après huit à seize taps. L'outil fait la moyenne des intervalles entre les taps et la convertit en BPM — plus vous tapez, plus la moyenne est stable. Si vos premiers taps donnent une valeur très différente des suivants, vous avez sans doute déplacé le point rythmique sur lequel vous tapez." },
          { title: "Comment taper avec précision", body: "Tapez toujours le même point du temps — généralement le temps fort, c'est-à-dire le temps 1 de chaque mesure. Évitez de taper sur les syncopes ou le contretemps. La barre d'espace facilite souvent le maintien d'un rythme régulier par rapport au clic de souris. Sur mobile, appuyez sur le grand bouton avec le doigt bien à plat pour un contact plus stable." },
          { title: "Utiliser le BPM pour travailler un morceau", body: "Une fois le BPM trouvé, entrez-le dans le métronome en ligne et jouez le morceau à cette vitesse. C'est le moyen le plus rapide de savoir si vous pouvez suivre le tempo original ou s'il faut commencer plus lentement et accélérer progressivement. Beaucoup de musiciens utilisent Tap BPM comme première étape avant chaque session de travail." }
        ]
      : isDe
      ? [
          { title: "Was BPM bedeutet", body: "BPM steht für Schläge pro Minute und beschreibt die Pulsgeschwindigkeit eines Stücks. Ein niedriger Wert (60–80 BPM) deutet auf eine langsame Ballade hin, ein hoher Wert (140–180 BPM) auf einen schnellen Dance-Track oder Punk. Die BPM zu kennen erlaubt es, ein Metronom auf das exakt richtige Tempo einzustellen und Drumcomputer oder DAWs ohne Raten zu programmieren." },
          { title: "Wie viele Taps du brauchst", body: "Du brauchst mindestens vier Taps für eine erste Schätzung, aber die Anzeige stabilisiert sich deutlich nach acht bis sechzehn Taps. Das Tool mittelt die Intervalle zwischen den Taps und wandelt sie in BPM um — je mehr Taps, desto stabiler der Durchschnitt. Geben deine ersten Taps einen ganz anderen Wert als die späteren, hast du wahrscheinlich den rhythmischen Punkt verschoben, auf den du tippst." },
          { title: "Wie man präzise tippt", body: "Tippe immer denselben Punkt im Schlag — typischerweise den Auftakt, also Schlag 1 jedes Takts. Vermeide es, auf Synkopen oder den Gegenschlag zu tippen. Die Leertaste ist oft leichter für einen gleichmäßigen Rhythmus als die Maustaste. Drücke auf dem Handy die große Schaltfläche eher mit flachem Finger für einen stabileren Kontakt." },
          { title: "BPM zum Üben eines Songs nutzen", body: "Sobald du die BPM hast, gib sie in das Online-Metronom ein und übe den Song in diesem Tempo. Das ist der schnellste Weg herauszufinden, ob du dem Originaltempo folgen kannst oder langsamer beginnen und steigern musst. Viele Musiker nutzen Tap BPM als ersten Schritt vor jeder Übungseinheit." }
        ]
      : isEs
      ? [
          { title: "Qué significa el BPM", body: "BPM son las siglas de pulsaciones por minuto y describe la velocidad del pulso de una pieza musical. Un valor bajo (60-80 BPM) indica una balada lenta, mientras que un valor alto (140-180 BPM) apunta a una canción dance rápida o punk. Conocer el BPM te permite ajustar un metrónomo al tempo exacto y programar cajas de ritmos o DAWs sin tener que adivinar." },
          { title: "Cuántos taps necesitas", body: "Necesitas al menos cuatro taps para una primera estimación, pero la lectura se estabiliza notablemente a partir de ocho o dieciséis taps. La herramienta promedia los intervalos entre taps y los convierte en BPM — cuantos más taps hagas, más estable es la media. Si los primeros taps dan un valor muy diferente a los últimos, probablemente hayas cambiado el punto rítmico en el que estás tapeando." },
          { title: "Cómo tapear con precisión", body: "Siempre tapea el mismo punto del tiempo — normalmente el tiempo fuerte, es decir el tiempo 1 de cada compás. Evita tapear en síncopas o contratiempos. Usar la barra espaciadora suele ser más fácil para mantener un ritmo uniforme que hacer clic con el ratón. En móvil, pulsa el botón grande con la yema del dedo para un contacto más estable." },
          { title: "Usar el BPM para practicar una canción", body: "Una vez que tienes el BPM, introdúcelo en el metrónomo online y practica la canción a esa velocidad. Es la forma más rápida de saber si puedes seguir el tempo original o si necesitas empezar más lento y construir velocidad gradualmente. Muchos músicos usan Tap BPM como primer paso antes de cada sesión de práctica." }
        ]
      : isPt
      ? [
          { title: "O que significa BPM", body: "BPM significa batidas por minuto e descreve a velocidade do pulso de uma peça musical. Um valor baixo (60–80 BPM) indica uma balada lenta, enquanto um valor alto (140–180 BPM) aponta para uma música dance rápida ou punk. Conhecer o BPM permite ajustar um metrônomo ao tempo exato e programar caixas de ritmo ou DAWs sem precisar adivinhar." },
          { title: "Quantos taps você precisa", body: "Você precisa de pelo menos quatro taps para uma primeira estimativa, mas a leitura se estabiliza significativamente após oito a dezesseis taps. A ferramenta calcula a média dos intervalos entre os taps e os converte em BPM — quanto mais taps, mais estável a média. Se os primeiros taps derem um número muito diferente dos posteriores, você provavelmente mudou o ponto rítmico no qual está tapeando." },
          { title: "Como tapear com precisão", body: "Sempre tape o mesmo ponto do tempo — normalmente o tempo forte, ou seja o tempo 1 de cada compasso. Evite tapear nas síncopes ou contratempos. Usar a barra de espaço geralmente é mais fácil para manter um ritmo uniforme do que clicar com o mouse. No celular, pressione o botão grande com a ponta do dedo para um contato mais estável." },
          { title: "Usar o BPM para praticar uma música", body: "Uma vez que você tem o BPM, insira-o no metrônomo online e pratique a música nessa velocidade. É a forma mais rápida de descobrir se você consegue seguir o tempo original ou se precisa começar mais devagar e construir gradualmente. Muitos músicos usam Tap BPM como primeiro passo antes de cada sessão de prática." }
        ]
      : isZh
      ? [
          { title: "BPM的含义", body: "BPM代表每分钟节拍数，描述一首乐曲的脉冲速度。低值（60-80 BPM）表示慢节奏的抒情曲，而高值（140-180 BPM）则指向快节奏的舞曲或朋克歌曲。了解BPM让你可以将节拍器设置为精确的速度，并在不猜测的情况下编程鼓机或DAW。" },
          { title: "需要多少次点击", body: "你至少需要四次点击才能进行第一次估算，但在八到十六次点击后读数会显著稳定。该工具计算点击间隔的平均值并将其转换为BPM——点击次数越多，平均值越稳定。如果最初几次点击给出的数字与后来的差异很大，你可能改变了点击的节奏点。" },
          { title: "如何精确点击", body: "始终在节拍的同一点点击——通常是强拍，即每个小节的第1拍。避免在切分音或弱拍上点击。使用空格键通常比点击鼠标按钮更容易保持稳定的节奏。在手机上，用指尖按大按钮以获得更稳定的接触。" },
          { title: "使用BPM练习歌曲", body: "一旦你有了BPM，将其输入在线节拍器并以该速度练习歌曲。这是了解你是否能跟上原始速度，或者是否需要从更慢的速度开始逐步提升的最快方式。许多音乐家在每次练习前都将Tap BPM作为第一步。" }
        ]
      : isRu
      ? [
          { title: "Что означает BPM", body: "BPM означает удары в минуту и описывает скорость пульса музыкального произведения. Низкое значение (60–80 BPM) указывает на медленную балладу, а высокое (140–180 BPM) — на быструю танцевальную или панк-песню. Знание BPM позволяет настроить метроном на точный темп и программировать драм-машины или DAW без угадывания." },
          { title: "Сколько нажатий нужно", body: "Для первой оценки нужно минимум четыре нажатия, но показание значительно стабилизируется после восьми-шестнадцати нажатий. Инструмент усредняет интервалы между нажатиями и конвертирует их в BPM — чем больше нажатий, тем стабильнее среднее. Если первые несколько нажатий дают число, сильно отличающееся от последующих, вероятно, вы сдвинули ритмическую точку нажатия." },
          { title: "Как нажимать точно", body: "Всегда нажимайте в одну и ту же точку удара — как правило, сильную долю, то есть первую долю каждого такта. Избегайте нажатий на синкопы или слабые доли. Использование пробела обычно проще для поддержания ровного ритма, чем клик мышью. На мобильном нажимайте большую кнопку кончиком пальца для более стабильного контакта." },
          { title: "Использование BPM для практики песни", body: "Получив BPM, введите его в онлайн-метроном и тренируйтесь с песней в этом темпе. Это самый быстрый способ выяснить, можете ли вы следовать оригинальному темпу или нужно начать медленнее и постепенно наращивать скорость. Многие музыканты используют Tap BPM как первый шаг перед каждой тренировкой." }
        ]
      : isJa
      ? [
          { title: "BPMとは", body: "BPMは1分あたりの拍数を意味し、楽曲のパルス速度を表します。低い値（60〜80 BPM）はゆっくりしたバラードを示し、高い値（140〜180 BPM）は速いダンストラックやパンクソングを指します。BPMを知ることで、メトロノームを正確なテンポに設定し、ドラムマシンやDAWを推測なしにプログラムできます。" },
          { title: "何回タップが必要か", body: "最初の見積もりには少なくとも4回のタップが必要ですが、8〜16回のタップ後に読み取りは大幅に安定します。ツールはタップ間隔の平均を計算してBPMに変換します——タップが多いほど平均が安定します。最初の数回のタップが後のものと大きく異なる数値を出す場合、おそらくタップするリズムポイントが変わっています。" },
          { title: "正確にタップする方法", body: "常にビートの同じポイントをタップしてください——通常はダウンビート、つまり各小節の1拍目です。シンコペーションやオフビートでのタップは避けましょう。スペースキーを使うとマウスボタンをクリックするよりも安定したリズムを維持しやすいことが多いです。モバイルでは指先で大きなボタンを押すと接触がより安定します。" },
          { title: "BPMを使って曲を練習する", body: "BPMが分かったら、それをオンラインメトロノームに入力し、その速さで曲を練習しましょう。これは、元のテンポについていけるか、それともより遅いペースから始めて徐々に速度を上げる必要があるかを最も素早く確認する方法です。多くのミュージシャンが毎回の練習前にTap BPMを最初のステップとして使います。" }
        ]
      : isKo
      ? [
          { title: "BPM이 의미하는 것", body: "BPM은 분당 비트 수를 의미하며 음악 작품의 펄스 속도를 설명합니다. 낮은 값(60-80 BPM)은 느린 발라드를 나타내고, 높은 값(140-180 BPM)은 빠른 댄스 트랙이나 펑크 곡을 가리킵니다. BPM을 알면 메트로놈을 정확한 템포로 설정하고 드럼 머신이나 DAW를 추측 없이 프로그래밍할 수 있습니다." },
          { title: "몇 번 탭해야 하는지", body: "첫 번째 추정을 위해서는 최소 4번의 탭이 필요하지만, 8-16번 탭 후에는 읽기가 크게 안정됩니다. 도구는 탭 사이 간격의 평균을 계산하여 BPM으로 변환합니다——탭이 많을수록 평균이 안정됩니다. 처음 몇 번의 탭이 나중 탭과 크게 다른 숫자를 준다면, 아마도 탭하는 리듬 포인트가 바뀐 것입니다." },
          { title: "정확하게 탭하는 방법", body: "항상 비트의 같은 지점을 탭하세요——보통 강박, 즉 각 마디의 1박자입니다. 싱코페이션이나 오프비트에서 탭하는 것은 피하세요. 스페이스바를 사용하면 마우스 버튼 클릭보다 균일한 리듬을 유지하기 더 쉬운 경우가 많습니다. 모바일에서는 더 안정적인 접촉을 위해 손가락 끝으로 큰 버튼을 누르세요." },
          { title: "BPM을 사용하여 곡 연습하기", body: "BPM을 알아낸 후 온라인 메트로놈에 입력하고 그 속도로 곡을 연습하세요. 이것은 원래 템포를 따라갈 수 있는지, 아니면 더 느린 속도로 시작하여 점진적으로 속도를 높여야 하는지를 확인하는 가장 빠른 방법입니다. 많은 음악가들이 매 연습 세션 전에 Tap BPM을 첫 번째 단계로 사용합니다." }
        ]
      : isAr
      ? [
          { title: "معنى BPM", body: "BPM تعني النبضات في الدقيقة وتصف سرعة نبضة المقطوعة الموسيقية. القيمة المنخفضة (60-80 BPM) تشير إلى موسيقى بطيئة أو بالاد، بينما تشير القيمة العالية (140-180 BPM) إلى أغنية رقص سريعة أو بنك. معرفة BPM تتيح لك ضبط المترونوم على الإيقاع الصحيح وبرمجة آلات الإيقاع أو DAWs دون تخمين." },
          { title: "كم عدد النقرات التي تحتاجها", body: "تحتاج إلى أربع نقرات على الأقل لأول تقدير، لكن القراءة تستقر بشكل ملحوظ بعد ثماني إلى ستة عشر نقرة. الأداة تعدل متوسط الفترات بين النقرات وتحولها إلى BPM — كلما زادت النقرات، كلما استقر المتوسط أكثر. إذا أعطت أولى نقراتك رقمًا مختلفًا جدًا عن اللاحقة، فمن المحتمل أنك قد غيرت نقطة الإيقاع التي تنقر عليها." },
          { title: "كيفية النقر بدقة", body: "انقر دائمًا على نفس نقطة النبضة — عادةً النبضة القوية، أي النبضة 1 من كل مقياس. تجنب النقر على التزامنات أو النبضة الضعيفة. استخدام مفتاح المسافة أسهل في الغالب للحفاظ على إيقاع منتظم مقارنة بالنقر بزر الماوس. في الجوال، اضغط الزر الكبير بأطراف أصابعك للحصول على تلامس أكثر ثباتًا." },
          { title: "استخدام BPM للتدرب على أغنية", body: "بمجرد حصولك على BPM، أدخله في المترونوم عبر الإنترنت وتدرب على الأغنية بتلك السرعة. هذه هي أسرع طريقة لمعرفة ما إذا كان بإمكانك اتباع الإيقاع الأصلي أو ما إذا كنت بحاجة إلى البدء بشكل أبطأ والتدرج تدريجيًا. يستخدم الكثير من الموسيقيين Tap BPM كخطوة أولى قبل كل جلسة تدريب." }
        ]
      : [
          { title: "What BPM means", body: "BPM stands for beats per minute and describes the pulse speed of a piece of music. A low value (60–80 BPM) indicates a slow ballad, while a high value (140–180 BPM) points to a fast dance track or punk song. Knowing the BPM lets you set a metronome to the exact right tempo and program drum machines or DAWs without guessing." },
          { title: "How many taps you need", body: "You need at least four taps for a first estimate, but the reading stabilizes significantly after eight to sixteen taps. The tool averages the intervals between taps and converts them to BPM — the more taps you do, the more stable the average. If your first few taps give a very different number from later ones, you probably shifted the rhythmic point you are tapping on." },
          { title: "How to tap accurately", body: "Always tap the same point in the beat — typically the downbeat, meaning beat 1 of each bar. Avoid tapping on syncopations or the off-beat. Using the spacebar is often easier for maintaining a steady rhythm compared to clicking a mouse button. On mobile, press the large button with your wrist rather than just the fingertip for a more stable contact." },
          { title: "Using BPM to practice a song", body: "Once you have the BPM, enter it into the online metronome and practice the song at that speed. This is the fastest way to find out whether you can follow the original tempo or whether you need to start slower and build up. Many musicians use Tap BPM as a first step before every practice session." }
        ],
    faq: isIt
      ? [
          { question: "Posso usare Tap BPM mentre un brano è in riproduzione?", answer: "Sì, anzi è l'uso principale. Metti in riproduzione il brano e batti il tap in sincro con il beat. La lettura si aggiornerà in tempo reale ad ogni tap." },
          { question: "Il BPM di un brano cambia durante l'ascolto?", answer: "La maggior parte della musica pop, rock e elettronica ha un BPM costante. La musica live, jazz e classica spesso ha variazioni di tempo (accelerando o rallentando). Se la lettura oscilla molto mentre batti, potrebbe essere che il brano abbia un tempo variabile." },
          { question: "Come uso il risultato BPM con il metronomo?", answer: "Copia il valore BPM visualizzato, aprilo nel metronomo online e imposta lo stesso valore. Poi studia il brano seguendo il click del metronomo alla velocità originale." }
        ]
      : isFr
      ? [
          { question: "Puis-je utiliser Tap BPM pendant qu'un morceau joue ?", answer: "Oui, c'est même l'usage principal. Lancez le morceau et tapez le bouton en synchro avec le beat. La lecture se met à jour en temps réel à chaque tap." },
          { question: "Le BPM d'un morceau change-t-il pendant l'écoute ?", answer: "La plupart des musiques pop, rock et électroniques gardent un BPM constant. Les enregistrements live, le jazz et la musique classique présentent souvent des variations de tempo (accelerando ou ritardando). Si la lecture fluctue beaucoup pendant que vous tapez, le morceau a probablement un tempo variable." },
          { question: "Comment utiliser le résultat BPM avec le métronome ?", answer: "Copiez la valeur BPM affichée, ouvrez le métronome en ligne et entrez le même nombre. Travaillez ensuite le morceau en suivant le clic du métronome à la vitesse d'origine." }
        ]
      : isDe
      ? [
          { question: "Kann ich Tap BPM nutzen, während ein Song läuft?", answer: "Ja — das ist der Hauptzweck. Spiele den Song ab und tippe die Taste im Takt mit dem Beat. Die Anzeige aktualisiert sich nach jedem Tap in Echtzeit." },
          { question: "Ändert sich die BPM eines Songs beim Hören?", answer: "Die meiste Pop-, Rock- und elektronische Musik hält durchgehend eine konstante BPM. Live-Aufnahmen, Jazz und Klassik weisen oft Tempovariationen auf (Accelerando oder Ritardando). Schwankt die Anzeige beim Tippen stark, hat der Song wahrscheinlich ein variables Tempo." },
          { question: "Wie nutze ich das BPM-Ergebnis mit dem Metronom?", answer: "Kopiere den angezeigten BPM-Wert, öffne das Online-Metronom und gib dieselbe Zahl ein. Übe dann den Song, indem du dem Metronom-Klick im Originaltempo folgst." }
        ]
      : isEs
      ? [
          { question: "¿Puedo usar Tap BPM mientras suena una canción?", answer: "Sí — ese es el uso principal. Reproduce la canción y pulsa el botón sincronizado con el beat. La lectura se actualiza en tiempo real tras cada tap." },
          { question: "¿Cambia el BPM de una canción durante la escucha?", answer: "La mayoría de la música pop, rock y electrónica mantiene un BPM constante. Las grabaciones en directo, el jazz y la música clásica suelen tener variaciones de tempo (accelerando o ritardando). Si la lectura oscila mucho al tapear, la canción probablemente tenga un tempo variable." },
          { question: "¿Cómo uso el resultado del BPM con el metrónomo?", answer: "Copia el valor BPM mostrado, abre el metrónomo online e introduce el mismo número. Luego practica la canción siguiendo el clic del metrónomo a la velocidad original." }
        ]
      : isPt
      ? [
          { question: "Posso usar Tap BPM enquanto uma música está tocando?", answer: "Sim — esse é o uso principal. Reproduza a música e pressione o botão em sincronia com o beat. A leitura atualiza em tempo real após cada tap." },
          { question: "O BPM de uma música muda durante a escuta?", answer: "A maioria das músicas pop, rock e eletrônica mantém um BPM constante. Gravações ao vivo, jazz e música clássica muitas vezes apresentam variações de tempo (accelerando ou ritardando). Se a leitura variar muito enquanto você tapeia, a música provavelmente tem um tempo variável." },
          { question: "Como usar o resultado do BPM com o metrônomo?", answer: "Copie o valor BPM exibido, abra o metrônomo online e insira o mesmo número. Em seguida, pratique a música seguindo o clique do metrônomo na velocidade original." }
        ]
      : isZh
      ? [
          { question: "可以在歌曲播放时使用Tap BPM吗？", answer: "可以——这是主要的使用场景。播放歌曲并随节拍点击按钮。读数在每次点击后实时更新。" },
          { question: "聆听时歌曲的BPM会改变吗？", answer: "大多数流行、摇滚和电子音乐全程保持恒定的BPM。现场录音、爵士乐和古典音乐经常有速度变化（渐快或渐慢）。如果点击时读数变化很大，歌曲可能有可变的速度。" },
          { question: "如何将BPM结果与节拍器一起使用？", answer: "复制显示的BPM值，打开在线节拍器并输入相同的数字。然后按照节拍器以原始速度跟随点击声练习歌曲。" }
        ]
      : isRu
      ? [
          { question: "Можно ли использовать Tap BPM, пока играет песня?", answer: "Да — это основной способ использования. Воспроизведите песню и нажимайте кнопку в такт с битом. Показание обновляется в реальном времени после каждого нажатия." },
          { question: "Меняется ли BPM песни во время прослушивания?", answer: "Большинство поп-, рок- и электронной музыки сохраняет постоянный BPM. Живые записи, джаз и классическая музыка часто имеют изменения темпа (accelerando или ritardando). Если показание сильно колеблется при нажатии, у песни, вероятно, переменный темп." },
          { question: "Как использовать результат BPM с метрономом?", answer: "Скопируйте отображаемое значение BPM, откройте онлайн-метроном и введите то же число. Затем тренируйтесь с песней, следуя щелчку метронома в оригинальном темпе." }
        ]
      : isJa
      ? [
          { question: "曲が再生されている間にTap BPMを使えますか？", answer: "はい——それが主な使用法です。曲を再生してビートに合わせてボタンを押してください。読み取りはタップごとにリアルタイムで更新されます。" },
          { question: "聴いている間に曲のBPMは変わりますか？", answer: "ほとんどのポップ、ロック、電子音楽は全体を通して一定のBPMを保ちます。ライブ録音、ジャズ、クラシック音楽はテンポの変化（アッチェレランドやリタルダンド）を含むことが多いです。タップしている間に読み取りが大きく変動する場合、その曲はテンポが変わっている可能性があります。" },
          { question: "BPMの結果をメトロノームとどう使いますか？", answer: "表示されたBPM値をコピーし、オンラインメトロノームを開いて同じ数字を入力してください。そして元のテンポでメトロノームのクリックに合わせて曲を練習しましょう。" }
        ]
      : isKo
      ? [
          { question: "곡이 재생되는 동안 Tap BPM을 사용할 수 있나요?", answer: "예 — 그것이 주요 사용 사례입니다. 곡을 재생하고 비트에 맞춰 버튼을 탭하세요. 읽기는 각 탭 후 실시간으로 업데이트됩니다." },
          { question: "듣는 동안 곡의 BPM이 변하나요?", answer: "대부분의 팝, 록, 전자 음악은 전체적으로 일정한 BPM을 유지합니다. 라이브 녹음, 재즈, 클래식 음악은 종종 템포 변화(accelerando 또는 ritardando)를 포함합니다. 탭하는 동안 읽기가 크게 변동한다면, 그 곡은 가변 템포를 가질 가능성이 높습니다." },
          { question: "BPM 결과를 메트로놈과 어떻게 사용하나요?", answer: "표시된 BPM 값을 복사하고, 온라인 메트로놈을 열어 같은 숫자를 입력하세요. 그런 다음 원래 속도로 메트로놈 클릭에 따라 곡을 연습하세요." }
        ]
      : isAr
      ? [
          { question: "هل يمكن استخدام Tap BPM أثناء تشغيل الأغنية؟", answer: "نعم — هذا هو الاستخدام الرئيسي. شغّل الأغنية واضغط الزر بتزامن مع النبضة. تتحدث القراءة في الوقت الحقيقي بعد كل نقرة." },
          { question: "هل يتغير BPM الأغنية أثناء الاستماع؟", answer: "تحتفظ معظم موسيقى البوب والروك والإلكترونية بـBPM ثابت طوال الوقت. التسجيلات الحية والجاز والموسيقى الكلاسيكية غالبًا ما تتضمن تغييرات في الإيقاع (تسريع أو تباطؤ). إذا تذبذبت القراءة كثيرًا أثناء النقر، فمن المحتمل أن الأغنية لها إيقاع متغير." },
          { question: "كيف أستخدم نتيجة BPM مع المترونوم؟", answer: "انسخ قيمة BPM المعروضة وافتح المترونوم عبر الإنترنت وأدخل نفس الرقم. ثم تدرب على الأغنية متابعًا صوت النقر بالإيقاع الأصلي." }
        ]
      : [
          { question: "Can I use Tap BPM while a song is playing?", answer: "Yes — that is the primary use case. Play the song and tap the button in sync with the beat. The reading updates in real time after each tap." },
          { question: "Does a song's BPM change while listening?", answer: "Most pop, rock and electronic music holds a constant BPM throughout. Live recordings, jazz and classical music often feature tempo variations (accelerando or ritardando). If the reading fluctuates widely as you tap, the song likely has a variable tempo." },
          { question: "How do I use the BPM result with the metronome?", answer: "Copy the BPM value shown, open the online metronome and enter the same number. Then practice the song following the metronome click at the original speed." }
        ],
    tool: "tap-bpm"
  };
}

function utilityMetronome(locale: Locale): Omit<GuideContent, "targetPath"> {
  const data = {
    de: ["Metronom richtig verwenden", "Übe mit BPM, Akzenten, Taktart und rhythmischen Unterteilungen.", "Ein Metronom baut stabiles Timing auf."],
    en: ["How to use a metronome", "Practice with BPM, accents, meter and rhythmic subdivisions.", "A metronome builds steady timing."],
    es: ["Cómo usar un metrónomo", "Practica con BPM, acentos, compás y subdivisiones rítmicas.", "El metrónomo ayuda a construir un tempo estable."],
    fr: ["Comment utiliser un métronome", "Travaillez avec BPM, accents, mesure et subdivisions rythmiques.", "Un métronome aide à construire un tempo stable."],
    it: ["Come usare il metronomo", "Guida per studiare con BPM, accenti, metrica e suddivisioni ritmiche.", "Il metronomo aiuta a sviluppare un tempo stabile."],
    ja: ["メトロノームの使い方", "BPM、アクセント、拍子、細かなリズムで練習します。", "メトロノームは安定したテンポ感を育てます。"],
    ko: ["메트로놈 사용 방법", "BPM, 악센트, 박자, 리듬 분할로 연습합니다.", "메트로놈은 안정적인 타이밍을 만들어 줍니다."],
    pt: ["Como usar um metrônomo", "Pratique com BPM, acentos, compasso e subdivisões rítmicas.", "O metrônomo ajuda a desenvolver tempo estável."],
    ru: ["Как пользоваться метрономом", "Практикуйте BPM, акценты, размер и ритмические деления.", "Метроном помогает развить стабильный темп."],
    zh: ["如何使用节拍器", "练习 BPM、重音、拍号和节奏细分。", "节拍器可以帮助建立稳定的节奏感。"],
    ar: ["كيفية استخدام الميترونوم", "تدرب على BPM والميزان والنبرات والتقسيمات الإيقاعية.", "يساعد الميترونوم على بناء إحساس ثابت بالوقت."]
  }[getContentLocale(locale)];
  const cl = getContentLocale(locale);
  const isIt = cl === "it";
  const isFr = cl === "fr";
  const isDe = cl === "de";
  const isEs = cl === "es";
  const isPt = cl === "pt";
  const isZh = cl === "zh";
  const isRu = cl === "ru";
  const isJa = cl === "ja";
  const isKo = cl === "ko";
  const isAr = cl === "ar";
  return {
    title: data[0],
    description: data[1],
    intro: data[2],
    keywords: ["online metronome", "music bpm", "metronome practice"],
    steps: isIt
      ? ["Imposta il BPM a un valore lento dove riesci a suonare ogni nota senza errori.", "Scegli il metro: 4/4 per la maggior parte dei brani pop e rock, 3/4 per i valzer, 6/8 per i ballad.", "Premi Start e aspetta due o tre battute prima di iniziare a suonare.", "Suona il passaggio in loop seguendo il click — non fermarti se sbagli.", "Quando esegui il passaggio pulito tre volte di fila, aumenta il BPM di 5.", "Ripeti fino a raggiungere il tempo obiettivo o la velocità del brano originale."]
      : isFr
      ? ["Réglez le BPM à une valeur lente où vous pouvez jouer chaque note sans erreur.", "Choisissez la mesure : 4/4 pour la plupart des morceaux pop et rock, 3/4 pour la valse, 6/8 pour les ballades.", "Appuyez sur Démarrer et attendez deux ou trois mesures avant de jouer.", "Bouclez le passage en suivant le clic — ne vous arrêtez pas en cas d'erreur.", "Quand vous jouez le passage proprement trois fois de suite, augmentez le BPM de 5.", "Répétez jusqu'à atteindre le tempo cible ou la vitesse de l'enregistrement original."]
      : isDe
      ? ["Stelle die BPM auf einen langsamen Wert ein, bei dem du jede Note ohne Fehler spielen kannst.", "Wähle die Taktart: 4/4 für die meisten Pop- und Rocksongs, 3/4 für Walzer, 6/8 für Balladen.", "Drücke Start und warte zwei oder drei Takte, bevor du zu spielen beginnst.", "Wiederhole die Passage im Loop und folge dem Klick — halte bei einem Fehler nicht an.", "Wenn du die Passage dreimal hintereinander sauber spielst, erhöhe die BPM um 5.", "Wiederhole, bis du das Zieltempo oder die Geschwindigkeit der Originalaufnahme erreichst."]
      : isEs
      ? ["Ajusta el BPM a un valor lento donde puedas tocar cada nota sin errores.", "Elige el compás: 4/4 para la mayoría de canciones pop y rock, 3/4 para vals, 6/8 para baladas.", "Pulsa Inicio y espera dos o tres compases antes de empezar a tocar.", "Repite el pasaje siguiendo el clic — no pares si cometes un error.", "Cuando toques el pasaje limpio tres veces seguidas, sube el BPM en 5.", "Repite hasta alcanzar el tempo objetivo o la velocidad de la grabación original."]
      : isPt
      ? ["Ajuste o BPM a um valor lento onde você possa tocar cada nota sem erros.", "Escolha o compasso: 4/4 para a maioria das músicas pop e rock, 3/4 para valsa, 6/8 para baladas.", "Pressione Iniciar e aguarde dois ou três compassos antes de começar a tocar.", "Repita o trecho seguindo o clique — não pare se cometer um erro.", "Quando tocar o trecho limpo três vezes seguidas, aumente o BPM em 5.", "Repita até atingir o tempo desejado ou a velocidade da gravação original."]
      : isZh
      ? ["将BPM设置为一个你能无错演奏每个音符的慢速值。", "选择拍号：大多数流行和摇滚歌曲用4/4，华尔兹用3/4，抒情曲用6/8。", "按开始键，在开始演奏前等待两三小节。", "跟随节拍器循环演奏段落——犯错时不要停下。", "当你连续三次干净地演奏该段落时，将BPM提高5。", "重复直到达到目标速度或原版录音的速度。"]
      : isRu
      ? ["Установите BPM на медленное значение, при котором вы можете играть каждую ноту без ошибок.", "Выберите размер: 4/4 для большинства поп- и рок-песен, 3/4 для вальса, 6/8 для баллад.", "Нажмите Старт и подождите два-три такта перед игрой.", "Повторяйте фрагмент по кругу, следуя клику — не останавливайтесь при ошибке.", "Когда сыграете фрагмент чисто три раза подряд, увеличьте BPM на 5.", "Повторяйте, пока не достигнете целевого темпа или скорости оригинальной записи."]
      : isJa
      ? ["ミスなく全ての音符を演奏できるゆっくりしたBPM値に設定する。", "拍子を選ぶ：ほとんどのポップ・ロック曲は4/4、ワルツは3/4、バラードは6/8。", "スタートを押し、演奏を始める前に2〜3小節待つ。", "クリックに合わせてパッセージをループして演奏する——ミスしても止まらない。", "3回連続でパッセージをきれいに演奏できたら、BPMを5上げる。", "目標テンポまたはオリジナル録音の速さに達するまで繰り返す。"]
      : isKo
      ? ["실수 없이 모든 음표를 연주할 수 있는 느린 BPM 값으로 설정한다.", "박자를 선택한다: 대부분의 팝과 록 곡은 4/4, 왈츠는 3/4, 발라드는 6/8.", "시작을 누르고 연주 시작 전에 두 세 마디를 기다린다.", "클릭에 맞춰 패시지를 루프하여 연주한다 — 실수해도 멈추지 않는다.", "패시지를 연속 세 번 깨끗하게 연주하면 BPM을 5 올린다.", "목표 템포 또는 원본 녹음 속도에 달성할 때까지 반복한다."]
      : isAr
      ? ["اضبط BPM على قيمة بطيئة حيث يمكنك عزف كل نغمة بدون أخطاء.", "اختر الميزان: 4/4 لمعظم أغاني البوب والروك، 3/4 للفالس، 6/8 للبالاد.", "اضغط ابدأ وانتظر مقياسين أو ثلاثة قبل البدء في العزف.", "كرر المقطع مع النقر — لا تتوقف إذا ارتكبت خطأ.", "عندما تعزف المقطع بنظافة ثلاث مرات متتالية، ارفع BPM بمقدار 5.", "كرر حتى تصل إلى الإيقاع المستهدف أو سرعة التسجيل الأصلي."]
      : ["Set the BPM to a slow value where you can play every note without mistakes.", "Choose the meter: 4/4 for most pop and rock songs, 3/4 for waltz, 6/8 for ballads.", "Press Start and wait two or three bars before you start playing.", "Loop the passage following the click — do not stop if you make a mistake.", "When you play the passage cleanly three times in a row, raise the BPM by 5.", "Repeat until you reach the target tempo or the speed of the original recording."],
    sections: isIt
      ? [
          { title: "BPM e metro", body: "BPM significa battiti al minuto e definisce la velocità del pulse. Il metro raggruppa i beat in misure e stabilisce dove cadono gli accenti. In 4/4 ci sono quattro beat per misura con il beat 1 più forte; in 3/4 ce ne sono tre e l'accento cade sul primo, creando l'andamento del valzer. Cambiare il metro sul metronomo è il modo più rapido per percepire questa differenza fisicamente." },
          { title: "Come scegliere il BPM di partenza", body: "La regola d'oro è partire abbastanza lento da suonare ogni nota senza tentennamenti — spesso 50-70% della velocità obiettivo. Non c'è vergogna in un tempo molto basso: studi ricerche sul motor learning mostrano che la memoria muscolare si forma più solidamente quando si pratica lentamente e senza errori. Accelerare troppo presto imprime gli errori invece di cancellarli." },
          { title: "Suddivisioni ritmiche", body: "Le suddivisioni dividono ogni beat in parti uguali: le duine (2), le terzine (3) e le quartine (4). Attivare le suddivisioni sul metronomo riempie lo spazio tra i click principali e rende il tempo interno molto più preciso. È particolarmente utile per i passaggi veloci dove il tempo tende a scomparire tra una nota e l'altra." },
          { title: "Progressione graduale della velocità", body: "Aumenta il BPM solo quando riesci a suonare tre ripetizioni consecutive senza errori. Poi alzalo di 5 BPM e ripeti. Se a un certo punto la qualità cala, torna giù di 10 e ricostruisci. Questo metodo — chiamato pyramiding o speed building — è il più efficace documentato dalla didattica strumentale moderna e si applica a qualsiasi strumento e genere." }
        ]
      : isFr
      ? [
          { title: "BPM et mesure", body: "Le BPM définit la vitesse du pulse en battements par minute. La mesure regroupe ces battements en mesures et détermine où tombent les accents. En 4/4 il y a quatre temps par mesure avec l'accent le plus fort sur le temps 1 ; en 3/4 il y a trois temps avec un accent, créant le balancement de la valse. Changer la mesure sur le métronome est le moyen le plus rapide de ressentir physiquement cette différence." },
          { title: "Comment choisir son BPM de départ", body: "La règle d'or est de partir assez lentement pour jouer chaque note proprement — souvent 50 à 70 % de la vitesse cible. Les recherches sur l'apprentissage moteur montrent que la mémoire musculaire se forme plus solidement en travaillant lentement et avec précision. Se précipiter imprime les erreurs au lieu de les effacer. Aucun raccourci ne fonctionne mieux qu'un travail lent et délibéré." },
          { title: "Subdivisions rythmiques", body: "Les subdivisions divisent chaque temps en parts égales : binaires (2), ternaires (3) et quaternaires (4). Activer les subdivisions sur le métronome remplit l'espace entre les clics principaux et rend votre pulse interne bien plus précise. C'est particulièrement utile pour les passages rapides où le temps tend à disparaître entre les notes et les phrases." },
          { title: "Progression graduelle de la vitesse", body: "N'augmentez le BPM qu'après avoir joué trois répétitions consécutives sans erreur. Montez ensuite de 5 BPM et répétez. Si la qualité baisse à un moment, redescendez de 10 BPM et reconstruisez. Cette méthode — appelée speed pyramiding — est l'une des plus efficaces documentées par la pédagogie instrumentale moderne et s'applique à tout instrument et tout genre." }
        ]
      : isDe
      ? [
          { title: "BPM und Taktart", body: "BPM definiert die Pulsgeschwindigkeit in Schlägen pro Minute. Die Taktart gruppiert diese Schläge in Takte und bestimmt, wo die Akzente liegen. Im 4/4 gibt es vier Schläge pro Takt mit dem stärksten Akzent auf Schlag 1; im 3/4 drei Schläge mit einem Akzent, was das Walzergefühl erzeugt. Die Taktart am Metronom zu ändern ist der schnellste Weg, diesen Unterschied körperlich zu spüren." },
          { title: "Wie du dein Start-BPM wählst", body: "Die goldene Regel ist, langsam genug zu starten, um jede Note sauber zu spielen — oft 50–70 % des Zieltempos. Forschung zum motorischen Lernen zeigt, dass sich Muskelgedächtnis zuverlässiger bildet, wenn man langsam und genau übt. Zu hetzen prägt Fehler ein, statt sie zu löschen. Es gibt keine Abkürzung, die besser funktioniert als langsames, bewusstes Üben." },
          { title: "Rhythmische Unterteilungen", body: "Unterteilungen teilen jeden Schlag in gleiche Teile: Duolen (2), Triolen (3) und Quartolen (4). Unterteilungen am Metronom zu aktivieren füllt den Raum zwischen den Hauptklicks und macht deinen inneren Puls deutlich präziser. Das ist besonders nützlich für schnelle Passagen, in denen der Schlag zwischen Noten und Phrasen zu verschwinden droht." },
          { title: "Schrittweise Tempo-Steigerung", body: "Erhöhe die BPM erst, wenn du drei aufeinanderfolgende Wiederholungen ohne Fehler spielen kannst. Steigere dann um 5 BPM und wiederhole. Sinkt die Qualität, gehe 10 BPM zurück und baue neu auf. Diese Methode — als Speed Pyramiding bekannt — gehört zu den wirksamsten der modernen Instrumentalpädagogik und gilt für jedes Instrument und Genre." }
        ]
      : isEs
      ? [
          { title: "BPM y compás", body: "BPM define la velocidad del pulso en pulsaciones por minuto. El compás agrupa esos tiempos y determina dónde caen los acentos. En 4/4 hay cuatro tiempos por compás con el acento más fuerte en el tiempo 1; en 3/4 hay tres tiempos con un acento, creando el balanceo del vals. Cambiar el compás en el metrónomo es la forma más rápida de sentir físicamente esta diferencia." },
          { title: "Cómo elegir tu BPM de inicio", body: "La regla de oro es empezar suficientemente lento para tocar cada nota limpiamente — a menudo el 50-70% de la velocidad objetivo. Las investigaciones sobre el aprendizaje motor muestran que la memoria muscular se forma de manera más sólida cuando se practica despacio y con precisión. Apresurarse imprime los errores en lugar de eliminarlos." },
          { title: "Subdivisiones rítmicas", body: "Las subdivisiones dividen cada tiempo en partes iguales: duinas (2), tresillos (3) y cuatrillos (4). Activar las subdivisiones en el metrónomo llena el espacio entre los clics principales y hace que tu pulso interno sea mucho más preciso. Es especialmente útil para pasajes rápidos donde el tiempo tiende a desaparecer entre notas y frases." },
          { title: "Progresión gradual de la velocidad", body: "Aumenta el BPM solo cuando puedas tocar tres repeticiones consecutivas sin errores. Luego sube 5 BPM y repite. Si la calidad baja en algún momento, retrocede 10 BPM y reconstruye. Este método — conocido como speed pyramiding — es uno de los más eficaces documentados por la pedagogía instrumental moderna y se aplica a cualquier instrumento y género." }
        ]
      : isPt
      ? [
          { title: "BPM e compasso", body: "BPM define a velocidade do pulso em batidas por minuto. O compasso agrupa essas batidas em compassos e determina onde caem os acentos. Em 4/4 há quatro batidas por compasso com o acento mais forte no tempo 1; em 3/4 há três batidas com um acento, criando a sensação de valsa. Mudar o compasso no metrônomo é a forma mais rápida de sentir fisicamente essa diferença." },
          { title: "Como escolher seu BPM inicial", body: "A regra de ouro é começar devagar o suficiente para tocar cada nota limpa — geralmente 50-70% da velocidade alvo. Pesquisas sobre aprendizagem motora mostram que a memória muscular se forma de forma mais confiável quando se pratica devagar e com precisão. Apressar-se imprime erros em vez de apagá-los." },
          { title: "Subdivisões rítmicas", body: "Subdivisões dividem cada tempo em partes iguais: duínas (2), tercinas (3) e quartinas (4). Ativar subdivisões no metrônomo preenche o espaço entre os cliques principais e torna seu pulso interno muito mais preciso. Isso é especialmente útil para trechos rápidos onde o tempo tende a desaparecer entre notas e frases." },
          { title: "Progressão gradual de velocidade", body: "Aumente o BPM somente quando puder tocar três repetições consecutivas sem erros. Então aumente 5 BPM e repita. Se a qualidade cair, volte 10 BPM e reconstrua. Este método — conhecido como speed pyramiding — está entre os mais eficazes documentados pela pedagogia instrumental moderna e se aplica a qualquer instrumento e gênero." }
        ]
      : isZh
      ? [
          { title: "BPM和拍号", body: "BPM以每分钟节拍数定义脉冲速度。拍号将节拍分组成小节并决定重音落在哪里。在4/4中每小节有四拍，第1拍重音最强；在3/4中有三拍一个重音，营造华尔兹感觉。在节拍器上改变拍号是最快感受这种差异的方式。" },
          { title: "如何选择起始BPM", body: "黄金法则是从慢到足以干净演奏每个音符的速度开始——通常是目标速度的50-70%。运动学习研究表明，慢速精确练习时肌肉记忆形成更可靠。急于求成会将错误印入而非消除。没有比慢速刻意练习更有效的捷径。" },
          { title: "节奏细分", body: "细分将每拍分成相等部分：二连音（2）、三连音（3）和四连音（4）。在节拍器上启用细分填充主要节拍之间的空间，使你的内部脉冲更加精确。这对于节拍容易在音符和短句之间消失的快速段落特别有用。" },
          { title: "渐进速度提升", body: "只有在能连续三次无错演奏时才提高BPM。然后提高5 BPM并重复。如果质量下降，回退10 BPM重新建立。这种方法——称为速度金字塔——是现代乐器教学中记录的最有效方法之一，适用于任何乐器和流派。" }
        ]
      : isRu
      ? [
          { title: "BPM и размер", body: "BPM определяет скорость пульса в ударах в минуту. Размер группирует удары в такты и определяет, где ставятся акценты. В 4/4 четыре удара на такт с сильнейшим акцентом на 1-й доле; в 3/4 три удара с одним акцентом, создающим ощущение вальса. Изменение размера на метрономе — самый быстрый способ физически ощутить эту разницу." },
          { title: "Как выбрать начальный BPM", body: "Золотое правило — начинать достаточно медленно, чтобы играть каждую ноту чисто — часто 50–70% целевой скорости. Исследования двигательного обучения показывают, что мышечная память формируется надёжнее при медленной и точной игре. Спешка закрепляет ошибки вместо того, чтобы их стирать. Нет ярлыка, работающего лучше медленной осознанной практики." },
          { title: "Ритмические деления", body: "Деления делят каждую долю на равные части: дуоли (2), триоли (3) и квартоли (4). Включение делений на метрономе заполняет пространство между основными клики и делает внутренний пульс намного точнее. Это особенно полезно для быстрых пассажей, где доли исчезают между нотами и фразами." },
          { title: "Постепенное наращивание темпа", body: "Увеличивайте BPM только после трёх последовательных безошибочных повторений. Затем поднимайте на 5 BPM и повторяйте. Если качество падает, откатитесь на 10 BPM и начните заново. Этот метод — известный как speed pyramiding — один из наиболее эффективных, задокументированных современной инструментальной педагогикой, и применим к любому инструменту и жанру." }
        ]
      : isJa
      ? [
          { title: "BPMと拍子", body: "BPMはビートパーミニットで脈拍速度を定義します。拍子はビートを小節にグループ化し、アクセントがどこに落ちるかを決定します。4/4は1拍目に最も強いアクセントが入る4拍子；3/4は1つのアクセントで3拍のワルツ感を作ります。メトロノームで拍子を変えるのが、この違いを体感する最速の方法です。" },
          { title: "開始BPMの選び方", body: "黄金のルールは、全ての音符をミスなく演奏できるくらい十分ゆっくりから始めること——目標速度の50〜70%が多いです。運動学習の研究では、ゆっくり正確に練習するほど筋肉記憶が確実に形成されることが示されています。急ぐとミスを消すのではなく定着させてしまいます。" },
          { title: "リズムの細分化", body: "細分化は各ビートを均等部分に分けます：二連符（2）、三連符（3）、四連符（4）。メトロノームで細分化を有効にすると主要なクリック間の空間が埋まり、内部パルスがより精確になります。これはビートが音符やフレーズの間に消えやすい速いパッセージに特に役立ちます。" },
          { title: "徐々に速度を上げる方法", body: "3回連続してミスなく演奏できてはじめてBPMを上げましょう。次に5 BPM上げて繰り返します。質が落ちたら10 BPM下げ直します。このメソッド——スピードピラミッドとして知られる——は現代の楽器教育で最も効果的として記録された方法の一つで、あらゆる楽器・ジャンルに適用できます。" }
        ]
      : isKo
      ? [
          { title: "BPM과 박자", body: "BPM은 분당 비트 수로 펄스 속도를 정의합니다. 박자는 비트를 마디로 그룹화하고 악센트가 어디에 떨어지는지 결정합니다. 4/4에서는 마디당 네 박자가 있고 1박자에 가장 강한 악센트가 있습니다; 3/4에서는 하나의 악센트로 왈츠 느낌을 만드는 세 박자가 있습니다. 메트로놈에서 박자를 바꾸는 것이 이 차이를 물리적으로 느끼는 가장 빠른 방법입니다." },
          { title: "시작 BPM 선택 방법", body: "황금 법칙은 실수 없이 모든 음표를 깨끗하게 연주할 수 있는 만큼 충분히 느리게 시작하는 것입니다 — 목표 속도의 50-70%가 많습니다. 운동 학습 연구에 따르면 천천히 정확하게 연습할 때 근육 기억이 더 안정적으로 형성됩니다. 서두르면 실수가 지워지는 대신 새겨집니다." },
          { title: "리듬 세분화", body: "세분화는 각 박자를 동등한 부분으로 나눕니다: 2연음(2), 3연음(3), 4연음(4). 메트로놈에서 세분화를 활성화하면 주요 클릭 사이의 공간이 채워지고 내부 펄스가 훨씬 더 정확해집니다. 이것은 박자가 음표와 구절 사이에 사라지기 쉬운 빠른 패시지에 특히 유용합니다." },
          { title: "점진적인 속도 향상", body: "실수 없이 세 번 연속으로 패시지를 연주할 수 있을 때만 BPM을 올리세요. 그런 다음 5 BPM을 올리고 반복하세요. 어느 시점에서 품질이 떨어지면 10 BPM을 내리고 다시 쌓으세요. 이 방법 — 스피드 피라미딩으로 알려진 — 은 현대 악기 교육에서 기록된 가장 효과적인 방법 중 하나이며 모든 악기와 장르에 적용됩니다." }
        ]
      : isAr
      ? [
          { title: "BPM والميزان", body: "يحدد BPM سرعة النبضة بالنبضات في الدقيقة. يجمع الميزان تلك النبضات في مقاطع ويحدد أين تقع النبرات. في 4/4 هناك أربع نبضات لكل مقطع مع أقوى نبرة على النبضة 1؛ في 3/4 هناك ثلاث نبضات بنبرة واحدة تخلق إيقاع الفالس. تغيير الميزان على المترونوم هو أسرع طريقة لإحساس هذا الفرق جسديًا." },
          { title: "كيفية اختيار BPM البداية", body: "القاعدة الذهبية هي البدء ببطء كافٍ لعزف كل نغمة بنظافة — غالبًا 50-70% من السرعة المستهدفة. تُظهر أبحاث التعلم الحركي أن ذاكرة العضلات تتشكل بشكل أكثر موثوقية عند التدرب ببطء ودقة. التسرع يطبع الأخطاء بدلًا من محوها." },
          { title: "التقسيمات الإيقاعية", body: "تقسم التقسيمات كل نبضة إلى أجزاء متساوية: ثنائيات (2) وثلاثيات (3) ورباعيات (4). تفعيل التقسيمات على المترونوم يملأ الفراغ بين النقرات الرئيسية ويجعل نبضتك الداخلية أكثر دقة. هذا مفيد بشكل خاص للمقاطع السريعة حيث تميل النبضة إلى الاختفاء بين النغمات والعبارات." },
          { title: "تدرج السرعة تدريجيًا", body: "ارفع BPM فقط بعد أن تتمكن من عزف ثلاث تكرارات متتالية بدون أخطاء. ثم ارفعه 5 BPM وكرر. إذا انخفض الجودة في أي نقطة، انزل 10 BPM وأعد البناء. هذه الطريقة — المعروفة بـ speed pyramiding — من بين الأكثر فعالية التي وثقتها التربية الآلية الحديثة وتنطبق على أي آلة وأسلوب." }
        ]
      : [
          { title: "BPM and meter", body: "BPM defines the pulse speed in beats per minute. Meter groups those beats into bars and determines where the accents fall. In 4/4 there are four beats per bar with the strongest accent on beat 1; in 3/4 there are three beats with one accent, creating the waltz feel. Changing the meter on the metronome is the fastest way to physically feel this difference." },
          { title: "How to choose your starting BPM", body: "The golden rule is to start slow enough to play every note cleanly — often 50–70% of the target speed. Research on motor learning shows that muscle memory forms more reliably when practicing slowly and accurately. Rushing ahead imprints mistakes instead of erasing them. There is no shortcut that works better than slow, deliberate practice." },
          { title: "Rhythmic subdivisions", body: "Subdivisions divide each beat into equal parts: duplets (2), triplets (3) and quadruplets (4). Enabling subdivisions on the metronome fills the space between main clicks and makes your internal pulse much more precise. This is especially useful for fast passages where the beat tends to disappear between notes and phrases." },
          { title: "Gradual speed progression", body: "Increase BPM only after you can play three consecutive repetitions without mistakes. Then raise by 5 BPM and repeat. If quality drops at any point, go back down 10 BPM and rebuild. This method — known as speed pyramiding — is among the most effective documented by modern instrumental pedagogy and applies to any instrument and genre." }
        ],
    faq: isIt
      ? [
          { question: "A che BPM dovrebbe iniziare un principiante?", answer: "Inizia al BPM più basso che ti permette di suonare ogni nota senza errori — spesso 40-60 BPM per i passaggi difficili. Non esiste un BPM 'troppo lento': l'obiettivo è costruire la memoria muscolare corretta prima di aumentare la velocità." },
          { question: "Posso usare il metronomo per tutti gli strumenti?", answer: "Sì. Il metronomo è uno strumento universale usato da chitarristi, pianisti, batteristi, violinisti e cantanti. Qualsiasi musicista che vuole migliorare il timing e la precisione ritmica beneficia del lavoro col metronomo." },
          { question: "Qual è la differenza tra metronomo e click track?", answer: "Il metronomo è uno strumento standalone che produce un click a BPM costante. Il click track è la versione digitale usata in studio di registrazione e live — essenzialmente la stessa cosa inserita nel flusso di lavoro audio. TuneUniversal funziona come metronomo standalone." }
        ]
      : isFr
      ? [
          { question: "À quel BPM un débutant doit-il commencer ?", answer: "Commencez au BPM le plus bas qui vous permet de jouer chaque note sans erreur — souvent 40 à 60 BPM pour les passages difficiles. Il n'existe pas de tempo « trop lent » : l'objectif est de construire la bonne mémoire musculaire avant d'accélérer." },
          { question: "Puis-je utiliser le métronome pour tous les instruments ?", answer: "Oui. Le métronome est un outil universel utilisé par les guitaristes, pianistes, batteurs, violonistes et chanteurs. Tout musicien souhaitant améliorer son timing et sa précision rythmique profite du travail au métronome." },
          { question: "Quelle est la différence entre un métronome et un click track ?", answer: "Un métronome est un outil autonome produisant un clic à BPM constant. Le click track est la version numérique utilisée en studio et en live — essentiellement la même chose intégrée à un flux audio. TuneUniversal fonctionne comme métronome autonome." }
        ]
      : isDe
      ? [
          { question: "Bei welcher BPM sollte ein Anfänger starten?", answer: "Starte bei der niedrigsten BPM, bei der du jede Note ohne Fehler spielen kannst — oft 40–60 BPM für schwierige Passagen. Es gibt kein 'zu langsam': Ziel ist es, das korrekte Muskelgedächtnis aufzubauen, bevor du das Tempo erhöhst." },
          { question: "Kann ich das Metronom für jedes Instrument nutzen?", answer: "Ja. Das Metronom ist ein universelles Werkzeug, das von Gitarristen, Pianisten, Schlagzeugern, Geigern und Sängern genutzt wird. Jeder Musiker, der Timing und rhythmische Präzision verbessern will, profitiert vom Üben mit dem Metronom." },
          { question: "Was ist der Unterschied zwischen Metronom und Click Track?", answer: "Ein Metronom ist ein eigenständiges Gerät oder Tool, das einen Klick mit konstanter BPM erzeugt. Ein Click Track ist die digitale Version, die in Aufnahmestudios und Live-Setups genutzt wird — im Grunde dasselbe, eingebettet in einen Audio-Workflow. TuneUniversal arbeitet als eigenständiges Metronom." }
        ]
      : isEs
      ? [
          { question: "¿A qué BPM debería empezar un principiante?", answer: "Empieza al BPM más bajo que te permita tocar cada nota sin errores — a menudo 40-60 BPM para pasajes difíciles. No existe un tempo 'demasiado lento': el objetivo es construir la memoria muscular correcta antes de aumentar la velocidad." },
          { question: "¿Puedo usar el metrónomo para cualquier instrumento?", answer: "Sí. El metrónomo es una herramienta universal usada por guitarristas, pianistas, bateristas, violinistas y cantantes. Cualquier músico que quiera mejorar el timing y la precisión rítmica se beneficia de practicar con metrónomo." },
          { question: "¿Cuál es la diferencia entre un metrónomo y un click track?", answer: "Un metrónomo es un dispositivo o herramienta independiente que produce un clic a BPM constante. Un click track es la versión digital usada en estudios de grabación y en directo — esencialmente lo mismo integrado en un flujo de trabajo de audio. TuneUniversal funciona como metrónomo independiente." }
        ]
      : isPt
      ? [
          { question: "Em qual BPM um iniciante deve começar?", answer: "Comece no BPM mais baixo que permite tocar cada nota sem erros — geralmente 40-60 BPM para trechos difíceis. Não existe 'muito lento': o objetivo é construir a memória muscular correta antes de aumentar a velocidade." },
          { question: "Posso usar o metrônomo para qualquer instrumento?", answer: "Sim. O metrônomo é uma ferramenta universal usada por guitarristas, pianistas, bateristas, violinistas e vocalistas. Qualquer músico que queira melhorar o timing e a precisão rítmica se beneficia de praticar com metrônomo." },
          { question: "Qual é a diferença entre um metrônomo e um click track?", answer: "Um metrônomo é um dispositivo ou ferramenta autônoma que produz um clique a BPM constante. Um click track é a versão digital usada em estúdios de gravação e shows ao vivo — essencialmente a mesma coisa integrada a um fluxo de trabalho de áudio. TuneUniversal funciona como metrônomo autônomo." }
        ]
      : isZh
      ? [
          { question: "初学者应该从什么BPM开始？", answer: "从允许你无错演奏每个音符的最低BPM开始——对于困难段落通常是40-60 BPM。没有'太慢'这一说：目标是在提速之前建立正确的肌肉记忆。" },
          { question: "我可以用节拍器练习任何乐器吗？", answer: "是的。节拍器是吉他手、钢琴家、鼓手、小提琴手和歌手都使用的通用工具。任何想要提高节奏感和节奏精确性的音乐家都能从节拍器练习中受益。" },
          { question: "节拍器和点击轨道有什么区别？", answer: "节拍器是一个产生恒定BPM节拍的独立设备或工具。点击轨道是录音室和现场演出中使用的数字版本——本质上是同样的东西嵌入到音频工作流程中。TuneUniversal作为独立节拍器运行。" }
        ]
      : isRu
      ? [
          { question: "С какого BPM начинать новичку?", answer: "Начните с самого низкого BPM, при котором можно играть каждую ноту без ошибок — часто 40–60 BPM для сложных пассажей. Не существует понятия 'слишком медленно': цель — сформировать правильную мышечную память перед увеличением темпа." },
          { question: "Можно ли использовать метроном для любого инструмента?", answer: "Да. Метроном — универсальный инструмент, используемый гитаристами, пианистами, барабанщиками, скрипачами и вокалистами. Любой музыкант, желающий улучшить чувство ритма и точность, извлечёт пользу из занятий с метрономом." },
          { question: "В чём разница между метрономом и клик-треком?", answer: "Метроном — отдельный прибор или инструмент, производящий клик с постоянным BPM. Клик-трек — цифровая версия, используемая в студиях и на живых выступлениях — по существу то же самое, встроенное в аудиорабочий процесс. TuneUniversal работает как автономный метроном." }
        ]
      : isJa
      ? [
          { question: "初心者は何BPMから始めるべきですか？", answer: "全ての音符をミスなく演奏できる最低BPMから始めましょう——難しいパッセージでは40〜60 BPMが多いです。'遅すぎる'はありません：目標は速度を上げる前に正しい筋肉記憶を構築することです。" },
          { question: "どんな楽器にもメトロノームを使えますか？", answer: "はい。メトロノームはギタリスト、ピアニスト、ドラマー、バイオリニスト、ボーカリストが使う万能ツールです。タイミングとリズムの精度を向上させたいすべての音楽家がメトロノーム練習から恩恵を受けます。" },
          { question: "メトロノームとクリックトラックの違いは？", answer: "メトロノームは一定のBPMでクリックを生成するスタンドアロンのデバイスまたはツールです。クリックトラックはレコーディングスタジオやライブで使用されるデジタル版——本質的に同じものがオーディオワークフローに組み込まれています。TuneUniversalはスタンドアロンのメトロノームとして機能します。" }
        ]
      : isKo
      ? [
          { question: "초보자는 어떤 BPM에서 시작해야 하나요?", answer: "실수 없이 모든 음표를 연주할 수 있는 가장 낮은 BPM에서 시작하세요 — 어려운 패시지에서는 40-60 BPM이 많습니다. '너무 느린' 것은 없습니다: 목표는 속도를 높이기 전에 올바른 근육 기억을 구축하는 것입니다." },
          { question: "모든 악기에 메트로놈을 사용할 수 있나요?", answer: "예. 메트로놈은 기타리스트, 피아니스트, 드러머, 바이올리니스트, 보컬리스트가 사용하는 범용 도구입니다. 타이밍과 리듬 정확도를 향상시키고 싶은 모든 음악가가 메트로놈 연습으로 혜택을 받습니다." },
          { question: "메트로놈과 클릭 트랙의 차이점은 무엇인가요?", answer: "메트로놈은 일정한 BPM으로 클릭을 생성하는 독립형 장치 또는 도구입니다. 클릭 트랙은 녹음 스튜디오와 라이브 공연에서 사용되는 디지털 버전 — 본질적으로 오디오 워크플로우에 내장된 같은 것입니다. TuneUniversal은 독립형 메트로놈으로 작동합니다." }
        ]
      : isAr
      ? [
          { question: "من أين يبدأ BPM للمبتدئين؟", answer: "ابدأ بأقل BPM يتيح لك عزف كل نغمة بدون أخطاء — غالبًا 40-60 BPM للمقاطع الصعبة. لا يوجد شيء اسمه 'بطيء جدًا': الهدف هو بناء ذاكرة العضلات الصحيحة قبل زيادة السرعة." },
          { question: "هل يمكن استخدام المترونوم لأي آلة موسيقية؟", answer: "نعم. المترونوم أداة عالمية يستخدمها عازفو الجيتار والبيانو والطبول والكمان والمغنون. أي موسيقي يريد تحسين التوقيت والدقة الإيقاعية يستفيد من التدرب بالمترونوم." },
          { question: "ما الفرق بين المترونوم وclicktrack؟", answer: "المترونوم جهاز أو أداة مستقلة تنتج نقرة بـBPM ثابت. الـclick track هو النسخة الرقمية المستخدمة في استوديوهات التسجيل والعروض الحية — في الأساس نفس الشيء مدمج في سير عمل صوتي. TuneUniversal يعمل كمترونوم مستقل." }
        ]
      : [
          { question: "What BPM should a beginner start at?", answer: "Start at the lowest BPM that lets you play every note without mistakes — often 40–60 BPM for difficult passages. There is no such thing as 'too slow': the goal is to build correct muscle memory before increasing speed." },
          { question: "Can I use the metronome for any instrument?", answer: "Yes. The metronome is a universal tool used by guitarists, pianists, drummers, violinists and vocalists. Any musician who wants to improve timing and rhythmic precision benefits from metronome practice." },
          { question: "What is the difference between a metronome and a click track?", answer: "A metronome is a standalone device or tool producing a click at a constant BPM. A click track is the digital version used in recording studios and live rigs — essentially the same thing embedded into an audio workflow. TuneUniversal operates as a standalone metronome." }
        ],
    tool: "metronome"
  };
}

function standardBassUtility(locale: Locale): Omit<GuideContent, "targetPath"> {
  const label = getInstrumentLabel("bass", locale);
  const tuning = tuningString("bass", locale);
  const copy = tuningGuideCopy[getContentLocale(locale)];
  const targetPath = targetPathForInstrument("bass");
  return {
    description: copy.description(label, tuning),
    faq: genericInstrumentFaq(locale, label, tuning),
    intro: copy.intro(label, tuning),
    keywords: [...copy.keywords(label, tuning), tuning, "standard bass tuning", "TuneUniversal"],
    noteRows: noteRowsFromNotes(tunings.bass, locale),
    relatedGuides: ["how-to-tune-bass", "five-string-bass-tuning"],
    relatedTools: relatedToolsForGuide(locale, "bass-tuner", targetPath),
    sections: copy.sections(label, tuning),
    steps: copy.steps(label),
    commonMistakes: genericMistakes(locale, label),
    targetDescription: copy.description(label, tuning),
    targetTitle: copy.targetTitle(label),
    title:
      locale === "it"
        ? "Accordatura basso standard"
        : locale === "fr"
          ? "Accordage standard de la basse"
          : locale === "es"
            ? "Afinación estándar del bajo"
            : locale === "pt"
              ? "Afinação padrão do baixo"
              : locale === "de"
                ? "Standardstimmung für Bass"
                : locale === "ru"
                  ? "Стандартный строй бас-гитары"
                  : locale === "zh"
                    ? "贝斯标准调弦"
                    : locale === "ja"
                      ? "ベースの標準チューニング"
                      : locale === "ko"
                        ? "표준 베이스 튜닝"
                        : locale === "ar"
                          ? "ضبط الباس القياسي"
                          : "Standard bass tuning",
    tool: "bass-tuner"
  };
}

const alternativeTuningGuides: Record<
  AlternativeTuningGuideSlug,
  { instrument: Instrument; presetId: string; label: string }
> = {
  "standard-guitar-tuning": { instrument: "guitar", presetId: "standard", label: "Standard" },
  "eb-standard-tuning": { instrument: "guitar", presetId: "half-step-down", label: "Eb Standard" },
  "half-step-down-tuning": { instrument: "guitar", presetId: "half-step-down", label: "Half Step Down" },
  "d-standard-tuning": { instrument: "guitar", presetId: "whole-step-down", label: "D Standard" },
  "full-step-down-tuning": { instrument: "guitar", presetId: "whole-step-down", label: "Full Step Down" },
  "drop-d-tuning": { instrument: "guitar", presetId: "drop-d", label: "Drop D" },
  "drop-d-sharp-tuning": { instrument: "guitar", presetId: "drop-d-sharp", label: "Drop D#" },
  "drop-c-sharp-tuning": { instrument: "guitar", presetId: "drop-c-sharp", label: "Drop C#" },
  "drop-c-tuning": { instrument: "guitar", presetId: "drop-c", label: "Drop C" },
  "open-d-tuning": { instrument: "guitar", presetId: "open-d", label: "Open D" },
  "open-g-tuning": { instrument: "guitar", presetId: "open-g", label: "Open G" },
  "dadgad-tuning": { instrument: "guitar", presetId: "dadgad", label: "DADGAD" },
  "ukulele-standard-tuning": { instrument: "ukulele", presetId: "standard", label: "Ukulele Standard" },
  "baritone-ukulele-tuning": { instrument: "ukulele", presetId: "baritone", label: "Baritone Ukulele" },
  "violin-standard-tuning": { instrument: "violin", presetId: "standard", label: "Violin Standard" },
  "mandolin-standard-tuning": { instrument: "mandolin", presetId: "standard", label: "Mandolin Standard" },
  "banjo-open-g-tuning": { instrument: "banjo", presetId: "open-g", label: "Banjo Open G" },
  "drop-a-7-string-tuning": { instrument: "7-string-guitar", presetId: "drop-a", label: "Drop A" },
  "drop-e-8-string-tuning": { instrument: "8-string-guitar", presetId: "drop-e", label: "Drop E" },
  "low-g-ukulele-tuning": { instrument: "ukulele", presetId: "low-g", label: "Low G" },
  "d-ukulele-tuning": { instrument: "ukulele", presetId: "d-tuning", label: "D tuning" },
  "double-c-banjo-tuning": { instrument: "banjo", presetId: "double-c", label: "Double C" },
  "sawmill-banjo-tuning": { instrument: "banjo", presetId: "sawmill", label: "Sawmill" },
  "five-string-bass-tuning": { instrument: "bass", presetId: "five-string", label: "5-string low B" }
};

const alternativeTuningLabels: Record<
  BaseLocale,
  {
    description: (name: string, instrument: string, tuning: string) => string;
    intro: (name: string, instrument: string, tuning: string) => string;
    keywords: (name: string, instrument: string, tuning: string) => string[];
    referenceTitle: string;
    setupTitle: string;
    steps: (name: string, instrument: string) => string[];
    targetTitle: (name: string, instrument: string) => string;
    title: (name: string, instrument: string) => string;
  }
> = {
  ar: {
    title: (name, instrument) => `ضبط ${name} لـ ${instrument}`,
    description: (name, instrument, tuning) => `دليل ضبط ${instrument} على ${name}. النغمات: ${tuning}.`,
    intro: (name, instrument, tuning) => `استخدم هذا الدليل لضبط ${instrument} على ${name}. افتح الموالف، اختر الآلة والضبط المناسب، ثم اتبع النغمات: ${tuning}.`,
    steps: (name, instrument) => [`افتح موالف ${instrument}.`, `اختر ضبط ${name} إن كان متاحا.`, "اعزف وترا واحدا في كل مرة.", "اضبط حتى يصبح المؤشر في الوسط."],
    referenceTitle: "النغمات",
    setupTitle: "متى يستخدم",
    keywords: (name, instrument, tuning) => [`ضبط ${name}`, `موالف ${instrument}`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `موالف ${instrument} - ${name}`
  },
  de: {
    title: (name, instrument) => `${name} Stimmung für ${instrument}`,
    description: (name, instrument, tuning) => `Guide für ${instrument} in ${name}. Referenznoten: ${tuning}.`,
    intro: (name, instrument, tuning) => `Diese Anleitung zeigt die ${name} Stimmung für ${instrument}. Öffne den Tuner, wähle das Instrument und stimme nach diesen Noten: ${tuning}.`,
    steps: (name, instrument) => [`Öffne den ${instrument}-Tuner.`, `Wähle ${name}, falls der Preset sichtbar ist.`, "Spiele eine Saite nach der anderen.", "Stimme, bis die Anzeige mittig steht."],
    referenceTitle: "Referenznoten",
    setupTitle: "Einsatz",
    keywords: (name, instrument, tuning) => [`${name} stimmung`, `${instrument} stimmen`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `${instrument} Tuner - ${name}`
  },
  en: {
    title: (name, instrument) => `${name} tuning for ${instrument}`,
    description: (name, instrument, tuning) => `Learn ${name} tuning for ${instrument}. Reference notes: ${tuning}.`,
    intro: (name, instrument, tuning) => `Use this guide to tune ${instrument} in ${name}. Open the tuner, select the instrument and match these notes: ${tuning}.`,
    steps: (name, instrument) => [`Open the ${instrument} tuner.`, `Select ${name} if the preset is available.`, "Play one string at a time.", "Tune until the needle is centered."],
    referenceTitle: "Reference notes",
    setupTitle: "When to use it",
    keywords: (name, instrument, tuning) => [`${name} tuning`, `${instrument} tuner`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `${instrument} tuner - ${name}`
  },
  es: {
    title: (name, instrument) => `Afinación ${name} para ${instrument}`,
    description: (name, instrument, tuning) => `Guía de afinación ${name} para ${instrument}. Notas: ${tuning}.`,
    intro: (name, instrument, tuning) => `Usa esta guía para afinar ${instrument} en ${name}. Abre el afinador, selecciona el instrumento y ajusta estas notas: ${tuning}.`,
    steps: (name, instrument) => [`Abre el afinador de ${instrument}.`, `Elige ${name} si el preset está disponible.`, "Toca una cuerda cada vez.", "Ajusta hasta centrar el indicador."],
    referenceTitle: "Notas de referencia",
    setupTitle: "Cuándo usarla",
    keywords: (name, instrument, tuning) => [`afinación ${name}`, `afinador ${instrument}`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `Afinador de ${instrument} - ${name}`
  },
  fr: {
    title: (name, instrument) => `Accordage ${name} pour ${instrument}`,
    description: (name, instrument, tuning) => `Guide d'accordage ${name} pour ${instrument}. Notes : ${tuning}.`,
    intro: (name, instrument, tuning) => `Utilisez ce guide pour accorder ${instrument} en ${name}. Ouvrez l'accordeur, sélectionnez l'instrument et suivez ces notes : ${tuning}.`,
    steps: (name, instrument) => [`Ouvrez l'accordeur ${instrument}.`, `Choisissez ${name} si le preset est disponible.`, "Jouez une corde à la fois.", "Ajustez jusqu'à ce que l'aiguille soit centrée."],
    referenceTitle: "Notes de référence",
    setupTitle: "Quand l'utiliser",
    keywords: (name, instrument, tuning) => [`accordage ${name}`, `accordeur ${instrument}`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `Accordeur ${instrument} - ${name}`
  },
  it: {
    title: (name, instrument) => `Accordatura ${name} per ${instrument}`,
    description: (name, instrument, tuning) => `Guida all'accordatura ${name} per ${instrument}. Note di riferimento: ${tuning}.`,
    intro: (name, instrument, tuning) => `Usa questa guida per accordare ${instrument} in ${name}. Apri l'accordatore, seleziona lo strumento e segui queste note: ${tuning}.`,
    steps: (name, instrument) => [`Apri l'accordatore per ${instrument}.`, `Seleziona ${name} se il preset è disponibile.`, "Suona una corda alla volta.", "Regola finché la lancetta è al centro."],
    referenceTitle: "Note di riferimento",
    setupTitle: "Quando usarla",
    keywords: (name, instrument, tuning) => [`accordatura ${name}`, `accordatore ${instrument}`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `Accordatore ${instrument} - ${name}`
  },
  ja: {
    title: (name, instrument) => `${instrument}の${name}チューニング`,
    description: (name, instrument, tuning) => `${instrument}を${name}で調整するガイド。基準音: ${tuning}。`,
    intro: (name, instrument, tuning) => `${instrument}を${name}にチューニングするためのガイドです。チューナーを開き、楽器を選び、${tuning} に合わせます。`,
    steps: (name, instrument) => [`${instrument}チューナーを開きます。`, `${name}プリセットがあれば選びます。`, "1本ずつ弦を鳴らします。", "針が中央になるまで調整します。"],
    referenceTitle: "基準音",
    setupTitle: "使いどころ",
    keywords: (name, instrument, tuning) => [`${name} チューニング`, `${instrument} チューナー`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `${instrument}チューナー - ${name}`
  },
  ko: {
    title: (name, instrument) => `${instrument} ${name} 튜닝`,
    description: (name, instrument, tuning) => `${instrument}의 ${name} 튜닝 가이드입니다. 기준 음: ${tuning}.`,
    intro: (name, instrument, tuning) => `${instrument}를 ${name}로 맞추는 가이드입니다. 튜너를 열고 악기를 선택한 뒤 ${tuning}에 맞춥니다.`,
    steps: (name, instrument) => [`${instrument} 튜너를 엽니다.`, `${name} 프리셋이 있으면 선택합니다.`, "현을 하나씩 연주합니다.", "바늘이 중앙에 올 때까지 조율합니다."],
    referenceTitle: "기준 음",
    setupTitle: "사용 시점",
    keywords: (name, instrument, tuning) => [`${name} 튜닝`, `${instrument} 튜너`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `${instrument} 튜너 - ${name}`
  },
  pt: {
    title: (name, instrument) => `Afinação ${name} para ${instrument}`,
    description: (name, instrument, tuning) => `Guia de afinação ${name} para ${instrument}. Notas: ${tuning}.`,
    intro: (name, instrument, tuning) => `Use este guia para afinar ${instrument} em ${name}. Abra o afinador, selecione o instrumento e siga estas notas: ${tuning}.`,
    steps: (name, instrument) => [`Abra o afinador de ${instrument}.`, `Escolha ${name} se o preset estiver disponível.`, "Toque uma corda por vez.", "Ajuste até o indicador ficar no centro."],
    referenceTitle: "Notas de referência",
    setupTitle: "Quando usar",
    keywords: (name, instrument, tuning) => [`afinação ${name}`, `afinador ${instrument}`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `Afinador de ${instrument} - ${name}`
  },
  ru: {
    title: (name, instrument) => `Строй ${name} для ${instrument}`,
    description: (name, instrument, tuning) => `Руководство по строю ${name} для ${instrument}. Ноты: ${tuning}.`,
    intro: (name, instrument, tuning) => `Используйте это руководство, чтобы настроить ${instrument} в ${name}. Откройте тюнер, выберите инструмент и настройте ноты: ${tuning}.`,
    steps: (name, instrument) => [`Откройте тюнер ${instrument}.`, `Выберите ${name}, если пресет доступен.`, "Играйте по одной струне.", "Настраивайте, пока стрелка не будет в центре."],
    referenceTitle: "Опорные ноты",
    setupTitle: "Когда использовать",
    keywords: (name, instrument, tuning) => [`строй ${name}`, `тюнер ${instrument}`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `Тюнер ${instrument} - ${name}`
  },
  zh: {
    title: (name, instrument) => `${instrument} ${name} 调弦`,
    description: (name, instrument, tuning) => `${instrument} 的 ${name} 调弦指南。参考音：${tuning}。`,
    intro: (name, instrument, tuning) => `使用本指南将 ${instrument} 调为 ${name}。打开调音器，选择乐器，并按照这些音调弦：${tuning}。`,
    steps: (name, instrument) => [`打开 ${instrument} 调音器。`, `如果有 ${name} 预设，请选择它。`, "一次弹奏一根弦。", "调整到指针居中。"],
    referenceTitle: "参考音",
    setupTitle: "适用场景",
    keywords: (name, instrument, tuning) => [`${name} 调弦`, `${instrument} 调音器`, `${instrument} ${name}`, tuning],
    targetTitle: (name, instrument) => `${instrument} 调音器 - ${name}`
  }
};

export const instrumentsSeoData = instrumentGuideSlugs;
export const tuningsSeoData = alternativeTuningGuides;
export const localizedSeoContent = { guideIndexContent, tuningGuideCopy, alternativeTuningLabels };

function coreToolForInstrument(instrument: Instrument): ToolSlug {
  if (instrument === "bass") return "bass-tuner";
  if (instrument === "ukulele") return "ukulele-tuner";
  return "guitar-tuner";
}

function targetPathForInstrument(instrument: Instrument) {
  if (instrument === "guitar") return "tools/guitar-tuner";
  if (instrument === "bass") return "tools/bass-tuner";
  if (instrument === "ukulele") return "tools/ukulele-tuner";
  return `tools/${instrument}-tuner`;
}

function instrumentFromGuideSlug(guide: GuideSlug): Instrument | null {
  if (guide === "standard-bass-tuning") return "bass";
  if (!guide.startsWith("how-to-tune-")) return null;
  const instrument = guide.slice("how-to-tune-".length) as Instrument;
  return instrumentIds.includes(instrument) ? instrument : null;
}

function instrumentGuideSlugForInstrument(instrument: Instrument): GuideSlug | null {
  const slug = `how-to-tune-${instrument}` as GuideSlug;
  return instrumentGuideSlugs.includes(slug as (typeof instrumentGuideSlugs)[number]) ? slug : null;
}

function tuningString(instrument: Instrument, locale: Locale) {
  return tuningStringFromNotes(tunings[instrument], locale);
}

function tuningStringFromNotes(notes: TuningNote[], locale: Locale) {
  const notation = locale === "it" || locale === "fr" || locale === "es" || locale === "pt" ? "latin" : "international";
  return notes.map((note) => formatNoteName(`${note.name}${note.octave ?? ""}`, notation, false)).join(" - ");
}

function noteRowsFromNotes(notes: TuningNote[], locale: Locale) {
  return notes.map((note, index) => ({
    label: `${index + 1}`,
    note: formatNoteName(`${note.name}${note.octave ?? ""}`, locale === "it" || locale === "fr" || locale === "es" || locale === "pt" ? "latin" : "international"),
    frequency: `${note.frequency.toFixed(2)} Hz`
  }));
}

function localizedToolTitles(locale: Locale) {
  return {
    "bass-tuner": locale === "it" ? "Accordatore basso" : locale === "fr" ? "Accordeur basse" : locale === "es" ? "Afinador de bajo" : locale === "de" ? "Bass Tuner" : locale === "pt" ? "Afinador de baixo" : locale === "ja" ? "ベースチューナー" : locale === "ko" ? "베이스 튜너" : locale === "zh" ? "贝斯调音器" : locale === "ru" ? "Тюнер баса" : locale === "ar" ? "موالف الباس" : "Bass tuner",
    "chord-transposer": locale === "it" ? "Traspositore accordi" : locale === "fr" ? "Transposeur d'accords" : locale === "es" ? "Transpositor de acordes" : locale === "de" ? "Akkord-Transposer" : locale === "pt" ? "Transpositor de acordes" : locale === "ja" ? "コード移調" : locale === "ko" ? "코드 조옮김" : locale === "zh" ? "和弦移调器" : locale === "ru" ? "Транспозитор аккордов" : locale === "ar" ? "ناقل الأوتار" : "Chord transposer",
    "guitar-tuner": locale === "it" ? "Accordatore universale" : locale === "fr" ? "Accordeur universel" : locale === "es" ? "Afinador universal" : locale === "de" ? "Universal Tuner" : locale === "pt" ? "Afinador universal" : locale === "ja" ? "ユニバーサルチューナー" : locale === "ko" ? "유니버설 튜너" : locale === "zh" ? "通用调音器" : locale === "ru" ? "Универсальный тюнер" : locale === "ar" ? "الموالف العام" : "Universal tuner",
    "metronome": locale === "it" ? "Metronomo" : locale === "fr" ? "Métronome" : locale === "es" ? "Metrónomo" : locale === "de" ? "Metronom" : locale === "pt" ? "Metrônomo" : locale === "ja" ? "メトロノーム" : locale === "ko" ? "메트로놈" : locale === "zh" ? "节拍器" : locale === "ru" ? "Метроном" : locale === "ar" ? "ميترونوم" : "Metronome",
    "pitch-generator": locale === "it" ? "Pitch Generator" : locale === "fr" ? "Pitch Generator" : locale === "es" ? "Pitch Generator" : locale === "de" ? "Pitch Generator" : locale === "pt" ? "Pitch Generator" : locale === "ja" ? "Pitch Generator" : locale === "ko" ? "Pitch Generator" : locale === "zh" ? "Pitch Generator" : locale === "ru" ? "Pitch Generator" : locale === "ar" ? "مولد النغمة" : "Pitch Generator",
    "sound-level-meter": locale === "it" ? "Fonometro" : locale === "fr" ? "Sonomètre" : locale === "es" ? "Sonómetro" : locale === "de" ? "Schallpegelmesser" : locale === "pt" ? "Medidor de som" : locale === "ja" ? "サウンドメーター" : locale === "ko" ? "사운드 레벨 미터" : locale === "zh" ? "分贝仪" : locale === "ru" ? "Шумомер" : locale === "ar" ? "مقياس الصوت" : "Sound meter",
    "tap-bpm": locale === "it" ? "Tap BPM" : locale === "fr" ? "Tap BPM" : locale === "es" ? "Tap BPM" : locale === "de" ? "Tap BPM" : locale === "pt" ? "Tap BPM" : locale === "ja" ? "Tap BPM" : locale === "ko" ? "Tap BPM" : locale === "zh" ? "Tap BPM" : locale === "ru" ? "Tap BPM" : locale === "ar" ? "Tap BPM" : "Tap BPM",
    "ukulele-tuner": locale === "it" ? "Accordatore ukulele" : locale === "fr" ? "Accordeur ukulélé" : locale === "es" ? "Afinador de ukulele" : locale === "de" ? "Ukulele Tuner" : locale === "pt" ? "Afinador de ukulele" : locale === "ja" ? "ウクレレチューナー" : locale === "ko" ? "우쿨렐레 튜너" : locale === "zh" ? "尤克里里调音器" : locale === "ru" ? "Тюнер укулеле" : locale === "ar" ? "موالف الأوكوليلي" : "Ukulele tuner"
  } as Record<ToolSlug, string>;
}

function genericInstrumentFaq(locale: Locale, instrument: string, tuning: string) {
  const contentLocale = getContentLocale(locale);
  if (contentLocale === "it") {
    return [
      { question: `Qual è l'accordatura standard di ${instrument}?`, answer: `L'accordatura standard di ${instrument} usa queste note di riferimento: ${tuning}. Queste note determinano l'altezza di ogni corda a vuoto e costituiscono il punto di partenza per qualsiasi accordatura alternativa.` },
      { question: `Posso accordare ${instrument} dal telefono?`, answer: `Sì. Apri l'accordatore nel browser del tuo smartphone e consenti l'accesso al microfono. Su iOS serve Safari 14.3 o superiore; su Android funzionano bene Chrome e Firefox. Tieni il telefono vicino allo strumento per un rilevamento migliore.` },
      { question: `Quanto spesso devo accordare ${instrument}?`, answer: `Dovresti accordare ${instrument} ogni volta che lo suoni. Le variazioni di temperatura, umidità e tensione delle corde causano scordature nel tempo. Le corde nuove si assestano nelle prime ore d'uso e richiedono accordature frequenti — è normale e non significa che lo strumento abbia problemi.` },
      { question: `Perché la nota continua a cambiare invece di restare stabile?`, answer: `Il rilevamento del pitch oscilla leggermente quando la corda vibra. Per una lettura più stabile: suona la corda con decisione e lasciala risuonare, allontana fonti di rumore come ventole o TV, e assicurati di non toccare accidentalmente altre corde. Le corde di nylon si stabilizzano più lentamente di quelle in acciaio.` },
      { question: `È necessario installare un'app per accordare ${instrument}?`, answer: `No. TuneUniversal funziona interamente nel browser senza installazioni. Basta aprire la pagina, concedere il permesso al microfono e iniziare. Funziona su Windows, macOS, iOS e Android.` }
    ];
  }
  if (contentLocale === "fr") {
    return [
      { question: `Quel est l'accordage standard de ${instrument} ?`, answer: `L'accordage standard de ${instrument} utilise ces notes de référence : ${tuning}. Ces notes déterminent la hauteur de chaque corde à vide et constituent le point de départ de tout accordage alternatif.` },
      { question: `Puis-je accorder ${instrument} depuis mon téléphone ?`, answer: `Oui. Ouvrez l'accordeur dans le navigateur de votre smartphone et autorisez l'accès au micro. Sur iOS, Safari 14.3 ou ultérieur est requis ; sur Android, Chrome et Firefox fonctionnent bien. Gardez le téléphone près de l'instrument pour une meilleure détection.` },
      { question: `À quelle fréquence dois-je accorder ${instrument} ?`, answer: `Vous devriez accorder ${instrument} chaque fois que vous jouez. Les variations de température, d'humidité et de tension des cordes provoquent un désaccord avec le temps. Les cordes neuves se stabilisent durant les premières heures d'utilisation et demandent des réaccordages fréquents — c'est normal et ne signifie pas que l'instrument a un problème.` },
      { question: `Pourquoi la note détectée change-t-elle au lieu de rester stable ?`, answer: `La détection de hauteur oscille légèrement pendant que la corde vibre. Pour une lecture plus stable : jouez la corde fermement et laissez-la résonner, éloignez les sources de bruit comme les ventilateurs ou la télé, et veillez à ne pas toucher d'autres cordes. Les cordes en nylon se stabilisent plus lentement que celles en acier.` },
      { question: `Faut-il installer une application pour accorder ${instrument} ?`, answer: `Non. TuneUniversal fonctionne entièrement dans le navigateur sans installation. Ouvrez la page, autorisez le micro et commencez. Cela fonctionne sur Windows, macOS, iOS et Android.` }
    ];
  }
  if (contentLocale === "de") {
    return [
      { question: `Was ist die Standardstimmung von ${instrument}?`, answer: `Die Standardstimmung von ${instrument} nutzt diese Referenznoten: ${tuning}. Diese Noten bestimmen die Tonhöhe jeder leeren Saite und bilden den Ausgangspunkt für jede alternative Stimmung.` },
      { question: `Kann ich ${instrument} mit dem Telefon stimmen?`, answer: `Ja. Öffne das Stimmgerät im Browser deines Smartphones und erlaube den Mikrofonzugriff. Auf iOS brauchst du Safari 14.3 oder neuer; auf Android funktionieren Chrome und Firefox gut. Halte das Telefon nahe am Instrument für eine bessere Erkennung.` },
      { question: `Wie oft sollte ich ${instrument} stimmen?`, answer: `Du solltest ${instrument} jedes Mal stimmen, wenn du spielst. Temperatur-, Luftfeuchtigkeits- und Saitenspannungsänderungen führen mit der Zeit zu Verstimmungen. Neue Saiten setzen sich in den ersten Stunden und müssen häufig nachgestimmt werden — das ist normal und kein Zeichen für ein Problem mit dem Instrument.` },
      { question: `Warum ändert sich der erkannte Ton, statt stabil zu bleiben?`, answer: `Die Tonhöhenerkennung schwankt leicht, während die Saite schwingt. Für eine stabilere Anzeige: Spiele die Saite kräftig an und lass sie klingen, entferne Lärmquellen wie Ventilatoren oder Fernseher und achte darauf, keine anderen Saiten zu berühren. Nylonsaiten stabilisieren sich langsamer als Stahlsaiten.` },
      { question: `Muss ich eine App installieren, um ${instrument} zu stimmen?`, answer: `Nein. TuneUniversal läuft vollständig im Browser ohne Installation. Öffne einfach die Seite, erlaube das Mikrofon und beginne. Es funktioniert auf Windows, macOS, iOS und Android.` }
    ];
  }
  if (contentLocale === "es") {
    return [
      { question: `¿Cuál es la afinación estándar de ${instrument}?`, answer: `La afinación estándar de ${instrument} usa estas notas de referencia: ${tuning}. Estas alturas definen las frecuencias de cada cuerda al aire y sirven como punto de partida para cualquier afinación alternativa.` },
      { question: `¿Puedo afinar ${instrument} desde el móvil?`, answer: `Sí. Abre el afinador en el navegador de tu smartphone y permite el acceso al micrófono. En iOS, Safari 14.3 o superior funciona correctamente. En Android, Chrome y Firefox funcionan bien. Mantén el teléfono cerca del instrumento para una lectura más clara.` },
      { question: `¿Con qué frecuencia debo afinar ${instrument}?`, answer: `Deberías afinar ${instrument} cada vez que tocas. Los cambios de temperatura, humedad y tensión de cuerdas provocan desafinaciones con el tiempo. Las cuerdas nuevas se asientan durante las primeras horas de uso y necesitan reajustes frecuentes — esto es completamente normal y no indica ningún problema con el instrumento.` },
      { question: `¿Por qué la nota detectada sigue cambiando en vez de quedarse fija?`, answer: `La detección de altura oscila ligeramente mientras la cuerda vibra. Para una lectura más estable: pulsa la cuerda con firmeza y déjala resonar, aleja fuentes de ruido como ventiladores o televisores, y asegúrate de no tocar otras cuerdas sin querer. Las cuerdas de nylon tardan más en estabilizarse que las de acero.` },
      { question: `¿Necesito instalar una app para afinar ${instrument}?`, answer: `No. TuneUniversal funciona completamente en el navegador sin necesidad de instalación. Solo tienes que abrir la página, conceder permiso al micrófono y empezar a afinar. Funciona en Windows, macOS, iOS y Android.` }
    ];
  }
  if (contentLocale === "pt") {
    return [
      { question: `Qual é a afinação padrão de ${instrument}?`, answer: `A afinação padrão de ${instrument} usa essas notas de referência: ${tuning}. Essas frequências definem as alturas de cada corda solta e servem como ponto de partida para qualquer afinação alternativa.` },
      { question: `Posso afinar ${instrument} pelo celular?`, answer: `Sim. Abra o afinador no navegador do seu smartphone e permita o acesso ao microfone. No iOS, Safari 14.3 ou posterior funciona corretamente. No Android, Chrome e Firefox funcionam bem. Mantenha o telefone perto do instrumento para uma leitura mais clara.` },
      { question: `Com que frequência devo afinar ${instrument}?`, answer: `Você deve afinar ${instrument} toda vez que tocar. Mudanças de temperatura, umidade e tensão das cordas causam desafinação ao longo do tempo. Cordas novas se assentam durante as primeiras horas de uso e precisam de reajustes frequentes — isso é completamente normal e não indica problema com o instrumento.` },
      { question: `Por que a nota detectada continua mudando em vez de ficar estável?`, answer: `A detecção de altura oscila levemente enquanto a corda vibra. Para uma leitura mais estável: toque a corda firmemente e deixe-a ressoar, afaste fontes de ruído como ventiladores ou televisores, e certifique-se de não tocar outras cordas sem querer. Cordas de nylon demoram mais para estabilizar do que cordas de aço.` },
      { question: `Preciso instalar um app para afinar ${instrument}?`, answer: `Não. TuneUniversal funciona completamente no navegador sem necessidade de instalação. Basta abrir a página, conceder permissão ao microfone e começar a afinar. Funciona no Windows, macOS, iOS e Android.` }
    ];
  }
  if (contentLocale === "zh") {
    return [
      { question: `${instrument}的标准调音是什么？`, answer: `${instrument}的标准调音使用这些参考音符：${tuning}。这些音高定义了每根空弦的频率，是探索任何替代调音的起点。` },
      { question: `可以在手机上调音${instrument}吗？`, answer: `可以。在智能手机浏览器中打开调音器并允许麦克风访问。在iOS上，Safari 14.3或更高版本可以正常工作。在Android上，Chrome和Firefox都表现良好。将手机靠近乐器以获得最清晰的音高读数。` },
      { question: `多久应该调一次${instrument}？`, answer: `每次演奏${instrument}前都应该调音。温度变化、湿度和弦的张力都会导致随时间偏音。新弦在使用的前几个小时内会稳定下来，需要频繁重新调音——这是完全正常的，不表示乐器有问题。` },
      { question: `为什么检测到的音高一直在变而不是保持稳定？`, answer: `音高检测在弦自由振动时会自然波动。为了获得更稳定的读数：用力拨弦并让其清晰地响，远离风扇或电视等背景噪音源，确保不要意外触碰相邻的弦。尼龙弦比钢弦需要更长时间才能稳定。` },
      { question: `需要安装应用才能调${instrument}吗？`, answer: `不需要。TuneUniversal完全在浏览器中运行，无需安装。只需打开页面，授予麦克风权限，然后开始调音即可。无需任何插件或下载，在Windows、macOS、iOS和Android上均可使用。` }
    ];
  }
  if (contentLocale === "ru") {
    return [
      { question: `Какой стандартный строй у ${instrument}?`, answer: `Стандартный строй ${instrument} использует эти референсные ноты: ${tuning}. Эти высоты определяют частоты каждой открытой струны и служат отправной точкой для любого альтернативного строя.` },
      { question: `Можно ли настроить ${instrument} с телефона?`, answer: `Да. Откройте тюнер в браузере смартфона и разрешите доступ к микрофону. На iOS требуется Safari 14.3 или новее; на Android хорошо работают Chrome и Firefox. Держите телефон близко к инструменту для более чёткого считывания высоты.` },
      { question: `Как часто нужно настраивать ${instrument}?`, answer: `Настраивайте ${instrument} каждый раз перед игрой. Изменения температуры, влажности и натяжения струн вызывают расстройку со временем. Новые струны оседают в первые часы использования и требуют частой перенастройки — это совершенно нормально и не говорит о проблеме с инструментом.` },
      { question: `Почему определяемая высота продолжает меняться вместо того, чтобы оставаться стабильной?`, answer: `Определение высоты естественно колеблется, пока струна свободно вибрирует. Для более стабильного считывания: ударьте по струне уверенно и дайте ей звучать, уйдите от источников фонового шума — вентиляторов или телевизоров, убедитесь, что не задеваете соседние струны. Нейлоновые струны стабилизируются дольше, чем стальные.` },
      { question: `Нужно ли устанавливать приложение для настройки ${instrument}?`, answer: `Нет. TuneUniversal работает полностью в браузере без установки. Просто откройте страницу, разрешите микрофон и начните настройку. Работает на Windows, macOS, iOS и Android без плагинов и загрузок.` }
    ];
  }
  if (contentLocale === "ja") {
    return [
      { question: `${instrument}の標準チューニングは何ですか？`, answer: `${instrument}の標準チューニングはこれらの参照音符を使用します：${tuning}。これらの音高は各開放弦の周波数を定義し、あらゆる代替チューニングの出発点となります。` },
      { question: `スマホで${instrument}をチューニングできますか？`, answer: `はい。スマートフォンのブラウザでチューナーを開き、マイクアクセスを許可してください。iOSではSafari 14.3以降が必要です；AndroidではChromeとFirefoxがどちらもうまく動作します。最も明確な音高読み取りのために、楽器の近くに電話を置いてください。` },
      { question: `どのくらいの頻度で${instrument}をチューニングすべきですか？`, answer: `弾くたびに${instrument}をチューニングすべきです。温度変化、湿度、弦のテンションはすべて時間の経過とともにドリフトを引き起こします。新しい弦は使用開始後数時間で落ち着き、頻繁に再チューニングが必要です——これは全くの正常で、楽器に問題があることを示しません。` },
      { question: `検出された音高が安定せずに変わり続けるのはなぜですか？`, answer: `音高検出は弦が自由に振動する間、自然に変動します。より安定した読み取りのために：弦を強く弾いて明確に響かせ、ファンや電視などの背景ノイズから離れ、隣の弦を誤って触れていないか確認してください。ナイロン弦はスチール弦より落ち着くのに時間がかかります。` },
      { question: `${instrument}をチューニングするためにアプリをインストールする必要がありますか？`, answer: `いいえ。TuneUniversalはインストール不要でブラウザ内で完全に動作します。ページを開き、マイクの許可を与えて、チューニングを始めるだけです。プラグインやダウンロードなしで、Windows、macOS、iOS、Androidで動作します。` }
    ];
  }
  if (contentLocale === "ko") {
    return [
      { question: `${instrument}의 표준 조율은 무엇인가요?`, answer: `${instrument}의 표준 조율은 이 참조 음표를 사용합니다: ${tuning}. 이 음높이들은 각 개방현의 주파수를 정의하며, 탐색할 수 있는 모든 대체 조율의 시작점이 됩니다.` },
      { question: `모바일에서 ${instrument}를 조율할 수 있나요?`, answer: `예. 스마트폰 브라우저에서 튜너를 열고 마이크 접근을 허용하세요. iOS에서는 Safari 14.3 이상이 올바르게 작동합니다. Android에서는 Chrome과 Firefox 모두 잘 작동합니다. 가장 명확한 음높이 읽기를 위해 악기 가까이에 폰을 두세요.` },
      { question: `${instrument}를 얼마나 자주 조율해야 하나요?`, answer: `연주할 때마다 ${instrument}를 조율해야 합니다. 온도 변화, 습도, 줄 장력 모두 시간이 지남에 따라 드리프트를 유발합니다. 새 줄은 사용 첫 몇 시간 동안 안정되며 자주 재조율이 필요합니다——이것은 완전히 정상이며 악기에 문제가 있음을 나타내지 않습니다.` },
      { question: `감지된 음높이가 안정되지 않고 계속 변하는 이유는 무엇인가요?`, answer: `음높이 감지는 줄이 자유롭게 진동하는 동안 자연스럽게 변동합니다. 더 안정적인 읽기를 위해: 줄을 세게 뜯어 맑게 울리도록 하고, 팬이나 TV 같은 배경 소음 원에서 멀리 하며, 실수로 인접한 줄을 건드리지 않는지 확인하세요. 나일론 줄은 강철 줄보다 안정되는 데 더 오래 걸립니다.` },
      { question: `${instrument}를 조율하기 위해 앱을 설치해야 하나요?`, answer: `아니요. TuneUniversal은 설치 없이 브라우저에서 완전히 실행됩니다. 페이지를 열고, 마이크 권한을 부여하고, 조율을 시작하면 됩니다. 플러그인이나 다운로드 없이 Windows, macOS, iOS, Android에서 작동합니다.` }
    ];
  }
  if (contentLocale === "ar") {
    return [
      { question: `ما هو الضبط القياسي لـ ${instrument}؟`, answer: `يستخدم الضبط القياسي لـ ${instrument} هذه النغمات المرجعية: ${tuning}. تحدد هذه الترددات التواتر الطبيعي لكل وتر مفتوح وتعمل كنقطة انطلاق لأي ضبط بديل.` },
      { question: `هل يمكنني ضبط ${instrument} من الهاتف؟`, answer: `نعم. افتح الموالف في متصفح هاتفك الذكي واسمح بالوصول للميكروفون. على iOS يلزم Safari 14.3 أو أحدث؛ على Android يعمل كل من Chrome وFirefox بشكل جيد. أبقِ الهاتف قريبًا من الآلة للحصول على قراءة أوضح.` },
      { question: `كم مرة يجب أن أضبط ${instrument}؟`, answer: `يجب ضبط ${instrument} في كل مرة تعزف فيها. تغيرات درجة الحرارة والرطوبة وشد الأوتار تسبب انجراف الضبط بمرور الوقت. الأوتار الجديدة تستقر خلال الساعات الأولى من الاستخدام وتحتاج إعادة ضبط متكررة — هذا طبيعي تمامًا ولا يعني وجود مشكلة في الآلة.` },
      { question: `لماذا تستمر النغمة المكتشفة في التغيير بدلًا من الثبات؟`, answer: `يتذبذب اكتشاف الطبقة بشكل طبيعي بينما الوتر يهتز بحرية. للحصول على قراءة أكثر ثباتًا: انقر الوتر بقوة واتركه يرن بوضوح، ابتعد عن مصادر الضوضاء الخلفية كالمراوح والتلفاز، وتأكد من عدم لمس الأوتار المجاورة عن طريق الخطأ. الأوتار النايلون تأخذ وقتًا أطول للاستقرار من الأوتار الفولاذية.` },
      { question: `هل أحتاج إلى تثبيت تطبيق لضبط ${instrument}؟`, answer: `لا. يعمل TuneUniversal بالكامل في المتصفح دون أي تثبيت. فقط افتح الصفحة، امنح إذن الميكروفون، وابدأ الضبط. يعمل على Windows وmacOS وiOS وAndroid دون إضافات أو تنزيلات.` }
    ];
  }
  return [
    { question: `What is the standard tuning for ${instrument}?`, answer: `The standard tuning for ${instrument} uses these reference notes: ${tuning}. These pitches define the open string frequencies and serve as the starting point for any alternate tuning you might explore.` },
    { question: `Can I tune ${instrument} on mobile?`, answer: `Yes. Open the tuner in your smartphone browser and allow microphone access. On iOS, Safari 14.3 or later works correctly. On Android, Chrome and Firefox both perform well. Keep the phone close to the instrument for the clearest pitch reading.` },
    { question: `How often should I tune ${instrument}?`, answer: `You should tune ${instrument} every time you play. Temperature changes, humidity, and string tension all cause drift over time. New strings settle during the first hours of use and need frequent re-tuning — this is completely normal and does not indicate a problem with the instrument.` },
    { question: `Why does the detected pitch keep changing instead of staying still?`, answer: `Pitch detection fluctuates naturally while the string vibrates freely. For a more stable reading: pluck the string firmly and let it ring clearly, move away from background noise sources like fans or televisions, and make sure you are not accidentally touching neighboring strings. Nylon strings take longer to settle than steel strings.` },
    { question: `Do I need to install an app to tune ${instrument}?`, answer: `No. TuneUniversal runs entirely in the browser with no installation required. Just open the page, grant microphone permission, and start tuning. It works on Windows, macOS, iOS, and Android without any plugins or downloads.` }
  ];
}

function genericTuningFaq(locale: Locale, name: string, instrument: string, tuning: string) {
  const contentLocale = getContentLocale(locale);
  if (contentLocale === "it") {
    return [
      { question: `Quali note usa l'accordatura ${name}?`, answer: `L'accordatura ${name} per ${instrument} usa queste note: ${tuning}. Ogni nota corrisponde a una corda a vuoto — sintonizzarti su questi valori ti mette in accordatura con chiunque usi lo stesso preset.` },
      { question: `Serve un preset specifico per ${name}?`, answer: `Se il preset ${name} è disponibile nel tuner, puoi selezionarlo direttamente dal menu. In alternativa, usa la tabella delle note su questa pagina per accordare ogni corda manualmente — il risultato è identico.` },
      { question: `Quali generi musicali usano l'accordatura ${name}?`, answer: `Ogni accordatura ha i suoi contesti d'uso tipici. Le accordature Drop abbassano la corda più bassa per power chord più semplici ed è comune in rock e metal. Le Open tuning facilitano gli accordi aperti e sono diffuse nel blues, folk e slide guitar. Le accordature full-step-down come D Standard danno un suono più pesante e pieno.` },
      { question: `Dopo aver cambiato accordatura, le corde si scordano più facilmente?`, answer: `Sì, soprattutto se scendi di accordatura: le corde diventano più morbide e tendono a scordare più velocemente. Considera corde di calibro leggermente più pesante se usi spesso accordature abbassate. Dopo aver cambiato accordatura, suona per qualche minuto e poi ricontrolla — le corde hanno bisogno di assestamento.` }
    ];
  }
  if (contentLocale === "fr") {
    return [
      { question: `Quelles notes utilise l'accordage ${name} ?`, answer: `L'accordage ${name} pour ${instrument} utilise ces notes : ${tuning}. Chaque note correspond à une corde à vide — vous accorder sur ces valeurs vous met au diapason de quiconque utilise le même preset.` },
      { question: `Faut-il un preset spécifique pour ${name} ?`, answer: `Si le preset ${name} est disponible dans l'accordeur, vous pouvez le sélectionner directement dans le menu. Sinon, utilisez le tableau des notes de cette page pour accorder chaque corde manuellement — le résultat est identique.` },
      { question: `Quels genres musicaux utilisent l'accordage ${name} ?`, answer: `Chaque accordage a ses contextes d'usage. Les accordages Drop abaissent la corde la plus grave pour des power chords plus simples et sont courants en rock et metal. Les accordages ouverts facilitent les accords à vide et sont répandus dans le blues, le folk et la slide guitar. Les accordages baissés d'un ton comme D Standard donnent un son plus lourd et plus plein.` },
      { question: `Après un changement d'accordage, les cordes se désaccordent-elles plus vite ?`, answer: `Oui, surtout en baissant l'accordage : les cordes deviennent plus souples et ont tendance à bouger davantage. Envisagez un tirant légèrement plus fort si vous utilisez souvent des accordages bas. Après un changement, jouez quelques minutes puis revérifiez — les cordes ont besoin de se stabiliser.` }
    ];
  }
  if (contentLocale === "de") {
    return [
      { question: `Welche Noten nutzt die ${name}-Stimmung?`, answer: `Die ${name}-Stimmung für ${instrument} nutzt diese Noten: ${tuning}. Jede Note entspricht einer leeren Saite — dich auf diese Werte zu stimmen bringt dich in Einklang mit allen, die dasselbe Preset nutzen.` },
      { question: `Brauche ich ein spezielles Preset für ${name}?`, answer: `Ist das ${name}-Preset im Stimmgerät verfügbar, kannst du es direkt aus dem Menü wählen. Andernfalls nutze die Notentabelle auf dieser Seite, um jede Saite manuell zu stimmen — das Ergebnis ist identisch.` },
      { question: `Welche Musikgenres nutzen die ${name}-Stimmung?`, answer: `Jede Stimmung hat ihre typischen Kontexte. Drop-Stimmungen senken die tiefste Saite für einfachere Powerchords und sind in Rock und Metal verbreitet. Open Tunings erleichtern Leersaiten-Akkorde und sind im Blues, Folk und bei der Slide-Gitarre verbreitet. Um einen Ganzton tiefere Stimmungen wie D Standard ergeben einen schwereren, volleren Klang.` },
      { question: `Verstimmen sich die Saiten nach einem Stimmungswechsel schneller?`, answer: `Ja, besonders beim Tieferstimmen: Die Saiten werden lockerer und neigen eher zum Wandern. Erwäge eine etwas stärkere Saitenstärke, wenn du häufig tiefe Stimmungen nutzt. Spiele nach einem Wechsel einige Minuten und prüfe dann erneut — die Saiten müssen sich erst setzen.` }
    ];
  }
  if (contentLocale === "es") {
    return [
      { question: `¿Qué notas usa la afinación ${name}?`, answer: `La afinación ${name} para ${instrument} usa estas notas: ${tuning}. Cada nota corresponde a una cuerda al aire — ajustarte a estos valores te pone en sincronía con cualquiera que use el mismo preset.` },
      { question: `¿Necesito un preset específico para ${name}?`, answer: `Si el preset ${name} está disponible en el afinador, puedes seleccionarlo directamente en el menú. Si no, usa la tabla de notas de esta página para afinar cada cuerda manualmente — el resultado es idéntico.` },
      { question: `¿Qué géneros musicales usan la afinación ${name}?`, answer: `Cada afinación tiene sus contextos típicos. Las afinaciones Drop bajan la cuerda más grave para power chords más fáciles y son comunes en rock y metal. Las afinaciones abiertas facilitan los acordes abiertos y se usan en blues, folk y slide guitar. Las afinaciones un tono abajo como D Standard dan un sonido más pesado y lleno, popular en metal y arreglos oscuros.` },
      { question: `¿Tras cambiar la afinación, las cuerdas se desafinan más fácilmente?`, answer: `Sí, especialmente al bajar la afinación: las cuerdas quedan más flojas y tienden a moverse más. Considera un calibre de cuerda ligeramente más grueso si usas afinaciones bajas con frecuencia. Después de cambiar, toca unos minutos y vuelve a comprobar — las cuerdas necesitan asentarse en la nueva tensión.` }
    ];
  }
  if (contentLocale === "pt") {
    return [
      { question: `Quais notas usa a afinação ${name}?`, answer: `A afinação ${name} para ${instrument} usa essas notas: ${tuning}. Cada nota corresponde a uma corda solta — afinar para esses valores te coloca em sintonia com qualquer pessoa usando o mesmo preset.` },
      { question: `Preciso de um preset específico para ${name}?`, answer: `Se o preset ${name} estiver disponível no afinador, você pode selecioná-lo diretamente no menu. Caso contrário, use a tabela de notas desta página para afinar cada corda manualmente — o resultado é idêntico.` },
      { question: `Quais gêneros musicais usam a afinação ${name}?`, answer: `Cada afinação tem seus contextos típicos. As afinações Drop baixam a corda mais grave para power chords mais fáceis e são comuns no rock e metal. As afinações abertas facilitam acordes abertos e são usadas no blues, folk e slide guitar. Afinações um tom abaixo como D Standard dão um som mais pesado e cheio, popular no metal e arranjos sombrios.` },
      { question: `Após mudar a afinação, as cordas desafinam mais facilmente?`, answer: `Sim, especialmente ao baixar a afinação: as cordas ficam mais frouxas e tendem a se mover mais. Considere um calibre de corda ligeiramente mais grosso se você usar afinações baixas com frequência. Depois de mudar, toque por alguns minutos e verifique novamente — as cordas precisam se assentar na nova tensão.` }
    ];
  }
  if (contentLocale === "zh") {
    return [
      { question: `${name}调音使用哪些音符？`, answer: `${instrument}的${name}调音使用这些音符：${tuning}。每个音符对应一根空弦——调整到这些音高使你与使用同一预设的人保持一致。` },
      { question: `我需要专用预设来使用${name}吗？`, answer: `如果调音器中有${name}预设，你可以直接在菜单中选择它。否则，使用本页的音符表手动调节每根弦——结果是相同的。` },
      { question: `哪些音乐流派使用${name}调音？`, answer: `每种调音都有其典型背景。Drop调音降低了最低弦，使power chord更容易，在摇滚和金属中很常见。开放调音使开放和弦变得容易，在蓝调、民谣和滑音吉他中广泛使用。像D标准这样的全音降调音给出更重、更饱满的声音，在金属和黑暗编曲中很受欢迎。` },
      { question: `换调后弦会更容易走音吗？`, answer: `是的，特别是降调时：弦会变得更松，倾向于更多地漂移。如果你经常使用低调音，考虑使用稍粗的弦号。换调后演奏几分钟再重新检查——弦需要时间在新张力下稳定下来。` }
    ];
  }
  if (contentLocale === "ru") {
    return [
      { question: `Какие ноты использует строй ${name}?`, answer: `Строй ${name} для ${instrument} использует эти ноты: ${tuning}. Каждая нота соответствует открытой струне — настройка на эти высоты даёт унисон с любым, кто использует тот же пресет.` },
      { question: `Нужен ли специальный пресет для ${name}?`, answer: `Если пресет ${name} доступен в тюнере, вы можете выбрать его прямо из меню. В противном случае используйте таблицу нот на этой странице для ручной настройки каждой струны — результат одинаков.` },
      { question: `Какие музыкальные жанры используют строй ${name}?`, answer: `У каждого строя есть типичные контексты. Drop-строи понижают басовую струну для более лёгких пауэрчордов и распространены в роке и металле. Открытые строи облегчают открытые аккорды и используются в блюзе, фолке и слайд-гитаре. Строи с понижением на тон, как D Standard, дают более тяжёлый, насыщенный звук.` },
      { question: `После смены строя струны чаще расстраиваются?`, answer: `Да, особенно при понижении строя: струны становятся мягче и склонны к смещению. Рассмотрите чуть более толстую калибровку, если часто используете низкие строи. После смены поиграйте несколько минут и проверьте снова — струны должны сесть на новое натяжение.` }
    ];
  }
  if (contentLocale === "ja") {
    return [
      { question: `${name}チューニングはどの音符を使いますか？`, answer: `${instrument}の${name}チューニングはこれらの音符を使います：${tuning}。各音符は1本の開放弦に対応します——これらの音高に合わせることで、同じプリセットを使う誰とでも合音します。` },
      { question: `${name}には専用プリセットが必要ですか？`, answer: `チューナーに${name}プリセットがある場合、メニューから直接選択できます。なければ、このページの音符表を使って各弦を手動でチューニングしてください——結果は同じです。` },
      { question: `${name}チューニングを使う音楽ジャンルは？`, answer: `各チューニングには典型的な文脈があります。Dropチューニングは最も低い弦を下げてパワーコードを簡単にし、ロックやメタルで一般的です。オープンチューニングはオープンコードを容易にし、ブルース、フォーク、スライドギターで広く使われます。D Standardのようなフルステップダウンチューニングはより重く、豊かなサウンドを生み出します。` },
      { question: `チューニングを変えた後、弦は外れやすくなりますか？`, answer: `はい、特にチューニングを下げた場合：弦が緩くなり、ドリフトしやすくなります。低いチューニングを頻繁に使う場合は、やや太いゲージを検討してください。変更後、数分演奏して再確認してください——弦は新しいテンションに落ち着く時間が必要です。` }
    ];
  }
  if (contentLocale === "ko") {
    return [
      { question: `${name} 조율은 어떤 음표를 사용하나요?`, answer: `${instrument}의 ${name} 조율은 이 음표들을 사용합니다: ${tuning}. 각 음표는 하나의 개방현에 해당합니다——이 음높이에 맞추면 같은 프리셋을 사용하는 누구와도 합주할 수 있습니다.` },
      { question: `${name}에 전용 프리셋이 필요한가요?`, answer: `튜너에 ${name} 프리셋이 있다면 메뉴에서 직접 선택할 수 있습니다. 없다면 이 페이지의 음표 표를 사용하여 각 줄을 수동으로 조율하세요——결과는 동일합니다.` },
      { question: `${name} 조율을 사용하는 음악 장르는?`, answer: `각 조율에는 전형적인 맥락이 있습니다. Drop 조율은 가장 낮은 줄을 낮춰 파워 코드를 쉽게 하며 록과 메탈에서 일반적입니다. 오픈 조율은 오픈 코드를 쉽게 하며 블루스, 포크, 슬라이드 기타에서 사용됩니다. D Standard 같은 반음 내린 조율은 더 무겁고 풍부한 소리를 냅니다.` },
      { question: `조율을 바꾼 후 줄이 더 쉽게 음이탈 하나요?`, answer: `예, 특히 조율을 낮출 때: 줄이 더 느슨해지고 드리프트하기 쉽습니다. 낮은 조율을 자주 사용한다면 약간 더 두꺼운 게이지를 고려하세요. 변경 후 몇 분 연주하고 다시 확인하세요——줄이 새 장력에 안정되려면 시간이 필요합니다.` }
    ];
  }
  if (contentLocale === "ar") {
    return [
      { question: `ما النغمات التي يستخدمها ضبط ${name}؟`, answer: `يستخدم ضبط ${name} لـ ${instrument} هذه النغمات: ${tuning}. كل نغمة تقابل وترًا مفتوحًا — ضبطك على هذه القيم يضعك في انسجام مع أي شخص يستخدم نفس الإعداد المسبق.` },
      { question: `هل أحتاج إعداد مسبق محدد لـ ${name}؟`, answer: `إذا كان الإعداد المسبق ${name} متاحًا في الموالف، يمكنك اختياره مباشرة من القائمة. وإلا، استخدم جدول النغمات في هذه الصفحة لضبط كل وتر يدويًا — النتيجة متطابقة.` },
      { question: `ما الأنواع الموسيقية التي تستخدم ضبط ${name}؟`, answer: `لكل ضبط سياقاته المعتادة. ضبطات Drop تخفض الوتر الأعمق لتسهيل power chords وشائعة في الروك والميتال. الضبطات المفتوحة تسهل الأوتار المفتوحة وتستخدم في البلوز والفولك وslide guitar. الضبطات التي تخفض درجة كاملة مثل D Standard تعطي صوتًا أثقل وأكثر امتلاءً.` },
      { question: `بعد تغيير الضبط، هل تنفك الأوتار بسهولة أكبر؟`, answer: `نعم، خاصة عند التخفيض: تصبح الأوتار أكثر مرونة وتميل للانجراف. فكر في سُمك وتر أثقل قليلًا إذا كنت تستخدم ضبطات منخفضة بشكل متكرر. بعد التغيير، العب لبضع دقائق ثم أعد الفحص — الأوتار تحتاج وقتًا لتستقر في الشد الجديد.` }
    ];
  }
  return [
    { question: `Which notes does ${name} tuning use?`, answer: `${name} tuning for ${instrument} uses these notes: ${tuning}. Each note corresponds to one open string — matching these pitches puts you in tune with anyone else using the same preset.` },
    { question: `Do I need a dedicated preset for ${name}?`, answer: `If the ${name} preset is available in the tuner, you can select it directly from the menu. Otherwise, use the note table on this page to tune each string manually — the result is identical either way.` },
    { question: `What music genres use ${name} tuning?`, answer: `Each tuning has typical contexts. Drop tunings lower the bass string for easier power chords and are common in rock and metal. Open tunings facilitate open chords and are used in blues, folk and slide guitar. Full-step-down tunings like D Standard give a heavier, fuller sound and are popular in metal and dark singer-songwriter arrangements.` },
    { question: `After changing tuning, do strings go out of tune more easily?`, answer: `Yes, especially when tuning down: strings become slacker and tend to drift more. Consider a slightly heavier string gauge if you regularly use lower tunings. After changing, play for a few minutes then re-check — the strings need time to settle into the new tension.` }
  ];
}

export const faqData = {
  instrument: genericInstrumentFaq,
  tuning: genericTuningFaq
};

function genericMistakes(locale: Locale, instrument: string) {
  const contentLocale = getContentLocale(locale);
  if (contentLocale === "it") {
    return [
      `Suonare piu di una corda di ${instrument} alla volta rende il rilevamento instabile — il rilevatore capta piu frequenze e non riesce a determinare quale stai accordando.`,
      "Accordare in una stanza rumorosa porta facilmente a letture sbagliate. Spegni ventole, TV e qualsiasi fonte di suono continuo prima di iniziare.",
      "Fermarsi appena la nota cambia senza aspettare che si stabilizzi puo lasciare lo strumento ancora scordato. Aspetta che l'ago si fermi su un valore stabile.",
      "Accordare scendendo verso la nota obiettivo invece di salire: e meglio scendere leggermente sotto e salire, cosi la tensione sulla chiave e piu uniforme.",
      "Girare la chiave troppo velocemente: vicino all'intonazione, gira lentamente e in piccoli incrementi."
    ];
  }
  if (contentLocale === "fr") {
    return [
      `Jouer plusieurs cordes de ${instrument} à la fois rend la détection instable — l'accordeur capte plusieurs fréquences et ne peut pas déterminer celle que vous accordez.`,
      "Accorder dans une pièce bruyante mène facilement à de fausses lectures. Éteignez ventilateurs, télé et toute source de son continu avant de commencer.",
      "S'arrêter dès que la note change sans attendre qu'elle se stabilise peut laisser l'instrument désaccordé. Attendez que l'aiguille se fixe sur une valeur stable.",
      "Accorder en descendant vers la note cible plutôt qu'en montant : mieux vaut descendre légèrement sous la cible puis monter, pour une tension plus régulière sur la mécanique.",
      "Tourner la mécanique trop vite : près de la justesse, tournez lentement et par petits incréments."
    ];
  }
  if (contentLocale === "de") {
    return [
      `Mehrere Saiten von ${instrument} gleichzeitig zu spielen macht die Erkennung instabil — das Stimmgerät erfasst mehrere Frequenzen und kann nicht bestimmen, welche du stimmst.`,
      "In einem lauten Raum zu stimmen führt leicht zu falschen Anzeigen. Schalte Ventilatoren, Fernseher und jede Quelle von Dauerlärm aus, bevor du beginnst.",
      "Aufzuhören, sobald sich der Ton ändert, ohne auf das Setzen zu warten, kann das Instrument verstimmt lassen. Warte, bis sich die Nadel auf einem stabilen Wert beruhigt.",
      "Zur Zielnote hinabzustimmen statt hinauf: Besser etwas unter die Zielnote gehen und hinaufstimmen, damit die Spannung am Wirbel gleichmäßiger ist.",
      "Den Wirbel zu schnell zu drehen: Nahe der korrekten Tonhöhe langsam und in kleinen Schritten drehen."
    ];
  }
  if (contentLocale === "es") {
    return [
      `Tocar más de una cuerda de ${instrument} a la vez hace que la detección sea inestable — el detector capta varias frecuencias y no puede determinar cuál estás afinando.`,
      "Afinar en una habitación ruidosa suele generar lecturas erróneas. Apaga ventiladores, televisores y cualquier fuente de sonido continuo antes de empezar.",
      "Parar en cuanto la nota cambia sin esperar a que se estabilice puede dejar el instrumento aún desafinado. Espera a que el indicador se quede fijo en un valor estable.",
      "Afinar bajando hasta la nota objetivo en vez de subir: es mejor bajar ligeramente por debajo del objetivo y subir, para que la tensión en la clavija sea uniforme.",
      "Girar la clavija demasiado rápido: cerca de la afinación correcta, gira despacio y en pequeños incrementos para no pasarte."
    ];
  }
  if (contentLocale === "pt") {
    return [
      `Tocar mais de uma corda de ${instrument} ao mesmo tempo torna a detecção instável — o detector capta várias frequências e não consegue determinar qual você está afinando.`,
      "Afinar em uma sala barulhenta costuma gerar leituras errôneas. Desligue ventiladores, televisores e qualquer fonte de som contínuo antes de começar.",
      "Parar assim que a nota muda sem esperar que se estabilize pode deixar o instrumento ainda desafinado. Aguarde o ponteiro fixar em um valor estável.",
      "Afinar descendo até a nota alvo em vez de subir: é melhor ir ligeiramente abaixo do alvo e subir, para que a tensão na tarraxa seja uniforme.",
      "Girar a tarraxa rápido demais: perto da afinação correta, gire devagar e em pequenos incrementos para não ultrapassar."
    ];
  }
  if (contentLocale === "zh") {
    return [
      `同时演奏${instrument}的多根弦会使检测变得不稳定——检测器会捕捉多个频率，无法确定你正在调哪根弦。`,
      "在嘈杂的房间里调音往往会导致错误的读数。在开始之前关闭风扇、电视和任何持续的噪音源。",
      "一看到音符变化就停下，而不等其稳定，可能会让乐器仍然走音。等待指针停在稳定值上。",
      "向下调到目标音符而不是向上调：最好稍微低于目标然后向上调，使调弦钮上的张力均匀一致。",
      "转动调弦钮太快：在接近正确音高时，慢慢转动并以小增量调整，以避免过冲。"
    ];
  }
  if (contentLocale === "ru") {
    return [
      `Игра на нескольких струнах ${instrument} одновременно дестабилизирует определение — детектор улавливает несколько частот и не может установить, какую струну вы настраиваете.`,
      "Настройка в шумной комнате часто приводит к ошибочным показаниям. Выключите вентиляторы, телевизоры и любые источники постоянного шума перед началом.",
      "Остановиться, как только нота изменилась, не дожидаясь стабилизации, может оставить инструмент расстроенным. Ждите, пока стрелка установится на стабильном значении.",
      "Настраивать спуском к целевой ноте вместо подъёма: лучше немного опуститься ниже цели и поднять, чтобы натяжение на колке было равномерным.",
      "Поворачивать колок слишком быстро: вблизи правильной высоты крутите медленно и небольшими шагами, чтобы не промахнуться."
    ];
  }
  if (contentLocale === "ja") {
    return [
      `${instrument}の複数の弦を同時に弾くと検出が不安定になります——検出器が複数の周波数を捉え、どの弦を調整しているか判断できなくなります。`,
      "うるさい部屋でのチューニングは誤った読み取りにつながりやすいです。始める前にファン、テレビ、継続的なノイズ源を全て切ってください。",
      "音符が変わった瞬間に待つことなく止めてしまうと、楽器がまだ外れた状態のままになることがあります。針が安定した値に落ち着くのを待ちましょう。",
      "目標音に向かって下から調整するのではなく上から：目標よりやや下に行って上に調整する方が、ペグへの張力が均一になります。",
      "チューニングペグを回しすぎ：正しい音高に近いところでは、行き過ぎを避けるために小さな増分でゆっくり回してください。"
    ];
  }
  if (contentLocale === "ko") {
    return [
      `${instrument}의 여러 줄을 동시에 연주하면 감지가 불안정해집니다——감지기가 여러 주파수를 포착하여 어느 줄을 조율하는지 파악하지 못합니다.`,
      "시끄러운 방에서 조율하면 잘못된 읽기를 얻기 쉽습니다. 시작 전에 팬, TV 및 지속적인 소음 원을 모두 끄세요.",
      "음이 바뀌는 즉시 안정될 때까지 기다리지 않고 멈추면 악기가 여전히 음이 맞지 않은 상태로 남을 수 있습니다. 포인터가 안정된 값에 고정될 때까지 기다리세요.",
      "목표 음을 향해 내려가며 조율하는 대신 올라가며 조율하세요: 목표보다 약간 낮게 가서 올라가는 것이 더 좋으며, 그러면 페그의 장력이 균일해집니다.",
      "튜닝 페그를 너무 빨리 돌리기: 올바른 음높이 근처에서는 지나치지 않도록 천천히 작은 증분으로 돌리세요."
    ];
  }
  if (contentLocale === "ar") {
    return [
      `عزف أكثر من وتر من ${instrument} في آنٍ واحد يجعل الاكتشاف غير مستقر — يلتقط الكاشف تردداتٍ متعددة ولا يستطيع تحديد الوتر الذي تضبطه.`,
      "الضبط في غرفة صاخبة يؤدي بسهولة إلى قراءات خاطئة. أطفئ المراوح والتلفاز وأي مصدر صوت مستمر قبل البدء.",
      "التوقف بمجرد تغيير النغمة دون انتظار استقرارها قد يترك الآلة لا تزال غير مضبوطة. انتظر حتى يستقر المؤشر على قيمة ثابتة.",
      "الضبط بالنزول نحو النغمة المستهدفة بدلًا من الصعود: من الأفضل النزول قليلًا دون الهدف ثم الصعود إليه حتى تكون مقاومة المفتاح منتظمة.",
      "تدوير مفتاح الوتر بسرعة كبيرة: قرب الضبط الصحيح، دور ببطء وبخطوات صغيرة لتجنب التجاوز."
    ];
  }
  return [
    `Playing more than one ${instrument} string or note at once makes detection unstable — the detector picks up multiple frequencies and cannot determine which string you are tuning.`,
    "Tuning in a noisy room often leads to false readings. Turn off fans, TVs and any source of continuous sound before starting.",
    "Stopping as soon as the note changes without waiting for it to settle can leave the instrument slightly out of tune. Wait for the needle to stabilize on a steady value.",
    "Tuning down to the target note instead of up: it is better to go slightly below the target and tune up, so the string tension on the peg is consistent.",
    "Turning the tuning peg too fast: close to correct pitch, turn slowly in small increments to avoid overshooting."
  ];
}

function relatedToolsForGuide(locale: Locale, primaryTool: ToolSlug, targetPath?: string) {
  const titles = localizedToolTitles(locale);
  const tunerHref = targetPath ? `/${locale}/${targetPath}` : `/${locale}/tools/${primaryTool}`;
  const cl = getContentLocale(locale);
  const isFr = cl === "fr";
  const isDe = cl === "de";
  const isEs = cl === "es";
  const isPt = cl === "pt";
  const isZh = cl === "zh";
  const isRu = cl === "ru";
  const isJa = cl === "ja";
  const isKo = cl === "ko";
  const isAr = cl === "ar";
  return [
    { href: tunerHref, title: titles[primaryTool], description: locale === "it" ? "Apri il tool principale collegato a questa guida." : isFr ? "Ouvrez l'outil principal lié à ce guide." : isDe ? "Öffne das Haupt-Tool zu diesem Guide." : isEs ? "Abre la herramienta principal relacionada con esta guía." : isPt ? "Abra a ferramenta principal relacionada a este guia." : isZh ? "打开与本指南相关的主要工具。" : isRu ? "Откройте основной инструмент, связанный с этим руководством." : isJa ? "このガイドに関連するメインツールを開く。" : isKo ? "이 가이드와 관련된 주요 도구를 여세요." : isAr ? "افتح الأداة الرئيسية المتعلقة بهذا الدليل." : "Open the main tool related to this guide." },
    { href: `/${locale}/tools/metronome`, title: titles.metronome, description: locale === "it" ? "Studia con BPM e suddivisioni stabili." : isFr ? "Travaillez avec un BPM et des subdivisions stables." : isDe ? "Übe mit stabiler BPM und Unterteilungen." : isEs ? "Practica con BPM y subdivisiones estables." : isPt ? "Pratique com BPM e subdivisões estáveis." : isZh ? "用稳定的BPM和细分节奏练习。" : isRu ? "Практикуйтесь со стабильным BPM и делениями." : isJa ? "安定したBPMとサブディビジョンで練習する。" : isKo ? "안정적인 BPM과 세분화로 연습하세요." : isAr ? "تدرب مع BPM وتقسيمات ثابتة." : "Practice with stable BPM and subdivisions." },
    { href: `/${locale}/tools/tap-bpm`, title: titles["tap-bpm"], description: locale === "it" ? "Calcola rapidamente il tempo medio di un brano." : isFr ? "Estimez rapidement le tempo moyen d'un morceau." : isDe ? "Schätze schnell das durchschnittliche Tempo eines Songs." : isEs ? "Estima rápidamente el tempo medio de una canción." : isPt ? "Estime rapidamente o tempo médio de uma música." : isZh ? "快速估算一首歌曲的平均速度。" : isRu ? "Быстро оцените средний темп песни." : isJa ? "曲の平均テンポをすばやく推定する。" : isKo ? "곡의 평균 템포를 빠르게 추정하세요." : isAr ? "قدّر إيقاع الأغنية المتوسط بسرعة." : "Estimate the average tempo of a song quickly." },
    { href: `/${locale}/tools/sound-level-meter`, title: titles["sound-level-meter"], description: locale === "it" ? "Controlla il livello del suono e il rumore nella stanza." : isFr ? "Vérifiez le niveau sonore et le bruit de la pièce." : isDe ? "Prüfe Schallpegel und Raumgeräusche." : isEs ? "Comprueba el nivel de sonido y el ruido de la sala." : isPt ? "Verifique o nível de som e o ruído da sala." : isZh ? "检查声音级别和房间噪音。" : isRu ? "Проверьте уровень звука и шум в комнате." : isJa ? "音量レベルと室内ノイズを確認する。" : isKo ? "음량 레벨과 방의 소음을 확인하세요." : isAr ? "تحقق من مستوى الصوت وضوضاء الغرفة." : "Check sound level and room noise." }
  ];
}

function tuningUseText(locale: Locale, name: string, instrument: string) {
  const lowerName = name.toLowerCase();
  const cl2 = getContentLocale(locale);
  const isIt = cl2 === "it";
  const isFr = cl2 === "fr";
  const isDe = cl2 === "de";
  const isEs = cl2 === "es";
  const isPt = cl2 === "pt";
  const isZh = cl2 === "zh";
  const isRu = cl2 === "ru";
  const isJa = cl2 === "ja";
  const isKo = cl2 === "ko";
  const isAr = cl2 === "ar";
  const useText =
    lowerName.includes("drop")
      ? isIt
        ? "Questa accordatura è utile per riff più pesanti, power chord rapidi e registri più bassi."
        : isFr
          ? "Cet accordage est utile pour les riffs plus lourds, les power chords rapides et un registre plus grave."
          : isDe
            ? "Diese Stimmung ist nützlich für schwerere Riffs, schnelle Powerchords und ein tieferes Register."
            : isEs
              ? "Esta afinación es útil para riffs más pesados, power chords rápidos y registros más bajos."
              : isPt
                ? "Esta afinação é útil para riffs mais pesados, power chords rápidos e registros mais baixos."
                : isZh
                  ? "这种调音对于更重的riff、快速的power chord和更低的音域很有用。"
                  : isRu
                    ? "Этот строй полезен для более тяжёлых риффов, быстрых пауэрчордов и нижнего регистра."
                    : isJa
                      ? "このチューニングは重いリフ、素早いパワーコード、低音域に役立ちます。"
                      : isKo
                        ? "이 조율은 더 무거운 리프, 빠른 파워 코드, 낮은 음역에 유용합니다."
                        : isAr
                          ? "هذا الضبط مفيد للريف الأثقل وpower chords السريعة والسجلات الأخفض."
                          : "This tuning is useful for heavier riffs, quick power chords and a lower register."
      : lowerName.includes("open") || lowerName.includes("dadgad")
        ? isIt
          ? "Questa accordatura è utile per accordi aperti, droni e accompagnamenti più ricchi."
          : isFr
            ? "Cet accordage est utile pour les accords à vide, les notes tenues et un accompagnement plus riche."
            : isDe
              ? "Diese Stimmung ist nützlich für Leersaiten-Akkorde, Bordunnoten und eine reichere Begleitung."
              : isEs
                ? "Esta afinación es útil para acordes abiertos, notas pedal y acompañamientos más ricos."
                : isPt
                  ? "Esta afinação é útil para acordes abertos, notas pedal e acompanhamentos mais ricos."
                  : isZh
                    ? "这种调音对于开放和弦、持续音和更丰富的伴奏很有用。"
                    : isRu
                      ? "Этот строй полезен для открытых аккордов, педальных нот и более насыщенного аккомпанемента."
                      : isJa
                        ? "このチューニングはオープンコード、ドローン音、豊かな伴奏に役立ちます。"
                        : isKo
                          ? "이 조율은 오픈 코드, 드론 음, 더 풍부한 반주에 유용합니다."
                          : isAr
                            ? "هذا الضبط مفيد للأوتار المفتوحة والنغمات الثابتة والمصاحبة الأغنى."
                            : "This tuning is useful for open chords, drone notes and richer accompaniment."
        : isIt
          ? "Questa accordatura è utile quando vuoi rimanere vicino allo standard ma adattare l'estensione o la voce."
          : isFr
            ? "Cet accordage est utile quand vous voulez rester proche du standard tout en adaptant la tessiture ou le confort vocal."
            : isDe
              ? "Diese Stimmung ist nützlich, wenn du nahe am Standard bleiben, aber den Tonumfang oder den stimmlichen Komfort anpassen willst."
              : isEs
                ? "Esta afinación es útil cuando quieres mantenerte cerca del estándar pero adaptar la extensión o el registro vocal."
                : isPt
                  ? "Esta afinação é útil quando você quer ficar próximo do padrão mas adaptar a extensão ou o conforto vocal."
                  : isZh
                    ? "当你想保持接近标准调音但调整音域或声部舒适度时，这种调音很有用。"
                    : isRu
                      ? "Этот строй полезен, когда хочется оставаться близко к стандарту, адаптируя диапазон или вокальный комфорт."
                      : isJa
                        ? "スタンダードに近くありながら音域やボーカルの快適さを適応させたいときにこのチューニングが役立ちます。"
                        : isKo
                          ? "표준에 가깝게 유지하면서 음역이나 보컬 편안함을 조정하고 싶을 때 이 조율이 유용합니다."
                          : isAr
                            ? "هذا الضبط مفيد عندما تريد البقاء قريبًا من القياسي مع تكييف المدى أو راحة الصوت."
                            : "This tuning is useful when you want to stay close to standard while adapting range or vocal comfort.";

  const genreText =
    lowerName.includes("drop")
      ? isIt
        ? "È comune in rock moderno, metal, hard rock e arrangiamenti più aggressivi."
        : isFr
          ? "Il est courant dans le rock moderne, le metal, le hard rock et les arrangements plus lourds."
          : isDe
            ? "Sie ist in modernem Rock, Metal, Hard Rock und schwereren Arrangements verbreitet."
            : isEs
              ? "Es común en rock moderno, metal, hard rock y arreglos más agresivos."
              : isPt
                ? "É comum em rock moderno, metal, hard rock e arranjos mais agressivos."
                : isZh
                  ? "在现代摇滚、金属、硬摇滚和更重的编曲中很常见。"
                  : isRu
                    ? "Распространён в современном роке, металле, хард-роке и более тяжёлых аранжировках."
                    : isJa
                      ? "モダンロック、メタル、ハードロック、よりヘビーなアレンジでよく使われます。"
                      : isKo
                        ? "현대 록, 메탈, 하드 록, 더 무거운 편곡에서 일반적입니다."
                        : isAr
                          ? "شائع في الروك الحديث والميتال والهارد روك والترتيبات الأثقل."
                          : "It is common in modern rock, metal, hard rock and heavier arrangements."
      : lowerName.includes("open") || lowerName.includes("dadgad")
        ? isIt
          ? "È comune in folk, slide guitar, singer-songwriter e parti acustiche atmosferiche."
          : isFr
            ? "Il est courant dans le folk, la slide guitar, la chanson d'auteur et les parties acoustiques atmosphériques."
            : isDe
              ? "Sie ist in Folk, Slide-Gitarre, Singer-Songwriter-Musik und atmosphärischen Akustikparts verbreitet."
              : isEs
                ? "Es común en folk, slide guitar, música de cantautor y partes acústicas atmosféricas."
                : isPt
                  ? "É comum em folk, slide guitar, música de cantautor e partes acústicas atmosféricas."
                  : isZh
                    ? "在民谣、滑音吉他、创作歌手音乐和大气的原声部分中很常见。"
                    : isRu
                      ? "Распространён в фолке, слайд-гитаре, авторской песне и атмосферных акустических партиях."
                      : isJa
                        ? "フォーク、スライドギター、シンガーソングライター音楽、雰囲気のあるアコースティックパートでよく使われます。"
                        : isKo
                          ? "포크, 슬라이드 기타, 싱어송라이터 음악, 분위기 있는 어쿠스틱 파트에서 일반적입니다."
                          : isAr
                            ? "شائع في الفولك وslide guitar وموسيقى المؤلف والأجزاء الأكوستيكية الجوية."
                            : "It is common in folk, slide guitar, singer-songwriter music and atmospheric acoustic parts."
        : isIt
          ? `È comune quando ${instrument} deve restare familiare ma leggermente adattato al brano o alla tessitura vocale.`
          : isFr
            ? `Il est courant quand ${instrument} doit rester familier tout en s'adaptant à un morceau ou à une tessiture vocale.`
            : isDe
              ? `Sie ist verbreitet, wenn ${instrument} vertraut bleiben, sich aber an einen Song oder Stimmumfang anpassen soll.`
              : isEs
                ? `Es común cuando ${instrument} necesita seguir siendo familiar pero adaptarse a una canción o tesitura vocal.`
                : isPt
                  ? `É comum quando ${instrument} precisa permanecer familiar mas adaptar-se a uma música ou tessitura vocal.`
                  : isZh
                    ? `当${instrument}需要保持熟悉感但同时适应歌曲或声域时很常见。`
                    : isRu
                      ? `Распространён, когда ${instrument} должен оставаться привычным, адаптируясь к песне или диапазону голоса.`
                      : isJa
                        ? `${instrument}が親しみやすさを保ちながら曲や声域に適応する必要があるときによく使われます。`
                        : isKo
                          ? `${instrument}가 익숙함을 유지하면서 곡이나 성역에 적응해야 할 때 일반적입니다.`
                          : isAr
                            ? `شائع عندما يحتاج ${instrument} إلى البقاء مألوفًا مع التكيف مع أغنية أو مدى صوتي.`
                            : `It is common when ${instrument} needs to stay familiar while adapting to a song or vocal range.`;

  return { genreText, useText };
}

function tuningSectionLabels(locale: Locale) {
  switch (locale) {
    case "it":
      return {
        commonGenres: "Generi comuni",
        compatibleInstruments: "Strumenti compatibili",
        practicalTips: "Consigli pratici"
      };
    case "fr":
      return {
        commonGenres: "Genres courants",
        compatibleInstruments: "Instruments compatibles",
        practicalTips: "Conseils pratiques"
      };
    case "es":
      return {
        commonGenres: "Géneros comunes",
        compatibleInstruments: "Instrumentos compatibles",
        practicalTips: "Consejos prácticos"
      };
    case "de":
      return {
        commonGenres: "Häufige Genres",
        compatibleInstruments: "Passende Instrumente",
        practicalTips: "Praktische Tipps"
      };
    case "pt":
      return {
        commonGenres: "Gêneros comuns",
        compatibleInstruments: "Instrumentos compatíveis",
        practicalTips: "Dicas práticas"
      };
    case "ja":
      return {
        commonGenres: "よく使われるジャンル",
        compatibleInstruments: "対応する楽器",
        practicalTips: "実践のコツ"
      };
    case "ko":
      return {
        commonGenres: "자주 쓰이는 장르",
        compatibleInstruments: "호환 악기",
        practicalTips: "실전 팁"
      };
    case "zh":
      return {
        commonGenres: "常见风格",
        compatibleInstruments: "适用乐器",
        practicalTips: "实用建议"
      };
    case "ru":
      return {
        commonGenres: "Типичные жанры",
        compatibleInstruments: "Подходящие инструменты",
        practicalTips: "Практические советы"
      };
    case "ar":
      return {
        commonGenres: "أنماط شائعة",
        compatibleInstruments: "الآلات المناسبة",
        practicalTips: "نصائح عملية"
      };
    default:
      return {
        commonGenres: "Common genres",
        compatibleInstruments: "Compatible instruments",
        practicalTips: "Practical tips"
      };
  }
}

function buildInstrumentGuide(locale: Locale, instrument: Instrument, guide: GuideSlug): GuideContent {
  const copy = tuningGuideCopy[getContentLocale(locale)];
  const label = getInstrumentLabel(instrument, locale);
  const tuning = tuningString(instrument, locale);
  const targetPath = targetPathForInstrument(instrument);
  return {
    description: copy.description(label, tuning),
    faq: genericInstrumentFaq(locale, label, tuning),
    intro: copy.intro(label, tuning),
    keywords: [...copy.keywords(label, tuning), tuning, "TuneUniversal"],
    noteRows: noteRowsFromNotes(tunings[instrument], locale),
    relatedGuides: alternativeTuningGuideSlugs.filter((slug) => {
      const related = alternativeTuningFromGuideSlug(slug);
      return related?.instrument === instrument;
    }).slice(0, 4),
    relatedTools: relatedToolsForGuide(locale, coreToolForInstrument(instrument), targetPath),
    sections: copy.sections(label, tuning),
    steps: copy.steps(label),
    commonMistakes: genericMistakes(locale, label),
    targetDescription: copy.description(label, tuning),
    targetPath,
    targetTitle: copy.targetTitle(label),
    title: copy.title(label),
    tool: coreToolForInstrument(instrument)
  };
}

function alternativeTuningFromGuideSlug(guide: GuideSlug) {
  return alternativeTuningGuides[guide as AlternativeTuningGuideSlug] ?? null;
}

function buildAlternativeTuningGuide(locale: Locale, guide: GuideSlug): GuideContent | null {
  const tuningGuide = alternativeTuningFromGuideSlug(guide);
  if (!tuningGuide) return null;

  const preset = tuningPresets[tuningGuide.instrument]?.find((item) => item.id === tuningGuide.presetId);
  if (!preset) return null;

  const copy = alternativeTuningLabels[getContentLocale(locale)];
  const instrument = getInstrumentLabel(tuningGuide.instrument, locale);
  const tuning = tuningStringFromNotes(preset.notes, locale);
  const name = tuningGuide.label;
  const targetPath = targetPathForInstrument(tuningGuide.instrument);
  const useContent = tuningUseText(locale, name, instrument);
  const sectionLabels = tuningSectionLabels(locale);
  const instrumentGuide = instrumentGuideSlugForInstrument(tuningGuide.instrument);
  const similarTuningGuides = alternativeTuningGuideSlugs.filter((slug) => {
    if (slug === guide) return false;
    const related = alternativeTuningFromGuideSlug(slug);
    return related?.instrument === tuningGuide.instrument;
  }).slice(0, 3);

  return {
    description: copy.description(name, instrument, tuning),
    faq: genericTuningFaq(locale, name, instrument, tuning),
    intro: copy.intro(name, instrument, tuning),
    keywords: [...copy.keywords(name, instrument, tuning), "alternate tuning", "guitar tuning", "TuneUniversal"],
    noteRows: noteRowsFromNotes(preset.notes, locale),
    relatedGuides: [instrumentGuide, ...similarTuningGuides].filter(Boolean) as GuideSlug[],
    relatedTools: relatedToolsForGuide(locale, coreToolForInstrument(tuningGuide.instrument), targetPath),
    sections: [
      { title: copy.referenceTitle, body: tuning },
      {
        title: sectionLabels.compatibleInstruments,
        body:
          locale === "it"
            ? `Questa accordatura è pensata per ${instrument}. Se usi lo stesso registro o la stessa disposizione delle corde, puoi partire da queste note come riferimento.`
            : getContentLocale(locale) === "fr"
            ? `Cet accordage est conçu pour ${instrument}. Si vous utilisez le même registre ou la même disposition des cordes, vous pouvez partir de ces notes comme référence.`
            : getContentLocale(locale) === "de"
            ? `Diese Stimmung ist für ${instrument} gedacht. Wenn du denselben Tonumfang oder dieselbe Saitenanordnung nutzt, kannst du diese Noten als Referenz verwenden.`
            : `This tuning is designed for ${instrument}. If you use the same range or string layout, you can use these notes as your reference.`
      },
      {
        title: copy.setupTitle,
        body: useContent.useText
      },
      {
        title: sectionLabels.commonGenres,
        body: useContent.genreText
      },
      {
        title: sectionLabels.practicalTips,
        body:
          locale === "it"
            ? "Accorda sempre dalla corda più grave alla più acuta, ricontrolla tutte le note alla fine e salva il preset se usi spesso questa accordatura."
            : getContentLocale(locale) === "fr"
            ? "Accordez toujours de la corde la plus grave à la plus aiguë, revérifiez toutes les notes à la fin et enregistrez le preset si vous utilisez souvent cet accordage."
            : getContentLocale(locale) === "de"
            ? "Stimme immer von der tiefsten zur höchsten Saite, prüfe am Ende alle Noten erneut und speichere das Preset, wenn du diese Stimmung oft nutzt."
            : "Tune from the lowest string to the highest one, check all notes again at the end and save the preset if you use this tuning often."
      }
    ],
    steps: copy.steps(name, instrument),
    commonMistakes: genericMistakes(locale, instrument),
    targetDescription: copy.description(name, instrument, tuning),
    targetPath,
    targetTitle: copy.targetTitle(name, instrument),
    title: copy.title(name, instrument),
    tool: coreToolForInstrument(tuningGuide.instrument)
  };
}

export function isGuideSlug(value: string | undefined): value is GuideSlug {
  return Boolean(value && guideSlugs.includes(value as GuideSlug));
}

export function getGuideContent(locale: Locale, guide: GuideSlug): GuideContent {
  const instrument = instrumentFromGuideSlug(guide);
  if (instrument) return applyGuideOverride(buildInstrumentGuide(locale, instrument, guide), locale, guide);
  const alternativeGuide = buildAlternativeTuningGuide(locale, guide);
  if (alternativeGuide) return applyGuideOverride(alternativeGuide, locale, guide);
  return applyGuideOverride(
    utilityGuides[getContentLocale(locale)][guide as (typeof utilityGuideSlugs)[number]] as GuideContent,
    locale,
    guide
  );
}

export function guidesForTool(tool: ToolSlug): GuideSlug[] {
  if (tool === "guitar-tuner") {
    return [
      "chromatic-tuner-guide",
      "guitar-tuner-with-microphone",
      "how-to-tune-guitar",
      "standard-guitar-tuning",
      "eb-standard-tuning",
      "half-step-down-tuning",
      "d-standard-tuning",
      "full-step-down-tuning",
      "drop-d-tuning",
      "drop-c-tuning",
      "open-g-tuning",
      "common-guitar-tunings",
      "how-to-read-chords"
    ];
  }
  if (tool === "bass-tuner") return ["how-to-tune-bass", "standard-bass-tuning", "five-string-bass-tuning"];
  if (tool === "ukulele-tuner") return ["how-to-tune-ukulele", "ukulele-standard-tuning", "baritone-ukulele-tuning", "low-g-ukulele-tuning", "d-ukulele-tuning"];
  if (tool === "metronome") return ["metronome-for-guitar", "how-to-use-metronome", "metronome-subdivisions", "how-to-find-bpm"];
  if (tool === "tap-bpm") return ["how-to-find-bpm"];
  if (tool === "chord-transposer") return ["how-to-transpose-chords", "how-to-read-chords"];
  if (tool === "sound-level-meter") return ["sound-meter-db-guide"];
  if (tool === "pitch-generator") return ["pitch-generator-guide", "chromatic-tuner-guide"];
  return [];
}

export function guidesForInstrument(instrument: Instrument): GuideSlug[] {
  const primaryGuide = instrumentGuideSlugForInstrument(instrument);
  const relatedTunings = alternativeTuningGuideSlugs.filter((slug) => {
    const related = alternativeTuningFromGuideSlug(slug);
    return related?.instrument === instrument;
  });

  return [primaryGuide, ...relatedTunings].filter(Boolean) as GuideSlug[];
}


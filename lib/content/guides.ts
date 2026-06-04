import type { Locale } from "@/lib/i18n/locales";
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
  "pitch-generator-guide"
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
>;

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

export const guideIndexContent: Record<Locale, { description: string; title: string }> = {
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

const tuningGuideCopy: Record<Locale, TuningGuideCopy> = {
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
    description: (instrument, tuning) => `A quick guide to tuning ${instrument} with a microphone. Reference notes: ${tuning}.`,
    intro: (instrument, tuning) => `TuneUniversal helps you tune ${instrument} directly in your browser. Select the instrument, allow microphone access and use these reference notes: ${tuning}.`,
    steps: (instrument) => [`Open the ${instrument} tuner.`, "Allow microphone access.", "Play one clear string or note.", "Tune until the indicator is centered."],
    sections: (instrument, tuning) => [
      { title: "Reference notes", body: `This page uses ${tuning} as reference notes. Play one note at a time so the pitch detector can stay stable.` },
      { title: "Better microphone results", body: `Keep ${instrument} close to the microphone, reduce room noise and wait a moment after playing so the pitch can settle.` }
    ],
    keywords: (instrument) => [`tune ${instrument}`, `online ${instrument} tuner`, `free ${instrument} tuner`, `${instrument} microphone tuner`],
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
    description: (instrument, tuning) => `Guida rapida per accordare ${instrument} con il microfono. Note di riferimento: ${tuning}.`,
    intro: (instrument, tuning) => `TuneUniversal ti aiuta ad accordare ${instrument} direttamente nel browser. Seleziona lo strumento, consenti il microfono e usa queste note di riferimento: ${tuning}.`,
    steps: (instrument) => [`Apri l'accordatore per ${instrument}.`, "Consenti l'accesso al microfono.", "Suona una corda o una nota pulita.", "Regola finché l'indicatore è al centro."],
    sections: (instrument, tuning) => [
      { title: "Note di riferimento", body: `Questa pagina usa ${tuning} come note di riferimento. Suona una nota alla volta per mantenere stabile il rilevamento.` },
      { title: "Migliore lettura del microfono", body: `Tieni ${instrument} vicino al microfono, riduci il rumore nella stanza e aspetta un istante dopo l'attacco perché la nota si stabilizzi.` }
    ],
    keywords: (instrument) => [`accordare ${instrument}`, `accordatore ${instrument} online`, `accordatore ${instrument} gratis`, `${instrument} con microfono`],
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

const utilityGuides: Record<Locale, Record<UtilityGuideSlug, Omit<GuideContent, "targetPath">>> = {
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
    "standard-bass-tuning": standardBassUtility("ar")
  },
  de: {
    "how-to-find-bpm": utilityBpm("de"),
    "how-to-use-metronome": utilityMetronome("de"),
    ...extraUtilityGuides("de"),
    ...queryDrivenUtilityGuides("de"),
    "standard-bass-tuning": standardBassUtility("de")
  },
  en: {
    "how-to-find-bpm": utilityBpm("en"),
    "how-to-use-metronome": utilityMetronome("en"),
    ...extraUtilityGuides("en"),
    ...queryDrivenUtilityGuides("en"),
    "standard-bass-tuning": standardBassUtility("en")
  },
  es: {
    "how-to-find-bpm": utilityBpm("es"),
    "how-to-use-metronome": utilityMetronome("es"),
    ...extraUtilityGuides("es"),
    ...queryDrivenUtilityGuides("es"),
    "standard-bass-tuning": standardBassUtility("es")
  },
  fr: {
    "how-to-find-bpm": utilityBpm("fr"),
    "how-to-use-metronome": utilityMetronome("fr"),
    ...extraUtilityGuides("fr"),
    ...queryDrivenUtilityGuides("fr"),
    "standard-bass-tuning": standardBassUtility("fr")
  },
  it: {
    "how-to-find-bpm": utilityBpm("it"),
    "how-to-use-metronome": utilityMetronome("it"),
    ...extraUtilityGuides("it"),
    ...queryDrivenUtilityGuides("it"),
    "standard-bass-tuning": standardBassUtility("it")
  },
  ja: {
    "how-to-find-bpm": utilityBpm("ja"),
    "how-to-use-metronome": utilityMetronome("ja"),
    ...extraUtilityGuides("ja"),
    ...queryDrivenUtilityGuides("ja"),
    "standard-bass-tuning": standardBassUtility("ja")
  },
  ko: {
    "how-to-find-bpm": utilityBpm("ko"),
    "how-to-use-metronome": utilityMetronome("ko"),
    ...extraUtilityGuides("ko"),
    ...queryDrivenUtilityGuides("ko"),
    "standard-bass-tuning": standardBassUtility("ko")
  },
  pt: {
    "how-to-find-bpm": utilityBpm("pt"),
    "how-to-use-metronome": utilityMetronome("pt"),
    ...extraUtilityGuides("pt"),
    ...queryDrivenUtilityGuides("pt"),
    "standard-bass-tuning": standardBassUtility("pt")
  },
  ru: {
    "how-to-find-bpm": utilityBpm("ru"),
    "how-to-use-metronome": utilityMetronome("ru"),
    ...extraUtilityGuides("ru"),
    ...queryDrivenUtilityGuides("ru"),
    "standard-bass-tuning": standardBassUtility("ru")
  },
  zh: {
    "how-to-find-bpm": utilityBpm("zh"),
    "how-to-use-metronome": utilityMetronome("zh"),
    ...extraUtilityGuides("zh"),
    ...queryDrivenUtilityGuides("zh"),
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
  }[locale];

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
      bass: ["How to tune a bass online", "Tune bass online to E A D G with clearer help for 4 string and 5 string setups.", "This guide helps you check each bass string quickly, then confirm the overall balance before practice, rehearsal or recording."],
      violin: ["How to tune a violin online", "Tune violin online to G D A E with simple steps that work well for beginners and daily warmups.", "Use this guide when you want a steadier microphone reading and a straightforward routine for everyday violin tuning."],
      bassStd: ["Standard bass tuning guide", "See the standard bass tuning E A D G and learn why it is still the default setup for most bass players.", "Standard bass tuning is the safest starting point for lessons, band practice and most song material because it stays balanced and familiar."],
      tunings: ["Common guitar tunings", "Compare Standard, Drop D, Eb Standard, Open D and Open G in one practical guitar tuning guide.", "This page brings together the guitar tunings players search for most often, so you can choose a sound quickly before opening the tuner."],
      dropD: ["Drop D tuning guide", "Tune guitar to D A D G B E for heavier low riffs and faster one-finger power chords.", "Drop D remains one of the most common alternate tunings because it adds weight to the low string without making the rest of the neck feel unfamiliar."],
      dropC: ["Drop C tuning guide", "Learn the exact Drop C notes and when players use this tuning for modern rock and metal.", "Drop C gives you a lower register while keeping familiar upper-string shapes, which is why it works so well for heavy riffs and modern rhythm parts."],
      openD: ["Open D tuning guide", "Use Open D tuning for resonant open strings, slide guitar and wider acoustic chord voicings.", "Open D is useful when you want a full open-chord sound, easier slide shapes and a more spacious acoustic feel."],
      eb: ["Eb Standard tuning guide", "Lower every guitar string by a semitone to Eb Ab Db Gb Bb Eb for softer tension and a darker voice.", "Eb Standard is common when players want a slightly lower singing range or a looser feel without relearning standard chord shapes."]
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
  }[locale];

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
  const manualOverride = guideContentOverrides[locale]?.[guide];
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
  }[locale];
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
  }[locale];

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
  }[locale];

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

  const shared = locale === "it" ? italianShared : englishShared;

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
              : "A chromatic tuner helps when you do not want to rely only on standard strings and need to detect any note or alternate tuning."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Suona una sola nota per volta e riduci il rumore ambientale: il rilevamento diventa molto piu stabile."
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
              : "A browser microphone is one of the fastest ways to tune without extra cables, apps or pedals."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Tieni la chitarra vicino al telefono o al laptop, suona una corda alla volta e lascia decadere la nota prima di regolare."
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
              : "A guitar metronome helps you improve groove, picking control, riff accuracy and cleaner chord changes."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Lavora prima su quarti e ottavi, poi aggiungi suddivisioni e cicli progressivi per salire di velocita."
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
              : "A sound meter is useful for checking room loudness, practice volume and the difference between quiet and noisy environments."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Lascia il telefono o il computer fermo per qualche secondo: media, minimo e massimo diventano piu affidabili."
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
              : "A pitch generator is useful for ear training, reference notes and quick checks of speakers, headphones and specific frequencies."
        },
        {
          title: shared.tipTitle,
          body:
            locale === "it"
              ? "Parti sempre con volume basso, soprattutto sulle frequenze acute, poi alzalo solo quanto basta."
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
  }[locale];
  return {
    title: data[0],
    description: data[1],
    intro: data[2],
    keywords: [data[3], "tap bpm", "beats per minute"],
    steps: ["Start the song.", "Tap on each beat.", "Continue for at least 8 taps.", "Read the average BPM."],
    sections: [{ title: "BPM", body: "BPM means beats per minute and describes the speed of the pulse." }, { title: "Stable estimate", body: "Tap the same rhythmic point each time for a more stable average." }],
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
  }[locale];
  return {
    title: data[0],
    description: data[1],
    intro: data[2],
    keywords: ["online metronome", "music bpm", "metronome practice"],
    steps: ["Choose a slow BPM.", "Set the meter.", "Start the click.", "Increase speed gradually."],
    sections: [{ title: "BPM and meter", body: "BPM defines the pulse speed. Meter groups beats and accents." }, { title: "Subdivisions", body: "Duplets, triplets and quadruplets help you practice timing inside the beat." }],
    tool: "metronome"
  };
}

function standardBassUtility(locale: Locale): Omit<GuideContent, "targetPath"> {
  const label = getInstrumentLabel("bass", locale);
  const tuning = tuningString("bass", locale);
  const copy = tuningGuideCopy[locale];
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
  Locale,
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
  if (locale === "it") {
    return [
      { question: `Qual è l'accordatura standard di ${instrument}?`, answer: `${instrument} usa qui queste note di riferimento: ${tuning}.` },
      { question: `Posso accordare ${instrument} dal telefono?`, answer: "Sì. Apri la guida e il relativo accordatore nel browser e consenti il microfono." }
    ];
  }
  return [
    { question: `What is the standard tuning for ${instrument}?`, answer: `${instrument} uses these reference notes here: ${tuning}.` },
    { question: `Can I tune ${instrument} on mobile?`, answer: "Yes. Open the guide and related tuner in your browser and allow microphone access." }
  ];
}

function genericTuningFaq(locale: Locale, name: string, instrument: string, tuning: string) {
  if (locale === "it") {
    return [
      { question: `Quali note usa l'accordatura ${name}?`, answer: `Per ${instrument}, questa pagina usa: ${tuning}.` },
      { question: `Serve un preset specifico?`, answer: "Se il preset è disponibile nel tuner puoi selezionarlo direttamente; in alternativa accorda ogni corda seguendo la tabella." }
    ];
  }
  return [
    { question: `Which notes does ${name} use?`, answer: `For ${instrument}, this page uses: ${tuning}.` },
    { question: "Do I need a dedicated preset?", answer: "If the preset is available in the tuner, select it directly. Otherwise tune each string to the note table." }
  ];
}

export const faqData = {
  instrument: genericInstrumentFaq,
  tuning: genericTuningFaq
};

function genericMistakes(locale: Locale, instrument: string) {
  if (locale === "it") {
    return [
      `Suonare più di una corda di ${instrument} alla volta rende il rilevamento instabile.`,
      "Accordare in una stanza rumorosa porta facilmente a letture sbagliate.",
      "Fermarsi appena la nota cambia senza aspettare che si stabilizzi può lasciare lo strumento ancora scordato."
    ];
  }
  return [
    `Playing more than one ${instrument} string or note at once makes detection unstable.`,
    "Tuning in a noisy room often leads to false readings.",
    "Stopping as soon as the note changes without waiting for it to settle can leave the instrument slightly out of tune."
  ];
}

function relatedToolsForGuide(locale: Locale, primaryTool: ToolSlug, targetPath?: string) {
  const titles = localizedToolTitles(locale);
  const tunerHref = targetPath ? `/${locale}/${targetPath}` : `/${locale}/tools/${primaryTool}`;
  return [
    { href: tunerHref, title: titles[primaryTool], description: locale === "it" ? "Apri il tool principale collegato a questa guida." : "Open the main tool related to this guide." },
    { href: `/${locale}/tools/metronome`, title: titles.metronome, description: locale === "it" ? "Studia con BPM e suddivisioni stabili." : "Practice with stable BPM and subdivisions." },
    { href: `/${locale}/tools/tap-bpm`, title: titles["tap-bpm"], description: locale === "it" ? "Calcola rapidamente il tempo medio di un brano." : "Estimate the average tempo of a song quickly." },
    { href: `/${locale}/tools/sound-level-meter`, title: titles["sound-level-meter"], description: locale === "it" ? "Controlla il livello del suono e il rumore nella stanza." : "Check sound level and room noise." }
  ];
}

function tuningUseText(locale: Locale, name: string, instrument: string) {
  const lowerName = name.toLowerCase();
  const useText =
    lowerName.includes("drop")
      ? locale === "it"
        ? "Questa accordatura è utile per riff più pesanti, power chord rapidi e registri più bassi."
        : "This tuning is useful for heavier riffs, quick power chords and a lower register."
      : lowerName.includes("open") || lowerName.includes("dadgad")
        ? locale === "it"
          ? "Questa accordatura è utile per accordi aperti, droni e accompagnamenti più ricchi."
          : "This tuning is useful for open chords, drone notes and richer accompaniment."
        : locale === "it"
          ? "Questa accordatura è utile quando vuoi rimanere vicino allo standard ma adattare l'estensione o la voce."
          : "This tuning is useful when you want to stay close to standard while adapting range or vocal comfort.";

  const genreText =
    lowerName.includes("drop")
      ? locale === "it"
        ? "È comune in rock moderno, metal, hard rock e arrangiamenti più aggressivi."
        : "It is common in modern rock, metal, hard rock and heavier arrangements."
      : lowerName.includes("open") || lowerName.includes("dadgad")
        ? locale === "it"
          ? "È comune in folk, slide guitar, singer-songwriter e parti acustiche atmosferiche."
          : "It is common in folk, slide guitar, singer-songwriter music and atmospheric acoustic parts."
        : locale === "it"
          ? `È comune quando ${instrument} deve restare familiare ma leggermente adattato al brano o alla tessitura vocale.`
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
  const copy = tuningGuideCopy[locale];
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

  const copy = alternativeTuningLabels[locale];
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
  return applyGuideOverride(utilityGuides[locale][guide as (typeof utilityGuideSlugs)[number]] as GuideContent, locale, guide);
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

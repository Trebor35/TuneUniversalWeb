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
  "metronome-subdivisions"
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
  "standard-bass-tuning" | "how-to-use-metronome" | "how-to-find-bpm"
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
    "standard-bass-tuning": standardBassUtility("ar")
  },
  de: {
    "how-to-find-bpm": utilityBpm("de"),
    "how-to-use-metronome": utilityMetronome("de"),
    ...extraUtilityGuides("de"),
    "standard-bass-tuning": standardBassUtility("de")
  },
  en: {
    "how-to-find-bpm": utilityBpm("en"),
    "how-to-use-metronome": utilityMetronome("en"),
    ...extraUtilityGuides("en"),
    "standard-bass-tuning": standardBassUtility("en")
  },
  es: {
    "how-to-find-bpm": utilityBpm("es"),
    "how-to-use-metronome": utilityMetronome("es"),
    ...extraUtilityGuides("es"),
    "standard-bass-tuning": standardBassUtility("es")
  },
  fr: {
    "how-to-find-bpm": utilityBpm("fr"),
    "how-to-use-metronome": utilityMetronome("fr"),
    ...extraUtilityGuides("fr"),
    "standard-bass-tuning": standardBassUtility("fr")
  },
  it: {
    "how-to-find-bpm": utilityBpm("it"),
    "how-to-use-metronome": utilityMetronome("it"),
    ...extraUtilityGuides("it"),
    "standard-bass-tuning": standardBassUtility("it")
  },
  ja: {
    "how-to-find-bpm": utilityBpm("ja"),
    "how-to-use-metronome": utilityMetronome("ja"),
    ...extraUtilityGuides("ja"),
    "standard-bass-tuning": standardBassUtility("ja")
  },
  ko: {
    "how-to-find-bpm": utilityBpm("ko"),
    "how-to-use-metronome": utilityMetronome("ko"),
    ...extraUtilityGuides("ko"),
    "standard-bass-tuning": standardBassUtility("ko")
  },
  pt: {
    "how-to-find-bpm": utilityBpm("pt"),
    "how-to-use-metronome": utilityMetronome("pt"),
    ...extraUtilityGuides("pt"),
    "standard-bass-tuning": standardBassUtility("pt")
  },
  ru: {
    "how-to-find-bpm": utilityBpm("ru"),
    "how-to-use-metronome": utilityMetronome("ru"),
    ...extraUtilityGuides("ru"),
    "standard-bass-tuning": standardBassUtility("ru")
  },
  zh: {
    "how-to-find-bpm": utilityBpm("zh"),
    "how-to-use-metronome": utilityMetronome("zh"),
    ...extraUtilityGuides("zh"),
    "standard-bass-tuning": standardBassUtility("zh")
  }
};

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
  if (instrument) return buildInstrumentGuide(locale, instrument, guide);
  const alternativeGuide = buildAlternativeTuningGuide(locale, guide);
  if (alternativeGuide) return alternativeGuide;
  return utilityGuides[locale][guide as (typeof utilityGuideSlugs)[number]];
}

export function guidesForTool(tool: ToolSlug): GuideSlug[] {
  if (tool === "guitar-tuner") {
    return [
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
  if (tool === "metronome") return ["how-to-use-metronome", "metronome-subdivisions", "how-to-find-bpm"];
  if (tool === "tap-bpm") return ["how-to-find-bpm"];
  if (tool === "chord-transposer") return ["how-to-transpose-chords", "how-to-read-chords"];
  return [];
}

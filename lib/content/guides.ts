import type { Locale } from "@/lib/i18n/locales";
import { getInstrumentLabel } from "@/lib/tools/instruments";
import { instrumentIds, type Instrument, type ToolSlug } from "@/lib/tools/toolConfig";
import { formatNoteName, tunings } from "@/lib/tools/tuner";

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

const extraGuideSlugs = ["standard-bass-tuning", "how-to-use-metronome", "how-to-find-bpm"] as const;

export const guideSlugs = [...instrumentGuideSlugs, ...extraGuideSlugs] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export type GuideContent = {
  description: string;
  intro: string;
  keywords: string[];
  sections: { body: string; title: string }[];
  steps: string[];
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

const utilityGuides: Record<Locale, Record<(typeof extraGuideSlugs)[number], Omit<GuideContent, "targetPath">>> = {
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
    "standard-bass-tuning": standardBassUtility("ar")
  },
  de: {
    "how-to-find-bpm": utilityBpm("de"),
    "how-to-use-metronome": utilityMetronome("de"),
    "standard-bass-tuning": standardBassUtility("de")
  },
  en: {
    "how-to-find-bpm": utilityBpm("en"),
    "how-to-use-metronome": utilityMetronome("en"),
    "standard-bass-tuning": standardBassUtility("en")
  },
  es: {
    "how-to-find-bpm": utilityBpm("es"),
    "how-to-use-metronome": utilityMetronome("es"),
    "standard-bass-tuning": standardBassUtility("es")
  },
  fr: {
    "how-to-find-bpm": utilityBpm("fr"),
    "how-to-use-metronome": utilityMetronome("fr"),
    "standard-bass-tuning": standardBassUtility("fr")
  },
  it: {
    "how-to-find-bpm": utilityBpm("it"),
    "how-to-use-metronome": utilityMetronome("it"),
    "standard-bass-tuning": standardBassUtility("it")
  },
  ja: {
    "how-to-find-bpm": utilityBpm("ja"),
    "how-to-use-metronome": utilityMetronome("ja"),
    "standard-bass-tuning": standardBassUtility("ja")
  },
  ko: {
    "how-to-find-bpm": utilityBpm("ko"),
    "how-to-use-metronome": utilityMetronome("ko"),
    "standard-bass-tuning": standardBassUtility("ko")
  },
  pt: {
    "how-to-find-bpm": utilityBpm("pt"),
    "how-to-use-metronome": utilityMetronome("pt"),
    "standard-bass-tuning": standardBassUtility("pt")
  },
  ru: {
    "how-to-find-bpm": utilityBpm("ru"),
    "how-to-use-metronome": utilityMetronome("ru"),
    "standard-bass-tuning": standardBassUtility("ru")
  },
  zh: {
    "how-to-find-bpm": utilityBpm("zh"),
    "how-to-use-metronome": utilityMetronome("zh"),
    "standard-bass-tuning": standardBassUtility("zh")
  }
};

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
  const guide = buildInstrumentGuide(locale, "bass", "standard-bass-tuning");
  return {
    ...guide,
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
                          : "Standard bass tuning"
  };
}

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

function tuningString(instrument: Instrument, locale: Locale) {
  const notation = locale === "it" || locale === "fr" || locale === "es" || locale === "pt" ? "latin" : "international";
  return tunings[instrument].map((note) => formatNoteName(`${note.name}${note.octave ?? ""}`, notation, false)).join(" - ");
}

function buildInstrumentGuide(locale: Locale, instrument: Instrument, guide: GuideSlug): GuideContent {
  const copy = tuningGuideCopy[locale];
  const label = getInstrumentLabel(instrument, locale);
  const tuning = tuningString(instrument, locale);
  return {
    description: copy.description(label, tuning),
    intro: copy.intro(label, tuning),
    keywords: [...copy.keywords(label, tuning), tuning, "TuneUniversal"],
    sections: copy.sections(label, tuning),
    steps: copy.steps(label),
    targetDescription: copy.description(label, tuning),
    targetPath: targetPathForInstrument(instrument),
    targetTitle: copy.targetTitle(label),
    title: copy.title(label),
    tool: coreToolForInstrument(instrument)
  };
}

export function isGuideSlug(value: string | undefined): value is GuideSlug {
  return Boolean(value && guideSlugs.includes(value as GuideSlug));
}

export function getGuideContent(locale: Locale, guide: GuideSlug): GuideContent {
  const instrument = instrumentFromGuideSlug(guide);
  if (instrument) return buildInstrumentGuide(locale, instrument, guide);
  return utilityGuides[locale][guide as (typeof extraGuideSlugs)[number]];
}

export function guidesForTool(tool: ToolSlug): GuideSlug[] {
  if (tool === "guitar-tuner") {
    return ["how-to-tune-guitar", "how-to-tune-7-string-guitar", "how-to-tune-8-string-guitar", "how-to-tune-12-string-guitar"];
  }
  if (tool === "bass-tuner") return ["how-to-tune-bass", "standard-bass-tuning"];
  if (tool === "ukulele-tuner") return ["how-to-tune-ukulele"];
  if (tool === "metronome") return ["how-to-use-metronome"];
  if (tool === "tap-bpm") return ["how-to-find-bpm"];
  return [];
}

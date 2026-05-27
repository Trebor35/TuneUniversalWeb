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
  return {
    description: template.description(label, tuning),
    faq: template.faq(label, tuning),
    howItWorks: template.howItWorks(label),
    instrument,
    keywords: template.keywords(label),
    title: template.title(label)
  };
}

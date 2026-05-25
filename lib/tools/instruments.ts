import type { Locale } from "@/lib/i18n/locales";
import { instrumentIds, type Instrument } from "./toolConfig";

type InstrumentLabelSet = Record<Instrument, Record<Locale, string>>;

export const priorityInstruments: Instrument[] = ["guitar", "bass"];

export const instrumentLabels: InstrumentLabelSet = {
  guitar: { it: "Chitarra", en: "Guitar", fr: "Guitare", de: "Gitarre", es: "Guitarra", pt: "Guitarra", zh: "吉他", ru: "Гитара", ja: "ギター", ko: "기타", ar: "غيتار" },
  bass: { it: "Basso", en: "Bass", fr: "Basse", de: "Bass", es: "Bajo", pt: "Baixo", zh: "贝斯", ru: "Бас", ja: "ベース", ko: "베이스", ar: "باس" },
  banjo: { it: "Banjo", en: "Banjo", fr: "Banjo", de: "Banjo", es: "Banjo", pt: "Banjo", zh: "班卓琴", ru: "Банджо", ja: "バンジョー", ko: "밴조", ar: "بانجو" },
  cello: { it: "Violoncello", en: "Cello", fr: "Violoncelle", de: "Cello", es: "Violonchelo", pt: "Violoncelo", zh: "大提琴", ru: "Виолончель", ja: "チェロ", ko: "첼로", ar: "تشيلو" },
  cimbalom: { it: "Cimbalom", en: "Cimbalom", fr: "Cymbalum", de: "Cimbalom", es: "Cimbalom", pt: "Cimbalom", zh: "扬琴", ru: "Цимбалы", ja: "ツィンバロム", ko: "침발롬", ar: "سيمبالوم" },
  contrabass: { it: "Contrabbasso", en: "Contrabass", fr: "Contrebasse", de: "Kontrabass", es: "Contrabajo", pt: "Contrabaixo", zh: "低音提琴", ru: "Контрабас", ja: "コントラバス", ko: "콘트라베이스", ar: "كونترباص" },
  dulcimer: { it: "Dulcimer", en: "Dulcimer", fr: "Dulcimer", de: "Dulcimer", es: "Dulcémele", pt: "Dulcimer", zh: "洋琴", ru: "Дульцимер", ja: "ダルシマー", ko: "덜시머", ar: "دولسيمر" },
  erhu: { it: "Erhu", en: "Erhu", fr: "Erhu", de: "Erhu", es: "Erhu", pt: "Erhu", zh: "二胡", ru: "Эрху", ja: "二胡", ko: "얼후", ar: "أرهو" },
  harp: { it: "Arpa", en: "Harp", fr: "Harpe", de: "Harfe", es: "Arpa", pt: "Harpa", zh: "竖琴", ru: "Арфа", ja: "ハープ", ko: "하프", ar: "قيثارة" },
  koto: { it: "Koto", en: "Koto", fr: "Koto", de: "Koto", es: "Koto", pt: "Koto", zh: "古筝", ru: "Кото", ja: "箏", ko: "고토", ar: "كوتو" },
  lute: { it: "Liuto", en: "Lute", fr: "Luth", de: "Laute", es: "Laúd", pt: "Alaúde", zh: "鲁特琴", ru: "Лютня", ja: "リュート", ko: "류트", ar: "عود غربي" },
  mandolin: { it: "Mandolino", en: "Mandolin", fr: "Mandoline", de: "Mandoline", es: "Mandolina", pt: "Bandolim", zh: "曼陀林", ru: "Мандолина", ja: "マンドリン", ko: "만돌린", ar: "ماندولين" },
  piano: { it: "Pianoforte", en: "Piano", fr: "Piano", de: "Klavier", es: "Piano", pt: "Piano", zh: "钢琴", ru: "Фортепиано", ja: "ピアノ", ko: "피아노", ar: "بيانو" },
  santur: { it: "Santur", en: "Santur", fr: "Santour", de: "Santur", es: "Santur", pt: "Santur", zh: "桑图尔", ru: "Сантур", ja: "サントゥール", ko: "산투르", ar: "سنطور" },
  sitar: { it: "Sitar", en: "Sitar", fr: "Sitar", de: "Sitar", es: "Sitar", pt: "Sitar", zh: "西塔琴", ru: "Ситар", ja: "シタール", ko: "시타르", ar: "سيتار" },
  ukulele: { it: "Ukulele", en: "Ukulele", fr: "Ukulélé", de: "Ukulele", es: "Ukelele", pt: "Ukulele", zh: "尤克里里", ru: "Укулеле", ja: "ウクレレ", ko: "우쿨렐레", ar: "أوكوليلي" },
  viola: { it: "Viola", en: "Viola", fr: "Alto", de: "Bratsche", es: "Viola", pt: "Viola", zh: "中提琴", ru: "Альт", ja: "ヴィオラ", ko: "비올라", ar: "فيولا" },
  "viola-da-gamba": { it: "Viola da gamba", en: "Viola da gamba", fr: "Viole de gambe", de: "Viola da gamba", es: "Viola da gamba", pt: "Viola da gamba", zh: "古大提琴", ru: "Виола да гамба", ja: "ヴィオラ・ダ・ガンバ", ko: "비올라 다 감바", ar: "فيولا دا غامبا" },
  violin: { it: "Violino", en: "Violin", fr: "Violon", de: "Violine", es: "Violín", pt: "Violino", zh: "小提琴", ru: "Скрипка", ja: "ヴァイオリン", ko: "바이올린", ar: "كمان" },
  yangqin: { it: "Yangqin", en: "Yangqin", fr: "Yangqin", de: "Yangqin", es: "Yangqin", pt: "Yangqin", zh: "扬琴", ru: "Янцинь", ja: "揚琴", ko: "양친", ar: "يانغ تشين" }
};

export function getInstrumentLabel(instrument: Instrument, locale: Locale) {
  return instrumentLabels[instrument][locale] ?? instrumentLabels[instrument].en;
}

export function getOrderedInstruments(locale: Locale) {
  const collator = new Intl.Collator(locale, { sensitivity: "base" });
  const rest = instrumentIds
    .filter((instrument) => !priorityInstruments.includes(instrument))
    .sort((a, b) => collator.compare(getInstrumentLabel(a, locale), getInstrumentLabel(b, locale)));

  return [...priorityInstruments, ...rest];
}

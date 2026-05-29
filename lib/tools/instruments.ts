import type { Locale } from "@/lib/i18n/locales";
import { instrumentIds, type Instrument } from "./toolConfig";

type InstrumentLabelSet = Record<Instrument, Record<Locale, string>>;

export const priorityInstruments: Instrument[] = ["guitar", "bass", "7-string-guitar", "8-string-guitar", "12-string-guitar"];

export const instrumentLabels: InstrumentLabelSet = {
  "7-string-guitar": {
    ar: "غيتار 7 أوتار",
    de: "7-saitige Gitarre",
    en: "7-string guitar",
    es: "Guitarra de 7 cuerdas",
    fr: "Guitare 7 cordes",
    it: "Chitarra a 7 corde",
    ja: "7弦ギター",
    ko: "7현 기타",
    pt: "Guitarra de 7 cordas",
    ru: "7-струнная гитара",
    zh: "七弦吉他"
  },
  "8-string-guitar": {
    ar: "غيتار 8 أوتار",
    de: "8-saitige Gitarre",
    en: "8-string guitar",
    es: "Guitarra de 8 cuerdas",
    fr: "Guitare 8 cordes",
    it: "Chitarra a 8 corde",
    ja: "8弦ギター",
    ko: "8현 기타",
    pt: "Guitarra de 8 cordas",
    ru: "8-струнная гитара",
    zh: "八弦吉他"
  },
  "12-string-guitar": {
    ar: "غيتار 12 وترا",
    de: "12-saitige Gitarre",
    en: "12-string guitar",
    es: "Guitarra de 12 cuerdas",
    fr: "Guitare 12 cordes",
    it: "Chitarra a 12 corde",
    ja: "12弦ギター",
    ko: "12현 기타",
    pt: "Guitarra de 12 cordas",
    ru: "12-струнная гитара",
    zh: "十二弦吉他"
  },
  banjo: { ar: "بانجو", de: "Banjo", en: "Banjo", es: "Banjo", fr: "Banjo", it: "Banjo", ja: "バンジョー", ko: "밴조", pt: "Banjo", ru: "Банджо", zh: "班卓琴" },
  bass: { ar: "باس", de: "Bass", en: "Bass", es: "Bajo", fr: "Basse", it: "Basso", ja: "ベース", ko: "베이스", pt: "Baixo", ru: "Бас", zh: "贝斯" },
  cello: { ar: "تشيلو", de: "Cello", en: "Cello", es: "Violonchelo", fr: "Violoncelle", it: "Violoncello", ja: "チェロ", ko: "첼로", pt: "Violoncelo", ru: "Виолончель", zh: "大提琴" },
  cimbalom: { ar: "سيمبالوم", de: "Cimbalom", en: "Cimbalom", es: "Címbalo", fr: "Cymbalum", it: "Cimbalom", ja: "ツィンバロム", ko: "침발롬", pt: "Cimbalom", ru: "Цимбалы", zh: "钦巴龙" },
  contrabass: { ar: "كونترباص", de: "Kontrabass", en: "Contrabass", es: "Contrabajo", fr: "Contrebasse", it: "Contrabbasso", ja: "コントラバス", ko: "콘트라베이스", pt: "Contrabaixo", ru: "Контрабас", zh: "低音提琴" },
  dulcimer: { ar: "دولسيمر", de: "Dulcimer", en: "Dulcimer", es: "Dulcémele", fr: "Dulcimer", it: "Dulcimer", ja: "ダルシマー", ko: "덜시머", pt: "Dulcimer", ru: "Дульцимер", zh: "洋琴" },
  erhu: { ar: "أرهو", de: "Erhu", en: "Erhu", es: "Erhu", fr: "Erhu", it: "Erhu", ja: "二胡", ko: "얼후", pt: "Erhu", ru: "Эрху", zh: "二胡" },
  guitar: { ar: "غيتار", de: "Gitarre", en: "Guitar", es: "Guitarra", fr: "Guitare", it: "Chitarra", ja: "ギター", ko: "기타", pt: "Guitarra", ru: "Гитара", zh: "吉他" },
  harp: { ar: "قيثارة", de: "Harfe", en: "Harp", es: "Arpa", fr: "Harpe", it: "Arpa", ja: "ハープ", ko: "하프", pt: "Harpa", ru: "Арфа", zh: "竖琴" },
  koto: { ar: "كوتو", de: "Koto", en: "Koto", es: "Koto", fr: "Koto", it: "Koto", ja: "箏", ko: "고토", pt: "Koto", ru: "Кото", zh: "古筝" },
  lute: { ar: "عود غربي", de: "Laute", en: "Lute", es: "Laúd", fr: "Luth", it: "Liuto", ja: "リュート", ko: "류트", pt: "Alaúde", ru: "Лютня", zh: "鲁特琴" },
  mandolin: { ar: "ماندولين", de: "Mandoline", en: "Mandolin", es: "Mandolina", fr: "Mandoline", it: "Mandolino", ja: "マンドリン", ko: "만돌린", pt: "Bandolim", ru: "Мандолина", zh: "曼陀林" },
  piano: { ar: "بيانو", de: "Klavier", en: "Piano", es: "Piano", fr: "Piano", it: "Pianoforte", ja: "ピアノ", ko: "피아노", pt: "Piano", ru: "Фортепиано", zh: "钢琴" },
  santur: { ar: "سنطور", de: "Santur", en: "Santur", es: "Santur", fr: "Santour", it: "Santur", ja: "サントゥール", ko: "산투르", pt: "Santur", ru: "Сантур", zh: "桑图尔" },
  sitar: { ar: "سيتار", de: "Sitar", en: "Sitar", es: "Sitar", fr: "Sitar", it: "Sitar", ja: "シタール", ko: "시타르", pt: "Sitar", ru: "Ситар", zh: "西塔琴" },
  ukulele: { ar: "أوكوليلي", de: "Ukulele", en: "Ukulele", es: "Ukelele", fr: "Ukulélé", it: "Ukulele", ja: "ウクレレ", ko: "우쿨렐레", pt: "Ukulele", ru: "Укулеле", zh: "尤克里里" },
  viola: { ar: "فيولا", de: "Bratsche", en: "Viola", es: "Viola", fr: "Alto", it: "Viola", ja: "ヴィオラ", ko: "비올라", pt: "Viola", ru: "Альт", zh: "中提琴" },
  "viola-da-gamba": { ar: "فيولا دا غامبا", de: "Viola da gamba", en: "Viola da gamba", es: "Viola da gamba", fr: "Viole de gambe", it: "Viola da gamba", ja: "ヴィオラ・ダ・ガンバ", ko: "비올라 다 감바", pt: "Viola da gamba", ru: "Виола да гамба", zh: "古大提琴" },
  violin: { ar: "كمان", de: "Violine", en: "Violin", es: "Violín", fr: "Violon", it: "Violino", ja: "バイオリン", ko: "바이올린", pt: "Violino", ru: "Скрипка", zh: "小提琴" },
  yangqin: { ar: "يانغ تشين", de: "Yangqin", en: "Yangqin", es: "Yangqin", fr: "Yangqin", it: "Yangqin", ja: "揚琴", ko: "양친", pt: "Yangqin", ru: "Янцинь", zh: "扬琴" }
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

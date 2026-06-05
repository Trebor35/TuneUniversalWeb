import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";

export const meterNumerators = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const meterDenominators = [4, 8, 16, 32] as const;
export const meters = ["2/4", "3/4", "4/4", "5/8", "6/8", "7/4", "12/8"] as const;
export type Meter = `${number}/${number}`;

export const subdivisions = [
  {
    id: "quarter",
    parts: 1,
    labels: {
      it: "Nere",
      en: "Quarter notes",
      fr: "Noires",
      de: "Viertelnoten",
      es: "Negras",
      pt: "Seminimas",
      zh: "四分音符",
      ru: "Четвертные ноты",
      ja: "4分音符",
      ko: "4분음표",
      ar: "نغمات ربع"
    } satisfies Record<BaseLocale, string>
  },
  {
    id: "duplet",
    parts: 2,
    labels: {
      it: "Duine",
      en: "Duplets",
      fr: "Duolets",
      de: "Duolen",
      es: "Dosillos",
      pt: "Duinas",
      zh: "二连音",
      ru: "Дуоли",
      ja: "2連符",
      ko: "둘잇단음",
      ar: "ثنائيات"
    } satisfies Record<BaseLocale, string>
  },
  {
    id: "triplet",
    parts: 3,
    labels: {
      it: "Terzine",
      en: "Triplets",
      fr: "Triolets",
      de: "Triolen",
      es: "Tresillos",
      pt: "Tercinas",
      zh: "三连音",
      ru: "Триоли",
      ja: "3連符",
      ko: "셋잇단음",
      ar: "ثلاثيات"
    } satisfies Record<BaseLocale, string>
  },
  {
    id: "quadruplet",
    parts: 4,
    labels: {
      it: "Quartine",
      en: "Quadruplets",
      fr: "Quartolets",
      de: "Quartolen",
      es: "Cuatrillos",
      pt: "Quartinas",
      zh: "四连音",
      ru: "Квартоли",
      ja: "4連符",
      ko: "넷잇단음",
      ar: "رباعيات"
    } satisfies Record<BaseLocale, string>
  }
] as const;

export type Subdivision = (typeof subdivisions)[number]["id"];

export function beatsForMeter(meter: Meter) {
  return Number(meter.split("/")[0]);
}

export function getSubdivisionParts(subdivision: Subdivision) {
  return subdivisions.find((item) => item.id === subdivision)?.parts ?? 1;
}

export function getSubdivisionLabel(subdivision: (typeof subdivisions)[number], locale: Locale) {
  return subdivision.labels[getContentLocale(locale)] ?? subdivision.labels.en;
}

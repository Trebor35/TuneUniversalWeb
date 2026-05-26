import type { Locale } from "@/lib/i18n/locales";

export const meters = ["2/4", "3/4", "4/4", "6/8"] as const;
export type Meter = (typeof meters)[number];

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
    } satisfies Record<Locale, string>
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
    } satisfies Record<Locale, string>
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
    } satisfies Record<Locale, string>
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
    } satisfies Record<Locale, string>
  }
] as const;

export type Subdivision = (typeof subdivisions)[number]["id"];

export function beatsForMeter(meter: Meter) {
  return Number(meter.split("/")[0]);
}

export function getSubdivisionParts(subdivision: Subdivision) {
  return subdivisions.find((item) => item.id === subdivision)?.parts ?? 1;
}

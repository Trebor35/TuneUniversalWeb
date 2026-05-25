export const meters = ["2/4", "3/4", "4/4", "6/8"] as const;
export type Meter = (typeof meters)[number];

export const subdivisions = [
  { id: "quarter", parts: 1, labels: { en: "Quarter notes", it: "Nere" } },
  { id: "duplet", parts: 2, labels: { en: "Duplets", it: "Duine" } },
  { id: "triplet", parts: 3, labels: { en: "Triplets", it: "Terzine" } },
  { id: "quadruplet", parts: 4, labels: { en: "Quadruplets", it: "Quartine" } }
] as const;

export type Subdivision = (typeof subdivisions)[number]["id"];

export function beatsForMeter(meter: Meter) {
  return Number(meter.split("/")[0]);
}

export function getSubdivisionParts(subdivision: Subdivision) {
  return subdivisions.find((item) => item.id === subdivision)?.parts ?? 1;
}

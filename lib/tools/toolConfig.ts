export const toolSlugs = [
  "guitar-tuner",
  "bass-tuner",
  "ukulele-tuner",
  "metronome",
  "tap-bpm",
  "chord-transposer"
] as const;

export type ToolSlug = (typeof toolSlugs)[number];

export const tunerTools = ["guitar-tuner", "bass-tuner", "ukulele-tuner"] as const;

export const instrumentIds = [
  "guitar",
  "7-string-guitar",
  "12-string-guitar",
  "bass",
  "banjo",
  "cello",
  "cimbalom",
  "contrabass",
  "dulcimer",
  "erhu",
  "harp",
  "koto",
  "lute",
  "mandolin",
  "piano",
  "santur",
  "sitar",
  "ukulele",
  "viola",
  "viola-da-gamba",
  "violin",
  "yangqin"
] as const;

export type Instrument = (typeof instrumentIds)[number];

export const toolInstruments: Partial<Record<ToolSlug, Instrument>> = {
  "guitar-tuner": "guitar",
  "bass-tuner": "bass",
  "ukulele-tuner": "ukulele"
};

export function isToolSlug(value: string): value is ToolSlug {
  return toolSlugs.includes(value as ToolSlug);
}

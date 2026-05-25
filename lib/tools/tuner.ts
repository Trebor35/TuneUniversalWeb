import type { Instrument } from "./toolConfig";

export type TuningNote = { name: string; frequency: number; octave?: number };

export const tunings: Record<Instrument, TuningNote[]> = {
  guitar: [
    { name: "E", octave: 2, frequency: 82.41 },
    { name: "A", octave: 2, frequency: 110 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "E", octave: 4, frequency: 329.63 }
  ],
  bass: [
    { name: "E", octave: 1, frequency: 41.2 },
    { name: "A", octave: 1, frequency: 55 },
    { name: "D", octave: 2, frequency: 73.42 },
    { name: "G", octave: 2, frequency: 98 }
  ],
  ukulele: [
    { name: "G", octave: 4, frequency: 392 },
    { name: "C", octave: 4, frequency: 261.63 },
    { name: "E", octave: 4, frequency: 329.63 },
    { name: "A", octave: 4, frequency: 440 }
  ],
  mandolin: [
    { name: "G", octave: 3, frequency: 196 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "A", octave: 4, frequency: 440 },
    { name: "E", octave: 5, frequency: 659.25 }
  ],
  banjo: [
    { name: "G", octave: 4, frequency: 392 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "D", octave: 4, frequency: 293.66 }
  ],
  cello: [
    { name: "C", octave: 2, frequency: 65.41 },
    { name: "G", octave: 2, frequency: 98 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "A", octave: 3, frequency: 220 }
  ],
  cimbalom: [
    { name: "C", octave: 3, frequency: 130.81 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "E", octave: 3, frequency: 164.81 },
    { name: "F", octave: 3, frequency: 174.61 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "A", octave: 3, frequency: 220 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "C", octave: 4, frequency: 261.63 }
  ],
  contrabass: [
    { name: "E", octave: 1, frequency: 41.2 },
    { name: "A", octave: 1, frequency: 55 },
    { name: "D", octave: 2, frequency: 73.42 },
    { name: "G", octave: 2, frequency: 98 }
  ],
  dulcimer: [
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "A", octave: 3, frequency: 220 },
    { name: "D", octave: 4, frequency: 293.66 }
  ],
  erhu: [
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "A", octave: 4, frequency: 440 }
  ],
  harp: [
    { name: "C", octave: 4, frequency: 261.63 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "E", octave: 4, frequency: 329.63 },
    { name: "F", octave: 4, frequency: 349.23 },
    { name: "G", octave: 4, frequency: 392 },
    { name: "A", octave: 4, frequency: 440 },
    { name: "B", octave: 4, frequency: 493.88 }
  ],
  koto: [
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "A", octave: 3, frequency: 220 },
    { name: "A#", octave: 3, frequency: 233.08 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "D#", octave: 4, frequency: 311.13 },
    { name: "G", octave: 4, frequency: 392 },
    { name: "A", octave: 4, frequency: 440 }
  ],
  lute: [
    { name: "G", octave: 2, frequency: 98 },
    { name: "C", octave: 3, frequency: 130.81 },
    { name: "F", octave: 3, frequency: 174.61 },
    { name: "A", octave: 3, frequency: 220 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "G", octave: 4, frequency: 392 }
  ],
  piano: [
    { name: "C", octave: 4, frequency: 261.63 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "E", octave: 4, frequency: 329.63 },
    { name: "F", octave: 4, frequency: 349.23 },
    { name: "G", octave: 4, frequency: 392 },
    { name: "A", octave: 4, frequency: 440 },
    { name: "B", octave: 4, frequency: 493.88 }
  ],
  santur: [
    { name: "C", octave: 4, frequency: 261.63 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "E", octave: 4, frequency: 329.63 },
    { name: "F", octave: 4, frequency: 349.23 },
    { name: "G", octave: 4, frequency: 392 },
    { name: "A", octave: 4, frequency: 440 },
    { name: "B", octave: 4, frequency: 493.88 }
  ],
  sitar: [
    { name: "C#", octave: 3, frequency: 138.59 },
    { name: "F#", octave: 3, frequency: 185 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "C#", octave: 4, frequency: 277.18 },
    { name: "F#", octave: 4, frequency: 369.99 },
    { name: "G#", octave: 4, frequency: 415.3 }
  ],
  viola: [
    { name: "C", octave: 3, frequency: 130.81 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "A", octave: 4, frequency: 440 }
  ],
  "viola-da-gamba": [
    { name: "D", octave: 2, frequency: 73.42 },
    { name: "G", octave: 2, frequency: 98 },
    { name: "C", octave: 3, frequency: 130.81 },
    { name: "E", octave: 3, frequency: 164.81 },
    { name: "A", octave: 3, frequency: 220 },
    { name: "D", octave: 4, frequency: 293.66 }
  ],
  violin: [
    { name: "G", octave: 3, frequency: 196 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "A", octave: 4, frequency: 440 },
    { name: "E", octave: 5, frequency: 659.25 }
  ],
  yangqin: [
    { name: "C", octave: 4, frequency: 261.63 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "E", octave: 4, frequency: 329.63 },
    { name: "F", octave: 4, frequency: 349.23 },
    { name: "G", octave: 4, frequency: 392 },
    { name: "A", octave: 4, frequency: 440 },
    { name: "B", octave: 4, frequency: 493.88 }
  ]
};

export const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const latinNoteNames: Record<string, string> = {
  C: "Do",
  "C#": "Do#",
  D: "Re",
  "D#": "Re#",
  E: "Mi",
  F: "Fa",
  "F#": "Fa#",
  G: "Sol",
  "G#": "Sol#",
  A: "La",
  "A#": "La#",
  B: "Si"
};

export type NoteSystem = "latin" | "international";
type LegacyNoteSystem = NoteSystem | "it" | "en";

export function normalizeNoteSystem(system: LegacyNoteSystem): NoteSystem {
  if (system === "it") return "latin";
  if (system === "en") return "international";
  return system;
}

export function formatNoteName(note: string, system: LegacyNoteSystem, includeOctave = true) {
  const match = note.match(/^([A-G]#?)(-?\d+)?$/);
  if (!match) return note;
  const normalizedSystem = normalizeNoteSystem(system);
  const base = normalizedSystem === "latin" ? latinNoteNames[match[1]] ?? match[1] : match[1];
  return includeOctave && match[2] ? `${base}${match[2]}` : base;
}

export function frequencyToNote(frequency: number) {
  const midi = Math.round(69 + 12 * Math.log2(frequency / 440));
  const name = noteNames[((midi % 12) + 12) % 12];
  const octave = Math.floor(midi / 12) - 1;
  const targetFrequency = 440 * 2 ** ((midi - 69) / 12);
  const cents = Math.round(1200 * Math.log2(frequency / targetFrequency));
  return { name: `${name}${octave}`, targetFrequency, cents };
}

export function autoCorrelate(buffer: Float32Array, sampleRate: number, minRms = 0.01) {
  const rms = Math.sqrt(buffer.reduce((sum, value) => sum + value * value, 0) / buffer.length);
  if (rms < minRms) return null;

  let bestOffset = -1;
  let bestCorrelation = 0;
  const correlations = new Array<number>(buffer.length).fill(0);
  const minOffset = Math.floor(sampleRate / 1000);
  const maxOffset = Math.floor(sampleRate / 40);

  for (let offset = minOffset; offset < maxOffset; offset += 1) {
    let correlation = 0;
    for (let i = 0; i < buffer.length - offset; i += 1) {
      correlation += 1 - Math.abs(buffer[i] - buffer[i + offset]);
    }
    correlation /= buffer.length - offset;
    correlations[offset] = correlation;
    if (correlation > bestCorrelation) {
      bestCorrelation = correlation;
      bestOffset = offset;
    }
  }

  if (bestCorrelation < 0.88 || bestOffset === -1) return null;
  return sampleRate / bestOffset;
}

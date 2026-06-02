import type { Instrument } from "./toolConfig";

export type TuningNote = { name: string; frequency: number; octave?: number };
export type TuningPreset = { id: string; label: string; notes: TuningNote[] };

export const tunings: Record<Instrument, TuningNote[]> = {
  guitar: [
    { name: "E", octave: 2, frequency: 82.41 },
    { name: "A", octave: 2, frequency: 110 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "E", octave: 4, frequency: 329.63 }
  ],
  "7-string-guitar": [
    { name: "B", octave: 1, frequency: 61.74 },
    { name: "E", octave: 2, frequency: 82.41 },
    { name: "A", octave: 2, frequency: 110 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "E", octave: 4, frequency: 329.63 }
  ],
  "8-string-guitar": [
    { name: "F#", octave: 1, frequency: 46.25 },
    { name: "B", octave: 1, frequency: 61.74 },
    { name: "E", octave: 2, frequency: 82.41 },
    { name: "A", octave: 2, frequency: 110 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "E", octave: 4, frequency: 329.63 }
  ],
  "12-string-guitar": [
    { name: "E", octave: 3, frequency: 164.81 },
    { name: "E", octave: 2, frequency: 82.41 },
    { name: "A", octave: 3, frequency: 220 },
    { name: "A", octave: 2, frequency: 110 },
    { name: "D", octave: 4, frequency: 293.66 },
    { name: "D", octave: 3, frequency: 146.83 },
    { name: "G", octave: 4, frequency: 392 },
    { name: "G", octave: 3, frequency: 196 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "B", octave: 3, frequency: 246.94 },
    { name: "E", octave: 4, frequency: 329.63 },
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

export const tuningPresets: Partial<Record<Instrument, TuningPreset[]>> = {
  guitar: [
    { id: "standard", label: "Standard", notes: tunings.guitar },
    {
      id: "drop-d",
      label: "Drop D",
      notes: [
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "A", octave: 2, frequency: 110 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "E", octave: 4, frequency: 329.63 }
      ]
    },
    {
      id: "drop-d-sharp",
      label: "Drop D#",
      notes: [
        { name: "D#", octave: 2, frequency: 77.78 },
        { name: "A#", octave: 2, frequency: 116.54 },
        { name: "D#", octave: 3, frequency: 155.56 },
        { name: "G#", octave: 3, frequency: 207.65 },
        { name: "C", octave: 4, frequency: 261.63 },
        { name: "F", octave: 4, frequency: 349.23 }
      ]
    },
    {
      id: "drop-c-sharp",
      label: "Drop C#",
      notes: [
        { name: "C#", octave: 2, frequency: 69.3 },
        { name: "G#", octave: 2, frequency: 103.83 },
        { name: "C#", octave: 3, frequency: 138.59 },
        { name: "F#", octave: 3, frequency: 185 },
        { name: "A#", octave: 3, frequency: 233.08 },
        { name: "D#", octave: 4, frequency: 311.13 }
      ]
    },
    {
      id: "drop-c",
      label: "Drop C",
      notes: [
        { name: "C", octave: 2, frequency: 65.41 },
        { name: "G", octave: 2, frequency: 98 },
        { name: "C", octave: 3, frequency: 130.81 },
        { name: "F", octave: 3, frequency: 174.61 },
        { name: "A", octave: 3, frequency: 220 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    },
    {
      id: "half-step-down",
      label: "Eb Standard",
      notes: [
        { name: "D#", octave: 2, frequency: 77.78 },
        { name: "G#", octave: 2, frequency: 103.83 },
        { name: "C#", octave: 3, frequency: 138.59 },
        { name: "F#", octave: 3, frequency: 185 },
        { name: "A#", octave: 3, frequency: 233.08 },
        { name: "D#", octave: 4, frequency: 311.13 }
      ]
    },
    {
      id: "whole-step-down",
      label: "D Standard",
      notes: [
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "G", octave: 2, frequency: 98 },
        { name: "C", octave: 3, frequency: 130.81 },
        { name: "F", octave: 3, frequency: 174.61 },
        { name: "A", octave: 3, frequency: 220 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    },
    {
      id: "open-d",
      label: "Open D",
      notes: [
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "A", octave: 2, frequency: 110 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "F#", octave: 3, frequency: 185 },
        { name: "A", octave: 3, frequency: 220 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    },
    {
      id: "open-g",
      label: "Open G",
      notes: [
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "G", octave: 2, frequency: 98 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    },
    {
      id: "dadgad",
      label: "DADGAD",
      notes: [
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "A", octave: 2, frequency: 110 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "A", octave: 3, frequency: 220 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    }
  ],
  "7-string-guitar": [
    { id: "standard", label: "Standard B", notes: tunings["7-string-guitar"] },
    {
      id: "drop-a",
      label: "Drop A",
      notes: [
        { name: "A", octave: 1, frequency: 55 },
        { name: "E", octave: 2, frequency: 82.41 },
        { name: "A", octave: 2, frequency: 110 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "E", octave: 4, frequency: 329.63 }
      ]
    },
    {
      id: "half-step-down",
      label: "Half step down",
      notes: [
        { name: "A#", octave: 1, frequency: 58.27 },
        { name: "D#", octave: 2, frequency: 77.78 },
        { name: "G#", octave: 2, frequency: 103.83 },
        { name: "C#", octave: 3, frequency: 138.59 },
        { name: "F#", octave: 3, frequency: 185 },
        { name: "A#", octave: 3, frequency: 233.08 },
        { name: "D#", octave: 4, frequency: 311.13 }
      ]
    }
  ],
  "8-string-guitar": [
    { id: "standard", label: "Standard F#", notes: tunings["8-string-guitar"] },
    {
      id: "drop-e",
      label: "Drop E",
      notes: [
        { name: "E", octave: 1, frequency: 41.2 },
        { name: "B", octave: 1, frequency: 61.74 },
        { name: "E", octave: 2, frequency: 82.41 },
        { name: "A", octave: 2, frequency: 110 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "E", octave: 4, frequency: 329.63 }
      ]
    },
    {
      id: "half-step-down",
      label: "Half step down",
      notes: [
        { name: "F", octave: 1, frequency: 43.65 },
        { name: "A#", octave: 1, frequency: 58.27 },
        { name: "D#", octave: 2, frequency: 77.78 },
        { name: "G#", octave: 2, frequency: 103.83 },
        { name: "C#", octave: 3, frequency: 138.59 },
        { name: "F#", octave: 3, frequency: 185 },
        { name: "A#", octave: 3, frequency: 233.08 },
        { name: "D#", octave: 4, frequency: 311.13 }
      ]
    }
  ],
  "12-string-guitar": [
    { id: "standard", label: "Standard octave pairs", notes: tunings["12-string-guitar"] },
    {
      id: "drop-d",
      label: "Drop D",
      notes: [
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "A", octave: 3, frequency: 220 },
        { name: "A", octave: 2, frequency: 110 },
        { name: "D", octave: 4, frequency: 293.66 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 4, frequency: 392 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "E", octave: 4, frequency: 329.63 },
        { name: "E", octave: 4, frequency: 329.63 }
      ]
    }
  ],
  bass: [
    { id: "standard", label: "Standard", notes: tunings.bass },
    {
      id: "drop-d",
      label: "Drop D",
      notes: [
        { name: "D", octave: 1, frequency: 36.71 },
        { name: "A", octave: 1, frequency: 55 },
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "G", octave: 2, frequency: 98 }
      ]
    },
    {
      id: "half-step-down",
      label: "Half step down",
      notes: [
        { name: "D#", octave: 1, frequency: 38.89 },
        { name: "G#", octave: 1, frequency: 51.91 },
        { name: "C#", octave: 2, frequency: 69.3 },
        { name: "F#", octave: 2, frequency: 92.5 }
      ]
    },
    {
      id: "five-string",
      label: "5-string low B",
      notes: [
        { name: "B", octave: 0, frequency: 30.87 },
        { name: "E", octave: 1, frequency: 41.2 },
        { name: "A", octave: 1, frequency: 55 },
        { name: "D", octave: 2, frequency: 73.42 },
        { name: "G", octave: 2, frequency: 98 }
      ]
    }
  ],
  ukulele: [
    { id: "standard", label: "Standard high G", notes: tunings.ukulele },
    {
      id: "baritone",
      label: "Baritone D G B E",
      notes: [
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "B", octave: 3, frequency: 246.94 },
        { name: "E", octave: 4, frequency: 329.63 }
      ]
    },
    {
      id: "low-g",
      label: "Low G",
      notes: [
        { name: "G", octave: 3, frequency: 196 },
        { name: "C", octave: 4, frequency: 261.63 },
        { name: "E", octave: 4, frequency: 329.63 },
        { name: "A", octave: 4, frequency: 440 }
      ]
    },
    {
      id: "d-tuning",
      label: "D tuning",
      notes: [
        { name: "A", octave: 4, frequency: 440 },
        { name: "D", octave: 4, frequency: 293.66 },
        { name: "F#", octave: 4, frequency: 369.99 },
        { name: "B", octave: 4, frequency: 493.88 }
      ]
    }
  ],
  banjo: [
    { id: "open-g", label: "Open G", notes: tunings.banjo },
    {
      id: "double-c",
      label: "Double C",
      notes: [
        { name: "G", octave: 4, frequency: 392 },
        { name: "C", octave: 3, frequency: 130.81 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "C", octave: 4, frequency: 261.63 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    },
    {
      id: "sawmill",
      label: "Sawmill",
      notes: [
        { name: "G", octave: 4, frequency: 392 },
        { name: "D", octave: 3, frequency: 146.83 },
        { name: "G", octave: 3, frequency: 196 },
        { name: "C", octave: 4, frequency: 261.63 },
        { name: "D", octave: 4, frequency: 293.66 }
      ]
    }
  ],
  mandolin: [{ id: "standard", label: "Standard", notes: tunings.mandolin }],
  violin: [{ id: "standard", label: "Standard", notes: tunings.violin }],
  viola: [{ id: "standard", label: "Standard", notes: tunings.viola }],
  cello: [{ id: "standard", label: "Standard", notes: tunings.cello }],
  contrabass: [{ id: "standard", label: "Standard", notes: tunings.contrabass }]
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

  const minTau = Math.floor(sampleRate / 1200);
  const maxTau = Math.min(Math.floor(sampleRate / 28), Math.floor(buffer.length / 2));
  const yin = new Float32Array(maxTau + 1);

  for (let tau = minTau; tau <= maxTau; tau += 1) {
    let sum = 0;
    for (let index = 0; index < maxTau; index += 1) {
      const difference = buffer[index] - buffer[index + tau];
      sum += difference * difference;
    }
    yin[tau] = sum;
  }

  let runningSum = 0;
  for (let tau = minTau; tau <= maxTau; tau += 1) {
    runningSum += yin[tau];
    yin[tau] = runningSum === 0 ? 1 : (yin[tau] * tau) / runningSum;
  }

  let bestTau = -1;
  const threshold = 0.14;
  for (let tau = minTau + 1; tau < maxTau; tau += 1) {
    if (yin[tau] < threshold && yin[tau] <= yin[tau - 1]) {
      while (tau + 1 < maxTau && yin[tau + 1] < yin[tau]) {
        tau += 1;
      }
      bestTau = tau;
      break;
    }
  }

  if (bestTau === -1) {
    let bestValue = 1;
    for (let tau = minTau; tau <= maxTau; tau += 1) {
      if (yin[tau] < bestValue) {
        bestValue = yin[tau];
        bestTau = tau;
      }
    }
    if (bestValue > 0.22) return null;
  }

  const previous = yin[bestTau - 1] ?? yin[bestTau];
  const current = yin[bestTau];
  const next = yin[bestTau + 1] ?? yin[bestTau];
  const divisor = previous + next - 2 * current;
  const betterTau = divisor === 0 ? bestTau : bestTau + (previous - next) / (2 * divisor);

  if (!Number.isFinite(betterTau) || betterTau <= 0) return null;
  return sampleRate / betterTau;
}

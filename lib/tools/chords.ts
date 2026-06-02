const sharpScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const flatScale = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const noteIndex: Record<string, number> = {
  C: 0,
  "B#": 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  Fb: 4,
  F: 5,
  "E#": 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
  Cb: 11
};

const wrapperPattern = /^([(\["'`{]*)(.*?)([)\]"'`}.!,;:?]*)$/;
const chordPattern = /^([A-G](?:#|b)?)([^/\s]*?)(?:\/([A-G](?:#|b)?))?$/;
const qualityPattern = /^(?:(?:maj|min|dim|aug|sus|add|m)|[#b0-9()+-])*$/i;

export type ChordNotation = "sharp" | "flat";

function normalizeIndex(index: number) {
  return ((index % 12) + 12) % 12;
}

function transposeNote(note: string, semitones: number, notation: ChordNotation) {
  const index = noteIndex[note];
  if (index === undefined) return note;
  const scale = notation === "flat" ? flatScale : sharpScale;
  return scale[normalizeIndex(index + semitones)];
}

function parseChordToken(token: string) {
  const wrapped = token.match(wrapperPattern);
  if (!wrapped) return null;

  const [, prefix, core, suffix] = wrapped;
  const chord = core.match(chordPattern);
  if (!chord) return null;

  const [, root, quality, bass] = chord;
  if (!qualityPattern.test(quality)) return null;

  return { bass, prefix, quality, root, suffix };
}

export function transposeChordToken(token: string, semitones: number, notation: ChordNotation = "sharp") {
  const parsed = parseChordToken(token);
  if (!parsed) return token;

  const nextRoot = transposeNote(parsed.root, semitones, notation);
  const nextBass = parsed.bass ? transposeNote(parsed.bass, semitones, notation) : "";
  const slash = nextBass ? `/${nextBass}` : "";
  return `${parsed.prefix}${nextRoot}${parsed.quality}${slash}${parsed.suffix}`;
}

export function transposeChords(input: string, semitones: number, notation: ChordNotation = "sharp") {
  return input
    .split(/(\s+)/)
    .map((part) => transposeChordToken(part, semitones, notation))
    .join("");
}

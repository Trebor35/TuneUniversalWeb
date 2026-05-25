const chromaticSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const flatToSharp: Record<string, string> = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
};

export function transposeChordToken(token: string, semitones: number) {
  return token.replace(/\b([A-G](?:#|b)?)(m?(?:aj)?(?:in)?(?:dim|aug|sus)?\d*(?:add\d+)?(?:\/[A-G](?:#|b)?)?)/g, (match, root, suffix) => {
    const normalized = flatToSharp[root] ?? root;
    const index = chromaticSharp.indexOf(normalized);
    if (index === -1) return match;
    const next = chromaticSharp[(index + semitones + 120) % 12];
    return `${next}${suffix}`;
  });
}

export function transposeChords(input: string, semitones: number) {
  return input
    .split(/(\s+)/)
    .map((part) => transposeChordToken(part, semitones))
    .join("");
}

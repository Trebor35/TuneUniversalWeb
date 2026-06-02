export type SoundLevel = "quiet" | "normal" | "loud" | "very-loud";

export function calculateRms(samples: Float32Array) {
  if (!samples.length) return 0;
  let sum = 0;
  for (let index = 0; index < samples.length; index += 1) {
    const sample = samples[index];
    sum += sample * sample;
  }
  return Math.sqrt(sum / samples.length);
}

export function rmsToEstimatedDb(rms: number, sensitivityOffset: number) {
  if (rms <= 0.00001) return 0;
  const estimated = 20 * Math.log10(rms) + 100 + sensitivityOffset;
  return Math.max(0, Math.min(130, Math.round(estimated)));
}

export function classifySoundLevel(db: number): SoundLevel {
  if (db < 40) return "quiet";
  if (db < 70) return "normal";
  if (db < 90) return "loud";
  return "very-loud";
}

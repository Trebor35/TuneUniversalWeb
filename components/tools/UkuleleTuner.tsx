"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import { GuitarTuner } from "./GuitarTuner";

export function UkuleleTuner({ dictionary }: { dictionary: Dictionary }) {
  return <GuitarTuner dictionary={dictionary} instrument="ukulele" />;
}

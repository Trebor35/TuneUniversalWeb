"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import { GuitarTuner } from "./GuitarTuner";

export function BassTuner({ dictionary }: { dictionary: Dictionary }) {
  return <GuitarTuner dictionary={dictionary} instrument="bass" />;
}

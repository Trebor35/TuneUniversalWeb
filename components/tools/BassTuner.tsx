"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { GuitarTuner } from "./GuitarTuner";

export function BassTuner({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return <GuitarTuner dictionary={dictionary} instrument="bass" locale={locale} />;
}

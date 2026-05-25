"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { transposeChords } from "@/lib/tools/chords";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

export function ChordTransposer({ dictionary }: { dictionary: Dictionary }) {
  const [input, setInput] = useState("C Am F G7\nDm G Cmaj7");
  const [semitones, setSemitones] = useState(2);
  const output = useMemo(() => transposeChords(input, semitones), [input, semitones]);

  return (
    <Card className="space-y-5 overflow-hidden">
      <label className="grid gap-2 text-sm font-semibold">
        {dictionary.tool.inputChords}
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={6}
          className="min-h-36 w-full rounded-md border border-line bg-white p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-mint"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        {dictionary.tool.semitones}: {semitones}
        <Slider min={-12} max={12} value={semitones} onChange={(event) => setSemitones(Number(event.target.value))} />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        {dictionary.tool.outputChords}
        <textarea readOnly value={output} rows={6} className="min-h-36 w-full rounded-md border border-line bg-paper p-3 font-mono text-sm" />
      </label>
    </Card>
  );
}

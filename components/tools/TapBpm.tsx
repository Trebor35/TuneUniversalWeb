"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function TapBpm({ dictionary }: { dictionary: Dictionary }) {
  const [taps, setTaps] = useState<number[]>([]);
  const bpm = useMemo(() => {
    if (taps.length < 2) return null;
    const intervals = taps.slice(1).map((tap, index) => tap - taps[index]).filter((gap) => gap > 150 && gap < 3000);
    if (!intervals.length) return null;
    const average = intervals.reduce((sum, gap) => sum + gap, 0) / intervals.length;
    return Math.round(60000 / average);
  }, [taps]);

  function tap() {
    setTaps((current) => [...current.slice(-11), Date.now()]);
  }

  return (
    <Card className="space-y-5">
      <div className="rounded-lg bg-paper p-5 text-center">
        <p className="text-sm text-ink/60">{dictionary.tool.bpm}</p>
        <p className="mt-2 text-6xl font-bold">{bpm ?? "--"}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button onClick={tap} className="min-h-20 text-lg">{dictionary.tool.tap}</Button>
        <Button onClick={() => setTaps([])} variant="secondary" className="min-h-20 text-lg">{dictionary.tool.reset}</Button>
      </div>
      <div>
        <p className="text-sm font-semibold">{dictionary.tool.history}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {taps.length ? taps.map((tapTime) => <span key={tapTime} className="rounded-md bg-paper px-2 py-1 text-xs">{new Date(tapTime).toLocaleTimeString()}</span>) : <span className="text-sm text-ink/60">--</span>}
        </div>
      </div>
    </Card>
  );
}

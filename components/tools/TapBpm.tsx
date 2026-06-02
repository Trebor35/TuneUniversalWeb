"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const labels: Record<Locale, { average: string; copied: string; copy: string; instant: string; taps: string }> = {
  ar: { average: "BPM المتوسط", copied: "تم النسخ", copy: "نسخ BPM", instant: "BPM فوري", taps: "النقرات" },
  de: { average: "Durchschnitts-BPM", copied: "Kopiert", copy: "BPM kopieren", instant: "Sofort-BPM", taps: "Taps" },
  en: { average: "Average BPM", copied: "Copied", copy: "Copy BPM", instant: "Instant BPM", taps: "Taps" },
  es: { average: "BPM medio", copied: "Copiado", copy: "Copiar BPM", instant: "BPM instantaneo", taps: "Taps" },
  fr: { average: "BPM moyen", copied: "Copie", copy: "Copier BPM", instant: "BPM instantane", taps: "Taps" },
  it: { average: "BPM medio", copied: "Copiato", copy: "Copia BPM", instant: "BPM istantaneo", taps: "Tap" },
  ja: { average: "平均 BPM", copied: "コピー済み", copy: "BPM をコピー", instant: "瞬間 BPM", taps: "タップ" },
  ko: { average: "평균 BPM", copied: "복사됨", copy: "BPM 복사", instant: "즉시 BPM", taps: "탭" },
  pt: { average: "BPM medio", copied: "Copiado", copy: "Copiar BPM", instant: "BPM instantaneo", taps: "Toques" },
  ru: { average: "Средний BPM", copied: "Скопировано", copy: "Копировать BPM", instant: "Мгновенный BPM", taps: "Нажатия" },
  zh: { average: "平均 BPM", copied: "已复制", copy: "复制 BPM", instant: "即时 BPM", taps: "点击" }
};

function getValidIntervals(taps: number[]) {
  return taps.slice(1).map((tap, index) => tap - taps[index]).filter((gap) => gap > 150 && gap < 3000);
}

function bpmFromInterval(interval: number | undefined) {
  return interval ? Math.round(60000 / interval) : null;
}

export function TapBpm({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const [taps, setTaps] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const bpmStats = useMemo(() => {
    if (taps.length < 2) return null;
    const intervals = getValidIntervals(taps);
    if (!intervals.length) return null;
    const average = intervals.reduce((sum, gap) => sum + gap, 0) / intervals.length;
    return {
      average: Math.round(60000 / average),
      instant: bpmFromInterval(intervals.at(-1)),
      intervals
    };
  }, [taps]);
  const ui = labels[locale];

  function tap() {
    setCopied(false);
    setTaps((current) => [...current.slice(-11), Date.now()]);
  }

  function reset() {
    setCopied(false);
    setTaps([]);
  }

  async function copyBpm() {
    const value = bpmStats?.average;
    if (!value) return;
    try {
      await navigator.clipboard?.writeText(String(value));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Card className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-paper p-5 text-center">
          <p className="text-sm text-ink/60">{ui.instant}</p>
          <p className="mt-2 text-5xl font-bold">{bpmStats?.instant ?? "--"}</p>
          <p className="mt-1 text-xs font-semibold text-ink/45">{dictionary.tool.bpm}</p>
        </div>
        <div className="rounded-lg bg-mint/10 p-5 text-center ring-1 ring-mint/25">
          <p className="text-sm text-ink/60">{ui.average}</p>
          <p className="mt-2 text-5xl font-bold">{bpmStats?.average ?? "--"}</p>
          <p className="mt-1 text-xs font-semibold text-ink/45">{dictionary.tool.bpm}</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <Button onClick={tap} className="min-h-20 text-lg">{dictionary.tool.tap}</Button>
        <Button onClick={copyBpm} disabled={!bpmStats?.average} variant="secondary" className="min-h-20 text-lg">
          {copied ? ui.copied : ui.copy}
        </Button>
        <Button onClick={reset} variant="secondary" className="min-h-20 text-lg">{dictionary.tool.reset}</Button>
      </div>
      <div>
        <p className="text-sm font-semibold">{dictionary.tool.history}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {taps.length ? taps.map((tapTime) => <span key={tapTime} className="rounded-md bg-paper px-2 py-1 text-xs">{new Date(tapTime).toLocaleTimeString()}</span>) : <span className="text-sm text-ink/60">--</span>}
        </div>
      </div>
      <div className="rounded-lg border border-line bg-white p-4">
        <p className="text-sm font-semibold">{ui.taps}</p>
        <p className="mt-1 text-2xl font-bold">{taps.length}</p>
      </div>
    </Card>
  );
}

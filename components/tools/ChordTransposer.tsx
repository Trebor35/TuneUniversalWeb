"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { transposeChords, type ChordNotation } from "@/lib/tools/chords";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

const labels: Record<
  Locale,
  {
    copied: string;
    copy: string;
    empty: string;
    flats: string;
    format: string;
    sharps: string;
    transpose: string;
  }
> = {
  ar: { copied: "تم النسخ", copy: "نسخ النتيجة", empty: "ألصق بعض الأوتار أولا.", flats: "بيمول", format: "صيغة النتيجة", sharps: "دييز", transpose: "انقل" },
  de: { copied: "Kopiert", copy: "Ergebnis kopieren", empty: "Fuge zuerst Akkorde ein.", flats: "Bs", format: "Ausgabeformat", sharps: "Kreuze", transpose: "Transponieren" },
  en: { copied: "Copied", copy: "Copy result", empty: "Paste some chords first.", flats: "Flats", format: "Output format", sharps: "Sharps", transpose: "Transpose" },
  es: { copied: "Copiado", copy: "Copiar resultado", empty: "Pega primero algunos acordes.", flats: "Bemoles", format: "Formato del resultado", sharps: "Sostenidos", transpose: "Transponer" },
  fr: { copied: "Copie", copy: "Copier le resultat", empty: "Collez d'abord des accords.", flats: "Bemols", format: "Format du resultat", sharps: "Diesen", transpose: "Transposer" },
  it: { copied: "Copiato", copy: "Copia risultato", empty: "Incolla prima una sequenza di accordi.", flats: "Bemolli", format: "Formato risultato", sharps: "Diesis", transpose: "Trasponi" },
  ja: { copied: "コピー済み", copy: "結果をコピー", empty: "まずコードを貼り付けてください。", flats: "フラット", format: "出力形式", sharps: "シャープ", transpose: "移調する" },
  ko: { copied: "복사됨", copy: "결과 복사", empty: "먼저 코드를 붙여 넣으세요.", flats: "플랫", format: "출력 형식", sharps: "샤프", transpose: "조옮김" },
  pt: { copied: "Copiado", copy: "Copiar resultado", empty: "Cole primeiro alguns acordes.", flats: "Bemois", format: "Formato do resultado", sharps: "Sustenidos", transpose: "Transpor" },
  ru: { copied: "Скопировано", copy: "Копировать результат", empty: "Сначала вставьте аккорды.", flats: "Бемоли", format: "Формат результата", sharps: "Диезы", transpose: "Транспонировать" },
  zh: { copied: "已复制", copy: "复制结果", empty: "请先粘贴和弦。", flats: "降号", format: "结果格式", sharps: "升号", transpose: "移调" }
};

export function ChordTransposer({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const ui = labels[locale] ?? labels.en;
  const [input, setInput] = useState("C G Am F");
  const [semitones, setSemitones] = useState(2);
  const [notation, setNotation] = useState<ChordNotation>("sharp");
  const [output, setOutput] = useState("D A Bm G");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function handleTranspose() {
    const nextInput = input;
    setCopied(false);

    if (!nextInput.trim()) {
      setOutput("");
      setMessage(ui.empty);
      return;
    }

    const nextOutput = transposeChords(nextInput, semitones, notation);
    setOutput(nextOutput);
    setMessage("");
  }

  async function copyOutput() {
    if (!output.trim()) return;
    try {
      await navigator.clipboard?.writeText(output);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Card className="space-y-5 overflow-hidden">
      <label className="grid gap-2 text-sm font-semibold">
        {dictionary.tool.inputChords}
        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setCopied(false);
            setMessage("");
          }}
          rows={6}
          className="min-h-36 w-full rounded-md border border-line bg-white p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-mint"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-[1fr_260px]">
        <label className="grid gap-2 text-sm font-semibold">
          {dictionary.tool.semitones}: {semitones > 0 ? `+${semitones}` : semitones}
          <Slider min={-12} max={12} value={semitones} onChange={(event) => setSemitones(Number(event.target.value))} />
        </label>

        <fieldset className="grid gap-2 text-sm font-semibold">
          <legend>{ui.format}</legend>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setNotation("sharp")}
              className={`min-h-11 rounded-md border px-3 text-sm font-semibold transition ${notation === "sharp" ? "border-mint bg-mint/12 text-ink" : "border-line bg-white text-ink/75 hover:bg-paper"}`}
            >
              {ui.sharps}
            </button>
            <button
              type="button"
              onClick={() => setNotation("flat")}
              className={`min-h-11 rounded-md border px-3 text-sm font-semibold transition ${notation === "flat" ? "border-mint bg-mint/12 text-ink" : "border-line bg-white text-ink/75 hover:bg-paper"}`}
            >
              {ui.flats}
            </button>
          </div>
        </fieldset>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
        <Button onClick={handleTranspose} className="min-h-14 text-base">
          {ui.transpose}
        </Button>
        <Button onClick={copyOutput} disabled={!output.trim()} variant="secondary" className="min-h-14 text-base">
          {copied ? ui.copied : ui.copy}
        </Button>
      </div>

      {message ? <p className="rounded-md border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">{message}</p> : null}

      <label className="grid gap-2 text-sm font-semibold">
        {dictionary.tool.outputChords}
        <textarea
          readOnly
          value={output}
          rows={6}
          className="min-h-36 w-full rounded-md border border-line bg-paper p-3 font-mono text-sm"
        />
      </label>
    </Card>
  );
}

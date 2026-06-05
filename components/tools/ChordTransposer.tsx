"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { transposeChords, type ChordNotation } from "@/lib/tools/chords";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

const labels: Record<
  BaseLocale,
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
  ar: { copied: "ØªÙ… Ø§Ù„Ù†Ø³Ø®", copy: "Ù†Ø³Ø® Ø§Ù„Ù†ØªÙŠØ¬Ø©", empty: "Ø£Ù„ØµÙ‚ Ø¨Ø¹Ø¶ Ø§Ù„Ø£ÙˆØªØ§Ø± Ø£ÙˆÙ„Ø§.", flats: "Ø¨ÙŠÙ…ÙˆÙ„", format: "ØµÙŠØºØ© Ø§Ù„Ù†ØªÙŠØ¬Ø©", sharps: "Ø¯ÙŠÙŠØ²", transpose: "Ø§Ù†Ù‚Ù„" },
  de: { copied: "Kopiert", copy: "Ergebnis kopieren", empty: "Fuge zuerst Akkorde ein.", flats: "Bs", format: "Ausgabeformat", sharps: "Kreuze", transpose: "Transponieren" },
  en: { copied: "Copied", copy: "Copy result", empty: "Paste some chords first.", flats: "Flats", format: "Output format", sharps: "Sharps", transpose: "Transpose" },
  es: { copied: "Copiado", copy: "Copiar resultado", empty: "Pega primero algunos acordes.", flats: "Bemoles", format: "Formato del resultado", sharps: "Sostenidos", transpose: "Transponer" },
  fr: { copied: "Copie", copy: "Copier le resultat", empty: "Collez d'abord des accords.", flats: "Bemols", format: "Format du resultat", sharps: "Diesen", transpose: "Transposer" },
  it: { copied: "Copiato", copy: "Copia risultato", empty: "Incolla prima una sequenza di accordi.", flats: "Bemolli", format: "Formato risultato", sharps: "Diesis", transpose: "Trasponi" },
  ja: { copied: "ã‚³ãƒ”ãƒ¼æ¸ˆã¿", copy: "çµæžœã‚’ã‚³ãƒ”ãƒ¼", empty: "ã¾ãšã‚³ãƒ¼ãƒ‰ã‚’è²¼ã‚Šä»˜ã‘ã¦ãã ã•ã„ã€‚", flats: "ãƒ•ãƒ©ãƒƒãƒˆ", format: "å‡ºåŠ›å½¢å¼", sharps: "ã‚·ãƒ£ãƒ¼ãƒ—", transpose: "ç§»èª¿ã™ã‚‹" },
  ko: { copied: "ë³µì‚¬ë¨", copy: "ê²°ê³¼ ë³µì‚¬", empty: "ë¨¼ì € ì½”ë“œë¥¼ ë¶™ì—¬ ë„£ìœ¼ì„¸ìš”.", flats: "í”Œëž«", format: "ì¶œë ¥ í˜•ì‹", sharps: "ìƒ¤í”„", transpose: "ì¡°ì˜®ê¹€" },
  pt: { copied: "Copiado", copy: "Copiar resultado", empty: "Cole primeiro alguns acordes.", flats: "Bemois", format: "Formato do resultado", sharps: "Sustenidos", transpose: "Transpor" },
  ru: { copied: "Ð¡ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾", copy: "ÐšÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚", empty: "Ð¡Ð½Ð°Ñ‡Ð°Ð»Ð° Ð²ÑÑ‚Ð°Ð²ÑŒÑ‚Ðµ Ð°ÐºÐºÐ¾Ñ€Ð´Ñ‹.", flats: "Ð‘ÐµÐ¼Ð¾Ð»Ð¸", format: "Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð°", sharps: "Ð”Ð¸ÐµÐ·Ñ‹", transpose: "Ð¢Ñ€Ð°Ð½ÑÐ¿Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ" },
  zh: { copied: "å·²å¤åˆ¶", copy: "å¤åˆ¶ç»“æžœ", empty: "è¯·å…ˆç²˜è´´å’Œå¼¦ã€‚", flats: "é™å·", format: "ç»“æžœæ ¼å¼", sharps: "å‡å·", transpose: "ç§»è°ƒ" }
} satisfies Record<BaseLocale, {
  copied: string;
  copy: string;
  empty: string;
  flats: string;
  format: string;
  sharps: string;
  transpose: string;
}>;

export function ChordTransposer({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const ui = labels[getContentLocale(locale)] ?? labels.en;
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

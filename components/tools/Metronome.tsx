"use client";

import { useEffect, useRef, useState } from "react";
import { Headphones, Pause, Play, Save, Trash2, Volume2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  beatsForMeter,
  getSubdivisionParts,
  meters,
  subdivisions,
  type Meter,
  type Subdivision
} from "@/lib/tools/metronome";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

type OutputMode = "speaker" | "headphones";

type MetronomePreset = {
  accentFirstBeat: boolean;
  bpm: number;
  id: string;
  meter: Meter;
  name: string;
  outputMode: OutputMode;
  subdivision: Subdivision;
};

const presetStorageKey = "tuninglab-metronome-presets";

function clampBpm(value: number) {
  return Math.min(300, Math.max(20, Math.round(value)));
}

function metronomeLabels(dictionary: Dictionary) {
  const isItalian = dictionary.localeName.toLowerCase().includes("italiano");
  return {
    accentFirstBeat: isItalian ? "Accento sul primo battito" : "Accent first beat",
    apply: isItalian ? "Carica" : "Load",
    beat: isItalian ? "Battito" : "Beat",
    headphones: isItalian ? "Cuffie" : "Headphones",
    noPresets: isItalian ? "Nessun preset salvato" : "No saved presets",
    output: isItalian ? "Uscita" : "Output",
    presets: isItalian ? "Memorie preset" : "Preset memories",
    savePreset: isItalian ? "Salva preset" : "Save preset",
    speaker: isItalian ? "Speaker" : "Speaker",
    subdivision: isItalian ? "Suddivisione ritmica" : "Rhythmic subdivision",
    tapHint: isItalian ? "Tap tempo" : "Tap tempo"
  };
}

export function Metronome({ dictionary }: { dictionary: Dictionary }) {
  const [bpm, setBpm] = useState(100);
  const [meter, setMeter] = useState<Meter>("4/4");
  const [subdivision, setSubdivision] = useState<Subdivision>("quarter");
  const [accentFirstBeat, setAccentFirstBeat] = useState(true);
  const [outputMode, setOutputMode] = useState<OutputMode>("speaker");
  const [running, setRunning] = useState(false);
  const [beat, setBeat] = useState(0);
  const [subBeat, setSubBeat] = useState(0);
  const [tapTimes, setTapTimes] = useState<number[]>([]);
  const [presets, setPresets] = useState<MetronomePreset[]>([]);
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const beatRef = useRef(0);
  const stepRef = useRef(0);
  const labels = metronomeLabels(dictionary);
  const isItalian = dictionary.localeName.toLowerCase().includes("italiano");

  function click(accent: boolean, subdivisionClick: boolean) {
    const context = audioRef.current ?? new AudioContext();
    audioRef.current = context;
    if (context.state === "suspended") void context.resume();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const panner = typeof StereoPannerNode !== "undefined" ? new StereoPannerNode(context) : null;
    oscillator.frequency.value = accent ? 1480 : subdivisionClick ? 540 : 860;
    oscillator.type = outputMode === "headphones" ? "sine" : "square";
    const peak = outputMode === "headphones" ? (accent ? 0.22 : 0.12) : accent ? 0.48 : 0.24;
    gain.gain.setValueAtTime(0.001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(peak, context.currentTime + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + (subdivisionClick ? 0.045 : 0.075));
    if (panner) {
      panner.pan.value = outputMode === "headphones" && subdivisionClick ? 0.18 : 0;
      oscillator.connect(gain).connect(panner).connect(context.destination);
    } else {
      oscillator.connect(gain).connect(context.destination);
    }
    oscillator.start();
    oscillator.stop(context.currentTime + 0.09);
  }

  useEffect(() => {
    if (!running) return;
    const beats = beatsForMeter(meter);
    const parts = getSubdivisionParts(subdivision);
    beatRef.current = 0;
    stepRef.current = 0;
    setBeat(0);
    setSubBeat(0);
    click(accentFirstBeat, false);
    intervalRef.current = window.setInterval(() => {
      stepRef.current = (stepRef.current + 1) % (beats * parts);
      beatRef.current = Math.floor(stepRef.current / parts);
      const currentSubBeat = stepRef.current % parts;
      setBeat(beatRef.current);
      setSubBeat(currentSubBeat);
      click(accentFirstBeat && beatRef.current === 0 && currentSubBeat === 0, currentSubBeat > 0);
    }, 60000 / bpm / parts);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [accentFirstBeat, bpm, meter, outputMode, running, subdivision]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(presetStorageKey);
      if (saved) setPresets(JSON.parse(saved) as MetronomePreset[]);
    } catch {
      setPresets([]);
    }
  }, []);

  function toggle() {
    if (!running) {
      setBeat(0);
      setSubBeat(0);
    }
    setRunning((value) => !value);
  }

  function updateBpm(value: number) {
    setBpm(clampBpm(value));
  }

  function tapTempo() {
    const now = Date.now();
    setTapTimes((current) => {
      const recent = [...current.filter((time) => now - time < 3000), now].slice(-8);
      if (recent.length >= 2) {
        const intervals = recent.slice(1).map((time, index) => time - recent[index]);
        const average = intervals.reduce((sum, gap) => sum + gap, 0) / intervals.length;
        updateBpm(60000 / average);
      }
      return recent;
    });
  }

  function savePreset() {
    const subdivisionLabel = subdivisions.find((item) => item.id === subdivision)?.labels[isItalian ? "it" : "en"] ?? subdivision;
    const preset: MetronomePreset = {
      accentFirstBeat,
      bpm,
      id: `${Date.now()}`,
      meter,
      name: `${bpm} BPM - ${meter} - ${subdivisionLabel}`,
      outputMode,
      subdivision
    };
    setPresets((current) => {
      const next = [preset, ...current].slice(0, 6);
      window.localStorage.setItem(presetStorageKey, JSON.stringify(next));
      return next;
    });
  }

  function applyPreset(preset: MetronomePreset) {
    setBpm(preset.bpm);
    setMeter(preset.meter);
    setSubdivision(preset.subdivision);
    setAccentFirstBeat(preset.accentFirstBeat);
    setOutputMode(preset.outputMode);
  }

  function deletePreset(id: string) {
    setPresets((current) => {
      const next = current.filter((preset) => preset.id !== id);
      window.localStorage.setItem(presetStorageKey, JSON.stringify(next));
      return next;
    });
  }

  const beats = beatsForMeter(meter);
  const parts = getSubdivisionParts(subdivision);

  return (
    <Card className="space-y-6 p-4 sm:p-6">
      <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-ink/60">{dictionary.tool.bpm}</p>
          <div className="mt-2 flex flex-wrap items-end gap-3">
            <input
              aria-label={dictionary.tool.bpm}
              className="w-36 rounded-lg border border-line bg-white px-3 py-2 text-5xl font-bold leading-none outline-none focus:border-mint sm:w-44 sm:text-6xl"
              inputMode="numeric"
              max={300}
              min={20}
              step={1}
              type="number"
              value={bpm}
              onChange={(event) => updateBpm(Number(event.target.value))}
            />
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[-5, -1, 1, 5].map((amount) => (
                <button
                  key={amount}
                  className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold transition hover:border-mint"
                  type="button"
                  onClick={() => updateBpm(bpm + amount)}
                >
                  {amount > 0 ? `+${amount}` : amount}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          <Button onClick={toggle} className="w-full sm:w-auto">
            {running ? <Pause size={17} /> : <Play size={17} />}
            {running ? dictionary.tool.stop : dictionary.tool.start}
          </Button>
          <Button onClick={tapTempo} variant="secondary" className="w-full sm:w-auto">
            {dictionary.tool.tap}
          </Button>
        </div>
      </div>
      <Slider min={20} max={300} value={bpm} onChange={(event) => updateBpm(Number(event.target.value))} />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          {dictionary.tool.meter}
          <select value={meter} onChange={(event) => setMeter(event.target.value as Meter)} className="rounded-md border border-line bg-white p-3">
            {meters.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {labels.subdivision}
          <select
            value={subdivision}
            onChange={(event) => setSubdivision(event.target.value as Subdivision)}
            className="rounded-md border border-line bg-white p-3"
          >
            {subdivisions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.labels[isItalian ? "it" : "en"]} ({item.parts})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white p-4 text-sm font-semibold">
          {labels.accentFirstBeat}
          <input
            checked={accentFirstBeat}
            className="h-5 w-5 accent-mint"
            type="checkbox"
            onChange={(event) => setAccentFirstBeat(event.target.checked)}
          />
        </label>
        <div className="grid gap-2 rounded-lg border border-line bg-white p-4">
          <p className="text-sm font-semibold">{labels.output}</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition ${
                outputMode === "speaker" ? "border-mint bg-mint text-white" : "border-line bg-white"
              }`}
              type="button"
              onClick={() => setOutputMode("speaker")}
            >
              <Volume2 size={16} />
              {labels.speaker}
            </button>
            <button
              className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition ${
                outputMode === "headphones" ? "border-mint bg-mint text-white" : "border-line bg-white"
              }`}
              type="button"
              onClick={() => setOutputMode("headphones")}
            >
              <Headphones size={16} />
              {labels.headphones}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="flex items-center justify-between text-sm font-semibold text-ink/70">
          <span>{labels.beat}</span>
          <span>
            {running ? beat + 1 : 1}/{beats}
          </span>
        </div>
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${beats}, minmax(0, 1fr))` }}>
          {Array.from({ length: beats }).map((_, beatIndex) => (
            <div key={beatIndex} className="grid gap-1 rounded-lg border border-line bg-white p-2" style={{ gridTemplateColumns: `repeat(${parts}, minmax(0, 1fr))` }}>
              {Array.from({ length: parts }).map((__, partIndex) => {
                const active = running && beatIndex === beat && partIndex === subBeat;
                const accent = beatIndex === 0 && partIndex === 0;
                return (
                  <span
                    key={partIndex}
                    className={`h-10 rounded-md transition ${
                      active ? (accent && accentFirstBeat ? "bg-orange" : "bg-mint") : accent ? "bg-orange/20" : "bg-line"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <section className="grid gap-3 rounded-lg border border-line bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold">{labels.presets}</h3>
          <Button onClick={savePreset} variant="secondary">
            <Save size={16} />
            {labels.savePreset}
          </Button>
        </div>
        {presets.length === 0 ? (
          <p className="text-sm text-ink/60">{labels.noPresets}</p>
        ) : (
          <div className="grid gap-2">
            {presets.map((preset) => (
              <div key={preset.id} className="grid gap-2 rounded-md border border-line p-3 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center">
                <span className="font-semibold">{preset.name}</span>
                <button
                  className="rounded-md border border-line px-3 py-2 text-sm font-bold transition hover:border-mint"
                  type="button"
                  onClick={() => applyPreset(preset)}
                >
                  {labels.apply}
                </button>
                <button
                  aria-label={dictionary.tool.reset}
                  className="rounded-md border border-line px-3 py-2 text-sm font-bold text-ink/60 transition hover:border-orange hover:text-orange"
                  type="button"
                  onClick={() => deletePreset(preset.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </Card>
  );
}

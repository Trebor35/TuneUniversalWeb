"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Mic, MicOff, Settings2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getInstrumentLabel, getOrderedInstruments } from "@/lib/tools/instruments";
import { autoCorrelate, formatNoteName, frequencyToNote, normalizeNoteSystem, tunings, type NoteSystem, type TuningNote } from "@/lib/tools/tuner";
import type { Instrument } from "@/lib/tools/toolConfig";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type TunerProps = {
  dictionary: Dictionary;
  instrument?: Instrument;
};

const localeByDictionaryName: Record<string, Locale> = {
  Italiano: "it",
  English: "en",
  "FranÃ§ais": "fr",
  Deutsch: "de",
  "EspaÃ±ol": "es",
  "PortuguÃªs": "pt",
  "ç®€ä½“ä¸­æ–‡": "zh",
  "Ð ÑƒÑÑÐºÐ¸Ð¹": "ru",
  "æ—¥æœ¬èªž": "ja",
  "í•œêµ­ì–´": "ko",
  "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©": "ar"
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function noteWithOctave(note: TuningNote) {
  return `${note.name}${note.octave ?? ""}`;
}

function nearestString(frequency: number, strings: TuningNote[]) {
  return strings.reduce((nearest, current) => {
    const nearestDistance = Math.abs(1200 * Math.log2(frequency / nearest.frequency));
    const currentDistance = Math.abs(1200 * Math.log2(frequency / current.frequency));
    return currentDistance < nearestDistance ? current : nearest;
  }, strings[0]);
}

export function GuitarTuner({ dictionary, instrument = "guitar" }: TunerProps) {
  const isItalian = dictionary.localeName === "Italiano";
  const currentLocale = localeByDictionaryName[dictionary.localeName] ?? "en";
  const orderedInstruments = useMemo(() => getOrderedInstruments(currentLocale), [currentLocale]);
  const uiText = {
    automaticMode: isItalian ? "Automatico" : "Automatic",
    automaticModeHint: isItalian
      ? "Riconosce da solo la nota o la corda piu vicina."
      : "Automatically detects the closest note or string.",
    directionMode: isItalian ? "Filtro direzionale" : "Directional filter",
    directionModeHint: isItalian
      ? "Riduce rumore ambientale e ascolta meglio il suono vicino al microfono."
      : "Reduces room noise and focuses on sound close to the microphone.",
    instrument: isItalian ? "Strumento" : "Instrument",
    lessSensitive: isItalian ? "Meno sensibile" : "Less sensitive",
    lockString: isItalian ? "Blocca corda selezionata" : "Lock selected string",
    lockStringHint: isItalian
      ? "Consigliato: scegli una corda e l'accordatore resta su quella nota."
      : "Recommended: choose a string and the tuner stays on that target.",
    manualMode: isItalian ? "Manuale" : "Manual",
    moreSensitive: isItalian ? "Piu sensibile" : "More sensitive",
    noiseGate: isItalian ? "Sensibilita microfono" : "Microphone sensitivity",
    notes: isItalian ? "Note" : "Notes",
    target: isItalian ? "Obiettivo" : "Target",
    strings: isItalian ? "Corde" : "Strings",
    tunerName: isItalian ? "Accordatore digitale TuneUniversal" : "TuneUniversal Digital Tuner"
  };
  const initialInstrument = orderedInstruments.includes(instrument) ? instrument : "guitar";
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument>(initialInstrument);
  const [selectedString, setSelectedString] = useState(0);
  const [noteSystem, setNoteSystem] = useState<NoteSystem>("latin");
  const [isListening, setIsListening] = useState(false);
  const [frequency, setFrequency] = useState<number | null>(null);
  const [detectedNote, setDetectedNote] = useState<string>("--");
  const [cents, setCents] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [directionalFilter, setDirectionalFilter] = useState(true);
  const [lockString, setLockString] = useState(true);
  const [micSensitivity, setMicSensitivity] = useState(58);
  const contextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const frequencyHistoryRef = useRef<number[]>([]);
  const lockStringRef = useRef(lockString);
  const micSensitivityRef = useRef(micSensitivity);
  const noteSystemRef = useRef(noteSystem);
  const selectedStringRef = useRef(selectedString);
  const stringsRef = useRef<TuningNote[]>([]);

  const strings = tunings[selectedInstrument];
  const targetString = strings[selectedString] ?? strings[0];
  const displayCents = clamp(cents ?? 0, -50, 50);
  const needleAngle = displayCents * -1.35;
  const status =
    cents === null
      ? "--"
      : Math.abs(cents) <= 5
        ? dictionary.tool.inTune
        : cents < 0
          ? dictionary.tool.flat
          : dictionary.tool.sharp;

  const statusClass = cents !== null && Math.abs(cents) <= 5 ? "text-emerald-300" : "text-orange-300";
  const centerGlow = cents !== null && Math.abs(cents) <= 5 ? "shadow-[0_0_45px_rgba(52,211,153,0.45)]" : "";

  const ticks = useMemo(
    () =>
      Array.from({ length: 21 }, (_, index) => {
        const value = -50 + index * 5;
        const angle = value * 1.35;
        const radians = (angle * Math.PI) / 180;
        return {
          angle,
          left: 50 + Math.sin(radians) * 38,
          top: 72 - Math.cos(radians) * 48,
          value
        };
      }),
    []
  );

  function smoothedFrequency(frequencyValue: number) {
    const history = [...frequencyHistoryRef.current, frequencyValue].slice(-5);
    frequencyHistoryRef.current = history;
    return [...history].sort((a, b) => a - b)[Math.floor(history.length / 2)];
  }

  function microphoneErrorMessage(error: unknown) {
    if (!window.isSecureContext) {
      return dictionary.tool.micNeedsSecureContext ?? dictionary.tool.micError;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      return dictionary.tool.micNotSupported ?? dictionary.tool.micError;
    }

    if (error instanceof DOMException) {
      if (error.name === "NotAllowedError" || error.name === "SecurityError") {
        return dictionary.tool.micPermissionDenied ?? dictionary.tool.micError;
      }

      if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
        return dictionary.tool.micNotFound ?? dictionary.tool.micError;
      }
    }

    return dictionary.tool.micError;
  }

  async function start() {
    try {
      setError("");
      if (!navigator.mediaDevices?.getUserMedia) {
        setError(dictionary.tool.micNotSupported ?? dictionary.tool.micError);
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          autoGainControl: false,
          channelCount: 1,
          echoCancellation: directionalFilter,
          noiseSuppression: directionalFilter
        }
      });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const highPass = audioContext.createBiquadFilter();
      const analyser = audioContext.createAnalyser();
      highPass.type = "highpass";
      highPass.frequency.value = directionalFilter ? 70 : 35;
      highPass.Q.value = 0.7;
      analyser.fftSize = 2048;
      source.connect(highPass).connect(analyser);

      const buffer = new Float32Array(analyser.fftSize);
      streamRef.current = stream;
      contextRef.current = audioContext;
      frequencyHistoryRef.current = [];
      setIsListening(true);

      const tick = () => {
        analyser.getFloatTimeDomainData(buffer);
        const minRms = 0.004 + ((100 - micSensitivityRef.current) / 100) * 0.035;
        const detected = autoCorrelate(buffer, audioContext.sampleRate, minRms);
        if (detected) {
          const stableFrequency = smoothedFrequency(detected);
          const currentStrings = stringsRef.current.length ? stringsRef.current : strings;
          const nearest = lockStringRef.current
            ? currentStrings[selectedStringRef.current] ?? currentStrings[0]
            : nearestString(stableFrequency, currentStrings);
          const next = frequencyToNote(stableFrequency);
          const targetCents = Math.round(1200 * Math.log2(stableFrequency / nearest.frequency));
          setFrequency(stableFrequency);
          setDetectedNote(formatNoteName(next.name, noteSystemRef.current));
          if (!lockStringRef.current) {
            const nextIndex = currentStrings.indexOf(nearest);
            selectedStringRef.current = nextIndex;
            setSelectedString(nextIndex);
          }
          setCents(clamp(targetCents, -50, 50));
        }
        frameRef.current = requestAnimationFrame(tick);
      };
      tick();
    } catch (caughtError) {
      setError(microphoneErrorMessage(caughtError));
    }
  }

  function stop() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    streamRef.current?.getTracks().forEach((track) => track.stop());
    contextRef.current?.close();
    contextRef.current = null;
    streamRef.current = null;
    setIsListening(false);
  }

  useEffect(() => stop, []);

  useEffect(() => {
    const savedSystem = window.localStorage.getItem("tuninglab-note-system");
    if (savedSystem === "latin" || savedSystem === "international" || savedSystem === "it" || savedSystem === "en") {
      setNoteSystem(normalizeNoteSystem(savedSystem));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tuninglab-note-system", noteSystem);
  }, [noteSystem]);

  useEffect(() => {
    lockStringRef.current = lockString;
  }, [lockString]);

  useEffect(() => {
    micSensitivityRef.current = micSensitivity;
  }, [micSensitivity]);

  useEffect(() => {
    noteSystemRef.current = noteSystem;
  }, [noteSystem]);

  useEffect(() => {
    selectedStringRef.current = selectedString;
  }, [selectedString]);

  useEffect(() => {
    stringsRef.current = strings;
  }, [strings]);

  useEffect(() => {
    setSelectedString(0);
    selectedStringRef.current = 0;
    frequencyHistoryRef.current = [];
    setCents(null);
    setFrequency(null);
    setDetectedNote("--");
  }, [selectedInstrument]);

  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-950 p-0 text-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/10 bg-zinc-900/90 px-4 py-3 sm:px-5">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <Settings2 size={16} aria-hidden />
            <span>{uiText.tunerName}</span>
          </div>
          <label className="grid gap-1 text-xs font-semibold text-zinc-400">
            {uiText.instrument}
            <select
              value={selectedInstrument}
              onChange={(event) => setSelectedInstrument(event.target.value as Instrument)}
              className="min-h-10 rounded-md border border-white/10 bg-zinc-950 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {orderedInstruments.map((item) => (
                <option key={item} value={item}>
                  {getInstrumentLabel(item, currentLocale)}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-semibold text-zinc-400">
            {uiText.notes}
            <select
              value={noteSystem}
              onChange={(event) => setNoteSystem(event.target.value as NoteSystem)}
              className="min-h-10 rounded-md border border-white/10 bg-zinc-950 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="latin">Sistema latino - Do Re Mi Fa Sol La Si</option>
              <option value="international">Anglo-American / international - C D E F G A B</option>
            </select>
          </label>
        </div>
        <div className="mt-3 grid gap-3 border-t border-white/10 pt-3 md:grid-cols-[1fr_1.4fr] md:items-center">
          <label className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-semibold text-zinc-300">
            <span>
              <span className="block text-white">{uiText.directionMode}</span>
              <span className="mt-1 block font-normal leading-5 text-zinc-500">{uiText.directionModeHint}</span>
            </span>
            <input
              checked={directionalFilter}
              className="h-5 w-5 shrink-0 accent-emerald-400"
              type="checkbox"
              onChange={(event) => setDirectionalFilter(event.target.checked)}
            />
          </label>
          <label className="grid gap-2 rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-semibold text-zinc-300">
            <span className="flex items-center justify-between gap-3">
              <span className="text-white">{uiText.noiseGate}</span>
              <span>{micSensitivity}%</span>
            </span>
            <input
              min={15}
              max={100}
              step={1}
              type="range"
              value={micSensitivity}
              onChange={(event) => setMicSensitivity(Number(event.target.value))}
              className="w-full accent-emerald-400"
            />
            <span className="flex justify-between text-[11px] font-normal text-zinc-500">
              <span>{uiText.lessSensitive}</span>
              <span>{uiText.moreSensitive}</span>
            </span>
          </label>
        </div>
        <div className="mt-3 grid gap-2 rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-semibold text-zinc-300 sm:grid-cols-[1fr_auto] sm:items-center">
          <span>
            <span className="block text-white">{lockString ? uiText.lockString : uiText.automaticMode}</span>
            <span className="mt-1 block font-normal leading-5 text-zinc-500">
              {lockString ? uiText.lockStringHint : uiText.automaticModeHint}
            </span>
          </span>
          <span className="grid grid-cols-2 gap-2">
            <button
              className={`rounded-md border px-3 py-2 font-bold transition ${
                !lockString ? "border-emerald-300 bg-emerald-300 text-zinc-950" : "border-white/10 bg-white/5 text-white hover:border-emerald-300"
              }`}
              type="button"
              onClick={() => {
                frequencyHistoryRef.current = [];
                setLockString(false);
              }}
            >
              {uiText.automaticMode}
            </button>
            <button
              className={`rounded-md border px-3 py-2 font-bold transition ${
                lockString ? "border-emerald-300 bg-emerald-300 text-zinc-950" : "border-white/10 bg-white/5 text-white hover:border-emerald-300"
              }`}
              type="button"
              onClick={() => {
                frequencyHistoryRef.current = [];
                setLockString(true);
              }}
            >
              {uiText.manualMode}
            </button>
          </span>
        </div>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className={`relative mx-auto aspect-[1.55/1] w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.18),transparent_26%),linear-gradient(180deg,#18181b,#050505)] p-4 ${centerGlow}`}>
          <div className="absolute inset-x-4 top-4 flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            <span className="text-orange-300">{dictionary.tool.flat}</span>
            <span className="text-emerald-300">{dictionary.tool.inTune}</span>
            <span className="text-orange-300">{dictionary.tool.sharp}</span>
          </div>

          <div className="absolute left-1/2 top-[72%] h-[96%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-t-full border-t-[18px] border-zinc-800" />

          {ticks.map((tick) => {
            const isCenter = tick.value === 0;
            const isWarm = Math.abs(tick.value) > 20;
            return (
              <span
                key={tick.value}
                className={`absolute h-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  isCenter ? "w-2 bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.85)]" : isWarm ? "w-1 bg-orange-400" : "w-1 bg-zinc-500"
                }`}
                style={{
                  left: `${tick.left}%`,
                  top: `${tick.top}%`,
                  transform: `translate(-50%, -50%) rotate(${tick.angle}deg)`
                }}
              />
            );
          })}

          <div
            className="absolute left-1/2 top-[72%] h-[35%] w-1 origin-bottom rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.55)] transition-transform duration-150"
            style={{ transform: `translateX(-50%) translateY(-100%) rotate(${needleAngle}deg)` }}
          />
          <div className="absolute left-1/2 top-[72%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-zinc-950" />

          <div className="absolute inset-x-4 bottom-5 grid gap-3 text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">{dictionary.tool.detectedNote}</p>
              <p className="mt-1 text-6xl font-black leading-none text-white sm:text-7xl">{detectedNote}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="rounded-md border border-white/10 bg-white/5 p-2">
                <span className="block text-xs text-zinc-500">{dictionary.tool.frequency}</span>
                <strong>{frequency ? `${frequency.toFixed(1)} Hz` : "--"}</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 p-2">
                <span className="block text-xs text-zinc-500">{dictionary.tool.cents}</span>
                <strong>{cents ?? "--"}</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 p-2">
                <span className="block text-xs text-zinc-500">{uiText.target}</span>
                <strong>{formatNoteName(noteWithOctave(targetString), noteSystem)}</strong>
              </div>
            </div>
            <p className={`text-lg font-black uppercase tracking-[0.18em] ${statusClass}`}>{status}</p>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-zinc-300">
              {getInstrumentLabel(selectedInstrument, currentLocale)} {uiText.strings}:{" "}
              <span className="text-zinc-100">
                {strings.map((stringNote) => formatNoteName(noteWithOctave(stringNote), noteSystem, false)).join(" - ")}
              </span>
            </p>
            <p className="text-xs text-zinc-500">+/-5 cents = {dictionary.tool.inTune}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {strings.map((stringNote, index) => {
              const active = index === selectedString;
              return (
                <button
                  key={`${stringNote.name}-${stringNote.octave}-${index}`}
                  type="button"
                  onClick={() => setSelectedString(index)}
                  className={`rounded-lg border px-3 py-3 text-left transition ${
                    active
                      ? "border-emerald-300 bg-emerald-300 text-zinc-950"
                      : "border-white/10 bg-white/5 text-white hover:border-emerald-300"
                  }`}
                >
                  <span className="block text-xl font-black">{formatNoteName(noteWithOctave(stringNote), noteSystem, false)}</span>
                  <span className="text-xs opacity-75">{stringNote.frequency} Hz</span>
                </button>
              );
            })}
          </div>
        </div>

        {error ? <p className="rounded-md border border-orange-400/30 bg-orange-500/10 p-3 text-sm text-orange-200">{error}</p> : null}

        <Button onClick={isListening ? stop : start} variant={isListening ? "secondary" : "primary"} className="w-full border border-white/10 bg-white text-zinc-950 hover:bg-emerald-200 sm:w-auto">
          {isListening ? <MicOff size={17} /> : <Mic size={17} />}
          {isListening ? dictionary.tool.stopMic : dictionary.tool.requestMic}
        </Button>
      </div>
    </Card>
  );
}

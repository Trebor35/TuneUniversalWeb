"use client";

import { useEffect, useRef, useState } from "react";
import { Headphones, Pause, Play, Save, Trash2, Volume2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localeFromName, type Locale } from "@/lib/i18n/locales";
import {
  beatsForMeter,
  getSubdivisionParts,
  meterDenominators,
  meterNumerators,
  subdivisions,
  type Meter,
  type Subdivision
} from "@/lib/tools/metronome";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

type OutputMode = "speaker" | "headphones";
type PracticeAdvanceMode = "bars" | "time";

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

const metronomeUiText: Record<
  Locale,
  {
    accentFirstBeat: string;
    apply: string;
    beat: string;
    headphones: string;
    noPresets: string;
    output: string;
    presets: string;
    savePreset: string;
    speaker: string;
    subdivision: string;
    tapHint: string;
  }
> = {
  it: { accentFirstBeat: "Accento sul primo battito", apply: "Carica", beat: "Battito", headphones: "Cuffie", noPresets: "Nessun preset salvato", output: "Uscita", presets: "Memorie preset", savePreset: "Salva preset", speaker: "Speaker", subdivision: "Suddivisione ritmica", tapHint: "Tap tempo" },
  en: { accentFirstBeat: "Accent first beat", apply: "Load", beat: "Beat", headphones: "Headphones", noPresets: "No saved presets", output: "Output", presets: "Preset memories", savePreset: "Save preset", speaker: "Speaker", subdivision: "Rhythmic subdivision", tapHint: "Tap tempo" },
  fr: { accentFirstBeat: "Accent sur le premier temps", apply: "Charger", beat: "Temps", headphones: "Casque", noPresets: "Aucun preset enregistre", output: "Sortie", presets: "Memoires de presets", savePreset: "Enregistrer preset", speaker: "Haut-parleur", subdivision: "Subdivision rythmique", tapHint: "Tap tempo" },
  de: { accentFirstBeat: "Akzent auf erster Zaehlzeit", apply: "Laden", beat: "Schlag", headphones: "Kopfhoerer", noPresets: "Keine Presets gespeichert", output: "Ausgabe", presets: "Preset-Speicher", savePreset: "Preset speichern", speaker: "Lautsprecher", subdivision: "Rhythmische Unterteilung", tapHint: "Tap Tempo" },
  es: { accentFirstBeat: "Acento en el primer pulso", apply: "Cargar", beat: "Pulso", headphones: "Auriculares", noPresets: "Sin presets guardados", output: "Salida", presets: "Memorias de preset", savePreset: "Guardar preset", speaker: "Altavoz", subdivision: "Subdivision ritmica", tapHint: "Tap tempo" },
  pt: { accentFirstBeat: "Acento no primeiro tempo", apply: "Carregar", beat: "Batida", headphones: "Fones", noPresets: "Nenhum preset salvo", output: "Saida", presets: "Memorias de preset", savePreset: "Salvar preset", speaker: "Alto-falante", subdivision: "Subdivisao ritmica", tapHint: "Tap tempo" },
  zh: { accentFirstBeat: "第一拍重音", apply: "载入", beat: "拍", headphones: "耳机", noPresets: "没有已保存预设", output: "输出", presets: "预设记忆", savePreset: "保存预设", speaker: "扬声器", subdivision: "节奏细分", tapHint: "点击速度" },
  ru: { accentFirstBeat: "Акцент на первой доле", apply: "Загрузить", beat: "Доля", headphones: "Наушники", noPresets: "Нет сохраненных пресетов", output: "Выход", presets: "Память пресетов", savePreset: "Сохранить пресет", speaker: "Динамик", subdivision: "Ритмическое деление", tapHint: "Tap tempo" },
  ja: { accentFirstBeat: "1拍目を強調", apply: "読み込む", beat: "拍", headphones: "ヘッドホン", noPresets: "保存済みプリセットなし", output: "出力", presets: "プリセットメモリ", savePreset: "プリセット保存", speaker: "スピーカー", subdivision: "リズム細分", tapHint: "タップテンポ" },
  ko: { accentFirstBeat: "첫 박자 악센트", apply: "불러오기", beat: "박", headphones: "헤드폰", noPresets: "저장된 프리셋 없음", output: "출력", presets: "프리셋 메모리", savePreset: "프리셋 저장", speaker: "스피커", subdivision: "리듬 분할", tapHint: "탭 템포" },
  ar: { accentFirstBeat: "تشديد الضربة الأولى", apply: "تحميل", beat: "ضربة", headphones: "سماعات", noPresets: "لا توجد إعدادات محفوظة", output: "الإخراج", presets: "ذاكرة الإعدادات", savePreset: "حفظ الإعداد", speaker: "مكبر الصوت", subdivision: "تقسيم إيقاعي", tapHint: "Tap tempo" }
};

export function Metronome({ dictionary }: { dictionary: Dictionary }) {
  const [bpm, setBpm] = useState(100);
  const [meter, setMeter] = useState<Meter>("4/4");
  const [subdivision, setSubdivision] = useState<Subdivision>("quarter");
  const [accentFirstBeat, setAccentFirstBeat] = useState(true);
  const [outputMode, setOutputMode] = useState<OutputMode>("speaker");
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [practiceEnabled, setPracticeEnabled] = useState(false);
  const [practiceStartBpm, setPracticeStartBpm] = useState(80);
  const [practiceTargetBpm, setPracticeTargetBpm] = useState(100);
  const [practiceIncrement, setPracticeIncrement] = useState(2);
  const [practiceAdvanceMode, setPracticeAdvanceMode] = useState<PracticeAdvanceMode>("bars");
  const [practiceBars, setPracticeBars] = useState(4);
  const [practiceSeconds, setPracticeSeconds] = useState(60);
  const [practiceProgress, setPracticeProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const [beat, setBeat] = useState(0);
  const [subBeat, setSubBeat] = useState(0);
  const [tapTimes, setTapTimes] = useState<number[]>([]);
  const [presets, setPresets] = useState<MetronomePreset[]>([]);
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const beatRef = useRef(0);
  const stepRef = useRef(0);
  const practiceBarsRef = useRef(0);
  const practiceStartedAtRef = useRef(0);
  const currentLocale = localeFromName(dictionary.localeName);
  const labels = metronomeUiText[currentLocale];
  const hapticsLabel = currentLocale === "it" ? "Vibrazione/flash" : "Vibration/flash";
  const silentModeNote =
    currentLocale === "it"
      ? "Su iPhone l'interruttore silenzioso puo bloccare l'audio del browser: disattiva il silenzioso o usa cuffie. Il flash del battito resta attivo."
      : "On iPhone, Silent Mode can block browser audio: turn Silent Mode off or use headphones. The beat flash stays active.";
  const practiceLabels =
    currentLocale === "it"
      ? {
          advance: "Cambia BPM",
          afterBars: "Dopo giri completi",
          afterTime: "Dopo tempo",
          bars: "Giri",
          cycle: "Ciclo esercizio",
          every: "Ogni",
          increment: "Incremento",
          seconds: "Secondi",
          start: "BPM partenza",
          target: "BPM arrivo"
        }
      : {
          advance: "Change BPM",
          afterBars: "After complete bars",
          afterTime: "After time",
          bars: "Bars",
          cycle: "Practice cycle",
          every: "Every",
          increment: "Increment",
          seconds: "Seconds",
          start: "Start BPM",
          target: "Target BPM"
        };

  function ensureAudioContext() {
    const context = audioRef.current ?? new AudioContext();
    audioRef.current = context;
    if (context.state === "suspended") void context.resume();
    return context;
  }

  function pulseHaptics(accent: boolean, subdivisionClick: boolean) {
    if (!hapticsEnabled || subdivisionClick || typeof navigator === "undefined" || !navigator.vibrate) return;
    navigator.vibrate(accent ? 28 : 14);
  }

  function click(accent: boolean, subdivisionClick: boolean) {
    const context = ensureAudioContext();
    pulseHaptics(accent, subdivisionClick);
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

  function maybeAdvancePracticeBpm() {
    if (!practiceEnabled || bpm >= practiceTargetBpm) return;

    const nextBpm = clampBpm(Math.min(practiceTargetBpm, bpm + practiceIncrement));
    if (nextBpm === bpm) return;

    practiceBarsRef.current = 0;
    practiceStartedAtRef.current = Date.now();
    setPracticeProgress(0);
    setBpm(nextBpm);
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
      if (practiceEnabled && currentSubBeat === 0 && stepRef.current === 0) {
        practiceBarsRef.current += 1;
        setPracticeProgress(practiceBarsRef.current);
        if (practiceAdvanceMode === "bars" && practiceBarsRef.current >= practiceBars) {
          maybeAdvancePracticeBpm();
        }
      }
      if (practiceEnabled && practiceAdvanceMode === "time" && Date.now() - practiceStartedAtRef.current >= practiceSeconds * 1000) {
        maybeAdvancePracticeBpm();
      }
    }, 60000 / bpm / parts);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [accentFirstBeat, bpm, hapticsEnabled, meter, outputMode, practiceAdvanceMode, practiceBars, practiceEnabled, practiceIncrement, practiceSeconds, practiceTargetBpm, running, subdivision]);

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
      ensureAudioContext();
      if (practiceEnabled) {
        setBpm(clampBpm(practiceStartBpm));
      }
      practiceBarsRef.current = 0;
      practiceStartedAtRef.current = Date.now();
      setPracticeProgress(0);
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
    const subdivisionLabel = subdivisions.find((item) => item.id === subdivision)?.labels[currentLocale] ?? subdivision;
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
  const [meterNumerator, meterDenominator] = meter.split("/");

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

      <section className="grid gap-4 rounded-lg border border-line bg-white p-4">
        <label className="flex items-center justify-between gap-4 text-sm font-semibold">
          {practiceLabels.cycle}
          <input
            checked={practiceEnabled}
            className="h-5 w-5 accent-mint"
            type="checkbox"
            onChange={(event) => {
              setPracticeEnabled(event.target.checked);
              practiceBarsRef.current = 0;
              practiceStartedAtRef.current = Date.now();
              setPracticeProgress(0);
            }}
          />
        </label>
        <div className="grid gap-3 md:grid-cols-4">
          <label className="grid gap-2 text-sm font-semibold">
            {practiceLabels.start}
            <input
              className="rounded-md border border-line bg-paper p-3"
              inputMode="numeric"
              max={300}
              min={20}
              type="number"
              value={practiceStartBpm}
              onChange={(event) => setPracticeStartBpm(clampBpm(Number(event.target.value)))}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            {practiceLabels.target}
            <input
              className="rounded-md border border-line bg-paper p-3"
              inputMode="numeric"
              max={300}
              min={20}
              type="number"
              value={practiceTargetBpm}
              onChange={(event) => setPracticeTargetBpm(clampBpm(Number(event.target.value)))}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            {practiceLabels.increment}
            <select
              className="rounded-md border border-line bg-paper p-3"
              value={practiceIncrement}
              onChange={(event) => setPracticeIncrement(Number(event.target.value))}
            >
              {[1, 2, 3, 4, 5].map((amount) => (
                <option key={amount} value={amount}>
                  +{amount} BPM
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            {practiceLabels.advance}
            <select
              className="rounded-md border border-line bg-paper p-3"
              value={practiceAdvanceMode}
              onChange={(event) => {
                setPracticeAdvanceMode(event.target.value as PracticeAdvanceMode);
                practiceBarsRef.current = 0;
                practiceStartedAtRef.current = Date.now();
                setPracticeProgress(0);
              }}
            >
              <option value="bars">{practiceLabels.afterBars}</option>
              <option value="time">{practiceLabels.afterTime}</option>
            </select>
          </label>
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
          {practiceAdvanceMode === "bars" ? (
            <label className="grid gap-2 text-sm font-semibold">
              {practiceLabels.every}
              <input
                className="rounded-md border border-line bg-paper p-3"
                inputMode="numeric"
                max={64}
                min={1}
                type="number"
                value={practiceBars}
                onChange={(event) => setPracticeBars(Math.min(64, Math.max(1, Math.round(Number(event.target.value)))))}
              />
            </label>
          ) : (
            <label className="grid gap-2 text-sm font-semibold">
              {practiceLabels.every}
              <input
                className="rounded-md border border-line bg-paper p-3"
                inputMode="numeric"
                max={1800}
                min={5}
                type="number"
                value={practiceSeconds}
                onChange={(event) => setPracticeSeconds(Math.min(1800, Math.max(5, Math.round(Number(event.target.value)))))}
              />
            </label>
          )}
          <p className="rounded-md bg-paper p-3 text-sm font-semibold text-ink/70">
            {practiceAdvanceMode === "bars"
              ? `${practiceLabels.bars}: ${practiceProgress}/${practiceBars}`
              : `${practiceLabels.seconds}: ${practiceSeconds}`}
          </p>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setBpm(clampBpm(practiceStartBpm));
              practiceBarsRef.current = 0;
              practiceStartedAtRef.current = Date.now();
              setPracticeProgress(0);
            }}
          >
            {practiceLabels.start}
          </Button>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-[1fr_1fr_1.4fr]">
        <label className="grid gap-2 text-sm font-semibold">
          {currentLocale === "it" ? "Numeratore" : "Numerator"}
          <select
            value={meterNumerator}
            onChange={(event) => setMeter(`${event.target.value}/${meterDenominator}` as Meter)}
            className="rounded-md border border-line bg-white p-3"
          >
            {meterNumerators.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {currentLocale === "it" ? "Denominatore" : "Denominator"}
          <select
            value={meterDenominator}
            onChange={(event) => setMeter(`${meterNumerator}/${event.target.value}` as Meter)}
            className="rounded-md border border-line bg-white p-3"
          >
            {meterDenominators.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
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
                {item.labels[currentLocale]} ({item.parts})
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
        <label className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white p-4 text-sm font-semibold">
          {hapticsLabel}
          <input
            checked={hapticsEnabled}
            className="h-5 w-5 accent-mint"
            type="checkbox"
            onChange={(event) => setHapticsEnabled(event.target.checked)}
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
          <p className="rounded-md bg-paper p-3 text-xs leading-5 text-ink/60">{silentModeNote}</p>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="flex items-center justify-between text-sm font-semibold text-ink/70">
          <span>{labels.beat}</span>
          <span>
            {running ? beat + 1 : 1}/{beats} · {meter}
          </span>
        </div>
        <div className="overflow-x-auto pb-1">
          <div className="grid min-w-full gap-2" style={{ gridTemplateColumns: `repeat(${beats}, minmax(2.35rem, 1fr))` }}>
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

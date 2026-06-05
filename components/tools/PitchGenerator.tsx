"use client";

import { Play, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

const minFrequency = 20;
const maxFrequency = 20000;

const labels = {
  ar: { frequency: "التردد", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "ابدأ بمستوى صوت منخفض، خصوصا مع السماعات.", play: "تشغيل النغمة", stop: "إيقاف", volume: "الصوت", waveform: "الموجة" },
  de: { frequency: "Frequenz", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Beginne mit niedriger Lautstarke, besonders mit Kopfhorern.", play: "Ton starten", stop: "Stoppen", volume: "Lautstarke", waveform: "Wellenform" },
  en: { frequency: "Frequency", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Start with low volume, especially when using headphones.", play: "Play tone", stop: "Stop", volume: "Volume", waveform: "Waveform" },
  es: { frequency: "Frecuencia", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Empieza con volumen bajo, sobre todo con auriculares.", play: "Generar tono", stop: "Detener", volume: "Volumen", waveform: "Onda" },
  fr: { frequency: "Frequence", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Commencez avec un volume faible, surtout au casque.", play: "Generer le son", stop: "Arreter", volume: "Volume", waveform: "Forme d'onde" },
  it: { frequency: "Frequenza", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Parti con volume basso, soprattutto se usi cuffie o auricolari.", play: "Genera tono", stop: "Stop", volume: "Volume", waveform: "Forma d'onda" },
  ja: { frequency: "周波数", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "ヘッドホン使用時は低い音量から始めてください。", play: "トーン再生", stop: "停止", volume: "音量", waveform: "波形" },
  ko: { frequency: "주파수", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "헤드폰 사용 시 낮은 볼륨부터 시작하세요.", play: "톤 재생", stop: "정지", volume: "볼륨", waveform: "파형" },
  pt: { frequency: "Frequencia", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Comece com volume baixo, especialmente com fones.", play: "Gerar tom", stop: "Parar", volume: "Volume", waveform: "Forma de onda" },
  ru: { frequency: "Частота", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "Начинайте с низкой громкости, особенно в наушниках.", play: "Воспроизвести тон", stop: "Стоп", volume: "Громкость", waveform: "Форма волны" },
  zh: { frequency: "频率", hz: "Hz", max: "20000 Hz", min: "20 Hz", note: "请从低音量开始，尤其是使用耳机时。", play: "播放音调", stop: "停止", volume: "音量", waveform: "波形" }
} satisfies Record<BaseLocale, { frequency: string; hz: string; max: string; min: string; note: string; play: string; stop: string; volume: string; waveform: string }>;

const waveformOptions = ["sine", "square", "triangle", "sawtooth"] as const;

function clampFrequency(value: number) {
  return Math.min(maxFrequency, Math.max(minFrequency, Math.round(value)));
}

export function PitchGenerator({ locale }: { locale: Locale }) {
  const copy = labels[getContentLocale(locale)] ?? labels.en;
  const [frequency, setFrequency] = useState(440);
  const [volume, setVolume] = useState(18);
  const [waveform, setWaveform] = useState<OscillatorType>("sine");
  const [playing, setPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    oscillatorRef.current?.frequency.setTargetAtTime(frequency, audioContextRef.current?.currentTime ?? 0, 0.01);
  }, [frequency]);

  useEffect(() => {
    oscillatorRef.current && (oscillatorRef.current.type = waveform);
  }, [waveform]);

  useEffect(() => {
    const context = audioContextRef.current;
    if (gainRef.current && context) {
      gainRef.current.gain.setTargetAtTime(volume / 100, context.currentTime, 0.02);
    }
  }, [volume]);

  useEffect(() => () => stopTone(), []);

  async function startTone() {
    const AudioContextConstructor =
      window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return;

    const context = audioContextRef.current ?? new AudioContextConstructor();
    audioContextRef.current = context;
    if (context.state === "suspended") await context.resume();

    stopOscillator();
    const gain = context.createGain();
    gain.gain.value = volume / 100;
    gain.connect(context.destination);

    const oscillator = context.createOscillator();
    oscillator.type = waveform;
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    oscillator.start();

    gainRef.current = gain;
    oscillatorRef.current = oscillator;
    setPlaying(true);
  }

  function stopOscillator() {
    oscillatorRef.current?.stop();
    oscillatorRef.current?.disconnect();
    gainRef.current?.disconnect();
    oscillatorRef.current = null;
    gainRef.current = null;
  }

  function stopTone() {
    stopOscillator();
    audioContextRef.current?.close().catch(() => undefined);
    audioContextRef.current = null;
    setPlaying(false);
  }

  return (
    <Card className="space-y-5">
      <div className="rounded-lg bg-ink p-5 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">{copy.frequency}</p>
        <div className="mt-4 flex items-end gap-3">
          <span className="text-6xl font-black leading-none sm:text-8xl">{frequency}</span>
          <span className="pb-2 text-2xl font-bold text-white/70">{copy.hz}</span>
        </div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-mint transition-all"
            style={{ width: `${((frequency - minFrequency) / (maxFrequency - minFrequency)) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_170px]">
        <div className="rounded-lg border border-line bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <label className="font-semibold" htmlFor="pitch-frequency">{copy.frequency}</label>
            <span className="text-sm font-bold text-ink/50">{copy.min} - {copy.max}</span>
          </div>
          <Slider
            id="pitch-frequency"
            min={minFrequency}
            max={maxFrequency}
            step={1}
            value={frequency}
            onChange={(event) => setFrequency(clampFrequency(Number(event.target.value)))}
            className="mt-4"
          />
        </div>
        <label className="rounded-lg border border-line bg-white p-4 font-semibold">
          <span>{copy.hz}</span>
          <input
            className="mt-3 min-h-11 w-full rounded-md border border-line px-3 text-lg font-bold outline-none focus:border-mint"
            inputMode="numeric"
            max={maxFrequency}
            min={minFrequency}
            type="number"
            value={frequency}
            onChange={(event) => setFrequency(clampFrequency(Number(event.target.value)))}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="rounded-lg border border-line bg-white p-4 font-semibold">
          <span>{copy.waveform}</span>
          <select
            className="mt-3 min-h-11 w-full rounded-md border border-line bg-white px-3 outline-none focus:border-mint"
            value={waveform}
            onChange={(event) => setWaveform(event.target.value as OscillatorType)}
          >
            {waveformOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <div className="rounded-lg border border-line bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <label className="font-semibold" htmlFor="pitch-volume">{copy.volume}</label>
            <span className="rounded-md bg-paper px-2 py-1 text-sm font-bold">{volume}%</span>
          </div>
          <Slider
            id="pitch-volume"
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="mt-4"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button onClick={startTone} disabled={playing}>
          <Play size={18} />
          {copy.play}
        </Button>
        <Button onClick={stopTone} disabled={!playing} variant="secondary">
          <Square size={18} />
          {copy.stop}
        </Button>
      </div>

      <p className="rounded-lg bg-paper p-4 text-sm leading-6 text-ink/70">{copy.note}</p>
    </Card>
  );
}

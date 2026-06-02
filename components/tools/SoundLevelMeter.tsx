"use client";

import { Mic, MicOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { calculateRms, classifySoundLevel, rmsToEstimatedDb, type SoundLevel } from "@/lib/tools/soundMeter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";

const copy = {
  ar: {
    average: "المتوسط",
    calibration: "حساسية / معايرة",
    db: "dB",
    estimated: "قراءة تقديرية",
    peak: "الذروة",
    resetPeak: "إعادة ضبط الذروة",
    statuses: {
      loud: "مرتفع",
      normal: "متوسط",
      quiet: "هادئ",
      "very-loud": "مرتفع جدا"
    },
    warning: "هذه قراءة تقديرية من ميكروفون المتصفح وليست قياس dB SPL معتمدا."
  },
  de: {
    average: "Durchschnitt",
    calibration: "Empfindlichkeit / Kalibrierung",
    db: "dB",
    estimated: "Geschätzter Pegel",
    peak: "Spitze",
    resetPeak: "Spitze zurücksetzen",
    statuses: {
      loud: "Laut",
      normal: "Normal",
      quiet: "Leise",
      "very-loud": "Sehr laut"
    },
    warning: "Dies ist eine Schätzung über das Browser-Mikrofon, keine zertifizierte dB-SPL-Messung."
  },
  en: {
    average: "Average",
    calibration: "Sensitivity / calibration",
    db: "dB",
    estimated: "Estimated level",
    peak: "Peak",
    resetPeak: "Reset peak",
    statuses: {
      loud: "Loud",
      normal: "Normal",
      quiet: "Quiet",
      "very-loud": "Very loud"
    },
    warning: "This is an estimate from the browser microphone, not a certified dB SPL measurement."
  },
  es: {
    average: "Media",
    calibration: "Sensibilidad / calibración",
    db: "dB",
    estimated: "Nivel estimado",
    peak: "Pico",
    resetPeak: "Restablecer pico",
    statuses: {
      loud: "Alto",
      normal: "Normal",
      quiet: "Silencioso",
      "very-loud": "Muy alto"
    },
    warning: "Es una estimación del micrófono del navegador, no una medición dB SPL certificada."
  },
  fr: {
    average: "Moyenne",
    calibration: "Sensibilité / calibration",
    db: "dB",
    estimated: "Niveau estimé",
    peak: "Pic",
    resetPeak: "Réinitialiser le pic",
    statuses: {
      loud: "Fort",
      normal: "Normal",
      quiet: "Calme",
      "very-loud": "Très fort"
    },
    warning: "Cette mesure est une estimation du micro du navigateur, pas une mesure dB SPL certifiée."
  },
  it: {
    average: "Media",
    calibration: "Sensibilità / calibrazione",
    db: "dB",
    estimated: "Livello stimato",
    peak: "Picco",
    resetPeak: "Reset picco",
    statuses: {
      loud: "Forte",
      normal: "Normale",
      quiet: "Silenzioso",
      "very-loud": "Molto forte"
    },
    warning: "È una stima dal microfono del browser, non una misurazione dB SPL certificata."
  },
  ja: {
    average: "平均",
    calibration: "感度 / 校正",
    db: "dB",
    estimated: "推定レベル",
    peak: "ピーク",
    resetPeak: "ピークをリセット",
    statuses: {
      loud: "大きい",
      normal: "通常",
      quiet: "静か",
      "very-loud": "非常に大きい"
    },
    warning: "これはブラウザのマイクによる推定値で、認証された dB SPL 測定ではありません。"
  },
  ko: {
    average: "평균",
    calibration: "감도 / 보정",
    db: "dB",
    estimated: "예상 레벨",
    peak: "피크",
    resetPeak: "피크 초기화",
    statuses: {
      loud: "큼",
      normal: "보통",
      quiet: "조용함",
      "very-loud": "매우 큼"
    },
    warning: "브라우저 마이크 기반 추정값이며 인증된 dB SPL 측정은 아닙니다."
  },
  pt: {
    average: "Média",
    calibration: "Sensibilidade / calibração",
    db: "dB",
    estimated: "Nível estimado",
    peak: "Pico",
    resetPeak: "Redefinir pico",
    statuses: {
      loud: "Alto",
      normal: "Normal",
      quiet: "Silencioso",
      "very-loud": "Muito alto"
    },
    warning: "É uma estimativa do microfone do navegador, não uma medição dB SPL certificada."
  },
  ru: {
    average: "Среднее",
    calibration: "Чувствительность / калибровка",
    db: "dB",
    estimated: "Оценочный уровень",
    peak: "Пик",
    resetPeak: "Сбросить пик",
    statuses: {
      loud: "Громко",
      normal: "Нормально",
      quiet: "Тихо",
      "very-loud": "Очень громко"
    },
    warning: "Это оценка по микрофону браузера, а не сертифицированное измерение dB SPL."
  },
  zh: {
    average: "平均",
    calibration: "灵敏度 / 校准",
    db: "dB",
    estimated: "估算音量",
    peak: "峰值",
    resetPeak: "重置峰值",
    statuses: {
      loud: "较响",
      normal: "正常",
      quiet: "安静",
      "very-loud": "非常响"
    },
    warning: "这是浏览器麦克风的估算值，并非经过认证的 dB SPL 测量。"
  }
} as const;

export function SoundLevelMeter({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const labels = copy[locale] ?? copy.en;
  const [active, setActive] = useState(false);
  const [db, setDb] = useState(0);
  const [averageDb, setAverageDb] = useState(0);
  const [peakDb, setPeakDb] = useState(0);
  const [sensitivity, setSensitivity] = useState(0);
  const [error, setError] = useState("");
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const historyRef = useRef<number[]>([]);
  const sensitivityRef = useRef(sensitivity);

  useEffect(() => () => stop(), []);
  useEffect(() => {
    sensitivityRef.current = sensitivity;
  }, [sensitivity]);

  async function start() {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError(dictionary.tool.micNotSupported ?? dictionary.tool.micError);
      return;
    }

    try {
      setError("");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          autoGainControl: false,
          echoCancellation: false,
          noiseSuppression: false
        }
      });
      const AudioContextConstructor =
        window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextConstructor) {
        setError(dictionary.tool.micNotSupported ?? dictionary.tool.micError);
        return;
      }
      const audioContext = new AudioContextConstructor();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.82;
      source.connect(analyser);
      streamRef.current = stream;
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      setActive(true);
      readLevel();
    } catch {
      setError(dictionary.tool.micError);
    }
  }

  function stop() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    audioContextRef.current?.close().catch(() => undefined);
    audioContextRef.current = null;
    analyserRef.current = null;
    setActive(false);
  }

  function readLevel() {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const samples = new Float32Array(analyser.fftSize);
    analyser.getFloatTimeDomainData(samples);
    const nextDb = rmsToEstimatedDb(calculateRms(samples), sensitivityRef.current);
    historyRef.current = [...historyRef.current.slice(-19), nextDb];
    const nextAverage = Math.round(historyRef.current.reduce((sum, item) => sum + item, 0) / historyRef.current.length);
    setDb(nextDb);
    setAverageDb(nextAverage);
    setPeakDb((current) => Math.max(current, nextDb));
    frameRef.current = requestAnimationFrame(readLevel);
  }

  const level = classifySoundLevel(db);
  const percentage = Math.min(100, Math.max(0, (db / 120) * 100));

  return (
    <Card className="space-y-5">
      <div className="rounded-lg bg-ink p-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">{labels.estimated}</p>
          <span className="rounded-full bg-mint/15 px-3 py-1 text-sm font-bold text-mint">
            {labels.statuses[level as SoundLevel]}
          </span>
        </div>
        <div className="mt-5 flex items-end gap-3">
          <span className="text-7xl font-black leading-none sm:text-8xl">{db || "--"}</span>
          <span className="pb-2 text-2xl font-bold text-white/70">{labels.db}</span>
        </div>
        <div className="mt-5 h-4 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-mint transition-all" style={{ width: `${percentage}%` }} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm text-ink/60">{labels.average}</p>
          <p className="mt-1 text-3xl font-black">{averageDb || "--"} {labels.db}</p>
        </div>
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm text-ink/60">{labels.peak}</p>
          <p className="mt-1 text-3xl font-black">{peakDb || "--"} {labels.db}</p>
        </div>
      </div>

      <div className="rounded-lg border border-line p-4">
        <div className="flex items-center justify-between gap-3">
          <label className="font-semibold" htmlFor="sensitivity">{labels.calibration}</label>
          <span className="rounded-md bg-paper px-2 py-1 text-sm font-bold">{sensitivity > 0 ? "+" : ""}{sensitivity} dB</span>
        </div>
        <Slider
          id="sensitivity"
          min={-30}
          max={30}
          step={1}
          value={sensitivity}
          onChange={(event) => setSensitivity(Number(event.target.value))}
          className="mt-4"
        />
      </div>

      {error ? <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</p> : null}
      <p className="rounded-md bg-mint/10 p-3 text-sm leading-6 text-ink/70">{labels.warning}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button onClick={active ? stop : start}>
          {active ? <MicOff size={18} aria-hidden /> : <Mic size={18} aria-hidden />}
          {active ? dictionary.tool.stopMic : dictionary.tool.requestMic}
        </Button>
        <Button variant="secondary" onClick={() => setPeakDb(0)}>
          {labels.resetPeak}
        </Button>
      </div>
    </Card>
  );
}

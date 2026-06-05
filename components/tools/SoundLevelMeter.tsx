"use client";

import { Mic, MicOff } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
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
} as const satisfies Record<BaseLocale, {
  average: string;
  calibration: string;
  db: string;
  estimated: string;
  peak: string;
  resetPeak: string;
  statuses: Record<SoundLevel, string>;
  warning: string;
}>;

const environmentRows = {
  ar: [
    { db: 30, environment: "مكتبة" },
    { db: 40, environment: "منزل هادئ" },
    { db: 60, environment: "محادثة" },
    { db: 80, environment: "حركة مرور" },
    { db: 100, environment: "حفلة موسيقية" }
  ],
  de: [
    { db: 30, environment: "Bibliothek" },
    { db: 40, environment: "Ruhiges Zuhause" },
    { db: 60, environment: "Gesprach" },
    { db: 80, environment: "Verkehr" },
    { db: 100, environment: "Konzert" }
  ],
  en: [
    { db: 30, environment: "Library" },
    { db: 40, environment: "Quiet home" },
    { db: 60, environment: "Conversation" },
    { db: 80, environment: "Traffic" },
    { db: 100, environment: "Concert" }
  ],
  es: [
    { db: 30, environment: "Biblioteca" },
    { db: 40, environment: "Casa tranquila" },
    { db: 60, environment: "Conversacion" },
    { db: 80, environment: "Trafico" },
    { db: 100, environment: "Concierto" }
  ],
  fr: [
    { db: 30, environment: "Bibliotheque" },
    { db: 40, environment: "Maison calme" },
    { db: 60, environment: "Conversation" },
    { db: 80, environment: "Trafic" },
    { db: 100, environment: "Concert" }
  ],
  it: [
    { db: 30, environment: "Biblioteca" },
    { db: 40, environment: "Casa tranquilla" },
    { db: 60, environment: "Conversazione" },
    { db: 80, environment: "Traffico" },
    { db: 100, environment: "Concerto" }
  ],
  ja: [
    { db: 30, environment: "図書館" },
    { db: 40, environment: "静かな家" },
    { db: 60, environment: "会話" },
    { db: 80, environment: "交通" },
    { db: 100, environment: "コンサート" }
  ],
  ko: [
    { db: 30, environment: "도서관" },
    { db: 40, environment: "조용한 집" },
    { db: 60, environment: "대화" },
    { db: 80, environment: "교통" },
    { db: 100, environment: "콘서트" }
  ],
  pt: [
    { db: 30, environment: "Biblioteca" },
    { db: 40, environment: "Casa tranquila" },
    { db: 60, environment: "Conversa" },
    { db: 80, environment: "Transito" },
    { db: 100, environment: "Concerto" }
  ],
  ru: [
    { db: 30, environment: "Библиотека" },
    { db: 40, environment: "Тихий дом" },
    { db: 60, environment: "Разговор" },
    { db: 80, environment: "Трафик" },
    { db: 100, environment: "Концерт" }
  ],
  zh: [
    { db: 30, environment: "图书馆" },
    { db: 40, environment: "安静的家" },
    { db: 60, environment: "谈话" },
    { db: 80, environment: "交通" },
    { db: 100, environment: "音乐会" }
  ]
} satisfies Record<BaseLocale, { db: number; environment: string }[]>;

const uiLabels: Record<BaseLocale, { average?: string; current: string; environment: string; environments: string; history: string; maximum: string; minimum: string }> = {
  ar: { current: "الحالي", environment: "البيئة", environments: "مراجع البيئة", history: "آخر 30 ثانية", maximum: "الأقصى", minimum: "الأدنى" },
  de: { current: "Aktuell", environment: "Umgebung", environments: "Umgebungswerte", history: "Letzte 30 Sekunden", maximum: "Maximum", minimum: "Minimum" },
  en: { current: "Current", environment: "Environment", environments: "Environment reference", history: "Last 30 seconds", maximum: "Maximum", minimum: "Minimum" },
  es: { current: "Actual", environment: "Ambiente", environments: "Referencia de ambientes", history: "Ultimos 30 segundos", maximum: "Maximo", minimum: "Minimo" },
  fr: { current: "Actuel", environment: "Environnement", environments: "Reference des environnements", history: "30 dernieres secondes", maximum: "Maximum", minimum: "Minimum" },
  it: { average: "dB medio", current: "dB attuale", environment: "Ambiente", environments: "Ambienti di riferimento", history: "Storico ultimi 30 secondi", maximum: "dB massimo", minimum: "dB minimo" },
  ja: { current: "現在", environment: "環境", environments: "環境の目安", history: "過去30秒", maximum: "最大", minimum: "最小" },
  ko: { current: "현재", environment: "환경", environments: "환경 기준", history: "최근 30초", maximum: "최대", minimum: "최소" },
  pt: { current: "Atual", environment: "Ambiente", environments: "Referencia de ambientes", history: "Ultimos 30 segundos", maximum: "Maximo", minimum: "Minimo" },
  ru: { current: "Текущий", environment: "Среда", environments: "Ориентиры среды", history: "Последние 30 секунд", maximum: "Максимум", minimum: "Минимум" },
  zh: { current: "当前", environment: "环境", environments: "环境参考", history: "最近30秒", maximum: "最大值", minimum: "最小值" }
};

type HistoryPoint = { db: number; time: number };

export function SoundLevelMeter({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const contentLocale = getContentLocale(locale);
  const labels = copy[contentLocale] ?? copy.en;
  const extraLabels = uiLabels[contentLocale] ?? uiLabels.en;
  const [active, setActive] = useState(false);
  const [db, setDb] = useState(0);
  const [peakDb, setPeakDb] = useState(0);
  const [history, setHistory] = useState<HistoryPoint[]>([]);
  const [sensitivity, setSensitivity] = useState(0);
  const [error, setError] = useState("");
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastHistoryAtRef = useRef(0);
  const sensitivityRef = useRef(sensitivity);
  const stats = useMemo(() => {
    if (!history.length) return { average: 0, maximum: 0, minimum: 0 };
    const values = history.map((item) => item.db);
    return {
      average: Math.round(values.reduce((sum, item) => sum + item, 0) / values.length),
      maximum: Math.max(...values),
      minimum: Math.min(...values)
    };
  }, [history]);

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
      lastHistoryAtRef.current = 0;
      setHistory([]);
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
    const now = Date.now();
    if (now - lastHistoryAtRef.current > 300) {
      lastHistoryAtRef.current = now;
      setHistory((current) => [...current, { db: nextDb, time: now }].filter((point) => now - point.time <= 30000));
    }
    setDb(nextDb);
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

      <div className="grid gap-3 sm:grid-cols-4">
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm text-ink/60">{extraLabels.current}</p>
          <p className="mt-1 text-3xl font-black">{db || "--"} {labels.db}</p>
        </div>
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm text-ink/60">{extraLabels.minimum}</p>
          <p className="mt-1 text-3xl font-black">{stats.minimum || "--"} {labels.db}</p>
        </div>
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm text-ink/60">{extraLabels.average ?? labels.average}</p>
          <p className="mt-1 text-3xl font-black">{stats.average || "--"} {labels.db}</p>
        </div>
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm text-ink/60">{extraLabels.maximum}</p>
          <p className="mt-1 text-3xl font-black">{Math.max(peakDb, stats.maximum) || "--"} {labels.db}</p>
        </div>
      </div>

      <div className="rounded-lg border border-line bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold">{extraLabels.history}</p>
          <span className="text-sm font-bold text-ink/50">{history.length ? `${history.length}` : "--"}</span>
        </div>
        <div className="mt-4 flex h-32 items-end gap-1 rounded-md bg-paper p-3">
          {Array.from({ length: 60 }).map((_, index) => {
            const point = history[Math.max(0, history.length - 60) + index];
            const height = point ? Math.max(4, Math.min(100, (point.db / 120) * 100)) : 4;
            return (
              <span
                key={index}
                className="flex-1 rounded-t bg-mint/80"
                style={{ height: `${height}%`, opacity: point ? 1 : 0.18 }}
                aria-hidden
              />
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-white">
        <p className="border-b border-line px-4 py-3 font-semibold">{extraLabels.environments}</p>
        <div className="grid grid-cols-[90px_1fr] text-sm">
          <div className="bg-paper px-4 py-2 font-bold">{labels.db}</div>
          <div className="bg-paper px-4 py-2 font-bold">{extraLabels.environment}</div>
          {environmentRows[contentLocale].map((row) => (
            <div key={row.db} className="contents">
              <div className="border-t border-line px-4 py-3 font-bold">{row.db}</div>
              <div className="border-t border-line px-4 py-3">{row.environment}</div>
            </div>
          ))}
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
        <Button variant="secondary" onClick={() => { setPeakDb(0); setHistory([]); }}>
          {labels.resetPeak}
        </Button>
      </div>
    </Card>
  );
}

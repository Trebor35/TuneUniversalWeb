"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ListChecks, Mic, MicOff, Settings2, Volume2, VolumeX } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localeFromName, type Locale } from "@/lib/i18n/locales";
import { getInstrumentLabel, getOrderedInstruments } from "@/lib/tools/instruments";
import {
  autoCorrelate,
  formatNoteName,
  frequencyToNote,
  normalizeNoteSystem,
  tuningPresets,
  tunings,
  type NoteSystem,
  type TuningNote
} from "@/lib/tools/tuner";
import type { Instrument } from "@/lib/tools/toolConfig";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type TunerProps = {
  dictionary: Dictionary;
  instrument?: Instrument;
};

type PolyTuneResult = {
  cents: number | null;
  frequency: number | null;
  level: number;
  note: TuningNote;
  status: "flat" | "inTune" | "sharp" | "missing";
};

const tunerUiText: Record<
  Locale,
  {
    chromaticMode: string;
    chromaticModeHint: string;
    directionMode: string;
    directionModeHint: string;
    instrument: string;
    lessSensitive: string;
    lockString: string;
    lockStringHint: string;
    manualMode: string;
    moreSensitive: string;
    noiseGate: string;
    notes: string;
    playReference: string;
    polyAnalyze: string;
    polyHint: string;
    polyListening: string;
    polyMissing: string;
    polyTitle: string;
    preset: string;
    referenceTone: string;
    signal: string;
    stopReference: string;
    target: string;
    tips: string[];
    strings: string;
    tunerName: string;
  }
> = {
  it: {
    chromaticMode: "Cromatica",
    chromaticModeHint: "Riconosce qualsiasi nota cromatica rilevata, utile anche fuori dalle corde del preset.",
    directionMode: "Filtro direzionale",
    directionModeHint: "Riduce rumore ambientale e ascolta meglio il suono vicino al microfono.",
    instrument: "Strumento",
    lessSensitive: "Meno sensibile",
    lockString: "Blocca corda selezionata",
    lockStringHint: "Consigliato: scegli una corda e l'accordatore resta su quella nota.",
    manualMode: "Manuale",
    moreSensitive: "Piu sensibile",
    noiseGate: "Sensibilita microfono",
    notes: "Note",
    playReference: "Ascolta nota",
    polyAnalyze: "PolyTune",
    polyHint: "Suona tutte le corde a vuoto con una pennata: vedrai quali sono scordate.",
    polyListening: "Ascolto...",
    polyMissing: "Non rilevata",
    polyTitle: "Controllo tutte le corde",
    preset: "Accordatura",
    referenceTone: "Tono di riferimento",
    signal: "Segnale",
    stopReference: "Ferma tono",
    target: "Obiettivo",
    tips: ["Avvicina lo strumento al microfono.", "Pizzica una sola corda e lascia vibrare.", "Usa Manuale se l'ambiente e rumoroso."],
    strings: "Corde",
    tunerName: "Accordatore digitale"
  },
  en: {
    chromaticMode: "Chromatic",
    chromaticModeHint: "Detects any chromatic note it hears, even outside the selected string preset.",
    directionMode: "Directional filter",
    directionModeHint: "Reduces room noise and focuses on sound close to the microphone.",
    instrument: "Instrument",
    lessSensitive: "Less sensitive",
    lockString: "Lock selected string",
    lockStringHint: "Recommended: choose a string and the tuner stays on that target.",
    manualMode: "Manual",
    moreSensitive: "More sensitive",
    noiseGate: "Microphone sensitivity",
    notes: "Notes",
    playReference: "Play note",
    polyAnalyze: "PolyTune",
    polyHint: "Strum all open strings once to see which strings are out of tune.",
    polyListening: "Listening...",
    polyMissing: "Not detected",
    polyTitle: "All-string check",
    preset: "Tuning",
    referenceTone: "Reference tone",
    signal: "Signal",
    stopReference: "Stop tone",
    target: "Target",
    tips: ["Move the instrument closer to the microphone.", "Play one open string and let it ring.", "Use Manual mode in noisy rooms."],
    strings: "Strings",
    tunerName: "Digital tuner"
  },
  fr: {
    chromaticMode: "Chromatique",
    chromaticModeHint: "Detecte toute note chromatique, meme hors du preset de cordes choisi.",
    directionMode: "Filtre directionnel",
    directionModeHint: "Reduit le bruit ambiant et se concentre sur le son proche du micro.",
    instrument: "Instrument",
    lessSensitive: "Moins sensible",
    lockString: "Verrouiller la corde",
    lockStringHint: "Choisissez une corde et l'accordeur reste sur cette cible.",
    manualMode: "Manuel",
    moreSensitive: "Plus sensible",
    noiseGate: "Sensibilite du micro",
    notes: "Notes",
    playReference: "Ecouter la note",
    polyAnalyze: "PolyTune",
    polyHint: "Grattez toutes les cordes a vide pour voir lesquelles sont a corriger.",
    polyListening: "Ecoute...",
    polyMissing: "Non detectee",
    polyTitle: "Controle de toutes les cordes",
    preset: "Accordage",
    referenceTone: "Son de reference",
    signal: "Signal",
    stopReference: "Arreter",
    target: "Cible",
    tips: ["Rapprochez l'instrument du micro.", "Jouez une seule corde a vide.", "Utilisez le mode manuel dans une piece bruyante."],
    strings: "Cordes",
    tunerName: "Accordeur numerique"
  },
  de: {
    chromaticMode: "Chromatisch",
    chromaticModeHint: "Erkennt jede chromatische Note, auch ausserhalb des gewaehlten Saiten-Presets.",
    directionMode: "Richtungsfilter",
    directionModeHint: "Reduziert Raumgeraeusche und fokussiert den Ton nahe am Mikrofon.",
    instrument: "Instrument",
    lessSensitive: "Weniger empfindlich",
    lockString: "Saite sperren",
    lockStringHint: "Waehle eine Saite und der Tuner bleibt auf diesem Ziel.",
    manualMode: "Manuell",
    moreSensitive: "Empfindlicher",
    noiseGate: "Mikrofonempfindlichkeit",
    notes: "Noten",
    playReference: "Ton abspielen",
    polyAnalyze: "PolyTune",
    polyHint: "Schlage alle leeren Saiten einmal an, um verstimmte Saiten zu sehen.",
    polyListening: "Hoert zu...",
    polyMissing: "Nicht erkannt",
    polyTitle: "Alle Saiten pruefen",
    preset: "Stimmung",
    referenceTone: "Referenzton",
    signal: "Signal",
    stopReference: "Ton stoppen",
    target: "Ziel",
    tips: ["Halte das Instrument nah ans Mikrofon.", "Spiele nur eine leere Saite.", "Nutze den manuellen Modus bei Nebengeraeuschen."],
    strings: "Saiten",
    tunerName: "Digitales Stimmgeraet"
  },
  es: {
    chromaticMode: "Cromatica",
    chromaticModeHint: "Detecta cualquier nota cromatica, incluso fuera del preset de cuerdas elegido.",
    directionMode: "Filtro direccional",
    directionModeHint: "Reduce el ruido ambiente y enfoca el sonido cerca del microfono.",
    instrument: "Instrumento",
    lessSensitive: "Menos sensible",
    lockString: "Bloquear cuerda",
    lockStringHint: "Elige una cuerda y el afinador se queda en esa nota.",
    manualMode: "Manual",
    moreSensitive: "Mas sensible",
    noiseGate: "Sensibilidad del microfono",
    notes: "Notas",
    playReference: "Oir nota",
    polyAnalyze: "PolyTune",
    polyHint: "Rasguea todas las cuerdas al aire para ver cuales estan desafinadas.",
    polyListening: "Escuchando...",
    polyMissing: "No detectada",
    polyTitle: "Revision de todas las cuerdas",
    preset: "Afinacion",
    referenceTone: "Tono de referencia",
    signal: "Senal",
    stopReference: "Parar tono",
    target: "Objetivo",
    tips: ["Acerca el instrumento al microfono.", "Toca una sola cuerda al aire.", "Usa Manual si hay ruido alrededor."],
    strings: "Cuerdas",
    tunerName: "Afinador digital"
  },
  pt: {
    chromaticMode: "Cromatica",
    chromaticModeHint: "Detecta qualquer nota cromatica, mesmo fora do preset de cordas escolhido.",
    directionMode: "Filtro direcional",
    directionModeHint: "Reduz o ruido ambiente e foca o som perto do microfone.",
    instrument: "Instrumento",
    lessSensitive: "Menos sensivel",
    lockString: "Bloquear corda",
    lockStringHint: "Escolha uma corda e o afinador permanece nessa nota.",
    manualMode: "Manual",
    moreSensitive: "Mais sensivel",
    noiseGate: "Sensibilidade do microfone",
    notes: "Notas",
    playReference: "Ouvir nota",
    polyAnalyze: "PolyTune",
    polyHint: "Toque todas as cordas soltas uma vez para ver quais estao desafinadas.",
    polyListening: "Ouvindo...",
    polyMissing: "Nao detectada",
    polyTitle: "Verificacao de todas as cordas",
    preset: "Afinacao",
    referenceTone: "Tom de referencia",
    signal: "Sinal",
    stopReference: "Parar tom",
    target: "Alvo",
    tips: ["Aproxime o instrumento do microfone.", "Toque uma corda solta por vez.", "Use Manual em ambientes ruidosos."],
    strings: "Cordas",
    tunerName: "Afinador digital"
  },
  zh: {
    chromaticMode: "半音阶",
    chromaticModeHint: "识别听到的任意半音阶音符，即使不在所选琴弦预设中。",
    directionMode: "定向滤波",
    directionModeHint: "减少环境噪声，更专注于麦克风附近的声音。",
    instrument: "乐器",
    lessSensitive: "降低灵敏度",
    lockString: "锁定所选琴弦",
    lockStringHint: "建议选择一根琴弦，调音器会保持该目标音。",
    manualMode: "手动",
    moreSensitive: "提高灵敏度",
    noiseGate: "麦克风灵敏度",
    notes: "音名",
    playReference: "播放音高",
    polyAnalyze: "PolyTune",
    polyHint: "一次扫拨所有空弦，查看哪些琴弦需要调整。",
    polyListening: "正在聆听...",
    polyMissing: "未检测到",
    polyTitle: "全弦检查",
    preset: "调弦",
    referenceTone: "参考音",
    signal: "信号",
    stopReference: "停止音高",
    target: "目标",
    tips: ["让乐器靠近麦克风。", "一次只弹一根空弦。", "环境嘈杂时使用手动模式。"],
    strings: "琴弦",
    tunerName: "数字调音器"
  },
  ru: {
    chromaticMode: "Хроматический",
    chromaticModeHint: "Определяет любую хроматическую ноту, даже вне выбранного строя струн.",
    directionMode: "Направленный фильтр",
    directionModeHint: "Снижает фоновый шум и фокусируется на звуке рядом с микрофоном.",
    instrument: "Инструмент",
    lessSensitive: "Менее чувствительно",
    lockString: "Зафиксировать струну",
    lockStringHint: "Выберите струну, и тюнер останется на этой цели.",
    manualMode: "Вручную",
    moreSensitive: "Более чувствительно",
    noiseGate: "Чувствительность микрофона",
    notes: "Ноты",
    playReference: "Слушать ноту",
    polyAnalyze: "PolyTune",
    polyHint: "Сыграйте все открытые струны одним ударом, чтобы увидеть расстроенные струны.",
    polyListening: "Слушаю...",
    polyMissing: "Не обнаружено",
    polyTitle: "Проверка всех струн",
    preset: "Строй",
    referenceTone: "Опорный тон",
    signal: "Сигнал",
    stopReference: "Остановить",
    target: "Цель",
    tips: ["Поднесите инструмент ближе к микрофону.", "Играйте одну открытую струну.", "В шуме используйте ручной режим."],
    strings: "Струны",
    tunerName: "Цифровой тюнер"
  },
  ja: {
    chromaticMode: "クロマチック",
    chromaticModeHint: "選択した弦プリセット外の音も含め、半音階の音を検出します。",
    directionMode: "指向性フィルター",
    directionModeHint: "周囲の雑音を減らし、マイク近くの音に集中します。",
    instrument: "楽器",
    lessSensitive: "感度を下げる",
    lockString: "選択した弦を固定",
    lockStringHint: "弦を選ぶとチューナーはその音を目標にします。",
    manualMode: "手動",
    moreSensitive: "感度を上げる",
    noiseGate: "マイク感度",
    notes: "音名",
    playReference: "音を鳴らす",
    polyAnalyze: "PolyTune",
    polyHint: "開放弦をまとめて一度鳴らすと、ずれている弦を確認できます。",
    polyListening: "聴いています...",
    polyMissing: "未検出",
    polyTitle: "全弦チェック",
    preset: "チューニング",
    referenceTone: "基準音",
    signal: "信号",
    stopReference: "停止",
    target: "目標",
    tips: ["楽器をマイクに近づけます。", "開放弦を1本ずつ鳴らします。", "雑音が多い時は手動モードを使います。"],
    strings: "弦",
    tunerName: "デジタルチューナー"
  },
  ko: {
    chromaticMode: "크로매틱",
    chromaticModeHint: "선택한 줄 프리셋 밖의 음까지 반음계 음을 감지합니다.",
    directionMode: "지향성 필터",
    directionModeHint: "주변 소음을 줄이고 마이크 가까운 소리에 집중합니다.",
    instrument: "악기",
    lessSensitive: "덜 민감하게",
    lockString: "선택한 줄 고정",
    lockStringHint: "줄을 선택하면 튜너가 그 목표 음에 고정됩니다.",
    manualMode: "수동",
    moreSensitive: "더 민감하게",
    noiseGate: "마이크 감도",
    notes: "음이름",
    playReference: "음 듣기",
    polyAnalyze: "PolyTune",
    polyHint: "개방현을 한 번에 스트럼하면 어떤 줄이 틀어졌는지 볼 수 있습니다.",
    polyListening: "듣는 중...",
    polyMissing: "감지 안 됨",
    polyTitle: "전체 줄 확인",
    preset: "튜닝",
    referenceTone: "기준음",
    signal: "신호",
    stopReference: "정지",
    target: "목표",
    tips: ["악기를 마이크 가까이에 둡니다.", "한 번에 한 개의 개방현만 연주합니다.", "주변이 시끄러우면 수동 모드를 사용합니다."],
    strings: "줄",
    tunerName: "디지털 튜너"
  },
  ar: {
    chromaticMode: "كروماتيكي",
    chromaticModeHint: "يتعرف على أي نغمة كروماتيكية حتى خارج ضبط الأوتار المحدد.",
    directionMode: "مرشح اتجاهي",
    directionModeHint: "يقلل ضوضاء المكان ويركز على الصوت القريب من الميكروفون.",
    instrument: "الآلة",
    lessSensitive: "حساسية أقل",
    lockString: "تثبيت الوتر المحدد",
    lockStringHint: "اختر وترا وسيبقى المدوزن على تلك النغمة.",
    manualMode: "يدوي",
    moreSensitive: "حساسية أعلى",
    noiseGate: "حساسية الميكروفون",
    notes: "النغمات",
    playReference: "تشغيل النغمة",
    polyAnalyze: "PolyTune",
    polyHint: "اعزف كل الأوتار المفتوحة مرة واحدة لمعرفة الأوتار غير المضبوطة.",
    polyListening: "يستمع...",
    polyMissing: "غير مكتشف",
    polyTitle: "فحص كل الأوتار",
    preset: "الدوزان",
    referenceTone: "النغمة المرجعية",
    signal: "الإشارة",
    stopReference: "إيقاف النغمة",
    target: "الهدف",
    tips: ["قرب الآلة من الميكروفون.", "اعزف وترا واحدا مفتوحا.", "استخدم الوضع اليدوي عند وجود ضوضاء."],
    strings: "الأوتار",
    tunerName: "مدوزن رقمي"
  }
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

function getRms(buffer: Float32Array) {
  return Math.sqrt(buffer.reduce((sum, value) => sum + value * value, 0) / buffer.length);
}

function estimateStringFromSpectrum(data: Float32Array, sampleRate: number, fftSize: number, target: TuningNote) {
  let bestDb = -Infinity;
  let bestFrequency = 0;
  let bestHarmonic = 1;
  const nyquist = sampleRate / 2;

  for (let harmonic = 1; harmonic <= 5; harmonic += 1) {
    const center = target.frequency * harmonic;
    if (center >= nyquist) break;
    const range = center * 0.045;
    const startBin = Math.max(1, Math.floor(((center - range) / sampleRate) * fftSize));
    const endBin = Math.min(data.length - 1, Math.ceil(((center + range) / sampleRate) * fftSize));

    for (let bin = startBin; bin <= endBin; bin += 1) {
      const db = data[bin] - harmonic * 1.8;
      if (db > bestDb) {
        bestDb = db;
        bestFrequency = (bin * sampleRate) / fftSize;
        bestHarmonic = harmonic;
      }
    }
  }

  if (!Number.isFinite(bestDb) || bestDb < -82 || bestFrequency <= 0) {
    return { cents: null, frequency: null, level: 0, status: "missing" as const };
  }

  const estimatedFundamental = bestFrequency / bestHarmonic;
  const cents = Math.round(1200 * Math.log2(estimatedFundamental / target.frequency));
  const level = clamp(Math.round(((bestDb + 82) / 48) * 100), 0, 100);
  const status: PolyTuneResult["status"] = Math.abs(cents) <= 7 ? "inTune" : cents < 0 ? "flat" : "sharp";

  return {
    cents: clamp(cents, -50, 50),
    frequency: estimatedFundamental,
    level,
    status
  };
}

export function GuitarTuner({ dictionary, instrument = "guitar" }: TunerProps) {
  const currentLocale = localeFromName(dictionary.localeName);
  const orderedInstruments = useMemo(() => getOrderedInstruments(currentLocale), [currentLocale]);
  const uiText = tunerUiText[currentLocale];
  const initialInstrument = orderedInstruments.includes(instrument) ? instrument : "guitar";
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument>(initialInstrument);
  const [selectedPresetId, setSelectedPresetId] = useState("standard");
  const [selectedString, setSelectedString] = useState(0);
  const [noteSystem, setNoteSystem] = useState<NoteSystem>("latin");
  const [isListening, setIsListening] = useState(false);
  const [isPlayingTone, setIsPlayingTone] = useState(false);
  const [frequency, setFrequency] = useState<number | null>(null);
  const [detectedNote, setDetectedNote] = useState<string>("--");
  const [cents, setCents] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [directionalFilter, setDirectionalFilter] = useState(true);
  const [lockString, setLockString] = useState(true);
  const [micSensitivity, setMicSensitivity] = useState(58);
  const [polyAnalyzing, setPolyAnalyzing] = useState(false);
  const [polyResults, setPolyResults] = useState<PolyTuneResult[]>([]);
  const [signalLevel, setSignalLevel] = useState(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const toneContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const frequencyHistoryRef = useRef<number[]>([]);
  const lastSignalUpdateRef = useRef(0);
  const lockStringRef = useRef(lockString);
  const micSensitivityRef = useRef(micSensitivity);
  const noteSystemRef = useRef(noteSystem);
  const selectedStringRef = useRef(selectedString);
  const stringsRef = useRef<TuningNote[]>([]);

  const presets = useMemo(
    () => tuningPresets[selectedInstrument] ?? [{ id: "standard", label: "Standard", notes: tunings[selectedInstrument] }],
    [selectedInstrument]
  );
  const selectedPreset = presets.find((preset) => preset.id === selectedPresetId) ?? presets[0];
  const strings = selectedPreset.notes;
  const targetString = strings[selectedString] ?? strings[0];
  const targetLabel = lockString ? formatNoteName(noteWithOctave(targetString), noteSystem) : detectedNote;
  const displayCents = clamp(cents ?? 0, -50, 50);
  const needleAngle = displayCents * 1.35;
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
  const polyStatusLabel = (statusValue: PolyTuneResult["status"]) => {
    if (statusValue === "missing") return uiText.polyMissing;
    if (statusValue === "inTune") return dictionary.tool.inTune;
    if (statusValue === "flat") return dictionary.tool.flat;
    return dictionary.tool.sharp;
  };

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
      const lowPass = audioContext.createBiquadFilter();
      const analyser = audioContext.createAnalyser();
      highPass.type = "highpass";
      highPass.frequency.value = directionalFilter ? 38 : 28;
      highPass.Q.value = 0.6;
      lowPass.type = "lowpass";
      lowPass.frequency.value = directionalFilter ? 1500 : 2200;
      lowPass.Q.value = 0.7;
      analyser.fftSize = 16384;
      analyser.smoothingTimeConstant = 0.58;
      source.connect(highPass).connect(lowPass).connect(analyser);

      const buffer = new Float32Array(analyser.fftSize);
      analyserRef.current = analyser;
      streamRef.current = stream;
      contextRef.current = audioContext;
      frequencyHistoryRef.current = [];
      setIsListening(true);

      const tick = () => {
        analyser.getFloatTimeDomainData(buffer);
        const rms = getRms(buffer);
        const now = performance.now();
        if (now - lastSignalUpdateRef.current > 90) {
          lastSignalUpdateRef.current = now;
          setSignalLevel(clamp(Math.round((rms / 0.08) * 100), 0, 100));
        }
        const minRms = 0.003 + ((100 - micSensitivityRef.current) / 100) * 0.032;
        const detected = autoCorrelate(buffer, audioContext.sampleRate, minRms);
        if (detected) {
          const stableFrequency = smoothedFrequency(detected);
          const currentStrings = stringsRef.current.length ? stringsRef.current : strings;
          const nearest = lockStringRef.current
            ? currentStrings[selectedStringRef.current] ?? currentStrings[0]
            : nearestString(stableFrequency, currentStrings);
          const next = frequencyToNote(stableFrequency);
          const targetCents = lockStringRef.current ? Math.round(1200 * Math.log2(stableFrequency / nearest.frequency)) : next.cents;
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

  async function analyzePolyTune() {
    setError("");
    setPolyAnalyzing(true);
    setPolyResults([]);

    if (!analyserRef.current || !contextRef.current) {
      await start();
      await new Promise((resolve) => window.setTimeout(resolve, 450));
    }

    const analyser = analyserRef.current;
    const audioContext = contextRef.current;
    if (!analyser || !audioContext) {
      setPolyAnalyzing(false);
      return;
    }

    const mergedSpectrum = new Float32Array(analyser.frequencyBinCount).fill(-Infinity);
    const frame = new Float32Array(analyser.frequencyBinCount);
    const startedAt = performance.now();

    while (performance.now() - startedAt < 1100) {
      analyser.getFloatFrequencyData(frame);
      for (let index = 0; index < frame.length; index += 1) {
        mergedSpectrum[index] = Math.max(mergedSpectrum[index], frame[index]);
      }
      await new Promise((resolve) => window.setTimeout(resolve, 70));
    }

    const currentStrings = stringsRef.current.length ? stringsRef.current : strings;
    const results = currentStrings.map((note) => {
      const result = estimateStringFromSpectrum(mergedSpectrum, audioContext.sampleRate, analyser.fftSize, note);
      return { ...result, note };
    });

    setPolyResults(results);
    setPolyAnalyzing(false);
  }

  function stop() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    streamRef.current?.getTracks().forEach((track) => track.stop());
    contextRef.current?.close();
    analyserRef.current = null;
    contextRef.current = null;
    streamRef.current = null;
    setIsListening(false);
    setPolyAnalyzing(false);
    setSignalLevel(0);
  }

  function stopReferenceTone() {
    try {
      oscillatorRef.current?.stop();
    } catch {
      // The tone may already be stopped if the browser interrupted audio playback.
    }
    oscillatorRef.current?.disconnect();
    gainRef.current?.disconnect();
    toneContextRef.current?.close();
    oscillatorRef.current = null;
    gainRef.current = null;
    toneContextRef.current = null;
    setIsPlayingTone(false);
  }

  async function toggleReferenceTone() {
    if (isPlayingTone) {
      stopReferenceTone();
      return;
    }

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = targetString.frequency;
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.16, audioContext.currentTime + 0.03);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    toneContextRef.current = audioContext;
    oscillatorRef.current = oscillator;
    gainRef.current = gain;
    setIsPlayingTone(true);
  }

  useEffect(
    () => () => {
      stop();
      stopReferenceTone();
    },
    []
  );

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
    if (oscillatorRef.current) {
      oscillatorRef.current.frequency.setTargetAtTime(targetString.frequency, toneContextRef.current?.currentTime ?? 0, 0.02);
    }
  }, [targetString.frequency]);

  useEffect(() => {
    stringsRef.current = strings;
  }, [strings]);

  useEffect(() => {
    setSelectedString(0);
    selectedStringRef.current = 0;
    setSelectedPresetId(tuningPresets[selectedInstrument]?.[0]?.id ?? "standard");
    frequencyHistoryRef.current = [];
    setCents(null);
    setFrequency(null);
    setDetectedNote("--");
    setPolyResults([]);
  }, [selectedInstrument]);

  useEffect(() => {
    setSelectedString(0);
    selectedStringRef.current = 0;
    stringsRef.current = strings;
    frequencyHistoryRef.current = [];
    setCents(null);
    setFrequency(null);
    setDetectedNote("--");
    setPolyResults([]);
  }, [selectedPresetId, strings]);

  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-950 p-0 text-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/10 bg-zinc-900/90 px-3 py-3 sm:px-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_minmax(150px,210px)_minmax(150px,210px)_minmax(220px,280px)] lg:items-center">
          <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-zinc-300">
            <Settings2 size={16} aria-hidden />
            <span className="min-w-0 truncate">{uiText.tunerName}</span>
          </div>
          <label className="grid gap-1 text-xs font-semibold text-zinc-400">
            {uiText.instrument}
            <select
              value={selectedInstrument}
              onChange={(event) => setSelectedInstrument(event.target.value as Instrument)}
              className="min-h-10 w-full min-w-0 rounded-md border border-white/10 bg-zinc-950 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {orderedInstruments.map((item) => (
                <option key={item} value={item}>
                  {getInstrumentLabel(item, currentLocale)}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-semibold text-zinc-400">
            {uiText.preset}
            <select
              value={selectedPreset.id}
              onChange={(event) => setSelectedPresetId(event.target.value)}
              className="min-h-10 w-full min-w-0 rounded-md border border-white/10 bg-zinc-950 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {presets.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-semibold text-zinc-400">
            {uiText.notes}
            <select
              value={noteSystem}
              onChange={(event) => setNoteSystem(event.target.value as NoteSystem)}
              className="min-h-10 w-full min-w-0 rounded-md border border-white/10 bg-zinc-950 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400"
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
            <span className="mt-1 grid gap-1">
              <span className="flex justify-between text-[11px] font-normal text-zinc-500">
                <span>{uiText.signal}</span>
                <span>{signalLevel}%</span>
              </span>
              <span className="h-2 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full rounded-full bg-emerald-300 transition-[width]" style={{ width: `${signalLevel}%` }} />
              </span>
            </span>
          </label>
        </div>
        <div className="mt-3 grid gap-2 rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-semibold text-zinc-300 sm:grid-cols-[1fr_auto] sm:items-center">
          <span>
            <span className="block text-white">{lockString ? uiText.lockString : uiText.chromaticMode}</span>
            <span className="mt-1 block font-normal leading-5 text-zinc-500">
              {lockString ? uiText.lockStringHint : uiText.chromaticModeHint}
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
              {uiText.chromaticMode}
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

      <div className="space-y-5 p-3 sm:space-y-6 sm:p-6">
        <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-bold text-white">{uiText.referenceTone}</p>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              {formatNoteName(noteWithOctave(targetString), noteSystem)} / {targetString.frequency} Hz
            </p>
          </div>
          <Button
            onClick={toggleReferenceTone}
            variant="secondary"
            className="w-full border border-white/10 bg-white text-zinc-950 hover:bg-emerald-200 sm:w-auto"
          >
            {isPlayingTone ? <VolumeX size={17} /> : <Volume2 size={17} />}
            {isPlayingTone ? uiText.stopReference : uiText.playReference}
          </Button>
        </div>

        <div className="grid gap-3 rounded-xl border border-emerald-300/20 bg-emerald-300/5 p-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-bold text-white">
              <ListChecks size={17} aria-hidden />
              {uiText.polyTitle}
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">{uiText.polyHint}</p>
          </div>
          <Button
            onClick={analyzePolyTune}
            disabled={polyAnalyzing}
            variant="secondary"
            className="w-full border border-emerald-300/30 bg-emerald-300 text-zinc-950 hover:bg-emerald-200 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            <ListChecks size={17} />
            {polyAnalyzing ? uiText.polyListening : uiText.polyAnalyze}
          </Button>
          {polyResults.length ? (
            <div className="grid gap-2 sm:col-span-2">
              {polyResults.map((result, index) => {
                const resultLabel = formatNoteName(noteWithOctave(result.note), noteSystem, false);
                const isOk = result.status === "inTune";
                const isMissing = result.status === "missing";
                const isFlat = result.status === "flat";
                return (
                  <div
                    key={`${result.note.name}-${result.note.octave}-${index}`}
                    className="grid gap-2 rounded-lg border border-white/10 bg-zinc-950/80 p-3 text-sm sm:grid-cols-[74px_1fr_96px] sm:items-center"
                  >
                    <span className="font-black text-white">{resultLabel}</span>
                    <span className="h-2 overflow-hidden rounded-full bg-white/10">
                      <span
                        className={`block h-full rounded-full ${
                          isMissing ? "bg-zinc-600" : isOk ? "bg-emerald-300" : isFlat ? "bg-orange-300" : "bg-red-400"
                        }`}
                        style={{ width: `${Math.max(result.level, isMissing ? 8 : 18)}%` }}
                      />
                    </span>
                    <span
                      className={`font-bold ${
                        isMissing ? "text-zinc-500" : isOk ? "text-emerald-300" : "text-orange-300"
                      }`}
                    >
                      {polyStatusLabel(result.status)}
                      {result.cents !== null ? ` ${result.cents > 0 ? "+" : ""}${result.cents}` : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className={`relative mx-auto min-h-[440px] w-full max-w-2xl rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.18),transparent_26%),linear-gradient(180deg,#18181b,#050505)] p-3 sm:aspect-[1.55/1] sm:min-h-0 sm:rounded-[2rem] sm:p-4 ${centerGlow}`}>
          <div className="absolute inset-x-3 top-4 flex justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500 sm:inset-x-4 sm:text-xs sm:tracking-[0.18em]">
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

          <div className="absolute inset-x-3 bottom-4 grid gap-2 text-center sm:inset-x-4 sm:bottom-5 sm:gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.22em]">{dictionary.tool.detectedNote}</p>
              <p className="mt-1 text-5xl font-black leading-none text-white sm:text-7xl">{detectedNote}</p>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm min-[430px]:grid-cols-3">
              <div className="rounded-md border border-white/10 bg-white/5 p-2 min-w-0">
                <span className="block text-xs text-zinc-500">{dictionary.tool.frequency}</span>
                <strong>{frequency ? `${frequency.toFixed(1)} Hz` : "--"}</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 p-2 min-w-0">
                <span className="block text-xs text-zinc-500">{dictionary.tool.cents}</span>
                <strong>{cents ?? "--"}</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 p-2 min-w-0">
                <span className="block text-xs text-zinc-500">{uiText.target}</span>
                <strong>{targetLabel}</strong>
              </div>
            </div>
            <p className={`text-base font-black uppercase tracking-[0.14em] sm:text-lg sm:tracking-[0.18em] ${statusClass}`}>{status}</p>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-zinc-300">
              {getInstrumentLabel(selectedInstrument, currentLocale)} {selectedPreset.label} {uiText.strings}:{" "}
              <span className="text-zinc-100">
                {strings.map((stringNote) => formatNoteName(noteWithOctave(stringNote), noteSystem, false)).join(" - ")}
              </span>
            </p>
            <p className="text-xs text-zinc-500">+/-5 cents = {dictionary.tool.inTune}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(96px,1fr))]">
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

        <div className="grid gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-300 sm:grid-cols-3">
          {uiText.tips.map((tip) => (
            <p key={tip} className="leading-6">
              {tip}
            </p>
          ))}
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

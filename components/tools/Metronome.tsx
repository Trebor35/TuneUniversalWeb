"use client";

import { useEffect, useRef, useState } from "react";
import { Headphones, Pause, Play, Save, Trash2, Volume2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import {
  beatsForMeter,
  getSubdivisionLabel,
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
  BaseLocale,
  {
    accentFirstBeat: string;
    apply: string;
    beat: string;
    denominator: string;
    haptics: string;
    headphones: string;
    noPresets: string;
    numerator: string;
    output: string;
    practiceAdvance: string;
    practiceAfterBars: string;
    practiceAfterTime: string;
    practiceBars: string;
    practiceCycle: string;
    practiceEvery: string;
    practiceIncrement: string;
    practiceSeconds: string;
    practiceStart: string;
    practiceTarget: string;
    presets: string;
    savePreset: string;
    silentModeNote: string;
    speaker: string;
    subdivision: string;
    tapHint: string;
  }
> = {
  it: { accentFirstBeat: "Accento sul primo battito", apply: "Carica", beat: "Battito", denominator: "Denominatore", haptics: "Vibrazione/flash", headphones: "Cuffie", noPresets: "Nessun preset salvato", numerator: "Numeratore", output: "Uscita", practiceAdvance: "Cambia BPM", practiceAfterBars: "Dopo giri completi", practiceAfterTime: "Dopo tempo", practiceBars: "Giri", practiceCycle: "Ciclo esercizio", practiceEvery: "Ogni", practiceIncrement: "Incremento", practiceSeconds: "Secondi", practiceStart: "BPM partenza", practiceTarget: "BPM arrivo", presets: "Memorie preset", savePreset: "Salva preset", silentModeNote: "Su iPhone l'interruttore silenzioso puo bloccare l'audio del browser: disattiva il silenzioso o usa cuffie. Il flash del battito resta attivo.", speaker: "Speaker", subdivision: "Suddivisione ritmica", tapHint: "Tap tempo" },
  en: { accentFirstBeat: "Accent first beat", apply: "Load", beat: "Beat", denominator: "Denominator", haptics: "Vibration/flash", headphones: "Headphones", noPresets: "No saved presets", numerator: "Numerator", output: "Output", practiceAdvance: "Change BPM", practiceAfterBars: "After complete bars", practiceAfterTime: "After time", practiceBars: "Bars", practiceCycle: "Practice cycle", practiceEvery: "Every", practiceIncrement: "Increment", practiceSeconds: "Seconds", practiceStart: "Start BPM", practiceTarget: "Target BPM", presets: "Preset memories", savePreset: "Save preset", silentModeNote: "On iPhone, Silent Mode can block browser audio: turn Silent Mode off or use headphones. The beat flash stays active.", speaker: "Speaker", subdivision: "Rhythmic subdivision", tapHint: "Tap tempo" },
  fr: { accentFirstBeat: "Accent sur le premier temps", apply: "Charger", beat: "Temps", denominator: "Denominateur", haptics: "Vibration/flash", headphones: "Casque", noPresets: "Aucun preset enregistre", numerator: "Numerateur", output: "Sortie", practiceAdvance: "Changer BPM", practiceAfterBars: "Apres mesures completes", practiceAfterTime: "Apres le temps", practiceBars: "Mesures", practiceCycle: "Cycle de pratique", practiceEvery: "Tous les", practiceIncrement: "Increment", practiceSeconds: "Secondes", practiceStart: "BPM debut", practiceTarget: "BPM cible", presets: "Memoires de presets", savePreset: "Enregistrer preset", silentModeNote: "Sur iPhone, le mode silencieux peut bloquer l'audio du navigateur : desactivez-le ou utilisez des ecouteurs. Le flash de battement reste actif.", speaker: "Haut-parleur", subdivision: "Subdivision rythmique", tapHint: "Tap tempo" },
  de: { accentFirstBeat: "Akzent auf erster Zaehlzeit", apply: "Laden", beat: "Schlag", denominator: "Nenner", haptics: "Vibration/Blitz", headphones: "Kopfhoerer", noPresets: "Keine Presets gespeichert", numerator: "Zaehler", output: "Ausgabe", practiceAdvance: "BPM aendern", practiceAfterBars: "Nach vollen Takten", practiceAfterTime: "Nach Zeit", practiceBars: "Takte", practiceCycle: "Uebungszyklus", practiceEvery: "Alle", practiceIncrement: "Inkrement", practiceSeconds: "Sekunden", practiceStart: "Start-BPM", practiceTarget: "Ziel-BPM", presets: "Preset-Speicher", savePreset: "Preset speichern", silentModeNote: "Auf dem iPhone kann der Stummschalter den Browser-Ton blockieren: Stummschaltung deaktivieren oder Kopfhoerer verwenden. Der Beat-Blitz bleibt aktiv.", speaker: "Lautsprecher", subdivision: "Rhythmische Unterteilung", tapHint: "Tap Tempo" },
  es: { accentFirstBeat: "Acento en el primer pulso", apply: "Cargar", beat: "Pulso", denominator: "Denominador", haptics: "Vibracion/flash", headphones: "Auriculares", noPresets: "Sin presets guardados", numerator: "Numerador", output: "Salida", practiceAdvance: "Cambiar BPM", practiceAfterBars: "Tras compases completos", practiceAfterTime: "Tras el tiempo", practiceBars: "Compases", practiceCycle: "Ciclo de practica", practiceEvery: "Cada", practiceIncrement: "Incremento", practiceSeconds: "Segundos", practiceStart: "BPM inicio", practiceTarget: "BPM objetivo", presets: "Memorias de preset", savePreset: "Guardar preset", silentModeNote: "En iPhone, el modo silencio puede bloquear el audio del navegador: desactivalo o usa auriculares. El flash del pulso permanece activo.", speaker: "Altavoz", subdivision: "Subdivision ritmica", tapHint: "Tap tempo" },
  pt: { accentFirstBeat: "Acento no primeiro tempo", apply: "Carregar", beat: "Batida", denominator: "Denominador", haptics: "Vibracao/flash", headphones: "Fones", noPresets: "Nenhum preset salvo", numerator: "Numerador", output: "Saida", practiceAdvance: "Mudar BPM", practiceAfterBars: "Apos compassos completos", practiceAfterTime: "Apos o tempo", practiceBars: "Compassos", practiceCycle: "Ciclo de pratica", practiceEvery: "A cada", practiceIncrement: "Incremento", practiceSeconds: "Segundos", practiceStart: "BPM inicial", practiceTarget: "BPM alvo", presets: "Memorias de preset", savePreset: "Salvar preset", silentModeNote: "No iPhone, o modo silencioso pode bloquear o audio do navegador: desative-o ou use fones. O flash do pulso continua ativo.", speaker: "Alto-falante", subdivision: "Subdivisao ritmica", tapHint: "Tap tempo" },
  zh: { accentFirstBeat: "第一拍重音", apply: "载入", beat: "拍", denominator: "分母", haptics: "振动/闪光", headphones: "耳机", noPresets: "没有已保存预设", numerator: "分子", output: "输出", practiceAdvance: "改变BPM", practiceAfterBars: "完成若干小节后", practiceAfterTime: "经过时间后", practiceBars: "小节", practiceCycle: "练习循环", practiceEvery: "每隔", practiceIncrement: "递增", practiceSeconds: "秒", practiceStart: "起始BPM", practiceTarget: "目标BPM", presets: "预设记忆", savePreset: "保存预设", silentModeNote: "在iPhone上，静音模式可能会阻止浏览器音频：请关闭静音或使用耳机。节拍闪光仍然有效。", speaker: "扬声器", subdivision: "节奏细分", tapHint: "点击速度" },
  ru: { accentFirstBeat: "Акцент на первой доле", apply: "Загрузить", beat: "Доля", denominator: "Знаменатель", haptics: "Вибрация/вспышка", headphones: "Наушники", noPresets: "Нет сохраненных пресетов", numerator: "Числитель", output: "Выход", practiceAdvance: "Изменить BPM", practiceAfterBars: "После полных тактов", practiceAfterTime: "После времени", practiceBars: "Такты", practiceCycle: "Цикл упражнений", practiceEvery: "Каждые", practiceIncrement: "Шаг", practiceSeconds: "Секунды", practiceStart: "Начальный BPM", practiceTarget: "Целевой BPM", presets: "Память пресетов", savePreset: "Сохранить пресет", silentModeNote: "На iPhone режим беззвучного может блокировать звук браузера: отключите его или используйте наушники. Вспышка на долю остается активной.", speaker: "Динамик", subdivision: "Ритмическое деление", tapHint: "Tap tempo" },
  ja: { accentFirstBeat: "1拍目を強調", apply: "読み込む", beat: "拍", denominator: "分母", haptics: "バイブ/フラッシュ", headphones: "ヘッドホン", noPresets: "保存済みプリセットなし", numerator: "分子", output: "出力", practiceAdvance: "BPM変更", practiceAfterBars: "完全な小節後", practiceAfterTime: "時間後", practiceBars: "小節", practiceCycle: "練習サイクル", practiceEvery: "毎に", practiceIncrement: "増分", practiceSeconds: "秒", practiceStart: "開始BPM", practiceTarget: "目標BPM", presets: "プリセットメモリ", savePreset: "プリセット保存", silentModeNote: "iPhoneでは消音スイッチがブラウザ音声をブロックする場合があります。消音を解除するかヘッドホンを使ってください。拍のフラッシュは有効です。", speaker: "スピーカー", subdivision: "リズム細分", tapHint: "タップテンポ" },
  ko: { accentFirstBeat: "첫 박자 악센트", apply: "불러오기", beat: "박", denominator: "분모", haptics: "진동/플래시", headphones: "헤드폰", noPresets: "저장된 프리셋 없음", numerator: "분자", output: "출력", practiceAdvance: "BPM 변경", practiceAfterBars: "완전한 마디 후", practiceAfterTime: "시간 후", practiceBars: "마디", practiceCycle: "연습 사이클", practiceEvery: "마다", practiceIncrement: "증가량", practiceSeconds: "초", practiceStart: "시작 BPM", practiceTarget: "목표 BPM", presets: "프리셋 메모리", savePreset: "프리셋 저장", silentModeNote: "iPhone에서 무음 모드가 브라우저 오디오를 차단할 수 있습니다. 무음을 해제하거나 헤드폰을 사용하세요. 박자 플래시는 계속 작동합니다.", speaker: "스피커", subdivision: "리듬 분할", tapHint: "탭 템포" },
  ar: { accentFirstBeat: "تشديد الضربة الأولى", apply: "تحميل", beat: "ضربة", denominator: "المقام", haptics: "الاهتزاز/الوميض", headphones: "سماعات", noPresets: "لا توجد إعدادات محفوظة", numerator: "البسط", output: "الإخراج", practiceAdvance: "تغيير BPM", practiceAfterBars: "بعد مقاطع كاملة", practiceAfterTime: "بعد الوقت", practiceBars: "مقاطع", practiceCycle: "دورة التدريب", practiceEvery: "كل", practiceIncrement: "الزيادة", practiceSeconds: "ثوان", practiceStart: "BPM البداية", practiceTarget: "BPM الهدف", presets: "ذاكرة الإعدادات", savePreset: "حفظ الإعداد", silentModeNote: "على iPhone، قد يمنع وضع الصامت صوت المتصفح: الغِ الصامت أو استخدم سماعات الرأس. وميض الضربة يبقى نشطاً.", speaker: "مكبر الصوت", subdivision: "تقسيم إيقاعي", tapHint: "Tap tempo" }
};

const extendedMetronomeUiText: Partial<Record<Locale, (typeof metronomeUiText)[BaseLocale]>> = {
  hi: { accentFirstBeat: "पहले बीट पर एक्सेंट", apply: "लोड करें", beat: "बीट", denominator: "हर (डिनॉमिनेटर)", haptics: "वाइब्रेशन/फ़्लैश", headphones: "हेडफ़ोन", noPresets: "कोई सेव किया प्रीसेट नहीं", numerator: "अंश (न्यूमरेटर)", output: "आउटपुट", practiceAdvance: "BPM बदलें", practiceAfterBars: "पूरे बार के बाद", practiceAfterTime: "समय के बाद", practiceBars: "बार", practiceCycle: "अभ्यास साइकिल", practiceEvery: "हर", practiceIncrement: "वृद्धि", practiceSeconds: "सेकंड", practiceStart: "शुरुआती BPM", practiceTarget: "टारगेट BPM", presets: "प्रीसेट मेमोरी", savePreset: "प्रीसेट सेव करें", silentModeNote: "iPhone पर साइलेंट मोड ब्राउज़र ऑडियो ब्लॉक कर सकता है: साइलेंट बंद करें या हेडफ़ोन इस्तेमाल करें। बीट फ़्लैश चालू रहता है।", speaker: "स्पीकर", subdivision: "ताल विभाजन", tapHint: "टैप टेम्पो" },
  nl: { accentFirstBeat: "Eerste tel accentueren", apply: "Laden", beat: "Tel", denominator: "Noemer", haptics: "Trilling/flits", headphones: "Koptelefoon", noPresets: "Geen opgeslagen presets", numerator: "Teller", output: "Uitvoer", practiceAdvance: "BPM wijzigen", practiceAfterBars: "Na volledige maten", practiceAfterTime: "Na tijd", practiceBars: "Maten", practiceCycle: "Oefencyclus", practiceEvery: "Elke", practiceIncrement: "Stap", practiceSeconds: "Seconden", practiceStart: "Start-BPM", practiceTarget: "Doel-BPM", presets: "Presetgeheugens", savePreset: "Preset opslaan", silentModeNote: "Op iPhone kan de stille modus browseraudio blokkeren: zet de stille modus uit of gebruik een koptelefoon. De telflits blijft actief.", speaker: "Luidspreker", subdivision: "Ritmische onderverdeling", tapHint: "Tap tempo" },
  pl: { accentFirstBeat: "Akcent na pierwszą miarę", apply: "Wczytaj", beat: "Miara", denominator: "Mianownik", haptics: "Wibracja/błysk", headphones: "Słuchawki", noPresets: "Brak zapisanych presetów", numerator: "Licznik", output: "Wyjście", practiceAdvance: "Zmień BPM", practiceAfterBars: "Po pełnych taktach", practiceAfterTime: "Po czasie", practiceBars: "Takty", practiceCycle: "Cykl ćwiczeń", practiceEvery: "Co", practiceIncrement: "Przyrost", practiceSeconds: "Sekundy", practiceStart: "Początkowe BPM", practiceTarget: "Docelowe BPM", presets: "Pamięć presetów", savePreset: "Zapisz preset", silentModeNote: "Na iPhonie tryb cichy może blokować dźwięk przeglądarki: wyłącz tryb cichy lub użyj słuchawek. Błysk miary pozostaje aktywny.", speaker: "Głośnik", subdivision: "Podział rytmiczny", tapHint: "Tap tempo" },
  tr: { accentFirstBeat: "İlk vuruşa vurgu", apply: "Yükle", beat: "Vuruş", denominator: "Payda", haptics: "Titreşim/flaş", headphones: "Kulaklık", noPresets: "Kayıtlı ön ayar yok", numerator: "Pay", output: "Çıkış", practiceAdvance: "BPM değiştir", practiceAfterBars: "Tam ölçülerden sonra", practiceAfterTime: "Süreden sonra", practiceBars: "Ölçü", practiceCycle: "Çalışma döngüsü", practiceEvery: "Her", practiceIncrement: "Artış", practiceSeconds: "Saniye", practiceStart: "Başlangıç BPM", practiceTarget: "Hedef BPM", presets: "Ön ayar belleği", savePreset: "Ön ayarı kaydet", silentModeNote: "iPhone'da Sessiz Mod tarayıcı sesini engelleyebilir: Sessiz Modu kapatın veya kulaklık kullanın. Vuruş flaşı etkin kalır.", speaker: "Hoparlör", subdivision: "Ritmik alt bölünme", tapHint: "Tap tempo" },
  cs: { accentFirstBeat: "Akcent na první dobu", apply: "Načíst", beat: "Doba", denominator: "Jmenovatel", haptics: "Vibrace/záblesk", headphones: "Sluchátka", noPresets: "Žádné uložené předvolby", numerator: "Čitatel", output: "Výstup", practiceAdvance: "Změnit BPM", practiceAfterBars: "Po celých taktech", practiceAfterTime: "Po čase", practiceBars: "Takty", practiceCycle: "Cvičební cyklus", practiceEvery: "Každých", practiceIncrement: "Přírůstek", practiceSeconds: "Sekundy", practiceStart: "Počáteční BPM", practiceTarget: "Cílové BPM", presets: "Paměť předvoleb", savePreset: "Uložit předvolbu", silentModeNote: "Na iPhonu může tichý režim blokovat zvuk prohlížeče: vypněte tichý režim nebo použijte sluchátka. Záblesk doby zůstává aktivní.", speaker: "Reproduktor", subdivision: "Rytmické dělení", tapHint: "Tap tempo" },
  sv: { accentFirstBeat: "Accent på första slaget", apply: "Ladda", beat: "Slag", denominator: "Nämnare", haptics: "Vibration/blink", headphones: "Hörlurar", noPresets: "Inga sparade förinställningar", numerator: "Täljare", output: "Utgång", practiceAdvance: "Ändra BPM", practiceAfterBars: "Efter hela takter", practiceAfterTime: "Efter tid", practiceBars: "Takter", practiceCycle: "Övningscykel", practiceEvery: "Var", practiceIncrement: "Steg", practiceSeconds: "Sekunder", practiceStart: "Start-BPM", practiceTarget: "Mål-BPM", presets: "Förinställningsminnen", savePreset: "Spara förinställning", silentModeNote: "På iPhone kan tyst läge blockera webbläsarljud: stäng av tyst läge eller använd hörlurar. Slagblinkningen förblir aktiv.", speaker: "Högtalare", subdivision: "Rytmisk underdelning", tapHint: "Tap tempo" },
  no: { accentFirstBeat: "Aksent på første slag", apply: "Last inn", beat: "Slag", denominator: "Nevner", haptics: "Vibrasjon/blink", headphones: "Hodetelefoner", noPresets: "Ingen lagrede forhåndsinnstillinger", numerator: "Teller", output: "Utgang", practiceAdvance: "Endre BPM", practiceAfterBars: "Etter hele takter", practiceAfterTime: "Etter tid", practiceBars: "Takter", practiceCycle: "Øvingssyklus", practiceEvery: "Hver", practiceIncrement: "Trinn", practiceSeconds: "Sekunder", practiceStart: "Start-BPM", practiceTarget: "Mål-BPM", presets: "Forhåndsinnstillingsminner", savePreset: "Lagre forhåndsinnstilling", silentModeNote: "På iPhone kan stillemodus blokkere nettleserlyd: slå av stillemodus eller bruk hodetelefoner. Slagblinket forblir aktivt.", speaker: "Høyttaler", subdivision: "Rytmisk underdeling", tapHint: "Tap tempo" }
};

export function Metronome({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
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
  const labels = extendedMetronomeUiText[locale] ?? metronomeUiText[getContentLocale(locale)];

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
    const subdivisionConfig = subdivisions.find((item) => item.id === subdivision);
    const subdivisionLabel = subdivisionConfig ? getSubdivisionLabel(subdivisionConfig, locale) : subdivision;
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
          {labels.practiceCycle}
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
            {labels.practiceStart}
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
            {labels.practiceTarget}
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
            {labels.practiceIncrement}
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
            {labels.practiceAdvance}
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
              <option value="bars">{labels.practiceAfterBars}</option>
              <option value="time">{labels.practiceAfterTime}</option>
            </select>
          </label>
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
          {practiceAdvanceMode === "bars" ? (
            <label className="grid gap-2 text-sm font-semibold">
              {labels.practiceEvery}
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
              {labels.practiceEvery}
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
              ? `${labels.practiceBars}: ${practiceProgress}/${practiceBars}`
              : `${labels.practiceSeconds}: ${practiceSeconds}`}
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
            {labels.practiceStart}
          </Button>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-[1fr_1fr_1.4fr]">
        <label className="grid gap-2 text-sm font-semibold">
          {labels.numerator}
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
          {labels.denominator}
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
                {getSubdivisionLabel(item, locale)} ({item.parts})
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
          {labels.haptics}
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
          <p className="rounded-md bg-paper p-3 text-xs leading-5 text-ink/60">{labels.silentModeNote}</p>
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

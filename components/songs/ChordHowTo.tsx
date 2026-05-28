import type { Locale } from "@/lib/i18n/locales";

type FretValue = number | "x";

type ChordShape = {
  frets: FretValue[];
  tip: string;
};

const stringLabels = ["E", "A", "D", "G", "B", "e"];

const chordShapes: Record<string, ChordShape> = {
  A: { frets: ["x", 0, 2, 2, 2, 0], tip: "Mute the low E string and keep the three middle fingers compact." },
  Am: { frets: ["x", 0, 2, 2, 1, 0], tip: "Keep the first finger light on the B string and let the open A ring." },
  B: { frets: ["x", 2, 4, 4, 4, 2], tip: "Use a small barre on fret 2 and press the middle strings clearly." },
  C: { frets: ["x", 3, 2, 0, 1, 0], tip: "Curve the fingers so the open G and high E strings can ring." },
  D: { frets: ["x", "x", 0, 2, 3, 2], tip: "Start from the open D string and avoid hitting the two lowest strings." },
  E: { frets: [0, 2, 2, 1, 0, 0], tip: "Let both E strings ring and keep the hand relaxed." },
  Em: { frets: [0, 2, 2, 0, 0, 0], tip: "A simple two-finger shape: check that all open strings sound clean." },
  F: { frets: [1, 3, 3, 2, 1, 1], tip: "Use a barre on fret 1. Beginners can first practice the top four strings." },
  G: { frets: [3, 2, 0, 0, 0, 3], tip: "Keep the bass note strong and let the open middle strings ring." }
};

const labels: Record<
  Locale,
  {
    available: string;
    intro: string;
    missing: string;
    open: string;
    muted: string;
    title: string;
  }
> = {
  ar: {
    available: "الأشكال المتاحة",
    intro: "مخططات مبسطة للغيتار القياسي تساعدك على عزف أكوردات هذا التمرين.",
    missing: "بعض الأكوردات المتقدمة قد لا تحتوي بعد على مخطط مبسط.",
    open: "وتر مفتوح",
    muted: "وتر مكتوم",
    title: "طريقة عزف الأكوردات"
  },
  de: {
    available: "Verfuegbare Griffe",
    intro: "Einfache Gitarrendiagramme in Standardstimmung fuer die Akkorde dieses Stuecks.",
    missing: "Einige fortgeschrittene Akkorde haben noch kein vereinfachtes Diagramm.",
    open: "Leere Saite",
    muted: "Nicht spielen",
    title: "So greifst du die Akkorde"
  },
  en: {
    available: "Available shapes",
    intro: "Simple standard-guitar diagrams for the chords used in this piece.",
    missing: "Some advanced chords may not have a simplified diagram yet.",
    open: "Open string",
    muted: "Muted string",
    title: "How to play the chords"
  },
  es: {
    available: "Posiciones disponibles",
    intro: "Diagramas sencillos para guitarra en afinacion estandar con los acordes de esta pieza.",
    missing: "Algunos acordes avanzados todavia no tienen un diagrama simplificado.",
    open: "Cuerda al aire",
    muted: "Cuerda silenciada",
    title: "Como tocar los acordes"
  },
  fr: {
    available: "Positions disponibles",
    intro: "Diagrammes simples pour guitare en accordage standard avec les accords du morceau.",
    missing: "Certains accords avances n'ont pas encore de diagramme simplifie.",
    open: "Corde a vide",
    muted: "Corde muette",
    title: "Comment jouer les accords"
  },
  it: {
    available: "Posizioni disponibili",
    intro: "Diagrammi semplici per chitarra in accordatura standard con gli accordi usati nel brano.",
    missing: "Alcuni accordi avanzati potrebbero non avere ancora un diagramma semplificato.",
    open: "Corda a vuoto",
    muted: "Corda stoppata",
    title: "Come fare gli accordi"
  },
  ja: {
    available: "利用できるフォーム",
    intro: "この曲で使うコードを標準チューニングのギター図で確認できます。",
    missing: "一部の高度なコードには、まだ簡易図がありません。",
    open: "開放弦",
    muted: "鳴らさない弦",
    title: "コードの押さえ方"
  },
  ko: {
    available: "사용 가능한 코드 폼",
    intro: "이 곡에 쓰인 코드를 표준 튜닝 기타 다이어그램으로 쉽게 확인하세요.",
    missing: "일부 고급 코드는 아직 간단한 다이어그램이 없을 수 있습니다.",
    open: "개방현",
    muted: "뮤트",
    title: "코드 잡는 방법"
  },
  pt: {
    available: "Posicoes disponiveis",
    intro: "Diagramas simples para guitarra em afinacao padrao com os acordes desta peca.",
    missing: "Alguns acordes avancados ainda podem nao ter diagrama simplificado.",
    open: "Corda solta",
    muted: "Corda abafada",
    title: "Como tocar os acordes"
  },
  ru: {
    available: "Доступные аппликатуры",
    intro: "Простые схемы для гитары в стандартном строе с аккордами этой пьесы.",
    missing: "Для некоторых сложных аккордов пока может не быть простой схемы.",
    open: "Открытая струна",
    muted: "Не играть",
    title: "Как играть аккорды"
  },
  zh: {
    available: "可用指法",
    intro: "用标准调弦吉他图示查看本曲使用的和弦。",
    missing: "部分高级和弦可能暂时没有简化图。",
    open: "空弦",
    muted: "不弹",
    title: "如何按和弦"
  }
};

function uniqueChords(chords: string[]) {
  return Array.from(new Set(chords.map((chord) => chord.trim()).filter(Boolean)));
}

function ChordDiagram({ chord, shape }: { chord: string; shape: ChordShape }) {
  const frets = [1, 2, 3, 4];

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-black">{chord}</h3>
        <span className="rounded-full bg-mint/10 px-2 py-1 text-xs font-bold text-mint">Guitar</span>
      </div>
      <svg className="mt-3 h-48 w-full" viewBox="0 0 180 220" role="img" aria-label={`${chord} chord diagram`}>
        {stringLabels.map((label, index) => {
          const x = 25 + index * 26;
          const value = shape.frets[index];
          return (
            <g key={`${label}-${index}`}>
              <line x1={x} y1="38" x2={x} y2="180" stroke="#d7d0c3" strokeWidth="2" />
              <text x={x} y="22" textAnchor="middle" className="fill-ink text-[13px] font-bold">
                {value === "x" ? "x" : value === 0 ? "o" : ""}
              </text>
              <text x={x} y="207" textAnchor="middle" className="fill-ink/60 text-[11px] font-bold">
                {label}
              </text>
            </g>
          );
        })}
        <line x1="25" y1="38" x2="155" y2="38" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
        {frets.map((fret) => {
          const y = 38 + fret * 34;
          return <line key={fret} x1="25" y1={y} x2="155" y2={y} stroke="#d7d0c3" strokeWidth="2" />;
        })}
        {shape.frets.map((value, index) => {
          if (value === "x" || value === 0) return null;
          const x = 25 + index * 26;
          const y = 38 + (value - 0.5) * 34;
          return <circle key={`${value}-${index}`} cx={x} cy={y} r="9" fill="#15977f" />;
        })}
      </svg>
      <p className="mt-3 text-sm leading-6 text-ink/68">{shape.tip}</p>
    </div>
  );
}

export function ChordHowTo({ chords, locale }: { chords: string[]; locale: Locale }) {
  const ui = labels[locale];
  const knownChords = uniqueChords(chords).filter((chord) => chordShapes[chord]);

  if (knownChords.length === 0) return null;

  return (
    <section className="rounded-lg border border-line bg-paper p-5 shadow-soft">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint">{ui.available}</p>
        <h2 className="mt-2 text-2xl font-bold">{ui.title}</h2>
        <p className="mt-3 leading-7 text-ink/72">{ui.intro}</p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {knownChords.map((chord) => (
          <ChordDiagram key={chord} chord={chord} shape={chordShapes[chord]} />
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold text-ink/55">
        {ui.open}: o · {ui.muted}: x. {ui.missing}
      </p>
    </section>
  );
}

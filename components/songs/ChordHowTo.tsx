import type { Locale } from "@/lib/i18n/locales";

type FretValue = number | "x";

type ChordShape = {
  frets: FretValue[];
};

const stringLabels = ["E", "A", "D", "G", "B", "e"];

const chordShapes: Record<string, ChordShape> = {
  A: { frets: ["x", 0, 2, 2, 2, 0] },
  Am: { frets: ["x", 0, 2, 2, 1, 0] },
  B: { frets: ["x", 2, 4, 4, 4, 2] },
  C: { frets: ["x", 3, 2, 0, 1, 0] },
  D: { frets: ["x", "x", 0, 2, 3, 2] },
  E: { frets: [0, 2, 2, 1, 0, 0] },
  Em: { frets: [0, 2, 2, 0, 0, 0] },
  F: { frets: [1, 3, 3, 2, 1, 1] },
  G: { frets: [3, 2, 0, 0, 0, 3] }
};

const labels: Record<
  Locale,
  {
    available: string;
    diagramAlt: string;
    instrument: string;
    intro: string;
    missing: string;
    muted: string;
    open: string;
    title: string;
  }
> = {
  ar: {
    available: "الأشكال المتاحة",
    diagramAlt: "مخطط أكورد",
    instrument: "غيتار",
    intro: "مخططات مبسطة للغيتار بالضبط القياسي لأكوردات هذه القطعة.",
    missing: "قد لا تحتوي بعض الأكوردات المتقدمة بعد على مخطط مبسط.",
    muted: "وتر مكتوم",
    open: "وتر مفتوح",
    title: "طريقة عزف الأكوردات"
  },
  de: {
    available: "Verfügbare Griffe",
    diagramAlt: "Akkorddiagramm",
    instrument: "Gitarre",
    intro: "Einfache Diagramme für Gitarre in Standardstimmung mit den Akkorden dieses Stücks.",
    missing: "Einige fortgeschrittene Akkorde haben noch kein vereinfachtes Diagramm.",
    muted: "Nicht spielen",
    open: "Leere Saite",
    title: "So greifst du die Akkorde"
  },
  en: {
    available: "Available shapes",
    diagramAlt: "chord diagram",
    instrument: "Guitar",
    intro: "Simple standard-guitar diagrams for the chords used in this piece.",
    missing: "Some advanced chords may not have a simplified diagram yet.",
    muted: "Muted string",
    open: "Open string",
    title: "How to play the chords"
  },
  es: {
    available: "Posiciones disponibles",
    diagramAlt: "diagrama de acorde",
    instrument: "Guitarra",
    intro: "Diagramas sencillos para guitarra en afinación estándar con los acordes de esta pieza.",
    missing: "Algunos acordes avanzados todavía no tienen un diagrama simplificado.",
    muted: "Cuerda silenciada",
    open: "Cuerda al aire",
    title: "Cómo tocar los acordes"
  },
  fr: {
    available: "Positions disponibles",
    diagramAlt: "diagramme d'accord",
    instrument: "Guitare",
    intro: "Diagrammes simples pour guitare en accordage standard avec les accords du morceau.",
    missing: "Certains accords avancés n'ont pas encore de diagramme simplifié.",
    muted: "Corde muette",
    open: "Corde à vide",
    title: "Comment jouer les accords"
  },
  it: {
    available: "Posizioni disponibili",
    diagramAlt: "diagramma accordo",
    instrument: "Chitarra",
    intro: "Diagrammi semplici per chitarra in accordatura standard con gli accordi usati nel brano.",
    missing: "Alcuni accordi avanzati potrebbero non avere ancora un diagramma semplificato.",
    muted: "Corda stoppata",
    open: "Corda a vuoto",
    title: "Come fare gli accordi"
  },
  ja: {
    available: "利用できるフォーム",
    diagramAlt: "コード図",
    instrument: "ギター",
    intro: "この曲で使うコードを標準チューニングのギター図で確認できます。",
    missing: "一部の高度なコードには、まだ簡易図がありません。",
    muted: "鳴らさない弦",
    open: "開放弦",
    title: "コードの押さえ方"
  },
  ko: {
    available: "사용 가능한 코드 폼",
    diagramAlt: "코드 다이어그램",
    instrument: "기타",
    intro: "이 곡에 쓰인 코드를 표준 튜닝 기타 다이어그램으로 쉽게 확인하세요.",
    missing: "일부 고급 코드는 아직 간단한 다이어그램이 없을 수 있습니다.",
    muted: "뮤트",
    open: "개방현",
    title: "코드 잡는 방법"
  },
  pt: {
    available: "Posições disponíveis",
    diagramAlt: "diagrama de acorde",
    instrument: "Guitarra",
    intro: "Diagramas simples para guitarra em afinação padrão com os acordes desta peça.",
    missing: "Alguns acordes avançados ainda podem não ter diagrama simplificado.",
    muted: "Corda abafada",
    open: "Corda solta",
    title: "Como tocar os acordes"
  },
  ru: {
    available: "Доступные аппликатуры",
    diagramAlt: "схема аккорда",
    instrument: "Гитара",
    intro: "Простые схемы для гитары в стандартном строе с аккордами этой пьесы.",
    missing: "Для некоторых сложных аккордов пока может не быть простой схемы.",
    muted: "Не играть",
    open: "Открытая струна",
    title: "Как играть аккорды"
  },
  zh: {
    available: "可用指法",
    diagramAlt: "和弦图",
    instrument: "吉他",
    intro: "用标准调弦吉他图示查看本曲使用的和弦。",
    missing: "部分高级和弦可能暂时没有简化图。",
    muted: "不弹",
    open: "空弦",
    title: "如何按和弦"
  }
};

const chordTips: Record<Locale, Record<string, string>> = {
  ar: {
    A: "اكتم وتر E الغليظ واجعل الأصابع الثلاثة في الوسط قريبة من بعضها.",
    Am: "اجعل الإصبع الأول خفيفا على وتر B واترك وتر A المفتوح يرن.",
    B: "استخدم حاجزا صغيرا على الفريت الثاني واضغط الأوتار الوسطى بوضوح.",
    C: "قوس الأصابع حتى يرن وتر G المفتوح ووتر E الرفيع.",
    D: "ابدأ من وتر D المفتوح وتجنب ضرب الوترين الغليظين.",
    E: "اترك وتري E يرنّان وحافظ على استرخاء اليد.",
    Em: "شكل بسيط بإصبعين: تأكد من نظافة كل الأوتار المفتوحة.",
    F: "استخدم حاجزا على الفريت الأول. يمكن للمبتدئين البدء بالأوتار الأربعة العليا.",
    G: "اجعل نغمة الباس قوية واترك الأوتار الوسطى المفتوحة ترن."
  },
  de: {
    A: "Dämpfe die tiefe E-Saite und halte die drei mittleren Finger kompakt.",
    Am: "Halte den ersten Finger locker auf der B-Saite und lass die offene A-Saite klingen.",
    B: "Nutze einen kleinen Barré im zweiten Bund und drücke die mittleren Saiten sauber.",
    C: "Krümme die Finger, damit die offene G-Saite und die hohe E-Saite frei klingen.",
    D: "Beginne bei der offenen D-Saite und vermeide die zwei tiefsten Saiten.",
    E: "Lass beide E-Saiten klingen und halte die Hand entspannt.",
    Em: "Ein einfacher Zwei-Finger-Griff: Prüfe, ob alle offenen Saiten sauber klingen.",
    F: "Nutze einen Barré im ersten Bund. Anfänger können zuerst die oberen vier Saiten üben.",
    G: "Halte den Basston kräftig und lass die offenen mittleren Saiten klingen."
  },
  en: {
    A: "Mute the low E string and keep the three middle fingers compact.",
    Am: "Keep the first finger light on the B string and let the open A ring.",
    B: "Use a small barre on fret 2 and press the middle strings clearly.",
    C: "Curve the fingers so the open G and high E strings can ring.",
    D: "Start from the open D string and avoid hitting the two lowest strings.",
    E: "Let both E strings ring and keep the hand relaxed.",
    Em: "A simple two-finger shape: check that all open strings sound clean.",
    F: "Use a barre on fret 1. Beginners can first practice the top four strings.",
    G: "Keep the bass note strong and let the open middle strings ring."
  },
  es: {
    A: "Silencia la sexta cuerda y mantén juntos los tres dedos del centro.",
    Am: "Apoya suave el primer dedo en la cuerda B y deja sonar la cuerda A al aire.",
    B: "Usa una cejilla pequeña en el traste 2 y presiona bien las cuerdas centrales.",
    C: "Arquea los dedos para que suenen la cuerda G al aire y la primera cuerda.",
    D: "Empieza desde la cuerda D al aire y evita tocar las dos cuerdas graves.",
    E: "Deja sonar las dos cuerdas E y mantén la mano relajada.",
    Em: "Forma sencilla de dos dedos: comprueba que las cuerdas al aire suenen limpias.",
    F: "Usa cejilla en el traste 1. Si empiezas, practica primero las cuatro cuerdas agudas.",
    G: "Mantén fuerte la nota grave y deja sonar las cuerdas centrales al aire."
  },
  fr: {
    A: "Étouffez la corde de mi grave et gardez les trois doigts du milieu bien groupés.",
    Am: "Posez légèrement le premier doigt sur la corde de si et laissez résonner la corde de la.",
    B: "Utilisez un petit barré en case 2 et appuyez clairement sur les cordes centrales.",
    C: "Arrondissez les doigts pour laisser sonner le sol à vide et le mi aigu.",
    D: "Commencez sur la corde de ré à vide et évitez les deux cordes graves.",
    E: "Laissez sonner les deux cordes de mi et gardez la main détendue.",
    Em: "Position simple à deux doigts : vérifiez que toutes les cordes à vide sonnent clairement.",
    F: "Utilisez un barré en case 1. Les débutants peuvent d'abord travailler les quatre cordes aiguës.",
    G: "Gardez la basse solide et laissez résonner les cordes centrales à vide."
  },
  it: {
    A: "Stoppare il Mi basso e tenere compatte le tre dita sulle corde centrali.",
    Am: "Tieni leggero il primo dito sulla corda Si e lascia risuonare il La a vuoto.",
    B: "Usa un piccolo barré al secondo tasto e premi bene le corde centrali.",
    C: "Incurva le dita per far suonare il Sol a vuoto e il Mi cantino.",
    D: "Parti dalla corda Re a vuoto ed evita di colpire le due corde più basse.",
    E: "Lascia suonare entrambe le corde Mi e mantieni la mano rilassata.",
    Em: "Forma semplice a due dita: controlla che tutte le corde a vuoto suonino pulite.",
    F: "Usa il barré al primo tasto. Se inizi ora, esercitati prima sulle quattro corde acute.",
    G: "Mantieni forte la nota bassa e lascia risuonare le corde centrali a vuoto."
  },
  ja: {
    A: "低いE弦は鳴らさず、中央の3本の指を近くにまとめます。",
    Am: "1本目の指をB弦に軽く置き、開放のA弦を響かせます。",
    B: "2フレットで小さなセーハを使い、中央の弦をしっかり押さえます。",
    C: "指を丸めて、開放のG弦と高いE弦が鳴るようにします。",
    D: "開放のD弦から弾き始め、低い2本の弦は避けます。",
    E: "両方のE弦を響かせ、手はリラックスさせます。",
    Em: "2本指の簡単な形です。開放弦がきれいに鳴るか確認します。",
    F: "1フレットでセーハします。初心者はまず高い4本の弦だけで練習できます。",
    G: "低音をしっかり鳴らし、中央の開放弦を響かせます。"
  },
  ko: {
    A: "낮은 E현은 뮤트하고 가운데 세 손가락을 가깝게 모아 주세요.",
    Am: "첫째 손가락은 B현에 가볍게 두고 개방 A현이 울리게 하세요.",
    B: "2프렛에서 작은 바레를 잡고 가운데 현들을 또렷하게 눌러 주세요.",
    C: "손가락을 둥글게 세워 개방 G현과 높은 E현이 울리게 하세요.",
    D: "개방 D현부터 치고 가장 낮은 두 현은 피하세요.",
    E: "두 E현이 모두 울리게 하고 손은 편하게 유지하세요.",
    Em: "두 손가락으로 잡는 쉬운 폼입니다. 모든 개방현이 깨끗한지 확인하세요.",
    F: "1프렛 바레를 사용합니다. 초보자는 위쪽 네 현부터 연습해도 좋습니다.",
    G: "베이스 음을 힘 있게 내고 가운데 개방현이 울리게 하세요."
  },
  pt: {
    A: "Abafe a corda E grave e mantenha os três dedos centrais bem próximos.",
    Am: "Deixe o primeiro dedo leve na corda B e faça a corda A solta soar.",
    B: "Use uma pequena pestana na casa 2 e pressione bem as cordas centrais.",
    C: "Curve os dedos para deixar soar a corda G solta e a E aguda.",
    D: "Comece pela corda D solta e evite tocar nas duas cordas mais graves.",
    E: "Deixe as duas cordas E soarem e mantenha a mão relaxada.",
    Em: "Forma simples com dois dedos: confira se todas as cordas soltas soam limpas.",
    F: "Use pestana na casa 1. Iniciantes podem praticar primeiro nas quatro cordas agudas.",
    G: "Mantenha a nota grave forte e deixe as cordas centrais soltas soarem."
  },
  ru: {
    A: "Заглушите нижнюю струну E и держите три средних пальца компактно.",
    Am: "Легко поставьте первый палец на струну B и дайте открытой A прозвучать.",
    B: "Используйте малое баррэ на 2 ладу и уверенно прижмите средние струны.",
    C: "Согните пальцы дугой, чтобы открытая G и верхняя E звучали свободно.",
    D: "Начинайте с открытой струны D и не задевайте две нижние струны.",
    E: "Дайте обеим струнам E звучать и держите руку расслабленной.",
    Em: "Простая форма двумя пальцами: проверьте чистое звучание всех открытых струн.",
    F: "Используйте баррэ на 1 ладу. Новичкам можно сначала играть верхние четыре струны.",
    G: "Сделайте басовую ноту уверенной и дайте открытым средним струнам прозвучать."
  },
  zh: {
    A: "不要弹低音 E 弦，三个中间手指保持紧凑。",
    Am: "第一根手指轻按 B 弦，让空弦 A 自然响起。",
    B: "在第 2 品使用小横按，并清楚按住中间几根弦。",
    C: "手指弯曲站立，让空弦 G 和高音 E 能够发声。",
    D: "从空弦 D 开始弹，避免碰到最低的两根弦。",
    E: "让两根 E 弦都发声，手保持放松。",
    Em: "简单的双指和弦：检查所有空弦是否干净发声。",
    F: "在第 1 品使用横按。初学者可以先练习上方四根弦。",
    G: "低音要稳定有力，并让中间的空弦响起。"
  }
};

function uniqueChords(chords: string[]) {
  return Array.from(new Set(chords.map((chord) => chord.trim()).filter(Boolean)));
}

function ChordDiagram({
  chord,
  locale,
  shape
}: {
  chord: string;
  locale: Locale;
  shape: ChordShape;
}) {
  const frets = [1, 2, 3, 4];
  const ui = labels[locale];

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-black">{chord}</h3>
        <span className="rounded-full bg-mint/10 px-2 py-1 text-xs font-bold text-mint">{ui.instrument}</span>
      </div>
      <svg className="mt-3 h-48 w-full" viewBox="0 0 180 220" role="img" aria-label={`${chord} ${ui.diagramAlt}`}>
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
      <p className="mt-3 text-sm leading-6 text-ink/68">{chordTips[locale][chord]}</p>
    </div>
  );
}

export function ChordHowTo({ chords, locale }: { chords: string[]; locale: Locale }) {
  const ui = labels[locale];
  const knownChords = uniqueChords(chords).filter((chord) => chordShapes[chord] && chordTips[locale][chord]);

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
          <ChordDiagram key={chord} chord={chord} locale={locale} shape={chordShapes[chord]} />
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold text-ink/55">
        {ui.open}: o · {ui.muted}: x. {ui.missing}
      </p>
    </section>
  );
}

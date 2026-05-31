import type { Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export type ToolsHubContent = {
  chromaticBody: string;
  chromaticCta: string;
  chromaticTitle: string;
  description: string;
  faq: { answer: string; question: string }[];
  groups: { description: string; title: string; tools: ToolSlug[] }[];
  instrumentIntro: string;
  keywords: string[];
  title: string;
};

export const toolsHubContent: Record<Locale, ToolsHubContent> = {
  ar: {
    title: "أدوات موسيقية مجانية",
    description: "موالف عام، ميترونوم، Tap BPM وناقل أوتار للتدريب اليومي.",
    chromaticTitle: "الموالف العام على الإنترنت",
    chromaticBody: "استخدم الميكروفون لضبط الغيتار والباس واليوكوليلي والعديد من الآلات الوترية. يعمل الموالف كروماتيكيا ويعرض النغمة والتردد والانحراف بالسنت.",
    chromaticCta: "افتح الموالف العام",
    instrumentIntro: "اختر آلة محددة إذا كنت تريد صفحة مخصصة بنغمات مرجعية وروابط دليل مناسبة.",
    keywords: ["موالف عام", "أدوات موسيقية مجانية", "ميترونوم", "Tap BPM", "ناقل أوتار"],
    groups: [
      { title: "ضبط الآلات", description: "لضبط الآلات بالميكروفون أو اختيار آلة محددة.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "الإيقاع و BPM", description: "للدراسة بالميترونوم أو حساب سرعة أغنية.", tools: ["metronome", "tap-bpm"] },
      { title: "الأوتار والنظرية", description: "لتغيير مقام تقدمات الأوتار بسرعة.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "أي أداة أستخدم للضبط؟", answer: "ابدأ بالموالف العام، أو اختر صفحة الآلة إذا كنت تريد نغمات مرجعية محددة." },
      { question: "هل يسجل TuneUniversal صوت الميكروفون؟", answer: "لا، يتم تحليل صوت الموالف محليا في المتصفح عبر Web Audio API." },
      { question: "هل تعمل الأدوات على الهاتف؟", answer: "نعم، تعمل في المتصفح على الهاتف والكمبيوتر إذا كانت أذونات الصوت والميكروفون متاحة." }
    ]
  },
  de: {
    title: "Kostenlose Musiktools",
    description: "Universeller Tuner, Metronom, Tap BPM und Akkord-Transposer für tägliches Üben.",
    chromaticTitle: "Universeller Online-Tuner",
    chromaticBody: "Nutze das Mikrofon, um Gitarre, Bass, Ukulele und viele Saiteninstrumente zu stimmen. Der Tuner arbeitet chromatisch und zeigt Note, Frequenz und Cent-Abweichung.",
    chromaticCta: "Universellen Tuner öffnen",
    instrumentIntro: "Wähle ein konkretes Instrument, wenn du eine Seite mit passenden Referenznoten und Guide-Links möchtest.",
    keywords: ["universeller tuner", "kostenlose musiktools", "metronom online", "tap bpm", "akkorde transponieren"],
    groups: [
      { title: "Instrumente stimmen", description: "Für Mikrofon-Stimmung und instrumentenspezifische Referenznoten.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Rhythmus und BPM", description: "Für Metronomtraining und schnelle Tempo-Schätzung.", tools: ["metronome", "tap-bpm"] },
      { title: "Akkorde und Theorie", description: "Für schnelle Tonartwechsel in Akkordfolgen.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Welches Tool brauche ich zum Stimmen?", answer: "Starte mit dem universellen Tuner oder wähle ein Instrument für passende Referenznoten." },
      { question: "Nimmt TuneUniversal mein Mikrofon auf?", answer: "Nein. Tuner-Audio wird lokal im Browser mit der Web Audio API analysiert." },
      { question: "Funktionieren die Tools auf dem Smartphone?", answer: "Ja, wenn Browser und Gerät Audio- beziehungsweise Mikrofonzugriff erlauben." }
    ]
  },
  en: {
    title: "Free Music Tools",
    description: "Universal tuner, metronome, Tap BPM and chord transposer for daily practice.",
    chromaticTitle: "Universal online tuner",
    chromaticBody: "Use your microphone to tune guitar, bass, ukulele and many string instruments. The tuner works chromatically and shows note, frequency and cents.",
    chromaticCta: "Open universal tuner",
    instrumentIntro: "Choose a specific instrument when you want a dedicated page with reference notes, tuning presets and guide links.",
    keywords: ["universal tuner", "free music tools", "online metronome", "tap bpm", "chord transposer"],
    groups: [
      { title: "Tune instruments", description: "For microphone tuning and instrument-specific reference notes.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Rhythm and BPM", description: "For metronome practice and quick song tempo estimates.", tools: ["metronome", "tap-bpm"] },
      { title: "Chords and theory", description: "For changing key and moving chord progressions.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Which tool should I use for tuning?", answer: "Start with the universal tuner, or choose a specific instrument page if you want exact reference notes." },
      { question: "Does TuneUniversal record microphone audio?", answer: "No. Tuner audio is analyzed locally in your browser with the Web Audio API." },
      { question: "Do the tools work on mobile?", answer: "Yes. They work in modern mobile browsers when audio and microphone permissions are available." }
    ]
  },
  es: {
    title: "Herramientas musicales gratis",
    description: "Afinador universal, metrónomo, Tap BPM y transpositor de acordes para practicar.",
    chromaticTitle: "Afinador universal online",
    chromaticBody: "Usa el micrófono para afinar guitarra, bajo, ukulele y muchos instrumentos de cuerda. El afinador funciona de forma cromática y muestra nota, frecuencia y cents.",
    chromaticCta: "Abrir afinador universal",
    instrumentIntro: "Elige un instrumento específico si quieres una página con notas de referencia, presets y guías.",
    keywords: ["afinador universal", "herramientas musicales gratis", "metrónomo online", "tap bpm", "transpositor acordes"],
    groups: [
      { title: "Afinar instrumentos", description: "Para afinar con micrófono y usar notas de referencia por instrumento.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ritmo y BPM", description: "Para practicar con metrónomo y calcular tempo.", tools: ["metronome", "tap-bpm"] },
      { title: "Acordes y teoría", description: "Para cambiar tonalidad y mover progresiones.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "¿Qué herramienta uso para afinar?", answer: "Empieza con el afinador universal o elige una página de instrumento para notas exactas." },
      { question: "¿TuneUniversal graba el micrófono?", answer: "No. El audio se analiza localmente en el navegador con Web Audio API." },
      { question: "¿Funciona en móvil?", answer: "Sí, en navegadores modernos con permisos de audio y micrófono." }
    ]
  },
  fr: {
    title: "Outils musicaux gratuits",
    description: "Accordeur universel, métronome, Tap BPM et transposeur d'accords pour la pratique.",
    chromaticTitle: "Accordeur universel en ligne",
    chromaticBody: "Utilisez le micro pour accorder guitare, basse, ukulélé et de nombreux instruments à cordes. L'accordeur fonctionne en chromatique et affiche note, fréquence et cents.",
    chromaticCta: "Ouvrir l'accordeur universel",
    instrumentIntro: "Choisissez un instrument précis pour une page avec notes de référence, presets et guides.",
    keywords: ["accordeur universel", "outils musicaux gratuits", "métronome en ligne", "tap bpm", "transposeur accords"],
    groups: [
      { title: "Accorder les instruments", description: "Pour l'accordage au micro et les notes de référence par instrument.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Rythme et BPM", description: "Pour travailler au métronome et estimer le tempo.", tools: ["metronome", "tap-bpm"] },
      { title: "Accords et théorie", description: "Pour changer de tonalité et déplacer les progressions.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Quel outil utiliser pour accorder ?", answer: "Commencez par l'accordeur universel ou choisissez une page instrument pour des notes précises." },
      { question: "TuneUniversal enregistre-t-il le micro ?", answer: "Non. L'audio est analysé localement dans le navigateur avec la Web Audio API." },
      { question: "Les outils fonctionnent-ils sur mobile ?", answer: "Oui, dans les navigateurs mobiles modernes avec les permissions nécessaires." }
    ]
  },
  it: {
    title: "Strumenti musicali gratuiti",
    description: "Accordatore universale, metronomo, Tap BPM e traspositore accordi per lo studio quotidiano.",
    chromaticTitle: "Accordatore universale online",
    chromaticBody: "Usa il microfono per accordare chitarra, basso, ukulele e molti strumenti a corda. L'accordatore lavora in modo cromatico e mostra nota, frequenza e scostamento in cents.",
    chromaticCta: "Apri accordatore universale",
    instrumentIntro: "Scegli uno strumento specifico se vuoi una pagina dedicata con note di riferimento, preset di accordatura e guide correlate.",
    keywords: ["accordatore universale", "strumenti musicali gratis", "metronomo online", "tap bpm", "traspositore accordi"],
    groups: [
      { title: "Accordare strumenti", description: "Per accordare con il microfono e usare note di riferimento specifiche.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ritmo e BPM", description: "Per studiare con il metronomo e calcolare il tempo di un brano.", tools: ["metronome", "tap-bpm"] },
      { title: "Accordi e teoria", description: "Per cambiare tonalità e spostare progressioni di accordi.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Quale strumento devo usare per accordare?", answer: "Parti dall'accordatore universale, oppure scegli la pagina dello strumento se vuoi note di riferimento precise." },
      { question: "TuneUniversal registra l'audio del microfono?", answer: "No. L'audio dell'accordatore viene analizzato localmente nel browser tramite Web Audio API." },
      { question: "Funziona da smartphone?", answer: "Sì, funziona nei browser mobile moderni quando sono disponibili i permessi audio e microfono." }
    ]
  },
  ja: {
    title: "無料音楽ツール",
    description: "ユニバーサルチューナー、メトロノーム、Tap BPM、コード移調ツール。",
    chromaticTitle: "オンライン・ユニバーサルチューナー",
    chromaticBody: "マイクを使ってギター、ベース、ウクレレ、多くの弦楽器を調律できます。クロマチックに音名、周波数、セント差を表示します。",
    chromaticCta: "チューナーを開く",
    instrumentIntro: "基準音、プリセット、ガイドが必要な場合は楽器ページを選びます。",
    keywords: ["ユニバーサルチューナー", "無料音楽ツール", "メトロノーム", "Tap BPM", "コード移調"],
    groups: [
      { title: "楽器を調律", description: "マイク調律と楽器別の基準音。", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "リズムと BPM", description: "メトロノーム練習とテンポ測定。", tools: ["metronome", "tap-bpm"] },
      { title: "コードと理論", description: "キー変更とコード進行の移調。", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "調律にはどのツールを使いますか？", answer: "まずユニバーサルチューナーを使うか、正確な基準音が必要なら楽器ページを選びます。" },
      { question: "マイク音声は録音されますか？", answer: "いいえ。音声はブラウザ内でローカル解析されます。" },
      { question: "スマートフォンで使えますか？", answer: "はい。音声とマイクの許可があるモバイルブラウザで使えます。" }
    ]
  },
  ko: {
    title: "무료 음악 도구",
    description: "유니버설 튜너, 메트로놈, Tap BPM, 코드 조옮김 도구.",
    chromaticTitle: "온라인 유니버설 튜너",
    chromaticBody: "마이크로 기타, 베이스, 우쿨렐레와 여러 현악기를 조율하세요. 크로매틱 방식으로 음, 주파수, 센트 차이를 표시합니다.",
    chromaticCta: "유니버설 튜너 열기",
    instrumentIntro: "기준 음, 프리셋, 관련 가이드가 필요하면 특정 악기 페이지를 선택하세요.",
    keywords: ["유니버설 튜너", "무료 음악 도구", "메트로놈", "Tap BPM", "코드 조옮김"],
    groups: [
      { title: "악기 조율", description: "마이크 튜닝과 악기별 기준 음.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "리듬과 BPM", description: "메트로놈 연습과 템포 측정.", tools: ["metronome", "tap-bpm"] },
      { title: "코드와 이론", description: "키 변경과 코드 진행 조옮김.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "튜닝에는 어떤 도구를 쓰나요?", answer: "유니버설 튜너로 시작하거나 정확한 기준 음이 필요하면 악기 페이지를 선택하세요." },
      { question: "마이크 오디오를 녹음하나요?", answer: "아니요. 오디오는 브라우저 안에서 로컬로 분석됩니다." },
      { question: "모바일에서도 작동하나요?", answer: "네. 오디오와 마이크 권한이 있는 최신 모바일 브라우저에서 작동합니다." }
    ]
  },
  pt: {
    title: "Ferramentas musicais grátis",
    description: "Afinador universal, metrônomo, Tap BPM e transpositor de acordes para estudo diário.",
    chromaticTitle: "Afinador universal online",
    chromaticBody: "Use o microfone para afinar guitarra, baixo, ukulele e muitos instrumentos de corda. O afinador trabalha de forma cromática e mostra nota, frequência e cents.",
    chromaticCta: "Abrir afinador universal",
    instrumentIntro: "Escolha um instrumento específico para uma página com notas de referência, presets e guias.",
    keywords: ["afinador universal", "ferramentas musicais grátis", "metrônomo online", "tap bpm", "transpositor acordes"],
    groups: [
      { title: "Afinar instrumentos", description: "Para afinar com microfone e usar notas específicas.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ritmo e BPM", description: "Para praticar com metrônomo e calcular tempo.", tools: ["metronome", "tap-bpm"] },
      { title: "Acordes e teoria", description: "Para mudar tonalidade e mover progressões.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Qual ferramenta uso para afinar?", answer: "Comece pelo afinador universal ou escolha a página do instrumento para notas exatas." },
      { question: "O TuneUniversal grava o microfone?", answer: "Não. O áudio é analisado localmente no navegador com Web Audio API." },
      { question: "Funciona no celular?", answer: "Sim, em navegadores modernos com permissões de áudio e microfone." }
    ]
  },
  ru: {
    title: "Бесплатные музыкальные инструменты",
    description: "Универсальный тюнер, метроном, Tap BPM и транспозитор аккордов.",
    chromaticTitle: "Универсальный онлайн-тюнер",
    chromaticBody: "Используйте микрофон для настройки гитары, баса, укулеле и многих струнных инструментов. Тюнер работает хроматически и показывает ноту, частоту и центы.",
    chromaticCta: "Открыть универсальный тюнер",
    instrumentIntro: "Выберите конкретный инструмент, если нужны опорные ноты, пресеты и связанные руководства.",
    keywords: ["универсальный тюнер", "бесплатные музыкальные инструменты", "метроном", "Tap BPM", "транспозитор аккордов"],
    groups: [
      { title: "Настройка инструментов", description: "Для настройки через микрофон и опорных нот по инструментам.", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "Ритм и BPM", description: "Для практики с метрономом и оценки темпа.", tools: ["metronome", "tap-bpm"] },
      { title: "Аккорды и теория", description: "Для смены тональности и транспонирования.", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "Какой инструмент использовать для настройки?", answer: "Начните с универсального тюнера или выберите страницу инструмента для точных опорных нот." },
      { question: "TuneUniversal записывает микрофон?", answer: "Нет. Аудио анализируется локально в браузере через Web Audio API." },
      { question: "Работает ли на телефоне?", answer: "Да, в современных мобильных браузерах при наличии разрешений." }
    ]
  },
  zh: {
    title: "免费音乐工具",
    description: "通用调音器、节拍器、Tap BPM 和和弦移调器。",
    chromaticTitle: "在线通用调音器",
    chromaticBody: "使用麦克风为吉他、贝斯、尤克里里和多种弦乐器调音。调音器支持半音阶识别，并显示音名、频率和音分偏差。",
    chromaticCta: "打开通用调音器",
    instrumentIntro: "如果需要参考音、预设和相关指南，请选择具体乐器页面。",
    keywords: ["通用调音器", "免费音乐工具", "节拍器", "Tap BPM", "和弦移调器"],
    groups: [
      { title: "乐器调音", description: "使用麦克风和乐器参考音调音。", tools: ["guitar-tuner", "bass-tuner", "ukulele-tuner"] },
      { title: "节奏和 BPM", description: "用于节拍器练习和速度估算。", tools: ["metronome", "tap-bpm"] },
      { title: "和弦与乐理", description: "用于改变调性和移动和弦进行。", tools: ["chord-transposer"] }
    ],
    faq: [
      { question: "调音应该用哪个工具？", answer: "先使用通用调音器，或选择具体乐器页面获得准确参考音。" },
      { question: "TuneUniversal 会录制麦克风吗？", answer: "不会。音频通过 Web Audio API 在浏览器本地分析。" },
      { question: "手机可以使用吗？", answer: "可以，在支持音频和麦克风权限的现代移动浏览器中使用。" }
    ]
  }
};

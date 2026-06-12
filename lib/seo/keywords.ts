import { getContentLocale, locales, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

const brandKeywords = ["TuneUniversal", "Tune Universal", "tuneuniversal.com"];

export const homeKeywords = {
  ar: ["موالف اونلاين", "مترونوم اونلاين", "حساب BPM", "ناقل الأوتار", "أدوات موسيقية مجانية", "ضبط الغيتار", "ضبط الباس", "ضبط الأوكوليلي", "موالف آلات وترية", "تعلم الإيقاع", ...brandKeywords],
  de: ["online tuner", "online stimmgerät", "online metronom", "tap bpm", "akkorde transponieren", "kostenlose musiktools", "gitarre stimmen", "bass stimmen", "ukulele stimmen", "stimmgerät für saiteninstrumente", "musik tempo üben", ...brandKeywords],
  en: ["online tuner", "online instrument tuner", "online metronome", "tap bpm", "chord transposer", "free music tools", "guitar tuner", "bass tuner", "ukulele tuner", "string instrument tuner", "music practice tools", ...brandKeywords],
  es: ["afinador online", "afinador de instrumentos online", "metrónomo online", "tap bpm", "transpositor de acordes", "herramientas musicales gratis", "afinar guitarra", "afinar bajo", "afinar ukulele", "afinador de instrumentos de cuerda", "practicar ritmo musical", ...brandKeywords],
  fr: ["accordeur en ligne", "accordeur instrument en ligne", "métronome en ligne", "tap bpm", "transposeur d'accords", "outils musicaux gratuits", "accorder guitare", "accorder basse", "accorder ukulélé", "accordeur instruments à cordes", "travailler le rythme", ...brandKeywords],
  it: ["accordatore online", "accordatore strumenti online", "metronomo online", "tap bpm", "traspositore accordi", "strumenti musicali gratis", "accordare chitarra", "accordare basso", "accordare ukulele", "accordatore strumenti a corda", "studiare ritmo musicale", ...brandKeywords],
  ja: ["オンラインチューナー", "楽器チューナー", "オンラインメトロノーム", "Tap BPM", "コード移調", "無料音楽ツール", "ギターチューナー", "ベースチューナー", "ウクレレチューナー", "弦楽器チューナー", "リズム練習", ...brandKeywords],
  ko: ["온라인 튜너", "악기 튜너", "온라인 메트로놈", "Tap BPM", "코드 조옮김", "무료 음악 도구", "기타 튜너", "베이스 튜너", "우쿨렐레 튜너", "현악기 튜너", "리듬 연습", ...brandKeywords],
  pt: ["afinador online", "afinador de instrumentos online", "metrônomo online", "tap bpm", "transpositor de acordes", "ferramentas musicais grátis", "afinar guitarra", "afinar baixo", "afinar ukulele", "afinador de instrumentos de corda", "praticar ritmo musical", ...brandKeywords],
  ru: ["онлайн тюнер", "тюнер для инструментов онлайн", "метроном онлайн", "tap bpm", "транспонирование аккордов", "бесплатные музыкальные инструменты", "настроить гитару", "настроить бас", "настроить укулеле", "тюнер для струнных инструментов", "тренировка ритма", ...brandKeywords],
  zh: ["在线调音器", "乐器调音器", "在线节拍器", "Tap BPM", "和弦移调器", "免费音乐工具", "吉他调音器", "贝斯调音器", "尤克里里调音器", "弦乐器调音器", "节奏练习", ...brandKeywords]
} satisfies Record<BaseLocale, string[]>;

const universalInstrumentKeywords = {
  ar: ["غيتار", "باس", "بانجو", "تشيلو", "كونترباص", "هارب", "كوتو", "عود", "ماندولين", "بيانو", "سيتار", "أوكوليلي", "فيولا", "كمان", "آلات وترية"],
  de: ["gitarre", "bass", "banjo", "cello", "kontrabass", "harfe", "koto", "laute", "mandoline", "piano", "sitar", "ukulele", "viola", "violine", "saiteninstrumente"],
  en: ["guitar", "bass", "banjo", "cello", "contrabass", "harp", "koto", "lute", "mandolin", "piano", "sitar", "ukulele", "viola", "violin", "string instruments"],
  es: ["guitarra", "bajo", "banjo", "violonchelo", "contrabajo", "arpa", "koto", "laúd", "mandolina", "piano", "sitar", "ukulele", "viola", "violín", "instrumentos de cuerda"],
  fr: ["guitare", "basse", "banjo", "violoncelle", "contrebasse", "harpe", "koto", "luth", "mandoline", "piano", "sitar", "ukulélé", "alto", "violon", "instruments à cordes"],
  it: ["chitarra", "basso", "banjo", "violoncello", "contrabbasso", "arpa", "koto", "liuto", "mandolino", "piano", "sitar", "ukulele", "viola", "violino", "strumenti a corda"],
  ja: ["ギター", "ベース", "バンジョー", "チェロ", "コントラバス", "ハープ", "箏", "リュート", "マンドリン", "ピアノ", "シタール", "ウクレレ", "ヴィオラ", "バイオリン", "弦楽器"],
  ko: ["기타", "베이스", "밴조", "첼로", "콘트라베이스", "하프", "고토", "류트", "만돌린", "피아노", "시타르", "우쿨렐레", "비올라", "바이올린", "현악기"],
  pt: ["guitarra", "baixo", "banjo", "violoncelo", "contrabaixo", "harpa", "koto", "alaúde", "bandolim", "piano", "sitar", "ukulele", "viola", "violino", "instrumentos de corda"],
  ru: ["гитара", "бас", "банджо", "виолончель", "контрабас", "арфа", "кото", "лютня", "мандолина", "пианино", "ситар", "укулеле", "альт", "скрипка", "струнные инструменты"],
  zh: ["吉他", "贝斯", "班卓琴", "大提琴", "低音提琴", "竖琴", "古筝", "鲁特琴", "曼陀林", "钢琴", "西塔琴", "尤克里里", "中提琴", "小提琴", "弦乐器"],
  nl: ["gitaar", "bas", "banjo", "cello", "contrabas", "harp", "koto", "luit", "mandoline", "piano", "sitar", "ukulele", "altviool", "viool", "snaarinstrumenten"],
  pl: ["gitara", "bas", "banjo", "wiolonczela", "kontrabas", "harfa", "koto", "lutnia", "mandolina", "piano", "sitar", "ukulele", "altówka", "skrzypce", "instrumenty strunowe"],
  tr: ["gitar", "bas gitar", "banjo", "viyolonsel", "kontrbas", "arp", "koto", "lavta", "mandolin", "piyano", "sitar", "ukulele", "viyola", "keman", "telli çalgılar"],
  cs: ["kytara", "baskytara", "banjo", "violoncello", "kontrabas", "harfa", "koto", "loutna", "mandolína", "piano", "sitar", "ukulele", "viola", "housle", "strunné nástroje"],
  sv: ["gitarr", "bas", "banjo", "cello", "kontrabas", "harpa", "koto", "luta", "mandolin", "piano", "sitar", "ukulele", "viola", "fiol", "stränginstrument"],
  hi: ["गिटार", "बास", "बैंजो", "सेलो", "कॉन्ट्राबास", "हार्प", "कोटो", "ल्यूट", "मैंडोलिन", "पियानो", "सितार", "यूकुलेले", "वायोला", "वायलिन", "तार वाद्य यंत्र"],
  no: ["gitar", "bass", "banjo", "cello", "kontrabass", "harpe", "koto", "lutt", "mandolin", "piano", "sitar", "ukulele", "bratsj", "fiolin", "strengeinstrumenter"]
};

const baseToolKeywords = {
  ar: {
    "bass-tuner": ["موالف باس اونلاين", "ضبط الباس", "توليف باس بالميكروفون", "ضبط باس قياسي", "E A D G", "موالف باس مجاني", "باس كهربائي", "ضبط الباس بدون تطبيق", ...brandKeywords],
    "chord-transposer": ["ناقل الأوتار", "تغيير مقام الأوتار", "أوتار الغيتار", "تغيير الطبقة", "نقل نصف نغمة", "تقدم الأوتار", "نقل موسيقي", "تغيير توناليتي", ...brandKeywords],
    "guitar-tuner": ["موالف غيتار اونلاين", "ضبط الغيتار", "موالف عالمي", "موالف غيتار بالميكروفون", "ضبط غيتار قياسي", "E A D G B E", "موالف غيتار مجاني", "موالف كروماتيك", "ضبط غيتار أكوستيك", "موالف بدون تطبيق", ...universalInstrumentKeywords.ar, ...brandKeywords],
    "sound-level-meter": ["مقياس مستوى الصوت اونلاين", "قياس الديسيبل", "مقياس ديسيبل", "قياس الضوضاء", "حساسية الميكروفون", "مقياس الضوضاء البيئية", ...brandKeywords],
    metronome: ["مترونوم اونلاين", "مترونوم مجاني", "BPM قابل للتعديل", "إيقاع موسيقي", "مترونوم 4/4", "مترونوم 6/8", "tap tempo", "تدريب الإيقاع", "مترونوم للتدريب", ...brandKeywords],
    "tap-bpm": ["حساب BPM", "عداد BPM", "حساب السرعة", "نبضات في الدقيقة", "سرعة الأغنية", "متوسط BPM", "tap tempo اونلاين", "إيجاد BPM أغنية", ...brandKeywords],
    "ukulele-tuner": ["موالف أوكوليلي اونلاين", "ضبط الأوكوليلي", "توليف أوكوليلي", "G C E A", "موالف أوكوليلي مجاني", "أوكوليلي قياسي", "موالف بالميكروفون", ...brandKeywords]
  },
  de: {
    "bass-tuner": ["bass stimmgerät online", "bass stimmen", "bass tuner mikrofon", "standard bassstimmung", "E A D G", "kostenloser bass tuner", "e-bass tuner", "bass stimmen ohne app", ...brandKeywords],
    "chord-transposer": ["akkorde transponieren", "akkord transposer", "gitarrenakkorde", "tonart ändern", "halbton transposer", "akkordfolge", "musik transposer", "tonart wechseln gitarre", ...brandKeywords],
    "guitar-tuner": ["gitarren stimmgerät online", "gitarre stimmen", "universelles stimmgerät", "gitarren tuner mikrofon", "standard gitarrenstimmung", "E A D G H E", "kostenloser gitarren tuner", "chromatisches stimmgerät", "akustische gitarre stimmen online", "gitarren tuner ohne app", ...universalInstrumentKeywords.de, ...brandKeywords],
    "sound-level-meter": ["schallpegelmesser online", "dezibel messen", "lautstärke messen", "dB pegel online", "mikrofon pegel messen", "lärmmesser online", ...brandKeywords],
    metronome: ["metronom online", "kostenloses metronom", "bpm einstellen", "musik tempo", "metronom 4/4", "metronom 6/8", "tap tempo", "rhythmus üben", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm zähler", "bpm berechnen", "schläge pro minute", "song tempo", "durchschnitt bpm", "tap tempo online", "bpm eines liedes finden", ...brandKeywords],
    "ukulele-tuner": ["ukulele stimmgerät online", "ukulele stimmen", "ukulele stimmung", "G C E A", "kostenloser ukulele tuner", "standard ukulele", "mikrofon ukulele tuner", ...brandKeywords]
  },
  en: {
    "bass-tuner": ["online bass tuner", "tune bass", "microphone bass tuner", "standard bass tuning", "E A D G", "free bass tuner", "electric bass tuner", "bass tuner without app", "chromatic bass tuner", ...brandKeywords],
    "chord-transposer": ["chord transposer", "transpose chords", "guitar chords", "change key", "semitone transposer", "chord progression", "music transposer", "transpose song key", ...brandKeywords],
    "guitar-tuner": ["online guitar tuner", "tune guitar", "universal tuner", "microphone guitar tuner", "standard guitar tuning", "E A D G B E", "free guitar tuner", "chromatic guitar tuner", "acoustic guitar tuner online", "guitar tuner no download", "guitar tuner for beginners", ...universalInstrumentKeywords.en, ...brandKeywords],
    "sound-level-meter": ["sound level meter", "online decibel meter", "dB meter", "measure sound level", "microphone sensitivity", "noise meter online", "decibel reader", ...brandKeywords],
    metronome: ["online metronome", "free metronome", "adjustable bpm", "music tempo", "4/4 metronome", "6/8 metronome", "tap tempo", "rhythm practice", "click track online", "metronome for guitar", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm counter", "calculate bpm", "beats per minute", "song tempo", "average bpm", "online tap tempo", "find bpm of a song", ...brandKeywords],
    "ukulele-tuner": ["online ukulele tuner", "tune ukulele", "ukulele tuning", "G C E A", "free ukulele tuner", "standard ukulele tuner", "mic ukulele tuner", ...brandKeywords]
  },
  es: {
    "bass-tuner": ["afinador bajo online", "afinar bajo", "afinador bajo micrófono", "afinación bajo estándar", "Mi La Re Sol", "afinador bajo gratis", "bajo eléctrico", "afinar bajo sin app", ...brandKeywords],
    "chord-transposer": ["transpositor de acordes", "transportar acordes", "acordes guitarra", "cambiar tonalidad", "transponer semitonos", "progresiones de acordes", "transponer música", "cambiar tono canción", ...brandKeywords],
    "guitar-tuner": ["afinador guitarra online", "afinar guitarra", "afinador universal", "afinador guitarra micrófono", "afinación guitarra estándar", "Mi La Re Sol Si Mi", "afinador guitarra gratis", "afinador cromático guitarra", "afinar guitarra acústica online", "afinador sin descargar nada", ...universalInstrumentKeywords.es, ...brandKeywords],
    "sound-level-meter": ["sonómetro online", "medidor de decibelios", "medidor dB online", "medir nivel sonoro", "sensibilidad micrófono", "medidor ruido online", ...brandKeywords],
    metronome: ["metrónomo online", "metrónomo gratis", "bpm ajustable", "tempo musical", "metrónomo 4/4", "metrónomo 6/8", "tap tempo", "practicar ritmo", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "pulsaciones por minuto", "tempo canción", "bpm promedio", "tap tempo online", "encontrar bpm de una canción", ...brandKeywords],
    "ukulele-tuner": ["afinador ukulele online", "afinar ukulele", "afinación ukulele", "Sol Do Mi La", "G C E A", "afinador ukulele gratis", "ukulele estándar", ...brandKeywords]
  },
  fr: {
    "bass-tuner": ["accordeur basse en ligne", "accorder basse", "accordeur basse micro", "accordage basse standard", "Mi La Ré Sol", "accordeur basse gratuit", "basse électrique", "accorder basse sans appli", ...brandKeywords],
    "chord-transposer": ["transposeur d'accords", "transposer accords", "accords guitare", "changer tonalité", "transposer demi-tons", "progression accords", "transposeur musique", "changer la clé d'une chanson", ...brandKeywords],
    "guitar-tuner": ["accordeur guitare en ligne", "accorder guitare", "accordeur universel", "accordeur guitare micro", "accordage guitare standard", "Mi La Ré Sol Si Mi", "accordeur guitare gratuit", "accordeur chromatique guitare", "accorder guitare acoustique en ligne", "accordeur sans télécharger", ...universalInstrumentKeywords.fr, ...brandKeywords],
    "sound-level-meter": ["sonomètre en ligne", "mesurer les décibels", "mesure dB online", "niveau sonore en ligne", "sensibilité micro", "mesure bruit ambiant", ...brandKeywords],
    metronome: ["métronome en ligne", "métronome gratuit", "bpm réglable", "tempo musique", "métronome 4/4", "métronome 6/8", "tap tempo", "travailler le rythme", "click track gratuit", ...brandKeywords],
    "tap-bpm": ["tap bpm", "compteur bpm", "calculer bpm", "battements par minute", "tempo chanson", "bpm moyen", "tap tempo en ligne", "trouver le bpm d'une chanson", ...brandKeywords],
    "ukulele-tuner": ["accordeur ukulélé en ligne", "accorder ukulélé", "accordage ukulélé", "Sol Do Mi La", "G C E A", "accordeur ukulélé gratuit", "ukulélé standard", ...brandKeywords]
  },
  it: {
    "bass-tuner": ["accordatore basso online", "accordare basso", "accordatore basso con microfono", "accordatura basso standard", "Mi La Re Sol", "tuner basso gratis", "basso elettrico", "accordatore basso senza app", ...brandKeywords],
    "chord-transposer": ["traspositore accordi", "trasporre accordi", "accordi chitarra", "cambiare tonalità", "trasporre semitoni", "progressioni accordi", "traspositore musicale", "cambiare tono canzone", ...brandKeywords],
    "guitar-tuner": ["accordatore chitarra online", "accordare chitarra", "accordatore universale", "accordatore con microfono", "accordatura chitarra standard", "Mi La Re Sol Si Mi", "tuner chitarra gratis", "accordatore cromatico chitarra", "accordare chitarra acustica online", "tuner chitarra senza app", ...universalInstrumentKeywords.it, ...brandKeywords],
    "sound-level-meter": ["fonometro online", "misuratore decibel", "misurare dB online", "livello sonoro online", "sensibilità microfono", "misuratore rumore online", ...brandKeywords],
    metronome: ["metronomo online", "metronomo gratis", "bpm regolabile", "tempo musicale", "metronomo 4/4", "metronomo 6/8", "tap tempo", "studiare ritmo", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "conta bpm", "calcolare bpm", "battiti per minuto", "tempo canzone", "bpm medio", "tap tempo online", "trovare bpm di una canzone", ...brandKeywords],
    "ukulele-tuner": ["accordatore ukulele online", "accordare ukulele", "accordatura ukulele", "Sol Do Mi La", "G C E A", "tuner ukulele gratis", "ukulele standard", ...brandKeywords]
  },
  ja: {
    "bass-tuner": ["オンラインベースチューナー", "ベース チューニング", "マイク ベースチューナー", "標準ベースチューニング", "E A D G", "無料ベースチューナー", "エレキベースチューナー", "アプリなし ベースチューナー", ...brandKeywords],
    "chord-transposer": ["コード移調", "コードトランスポーザー", "ギターコード", "キー変更", "半音移調", "コード進行", "音楽トランスポーザー", "曲のキーを変える", ...brandKeywords],
    "guitar-tuner": ["オンラインギターチューナー", "ギター チューニング", "ユニバーサルチューナー", "マイク ギターチューナー", "標準ギターチューニング", "E A D G B E", "無料ギターチューナー", "クロマチックギターチューナー", "アコースティックギターチューナー", "アプリなし ギターチューナー", ...universalInstrumentKeywords.ja, ...brandKeywords],
    "sound-level-meter": ["音量計 オンライン", "デシベル測定器", "dB メーター", "騒音測定オンライン", "マイク感度測定", "騒音計オンライン無料", ...brandKeywords],
    metronome: ["オンラインメトロノーム", "無料メトロノーム", "BPM 調整", "音楽テンポ", "4/4 メトロノーム", "6/8 メトロノーム", "タップテンポ", "リズム練習", "クリックトラック オンライン", ...brandKeywords],
    "tap-bpm": ["タップ BPM", "BPM カウンター", "BPM 計算", "1分間の拍数", "曲のテンポ", "平均 BPM", "オンラインタップテンポ", "曲の BPM を調べる", ...brandKeywords],
    "ukulele-tuner": ["オンラインウクレレチューナー", "ウクレレ チューニング", "ウクレレ調弦", "G C E A", "無料ウクレレチューナー", "標準ウクレレ", "マイクチューナー", ...brandKeywords]
  },
  ko: {
    "bass-tuner": ["온라인 베이스 튜너", "베이스 튜닝", "마이크 베이스 튜너", "표준 베이스 튜닝", "E A D G", "무료 베이스 튜너", "일렉 베이스 튜너", "앱 없이 베이스 튜닝", ...brandKeywords],
    "chord-transposer": ["코드 조옮김", "코드 트랜스포저", "기타 코드", "키 변경", "반음 조옮김", "코드 진행", "음악 조옮김", "노래 키 바꾸기", ...brandKeywords],
    "guitar-tuner": ["온라인 기타 튜너", "기타 튜닝", "유니버설 튜너", "마이크 기타 튜너", "표준 기타 튜닝", "E A D G B E", "무료 기타 튜너", "크로마틱 기타 튜너", "어쿠스틱 기타 튜닝 온라인", "앱 없이 기타 튜닝", ...universalInstrumentKeywords.ko, ...brandKeywords],
    "sound-level-meter": ["온라인 소음 측정기", "데시벨 측정기", "dB 측정 온라인", "소음 레벨 측정", "마이크 감도 측정", "소음계 온라인 무료", ...brandKeywords],
    metronome: ["온라인 메트로놈", "무료 메트로놈", "BPM 조절", "음악 템포", "4/4 메트로놈", "6/8 메트로놈", "탭 템포", "리듬 연습", "클릭 트랙 온라인", ...brandKeywords],
    "tap-bpm": ["탭 BPM", "BPM 카운터", "BPM 계산", "분당 박자", "노래 템포", "평균 BPM", "온라인 탭 템포", "노래 BPM 찾기", ...brandKeywords],
    "ukulele-tuner": ["온라인 우쿨렐레 튜너", "우쿨렐레 튜닝", "우쿨렐레 조율", "G C E A", "무료 우쿨렐레 튜너", "표준 우쿨렐레", "마이크 튜너", ...brandKeywords]
  },
  pt: {
    "bass-tuner": ["afinador baixo online", "afinar baixo", "afinador baixo microfone", "afinação baixo padrão", "Mi Lá Ré Sol", "afinador baixo grátis", "baixo elétrico", "afinar baixo sem app", ...brandKeywords],
    "chord-transposer": ["transpositor de acordes", "transpor acordes", "acordes guitarra", "mudar tonalidade", "transpor semitons", "progressão de acordes", "transpor música", "mudar tom da música", ...brandKeywords],
    "guitar-tuner": ["afinador guitarra online", "afinar guitarra", "afinador universal", "afinador guitarra microfone", "afinação guitarra padrão", "Mi Lá Ré Sol Si Mi", "afinador guitarra grátis", "afinador cromático", "afinar violão online grátis", "afinador sem aplicativo", ...universalInstrumentKeywords.pt, ...brandKeywords],
    "sound-level-meter": ["medidor de nível de som online", "medidor de decibéis", "medir dB online", "nível sonoro", "sensibilidade do microfone", "medidor ruído online", ...brandKeywords],
    metronome: ["metrônomo online", "metrônomo grátis", "bpm ajustável", "tempo musical", "metrônomo 4/4", "metrônomo 6/8", "tap tempo", "praticar ritmo", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "batidas por minuto", "tempo da música", "bpm médio", "tap tempo online", "encontrar bpm de uma música", ...brandKeywords],
    "ukulele-tuner": ["afinador ukulele online", "afinar ukulele", "afinação ukulele", "Sol Dó Mi Lá", "G C E A", "afinador ukulele grátis", "ukulele padrão", ...brandKeywords]
  },
  ru: {
    "bass-tuner": ["бас тюнер онлайн", "настроить бас", "бас тюнер с микрофоном", "стандартный строй баса", "E A D G", "бесплатный бас тюнер", "тюнер для электробаса", "настроить бас без приложения", ...brandKeywords],
    "chord-transposer": ["транспонирование аккордов", "транспозитор аккордов", "гитарные аккорды", "сменить тональность", "транспонировать на полутон", "аккордовая прогрессия", "музыкальный транспозитор", "изменить тональность песни", ...brandKeywords],
    "guitar-tuner": ["гитарный тюнер онлайн", "настроить гитару", "универсальный тюнер", "гитарный тюнер с микрофоном", "стандартный строй гитары", "E A D G B E", "бесплатный тюнер гитары", "хроматический тюнер гитары", "настроить акустическую гитару онлайн", "тюнер без приложения", ...universalInstrumentKeywords.ru, ...brandKeywords],
    "sound-level-meter": ["измеритель уровня звука онлайн", "измеритель децибел", "замер шума онлайн", "уровень дБ", "чувствительность микрофона", "шумомер онлайн бесплатно", ...brandKeywords],
    metronome: ["метроном онлайн", "бесплатный метроном", "регулируемый bpm", "музыкальный темп", "метроном 4/4", "метроном 6/8", "tap tempo", "тренировка ритма", "клик трек онлайн", ...brandKeywords],
    "tap-bpm": ["tap bpm", "счетчик bpm", "рассчитать bpm", "ударов в минуту", "темп песни", "средний bpm", "tap tempo онлайн", "найти bpm песни", ...brandKeywords],
    "ukulele-tuner": ["тюнер укулеле онлайн", "настроить укулеле", "строй укулеле", "G C E A", "бесплатный тюнер укулеле", "стандартная укулеле", "микрофонный тюнер", ...brandKeywords]
  },
  zh: {
    "bass-tuner": ["在线贝斯调音器", "贝斯调音", "麦克风贝斯调音器", "贝斯标准调弦", "E A D G", "免费贝斯调音器", "电贝斯调音", "无需下载贝斯调音器", ...brandKeywords],
    "chord-transposer": ["和弦移调器", "和弦转调", "吉他和弦", "改变调性", "半音移调", "和弦进行", "音乐移调器", "改变歌曲调性", ...brandKeywords],
    "guitar-tuner": ["在线吉他调音器", "吉他调音", "通用调音器", "麦克风吉他调音器", "吉他标准调弦", "E A D G B E", "免费吉他调音器", "色谱吉他调音", "木吉他在线调音", "无需下载吉他调音器", ...universalInstrumentKeywords.zh, ...brandKeywords],
    "sound-level-meter": ["在线声级计", "分贝测量仪", "dB 测量在线", "测量音量", "麦克风灵敏度", "噪音计在线免费", ...brandKeywords],
    metronome: ["在线节拍器", "免费节拍器", "可调 BPM", "音乐速度", "4/4 节拍器", "6/8 节拍器", "Tap Tempo", "节奏练习", "在线点击轨道", ...brandKeywords],
    "tap-bpm": ["Tap BPM", "BPM 计数器", "计算 BPM", "每分钟拍数", "歌曲速度", "平均 BPM", "在线 Tap Tempo", "查找歌曲 BPM", ...brandKeywords],
    "ukulele-tuner": ["在线尤克里里调音器", "尤克里里调音", "尤克里里调弦", "G C E A", "免费尤克里里调音器", "标准尤克里里", "麦克风调音器", ...brandKeywords]
  }
} satisfies Record<BaseLocale, Record<Exclude<ToolSlug, "pitch-generator">, string[]>>;

const pitchGeneratorKeywords = {
  ar: ["مولد نغمات اونلاين", "مولد تردد صوتي", "20 hz", "20000 hz", "اختبار السمع", "نغمة نقية", "موجة جيبية", "مولد صوت اونلاين", ...brandKeywords],
  de: ["pitch generator online", "tongenerator", "frequenz generator", "20 hz", "20000 hz", "sinuston erzeugen", "gehörtest online", "reinen ton generieren", ...brandKeywords],
  en: ["pitch generator", "tone generator", "frequency generator", "20 hz", "20000 hz", "sine wave generator", "ear training tone", "audio frequency generator", "pure tone online", ...brandKeywords],
  es: ["generador de tono online", "generador de frecuencia", "20 hz", "20000 hz", "tono puro online", "prueba auditiva", "generador onda sinusoidal", "generar frecuencia audio", ...brandKeywords],
  fr: ["générateur de son en ligne", "générateur de fréquence", "20 hz", "20000 hz", "son pur en ligne", "test auditif", "générateur sinusoïdal", "générer fréquence audio", ...brandKeywords],
  it: ["generatore di tono online", "generatore frequenza", "20 hz", "20000 hz", "tono puro online", "test udito", "generatore onda sinusoidale", "generare frequenza audio", ...brandKeywords],
  ja: ["ピッチジェネレーター オンライン", "周波数ジェネレーター", "20 hz", "20000 hz", "純音オンライン", "聴覚テスト", "サイン波ジェネレーター", "音声周波数生成", ...brandKeywords],
  ko: ["피치 제너레이터 온라인", "주파수 제너레이터", "20 hz", "20000 hz", "순음 온라인", "청음 연습", "사인파 생성기", "오디오 주파수 생성", ...brandKeywords],
  pt: ["gerador de tom online", "gerador de frequência", "20 hz", "20000 hz", "tom puro online", "teste auditivo", "gerador onda senoidal", "gerar frequência de áudio", ...brandKeywords],
  ru: ["генератор тона онлайн", "генератор частоты", "20 hz", "20000 hz", "чистый тон онлайн", "проверка слуха", "генератор синусоиды", "генерировать звуковую частоту", ...brandKeywords],
  zh: ["音高发生器在线", "频率发生器", "20 hz", "20000 hz", "纯音在线", "听力测试", "正弦波生成器", "生成音频频率", ...brandKeywords]
} satisfies Record<BaseLocale, string[]>;

const extendedToolKeywords: Partial<Record<Locale, Record<ToolSlug, string[]>>> = {
  nl: {
    "guitar-tuner": ["gitaar stemmer online", "gitaar stemmen", "universele stemmer", "gitaarstemmer microfoon", "standaard gitaarstemming", "E A D G B E", "gratis gitaar stemmer", "chromatische gitaarstemmer", "akoestische gitaar stemmen", "stemmer zonder app", ...universalInstrumentKeywords.nl, ...brandKeywords],
    "bass-tuner": ["bas stemmer online", "bas stemmen", "basstemmer microfoon", "standaard basstemming", "E A D G", "gratis bas stemmer", "elektrische bas stemmer", "bas stemmen zonder app", ...brandKeywords],
    "ukulele-tuner": ["ukulele stemmer online", "ukulele stemmen", "ukulele stemming", "G C E A", "gratis ukulele stemmer", "standaard ukulele", "microfoon stemmer", ...brandKeywords],
    metronome: ["metronoom online", "gratis metronoom", "bpm instellen", "muziekstempo", "metronoom 4/4", "metronoom 6/8", "tap tempo", "ritme oefenen", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm teller", "bpm berekenen", "slagen per minuut", "lied tempo", "gemiddeld bpm", "tap tempo online", "bpm van een liedje vinden", ...brandKeywords],
    "chord-transposer": ["akkoorden transponeren", "transponeer akkoorden", "gitaar akkoorden", "toonsoort wijzigen", "halve toon transponeren", "akkoordprogressie", "muziek transponeren", ...brandKeywords],
    "sound-level-meter": ["geluidsniveaumeter online", "decibel meten", "dB meter online", "geluidsniveau meten", "microfoon gevoeligheid", "lawaai meten online", ...brandKeywords],
    "pitch-generator": ["toon generator online", "frequentie generator", "20 hz", "20000 hz", "zuivere toon online", "gehoortest", "sinusgolf generator", "audio frequentie genereren", ...brandKeywords]
  },
  pl: {
    "guitar-tuner": ["stroik do gitary online", "strój gitarę", "uniwersalny stroik", "stroik gitary z mikrofonem", "standardowe strojenie gitary", "E A D G B E", "darmowy stroik gitary", "chromatyczny stroik gitary", "stroik gitary akustycznej online", "stroik bez pobierania", ...universalInstrumentKeywords.pl, ...brandKeywords],
    "bass-tuner": ["stroik do basu online", "strój bas", "stroik basu mikrofon", "standardowe strojenie basu", "E A D G", "darmowy stroik basu", "stroik gitary basowej", "stroik basu bez aplikacji", ...brandKeywords],
    "ukulele-tuner": ["stroik do ukulele online", "strój ukulele", "strojenie ukulele", "G C E A", "darmowy stroik ukulele", "standardowe ukulele", "stroik z mikrofonem", ...brandKeywords],
    metronome: ["metronom online", "darmowy metronom", "ustawianie bpm", "tempo muzyki", "metronom 4/4", "metronom 6/8", "tap tempo", "ćwiczenie rytmu", "klik track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "licznik bpm", "oblicz bpm", "uderzenia na minutę", "tempo piosenki", "średnie bpm", "tap tempo online", "znajdź bpm piosenki", ...brandKeywords],
    "chord-transposer": ["transpozytor akordów", "transponuj akordy", "akordy gitarowe", "zmiana tonacji", "transpozycja o półton", "progresja akordów", "transpozytor muzyczny", ...brandKeywords],
    "sound-level-meter": ["miernik poziomu dźwięku online", "miernik decybeli", "pomiar dB online", "mierzenie hałasu", "czułość mikrofonu", "miernik hałasu online", ...brandKeywords],
    "pitch-generator": ["generator tonów online", "generator częstotliwości", "20 hz", "20000 hz", "czysty ton online", "trening słuchu", "generator sinusoidalny", "generowanie częstotliwości audio", ...brandKeywords]
  },
  tr: {
    "guitar-tuner": ["online gitar akordlayıcı", "gitar akort et", "evrensel akordlayıcı", "mikrofonlu gitar akordlayıcı", "standart gitar akoru", "E A D G B E", "ücretsiz gitar akordlayıcı", "kromatik gitar akordlayıcı", "akustik gitar akort online", "uygulamasız akordlayıcı", ...universalInstrumentKeywords.tr, ...brandKeywords],
    "bass-tuner": ["online bas akordlayıcı", "bas akort et", "mikrofonlu bas akordlayıcı", "standart bas akoru", "E A D G", "ücretsiz bas akordlayıcı", "elektrik bas akordlayıcı", "uygulamasız bas akort", ...brandKeywords],
    "ukulele-tuner": ["online ukulele akordlayıcı", "ukulele akort et", "ukulele akoru", "G C E A", "ücretsiz ukulele akordlayıcı", "standart ukulele", "mikrofonlu akordlayıcı", ...brandKeywords],
    metronome: ["online metronom", "ücretsiz metronom", "bpm ayarı", "müzik temposu", "metronom 4/4", "metronom 6/8", "tap tempo", "ritim çalışması", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm sayacı", "bpm hesapla", "dakikadaki vuruşlar", "şarkı temposu", "ortalama bpm", "tap tempo online", "şarkı bpm bul", ...brandKeywords],
    "chord-transposer": ["akor transpoze", "akorları transpoze et", "gitar akorları", "tonalite değiştir", "yarım ton transpoze", "akor ilerlemesi", "müzik transpoze", ...brandKeywords],
    "sound-level-meter": ["online ses seviyesi ölçer", "desibel ölçüm", "dB ölçer online", "ses seviyesi ölç", "mikrofon hassasiyeti", "gürültü ölçer online", ...brandKeywords],
    "pitch-generator": ["ses üreteci online", "frekans üreteci", "20 hz", "20000 hz", "saf ton online", "işitme testi", "sinüs dalgası üreteci", "ses frekansı üret", ...brandKeywords]
  },
  cs: {
    "guitar-tuner": ["online ladička pro kytaru", "ladění kytary", "univerzální ladička", "ladička kytary s mikrofonem", "standardní ladění kytary", "E A D G B E", "zdarma ladička kytary", "chromatická ladička kytary", "online ladění akustické kytary", "ladička bez stahování", ...universalInstrumentKeywords.cs, ...brandKeywords],
    "bass-tuner": ["online ladička pro baskytaru", "ladění baskytary", "ladička basu s mikrofonem", "standardní ladění basu", "E A D G", "zdarma ladička basu", "ladička elektrické baskytary", "ladička basu bez aplikace", ...brandKeywords],
    "ukulele-tuner": ["online ladička pro ukulele", "ladění ukulele", "ladění G C E A", "G C E A", "zdarma ladička ukulele", "standardní ukulele", "ladička s mikrofonem", ...brandKeywords],
    metronome: ["online metronom", "zdarma metronom", "nastavení bpm", "hudební tempo", "metronom 4/4", "metronom 6/8", "tap tempo", "nácvik rytmu", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "počítadlo bpm", "výpočet bpm", "údery za minutu", "tempo písně", "průměrné bpm", "tap tempo online", "zjistit bpm písně", ...brandKeywords],
    "chord-transposer": ["transpozer akordů", "transponování akordů", "kytarové akordy", "změna tóniny", "transponování o půltón", "akordová progrese", "hudební transpozer", ...brandKeywords],
    "sound-level-meter": ["online měřič hluku", "měření decibelů", "měření dB online", "měření hlasitosti", "citlivost mikrofonu", "měřič hluku online", ...brandKeywords],
    "pitch-generator": ["generátor tónů online", "generátor frekvencí", "20 hz", "20000 hz", "čistý tón online", "trénování sluchu", "generátor sinusu", "generování zvukové frekvence", ...brandKeywords]
  },
  sv: {
    "guitar-tuner": ["gitarrstämmare online", "stäm gitarr", "universell stämmare", "gitarrstämmare med mikrofon", "standard gitarrstämning", "E A D G B E", "gratis gitarrstämmare", "kromatisk gitarrstämmare", "stämma akustisk gitarr online", "stämmare utan app", ...universalInstrumentKeywords.sv, ...brandKeywords],
    "bass-tuner": ["basstämmare online", "stäm bas", "basstämmare mikrofon", "standard basstämning", "E A D G", "gratis basstämmare", "elbasstämmare", "stämma bas utan app", ...brandKeywords],
    "ukulele-tuner": ["ukulelestämmare online", "stäm ukulele", "ukulelestämning", "G C E A", "gratis ukulelestämmare", "standard ukulele", "mikrofonstämmare", ...brandKeywords],
    metronome: ["metronom online", "gratis metronom", "bpm inställning", "musiktempo", "metronom 4/4", "metronom 6/8", "tap tempo", "rytmövning", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm-räknare", "beräkna bpm", "slag per minut", "låttempo", "genomsnittlig bpm", "tap tempo online", "hitta bpm för en låt", ...brandKeywords],
    "chord-transposer": ["ackordstransponering", "transponera ackord", "gitarrackord", "ändra tonart", "halvtonsstransponering", "ackordprogression", "musikstransponering", ...brandKeywords],
    "sound-level-meter": ["ljudnivåmätare online", "mäta decibel", "dB-mätare online", "mäta ljudnivå", "mikrofon känslighet", "bullermätare online", ...brandKeywords],
    "pitch-generator": ["tonsgenerator online", "frekvensgenerator", "20 hz", "20000 hz", "ren ton online", "gehörträning", "sinusvåggenerator", "generera ljudfrekvens", ...brandKeywords]
  },
  "pt-BR": {
    "guitar-tuner": ["afinador de violão online", "afinar violão", "afinador de guitarra online", "afinador universal", "afinador com microfone", "afinação padrão", "E A D G B E", "afinador grátis", "afinador cromático violão", "afinar violão sem aplicativo", ...universalInstrumentKeywords.pt, ...brandKeywords],
    "bass-tuner": ["afinador de baixo online", "afinar contrabaixo", "afinador de baixo microfone", "afinação padrão baixo", "Mi Lá Ré Sol", "afinador baixo grátis", "baixo elétrico", "afinar baixo sem app", ...brandKeywords],
    "ukulele-tuner": ["afinador de ukulele online", "afinar ukulele", "afinação ukulele", "Sol Dó Mi Lá", "G C E A", "afinador ukulele grátis", "ukulele padrão", ...brandKeywords],
    metronome: ["metrônomo online", "metrônomo grátis", "bpm ajustável", "tempo musical", "metrônomo 4/4", "metrônomo 6/8", "tap tempo", "praticar ritmo", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "batidas por minuto", "tempo da música", "bpm médio", "tap tempo online", "encontrar bpm de uma música", ...brandKeywords],
    "chord-transposer": ["transpositor de acordes", "transpor acordes", "acordes de violão", "mudar tom", "transpor semitons", "progressão de acordes", "transpositor musical", ...brandKeywords],
    "sound-level-meter": ["decibelímetro online", "medir decibéis", "medidor dB online", "medir ruído", "sensibilidade microfone", "medidor de som online", ...brandKeywords],
    "pitch-generator": ["gerador de frequência online", "gerador de tom", "20 hz", "20000 hz", "tom puro online", "treinamento auditivo", "gerador onda senoidal", "gerar frequência de áudio", ...brandKeywords]
  },
  hi: {
    "guitar-tuner": ["ऑनलाइन गिटार ट्यूनर", "गिटार ट्यून करें", "यूनिवर्सल ट्यूनर", "माइक्रोफोन गिटार ट्यूनर", "स्टैंडर्ड गिटार ट्यूनिंग", "E A D G B E", "मुफ्त गिटार ट्यूनर", "क्रोमैटिक गिटार ट्यूनर", "अकॉस्टिक गिटार ट्यूनर ऑनलाइन", "ऐप के बिना गिटार ट्यून करें", ...universalInstrumentKeywords.hi, ...brandKeywords],
    "bass-tuner": ["ऑनलाइन बास ट्यूनर", "बास ट्यून करें", "माइक्रोफोन बास ट्यूनर", "स्टैंडर्ड बास ट्यूनिंग", "E A D G", "मुफ्त बास ट्यूनर", "इलेक्ट्रिक बास ट्यूनर", "ऐप के बिना बास ट्यून करें", ...brandKeywords],
    "ukulele-tuner": ["ऑनलाइन यूकुलेले ट्यूनर", "यूकुलेले ट्यून करें", "यूकुलेले ट्यूनिंग", "G C E A", "मुफ्त यूकुलेले ट्यूनर", "स्टैंडर्ड यूकुलेले", "माइक ट्यूनर", ...brandKeywords],
    metronome: ["ऑनलाइन मेट्रोनोम", "मुफ्त मेट्रोनोम", "BPM सेटिंग", "संगीत टेम्पो", "4/4 मेट्रोनोम", "6/8 मेट्रोनोम", "टैप टेम्पो", "ताल अभ्यास", "क्लिक ट्रैक ऑनलाइन", ...brandKeywords],
    "tap-bpm": ["टैप BPM", "BPM काउंटर", "BPM कैलकुलेट करें", "बीट्स प्रति मिनट", "गाने का टेम्पो", "औसत BPM", "टैप टेम्पो ऑनलाइन", "गाने का BPM ढूंढें", ...brandKeywords],
    "chord-transposer": ["कॉर्ड ट्रांसपोज़र", "कॉर्ड ट्रांसपोज़ करें", "गिटार कॉर्ड", "की बदलें", "सेमीटोन ट्रांसपोज़", "कॉर्ड प्रोग्रेशन", "म्यूजिक ट्रांसपोज़र", ...brandKeywords],
    "sound-level-meter": ["साउंड लेवल मीटर ऑनलाइन", "डेसिबल मीटर", "dB मापें ऑनलाइन", "ध्वनि स्तर मापें", "माइक्रोफोन संवेदनशीलता", "शोर मीटर ऑनलाइन", ...brandKeywords],
    "pitch-generator": ["पिच जनरेटर ऑनलाइन", "फ्रीक्वेंसी जनरेटर", "20 hz", "20000 hz", "शुद्ध स्वर ऑनलाइन", "कान प्रशिक्षण", "साइन वेव जनरेटर", "ऑडियो फ्रीक्वेंसी जनरेट करें", ...brandKeywords]
  },
  no: {
    "guitar-tuner": ["gitarstemmer online", "stem gitar", "universell stemmer", "gitarstemmer med mikrofon", "standard gitarstemming", "E A D G B E", "gratis gitarstemmer", "kromatisk gitarstemmer", "stem akustisk gitar online", "stemmer uten app", ...universalInstrumentKeywords.no, ...brandKeywords],
    "bass-tuner": ["bassstemmer online", "stem bass", "bassstemmer mikrofon", "standard bassstemming", "E A D G", "gratis bassstemmer", "elektrisk bass stemmer", "stem bass uten app", ...brandKeywords],
    "ukulele-tuner": ["ukulelestemmer online", "stem ukulele", "ukulelestemmning", "G C E A", "gratis ukulelestemmer", "standard ukulele", "mikrofon stemmer", ...brandKeywords],
    metronome: ["metronom online", "gratis metronom", "bpm innstilling", "musikktempo", "metronom 4/4", "metronom 6/8", "tap tempo", "rytmeøving", "click track online", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm-teller", "beregne bpm", "slag per minutt", "låttempo", "gjennomsnittlig bpm", "tap tempo online", "finne bpm for en sang", ...brandKeywords],
    "chord-transposer": ["akkordtransponering", "transponere akkorder", "gitarakkorder", "endre toneart", "halvtonestransponering", "akkordprogresjon", "musikktransponering", ...brandKeywords],
    "sound-level-meter": ["lydnivåmåler online", "måle desibel", "dB-måler online", "måle lydnivå", "mikrofon følsomhet", "støymåler online", ...brandKeywords],
    "pitch-generator": ["tongenerator online", "frekvensgenerator", "20 hz", "20000 hz", "ren tone online", "gehørtrening", "sinusbølgegenerator", "generere lydfrekvens", ...brandKeywords]
  }
};

export const toolKeywords = Object.fromEntries(
  locales.map((locale) => [
    locale,
    extendedToolKeywords[locale] ?? {
      ...baseToolKeywords[getContentLocale(locale)],
      "pitch-generator": pitchGeneratorKeywords[getContentLocale(locale)]
    }
  ])
) as Record<Locale, Record<ToolSlug, string[]>>;

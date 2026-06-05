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
  zh: ["吉他", "贝斯", "班卓琴", "大提琴", "低音提琴", "竖琴", "古筝", "鲁特琴", "曼陀林", "钢琴", "西塔琴", "尤克里里", "中提琴", "小提琴", "弦乐器"]
} satisfies Record<BaseLocale, string[]>;

const baseToolKeywords = {
  ar: {
    "bass-tuner": ["موالف باس اونلاين", "ضبط الباس", "توليف باس بالميكروفون", "ضبط باس قياسي", "E A D G", "موالف باس مجاني", "باس كهربائي", ...brandKeywords],
    "chord-transposer": ["ناقل الأوتار", "تغيير مقام الأوتار", "أوتار الغيتار", "تغيير الطبقة", "نقل نصف نغمة", "تقدم الأوتار", "نقل موسيقي", ...brandKeywords],
    "guitar-tuner": ["موالف غيتار اونلاين", "ضبط الغيتار", "موالف عالمي", "موالف غيتار بالميكروفون", "ضبط غيتار قياسي", "E A D G B E", "موالف غيتار مجاني", ...universalInstrumentKeywords.ar, ...brandKeywords],
    "sound-level-meter": ["online sound level meter", "decibel meter", "dB meter", "measure sound", "microphone sensitivity", ...brandKeywords],
    metronome: ["مترونوم اونلاين", "مترونوم مجاني", "BPM قابل للتعديل", "إيقاع موسيقي", "مترونوم 4/4", "مترونوم 6/8", "tap tempo", "تدريب الإيقاع", ...brandKeywords],
    "tap-bpm": ["حساب BPM", "عداد BPM", "حساب السرعة", "نبضات في الدقيقة", "سرعة الأغنية", "متوسط BPM", "tap tempo اونلاين", ...brandKeywords],
    "ukulele-tuner": ["موالف أوكوليلي اونلاين", "ضبط الأوكوليلي", "توليف أوكوليلي", "G C E A", "موالف أوكوليلي مجاني", "أوكوليلي قياسي", "موالف بالميكروفون", ...brandKeywords]
  },
  de: {
    "bass-tuner": ["bass stimmgerät online", "bass stimmen", "bass tuner mikrofon", "standard bassstimmung", "E A D G", "kostenloser bass tuner", "e-bass tuner", ...brandKeywords],
    "chord-transposer": ["akkorde transponieren", "akkord transposer", "gitarrenakkorde", "tonart ändern", "halbton transposer", "akkordfolge", "musik transposer", ...brandKeywords],
    "guitar-tuner": ["gitarren stimmgerät online", "gitarre stimmen", "universelles stimmgerät", "gitarren tuner mikrofon", "standard gitarrenstimmung", "E A D G H E", "kostenloser gitarren tuner", ...universalInstrumentKeywords.de, ...brandKeywords],
    "sound-level-meter": ["schallpegelmesser online", "db messen", "lautstaerke messen", "mikrofon pegel", "laerm messen", ...brandKeywords],
    metronome: ["metronom online", "kostenloses metronom", "bpm einstellen", "musik tempo", "metronom 4/4", "metronom 6/8", "tap tempo", "rhythmus üben", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm zähler", "bpm berechnen", "schläge pro minute", "song tempo", "durchschnitt bpm", "tap tempo online", ...brandKeywords],
    "ukulele-tuner": ["ukulele stimmgerät online", "ukulele stimmen", "ukulele stimmung", "G C E A", "kostenloser ukulele tuner", "standard ukulele", "mikrofon ukulele tuner", ...brandKeywords]
  },
  en: {
    "bass-tuner": ["online bass tuner", "tune bass", "microphone bass tuner", "standard bass tuning", "E A D G", "free bass tuner", "electric bass tuner", ...brandKeywords],
    "chord-transposer": ["chord transposer", "transpose chords", "guitar chords", "change key", "semitone transposer", "chord progression", "music transposer", ...brandKeywords],
    "guitar-tuner": ["online guitar tuner", "tune guitar", "universal tuner", "microphone guitar tuner", "standard guitar tuning", "E A D G B E", "free guitar tuner", ...universalInstrumentKeywords.en, ...brandKeywords],
    "sound-level-meter": ["sound level meter", "online decibel meter", "dB meter", "measure sound level", "microphone sensitivity", "noise meter", ...brandKeywords],
    metronome: ["online metronome", "free metronome", "adjustable bpm", "music tempo", "4/4 metronome", "6/8 metronome", "tap tempo", "rhythm practice", ...brandKeywords],
    "tap-bpm": ["tap bpm", "bpm counter", "calculate bpm", "beats per minute", "song tempo", "average bpm", "online tap tempo", ...brandKeywords],
    "ukulele-tuner": ["online ukulele tuner", "tune ukulele", "ukulele tuning", "G C E A", "free ukulele tuner", "standard ukulele tuner", "mic ukulele tuner", ...brandKeywords]
  },
  es: {
    "bass-tuner": ["afinador bajo online", "afinar bajo", "afinador bajo micrófono", "afinación bajo estándar", "Mi La Re Sol", "afinador bajo gratis", "bajo eléctrico", ...brandKeywords],
    "chord-transposer": ["transpositor de acordes", "transportar acordes", "acordes guitarra", "cambiar tonalidad", "transponer semitonos", "progresiones de acordes", "transponer música", ...brandKeywords],
    "guitar-tuner": ["afinador guitarra online", "afinar guitarra", "afinador universal", "afinador guitarra micrófono", "afinación guitarra estándar", "Mi La Re Sol Si Mi", "afinador guitarra gratis", ...universalInstrumentKeywords.es, ...brandKeywords],
    "sound-level-meter": ["sonometro online", "medidor de decibelios", "medidor dB", "medir ruido", "sensibilidad microfono", ...brandKeywords],
    metronome: ["metrónomo online", "metrónomo gratis", "bpm ajustable", "tempo musical", "metrónomo 4/4", "metrónomo 6/8", "tap tempo", "practicar ritmo", ...brandKeywords],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "pulsaciones por minuto", "tempo canción", "bpm promedio", "tap tempo online", ...brandKeywords],
    "ukulele-tuner": ["afinador ukulele online", "afinar ukulele", "afinación ukulele", "Sol Do Mi La", "G C E A", "afinador ukulele gratis", "ukulele estándar", ...brandKeywords]
  },
  fr: {
    "bass-tuner": ["accordeur basse en ligne", "accorder basse", "accordeur basse micro", "accordage basse standard", "Mi La Ré Sol", "accordeur basse gratuit", "basse électrique", ...brandKeywords],
    "chord-transposer": ["transposeur d'accords", "transposer accords", "accords guitare", "changer tonalité", "transposer demi-tons", "progression accords", "transposeur musique", ...brandKeywords],
    "guitar-tuner": ["accordeur guitare en ligne", "accorder guitare", "accordeur universel", "accordeur guitare micro", "accordage guitare standard", "Mi La Ré Sol Si Mi", "accordeur guitare gratuit", ...universalInstrumentKeywords.fr, ...brandKeywords],
    "sound-level-meter": ["sonometre en ligne", "mesurer decibels", "mesure dB", "niveau sonore", "sensibilite micro", ...brandKeywords],
    metronome: ["métronome en ligne", "métronome gratuit", "bpm réglable", "tempo musique", "métronome 4/4", "métronome 6/8", "tap tempo", "travailler le rythme", ...brandKeywords],
    "tap-bpm": ["tap bpm", "compteur bpm", "calculer bpm", "battements par minute", "tempo chanson", "bpm moyen", "tap tempo en ligne", ...brandKeywords],
    "ukulele-tuner": ["accordeur ukulélé en ligne", "accorder ukulélé", "accordage ukulélé", "Sol Do Mi La", "G C E A", "accordeur ukulélé gratuit", "ukulélé standard", ...brandKeywords]
  },
  it: {
    "bass-tuner": ["accordatore basso online", "accordare basso", "accordatore basso con microfono", "accordatura basso standard", "Mi La Re Sol", "tuner basso gratis", "basso elettrico", ...brandKeywords],
    "chord-transposer": ["traspositore accordi", "trasporre accordi", "accordi chitarra", "cambiare tonalità", "trasporre semitoni", "progressioni accordi", "traspositore musicale", ...brandKeywords],
    "guitar-tuner": ["accordatore chitarra online", "accordare chitarra", "accordatore universale", "accordatore con microfono", "accordatura chitarra standard", "Mi La Re Sol Si Mi", "tuner chitarra gratis", ...universalInstrumentKeywords.it, ...brandKeywords],
    "sound-level-meter": ["fonometro online", "misuratore decibel", "misurare db", "livello sonoro", "sensibilita microfono", "rumore ambiente", ...brandKeywords],
    metronome: ["metronomo online", "metronomo gratis", "bpm regolabile", "tempo musicale", "metronomo 4/4", "metronomo 6/8", "tap tempo", "studiare ritmo", ...brandKeywords],
    "tap-bpm": ["tap bpm", "conta bpm", "calcolare bpm", "battiti per minuto", "tempo canzone", "bpm medio", "tap tempo online", ...brandKeywords],
    "ukulele-tuner": ["accordatore ukulele online", "accordare ukulele", "accordatura ukulele", "Sol Do Mi La", "G C E A", "tuner ukulele gratis", "ukulele standard", ...brandKeywords]
  },
  ja: {
    "bass-tuner": ["オンラインベースチューナー", "ベース チューニング", "マイク ベースチューナー", "標準ベースチューニング", "E A D G", "無料ベースチューナー", "エレキベースチューナー", ...brandKeywords],
    "chord-transposer": ["コード移調", "コードトランスポーザー", "ギターコード", "キー変更", "半音移調", "コード進行", "音楽トランスポーザー", ...brandKeywords],
    "guitar-tuner": ["オンラインギターチューナー", "ギター チューニング", "ユニバーサルチューナー", "マイク ギターチューナー", "標準ギターチューニング", "E A D G B E", "無料ギターチューナー", ...universalInstrumentKeywords.ja, ...brandKeywords],
    "sound-level-meter": ["online sound level meter", "decibel meter", "dB meter", "measure sound", "microphone sensitivity", ...brandKeywords],
    metronome: ["オンラインメトロノーム", "無料メトロノーム", "BPM 調整", "音楽テンポ", "4/4 メトロノーム", "6/8 メトロノーム", "タップテンポ", "リズム練習", ...brandKeywords],
    "tap-bpm": ["タップ BPM", "BPM カウンター", "BPM 計算", "1分間の拍数", "曲のテンポ", "平均 BPM", "オンラインタップテンポ", ...brandKeywords],
    "ukulele-tuner": ["オンラインウクレレチューナー", "ウクレレ チューニング", "ウクレレ調弦", "G C E A", "無料ウクレレチューナー", "標準ウクレレ", "マイクチューナー", ...brandKeywords]
  },
  ko: {
    "bass-tuner": ["온라인 베이스 튜너", "베이스 튜닝", "마이크 베이스 튜너", "표준 베이스 튜닝", "E A D G", "무료 베이스 튜너", "일렉 베이스 튜너", ...brandKeywords],
    "chord-transposer": ["코드 조옮김", "코드 트랜스포저", "기타 코드", "키 변경", "반음 조옮김", "코드 진행", "음악 조옮김", ...brandKeywords],
    "guitar-tuner": ["온라인 기타 튜너", "기타 튜닝", "유니버설 튜너", "마이크 기타 튜너", "표준 기타 튜닝", "E A D G B E", "무료 기타 튜너", ...universalInstrumentKeywords.ko, ...brandKeywords],
    "sound-level-meter": ["online sound level meter", "decibel meter", "dB meter", "measure sound", "microphone sensitivity", ...brandKeywords],
    metronome: ["온라인 메트로놈", "무료 메트로놈", "BPM 조절", "음악 템포", "4/4 메트로놈", "6/8 메트로놈", "탭 템포", "리듬 연습", ...brandKeywords],
    "tap-bpm": ["탭 BPM", "BPM 카운터", "BPM 계산", "분당 박자", "노래 템포", "평균 BPM", "온라인 탭 템포", ...brandKeywords],
    "ukulele-tuner": ["온라인 우쿨렐레 튜너", "우쿨렐레 튜닝", "우쿨렐레 조율", "G C E A", "무료 우쿨렐레 튜너", "표준 우쿨렐레", "마이크 튜너", ...brandKeywords]
  },
  pt: {
    "bass-tuner": ["afinador baixo online", "afinar baixo", "afinador baixo microfone", "afinação baixo padrão", "Mi Lá Ré Sol", "afinador baixo grátis", "baixo elétrico", ...brandKeywords],
    "chord-transposer": ["transpositor de acordes", "transpor acordes", "acordes guitarra", "mudar tonalidade", "transpor semitons", "progressão de acordes", "transpor música", ...brandKeywords],
    "guitar-tuner": ["afinador guitarra online", "afinar guitarra", "afinador universal", "afinador guitarra microfone", "afinação guitarra padrão", "Mi Lá Ré Sol Si Mi", "afinador guitarra grátis", ...universalInstrumentKeywords.pt, ...brandKeywords],
    "sound-level-meter": ["medidor de dB online", "medidor de decibeis", "medir ruido", "nivel sonoro", "sensibilidade do microfone", ...brandKeywords],
    metronome: ["metrônomo online", "metrônomo grátis", "bpm ajustável", "tempo musical", "metrônomo 4/4", "metrônomo 6/8", "tap tempo", "praticar ritmo", ...brandKeywords],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "batidas por minuto", "tempo da música", "bpm médio", "tap tempo online", ...brandKeywords],
    "ukulele-tuner": ["afinador ukulele online", "afinar ukulele", "afinação ukulele", "Sol Dó Mi Lá", "G C E A", "afinador ukulele grátis", "ukulele padrão", ...brandKeywords]
  },
  ru: {
    "bass-tuner": ["бас тюнер онлайн", "настроить бас", "бас тюнер с микрофоном", "стандартный строй баса", "E A D G", "бесплатный бас тюнер", "тюнер для электробаса", ...brandKeywords],
    "chord-transposer": ["транспонирование аккордов", "транспозитор аккордов", "гитарные аккорды", "сменить тональность", "транспонировать на полутон", "аккордовая прогрессия", "музыкальный транспозитор", ...brandKeywords],
    "guitar-tuner": ["гитарный тюнер онлайн", "настроить гитару", "универсальный тюнер", "гитарный тюнер с микрофоном", "стандартный строй гитары", "E A D G B E", "бесплатный тюнер гитары", ...universalInstrumentKeywords.ru, ...brandKeywords],
    "sound-level-meter": ["online sound level meter", "decibel meter", "dB meter", "measure sound", "microphone sensitivity", ...brandKeywords],
    metronome: ["метроном онлайн", "бесплатный метроном", "регулируемый bpm", "музыкальный темп", "метроном 4/4", "метроном 6/8", "tap tempo", "тренировка ритма", ...brandKeywords],
    "tap-bpm": ["tap bpm", "счетчик bpm", "рассчитать bpm", "ударов в минуту", "темп песни", "средний bpm", "tap tempo онлайн", ...brandKeywords],
    "ukulele-tuner": ["тюнер укулеле онлайн", "настроить укулеле", "строй укулеле", "G C E A", "бесплатный тюнер укулеле", "стандартная укулеле", "микрофонный тюнер", ...brandKeywords]
  },
  zh: {
    "bass-tuner": ["在线贝斯调音器", "贝斯调音", "麦克风贝斯调音器", "贝斯标准调弦", "E A D G", "免费贝斯调音器", "电贝斯调音", ...brandKeywords],
    "chord-transposer": ["和弦移调器", "和弦转调", "吉他和弦", "改变调性", "半音移调", "和弦进行", "音乐移调器", ...brandKeywords],
    "guitar-tuner": ["在线吉他调音器", "吉他调音", "通用调音器", "麦克风吉他调音器", "吉他标准调弦", "E A D G B E", "免费吉他调音器", ...universalInstrumentKeywords.zh, ...brandKeywords],
    "sound-level-meter": ["online sound level meter", "decibel meter", "dB meter", "measure sound", "microphone sensitivity", ...brandKeywords],
    metronome: ["在线节拍器", "免费节拍器", "可调 BPM", "音乐速度", "4/4 节拍器", "6/8 节拍器", "Tap Tempo", "节奏练习", ...brandKeywords],
    "tap-bpm": ["Tap BPM", "BPM 计数器", "计算 BPM", "每分钟拍数", "歌曲速度", "平均 BPM", "在线 Tap Tempo", ...brandKeywords],
    "ukulele-tuner": ["在线尤克里里调音器", "尤克里里调音", "尤克里里调弦", "G C E A", "免费尤克里里调音器", "标准尤克里里", "麦克风调音器", ...brandKeywords]
  }
} satisfies Record<BaseLocale, Record<Exclude<ToolSlug, "pitch-generator">, string[]>>;

const pitchGeneratorKeywords = {
  ar: ["مولد نغمات", "مولد تردد", "20 hz", "20000 hz", "اختبار السمع", "نغمة نقية", "audio tone generator", ...brandKeywords],
  de: ["pitch generator", "tongenerator", "frequenz generator", "20 hz", "20000 hz", "sinuston", "gehoertest", ...brandKeywords],
  en: ["pitch generator", "tone generator", "frequency generator", "20 hz", "20000 hz", "sine wave generator", "ear training tone", ...brandKeywords],
  es: ["generador de tono", "generador de frecuencia", "20 hz", "20000 hz", "tono puro", "prueba auditiva", "generador senoidal", ...brandKeywords],
  fr: ["generateur de hauteur", "generateur de frequence", "20 hz", "20000 hz", "son pur", "test auditif", "generateur sinus", ...brandKeywords],
  it: ["pitch generator", "generatore di tono", "generatore frequenza", "20 hz", "20000 hz", "tono puro", "test udito", "generatore sinusoide", ...brandKeywords],
  ja: ["ピッチジェネレーター", "周波数ジェネレーター", "20 hz", "20000 hz", "純音", "聴覚テスト", "サイン波", ...brandKeywords],
  ko: ["피치 제너레이터", "주파수 제너레이터", "20 hz", "20000 hz", "순음", "청음 연습", "사인파", ...brandKeywords],
  pt: ["gerador de tom", "gerador de frequencia", "20 hz", "20000 hz", "tom puro", "teste auditivo", "gerador senoidal", ...brandKeywords],
  ru: ["генератор тона", "генератор частоты", "20 hz", "20000 hz", "чистый тон", "проверка слуха", "синусоида", ...brandKeywords],
  zh: ["音高发生器", "频率发生器", "20 hz", "20000 hz", "纯音", "听力测试", "正弦波", ...brandKeywords]
} satisfies Record<BaseLocale, string[]>;

export const toolKeywords = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      ...baseToolKeywords[getContentLocale(locale)],
      "pitch-generator": pitchGeneratorKeywords[getContentLocale(locale)]
    }
  ])
) as Record<Locale, Record<ToolSlug, string[]>>;

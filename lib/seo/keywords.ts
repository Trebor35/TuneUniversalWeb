import type { Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export const homeKeywords = {
  it: ["accordatore online", "metronomo online", "tap bpm", "traspositore accordi", "strumenti musicali gratis", "TuneUniversal"],
  en: ["online tuner", "online metronome", "tap bpm", "chord transposer", "free music tools", "TuneUniversal"],
  fr: ["accordeur en ligne", "metronome en ligne", "tap bpm", "transposeur d'accords", "outils musicaux gratuits", "TuneUniversal"],
  de: ["online stimmgeraet", "online metronom", "tap bpm", "akkorde transponieren", "kostenlose musiktools", "TuneUniversal"],
  es: ["afinador online", "metronomo online", "tap bpm", "transpositor de acordes", "herramientas musicales gratis", "TuneUniversal"],
  pt: ["afinador online", "metronomo online", "tap bpm", "transpositor de acordes", "ferramentas musicais gratis", "TuneUniversal"],
  zh: ["在线调音器", "在线节拍器", "点击 BPM", "和弦移调器", "免费音乐工具", "TuneUniversal"],
  ru: ["онлайн тюнер", "онлайн метроном", "tap bpm", "транспонирование аккордов", "бесплатные музыкальные инструменты", "TuneUniversal"],
  ja: ["オンラインチューナー", "オンラインメトロノーム", "タップ BPM", "コード移調", "無料音楽ツール", "TuneUniversal"],
  ko: ["온라인 튜너", "온라인 메트로놈", "탭 BPM", "코드 조옮김", "무료 음악 도구", "TuneUniversal"],
  ar: ["موالف اونلاين", "مترونوم اونلاين", "حساب BPM", "نقل الاوتار", "ادوات موسيقية مجانية", "TuneUniversal"]
} satisfies Record<Locale, string[]>;

export const toolKeywords = {
  it: {
    "guitar-tuner": ["accordatore chitarra online", "accordare chitarra", "accordatore universale", "accordatore con microfono", "accordatura chitarra standard", "Mi La Re Sol Si Mi", "tuner chitarra gratis", "TuneUniversal"],
    "bass-tuner": ["accordatore basso online", "accordare basso", "accordatore basso con microfono", "accordatura basso standard", "Mi La Re Sol", "tuner basso gratis", "basso elettrico", "TuneUniversal"],
    "ukulele-tuner": ["accordatore ukulele online", "accordare ukulele", "accordatura ukulele", "G C E A", "Sol Do Mi La", "tuner ukulele gratis", "ukulele standard", "TuneUniversal"],
    metronome: ["metronomo online", "metronomo gratis", "bpm regolabile", "tempo musicale", "metronomo 4/4", "metronomo 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "conta bpm", "calcolare bpm", "battiti per minuto", "tempo canzone", "bpm medio", "tap tempo online", "TuneUniversal"],
    "chord-transposer": ["traspositore accordi", "trasporre accordi", "accordi chitarra", "cambiare tonalita", "semitoni accordi", "transpose chords", "progressioni accordi", "TuneUniversal"]
  },
  en: {
    "guitar-tuner": ["online guitar tuner", "tune guitar", "universal tuner", "microphone guitar tuner", "standard guitar tuning", "E A D G B E", "free guitar tuner", "TuneUniversal"],
    "bass-tuner": ["online bass tuner", "tune bass", "microphone bass tuner", "standard bass tuning", "E A D G", "free bass tuner", "electric bass tuner", "TuneUniversal"],
    "ukulele-tuner": ["online ukulele tuner", "tune ukulele", "ukulele tuning", "G C E A", "free ukulele tuner", "standard ukulele tuner", "mic ukulele tuner", "TuneUniversal"],
    metronome: ["online metronome", "free metronome", "adjustable bpm", "music tempo", "4/4 metronome", "6/8 metronome", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "bpm counter", "calculate bpm", "beats per minute", "song tempo", "average bpm", "online tap tempo", "TuneUniversal"],
    "chord-transposer": ["chord transposer", "transpose chords", "guitar chords", "change key", "semitone transposer", "chord progression", "music transposer", "TuneUniversal"]
  },
  fr: {
    "guitar-tuner": ["accordeur guitare en ligne", "accorder guitare", "accordeur universel", "accordeur guitare micro", "accordage guitare standard", "Mi La Re Sol Si Mi", "accordeur guitare gratuit", "TuneUniversal"],
    "bass-tuner": ["accordeur basse en ligne", "accorder basse", "accordeur basse micro", "accordage basse standard", "Mi La Re Sol", "accordeur basse gratuit", "basse electrique", "TuneUniversal"],
    "ukulele-tuner": ["accordeur ukulele en ligne", "accorder ukulele", "accordage ukulele", "Sol Do Mi La", "G C E A", "accordeur ukulele gratuit", "ukulele standard", "TuneUniversal"],
    metronome: ["metronome en ligne", "metronome gratuit", "bpm reglable", "tempo musique", "metronome 4/4", "metronome 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "compteur bpm", "calculer bpm", "battements par minute", "tempo chanson", "bpm moyen", "tap tempo en ligne", "TuneUniversal"],
    "chord-transposer": ["transposeur d'accords", "transposer accords", "accords guitare", "changer tonalite", "demi-tons accords", "progression accords", "transposeur musique", "TuneUniversal"]
  },
  de: {
    "guitar-tuner": ["gitarren stimmgeraet online", "gitarre stimmen", "universelles stimmgeraet", "gitarren tuner mikrofon", "standard gitarrenstimmung", "E A D G H E", "kostenloser gitarren tuner", "TuneUniversal"],
    "bass-tuner": ["bass stimmgeraet online", "bass stimmen", "bass tuner mikrofon", "standard bassstimmung", "E A D G", "kostenloser bass tuner", "e-bass tuner", "TuneUniversal"],
    "ukulele-tuner": ["ukulele stimmgeraet online", "ukulele stimmen", "ukulele stimmung", "G C E A", "kostenloser ukulele tuner", "standard ukulele", "mikrofon ukulele tuner", "TuneUniversal"],
    metronome: ["metronom online", "kostenloses metronom", "bpm einstellen", "musik tempo", "metronom 4/4", "metronom 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "bpm zaehler", "bpm berechnen", "schlaege pro minute", "song tempo", "durchschnitt bpm", "tap tempo online", "TuneUniversal"],
    "chord-transposer": ["akkorde transponieren", "akkord transposer", "gitarrenakkorde", "tonart aendern", "halbtoene akkorde", "akkordfolge", "musik transposer", "TuneUniversal"]
  },
  es: {
    "guitar-tuner": ["afinador guitarra online", "afinar guitarra", "afinador universal", "afinador guitarra microfono", "afinacion guitarra estandar", "Mi La Re Sol Si Mi", "afinador guitarra gratis", "TuneUniversal"],
    "bass-tuner": ["afinador bajo online", "afinar bajo", "afinador bajo microfono", "afinacion bajo estandar", "Mi La Re Sol", "afinador bajo gratis", "bajo electrico", "TuneUniversal"],
    "ukulele-tuner": ["afinador ukulele online", "afinar ukulele", "afinacion ukulele", "Sol Do Mi La", "G C E A", "afinador ukulele gratis", "ukulele estandar", "TuneUniversal"],
    metronome: ["metronomo online", "metronomo gratis", "bpm ajustable", "tempo musical", "metronomo 4/4", "metronomo 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "pulsaciones por minuto", "tempo cancion", "bpm promedio", "tap tempo online", "TuneUniversal"],
    "chord-transposer": ["transpositor de acordes", "transportar acordes", "acordes guitarra", "cambiar tonalidad", "semitonos acordes", "progresiones de acordes", "transponer musica", "TuneUniversal"]
  },
  pt: {
    "guitar-tuner": ["afinador guitarra online", "afinar guitarra", "afinador universal", "afinador guitarra microfone", "afinacao guitarra padrao", "Mi La Re Sol Si Mi", "afinador guitarra gratis", "TuneUniversal"],
    "bass-tuner": ["afinador baixo online", "afinar baixo", "afinador baixo microfone", "afinacao baixo padrao", "Mi La Re Sol", "afinador baixo gratis", "baixo eletrico", "TuneUniversal"],
    "ukulele-tuner": ["afinador ukulele online", "afinar ukulele", "afinacao ukulele", "Sol Do Mi La", "G C E A", "afinador ukulele gratis", "ukulele padrao", "TuneUniversal"],
    metronome: ["metronomo online", "metronomo gratis", "bpm ajustavel", "tempo musical", "metronomo 4/4", "metronomo 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "contador bpm", "calcular bpm", "batidas por minuto", "tempo da musica", "bpm medio", "tap tempo online", "TuneUniversal"],
    "chord-transposer": ["transpositor de acordes", "transpor acordes", "acordes guitarra", "mudar tonalidade", "semitons acordes", "progressao de acordes", "transpor musica", "TuneUniversal"]
  },
  zh: {
    "guitar-tuner": ["在线吉他调音器", "吉他调音", "通用调音器", "麦克风吉他调音器", "标准吉他调弦", "E A D G B E", "免费吉他调音器", "TuneUniversal"],
    "bass-tuner": ["在线贝斯调音器", "贝斯调音", "麦克风贝斯调音器", "标准贝斯调弦", "E A D G", "免费贝斯调音器", "电贝斯调音", "TuneUniversal"],
    "ukulele-tuner": ["在线尤克里里调音器", "尤克里里调音", "尤克里里调弦", "G C E A", "免费尤克里里调音器", "标准尤克里里", "麦克风调音器", "TuneUniversal"],
    metronome: ["在线节拍器", "免费节拍器", "可调 BPM", "音乐速度", "4/4 节拍器", "6/8 节拍器", "点击速度", "TuneUniversal"],
    "tap-bpm": ["点击 BPM", "BPM 计数器", "计算 BPM", "每分钟节拍", "歌曲速度", "平均 BPM", "在线 Tap Tempo", "TuneUniversal"],
    "chord-transposer": ["和弦移调器", "和弦转调", "吉他和弦", "改变调性", "半音移调", "和弦进行", "音乐移调器", "TuneUniversal"]
  },
  ru: {
    "guitar-tuner": ["гитарный тюнер онлайн", "настроить гитару", "универсальный тюнер", "гитарный тюнер с микрофоном", "стандартный строй гитары", "E A D G B E", "бесплатный тюнер гитары", "TuneUniversal"],
    "bass-tuner": ["бас тюнер онлайн", "настроить бас", "бас тюнер с микрофоном", "стандартный строй баса", "E A D G", "бесплатный бас тюнер", "электробас тюнер", "TuneUniversal"],
    "ukulele-tuner": ["тюнер укулеле онлайн", "настроить укулеле", "строй укулеле", "G C E A", "бесплатный тюнер укулеле", "стандартная укулеле", "микрофонный тюнер", "TuneUniversal"],
    metronome: ["метроном онлайн", "бесплатный метроном", "регулируемый bpm", "музыкальный темп", "метроном 4/4", "метроном 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["tap bpm", "счетчик bpm", "рассчитать bpm", "ударов в минуту", "темп песни", "средний bpm", "tap tempo онлайн", "TuneUniversal"],
    "chord-transposer": ["транспонирование аккордов", "транспозитор аккордов", "гитарные аккорды", "сменить тональность", "полутона аккорды", "аккордовая прогрессия", "музыкальный транспозитор", "TuneUniversal"]
  },
  ja: {
    "guitar-tuner": ["オンラインギターチューナー", "ギター チューニング", "ユニバーサルチューナー", "マイク ギターチューナー", "標準ギター チューニング", "E A D G B E", "無料ギターチューナー", "TuneUniversal"],
    "bass-tuner": ["オンラインベースチューナー", "ベース チューニング", "マイク ベースチューナー", "標準ベース チューニング", "E A D G", "無料ベースチューナー", "エレキベース チューナー", "TuneUniversal"],
    "ukulele-tuner": ["オンラインウクレレチューナー", "ウクレレ チューニング", "ウクレレ調弦", "G C E A", "無料ウクレレチューナー", "標準ウクレレ", "マイクチューナー", "TuneUniversal"],
    metronome: ["オンラインメトロノーム", "無料メトロノーム", "BPM 調整", "音楽テンポ", "4/4 メトロノーム", "6/8 メトロノーム", "タップテンポ", "TuneUniversal"],
    "tap-bpm": ["タップ BPM", "BPM カウンター", "BPM 計算", "1分間の拍数", "曲のテンポ", "平均 BPM", "オンラインタップテンポ", "TuneUniversal"],
    "chord-transposer": ["コード移調", "コードトランスポーザー", "ギターコード", "キー変更", "半音移調", "コード進行", "音楽トランスポーザー", "TuneUniversal"]
  },
  ko: {
    "guitar-tuner": ["온라인 기타 튜너", "기타 튜닝", "유니버설 튜너", "마이크 기타 튜너", "표준 기타 튜닝", "E A D G B E", "무료 기타 튜너", "TuneUniversal"],
    "bass-tuner": ["온라인 베이스 튜너", "베이스 튜닝", "마이크 베이스 튜너", "표준 베이스 튜닝", "E A D G", "무료 베이스 튜너", "일렉 베이스 튜너", "TuneUniversal"],
    "ukulele-tuner": ["온라인 우쿨렐레 튜너", "우쿨렐레 튜닝", "우쿨렐레 조율", "G C E A", "무료 우쿨렐레 튜너", "표준 우쿨렐레", "마이크 튜너", "TuneUniversal"],
    metronome: ["온라인 메트로놈", "무료 메트로놈", "BPM 조절", "음악 템포", "4/4 메트로놈", "6/8 메트로놈", "탭 템포", "TuneUniversal"],
    "tap-bpm": ["탭 BPM", "BPM 카운터", "BPM 계산", "분당 박자", "노래 템포", "평균 BPM", "온라인 탭 템포", "TuneUniversal"],
    "chord-transposer": ["코드 조옮김", "코드 트랜스포저", "기타 코드", "키 변경", "반음 조옮김", "코드 진행", "음악 조옮김", "TuneUniversal"]
  },
  ar: {
    "guitar-tuner": ["موالف جيتار اونلاين", "ضبط الجيتار", "موالف عالمي", "موالف جيتار بالميكروفون", "ضبط جيتار قياسي", "E A D G B E", "موالف جيتار مجاني", "TuneUniversal"],
    "bass-tuner": ["موالف باس اونلاين", "ضبط الباس", "موالف باس بالميكروفون", "ضبط باس قياسي", "E A D G", "موالف باس مجاني", "باس كهربائي", "TuneUniversal"],
    "ukulele-tuner": ["موالف اوكوليلي اونلاين", "ضبط الاوكوليلي", "توليف اوكوليلي", "G C E A", "موالف اوكوليلي مجاني", "اوكوليلي قياسي", "موالف بالميكروفون", "TuneUniversal"],
    metronome: ["مترونوم اونلاين", "مترونوم مجاني", "BPM قابل للتعديل", "ايقاع موسيقي", "مترونوم 4/4", "مترونوم 6/8", "tap tempo", "TuneUniversal"],
    "tap-bpm": ["حساب BPM", "عداد BPM", "حساب السرعة", "نبضة في الدقيقة", "سرعة الاغنية", "متوسط BPM", "tap tempo اونلاين", "TuneUniversal"],
    "chord-transposer": ["ناقل الاوتار", "تغيير مقام الاوتار", "اوتار الجيتار", "تغيير الطبقة", "انصاف النغمات", "تقدم الاوتار", "نقل موسيقي", "TuneUniversal"]
  }
} satisfies Record<Locale, Record<ToolSlug, string[]>>;

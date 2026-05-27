import type { Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export const guideSlugs = [
  "how-to-tune-guitar",
  "standard-bass-tuning",
  "how-to-tune-ukulele",
  "how-to-use-metronome",
  "how-to-find-bpm"
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export type GuideContent = {
  description: string;
  intro: string;
  keywords: string[];
  sections: { body: string; title: string }[];
  steps: string[];
  title: string;
  tool: ToolSlug;
};

export const guideIndexContent: Record<Locale, { description: string; title: string }> = {
  ar: {
    title: "أدلة TuneUniversal",
    description: "أدلة سريعة لاستخدام الموالف والميترونوم وحساب BPM بلغتك."
  },
  de: {
    title: "TuneUniversal Anleitungen",
    description: "Kurze Musik-Guides zum Stimmen, Metronom-Üben und BPM-Finden."
  },
  en: {
    title: "TuneUniversal Guides",
    description: "Short music guides for tuning instruments, practicing with a metronome and finding BPM."
  },
  es: {
    title: "Guías de TuneUniversal",
    description: "Guías rápidas para afinar instrumentos, practicar con metrónomo y calcular BPM."
  },
  fr: {
    title: "Guides TuneUniversal",
    description: "Guides rapides pour accorder, travailler au métronome et trouver le BPM."
  },
  it: {
    title: "Guide TuneUniversal",
    description: "Guide rapide per accordare strumenti, studiare con il metronomo e calcolare i BPM."
  },
  ja: {
    title: "TuneUniversal ガイド",
    description: "チューニング、メトロノーム練習、BPM 計測のための短い音楽ガイド。"
  },
  ko: {
    title: "TuneUniversal 가이드",
    description: "튜닝, 메트로놈 연습, BPM 계산을 위한 짧은 음악 가이드입니다."
  },
  pt: {
    title: "Guias TuneUniversal",
    description: "Guias rápidos para afinar instrumentos, praticar com metrônomo e encontrar BPM."
  },
  ru: {
    title: "Руководства TuneUniversal",
    description: "Краткие музыкальные руководства по настройке, метроному и определению BPM."
  },
  zh: {
    title: "TuneUniversal 指南",
    description: "用于乐器调音、节拍器练习和 BPM 计算的简明音乐指南。"
  }
};

const guideContent = {
  it: {
    "how-to-tune-guitar": {
      title: "Come accordare la chitarra online",
      description: "Guida rapida per accordare una chitarra standard con microfono e accordatore online.",
      intro: "L'accordatura standard della chitarra è Mi, La, Re, Sol, Si, Mi. Con TuneUniversal puoi usare il microfono del telefono o del computer per controllare ogni corda in tempo reale.",
      keywords: ["accordare chitarra", "accordatore chitarra online", "accordatura standard chitarra"],
      tool: "guitar-tuner",
      steps: ["Apri l'accordatore chitarra.", "Consenti l'accesso al microfono.", "Suona una corda a vuoto.", "Regola finché l'indicatore è al centro."],
      sections: [
        { title: "Accordatura standard", body: "Le corde dalla più grave alla più acuta sono Mi, La, Re, Sol, Si, Mi. Nel sistema internazionale sono E, A, D, G, B, E." },
        { title: "Consigli pratici", body: "Suona una corda alla volta, tieni lo strumento vicino al microfono e riduci il rumore nella stanza." }
      ]
    },
    "standard-bass-tuning": {
      title: "Accordatura basso standard",
      description: "Come accordare un basso a quattro corde in Mi, La, Re, Sol con un tuner online.",
      intro: "Il basso standard a quattro corde usa Mi, La, Re, Sol. Sono note basse, quindi serve suonare corde pulite e lasciare vibrare il suono.",
      keywords: ["accordare basso", "accordatore basso online", "accordatura basso standard"],
      tool: "bass-tuner",
      steps: ["Seleziona basso nell'accordatore.", "Suona la corda Mi a vuoto.", "Ripeti con La, Re e Sol.", "Controlla che ogni corda resti intonata."],
      sections: [
        { title: "Corde del basso", body: "In notazione internazionale le corde sono E, A, D, G. Parti sempre dalla corda più grave." },
        { title: "Rilevamento migliore", body: "Le basse frequenze richiedono un segnale stabile. Avvicina lo strumento al microfono ed evita colpi troppo forti." }
      ]
    },
    "how-to-tune-ukulele": {
      title: "Come accordare l'ukulele",
      description: "Guida all'accordatura ukulele standard G C E A con accordatore online.",
      intro: "L'ukulele più comune usa l'accordatura Sol, Do, Mi, La. Con il tuner online puoi controllare rapidamente ogni corda.",
      keywords: ["accordare ukulele", "accordatore ukulele online", "accordatura G C E A"],
      tool: "ukulele-tuner",
      steps: ["Apri l'accordatore ukulele.", "Suona la corda Sol.", "Controlla Do, Mi e La.", "Regola fino allo stato intonato."],
      sections: [
        { title: "Accordatura G C E A", body: "Questa accordatura è spesso chiamata high-G ed è comune su soprano, concert e tenor." },
        { title: "Precisione", body: "Pizzica la corda con delicatezza e aspetta un secondo prima di leggere la nota." }
      ]
    },
    "how-to-use-metronome": {
      title: "Come usare il metronomo",
      description: "Guida per studiare con BPM, accenti, metrica e suddivisioni ritmiche.",
      intro: "Il metronomo aiuta a sviluppare tempo stabile. Imposta i BPM, scegli la metrica e ascolta l'accento sul primo battito.",
      keywords: ["come usare metronomo", "metronomo online", "bpm musica"],
      tool: "metronome",
      steps: ["Scegli un BPM lento.", "Imposta 4/4 o la metrica del brano.", "Avvia il click.", "Aumenta gradualmente la velocità."],
      sections: [
        { title: "BPM e metrica", body: "I BPM indicano i battiti per minuto. La metrica, come 3/4 o 4/4, definisce come vengono raggruppati gli accenti." },
        { title: "Suddivisioni", body: "Duine, terzine e quartine aiutano a studiare precisione ritmica oltre al semplice click sul battito." }
      ]
    },
    "how-to-find-bpm": {
      title: "Come calcolare i BPM di una canzone",
      description: "Usa Tap BPM per trovare il tempo medio di un brano battendo il ritmo.",
      intro: "Se non conosci il tempo di una canzone, puoi battere il pulsante Tap a tempo con la musica e ottenere una stima dei BPM.",
      keywords: ["calcolare bpm", "tap bpm", "battiti per minuto"],
      tool: "tap-bpm",
      steps: ["Avvia il brano.", "Premi Tap su ogni battito.", "Continua per almeno 8 battiti.", "Leggi il BPM medio."],
      sections: [
        { title: "Che cosa sono i BPM", body: "BPM significa battiti per minuto. Un valore basso indica un tempo lento, un valore alto indica un tempo veloce." },
        { title: "Stima stabile", body: "Per un risultato migliore batti sempre sullo stesso punto del ritmo, ad esempio sul movimento principale del brano." }
      ]
    }
  },
  en: {
    "how-to-tune-guitar": {
      title: "How to tune a guitar online",
      description: "A quick guide to tuning a standard guitar with a microphone and online tuner.",
      intro: "Standard guitar tuning is E, A, D, G, B, E. TuneUniversal listens through your microphone and shows whether each string is flat, sharp or in tune.",
      keywords: ["tune guitar", "online guitar tuner", "standard guitar tuning"],
      tool: "guitar-tuner",
      steps: ["Open the guitar tuner.", "Allow microphone access.", "Play one open string.", "Adjust until the needle is centered."],
      sections: [
        { title: "Standard tuning", body: "From the lowest string to the highest string, standard guitar tuning is E, A, D, G, B, E." },
        { title: "Better microphone results", body: "Play one string at a time, keep the instrument close to the microphone and reduce room noise while tuning." }
      ]
    },
    "standard-bass-tuning": {
      title: "Standard bass tuning",
      description: "Tune a four-string bass in E, A, D, G with an online bass tuner.",
      intro: "A standard four-string bass uses E, A, D, G. Because the notes are low, a clear and stable sound helps the tuner detect pitch.",
      keywords: ["bass tuning", "online bass tuner", "standard bass tuning"],
      tool: "bass-tuner",
      steps: ["Select bass in the tuner.", "Play the open E string.", "Repeat with A, D and G.", "Check every string again."],
      sections: [
        { title: "Bass strings", body: "Start from the lowest string and move upward: E, A, D, G." },
        { title: "Pitch detection tips", body: "Let the note ring naturally. Avoid hitting the string too hard, because the first transient can be unstable." }
      ]
    },
    "how-to-tune-ukulele": {
      title: "How to tune a ukulele",
      description: "Learn standard G C E A ukulele tuning with an online tuner.",
      intro: "Most soprano, concert and tenor ukuleles use G, C, E, A tuning. The online tuner helps you check each string quickly.",
      keywords: ["tune ukulele", "online ukulele tuner", "G C E A tuning"],
      tool: "ukulele-tuner",
      steps: ["Open the ukulele tuner.", "Play the G string.", "Check C, E and A.", "Tune until the display says in tune."],
      sections: [
        { title: "G C E A tuning", body: "This common tuning is often high-G, where the G string is not the lowest sounding string." },
        { title: "Accuracy", body: "Pick gently and wait for the pitch to settle before turning the tuning peg." }
      ]
    },
    "how-to-use-metronome": {
      title: "How to use a metronome",
      description: "Practice with BPM, accents, meter and rhythmic subdivisions.",
      intro: "A metronome builds steady timing. Set the BPM, choose the meter and follow the accented first beat.",
      keywords: ["how to use metronome", "online metronome", "music bpm"],
      tool: "metronome",
      steps: ["Choose a slow BPM.", "Set the song meter.", "Start the click.", "Increase speed gradually."],
      sections: [
        { title: "BPM and meter", body: "BPM means beats per minute. Meter, such as 3/4 or 4/4, defines how beats are grouped." },
        { title: "Subdivisions", body: "Duplets, triplets and quadruplets help you practice timing inside each beat." }
      ]
    },
    "how-to-find-bpm": {
      title: "How to find the BPM of a song",
      description: "Use Tap BPM to estimate a song tempo by tapping with the beat.",
      intro: "Tap along with the music and TuneUniversal calculates an average BPM from your recent taps.",
      keywords: ["find bpm", "tap bpm", "beats per minute"],
      tool: "tap-bpm",
      steps: ["Start the song.", "Tap on each beat.", "Continue for at least 8 taps.", "Read the average BPM."],
      sections: [
        { title: "What BPM means", body: "BPM stands for beats per minute. Lower numbers feel slower, higher numbers feel faster." },
        { title: "Stable estimates", body: "Tap the same rhythmic point each time, usually the main pulse of the song." }
      ]
    }
  }
} satisfies Record<"it" | "en", Record<GuideSlug, GuideContent>>;

const localizedLabels: Record<Exclude<Locale, "it" | "en">, Record<GuideSlug, Pick<GuideContent, "description" | "intro" | "keywords" | "sections" | "steps" | "title">>> = {
  ar: {
    "how-to-find-bpm": { title: "كيفية معرفة BPM للأغنية", description: "استخدم Tap BPM لتقدير سرعة الأغنية بالنقر مع الإيقاع.", intro: "انقر مع الموسيقى وسيحسب TuneUniversal متوسط BPM من النقرات الأخيرة.", keywords: ["حساب BPM", "Tap BPM", "نبضات في الدقيقة"], steps: ["شغل الأغنية.", "انقر مع كل نبضة.", "استمر لعدة نقرات.", "اقرأ متوسط BPM."], sections: [{ title: "ما هو BPM", body: "BPM يعني عدد النبضات في الدقيقة." }, { title: "قياس ثابت", body: "انقر دائماً على نفس موضع الإيقاع الرئيسي." }] },
    "how-to-tune-guitar": { title: "كيفية ضبط الغيتار عبر الإنترنت", description: "دليل سريع لضبط الغيتار القياسي بالميكروفون وموالف الإنترنت.", intro: "الضبط القياسي للغيتار هو E و A و D و G و B و E. يعرض TuneUniversal إن كان الوتر منخفضاً أو مرتفعاً أو مضبوطاً.", keywords: ["ضبط الغيتار", "موالف غيتار أونلاين", "ضبط غيتار قياسي"], steps: ["افتح موالف الغيتار.", "اسمح بالوصول إلى الميكروفون.", "اعزف وتراً مفتوحاً.", "اضبط حتى يصبح المؤشر في الوسط."], sections: [{ title: "الضبط القياسي", body: "من الوتر الأغلظ إلى الأرفع: E، A، D، G، B، E." }, { title: "نصائح للميكروفون", body: "اعزف وتراً واحداً في كل مرة وقلل الضوضاء حولك." }] },
    "how-to-tune-ukulele": { title: "كيفية ضبط الأوكوليلي", description: "تعلم ضبط G C E A للأوكوليلي باستخدام موالف أونلاين.", intro: "الأوكوليلي الشائع يستخدم G و C و E و A. يساعدك الموالف على فحص كل وتر بسرعة.", keywords: ["ضبط أوكوليلي", "موالف أوكوليلي", "G C E A"], steps: ["افتح موالف الأوكوليلي.", "اعزف وتر G.", "افحص C و E و A.", "اضبط حتى تصبح النغمة صحيحة."], sections: [{ title: "G C E A", body: "ضبط High-G شائع في أوكوليلي السوبرانو والكونسرت والتينور." }, { title: "الدقة", body: "انقر الوتر بلطف وانتظر حتى تستقر النغمة." }] },
    "how-to-use-metronome": { title: "كيفية استخدام المترونوم", description: "تدرب على BPM والميزان والنبرات والتقسيمات الإيقاعية.", intro: "يساعد المترونوم على بناء Tempo ثابت أثناء التدريب.", keywords: ["استخدام مترونوم", "مترونوم أونلاين", "BPM موسيقى"], steps: ["اختر BPM بطيئاً.", "حدد الميزان.", "ابدأ النقر.", "زد السرعة تدريجياً."], sections: [{ title: "BPM والميزان", body: "BPM يعني نبضات في الدقيقة. الميزان ينظم مواضع النبرات." }, { title: "التقسيمات", body: "الثنائيات والثلاثيات والرباعيات تساعد على دقة الإيقاع." }] },
    "standard-bass-tuning": { title: "ضبط الباس القياسي", description: "اضبط باساً بأربعة أوتار على E و A و D و G.", intro: "الباس القياسي يستخدم E و A و D و G. النغمات المنخفضة تحتاج صوتاً واضحاً وثابتاً.", keywords: ["ضبط الباس", "موالف باس أونلاين", "ضبط باس قياسي"], steps: ["اختر الباس.", "اعزف وتر E.", "كرر A و D و G.", "افحص كل الأوتار."], sections: [{ title: "أوتار الباس", body: "ابدأ من الوتر الأغلظ: E، A، D، G." }, { title: "تحسين الكشف", body: "اترك النغمة ترن طبيعياً ولا تضرب الوتر بقوة زائدة." }] }
  },
  de: {
    "how-to-find-bpm": { title: "BPM eines Songs finden", description: "Schätze das Tempo eines Songs, indem du mit Tap BPM zum Beat tippst.", intro: "Tippe zum Beat und TuneUniversal berechnet einen Durchschnitt aus deinen letzten Taps.", keywords: ["bpm finden", "tap bpm", "schläge pro minute"], steps: ["Starte den Song.", "Tippe auf jeden Beat.", "Tippe mindestens 8-mal.", "Lies den Durchschnitts-BPM ab."], sections: [{ title: "Was BPM bedeutet", body: "BPM steht für Schläge pro Minute." }, { title: "Stabile Werte", body: "Tippe immer denselben rhythmischen Punkt, meist den Hauptpuls." }] },
    "how-to-tune-guitar": { title: "Gitarre online stimmen", description: "Kurzanleitung zum Stimmen einer Standardgitarre mit Mikrofon und Online-Tuner.", intro: "Die Standardstimmung ist E, A, D, G, H, E. TuneUniversal zeigt, ob jede Saite zu tief, zu hoch oder richtig gestimmt ist.", keywords: ["gitarre stimmen", "gitarren tuner online", "standard gitarrenstimmung"], steps: ["Öffne den Gitarren-Tuner.", "Erlaube den Mikrofonzugriff.", "Spiele eine leere Saite.", "Stimme, bis die Nadel in der Mitte steht."], sections: [{ title: "Standardstimmung", body: "Von tief nach hoch: E, A, D, G, H, E." }, { title: "Bessere Mikrofon-Ergebnisse", body: "Spiele jeweils nur eine Saite und reduziere Nebengeräusche." }] },
    "how-to-tune-ukulele": { title: "Ukulele stimmen", description: "Lerne die Standardstimmung G C E A mit einem Online-Tuner.", intro: "Viele Ukulelen verwenden G, C, E, A. Der Online-Tuner prüft jede Saite schnell.", keywords: ["ukulele stimmen", "ukulele tuner online", "G C E A stimmung"], steps: ["Öffne den Ukulele-Tuner.", "Spiele die G-Saite.", "Prüfe C, E und A.", "Stimme, bis die Anzeige korrekt ist."], sections: [{ title: "G C E A", body: "Diese Stimmung ist oft High-G und bei Sopran-, Konzert- und Tenor-Ukulelen verbreitet." }, { title: "Genauigkeit", body: "Zupfe sanft und warte, bis sich die Tonhöhe stabilisiert." }] },
    "how-to-use-metronome": { title: "Metronom richtig verwenden", description: "Übe mit BPM, Akzenten, Taktart und rhythmischen Unterteilungen.", intro: "Ein Metronom hilft, ein stabiles Timing zu entwickeln.", keywords: ["metronom verwenden", "metronom online", "musik bpm"], steps: ["Wähle ein langsames BPM.", "Stelle die Taktart ein.", "Starte den Klick.", "Erhöhe das Tempo schrittweise."], sections: [{ title: "BPM und Taktart", body: "BPM bedeutet Schläge pro Minute. Die Taktart gruppiert die Schläge." }, { title: "Unterteilungen", body: "Duolen, Triolen und Quartolen trainieren Genauigkeit innerhalb des Beats." }] },
    "standard-bass-tuning": { title: "Standard Bassstimmung", description: "Stimme einen viersaitigen Bass in E, A, D, G.", intro: "Ein Standardbass nutzt E, A, D, G. Tiefe Noten brauchen ein klares und stabiles Signal.", keywords: ["bass stimmen", "bass tuner online", "standard bassstimmung"], steps: ["Wähle Bass im Tuner.", "Spiele die leere E-Saite.", "Wiederhole A, D und G.", "Prüfe alle Saiten erneut."], sections: [{ title: "Basssaiten", body: "Beginne mit der tiefsten Saite: E, A, D, G." }, { title: "Pitch-Erkennung", body: "Lass die Note natürlich ausklingen und schlage nicht zu hart an." }] }
  },
  es: {
    "how-to-find-bpm": { title: "Cómo calcular los BPM de una canción", description: "Usa Tap BPM para estimar el tempo de una canción tocando el pulso.", intro: "Toca junto con la música y TuneUniversal calcula un BPM medio con tus últimos toques.", keywords: ["calcular bpm", "tap bpm", "pulsaciones por minuto"], steps: ["Reproduce la canción.", "Pulsa Tap en cada beat.", "Continúa al menos 8 pulsos.", "Lee el BPM medio."], sections: [{ title: "Qué es BPM", body: "BPM significa pulsaciones por minuto." }, { title: "Resultado estable", body: "Toca siempre el mismo punto del ritmo, normalmente el pulso principal." }] },
    "how-to-tune-guitar": { title: "Cómo afinar una guitarra online", description: "Guía rápida para afinar una guitarra estándar con micrófono y afinador online.", intro: "La afinación estándar es Mi, La, Re, Sol, Si, Mi. TuneUniversal indica si cada cuerda está baja, alta o afinada.", keywords: ["afinar guitarra", "afinador guitarra online", "afinación guitarra estándar"], steps: ["Abre el afinador de guitarra.", "Permite el acceso al micrófono.", "Toca una cuerda al aire.", "Ajusta hasta que la aguja quede centrada."], sections: [{ title: "Afinación estándar", body: "De grave a agudo: E, A, D, G, B, E." }, { title: "Consejos para el micrófono", body: "Toca una cuerda cada vez y reduce el ruido de la habitación." }] },
    "how-to-tune-ukulele": { title: "Cómo afinar el ukulele", description: "Aprende la afinación estándar G C E A con un afinador online.", intro: "La mayoría de ukuleles usan G, C, E, A. El afinador online comprueba cada cuerda rápidamente.", keywords: ["afinar ukulele", "afinador ukulele online", "G C E A"], steps: ["Abre el afinador de ukulele.", "Toca la cuerda G.", "Comprueba C, E y A.", "Ajusta hasta que esté afinado."], sections: [{ title: "Afinación G C E A", body: "Esta afinación suele ser high-G y es común en soprano, concierto y tenor." }, { title: "Precisión", body: "Pulsa suavemente y espera a que la nota se estabilice." }] },
    "how-to-use-metronome": { title: "Cómo usar un metrónomo", description: "Practica con BPM, acentos, compás y subdivisiones rítmicas.", intro: "El metrónomo ayuda a desarrollar un tempo estable.", keywords: ["usar metrónomo", "metrónomo online", "bpm música"], steps: ["Elige un BPM lento.", "Ajusta el compás.", "Inicia el clic.", "Aumenta la velocidad poco a poco."], sections: [{ title: "BPM y compás", body: "BPM son pulsaciones por minuto. El compás agrupa los acentos." }, { title: "Subdivisiones", body: "Dosillos, tresillos y cuatrillos ayudan a practicar la precisión rítmica." }] },
    "standard-bass-tuning": { title: "Afinación estándar del bajo", description: "Afina un bajo de cuatro cuerdas en E, A, D, G con un afinador online.", intro: "El bajo estándar usa E, A, D, G. Las notas graves necesitan una señal clara y estable.", keywords: ["afinar bajo", "afinador bajo online", "afinación bajo estándar"], steps: ["Selecciona bajo en el afinador.", "Toca la cuerda E al aire.", "Repite con A, D y G.", "Comprueba todas las cuerdas."], sections: [{ title: "Cuerdas del bajo", body: "Empieza por la cuerda más grave: E, A, D, G." }, { title: "Detección de pitch", body: "Deja sonar la nota naturalmente y evita tocar demasiado fuerte." }] }
  },
  fr: {
    "how-to-find-bpm": { title: "Comment trouver le BPM d'une chanson", description: "Utilisez Tap BPM pour estimer le tempo en tapant le rythme.", intro: "Tapez avec la musique et TuneUniversal calcule un BPM moyen à partir de vos derniers taps.", keywords: ["trouver bpm", "tap bpm", "battements par minute"], steps: ["Lancez la chanson.", "Tapez sur chaque battement.", "Continuez au moins 8 taps.", "Lisez le BPM moyen."], sections: [{ title: "Que signifie BPM", body: "BPM signifie battements par minute." }, { title: "Mesure stable", body: "Tapez toujours le même point rythmique, généralement la pulsation principale." }] },
    "how-to-tune-guitar": { title: "Comment accorder une guitare en ligne", description: "Guide rapide pour accorder une guitare standard avec micro et accordeur en ligne.", intro: "L'accordage standard de la guitare est Mi, La, Ré, Sol, Si, Mi. TuneUniversal indique si chaque corde est trop basse, trop haute ou juste.", keywords: ["accorder guitare", "accordeur guitare en ligne", "accordage guitare standard"], steps: ["Ouvrez l'accordeur guitare.", "Autorisez le micro.", "Jouez une corde à vide.", "Ajustez jusqu'à ce que l'aiguille soit centrée."], sections: [{ title: "Accordage standard", body: "De la corde grave à la corde aiguë: E, A, D, G, B, E." }, { title: "Conseils micro", body: "Jouez une corde à la fois et réduisez le bruit autour de vous." }] },
    "how-to-tune-ukulele": { title: "Comment accorder un ukulélé", description: "Apprenez l'accordage standard G C E A avec un accordeur en ligne.", intro: "La plupart des ukulélés utilisent G, C, E, A. L'accordeur vérifie chaque corde rapidement.", keywords: ["accorder ukulélé", "accordeur ukulélé en ligne", "G C E A"], steps: ["Ouvrez l'accordeur ukulélé.", "Jouez la corde G.", "Vérifiez C, E et A.", "Ajustez jusqu'à l'accord juste."], sections: [{ title: "Accordage G C E A", body: "Cet accordage est souvent high-G et courant sur soprano, concert et ténor." }, { title: "Précision", body: "Pincez doucement et attendez que la hauteur se stabilise." }] },
    "how-to-use-metronome": { title: "Comment utiliser un métronome", description: "Travaillez le BPM, les accents, la mesure et les subdivisions.", intro: "Le métronome aide à développer un tempo stable.", keywords: ["utiliser métronome", "métronome en ligne", "bpm musique"], steps: ["Choisissez un BPM lent.", "Sélectionnez la mesure.", "Lancez le clic.", "Augmentez progressivement."], sections: [{ title: "BPM et mesure", body: "Le BPM indique les battements par minute. La mesure organise les accents." }, { title: "Subdivisions", body: "Les duolets, triolets et quartolets améliorent la précision." }] },
    "standard-bass-tuning": { title: "Accordage standard de la basse", description: "Accordez une basse quatre cordes en E, A, D, G avec un accordeur en ligne.", intro: "La basse standard utilise E, A, D, G. Les notes graves demandent un son clair et stable.", keywords: ["accorder basse", "accordeur basse en ligne", "accordage basse standard"], steps: ["Sélectionnez basse dans l'accordeur.", "Jouez la corde E à vide.", "Répétez avec A, D et G.", "Vérifiez toutes les cordes."], sections: [{ title: "Cordes de basse", body: "Commencez par la corde la plus grave: E, A, D, G." }, { title: "Détection", body: "Laissez la note sonner naturellement et évitez de frapper trop fort." }] }
  },
  ja: {
    "how-to-find-bpm": { title: "曲の BPM を調べる方法", description: "Tap BPM を使って、曲に合わせてタップしながらテンポを推定します。", intro: "音楽に合わせてタップすると、TuneUniversal が最近のタップから平均 BPM を計算します。", keywords: ["BPM 調べる", "Tap BPM", "拍数"], steps: ["曲を再生します。", "各拍に合わせてタップします。", "少なくとも 8 回続けます。", "平均 BPM を読みます。"], sections: [{ title: "BPM とは", body: "BPM は 1 分間の拍数を表します。" }, { title: "安定した計測", body: "毎回同じリズム位置、通常は主拍でタップします。" }] },
    "how-to-tune-guitar": { title: "ギターをオンラインでチューニングする方法", description: "マイクとオンラインチューナーで標準ギターを調弦する短いガイドです。", intro: "標準ギター調弦は E、A、D、G、B、E です。TuneUniversal は各弦が低いか高いか、または合っているかを表示します。", keywords: ["ギター チューニング", "オンラインギターチューナー", "標準ギター調弦"], steps: ["ギターチューナーを開きます。", "マイクを許可します。", "開放弦を鳴らします。", "針が中央に来るまで調整します。"], sections: [{ title: "標準調弦", body: "低い弦から高い弦へ E、A、D、G、B、E です。" }, { title: "マイクのコツ", body: "1 本ずつ鳴らし、周囲の雑音を減らします。" }] },
    "how-to-tune-ukulele": { title: "ウクレレのチューニング方法", description: "オンラインチューナーで標準 G C E A チューニングを確認します。", intro: "多くのウクレレは G、C、E、A を使います。オンラインチューナーで各弦をすばやく確認できます。", keywords: ["ウクレレ チューニング", "ウクレレチューナー", "G C E A"], steps: ["ウクレレチューナーを開きます。", "G 弦を鳴らします。", "C、E、A を確認します。", "表示が合うまで調整します。"], sections: [{ title: "G C E A", body: "この調弦は high-G と呼ばれることが多く、ソプラノ、コンサート、テナーで一般的です。" }, { title: "精度", body: "やさしく弾き、音程が安定してから調整します。" }] },
    "how-to-use-metronome": { title: "メトロノームの使い方", description: "BPM、アクセント、拍子、リズム細分を練習します。", intro: "メトロノームは安定したテンポを身につけるのに役立ちます。", keywords: ["メトロノーム 使い方", "オンラインメトロノーム", "BPM 音楽"], steps: ["遅めの BPM を選びます。", "曲の拍子を設定します。", "クリックを開始します。", "少しずつ速くします。"], sections: [{ title: "BPM と拍子", body: "BPM は 1 分間の拍数です。拍子は拍のまとまりを表します。" }, { title: "細分", body: "2 連符、3 連符、4 連符で拍内の精度を鍛えます。" }] },
    "standard-bass-tuning": { title: "標準ベースチューニング", description: "4 弦ベースを E、A、D、G に調弦します。", intro: "標準ベースは E、A、D、G を使います。低音は安定した信号が必要です。", keywords: ["ベース チューニング", "オンラインベースチューナー", "標準ベース調弦"], steps: ["チューナーでベースを選びます。", "開放 E 弦を鳴らします。", "A、D、G を繰り返します。", "すべての弦を再確認します。"], sections: [{ title: "ベース弦", body: "低い弦から E、A、D、G です。" }, { title: "検出のコツ", body: "音を自然に伸ばし、強く弾きすぎないようにします。" }] }
  },
  ko: {
    "how-to-find-bpm": { title: "노래의 BPM 찾는 방법", description: "Tap BPM으로 박자에 맞춰 탭하며 곡의 템포를 추정합니다.", intro: "음악에 맞춰 탭하면 TuneUniversal이 최근 탭을 바탕으로 평균 BPM을 계산합니다.", keywords: ["BPM 찾기", "Tap BPM", "분당 박자"], steps: ["노래를 재생합니다.", "각 박자에 맞춰 탭합니다.", "최소 8번 이상 계속합니다.", "평균 BPM을 확인합니다."], sections: [{ title: "BPM 의미", body: "BPM은 분당 박자 수를 뜻합니다." }, { title: "안정적인 측정", body: "항상 같은 리듬 위치, 보통 주박에 맞춰 탭합니다." }] },
    "how-to-tune-guitar": { title: "온라인으로 기타 튜닝하는 방법", description: "마이크와 온라인 튜너로 표준 기타를 조율하는 빠른 가이드입니다.", intro: "표준 기타 튜닝은 E, A, D, G, B, E입니다. TuneUniversal은 각 줄이 낮은지 높은지 또는 정확한지 보여줍니다.", keywords: ["기타 튜닝", "온라인 기타 튜너", "표준 기타 튜닝"], steps: ["기타 튜너를 엽니다.", "마이크 접근을 허용합니다.", "개방현을 연주합니다.", "바늘이 가운데에 올 때까지 조율합니다."], sections: [{ title: "표준 튜닝", body: "낮은 줄부터 높은 줄까지 E, A, D, G, B, E입니다." }, { title: "마이크 팁", body: "한 줄씩 연주하고 주변 소음을 줄이세요." }] },
    "how-to-tune-ukulele": { title: "우쿨렐레 튜닝 방법", description: "온라인 튜너로 표준 G C E A 튜닝을 확인합니다.", intro: "대부분의 우쿨렐레는 G, C, E, A 튜닝을 사용합니다.", keywords: ["우쿨렐레 튜닝", "온라인 우쿨렐레 튜너", "G C E A"], steps: ["우쿨렐레 튜너를 엽니다.", "G 줄을 연주합니다.", "C, E, A를 확인합니다.", "정확할 때까지 조율합니다."], sections: [{ title: "G C E A", body: "High-G 튜닝은 소프라노, 콘서트, 테너 우쿨렐레에서 흔합니다." }, { title: "정확도", body: "부드럽게 튕기고 음이 안정된 뒤 조율하세요." }] },
    "how-to-use-metronome": { title: "메트로놈 사용 방법", description: "BPM, 악센트, 박자와 리듬 분할을 연습합니다.", intro: "메트로놈은 안정적인 템포를 만드는 데 도움이 됩니다.", keywords: ["메트로놈 사용법", "온라인 메트로놈", "음악 BPM"], steps: ["느린 BPM을 선택합니다.", "곡의 박자를 설정합니다.", "클릭을 시작합니다.", "속도를 천천히 올립니다."], sections: [{ title: "BPM과 박자", body: "BPM은 분당 박자 수입니다. 박자는 악센트의 묶음을 정합니다." }, { title: "리듬 분할", body: "두잇단음, 셋잇단음, 네잇단음으로 박 안의 정확도를 연습합니다." }] },
    "standard-bass-tuning": { title: "표준 베이스 튜닝", description: "4현 베이스를 E, A, D, G로 조율합니다.", intro: "표준 베이스는 E, A, D, G를 사용합니다. 낮은 음은 안정적인 소리가 필요합니다.", keywords: ["베이스 튜닝", "온라인 베이스 튜너", "표준 베이스 튜닝"], steps: ["튜너에서 베이스를 선택합니다.", "개방 E 줄을 연주합니다.", "A, D, G를 반복합니다.", "모든 줄을 다시 확인합니다."], sections: [{ title: "베이스 줄", body: "가장 낮은 줄부터 E, A, D, G입니다." }, { title: "감지 팁", body: "음을 자연스럽게 울리고 너무 세게 치지 마세요." }] }
  },
  pt: {
    "how-to-find-bpm": { title: "Como encontrar o BPM de uma música", description: "Use Tap BPM para estimar o tempo tocando junto com a batida.", intro: "Toque junto com a música e TuneUniversal calcula um BPM médio a partir dos seus toques recentes.", keywords: ["encontrar bpm", "tap bpm", "batidas por minuto"], steps: ["Reproduza a música.", "Toque em cada batida.", "Continue por pelo menos 8 toques.", "Leia o BPM médio."], sections: [{ title: "O que é BPM", body: "BPM significa batidas por minuto." }, { title: "Estimativa estável", body: "Toque sempre no mesmo ponto rítmico, normalmente o pulso principal." }] },
    "how-to-tune-guitar": { title: "Como afinar guitarra online", description: "Guia rápido para afinar guitarra padrão com microfone e afinador online.", intro: "A afinação padrão é Mi, Lá, Ré, Sol, Si, Mi. TuneUniversal mostra se a corda está baixa, alta ou afinada.", keywords: ["afinar guitarra", "afinador guitarra online", "afinação guitarra padrão"], steps: ["Abra o afinador de guitarra.", "Permita acesso ao microfone.", "Toque uma corda solta.", "Ajuste até a agulha ficar no centro."], sections: [{ title: "Afinação padrão", body: "Da corda mais grave para a mais aguda: E, A, D, G, B, E." }, { title: "Dicas de microfone", body: "Toque uma corda por vez e reduza o ruído ambiente." }] },
    "how-to-tune-ukulele": { title: "Como afinar ukulele", description: "Aprenda a afinação padrão G C E A com um afinador online.", intro: "A maioria dos ukuleles usa G, C, E, A. O afinador online ajuda a verificar cada corda rapidamente.", keywords: ["afinar ukulele", "afinador ukulele online", "G C E A"], steps: ["Abra o afinador de ukulele.", "Toque a corda G.", "Confira C, E e A.", "Ajuste até ficar afinado."], sections: [{ title: "G C E A", body: "Essa afinação geralmente é high-G e comum em soprano, concert e tenor." }, { title: "Precisão", body: "Toque suavemente e espere a nota estabilizar." }] },
    "how-to-use-metronome": { title: "Como usar um metrônomo", description: "Pratique com BPM, acentos, compasso e subdivisões rítmicas.", intro: "O metrônomo ajuda a desenvolver tempo estável.", keywords: ["usar metrônomo", "metrônomo online", "bpm música"], steps: ["Escolha um BPM lento.", "Defina o compasso.", "Inicie o clique.", "Aumente a velocidade aos poucos."], sections: [{ title: "BPM e compasso", body: "BPM significa batidas por minuto. O compasso organiza os acentos." }, { title: "Subdivisões", body: "Duínas, tercinas e quartinas ajudam a praticar precisão rítmica." }] },
    "standard-bass-tuning": { title: "Afinação padrão do baixo", description: "Afine um baixo de quatro cordas em E, A, D, G com afinador online.", intro: "O baixo padrão usa E, A, D, G. Frequências graves precisam de som claro e estável.", keywords: ["afinar baixo", "afinador baixo online", "afinação baixo padrão"], steps: ["Selecione baixo no afinador.", "Toque a corda E solta.", "Repita A, D e G.", "Confira todas as cordas."], sections: [{ title: "Cordas do baixo", body: "Comece pela corda mais grave: E, A, D, G." }, { title: "Detecção de pitch", body: "Deixe a nota soar naturalmente e evite tocar forte demais." }] }
  },
  ru: {
    "how-to-find-bpm": { title: "Как узнать BPM песни", description: "Используйте Tap BPM, чтобы определить темп песни по ритму.", intro: "Нажимайте в такт музыке, и TuneUniversal рассчитает средний BPM по последним нажатиям.", keywords: ["узнать bpm", "tap bpm", "ударов в минуту"], steps: ["Включите песню.", "Нажимайте на каждый удар.", "Сделайте минимум 8 нажатий.", "Посмотрите средний BPM."], sections: [{ title: "Что такое BPM", body: "BPM означает количество ударов в минуту." }, { title: "Стабильный результат", body: "Нажимайте всегда в одну и ту же ритмическую точку, обычно на основной пульс." }] },
    "how-to-tune-guitar": { title: "Как настроить гитару онлайн", description: "Краткое руководство по настройке стандартной гитары с микрофоном и онлайн-тюнером.", intro: "Стандартный строй гитары: E, A, D, G, B, E. TuneUniversal показывает, ниже струна, выше или настроена точно.", keywords: ["настроить гитару", "онлайн тюнер гитары", "стандартный строй гитары"], steps: ["Откройте гитарный тюнер.", "Разрешите доступ к микрофону.", "Сыграйте открытую струну.", "Настраивайте, пока стрелка не окажется в центре."], sections: [{ title: "Стандартный строй", body: "От самой низкой струны к высокой: E, A, D, G, B, E." }, { title: "Советы для микрофона", body: "Играйте по одной струне и уменьшите шум в комнате." }] },
    "how-to-tune-ukulele": { title: "Как настроить укулеле", description: "Изучите стандартный строй G C E A с онлайн-тюнером.", intro: "Большинство укулеле используют строй G, C, E, A. Онлайн-тюнер помогает быстро проверить каждую струну.", keywords: ["настроить укулеле", "онлайн тюнер укулеле", "G C E A"], steps: ["Откройте тюнер укулеле.", "Сыграйте струну G.", "Проверьте C, E и A.", "Настраивайте до точного строя."], sections: [{ title: "Строй G C E A", body: "Этот строй часто является high-G и распространен для soprano, concert и tenor." }, { title: "Точность", body: "Щипните струну мягко и подождите, пока высота звука стабилизируется." }] },
    "how-to-use-metronome": { title: "Как пользоваться метрономом", description: "Практикуйте BPM, акценты, размер и ритмические деления.", intro: "Метроном помогает развивать стабильное чувство темпа.", keywords: ["как пользоваться метрономом", "метроном онлайн", "bpm музыка"], steps: ["Выберите медленный BPM.", "Установите размер композиции.", "Запустите клик.", "Постепенно увеличивайте скорость."], sections: [{ title: "BPM и размер", body: "BPM означает удары в минуту. Размер, например 3/4 или 4/4, группирует доли." }, { title: "Деления", body: "Дуоли, триоли и квартоли помогают тренировать точность внутри доли." }] },
    "standard-bass-tuning": { title: "Стандартный строй бас-гитары", description: "Настройте четырехструнный бас в E, A, D, G с онлайн-тюнером.", intro: "Стандартный четырехструнный бас использует E, A, D, G. Низким нотам нужен чистый и стабильный звук.", keywords: ["настроить бас", "онлайн тюнер баса", "стандартный строй баса"], steps: ["Выберите бас в тюнере.", "Сыграйте открытую струну E.", "Повторите A, D и G.", "Проверьте все струны еще раз."], sections: [{ title: "Струны баса", body: "Начинайте с самой низкой струны: E, A, D, G." }, { title: "Распознавание высоты", body: "Дайте ноте звучать естественно и не бейте по струне слишком сильно." }] }
  },
  zh: {
    "how-to-find-bpm": { title: "如何计算歌曲 BPM", description: "使用 Tap BPM 跟随节拍点击，估算歌曲速度。", intro: "跟着音乐点击，TuneUniversal 会根据最近的点击计算平均 BPM。", keywords: ["计算 BPM", "Tap BPM", "每分钟拍数"], steps: ["播放歌曲。", "跟随每一拍点击。", "至少连续点击 8 次。", "查看平均 BPM。"], sections: [{ title: "什么是 BPM", body: "BPM 表示每分钟的拍数。" }, { title: "稳定估算", body: "每次点击同一个节奏位置，通常是主拍。" }] },
    "how-to-tune-guitar": { title: "如何在线调吉他", description: "使用麦克风和在线调音器快速调标准吉他。", intro: "吉他标准调弦为 E、A、D、G、B、E。TuneUniversal 会显示每根弦偏低、偏高还是已调准。", keywords: ["吉他调音", "在线吉他调音器", "吉他标准调弦"], steps: ["打开吉他调音器。", "允许麦克风访问。", "弹奏一根空弦。", "调整到指针居中。"], sections: [{ title: "标准调弦", body: "从低音弦到高音弦依次为 E、A、D、G、B、E。" }, { title: "麦克风技巧", body: "一次只弹一根弦，并尽量减少环境噪音。" }] },
    "how-to-tune-ukulele": { title: "如何给尤克里里调音", description: "使用在线调音器学习 G C E A 标准调弦。", intro: "大多数尤克里里使用 G、C、E、A 调弦。在线调音器可以快速检查每根弦。", keywords: ["尤克里里调音", "在线尤克里里调音器", "G C E A"], steps: ["打开尤克里里调音器。", "弹奏 G 弦。", "检查 C、E 和 A。", "调整到显示已调准。"], sections: [{ title: "G C E A 调弦", body: "这种调弦通常是 high-G，在 soprano、concert 和 tenor 尤克里里中很常见。" }, { title: "准确度", body: "轻轻拨弦，等待音高稳定后再调整。" }] },
    "how-to-use-metronome": { title: "如何使用节拍器", description: "练习 BPM、重音、拍号和节奏细分。", intro: "节拍器可以帮助你建立稳定的节奏感。", keywords: ["如何使用节拍器", "在线节拍器", "音乐 BPM"], steps: ["选择较慢的 BPM。", "设置歌曲拍号。", "启动节拍声。", "逐渐提高速度。"], sections: [{ title: "BPM 与拍号", body: "BPM 表示每分钟拍数。拍号定义节拍如何分组。" }, { title: "节奏细分", body: "二连音、三连音和四连音可以训练每拍内部的准确度。" }] },
    "standard-bass-tuning": { title: "贝斯标准调弦", description: "使用在线贝斯调音器将四弦贝斯调为 E、A、D、G。", intro: "标准四弦贝斯使用 E、A、D、G。低音需要清晰稳定的声音才能更好识别。", keywords: ["贝斯调音", "在线贝斯调音器", "贝斯标准调弦"], steps: ["在调音器中选择贝斯。", "弹奏空弦 E。", "继续检查 A、D 和 G。", "再次确认每根弦。"], sections: [{ title: "贝斯琴弦", body: "从最低音弦开始：E、A、D、G。" }, { title: "音高识别技巧", body: "让音自然延续，避免过重拨弦。" }] }
  }
};

export function isGuideSlug(value: string | undefined): value is GuideSlug {
  return Boolean(value && guideSlugs.includes(value as GuideSlug));
}

export function getGuideContent(locale: Locale, guide: GuideSlug): GuideContent {
  const base = guideContent[locale === "it" || locale === "en" ? locale : "en"][guide];
  const localized = locale === "it" || locale === "en" ? base : localizedLabels[locale][guide];
  return { ...base, ...localized };
}

export function guidesForTool(tool: ToolSlug): GuideSlug[] {
  return guideSlugs.filter((guide) => getGuideContent("en", guide).tool === tool);
}

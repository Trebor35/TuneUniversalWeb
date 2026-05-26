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

const guideContent = {
  it: {
    "how-to-tune-guitar": {
      title: "Come accordare la chitarra online",
      description: "Guida rapida per accordare una chitarra standard con microfono e accordatore online.",
      intro: "L'accordatura standard della chitarra e Mi, La, Re, Sol, Si, Mi. Con TuneUniversal puoi usare il microfono del telefono o del computer per controllare ogni corda in tempo reale.",
      keywords: ["accordare chitarra", "accordatore chitarra online", "accordatura standard chitarra"],
      tool: "guitar-tuner",
      steps: ["Apri l'accordatore chitarra.", "Consenti l'accesso al microfono.", "Suona una corda a vuoto.", "Regola finche l'indicatore e al centro."],
      sections: [
        { title: "Accordatura standard", body: "Le corde dalla piu grave alla piu acuta sono Mi, La, Re, Sol, Si, Mi. Se usi il sistema internazionale sono E, A, D, G, B, E." },
        { title: "Consigli pratici", body: "Suona una corda alla volta, tieni lo strumento vicino al microfono e riduci il rumore nella stanza. Se la lancetta va a sinistra la nota e calante, se va a destra e crescente." }
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
        { title: "Corde del basso", body: "In notazione internazionale le corde sono E, A, D, G. Parti sempre dalla corda piu grave e procedi verso quelle piu acute." },
        { title: "Rilevamento migliore", body: "Le basse frequenze richiedono un segnale stabile. Usa il pickup o avvicina lo strumento al microfono, evitando colpi troppo forti." }
      ]
    },
    "how-to-tune-ukulele": {
      title: "Come accordare l'ukulele",
      description: "Guida all'accordatura ukulele standard G C E A con accordatore online.",
      intro: "L'ukulele piu comune usa l'accordatura Sol, Do, Mi, La. Con il tuner online puoi controllare rapidamente ogni corda.",
      keywords: ["accordare ukulele", "accordatore ukulele online", "accordatura G C E A"],
      tool: "ukulele-tuner",
      steps: ["Apri l'accordatore ukulele.", "Suona la corda Sol.", "Controlla Do, Mi e La.", "Regola fino allo stato intonato."],
      sections: [
        { title: "Accordatura G C E A", body: "Questa accordatura e spesso chiamata high-G. La corda Sol puo risultare piu acuta di quanto ci si aspetti rispetto ad altri strumenti." },
        { title: "Precisione", body: "Pizzica la corda con delicatezza e aspetta un secondo prima di leggere la nota. Le corde nuove possono scordarsi rapidamente." }
      ]
    },
    "how-to-use-metronome": {
      title: "Come usare il metronomo",
      description: "Guida per studiare con BPM, accenti, metrica e suddivisioni ritmiche.",
      intro: "Il metronomo aiuta a sviluppare tempo stabile. Imposta i BPM, scegli la metrica e ascolta l'accento sul primo battito.",
      keywords: ["come usare metronomo", "metronomo online", "bpm musica"],
      tool: "metronome",
      steps: ["Scegli un BPM lento.", "Imposta 4/4 o la metrica del brano.", "Avvia il click.", "Aumenta gradualmente la velocita."],
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
  fr: {
    "how-to-tune-guitar": { title: "Comment accorder une guitare en ligne", description: "Guide rapide pour accorder une guitare standard avec micro et accordeur en ligne.", intro: "L'accordage standard de la guitare est Mi, La, Re, Sol, Si, Mi. TuneUniversal indique si chaque corde est trop basse, trop haute ou juste.", keywords: ["accorder guitare", "accordeur guitare en ligne", "accordage guitare standard"], steps: ["Ouvrez l'accordeur guitare.", "Autorisez le micro.", "Jouez une corde a vide.", "Ajustez jusqu'au centre."], sections: [{ title: "Accordage standard", body: "De la corde grave a la corde aigue: E, A, D, G, B, E." }, { title: "Conseils micro", body: "Jouez une corde a la fois et reduisez le bruit autour de vous." }] },
    "standard-bass-tuning": { title: "Accordage standard de la basse", description: "Accordez une basse quatre cordes en E, A, D, G.", intro: "La basse standard utilise E, A, D, G. Un son stable aide la detection des notes graves.", keywords: ["accordage basse", "accordeur basse en ligne", "basse standard"], steps: ["Selectionnez la basse.", "Jouez la corde E.", "Continuez avec A, D et G.", "Verifiez toutes les cordes."], sections: [{ title: "Cordes", body: "Commencez par la corde la plus grave: E, A, D, G." }, { title: "Precision", body: "Laissez la note sonner naturellement avant de lire l'accordeur." }] },
    "how-to-tune-ukulele": { title: "Comment accorder un ukulele", description: "Accordage standard G C E A avec accordeur en ligne.", intro: "La plupart des ukuleles utilisent G, C, E, A. L'accordeur controle chaque corde rapidement.", keywords: ["accorder ukulele", "accordeur ukulele", "G C E A"], steps: ["Ouvrez l'accordeur ukulele.", "Jouez Sol.", "Controlez Do, Mi et La.", "Ajustez jusqu'a juste."], sections: [{ title: "G C E A", body: "L'accordage high-G est courant sur ukulele soprano, concert et tenor." }, { title: "Stabilite", body: "Pincez doucement la corde et attendez que la note se stabilise." }] },
    "how-to-use-metronome": { title: "Comment utiliser un metronome", description: "Travaillez le BPM, les accents, la mesure et les subdivisions.", intro: "Le metronome aide a garder un tempo stable pendant l'etude.", keywords: ["utiliser metronome", "metronome en ligne", "bpm musique"], steps: ["Choisissez un BPM lent.", "Selectionnez la mesure.", "Lancez le clic.", "Augmentez progressivement."], sections: [{ title: "BPM et mesure", body: "Le BPM indique les battements par minute. La mesure organise les accents." }, { title: "Subdivisions", body: "Les duolets, triolets et quartolets ameliorent la precision." }] },
    "how-to-find-bpm": { title: "Comment trouver le BPM d'une chanson", description: "Estimez le tempo en tapant le rythme avec Tap BPM.", intro: "Tapez avec la musique et l'outil calcule un BPM moyen.", keywords: ["trouver bpm", "tap bpm", "battements par minute"], steps: ["Lancez la chanson.", "Tapez chaque battement.", "Continuez plusieurs temps.", "Lisez le BPM moyen."], sections: [{ title: "BPM", body: "BPM signifie battements par minute." }, { title: "Conseil", body: "Tapez toujours le meme point du rythme pour une mesure stable." }] }
  },
  de: {
    "how-to-tune-guitar": { title: "Gitarre online stimmen", description: "Kurzanleitung zum Stimmen einer Standardgitarre mit Mikrofon.", intro: "Die Standardstimmung ist E, A, D, G, H, E. TuneUniversal zeigt, ob die Saite zu tief, zu hoch oder richtig gestimmt ist.", keywords: ["gitarre stimmen", "gitarren tuner online", "standard gitarrenstimmung"], steps: ["Gitarrenstimmgeraet oeffnen.", "Mikrofon erlauben.", "Leere Saite spielen.", "Bis zur Mitte stimmen."], sections: [{ title: "Standardstimmung", body: "Von tief nach hoch: E, A, D, G, H, E." }, { title: "Mikrofon-Tipps", body: "Spiele jeweils nur eine Saite und reduziere Nebengeraeusche." }] },
    "standard-bass-tuning": { title: "Standard Bassstimmung", description: "Einen viersaitigen Bass in E, A, D, G stimmen.", intro: "Der Standardbass nutzt E, A, D, G. Tiefe Noten brauchen ein klares Signal.", keywords: ["bass stimmen", "bass tuner online", "standard bassstimmung"], steps: ["Bass auswaehlen.", "E-Saite spielen.", "A, D und G wiederholen.", "Alle Saiten pruefen."], sections: [{ title: "Basssaiten", body: "Beginne mit der tiefsten Saite: E, A, D, G." }, { title: "Erkennung", body: "Lass die Note ausklingen und schlage nicht zu hart an." }] },
    "how-to-tune-ukulele": { title: "Ukulele stimmen", description: "Standardstimmung G C E A mit Online-Tuner.", intro: "Viele Ukulelen verwenden G, C, E, A. Der Online-Tuner prueft jede Saite schnell.", keywords: ["ukulele stimmen", "ukulele tuner", "G C E A"], steps: ["Ukulele-Tuner oeffnen.", "G-Saite spielen.", "C, E und A pruefen.", "Bis zur richtigen Stimmung anpassen."], sections: [{ title: "G C E A", body: "High-G ist bei Sopran-, Konzert- und Tenor-Ukulele sehr verbreitet." }, { title: "Genauigkeit", body: "Zupfe sanft und warte, bis sich die Tonhoehe stabilisiert." }] },
    "how-to-use-metronome": { title: "Metronom richtig verwenden", description: "Mit BPM, Akzenten, Taktart und Unterteilungen ueben.", intro: "Ein Metronom hilft, ein stabiles Tempo zu entwickeln.", keywords: ["metronom verwenden", "metronom online", "musik bpm"], steps: ["Langsames BPM waehlen.", "Taktart einstellen.", "Klick starten.", "Tempo langsam erhoehen."], sections: [{ title: "BPM und Taktart", body: "BPM bedeutet Schlaege pro Minute. Die Taktart gruppiert die Schlaege." }, { title: "Unterteilungen", body: "Duolen, Triolen und Quartolen trainieren die Genauigkeit." }] },
    "how-to-find-bpm": { title: "BPM eines Songs finden", description: "Tempo eines Songs durch Tippen mit Tap BPM schaetzen.", intro: "Tippe zum Beat und TuneUniversal berechnet den Durchschnitt.", keywords: ["bpm finden", "tap bpm", "schlaege pro minute"], steps: ["Song starten.", "Auf jeden Beat tippen.", "Mehrere Beats fortsetzen.", "BPM ablesen."], sections: [{ title: "BPM Bedeutung", body: "BPM steht fuer Schlaege pro Minute." }, { title: "Stabile Werte", body: "Tippe immer denselben rhythmischen Punkt." }] }
  },
  es: {
    "how-to-tune-guitar": { title: "Como afinar una guitarra online", description: "Guia rapida para afinar una guitarra estandar con microfono.", intro: "La afinacion estandar es Mi, La, Re, Sol, Si, Mi. TuneUniversal indica si cada cuerda esta baja, alta o afinada.", keywords: ["afinar guitarra", "afinador guitarra online", "afinacion guitarra estandar"], steps: ["Abre el afinador.", "Permite el microfono.", "Toca una cuerda al aire.", "Ajusta hasta el centro."], sections: [{ title: "Afinacion estandar", body: "De grave a agudo: E, A, D, G, B, E." }, { title: "Consejos", body: "Toca una cuerda cada vez y reduce el ruido de la habitacion." }] },
    "standard-bass-tuning": { title: "Afinacion estandar del bajo", description: "Afina un bajo de cuatro cuerdas en E, A, D, G.", intro: "El bajo estandar usa E, A, D, G. Las notas graves necesitan una senal estable.", keywords: ["afinar bajo", "afinador bajo online", "afinacion bajo"], steps: ["Selecciona bajo.", "Toca la cuerda E.", "Repite A, D y G.", "Comprueba todas las cuerdas."], sections: [{ title: "Cuerdas", body: "Empieza por la cuerda mas grave: E, A, D, G." }, { title: "Deteccion", body: "Deja sonar la nota naturalmente y evita golpes fuertes." }] },
    "how-to-tune-ukulele": { title: "Como afinar el ukulele", description: "Afinacion G C E A con afinador online.", intro: "El ukulele comun usa G, C, E, A. El afinador comprueba cada cuerda rapidamente.", keywords: ["afinar ukulele", "afinador ukulele", "G C E A"], steps: ["Abre el afinador.", "Toca G.", "Revisa C, E y A.", "Ajusta hasta afinar."], sections: [{ title: "G C E A", body: "High-G es muy comun en ukuleles soprano, concierto y tenor." }, { title: "Precision", body: "Pulsa suavemente y espera a que la nota se estabilice." }] },
    "how-to-use-metronome": { title: "Como usar un metronomo", description: "Practica BPM, acentos, compas y subdivisiones.", intro: "El metronomo ayuda a mantener un tempo estable.", keywords: ["usar metronomo", "metronomo online", "bpm musica"], steps: ["Elige un BPM lento.", "Ajusta el compas.", "Inicia el clic.", "Sube la velocidad poco a poco."], sections: [{ title: "BPM y compas", body: "BPM son pulsos por minuto. El compas organiza los acentos." }, { title: "Subdivisiones", body: "Dosillos, tresillos y cuatrillos mejoran la precision ritmica." }] },
    "how-to-find-bpm": { title: "Como calcular los BPM de una cancion", description: "Estima el tempo tocando el ritmo con Tap BPM.", intro: "Toca junto a la musica y el contador calcula el BPM medio.", keywords: ["calcular bpm", "tap bpm", "pulsaciones por minuto"], steps: ["Reproduce la cancion.", "Pulsa Tap en cada beat.", "Continua varios pulsos.", "Lee el BPM medio."], sections: [{ title: "Que es BPM", body: "BPM significa pulsaciones por minuto." }, { title: "Resultado estable", body: "Toca siempre el mismo punto del ritmo." }] }
  },
  pt: {
    "how-to-tune-guitar": { title: "Como afinar guitarra online", description: "Guia rapido para afinar guitarra padrao com microfone.", intro: "A afinacao padrao e Mi, La, Re, Sol, Si, Mi. TuneUniversal mostra se a corda esta baixa, alta ou afinada.", keywords: ["afinar guitarra", "afinador guitarra online", "afinacao guitarra"], steps: ["Abra o afinador.", "Permita o microfone.", "Toque uma corda solta.", "Ajuste ate o centro."], sections: [{ title: "Afinacao padrao", body: "De grave para agudo: E, A, D, G, B, E." }, { title: "Dicas", body: "Toque uma corda por vez e reduza o ruido ambiente." }] },
    "standard-bass-tuning": { title: "Afinacao padrao do baixo", description: "Afine baixo de quatro cordas em E, A, D, G.", intro: "O baixo padrao usa E, A, D, G. Frequencias graves precisam de som estavel.", keywords: ["afinar baixo", "afinador baixo online", "afinacao baixo"], steps: ["Selecione baixo.", "Toque a corda E.", "Repita A, D e G.", "Confira todas as cordas."], sections: [{ title: "Cordas", body: "Comece pela corda mais grave: E, A, D, G." }, { title: "Deteccao", body: "Deixe a nota soar e evite atacar forte demais." }] },
    "how-to-tune-ukulele": { title: "Como afinar ukulele", description: "Afinacao G C E A com afinador online.", intro: "O ukulele comum usa G, C, E, A. O afinador verifica cada corda rapidamente.", keywords: ["afinar ukulele", "afinador ukulele", "G C E A"], steps: ["Abra o afinador.", "Toque G.", "Confira C, E e A.", "Ajuste ate afinar."], sections: [{ title: "G C E A", body: "High-G e comum em ukuleles soprano, concerto e tenor." }, { title: "Precisao", body: "Toque suavemente e espere a nota estabilizar." }] },
    "how-to-use-metronome": { title: "Como usar um metronomo", description: "Pratique BPM, acentos, compasso e subdivisoes.", intro: "O metronomo ajuda a manter tempo estavel.", keywords: ["usar metronomo", "metronomo online", "bpm musica"], steps: ["Escolha BPM lento.", "Defina o compasso.", "Inicie o clique.", "Aumente aos poucos."], sections: [{ title: "BPM e compasso", body: "BPM significa batidas por minuto. O compasso organiza os acentos." }, { title: "Subdivisoes", body: "Duinas, tercinas e quartinas treinam a precisao ritmica." }] },
    "how-to-find-bpm": { title: "Como calcular BPM de uma musica", description: "Estime o tempo tocando junto com Tap BPM.", intro: "Toque no ritmo da musica e o contador calcula o BPM medio.", keywords: ["calcular bpm", "tap bpm", "batidas por minuto"], steps: ["Reproduza a musica.", "Toque em cada batida.", "Continue por varios beats.", "Leia o BPM medio."], sections: [{ title: "O que e BPM", body: "BPM significa batidas por minuto." }, { title: "Estimativa estavel", body: "Toque sempre no mesmo ponto do ritmo." }] }
  },
  zh: {
    "how-to-tune-guitar": { title: "如何在线给吉他调音", description: "使用麦克风和在线调音器为标准吉他调音。", intro: "标准吉他调弦为 E、A、D、G、B、E。TuneUniversal 会显示每根弦偏低、偏高或已调准。", keywords: ["吉他调音", "在线吉他调音器", "标准吉他调弦"], steps: ["打开吉他调音器。", "允许麦克风访问。", "弹一根空弦。", "调到指针居中。"], sections: [{ title: "标准调弦", body: "从低音弦到高音弦依次是 E、A、D、G、B、E。" }, { title: "麦克风建议", body: "一次只弹一根弦，靠近麦克风，并尽量减少环境噪声。" }] },
    "standard-bass-tuning": { title: "标准贝斯调弦", description: "用在线贝斯调音器调到 E、A、D、G。", intro: "四弦贝斯标准调弦为 E、A、D、G。低频需要稳定清晰的声音。", keywords: ["贝斯调音", "在线贝斯调音器", "标准贝斯调弦"], steps: ["选择贝斯。", "弹 E 弦。", "继续 A、D、G。", "再次检查所有弦。"], sections: [{ title: "贝斯弦", body: "从最低的弦开始：E、A、D、G。" }, { title: "检测建议", body: "让音自然延长，不要过重拨弦。" }] },
    "how-to-tune-ukulele": { title: "如何给尤克里里调音", description: "使用在线调音器调到 G C E A。", intro: "常见尤克里里使用 G、C、E、A 调弦。在线调音器可以快速检查每根弦。", keywords: ["尤克里里调音", "在线尤克里里调音器", "G C E A"], steps: ["打开尤克里里调音器。", "弹 G 弦。", "检查 C、E、A。", "调到已校准。"], sections: [{ title: "G C E A", body: "High-G 调弦在常见尤克里里中很普遍。" }, { title: "准确度", body: "轻轻拨弦，等待音高稳定后再调整。" }] },
    "how-to-use-metronome": { title: "如何使用节拍器", description: "练习 BPM、重音、拍号和节奏细分。", intro: "节拍器帮助你保持稳定速度。设置 BPM，选择拍号，然后跟随第一拍重音。", keywords: ["使用节拍器", "在线节拍器", "音乐 BPM"], steps: ["选择较慢 BPM。", "设置拍号。", "启动点击声。", "逐步提高速度。"], sections: [{ title: "BPM 和拍号", body: "BPM 表示每分钟节拍数。拍号决定节拍如何分组。" }, { title: "节奏细分", body: "二连音、三连音和四连音有助于练习拍内精度。" }] },
    "how-to-find-bpm": { title: "如何计算歌曲 BPM", description: "用 Tap BPM 跟随节奏点击并估算速度。", intro: "跟随音乐点击，TuneUniversal 会根据最近点击计算平均 BPM。", keywords: ["计算 BPM", "Tap BPM", "每分钟节拍"], steps: ["播放歌曲。", "每拍点击一次。", "至少点击 8 次。", "读取平均 BPM。"], sections: [{ title: "BPM 是什么", body: "BPM 是每分钟节拍数。" }, { title: "稳定估算", body: "每次点击同一个节奏点，通常是主拍。" }] }
  },
  ru: {
    "how-to-tune-guitar": { title: "Как настроить гитару онлайн", description: "Быстрая настройка стандартной гитары с микрофоном.", intro: "Стандартный строй гитары: E, A, D, G, B, E. TuneUniversal показывает, ниже струна, выше или в строю.", keywords: ["настроить гитару", "гитарный тюнер онлайн", "строй гитары"], steps: ["Откройте тюнер.", "Разрешите микрофон.", "Сыграйте открытую струну.", "Настройте до центра."], sections: [{ title: "Стандартный строй", body: "От низкой струны к высокой: E, A, D, G, B, E." }, { title: "Советы", body: "Играйте по одной струне и уменьшите шум вокруг." }] },
    "standard-bass-tuning": { title: "Стандартный строй баса", description: "Настройте четырехструнный бас в E, A, D, G.", intro: "Стандартный бас использует E, A, D, G. Низким нотам нужен устойчивый сигнал.", keywords: ["настроить бас", "бас тюнер онлайн", "строй баса"], steps: ["Выберите бас.", "Сыграйте струну E.", "Повторите A, D и G.", "Проверьте все струны."], sections: [{ title: "Струны баса", body: "Начинайте с самой низкой: E, A, D, G." }, { title: "Распознавание", body: "Дайте ноте звучать естественно и не бейте слишком сильно." }] },
    "how-to-tune-ukulele": { title: "Как настроить укулеле", description: "Настройка G C E A с онлайн-тюнером.", intro: "Обычная укулеле использует G, C, E, A. Тюнер быстро проверяет каждую струну.", keywords: ["настроить укулеле", "тюнер укулеле", "G C E A"], steps: ["Откройте тюнер укулеле.", "Сыграйте G.", "Проверьте C, E и A.", "Настройте до точного звучания."], sections: [{ title: "G C E A", body: "High-G часто используется на сопрано, концертных и тенор укулеле." }, { title: "Точность", body: "Щипайте мягко и ждите стабилизации высоты." }] },
    "how-to-use-metronome": { title: "Как пользоваться метрономом", description: "Практика BPM, акцентов, размера и делений.", intro: "Метроном помогает держать стабильный темп.", keywords: ["пользоваться метрономом", "метроном онлайн", "bpm музыка"], steps: ["Выберите медленный BPM.", "Установите размер.", "Запустите клик.", "Постепенно ускоряйтесь."], sections: [{ title: "BPM и размер", body: "BPM означает ударов в минуту. Размер группирует доли." }, { title: "Деления", body: "Дуоли, триоли и квартоли тренируют точность." }] },
    "how-to-find-bpm": { title: "Как узнать BPM песни", description: "Оцените темп песни с помощью Tap BPM.", intro: "Нажимайте в ритм музыки, и инструмент рассчитает средний BPM.", keywords: ["узнать bpm", "tap bpm", "ударов в минуту"], steps: ["Включите песню.", "Нажимайте на каждый удар.", "Продолжайте несколько долей.", "Посмотрите средний BPM."], sections: [{ title: "Что такое BPM", body: "BPM означает количество ударов в минуту." }, { title: "Стабильность", body: "Нажимайте всегда в одну и ту же точку ритма." }] }
  },
  ja: {
    "how-to-tune-guitar": { title: "ギターをオンラインでチューニングする方法", description: "マイクとオンラインチューナーで標準ギターを調弦します。", intro: "標準ギター調弦は E、A、D、G、B、E です。TuneUniversal は各弦が低いか高いか合っているかを表示します。", keywords: ["ギター チューニング", "オンラインギターチューナー", "標準ギター調弦"], steps: ["ギターチューナーを開く。", "マイクを許可する。", "開放弦を鳴らす。", "中央に合うまで調整する。"], sections: [{ title: "標準調弦", body: "低い弦から高い弦へ E、A、D、G、B、E です。" }, { title: "マイクのコツ", body: "1本ずつ鳴らし、周囲の雑音を減らします。" }] },
    "standard-bass-tuning": { title: "標準ベースチューニング", description: "4弦ベースを E、A、D、G に調弦します。", intro: "標準ベースは E、A、D、G を使います。低音は安定した信号が必要です。", keywords: ["ベース チューニング", "オンラインベースチューナー", "標準ベース調弦"], steps: ["ベースを選ぶ。", "E弦を鳴らす。", "A、D、G を確認する。", "全弦を再確認する。"], sections: [{ title: "ベース弦", body: "低い弦から E、A、D、G です。" }, { title: "検出のコツ", body: "音を自然に伸ばし、強く弾きすぎないようにします。" }] },
    "how-to-tune-ukulele": { title: "ウクレレのチューニング方法", description: "オンラインチューナーで G C E A に調弦します。", intro: "一般的なウクレレは G、C、E、A を使います。", keywords: ["ウクレレ チューニング", "ウクレレチューナー", "G C E A"], steps: ["ウクレレチューナーを開く。", "G弦を鳴らす。", "C、E、A を確認する。", "合うまで調整する。"], sections: [{ title: "G C E A", body: "High-G は多くのウクレレで使われます。" }, { title: "精度", body: "やさしく弾き、音程が安定してから調整します。" }] },
    "how-to-use-metronome": { title: "メトロノームの使い方", description: "BPM、アクセント、拍子、リズム細分を練習します。", intro: "メトロノームは安定したテンポを身につけるのに役立ちます。", keywords: ["メトロノーム 使い方", "オンラインメトロノーム", "BPM 音楽"], steps: ["遅めの BPM を選ぶ。", "拍子を設定する。", "クリックを開始する。", "少しずつ速くする。"], sections: [{ title: "BPM と拍子", body: "BPM は1分間の拍数です。拍子は拍のまとまりを表します。" }, { title: "細分", body: "2連符、3連符、4連符で拍内の精度を鍛えます。" }] },
    "how-to-find-bpm": { title: "曲の BPM を調べる方法", description: "Tap BPM で曲のテンポを推定します。", intro: "音楽に合わせてタップすると平均 BPM を計算します。", keywords: ["BPM 調べる", "Tap BPM", "1分間の拍数"], steps: ["曲を再生する。", "拍に合わせてタップする。", "数拍続ける。", "平均 BPM を読む。"], sections: [{ title: "BPM とは", body: "BPM は1分間の拍数です。" }, { title: "安定した測定", body: "毎回同じリズムの位置でタップします。" }] }
  },
  ko: {
    "how-to-tune-guitar": { title: "온라인으로 기타 튜닝하는 방법", description: "마이크와 온라인 튜너로 표준 기타를 조율합니다.", intro: "표준 기타 튜닝은 E, A, D, G, B, E 입니다. TuneUniversal은 각 줄이 낮은지 높은지 정확한지 보여줍니다.", keywords: ["기타 튜닝", "온라인 기타 튜너", "표준 기타 튜닝"], steps: ["기타 튜너를 엽니다.", "마이크를 허용합니다.", "개방현을 연주합니다.", "중앙에 맞춥니다."], sections: [{ title: "표준 튜닝", body: "낮은 줄부터 E, A, D, G, B, E 입니다." }, { title: "마이크 팁", body: "한 줄씩 연주하고 주변 소음을 줄이세요." }] },
    "standard-bass-tuning": { title: "표준 베이스 튜닝", description: "4현 베이스를 E, A, D, G 로 조율합니다.", intro: "표준 베이스는 E, A, D, G 를 사용합니다. 낮은 음은 안정적인 소리가 필요합니다.", keywords: ["베이스 튜닝", "온라인 베이스 튜너", "표준 베이스 튜닝"], steps: ["베이스를 선택합니다.", "E 줄을 연주합니다.", "A, D, G 를 반복합니다.", "모든 줄을 확인합니다."], sections: [{ title: "베이스 줄", body: "가장 낮은 줄부터 E, A, D, G 입니다." }, { title: "감지 팁", body: "음을 자연스럽게 울리고 너무 세게 치지 마세요." }] },
    "how-to-tune-ukulele": { title: "우쿨렐레 튜닝 방법", description: "온라인 튜너로 G C E A 를 조율합니다.", intro: "일반적인 우쿨렐레는 G, C, E, A 를 사용합니다.", keywords: ["우쿨렐레 튜닝", "우쿨렐레 튜너", "G C E A"], steps: ["우쿨렐레 튜너를 엽니다.", "G 줄을 연주합니다.", "C, E, A 를 확인합니다.", "정확할 때까지 조율합니다."], sections: [{ title: "G C E A", body: "High-G 튜닝은 많은 우쿨렐레에서 사용됩니다." }, { title: "정확도", body: "부드럽게 튕기고 음이 안정된 뒤 조율하세요." }] },
    "how-to-use-metronome": { title: "메트로놈 사용 방법", description: "BPM, 악센트, 박자와 리듬 분할을 연습합니다.", intro: "메트로놈은 안정적인 템포를 만드는 데 도움을 줍니다.", keywords: ["메트로놈 사용법", "온라인 메트로놈", "음악 BPM"], steps: ["느린 BPM 을 선택합니다.", "박자를 설정합니다.", "클릭을 시작합니다.", "천천히 속도를 올립니다."], sections: [{ title: "BPM 과 박자", body: "BPM 은 분당 박자 수입니다. 박자는 강세의 묶음을 정합니다." }, { title: "리듬 분할", body: "둘잇단음, 셋잇단음, 넷잇단음으로 정확도를 연습합니다." }] },
    "how-to-find-bpm": { title: "노래 BPM 찾는 방법", description: "Tap BPM 으로 노래 템포를 추정합니다.", intro: "음악에 맞춰 탭하면 평균 BPM 을 계산합니다.", keywords: ["BPM 찾기", "Tap BPM", "분당 박자"], steps: ["노래를 재생합니다.", "박자마다 탭합니다.", "여러 번 계속합니다.", "평균 BPM 을 확인합니다."], sections: [{ title: "BPM 의미", body: "BPM 은 분당 박자 수입니다." }, { title: "안정적인 측정", body: "항상 같은 리듬 지점에 탭하세요." }] }
  },
  ar: {
    "how-to-tune-guitar": { title: "كيفية ضبط الغيتار عبر الإنترنت", description: "دليل سريع لضبط الغيتار القياسي بالميكروفون.", intro: "الضبط القياسي للغيتار هو E و A و D و G و B و E. يعرض TuneUniversal إن كان الوتر منخفضا أو مرتفعا أو مضبوطا.", keywords: ["ضبط الغيتار", "موالف غيتار اونلاين", "ضبط غيتار قياسي"], steps: ["افتح موالف الغيتار.", "اسمح بالميكروفون.", "اعزف وترا مفتوحا.", "اضبط حتى يصبح المؤشر في الوسط."], sections: [{ title: "الضبط القياسي", body: "من الوتر الأغلظ إلى الأرفع: E، A، D، G، B، E." }, { title: "نصائح الميكروفون", body: "اعزف وترا واحدا في كل مرة وقلل الضوضاء حولك." }] },
    "standard-bass-tuning": { title: "ضبط الباس القياسي", description: "اضبط باسا بأربعة أوتار على E و A و D و G.", intro: "الباس القياسي يستخدم E و A و D و G. النغمات المنخفضة تحتاج صوتا واضحا وثابتا.", keywords: ["ضبط الباس", "موالف باس اونلاين", "ضبط باس قياسي"], steps: ["اختر الباس.", "اعزف وتر E.", "كرر A و D و G.", "افحص كل الأوتار."], sections: [{ title: "أوتار الباس", body: "ابدأ من الوتر الأغلظ: E، A، D، G." }, { title: "تحسين الكشف", body: "اترك النغمة ترن طبيعيا ولا تضرب الوتر بقوة زائدة." }] },
    "how-to-tune-ukulele": { title: "كيفية ضبط الأوكوليلي", description: "اضبط الأوكوليلي على G C E A بموالف اونلاين.", intro: "الأوكوليلي الشائع يستخدم G و C و E و A. يفحص الموالف كل وتر بسرعة.", keywords: ["ضبط اوكوليلي", "موالف اوكوليلي", "G C E A"], steps: ["افتح موالف الأوكوليلي.", "اعزف وتر G.", "افحص C و E و A.", "اضبط حتى يصبح الصوت صحيحا."], sections: [{ title: "G C E A", body: "ضبط High-G شائع في أوكوليلي السوبرانو والكونسرت والتينور." }, { title: "الدقة", body: "انقر الوتر بلطف وانتظر حتى تستقر النغمة." }] },
    "how-to-use-metronome": { title: "كيفية استخدام المترونوم", description: "تدرب على BPM والنبضات والميزان والتقسيمات الإيقاعية.", intro: "يساعد المترونوم على بناء Tempo ثابت أثناء التدريب.", keywords: ["استخدام مترونوم", "مترونوم اونلاين", "BPM موسيقى"], steps: ["اختر BPM بطيئا.", "حدد الميزان.", "ابدأ النقر.", "زد السرعة تدريجيا."], sections: [{ title: "BPM والميزان", body: "BPM يعني نبضات في الدقيقة. الميزان ينظم مواضع النبرات." }, { title: "التقسيمات", body: "الثنائيات والثلاثيات والرباعيات تساعد على دقة الإيقاع." }] },
    "how-to-find-bpm": { title: "كيفية معرفة BPM للأغنية", description: "استخدم Tap BPM لتقدير سرعة الأغنية.", intro: "انقر مع الموسيقى وسيحسب TuneUniversal متوسط BPM.", keywords: ["حساب BPM", "Tap BPM", "نبضات في الدقيقة"], steps: ["شغل الأغنية.", "انقر مع كل نبضة.", "استمر لعدة نقرات.", "اقرأ متوسط BPM."], sections: [{ title: "ما هو BPM", body: "BPM يعني عدد النبضات في الدقيقة." }, { title: "قياس ثابت", body: "انقر دائما على نفس موضع الإيقاع الرئيسي." }] }
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

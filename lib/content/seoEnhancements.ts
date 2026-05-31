import type { Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export type SeoBlock = {
  body: string;
  title: string;
};

export type SeoFaq = {
  answer: string;
  question: string;
};

export type ToolSeoEnhancement = {
  faqs: SeoFaq[];
  sections: SeoBlock[];
};

const toolSeoLabels: Record<
  Locale,
  {
    accuracy: SeoBlock;
    chords: SeoBlock;
    guitarFaqs: SeoFaq[];
    guitarSetup: SeoBlock;
    metronomeFaqs: SeoFaq[];
    metronomePractice: SeoBlock;
    metronomeRoutine: SeoBlock;
    tapFaqs: SeoFaq[];
    tapUse: SeoBlock;
    transposeFaqs: SeoFaq[];
    transposeUse: SeoBlock;
  }
> = {
  ar: {
    accuracy: { title: "قراءة أكثر ثباتا", body: "ضع الآلة قرب الميكروفون، اعزف نغمة واحدة في كل مرة وانتظر جزءا من الثانية حتى تثبت القراءة قبل شد الوتر أو إرخائه." },
    chords: { title: "الأوتار والمقام", body: "استخدم ناقل الأوتار عندما تكون الأغنية عالية أو منخفضة جدا للصوت. انقل كل الأوتار بنفس عدد أنصاف النغمات." },
    guitarFaqs: [
      { question: "لماذا تتحرك الإبرة كثيرا؟", answer: "غالبا بسبب ضجيج الغرفة أو عزف أكثر من وتر. اعزف وترا واحدا ودع الصوت يثبت." },
      { question: "ما أفضل ضبط كبداية؟", answer: "للغيتار ذي ستة أوتار ابدأ بالضبط القياسي E A D G B E، ثم جرب Drop D أو Eb Standard." }
    ],
    guitarSetup: { title: "اختيار الضبط المناسب", body: "ابدأ بالضبط القياسي، ثم استخدم Drop D للروك، Eb Standard لصوت أخفض، وOpen G أو Open D للأوتار المفتوحة." },
    metronomeFaqs: [
      { question: "ما السرعة المناسبة للتمرين؟", answer: "ابدأ بسرعة يمكنك العزف عليها بدون توتر، ثم ارفع BPM تدريجيا." },
      { question: "لماذا أستخدم التقسيمات؟", answer: "التقسيمات تساعدك على سماع الإيقاع داخل النبضة وليس فقط على النقرات الرئيسية." }
    ],
    metronomePractice: { title: "طريقة تمرين فعالة", body: "ابدأ ببطء، شغل النبرة على الضربة الأولى، ثم زد السرعة فقط عندما يبقى الأداء نظيفا لعدة دورات." },
    metronomeRoutine: { title: "روتين تصاعدي", body: "استخدم دورة التدريب للانتقال من سرعة بداية إلى سرعة هدف بخطوات صغيرة بعد عدد محدد من الدورات أو بعد زمن محدد." },
    tapFaqs: [
      { question: "كم نقرة أحتاج؟", answer: "ثماني نقرات أو أكثر تعطي متوسطا أكثر ثباتا." },
      { question: "هل يعمل مع أي موسيقى؟", answer: "نعم، لكنه أدق عندما تنقر على نفس موضع النبضة في كل مرة." }
    ],
    tapUse: { title: "متى تستخدم Tap BPM", body: "استخدمه عندما تسمع أغنية وتريد معرفة سرعتها قبل ضبط الميترونوم أو بدء التمرين." },
    transposeFaqs: [
      { question: "هل تتغير أسماء الأوتار فقط؟", answer: "نعم، يحافظ النقل على علاقة الأوتار ويغير المقام." },
      { question: "هل يدعم الديز والبيمول؟", answer: "يدعم الأوتار الشائعة مع الديز والبيمول والصغير والسابع." }
    ],
    transposeUse: { title: "اختيار مقام أسهل", body: "انقل الأغنية إلى مقام أسهل للغناء أو العزف، ثم اختبر النتيجة مع الآلة." }
  },
  de: {
    accuracy: { title: "Stabilere Erkennung", body: "Halte das Instrument nahe ans Mikrofon, spiele nur eine Saite und warte kurz, bis die Anzeige stabil ist." },
    chords: { title: "Akkorde und Tonart", body: "Nutze den Transposer, wenn ein Song zu hoch oder zu tief liegt. Verschiebe alle Akkorde um dieselbe Zahl an Halbtönen." },
    guitarFaqs: [
      { question: "Warum springt die Nadel?", answer: "Meist wegen Raumgeräuschen oder mehreren klingenden Saiten. Spiele eine Saite und lasse den Ton ausklingen." },
      { question: "Welche Stimmung ist der beste Start?", answer: "Für sechssaitige Gitarre ist E A D G B E der Standard. Danach sind Drop D und Eb Standard gute nächste Schritte." }
    ],
    guitarSetup: { title: "Die passende Stimmung wählen", body: "Standard ist ideal für den Anfang, Drop D für tiefere Riffs, Eb Standard für weichere Spannung und Open G oder Open D für offene Akkorde." },
    metronomeFaqs: [
      { question: "Mit welchem BPM soll ich üben?", answer: "Beginne mit einem Tempo, das du entspannt sauber spielen kannst, und erhöhe es dann langsam." },
      { question: "Wozu sind Unterteilungen gut?", answer: "Sie helfen, den Rhythmus zwischen den Hauptklicks genauer zu fühlen." }
    ],
    metronomePractice: { title: "Effektive Übung", body: "Starte langsam, betone den ersten Schlag und erhöhe das Tempo erst nach mehreren sauberen Durchläufen." },
    metronomeRoutine: { title: "Steigerungsroutine", body: "Nutze den Übungszyklus, um von Start-BPM zu Ziel-BPM in kleinen Schritten nach Takten oder Zeit zu kommen." },
    tapFaqs: [
      { question: "Wie viele Taps reichen?", answer: "Acht oder mehr Taps ergeben meist einen stabileren Durchschnitt." },
      { question: "Funktioniert es mit jedem Song?", answer: "Ja, solange du immer denselben Puls im Rhythmus antippst." }
    ],
    tapUse: { title: "Wann Tap BPM hilft", body: "Nutze Tap BPM, wenn du das Tempo eines Songs schnell abschätzen möchtest." },
    transposeFaqs: [
      { question: "Ändert sich nur der Akkordname?", answer: "Ja, die harmonische Beziehung bleibt erhalten, nur die Tonart ändert sich." },
      { question: "Werden Kreuz und B unterstützt?", answer: "Gängige Akkorde mit Kreuz, B, Moll und Septime werden unterstützt." }
    ],
    transposeUse: { title: "Eine bequemere Tonart finden", body: "Transponiere Songs in eine Lage, die besser zur Stimme oder zum Instrument passt." }
  },
  en: {
    accuracy: { title: "Get a steadier reading", body: "Keep the instrument close to the microphone, play one string at a time and wait a moment for the pitch to settle before adjusting." },
    chords: { title: "Chords and key", body: "Use the chord transposer when a song feels too high or too low. Move every chord by the same number of semitones." },
    guitarFaqs: [
      { question: "Why does the needle jump?", answer: "Room noise or multiple ringing strings can confuse pitch detection. Play one string clearly and let it settle." },
      { question: "Which tuning should beginners use?", answer: "For six-string guitar, start with standard E A D G B E before trying Drop D, Eb Standard or open tunings." }
    ],
    guitarSetup: { title: "Choose the right tuning", body: "Use standard tuning for most songs, Drop D for lower riffs, Eb Standard for lower tension, and Open G or Open D for open chord sounds." },
    metronomeFaqs: [
      { question: "What BPM should I practice at?", answer: "Start at the fastest tempo where you can still play cleanly and relaxed, then increase gradually." },
      { question: "Why use subdivisions?", answer: "Subdivisions help you hear the rhythm inside each beat, not only the main click." }
    ],
    metronomePractice: { title: "A better practice method", body: "Start slow, accent the first beat and only raise the BPM after several clean cycles." },
    metronomeRoutine: { title: "Speed-building routine", body: "Use the practice cycle to move from a start BPM to a target BPM in small steps after a chosen number of bars or seconds." },
    tapFaqs: [
      { question: "How many taps do I need?", answer: "Eight or more taps usually produce a more stable average BPM." },
      { question: "Can I use it with any song?", answer: "Yes, as long as you tap the same pulse point consistently." }
    ],
    tapUse: { title: "When to use Tap BPM", body: "Use Tap BPM when you hear a song and need a quick tempo estimate before setting a metronome." },
    transposeFaqs: [
      { question: "Does transposing only rename chords?", answer: "It changes the key while keeping the harmonic relationship between chords intact." },
      { question: "Does it support sharps and flats?", answer: "It supports common major, minor, sharp, flat and seventh chord names." }
    ],
    transposeUse: { title: "Find an easier key", body: "Transpose a song to fit your voice, avoid difficult chord shapes or match another instrument." }
  },
  es: {
    accuracy: { title: "Lectura más estable", body: "Acerca el instrumento al micrófono, toca una cuerda cada vez y espera un instante antes de ajustar." },
    chords: { title: "Acordes y tonalidad", body: "Usa el transpositor cuando una canción queda demasiado alta o baja. Mueve todos los acordes el mismo número de semitonos." },
    guitarFaqs: [
      { question: "¿Por qué salta la aguja?", answer: "El ruido ambiente o varias cuerdas sonando pueden confundir la detección. Toca una sola cuerda." },
      { question: "¿Qué afinación conviene al empezar?", answer: "En guitarra de seis cuerdas empieza con E A D G B E y luego prueba Drop D o Eb Standard." }
    ],
    guitarSetup: { title: "Elegir la afinación correcta", body: "Usa Standard para la mayoría de canciones, Drop D para riffs graves, Eb Standard para menos tensión y Open G u Open D para acordes abiertos." },
    metronomeFaqs: [
      { question: "¿A qué BPM debo practicar?", answer: "Empieza con un tempo limpio y cómodo, y sube poco a poco." },
      { question: "¿Para qué sirven las subdivisiones?", answer: "Ayudan a sentir el ritmo entre los clics principales." }
    ],
    metronomePractice: { title: "Método de práctica", body: "Empieza lento, acentúa el primer pulso y sube BPM solo después de varios ciclos limpios." },
    metronomeRoutine: { title: "Rutina progresiva", body: "Usa el ciclo de práctica para pasar de BPM inicial a BPM objetivo con pasos pequeños." },
    tapFaqs: [
      { question: "¿Cuántos taps necesito?", answer: "Ocho o más taps suelen dar un promedio más estable." },
      { question: "¿Funciona con cualquier canción?", answer: "Sí, si tocas siempre el mismo punto del pulso." }
    ],
    tapUse: { title: "Cuándo usar Tap BPM", body: "Úsalo para estimar rápido el tempo de una canción antes de estudiar con metrónomo." },
    transposeFaqs: [
      { question: "¿Transportar cambia la canción?", answer: "Cambia la tonalidad, pero mantiene la relación entre acordes." },
      { question: "¿Soporta sostenidos y bemoles?", answer: "Soporta acordes mayores, menores, sostenidos, bemoles y séptimas comunes." }
    ],
    transposeUse: { title: "Encontrar una tonalidad cómoda", body: "Transporta para cantar mejor, evitar posiciones difíciles o tocar con otro instrumento." }
  },
  fr: {
    accuracy: { title: "Lecture plus stable", body: "Gardez l'instrument près du micro, jouez une seule corde et attendez que la hauteur se stabilise." },
    chords: { title: "Accords et tonalité", body: "Utilisez le transposeur si un morceau est trop haut ou trop bas. Déplacez tous les accords du même nombre de demi-tons." },
    guitarFaqs: [
      { question: "Pourquoi l'aiguille bouge trop ?", answer: "Le bruit ou plusieurs cordes qui résonnent peuvent perturber la détection. Jouez une corde à la fois." },
      { question: "Quel accordage choisir au début ?", answer: "Pour une guitare six cordes, commencez par E A D G B E, puis essayez Drop D ou Eb Standard." }
    ],
    guitarSetup: { title: "Choisir le bon accordage", body: "Standard convient à la plupart des morceaux, Drop D aux riffs graves, Eb Standard à une tension plus douce, Open G ou Open D aux accords ouverts." },
    metronomeFaqs: [
      { question: "À quel BPM travailler ?", answer: "Commencez au tempo le plus rapide que vous pouvez jouer proprement, puis augmentez progressivement." },
      { question: "Pourquoi travailler les subdivisions ?", answer: "Elles aident à sentir le rythme entre les clics principaux." }
    ],
    metronomePractice: { title: "Méthode de travail", body: "Commencez lentement, accentuez le premier temps et augmentez seulement après plusieurs cycles propres." },
    metronomeRoutine: { title: "Routine progressive", body: "Utilisez le cycle d'exercice pour passer d'un BPM de départ à un BPM cible par petits paliers." },
    tapFaqs: [
      { question: "Combien de taps faut-il ?", answer: "Huit taps ou plus donnent souvent une moyenne plus stable." },
      { question: "Puis-je l'utiliser avec tout morceau ?", answer: "Oui, si vous tapez toujours le même point du rythme." }
    ],
    tapUse: { title: "Quand utiliser Tap BPM", body: "Utilisez-le pour estimer rapidement le tempo avant de régler le métronome." },
    transposeFaqs: [
      { question: "La transposition garde-t-elle les relations ?", answer: "Oui, elle change la tonalité mais garde les distances entre accords." },
      { question: "Les dièses et bémols sont-ils pris en charge ?", answer: "Les accords courants majeurs, mineurs, dièses, bémols et septièmes sont pris en charge." }
    ],
    transposeUse: { title: "Trouver une tonalité confortable", body: "Transposez pour mieux chanter, simplifier les positions ou jouer avec un autre instrument." }
  },
  it: {
    accuracy: { title: "Lettura più stabile", body: "Tieni lo strumento vicino al microfono, suona una corda alla volta e aspetta un attimo prima di correggere l'accordatura." },
    chords: { title: "Accordi e tonalità", body: "Usa il traspositore quando un brano è troppo alto o troppo basso. Sposta tutti gli accordi dello stesso numero di semitoni." },
    guitarFaqs: [
      { question: "Perché la lancetta salta?", answer: "Rumore ambientale o più corde che risuonano possono confondere il rilevamento. Suona una sola corda e lasciala stabilizzare." },
      { question: "Quale accordatura conviene all'inizio?", answer: "Per chitarra a sei corde parti da Mi La Re Sol Si Mi, poi prova Drop D, Eb Standard o accordature aperte." }
    ],
    guitarSetup: { title: "Scegliere l'accordatura giusta", body: "Usa Standard per la maggior parte dei brani, Drop D per riff più bassi, Eb Standard per minore tensione, Open G o Open D per accordi aperti." },
    metronomeFaqs: [
      { question: "A quanti BPM devo studiare?", answer: "Parti dalla velocità più alta in cui riesci a suonare pulito e rilassato, poi aumenta gradualmente." },
      { question: "Perché usare le suddivisioni?", answer: "Aiutano a sentire il ritmo dentro ogni battito, non solo il click principale." }
    ],
    metronomePractice: { title: "Metodo di studio efficace", body: "Parti lento, accentua il primo movimento e aumenta i BPM solo dopo diversi giri puliti." },
    metronomeRoutine: { title: "Routine progressiva", body: "Usa il ciclo di esercizio per passare da BPM iniziale a BPM obiettivo con incrementi piccoli dopo giri o tempo impostati." },
    tapFaqs: [
      { question: "Quanti tap servono?", answer: "Otto tap o più danno di solito una media BPM più stabile." },
      { question: "Funziona con qualsiasi brano?", answer: "Sì, se batti sempre lo stesso punto del ritmo." }
    ],
    tapUse: { title: "Quando usare Tap BPM", body: "Usalo quando ascolti un brano e vuoi stimare rapidamente il tempo prima di impostare il metronomo." },
    transposeFaqs: [
      { question: "Trasporre cambia solo i nomi degli accordi?", answer: "Cambia la tonalità mantenendo uguali i rapporti armonici tra gli accordi." },
      { question: "Supporta diesis e bemolli?", answer: "Supporta accordi maggiori, minori, diesis, bemolli e settime comuni." }
    ],
    transposeUse: { title: "Trovare una tonalità più comoda", body: "Trasponi un brano per adattarlo alla voce, evitare posizioni difficili o suonare con altri strumenti." }
  },
  ja: {
    accuracy: { title: "安定した検出", body: "楽器をマイクに近づけ、1本ずつ鳴らし、音程が落ち着いてから調整します。" },
    chords: { title: "コードとキー", body: "曲が高すぎる、または低すぎる場合はコード移調を使い、すべてのコードを同じ半音数だけ動かします。" },
    guitarFaqs: [
      { question: "針が大きく動くのはなぜですか？", answer: "周囲の音や複数の弦の共鳴が原因です。1本ずつ鳴らしてください。" },
      { question: "初心者はどのチューニングから始めますか？", answer: "6弦ギターは E A D G B E から始めるのが基本です。" }
    ],
    guitarSetup: { title: "チューニングを選ぶ", body: "標準は多くの曲に、Drop D は低いリフに、Eb Standard は柔らかい張力に、Open G/Open D は開放的な響きに向いています。" },
    metronomeFaqs: [
      { question: "どの BPM で練習しますか？", answer: "きれいに弾ける速さから始め、少しずつ上げます。" },
      { question: "細分化はなぜ必要ですか？", answer: "クリックの間にあるリズムを感じやすくなります。" }
    ],
    metronomePractice: { title: "練習方法", body: "遅いテンポで始め、1拍目を強調し、安定してから BPM を上げます。" },
    metronomeRoutine: { title: "速度アップ練習", body: "開始 BPM から目標 BPM まで、小さなステップで練習できます。" },
    tapFaqs: [
      { question: "何回タップしますか？", answer: "8回以上で平均が安定しやすくなります。" },
      { question: "どんな曲でも使えますか？", answer: "同じ拍の位置をタップすれば使えます。" }
    ],
    tapUse: { title: "Tap BPM の使いどころ", body: "曲のテンポをすばやく知りたい時に使います。" },
    transposeFaqs: [
      { question: "移調すると何が変わりますか？", answer: "コード同士の関係を保ったままキーが変わります。" },
      { question: "シャープやフラットに対応しますか？", answer: "一般的なメジャー、マイナー、シャープ、フラット、セブンスに対応します。" }
    ],
    transposeUse: { title: "弾きやすいキーを探す", body: "歌いやすい高さや押さえやすい形に合わせて移調します。" }
  },
  ko: {
    accuracy: { title: "더 안정적인 감지", body: "악기를 마이크 가까이에 두고 한 줄씩 연주한 뒤 음정이 안정될 때까지 잠시 기다립니다." },
    chords: { title: "코드와 키", body: "노래가 너무 높거나 낮으면 코드 조옮김으로 모든 코드를 같은 반음 수만큼 이동합니다." },
    guitarFaqs: [
      { question: "바늘이 왜 흔들리나요?", answer: "주변 소음이나 여러 줄의 공명이 원인일 수 있습니다. 한 줄만 또렷하게 연주하세요." },
      { question: "처음에는 어떤 튜닝이 좋나요?", answer: "6현 기타는 E A D G B E 스탠더드 튜닝부터 시작하세요." }
    ],
    guitarSetup: { title: "알맞은 튜닝 선택", body: "Standard는 대부분의 곡, Drop D는 낮은 리프, Eb Standard는 낮은 장력, Open G/Open D는 개방현 사운드에 좋습니다." },
    metronomeFaqs: [
      { question: "몇 BPM으로 연습하나요?", answer: "깨끗하고 편하게 연주할 수 있는 속도에서 시작해 천천히 올립니다." },
      { question: "세분화는 왜 쓰나요?", answer: "주요 클릭 사이의 리듬을 더 정확히 느끼게 해 줍니다." }
    ],
    metronomePractice: { title: "효과적인 연습", body: "느리게 시작하고 첫 박을 강조한 뒤 여러 회차가 깨끗할 때만 BPM을 올립니다." },
    metronomeRoutine: { title: "속도 향상 루틴", body: "시작 BPM에서 목표 BPM까지 정해진 마디나 시간마다 조금씩 올립니다." },
    tapFaqs: [
      { question: "몇 번 탭해야 하나요?", answer: "8번 이상 탭하면 평균이 더 안정적입니다." },
      { question: "어떤 곡에도 사용할 수 있나요?", answer: "같은 박 지점을 일정하게 탭하면 사용할 수 있습니다." }
    ],
    tapUse: { title: "Tap BPM 사용 시점", body: "곡의 템포를 빠르게 추정하고 메트로놈을 설정할 때 사용합니다." },
    transposeFaqs: [
      { question: "조옮김은 무엇을 바꾸나요?", answer: "코드 관계는 유지하고 키만 바꿉니다." },
      { question: "샵과 플랫을 지원하나요?", answer: "일반적인 메이저, 마이너, 샵, 플랫, 세븐스 코드를 지원합니다." }
    ],
    transposeUse: { title: "편한 키 찾기", body: "목소리나 악기에 맞게 곡을 더 편한 키로 옮깁니다." }
  },
  pt: {
    accuracy: { title: "Leitura mais estável", body: "Mantenha o instrumento perto do microfone, toque uma corda por vez e espere a altura estabilizar antes de ajustar." },
    chords: { title: "Acordes e tonalidade", body: "Use o transpositor quando a música estiver alta ou baixa demais. Mova todos os acordes pelo mesmo número de semitons." },
    guitarFaqs: [
      { question: "Por que o ponteiro pula?", answer: "Ruído ambiente ou várias cordas soando podem confundir a detecção. Toque uma corda por vez." },
      { question: "Qual afinação usar no começo?", answer: "Na guitarra de seis cordas, comece por E A D G B E e depois experimente Drop D ou Eb Standard." }
    ],
    guitarSetup: { title: "Escolher a afinação certa", body: "Use Standard para a maioria das músicas, Drop D para riffs graves, Eb Standard para menos tensão e Open G/Open D para acordes abertos." },
    metronomeFaqs: [
      { question: "Em qual BPM devo praticar?", answer: "Comece no tempo em que você toca limpo e relaxado, depois aumente aos poucos." },
      { question: "Para que servem subdivisões?", answer: "Elas ajudam a sentir o ritmo entre os cliques principais." }
    ],
    metronomePractice: { title: "Método de estudo", body: "Comece devagar, acentue o primeiro tempo e aumente o BPM só após vários ciclos limpos." },
    metronomeRoutine: { title: "Rotina progressiva", body: "Use o ciclo de prática para ir do BPM inicial ao BPM final com pequenos aumentos." },
    tapFaqs: [
      { question: "Quantos taps preciso?", answer: "Oito ou mais taps costumam gerar uma média mais estável." },
      { question: "Funciona com qualquer música?", answer: "Sim, se você tocar sempre no mesmo ponto do pulso." }
    ],
    tapUse: { title: "Quando usar Tap BPM", body: "Use para estimar rapidamente o tempo de uma música antes de ligar o metrônomo." },
    transposeFaqs: [
      { question: "Transpor muda apenas a tonalidade?", answer: "Muda a tonalidade mantendo a relação harmônica entre os acordes." },
      { question: "Suporta sustenidos e bemóis?", answer: "Suporta acordes maiores, menores, sustenidos, bemóis e sétimas comuns." }
    ],
    transposeUse: { title: "Encontrar uma tonalidade confortável", body: "Transponha para cantar melhor, evitar posições difíceis ou tocar com outro instrumento." }
  },
  ru: {
    accuracy: { title: "Более стабильное распознавание", body: "Держите инструмент ближе к микрофону, играйте одну струну и ждите, пока высота стабилизируется." },
    chords: { title: "Аккорды и тональность", body: "Используйте транспозитор, если песня слишком высокая или низкая. Переместите все аккорды на одинаковое число полутонов." },
    guitarFaqs: [
      { question: "Почему стрелка прыгает?", answer: "Причиной может быть шум или несколько звучащих струн. Играйте по одной струне." },
      { question: "С какого строя начать?", answer: "Для шестиструнной гитары начните с E A D G B E, затем попробуйте Drop D или Eb Standard." }
    ],
    guitarSetup: { title: "Выбор подходящего строя", body: "Standard подходит большинству песен, Drop D - низким риффам, Eb Standard - меньшему натяжению, Open G/Open D - открытым аккордам." },
    metronomeFaqs: [
      { question: "На каком BPM заниматься?", answer: "Начните с темпа, где игра остается чистой и расслабленной, затем повышайте постепенно." },
      { question: "Зачем нужны деления?", answer: "Они помогают чувствовать ритм между основными кликами." }
    ],
    metronomePractice: { title: "Метод занятий", body: "Начните медленно, акцентируйте первую долю и повышайте BPM только после чистых циклов." },
    metronomeRoutine: { title: "Постепенная рутина", body: "Используйте цикл практики, чтобы перейти от начального BPM к целевому маленькими шагами." },
    tapFaqs: [
      { question: "Сколько нажатий нужно?", answer: "Восемь и более нажатий обычно дают стабильнее среднее." },
      { question: "Работает ли с любой песней?", answer: "Да, если нажимать в одну и ту же точку пульса." }
    ],
    tapUse: { title: "Когда использовать Tap BPM", body: "Используйте для быстрой оценки темпа перед настройкой метронома." },
    transposeFaqs: [
      { question: "Что меняет транспонирование?", answer: "Оно меняет тональность, сохраняя отношения между аккордами." },
      { question: "Поддерживаются диезы и бемоли?", answer: "Поддерживаются основные мажорные, минорные, диезные, бемольные и септаккорды." }
    ],
    transposeUse: { title: "Найти удобную тональность", body: "Транспонируйте песню под голос, удобные аппликатуры или другой инструмент." }
  },
  zh: {
    accuracy: { title: "更稳定的识别", body: "让乐器靠近麦克风，一次只弹一根弦，并等待音高稳定后再调整。" },
    chords: { title: "和弦与调性", body: "当歌曲太高或太低时使用和弦移调器，把所有和弦移动相同的半音数。" },
    guitarFaqs: [
      { question: "为什么指针跳动？", answer: "环境噪音或多根弦共鸣会影响识别。请一次只弹一根弦。" },
      { question: "初学者用什么调弦？", answer: "六弦吉他先使用 E A D G B E 标准调弦，再尝试 Drop D 或 Eb Standard。" }
    ],
    guitarSetup: { title: "选择合适的调弦", body: "Standard 适合多数歌曲，Drop D 适合低音 riff，Eb Standard 张力更低，Open G/Open D 适合开放和弦。" },
    metronomeFaqs: [
      { question: "应该用多少 BPM 练习？", answer: "从能干净放松演奏的速度开始，再逐步提高。" },
      { question: "为什么要用细分？", answer: "细分帮助你感受主点击之间的节奏。" }
    ],
    metronomePractice: { title: "有效练习方法", body: "从慢速开始，强调第一拍，连续几个循环稳定后再提高 BPM。" },
    metronomeRoutine: { title: "渐进练习", body: "使用练习循环，从起始 BPM 逐步达到目标 BPM。" },
    tapFaqs: [
      { question: "需要点击多少次？", answer: "八次或更多通常会得到更稳定的平均 BPM。" },
      { question: "任何歌曲都可以用吗？", answer: "可以，只要每次点击同一个节拍位置。" }
    ],
    tapUse: { title: "何时使用 Tap BPM", body: "当你听到一首歌并想快速估算速度时使用。" },
    transposeFaqs: [
      { question: "移调会改变什么？", answer: "它改变调性，但保持和弦之间的关系。" },
      { question: "支持升号和降号吗？", answer: "支持常见大、小、升、降和七和弦。" }
    ],
    transposeUse: { title: "找到更舒服的调性", body: "把歌曲移到更适合人声、指法或其他乐器的调性。" }
  }
};

export function getToolSeoEnhancement(locale: Locale, tool: ToolSlug): ToolSeoEnhancement | null {
  const copy = toolSeoLabels[locale];

  if (tool === "guitar-tuner") {
    return {
      faqs: copy.guitarFaqs,
      sections: [copy.guitarSetup, copy.accuracy, copy.chords]
    };
  }

  if (tool === "metronome") {
    return {
      faqs: copy.metronomeFaqs,
      sections: [copy.metronomePractice, copy.metronomeRoutine]
    };
  }

  if (tool === "tap-bpm") {
    return {
      faqs: copy.tapFaqs,
      sections: [copy.tapUse]
    };
  }

  if (tool === "chord-transposer") {
    return {
      faqs: copy.transposeFaqs,
      sections: [copy.transposeUse, copy.chords]
    };
  }

  return null;
}

export const hubEnhancements: Record<Locale, { guides: string; songs: string; tools: string }> = {
  ar: {
    guides: "استخدم هذه الأدلة للانتقال من الأداة إلى التطبيق العملي: الضبط، الإيقاع، قراءة الأوتار واختيار المقام.",
    songs: "كل صفحة أغنية تستخدم ألحانا في الملكية العامة أو مواد تعليمية مبسطة، مع أوتار وملاحظات للتدريب.",
    tools: "اختر الأداة حسب ما تريد فعله الآن: ضبط آلة، حساب BPM، التدريب على الإيقاع أو نقل الأوتار."
  },
  de: {
    guides: "Diese Guides verbinden Werkzeug und Praxis: Stimmen, Rhythmus, Akkorde lesen und Tonarten wechseln.",
    songs: "Die Songseiten verwenden gemeinfreie Melodien oder vereinfachte Lernfassungen mit Akkorden und Übetipps.",
    tools: "Wähle das Werkzeug nach deinem Ziel: Instrument stimmen, BPM finden, Rhythmus üben oder Akkorde transponieren."
  },
  en: {
    guides: "Use these guides to connect the tools with real practice: tuning, rhythm, chord reading and key changes.",
    songs: "Song pages use public-domain melodies or simplified learning material with chords, notes and practice tips.",
    tools: "Choose a tool by task: tune an instrument, find BPM, practice rhythm or transpose a chord progression."
  },
  es: {
    guides: "Estas guías conectan las herramientas con la práctica: afinación, ritmo, lectura de acordes y cambios de tonalidad.",
    songs: "Las páginas de canciones usan melodías de dominio público o material simplificado con acordes y consejos.",
    tools: "Elige una herramienta según tu tarea: afinar, calcular BPM, practicar ritmo o transportar acordes."
  },
  fr: {
    guides: "Ces guides relient les outils à la pratique : accordage, rythme, lecture d'accords et changement de tonalité.",
    songs: "Les pages de morceaux utilisent des mélodies du domaine public ou du matériel simplifié avec accords et conseils.",
    tools: "Choisissez un outil selon votre besoin : accorder, trouver le BPM, travailler le rythme ou transposer des accords."
  },
  it: {
    guides: "Usa queste guide per collegare gli strumenti alla pratica reale: accordatura, ritmo, lettura degli accordi e cambio tonalità.",
    songs: "Le pagine spartiti usano melodie di pubblico dominio o versioni didattiche semplificate con accordi, note e consigli.",
    tools: "Scegli uno strumento in base a cosa devi fare: accordare, trovare i BPM, studiare il ritmo o trasporre accordi."
  },
  ja: {
    guides: "これらのガイドは、チューニング、リズム、コード、移調を実際の練習につなげます。",
    songs: "曲ページはパブリックドメインの旋律や簡略化した学習素材を使い、コードと練習のヒントを掲載します。",
    tools: "目的に合わせて、チューナー、BPM、メトロノーム、コード移調を選べます。"
  },
  ko: {
    guides: "이 가이드는 튜닝, 리듬, 코드 읽기, 키 변경을 실제 연습과 연결합니다.",
    songs: "곡 페이지는 퍼블릭 도메인 선율이나 단순화된 학습 자료와 코드, 연습 팁을 제공합니다.",
    tools: "튜닝, BPM 찾기, 리듬 연습, 코드 조옮김 중 필요한 도구를 선택하세요."
  },
  pt: {
    guides: "Estes guias ligam as ferramentas à prática: afinação, ritmo, leitura de acordes e mudança de tonalidade.",
    songs: "As páginas de músicas usam melodias em domínio público ou material simplificado com acordes e dicas.",
    tools: "Escolha a ferramenta pela tarefa: afinar, encontrar BPM, praticar ritmo ou transpor acordes."
  },
  ru: {
    guides: "Эти руководства связывают инструменты с практикой: настройка, ритм, чтение аккордов и смена тональности.",
    songs: "Страницы песен используют общественное достояние или упрощенные учебные версии с аккордами и советами.",
    tools: "Выберите инструмент по задаче: настроить, найти BPM, тренировать ритм или транспонировать аккорды."
  },
  zh: {
    guides: "这些指南把工具和练习连接起来：调音、节奏、和弦阅读与移调。",
    songs: "歌曲页面使用公有领域旋律或简化学习材料，并提供和弦、音符和练习建议。",
    tools: "按任务选择工具：调音、查找 BPM、练习节奏或移调和弦。"
  }
};

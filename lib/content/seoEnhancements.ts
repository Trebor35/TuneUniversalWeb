import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

export type SeoBlock = {
  body: string;
  title: string;
};

export type SeoHighlight = {
  label: string;
  value: string;
};

export type SeoFaq = {
  answer: string;
  question: string;
};

export type ToolSeoEnhancement = {
  faqs: SeoFaq[];
  heroDescription?: string;
  heroTitle?: string;
  highlights?: SeoHighlight[];
  quickAnswers?: SeoBlock[];
  sections: SeoBlock[];
};

const toolContextualModules: Record<
  BaseLocale,
  Record<
    "guitar-tuner" | "metronome" | "tap-bpm" | "chord-transposer",
    { highlights: SeoHighlight[]; quickAnswers: SeoBlock[] }
  >
> = {
  ar: {
    "guitar-tuner": {
      highlights: [
        { label: "المصدر", value: "ميكروفون + نغمات مرجعية" },
        { label: "الأنماط", value: "Standard و Drop و Open" },
        { label: "الآلات", value: "كلاسيك وأكوستك وكهربائي" }
      ],
      quickAnswers: [
        { title: "هل يناسب الضبط السريع؟", body: "نعم. فعّل الميكروفون واعزف وترا واحدا فقط كل مرة حتى تستقر القراءة بسرعة." },
        { title: "ما الضبط التالي المفيد؟", body: "بعد Standard جرّب Drop D للريفات المنخفضة أو Eb Standard إذا أردت خفض الطبقة العامة." }
      ]
    },
    metronome: {
      highlights: [
        { label: "السرعة", value: "BPM دقيق مع Tap Tempo" },
        { label: "الإيقاع", value: "Accents + subdivisions" },
        { label: "التمرين", value: "دورة تصاعدية حتى السرعة الهدف" }
      ],
      quickAnswers: [
        { title: "بأي BPM أبدأ؟", body: "ابدأ بسرعة تستطيع العزف عليها بنظافة وهدوء ثم ارفع السرعة تدريجيا." },
        { title: "لماذا أستخدم التقسيمات؟", body: "التقسيمات تجعل النبض الداخلي أوضح وتساعد كثيرا على الثبات والدقة." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "القراءة", value: "BPM لحظي ومتوسط" },
        { label: "النسخ", value: "نسخ النتيجة مباشرة" },
        { label: "التدفق", value: "انتقال سريع إلى المترونوم" }
      ],
      quickAnswers: [
        { title: "كم نقرة أحتاج؟", body: "ثماني نقرات أو أكثر تعطي غالبا متوسطا أدق وأكثر ثباتا." },
        { title: "هل يعمل مع أغنية تعمل الآن؟", body: "نعم، إذا بقيت تنقر على نفس موضع النبضة طوال الوقت." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "النطاق", value: "من -12 إلى +12 نصف نغمة" },
        { label: "العرض", value: "دييز أو بيمول" },
        { label: "الدعم", value: "Slash chords وجودة الوتر" }
      ],
      quickAnswers: [
        { title: "هل تبقى جودة الوتر كما هي؟", body: "نعم. يتغير الجذر فقط بينما تبقى m و7 وmaj7 وsus4 وadd9 وغيرها بدون تغيير." },
        { title: "هل يصلح لنص كامل مع أسطر؟", body: "نعم. يحافظ على الفراغات والأسطر ويغيّر فقط ما يتعرف عليه كأوتار." }
      ]
    }
  },
  de: {
    "guitar-tuner": {
      highlights: [
        { label: "Eingang", value: "Mikrofon + Referenztöne" },
        { label: "Stimmungen", value: "Standard, Drop und Open" },
        { label: "Gitarren", value: "Klassik, Akustik, E-Gitarre" }
      ],
      quickAnswers: [
        { title: "Taugt das für schnelles Stimmen?", body: "Ja. Mikrofon aktivieren, eine Saite klar anschlagen und kurz warten, bis die Anzeige stabil wird." },
        { title: "Welche Stimmung als Nächstes?", body: "Nach Standard ist Drop D meist der einfachste nächste Schritt, Eb Standard senkt das gesamte Instrument." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Tempo", value: "Präzises BPM + Tap Tempo" },
        { label: "Rhythmus", value: "Akzente und Unterteilungen" },
        { label: "Routine", value: "Steigerung bis Zieltempo" }
      ],
      quickAnswers: [
        { title: "Mit welchem BPM starte ich?", body: "Starte in einem Tempo, das noch sauber und locker bleibt, und erhöhe dann in kleinen Schritten." },
        { title: "Wozu sind Unterteilungen gut?", body: "Sie machen den inneren Puls hörbarer und helfen bei Timing, Groove und Konstanz." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Messung", value: "Sofortiger und mittlerer BPM" },
        { label: "Kopieren", value: "Ergebnis mit einem Klick" },
        { label: "Weiter", value: "Direkt zum Metronom" }
      ],
      quickAnswers: [
        { title: "Wie viele Taps sind genug?", body: "Acht oder mehr Taps liefern normalerweise einen viel stabileren Durchschnitt." },
        { title: "Geht das mit laufender Musik?", body: "Ja, solange du immer denselben Puls triffst und nicht zwischen Zählzeiten springst." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Bereich", value: "-12 bis +12 Halbtöne" },
        { label: "Ausgabe", value: "Kreuze oder Bs" },
        { label: "Support", value: "Slash Chords und Akkordqualität" }
      ],
      quickAnswers: [
        { title: "Bleibt die Akkordqualität erhalten?", body: "Ja. Nur der Grundton wandert, Zusätze wie m, 7, maj7, sus4 oder add9 bleiben erhalten." },
        { title: "Funktioniert das mit ganzen Leadsheets?", body: "Ja. Zeilenumbrüche und Abstände bleiben erhalten, unbekannte Wörter werden nicht verändert." }
      ]
    }
  },
  en: {
    "guitar-tuner": {
      highlights: [
        { label: "Input", value: "Microphone + reference notes" },
        { label: "Tunings", value: "Standard, Drop and Open" },
        { label: "Best for", value: "Classical, acoustic and electric" }
      ],
      quickAnswers: [
        { title: "Is this good for fast tuning?", body: "Yes. Turn on the microphone, play one string clearly and wait a moment for the reading to settle before adjusting." },
        { title: "Which tuning should you try next?", body: "After standard tuning, Drop D is the easiest next move for lower riffs, while Eb Standard lowers the whole instrument." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Tempo", value: "Precise BPM + Tap Tempo" },
        { label: "Rhythm", value: "Accents and subdivisions" },
        { label: "Routine", value: "Practice cycle to target BPM" }
      ],
      quickAnswers: [
        { title: "What BPM should beginners start with?", body: "Start at the fastest tempo where you can still play cleanly and relaxed, then raise it in small steps." },
        { title: "Why use subdivisions?", body: "Subdivisions make the inner pulse clearer and help a lot with timing, groove and consistency." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Readout", value: "Instant and average BPM" },
        { label: "Copy", value: "Copy the result in one tap" },
        { label: "Next step", value: "Jump straight into metronome practice" }
      ],
      quickAnswers: [
        { title: "How many taps are enough?", body: "Eight or more taps usually give you a much steadier average than a very short sample." },
        { title: "Can you measure a live song?", body: "Yes, as long as you keep tapping the same pulse point consistently." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Range", value: "-12 to +12 semitones" },
        { label: "Output", value: "Sharps or flats" },
        { label: "Support", value: "Slash chords and chord quality" }
      ],
      quickAnswers: [
        { title: "Does it keep chord quality?", body: "Yes. Only the root note moves, while m, 7, maj7, sus4, add9 and similar chord qualities stay intact." },
        { title: "Can you transpose full lyrics and chord sheets?", body: "Yes. The tool preserves spacing and line breaks, and leaves non-chord words unchanged." }
      ]
    }
  },
  es: {
    "guitar-tuner": {
      highlights: [
        { label: "Entrada", value: "Micrófono + notas de referencia" },
        { label: "Afinaciones", value: "Standard, Drop y Open" },
        { label: "Ideal para", value: "Clásica, acústica y eléctrica" }
      ],
      quickAnswers: [
        { title: "¿Sirve para afinar rápido?", body: "Sí. Activa el micrófono, toca una cuerda cada vez y espera un momento a que la lectura se estabilice." },
        { title: "¿Qué afinación probar después?", body: "Después de Standard, Drop D suele ser el paso más fácil; Eb Standard sirve para bajar todo el instrumento." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Tempo", value: "BPM preciso + Tap Tempo" },
        { label: "Ritmo", value: "Acentos y subdivisiones" },
        { label: "Rutina", value: "Ciclo progresivo hasta el BPM objetivo" }
      ],
      quickAnswers: [
        { title: "¿Con qué BPM empiezo?", body: "Empieza en el tempo más rápido en el que aún toques limpio y relajado, y luego sube poco a poco." },
        { title: "¿Por qué usar subdivisiones?", body: "Las subdivisiones aclaran el pulso interno y ayudan mucho con precisión, groove y estabilidad." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Lectura", value: "BPM instantáneo y promedio" },
        { label: "Copia", value: "Copia del resultado en un toque" },
        { label: "Siguiente paso", value: "Paso directo al metrónomo" }
      ],
      quickAnswers: [
        { title: "¿Cuántos taps hacen falta?", body: "Ocho o más taps suelen dar una media bastante más estable que una muestra muy corta." },
        { title: "¿Sirve para música en vivo?", body: "Sí, siempre que pulses el mismo punto del pulso sin desplazarte entre tiempos." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Rango", value: "De -12 a +12 semitonos" },
        { label: "Salida", value: "Sostenidos o bemoles" },
        { label: "Soporte", value: "Slash chords y calidad" }
      ],
      quickAnswers: [
        { title: "¿Mantiene la calidad del acorde?", body: "Sí. Solo cambia la nota base; m, 7, maj7, sus4, add9 y otros sufijos permanecen iguales." },
        { title: "¿Funciona con letras y acordes juntos?", body: "Sí. Mantiene espacios y saltos de línea, y deja intactas las palabras que no reconoce como acordes." }
      ]
    }
  },
  fr: {
    "guitar-tuner": {
      highlights: [
        { label: "Entrée", value: "Micro + notes de référence" },
        { label: "Accordages", value: "Standard, Drop et Open" },
        { label: "Idéal pour", value: "Classique, acoustique, électrique" }
      ],
      quickAnswers: [
        { title: "Est-ce utile pour accorder vite ?", body: "Oui. Activez le micro, jouez une corde à la fois et attendez que la lecture se stabilise." },
        { title: "Quel accordage essayer ensuite ?", body: "Après le standard, Drop D est souvent le plus simple à tester, puis Eb Standard pour baisser l'ensemble." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Tempo", value: "BPM précis + Tap Tempo" },
        { label: "Rythme", value: "Accents et subdivisions" },
        { label: "Routine", value: "Cycle progressif jusqu'au BPM cible" }
      ],
      quickAnswers: [
        { title: "À quel BPM commencer ?", body: "Commencez au tempo le plus rapide que vous pouvez garder propre et détendu, puis montez progressivement." },
        { title: "Pourquoi travailler les subdivisions ?", body: "Elles clarifient le pouls interne et aident beaucoup sur la précision et le groove." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Mesure", value: "BPM instantané et moyen" },
        { label: "Copie", value: "Copie en un geste" },
        { label: "Suite", value: "Passage direct au métronome" }
      ],
      quickAnswers: [
        { title: "Combien de taps faut-il ?", body: "Huit taps ou plus donnent en général une moyenne bien plus stable qu'un échantillon très court." },
        { title: "Peut-on mesurer une chanson en direct ?", body: "Oui, si vous tapez toujours au même endroit du pouls sans dériver." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Plage", value: "De -12 à +12 demi-tons" },
        { label: "Sortie", value: "Dièses ou bémols" },
        { label: "Support", value: "Slash chords et qualité d'accord" }
      ],
      quickAnswers: [
        { title: "La qualité de l'accord reste-t-elle ?", body: "Oui. Seule la fondamentale bouge ; m, 7, maj7, sus4, add9 et les autres suffixes restent identiques." },
        { title: "Peut-on transposer une grille complète ?", body: "Oui. Les espaces et retours à la ligne sont conservés, et les mots non reconnus restent inchangés." }
      ]
    }
  },
  it: {
    "guitar-tuner": {
      highlights: [
        { label: "Ingresso", value: "Microfono + note di riferimento" },
        { label: "Accordature", value: "Standard, Drop e Open" },
        { label: "Ideale per", value: "Classica, acustica ed elettrica" }
      ],
      quickAnswers: [
        { title: "Va bene per accordare velocemente?", body: "Sì. Attiva il microfono, suona una corda alla volta e aspetta che la lettura si stabilizzi prima di correggere." },
        { title: "Quale accordatura conviene provare dopo?", body: "Dopo la standard, Drop D è il passo più facile per riff più bassi, mentre Eb Standard abbassa tutto lo strumento." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Tempo", value: "BPM preciso + Tap Tempo" },
        { label: "Ritmo", value: "Accenti e suddivisioni" },
        { label: "Routine", value: "Ciclo progressivo fino al BPM target" }
      ],
      quickAnswers: [
        { title: "A quanti BPM conviene partire?", body: "Parti dalla velocità più alta in cui riesci ancora a suonare pulito e rilassato, poi aumenta poco alla volta." },
        { title: "Perché usare le suddivisioni?", body: "Le suddivisioni rendono più chiaro il battito interno e aiutano tanto su precisione, groove e stabilità." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Lettura", value: "BPM istantaneo e medio" },
        { label: "Copia", value: "Copi il risultato in un tocco" },
        { label: "Passaggio", value: "Vai subito al metronomo" }
      ],
      quickAnswers: [
        { title: "Quanti tap servono davvero?", body: "Otto tap o più danno di solito una media molto più stabile di una sequenza troppo corta." },
        { title: "Posso usarlo mentre ascolto un brano?", body: "Sì, se batti sempre sullo stesso punto del pulsare senza spostarti tra battere e levare." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Range", value: "Da -12 a +12 semitoni" },
        { label: "Output", value: "Diesis o bemolli" },
        { label: "Supporto", value: "Slash chord e qualità accordo" }
      ],
      quickAnswers: [
        { title: "Mantiene la qualità dell'accordo?", body: "Sì. Sposta solo la fondamentale, mentre m, 7, maj7, sus4, add9 e gli altri suffissi restano invariati." },
        { title: "Funziona anche con testo e accordi insieme?", body: "Sì. Mantiene spazi e righe del testo e lascia inalterate le parole che non riconosce come accordi." }
      ]
    }
  },
  ja: {
    "guitar-tuner": {
      highlights: [
        { label: "入力", value: "マイク + 参照音" },
        { label: "チューニング", value: "Standard / Drop / Open" },
        { label: "用途", value: "クラシック・アコースティック・エレキ" }
      ],
      quickAnswers: [
        { title: "素早く合わせるのに向いていますか？", body: "はい。マイクをオンにして1本ずつ鳴らし、表示が落ち着いてから調整すると速く安定します。" },
        { title: "次に試すべきチューニングは？", body: "標準の次は Drop D が最も試しやすく、全体を少し低くしたいなら Eb Standard も使いやすいです。" }
      ]
    },
    metronome: {
      highlights: [
        { label: "テンポ", value: "正確な BPM + Tap Tempo" },
        { label: "リズム", value: "アクセントと細分化" },
        { label: "練習", value: "目標 BPM まで段階的に上げる" }
      ],
      quickAnswers: [
        { title: "最初は何 BPM で練習しますか？", body: "無理なくきれいに弾ける最速テンポから始め、少しずつ上げていくのが効果的です。" },
        { title: "細分化を使う理由は？", body: "各拍の中の脈を感じやすくなり、タイミングやグルーヴの安定につながります。" }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "表示", value: "瞬間 BPM と平均 BPM" },
        { label: "コピー", value: "結果をすぐコピー" },
        { label: "次の動き", value: "そのままメトロノームへ" }
      ],
      quickAnswers: [
        { title: "何回タップすれば十分ですか？", body: "8回以上タップすると、短いサンプルより平均値がかなり安定しやすくなります。" },
        { title: "再生中の曲でも使えますか？", body: "はい。同じ拍の位置を一定してタップすれば、実用的な BPM をつかめます。" }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "範囲", value: "-12 から +12 半音" },
        { label: "表示", value: "シャープ / フラット切替" },
        { label: "対応", value: "スラッシュコードと和音品質" }
      ],
      quickAnswers: [
        { title: "コードの性質は保たれますか？", body: "はい。動くのはルート音だけで、m、7、maj7、sus4、add9 などの情報はそのまま残ります。" },
        { title: "歌詞付きのコード譜にも使えますか？", body: "はい。改行や空白を保ちつつ、コードとして認識した部分だけを変換します。" }
      ]
    }
  },
  ko: {
    "guitar-tuner": {
      highlights: [
        { label: "입력", value: "마이크 + 기준음" },
        { label: "튜닝", value: "Standard / Drop / Open" },
        { label: "대상", value: "클래식, 어쿠스틱, 일렉" }
      ],
      quickAnswers: [
        { title: "빠르게 튜닝할 때도 좋나요?", body: "네. 마이크를 켜고 한 줄씩 또렷하게 연주한 뒤 표시가 안정되면 바로 조정하면 됩니다." },
        { title: "다음엔 어떤 튜닝을 써볼까요?", body: "스탠더드 다음에는 Drop D가 가장 쉽고, 전체를 낮추고 싶다면 Eb Standard도 좋습니다." }
      ]
    },
    metronome: {
      highlights: [
        { label: "템포", value: "정확한 BPM + Tap Tempo" },
        { label: "리듬", value: "액센트와 세분화" },
        { label: "루틴", value: "목표 BPM까지 점진적 상승" }
      ],
      quickAnswers: [
        { title: "몇 BPM부터 시작하나요?", body: "깨끗하고 편하게 연주할 수 있는 가장 빠른 속도에서 시작한 뒤 조금씩 올리는 것이 좋습니다." },
        { title: "세분화를 왜 쓰나요?", body: "박 안쪽의 맥박이 더 선명해져서 타이밍과 그루브를 안정시키는 데 큰 도움이 됩니다." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "측정", value: "즉시 BPM과 평균 BPM" },
        { label: "복사", value: "결과를 바로 복사" },
        { label: "다음 단계", value: "바로 메트로놈으로 이동" }
      ],
      quickAnswers: [
        { title: "몇 번 정도 탭해야 하나요?", body: "8번 이상 탭하면 매우 짧은 샘플보다 평균 BPM이 훨씬 안정적으로 잡힙니다." },
        { title: "재생 중인 곡에도 쓸 수 있나요?", body: "네. 같은 박 위치를 일정하게 탭하면 실전용 BPM을 빠르게 찾을 수 있습니다." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "범위", value: "-12에서 +12 반음" },
        { label: "출력", value: "샾 / 플랫 선택" },
        { label: "지원", value: "슬래시 코드와 코드 성질 유지" }
      ],
      quickAnswers: [
        { title: "코드 성질은 그대로 남나요?", body: "네. 루트만 이동하고 m, 7, maj7, sus4, add9 같은 정보는 그대로 유지됩니다." },
        { title: "가사와 코드가 함께 있어도 되나요?", body: "네. 줄바꿈과 공백을 유지하면서 코드로 인식한 부분만 바꿉니다." }
      ]
    }
  },
  pt: {
    "guitar-tuner": {
      highlights: [
        { label: "Entrada", value: "Microfone + notas de referência" },
        { label: "Afinações", value: "Standard, Drop e Open" },
        { label: "Ideal para", value: "Clássica, acústica e elétrica" }
      ],
      quickAnswers: [
        { title: "Serve para afinar rápido?", body: "Sim. Ative o microfone, toque uma corda por vez e espere a leitura estabilizar antes de ajustar." },
        { title: "Qual afinação testar depois?", body: "Depois da standard, Drop D é o passo mais fácil para riffs graves, e Eb Standard baixa todo o instrumento." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Tempo", value: "BPM preciso + Tap Tempo" },
        { label: "Ritmo", value: "Acentos e subdivisões" },
        { label: "Rotina", value: "Ciclo progressivo até o alvo" }
      ],
      quickAnswers: [
        { title: "Com qual BPM devo começar?", body: "Comece no tempo mais rápido em que você ainda toca limpo e relaxado, depois aumente gradualmente." },
        { title: "Por que usar subdivisões?", body: "As subdivisões deixam o pulso interno mais claro e ajudam bastante em precisão e groove." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Leitura", value: "BPM instantâneo e médio" },
        { label: "Cópia", value: "Copie o resultado em um toque" },
        { label: "Próximo passo", value: "Ir direto para o metrônomo" }
      ],
      quickAnswers: [
        { title: "Quantos taps bastam?", body: "Oito ou mais taps costumam gerar uma média muito mais estável do que uma amostra curta." },
        { title: "Dá para medir música tocando agora?", body: "Sim, desde que você toque sempre no mesmo ponto do pulso sem oscilar." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Faixa", value: "De -12 a +12 semitons" },
        { label: "Saída", value: "Sustenidos ou bemóis" },
        { label: "Suporte", value: "Slash chords e qualidade" }
      ],
      quickAnswers: [
        { title: "A qualidade do acorde continua igual?", body: "Sim. Só a nota base muda, enquanto m, 7, maj7, sus4, add9 e outros sufixos permanecem." },
        { title: "Funciona com letra e cifra juntas?", body: "Sim. Mantém espaços e quebras de linha e altera apenas o que reconhece como acorde." }
      ]
    }
  },
  ru: {
    "guitar-tuner": {
      highlights: [
        { label: "Источник", value: "Микрофон + опорные ноты" },
        { label: "Строи", value: "Standard, Drop и Open" },
        { label: "Подходит для", value: "Классики, акустики, электрогитары" }
      ],
      quickAnswers: [
        { title: "Подходит для быстрой настройки?", body: "Да. Включите микрофон, извлекайте по одной струне и дайте показанию немного стабилизироваться." },
        { title: "Какой строй попробовать дальше?", body: "После стандартного строя проще всего перейти к Drop D, а Eb Standard хорошо подходит для общего понижения." }
      ]
    },
    metronome: {
      highlights: [
        { label: "Темп", value: "Точный BPM + Tap Tempo" },
        { label: "Ритм", value: "Акценты и деления" },
        { label: "Режим", value: "Плавный цикл до целевого BPM" }
      ],
      quickAnswers: [
        { title: "С какого BPM начинать?", body: "Начинайте с темпа, где вы ещё играете чисто и спокойно, и повышайте его небольшими шагами." },
        { title: "Зачем нужны деления?", body: "Они делают внутренний пульс понятнее и сильно помогают с таймингом и грувом." }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "Показания", value: "Мгновенный и средний BPM" },
        { label: "Копирование", value: "Копия результата в один клик" },
        { label: "Дальше", value: "Сразу к метрономной практике" }
      ],
      quickAnswers: [
        { title: "Сколько нажатий достаточно?", body: "Обычно восемь и больше нажатий дают заметно более стабильный средний BPM." },
        { title: "Можно ли измерять живую песню?", body: "Да, если вы постоянно попадаете в одну и ту же точку пульса." }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "Диапазон", value: "От -12 до +12 полутонов" },
        { label: "Вывод", value: "Диезы или бемоли" },
        { label: "Поддержка", value: "Slash chords и качество аккорда" }
      ],
      quickAnswers: [
        { title: "Качество аккорда сохраняется?", body: "Да. Меняется только корень, а m, 7, maj7, sus4, add9 и другие обозначения остаются прежними." },
        { title: "Работает с полным текстом и аккордами?", body: "Да. Пробелы и строки сохраняются, а слова, не похожие на аккорды, не меняются." }
      ]
    }
  },
  zh: {
    "guitar-tuner": {
      highlights: [
        { label: "输入", value: "麦克风 + 参考音" },
        { label: "调弦", value: "Standard、Drop、Open" },
        { label: "适合", value: "古典、民谣、电吉他" }
      ],
      quickAnswers: [
        { title: "适合快速调音吗？", body: "适合。打开麦克风后一次只弹一根弦，等读数稳定再微调，会更快更准。" },
        { title: "下一步该试什么调弦？", body: "标准调弦之后，Drop D 最容易上手；如果想整体更低，可以试 Eb Standard。" }
      ]
    },
    metronome: {
      highlights: [
        { label: "速度", value: "精准 BPM + Tap Tempo" },
        { label: "节奏", value: "重音与细分" },
        { label: "练习", value: "逐步提升到目标 BPM" }
      ],
      quickAnswers: [
        { title: "初学者该从多少 BPM 开始？", body: "先从你还能保持干净和放松的速度开始，再一点点往上加。" },
        { title: "为什么要练细分？", body: "细分能让每一拍内部的脉冲更清楚，对节奏稳定和律动感帮助很大。" }
      ]
    },
    "tap-bpm": {
      highlights: [
        { label: "读数", value: "即时 BPM 与平均 BPM" },
        { label: "复制", value: "一键复制结果" },
        { label: "下一步", value: "直接进入节拍器练习" }
      ],
      quickAnswers: [
        { title: "需要点几次才够？", body: "通常点八次或更多，平均 BPM 会比很短的样本稳定得多。" },
        { title: "能测正在播放的歌曲吗？", body: "可以，只要你始终点在同一个脉冲位置。" }
      ]
    },
    "chord-transposer": {
      highlights: [
        { label: "范围", value: "-12 到 +12 半音" },
        { label: "输出", value: "升号或降号" },
        { label: "支持", value: "slash chord 与和弦性质" }
      ],
      quickAnswers: [
        { title: "会保留和弦性质吗？", body: "会。工具只移动根音，m、7、maj7、sus4、add9 等后缀都会保留下来。" },
        { title: "能处理整页歌词和和弦吗？", body: "可以。它会保留空格和换行，只转换识别为和弦的部分。" }
      ]
    }
  }
};

const toolSeoLabels: Record<
  BaseLocale,
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

const toolHeroCopy: Record<
  BaseLocale,
  Record<"guitar-tuner" | "metronome" | "tap-bpm" | "chord-transposer", { description: string; title: string }>
> = {
  ar: {
    "guitar-tuner": {
      title: "موالِف جيتار أونلاين مع ميكروفون",
      description:
        "اضبط الجيتار الكلاسيكي أو الكهربائي أو الأكوستك باستخدام الميكروفون، مع دعم للضبط القياسي وDrop D وEb وD Standard وOpen D وOpen G."
    },
    metronome: {
      title: "ميترونوم أونلاين مع BPM وتقسيمات",
      description:
        "تدرّب مع ميترونوم أونلاين كامل يحتوي على BPM دقيق، نبرات، موازين، تقسيمات، Tap Tempo ودورات تصاعدية للسرعة."
    },
    "tap-bpm": {
      title: "عداد Tap BPM أونلاين",
      description:
        "انقر مع إيقاع أي أغنية لتحصل على BPM فوري ومتوسط BPM، ثم انسخ النتيجة وانتقل مباشرة إلى الميترونوم."
    },
    "chord-transposer": {
      title: "ناقل أوتار أونلاين لتغيير المقام",
      description:
        "انقل تقدمات الأوتار بنصف نغمة، حافظ على slash chords، اختر الديز أو البيمول وانسخ النتيجة فوراً."
    }
  },
  de: {
    "guitar-tuner": {
      title: "Gitarren Tuner online mit Mikrofon",
      description:
        "Stimme akustische, elektrische oder klassische Gitarre online mit Mikrofon, Referenznoten und Support fuer Standard, Drop D, Eb, D Standard, Open D und Open G."
    },
    metronome: {
      title: "Online Metronom mit BPM und Unterteilungen",
      description:
        "Uebe mit einem vollstaendigen Online-Metronom mit praezisem BPM, Akzenten, Taktarten, Unterteilungen, Tap Tempo und progressiven Trainingszyklen."
    },
    "tap-bpm": {
      title: "Tap BPM Zaehler online",
      description:
        "Tippe den Puls eines Songs, erhalte sofortiges und durchschnittliches BPM, kopiere das Ergebnis und gehe direkt zum Metronom."
    },
    "chord-transposer": {
      title: "Akkord-Transposer online fuer Tonarten",
      description:
        "Transponiere Akkordfolgen in Halbtönen, erhalte Slash Chords, waehle Kreuz oder B und kopiere die neue Folge sofort."
    }
  },
  en: {
    "guitar-tuner": {
      title: "Universal online guitar tuner",
      description:
        "Tune acoustic, electric or classical guitar with microphone pitch detection, reference notes and support for standard, Drop D, Eb, D Standard, Open D and Open G."
    },
    metronome: {
      title: "Online metronome with BPM and subdivisions",
      description:
        "Practice with a full online metronome featuring precise BPM control, subdivisions, accents, Tap Tempo and progressive speed cycles."
    },
    "tap-bpm": {
      title: "Tap BPM counter online",
      description:
        "Tap along to any song, get instant and average BPM, copy the result and move straight into metronome practice."
    },
    "chord-transposer": {
      title: "Online chord transposer for key changes",
      description:
        "Transpose chord progressions by semitone, keep slash chords intact, choose sharps or flats and copy the new progression instantly."
    }
  },
  es: {
    "guitar-tuner": {
      title: "Afinador de guitarra online con microfono",
      description:
        "Afina guitarra acustica, electrica o clasica online con microfono, notas de referencia y soporte para Standard, Drop D, Eb, D Standard, Open D y Open G."
    },
    metronome: {
      title: "Metronomo online con BPM y subdivisiones",
      description:
        "Practica con un metronomo online completo con BPM preciso, acentos, compases, subdivisiones, Tap Tempo y ciclos progresivos."
    },
    "tap-bpm": {
      title: "Contador Tap BPM online",
      description:
        "Toca el pulso de cualquier cancion, obtén BPM instantaneo y medio, copia el resultado y pasa directo al metronomo."
    },
    "chord-transposer": {
      title: "Transpositor de acordes online por tonalidad",
      description:
        "Transpone progresiones de acordes por semitonos, conserva slash chords, elige sostenidos o bemoles y copia el resultado al instante."
    }
  },
  fr: {
    "guitar-tuner": {
      title: "Accordeur guitare en ligne avec micro",
      description:
        "Accordez guitare acoustique, electrique ou classique en ligne avec le micro, des notes de reference et le support Standard, Drop D, Eb, D Standard, Open D et Open G."
    },
    metronome: {
      title: "Metronome en ligne avec BPM et subdivisions",
      description:
        "Travaillez avec un metronome en ligne complet : BPM precis, accents, mesures, subdivisions, Tap Tempo et cycles progressifs."
    },
    "tap-bpm": {
      title: "Compteur Tap BPM en ligne",
      description:
        "Tapez le tempo d'un morceau, obtenez un BPM instantane et moyen, copiez le resultat et passez directement au metronome."
    },
    "chord-transposer": {
      title: "Transposeur d'accords en ligne pour tonalite",
      description:
        "Transposez des suites d'accords par demi-tons, conservez les slash chords, choisissez diese ou bemol et copiez le nouveau resultat."
    }
  },
  it: {
    "guitar-tuner": {
      title: "Accordatore universale per chitarra online",
      description:
        "Accorda chitarra classica, acustica o elettrica con microfono, note di riferimento e supporto per Standard, Drop D, Eb, D Standard, Open D e Open G."
    },
    metronome: {
      title: "Metronomo online con BPM e suddivisioni",
      description:
        "Studia con un metronomo online completo: BPM precisi, suddivisioni, accenti, Tap Tempo e cicli progressivi per aumentare la velocita con controllo."
    },
    "tap-bpm": {
      title: "Conta BPM tap online",
      description:
        "Batti il tempo di un brano, ottieni BPM istantaneo e medio, copia il risultato e passa subito al metronomo."
    },
    "chord-transposer": {
      title: "Traspositore accordi online per tonalita",
      description:
        "Trasponi progressioni di accordi per semitoni, mantieni slash chord, scegli diesis o bemolli e copia subito il nuovo giro."
    }
  },
  ja: {
    "guitar-tuner": {
      title: "マイク対応ギター チューナー",
      description:
        "クラシック、アコースティック、エレキギターをブラウザで調弦。Standard、Drop D、Eb、D Standard、Open D、Open G に対応します。"
    },
    metronome: {
      title: "BPM と細分化付きオンラインメトロノーム",
      description:
        "正確な BPM、アクセント、拍子、細分化、Tap Tempo、段階的な練習サイクルを備えたオンラインメトロノームです。"
    },
    "tap-bpm": {
      title: "Tap BPM カウンター",
      description:
        "曲に合わせてタップし、瞬時の BPM と平均 BPM を確認。結果をコピーしてそのままメトロノーム練習へ進めます。"
    },
    "chord-transposer": {
      title: "キー変更用オンラインコード移調",
      description:
        "コード進行を半音単位で移調し、スラッシュコードを保ったまま、シャープやフラットを選んで結果をすぐコピーできます。"
    }
  },
  ko: {
    "guitar-tuner": {
      title: "마이크 지원 온라인 기타 튜너",
      description:
        "클래식, 어쿠스틱, 일렉 기타를 브라우저에서 조율하세요. Standard, Drop D, Eb, D Standard, Open D, Open G 를 지원합니다."
    },
    metronome: {
      title: "BPM 과 세분화가 있는 온라인 메트로놈",
      description:
        "정확한 BPM, 액센트, 박자, 세분화, Tap Tempo, 점진적 속도 루틴을 갖춘 온라인 메트로놈으로 연습하세요."
    },
    "tap-bpm": {
      title: "온라인 Tap BPM 카운터",
      description:
        "노래 박자에 맞춰 탭하면 즉시 BPM 과 평균 BPM 을 확인하고, 결과를 복사해 바로 메트로놈 연습으로 이어갈 수 있습니다."
    },
    "chord-transposer": {
      title: "키 변경용 온라인 코드 조옮김",
      description:
        "코드 진행을 반음 단위로 조옮기고 slash chord 를 유지한 채 샵 또는 플랫 형식을 골라 결과를 즉시 복사하세요."
    }
  },
  pt: {
    "guitar-tuner": {
      title: "Afinador de guitarra online com microfone",
      description:
        "Afine guitarra classica, acustica ou eletrica online com microfone, notas de referencia e suporte para Standard, Drop D, Eb, D Standard, Open D e Open G."
    },
    metronome: {
      title: "Metronomo online com BPM e subdivisoes",
      description:
        "Pratique com um metronomo online completo com BPM preciso, acentos, compassos, subdivisoes, Tap Tempo e ciclos progressivos."
    },
    "tap-bpm": {
      title: "Contador Tap BPM online",
      description:
        "Toque o pulso de qualquer musica, veja BPM instantaneo e medio, copie o resultado e siga direto para o metronomo."
    },
    "chord-transposer": {
      title: "Transpositor de acordes online por tonalidade",
      description:
        "Transponha progressões de acordes por semitons, mantenha slash chords, escolha sustenidos ou bemóis e copie o resultado rapidamente."
    }
  },
  ru: {
    "guitar-tuner": {
      title: "Онлайн тюнер для гитары с микрофоном",
      description:
        "Настраивайте классическую, акустическую или электрогитару в браузере с микрофоном и поддержкой Standard, Drop D, Eb, D Standard, Open D и Open G."
    },
    metronome: {
      title: "Онлайн метроном с BPM и делениями",
      description:
        "Тренируйтесь с онлайн-метрономом: точный BPM, акценты, размеры, деления, Tap Tempo и постепенные циклы скорости."
    },
    "tap-bpm": {
      title: "Онлайн счётчик Tap BPM",
      description:
        "Нажимайте в такт песне, получайте мгновенный и средний BPM, копируйте результат и сразу переходите к метрономной практике."
    },
    "chord-transposer": {
      title: "Онлайн транспозитор аккордов для тональности",
      description:
        "Транспонируйте аккордовые последовательности по полутонам, сохраняйте slash chords, выбирайте диезы или бемоли и сразу копируйте результат."
    }
  },
  zh: {
    "guitar-tuner": {
      title: "带麦克风的在线吉他调音器",
      description:
        "在浏览器中为古典、民谣或电吉他调音，支持 Standard、Drop D、Eb、D Standard、Open D 和 Open G。"
    },
    metronome: {
      title: "带 BPM 和细分的在线节拍器",
      description:
        "使用完整的在线节拍器练习：精准 BPM、重音、拍号、细分、Tap Tempo 和渐进式提速循环。"
    },
    "tap-bpm": {
      title: "在线 Tap BPM 计数器",
      description:
        "跟着歌曲点击节拍，立即查看瞬时 BPM 和平均 BPM，复制结果后直接进入节拍器练习。"
    },
    "chord-transposer": {
      title: "用于转调的在线和弦移调器",
      description:
        "按半音转调和弦进行，保留 slash chord，选择升号或降号表示，并立即复制新的结果。"
    }
  }
};

const extraToolEnhancements: Record<
  BaseLocale,
  Record<"bass-tuner" | "ukulele-tuner" | "sound-level-meter" | "pitch-generator", ToolSeoEnhancement>
> = {
  ar: {
    "bass-tuner": {
      heroTitle: "موالف باس مجاني اونلاين",
      heroDescription: "اضبط الباس بسرعة عبر المتصفح، مع كشف طبقة الصوت بالميكروفون ودعم الضبطات القياسية والبديلة.",
      highlights: [{ label: "المصدر", value: "ميكروفون + نغمات مرجعية" }, { label: "الضبطات", value: "Standard وDrop D و5 أوتار" }, { label: "مناسب لـ", value: "باس كهربائي وأكوستك" }],
      quickAnswers: [{ title: "هل يعمل مع باس 5 أوتار؟", body: "نعم. اختر إعداد 5 أوتار واضبط كل وتر بما فيه Si المنخفض." }, { title: "كيف أحصل على قراءة أدق؟", body: "اعزف الوتر بقوة واصبر قليلاً. الترددات المنخفضة تحتاج وقتاً أطول للاستقرار." }],
      sections: [{ title: "ضبط الباس بسرعة", body: "فعّل الميكروفون، اعزف وتراً واحداً في كل مرة وانتظر حتى تستقر القراءة قبل شد الوتر أو إرخائه." }, { title: "الضبطات الشائعة للباس", body: "الضبط القياسي E A D G يناسب معظم الأنواع. Drop D يضيف وتراً منخفضاً ثقيلاً، أما 5 أوتار فيضيف Si المنخفض." }],
      faqs: [{ question: "كيف أضبط الباس بالميكروفون؟", answer: "فعّل الميكروفون، اعزف وتراً واحداً بوضوح وانتظر ثانية حتى تستقر الإبرة، ثم اضبط الوتر نحو المنتصف." }, { question: "ما هو الضبط القياسي للباس؟", answer: "الضبط القياسي للباس 4 أوتار هو E1 A1 D2 G2 من الأعمق للأعلى." }]
    },
    "ukulele-tuner": {
      heroTitle: "موالف أوكليلي مجاني اونلاين",
      heroDescription: "اضبط الأوكليلي بسرعة عبر المتصفح مع دعم GCEA وLow G وضبطات بديلة.",
      highlights: [{ label: "المصدر", value: "ميكروفون + نغمات مرجعية" }, { label: "الضبطات", value: "GCEA وLow G وباريتون" }, { label: "مناسب لـ", value: "سوبرانو وكونسرت وتينور" }],
      quickAnswers: [{ title: "ما هو الضبط القياسي للأوكليلي؟", body: "السوبرانو والكونسرت والتينور تستخدم G4-C4-E4-A4. الباريتون يستخدم D-G-B-E." }, { title: "ما الفرق بين High G وLow G؟", body: "High G هو الضبط القياسي مع G رنان. Low G يستبدله بـ G منخفض لصوت أعمق ونطاق أوسع." }],
      sections: [{ title: "ضبط الأوكليلي بسرعة", body: "اختر إعداد GCEA القياسي، فعّل الميكروفون واعزف كل وتر على حدة حتى تستقر القراءة." }, { title: "الضبطات الشائعة", body: "ابدأ بـ GCEA. جرّب Low G إذا أردت صوتاً أعمق، أو D-Standard للأوكليلي ذي النبرة الأعلى." }],
      faqs: [{ question: "كيف أضبط الأوكليلي بالميكروفون؟", answer: "فعّل الميكروفون واعزف كل وتر بوضوح، ثم اضبطه حتى تستقر الإبرة في المنتصف." }, { question: "هل يعمل مع باريتون أوكليلي؟", answer: "نعم. اختر إعداد D-G-B-E الخاص بالباريتون." }]
    },
    "sound-level-meter": {
      heroTitle: "مقياس مستوى الصوت اونلاين مجاني",
      heroDescription: "اقيس مستوى الصوت في الغرفة بالديسيبل باستخدام ميكروفون المتصفح مباشرة.",
      highlights: [{ label: "القراءة", value: "ديسيبل تقديري فوري" }, { label: "العرض", value: "رسم بياني مع أدنى/أقصى/متوسط" }, { label: "الاستخدام", value: "فحص بيئة التمرين" }],
      quickAnswers: [{ title: "هل دقيق بما يكفي للتمرين؟", body: "نعم لمقارنة البيئات وتتبع جلسات التمرين الصاخبة. ليس معتمداً للقياس الاحترافي." }, { title: "ما المستوى الآمن للتمرين الموسيقي؟", body: "60-75 دB للآلات الأكوستيكية. التعرض المستمر لأكثر من 85 دB قد يتعب السمع." }],
      sections: [{ title: "كيفية استخدام المقياس", body: "فعّل الميكروفون وضع الجهاز في مكان ثابت بالغرفة، ثم لاحظ قراءات الديسيبل المباشرة والمتوسط." }, { title: "تفسير النتائج", body: "الغرف الهادئة 30-45 دB. المحادثة العادية حوالي 60 دB. التمرين الصاخب 75-85 دB أو أكثر." }],
      faqs: [{ question: "ما مدى دقة المقياس؟", answer: "إنه تقدير مبني على إشارة الميكروفون وليس قياساً احترافياً، لكنه مفيد للمقارنة ومراقبة مستوى الصوت." }, { question: "هل يحتاج إذناً خاصاً؟", answer: "نعم. يحتاج إذن الميكروفون في المتصفح، مثل أدوات الضبط تماماً." }]
    },
    "pitch-generator": {
      heroTitle: "مولد النغمات اونلاين مجاني",
      heroDescription: "انشئ نغمات نقية من 20 هرتز الى 20000 هرتز للتدريب على الاذن ومرجع ضبط الالات.",
      highlights: [{ label: "النطاق", value: "20 هرتز حتى 20000 هرتز" }, { label: "الخرج", value: "نغمة جيبية نقية في المتصفح" }, { label: "الاستخدام", value: "تدريب الأذن ومرجع الضبط" }],
      quickAnswers: [{ title: "هل يصلح لضبط الآلة بالأذن؟", body: "نعم. اضبط التردد على النغمة المطلوبة ثم اضبط وتر آلتك حتى يتطابق مع الصوت المُولَّد." }, { title: "هل الترددات العالية آمنة؟", body: "ابدأ دائماً بمستوى صوت منخفض، خاصة فوق 8000 هرتز، ثم ارفع ببطء." }],
      sections: [{ title: "استخدامات مولد النغمات", body: "استخدمه كمرجع لضبط الآلات بالأذن، لتدريب الفترات الموسيقية، أو لاختبار السماعات والمكبرات." }, { title: "نصائح الاستخدام", body: "ابدأ بمستوى صوت منخفض. للنغمات المرجعية استخدم 440 هرتز (La/A4). للاختبار تدرج عبر النطاق ببطء." }],
      faqs: [{ question: "ما هو التردد المقابل لكل نغمة؟", answer: "La/A4 = 440 هرتز. Do/C4 = 261.6 هرتز. Sol/G4 = 392 هرتز. يمكن حساب بقية النغمات بمضاعفة أو قسمة التردد على 2 لكل أوكتاف." }, { question: "هل يتوقف الصوت تلقائياً؟", answer: "لا. اضغط على إيقاف عند الانتهاء للحفاظ على الصوت وتجنب التعب السمعي." }]
    }
  },
  de: {
    "bass-tuner": {
      heroTitle: "Bass-Tuner online kostenlos",
      heroDescription: "Stimme den Bass schnell im Browser mit Mikrofon-Erkennung, Standard- und alternativen Stimmungen.",
      highlights: [{ label: "Eingang", value: "Mikrofon + Referenztöne" }, { label: "Stimmungen", value: "Standard, Drop D, 5-Saiter" }, { label: "Ideal für", value: "E-Bass und Akustikbass" }],
      quickAnswers: [{ title: "Funktioniert es für 5-Saiter-Bass?", body: "Ja. Wähle das 5-Saiter-Preset und stimme alle Saiten inklusive tiefer H-Saite." }, { title: "Wie bekomme ich eine stabilere Anzeige?", body: "Zupfe die Saite fest und warte kurz. Tiefe Frequenzen brauchen einen Moment länger zum Einpendeln." }],
      sections: [{ title: "Schnell in Stimmung kommen", body: "Mikrofon aktivieren, eine Saite klar anschlagen und warten bis die Anzeige stabil ist, dann anpassen." }, { title: "Standard- und alternative Bass-Stimmungen", body: "Standard E A D G passt zu den meisten Genres. Drop D liefert einen tieferen Grundton. 5-Saiter fügt tiefes H hinzu." }],
      faqs: [{ question: "Wie stimme ich Bass mit Mikrofon?", answer: "Mikrofon aktivieren, eine Saite klar anschlagen und kurz warten bis die Nadel stabil ist, dann in Richtung Mitte anpassen." }, { question: "Was ist Standard-Bass-Stimmung?", answer: "Standard-Bass-Stimmung für 4 Saiten ist E1 A1 D2 G2, von tiefster zu höchster Saite." }]
    },
    "ukulele-tuner": {
      heroTitle: "Ukulele-Tuner online kostenlos",
      heroDescription: "Stimme Ukulele schnell im Browser mit GCEA, Low G und anderen Varianten.",
      highlights: [{ label: "Eingang", value: "Mikrofon + Referenztöne" }, { label: "Stimmungen", value: "GCEA, Low G, Bariton" }, { label: "Ideal für", value: "Sopran, Konzert, Tenor" }],
      quickAnswers: [{ title: "Was ist Standard-Ukulele-Stimmung?", body: "Sopran, Konzert und Tenor verwenden G4-C4-E4-A4. Bariton verwendet D-G-B-E." }, { title: "Was ist der Unterschied zwischen High G und Low G?", body: "High G ist die Standard-Wiedereinstimmung. Low G ersetzt sie durch eine tiefere G-Saite für einen dunkleren Klang." }],
      sections: [{ title: "Schnell stimmen", body: "GCEA-Preset wählen, Mikrofon aktivieren und jede Saite einzeln anschlagen bis die Anzeige stabil ist." }, { title: "Häufige Stimmungen", body: "Beginne mit GCEA. Probiere Low G für einen tieferen Klang oder D-Stimmung für eine hellere Note." }],
      faqs: [{ question: "Wie stimme ich Ukulele mit Mikrofon?", answer: "Mikrofon aktivieren, jede Saite klar anschlagen und anpassen, bis die Nadel in der Mitte steht." }, { question: "Funktioniert es für Bariton-Ukulele?", answer: "Ja. Wähle das D-G-B-E-Preset für Bariton." }]
    },
    "sound-level-meter": {
      heroTitle: "Schallpegelmesser online kostenlos",
      heroDescription: "Miss den Schallpegel im Raum mit dem Browser-Mikrofon und Echtzeit-dB-Anzeige.",
      highlights: [{ label: "Messung", value: "Geschätzter dB via Mikrofon" }, { label: "Anzeige", value: "Live-Grafik mit Min/Max/Mittel" }, { label: "Verwendung", value: "Übungsraumkontrolle" }],
      quickAnswers: [{ title: "Ist es für die Praxis genau genug?", body: "Ja, zum Vergleich von Umgebungen und zum Verfolgen lauter Übungseinheiten. Nicht für professionelle Messungen zertifiziert." }, { title: "Welcher Pegel ist sicher zum Üben?", body: "60-75 dB für akustische Instrumente. Dauerhaft über 85 dB kann das Gehör belasten." }],
      sections: [{ title: "Wie man den Messgerät verwendet", body: "Mikrofon aktivieren, Gerät ruhig halten und dB-Werte in Echtzeit sowie Durchschnitt beobachten." }, { title: "Messwerte interpretieren", body: "Stille Räume 30-45 dB. Normales Gespräch ca. 60 dB. Lautes Üben 75-85 dB oder mehr." }],
      faqs: [{ question: "Wie genau ist das Messgerät?", answer: "Es ist eine Schätzung basierend auf dem Mikrofonsignal, nicht professionell zertifiziert, aber nützlich für Vergleiche." }, { question: "Braucht es eine spezielle Genehmigung?", answer: "Ja, Browser-Mikrofonzugriff wird wie bei den Stimmgeräten benötigt." }]
    },
    "pitch-generator": {
      heroTitle: "Ton-Generator online kostenlos",
      heroDescription: "Erzeuge reine Töne von 20 Hz bis 20000 Hz für Gehörtraining, Referenztöne und Audiotest.",
      highlights: [{ label: "Bereich", value: "20 Hz bis 20000 Hz" }, { label: "Ausgabe", value: "Reiner Sinuston im Browser" }, { label: "Verwendung", value: "Gehörtraining und Referenzton" }],
      quickAnswers: [{ title: "Kann ich Instrumente nach Gehör damit stimmen?", body: "Ja. Stelle die Frequenz auf die gewünschte Note ein und stimme die Saite auf den erzeugten Ton." }, { title: "Sind hohe Frequenzen sicher?", body: "Beginne immer mit niedrigem Volumen, besonders über 8000 Hz, und erhöhe es langsam." }],
      sections: [{ title: "Verwendungsmöglichkeiten", body: "Als Stimmreferenz nach Gehör, zum Training von Intervallen oder zum Testen von Lautsprechern und Kopfhörern." }, { title: "Tipps", body: "Starte mit niedrigem Volumen. Für Stimmreferenz verwende 440 Hz (A4). Beim Testen langsam durch den Frequenzbereich gehen." }],
      faqs: [{ question: "Welche Frequenz entspricht welcher Note?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Andere Noten ergeben sich durch Verdopplung oder Halbierung pro Oktave." }, { question: "Hört der Ton automatisch auf?", answer: "Nein. Drücke auf Stopp wenn du fertig bist, um Hörermüdung zu vermeiden." }]
    }
  },
  en: {
    "bass-tuner": {
      heroTitle: "Bass Tuner Online",
      heroDescription: "Tune bass guitar quickly in your browser with microphone pitch detection, standard and alternate tunings.",
      highlights: [{ label: "Input", value: "Microphone + reference notes" }, { label: "Tunings", value: "Standard, Drop D, 5-string" }, { label: "Best for", value: "Electric and acoustic bass" }],
      quickAnswers: [{ title: "Can I tune a 5-string bass?", body: "Yes. Select the 5-string preset and tune each string including the low B." }, { title: "How do I get a stable reading?", body: "Play one string firmly and hold steady. Low frequencies take a moment longer to register." }],
      sections: [{ title: "Getting in tune fast", body: "Turn on the microphone, play one string at a time and wait for the needle to settle before adjusting the tuning peg." }, { title: "Standard and alternate bass tunings", body: "Standard E A D G fits most genres. Drop D adds a heavier low string. 5-string adds a low B for extended range." }],
      faqs: [{ question: "How do I tune bass with a microphone?", answer: "Enable the microphone, pluck one string clearly and wait a second for the needle to settle, then adjust toward the centre." }, { question: "What is standard bass tuning?", answer: "Standard 4-string bass tuning is E1 A1 D2 G2, from lowest to highest string." }]
    },
    "ukulele-tuner": {
      heroTitle: "Ukulele Tuner Online",
      heroDescription: "Tune ukulele quickly in your browser with GCEA standard tuning, Low G and alternate tunings.",
      highlights: [{ label: "Input", value: "Microphone + reference notes" }, { label: "Tunings", value: "GCEA, Low G, baritone D-G-B-E" }, { label: "Best for", value: "Soprano, concert, tenor, baritone" }],
      quickAnswers: [{ title: "What is standard ukulele tuning?", body: "Soprano, concert and tenor ukulele use G4-C4-E4-A4. Baritone uses D3-G3-B3-E4." }, { title: "What is the difference between High G and Low G?", body: "High G is the standard re-entrant tuning. Low G replaces it with a lower G string for a deeper sound and wider range." }],
      sections: [{ title: "How to tune a ukulele quickly", body: "Select the GCEA preset, enable the microphone and pluck each string until the reading settles, then adjust the peg." }, { title: "Common ukulele tunings", body: "Start with GCEA. Try Low G for a deeper sound, D-tuning for a brighter tone, or baritone D-G-B-E for a guitar-like feel." }],
      faqs: [{ question: "How do I tune ukulele with a microphone?", answer: "Enable the microphone, pluck each string clearly and adjust the peg until the needle centres on the correct note." }, { question: "Does it work for baritone ukulele?", answer: "Yes. Select the D-G-B-E baritone preset and tune each string accordingly." }]
    },
    "sound-level-meter": {
      heroTitle: "Sound Level Meter Online",
      heroDescription: "Measure estimated sound levels in dB with your browser microphone and a real-time graph.",
      highlights: [{ label: "Reading", value: "Estimated dB via microphone" }, { label: "Display", value: "Live graph with min/max/average" }, { label: "Use", value: "Practice environment checks" }],
      quickAnswers: [{ title: "Is it accurate enough for practice?", body: "Yes for comparing environments and tracking loud sessions. Not certified for professional measurement." }, { title: "What is a safe level for music practice?", body: "60–75 dB for acoustic instruments. Sustained levels above 85 dB can cause long-term hearing fatigue." }],
      sections: [{ title: "How to use the sound level meter", body: "Enable the microphone, keep the device still in the room and watch the live dB readout and the rolling average." }, { title: "Interpreting the readings", body: "Quiet rooms read 30–45 dB. Normal conversation around 60 dB. Loud practice sessions typically 75–90 dB." }],
      faqs: [{ question: "How accurate is the meter?", answer: "It is an estimate based on the microphone signal, not professionally calibrated, but useful for comparisons and monitoring." }, { question: "Does it need any special permission?", answer: "Yes, browser microphone access is required, just like the instrument tuners." }]
    },
    "pitch-generator": {
      heroTitle: "Pitch Generator Online",
      heroDescription: "Generate pure tones from 20 Hz to 20000 Hz for ear training, instrument reference and audio testing.",
      highlights: [{ label: "Range", value: "20 Hz to 20000 Hz" }, { label: "Output", value: "Pure sine tone in browser" }, { label: "Use", value: "Ear training and reference pitch" }],
      quickAnswers: [{ title: "Can I use it to tune instruments by ear?", body: "Yes. Set the frequency to the note you need, then match your instrument string to the generated tone." }, { title: "Are high frequencies safe?", body: "Always start at low volume, especially above 8000 Hz, and raise gradually." }],
      sections: [{ title: "What the pitch generator is good for", body: "Use it as a reference pitch to tune by ear, to practice interval recognition, or to test speakers and headphones." }, { title: "Usage tips", body: "Start at low volume. For reference pitch use 440 Hz (A4). When testing, sweep slowly through the range." }],
      faqs: [{ question: "Which frequency matches which note?", answer: "A4 = 440 Hz. C4 = 261.6 Hz. G4 = 392 Hz. Other notes follow by doubling or halving per octave." }, { question: "Does the tone stop automatically?", answer: "No. Always press Stop when finished to avoid listener fatigue." }]
    }
  },
  es: {
    "bass-tuner": {
      heroTitle: "Afinador de bajo online gratis",
      heroDescription: "Afina el bajo rapidamente en el navegador con deteccion por microfono y afinaciones standard y alternativas.",
      highlights: [{ label: "Entrada", value: "Microfono + notas de referencia" }, { label: "Afinaciones", value: "Standard, Drop D, 5 cuerdas" }, { label: "Ideal para", value: "Bajo electrico y acustico" }],
      quickAnswers: [{ title: "Funciona con bajo de 5 cuerdas?", body: "Si. Selecciona el preset de 5 cuerdas y afina cada cuerda incluyendo el Si grave." }, { title: "Como obtengo una lectura mas estable?", body: "Toca la cuerda con fuerza y espera un momento. Las frecuencias bajas tardan mas en estabilizarse." }],
      sections: [{ title: "Afinar el bajo rapido", body: "Activa el microfono, toca una cuerda cada vez y espera a que la aguja se estabilice antes de ajustar la clavija." }, { title: "Afinaciones comunes del bajo", body: "Standard E A D G se adapta a la mayoria de generos. Drop D añade un bajo mas potente. 5 cuerdas añade Si grave." }],
      faqs: [{ question: "Como afino el bajo con microfono?", answer: "Activa el microfono, puntea una cuerda con claridad y espera a que la aguja se estabilice, luego ajusta hacia el centro." }, { question: "Cual es la afinacion estandar del bajo?", answer: "La afinacion estandar del bajo de 4 cuerdas es E1 A1 D2 G2, de la mas grave a la mas aguda." }]
    },
    "ukulele-tuner": {
      heroTitle: "Afinador de ukelele online gratis",
      heroDescription: "Afina el ukelele rapidamente con GCEA estandar, Low G y otras variantes.",
      highlights: [{ label: "Entrada", value: "Microfono + notas de referencia" }, { label: "Afinaciones", value: "GCEA, Low G, baritono" }, { label: "Ideal para", value: "Soprano, concierto, tenor" }],
      quickAnswers: [{ title: "Cual es la afinacion estandar del ukelele?", body: "Soprano, concierto y tenor usan G4-C4-E4-A4. Baritono usa D3-G3-B3-E4." }, { title: "Que diferencia hay entre High G y Low G?", body: "High G es la afinacion reentrante estandar. Low G la sustituye por una cuerda Sol mas grave para un sonido mas profundo." }],
      sections: [{ title: "Como afinar el ukelele rapido", body: "Selecciona el preset GCEA, activa el microfono y puntea cada cuerda hasta que la lectura se estabilice." }, { title: "Afinaciones comunes", body: "Empieza con GCEA. Prueba Low G para un sonido mas oscuro o D-tuning para un tono mas brillante." }],
      faqs: [{ question: "Como afino el ukelele con microfono?", answer: "Activa el microfono, puntea cada cuerda con claridad y ajusta la clavija hasta que la aguja apunte a la nota correcta." }, { question: "Funciona para ukelele baritono?", answer: "Si. Selecciona el preset D-G-B-E para baritono." }]
    },
    "sound-level-meter": {
      heroTitle: "Sonometro online gratis",
      heroDescription: "Mide el nivel sonoro estimado en dB con el microfono del navegador y un grafico en tiempo real.",
      highlights: [{ label: "Lectura", value: "dB estimado via microfono" }, { label: "Pantalla", value: "Grafico con min/max/promedio" }, { label: "Uso", value: "Control del entorno de practica" }],
      quickAnswers: [{ title: "Es suficientemente preciso para la practica?", body: "Si para comparar entornos y monitorizar sesiones ruidosas. No certificado para medicion profesional." }, { title: "Que nivel es seguro para practicar musica?", body: "60-75 dB para instrumentos acusticos. Niveles sostenidos por encima de 85 dB pueden cansar el oido." }],
      sections: [{ title: "Como usar el sonometro", body: "Activa el microfono, mantén el dispositivo quieto y observa la lectura de dB en tiempo real y el promedio." }, { title: "Interpretacion de los valores", body: "Salas silenciosas 30-45 dB. Conversacion normal unos 60 dB. Practica intensa 75-90 dB." }],
      faqs: [{ question: "Que tan preciso es el medidor?", answer: "Es una estimacion basada en la senal del microfono, no calibrado profesionalmente, pero util para comparaciones." }, { question: "Necesita algun permiso especial?", answer: "Si, requiere acceso al microfono del navegador, igual que los afinadores." }]
    },
    "pitch-generator": {
      heroTitle: "Generador de tono online gratis",
      heroDescription: "Genera tonos puros de 20 Hz a 20000 Hz para entrenamiento auditivo, referencia de notas y pruebas de audio.",
      highlights: [{ label: "Rango", value: "20 Hz a 20000 Hz" }, { label: "Salida", value: "Tono sinusoidal puro en el navegador" }, { label: "Uso", value: "Ear training y referencia de nota" }],
      quickAnswers: [{ title: "Puedo usarlo para afinar por oido?", body: "Si. Ajusta la frecuencia a la nota que necesitas y afina la cuerda de tu instrumento hasta que coincida con el tono." }, { title: "Son seguras las frecuencias altas?", body: "Empieza siempre con volumen bajo, especialmente por encima de 8000 Hz, y subelo poco a poco." }],
      sections: [{ title: "Para que sirve el generador de tonos", body: "Usalo como referencia para afinar de oido, practicar intervalos o probar altavoces y auriculares." }, { title: "Consejos de uso", body: "Empieza con volumen bajo. Para referencia usa 440 Hz (La4). Al probar, barre lentamente por el rango de frecuencias." }],
      faqs: [{ question: "Que frecuencia corresponde a cada nota?", answer: "La4 = 440 Hz. Do4 = 261.6 Hz. Sol4 = 392 Hz. El resto se obtiene duplicando o dividiendo a la mitad por octava." }, { question: "Se detiene el sonido automaticamente?", answer: "No. Siempre pulsa Detener al terminar para evitar la fatiga auditiva." }]
    }
  },
  fr: {
    "bass-tuner": {
      heroTitle: "Accordeur basse gratuit en ligne",
      heroDescription: "Accordez la basse rapidement dans le navigateur avec detection micro et accordages standard et alternatifs.",
      highlights: [{ label: "Entree", value: "Microphone + notes de reference" }, { label: "Accordages", value: "Standard, Drop D, 5 cordes" }, { label: "Ideal pour", value: "Basse electrique et acoustique" }],
      quickAnswers: [{ title: "Fonctionne avec une basse 5 cordes?", body: "Oui. Selectionnez le preset 5 cordes et accordez chaque corde y compris le Si grave." }, { title: "Comment obtenir une lecture stable?", body: "Jouez la corde fermement et patientez un moment. Les basses frequences mettent plus de temps a se stabiliser." }],
      sections: [{ title: "Accorder la basse rapidement", body: "Activez le microphone, jouez une corde a la fois et attendez que l'aiguille se stabilise avant de regler la mecanique." }, { title: "Accordages courants de basse", body: "Standard E A D G convient a la plupart des genres. Drop D ajoute une grave plus lourde. 5 cordes ajoute un Si grave." }],
      faqs: [{ question: "Comment accorder la basse avec microphone?", answer: "Activez le microphone, pincez une corde clairement et attendez que l'aiguille se stabilise, puis ajustez vers le centre." }, { question: "Quel est l'accordage standard de la basse?", answer: "L'accordage standard basse 4 cordes est E1 A1 D2 G2, de la plus grave a la plus aigue." }]
    },
    "ukulele-tuner": {
      heroTitle: "Accordeur ukulele gratuit en ligne",
      heroDescription: "Accordez l'ukulele rapidement avec GCEA standard, Low G et autres variantes.",
      highlights: [{ label: "Entree", value: "Microphone + notes de reference" }, { label: "Accordages", value: "GCEA, Low G, baryton" }, { label: "Ideal pour", value: "Soprano, concert, tenor" }],
      quickAnswers: [{ title: "Quel est l'accordage standard de l'ukulele?", body: "Soprano, concert et tenor utilisent G4-C4-E4-A4. Baryton utilise D3-G3-B3-E4." }, { title: "Quelle difference entre High G et Low G?", body: "High G est l'accordage re-entrant standard. Low G remplace le Sol par une corde plus grave pour un son plus profond." }],
      sections: [{ title: "Comment accorder l'ukulele rapidement", body: "Choisissez le preset GCEA, activez le micro et pincez chaque corde jusqu'a ce que la lecture se stabilise." }, { title: "Accordages courants", body: "Commencez par GCEA. Essayez Low G pour un son plus grave ou D-accordage pour une tonalite plus brillante." }],
      faqs: [{ question: "Comment accorder l'ukulele avec microphone?", answer: "Activez le micro, pincez chaque corde clairement et ajustez la mecanique jusqu'a ce que l'aiguille soit au centre." }, { question: "Fonctionne pour ukulele baryton?", answer: "Oui. Selectionnez le preset D-G-B-E pour baryton." }]
    },
    "sound-level-meter": {
      heroTitle: "Sonometre gratuit en ligne",
      heroDescription: "Mesurez le niveau sonore estime en dB avec le microphone du navigateur et un graphique en temps reel.",
      highlights: [{ label: "Lecture", value: "dB estime via microphone" }, { label: "Affichage", value: "Graphique avec min/max/moyenne" }, { label: "Usage", value: "Controle de l'environnement de pratique" }],
      quickAnswers: [{ title: "Assez precis pour la pratique?", body: "Oui pour comparer des environnements et suivre des sessions bruyantes. Non certifie pour mesure professionnelle." }, { title: "Quel niveau est sur pour la pratique musicale?", body: "60-75 dB pour instruments acoustiques. Niveaux soutenus au-dessus de 85 dB peuvent fatiguer l'ouie." }],
      sections: [{ title: "Comment utiliser le sonometre", body: "Activez le micro, gardez l'appareil stable et observez les valeurs dB en temps reel et la moyenne." }, { title: "Interpreter les mesures", body: "Salles silencieuses 30-45 dB. Conversation normale environ 60 dB. Pratique intense 75-90 dB." }],
      faqs: [{ question: "Quelle est la precision du metre?", answer: "C'est une estimation basee sur le signal microphone, non calibree professionnellement mais utile pour les comparaisons." }, { question: "Necessite-t-il une permission speciale?", answer: "Oui, l'acces au microphone du navigateur est requis, comme pour les accordeurs." }]
    },
    "pitch-generator": {
      heroTitle: "Generateur de son gratuit en ligne",
      heroDescription: "Generez des tonalites pures de 20 Hz a 20000 Hz pour l'ear training, la reference de notes et les tests audio.",
      highlights: [{ label: "Plage", value: "20 Hz a 20000 Hz" }, { label: "Sortie", value: "Ton sinusoidal pur dans le navigateur" }, { label: "Usage", value: "Ear training et reference de hauteur" }],
      quickAnswers: [{ title: "Puis-je accorder des instruments a l'oreille?", body: "Oui. Reglez la frequence sur la note voulue et accordez votre instrument jusqu'a ce qu'il corresponde au ton genere." }, { title: "Les hautes frequences sont-elles sures?", body: "Commencez toujours a faible volume, surtout au-dessus de 8000 Hz, et montez progressivement." }],
      sections: [{ title: "A quoi sert le generateur de sons", body: "Utilisez-le comme reference pour accorder a l'oreille, pratiquer les intervalles ou tester haut-parleurs et casques." }, { title: "Conseils d'utilisation", body: "Commencez a faible volume. Pour reference utilisez 440 Hz (La4). Pour les tests, balayez lentement les frequences." }],
      faqs: [{ question: "Quelle frequence correspond a quelle note?", answer: "La4 = 440 Hz. Do4 = 261.6 Hz. Sol4 = 392 Hz. Les autres notes suivent en doublant ou divisant par deux par octave." }, { question: "Le son s'arrete-t-il automatiquement?", answer: "Non. Appuyez toujours sur Arreter quand vous avez fini pour eviter la fatigue auditive." }]
    }
  },
  it: {
    "bass-tuner": {
      heroTitle: "Accordatore basso online gratis",
      heroDescription: "Accorda il basso velocemente nel browser con rilevamento microfono e accordature standard e alternative.",
      highlights: [{ label: "Ingresso", value: "Microfono + note di riferimento" }, { label: "Accordature", value: "Standard, Drop D, 5 corde" }, { label: "Ideale per", value: "Basso elettrico e acustico" }],
      quickAnswers: [{ title: "Funziona con il basso a 5 corde?", body: "Si. Seleziona il preset a 5 corde e accorda ogni corda incluso il Si grave." }, { title: "Come ottengo una lettura piu stabile?", body: "Pizzica la corda con forza e aspetta un momento. Le frequenze basse impiegano piu tempo a stabilizzarsi." }],
      sections: [{ title: "Accordarsi velocemente", body: "Attiva il microfono, pizzica una corda alla volta e aspetta che l'ago si stabilizzi prima di agire sulla meccanica." }, { title: "Accordature comuni del basso", body: "Standard Mi La Re Sol si adatta alla maggior parte dei generi. Drop D aggiunge un basso piu pesante. 5 corde aggiunge Si grave." }],
      faqs: [{ question: "Come accordo il basso con il microfono?", answer: "Attiva il microfono, pizzica una corda chiaramente e aspetta che l'ago si stabilizzi, poi avvicinalo al centro." }, { question: "Qual e l'accordatura standard del basso?", answer: "L'accordatura standard del basso a 4 corde e Mi La Re Sol, dalla piu grave alla piu acuta." }]
    },
    "ukulele-tuner": {
      heroTitle: "Accordatore ukulele online gratis",
      heroDescription: "Accorda l'ukulele velocemente con GCEA standard, Low G e altre varianti.",
      highlights: [{ label: "Ingresso", value: "Microfono + note di riferimento" }, { label: "Accordature", value: "GCEA, Low G, baritono" }, { label: "Ideale per", value: "Soprano, concerto, tenore" }],
      quickAnswers: [{ title: "Qual e l'accordatura standard dell'ukulele?", body: "Soprano, concerto e tenore usano G4-C4-E4-A4. Baritono usa D3-G3-B3-E4." }, { title: "Qual e la differenza tra High G e Low G?", body: "High G e l'accordatura rientrante standard. Low G la sostituisce con una corda Sol piu bassa per un suono piu profondo." }],
      sections: [{ title: "Come accordare l'ukulele velocemente", body: "Seleziona il preset GCEA, attiva il microfono e pizzica ogni corda finche la lettura non si stabilizza." }, { title: "Accordature comuni", body: "Inizia con GCEA. Prova Low G per un suono piu scuro o l'accordatura D per un tono piu brillante." }],
      faqs: [{ question: "Come accordo l'ukulele con il microfono?", answer: "Attiva il microfono, pizzica ogni corda chiaramente e regola la meccanica finche l'ago non punta alla nota giusta." }, { question: "Funziona per ukulele baritono?", answer: "Si. Seleziona il preset D-G-B-E per baritono." }]
    },
    "sound-level-meter": {
      heroTitle: "Fonometro online gratis",
      heroDescription: "Misura il livello sonoro stimato in dB con il microfono del browser e un grafico in tempo reale.",
      highlights: [{ label: "Lettura", value: "dB stimato via microfono" }, { label: "Display", value: "Grafico con min/max/media" }, { label: "Uso", value: "Controllo ambiente di studio" }],
      quickAnswers: [{ title: "E abbastanza preciso per la pratica?", body: "Si per confrontare ambienti e monitorare sessioni rumorose. Non certificato per misurazioni professionali." }, { title: "Qual e il livello sicuro per la pratica musicale?", body: "60-75 dB per strumenti acustici. Livelli sostenuti oltre 85 dB possono affaticare l'udito." }],
      sections: [{ title: "Come usare il fonometro", body: "Attiva il microfono, tieni il dispositivo fermo e osserva i valori dB in tempo reale e la media progressiva." }, { title: "Interpretare le misure", body: "Stanze silenziose 30-45 dB. Conversazione normale circa 60 dB. Pratica intensa 75-90 dB." }],
      faqs: [{ question: "Quanto e preciso il misuratore?", answer: "E una stima basata sul segnale del microfono, non calibrata professionalmente, ma utile per confronti e monitoraggio." }, { question: "Richiede permessi speciali?", answer: "Si, e necessario l'accesso al microfono del browser, esattamente come gli accordatori." }]
    },
    "pitch-generator": {
      heroTitle: "Generatore di toni online gratis",
      heroDescription: "Genera toni puri da 20 Hz a 20000 Hz per ear training, intonazione strumenti e test audio.",
      highlights: [{ label: "Range", value: "Da 20 Hz a 20000 Hz" }, { label: "Output", value: "Tono sinusoidale puro nel browser" }, { label: "Uso", value: "Ear training e nota di riferimento" }],
      quickAnswers: [{ title: "Posso accordare strumenti a orecchio?", body: "Si. Imposta la frequenza sulla nota che ti serve e accordali finche coincide con il tono generato." }, { title: "Le frequenze alte sono sicure?", body: "Inizia sempre con volume basso, specialmente sopra 8000 Hz, e aumenta gradualmente." }],
      sections: [{ title: "A cosa serve il generatore di toni", body: "Usalo come riferimento per accordare a orecchio, praticare intervalli o testare altoparlanti e cuffie." }, { title: "Consigli d'uso", body: "Inizia con volume basso. Per la nota di riferimento usa 440 Hz (La4). Per i test, scorri lentamente le frequenze." }],
      faqs: [{ question: "Quale frequenza corrisponde a quale nota?", answer: "La4 = 440 Hz. Do4 = 261.6 Hz. Sol4 = 392 Hz. Le altre note seguono raddoppiando o dimezzando per ogni ottava." }, { question: "Il suono si ferma automaticamente?", answer: "No. Premi sempre Stop quando hai finito per evitare l'affaticamento uditivo." }]
    }
  },
  ja: {
    "bass-tuner": {
      heroTitle: "無料オンライン ベースチューナー",
      heroDescription: "マイクを使ってブラウザでベースを素早くチューニング。標準と代替チューニングに対応。",
      highlights: [{ label: "入力", value: "マイク＋基準音" }, { label: "チューニング", value: "Standard、Drop D、5弦" }, { label: "対象", value: "エレキベース・アコースティックベース" }],
      quickAnswers: [{ title: "5弦ベースに対応していますか？", body: "はい。5弦プリセットを選択し、低いB弦を含む全弦を調弦してください。" }, { title: "安定した読み取りを得るには？", body: "弦をしっかり弾いて少し待ちます。低い周波数は安定するまで少し時間がかかります。" }],
      sections: [{ title: "素早く調弦する方法", body: "マイクをオンにして1本ずつ弦を弾き、ニードルが安定してからペグを調整してください。" }, { title: "ベースの一般的なチューニング", body: "スタンダードE A D Gはほとんどのジャンルに合います。Drop Dは重い低音を、5弦は低いBを追加します。" }],
      faqs: [{ question: "マイクでベースを調弦するには？", answer: "マイクを有効にして1本の弦をはっきり弾き、ニードルが安定してから中央に向けて調整します。" }, { question: "ベースの標準チューニングは？", answer: "4弦ベースの標準チューニングはE1 A1 D2 G2で、最低弦から順番です。" }]
    },
    "ukulele-tuner": {
      heroTitle: "無料オンライン ウクレレチューナー",
      heroDescription: "GCEA標準、Low Gなどのチューニングでウクレレをブラウザで素早く調弦。",
      highlights: [{ label: "入力", value: "マイク＋基準音" }, { label: "チューニング", value: "GCEA、Low G、バリトン" }, { label: "対象", value: "ソプラノ、コンサート、テナー" }],
      quickAnswers: [{ title: "ウクレレの標準チューニングは？", body: "ソプラノ・コンサート・テナーはG4-C4-E4-A4。バリトンはD3-G3-B3-E4です。" }, { title: "High GとLow Gの違いは？", body: "High Gは標準の再入チューニング。Low Gは低いG弦に変えて、より深みのある音と広い音域を実現します。" }],
      sections: [{ title: "素早く調弦する方法", body: "GCEAプリセットを選択し、マイクをオンにして各弦を弾き、読み取りが安定したらペグを調整します。" }, { title: "一般的なウクレレチューニング", body: "GCEAから始めましょう。Low Gは深みのある音、D-チューニングは明るいトーンに向いています。" }],
      faqs: [{ question: "マイクでウクレレを調弦するには？", answer: "マイクを有効にして各弦をはっきり弾き、ニードルが正しい音符に向くようペグを調整します。" }, { question: "バリトンウクレレに対応していますか？", answer: "はい。バリトン用のD-G-B-Eプリセットを選択してください。" }]
    },
    "sound-level-meter": {
      heroTitle: "無料オンライン 騒音計",
      heroDescription: "ブラウザのマイクを使ってリアルタイムのdB表示で音量を測定します。",
      highlights: [{ label: "測定", value: "マイクによる推定dB" }, { label: "表示", value: "最小/最大/平均を含むライブグラフ" }, { label: "用途", value: "練習環境の確認" }],
      quickAnswers: [{ title: "練習に十分な精度ですか？", body: "環境の比較や大音量セッションの監視には十分です。プロ用途の認定はされていません。" }, { title: "音楽練習の安全なレベルは？", body: "アコースティック楽器で60〜75 dB。85 dBを超えると長時間で聴覚疲労を引き起こす可能性があります。" }],
      sections: [{ title: "騒音計の使い方", body: "マイクを有効にして機器を静止させ、リアルタイムのdB値と平均値を確認します。" }, { title: "測定値の解釈", body: "静かな部屋は30〜45 dB。通常の会話は約60 dB。大音量の練習は75〜90 dBになります。" }],
      faqs: [{ question: "計測の精度はどれくらいですか？", answer: "マイク信号に基づく推定値でプロ用途の校正はされていませんが、比較や監視に役立ちます。" }, { question: "特別な許可が必要ですか？", answer: "はい、チューナーと同様にブラウザのマイクアクセスが必要です。" }]
    },
    "pitch-generator": {
      heroTitle: "無料オンライン ピッチジェネレーター",
      heroDescription: "20Hzから20000Hzまでの純音を生成。耳のトレーニングや楽器の基準音に。",
      highlights: [{ label: "範囲", value: "20Hz〜20000Hz" }, { label: "出力", value: "ブラウザで純粋なサイン波" }, { label: "用途", value: "耳のトレーニングと基準音" }],
      quickAnswers: [{ title: "耳でチューニングできますか？", body: "はい。必要な音の周波数を設定し、生成された音に楽器を合わせてください。" }, { title: "高い周波数は安全ですか？", body: "特に8000Hz以上では常に低音量から始め、少しずつ上げてください。" }],
      sections: [{ title: "ピッチジェネレーターの用途", body: "耳でのチューニング基準音、インターバルのトレーニング、スピーカーやヘッドフォンのテストに使用できます。" }, { title: "使用上のヒント", body: "低音量から始めましょう。基準音には440Hz（A4）を使用します。テスト時は周波数をゆっくりスイープします。" }],
      faqs: [{ question: "各音符の周波数は？", answer: "A4 = 440Hz。C4 = 261.6Hz。G4 = 392Hz。その他はオクターブごとに2倍か半分です。" }, { question: "音は自動的に止まりますか？", answer: "いいえ。終わったら必ず停止を押して聴覚疲労を避けてください。" }]
    }
  },
  ko: {
    "bass-tuner": {
      heroTitle: "무료 온라인 베이스 튜너",
      heroDescription: "마이크 감지를 사용해 브라우저에서 베이스를 빠르게 조율하세요.",
      highlights: [{ label: "입력", value: "마이크 + 기준음" }, { label: "튜닝", value: "Standard, Drop D, 5현" }, { label: "최적", value: "일렉 베이스·어쿠스틱 베이스" }],
      quickAnswers: [{ title: "5현 베이스도 되나요?", body: "네. 5현 프리셋을 선택하고 낮은 B현을 포함한 모든 줄을 조율하세요." }, { title: "더 안정적인 읽기를 얻으려면?", body: "줄을 세게 튕기고 잠시 기다립니다. 낮은 주파수는 안정되는 데 시간이 조금 더 걸립니다." }],
      sections: [{ title: "빠르게 조율하는 법", body: "마이크를 켜고 한 번에 한 줄씩 튕기며 바늘이 안정될 때까지 기다린 후 페그를 조절하세요." }, { title: "베이스의 일반적인 튜닝", body: "Standard E A D G는 대부분의 장르에 적합합니다. Drop D는 무거운 저음을, 5현은 낮은 B를 추가합니다." }],
      faqs: [{ question: "마이크로 베이스를 조율하는 방법은?", answer: "마이크를 활성화하고 한 줄을 명확히 튕긴 뒤 바늘이 안정되면 중앙을 향해 조율합니다." }, { question: "베이스의 표준 튜닝은?", answer: "4현 베이스 표준 튜닝은 E1 A1 D2 G2입니다. 가장 낮은 줄부터 순서대로입니다." }]
    },
    "ukulele-tuner": {
      heroTitle: "무료 온라인 우쿨렐레 튜너",
      heroDescription: "GCEA 표준, Low G 등의 튜닝으로 브라우저에서 우쿨렐레를 빠르게 조율하세요.",
      highlights: [{ label: "입력", value: "마이크 + 기준음" }, { label: "튜닝", value: "GCEA, Low G, 바리톤" }, { label: "최적", value: "소프라노, 콘서트, 테너" }],
      quickAnswers: [{ title: "우쿨렐레 표준 튜닝은?", body: "소프라노, 콘서트, 테너는 G4-C4-E4-A4를, 바리톤은 D3-G3-B3-E4를 사용합니다." }, { title: "High G와 Low G의 차이는?", body: "High G는 표준 재입력 튜닝입니다. Low G는 더 낮은 G현으로 교체해 깊은 음색과 넓은 음역을 제공합니다." }],
      sections: [{ title: "우쿨렐레 빠르게 조율하는 법", body: "GCEA 프리셋을 선택하고 마이크를 켠 뒤 각 줄을 튕겨 읽기가 안정될 때까지 기다립니다." }, { title: "일반적인 우쿨렐레 튜닝", body: "GCEA부터 시작하세요. 더 어두운 음색은 Low G, 더 밝은 음색은 D 튜닝을 시도해 보세요." }],
      faqs: [{ question: "마이크로 우쿨렐레를 조율하는 방법은?", answer: "마이크를 활성화하고 각 줄을 명확히 튕긴 뒤 바늘이 올바른 음표에 올 때까지 페그를 조절하세요." }, { question: "바리톤 우쿨렐레도 되나요?", answer: "네. 바리톤용 D-G-B-E 프리셋을 선택하세요." }]
    },
    "sound-level-meter": {
      heroTitle: "무료 온라인 소음 측정기",
      heroDescription: "브라우저 마이크를 사용해 실시간 dB 그래프로 소음을 측정하세요.",
      highlights: [{ label: "측정", value: "마이크를 통한 추정 dB" }, { label: "표시", value: "최소/최대/평균 실시간 그래프" }, { label: "용도", value: "연습 환경 확인" }],
      quickAnswers: [{ title: "연습에 충분히 정확한가요?", body: "환경 비교 및 큰 소리 세션 모니터링에 적합합니다. 전문적인 측정용으로 인증되지 않았습니다." }, { title: "음악 연습의 안전한 레벨은?", body: "어쿠스틱 악기는 60~75 dB. 85 dB 이상이 지속되면 청력 피로를 일으킬 수 있습니다." }],
      sections: [{ title: "소음 측정기 사용법", body: "마이크를 켜고 기기를 고정한 채 실시간 dB 값과 평균값을 확인하세요." }, { title: "측정값 해석", body: "조용한 방은 30~45 dB. 일반 대화는 약 60 dB. 격렬한 연습은 75~90 dB입니다." }],
      faqs: [{ question: "측정기의 정확도는?", answer: "마이크 신호 기반 추정값으로 전문 교정은 아니지만 비교 및 모니터링에 유용합니다." }, { question: "특별한 권한이 필요한가요?", answer: "네, 튜너와 마찬가지로 브라우저 마이크 접근 권한이 필요합니다." }]
    },
    "pitch-generator": {
      heroTitle: "무료 온라인 피치 제너레이터",
      heroDescription: "20Hz에서 20000Hz까지 순음을 생성해 귀 훈련과 악기 기준음에 활용하세요.",
      highlights: [{ label: "범위", value: "20Hz ~ 20000Hz" }, { label: "출력", value: "브라우저의 순수 사인파" }, { label: "용도", value: "귀 훈련 및 기준 음" }],
      quickAnswers: [{ title: "귀로 악기를 조율할 수 있나요?", body: "네. 필요한 음의 주파수를 설정하고 생성된 음에 맞춰 악기를 조율하세요." }, { title: "높은 주파수는 안전한가요?", body: "특히 8000Hz 이상에서는 항상 낮은 볼륨으로 시작해 천천히 올리세요." }],
      sections: [{ title: "피치 제너레이터의 활용", body: "귀 조율 기준음, 인터벌 연습, 스피커 및 헤드폰 테스트에 사용할 수 있습니다." }, { title: "사용 팁", body: "낮은 볼륨으로 시작하세요. 기준음은 440Hz(A4)를 사용합니다. 테스트 시 주파수를 천천히 스윕하세요." }],
      faqs: [{ question: "각 음표의 주파수는?", answer: "A4 = 440Hz. C4 = 261.6Hz. G4 = 392Hz. 나머지는 옥타브마다 2배 또는 절반입니다." }, { question: "소리가 자동으로 멈추나요?", answer: "아니요. 마치면 항상 정지를 눌러 청력 피로를 피하세요." }]
    }
  },
  pt: {
    "bass-tuner": {
      heroTitle: "Afinador de baixo online gratis",
      heroDescription: "Afine o baixo rapidamente no navegador com deteccao por microfone e afinacoes padrao e alternativas.",
      highlights: [{ label: "Entrada", value: "Microfone + notas de referencia" }, { label: "Afinacoes", value: "Standard, Drop D, 5 cordas" }, { label: "Ideal para", value: "Baixo eletrico e acustico" }],
      quickAnswers: [{ title: "Funciona com baixo de 5 cordas?", body: "Sim. Selecione o preset de 5 cordas e afine cada corda incluindo o Si grave." }, { title: "Como obter uma leitura mais estavel?", body: "Toque a corda com forca e aguarde um momento. Frequencias baixas demoram mais para estabilizar." }],
      sections: [{ title: "Afinar o baixo rapido", body: "Ative o microfone, toque uma corda de cada vez e aguarde o ponteiro estabilizar antes de ajustar a tarraxa." }, { title: "Afinacoes comuns do baixo", body: "Standard Mi La Re Sol adapta-se a maioria dos generos. Drop D adiciona grave mais pesado. 5 cordas adiciona Si grave." }],
      faqs: [{ question: "Como afino o baixo com microfone?", answer: "Ative o microfone, pince uma corda com clareza e aguarde o ponteiro estabilizar, depois ajuste em direcao ao centro." }, { question: "Qual e a afinacao padrao do baixo?", answer: "A afinacao padrao do baixo de 4 cordas e Mi La Re Sol, da mais grave para a mais aguda." }]
    },
    "ukulele-tuner": {
      heroTitle: "Afinador de ukulele online gratis",
      heroDescription: "Afine o ukulele rapidamente com GCEA padrao, Low G e outras variantes.",
      highlights: [{ label: "Entrada", value: "Microfone + notas de referencia" }, { label: "Afinacoes", value: "GCEA, Low G, baritono" }, { label: "Ideal para", value: "Soprano, concerto, tenor" }],
      quickAnswers: [{ title: "Qual e a afinacao padrao do ukulele?", body: "Soprano, concerto e tenor usam G4-C4-E4-A4. Baritono usa D3-G3-B3-E4." }, { title: "Qual a diferenca entre High G e Low G?", body: "High G e a afinacao reentrante padrao. Low G substitui pelo Sol mais grave para um som mais profundo." }],
      sections: [{ title: "Como afinar o ukulele rapido", body: "Selecione o preset GCEA, ative o microfone e pince cada corda ate a leitura estabilizar." }, { title: "Afinacoes comuns", body: "Comece com GCEA. Experimente Low G para um som mais escuro ou D-afinacao para um tom mais brilhante." }],
      faqs: [{ question: "Como afino o ukulele com microfone?", answer: "Ative o microfone, pince cada corda com clareza e ajuste a tarraxa ate o ponteiro apontar para a nota correta." }, { question: "Funciona para ukulele baritono?", answer: "Sim. Selecione o preset D-G-B-E para baritono." }]
    },
    "sound-level-meter": {
      heroTitle: "Sonometro online gratis",
      heroDescription: "Meca o nivel sonoro estimado em dB com o microfone do navegador e um grafico em tempo real.",
      highlights: [{ label: "Leitura", value: "dB estimado via microfone" }, { label: "Exibicao", value: "Grafico com min/max/media" }, { label: "Uso", value: "Controle do ambiente de pratica" }],
      quickAnswers: [{ title: "E preciso o suficiente para a pratica?", body: "Sim para comparar ambientes e monitorar sessoes ruidosas. Nao certificado para medicao profissional." }, { title: "Qual e o nivel seguro para pratica musical?", body: "60-75 dB para instrumentos acusticos. Niveis sustentados acima de 85 dB podem causar fadiga auditiva." }],
      sections: [{ title: "Como usar o sonometro", body: "Ative o microfone, mantenha o dispositivo quieto e observe os valores de dB em tempo real e a media." }, { title: "Interpretando as medicoes", body: "Salas silenciosas 30-45 dB. Conversa normal cerca de 60 dB. Pratica intensa 75-90 dB." }],
      faqs: [{ question: "Qual a precisao do medidor?", answer: "E uma estimativa baseada no sinal do microfone, nao calibrado profissionalmente, mas util para comparacoes." }, { question: "Precisa de permissao especial?", answer: "Sim, requer acesso ao microfone do navegador, assim como os afinadores." }]
    },
    "pitch-generator": {
      heroTitle: "Gerador de tom online gratis",
      heroDescription: "Gere tons puros de 20 Hz a 20000 Hz para treinamento auditivo, referencia de notas e testes de audio.",
      highlights: [{ label: "Faixa", value: "20 Hz a 20000 Hz" }, { label: "Saida", value: "Tom senoidal puro no navegador" }, { label: "Uso", value: "Ear training e referencia de nota" }],
      quickAnswers: [{ title: "Posso afinar instrumentos de ouvido?", body: "Sim. Ajuste a frequencia para a nota desejada e afine seu instrumento ate coincidir com o tom gerado." }, { title: "Frequencias altas sao seguras?", body: "Comece sempre com volume baixo, especialmente acima de 8000 Hz, e aumente gradualmente." }],
      sections: [{ title: "Para que serve o gerador de tons", body: "Use como referencia para afinar de ouvido, praticar intervalos ou testar alto-falantes e fones de ouvido." }, { title: "Dicas de uso", body: "Comece com volume baixo. Para referencia use 440 Hz (La4). Para testes, percorra lentamente as frequencias." }],
      faqs: [{ question: "Qual frequencia corresponde a qual nota?", answer: "La4 = 440 Hz. Do4 = 261.6 Hz. Sol4 = 392 Hz. As outras notas seguem dobrando ou dividindo por octava." }, { question: "O som para automaticamente?", answer: "Nao. Sempre pressione Parar ao terminar para evitar fadiga auditiva." }]
    }
  },
  ru: {
    "bass-tuner": {
      heroTitle: "Онлайн тюнер для бас-гитары",
      heroDescription: "Быстро настройте бас в браузере с определением тона через микрофон и поддержкой стандартных и альтернативных строёв.",
      highlights: [{ label: "Вход", value: "Микрофон + опорные ноты" }, { label: "Строи", value: "Standard, Drop D, 5-струнный" }, { label: "Для", value: "Электробас и акустический бас" }],
      quickAnswers: [{ title: "Работает с 5-струнным басом?", body: "Да. Выберите пресет для 5 струн и настройте каждую, включая низкую ноту B." }, { title: "Как получить стабильное определение?", body: "Зацепите струну уверенно и подождите немного. Низкие частоты стабилизируются чуть дольше." }],
      sections: [{ title: "Быстро настроить бас", body: "Включите микрофон, играйте по одной струне и ждите, пока стрелка стабилизируется, затем регулируйте колок." }, { title: "Обычные строи баса", body: "Стандартный E A D G подходит для большинства жанров. Drop D даёт более тяжёлый низкий звук. 5 струн добавляет низкий B." }],
      faqs: [{ question: "Как настроить бас с микрофоном?", answer: "Включите микрофон, ударьте по одной струне и подождите, пока стрелка стабилизируется, затем настройте к центру." }, { question: "Какой стандартный строй баса?", answer: "Стандартный строй 4-струнного баса — E1 A1 D2 G2, от низшей к высшей струне." }]
    },
    "ukulele-tuner": {
      heroTitle: "Онлайн тюнер для укулеле",
      heroDescription: "Быстро настройте укулеле в браузере с GCEA, Low G и другими строями.",
      highlights: [{ label: "Вход", value: "Микрофон + опорные ноты" }, { label: "Строи", value: "GCEA, Low G, баритон" }, { label: "Для", value: "Сопрано, концерт, тенор" }],
      quickAnswers: [{ title: "Что такое стандартный строй укулеле?", body: "Сопрано, концерт и тенор используют G4-C4-E4-A4. Баритон использует D3-G3-B3-E4." }, { title: "В чём разница между High G и Low G?", body: "High G — стандартный ре-энтрантный строй. Low G заменяет его на более низкую струну G для более глубокого звука." }],
      sections: [{ title: "Быстро настроить укулеле", body: "Выберите пресет GCEA, включите микрофон и играйте по одной струне, пока показание не стабилизируется." }, { title: "Распространённые строи укулеле", body: "Начните с GCEA. Попробуйте Low G для более глубокого звука или D-строй для более яркого тона." }],
      faqs: [{ question: "Как настроить укулеле с микрофоном?", answer: "Включите микрофон, ударьте по каждой струне отдельно и крутите колок, пока стрелка не укажет на нужную ноту." }, { question: "Работает ли с баритон-укулеле?", answer: "Да. Выберите пресет D-G-B-E для баритона." }]
    },
    "sound-level-meter": {
      heroTitle: "Онлайн шумомер",
      heroDescription: "Измеряйте уровень звука в дБ через микрофон браузера с графиком в реальном времени.",
      highlights: [{ label: "Измерение", value: "Оценочный дБ через микрофон" }, { label: "Отображение", value: "График с мин/макс/средним" }, { label: "Использование", value: "Контроль среды для занятий" }],
      quickAnswers: [{ title: "Достаточно ли точен для практики?", body: "Да для сравнения сред и отслеживания громких сессий. Не сертифицирован для профессиональных измерений." }, { title: "Какой безопасный уровень для музыкальной практики?", body: "60–75 дБ для акустических инструментов. Постоянный уровень выше 85 дБ может утомить слух." }],
      sections: [{ title: "Как использовать шумомер", body: "Включите микрофон, держите устройство неподвижно и следите за показаниями дБ в реальном времени и средним значением." }, { title: "Интерпретация показаний", body: "Тихие комнаты 30–45 дБ. Обычный разговор около 60 дБ. Интенсивные занятия 75–90 дБ." }],
      faqs: [{ question: "Насколько точен измеритель?", answer: "Это оценка на основе сигнала микрофона, не профессионально откалиброванная, но полезная для сравнений." }, { question: "Требуется ли специальное разрешение?", answer: "Да, нужен доступ к микрофону браузера, как и для тюнеров." }]
    },
    "pitch-generator": {
      heroTitle: "Онлайн генератор тонов",
      heroDescription: "Генерируйте чистые тоны от 20 Гц до 20000 Гц для слухового тренинга и настройки инструментов.",
      highlights: [{ label: "Диапазон", value: "20 Гц до 20000 Гц" }, { label: "Выход", value: "Чистая синусоида в браузере" }, { label: "Использование", value: "Слуховой тренинг и опорный тон" }],
      quickAnswers: [{ title: "Можно настраивать инструменты на слух?", body: "Да. Установите частоту нужной ноты и настройте струну инструмента до совпадения с генерируемым тоном." }, { title: "Безопасны ли высокие частоты?", body: "Всегда начинайте с низкой громкости, особенно выше 8000 Гц, и повышайте постепенно." }],
      sections: [{ title: "Для чего генератор тонов", body: "Используйте как опорный тон для настройки на слух, для тренировки интервалов или тестирования колонок и наушников." }, { title: "Советы по использованию", body: "Начните с низкой громкости. Для опорного тона используйте 440 Гц (Ля4). При тестировании медленно проходите по диапазону." }],
      faqs: [{ question: "Какая частота соответствует какой ноте?", answer: "Ля4 = 440 Гц. До4 = 261.6 Гц. Соль4 = 392 Гц. Остальные следуют с удвоением или делением вдвое на каждой октаве." }, { question: "Тон останавливается автоматически?", answer: "Нет. Всегда нажимайте Стоп по окончании, чтобы избежать усталости слуха." }]
    }
  },
  zh: {
    "bass-tuner": {
      heroTitle: "免费在线贝斯调音器",
      heroDescription: "使用浏览器麦克风快速为贝斯调音，支持标准调弦和常见替代调弦。",
      highlights: [{ label: "输入", value: "麦克风＋参考音" }, { label: "调弦", value: "Standard、Drop D、五弦" }, { label: "适用于", value: "电贝斯和原声贝斯" }],
      quickAnswers: [{ title: "支持五弦贝斯吗？", body: "支持。选择五弦预设，调好每根弦，包括低音 B 弦。" }, { title: "如何获得更稳定的读数？", body: "用力拨弦并稍等片刻。低频率音需要更长时间稳定。" }],
      sections: [{ title: "快速调音", body: "开启麦克风，每次拨一根弦，等指针稳定后再调整弦钮。" }, { title: "贝斯常见调弦", body: "Standard E A D G 适合大多数风格。Drop D 增加更重的低音。五弦增加低音 B 弦扩展音域。" }],
      faqs: [{ question: "如何用麦克风为贝斯调音？", answer: "开启麦克风，清晰拨动一根弦，等指针稳定后向中间调整弦钮。" }, { question: "贝斯标准调弦是什么？", answer: "四弦贝斯标准调弦为 E1 A1 D2 G2，从最低弦到最高弦。" }]
    },
    "ukulele-tuner": {
      heroTitle: "免费在线尤克里里调音器",
      heroDescription: "使用 GCEA 标准调弦、低音 G 等调弦方式在浏览器中快速调音。",
      highlights: [{ label: "输入", value: "麦克风＋参考音" }, { label: "调弦", value: "GCEA、低音G、低音型" }, { label: "适用于", value: "高音、音乐会、次中音型" }],
      quickAnswers: [{ title: "尤克里里标准调弦是什么？", body: "高音、音乐会和次中音型使用 G4-C4-E4-A4。低音型使用 D3-G3-B3-E4。" }, { title: "High G 和 Low G 有什么区别？", body: "High G 是标准的再入调弦。Low G 将其替换为更低的 G 弦，获得更深的音色和更宽的音域。" }],
      sections: [{ title: "快速调音", body: "选择 GCEA 预设，开启麦克风，逐根拨弦，等读数稳定后调整弦钮。" }, { title: "常见调弦方式", body: "从 GCEA 开始。Low G 适合更深的音色，D 调弦适合更明亮的音色。" }],
      faqs: [{ question: "如何用麦克风为尤克里里调音？", answer: "开启麦克风，清晰拨动每根弦，调整弦钮直到指针指向正确音符。" }, { question: "支持低音型尤克里里吗？", answer: "支持。选择低音型的 D-G-B-E 预设。" }]
    },
    "sound-level-meter": {
      heroTitle: "免费在线声级计",
      heroDescription: "使用浏览器麦克风测量估计声级（dB），并配有实时图表。",
      highlights: [{ label: "读数", value: "麦克风估计 dB" }, { label: "显示", value: "含最小/最大/平均的实时图表" }, { label: "用途", value: "检查练习环境" }],
      quickAnswers: [{ title: "对练习来说足够准确吗？", body: "用于比较环境和监控嘈杂练习已足够。未经专业测量认证。" }, { title: "音乐练习的安全音量是多少？", body: "原声乐器 60~75 dB。持续超过 85 dB 可能造成听力疲劳。" }],
      sections: [{ title: "如何使用声级计", body: "开启麦克风，保持设备静止，观察实时 dB 值和滚动平均值。" }, { title: "解读测量结果", body: "安静房间 30~45 dB。正常交谈约 60 dB。高强度练习 75~90 dB。" }],
      faqs: [{ question: "测量精度如何？", answer: "基于麦克风信号的估计值，非专业校准，但适合比较和监控。" }, { question: "需要特殊权限吗？", answer: "需要，与调音器相同，需要浏览器麦克风访问权限。" }]
    },
    "pitch-generator": {
      heroTitle: "免费在线音调发生器",
      heroDescription: "生成 20Hz 至 20000Hz 的纯音，用于耳音训练、乐器参考音和音频测试。",
      highlights: [{ label: "范围", value: "20Hz 至 20000Hz" }, { label: "输出", value: "浏览器内纯正弦波" }, { label: "用途", value: "耳音训练和参考音" }],
      quickAnswers: [{ title: "可以用来靠听觉调音吗？", body: "可以。设置所需音符的频率，将乐器弦调至与生成音匹配。" }, { title: "高频率安全吗？", body: "始终从低音量开始，特别是 8000Hz 以上，然后慢慢增加。" }],
      sections: [{ title: "音调发生器的用途", body: "用作靠听觉调音的参考音、练习音程识别，或测试扬声器和耳机。" }, { title: "使用技巧", body: "从低音量开始。参考音使用 440Hz（A4）。测试时缓慢扫描频率范围。" }],
      faqs: [{ question: "各音符对应什么频率？", answer: "A4 = 440Hz。C4 = 261.6Hz。G4 = 392Hz。其他音符按每个八度加倍或减半推算。" }, { question: "声音会自动停止吗？", answer: "不会。完成后请务必按下停止以避免听觉疲劳。" }]
    }
  }
};

// Native SEO content for extended locales that would otherwise fall back to a base
// locale (hi/nl/pl/tr/cs/sv/no all map to en via localeFallbacks). pt-BR is omitted
// on purpose: it inherits correct Portuguese content from pt.
const extendedToolSeoEnhancements: Partial<Record<Locale, Partial<Record<ToolSlug, ToolSeoEnhancement>>>> = {
  hi: {
    "guitar-tuner": {
      heroTitle: "मुफ़्त ऑनलाइन गिटार ट्यूनर",
      heroDescription:
        "माइक्रोफ़ोन पिच डिटेक्शन और रेफरेंस नोट्स के साथ अकॉस्टिक, इलेक्ट्रिक या क्लासिकल गिटार ट्यून करें — Standard, Drop D, Eb, D Standard, Open D और Open G सपोर्ट।",
      highlights: [
        { label: "इनपुट", value: "माइक्रोफ़ोन + रेफरेंस नोट्स" },
        { label: "ट्यूनिंग", value: "Standard, Drop और Open" },
        { label: "बेस्ट फ़ॉर", value: "क्लासिकल, अकॉस्टिक और इलेक्ट्रिक" }
      ],
      quickAnswers: [
        { title: "क्या यह तेज़ ट्यूनिंग के लिए अच्छा है?", body: "हाँ। माइक्रोफ़ोन चालू करें, एक बार में एक तार बजाएं और रीडिंग स्थिर होने का इंतज़ार करें, फिर समायोजित करें।" },
        { title: "आगे कौन सी ट्यूनिंग आज़माएं?", body: "Standard के बाद Drop D सबसे आसान अगला कदम है, जबकि Eb Standard पूरे वाद्य को नीचे कर देता है।" }
      ],
      sections: [
        { title: "सही ट्यूनिंग चुनें", body: "ज़्यादातर गानों के लिए Standard ट्यूनिंग, नीचे के रिफ़ के लिए Drop D, कम तनाव के लिए Eb Standard, और ओपन कॉर्ड साउंड के लिए Open G या Open D का इस्तेमाल करें।" },
        { title: "ज़्यादा स्थिर रीडिंग पाएं", body: "वाद्य को माइक्रोफ़ोन के पास रखें, एक बार में एक तार बजाएं और समायोजित करने से पहले पिच के स्थिर होने का थोड़ा इंतज़ार करें।" },
        { title: "कॉर्ड और की", body: "जब कोई गाना बहुत ऊँचा या बहुत नीचा लगे तो कॉर्ड ट्रांसपोज़र का उपयोग करें। हर कॉर्ड को समान संख्या में सेमीटोन से खिसकाएं।" }
      ],
      faqs: [
        { question: "सुई क्यों उछलती है?", answer: "कमरे का शोर या एक साथ बजते कई तार पिच डिटेक्शन को भ्रमित कर सकते हैं। एक तार साफ़ बजाएं और उसे स्थिर होने दें।" },
        { question: "शुरुआती लोगों को कौन सी ट्यूनिंग इस्तेमाल करनी चाहिए?", answer: "छह तार वाले गिटार के लिए Drop D, Eb Standard या ओपन ट्यूनिंग आज़माने से पहले Standard E A D G B E से शुरू करें।" }
      ]
    },
    metronome: {
      heroTitle: "BPM और सबडिवीज़न वाला ऑनलाइन मेट्रोनोम",
      heroDescription:
        "सटीक BPM कंट्रोल, सबडिवीज़न, एक्सेंट, Tap Tempo और प्रगतिशील स्पीड साइकिल वाले पूर्ण ऑनलाइन मेट्रोनोम के साथ अभ्यास करें।",
      highlights: [
        { label: "टेम्पो", value: "सटीक BPM + Tap Tempo" },
        { label: "रिदम", value: "एक्सेंट और सबडिवीज़न" },
        { label: "रूटीन", value: "टारगेट BPM तक अभ्यास साइकिल" }
      ],
      quickAnswers: [
        { title: "शुरुआती किस BPM से शुरू करें?", body: "उस सबसे तेज़ टेम्पो से शुरू करें जहाँ आप साफ़ और आराम से बजा सकें, फिर छोटे-छोटे कदमों में बढ़ाएं।" },
        { title: "सबडिवीज़न क्यों इस्तेमाल करें?", body: "सबडिवीज़न भीतरी पल्स को स्पष्ट बनाते हैं और टाइमिंग, ग्रूव व निरंतरता में बहुत मदद करते हैं।" }
      ],
      sections: [
        { title: "बेहतर अभ्यास तरीका", body: "धीरे शुरू करें, पहले बीट पर एक्सेंट दें और कई साफ़ साइकिल के बाद ही BPM बढ़ाएं।" },
        { title: "स्पीड बढ़ाने की रूटीन", body: "अभ्यास साइकिल का उपयोग करके चुने हुए बार या सेकंड के बाद शुरुआती BPM से टारगेट BPM तक छोटे कदमों में बढ़ें।" }
      ],
      faqs: [
        { question: "मुझे किस BPM पर अभ्यास करना चाहिए?", answer: "उस सबसे तेज़ टेम्पो से शुरू करें जहाँ आप साफ़ और आराम से बजा सकें, फिर धीरे-धीरे बढ़ाएं।" },
        { question: "सबडिवीज़न क्यों इस्तेमाल करें?", answer: "ये हर बीट के अंदर की लय सुनने में मदद करते हैं, सिर्फ़ मुख्य क्लिक नहीं।" }
      ]
    },
    "tap-bpm": {
      heroTitle: "ऑनलाइन Tap BPM काउंटर",
      heroDescription:
        "किसी भी गाने के साथ टैप करें, तुरंत और औसत BPM पाएं, नतीजा कॉपी करें और सीधे मेट्रोनोम अभ्यास पर जाएं।",
      highlights: [
        { label: "रीडआउट", value: "तुरंत और औसत BPM" },
        { label: "कॉपी", value: "एक टैप में नतीजा कॉपी करें" },
        { label: "अगला कदम", value: "सीधे मेट्रोनोम अभ्यास पर जाएं" }
      ],
      quickAnswers: [
        { title: "कितने टैप काफ़ी हैं?", body: "आठ या अधिक टैप आमतौर पर बहुत छोटे सैंपल की तुलना में ज़्यादा स्थिर औसत देते हैं।" },
        { title: "क्या चलते गाने को माप सकते हैं?", body: "हाँ, जब तक आप लगातार एक ही पल्स पॉइंट पर टैप करते रहें।" }
      ],
      sections: [
        { title: "Tap BPM कब इस्तेमाल करें", body: "जब आप कोई गाना सुनें और मेट्रोनोम सेट करने से पहले उसका टेम्पो जल्दी जानना चाहें, तब Tap BPM का उपयोग करें।" }
      ],
      faqs: [
        { question: "मुझे कितने टैप चाहिए?", answer: "आठ या अधिक टैप आमतौर पर ज़्यादा स्थिर औसत BPM देते हैं।" },
        { question: "क्या इसे किसी भी गाने के साथ इस्तेमाल कर सकते हैं?", answer: "हाँ, जब तक आप एक ही पल्स पॉइंट पर लगातार टैप करते रहें।" }
      ]
    },
    "chord-transposer": {
      heroTitle: "की बदलने के लिए ऑनलाइन कॉर्ड ट्रांसपोज़र",
      heroDescription:
        "कॉर्ड प्रोग्रेशन को सेमीटोन के हिसाब से ट्रांसपोज़ करें, slash chords बरकरार रखें, शार्प या फ़्लैट चुनें और नया प्रोग्रेशन तुरंत कॉपी करें।",
      highlights: [
        { label: "रेंज", value: "-12 से +12 सेमीटोन" },
        { label: "आउटपुट", value: "शार्प या फ़्लैट" },
        { label: "सपोर्ट", value: "Slash chords और कॉर्ड क्वालिटी" }
      ],
      quickAnswers: [
        { title: "क्या यह कॉर्ड क्वालिटी बनाए रखता है?", body: "हाँ। केवल रूट नोट बदलता है, जबकि m, 7, maj7, sus4, add9 जैसी क्वालिटी बरकरार रहती हैं।" },
        { title: "क्या पूरे लिरिक्स और कॉर्ड शीट ट्रांसपोज़ कर सकते हैं?", body: "हाँ। टूल स्पेसिंग और लाइन ब्रेक बनाए रखता है और कॉर्ड न होने वाले शब्द नहीं बदलता।" }
      ],
      sections: [
        { title: "आसान की ढूँढें", body: "गाने को ऐसी की में ट्रांसपोज़ करें जो आपकी आवाज़ के लिए या बजाने के लिए आसान हो, फिर वाद्य के साथ नतीजा जाँचें।" },
        { title: "कॉर्ड और की", body: "जब कोई गाना बहुत ऊँचा या बहुत नीचा लगे तो कॉर्ड ट्रांसपोज़र का उपयोग करें। हर कॉर्ड को समान संख्या में सेमीटोन से खिसकाएं।" }
      ],
      faqs: [
        { question: "क्या ट्रांसपोज़ करने से सिर्फ़ कॉर्ड के नाम बदलते हैं?", answer: "यह की बदलता है और कॉर्ड्स के बीच का हार्मोनिक रिश्ता बरकरार रखता है।" },
        { question: "क्या यह शार्प और फ़्लैट सपोर्ट करता है?", answer: "यह आम मेजर, माइनर, शार्प, फ़्लैट और सेवेंथ कॉर्ड नामों को सपोर्ट करता है।" }
      ]
    },
    "bass-tuner": {
      heroTitle: "ऑनलाइन बास ट्यूनर",
      heroDescription: "माइक्रोफ़ोन पिच डिटेक्शन, स्टैंडर्ड और वैकल्पिक ट्यूनिंग के साथ ब्राउज़र में बास गिटार जल्दी ट्यून करें।",
      highlights: [
        { label: "इनपुट", value: "माइक्रोफ़ोन + रेफरेंस नोट्स" },
        { label: "ट्यूनिंग", value: "Standard, Drop D, 5-स्ट्रिंग" },
        { label: "बेस्ट फ़ॉर", value: "इलेक्ट्रिक और अकॉस्टिक बास" }
      ],
      quickAnswers: [
        { title: "क्या 5-स्ट्रिंग बास ट्यून कर सकते हैं?", body: "हाँ। 5-स्ट्रिंग प्रीसेट चुनें और लो B सहित हर तार ट्यून करें।" },
        { title: "स्थिर रीडिंग कैसे पाएं?", body: "एक तार मज़बूती से बजाएं और स्थिर रखें। कम फ़्रीक्वेंसी को रजिस्टर होने में थोड़ा अधिक समय लगता है।" }
      ],
      sections: [
        { title: "जल्दी ट्यून में आएं", body: "माइक्रोफ़ोन चालू करें, एक बार में एक तार बजाएं और ट्यूनिंग पेग समायोजित करने से पहले सुई के स्थिर होने का इंतज़ार करें।" },
        { title: "स्टैंडर्ड और वैकल्पिक बास ट्यूनिंग", body: "Standard E A D G ज़्यादातर शैलियों के लिए उपयुक्त है। Drop D एक भारी लो स्ट्रिंग जोड़ता है। 5-स्ट्रिंग विस्तृत रेंज के लिए लो B जोड़ता है।" }
      ],
      faqs: [
        { question: "माइक्रोफ़ोन से बास कैसे ट्यून करें?", answer: "माइक्रोफ़ोन चालू करें, एक तार साफ़ बजाएं और सुई के स्थिर होने के लिए एक सेकंड रुकें, फिर बीच की ओर समायोजित करें।" },
        { question: "स्टैंडर्ड बास ट्यूनिंग क्या है?", answer: "4-स्ट्रिंग बास की स्टैंडर्ड ट्यूनिंग सबसे नीचे से ऊपर तक E1 A1 D2 G2 है।" }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "ऑनलाइन उकुलेले ट्यूनर",
      heroDescription: "GCEA स्टैंडर्ड ट्यूनिंग, Low G और वैकल्पिक ट्यूनिंग के साथ ब्राउज़र में उकुलेले जल्दी ट्यून करें।",
      highlights: [
        { label: "इनपुट", value: "माइक्रोफ़ोन + रेफरेंस नोट्स" },
        { label: "ट्यूनिंग", value: "GCEA, Low G, बैरिटोन D-G-B-E" },
        { label: "बेस्ट फ़ॉर", value: "सोप्रानो, कॉन्सर्ट, टेनर, बैरिटोन" }
      ],
      quickAnswers: [
        { title: "स्टैंडर्ड उकुलेले ट्यूनिंग क्या है?", body: "सोप्रानो, कॉन्सर्ट और टेनर उकुलेले G4-C4-E4-A4 का उपयोग करते हैं। बैरिटोन D3-G3-B3-E4 का उपयोग करता है।" },
        { title: "High G और Low G में क्या फ़र्क है?", body: "High G स्टैंडर्ड री-एंट्रेंट ट्यूनिंग है। Low G इसे गहरी आवाज़ और व्यापक रेंज के लिए निचले G तार से बदल देता है।" }
      ],
      sections: [
        { title: "उकुलेले को जल्दी कैसे ट्यून करें", body: "GCEA प्रीसेट चुनें, माइक्रोफ़ोन चालू करें और हर तार बजाएं जब तक रीडिंग स्थिर न हो, फिर पेग समायोजित करें।" },
        { title: "आम उकुलेले ट्यूनिंग", body: "GCEA से शुरू करें। गहरी आवाज़ के लिए Low G, चमकीले टोन के लिए D-tuning, या गिटार जैसा अनुभव पाने के लिए बैरिटोन D-G-B-E आज़माएं।" }
      ],
      faqs: [
        { question: "माइक्रोफ़ोन से उकुलेले कैसे ट्यून करें?", answer: "माइक्रोफ़ोन चालू करें, हर तार साफ़ बजाएं और पेग को तब तक समायोजित करें जब तक सुई सही नोट पर केंद्रित न हो।" },
        { question: "क्या यह बैरिटोन उकुलेले के लिए काम करता है?", answer: "हाँ। D-G-B-E बैरिटोन प्रीसेट चुनें और हर तार को उसी अनुसार ट्यून करें।" }
      ]
    },
    "sound-level-meter": {
      heroTitle: "ऑनलाइन साउंड लेवल मीटर",
      heroDescription: "अपने ब्राउज़र माइक्रोफ़ोन और रियल-टाइम ग्राफ़ के साथ dB में अनुमानित ध्वनि स्तर मापें।",
      highlights: [
        { label: "रीडिंग", value: "माइक्रोफ़ोन से अनुमानित dB" },
        { label: "डिस्प्ले", value: "मिन/मैक्स/औसत के साथ लाइव ग्राफ़" },
        { label: "उपयोग", value: "अभ्यास के माहौल की जाँच" }
      ],
      quickAnswers: [
        { title: "क्या यह अभ्यास के लिए पर्याप्त सटीक है?", body: "माहौल की तुलना और तेज़ सेशन ट्रैक करने के लिए हाँ। पेशेवर माप के लिए प्रमाणित नहीं है।" },
        { title: "संगीत अभ्यास के लिए सुरक्षित स्तर क्या है?", body: "अकॉस्टिक वाद्यों के लिए 60–75 dB। 85 dB से ऊपर लगातार स्तर लंबे समय में सुनने की थकान पैदा कर सकता है।" }
      ],
      sections: [
        { title: "साउंड लेवल मीटर कैसे इस्तेमाल करें", body: "माइक्रोफ़ोन चालू करें, डिवाइस को कमरे में स्थिर रखें और लाइव dB रीडआउट व चलता औसत देखें।" },
        { title: "रीडिंग को समझना", body: "शांत कमरे 30–45 dB दिखाते हैं। सामान्य बातचीत लगभग 60 dB। तेज़ अभ्यास सेशन आमतौर पर 75–90 dB।" }
      ],
      faqs: [
        { question: "मीटर कितना सटीक है?", answer: "यह माइक्रोफ़ोन सिग्नल पर आधारित अनुमान है, पेशेवर रूप से कैलिब्रेटेड नहीं, पर तुलना और निगरानी के लिए उपयोगी है।" },
        { question: "क्या इसे कोई विशेष अनुमति चाहिए?", answer: "हाँ, वाद्य ट्यूनर की तरह ही ब्राउज़र माइक्रोफ़ोन एक्सेस ज़रूरी है।" }
      ]
    },
    "pitch-generator": {
      heroTitle: "ऑनलाइन पिच जेनरेटर",
      heroDescription: "ईयर ट्रेनिंग, वाद्य रेफरेंस और ऑडियो टेस्टिंग के लिए 20 Hz से 20000 Hz तक शुद्ध टोन जेनरेट करें।",
      highlights: [
        { label: "रेंज", value: "20 Hz से 20000 Hz" },
        { label: "आउटपुट", value: "ब्राउज़र में शुद्ध साइन टोन" },
        { label: "उपयोग", value: "ईयर ट्रेनिंग और रेफरेंस पिच" }
      ],
      quickAnswers: [
        { title: "क्या इसे कान से वाद्य ट्यून करने के लिए इस्तेमाल कर सकते हैं?", body: "हाँ। ज़रूरी नोट पर फ़्रीक्वेंसी सेट करें, फिर अपने वाद्य के तार को जेनरेट किए टोन से मिलाएं।" },
        { title: "क्या ऊँची फ़्रीक्वेंसी सुरक्षित हैं?", body: "हमेशा कम वॉल्यूम से शुरू करें, खासकर 8000 Hz से ऊपर, और धीरे-धीरे बढ़ाएं।" }
      ],
      sections: [
        { title: "पिच जेनरेटर किस काम आता है", body: "कान से ट्यून करने के लिए रेफरेंस पिच के रूप में, इंटरवल पहचान के अभ्यास के लिए, या स्पीकर और हेडफ़ोन टेस्ट करने के लिए इसका उपयोग करें।" },
        { title: "उपयोग के सुझाव", body: "कम वॉल्यूम से शुरू करें। रेफरेंस पिच के लिए 440 Hz (A4) इस्तेमाल करें। टेस्ट करते समय रेंज में धीरे-धीरे स्वीप करें।" }
      ],
      faqs: [
        { question: "कौन सी फ़्रीक्वेंसी किस नोट से मेल खाती है?", answer: "A4 = 440 Hz। C4 = 261.6 Hz। G4 = 392 Hz। बाकी नोट्स हर ऑक्टेव पर दोगुना या आधा करके निकलते हैं।" },
        { question: "क्या टोन अपने आप रुक जाता है?", answer: "नहीं। सुनने की थकान से बचने के लिए काम पूरा होने पर हमेशा Stop दबाएं।" }
      ]
    }
  },
  nl: {
    "guitar-tuner": {
      heroTitle: "Gratis online gitaarstemmer",
      heroDescription:
        "Stem akoestische, elektrische of klassieke gitaar met microfoon-toonherkenning, referentienoten en ondersteuning voor Standard, Drop D, Eb, D Standard, Open D en Open G.",
      highlights: [
        { label: "Invoer", value: "Microfoon + referentienoten" },
        { label: "Stemmingen", value: "Standard, Drop en Open" },
        { label: "Ideaal voor", value: "Klassiek, akoestisch en elektrisch" }
      ],
      quickAnswers: [
        { title: "Is dit goed voor snel stemmen?", body: "Ja. Zet de microfoon aan, speel één snaar tegelijk en wacht even tot de meting stabiel is voordat je bijstelt." },
        { title: "Welke stemming kun je daarna proberen?", body: "Na Standard is Drop D de makkelijkste volgende stap, terwijl Eb Standard het hele instrument verlaagt." }
      ],
      sections: [
        { title: "Kies de juiste stemming", body: "Gebruik Standard voor de meeste nummers, Drop D voor lagere riffs, Eb Standard voor lagere spanning en Open G of Open D voor open akkoorden." },
        { title: "Krijg een stabielere meting", body: "Houd het instrument dicht bij de microfoon, speel één snaar tegelijk en wacht even tot de toonhoogte stabiel is voordat je bijstelt." },
        { title: "Akkoorden en toonsoort", body: "Gebruik de akkoordtransposer als een nummer te hoog of te laag aanvoelt. Verschuif elk akkoord met hetzelfde aantal halve tonen." }
      ],
      faqs: [
        { question: "Waarom springt de naald?", answer: "Omgevingsgeluid of meerdere klinkende snaren kunnen de toonherkenning verstoren. Speel één snaar duidelijk en laat hem uitklinken." },
        { question: "Welke stemming moeten beginners gebruiken?", answer: "Begin voor een zessnarige gitaar met Standard E A D G B E voordat je Drop D, Eb Standard of open stemmingen probeert." }
      ]
    },
    metronome: {
      heroTitle: "Online metronoom met BPM en onderverdelingen",
      heroDescription:
        "Oefen met een volledige online metronoom met nauwkeurige BPM-regeling, onderverdelingen, accenten, Tap Tempo en progressieve snelheidscycli.",
      highlights: [
        { label: "Tempo", value: "Nauwkeurige BPM + Tap Tempo" },
        { label: "Ritme", value: "Accenten en onderverdelingen" },
        { label: "Routine", value: "Oefencyclus tot doel-BPM" }
      ],
      quickAnswers: [
        { title: "Met welke BPM moeten beginners starten?", body: "Begin op het snelste tempo waarop je nog schoon en ontspannen kunt spelen, en verhoog dan in kleine stappen." },
        { title: "Waarom onderverdelingen gebruiken?", body: "Onderverdelingen maken de innerlijke puls duidelijker en helpen veel met timing, groove en consistentie." }
      ],
      sections: [
        { title: "Een betere oefenmethode", body: "Begin langzaam, accentueer de eerste tel en verhoog de BPM pas na meerdere schone cycli." },
        { title: "Routine om sneller te worden", body: "Gebruik de oefencyclus om in kleine stappen van een start-BPM naar een doel-BPM te gaan na een gekozen aantal maten of seconden." }
      ],
      faqs: [
        { question: "Op welke BPM moet ik oefenen?", answer: "Begin op het snelste tempo waarop je nog schoon en ontspannen speelt, en verhoog dan geleidelijk." },
        { question: "Waarom onderverdelingen gebruiken?", answer: "Ze helpen je het ritme binnen elke tel te horen, niet alleen de hoofdklik." }
      ]
    },
    "tap-bpm": {
      heroTitle: "Online Tap BPM-teller",
      heroDescription:
        "Tik mee met elk nummer, krijg directe en gemiddelde BPM, kopieer het resultaat en ga direct door naar metronoomoefening.",
      highlights: [
        { label: "Uitlezing", value: "Directe en gemiddelde BPM" },
        { label: "Kopiëren", value: "Kopieer het resultaat met één tik" },
        { label: "Volgende stap", value: "Ga direct naar metronoomoefening" }
      ],
      quickAnswers: [
        { title: "Hoeveel tikken zijn genoeg?", body: "Acht of meer tikken geven meestal een veel stabieler gemiddelde dan een heel korte meting." },
        { title: "Kun je een lopend nummer meten?", body: "Ja, zolang je consistent op hetzelfde pulspunt blijft tikken." }
      ],
      sections: [
        { title: "Wanneer Tap BPM gebruiken", body: "Gebruik Tap BPM als je een nummer hoort en snel het tempo wilt inschatten voordat je de metronoom instelt." }
      ],
      faqs: [
        { question: "Hoeveel tikken heb ik nodig?", answer: "Acht of meer tikken geven meestal een stabieler gemiddelde BPM." },
        { question: "Kan ik het met elk nummer gebruiken?", answer: "Ja, zolang je consistent op hetzelfde pulspunt tikt." }
      ]
    },
    "chord-transposer": {
      heroTitle: "Online akkoordtransposer voor toonsoortwisselingen",
      heroDescription:
        "Transponeer akkoordprogressies per halve toon, houd slash-akkoorden intact, kies kruisen of mollen en kopieer de nieuwe progressie meteen.",
      highlights: [
        { label: "Bereik", value: "-12 tot +12 halve tonen" },
        { label: "Uitvoer", value: "Kruisen of mollen" },
        { label: "Ondersteuning", value: "Slash-akkoorden en akkoordkwaliteit" }
      ],
      quickAnswers: [
        { title: "Blijft de akkoordkwaliteit behouden?", body: "Ja. Alleen de grondtoon verschuift, terwijl m, 7, maj7, sus4, add9 en vergelijkbare kwaliteiten intact blijven." },
        { title: "Kun je volledige songteksten en akkoordbladen transponeren?", body: "Ja. De tool behoudt spaties en regeleinden en laat niet-akkoordwoorden ongewijzigd." }
      ],
      sections: [
        { title: "Vind een makkelijkere toonsoort", body: "Transponeer een nummer naar een toonsoort die makkelijker is voor je stem of om te spelen, en controleer het resultaat met het instrument." },
        { title: "Akkoorden en toonsoort", body: "Gebruik de akkoordtransposer als een nummer te hoog of te laag aanvoelt. Verschuif elk akkoord met hetzelfde aantal halve tonen." }
      ],
      faqs: [
        { question: "Hernoemt transponeren alleen akkoorden?", answer: "Het verandert de toonsoort en behoudt de harmonische relatie tussen de akkoorden." },
        { question: "Ondersteunt het kruisen en mollen?", answer: "Het ondersteunt gangbare majeur-, mineur-, kruis-, mol- en septiemakkoorden." }
      ]
    },
    "bass-tuner": {
      heroTitle: "Online basgitaarstemmer",
      heroDescription: "Stem je basgitaar snel in de browser met microfoon-toonherkenning, standaard- en alternatieve stemmingen.",
      highlights: [
        { label: "Invoer", value: "Microfoon + referentienoten" },
        { label: "Stemmingen", value: "Standard, Drop D, 5-snarig" },
        { label: "Ideaal voor", value: "Elektrische en akoestische bas" }
      ],
      quickAnswers: [
        { title: "Kan ik een 5-snarige bas stemmen?", body: "Ja. Kies de 5-snarige preset en stem elke snaar, inclusief de lage B." },
        { title: "Hoe krijg ik een stabiele meting?", body: "Speel één snaar stevig aan en houd vast. Lage frequenties hebben iets meer tijd nodig om te registreren." }
      ],
      sections: [
        { title: "Snel in stemming komen", body: "Zet de microfoon aan, speel één snaar tegelijk en wacht tot de naald stabiel is voordat je de stemschroef bijstelt." },
        { title: "Standaard en alternatieve basstemmingen", body: "Standard E A D G past bij de meeste genres. Drop D voegt een zwaardere lage snaar toe. 5-snarig voegt een lage B toe voor meer bereik." }
      ],
      faqs: [
        { question: "Hoe stem ik bas met een microfoon?", answer: "Zet de microfoon aan, tokkel één snaar duidelijk en wacht een seconde tot de naald stabiel is, stel dan bij richting het midden." },
        { question: "Wat is standaard basstemming?", answer: "Standaard 4-snarige basstemming is E1 A1 D2 G2, van laagste naar hoogste snaar." }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "Online ukelelestemmer",
      heroDescription: "Stem je ukelele snel in de browser met GCEA-standaardstemming, Low G en alternatieve stemmingen.",
      highlights: [
        { label: "Invoer", value: "Microfoon + referentienoten" },
        { label: "Stemmingen", value: "GCEA, Low G, bariton D-G-B-E" },
        { label: "Ideaal voor", value: "Sopraan, concert, tenor, bariton" }
      ],
      quickAnswers: [
        { title: "Wat is standaard ukelelestemming?", body: "Sopraan-, concert- en tenorukelele gebruiken G4-C4-E4-A4. Bariton gebruikt D3-G3-B3-E4." },
        { title: "Wat is het verschil tussen High G en Low G?", body: "High G is de standaard re-entrant stemming. Low G vervangt die door een lagere G-snaar voor een vollere klank en groter bereik." }
      ],
      sections: [
        { title: "Hoe stem je een ukelele snel", body: "Kies de GCEA-preset, zet de microfoon aan en tokkel elke snaar tot de meting stabiel is, stel dan de stemschroef bij." },
        { title: "Veelgebruikte ukelelestemmingen", body: "Begin met GCEA. Probeer Low G voor een vollere klank, D-stemming voor een helderere toon, of bariton D-G-B-E voor een gitaarachtig gevoel." }
      ],
      faqs: [
        { question: "Hoe stem ik een ukelele met een microfoon?", answer: "Zet de microfoon aan, tokkel elke snaar duidelijk en stel de stemschroef bij tot de naald op de juiste noot staat." },
        { question: "Werkt het voor baritonukelele?", answer: "Ja. Kies de D-G-B-E baritonpreset en stem elke snaar daarop." }
      ]
    },
    "sound-level-meter": {
      heroTitle: "Online geluidsniveaumeter",
      heroDescription: "Meet het geschatte geluidsniveau in dB met je browsermicrofoon en een realtime grafiek.",
      highlights: [
        { label: "Meting", value: "Geschatte dB via microfoon" },
        { label: "Weergave", value: "Live grafiek met min/max/gemiddelde" },
        { label: "Gebruik", value: "Controle van de oefenomgeving" }
      ],
      quickAnswers: [
        { title: "Is het nauwkeurig genoeg om te oefenen?", body: "Ja, om omgevingen te vergelijken en luide sessies te volgen. Niet gecertificeerd voor professionele metingen." },
        { title: "Wat is een veilig niveau voor muziekoefening?", body: "60–75 dB voor akoestische instrumenten. Aanhoudende niveaus boven 85 dB kunnen op termijn gehoorvermoeidheid veroorzaken." }
      ],
      sections: [
        { title: "Hoe gebruik je de geluidsniveaumeter", body: "Zet de microfoon aan, houd het apparaat stil in de ruimte en bekijk de live dB-uitlezing en het lopende gemiddelde." },
        { title: "De metingen interpreteren", body: "Stille ruimtes lezen 30–45 dB. Normaal gesprek rond 60 dB. Luide oefensessies doorgaans 75–90 dB." }
      ],
      faqs: [
        { question: "Hoe nauwkeurig is de meter?", answer: "Het is een schatting op basis van het microfoonsignaal, niet professioneel gekalibreerd, maar nuttig voor vergelijking en monitoring." },
        { question: "Heeft het speciale toestemming nodig?", answer: "Ja, browsertoegang tot de microfoon is vereist, net als bij de instrumentstemmers." }
      ]
    },
    "pitch-generator": {
      heroTitle: "Online toongenerator",
      heroDescription: "Genereer zuivere tonen van 20 Hz tot 20000 Hz voor gehoortraining, instrumentreferentie en audiotests.",
      highlights: [
        { label: "Bereik", value: "20 Hz tot 20000 Hz" },
        { label: "Uitvoer", value: "Zuivere sinustoon in de browser" },
        { label: "Gebruik", value: "Gehoortraining en referentietoon" }
      ],
      quickAnswers: [
        { title: "Kan ik er instrumenten op het gehoor mee stemmen?", body: "Ja. Stel de frequentie in op de noot die je nodig hebt en stem je snaar gelijk aan de gegenereerde toon." },
        { title: "Zijn hoge frequenties veilig?", body: "Begin altijd op laag volume, vooral boven 8000 Hz, en verhoog geleidelijk." }
      ],
      sections: [
        { title: "Waarvoor is de toongenerator goed", body: "Gebruik hem als referentietoon om op het gehoor te stemmen, om intervallen te oefenen, of om luidsprekers en koptelefoons te testen." },
        { title: "Gebruikstips", body: "Begin op laag volume. Gebruik voor referentietoon 440 Hz (A4). Veeg bij het testen langzaam door het bereik." }
      ],
      faqs: [
        { question: "Welke frequentie hoort bij welke noot?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Andere noten volgen door per octaaf te verdubbelen of te halveren." },
        { question: "Stopt de toon automatisch?", answer: "Nee. Druk altijd op Stop als je klaar bent om luistervermoeidheid te voorkomen." }
      ]
    }
  },
  pl: {
    "guitar-tuner": {
      heroTitle: "Darmowy stroik gitarowy online",
      heroDescription:
        "Strój gitarę akustyczną, elektryczną lub klasyczną z wykrywaniem dźwięku przez mikrofon, nutami referencyjnymi i obsługą Standard, Drop D, Eb, D Standard, Open D i Open G.",
      highlights: [
        { label: "Wejście", value: "Mikrofon + nuty referencyjne" },
        { label: "Stroje", value: "Standard, Drop i Open" },
        { label: "Najlepsze do", value: "Klasyczna, akustyczna i elektryczna" }
      ],
      quickAnswers: [
        { title: "Czy nadaje się do szybkiego strojenia?", body: "Tak. Włącz mikrofon, zagraj jedną strunę naraz i poczekaj chwilę, aż odczyt się ustabilizuje, zanim go skorygujesz." },
        { title: "Jaki strój wypróbować następnie?", body: "Po Standard najłatwiejszym krokiem jest Drop D, a Eb Standard obniża cały instrument." }
      ],
      sections: [
        { title: "Wybierz właściwy strój", body: "Używaj Standard do większości utworów, Drop D do niższych riffów, Eb Standard dla mniejszego napięcia oraz Open G lub Open D dla brzmienia otwartych akordów." },
        { title: "Uzyskaj stabilniejszy odczyt", body: "Trzymaj instrument blisko mikrofonu, graj jedną strunę naraz i poczekaj chwilę, aż wysokość się ustabilizuje, zanim skorygujesz strój." },
        { title: "Akordy i tonacja", body: "Użyj transpozytora akordów, gdy utwór jest zbyt wysoki lub zbyt niski. Przesuń każdy akord o tę samą liczbę półtonów." }
      ],
      faqs: [
        { question: "Dlaczego wskazówka skacze?", answer: "Hałas w pomieszczeniu lub kilka brzmiących strun mogą zakłócać wykrywanie. Zagraj jedną strunę wyraźnie i pozwól jej wybrzmieć." },
        { question: "Jakiego stroju powinni używać początkujący?", answer: "Dla gitary sześciostrunowej zacznij od Standard E A D G B E, zanim spróbujesz Drop D, Eb Standard lub strojów otwartych." }
      ]
    },
    metronome: {
      heroTitle: "Metronom online z BPM i podziałami",
      heroDescription:
        "Ćwicz z pełnym metronomem online z precyzyjną kontrolą BPM, podziałami, akcentami, Tap Tempo i progresywnymi cyklami tempa.",
      highlights: [
        { label: "Tempo", value: "Precyzyjne BPM + Tap Tempo" },
        { label: "Rytm", value: "Akcenty i podziały" },
        { label: "Rutyna", value: "Cykl ćwiczeń do docelowego BPM" }
      ],
      quickAnswers: [
        { title: "Od jakiego BPM zaczynać?", body: "Zacznij od najszybszego tempa, w którym wciąż grasz czysto i swobodnie, a potem zwiększaj małymi krokami." },
        { title: "Po co stosować podziały?", body: "Podziały wyraźniej oddają wewnętrzny puls i bardzo pomagają w czuciu czasu, groovie i równości." }
      ],
      sections: [
        { title: "Lepsza metoda ćwiczeń", body: "Zacznij wolno, zaakcentuj pierwszą miarę i zwiększaj BPM dopiero po kilku czystych cyklach." },
        { title: "Rutyna budowania szybkości", body: "Użyj cyklu ćwiczeń, aby przejść od początkowego BPM do docelowego małymi krokami po wybranej liczbie taktów lub sekund." }
      ],
      faqs: [
        { question: "Przy jakim BPM ćwiczyć?", answer: "Zacznij od najszybszego tempa, w którym grasz czysto i swobodnie, a potem stopniowo zwiększaj." },
        { question: "Po co stosować podziały?", answer: "Pomagają usłyszeć rytm wewnątrz każdej miary, nie tylko główny klik." }
      ]
    },
    "tap-bpm": {
      heroTitle: "Licznik Tap BPM online",
      heroDescription:
        "Stukaj do dowolnego utworu, uzyskaj natychmiastowe i średnie BPM, skopiuj wynik i przejdź prosto do ćwiczeń z metronomem.",
      highlights: [
        { label: "Odczyt", value: "Natychmiastowe i średnie BPM" },
        { label: "Kopiowanie", value: "Skopiuj wynik jednym stuknięciem" },
        { label: "Następny krok", value: "Przejdź wprost do ćwiczeń z metronomem" }
      ],
      quickAnswers: [
        { title: "Ile stuknięć wystarczy?", body: "Osiem lub więcej stuknięć daje zwykle znacznie stabilniejszą średnią niż bardzo krótka próbka." },
        { title: "Czy można zmierzyć grający utwór?", body: "Tak, o ile konsekwentnie stukasz w ten sam punkt pulsu." }
      ],
      sections: [
        { title: "Kiedy używać Tap BPM", body: "Użyj Tap BPM, gdy słyszysz utwór i chcesz szybko oszacować tempo przed ustawieniem metronomu." }
      ],
      faqs: [
        { question: "Ile stuknięć potrzebuję?", answer: "Osiem lub więcej stuknięć daje zwykle stabilniejszą średnią BPM." },
        { question: "Czy mogę używać go z dowolnym utworem?", answer: "Tak, o ile stukasz konsekwentnie w ten sam punkt pulsu." }
      ]
    },
    "chord-transposer": {
      heroTitle: "Transpozytor akordów online do zmiany tonacji",
      heroDescription:
        "Transponuj progresje akordów o półton, zachowaj akordy slash, wybierz krzyżyki lub bemole i od razu skopiuj nową progresję.",
      highlights: [
        { label: "Zakres", value: "Od -12 do +12 półtonów" },
        { label: "Wyjście", value: "Krzyżyki lub bemole" },
        { label: "Obsługa", value: "Akordy slash i jakość akordu" }
      ],
      quickAnswers: [
        { title: "Czy zachowuje jakość akordu?", body: "Tak. Przesuwa się tylko prymka, a m, 7, maj7, sus4, add9 i podobne jakości pozostają bez zmian." },
        { title: "Czy można transponować całe teksty z akordami?", body: "Tak. Narzędzie zachowuje odstępy i podziały wierszy oraz nie zmienia słów niebędących akordami." }
      ],
      sections: [
        { title: "Znajdź łatwiejszą tonację", body: "Transponuj utwór do tonacji wygodniejszej dla głosu lub do grania, a następnie sprawdź wynik na instrumencie." },
        { title: "Akordy i tonacja", body: "Użyj transpozytora akordów, gdy utwór jest zbyt wysoki lub zbyt niski. Przesuń każdy akord o tę samą liczbę półtonów." }
      ],
      faqs: [
        { question: "Czy transpozycja tylko zmienia nazwy akordów?", answer: "Zmienia tonację, zachowując relacje harmoniczne między akordami." },
        { question: "Czy obsługuje krzyżyki i bemole?", answer: "Obsługuje popularne akordy durowe, molowe, z krzyżykiem, bemolem i septymowe." }
      ]
    },
    "bass-tuner": {
      heroTitle: "Stroik basowy online",
      heroDescription: "Szybko nastrój gitarę basową w przeglądarce dzięki wykrywaniu dźwięku przez mikrofon oraz strojom standardowym i alternatywnym.",
      highlights: [
        { label: "Wejście", value: "Mikrofon + nuty referencyjne" },
        { label: "Stroje", value: "Standard, Drop D, 5-strunowy" },
        { label: "Najlepsze do", value: "Bas elektryczny i akustyczny" }
      ],
      quickAnswers: [
        { title: "Czy mogę nastroić bas 5-strunowy?", body: "Tak. Wybierz preset 5-strunowy i nastrój każdą strunę, w tym niskie H." },
        { title: "Jak uzyskać stabilny odczyt?", body: "Zagraj jedną strunę zdecydowanie i przytrzymaj. Niskie częstotliwości potrzebują chwili dłużej, by się zarejestrować." }
      ],
      sections: [
        { title: "Szybkie strojenie", body: "Włącz mikrofon, zagraj jedną strunę naraz i poczekaj, aż wskazówka się ustabilizuje, zanim poruszysz kluczem." },
        { title: "Standardowe i alternatywne stroje basu", body: "Standard E A D G pasuje do większości gatunków. Drop D dodaje cięższą niską strunę. 5-strunowy dodaje niskie H dla szerszego zakresu." }
      ],
      faqs: [
        { question: "Jak nastroić bas mikrofonem?", answer: "Włącz mikrofon, zagraj jedną strunę wyraźnie i poczekaj sekundę, aż wskazówka się ustabilizuje, potem koryguj ku środkowi." },
        { question: "Jaki jest standardowy strój basu?", answer: "Standardowy strój basu 4-strunowego to E1 A1 D2 G2, od najniższej do najwyższej struny." }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "Stroik ukulele online",
      heroDescription: "Szybko nastrój ukulele w przeglądarce dzięki strojowi standardowemu GCEA, Low G i strojom alternatywnym.",
      highlights: [
        { label: "Wejście", value: "Mikrofon + nuty referencyjne" },
        { label: "Stroje", value: "GCEA, Low G, baryton D-G-B-E" },
        { label: "Najlepsze do", value: "Sopranowe, koncertowe, tenorowe, barytonowe" }
      ],
      quickAnswers: [
        { title: "Jaki jest standardowy strój ukulele?", body: "Ukulele sopranowe, koncertowe i tenorowe używają G4-C4-E4-A4. Barytonowe używa D3-G3-B3-E4." },
        { title: "Jaka jest różnica między High G a Low G?", body: "High G to standardowy strój re-entrant. Low G zastępuje ją niższą struną G dla głębszego brzmienia i szerszego zakresu." }
      ],
      sections: [
        { title: "Jak szybko nastroić ukulele", body: "Wybierz preset GCEA, włącz mikrofon i zagraj każdą strunę, aż odczyt się ustabilizuje, potem koryguj kluczem." },
        { title: "Popularne stroje ukulele", body: "Zacznij od GCEA. Wypróbuj Low G dla głębszego brzmienia, strój D dla jaśniejszego tonu lub baryton D-G-B-E dla gitarowego charakteru." }
      ],
      faqs: [
        { question: "Jak nastroić ukulele mikrofonem?", answer: "Włącz mikrofon, zagraj każdą strunę wyraźnie i koryguj klucz, aż wskazówka ustawi się na właściwej nucie." },
        { question: "Czy działa dla ukulele barytonowego?", answer: "Tak. Wybierz preset barytonowy D-G-B-E i nastrój każdą strunę odpowiednio." }
      ]
    },
    "sound-level-meter": {
      heroTitle: "Miernik poziomu dźwięku online",
      heroDescription: "Mierz szacowany poziom dźwięku w dB za pomocą mikrofonu przeglądarki i wykresu w czasie rzeczywistym.",
      highlights: [
        { label: "Odczyt", value: "Szacowane dB przez mikrofon" },
        { label: "Wyświetlanie", value: "Wykres na żywo z min/maks/średnią" },
        { label: "Zastosowanie", value: "Kontrola środowiska ćwiczeń" }
      ],
      quickAnswers: [
        { title: "Czy jest wystarczająco dokładny do ćwiczeń?", body: "Tak, do porównywania środowisk i śledzenia głośnych sesji. Nie jest certyfikowany do pomiarów profesjonalnych." },
        { title: "Jaki poziom jest bezpieczny do ćwiczeń muzycznych?", body: "60–75 dB dla instrumentów akustycznych. Stałe poziomy powyżej 85 dB mogą z czasem powodować zmęczenie słuchu." }
      ],
      sections: [
        { title: "Jak używać miernika poziomu dźwięku", body: "Włącz mikrofon, trzymaj urządzenie nieruchomo w pomieszczeniu i obserwuj odczyt dB na żywo oraz średnią kroczącą." },
        { title: "Interpretacja odczytów", body: "Ciche pomieszczenia to 30–45 dB. Normalna rozmowa około 60 dB. Głośne sesje ćwiczeń zwykle 75–90 dB." }
      ],
      faqs: [
        { question: "Jak dokładny jest miernik?", answer: "To szacunek na podstawie sygnału mikrofonu, nie jest profesjonalnie skalibrowany, ale przydaje się do porównań i monitorowania." },
        { question: "Czy wymaga specjalnego pozwolenia?", answer: "Tak, wymagany jest dostęp przeglądarki do mikrofonu, tak jak w stroikach." }
      ]
    },
    "pitch-generator": {
      heroTitle: "Generator dźwięku online",
      heroDescription: "Generuj czyste tony od 20 Hz do 20000 Hz do treningu słuchu, jako referencję dla instrumentów i do testów audio.",
      highlights: [
        { label: "Zakres", value: "Od 20 Hz do 20000 Hz" },
        { label: "Wyjście", value: "Czysty ton sinusoidalny w przeglądarce" },
        { label: "Zastosowanie", value: "Trening słuchu i ton referencyjny" }
      ],
      quickAnswers: [
        { title: "Czy mogę nim stroić instrumenty ze słuchu?", body: "Tak. Ustaw częstotliwość na potrzebną nutę, a następnie dostrój strunę do wygenerowanego tonu." },
        { title: "Czy wysokie częstotliwości są bezpieczne?", body: "Zawsze zaczynaj od niskiej głośności, zwłaszcza powyżej 8000 Hz, i zwiększaj stopniowo." }
      ],
      sections: [
        { title: "Do czego służy generator dźwięku", body: "Używaj go jako tonu referencyjnego do strojenia ze słuchu, do ćwiczenia rozpoznawania interwałów lub do testowania głośników i słuchawek." },
        { title: "Wskazówki użycia", body: "Zaczynaj od niskiej głośności. Dla tonu referencyjnego użyj 440 Hz (A4). Podczas testów powoli przesuwaj się po zakresie." }
      ],
      faqs: [
        { question: "Która częstotliwość odpowiada której nucie?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Pozostałe nuty wynikają z podwajania lub połowienia na oktawę." },
        { question: "Czy ton zatrzymuje się automatycznie?", answer: "Nie. Po zakończeniu zawsze naciśnij Stop, aby uniknąć zmęczenia słuchu." }
      ]
    }
  },
  tr: {
    "guitar-tuner": {
      heroTitle: "Ücretsiz online gitar akort aleti",
      heroDescription:
        "Akustik, elektro veya klasik gitarı mikrofonla perde algılama, referans notalar ve Standard, Drop D, Eb, D Standard, Open D ve Open G desteğiyle akort edin.",
      highlights: [
        { label: "Giriş", value: "Mikrofon + referans notalar" },
        { label: "Akortlar", value: "Standard, Drop ve Open" },
        { label: "İdeal", value: "Klasik, akustik ve elektro" }
      ],
      quickAnswers: [
        { title: "Hızlı akort için uygun mu?", body: "Evet. Mikrofonu açın, her seferinde tek tel çalın ve ayar yapmadan önce okumanın oturmasını bekleyin." },
        { title: "Sonra hangi akordu denemeli?", body: "Standard'dan sonra Drop D en kolay adımdır, Eb Standard ise tüm enstrümanı indirir." }
      ],
      sections: [
        { title: "Doğru akordu seçin", body: "Çoğu şarkı için Standard, daha kalın riff'ler için Drop D, daha düşük gerginlik için Eb Standard ve açık akor tınısı için Open G veya Open D kullanın." },
        { title: "Daha kararlı okuma alın", body: "Enstrümanı mikrofona yakın tutun, her seferinde tek tel çalın ve ayar yapmadan önce perdenin oturmasını kısa süre bekleyin." },
        { title: "Akorlar ve ton", body: "Bir şarkı çok tiz veya çok pes geldiğinde akor transpoze aracını kullanın. Her akoru aynı sayıda yarım ses kaydırın." }
      ],
      faqs: [
        { question: "İbre neden zıplıyor?", answer: "Oda gürültüsü veya aynı anda titreşen birkaç tel algılamayı şaşırtabilir. Tek bir teli net çalın ve oturmasını bekleyin." },
        { question: "Yeni başlayanlar hangi akordu kullanmalı?", answer: "Altı telli gitar için Drop D, Eb Standard veya açık akortları denemeden önce Standard E A D G B E ile başlayın." }
      ]
    },
    metronome: {
      heroTitle: "BPM ve alt bölünmeli online metronom",
      heroDescription:
        "Hassas BPM kontrolü, alt bölünmeler, vurgular, Tap Tempo ve kademeli hız döngüleri olan eksiksiz bir online metronomla çalışın.",
      highlights: [
        { label: "Tempo", value: "Hassas BPM + Tap Tempo" },
        { label: "Ritim", value: "Vurgular ve alt bölünmeler" },
        { label: "Rutin", value: "Hedef BPM'e çalışma döngüsü" }
      ],
      quickAnswers: [
        { title: "Yeni başlayan hangi BPM'de başlamalı?", body: "Hâlâ temiz ve rahat çalabildiğiniz en hızlı tempoda başlayın, sonra küçük adımlarla artırın." },
        { title: "Alt bölünmeleri neden kullanmalı?", body: "Alt bölünmeler iç nabzı netleştirir ve zamanlama, groove ve tutarlılıkta çok yardımcı olur." }
      ],
      sections: [
        { title: "Daha iyi bir çalışma yöntemi", body: "Yavaş başlayın, ilk vuruşu vurgulayın ve BPM'i ancak birkaç temiz döngüden sonra artırın." },
        { title: "Hız geliştirme rutini", body: "Seçtiğiniz ölçü veya saniye sonrasında başlangıç BPM'inden hedef BPM'e küçük adımlarla geçmek için çalışma döngüsünü kullanın." }
      ],
      faqs: [
        { question: "Hangi BPM'de çalışmalıyım?", answer: "Temiz ve rahat çalabildiğiniz en hızlı tempoda başlayın, sonra kademeli olarak artırın." },
        { question: "Alt bölünmeleri neden kullanmalı?", answer: "Yalnızca ana tıklamayı değil, her vuruşun içindeki ritmi duymanıza yardımcı olur." }
      ]
    },
    "tap-bpm": {
      heroTitle: "Online Tap BPM sayacı",
      heroDescription:
        "Herhangi bir şarkıya vurun, anlık ve ortalama BPM alın, sonucu kopyalayın ve doğrudan metronom çalışmasına geçin.",
      highlights: [
        { label: "Okuma", value: "Anlık ve ortalama BPM" },
        { label: "Kopyalama", value: "Sonucu tek dokunuşla kopyalayın" },
        { label: "Sonraki adım", value: "Doğrudan metronom çalışmasına geçin" }
      ],
      quickAnswers: [
        { title: "Kaç vuruş yeterli?", body: "Sekiz veya daha fazla vuruş genellikle çok kısa bir örneğe göre çok daha kararlı bir ortalama verir." },
        { title: "Çalan bir şarkı ölçülebilir mi?", body: "Evet, aynı nabız noktasına tutarlı şekilde vurduğunuz sürece." }
      ],
      sections: [
        { title: "Tap BPM ne zaman kullanılır", body: "Bir şarkı duyduğunuzda ve metronomu ayarlamadan önce temposunu hızlıca tahmin etmek istediğinizde Tap BPM'i kullanın." }
      ],
      faqs: [
        { question: "Kaç vuruşa ihtiyacım var?", answer: "Sekiz veya daha fazla vuruş genellikle daha kararlı bir ortalama BPM verir." },
        { question: "Herhangi bir şarkıyla kullanabilir miyim?", answer: "Evet, aynı nabız noktasına tutarlı şekilde vurduğunuz sürece." }
      ]
    },
    "chord-transposer": {
      heroTitle: "Ton değişimi için online akor transpoze aracı",
      heroDescription:
        "Akor dizilerini yarım ses transpoze edin, slash akorları koruyun, diyez veya bemol seçin ve yeni diziyi anında kopyalayın.",
      highlights: [
        { label: "Aralık", value: "-12 ile +12 yarım ses" },
        { label: "Çıktı", value: "Diyez veya bemol" },
        { label: "Destek", value: "Slash akorlar ve akor niteliği" }
      ],
      quickAnswers: [
        { title: "Akor niteliğini korur mu?", body: "Evet. Yalnızca kök nota kayar; m, 7, maj7, sus4, add9 gibi nitelikler korunur." },
        { title: "Tüm şarkı sözleri ve akor sayfaları transpoze edilebilir mi?", body: "Evet. Araç boşlukları ve satır sonlarını korur, akor olmayan kelimeleri değiştirmez." }
      ],
      sections: [
        { title: "Daha kolay bir ton bulun", body: "Şarkıyı sesiniz için veya çalmak için daha kolay bir tona transpoze edin, sonra sonucu enstrümanla kontrol edin." },
        { title: "Akorlar ve ton", body: "Bir şarkı çok tiz veya çok pes geldiğinde akor transpoze aracını kullanın. Her akoru aynı sayıda yarım ses kaydırın." }
      ],
      faqs: [
        { question: "Transpoze sadece akor adlarını mı değiştirir?", answer: "Tonu değiştirir ve akorlar arasındaki armonik ilişkiyi korur." },
        { question: "Diyez ve bemolleri destekler mi?", answer: "Yaygın majör, minör, diyez, bemol ve yedili akor adlarını destekler." }
      ]
    },
    "bass-tuner": {
      heroTitle: "Online bas gitar akort aleti",
      heroDescription: "Bas gitarı tarayıcıda mikrofonla perde algılama, standart ve alternatif akortlarla hızlıca akort edin.",
      highlights: [
        { label: "Giriş", value: "Mikrofon + referans notalar" },
        { label: "Akortlar", value: "Standard, Drop D, 5 telli" },
        { label: "İdeal", value: "Elektro ve akustik bas" }
      ],
      quickAnswers: [
        { title: "5 telli bası akort edebilir miyim?", body: "Evet. 5 telli ön ayarı seçin ve pes B dâhil her teli akort edin." },
        { title: "Kararlı okumayı nasıl alırım?", body: "Bir teli sıkıca çalın ve sabit tutun. Düşük frekansların kaydedilmesi biraz daha uzun sürer." }
      ],
      sections: [
        { title: "Hızlıca akorda gelin", body: "Mikrofonu açın, her seferinde tek tel çalın ve burguyu ayarlamadan önce ibrenin oturmasını bekleyin." },
        { title: "Standart ve alternatif bas akortları", body: "Standard E A D G çoğu türe uyar. Drop D daha ağır bir pes tel ekler. 5 telli, geniş aralık için pes B ekler." }
      ],
      faqs: [
        { question: "Bası mikrofonla nasıl akort ederim?", answer: "Mikrofonu açın, bir teli net çalın ve ibrenin oturması için bir saniye bekleyin, sonra ortaya doğru ayarlayın." },
        { question: "Standart bas akordu nedir?", answer: "4 telli bas için standart akort en pesten en tize E1 A1 D2 G2'dir." }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "Online ukulele akort aleti",
      heroDescription: "Ukuleleyi tarayıcıda GCEA standart akordu, Low G ve alternatif akortlarla hızlıca akort edin.",
      highlights: [
        { label: "Giriş", value: "Mikrofon + referans notalar" },
        { label: "Akortlar", value: "GCEA, Low G, bariton D-G-B-E" },
        { label: "İdeal", value: "Soprano, konser, tenor, bariton" }
      ],
      quickAnswers: [
        { title: "Standart ukulele akordu nedir?", body: "Soprano, konser ve tenor ukulele G4-C4-E4-A4 kullanır. Bariton D3-G3-B3-E4 kullanır." },
        { title: "High G ile Low G arasındaki fark nedir?", body: "High G standart re-entrant akorttur. Low G, daha derin bir tını ve geniş aralık için onu daha pes bir G teliyle değiştirir." }
      ],
      sections: [
        { title: "Ukulele nasıl hızlıca akort edilir", body: "GCEA ön ayarını seçin, mikrofonu açın ve okuma oturana kadar her teli çalın, sonra burguyu ayarlayın." },
        { title: "Yaygın ukulele akortları", body: "GCEA ile başlayın. Daha derin tını için Low G, daha parlak ton için D akordu veya gitar hissi için bariton D-G-B-E deneyin." }
      ],
      faqs: [
        { question: "Ukuleleyi mikrofonla nasıl akort ederim?", answer: "Mikrofonu açın, her teli net çalın ve ibre doğru notada ortalanana kadar burguyu ayarlayın." },
        { question: "Bariton ukulele için çalışır mı?", answer: "Evet. D-G-B-E bariton ön ayarını seçin ve her teli buna göre akort edin." }
      ]
    },
    "sound-level-meter": {
      heroTitle: "Online ses seviyesi ölçer",
      heroDescription: "Tarayıcı mikrofonunuz ve gerçek zamanlı grafikle dB cinsinden tahmini ses seviyelerini ölçün.",
      highlights: [
        { label: "Okuma", value: "Mikrofonla tahmini dB" },
        { label: "Görüntü", value: "Min/maks/ortalama ile canlı grafik" },
        { label: "Kullanım", value: "Çalışma ortamı kontrolü" }
      ],
      quickAnswers: [
        { title: "Çalışma için yeterince doğru mu?", body: "Ortamları karşılaştırmak ve gürültülü seansları izlemek için evet. Profesyonel ölçüm için sertifikalı değildir." },
        { title: "Müzik çalışması için güvenli seviye nedir?", body: "Akustik enstrümanlar için 60–75 dB. 85 dB üzerindeki sürekli seviyeler zamanla işitme yorgunluğuna yol açabilir." }
      ],
      sections: [
        { title: "Ses seviyesi ölçer nasıl kullanılır", body: "Mikrofonu açın, cihazı odada sabit tutun ve canlı dB okumasını ve hareketli ortalamayı izleyin." },
        { title: "Okumaları yorumlama", body: "Sessiz odalar 30–45 dB gösterir. Normal konuşma yaklaşık 60 dB. Gürültülü çalışma seansları genellikle 75–90 dB." }
      ],
      faqs: [
        { question: "Ölçer ne kadar doğru?", answer: "Mikrofon sinyaline dayalı bir tahmindir, profesyonel olarak kalibre edilmemiştir ama karşılaştırma ve izleme için yararlıdır." },
        { question: "Özel bir izin gerekir mi?", answer: "Evet, akort aletlerinde olduğu gibi tarayıcı mikrofon erişimi gerekir." }
      ]
    },
    "pitch-generator": {
      heroTitle: "Online ton üreteci",
      heroDescription: "Kulak eğitimi, enstrüman referansı ve ses testi için 20 Hz ile 20000 Hz arasında saf tonlar üretin.",
      highlights: [
        { label: "Aralık", value: "20 Hz ile 20000 Hz" },
        { label: "Çıktı", value: "Tarayıcıda saf sinüs tonu" },
        { label: "Kullanım", value: "Kulak eğitimi ve referans perde" }
      ],
      quickAnswers: [
        { title: "Enstrümanları kulaktan akort etmek için kullanabilir miyim?", body: "Evet. Frekansı ihtiyacınız olan notaya ayarlayın, sonra enstrüman telinizi üretilen tona eşleyin." },
        { title: "Yüksek frekanslar güvenli mi?", body: "Özellikle 8000 Hz üzerinde her zaman düşük seviyede başlayın ve kademeli olarak artırın." }
      ],
      sections: [
        { title: "Ton üreteci ne işe yarar", body: "Kulaktan akort için referans perde olarak, aralık tanıma çalışması için veya hoparlör ve kulaklık testi için kullanın." },
        { title: "Kullanım ipuçları", body: "Düşük seviyede başlayın. Referans perde için 440 Hz (A4) kullanın. Test ederken aralığı yavaşça tarayın." }
      ],
      faqs: [
        { question: "Hangi frekans hangi notaya karşılık gelir?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Diğer notalar her oktavda iki katına çıkarak veya yarıya inerek bulunur." },
        { question: "Ton otomatik olarak durur mu?", answer: "Hayır. İşitme yorgunluğunu önlemek için bitirince her zaman Durdur'a basın." }
      ]
    }
  },
  cs: {
    "guitar-tuner": {
      heroTitle: "Bezplatná online ladička na kytaru",
      heroDescription:
        "Laďte akustickou, elektrickou nebo klasickou kytaru pomocí mikrofonu, referenčních tónů a podpory Standard, Drop D, Eb, D Standard, Open D a Open G.",
      highlights: [
        { label: "Vstup", value: "Mikrofon + referenční tóny" },
        { label: "Ladění", value: "Standard, Drop a Open" },
        { label: "Ideální pro", value: "Klasická, akustická a elektrická" }
      ],
      quickAnswers: [
        { title: "Hodí se na rychlé ladění?", body: "Ano. Zapněte mikrofon, hrajte vždy jednu strunu a než upravíte, počkejte chvíli, až se údaj ustálí." },
        { title: "Které ladění zkusit dál?", body: "Po Standard je nejsnazším krokem Drop D, zatímco Eb Standard sníží celý nástroj." }
      ],
      sections: [
        { title: "Vyberte správné ladění", body: "Pro většinu skladeb použijte Standard, pro nižší riffy Drop D, pro nižší napětí Eb Standard a pro zvuk otevřených akordů Open G nebo Open D." },
        { title: "Získejte stabilnější údaj", body: "Držte nástroj blízko mikrofonu, hrajte vždy jednu strunu a než upravíte ladění, chvíli počkejte, až se výška ustálí." },
        { title: "Akordy a tónina", body: "Použijte transpozér akordů, když je skladba příliš vysoká nebo nízká. Posuňte každý akord o stejný počet půltónů." }
      ],
      faqs: [
        { question: "Proč ručička skáče?", answer: "Hluk v místnosti nebo více znějících strun mohou detekci rušit. Zahrajte jednu strunu jasně a nechte ji doznít." },
        { question: "Jaké ladění mají používat začátečníci?", answer: "U šestistrunné kytary začněte se Standard E A D G B E, než zkusíte Drop D, Eb Standard nebo otevřená ladění." }
      ]
    },
    metronome: {
      heroTitle: "Online metronom s BPM a dělením",
      heroDescription:
        "Cvičte s plnohodnotným online metronomem s přesným ovládáním BPM, děleními, akcenty, Tap Tempo a postupnými rychlostními cykly.",
      highlights: [
        { label: "Tempo", value: "Přesné BPM + Tap Tempo" },
        { label: "Rytmus", value: "Akcenty a dělení" },
        { label: "Rutina", value: "Cvičební cyklus k cílovému BPM" }
      ],
      quickAnswers: [
        { title: "Na jakém BPM mají začít začátečníci?", body: "Začněte na nejrychlejším tempu, kde stále hrajete čistě a uvolněně, a pak po malých krocích zvyšujte." },
        { title: "Proč používat dělení?", body: "Dělení zpřehledňují vnitřní puls a hodně pomáhají s timingem, groovem a stálostí." }
      ],
      sections: [
        { title: "Lepší metoda cvičení", body: "Začněte pomalu, zdůrazněte první dobu a BPM zvyšte až po několika čistých cyklech." },
        { title: "Rutina pro budování rychlosti", body: "Pomocí cvičebního cyklu přejděte z počátečního BPM na cílové po malých krocích po zvoleném počtu taktů nebo sekund." }
      ],
      faqs: [
        { question: "Na jakém BPM mám cvičit?", answer: "Začněte na nejrychlejším tempu, kde hrajete čistě a uvolněně, a pak postupně zvyšujte." },
        { question: "Proč používat dělení?", answer: "Pomáhají slyšet rytmus uvnitř každé doby, nejen hlavní klik." }
      ]
    },
    "tap-bpm": {
      heroTitle: "Online počítadlo Tap BPM",
      heroDescription:
        "Ťukejte do libovolné skladby, získejte okamžité a průměrné BPM, zkopírujte výsledek a přejděte rovnou ke cvičení s metronomem.",
      highlights: [
        { label: "Údaj", value: "Okamžité a průměrné BPM" },
        { label: "Kopírování", value: "Zkopírujte výsledek jedním ťuknutím" },
        { label: "Další krok", value: "Přejděte rovnou ke cvičení s metronomem" }
      ],
      quickAnswers: [
        { title: "Kolik ťuknutí stačí?", body: "Osm a více ťuknutí obvykle dá mnohem stabilnější průměr než velmi krátký vzorek." },
        { title: "Lze měřit hrající skladbu?", body: "Ano, pokud ťukáte stále do stejného bodu pulsu." }
      ],
      sections: [
        { title: "Kdy použít Tap BPM", body: "Použijte Tap BPM, když slyšíte skladbu a chcete rychle odhadnout tempo před nastavením metronomu." }
      ],
      faqs: [
        { question: "Kolik ťuknutí potřebuji?", answer: "Osm a více ťuknutí obvykle dá stabilnější průměrné BPM." },
        { question: "Můžu ho použít s jakoukoli skladbou?", answer: "Ano, pokud ťukáte stále do stejného bodu pulsu." }
      ]
    },
    "chord-transposer": {
      heroTitle: "Online transpozér akordů pro změnu tóniny",
      heroDescription:
        "Transponujte akordové postupy po půltónech, zachovejte slash akordy, zvolte křížky nebo béčka a nový postup ihned zkopírujte.",
      highlights: [
        { label: "Rozsah", value: "-12 až +12 půltónů" },
        { label: "Výstup", value: "Křížky nebo béčka" },
        { label: "Podpora", value: "Slash akordy a kvalita akordu" }
      ],
      quickAnswers: [
        { title: "Zachovává kvalitu akordu?", body: "Ano. Posune se jen základní tón, zatímco m, 7, maj7, sus4, add9 a podobné kvality zůstávají." },
        { title: "Lze transponovat celé texty s akordy?", body: "Ano. Nástroj zachová mezery a zalomení řádků a slova, která nejsou akordy, nemění." }
      ],
      sections: [
        { title: "Najděte snazší tóninu", body: "Transponujte skladbu do tóniny pohodlnější pro hlas nebo hraní a pak výsledek ověřte na nástroji." },
        { title: "Akordy a tónina", body: "Použijte transpozér akordů, když je skladba příliš vysoká nebo nízká. Posuňte každý akord o stejný počet půltónů." }
      ],
      faqs: [
        { question: "Mění transpozice jen názvy akordů?", answer: "Mění tóninu a zachovává harmonické vztahy mezi akordy." },
        { question: "Podporuje křížky a béčka?", answer: "Podporuje běžné durové, mollové, křížkové, béčkové a septakordy." }
      ]
    },
    "bass-tuner": {
      heroTitle: "Online ladička na baskytaru",
      heroDescription: "Rychle nalaďte baskytaru v prohlížeči pomocí detekce mikrofonem a standardních i alternativních ladění.",
      highlights: [
        { label: "Vstup", value: "Mikrofon + referenční tóny" },
        { label: "Ladění", value: "Standard, Drop D, 5strunná" },
        { label: "Ideální pro", value: "Elektrická a akustická basa" }
      ],
      quickAnswers: [
        { title: "Můžu naladit 5strunnou basu?", body: "Ano. Vyberte předvolbu pro 5 strun a nalaďte každou strunu včetně nízkého H." },
        { title: "Jak získám stabilní údaj?", body: "Zahrajte jednu strunu pevně a držte. Nízké frekvence se zaznamenávají o něco déle." }
      ],
      sections: [
        { title: "Rychlé naladění", body: "Zapněte mikrofon, hrajte vždy jednu strunu a než pohnete kolíkem, počkejte, až se ručička ustálí." },
        { title: "Standardní a alternativní ladění basy", body: "Standard E A D G se hodí pro většinu žánrů. Drop D přidává těžší nízkou strunu. 5strunná přidává nízké H pro širší rozsah." }
      ],
      faqs: [
        { question: "Jak naladit basu mikrofonem?", answer: "Zapněte mikrofon, jasně zahrajte jednu strunu a počkejte sekundu, až se ručička ustálí, pak ladění upravte ke středu." },
        { question: "Jaké je standardní ladění basy?", answer: "Standardní ladění 4strunné basy je E1 A1 D2 G2, od nejnižší k nejvyšší struně." }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "Online ladička na ukulele",
      heroDescription: "Rychle nalaďte ukulele v prohlížeči se standardním laděním GCEA, Low G a alternativními laděními.",
      highlights: [
        { label: "Vstup", value: "Mikrofon + referenční tóny" },
        { label: "Ladění", value: "GCEA, Low G, barytonové D-G-B-E" },
        { label: "Ideální pro", value: "Sopránové, koncertní, tenorové, barytonové" }
      ],
      quickAnswers: [
        { title: "Jaké je standardní ladění ukulele?", body: "Sopránové, koncertní a tenorové ukulele používají G4-C4-E4-A4. Barytonové používá D3-G3-B3-E4." },
        { title: "Jaký je rozdíl mezi High G a Low G?", body: "High G je standardní re-entrant ladění. Low G ho nahrazuje nižší strunou G pro hlubší zvuk a širší rozsah." }
      ],
      sections: [
        { title: "Jak rychle naladit ukulele", body: "Vyberte předvolbu GCEA, zapněte mikrofon a hrajte každou strunu, dokud se údaj neustálí, pak upravte kolík." },
        { title: "Běžná ladění ukulele", body: "Začněte s GCEA. Vyzkoušejte Low G pro hlubší zvuk, ladění D pro jasnější tón nebo barytonové D-G-B-E pro kytarový pocit." }
      ],
      faqs: [
        { question: "Jak naladit ukulele mikrofonem?", answer: "Zapněte mikrofon, jasně zahrajte každou strunu a upravujte kolík, dokud se ručička neustálí na správném tónu." },
        { question: "Funguje pro barytonové ukulele?", answer: "Ano. Vyberte barytonovou předvolbu D-G-B-E a každou strunu podle toho nalaďte." }
      ]
    },
    "sound-level-meter": {
      heroTitle: "Online měřič hladiny zvuku",
      heroDescription: "Měřte odhadovanou hladinu zvuku v dB pomocí mikrofonu prohlížeče a grafu v reálném čase.",
      highlights: [
        { label: "Údaj", value: "Odhadované dB přes mikrofon" },
        { label: "Zobrazení", value: "Živý graf s min/max/průměrem" },
        { label: "Použití", value: "Kontrola cvičebního prostředí" }
      ],
      quickAnswers: [
        { title: "Je dost přesný pro cvičení?", body: "Ano, pro porovnávání prostředí a sledování hlasitých seancí. Není certifikovaný pro profesionální měření." },
        { title: "Jaká hladina je bezpečná pro hudební cvičení?", body: "60–75 dB pro akustické nástroje. Trvalé hladiny nad 85 dB mohou časem způsobit únavu sluchu." }
      ],
      sections: [
        { title: "Jak používat měřič hladiny zvuku", body: "Zapněte mikrofon, držte zařízení v místnosti v klidu a sledujte živý údaj dB a klouzavý průměr." },
        { title: "Interpretace údajů", body: "Tiché místnosti ukazují 30–45 dB. Běžný hovor kolem 60 dB. Hlasité cvičební seance obvykle 75–90 dB." }
      ],
      faqs: [
        { question: "Jak přesný je měřič?", answer: "Je to odhad na základě signálu mikrofonu, není profesionálně kalibrovaný, ale je užitečný pro porovnání a sledování." },
        { question: "Vyžaduje zvláštní povolení?", answer: "Ano, je potřeba přístup prohlížeče k mikrofonu, stejně jako u ladiček." }
      ]
    },
    "pitch-generator": {
      heroTitle: "Online generátor tónů",
      heroDescription: "Generujte čisté tóny od 20 Hz do 20000 Hz pro trénink sluchu, referenci nástroje a testování zvuku.",
      highlights: [
        { label: "Rozsah", value: "20 Hz až 20000 Hz" },
        { label: "Výstup", value: "Čistý sinusový tón v prohlížeči" },
        { label: "Použití", value: "Trénink sluchu a referenční výška" }
      ],
      quickAnswers: [
        { title: "Můžu jím ladit nástroje podle sluchu?", body: "Ano. Nastavte frekvenci na potřebný tón a pak strunu nástroje slaďte s generovaným tónem." },
        { title: "Jsou vysoké frekvence bezpečné?", body: "Vždy začněte na nízké hlasitosti, zejména nad 8000 Hz, a postupně zvyšujte." }
      ],
      sections: [
        { title: "K čemu je generátor tónů dobrý", body: "Použijte ho jako referenční výšku pro ladění podle sluchu, k procvičování rozpoznávání intervalů nebo k testování reproduktorů a sluchátek." },
        { title: "Tipy k použití", body: "Začněte na nízké hlasitosti. Pro referenční výšku použijte 440 Hz (A4). Při testování pomalu projíždějte rozsahem." }
      ],
      faqs: [
        { question: "Která frekvence odpovídá kterému tónu?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Ostatní tóny vznikají zdvojnásobením nebo půlením na oktávu." },
        { question: "Zastaví se tón automaticky?", answer: "Ne. Po dokončení vždy stiskněte Stop, abyste předešli únavě sluchu." }
      ]
    }
  },
  sv: {
    "guitar-tuner": {
      heroTitle: "Gratis online gitarrstämmare",
      heroDescription:
        "Stäm akustisk, elektrisk eller klassisk gitarr med mikrofonbaserad tonigenkänning, referenstoner och stöd för Standard, Drop D, Eb, D Standard, Open D och Open G.",
      highlights: [
        { label: "Ingång", value: "Mikrofon + referenstoner" },
        { label: "Stämningar", value: "Standard, Drop och Open" },
        { label: "Bäst för", value: "Klassisk, akustisk och elektrisk" }
      ],
      quickAnswers: [
        { title: "Funkar det för snabb stämning?", body: "Ja. Slå på mikrofonen, spela en sträng i taget och vänta en stund tills avläsningen stabiliseras innan du justerar." },
        { title: "Vilken stämning bör du prova härnäst?", body: "Efter Standard är Drop D det enklaste nästa steget, medan Eb Standard sänker hela instrumentet." }
      ],
      sections: [
        { title: "Välj rätt stämning", body: "Använd Standard för de flesta låtar, Drop D för lägre riff, Eb Standard för lägre spänning och Open G eller Open D för öppna ackord." },
        { title: "Få en stabilare avläsning", body: "Håll instrumentet nära mikrofonen, spela en sträng i taget och vänta en stund tills tonhöjden stabiliseras innan du justerar." },
        { title: "Ackord och tonart", body: "Använd ackordtransponeraren när en låt känns för hög eller för låg. Flytta varje ackord lika många halvtoner." }
      ],
      faqs: [
        { question: "Varför hoppar nålen?", answer: "Rumsljud eller flera klingande strängar kan störa tonigenkänningen. Spela en sträng tydligt och låt den klinga ut." },
        { question: "Vilken stämning bör nybörjare använda?", answer: "För sexsträngad gitarr, börja med Standard E A D G B E innan du provar Drop D, Eb Standard eller öppna stämningar." }
      ]
    },
    metronome: {
      heroTitle: "Online-metronom med BPM och underdelningar",
      heroDescription:
        "Öva med en komplett online-metronom med exakt BPM-kontroll, underdelningar, accenter, Tap Tempo och progressiva tempocykler.",
      highlights: [
        { label: "Tempo", value: "Exakt BPM + Tap Tempo" },
        { label: "Rytm", value: "Accenter och underdelningar" },
        { label: "Rutin", value: "Övningscykel till mål-BPM" }
      ],
      quickAnswers: [
        { title: "Vilket BPM bör nybörjare börja med?", body: "Börja i det snabbaste tempo där du fortfarande spelar rent och avslappnat, och öka sedan i små steg." },
        { title: "Varför använda underdelningar?", body: "Underdelningar gör den inre pulsen tydligare och hjälper mycket med timing, groove och jämnhet." }
      ],
      sections: [
        { title: "En bättre övningsmetod", body: "Börja långsamt, betona första slaget och öka BPM först efter flera rena cykler." },
        { title: "Rutin för att bygga fart", body: "Använd övningscykeln för att gå från ett start-BPM till ett mål-BPM i små steg efter ett valt antal takter eller sekunder." }
      ],
      faqs: [
        { question: "Vilket BPM bör jag öva i?", answer: "Börja i det snabbaste tempo där du spelar rent och avslappnat, och öka sedan gradvis." },
        { question: "Varför använda underdelningar?", answer: "De hjälper dig höra rytmen inom varje slag, inte bara huvudklicket." }
      ]
    },
    "tap-bpm": {
      heroTitle: "Online Tap BPM-räknare",
      heroDescription:
        "Knacka med till valfri låt, få omedelbart och genomsnittligt BPM, kopiera resultatet och gå direkt vidare till metronomövning.",
      highlights: [
        { label: "Avläsning", value: "Omedelbart och genomsnittligt BPM" },
        { label: "Kopiera", value: "Kopiera resultatet med en knackning" },
        { label: "Nästa steg", value: "Gå direkt till metronomövning" }
      ],
      quickAnswers: [
        { title: "Hur många knackningar räcker?", body: "Åtta eller fler knackningar ger oftast ett mycket stabilare genomsnitt än ett mycket kort stickprov." },
        { title: "Kan man mäta en låt som spelas?", body: "Ja, så länge du knackar konsekvent på samma pulspunkt." }
      ],
      sections: [
        { title: "När du ska använda Tap BPM", body: "Använd Tap BPM när du hör en låt och snabbt vill uppskatta tempot innan du ställer in metronomen." }
      ],
      faqs: [
        { question: "Hur många knackningar behöver jag?", answer: "Åtta eller fler knackningar ger oftast ett stabilare genomsnittligt BPM." },
        { question: "Kan jag använda det med vilken låt som helst?", answer: "Ja, så länge du knackar konsekvent på samma pulspunkt." }
      ]
    },
    "chord-transposer": {
      heroTitle: "Online ackordtransponerare för tonartsbyten",
      heroDescription:
        "Transponera ackordföljder per halvton, behåll slash-ackord, välj kors eller b och kopiera den nya följden direkt.",
      highlights: [
        { label: "Omfång", value: "-12 till +12 halvtoner" },
        { label: "Utdata", value: "Kors eller b" },
        { label: "Stöd", value: "Slash-ackord och ackordkvalitet" }
      ],
      quickAnswers: [
        { title: "Behålls ackordkvaliteten?", body: "Ja. Bara grundtonen flyttas, medan m, 7, maj7, sus4, add9 och liknande kvaliteter behålls." },
        { title: "Kan man transponera hela texter och ackordblad?", body: "Ja. Verktyget behåller mellanrum och radbrytningar och lämnar ord som inte är ackord oförändrade." }
      ],
      sections: [
        { title: "Hitta en enklare tonart", body: "Transponera en låt till en tonart som är lättare för rösten eller att spela, och kontrollera sedan resultatet med instrumentet." },
        { title: "Ackord och tonart", body: "Använd ackordtransponeraren när en låt känns för hög eller för låg. Flytta varje ackord lika många halvtoner." }
      ],
      faqs: [
        { question: "Byter transponering bara ackordnamn?", answer: "Den byter tonart och behåller den harmoniska relationen mellan ackorden." },
        { question: "Stöder den kors och b?", answer: "Den stöder vanliga dur-, moll-, kors-, b- och septimackord." }
      ]
    },
    "bass-tuner": {
      heroTitle: "Online basstämmare",
      heroDescription: "Stäm elbasen snabbt i webbläsaren med mikrofonbaserad tonigenkänning samt standard- och alternativa stämningar.",
      highlights: [
        { label: "Ingång", value: "Mikrofon + referenstoner" },
        { label: "Stämningar", value: "Standard, Drop D, 5-strängad" },
        { label: "Bäst för", value: "Elbas och akustisk bas" }
      ],
      quickAnswers: [
        { title: "Kan jag stämma en 5-strängad bas?", body: "Ja. Välj förinställningen för 5 strängar och stäm varje sträng inklusive låga H." },
        { title: "Hur får jag en stabil avläsning?", body: "Spela en sträng bestämt och håll stadigt. Låga frekvenser tar lite längre tid att registrera." }
      ],
      sections: [
        { title: "Kom i stämning snabbt", body: "Slå på mikrofonen, spela en sträng i taget och vänta tills nålen stabiliseras innan du justerar stämskruven." },
        { title: "Standard och alternativa basstämningar", body: "Standard E A D G passar de flesta genrer. Drop D ger en tyngre låg sträng. 5-strängad lägger till låga H för utökat omfång." }
      ],
      faqs: [
        { question: "Hur stämmer jag bas med mikrofon?", answer: "Slå på mikrofonen, knäpp en sträng tydligt och vänta en sekund tills nålen stabiliseras, justera sedan mot mitten." },
        { question: "Vad är standardstämning för bas?", answer: "Standardstämning för 4-strängad bas är E1 A1 D2 G2, från lägsta till högsta sträng." }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "Online ukulelestämmare",
      heroDescription: "Stäm ukulelen snabbt i webbläsaren med GCEA-standardstämning, Low G och alternativa stämningar.",
      highlights: [
        { label: "Ingång", value: "Mikrofon + referenstoner" },
        { label: "Stämningar", value: "GCEA, Low G, baryton D-G-B-E" },
        { label: "Bäst för", value: "Sopran, konsert, tenor, baryton" }
      ],
      quickAnswers: [
        { title: "Vad är standardstämning för ukulele?", body: "Sopran-, konsert- och tenorukulele använder G4-C4-E4-A4. Baryton använder D3-G3-B3-E4." },
        { title: "Vad är skillnaden mellan High G och Low G?", body: "High G är den vanliga re-entranta stämningen. Low G ersätter den med en lägre G-sträng för djupare klang och bredare omfång." }
      ],
      sections: [
        { title: "Så stämmer du en ukulele snabbt", body: "Välj GCEA-förinställningen, slå på mikrofonen och knäpp varje sträng tills avläsningen stabiliseras, justera sedan stämskruven." },
        { title: "Vanliga ukulelestämningar", body: "Börja med GCEA. Prova Low G för djupare klang, D-stämning för ljusare ton eller baryton D-G-B-E för en gitarrlik känsla." }
      ],
      faqs: [
        { question: "Hur stämmer jag ukulele med mikrofon?", answer: "Slå på mikrofonen, knäpp varje sträng tydligt och justera stämskruven tills nålen centreras på rätt ton." },
        { question: "Fungerar det för barytonukulele?", answer: "Ja. Välj baryton-förinställningen D-G-B-E och stäm varje sträng därefter." }
      ]
    },
    "sound-level-meter": {
      heroTitle: "Online ljudnivåmätare",
      heroDescription: "Mät uppskattade ljudnivåer i dB med webbläsarens mikrofon och en graf i realtid.",
      highlights: [
        { label: "Avläsning", value: "Uppskattad dB via mikrofon" },
        { label: "Visning", value: "Live-graf med min/max/medel" },
        { label: "Användning", value: "Kontroll av övningsmiljön" }
      ],
      quickAnswers: [
        { title: "Är den tillräckligt exakt för övning?", body: "Ja, för att jämföra miljöer och följa höga pass. Inte certifierad för professionell mätning." },
        { title: "Vilken nivå är säker för musikövning?", body: "60–75 dB för akustiska instrument. Ihållande nivåer över 85 dB kan på sikt ge hörseltrötthet." }
      ],
      sections: [
        { title: "Så använder du ljudnivåmätaren", body: "Slå på mikrofonen, håll enheten stilla i rummet och titta på dB-avläsningen i realtid och det glidande medelvärdet." },
        { title: "Tolka avläsningarna", body: "Tysta rum visar 30–45 dB. Normalt samtal runt 60 dB. Höga övningspass vanligtvis 75–90 dB." }
      ],
      faqs: [
        { question: "Hur exakt är mätaren?", answer: "Det är en uppskattning baserad på mikrofonsignalen, inte professionellt kalibrerad, men användbar för jämförelser och övervakning." },
        { question: "Krävs något särskilt tillstånd?", answer: "Ja, åtkomst till webbläsarens mikrofon krävs, precis som för instrumentstämmarna." }
      ]
    },
    "pitch-generator": {
      heroTitle: "Online tongenerator",
      heroDescription: "Generera rena toner från 20 Hz till 20000 Hz för hörselträning, instrumentreferens och ljudtest.",
      highlights: [
        { label: "Omfång", value: "20 Hz till 20000 Hz" },
        { label: "Utdata", value: "Ren sinuston i webbläsaren" },
        { label: "Användning", value: "Hörselträning och referenston" }
      ],
      quickAnswers: [
        { title: "Kan jag stämma instrument på gehör med den?", body: "Ja. Ställ in frekvensen på den ton du behöver och stäm sedan strängen mot den genererade tonen." },
        { title: "Är höga frekvenser säkra?", body: "Börja alltid på låg volym, särskilt över 8000 Hz, och öka gradvis." }
      ],
      sections: [
        { title: "Vad tongeneratorn är bra för", body: "Använd den som referenston för att stämma på gehör, för att öva intervallträning eller för att testa högtalare och hörlurar." },
        { title: "Användningstips", body: "Börja på låg volym. För referenston, använd 440 Hz (A4). Vid test, svep långsamt genom omfånget." }
      ],
      faqs: [
        { question: "Vilken frekvens motsvarar vilken ton?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Övriga toner följer genom att dubbla eller halvera per oktav." },
        { question: "Stannar tonen automatiskt?", answer: "Nej. Tryck alltid på Stopp när du är klar för att undvika lyssningströtthet." }
      ]
    }
  },
  no: {
    "guitar-tuner": {
      heroTitle: "Gratis online gitarstemmer",
      heroDescription:
        "Stem akustisk, elektrisk eller klassisk gitar med mikrofonbasert tonegjenkjenning, referansetoner og støtte for Standard, Drop D, Eb, D Standard, Open D og Open G.",
      highlights: [
        { label: "Inngang", value: "Mikrofon + referansetoner" },
        { label: "Stemminger", value: "Standard, Drop og Open" },
        { label: "Best for", value: "Klassisk, akustisk og elektrisk" }
      ],
      quickAnswers: [
        { title: "Er det bra for rask stemming?", body: "Ja. Slå på mikrofonen, spill én streng om gangen og vent litt til avlesningen stabiliserer seg før du justerer." },
        { title: "Hvilken stemming bør du prøve neste?", body: "Etter Standard er Drop D det enkleste neste steget, mens Eb Standard senker hele instrumentet." }
      ],
      sections: [
        { title: "Velg riktig stemming", body: "Bruk Standard for de fleste sanger, Drop D for lavere riff, Eb Standard for lavere spenning og Open G eller Open D for åpne akkorder." },
        { title: "Få en stabilere avlesning", body: "Hold instrumentet nær mikrofonen, spill én streng om gangen og vent litt til tonehøyden stabiliserer seg før du justerer." },
        { title: "Akkorder og toneart", body: "Bruk akkordtransponereren når en sang føles for høy eller for lav. Flytt hver akkord like mange halvtoner." }
      ],
      faqs: [
        { question: "Hvorfor hopper nålen?", answer: "Romstøy eller flere klingende strenger kan forstyrre tonegjenkjenningen. Spill én streng tydelig og la den klinge ut." },
        { question: "Hvilken stemming bør nybegynnere bruke?", answer: "For sekstrenget gitar, start med Standard E A D G B E før du prøver Drop D, Eb Standard eller åpne stemminger." }
      ]
    },
    metronome: {
      heroTitle: "Online metronom med BPM og underdelinger",
      heroDescription:
        "Øv med en komplett online metronom med presis BPM-kontroll, underdelinger, aksenter, Tap Tempo og progressive tempo-sykluser.",
      highlights: [
        { label: "Tempo", value: "Presis BPM + Tap Tempo" },
        { label: "Rytme", value: "Aksenter og underdelinger" },
        { label: "Rutine", value: "Øvingssyklus til mål-BPM" }
      ],
      quickAnswers: [
        { title: "Hvilken BPM bør nybegynnere starte med?", body: "Start i det raskeste tempoet der du fortsatt spiller rent og avslappet, og øk så i små steg." },
        { title: "Hvorfor bruke underdelinger?", body: "Underdelinger gjør den indre pulsen tydeligere og hjelper mye med timing, groove og jevnhet." }
      ],
      sections: [
        { title: "En bedre øvingsmetode", body: "Start sakte, aksentuer første slag og øk BPM først etter flere rene sykluser." },
        { title: "Rutine for å bygge fart", body: "Bruk øvingssyklusen for å gå fra start-BPM til mål-BPM i små steg etter et valgt antall takter eller sekunder." }
      ],
      faqs: [
        { question: "Hvilken BPM bør jeg øve på?", answer: "Start i det raskeste tempoet der du spiller rent og avslappet, og øk så gradvis." },
        { question: "Hvorfor bruke underdelinger?", answer: "De hjelper deg å høre rytmen inni hvert slag, ikke bare hovedklikket." }
      ]
    },
    "tap-bpm": {
      heroTitle: "Online Tap BPM-teller",
      heroDescription:
        "Tapp med på hvilken som helst sang, få umiddelbar og gjennomsnittlig BPM, kopier resultatet og gå rett videre til metronomøving.",
      highlights: [
        { label: "Avlesning", value: "Umiddelbar og gjennomsnittlig BPM" },
        { label: "Kopier", value: "Kopier resultatet med ett tapp" },
        { label: "Neste steg", value: "Gå rett til metronomøving" }
      ],
      quickAnswers: [
        { title: "Hvor mange tapp er nok?", body: "Åtte eller flere tapp gir vanligvis et mye stabilere gjennomsnitt enn en svært kort prøve." },
        { title: "Kan man måle en sang som spilles?", body: "Ja, så lenge du tapper konsekvent på samme pulspunkt." }
      ],
      sections: [
        { title: "Når du bør bruke Tap BPM", body: "Bruk Tap BPM når du hører en sang og raskt vil anslå tempoet før du stiller inn metronomen." }
      ],
      faqs: [
        { question: "Hvor mange tapp trenger jeg?", answer: "Åtte eller flere tapp gir vanligvis en stabilere gjennomsnittlig BPM." },
        { question: "Kan jeg bruke det med hvilken som helst sang?", answer: "Ja, så lenge du tapper konsekvent på samme pulspunkt." }
      ]
    },
    "chord-transposer": {
      heroTitle: "Online akkordtransponerer for toneartsskifte",
      heroDescription:
        "Transponer akkordrekker per halvtone, behold slash-akkorder, velg kryss eller b og kopier den nye rekken med en gang.",
      highlights: [
        { label: "Omfang", value: "-12 til +12 halvtoner" },
        { label: "Utdata", value: "Kryss eller b" },
        { label: "Støtte", value: "Slash-akkorder og akkordkvalitet" }
      ],
      quickAnswers: [
        { title: "Beholdes akkordkvaliteten?", body: "Ja. Bare grunntonen flyttes, mens m, 7, maj7, sus4, add9 og lignende kvaliteter beholdes." },
        { title: "Kan man transponere hele tekster og akkordark?", body: "Ja. Verktøyet beholder mellomrom og linjeskift og lar ord som ikke er akkorder være uendret." }
      ],
      sections: [
        { title: "Finn en enklere toneart", body: "Transponer en sang til en toneart som er lettere for stemmen eller å spille, og sjekk så resultatet med instrumentet." },
        { title: "Akkorder og toneart", body: "Bruk akkordtransponereren når en sang føles for høy eller for lav. Flytt hver akkord like mange halvtoner." }
      ],
      faqs: [
        { question: "Endrer transponering bare akkordnavn?", answer: "Den endrer tonearten og beholder det harmoniske forholdet mellom akkordene." },
        { question: "Støtter den kryss og b?", answer: "Den støtter vanlige dur-, moll-, kryss-, b- og septimakkorder." }
      ]
    },
    "bass-tuner": {
      heroTitle: "Online bassstemmer",
      heroDescription: "Stem bassgitaren raskt i nettleseren med mikrofonbasert tonegjenkjenning samt standard og alternative stemminger.",
      highlights: [
        { label: "Inngang", value: "Mikrofon + referansetoner" },
        { label: "Stemminger", value: "Standard, Drop D, 5-strengs" },
        { label: "Best for", value: "Elbass og akustisk bass" }
      ],
      quickAnswers: [
        { title: "Kan jeg stemme en 5-strengs bass?", body: "Ja. Velg forhåndsinnstillingen for 5 strenger og stem hver streng inkludert lav H." },
        { title: "Hvordan får jeg en stabil avlesning?", body: "Spill én streng bestemt og hold stødig. Lave frekvenser tar litt lengre tid å registrere." }
      ],
      sections: [
        { title: "Kom raskt i stemning", body: "Slå på mikrofonen, spill én streng om gangen og vent til nålen stabiliserer seg før du justerer stemmeskruen." },
        { title: "Standard og alternative bassstemminger", body: "Standard E A D G passer de fleste sjangre. Drop D gir en tyngre lav streng. 5-strengs legger til lav H for utvidet omfang." }
      ],
      faqs: [
        { question: "Hvordan stemmer jeg bass med mikrofon?", answer: "Slå på mikrofonen, knips én streng tydelig og vent et sekund til nålen stabiliserer seg, juster så mot midten." },
        { question: "Hva er standard bassstemming?", answer: "Standard stemming for 4-strengs bass er E1 A1 D2 G2, fra laveste til høyeste streng." }
      ]
    },
    "ukulele-tuner": {
      heroTitle: "Online ukulelestemmer",
      heroDescription: "Stem ukulelen raskt i nettleseren med GCEA-standardstemming, Low G og alternative stemminger.",
      highlights: [
        { label: "Inngang", value: "Mikrofon + referansetoner" },
        { label: "Stemminger", value: "GCEA, Low G, baryton D-G-B-E" },
        { label: "Best for", value: "Sopran, konsert, tenor, baryton" }
      ],
      quickAnswers: [
        { title: "Hva er standard ukulelestemming?", body: "Sopran-, konsert- og tenorukulele bruker G4-C4-E4-A4. Baryton bruker D3-G3-B3-E4." },
        { title: "Hva er forskjellen mellom High G og Low G?", body: "High G er den vanlige re-entrant-stemmingen. Low G erstatter den med en lavere G-streng for dypere klang og bredere omfang." }
      ],
      sections: [
        { title: "Slik stemmer du en ukulele raskt", body: "Velg GCEA-forhåndsinnstillingen, slå på mikrofonen og knips hver streng til avlesningen stabiliserer seg, juster så stemmeskruen." },
        { title: "Vanlige ukulelestemminger", body: "Start med GCEA. Prøv Low G for dypere klang, D-stemming for lysere tone eller baryton D-G-B-E for en gitarlignende følelse." }
      ],
      faqs: [
        { question: "Hvordan stemmer jeg ukulele med mikrofon?", answer: "Slå på mikrofonen, knips hver streng tydelig og juster stemmeskruen til nålen sentreres på riktig tone." },
        { question: "Fungerer det for barytonukulele?", answer: "Ja. Velg baryton-forhåndsinnstillingen D-G-B-E og stem hver streng deretter." }
      ]
    },
    "sound-level-meter": {
      heroTitle: "Online lydnivåmåler",
      heroDescription: "Mål anslåtte lydnivåer i dB med nettleserens mikrofon og en sanntidsgraf.",
      highlights: [
        { label: "Avlesning", value: "Anslått dB via mikrofon" },
        { label: "Visning", value: "Sanntidsgraf med min/maks/gjennomsnitt" },
        { label: "Bruk", value: "Kontroll av øvingsmiljø" }
      ],
      quickAnswers: [
        { title: "Er den nøyaktig nok for øving?", body: "Ja, for å sammenligne miljøer og følge høye økter. Ikke sertifisert for profesjonell måling." },
        { title: "Hvilket nivå er trygt for musikkøving?", body: "60–75 dB for akustiske instrumenter. Vedvarende nivåer over 85 dB kan over tid gi hørselstretthet." }
      ],
      sections: [
        { title: "Slik bruker du lydnivåmåleren", body: "Slå på mikrofonen, hold enheten i ro i rommet og se på dB-avlesningen i sanntid og det glidende gjennomsnittet." },
        { title: "Tolke avlesningene", body: "Stille rom viser 30–45 dB. Normal samtale rundt 60 dB. Høye øvingsøkter vanligvis 75–90 dB." }
      ],
      faqs: [
        { question: "Hvor nøyaktig er måleren?", answer: "Det er et anslag basert på mikrofonsignalet, ikke profesjonelt kalibrert, men nyttig for sammenligning og overvåking." },
        { question: "Trenger den spesiell tillatelse?", answer: "Ja, tilgang til nettleserens mikrofon kreves, akkurat som for instrumentstemmerne." }
      ]
    },
    "pitch-generator": {
      heroTitle: "Online tonegenerator",
      heroDescription: "Generer rene toner fra 20 Hz til 20000 Hz for hørselstrening, instrumentreferanse og lydtesting.",
      highlights: [
        { label: "Omfang", value: "20 Hz til 20000 Hz" },
        { label: "Utdata", value: "Ren sinustone i nettleseren" },
        { label: "Bruk", value: "Hørselstrening og referansetone" }
      ],
      quickAnswers: [
        { title: "Kan jeg stemme instrumenter på gehør med den?", body: "Ja. Sett frekvensen til tonen du trenger, og stem så strengen mot den genererte tonen." },
        { title: "Er høye frekvenser trygge?", body: "Start alltid på lavt volum, særlig over 8000 Hz, og øk gradvis." }
      ],
      sections: [
        { title: "Hva tonegeneratoren er god for", body: "Bruk den som referansetone for å stemme på gehør, for å øve intervallgjenkjenning eller for å teste høyttalere og hodetelefoner." },
        { title: "Brukstips", body: "Start på lavt volum. For referansetone, bruk 440 Hz (A4). Ved testing, sveip sakte gjennom omfanget." }
      ],
      faqs: [
        { question: "Hvilken frekvens svarer til hvilken tone?", answer: "A4 = 440 Hz. C4 = 261,6 Hz. G4 = 392 Hz. Andre toner følger ved å doble eller halvere per oktav." },
        { question: "Stopper tonen automatisk?", answer: "Nei. Trykk alltid på Stopp når du er ferdig for å unngå lyttetretthet." }
      ]
    }
  }
};

export function getToolSeoEnhancement(locale: Locale, tool: ToolSlug): ToolSeoEnhancement | null {
  const override = extendedToolSeoEnhancements[locale]?.[tool];
  if (override) return override;

  const contentLocale = getContentLocale(locale);
  const copy = toolSeoLabels[contentLocale];
  const hero = toolHeroCopy[contentLocale];
  const context = toolContextualModules[contentLocale];

  if (tool === "guitar-tuner") {
    return {
      heroDescription: hero["guitar-tuner"].description,
      heroTitle: hero["guitar-tuner"].title,
      faqs: copy.guitarFaqs,
      highlights: context["guitar-tuner"].highlights,
      quickAnswers: context["guitar-tuner"].quickAnswers,
      sections: [copy.guitarSetup, copy.accuracy, copy.chords]
    };
  }

  if (tool === "metronome") {
    return {
      heroDescription: hero.metronome.description,
      heroTitle: hero.metronome.title,
      faqs: copy.metronomeFaqs,
      highlights: context.metronome.highlights,
      quickAnswers: context.metronome.quickAnswers,
      sections: [copy.metronomePractice, copy.metronomeRoutine]
    };
  }

  if (tool === "tap-bpm") {
    return {
      heroDescription: hero["tap-bpm"].description,
      heroTitle: hero["tap-bpm"].title,
      faqs: copy.tapFaqs,
      highlights: context["tap-bpm"].highlights,
      quickAnswers: context["tap-bpm"].quickAnswers,
      sections: [copy.tapUse]
    };
  }

  if (tool === "chord-transposer") {
    return {
      heroDescription: hero["chord-transposer"].description,
      heroTitle: hero["chord-transposer"].title,
      faqs: copy.transposeFaqs,
      highlights: context["chord-transposer"].highlights,
      quickAnswers: context["chord-transposer"].quickAnswers,
      sections: [copy.transposeUse, copy.chords]
    };
  }

  if (
    tool === "bass-tuner" ||
    tool === "ukulele-tuner" ||
    tool === "sound-level-meter" ||
    tool === "pitch-generator"
  ) {
    const extra = extraToolEnhancements[contentLocale][tool];
    return {
      heroTitle: extra.heroTitle,
      heroDescription: extra.heroDescription,
      highlights: extra.highlights,
      quickAnswers: extra.quickAnswers,
      sections: extra.sections,
      faqs: extra.faqs,
    };
  }

  return null;
}

export const hubEnhancements: Record<BaseLocale, { guides: string; songs: string; tools: string }> = {
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

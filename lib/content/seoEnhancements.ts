import type { Locale } from "@/lib/i18n/locales";
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
  Locale,
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

const toolHeroCopy: Record<
  Locale,
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

export function getToolSeoEnhancement(locale: Locale, tool: ToolSlug): ToolSeoEnhancement | null {
  const copy = toolSeoLabels[locale];
  const hero = toolHeroCopy[locale];
  const context = toolContextualModules[locale];

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

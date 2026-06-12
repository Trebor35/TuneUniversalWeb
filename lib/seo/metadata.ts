import type { Metadata } from "next";
import { instrumentTunerSlugs, type InstrumentTunerContent } from "@/lib/content/instrumentTuners";
import { getContentLocale, locales, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { guideIndexContent, guideSlugs, type GuideContent, type GuideSlug } from "@/lib/content/guides";
import { publicDomainSongSlugs, songsUi, type PublicDomainSong } from "@/lib/content/publicDomainSongs";
import { staticPageSlugs, type StaticPageSlug } from "@/lib/content/staticPages";
import { tuningHubContent } from "@/lib/content/tuningHub";
import { toolsHubContent } from "@/lib/content/toolsHub";
import { toolSlugs, type ToolSlug } from "@/lib/tools/toolConfig";
import { homeKeywords, toolKeywords } from "@/lib/seo/keywords";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const homeMetadataOverrides: Partial<Record<Locale, { description: string; title: string }>> = {
  de: {
    title: "Kostenlose Musik-Tools online | Stimmgeraet, Metronom, BPM | TuneUniversal",
    description:
      "Kostenlose Musik-Tools online: universelles Stimmgeraet, Metronom, Tap BPM, Sound Meter, Akkord-Transposer und Stimmhilfen fuer viele Instrumente."
  },
  en: {
    title: "Free Music Tools Online | Tuner, Metronome, BPM | TuneUniversal",
    description:
      "Free music tools online: universal tuner, metronome, Tap BPM, sound meter, chord transposer and tuning help for guitar, bass, ukulele and more."
  },
  it: {
    title: "Strumenti musicali gratis online | Accordatore, metronomo, BPM | TuneUniversal",
    description:
      "Suite gratuita di strumenti musicali online: accordatore universale, metronomo, Tap BPM, fonometro, pitch generator e utility per accordature e accordi."
  }
};

const toolMetadataOverrides: Partial<Record<Locale, Partial<Record<ToolSlug, { description: string; title: string }>>>> = {
  ar: {
    "chord-transposer": {
      title: "ناقل الاوتار اونلاين | تغيير المقام بانصاف النغمات | TuneUniversal",
      description:
        "انقل الاوتار اونلاين بانصاف النغمات، مع دعم slash chords واختيار الدييز او البيمول ونسخ النتيجة فورا."
    },
    "guitar-tuner": {
      title: "موالف جيتار مجاني اونلاين | موالف كروماتيك بالميكروفون | TuneUniversal",
      description:
        "اضبط الجيتار اونلاين بموالف كروماتيك مجاني مع كشف طبقة الصوت بالميكروفون وعرض السنتات والنتات والضبطات البديلة."
    },
    metronome: {
      title: "مترونوم اونلاين مجاني | BPM والتقسيمات ودورة التمرين | TuneUniversal",
      description:
        "تدرّب بمترونوم اونلاين مجاني مع تحكم BPM والنبرات والايقاعات والتقسيمات وTap Tempo ودورات سرعة تدريجية."
    },
    "tap-bpm": {
      title: "Tap BPM اونلاين | اعرف سرعة الاغنية بسرعة | TuneUniversal",
      description:
        "اضغط مع الموسيقى لمعرفة متوسط BPM بسرعة، ثم انسخ النتيجة وانتقل مباشرة الى التمرين بالمترونوم."
    },
    "bass-tuner": { title: "موالف باس مجاني اونلاين | مع الميكروفون | TuneUniversal", description: "اضبط الباس اونلاين بموالف كروماتيك مجاني مع كشف الطبقة بالميكروفون ودعم الضبط القياسي والبديل." },
    "ukulele-tuner": { title: "موالف أوكليلي مجاني اونلاين | GCEA بالميكروفون | TuneUniversal", description: "اضبط الأوكليلي اونلاين بموالف مجاني مع دعم الضبط القياسي GCEA وLow G وضبطات بديلة أخرى." },
    "sound-level-meter": { title: "مقياس مستوى الصوت اونلاين مجاني | قياس ديسيبل في المتصفح | TuneUniversal", description: "اقيس مستوى الصوت المقدر بالديسيبل عبر ميكروفون المتصفح مع رسم بياني فوري وحساسية قابلة للتعديل." },
    "pitch-generator": { title: "مولد النغمات اونلاين مجاني | من 20 هرتز الى 20000 هرتز | TuneUniversal", description: "انشئ نغمات نقية من 20 هرتز الى 20000 هرتز للتدريب على الاذن ومرجع ضبط الالات واختبار الصوت." }
  },
  en: {
    "chord-transposer": {
      title: "Chord Transposer Online | Change Key by Semitones | TuneUniversal",
      description:
        "Transpose chords online by semitones, keep slash chords intact, switch between sharps and flats, and copy the result instantly."
    },
    "guitar-tuner": {
      title: "Free Guitar Tuner Online | Chromatic Tuner with Microphone | TuneUniversal",
      description:
        "Tune guitar online with a free chromatic tuner, microphone pitch detection, cents display, alternate tunings and note recognition in your browser."
    },
    metronome: {
      title: "Online Metronome | Free BPM, Subdivisions and Practice Cycle | TuneUniversal",
      description:
        "Practice with a free online metronome featuring BPM control, accents, time signatures, subdivisions, Tap Tempo and progressive speed cycles."
    },
    "tap-bpm": {
      title: "Tap BPM Online | Find Song Tempo Fast | TuneUniversal",
      description:
        "Tap along to music, find the average BPM in seconds, copy the tempo and move straight into metronome practice."
    },
    "bass-tuner": { title: "Bass Tuner Online | Free Microphone Tuner | TuneUniversal", description: "Tune bass guitar online with a free chromatic tuner, microphone pitch detection, standard tuning and common alternate tunings." },
    "ukulele-tuner": { title: "Ukulele Tuner Online | Free GCEA Tuner with Microphone | TuneUniversal", description: "Tune ukulele online with a free browser tuner, GCEA standard tuning, Low G and other alternate tunings." },
    "sound-level-meter": { title: "Sound Level Meter Online | Free dB Meter in Browser | TuneUniversal", description: "Measure estimated sound levels in dB with your browser microphone, real-time graph and adjustable sensitivity." },
    "pitch-generator": { title: "Pitch Generator Online | Free Tone Generator 20Hz to 20kHz | TuneUniversal", description: "Generate pure tones from 20 Hz to 20000 Hz for ear training, instrument reference and audio testing in your browser." }
  },
  de: {
    "chord-transposer": {
      title: "Akkord-Transposer online | Tonart nach Halbtönen ändern | TuneUniversal",
      description:
        "Transponiere Akkorde online nach Halbtönen, behalte Slash-Chords bei, wähle Kreuze oder Bs und kopiere das Ergebnis sofort."
    },
    "guitar-tuner": {
      title: "Kostenloser Gitarren-Tuner online | Chromatisches Stimmgerät mit Mikrofon | TuneUniversal",
      description:
        "Stimme Gitarre online mit kostenlosem chromatischem Tuner, Mikrofon-Erkennung, Cent-Anzeige, Notenerkennung und alternativen Stimmungen."
    },
    metronome: {
      title: "Online-Metronom kostenlos | BPM, Unterteilungen und Übungszyklus | TuneUniversal",
      description:
        "Übe mit einem kostenlosen Online-Metronom mit BPM-Steuerung, Betonungen, Taktarten, Unterteilungen, Tap Tempo und Steigerungsroutine."
    },
    "tap-bpm": {
      title: "Tap BPM online | Songtempo schnell finden | TuneUniversal",
      description:
        "Tippe zum Song mit, ermittle den durchschnittlichen BPM-Wert in Sekunden, kopiere das Tempo und starte direkt mit dem Metronom."
    },
    "bass-tuner": { title: "Bass-Tuner online kostenlos | Mit Mikrofon | TuneUniversal", description: "Stimme Bass online mit kostenlosem Tuner, Mikrofon-Erkennung und Standard- sowie alternativen Stimmungen." },
    "ukulele-tuner": { title: "Ukulele-Tuner online kostenlos | GCEA mit Mikrofon | TuneUniversal", description: "Stimme Ukulele online mit kostenlosem Tuner, Standard-GCEA, Low G und anderen Stimmungsvarianten." },
    "sound-level-meter": { title: "Schallpegelmesser online kostenlos | dB-Meter im Browser | TuneUniversal", description: "Miss den Schallpegel in dB mit dem Browser-Mikrofon, Echtzeit-Grafik und einstellbarer Empfindlichkeit." },
    "pitch-generator": { title: "Ton-Generator online kostenlos | 20 Hz bis 20000 Hz | TuneUniversal", description: "Erzeuge reine Toene von 20 Hz bis 20000 Hz fuer Gehoertraining, Stimmreferenz und Audiotest im Browser." }
  },
  es: {
    "chord-transposer": {
      title: "Transpositor de acordes online | Cambia tonalidad por semitonos | TuneUniversal",
      description:
        "Transpone acordes online por semitonos, conserva slash chords, elige sostenidos o bemoles y copia el resultado al instante."
    },
    "guitar-tuner": {
      title: "Afinador de guitarra gratis online | Cromatico con microfono | TuneUniversal",
      description:
        "Afina guitarra online con un afinador cromatico gratis, deteccion por microfono, cents, notas y afinaciones alternativas en el navegador."
    },
    metronome: {
      title: "Metronomo online gratis | BPM, subdivisiones y ciclo de practica | TuneUniversal",
      description:
        "Practica con un metronomo online gratis con BPM ajustable, acentos, compases, subdivisiones, Tap Tempo y ciclos progresivos."
    },
    "tap-bpm": {
      title: "Tap BPM online | Encuentra el tempo de una cancion | TuneUniversal",
      description:
        "Marca el pulso con la musica, calcula el BPM medio en segundos, copia el tempo y pasa al metronomo enseguida."
    },
    "bass-tuner": { title: "Afinador de bajo online gratis | Con microfono | TuneUniversal", description: "Afina el bajo online con un afinador cromatico gratuito, deteccion por microfono y afinaciones standard y alternativas." },
    "ukulele-tuner": { title: "Afinador de ukelele online gratis | GCEA con microfono | TuneUniversal", description: "Afina el ukelele online con un afinador gratuito, afinacion estandar GCEA, Low G y otras variantes." },
    "sound-level-meter": { title: "Sonometro online gratis | Medidor dB en el navegador | TuneUniversal", description: "Mide el nivel de sonido estimado en dB con el microfono del navegador, grafico en tiempo real y sensibilidad ajustable." },
    "pitch-generator": { title: "Generador de tono online gratis | De 20 Hz a 20000 Hz | TuneUniversal", description: "Genera tonos puros de 20 Hz a 20000 Hz para entrenamiento auditivo, referencia de notas y pruebas de audio." }
  },
  fr: {
    "chord-transposer": {
      title: "Transposeur d'accords en ligne | Changer la tonalite par demi-tons | TuneUniversal",
      description:
        "Transposez des accords en ligne par demi-tons, conservez les slash chords, choisissez diese ou bemol et copiez le resultat instantanement."
    },
    "guitar-tuner": {
      title: "Accordeur guitare gratuit en ligne | Chromatique avec micro | TuneUniversal",
      description:
        "Accordez la guitare en ligne avec un accordeur chromatique gratuit, detection micro, cents, notes et accordages alternatifs dans le navigateur."
    },
    metronome: {
      title: "Metronome en ligne gratuit | BPM, subdivisions et cycle d'exercice | TuneUniversal",
      description:
        "Travaillez avec un metronome en ligne gratuit, controle du BPM, accents, signatures rythmiques, subdivisions, Tap Tempo et progression."
    },
    "tap-bpm": {
      title: "Tap BPM en ligne | Trouver rapidement le tempo d'un morceau | TuneUniversal",
      description:
        "Tapez le rythme d'un morceau, calculez le BPM moyen en quelques secondes, copiez le tempo et passez au metronome."
    },
    "bass-tuner": { title: "Accordeur basse gratuit en ligne | Avec microphone | TuneUniversal", description: "Accordez la basse en ligne avec un accordeur chromatique gratuit, detection micro et accordages standard et alternatifs." },
    "ukulele-tuner": { title: "Accordeur ukulele gratuit en ligne | GCEA avec microphone | TuneUniversal", description: "Accordez l'ukulele en ligne avec un accordeur gratuit, accordage GCEA standard, Low G et autres variantes." },
    "sound-level-meter": { title: "Sonometre gratuit en ligne | Mesureur dB dans le navigateur | TuneUniversal", description: "Mesurez le niveau sonore estime en dB avec le microphone du navigateur, graphique en temps reel et sensibilite reglable." },
    "pitch-generator": { title: "Generateur de son gratuit en ligne | De 20 Hz a 20000 Hz | TuneUniversal", description: "Generez des tonalites pures de 20 Hz a 20000 Hz pour l'ear training, la reference de notes et les tests audio." }
  },
  it: {
    "chord-transposer": {
      title: "Traspositore accordi online | Cambia tonalita per semitoni | TuneUniversal",
      description:
        "Trasponi accordi online per semitoni, mantieni slash chord, scegli diesis o bemolli e copia subito il risultato."
    },
    "guitar-tuner": {
      title: "Accordatore chitarra gratis online | Cromatico con microfono | TuneUniversal",
      description:
        "Accorda la chitarra online con un accordatore cromatico gratuito, rilevamento microfono, cents, note e accordature alternative direttamente nel browser."
    },
    metronome: {
      title: "Metronomo online gratis | BPM, suddivisioni e ciclo studio | TuneUniversal",
      description:
        "Studia con un metronomo online gratuito con BPM regolabile, accenti, metriche, suddivisioni, Tap Tempo e ciclo progressivo."
    },
    "tap-bpm": {
      title: "Tap BPM online | Trova subito il tempo di un brano | TuneUniversal",
      description:
        "Batti il tempo della musica, calcola il BPM medio in pochi secondi, copia il valore e passa subito al metronomo."
    },
    "bass-tuner": { title: "Accordatore basso online gratis | Con microfono | TuneUniversal", description: "Accorda il basso online con un accordatore cromatico gratuito, rilevamento microfono e accordature standard e alternative." },
    "ukulele-tuner": { title: "Accordatore ukulele online gratis | GCEA con microfono | TuneUniversal", description: "Accorda l'ukulele online con un accordatore gratuito, accordatura standard GCEA, Low G e altre varianti." },
    "sound-level-meter": { title: "Fonometro online gratis | Misuratore dB nel browser | TuneUniversal", description: "Misura il livello sonoro stimato in dB con il microfono del browser, grafico in tempo reale e sensibilita regolabile." },
    "pitch-generator": { title: "Generatore di toni online gratis | Da 20 Hz a 20000 Hz | TuneUniversal", description: "Genera toni puri da 20 Hz a 20000 Hz per ear training, intonazione strumenti e test audio nel browser." }
  },
  ja: {
    "chord-transposer": {
      title: "コード移調ツール オンライン | 半音ごとにキー変更 | TuneUniversal",
      description:
        "コードを半音単位でオンライン移調。スラッシュコードも保持し、シャープ/フラットを選んで結果をすぐコピーできます。"
    },
    "guitar-tuner": {
      title: "無料ギターチューナー オンライン | マイク対応クロマチック | TuneUniversal",
      description:
        "マイクで音程検出できる無料のオンラインギターチューナー。セント表示、音名表示、代替チューニングにも対応。"
    },
    metronome: {
      title: "無料メトロノーム オンライン | BPM・細分化・練習サイクル | TuneUniversal",
      description:
        "BPM調整、アクセント、拍子、細分化、Tap Tempo、段階的スピード練習に対応した無料オンラインメトロノーム。"
    },
    "tap-bpm": {
      title: "Tap BPM オンライン | 曲のテンポをすばやく計測 | TuneUniversal",
      description:
        "音楽に合わせてタップし、平均BPMをすばやく計算。結果をコピーしてそのままメトロノーム練習へ進めます。"
    },
    "bass-tuner": { title: "無料オンライン ベースチューナー | マイク対応クロマチック | TuneUniversal", description: "無料のブラウザチューナーでベースをオンライン調弦。マイク検出、標準チューニングと代替チューニングに対応。" },
    "ukulele-tuner": { title: "無料オンライン ウクレレチューナー | GCEA マイク対応 | TuneUniversal", description: "無料のブラウザチューナーでウクレレをオンライン調弦。GCEA標準、Low Gとその他の代替チューニングに対応。" },
    "sound-level-meter": { title: "無料オンライン 騒音計 | ブラウザで dB 測定 | TuneUniversal", description: "ブラウザのマイクを使って音量をdBで測定。リアルタイムグラフと感度調整で練習環境を確認できます。" },
    "pitch-generator": { title: "無料オンライン ピッチジェネレーター | 20Hz から 20kHz | TuneUniversal", description: "20Hzから20000Hzまでの純音を生成。耳のトレーニング、楽器の基準音、音響テストに使えます。" }
  },
  ko: {
    "chord-transposer": {
      title: "코드 트랜스포저 온라인 | 반음 단위로 키 변경 | TuneUniversal",
      description:
        "코드를 반음 단위로 온라인 전조하고 slash chord도 유지하며 샵/플랫 형식을 선택해 결과를 바로 복사하세요."
    },
    "guitar-tuner": {
      title: "무료 기타 튜너 온라인 | 마이크 지원 크로매틱 튜너 | TuneUniversal",
      description:
        "마이크 피치 감지, 센트 표시, 음 이름, 대체 튜닝을 지원하는 무료 온라인 기타 튜너로 브라우저에서 바로 튜닝하세요."
    },
    metronome: {
      title: "무료 온라인 메트로놈 | BPM, 서브디비전, 연습 사이클 | TuneUniversal",
      description:
        "BPM 조절, 액센트, 박자표, 서브디비전, Tap Tempo, 점진적 속도 훈련을 지원하는 무료 온라인 메트로놈입니다."
    },
    "tap-bpm": {
      title: "Tap BPM 온라인 | 곡 템포 빠르게 찾기 | TuneUniversal",
      description:
        "음악에 맞춰 탭해 평균 BPM을 빠르게 계산하고 값을 복사한 뒤 바로 메트로놈 연습으로 이어가세요."
    },
    "bass-tuner": { title: "무료 온라인 베이스 튜너 | 마이크 지원 크로매틱 | TuneUniversal", description: "무료 크로매틱 브라우저 튜너로 베이스를 온라인 조율하세요. 마이크 감지, 표준 및 대체 튜닝 지원." },
    "ukulele-tuner": { title: "무료 온라인 우쿨렐레 튜너 | GCEA 마이크 지원 | TuneUniversal", description: "무료 브라우저 튜너로 우쿨렐레를 온라인 조율하세요. GCEA 표준, Low G 및 기타 대체 튜닝 지원." },
    "sound-level-meter": { title: "무료 온라인 소음 측정기 | 브라우저 dB 미터 | TuneUniversal", description: "브라우저 마이크로 추정 데시벨 레벨을 측정하세요. 실시간 그래프와 조절 가능한 감도로 연습 환경을 확인합니다." },
    "pitch-generator": { title: "무료 온라인 피치 제너레이터 | 20Hz 에서 20kHz | TuneUniversal", description: "20Hz에서 20000Hz까지 순음을 생성하세요. 귀 훈련, 악기 기준음 및 오디오 테스트에 활용합니다." }
  },
  pt: {
    "chord-transposer": {
      title: "Transpositor de acordes online | Mude a tonalidade por semitons | TuneUniversal",
      description:
        "Transponha acordes online por semitons, mantenha slash chords, escolha sustenidos ou bemóis e copie o resultado na hora."
    },
    "guitar-tuner": {
      title: "Afinador de guitarra gratis online | Cromatico com microfone | TuneUniversal",
      description:
        "Afine guitarra online com afinador cromatico gratis, deteccao por microfone, cents, notas e afinacoes alternativas direto no navegador."
    },
    metronome: {
      title: "Metronomo online gratis | BPM, subdivisoes e ciclo de estudo | TuneUniversal",
      description:
        "Estude com um metronomo online gratis com BPM ajustavel, acentos, compassos, subdivisoes, Tap Tempo e ciclo progressivo."
    },
    "tap-bpm": {
      title: "Tap BPM online | Descubra rapido o tempo da musica | TuneUniversal",
      description:
        "Toque no pulso da musica, calcule o BPM medio em segundos, copie o valor e passe direto para o metronomo."
    },
    "bass-tuner": { title: "Afinador de baixo online gratis | Com microfone | TuneUniversal", description: "Afine o baixo online com afinador cromatico gratuito, deteccao por microfone e afinacoes padrao e alternativas." },
    "ukulele-tuner": { title: "Afinador de ukulele online gratis | GCEA com microfone | TuneUniversal", description: "Afine o ukulele online com afinador gratuito, afinacao padrao GCEA, Low G e outras variantes." },
    "sound-level-meter": { title: "Sonometro online gratis | Medidor dB no navegador | TuneUniversal", description: "Meca o nivel de som estimado em dB com o microfone do navegador, grafico em tempo real e sensibilidade ajustavel." },
    "pitch-generator": { title: "Gerador de tom online gratis | De 20 Hz a 20000 Hz | TuneUniversal", description: "Gere tons puros de 20 Hz a 20000 Hz para treinamento auditivo, referencia de notas e testes de audio." }
  },
  ru: {
    "chord-transposer": {
      title: "Транспозер аккордов онлайн | Смена тональности по полутонам | TuneUniversal",
      description:
        "Транспонируйте аккорды онлайн по полутонам, сохраняйте slash-аккорды, выбирайте диезы или бемоли и копируйте результат сразу."
    },
    "guitar-tuner": {
      title: "Онлайн тюнер для гитары | Бесплатный хроматический тюнер с микрофоном | TuneUniversal",
      description:
        "Настройте гитару онлайн с помощью бесплатного хроматического тюнера, определения высоты тона через микрофон, отображения центов и поддержки альтернативных строев."
    },
    metronome: {
      title: "Онлайн метроном | Бесплатный BPM, доли и цикл практики | TuneUniversal",
      description:
        "Занимайтесь с бесплатным онлайн-метрономом: управление BPM, акценты, размеры, доли, Tap Tempo и прогрессивные циклы скорости."
    },
    "tap-bpm": {
      title: "Tap BPM онлайн | Быстро найти темп песни | TuneUniversal",
      description:
        "Отбивайте ритм под музыку, вычисляйте средний BPM за секунды, копируйте темп и сразу переходите к практике с метрономом."
    },
    "bass-tuner": { title: "Онлайн тюнер для бас-гитары | Бесплатный с микрофоном | TuneUniversal", description: "Настройте бас-гитару онлайн с помощью бесплатного хроматического тюнера, микрофона и поддержки стандартных и альтернативных строёв." },
    "ukulele-tuner": { title: "Онлайн тюнер для укулеле | Бесплатный GCEA с микрофоном | TuneUniversal", description: "Настройте укулеле онлайн с бесплатным тюнером, строевкой GCEA, Low G и другими вариантами." },
    "sound-level-meter": { title: "Онлайн шумомер | Бесплатный измеритель дБ в браузере | TuneUniversal", description: "Измеряйте уровень звука в дБ с помощью микрофона браузера, графика реального времени и регулируемой чувствительности." },
    "pitch-generator": { title: "Онлайн генератор тонов | Бесплатный от 20 Гц до 20000 Гц | TuneUniversal", description: "Генерируйте чистые тоны от 20 Гц до 20000 Гц для слухового тренинга, настройки инструментов и тестирования звука." }
  },
  zh: {
    "chord-transposer": {
      title: "在线和弦移调器 | 按半音更改调性 | TuneUniversal",
      description:
        "在线按半音移调和弦，保留 slash chord，支持升号和降号格式，并可立即复制结果。"
    },
    "guitar-tuner": {
      title: "免费在线吉他调音器 | 支持麦克风的半音调音器 | TuneUniversal",
      description:
        "使用免费的在线半音吉他调音器，通过麦克风检测音高，查看音分、音名和常见替代调弦。"
    },
    metronome: {
      title: "免费在线节拍器 | BPM、细分与练习循环 | TuneUniversal",
      description:
        "免费在线节拍器，支持 BPM 调节、重音、拍号、细分、Tap Tempo 和渐进式练习循环。"
    },
    "tap-bpm": {
      title: "在线 Tap BPM | 快速计算歌曲速度 | TuneUniversal",
      description:
        "跟着音乐点击节拍，快速计算平均 BPM，复制结果后可直接进入节拍器练习。"
    },
    "bass-tuner": { title: "免费在线贝斯调音器 | 支持麦克风 | TuneUniversal", description: "使用免费的浏览器调音器在线为贝斯调音，支持麦克风音高检测、标准调弦和常见替代调弦。" },
    "ukulele-tuner": { title: "免费在线尤克里里调音器 | GCEA 麦克风支持 | TuneUniversal", description: "使用免费的浏览器调音器在线为尤克里里调音，支持 GCEA 标准调弦、低音 G 和其他替代调弦。" },
    "sound-level-meter": { title: "免费在线声级计 | 浏览器 dB 测量仪 | TuneUniversal", description: "使用浏览器麦克风测量估计声级，配有实时图表和可调灵敏度，适合检查练习环境。" },
    "pitch-generator": { title: "免费在线音调发生器 | 20Hz 至 20kHz | TuneUniversal", description: "生成 20Hz 至 20000Hz 的纯音，用于耳音训练、乐器参考音和音频测试。" }
  },
  nl: {
    "guitar-tuner": { title: "Gratis online gitaar stemmer | Chromatische stemmer met microfoon | TuneUniversal", description: "Stem je gitaar online met een gratis chromatische stemmer, microfoonstemmen, centsweergave en ondersteuning voor alternatieve stemmingen." },
    "bass-tuner": { title: "Gratis online bas stemmer | Met microfoon | TuneUniversal", description: "Stem je bas online met een gratis chromatische stemmer, microfoonstemmen en standaard en alternatieve stemmingen." },
    "ukulele-tuner": { title: "Gratis online ukulele stemmer | GCEA met microfoon | TuneUniversal", description: "Stem je ukulele online met standaard GCEA, Low G en andere stemmingen via de microfoon van je browser." },
    metronome: { title: "Gratis online metronoom | BPM, maatsoorten en oefencycli | TuneUniversal", description: "Oefen met een gratis online metronoom: BPM instellen, accenten, maatsoorten, Tap Tempo en progressieve snelheidscycli." },
    "tap-bpm": { title: "Tap BPM online | Snel het tempo van een nummer vinden | TuneUniversal", description: "Tik op het ritme van de muziek, bereken het gemiddelde BPM en ga direct verder met de metronoom." },
    "chord-transposer": { title: "Online akkoordentransposer | Toonsoort per halve toon wijzigen | TuneUniversal", description: "Transponeer akkoorden online per halve toon, behoud slash-akkoorden en kopieer het resultaat direct." },
    "sound-level-meter": { title: "Gratis online geluidsniveaumeter | dB-meting in de browser | TuneUniversal", description: "Meet het geschatte geluidsniveau in dB met de browsermicrofoon, realtime grafiek en instelbare gevoeligheid." },
    "pitch-generator": { title: "Gratis online toonopwekker | 20 Hz tot 20000 Hz | TuneUniversal", description: "Genereer zuivere tonen van 20 Hz tot 20000 Hz voor gehoortraining, referentietonen en audiotests." }
  },
  pl: {
    "guitar-tuner": { title: "Darmowy stroik gitarowy online | Chromatyczny z mikrofonem | TuneUniversal", description: "Stroj gitare online za darmo chromatycznym stroikiem z mikrofonem, wyswietlaniem centow i obsluga alternatywnych stroj." },
    "bass-tuner": { title: "Darmowy stroik do basu online | Z mikrofonem | TuneUniversal", description: "Stroj bas online za darmo z mikrofonem, detekcja wysokosci dzwieku i obsluga stroju standardowego i alternatywnego." },
    "ukulele-tuner": { title: "Darmowy stroik do ukulele online | GCEA z mikrofonem | TuneUniversal", description: "Stroj ukulele online za darmo, standard GCEA, Low G i inne warianty przez mikrofon przegladarki." },
    metronome: { title: "Darmowy metronom online | BPM, metrum i cykle cwiczen | TuneUniversal", description: "Cwicz z darmowym metronomen online: ustawianie BPM, akcenty, metrum, Tap Tempo i progresywne cykle predkosci." },
    "tap-bpm": { title: "Tap BPM online | Szybkie znajdowanie tempa piosenki | TuneUniversal", description: "Stukaj w rytm muzyki, oblicz srednie BPM w kilka sekund i przejdz od razu do metronomu." },
    "chord-transposer": { title: "Transpozytor akordow online | Zmiana tonacji o polton | TuneUniversal", description: "Transponuj akordy online o polton, zachowaj slash-akordy i skopiuj wynik od razu." },
    "sound-level-meter": { title: "Miernik poziomu dzwieku online | Darmowy dB w przegladarce | TuneUniversal", description: "Zmierz szacunkowy poziom dzwieku w dB mikrofonem przegladarki, wykres na zywo i regulowana czulosc." },
    "pitch-generator": { title: "Generator tonow online | 20 Hz do 20000 Hz | TuneUniversal", description: "Generuj czyste tony od 20 Hz do 20000 Hz do treningu sluchu, strojenia instrumentow i testow audio." }
  },
  tr: {
    "guitar-tuner": { title: "Ucretsiz online gitar akordlayici | Mikrofonlu kromatik akordlayici | TuneUniversal", description: "Gitarinizi ucretsiz kromatik akordlayici ile online akord edin, mikrofon ile ses algilama ve alternatif akord destegi." },
    "bass-tuner": { title: "Ucretsiz online bas akordlayici | Mikrofonlu | TuneUniversal", description: "Bas gitarinizi online akord edin, ucretsiz mikrofon algilama ve standart ile alternatif akordlar destegi." },
    "ukulele-tuner": { title: "Ucretsiz online ukulele akordlayici | GCEA mikrofonlu | TuneUniversal", description: "Ukuleleyi online akord edin, standart GCEA, Low G ve diger akordlar tarayici mikrofonu ile." },
    metronome: { title: "Ucretsiz online metronom | BPM, olcu ve pratik dongusu | TuneUniversal", description: "Ucretsiz online metronom ile calisin: BPM ayari, vurgular, olcular, Tap Tempo ve ilerleme hiz dongusu." },
    "tap-bpm": { title: "Tap BPM online | Sarki temposunu hizlica bulun | TuneUniversal", description: "Muzige vurun, saniyeler icinde ortalama BPM hesaplayin ve hemen metronomla pratik yapin." },
    "chord-transposer": { title: "Online akor transpozisyoncusu | Yarim ton tonal degisim | TuneUniversal", description: "Akorlari online olarak yari ton bazinda transpoz edin, slash akordlari koruyun ve sonucu kopyalayin." },
    "sound-level-meter": { title: "Ucretsiz online ses seviyesi olceri | Tarayici dB olcumu | TuneUniversal", description: "Tarayici mikrofonu ile tahmini ses seviyesini dB olarak olcun, gercek zamanli grafik ve ayarlanabilir hassasiyet." },
    "pitch-generator": { title: "Ucretsiz online ses ureteci | 20 Hz ile 20000 Hz | TuneUniversal", description: "Kulak egitimi, alet referansi ve ses testi icin 20 Hz ile 20000 Hz arasi saf tonlar uretin." }
  },
  cs: {
    "guitar-tuner": { title: "Zdarma ladicky na kytaru online | Chromaticky s mikrofonem | TuneUniversal", description: "Naladte kytaru online zdarma chromatickou ladickou s mikrofonem, zobrazenim centu a podporou alternativnich ladeni." },
    "bass-tuner": { title: "Zdarma ladicky na baskytaru online | S mikrofonem | TuneUniversal", description: "Naladte baskytaru online zdarma s mikrofonem, detekcí výšky tónu a podporou standardnich a alternativnich ladeni." },
    "ukulele-tuner": { title: "Zdarma ladicky na ukulele online | GCEA s mikrofonem | TuneUniversal", description: "Naladte ukulele online zdarma, standardni GCEA, Low G a dalsi varianty pres mikrofon prohlizece." },
    metronome: { title: "Zdarma online metronom | BPM, takty a cykly cviceni | TuneUniversal", description: "Cvicte s bezplatnym online metronomen: nastaveni BPM, akcentace, takty, Tap Tempo a progresivni cykly." },
    "tap-bpm": { title: "Tap BPM online | Rychle najdete tempo skladby | TuneUniversal", description: "Klepejte v rytmu hudby, vypoctete prumerne BPM za sekundy a ihned prejdete k metronomu." },
    "chord-transposer": { title: "Online transpozer akkordov | Zmena tonality po pultonu | TuneUniversal", description: "Transponujte akordy online po pultonu, zachovejte slash-akordy a zkopirujte vysledek hned." },
    "sound-level-meter": { title: "Zdarma online meric hluku | Mereni dB v prohlizeci | TuneUniversal", description: "Merte odhadovanou hladinu zvuku v dB mikrofonem prohlizece, graf v realnem case a nastavitelna citlivost." },
    "pitch-generator": { title: "Zdarma generator tonu online | 20 Hz az 20000 Hz | TuneUniversal", description: "Generujte ciste tony od 20 Hz do 20000 Hz pro trenovani sluchu, reference nastroju a testy zvuku." }
  },
  sv: {
    "guitar-tuner": { title: "Gratis gitarrstämmare online | Kromatisk med mikrofon | TuneUniversal", description: "Stäm gitarren online gratis med en kromatisk stämmare, mikrofondetektering, centvisning och alternativa stämningar." },
    "bass-tuner": { title: "Gratis basstämmare online | Med mikrofon | TuneUniversal", description: "Stäm basgitarren online gratis med mikrofon, tonhöjdsdetektering och standard och alternativa stämningar." },
    "ukulele-tuner": { title: "Gratis ukulelestämmare online | GCEA med mikrofon | TuneUniversal", description: "Stäm ukulelen online gratis med standard GCEA, Low G och andra varianter via webbläsarens mikrofon." },
    metronome: { title: "Gratis metronom online | BPM, taktarter och övningscykler | TuneUniversal", description: "Öva med en gratis online-metronom: BPM-inställning, accenter, taktarter, Tap Tempo och progressiva hastighetscykler." },
    "tap-bpm": { title: "Tap BPM online | Hitta låtens tempo snabbt | TuneUniversal", description: "Knacka i takt med musiken, beräkna genomsnittlig BPM på sekunder och gå direkt till metronomen." },
    "chord-transposer": { title: "Online ackordstransponerare | Ändra tonart i halvtoner | TuneUniversal", description: "Transponera ackord online i halvtoner, bevara slash-ackord och kopiera resultatet direkt." },
    "sound-level-meter": { title: "Gratis ljudnivåmätare online | dB-mätning i webbläsaren | TuneUniversal", description: "Mät uppskattad ljudnivå i dB med webbläsarens mikrofon, realtidsgraf och justerbar känslighet." },
    "pitch-generator": { title: "Gratis tonsignal online | 20 Hz till 20000 Hz | TuneUniversal", description: "Generera rena toner från 20 Hz till 20000 Hz för gehörsträning, instrumentreferens och ljudtester." }
  },
  "pt-BR": {
    "guitar-tuner": { title: "Afinador de violao online gratis | Cromatico com microfone | TuneUniversal", description: "Afine seu violao ou guitarra online com afinador cromatico gratuito, microfone, exibicao de cents e afinacoes alternativas." },
    "bass-tuner": { title: "Afinador de baixo online gratis | Com microfone | TuneUniversal", description: "Afine o contrabaixo online com afinador cromatico gratuito, deteccao por microfone e afinacoes padrao e alternativas." },
    "ukulele-tuner": { title: "Afinador de ukulele online gratis | GCEA com microfone | TuneUniversal", description: "Afine seu ukulele online com afinacao padrao GCEA, Low G e outras variacoes pelo microfone do navegador." },
    metronome: { title: "Metronomo online gratis | BPM, subdivisoes e ciclo de pratica | TuneUniversal", description: "Treine com metronomo online gratuito: controle de BPM, acentos, compassos, Tap Tempo e ciclos progressivos." },
    "tap-bpm": { title: "Tap BPM online | Encontre o tempo da musica rapido | TuneUniversal", description: "Bata no ritmo da musica, calcule o BPM medio em segundos e vá direto para o metronomo." },
    "chord-transposer": { title: "Transpositor de acordes online | Muda tom por semitons | TuneUniversal", description: "Transponha acordes online por semitons, mantenha slash chords, escolha sustenidos ou bemois e copie o resultado." },
    "sound-level-meter": { title: "Decibelimetro online gratis | Medicao dB no navegador | TuneUniversal", description: "Meca o nivel de som estimado em dB com o microfone do navegador, grafico em tempo real e sensibilidade ajustavel." },
    "pitch-generator": { title: "Gerador de frequencia online gratis | 20 Hz a 20000 Hz | TuneUniversal", description: "Gere tons puros de 20 Hz a 20000 Hz para treinamento auditivo, referencia de notas e testes de audio." }
  },
  hi: {
    "guitar-tuner": { title: "मुफ्त ऑनलाइन गिटार ट्यूनर | माइक्रोफोन के साथ | TuneUniversal", description: "अपने गिटार को ऑनलाइन मुफ्त क्रोमैटिक ट्यूनर से ट्यून करें, माइक्रोफोन से पिच डिटेक्शन और वैकल्पिक ट्यूनिंग के साथ।" },
    "bass-tuner": { title: "मुफ्त ऑनलाइन बास ट्यूनर | माइक्रोफोन के साथ | TuneUniversal", description: "बास गिटार को ऑनलाइन मुफ्त ट्यून करें, माइक्रोफोन से पिच डिटेक्शन और स्टैंडर्ड व वैकल्पिक ट्यूनिंग के साथ।" },
    "ukulele-tuner": { title: "मुफ्त ऑनलाइन यूकुलेले ट्यूनर | GCEA माइक्रोफोन के साथ | TuneUniversal", description: "यूकुलेले को ऑनलाइन ट्यून करें, स्टैंडर्ड GCEA, Low G और अन्य ट्यूनिंग ब्राउज़र माइक्रोफोन से।" },
    metronome: { title: "मुफ्त ऑनलाइन मेट्रोनोम | BPM, ताल और अभ्यास चक्र | TuneUniversal", description: "मुफ्त ऑनलाइन मेट्रोनोम से अभ्यास करें: BPM सेटिंग, एक्सेंट, ताल, Tap Tempo और प्रगतिशील गति चक्र।" },
    "tap-bpm": { title: "Tap BPM ऑनलाइन | गाने का टेम्पो जल्दी खोजें | TuneUniversal", description: "संगीत की लय पर टैप करें, सेकंड में औसत BPM की गणना करें और सीधे मेट्रोनोम पर जाएं।" },
    "chord-transposer": { title: "ऑनलाइन कॉर्ड ट्रांसपोज़र | अर्धस्वर में की बदलाव | TuneUniversal", description: "अर्धस्वर में ऑनलाइन कॉर्ड ट्रांसपोज़ करें, slash कॉर्ड सुरक्षित रखें और परिणाम तुरंत कॉपी करें।" },
    "sound-level-meter": { title: "मुफ्त ऑनलाइन साउंड लेवल मीटर | ब्राउज़र dB मापक | TuneUniversal", description: "ब्राउज़र माइक्रोफोन से अनुमानित ध्वनि स्तर dB में मापें, रियल-टाइम ग्राफ और समायोज्य संवेदनशीलता।" },
    "pitch-generator": { title: "मुफ्त ऑनलाइन पिच जनरेटर | 20 Hz से 20000 Hz | TuneUniversal", description: "कान प्रशिक्षण, वाद्ययंत्र संदर्भ और ऑडियो परीक्षण के लिए 20 Hz से 20000 Hz तक शुद्ध स्वर उत्पन्न करें।" }
  },
  no: {
    "guitar-tuner": { title: "Gratis gitarstemmer online | Kromatisk med mikrofon | TuneUniversal", description: "Stem gitaren online gratis med kromatisk stemmer, mikrofondetektering, sentvisning og støtte for alternative stemninger." },
    "bass-tuner": { title: "Gratis bassstemmer online | Med mikrofon | TuneUniversal", description: "Stem bassguitar online gratis med mikrofon, tonehøydedetektering og standard og alternative stemninger." },
    "ukulele-tuner": { title: "Gratis ukulelestemmer online | GCEA med mikrofon | TuneUniversal", description: "Stem ukulelen online gratis med standard GCEA, Low G og andre varianter via nettleserens mikrofon." },
    metronome: { title: "Gratis metronom online | BPM, taktarter og øvelsessykluser | TuneUniversal", description: "Øv med gratis online-metronom: BPM-innstilling, aksenter, taktarter, Tap Tempo og progressive hastighetssykluser." },
    "tap-bpm": { title: "Tap BPM online | Finn sangens tempo raskt | TuneUniversal", description: "Tapp i takt med musikken, beregn gjennomsnittlig BPM på sekunder og gå direkte til metronomen." },
    "chord-transposer": { title: "Online akkordtransponerare | Endre toneart i halvtoner | TuneUniversal", description: "Transponerere akkorder online i halvtoner, behold slash-akkorder og kopier resultatet direkte." },
    "sound-level-meter": { title: "Gratis lydnivåmåler online | dB-måling i nettleseren | TuneUniversal", description: "Mål estimert lydnivå i dB med nettleserens mikrofon, sanntidsgraf og justerbar følsomhet." },
    "pitch-generator": { title: "Gratis tonsignal online | 20 Hz til 20000 Hz | TuneUniversal", description: "Generer rene toner fra 20 Hz til 20000 Hz for gehørtrening, instrumentreferanse og lydtester." }
  }
};

const instrumentMetadataOverrides: Partial<
  Record<Locale, Partial<Record<string, { description: string; title: string }>>>
> = {
  de: {
    "8-string-guitar-tuner": {
      title: "8-Saiter Gitarre online stimmen | Kostenloser Tuner | TuneUniversal",
      description:
        "Stimme eine 8-Saiter Gitarre online mit Mikrofon, Referenznoten und Browser-Tuner fuer Extended-Range-Riffs und modernes Metal-Spiel."
    },
    "bass-tuner": {
      title: "Bass Tuner online | Kostenloses Stimmgeraet | TuneUniversal",
      description:
        "Stimme Bass online mit Mikrofon, Referenznoten und stabilem Browser-Tuner fuer Standard- und 5-Saiter-Setups."
    }
  },
  en: {
    "12-string-guitar-tuner": {
      title: "12 String Guitar Tuner Online | Free Microphone Tuner | TuneUniversal",
      description:
        "Tune 12 string guitar online with a free microphone tuner, reference notes and a stable browser display for octave pairs and chorus strings."
    },
    "7-string-guitar-tuner": {
      title: "7 String Guitar Tuner Online | Free Guitar Tuner | TuneUniversal",
      description:
        "Tune 7 string guitar online with microphone pitch detection, low B support, reference notes and a free browser tuner."
    },
    "8-string-guitar-tuner": {
      title: "8 String Guitar Tuner Online | F# Standard and Drop E | TuneUniversal",
      description:
        "Tune 8 string guitar online with microphone detection, reference notes for F# standard and extended-range tuning support in your browser."
    }
  },
  es: {
    "12-string-guitar-tuner": {
      title: "Afinador de guitarra de 12 cuerdas online | Gratis | TuneUniversal",
      description:
        "Afina guitarra de 12 cuerdas online con microfono, notas de referencia y ayuda estable para pares de cuerdas y afinacion estandar."
    },
    "7-string-guitar-tuner": {
      title: "Afinador de guitarra de 7 cuerdas online | Gratis | TuneUniversal",
      description:
        "Afina guitarra de 7 cuerdas online con microfono, soporte para cuerda grave Si y afinador gratuito en el navegador."
    },
    "8-string-guitar-tuner": {
      title: "Afinador de guitarra de 8 cuerdas online | Gratis | TuneUniversal",
      description:
        "Afina guitarra de 8 cuerdas online con microfono, notas de referencia y afinacion extendida para practica moderna y metal."
    },
    "koto-tuner": {
      title: "Afinador de koto online | Gratis | TuneUniversal",
      description:
        "Usa un afinador de koto online con microfono, notas de referencia y ayuda rapida para estudiar afinacion directamente en el navegador."
    }
  },
  fr: {
    "7-string-guitar-tuner": {
      title: "Accordeur guitare 7 cordes en ligne | Gratuit | TuneUniversal",
      description:
        "Accordez une guitare 7 cordes en ligne avec micro, notes de reference et accordeur gratuit dans le navigateur."
    },
    "8-string-guitar-tuner": {
      title: "Accordeur guitare 8 cordes en ligne | Gratuit | TuneUniversal",
      description:
        "Accordez une guitare 8 cordes en ligne avec micro, notes de reference et prise en charge des accordages etendus."
    },
    "violin-tuner": {
      title: "Accordeur violon en ligne | Gratuit | TuneUniversal",
      description:
        "Accordez votre violon en ligne avec un accordeur gratuit, le micro du navigateur et les notes de reference G D A E."
    }
  },
  it: {
    "12-string-guitar-tuner": {
      title: "Accordatore chitarra 12 corde gratis online | TuneUniversal",
      description:
        "Accorda la chitarra 12 corde online con microfono, note di riferimento e rilevamento stabile per cori e coppie d'ottava."
    },
    "8-string-guitar-tuner": {
      title: "Accordatore chitarra 8 corde gratis online | TuneUniversal",
      description:
        "Accorda la chitarra 8 corde online con microfono, note di riferimento e supporto per accordature estese moderne."
    }
  },
  ru: {
    "12-string-guitar-tuner": {
      title: "Онлайн тюнер для 12-струнной гитары | TuneUniversal",
      description: "Настройте 12-струнную гитару онлайн с микрофоном, опорными нотами и стабильным тюнером для проверки октавных пар."
    },
    "cello-tuner": {
      title: "Онлайн тюнер для виолончели | Бесплатно | TuneUniversal",
      description: "Бесплатный онлайн-тюнер для виолончели с поддержкой микрофона, опорными нотами и быстрым рабочим процессом для ежедневной настройки."
    },
    "cimbalom-tuner": {
      title: "Онлайн тюнер для цимбал | TuneUniversal",
      description: "Настройте цимбалы онлайн с вводом через микрофон, опорными нотами и бесплатным браузерным тюнером от TuneUniversal."
    },
    "guitar-tuner": {
      title: "Онлайн тюнер для гитары | Бесплатный хроматический тюнер | TuneUniversal",
      description: "Бесплатный онлайн-тюнер для гитары с определением высоты тона через микрофон, отображением центов и поддержкой стандартных и альтернативных строёв."
    }
  }
};

const priorityInstrumentMetadataOverrides: Partial<
  Record<Locale, Partial<Record<string, { description: string; title: string }>>>
> = {
  ar: {
    "7-string-guitar-tuner": {
      title: "موالف جيتار 7 اوتار اونلاين | مجاني مع الميكروفون | TuneUniversal",
      description: "اضبط جيتار 7 اوتار اونلاين مع الميكروفون ودعم الوتر المنخفض Si وقراءة واضحة للتدريب والريفات الحديثة."
    },
    "8-string-guitar-tuner": {
      title: "موالف جيتار 8 اوتار اونلاين | مجاني | TuneUniversal",
      description: "اضبط جيتار 8 اوتار اونلاين مع الميكروفون ونغمات مرجعية ودعم للضبطات الممتدة الحديثة."
    },
    "12-string-guitar-tuner": {
      title: "موالف جيتار 12 وتر اونلاين | مجاني | TuneUniversal",
      description: "اضبط جيتار 12 وتر اونلاين مع الميكروفون ونغمات مرجعية لمراجعة ازواج الاوتار والاكتافات."
    },
    "bass-tuner": {
      title: "موالف باس اونلاين | مجاني | TuneUniversal",
      description: "اضبط الباس اونلاين مع الميكروفون ونغمات مرجعية واضحة لاعدادات 4 و5 اوتار."
    },
    "violin-tuner": {
      title: "موالف كمان اونلاين | مجاني | TuneUniversal",
      description: "اضبط الكمان اونلاين مع الميكروفون ونغمات G D A E المرجعية للاستعمال اليومي."
    },
    "cello-tuner": {
      title: "موالف تشيلو اونلاين | مجاني | TuneUniversal",
      description: "اضبط التشيلو اونلاين مع الميكروفون ونغمات مرجعية واضحة للدراسة والبروفات."
    },
    "cimbalom-tuner": {
      title: "موالف سيمبالوم اونلاين | TuneUniversal",
      description: "استعمل موالف سيمبالوم اونلاين مع الميكروفون ونغمات مرجعية للصيانة المنتظمة والمراجعة السريعة."
    },
    "koto-tuner": {
      title: "موالف كوتو اونلاين | TuneUniversal",
      description: "استعمل موالف كوتو اونلاين مع الميكروفون ونغمات مرجعية لتثبيت الضبط بسرعة داخل المتصفح."
    },
    "sitar-tuner": {
      title: "موالف سيتار اونلاين مجاني | بالميكروفون | TuneUniversal",
      description: "اضبط السيتار اونلاين مع الميكروفون ونغمات مرجعية للضبط الهندي الكلاسيكي C# F# B C# F# G# بسرعة في المتصفح."
    },
    "erhu-tuner": {
      title: "موالف أرهو اونلاين مجاني | وترا D وA | TuneUniversal",
      description: "اضبط الأرهو اونلاين مع الميكروفون ونغمتا D4 وA4 المرجعيتان للضبط القياسي للكمان الصيني."
    },
    "santur-tuner": {
      title: "موالف سنطور اونلاين مجاني | TuneUniversal",
      description: "اضبط السنطور اونلاين مع الميكروفون ونغمات مرجعية للسلم الكروماتي للصيانة السريعة والدراسة."
    }
  },
  de: {
    "7-string-guitar-tuner": {
      title: "7-Saiter Gitarre online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme 7-Saiter Gitarre online mit tiefem H, Mikrofon-Erkennung und klarer Anzeige fuer moderne Riffs und taegliches Ueben."
    },
    "8-string-guitar-tuner": {
      title: "8-Saiter Gitarre online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme 8-Saiter Gitarre online mit Mikrofon, Referenznoten und klarer Hilfe fuer moderne Extended-Range-Setups."
    },
    "12-string-guitar-tuner": {
      title: "12-Saiter Gitarre online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme 12-Saiter Gitarre online mit Mikrofon, Referenznoten und Unterstuetzung fuer Oktavpaare und Doppelchore."
    },
    "bass-tuner": {
      title: "Bass online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme Bass online mit Mikrofon, stabiler Tonerkennung und Referenznoten fuer 4- und 5-Saiter-Setups."
    },
    "violin-tuner": {
      title: "Geige online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme Geige online mit Mikrofon und Referenznoten G D A E fuer den taeglichen Unterricht und schnelle Kontrolle."
    },
    "cello-tuner": {
      title: "Cello online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme Cello online mit Mikrofon, Referenznoten und einer schnellen Browser-Loesung fuer Probe und Ueben."
    },
    "cimbalom-tuner": {
      title: "Cimbalom online stimmen | TuneUniversal",
      description: "Stimme Cimbalom online mit Mikrofon, Referenznoten und schneller Hilfe fuer regelmaessige Kontrolle im Browser."
    },
    "koto-tuner": {
      title: "Koto online stimmen | TuneUniversal",
      description: "Stimme Koto online mit Mikrofon und Referenznoten, um die Stimmung schnell und einfach im Browser zu pruefen."
    },
    "sitar-tuner": {
      title: "Sitar online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme Sitar online mit Mikrofon und Referenznoten fuer das klassische indische C# F# B C# F# G# Setup schnell im Browser."
    },
    "erhu-tuner": {
      title: "Erhu online stimmen | Kostenloser D-A Tuner | TuneUniversal",
      description: "Stimme Erhu online mit Mikrofon und den zwei Referenztoenen D4 und A4 fuer das Standard-Chinesische-Geige-Setup."
    },
    "santur-tuner": {
      title: "Santur online stimmen | Kostenloser Tuner | TuneUniversal",
      description: "Stimme Santur online mit Mikrofon und chromatischen Referenztoenen fuer schnelle Kontrolle und regelmaessige Wartung."
    }
  },
  en: {
    "7-string-guitar-tuner": {
      title: "7 String Guitar Tuner Online | Free Microphone Tuner | TuneUniversal",
      description: "Tune 7 string guitar online with low B support, microphone pitch detection and a steadier display for daily practice and modern riffs."
    },
    "8-string-guitar-tuner": {
      title: "8 String Guitar Tuner Online | Free Extended Range Tuner | TuneUniversal",
      description: "Tune 8 string guitar online with microphone detection, reference notes and extended-range support for modern metal and low tunings."
    },
    "12-string-guitar-tuner": {
      title: "12 String Guitar Tuner Online | Free Microphone Tuner | TuneUniversal",
      description: "Tune 12 string guitar online with microphone help, reference notes and extra support for octave pairs and chorus-rich strings."
    },
    "bass-tuner": {
      title: "Bass Tuner Online | Free 4 and 5 String Tuner | TuneUniversal",
      description: "Tune bass online with your microphone, stable note detection and quick reference notes for 4 string and 5 string setups."
    },
    "violin-tuner": {
      title: "Violin Tuner Online | Free G D A E Tuner | TuneUniversal",
      description: "Tune violin online with browser microphone input, G D A E reference notes and a clear display for beginner-friendly daily tuning."
    },
    "cello-tuner": {
      title: "Cello Tuner Online | Free Microphone Tuner | TuneUniversal",
      description: "Tune cello online with microphone support, clear reference notes and a quick browser workflow for practice and rehearsal."
    },
    "cimbalom-tuner": {
      title: "Cimbalom Tuner Online | Free Browser Tuner | TuneUniversal",
      description: "Tune cimbalom online with microphone input, reference notes and a fast browser tuner for regular maintenance."
    },
    "koto-tuner": {
      title: "Koto Tuner Online | Free Browser Tuner | TuneUniversal",
      description: "Tune koto online with microphone input, reference notes and a fast browser workflow for everyday tuning practice."
    },
    "sitar-tuner": {
      title: "Sitar Tuner Online | Free Microphone Tuner | TuneUniversal",
      description: "Tune sitar online with microphone pitch detection and reference notes for the classical Indian C# F# B C# F# G# setup."
    },
    "erhu-tuner": {
      title: "Erhu Tuner Online | Free D A Tuner | TuneUniversal",
      description: "Tune erhu online with microphone input and D4 A4 reference notes for the standard two-string Chinese fiddle tuning."
    },
    "santur-tuner": {
      title: "Santur Tuner Online | Free Chromatic Tuner | TuneUniversal",
      description: "Tune santur online with microphone input and chromatic reference notes for the Persian hammered dulcimer standard setup."
    }
  },
  es: {
    "7-string-guitar-tuner": {
      title: "Afinador de guitarra de 7 cuerdas online | Gratis | TuneUniversal",
      description: "Afina guitarra de 7 cuerdas online con microfono, cuerda grave Si y lectura estable para practica y riffs modernos."
    },
    "8-string-guitar-tuner": {
      title: "Afinador de guitarra de 8 cuerdas online | Gratis | TuneUniversal",
      description: "Afina guitarra de 8 cuerdas online con microfono, notas de referencia y soporte para afinaciones extendidas modernas."
    },
    "12-string-guitar-tuner": {
      title: "Afinador de guitarra de 12 cuerdas online | Gratis | TuneUniversal",
      description: "Afina guitarra de 12 cuerdas online con microfono, notas de referencia y apoyo para pares de cuerdas y octavas."
    },
    "bass-tuner": {
      title: "Afinador de bajo online | Gratis | TuneUniversal",
      description: "Afina bajo online con microfono, deteccion estable y notas de referencia para configuraciones de 4 y 5 cuerdas."
    },
    "violin-tuner": {
      title: "Afinador de violin online | Gratis | TuneUniversal",
      description: "Afina violin online con microfono, notas G D A E y una lectura clara para estudio diario y principiantes."
    },
    "cello-tuner": {
      title: "Afinador de violonchelo online | Gratis | TuneUniversal",
      description: "Afina violonchelo online con microfono, notas de referencia claras y una forma rapida de revisar la afinacion en el navegador."
    },
    "cimbalom-tuner": {
      title: "Afinador de cimbalom online | Gratis | TuneUniversal",
      description: "Usa un afinador de cimbalom online con microfono y notas de referencia para mantenimiento regular y practica."
    },
    "koto-tuner": {
      title: "Afinador de koto online | Gratis | TuneUniversal",
      description: "Usa un afinador de koto online con microfono y notas de referencia para estudiar afinacion de forma rapida en el navegador."
    },
    "sitar-tuner": {
      title: "Afinador de sitar online | Gratis | TuneUniversal",
      description: "Afina sitar online con microfono y notas de referencia para la afinacion clasica india C# F# B C# F# G# directamente en el navegador."
    },
    "erhu-tuner": {
      title: "Afinador de erhu online | Gratis | TuneUniversal",
      description: "Afina erhu online con microfono y las notas de referencia D4 y A4 para la afinacion estandar del violin chino de dos cuerdas."
    },
    "santur-tuner": {
      title: "Afinador de santur online | Gratis | TuneUniversal",
      description: "Afina santur online con microfono y notas cromaticas de referencia para la afinacion estandar de la cimbala martillada persa."
    }
  },
  fr: {
    "7-string-guitar-tuner": {
      title: "Accordeur guitare 7 cordes en ligne | Gratuit | TuneUniversal",
      description: "Accordez une guitare 7 cordes en ligne avec micro, corde grave Si et lecture stable pour riffs modernes et travail quotidien."
    },
    "8-string-guitar-tuner": {
      title: "Accordeur guitare 8 cordes en ligne | Gratuit | TuneUniversal",
      description: "Accordez une guitare 8 cordes en ligne avec micro, notes de reference et aide claire pour les accordages etendus."
    },
    "12-string-guitar-tuner": {
      title: "Accordeur guitare 12 cordes en ligne | Gratuit | TuneUniversal",
      description: "Accordez une guitare 12 cordes en ligne avec micro, notes de reference et soutien pour les paires a l'octave."
    },
    "bass-tuner": {
      title: "Accordeur basse en ligne | Gratuit | TuneUniversal",
      description: "Accordez une basse en ligne avec micro, detection stable et notes de reference pour configurations 4 et 5 cordes."
    },
    "violin-tuner": {
      title: "Accordeur violon en ligne | Gratuit | TuneUniversal",
      description: "Accordez votre violon en ligne avec le micro du navigateur, les notes G D A E et une lecture simple pour l'etude quotidienne."
    },
    "cello-tuner": {
      title: "Accordeur violoncelle en ligne | Gratuit | TuneUniversal",
      description: "Accordez votre violoncelle en ligne avec micro, notes de reference claires et un flux rapide dans le navigateur."
    },
    "cimbalom-tuner": {
      title: "Accordeur cimbalom en ligne | Gratuit | TuneUniversal",
      description: "Accordez un cimbalom en ligne avec micro et notes de reference pour verifier rapidement l'accord quotidien."
    },
    "koto-tuner": {
      title: "Accordeur koto en ligne | Gratuit | TuneUniversal",
      description: "Accordez un koto en ligne avec micro, notes de reference et une aide simple pour l'accord quotidien."
    },
    "sitar-tuner": {
      title: "Accordeur sitar en ligne | Gratuit | TuneUniversal",
      description: "Accordez un sitar en ligne avec micro et notes de reference pour l'accordage indien classique C# F# B C# F# G# directement dans le navigateur."
    },
    "erhu-tuner": {
      title: "Accordeur erhu en ligne | Gratuit D A | TuneUniversal",
      description: "Accordez un erhu en ligne avec micro et les notes de reference D4 et A4 pour l'accordage standard du violon chinois a deux cordes."
    },
    "santur-tuner": {
      title: "Accordeur santour en ligne | Gratuit | TuneUniversal",
      description: "Accordez un santour en ligne avec micro et notes chromatiques de reference pour l'accordage standard du cymbalum persan."
    }
  },
  it: {
    "7-string-guitar-tuner": {
      title: "Accordatore chitarra 7 corde gratis online | TuneUniversal",
      description: "Accorda la chitarra 7 corde online con microfono, supporto per il Si basso e lettura stabile per riff moderni e studio quotidiano."
    },
    "8-string-guitar-tuner": {
      title: "Accordatore chitarra 8 corde gratis online | TuneUniversal",
      description: "Accorda la chitarra 8 corde online con microfono, note di riferimento e supporto per accordature estese e moderne."
    },
    "12-string-guitar-tuner": {
      title: "Accordatore chitarra 12 corde gratis online | TuneUniversal",
      description: "Accorda la chitarra 12 corde online con microfono, cori in ottava e note di riferimento utili per controllare ogni coppia."
    },
    "bass-tuner": {
      title: "Accordatore basso gratis online | TuneUniversal",
      description: "Accorda il basso online con microfono, rilevamento stabile e note di riferimento per setup a 4 e 5 corde."
    },
    "violin-tuner": {
      title: "Accordatore violino gratis online | TuneUniversal",
      description: "Accorda il violino online con microfono, note G D A E e una lettura chiara pensata per studio e utilizzo quotidiano."
    },
    "cello-tuner": {
      title: "Accordatore violoncello gratis online | TuneUniversal",
      description: "Accorda il violoncello online con microfono, note di riferimento chiare e un flusso rapido nel browser per studio e prove."
    },
    "cimbalom-tuner": {
      title: "Accordatore cimbalom online | TuneUniversal",
      description: "Usa un accordatore cimbalom online con microfono e note di riferimento per controlli rapidi e manutenzione regolare."
    },
    "koto-tuner": {
      title: "Accordatore koto online | TuneUniversal",
      description: "Usa un accordatore koto online con microfono e note di riferimento per verificare l'accordatura direttamente dal browser."
    },
    "sitar-tuner": {
      title: "Accordatore sitar online gratis | TuneUniversal",
      description: "Accorda il sitar online con microfono e note di riferimento per l'accordatura classica indiana C# F# B C# F# G# direttamente nel browser."
    },
    "erhu-tuner": {
      title: "Accordatore erhu online gratis | TuneUniversal",
      description: "Accorda l'erhu online con microfono e le note di riferimento D4 e A4 per l'accordatura standard del violino cinese a due corde."
    },
    "santur-tuner": {
      title: "Accordatore santur online gratis | TuneUniversal",
      description: "Accorda il santur online con microfono e note cromatiche di riferimento per la manutenzione e lo studio dello strumento."
    }
  },
  ja: {
    "7-string-guitar-tuner": {
      title: "オンライン 7弦ギターチューナー | 無料 | TuneUniversal",
      description: "低い B 弦に対応した 7弦ギター用オンラインチューナー。マイク検出と安定表示で日々の練習に使えます。"
    },
    "8-string-guitar-tuner": {
      title: "オンライン 8弦ギターチューナー | 無料 | TuneUniversal",
      description: "マイク入力と基準音に対応した 8弦ギター用オンラインチューナー。低音域や拡張チューニングの確認に便利です。"
    },
    "12-string-guitar-tuner": {
      title: "オンライン 12弦ギターチューナー | 無料 | TuneUniversal",
      description: "オクターブペアやコース弦の確認に便利な 12弦ギター用オンラインチューナーです。"
    },
    "bass-tuner": {
      title: "オンライン ベースチューナー | 無料 | TuneUniversal",
      description: "4弦・5弦ベースに対応したオンラインチューナー。マイク検出と基準音で素早くチューニングできます。"
    },
    "violin-tuner": {
      title: "オンライン バイオリンチューナー | 無料 | TuneUniversal",
      description: "G D A E の基準音とマイク入力に対応したオンラインバイオリンチューナーです。"
    },
    "cello-tuner": {
      title: "オンライン チェロチューナー | 無料 | TuneUniversal",
      description: "チェロをオンラインで素早くチューニング。マイク入力と基準音で練習前に確認できます。"
    },
    "cimbalom-tuner": {
      title: "オンライン ツィンバロムチューナー | TuneUniversal",
      description: "ツィンバロムの調弦をブラウザで確認できるオンラインチューナー。マイク入力と基準音に対応します。"
    },
    "koto-tuner": {
      title: "オンライン 箏チューナー | TuneUniversal",
      description: "箏の調弦をオンラインで確認できるチューナー。マイク入力と基準音で日常の調整をすばやく行えます。"
    },
    "sitar-tuner": {
      title: "無料オンライン シタールチューナー | TuneUniversal",
      description: "マイクと基準音を使ってシタールをオンラインで調弦。インド古典音楽の C# F# B C# F# G# 標準セットアップに対応。"
    },
    "erhu-tuner": {
      title: "無料オンライン 二胡チューナー | D A | TuneUniversal",
      description: "マイク入力と D4・A4 基準音を使って二胡をオンラインで調弦。二弦中国弓弦楽器の標準チューニングをブラウザで確認。"
    },
    "santur-tuner": {
      title: "無料オンライン サントゥールチューナー | TuneUniversal",
      description: "マイクとクロマチック基準音を使ってサントゥールをオンラインで調弦。ペルシャの打弦楽器のメンテナンスと練習に最適。"
    }
  },
  ko: {
    "7-string-guitar-tuner": {
      title: "온라인 7현 기타 튜너 | 무료 | TuneUniversal",
      description: "저음 B현을 지원하는 7현 기타용 온라인 튜너입니다. 마이크 감지와 안정된 표시로 연습과 리프 점검에 적합합니다."
    },
    "8-string-guitar-tuner": {
      title: "온라인 8현 기타 튜너 | 무료 | TuneUniversal",
      description: "마이크 입력과 기준음을 지원하는 8현 기타용 온라인 튜너로 확장 튜닝과 저음 세팅을 빠르게 확인할 수 있습니다."
    },
    "12-string-guitar-tuner": {
      title: "온라인 12현 기타 튜너 | 무료 | TuneUniversal",
      description: "옥타브 페어와 코러스 줄 점검에 유용한 12현 기타용 온라인 튜너입니다."
    },
    "bass-tuner": {
      title: "온라인 베이스 튜너 | 무료 | TuneUniversal",
      description: "4현과 5현 베이스에 맞춘 온라인 튜너로 마이크 감지와 기준음을 사용해 빠르게 튜닝할 수 있습니다."
    },
    "violin-tuner": {
      title: "온라인 바이올린 튜너 | 무료 | TuneUniversal",
      description: "G D A E 기준음과 마이크 입력을 지원하는 온라인 바이올린 튜너입니다."
    },
    "cello-tuner": {
      title: "온라인 첼로 튜너 | 무료 | TuneUniversal",
      description: "첼로를 온라인에서 빠르게 조율하세요. 마이크 입력과 기준음으로 연습 전 점검에 편리합니다."
    },
    "cimbalom-tuner": {
      title: "온라인 침발롬 튜너 | TuneUniversal",
      description: "침발롬의 조율을 브라우저에서 확인할 수 있는 온라인 튜너입니다. 마이크 입력과 기준음을 지원합니다."
    },
    "koto-tuner": {
      title: "온라인 코토 튜너 | TuneUniversal",
      description: "코토 조율을 빠르게 확인할 수 있는 온라인 튜너입니다. 마이크 입력과 기준음으로 일상 조율에 적합합니다."
    },
    "sitar-tuner": {
      title: "무료 온라인 시타르 튜너 | TuneUniversal",
      description: "마이크와 기준음을 사용해 시타르를 온라인에서 조율하세요. 인도 고전 음악의 C# F# B C# F# G# 표준 세팅을 지원합니다."
    },
    "erhu-tuner": {
      title: "무료 온라인 얼후 튜너 | D A | TuneUniversal",
      description: "마이크 입력과 D4·A4 기준음으로 얼후를 온라인에서 조율하세요. 2현 중국 찰현악기의 표준 튜닝을 브라우저에서 확인할 수 있습니다."
    },
    "santur-tuner": {
      title: "무료 온라인 산투르 튜너 | TuneUniversal",
      description: "마이크와 크로매틱 기준음을 사용해 산투르를 온라인에서 조율하세요. 페르시아 타현악기의 일상 관리와 연습에 적합합니다."
    }
  },
  pt: {
    "7-string-guitar-tuner": {
      title: "Afinador de guitarra de 7 cordas online | Gratis | TuneUniversal",
      description: "Afine guitarra de 7 cordas online com microfone, suporte para a corda Si grave e leitura estavel para riffs modernos."
    },
    "8-string-guitar-tuner": {
      title: "Afinador de guitarra de 8 cordas online | Gratis | TuneUniversal",
      description: "Afine guitarra de 8 cordas online com microfone, notas de referencia e suporte para afinacoes estendidas modernas."
    },
    "12-string-guitar-tuner": {
      title: "Afinador de guitarra de 12 cordas online | Gratis | TuneUniversal",
      description: "Afine guitarra de 12 cordas online com microfone, notas de referencia e apoio para pares em oitava."
    },
    "bass-tuner": {
      title: "Afinador de baixo online | Gratis | TuneUniversal",
      description: "Afine baixo online com microfone, deteccao estavel e notas de referencia para configuracoes de 4 e 5 cordas."
    },
    "violin-tuner": {
      title: "Afinador de violino online | Gratis | TuneUniversal",
      description: "Afine violino online com microfone, notas G D A E e leitura clara para estudo e uso diario."
    },
    "cello-tuner": {
      title: "Afinador de violoncelo online | Gratis | TuneUniversal",
      description: "Afine violoncelo online com microfone, notas de referencia claras e um fluxo rapido no navegador."
    },
    "cimbalom-tuner": {
      title: "Afinador de cimbalom online | Gratis | TuneUniversal",
      description: "Use um afinador de cimbalom online com microfone e notas de referencia para manutencao regular e verificacao rapida."
    },
    "koto-tuner": {
      title: "Afinador de koto online | Gratis | TuneUniversal",
      description: "Use um afinador de koto online com microfone e notas de referencia para checar a afinacao diretamente no navegador."
    },
    "sitar-tuner": {
      title: "Afinador de sitar online | Gratis | TuneUniversal",
      description: "Afine sitar online com microfone e notas de referencia para a afinacao indiana classica C# F# B C# F# G# diretamente no navegador."
    },
    "erhu-tuner": {
      title: "Afinador de erhu online | Gratis | TuneUniversal",
      description: "Afine erhu online com microfone e as notas de referencia D4 e A4 para a afinacao padrao do violino chines de duas cordas."
    },
    "santur-tuner": {
      title: "Afinador de santur online | Gratis | TuneUniversal",
      description: "Afine santur online com microfone e notas cromaticas de referencia para manutencao e estudo do instrumento persa."
    }
  },
  ru: {
    "7-string-guitar-tuner": {
      title: "Онлайн тюнер для 7-струнной гитары | Бесплатно | TuneUniversal",
      description: "Настройте 7-струнную гитару онлайн с поддержкой низкой ноты B, определением высоты тона через микрофон и стабильным отображением для ежедневной практики."
    },
    "8-string-guitar-tuner": {
      title: "Онлайн тюнер для 8-струнной гитары | Бесплатно | TuneUniversal",
      description: "Настройте 8-струнную гитару онлайн с микрофоном, опорными нотами и поддержкой расширенных строёв для современного металла."
    },
    "12-string-guitar-tuner": {
      title: "Онлайн тюнер для 12-струнной гитары | Бесплатно | TuneUniversal",
      description: "Настройте 12-струнную гитару онлайн с микрофоном и опорными нотами для удобной проверки октавных пар и хоровых струн."
    },
    "bass-tuner": {
      title: "Онлайн тюнер для баса | Бесплатно | TuneUniversal",
      description: "Настройте бас онлайн с поддержкой микрофона, стабильным определением нот и опорными нотами для 4- и 5-струнных инструментов."
    },
    "violin-tuner": {
      title: "Онлайн тюнер для скрипки | Бесплатно | TuneUniversal",
      description: "Настройте скрипку онлайн с микрофоном браузера, опорными нотами G D A E и чётким отображением для ежедневного использования."
    },
    "cello-tuner": {
      title: "Онлайн тюнер для виолончели | Бесплатно | TuneUniversal",
      description: "Настройте виолончель онлайн с поддержкой микрофона, опорными нотами и быстрым рабочим процессом в браузере для репетиций."
    },
    "cimbalom-tuner": {
      title: "Онлайн тюнер для цимбал | TuneUniversal",
      description: "Настройте цимбалы онлайн с вводом через микрофон и опорными нотами для быстрой проверки строя и регулярного обслуживания."
    },
    "koto-tuner": {
      title: "Онлайн тюнер для кото | TuneUniversal",
      description: "Настройте кото онлайн с микрофоном и опорными нотами для быстрой ежедневной настройки прямо в браузере."
    },
    "sitar-tuner": {
      title: "Онлайн тюнер для ситара | Бесплатно | TuneUniversal",
      description: "Настройте ситар онлайн с микрофоном и опорными нотами для классического индийского строя C# F# B C# F# G# прямо в браузере."
    },
    "erhu-tuner": {
      title: "Онлайн тюнер для эрху | D A | TuneUniversal",
      description: "Настройте эрху онлайн с микрофоном и опорными нотами D4 и A4 для стандартного строя китайской двухструнной скрипки."
    },
    "santur-tuner": {
      title: "Онлайн тюнер для сантура | Бесплатно | TuneUniversal",
      description: "Настройте сантур онлайн с микрофоном и хроматическими опорными нотами для быстрой настройки персидского цимбалона."
    }
  },
  zh: {
    "7-string-guitar-tuner": {
      title: "在线七弦吉他调音器 | 免费 | TuneUniversal",
      description: "使用在线七弦吉他调音器，通过麦克风识别低音 B 弦和其余弦的音高，适合现代演奏和日常练习。"
    },
    "8-string-guitar-tuner": {
      title: "在线八弦吉他调音器 | 免费 | TuneUniversal",
      description: "使用麦克风和参考音在线为八弦吉他调音，适合扩展音域和低音调弦设置。"
    },
    "12-string-guitar-tuner": {
      title: "在线十二弦吉他调音器 | 免费 | TuneUniversal",
      description: "在线为十二弦吉他调音，支持八度成对弦和合唱效果弦组的日常校准。"
    },
    "bass-tuner": {
      title: "在线贝斯调音器 | 免费 | TuneUniversal",
      description: "在线为贝斯调音，支持麦克风检测和参考音，适用于 4 弦与 5 弦配置。"
    },
    "violin-tuner": {
      title: "在线小提琴调音器 | 免费 | TuneUniversal",
      description: "使用浏览器麦克风和 G D A E 参考音在线调音，适合日常练习与初学者。"
    },
    "cello-tuner": {
      title: "在线大提琴调音器 | 免费 | TuneUniversal",
      description: "在线快速为大提琴调音，支持麦克风输入和清晰的参考音，适合练习前快速检查。"
    },
    "cimbalom-tuner": {
      title: "在线扬琴调音器 | 免费 | TuneUniversal",
      description: "使用在线扬琴调音器，通过麦克风和参考音进行快速校准和日常维护。"
    },
    "koto-tuner": {
      title: "在线筝调音器 | 免费 | TuneUniversal",
      description: "使用在线筝调音器，通过麦克风输入和参考音在浏览器中快速检查调弦状态。"
    },
    "sitar-tuner": {
      title: "免费在线西塔琴调音器 | TuneUniversal",
      description: "使用麦克风和参考音在线为西塔琴调音，支持印度古典音乐标准调弦 C# F# B C# F# G#。"
    },
    "erhu-tuner": {
      title: "免费在线二胡调音器 | D A | TuneUniversal",
      description: "使用麦克风和 D4、A4 参考音在线为二胡调音，快速确认两弦中国拉弦乐器的标准调弦。"
    },
    "santur-tuner": {
      title: "免费在线桑图尔调音器 | TuneUniversal",
      description: "使用麦克风和半音阶参考音在线为桑图尔调音，适合波斯击弦乐器的日常维护和练习。"
    }
  },
  hi: {
    "7-string-guitar-tuner": {
      title: "7 तार गिटार ट्यूनर ऑनलाइन | मुफ्त | TuneUniversal",
      description: "माइक्रोफोन से 7 तार गिटार ऑनलाइन ट्यून करें, लो B सपोर्ट और रोज़ की प्रैक्टिस के लिए।"
    },
    "8-string-guitar-tuner": {
      title: "8 तार गिटार ट्यूनर ऑनलाइन | मुफ्त | TuneUniversal",
      description: "माइक्रोफोन से 8 तार एक्सटेंडेड-रेंज गिटार ऑनलाइन ट्यून करें।"
    },
    "12-string-guitar-tuner": {
      title: "12 तार गिटार ट्यूनर ऑनलाइन | मुफ्त | TuneUniversal",
      description: "माइक्रोफोन से 12 तार गिटार ऑनलाइन ट्यून करें, ऑक्टेव पेयर नोट्स के साथ।"
    },
    "bass-tuner": {
      title: "बास ट्यूनर ऑनलाइन | मुफ्त माइक्रोफोन ट्यूनर | TuneUniversal",
      description: "4 और 5 तार बास को माइक्रोफोन से ऑनलाइन ट्यून करें, रेफरेंस नोट्स के साथ।"
    },
    "violin-tuner": {
      title: "वायलिन ट्यूनर ऑनलाइन | मुफ्त G D A E ट्यूनर | TuneUniversal",
      description: "माइक्रोफोन से वायलिन ऑनलाइन ट्यून करें, G D A E रेफरेंस नोट्स और क्लियर डिस्प्ले के साथ।"
    },
    "cello-tuner": {
      title: "सेलो ट्यूनर ऑनलाइन | मुफ्त माइक्रोफोन ट्यूनर | TuneUniversal",
      description: "माइक्रोफोन से सेलो ऑनलाइन ट्यून करें, रेफरेंस नोट्स और प्रैक्टिस के लिए।"
    },
    "sitar-tuner": {
      title: "सितार ट्यूनर ऑनलाइन | मुफ्त माइक्रोफोन ट्यूनर | TuneUniversal",
      description: "माइक्रोफोन से सितार ऑनलाइन ट्यून करें — भारतीय शास्त्रीय C# F# B C# F# G# सेटअप के लिए रेफरेंस नोट्स।"
    },
    "erhu-tuner": {
      title: "एर्हू ट्यूनर ऑनलाइन | D A | TuneUniversal",
      description: "माइक्रोफोन और D4 A4 रेफरेंस नोट्स से एर्हू ऑनलाइन ट्यून करें।"
    },
    "santur-tuner": {
      title: "संतूर ट्यूनर ऑनलाइन | मुफ्त | TuneUniversal",
      description: "माइक्रोफोन और क्रोमैटिक रेफरेंस नोट्स से संतूर ऑनलाइन ट्यून करें।"
    },
    "koto-tuner": {
      title: "कोटो ट्यूनर ऑनलाइन | मुफ्त | TuneUniversal",
      description: "माइक्रोफोन और रेफरेंस नोट्स से कोटो ऑनलाइन ट्यून करें।"
    },
    "cimbalom-tuner": {
      title: "सिम्बालोम ट्यूनर ऑनलाइन | मुफ्त | TuneUniversal",
      description: "माइक्रोफोन से सिम्बालोम ऑनलाइन ट्यून करें, नियमित रखरखाव के लिए।"
    }
  }
};

const priorityGuideMetadataOverrides: Partial<Record<Locale, Partial<Record<GuideSlug, { description: string; title: string }>>>> = {
  ar: {
    "how-to-tune-bass": {
      title: "كيفية ضبط الباس أونلاين | دليل 4 و5 أوتار | TuneUniversal",
      description: "اضبط الباس أونلاين على E A D G مع خطوات واضحة ودعم مناسب للباس 4 أوتار و5 أوتار."
    },
    "how-to-tune-violin": {
      title: "كيفية ضبط الكمان أونلاين | دليل G D A E | TuneUniversal",
      description: "اضبط الكمان أونلاين على G D A E مع خطوات بسيطة وقراءة أوضح للمبتدئين والاستعمال اليومي."
    },
    "standard-bass-tuning": {
      title: "الضبط القياسي للباس | E A D G | TuneUniversal",
      description: "تعرف على ضبط الباس القياسي E A D G ولماذا يبقى الإعداد الأساسي الأكثر استخدامًا بين العازفين."
    },
    "common-guitar-tunings": {
      title: "أشهر ضبطات الجيتار | Standard و Drop D و Open D | TuneUniversal",
      description: "راجع أشهر ضبطات الجيتار مثل Standard وDrop D وEb Standard وOpen D وOpen G في صفحة واحدة."
    },
    "drop-d-tuning": {
      title: "دليل ضبط Drop D | D A D G B E | TuneUniversal",
      description: "اضبط الجيتار على Drop D للحصول على وتر منخفض أقوى وPower Chords أسهل مع الاحتفاظ بإحساس قريب من الضبط القياسي."
    },
    "drop-c-tuning": {
      title: "دليل ضبط Drop C | نغمات واستخدامات | TuneUniversal",
      description: "تعرف على نغمات Drop C ومتى يستخدم هذا الضبط للروك والميتال الحديث والريفات الثقيلة."
    },
    "open-d-tuning": {
      title: "دليل ضبط Open D | أوتار مفتوحة وسلايد | TuneUniversal",
      description: "استخدم Open D للحصول على أوتار مفتوحة رنانة وصوت أوسع وأشكال مريحة للسلايد والفينغرستايل."
    },
    "eb-standard-tuning": {
      title: "دليل ضبط Eb Standard | نصف درجة لأسفل | TuneUniversal",
      description: "اخفض كل أوتار الجيتار نصف درجة إلى Eb Ab Db Gb Bb Eb لتحصل على شد أخف وصوت أدفأ."
    }
  },
  de: {
    "how-to-tune-bass": {
      title: "Bass online stimmen | Guide fuer 4 und 5 Saiten | TuneUniversal",
      description: "Stimme Bass online auf E A D G mit klaren Schritten und hilfreicher Unterstuetzung fuer 4- und 5-Saiter."
    },
    "how-to-tune-violin": {
      title: "Violine online stimmen | G D A E Guide | TuneUniversal",
      description: "Stimme Violine online auf G D A E mit einfachen Schritten und stabilerer Mikrofon-Erkennung fuer den Alltag."
    },
    "standard-bass-tuning": {
      title: "Standard-Bass-Stimmung | E A D G | TuneUniversal",
      description: "Sieh dir die Standard-Bass-Stimmung E A D G an und erfahre, warum sie weiterhin das haeufigste Grundsetup ist."
    },
    "common-guitar-tunings": {
      title: "Haeufige Gitarrenstimmungen | Standard, Drop D, Open D | TuneUniversal",
      description: "Vergleiche Standard, Drop D, Eb Standard, Open D und Open G in einer kompakten Gitarrenstimmungs-Uebersicht."
    },
    "drop-d-tuning": {
      title: "Drop D Tuning Guide | D A D G B E | TuneUniversal",
      description: "Stimme Gitarre auf Drop D fuer tiefere Riffs und einfachere Powerchords, ohne weit von Standard entfernt zu sein."
    },
    "drop-c-tuning": {
      title: "Drop C Tuning Guide | Noten und Einsatz | TuneUniversal",
      description: "Lerne die Noten von Drop C und warum diese Stimmung fuer modernen Rock und Metal so beliebt ist."
    },
    "open-d-tuning": {
      title: "Open D Tuning Guide | Offene Saiten und Slide | TuneUniversal",
      description: "Nutze Open D fuer resonante offene Saiten, Slide-Gitarre und breite akustische Akkordfarben."
    },
    "eb-standard-tuning": {
      title: "Eb Standard Tuning Guide | Halbton tiefer | TuneUniversal",
      description: "Senke alle Gitarrensaiten um einen Halbton auf Eb Ab Db Gb Bb Eb fuer weichere Spannung und tieferen Klang."
    }
  },
  en: {
    "how-to-tune-bass": {
      title: "How to Tune a Bass Online | 4 and 5 String Guide | TuneUniversal",
      description: "Tune bass online to E A D G with clear steps and practical help for both 4 string and 5 string setups."
    },
    "how-to-tune-violin": {
      title: "How to Tune a Violin Online | G D A E Guide | TuneUniversal",
      description: "Tune violin online to G D A E with simple steps and a steadier microphone workflow for daily practice."
    },
    "standard-bass-tuning": {
      title: "Standard Bass Tuning Guide | E A D G | TuneUniversal",
      description: "See the standard bass tuning E A D G and learn why it remains the default setup for most bass players."
    },
    "common-guitar-tunings": {
      title: "Common Guitar Tunings | Standard, Drop D, Open D | TuneUniversal",
      description: "Compare Standard, Drop D, Eb Standard, Open D and Open G in one practical guide to common guitar tunings."
    },
    "drop-d-tuning": {
      title: "Drop D Tuning Guide | D A D G B E | TuneUniversal",
      description: "Tune guitar to Drop D for heavier low riffs and easier power chords while keeping the rest of the neck familiar."
    },
    "drop-c-tuning": {
      title: "Drop C Tuning Guide | Notes and Uses | TuneUniversal",
      description: "Learn the exact Drop C notes and why this tuning is so common in modern rock and metal rhythm guitar."
    },
    "open-d-tuning": {
      title: "Open D Tuning Guide | Open Strings and Slide Guitar | TuneUniversal",
      description: "Use Open D tuning for resonant open strings, slide guitar and wider acoustic chord voicings."
    },
    "eb-standard-tuning": {
      title: "Eb Standard Tuning Guide | Half Step Down Guitar | TuneUniversal",
      description: "Lower every guitar string by a semitone to Eb Ab Db Gb Bb Eb for softer tension and a darker overall voice."
    }
  },
  es: {
    "how-to-tune-bass": {
      title: "Como afinar bajo online | Guia para 4 y 5 cuerdas | TuneUniversal",
      description: "Afina bajo online en E A D G con pasos claros y ayuda practica para configuraciones de 4 y 5 cuerdas."
    },
    "how-to-tune-violin": {
      title: "Como afinar violin online | Guia G D A E | TuneUniversal",
      description: "Afina violin online en G D A E con pasos sencillos y una lectura de microfono mas estable para uso diario."
    },
    "standard-bass-tuning": {
      title: "Afinacion estandar de bajo | E A D G | TuneUniversal",
      description: "Consulta la afinacion estandar del bajo E A D G y descubre por que sigue siendo la base mas usada."
    },
    "common-guitar-tunings": {
      title: "Afinaciones comunes de guitarra | Standard, Drop D y Open D | TuneUniversal",
      description: "Compara Standard, Drop D, Eb Standard, Open D y Open G en una guia practica de afinaciones comunes."
    },
    "drop-d-tuning": {
      title: "Guia de afinacion Drop D | D A D G B E | TuneUniversal",
      description: "Afina la guitarra en Drop D para riffs graves y power chords mas faciles sin alejarte demasiado del tacto estandar."
    },
    "drop-c-tuning": {
      title: "Guia de afinacion Drop C | Notas y usos | TuneUniversal",
      description: "Aprende las notas exactas de Drop C y por que esta afinacion es tan comun en rock moderno y metal."
    },
    "open-d-tuning": {
      title: "Guia de afinacion Open D | Cuerdas abiertas y slide | TuneUniversal",
      description: "Usa Open D para cuerdas abiertas resonantes, slide y voicings acusticos mas amplios."
    },
    "eb-standard-tuning": {
      title: "Guia de afinacion Eb Standard | Medio tono abajo | TuneUniversal",
      description: "Baja todas las cuerdas medio tono a Eb Ab Db Gb Bb Eb para una tension mas suave y un timbre mas grave."
    }
  },
  fr: {
    "how-to-tune-bass": {
      title: "Comment accorder une basse en ligne | Guide 4 et 5 cordes | TuneUniversal",
      description: "Accordez une basse en ligne en E A D G avec des etapes claires et une aide pratique pour les basses 4 et 5 cordes."
    },
    "how-to-tune-violin": {
      title: "Comment accorder un violon en ligne | Guide G D A E | TuneUniversal",
      description: "Accordez un violon en ligne en G D A E avec des etapes simples et une lecture micro plus stable au quotidien."
    },
    "standard-bass-tuning": {
      title: "Accordage standard de basse | E A D G | TuneUniversal",
      description: "Retrouvez l'accordage standard de basse E A D G et pourquoi il reste la base la plus utilisee."
    },
    "common-guitar-tunings": {
      title: "Accordages courants de guitare | Standard, Drop D, Open D | TuneUniversal",
      description: "Comparez Standard, Drop D, Eb Standard, Open D et Open G dans un guide pratique des accordages de guitare."
    },
    "drop-d-tuning": {
      title: "Guide de l'accordage Drop D | D A D G B E | TuneUniversal",
      description: "Accordez la guitare en Drop D pour des riffs plus graves et des power chords plus faciles tout en gardant des repères familiers."
    },
    "drop-c-tuning": {
      title: "Guide de l'accordage Drop C | Notes et usages | TuneUniversal",
      description: "Apprenez les notes exactes du Drop C et pourquoi cet accordage est si present en rock moderne et metal."
    },
    "open-d-tuning": {
      title: "Guide de l'accordage Open D | Cordes ouvertes et slide | TuneUniversal",
      description: "Utilisez l'Open D pour des cordes ouvertes resonantes, le slide et des accords acoustiques plus larges."
    },
    "eb-standard-tuning": {
      title: "Guide de l'accordage Eb Standard | Un demi-ton plus bas | TuneUniversal",
      description: "Baissez chaque corde d'un demi-ton vers Eb Ab Db Gb Bb Eb pour une tension plus souple et un timbre plus sombre."
    }
  },
  it: {
    "how-to-tune-bass": {
      title: "Come accordare il basso online | Guida 4 e 5 corde | TuneUniversal",
      description: "Accorda il basso online in Mi La Re Sol con passaggi chiari e supporto pratico per setup a 4 e 5 corde."
    },
    "how-to-tune-violin": {
      title: "Come accordare il violino online | Guida Sol Re La Mi | TuneUniversal",
      description: "Accorda il violino online in Sol Re La Mi con passaggi semplici e una lettura del microfono piu stabile."
    },
    "standard-bass-tuning": {
      title: "Accordatura standard del basso | E A D G | TuneUniversal",
      description: "Scopri l'accordatura standard del basso E A D G e perche resta la base piu usata dai bassisti."
    },
    "common-guitar-tunings": {
      title: "Accordature comuni per chitarra | Standard, Drop D, Open D | TuneUniversal",
      description: "Confronta Standard, Drop D, Eb Standard, Open D e Open G in una guida pratica sulle accordature comuni per chitarra."
    },
    "drop-d-tuning": {
      title: "Guida accordatura Drop D | Re La Re Sol Si Mi | TuneUniversal",
      description: "Accorda la chitarra in Drop D per riff piu gravi e power chord piu facili mantenendo un feeling vicino allo standard."
    },
    "drop-c-tuning": {
      title: "Guida accordatura Drop C | Note e usi | TuneUniversal",
      description: "Impara le note esatte della Drop C e perche questa accordatura e cosi usata in rock moderno e metal."
    },
    "open-d-tuning": {
      title: "Guida accordatura Open D | Corde aperte e slide | TuneUniversal",
      description: "Usa la Open D per corde aperte piu risonanti, slide e voicing acustici piu ampi."
    },
    "eb-standard-tuning": {
      title: "Guida accordatura Eb Standard | Mezzo tono sotto | TuneUniversal",
      description: "Abbassa tutte le corde di un semitono su Eb Ab Db Gb Bb Eb per meno tensione e un timbro piu scuro."
    }
  },
  ja: {
    "how-to-tune-bass": {
      title: "ベースをオンラインでチューニングする方法 | 4弦・5弦ガイド | TuneUniversal",
      description: "4弦・5弦ベースに対応しながら E A D G を基準にオンラインでベースを調弦するためのガイドです。"
    },
    "how-to-tune-violin": {
      title: "バイオリンをオンラインでチューニングする方法 | G D A E ガイド | TuneUniversal",
      description: "G D A E を基準に、初心者でも使いやすい手順でオンライン調弦できるバイオリンガイドです。"
    },
    "standard-bass-tuning": {
      title: "標準ベースチューニングガイド | E A D G | TuneUniversal",
      description: "標準ベースチューニング E A D G と、それが今でも多くのベーシストの基本である理由をまとめています。"
    },
    "common-guitar-tunings": {
      title: "よく使われるギターチューニング | Standard・Drop D・Open D | TuneUniversal",
      description: "Standard、Drop D、Eb Standard、Open D、Open G をひとつの実用ガイドで比較できます。"
    },
    "drop-d-tuning": {
      title: "Drop D チューニングガイド | D A D G B E | TuneUniversal",
      description: "ギターを Drop D にして、より重い低音リフと扱いやすいパワーコードを得るためのガイドです。"
    },
    "drop-c-tuning": {
      title: "Drop C チューニングガイド | 音名と使いどころ | TuneUniversal",
      description: "Drop C の正確な音名と、ロックやメタルでこのチューニングが選ばれる理由を確認できます。"
    },
    "open-d-tuning": {
      title: "Open D チューニングガイド | 開放弦とスライド | TuneUniversal",
      description: "Open D は開放弦の響き、スライド、広がりのあるアコースティックコードに向いています。"
    },
    "eb-standard-tuning": {
      title: "Eb Standard チューニングガイド | 半音下げギター | TuneUniversal",
      description: "すべての弦を半音下げて Eb Ab Db Gb Bb Eb にし、やわらかいテンションと少し低い響きを得ます。"
    }
  },
  ko: {
    "how-to-tune-bass": {
      title: "온라인으로 베이스 튜닝하는 방법 | 4현·5현 가이드 | TuneUniversal",
      description: "4현과 5현 세팅을 고려하면서 E A D G 기준으로 베이스를 온라인 조율하는 가이드입니다."
    },
    "how-to-tune-violin": {
      title: "온라인으로 바이올린 튜닝하는 방법 | G D A E 가이드 | TuneUniversal",
      description: "G D A E 기준으로 초보자도 따라가기 쉬운 단계로 바이올린을 온라인 조율할 수 있습니다."
    },
    "standard-bass-tuning": {
      title: "스탠다드 베이스 튜닝 가이드 | E A D G | TuneUniversal",
      description: "스탠다드 베이스 튜닝 E A D G 와 이것이 여전히 가장 널리 쓰이는 기본 세팅인 이유를 정리했습니다."
    },
    "common-guitar-tunings": {
      title: "자주 쓰는 기타 튜닝 | Standard, Drop D, Open D | TuneUniversal",
      description: "Standard, Drop D, Eb Standard, Open D, Open G 를 한 페이지에서 비교하는 실용 가이드입니다."
    },
    "drop-d-tuning": {
      title: "Drop D 튜닝 가이드 | D A D G B E | TuneUniversal",
      description: "기타를 Drop D 로 맞춰 더 무거운 저음 리프와 쉬운 파워코드를 만드는 방법을 정리했습니다."
    },
    "drop-c-tuning": {
      title: "Drop C 튜닝 가이드 | 음과 활용법 | TuneUniversal",
      description: "Drop C 의 정확한 음과 모던 록, 메탈에서 자주 쓰이는 이유를 확인하세요."
    },
    "open-d-tuning": {
      title: "Open D 튜닝 가이드 | 개방현과 슬라이드 | TuneUniversal",
      description: "Open D 는 개방현 울림, 슬라이드 연주, 더 넓은 어쿠스틱 코드 보이싱에 적합합니다."
    },
    "eb-standard-tuning": {
      title: "Eb Standard 튜닝 가이드 | 반음 내린 기타 | TuneUniversal",
      description: "모든 줄을 반음씩 내려 Eb Ab Db Gb Bb Eb 로 맞춰 더 부드러운 장력과 약간 낮은 음색을 얻습니다."
    }
  },
  pt: {
    "how-to-tune-bass": {
      title: "Como afinar baixo online | Guia 4 e 5 cordas | TuneUniversal",
      description: "Afine baixo online em E A D G com passos claros e ajuda pratica para configuracoes de 4 e 5 cordas."
    },
    "how-to-tune-violin": {
      title: "Como afinar violino online | Guia G D A E | TuneUniversal",
      description: "Afine violino online em G D A E com passos simples e uma leitura de microfone mais estavel."
    },
    "standard-bass-tuning": {
      title: "Afinacao padrao de baixo | E A D G | TuneUniversal",
      description: "Veja a afinacao padrao do baixo E A D G e por que ela continua sendo a base mais usada pelos baixistas."
    },
    "common-guitar-tunings": {
      title: "Afinacoes comuns de guitarra | Standard, Drop D, Open D | TuneUniversal",
      description: "Compare Standard, Drop D, Eb Standard, Open D e Open G em um guia pratico de afinacoes comuns."
    },
    "drop-d-tuning": {
      title: "Guia de afinacao Drop D | D A D G B E | TuneUniversal",
      description: "Afine a guitarra em Drop D para riffs graves e power chords mais faceis mantendo uma sensacao familiar."
    },
    "drop-c-tuning": {
      title: "Guia de afinacao Drop C | Notas e usos | TuneUniversal",
      description: "Aprenda as notas exatas da Drop C e por que ela e tao comum no rock moderno e no metal."
    },
    "open-d-tuning": {
      title: "Guia de afinacao Open D | Cordas soltas e slide | TuneUniversal",
      description: "Use Open D para cordas soltas ressonantes, slide e aberturas acusticas mais amplas."
    },
    "eb-standard-tuning": {
      title: "Guia de afinacao Eb Standard | Meio tom abaixo | TuneUniversal",
      description: "Baixe todas as cordas meio tom para Eb Ab Db Gb Bb Eb e obtenha menos tensao com um timbre mais escuro."
    }
  },
  ru: {
    "how-to-tune-bass": {
      title: "Как настроить бас онлайн | Руководство для 4 и 5 струн | TuneUniversal",
      description: "Настройте бас онлайн на E A D G с чёткими шагами и практической поддержкой для 4- и 5-струнных инструментов."
    },
    "how-to-tune-violin": {
      title: "Как настроить скрипку онлайн | Руководство G D A E | TuneUniversal",
      description: "Настройте скрипку онлайн на G D A E с простыми шагами и более стабильной работой микрофона для ежедневной практики."
    },
    "standard-bass-tuning": {
      title: "Стандартный строй баса | E A D G | TuneUniversal",
      description: "Изучите стандартный строй баса E A D G и узнайте, почему он остаётся основной настройкой для большинства басистов."
    },
    "common-guitar-tunings": {
      title: "Распространённые строи гитары | Standard, Drop D, Open D | TuneUniversal",
      description: "Сравните Standard, Drop D, Eb Standard, Open D и Open G в одном практическом руководстве по строям гитары."
    },
    "drop-d-tuning": {
      title: "Руководство по строю Drop D | D A D G B E | TuneUniversal",
      description: "Настройте гитару на Drop D для более тяжёлых низких риффов и удобных пауэр-аккордов, сохранив привычное ощущение грифа."
    },
    "drop-c-tuning": {
      title: "Руководство по строю Drop C | Ноты и применение | TuneUniversal",
      description: "Изучите точные ноты строя Drop C и узнайте, почему он так распространён в современном роке и метале."
    },
    "open-d-tuning": {
      title: "Руководство по строю Open D | Открытые струны и слайд | TuneUniversal",
      description: "Используйте строй Open D для резонирующих открытых струн, слайд-гитары и более широких акустических аккордов."
    },
    "eb-standard-tuning": {
      title: "Руководство по строю Eb Standard | На полтона ниже | TuneUniversal",
      description: "Опустите все струны гитары на полтона до Eb Ab Db Gb Bb Eb для меньшего натяжения и более тёмного звучания."
    }
  },
  zh: {
    "how-to-tune-bass": {
      title: "如何在线给贝斯调音 | 4弦与5弦指南 | TuneUniversal",
      description: "用清晰步骤在线把贝斯调到 E A D G，并兼顾 4 弦与 5 弦配置。"
    },
    "how-to-tune-violin": {
      title: "如何在线给小提琴调音 | G D A E 指南 | TuneUniversal",
      description: "以 G D A E 为基准，按简单步骤在线调好小提琴，适合初学者和日常练习。"
    },
    "standard-bass-tuning": {
      title: "标准贝斯调弦指南 | E A D G | TuneUniversal",
      description: "查看标准贝斯调弦 E A D G，并了解它为何仍然是多数贝斯手的默认基础。"
    },
    "common-guitar-tunings": {
      title: "常见吉他调弦 | Standard、Drop D、Open D | TuneUniversal",
      description: "在一页中比较 Standard、Drop D、Eb Standard、Open D 和 Open G。"
    },
    "drop-d-tuning": {
      title: "Drop D 调弦指南 | D A D G B E | TuneUniversal",
      description: "把吉他调成 Drop D，获得更厚实的低音 riff 和更容易的 power chord。"
    },
    "drop-c-tuning": {
      title: "Drop C 调弦指南 | 音名与用途 | TuneUniversal",
      description: "了解 Drop C 的准确音名，以及它为何常用于现代摇滚和金属。"
    },
    "open-d-tuning": {
      title: "Open D 调弦指南 | 开放弦与 Slide | TuneUniversal",
      description: "Open D 适合更有共鸣的空弦、slide 演奏以及更宽广的原声和弦。"
    },
    "eb-standard-tuning": {
      title: "Eb Standard 调弦指南 | 半音下调吉他 | TuneUniversal",
      description: "把所有吉他弦降半音到 Eb Ab Db Gb Bb Eb，得到更柔和的张力和更低沉的音色。"
    }
  }
};

const guideMetadataOverrides: Partial<Record<Locale, Partial<Record<GuideSlug, { description: string; title: string }>>>> = {
  en: {
    "d-standard-tuning": {
      title: "D Standard Tuning for Guitar | Notes and Online Tuner | TuneUniversal",
      description:
        "Learn D Standard tuning for guitar, string notes, common genres and use the free online tuner to match every string."
    },
    "drop-c-tuning": {
      title: "Drop C Tuning for Guitar | Notes and Free Online Tuner | TuneUniversal",
      description:
        "See Drop C tuning notes for guitar, when to use it, common genres and open the free online tuner with reference strings."
    },
    "drop-d-tuning": {
      title: "Drop D Tuning for Guitar | Notes and Free Online Tuner | TuneUniversal",
      description:
        "Learn Drop D tuning notes for guitar, common uses, quick setup tips and open the free online tuner directly from the guide."
    },
    "eb-standard-tuning": {
      title: "Eb Standard Tuning for Guitar | Notes and Free Online Tuner | TuneUniversal",
      description:
        "Use this Eb Standard tuning guide for guitar to see string notes, common genres and open the free online tuner in one click."
    },
    "how-to-tune-12-string-guitar": {
      title: "How to Tune a 12 String Guitar Online | Free Guide | TuneUniversal",
      description:
        "Learn how to tune a 12 string guitar online with reference notes, octave-pair tips, common mistakes and a free browser tuner."
    },
    "how-to-tune-bass": {
      title: "How to Tune a Bass Online | 4 and 5 String Guide | TuneUniversal",
      description:
        "Tune bass online with microphone help, standard bass notes, practical setup tips and quick links to the free tuner."
    },
    "how-to-tune-violin": {
      title: "How to Tune a Violin Online | G D A E Guide | TuneUniversal",
      description:
        "Tune a violin online with microphone detection, reference notes G D A E, beginner tips and a free violin tuner in your browser."
    },
    "open-d-tuning": {
      title: "Open D Tuning for Guitar | Notes, Chords and Online Tuner | TuneUniversal",
      description:
        "Open D tuning guide with string notes, practical uses, common genres and a free online tuner to tune each string quickly."
    }
  },
  es: {
    "common-guitar-tunings": {
      title: "Afinaciones de guitarra mas usadas | Standard, Drop D y Open G | TuneUniversal",
      description:
        "Consulta las afinaciones de guitarra mas usadas, cuando utilizarlas y abre el afinador online para probar cada una."
    },
    "how-to-tune-12-string-guitar": {
      title: "Como afinar guitarra de 12 cuerdas online | Guia gratis | TuneUniversal",
      description:
        "Aprende a afinar guitarra de 12 cuerdas online con notas de referencia, consejos para pares de cuerdas y afinador gratis."
    },
    "how-to-tune-7-string-guitar": {
      title: "Como afinar guitarra de 7 cuerdas online | Guia gratis | TuneUniversal",
      description:
        "Guia rapida para afinar guitarra de 7 cuerdas online con microfono, cuerda grave Si y afinador gratis en el navegador."
    },
    "how-to-tune-8-string-guitar": {
      title: "Como afinar guitarra de 8 cuerdas online | Guia gratis | TuneUniversal",
      description:
        "Afina guitarra de 8 cuerdas online con ayuda de microfono, notas de referencia y soporte para afinaciones extendidas."
    },
    "how-to-tune-bass": {
      title: "Como afinar bajo online | Guia para 4 y 5 cuerdas | TuneUniversal",
      description:
        "Aprende a afinar bajo online con microfono, notas estandar por cuerda y acceso rapido al afinador gratis."
    },
    "standard-bass-tuning": {
      title: "Afinacion estandar de bajo | Notas y afinador online | TuneUniversal",
      description:
        "Consulta la afinacion estandar del bajo, las notas por cuerda, errores comunes y abre el afinador online gratis."
    }
  },
  ru: {
    "drop-c-sharp-tuning": {
      title: "Руководство по строю Drop C# | Онлайн тюнер | TuneUniversal",
      description:
        "Изучите строй Drop C# для гитары, ноты по струнам, типичные применения и откройте онлайн-тюнер прямо из руководства."
    }
  }
};

export function buildAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  const cleanPath = path ? `/${path.replace(/^\//, "")}` : "";
  return {
    canonical: `/${locale}${cleanPath}`,
    languages: {
      ...Object.fromEntries(locales.map((item) => [item, `/${item}${cleanPath}`])),
      "x-default": `/en${cleanPath}`
    }
  };
}

export function buildHomeMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const contentLocale = getContentLocale(locale);
  const override = homeMetadataOverrides[locale];
  const title = override?.title ?? dictionary.meta.title;
  const description = override?.description ?? dictionary.meta.description;
  return {
    title,
    description,
    keywords: homeKeywords[contentLocale],
    alternates: buildAlternates(locale),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function buildToolMetadata(locale: Locale, tool: ToolSlug, dictionary: Dictionary): Metadata {
  const contentLocale = getContentLocale(locale);
  const content = dictionary.tools[tool];
  const override = toolMetadataOverrides[locale]?.[tool];
  const keywords = toolKeywords[locale][tool] ?? [content.title, content.description, ...homeKeywords[contentLocale]];
  const title = override?.title ?? `${content.title} | TuneUniversal`;
  const description = override?.description ?? content.description;
  return {
    title,
    description,
    keywords,
    alternates: buildAlternates(locale, `tools/${tool}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/tools/${tool}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function buildInstrumentTunerMetadata(locale: Locale, slug: string, content: InstrumentTunerContent): Metadata {
  const contentLocale = getContentLocale(locale);
  const override = priorityInstrumentMetadataOverrides[locale]?.[slug] ?? instrumentMetadataOverrides[locale]?.[slug];
  const title = override?.title ?? `${content.title} | TuneUniversal`;
  const description = override?.description ?? content.description;
  return {
    title,
    description,
    keywords: [...content.keywords, ...homeKeywords[contentLocale]],
    alternates: buildAlternates(locale, `tools/${slug}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/tools/${slug}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function buildStaticPageMetadata(
  locale: Locale,
  page: StaticPageSlug,
  content: { description: string; title: string; seoDescription?: string; seoTitle?: string }
): Metadata {
  const title = content.seoTitle ?? `${content.title} | TuneUniversal`;
  const description = content.seoDescription ?? content.description;
  return {
    title,
    description,
    alternates: buildAlternates(locale, page),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/${page}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function buildGuideIndexMetadata(locale: Locale): Metadata {
  const contentLocale = getContentLocale(locale);
  const content = guideIndexContent[contentLocale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...homeKeywords[contentLocale], "music guides", "tuning guide", "metronome guide", "BPM guide"],
    alternates: buildAlternates(locale, "guides"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/guides`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    },
    twitter: { card: "summary_large_image", title: `${content.title} | TuneUniversal`, description: content.description }
  };
}

export function buildToolsIndexMetadata(locale: Locale, dictionary: Dictionary, path = "tools"): Metadata {
  const contentLocale = getContentLocale(locale);
  const content = toolsHubContent[locale];
  const cleanPath = path.replace(/^\/+/, "");
  const absoluteUrl = cleanPath ? `${siteUrl}/${locale}/${cleanPath}` : `${siteUrl}/${locale}`;
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[contentLocale], "universal tuner", "online music tools"],
    alternates: buildAlternates(locale, cleanPath),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: absoluteUrl,
      siteName: "TuneUniversal",
      type: "website",
      locale
    },
    twitter: { card: "summary_large_image", title: `${content.title} | TuneUniversal`, description: content.description }
  };
}

export function buildTuningHubMetadata(locale: Locale): Metadata {
  const contentLocale = getContentLocale(locale);
  const content = tuningHubContent[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[contentLocale], "alternate tunings", "guitar tuning", "Drop D", "Open G"],
    alternates: buildAlternates(locale, "tunings"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/tunings`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    },
    twitter: { card: "summary_large_image", title: `${content.title} | TuneUniversal`, description: content.description }
  };
}

export function buildGuideMetadata(locale: Locale, guide: GuideSlug, content: GuideContent): Metadata {
  const contentLocale = getContentLocale(locale);
  const relatedToolKeywords = toolKeywords[locale][content.tool] ?? [];
  const override = priorityGuideMetadataOverrides[locale]?.[guide] ?? guideMetadataOverrides[locale]?.[guide];
  const title = override?.title ?? `${content.title} | TuneUniversal`;
  const description = override?.description ?? content.description;
  return {
    title,
    description,
    keywords: [...content.keywords, ...relatedToolKeywords, ...homeKeywords[contentLocale]],
    alternates: buildAlternates(locale, `guides/${guide}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/guides/${guide}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function buildSongsIndexMetadata(locale: Locale): Metadata {
  const contentLocale = getContentLocale(locale);
  const content = songsUi[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [
      ...homeKeywords[contentLocale],
      "public domain sheet music",
      "free sheet music",
      "easy sheet music for children",
      "children songs notes",
      "spartiti pubblico dominio",
      "spartiti facili per bambini",
      "canzoni bambini note facili",
      "accordi canzoni facili",
      "music practice"
    ],
    alternates: buildAlternates(locale, "songs"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/songs`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    },
    twitter: { card: "summary_large_image", title: `${content.title} | TuneUniversal`, description: content.description }
  };
}

export function buildSongMetadata(locale: Locale, song: PublicDomainSong): Metadata {
  const contentLocale = getContentLocale(locale);
  const content = songsUi[locale];
  const title = `${song.title} chords and simplified sheet music | TuneUniversal`;
  const description = `${song.title}: ${song.key}, ${song.meter}, ${song.bpm} BPM. ${content.description}`;
  return {
    title,
    description,
    keywords: [
      song.title,
      `${song.title} chords`,
      `${song.title} sheet music`,
      `${song.title} spartito`,
      `${song.title} accordi`,
      `${song.title} chord diagrams`,
      `${song.title} come fare accordi`,
      "public domain music",
      "free music sheet",
      "guitar chord diagrams",
      "diagrammi accordi chitarra",
      ...(song.audience === "children"
        ? ["easy sheet music for children", "spartiti facili per bambini", "canzoni bambini note facili"]
        : []),
      ...homeKeywords[contentLocale]
    ],
    alternates: buildAlternates(locale, `songs/${song.slug}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/songs/${song.slug}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function allLocalizedUrls() {
  const allToolPaths = Array.from(new Set([...toolSlugs, ...instrumentTunerSlugs]));
  return locales.flatMap((locale) => [
    `/${locale}`,
    `/${locale}/tools`,
    ...allToolPaths.map((tool) => `/${locale}/tools/${tool}`),
    `/${locale}/tunings`,
    `/${locale}/guides`,
    ...guideSlugs.map((guide) => `/${locale}/guides/${guide}`),
    `/${locale}/songs`,
    ...publicDomainSongSlugs.map((song) => `/${locale}/songs/${song}`),
    ...staticPageSlugs.map((page) => `/${locale}/${page}`)
  ]);
}

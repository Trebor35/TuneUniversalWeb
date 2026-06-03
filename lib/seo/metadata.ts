import type { Metadata } from "next";
import { instrumentTunerSlugs, type InstrumentTunerContent } from "@/lib/content/instrumentTuners";
import { locales, type Locale } from "@/lib/i18n/locales";
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  ru: {
    "chord-transposer": {
      title: "Chord transposer online | Change key by semitones | TuneUniversal",
      description:
        "Transpose chords online by semitones, keep slash chords intact, choose sharps or flats and copy the result instantly."
    },
    "guitar-tuner": {
      title: "Online guitar tuner | Free chromatic tuner with microphone | TuneUniversal",
      description:
        "Tune guitar online with microphone pitch detection, cents display, note recognition and support for standard and alternate tunings."
    },
    metronome: {
      title: "Online metronome | Free BPM, subdivisions and practice cycle | TuneUniversal",
      description:
        "Practice with a free online metronome featuring BPM control, accents, time signatures, subdivisions, Tap Tempo and speed cycles."
    },
    "tap-bpm": {
      title: "Tap BPM online | Find song tempo fast | TuneUniversal",
      description:
        "Tap along to music, calculate the average BPM in seconds, copy the tempo and move straight into metronome practice."
    }
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
    }
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
      title: "12 string guitar tuner online | TuneUniversal",
      description:
        "Tune a 12 string guitar online with microphone help, reference notes and a stable browser tuner for octave pairs."
    },
    "cello-tuner": {
      title: "Online cello tuner | Free | TuneUniversal",
      description:
        "Free online cello tuner with microphone support, reference notes and a quick browser workflow for daily tuning."
    },
    "cimbalom-tuner": {
      title: "Online cimbalom tuner | TuneUniversal",
      description:
        "Tune cimbalom online with microphone input, reference notes and a free browser tuner from TuneUniversal."
    },
    "guitar-tuner": {
      title: "Online guitar tuner | Free chromatic tuner | TuneUniversal",
      description:
        "Free online guitar tuner with microphone pitch detection, cents display and support for standard and alternate tunings."
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
      title: "Drop C sharp tuning guide | Online tuner | TuneUniversal",
      description:
        "Learn Drop C sharp guitar tuning, reference notes, common use cases and open the online tuner from the guide."
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
  const override = homeMetadataOverrides[locale];
  const title = override?.title ?? dictionary.meta.title;
  const description = override?.description ?? dictionary.meta.description;
  return {
    title,
    description,
    keywords: homeKeywords[locale],
    alternates: buildAlternates(locale),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildToolMetadata(locale: Locale, tool: ToolSlug, dictionary: Dictionary): Metadata {
  const content = dictionary.tools[tool];
  const override = toolMetadataOverrides[locale]?.[tool];
  const keywords = toolKeywords[locale][tool] ?? [content.title, content.description, ...homeKeywords[locale]];
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
    }
  };
}

export function buildInstrumentTunerMetadata(locale: Locale, slug: string, content: InstrumentTunerContent): Metadata {
  const override = instrumentMetadataOverrides[locale]?.[slug];
  const title = override?.title ?? `${content.title} | TuneUniversal`;
  const description = override?.description ?? content.description;
  return {
    title,
    description,
    keywords: [...content.keywords, ...homeKeywords[locale]],
    alternates: buildAlternates(locale, `tools/${slug}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/tools/${slug}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function buildStaticPageMetadata(
  locale: Locale,
  page: StaticPageSlug,
  content: { description: string; title: string }
): Metadata {
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    alternates: buildAlternates(locale, page),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/${page}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function buildGuideIndexMetadata(locale: Locale): Metadata {
  const content = guideIndexContent[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...homeKeywords[locale], "music guides", "tuning guide", "metronome guide", "BPM guide"],
    alternates: buildAlternates(locale, "guides"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/guides`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildToolsIndexMetadata(locale: Locale, dictionary: Dictionary, path = "tools"): Metadata {
  const content = toolsHubContent[locale];
  const cleanPath = path.replace(/^\/+/, "");
  const absoluteUrl = cleanPath ? `${siteUrl}/${locale}/${cleanPath}` : `${siteUrl}/${locale}`;
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[locale], "universal tuner", "online music tools"],
    alternates: buildAlternates(locale, cleanPath),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: absoluteUrl,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildTuningHubMetadata(locale: Locale): Metadata {
  const content = tuningHubContent[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[locale], "alternate tunings", "guitar tuning", "Drop D", "Open G"],
    alternates: buildAlternates(locale, "tunings"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/tunings`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildGuideMetadata(locale: Locale, guide: GuideSlug, content: GuideContent): Metadata {
  const relatedToolKeywords = toolKeywords[locale][content.tool] ?? [];
  const override = guideMetadataOverrides[locale]?.[guide];
  const title = override?.title ?? `${content.title} | TuneUniversal`;
  const description = override?.description ?? content.description;
  return {
    title,
    description,
    keywords: [...content.keywords, ...relatedToolKeywords, ...homeKeywords[locale]],
    alternates: buildAlternates(locale, `guides/${guide}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/guides/${guide}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function buildSongsIndexMetadata(locale: Locale): Metadata {
  const content = songsUi[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [
      ...homeKeywords[locale],
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
    }
  };
}

export function buildSongMetadata(locale: Locale, song: PublicDomainSong): Metadata {
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
      ...homeKeywords[locale]
    ],
    alternates: buildAlternates(locale, `songs/${song.slug}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/songs/${song.slug}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
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

# TuneUniversal — Registro lavori

Progetto: **tuneuniversal.com**
Stack: Next.js 15, React 19, TypeScript, Tailwind CSS, Vercel
Branch attivo: `main`
Ultimo aggiornamento: 2026-06-12 (sera)

---

## Regole critiche

- **NON fare push su git o Vercel** fino a conferma esplicita dell'utente ("il sito è pronto")
- TypeScript check: `& "C:\Users\Trebor\Desktop\CODEX\tools\node-v24.14.1-win-x64\node.exe" ".\node_modules\typescript\bin\tsc" --noEmit`
- node non è in PATH — usare il percorso assoluto sopra
- JSON cinese (zh.json): usare `「」` per virgolette interne alle stringhe (le `"` dritte rompono il JSON)

---

## Architettura i18n

| Concetto | Dettaglio |
|---|---|
| Locales base | `it, en, fr, de, es, pt, zh, ru, ja, ko, ar` (11) |
| Locales estesi | `nl, pl, tr, cs, sv, pt-BR, hi, no` (8) |
| Totale | 19 locali |
| Mapping | `getContentLocale(locale)` → `BaseLocale` (es. nl→en, pt-BR→pt) |
| Dizionari base | `dictionaries/*.json` — 8 tool, ognuno con 6 `howItWorks` + 5-6 `faq` (+ 4 PAA-FAQ per en/it/de/es/fr) |
| Override estesi | `lib/i18n/dictionaries.ts` → `localeOverrides` — partial per locale esteso |
| Guide | `lib/content/guides.ts` — if/else per locale in ogni funzione |
| Pagine statiche | `lib/content/staticPages.ts` — già corretto, nessuna modifica necessaria |

---

## Stato completato ✅

### Dizionari base (`dictionaries/*.json`)
Tutti e 6 espansi da stub ~217 righe a ~350 righe con contenuto completo:
- ✅ `dictionaries/pt.json`
- ✅ `dictionaries/zh.json` (virgolette interne → `「」`)
- ✅ `dictionaries/ru.json`
- ✅ `dictionaries/ja.json`
- ✅ `dictionaries/ko.json`
- ✅ `dictionaries/ar.json`

Ogni file contiene 8 tool, ciascuno con:
- `howItWorks: [6 step]`
- `faq: [{ question, answer } × 5-6]`

### Guide (`lib/content/guides.ts`)
Aggiunti branch `pt/zh/ru/ja/ko/ar` in tutte le funzioni principali:
- ✅ `queryDrivenUtilityGuides` — chromatic, mic, metronome, sound, pitch (why/tip)
- ✅ `utilityBpm` — steps, sections, faq
- ✅ `utilityMetronome` — steps, sections, faq
- ✅ `genericInstrumentFaq`
- ✅ `genericTuningFaq`
- ✅ `genericMistakes`
- ✅ `relatedToolsForGuide`
- ✅ `tuningUseText` / `genreText` (rinominato `cl2` per evitare shadowing)

Pattern ternary aggiornato:
```ts
const shared = contentLocale === "it" ? italianShared
  : contentLocale === "fr" ? frenchShared
  : contentLocale === "de" ? germanShared
  : contentLocale === "es" ? spanishShared
  : contentLocale === "pt" ? portugueseShared
  : contentLocale === "zh" ? chineseShared
  : contentLocale === "ru" ? russianShared
  : contentLocale === "ja" ? japaneseShared
  : contentLocale === "ko" ? koreanShared
  : contentLocale === "ar" ? arabicShared
  : englishShared;
```

### Override estesi (`lib/i18n/dictionaries.ts`)
Tutti i locale estesi espansi con `howItWorks` (6 step) + `faq` (5 Q&A) per tutti 8 i tool:
- ✅ `nl` (olandese)
- ✅ `pl` (polacco)
- ✅ `tr` (turco)
- ✅ `cs` (ceco)
- ✅ `sv` (svedese)
- ✅ `hi` (hindi)
- ✅ `no` (norvegese)
- `pt-BR` — eredita da `pt` via `getContentLocale`, non necessita override contenuto

### FAQ espanse — PAA targeting (Opzione A)
✅ Aggiunti 4 nuove FAQ PAA-targeted per ciascuno degli 8 tool in en/it/de/es/fr (160 FAQ totali):
- ✅ `guitar-tuner` — tuning order, cents, phone use, how often
- ✅ `bass-tuner` — standard tuning, in-tune detection, fretless, intonation up neck
- ✅ `ukulele-tuner` — tenor vs soprano, high-G vs low-G, concert uke, tune up/down
- ✅ `metronome` — 120 BPM, scales, subdivision, 6/8 vs 3/4
- ✅ `tap-bpm` — BPM by genre, tempo vs BPM, mobile, accuracy
- ✅ `chord-transposer` — capo on fret 2, easiest key, transpose down, ukulele
- ✅ `sound-level-meter` — normal conversation dB, live concert dB, peak vs average, reduce noise
- ✅ `pitch-generator` — middle C frequency, tune without mic, hearing range, check intonation
- Fix bonus: de.json aveva virgolette tipografiche U+201C/U+201D nei delimitatori JSON → sostituito con U+0022 via PowerShell

### TypeScript
- ✅ Ultimo check: exit 0, nessun errore

---

## Sessione 2026-06-13 — Fix leak inglese sui locale estesi

**Root cause:** ogni mappa `Record<BaseLocale, T>` risolta via `getContentLocale(locale)` fa ricadere i 7 locale estesi (`hi, nl, pl, tr, cs, sv, no` → tutti `en`; `pt-BR` → `pt`) sull'inglese. Le intestazioni andavano bene perché usano `withLocaleFallbacks` con override espliciti, ma i **contenuti** no.

**Fix (pattern):** aggiunta mappa `extended…: Partial<Record<Locale, T>>` consultata prima del fallback base. Applicato a:
- ✅ `lib/content/seoEnhancements.ts` → `extendedToolSeoEnhancements` (7 locale × 8 tool: heroTitle, heroDescription, highlights, quickAnswers, sections, faqs)
- ✅ `components/tools/GuitarTuner.tsx` → `extendedTunerUiText` (copre anche bass/ukulele)
- ✅ `components/tools/Metronome.tsx` → `extendedMetronomeUiText`
- ✅ `components/tools/TapBpm.tsx` → `extendedLabels`
- ✅ `components/tools/ChordTransposer.tsx` → `extendedLabels`
- ✅ `components/tools/SoundLevelMeter.tsx` → `extendedCopy` + `extendedEnvironmentRows` + `extendedUiLabels`
- ✅ `components/tools/PitchGenerator.tsx` → `extendedLabels`
- TypeScript: exit 0

**Bug trovato (NON ancora risolto):** `components/tools/ChordTransposer.tsx` ha **mojibake** (UTF-8 corrotto) nei valori dei locale base `ar, ja, ko, ru, zh` del const `labels`. Da risistemare a parte.

---

## Commit history rilevante

```
34cbef5 Add multilingual cookie consent banner with custom preferences
5bb6aae Add legal pages, contact page and ads.txt
bd33fee Add professional about page with SEO content
1f03bb2 Localize core UI for new fallback locales
26170ff Add fallback locales for new language expansion
```

Nota: **nessun commit fatto** per il lavoro i18n di questa sessione (nl/pl/tr/cs/sv/hi/no override + pt/zh/ru/ja/ko/ar dizionari + guides.ts). Tutto è in working tree non committato.

---

## Prossimi lavori da fare

## Sessione 2026-06-13 - Test manuale UI 19 lingue

Test eseguito nel browser locale sulle 19 lingue:
- Accordatore chitarra verificato in tutti i locale: route funzionanti, H1 e controlli principali localizzati, nessun mojibake o errore runtime rilevato.
- Metronomo, Tap BPM, traspositore, fonometro e generatore di toni: route verificate con risposta HTTP 200 in tutti i locale.
- Arabo verificato anche su viewport mobile 390x844: RTL corretto e nessun overflow orizzontale.
- TypeScript: exit 0 dopo le correzioni.

Correzioni applicate durante il test:
- `lang` e `dir` ora sono impostati sull'elemento `<html>` tramite il locale passato dal middleware.
- Header desktop e menu mobile tradotti per `nl, pl, tr, cs, sv, pt-BR, hi, no`.

Problemi ancora aperti rilevati dal test:
- I nomi dei 23 strumenti nel selettore dell'accordatore ricadono in inglese nei locale estesi.
- Le pagine canzoni dei locale estesi mostrano ancora `How to play the chords`.
- I link legali del footer (`About Us`, `Contact`, `Privacy Policy`, ecc.) ricadono in inglese nei locale estesi.
- Parte del testo descrittivo delle canzoni nei locale estesi eredita da inglese (`nl/pl/tr/cs/sv/hi/no`) o portoghese (`pt-BR`).

### SEO / Analytics (emerso da report GA4 14 mag – 10 giu 2026)

| Priorità | Lavoro | Note |
|---|---|---|
| ✅ | Filtro bot Council Bluffs in GA4 | Istruzione manuale data all'utente: Amministrazione → Filtri dati → Escludi città "Council Bluffs" |
| ✅ | "Canonicalizzare" guitar tuner EN | Diagnosi: NON è un problema di URL duplicati. Le 3 title in GA4 sono la stessa URL con titolo cambiato nel tempo + locale ru con titolo inglese. Nessun intervento canonical necessario. |
| ✅ | Titoli RU — tutti corretti | `instrumentMetadataOverrides.ru`, `priorityInstrumentMetadataOverrides.ru`, `priorityGuideMetadataOverrides.ru`, `guideMetadataOverrides.ru` — tutti da inglese a russo. |
| ✅ | Bounce rate guitar tuner EN 67-74% | Aggiunto blocco "next steps" (3 tool + All guides) immediatamente dopo il tool widget in `app/[locale]/tools/[tool]/page.tsx` — visibile su tutti i device |
| ✅ | SEO per tool non-guitar | `lib/seo/metadata.ts`: titoli+desc per bass/ukulele/sound-level/pitch in tutti 11 locale base. `lib/content/seoEnhancements.ts`: `extraToolEnhancements` con highlights/quickAnswers/sections/faqs per tutti 11 locale, `getToolSeoEnhancement` aggiornata con 4 nuovi branch. TypeScript check: exit 0. |
| ✅ | Espandere tuner strumenti etnici | `lib/seo/metadata.ts` → `priorityInstrumentMetadataOverrides`: aggiunti sitar-tuner, erhu-tuner, santur-tuner in tutti 11 locale base (33 nuove voci). Koto era già coperto. TypeScript: exit 0. |
| ✅ | Twitter Card | Aggiunta a tutte le 10 funzioni `build*` in `lib/seo/metadata.ts` + root `app/layout.tsx` con handle `@TuneUniversal`. |
| ✅ | Schema.org `offers` | Aggiunto `{ "@type": "Offer", price: "0", priceCurrency: "USD" }` a `toolSchema` e `instrumentTunerSchema` in `lib/seo/schema.ts` → badge "Free" Google. |
| ✅ | WebSite + Organization su home page | `app/[locale]/tools/page.tsx`: aggiunti `<JsonLd data={websiteSchema} />` e `<JsonLd data={organizationSchema} />`. |
| ✅ | Metadata locale estesi (nl/pl/tr/cs/sv/hi/no/pt-BR) | `lib/seo/metadata.ts` → `toolMetadataOverrides`: aggiunti 8 blocchi (64 nuove voci) con titoli ottimizzati in lingua nativa per tutti 8 tool. TypeScript: exit 0. |
| ✅ | Keywords locale estesi | `lib/seo/keywords.ts` → `extendedToolKeywords`: aggiunte keyword in lingua nativa per nl/pl/tr/cs/sv/pt-BR/hi/no (56 array). `toolKeywords` aggiornato per usarle. TypeScript: exit 0. |
| ✅ | OG Image | Creata `app/opengraph-image.tsx` con Next.js `ImageResponse` edge runtime: design 1200×630 con tema musicale viola/indigo, tool pills, dominio. TypeScript: exit 0. |
| ✅ | Mercato indiano (hi) | `toolsHub.ts` + `tuningHub.ts`: aggiunto contenuto Hindi via `withLocaleFallbacks` overrides. `priorityInstrumentMetadataOverrides.hi`: 11 strumenti in Hindi (sitar, santur, violin, cello, ecc.). UI label Hindi in `tools/[tool]/page.tsx`. TypeScript: exit 0. |
| ✅ | pt-BR approfondito | `toolsHub.ts` + `tuningHub.ts`: contenuto brasiliano-specifico (violão, metrônomo, ecc.). UI label pt-BR in page.tsx. TypeScript: exit 0. |
| ✅ | UI label extended locales | `tools/[tool]/page.tsx`: aggiunti label localizzati per nl/pl/tr/sv/no (tutte le sezioni explore/guide/tuningHub). |
| ✅ | Contenuto hub estesi completo | `toolsHub.ts` + `tuningHub.ts`: aggiunti blocchi nl/pl/tr/cs/sv/no (hi/pt-BR già fatti). `contextualSectionLabels` + `toolIntentLabels`: aggiunti override per hi/pt-BR/nl/pl/tr/cs/sv/no — tutti e 8 i locale estesi ora hanno contenuto nativo in tutte le sezioni. TypeScript: exit 0. |
| ✅ | Keywords ottimizzate (tutti i locali) | `lib/seo/keywords.ts` — riscrittura completa: (1) `sound-level-meter` per ar/ja/ko/ru/zh da inglese a lingua nativa; (2) `universalInstrumentKeywords` esteso a tutti 19 locali con nomi strumenti nativi; (3) `guitar-tuner` + altri tool espansi con long-tail (+3-4 per locale): "chromatic", "acoustic", "no download/app", "for beginners"; (4) `pitchGeneratorKeywords` migliorati; (5) extendedToolKeywords guitar-tuner usa ora keyword strumenti in lingua nativa. TypeScript: exit 0. |
| ✅ | **Opzione B** — `datePublished`/`dateModified` in tutti gli oggetti Schema.org | Aggiunto a toolSchema, instrumentTunerSchema, guideSchema, staticPageSchema, websiteSchema, organizationSchema. DATE_PUBLISHED="2025-01-15", DATE_MODIFIED="2026-06-12". TypeScript: exit 0. |
| ✅ | **Opzione C** — Sitemap priority: guitar-tuner en/it/de/es/fr → 0.9 | `app/sitemap.ts`: ternary priority 0.9 per guitar-tuner + locale en/it/de/es/fr, 0.8 per altri tool, 1 per home. TypeScript: exit 0. |
| ✅ | **Opzione D** — già presente | `operatingSystem: "Web"` e `applicationCategory: "MusicApplication"` erano già in schema.ts — nessuna modifica necessaria. |
| 🟡 Manuale | Backlink e presenza forum | Bozze pronte in `BOZZE_FORUM.md`: post + template risposta per r/Guitar, r/Ukulele, r/musictheory, r/WeAreTheMusicMakers, r/Sitar, r/erhu, forum IT. Strategia "risposta a thread esistenti" + directory (AlternativeTo, Product Hunt, G2). **Da postare manualmente.** |

### Tecnici

| Priorità | Lavoro | Note |
|---|---|---|
| 🔴 Alta | **Push su git + deploy Vercel** | Solo quando utente conferma "il sito è pronto" |
| 🟡 Media | Verificare `pt-BR` in produzione | Eredita da `pt` — testare che le pagine rendano correttamente |
| 🟡 Media | Test manuale UI tutte le 19 lingue | Verificare che howItWorks e FAQ appaiano in tutte le lingue |

---

## File chiave

| File | Ruolo |
|---|---|
| `dictionaries/[locale].json` | Dizionari per 11 locale base |
| `lib/i18n/dictionaries.ts` | Override per 8 locale estesi + `applyDictionaryOverride` |
| `lib/i18n/locales.ts` | Lista locale, mapping, `getContentLocale()` |
| `lib/content/guides.ts` | Contenuto guide per tutte le lingue |
| `lib/content/staticPages.ts` | Pagine statiche (privacy, terms, about, contact) |
| `app/[locale]/[page]/page.tsx` | Route dinamica per tool e guide |
| `LAVORI.md` | Questo file |

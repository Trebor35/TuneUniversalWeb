# TuneUniversal

TuneUniversal is a multilingual Next.js portal for free music microtools: tuners, metronome, tap BPM and chord transposition.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Localized JSON dictionaries
- SEO metadata, hreflang alternates, sitemap and robots
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
npm run build
```

Open `http://localhost:3000/en`.

## Routes

- `/` redirects to `/en`
- `/{locale}` homepage
- `/{locale}/tools/{tool}` tool pages

Supported locales: `it`, `en`, `fr`, `de`, `es`, `pt`, `zh`, `ru`, `ja`, `ko`, `ar`.

Initial tool slugs:

- `guitar-tuner`
- `bass-tuner`
- `ukulele-tuner`
- `metronome`
- `tap-bpm`
- `chord-transposer`

## Notes

The tuner uses the Web Audio API in the browser. Microphone audio is not uploaded. Pitch detection is intentionally lightweight for the MVP and should be improved before professional use.

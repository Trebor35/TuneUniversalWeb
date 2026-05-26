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

## Google AdSense

The app is ready for AdSense, but ads only render when the required environment variables are configured in Vercel:

```bash
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-0000000000000000
GOOGLE_ADSENSE_PUBLISHER_ID=pub-0000000000000000
NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD=0000000000
NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_BANNER=0000000000
NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE=0000000000
```

`/ads.txt` is generated from `GOOGLE_ADSENSE_PUBLISHER_ID`. After changing these values, redeploy the site from Vercel.

## Google Analytics 4

Analytics is loaded only when a GA4 measurement ID is configured:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

In Google Analytics, create a Web data stream for `https://www.tuneuniversal.com`, copy the Measurement ID that starts with `G-`, add it to Vercel environment variables, then redeploy.

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

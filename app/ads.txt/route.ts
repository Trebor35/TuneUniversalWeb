const publisherId =
  process.env.GOOGLE_ADSENSE_PUBLISHER_ID ??
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT?.replace(/^ca-/, "") ??
  "pub-4436218293452548";

export function GET() {
  if (!publisherId) {
    return new Response("Google AdSense publisher ID is not configured.\n", {
      headers: { "content-type": "text/plain; charset=utf-8" },
      status: 404
    });
  }

  return new Response(`google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`, {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "text/plain; charset=utf-8"
    }
  });
}

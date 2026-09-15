import type { NextConfig } from "next";

// Next streams metadata (title, canonical, hreflang) into the body for user agents it
// assumes will render JavaScript. Its built-in list matches "Google-*" and "*-Google"
// but not plain "Googlebot", so Googlebot received pages whose <head> held no title,
// canonical or hreflang. Listing the search crawlers here makes Next block the stream
// and emit metadata inside <head> for them.
const htmlLimitedBots =
  /Googlebot|Google-[\w-]+|[\w-]+-Google|Chrome-Lighthouse|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|applebot|Yeti|googleweblight|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|redditbot|tumblr|vkShare|bitlybot|quora link preview|ia_archiver/i;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  htmlLimitedBots
};

export default nextConfig;

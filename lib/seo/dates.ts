/**
 * Single source of truth for the dates the site reports to search engines.
 *
 * `sitemap.ts` used `new Date()`, so every deploy stamped all 2318 URLs with the build
 * timestamp, down to the millisecond. Google treats a lastmod that moves on every crawl
 * as noise and stops using it to schedule recrawls. Bump this constant when the content
 * actually changes.
 */
export const CONTENT_PUBLISHED = "2025-01-15";
export const CONTENT_LAST_MODIFIED = "2026-06-12";

export const contentLastModifiedDate = new Date(`${CONTENT_LAST_MODIFIED}T00:00:00.000Z`);

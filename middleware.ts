import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";

// 308 keeps the method and, unlike 307, tells search engines the move is permanent so
// link signals are consolidated onto the target.
const PERMANENT_REDIRECT = 308;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  // The locale root is the site's home: send "/" there, not to a deep tool page.
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), PERMANENT_REDIRECT);
  }

  if (pathname.startsWith("/_next") || pathname.includes(".") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (!isLocale(first)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url), PERMANENT_REDIRECT);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tune-locale", first);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.svg).*)"]
};

import { NextRequest, NextResponse } from "next/server";

const locales = ["pt", "en", "fr", "de"] as const;
const defaultLocale = "pt";

function pickLocale(acceptLanguage: string): (typeof locales)[number] {
  const preferred = acceptLanguage
    .split(",")
    .map((tag) => tag.split(";")[0]?.trim().toLowerCase().slice(0, 2))
    .filter(Boolean);

  for (const tag of preferred) {
    const match = locales.find((locale) => locale === tag);
    if (match) return match;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const preferredLocale = pickLocale(request.headers.get("accept-language") ?? "");

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml).*)"],
};

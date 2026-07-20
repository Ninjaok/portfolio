import { NextRequest, NextResponse } from "next/server";

const locales = [
  "pt",
  "en",
  "fr",
  "de",
  "es",
  "it",
  "ru",
  "tr",
  "uk",
] as const;
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
  /* Os ficheiros de metadata do App Router (app/icon.svg, app/apple-icon.png)
     são servidos na RAIZ, sem prefixo de locale. Sem os excluir aqui, um
     pedido a /icon.svg era redirecionado para /pt/icon.svg — que não existe,
     dando 404, e por isso o favicon novo nunca chegava a aparecer. O
     favicon.ico já estava excluído; faltavam os restantes. */
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|images|logo|robots.txt|sitemap.xml).*)",
  ],
};

import "../globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import Sidebar from "@/components/Sidebar";
import ScrollProgress from "@/components/ScrollProgress";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LOCALES, localeToLang, type LocaleCode } from "@/lib/translations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Identidade do modelo (modelo/README.md): Playfair Display 700 nos títulos.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

// Used by the Sidebar component for its body copy.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const locales = LOCALES.map((l) => l.code);

const DESCRIPTIONS: Record<LocaleCode, string> = {
  pt: "Portfolio de Luan Ribeiro — Engenheiro de Software, Data Science & IA. Projetos em Python, Java, C++, ROS 2 e Next.js.",
  en: "Luan Ribeiro's portfolio — Software Engineer, Data Science & AI. Projects in Python, Java, C++, ROS 2 and Next.js.",
  fr: "Portfolio de Luan Ribeiro — Ingénieur Logiciel, Data Science & IA. Projets en Python, Java, C++, ROS 2 et Next.js.",
  de: "Portfolio von Luan Ribeiro — Software-Ingenieur, Data Science & KI. Projekte in Python, Java, C++, ROS 2 und Next.js.",
};

const OG_LOCALES: Record<LocaleCode, string> = {
  pt: "pt_PT",
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = "Luan Ribeiro — Software Engineer";
  const description = DESCRIPTIONS[locale as LocaleCode] ?? DESCRIPTIONS.pt;

  return {
    title,
    description,
    metadataBase: new URL("https://www.ninja0k.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description,
      url: `https://www.ninja0k.com/${locale}`,
      siteName: "Luan Ribeiro",
      locale: OG_LOCALES[locale as LocaleCode] ?? OG_LOCALES.pt,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as LocaleCode)) notFound();
  const lang = localeToLang(locale);

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: apply theme class before React hydrates. next/script with
            beforeInteractive is required here — a raw <script> tag gets
            reconciled by React on client-side locale switches (this layout is
            shared across all locale routes), which logs "Scripts inside React
            components are never executed" since React doesn't run script tags
            it re-renders. */}
        <Script
          id="anti-fouc"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        {/* JSON-LD structured data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luan Ribeiro",
              jobTitle: "Software Engineer",
              url: `https://www.ninja0k.com/${locale}`,
              sameAs: [
                "https://www.linkedin.com/in/luan-kacio/",
                "https://www.instagram.com/kacio_luan/",
                "https://github.com/Ninjaok",
              ],
              email: "luan.kaciosr@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lisboa",
                addressCountry: "PT",
              },
              knowsAbout: [
                "Data Science",
                "Artificial Intelligence",
                "Python",
                "Java",
                "C++",
                "Next.js",
                "ROS 2",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <ScrollProgress />
            <Sidebar lang={lang} currentLocale={locale} />
            <div className="mainContent">{children}</div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

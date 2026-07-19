"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useSidebarState } from "@/context/SidebarContext";
import { useTheme } from "@/context/ThemeContext";
import { translations, type Lang } from "@/lib/translations";
import styles from "./Sidebar.module.css";
import IconLink from "./IconLink";
import LanguageSwitcher from "./LanguageSwitcher";

/* Paleta própria da sidebar (ver modelo/TEMA.md): sempre oliva escura,
   independente do tema claro/escuro da página. Alpha 0.97: a cor lê-se como
   verde-escuro ESTÁTICO nos dois temas (a contribuição do fundo é ~3%,
   impercetível), mantendo só um resto do efeito fosco (blur no CSS). */
const SIDEBAR_COLORS = {
  bg: "rgba(43, 46, 31, 0.97)",
  name: "#f2f0e4",
  subtext: "#c3c6a9",
  info: "#d5d8bd",
  border: "#454a30",
  icon: "#e4e6d3",
};

export default function Sidebar({
  lang,
  currentLocale,
  accentColor = "#a8b57a",
}: {
  lang: Lang;
  currentLocale: string;
  /** Tweak: accent color used for the accent border/hover states. */
  accentColor?: string;
}) {
  const { state, setState } = useSidebarState();
  const t = translations[lang];
  // "Partilhar": troca a foto de perfil por um QR code para www.ninja0k.com,
  // nos estados expandido e about.
  const [showQr, setShowQr] = useState(false);

  // No desktop o modelo abre expandida; no mobile "expanded" é o menu
  // fullscreen, por isso o estado inicial (SSR) fica compacto e só
  // expandimos no cliente quando há espaço.
  useEffect(() => {
    if (window.innerWidth >= 860) {
      setState((prev) => (prev === "compact" ? "expanded" : prev));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const widthClass = state === "compact" ? styles.compact : styles.expanded;
  const isAbout = state === "about";
  const colors = SIDEBAR_COLORS;

  // No mobile o estado expandido/about é um menu fullscreen: fechar deve ir
  // direto para o topbar compacto (um toque), e os atalhos devem FECHAR o
  // menu antes de rolar — senão a página rola escondida atrás do menu.
  const isMobileViewport = () =>
    typeof window !== "undefined" && window.innerWidth < 860;

  const handleChevronClick = () => {
    if (state === "compact") setState("expanded");
    else if (isMobileViewport()) setState("compact");
    else if (state === "about") setState("expanded");
    else setState("compact");
  };

  const handleAboutClick = () => {
    setState(isMobileViewport() ? "compact" : "about");
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    setState(isMobileViewport() ? "compact" : "expanded");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const sidebarVars = {
    "--sb-bg": colors.bg,
    "--sb-name": colors.name,
    "--sb-subtext": colors.subtext,
    "--sb-info": colors.info,
    "--sb-border": colors.border,
    "--sb-icon": colors.icon,
    "--sb-accent": accentColor,
  } as CSSProperties;

  return (
    <aside className={`${styles.sidebar} ${widthClass}`} style={sidebarVars}>
      <button
        aria-label={state === "compact" ? "Expandir sidebar" : "Recolher sidebar"}
        onClick={handleChevronClick}
        className={`${styles.collapseBtn} ${state === "compact" ? styles.collapseBtnExpand : ""}`}>
        <ChevronLeftIcon />
      </button>

      {/* ---------- ESTADO COMPACTO ---------- */}
      {state === "compact" && (
        <div
          className={styles.compactInner}
          onClick={() => setState("expanded")}>
          <div className={styles.nameWrap}>
            <span className={styles.verticalName}>Luan Ribeiro</span>
          </div>

          <div className={styles.iconStack} onClick={(e) => e.stopPropagation()}>
            <div className={styles.desktopOnly}>
              <IconLink href="https://www.linkedin.com/in/luan-kacio/" label="LinkedIn">
                <LinkedInIcon />
              </IconLink>
              <IconLink href="https://www.instagram.com/kacio_luan/" label="Instagram">
                <InstagramIcon />
              </IconLink>
              <IconLink href="https://github.com/Ninjaok" label="GitHub">
                <GitHubIcon />
              </IconLink>
            </div>
            <LanguageSwitcher currentLocale={currentLocale} />
            <ThemeToggle />
            <button
              className={styles.mobileMenuBtn}
              onClick={(e) => {
                e.stopPropagation();
                setState("expanded");
              }}
              aria-label="Expandir menu">
              <MenuIcon />
            </button>
          </div>
        </div>
      )}

      {/* ---------- ESTADO EXPANDIDO / ABOUT ----------
          "about" é idêntico ao expandido: mesmo conteúdo, apenas oculta o
          botão "About me" (o chevron volta para "expanded", não "compact"). */}
      {(state === "expanded" || isAbout) && (
        <div className={styles.expandedWrapper}>
          <div className={styles.expandedContent}>
            <div className={styles.avatarFrame}>
              {showQr ? (
                /* "Partilhar" ativo: o QR substitui a foto no mesmo espaço */
                <div
                  className={styles.qrCard}
                  role="img"
                  aria-label="QR code — www.ninja0k.com">
                  <QrSvg />
                </div>
              ) : (
                <span className={styles.avatarMd}>
                  {/* Foto e descrição alternam no estado "about" (comportamento
                      do site original: profile_2 + aboutText na secção About) */}
                  <Image
                    src={isAbout ? "/images/profile_2.jpg" : "/images/profile.jpeg"}
                    alt="Luan Ribeiro"
                    fill
                    sizes="260px"
                    style={{ objectFit: "cover" }}
                  />
                </span>
              )}
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.name}>Luan Ribeiro</h2>
              <p className={styles.bio}>{isAbout ? t.aboutText : t.bio}</p>
            </div>

            <div className={styles.sidebarDetails}>
              <div className={styles.detailItem}>
                <LocationIcon />
                <span>Lisboa, PT</span>
              </div>
              <div className={styles.detailItem}>
                <MailIcon />
                <span>luan.kaciosr@gmail.com</span>
              </div>
            </div>

            {/* Sem estado "ativo" visual — apenas o efeito de hover. */}
            <nav className={styles.miniIndex} aria-label="Atalhos">
              <div className={styles.miniIndexRow}>
                <button
                  className={styles.miniIndexItem}
                  onClick={handleProjectsClick}>
                  {t.projectsNavLabel}
                </button>
                <button
                  className={styles.miniIndexItem}
                  onClick={handleAboutClick}>
                  {t.aboutMeBtn}
                </button>
              </div>
              <button
                className={styles.miniIndexItem}
                onClick={() => setShowQr((v) => !v)}
                aria-pressed={showQr}>
                {t.shareBtn}
              </button>
            </nav>
          </div>

          <div className={styles.iconRowBottom}>
            <IconLink href="https://www.linkedin.com/in/luan-kacio/" label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
            <IconLink href="https://www.instagram.com/kacio_luan/" label="Instagram">
              <InstagramIcon />
            </IconLink>
            <IconLink href="https://github.com/Ninjaok" label="GitHub">
              <GitHubIcon />
            </IconLink>
            <LanguageSwitcher currentLocale={currentLocale} />
            <ThemeToggle />
          </div>
        </div>
      )}
    </aside>
  );
}

/* ---------- Subcomponentes ---------- */

/* Toggle do tema claro/escuro da página: sol quando o tema claro está
   ativo, lua quando o escuro está ativo (ver modelo/TEMA.md). */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
      aria-label="Alternar tema claro/escuro"
      className={styles.themeBtn}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

/* QR de https://www.ninja0k.com, gerado offline (npx qrcode, ECC M,
   margem 2) e embutido como SVG estático — sem dependência de runtime.
   viewBox 29 = 25 módulos + 2 de zona de silêncio por lado. */
function QrSvg() {
  return (
    <svg
      viewBox="0 0 29 29"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false">
      <path
        stroke="currentColor"
        d="M2 2.5h7m7 0h1m3 0h7M2 3.5h1m5 0h1m3 0h1m4 0h2m1 0h1m5 0h1M2 4.5h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h1m2 0h1m1 0h3m1 0h1M2 5.5h1m1 0h3m1 0h1m1 0h4m1 0h3m2 0h1m1 0h3m1 0h1M2 6.5h1m1 0h3m1 0h1m1 0h1m3 0h2m2 0h1m1 0h1m1 0h3m1 0h1M2 7.5h1m5 0h1m1 0h6m1 0h1m2 0h1m5 0h1M2 8.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 9.5h1m5 0h1M2 10.5h1m1 0h5m2 0h1m1 0h3m4 0h5M3 11.5h2m4 0h1m2 0h1m1 0h2m2 0h2m1 0h1m3 0h1M2 12.5h1m1 0h2m2 0h2m1 0h2m2 0h3m1 0h5m1 0h2M3 13.5h3m3 0h3m1 0h1m4 0h2m1 0h1m4 0h1M2 14.5h2m2 0h1m1 0h1m2 0h1m2 0h3m2 0h4m1 0h3M2 15.5h2m1 0h1m1 0h1m1 0h4m5 0h2m1 0h1m1 0h1m1 0h1M2 16.5h1m5 0h2m2 0h4m1 0h7m1 0h2M2 17.5h1m3 0h2m1 0h1m2 0h2m2 0h2m1 0h1m1 0h2m3 0h1M2 18.5h1m1 0h3m1 0h1m4 0h1m1 0h2m1 0h5m1 0h1M10 19.5h1m1 0h1m1 0h2m1 0h2m3 0h2M2 20.5h7m2 0h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h3M2 21.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2m1 0h1M2 22.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h9m1 0h3M2 23.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h2m1 0h1m1 0h5M2 24.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m4 0h2m1 0h1M2 25.5h1m5 0h1m2 0h3m2 0h4m1 0h3m2 0h1M2 26.5h7m1 0h5m6 0h6"
      />
    </svg>
  );
}

/* ---------- Ícones (SVG inline, sem dependências) ---------- */

function LinkedInIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2">
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8">
      <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1.5v3M12 19.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1.5 12h3M19.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

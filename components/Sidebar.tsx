"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useSidebarState } from "@/context/SidebarContext";
import { useTheme } from "@/context/ThemeContext";
import { translations, type Lang } from "@/lib/translations";
import styles from "./Sidebar.module.css";
import IconLink from "./IconLink";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  SunLogo,
  QrCode,
  ChevronLeftIcon,
  MenuIcon,
  LocationIcon,
  MailIcon,
  SunIcon,
  MoonIcon,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "./icons";

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

  // Só corre nos estados expandido/about — no compacto o chevron não é
  // renderizado (o logo assume o papel de expandir, ver o JSX abaixo).
  const handleChevronClick = () => {
    if (isMobileViewport()) setState("compact");
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
      {/* No compacto o chevron desaparece e o próprio logo passa a ser o
          controlo de expandir (um só alvo, sem dois botões a competir pela
          mesma faixa estreita). Expandido/about: chevron sozinho no canto,
          com o logo centrado no topo do conteúdo (ver .expandedContent). */}
      {state !== "compact" && (
        <button
          aria-label="Recolher sidebar"
          onClick={handleChevronClick}
          className={styles.collapseBtn}>
          <ChevronLeftIcon />
        </button>
      )}

      {/* ---------- ESTADO COMPACTO ---------- */}
      {state === "compact" && (
        <div
          className={styles.compactInner}
          onClick={() => setState("expanded")}>
          <button
            className={styles.logoBtn}
            onClick={(e) => {
              e.stopPropagation();
              setState("expanded");
            }}
            aria-label="Expandir sidebar">
            <SunLogo />
          </button>

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
            {/* Faixa própria acima da foto, com o logo centrado nela. */}
            <div className={styles.logoSlot}>
              <span className={styles.logoMark}>
                <SunLogo />
              </span>
            </div>

            <div className={styles.avatarFrame}>
              {showQr ? (
                /* "Partilhar" ativo: o QR substitui a foto no mesmo espaço */
                <div
                  className={styles.qrCard}
                  role="img"
                  aria-label="QR code — www.ninja0k.com">
                  <QrCode />
                </div>
              ) : (
                <span className={styles.avatarMd}>
                  {/* Foto e descrição alternam no estado "about" (comportamento
                      do site original: profile_2 + aboutText na secção About) */}
                  <Image
                    src={isAbout ? "/images/profile_2.jpg" : "/images/profile.jpeg"}
                    alt="Luan Ribeiro"
                    fill
                    priority
                    sizes="(max-width: 860px) 260px, 220px"
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

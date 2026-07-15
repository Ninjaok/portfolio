"use client";

import { useSidebarState } from "@/context/SidebarContext";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";
import styles from "./Sidebar.module.css";
import IconLink from "./IconLink";

export default function Sidebar() {
  const { state, setState } = useSidebarState();
  const { lang, toggleLang } = useLang();
  const t = translations[lang];

  const widthClass =
    state === "compact"
      ? styles.compact
      : state === "expanded"
        ? styles.expanded
        : styles.about;

  const handleSidebarClick = (e: React.MouseEvent<HTMLElement>) => {
    if (state === "compact") return;
    const target = e.target as HTMLElement;
    if (target.closest("a, button")) return;
    setState("compact");
  };

  const handleSeeMoreClick = () => {
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className={`${styles.sidebar} ${widthClass}`}
      onClick={handleSidebarClick}>
      {state !== "compact" && (
        <button
          aria-label="Recolher sidebar"
          onClick={() => setState("compact")}
          className={styles.collapseBtn}>
          <ChevronLeftIcon />
        </button>
      )}

      {/* ---------- ESTADO COMPACTO ---------- */}
      {state === "compact" && (
        <div
          className={styles.compactInner}
          onClick={() => setState("expanded")}
          role="button"
          tabIndex={0}
          aria-label="Expandir sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setState("expanded");
          }}>
          <span className={styles.verticalName}>Luan Ribeiro</span>

          <div className={styles.iconStack}>
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
            <LangToggle lang={lang} onToggle={toggleLang} />
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

      {/* ---------- ESTADO EXPANDIDO ---------- */}
      {state === "expanded" && (
        <div className={styles.expandedWrapper}>
          <div className={styles.expandedContent}>
            <div className={styles.avatarFrame}>
              <span className={styles.avatarMd}>
                <img src="/images/profile.jpeg" alt="Luan Ribeiro" />
              </span>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.name}>Luan Ribeiro</h2>
              <p className={styles.bio}>{t.bio}</p>
            </div>

            <div className={styles.sidebarDetails}>
              <div className={styles.detailItem}>
                <LocationIcon />
                <span>Lisboa, PT</span>
              </div>
              <div className={styles.detailItem}>
                <MailIcon />
                <span>kacio.luansr@gmail.com</span>
              </div>
            </div>

            <button
              className={styles.moreBtn}
              onClick={handleSeeMoreClick}
              aria-label={t.aboutMeBtn}>
              {t.aboutMeBtn}
            </button>
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
            <LangToggle lang={lang} onToggle={toggleLang} />
          </div>
        </div>
      )}

      {/* ---------- ESTADO ABOUT ME ---------- */}
      {state === "about" && (
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContent}>
            <div className={styles.avatarFrame}>
              <span className={styles.avatarLg}>
                <img src="/images/profile_2.jpg" alt="Luan Ribeiro" />
              </span>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.nameLg}>Luan Ribeiro</h2>
              <p className={styles.bioLg}>{t.aboutText}</p>
            </div>

            <div className={styles.sidebarDetails}>
              <div className={styles.detailItem}>
                <LocationIcon />
                <span>Lisboa, PT</span>
              </div>
              <div className={styles.detailItem}>
                <MailIcon />
                <span>kacio.luansr@gmail.com</span>
              </div>
            </div>
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
            <LangToggle lang={lang} onToggle={toggleLang} />
          </div>
        </div>
      )}
    </aside>
  );
}

/* ---------- Subcomponentes ---------- */

function LangToggle({
  lang,
  onToggle,
}: {
  lang: "PT" | "EN";
  onToggle: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-label="Alternar idioma"
      className={styles.themeBtn}
      style={{ fontWeight: "700", fontSize: "1.2rem", lineHeight: "1" }}>
      {lang}
    </button>
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

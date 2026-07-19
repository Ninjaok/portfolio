"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProjectSection.module.css";
import type { Lang } from "@/lib/translations";
import { imageDescription } from "@/lib/imageDescriptions";
import ImageLightbox from "./ImageLightbox";
import PentagonTexture from "./PentagonTexture";

type TechItem = { label: string };
type Participant = {
  name: string;
  href: string;
  linkedin?: string;
  site?: string;
};

type ProjectSectionProps = {
  id?: string;
  index: number;
  alt?: boolean;
  title: string;
  area: string;
  description: string;
  techStack: TechItem[];
  participants: Participant[];
  images?: string[];
  repo?: string;
  lang: Lang;
  participantsLabel: string;
  kickerLabel: string;
  visitGithubLabel: string;
  profileLabel: string;
};

export default function ProjectSection({
  id,
  index,
  alt = false,
  title,
  area,
  description,
  techStack,
  participants,
  images = [],
  repo,
  lang,
  participantsLabel,
  kickerLabel,
  visitGithubLabel,
  profileLabel,
}: ProjectSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // Clique na descrição: atenua gradualmente o padrão de fundo só na área
  // do texto (véu na cor da secção, ver .descriptionVeil no CSS).
  const [isDescDimmed, setIsDescDimmed] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Swipe support. wasDragRef distinguishes a drag from a plain click so a
  // swipe gesture doesn't also open the lightbox via the trailing click event.
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const wasDragRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!pointerStart.current) return;
      const dx = e.clientX - pointerStart.current.x;
      const dy = e.clientY - pointerStart.current.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      wasDragRef.current = absDx > 10 || absDy > 10;
      // Only trigger swipe if horizontal movement > 40px and greater than vertical
      if (images.length > 1 && absDx > 40 && absDx > absDy) {
        if (dx < 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
      pointerStart.current = null;
    },
    [images.length, goToNext, goToPrev],
  );

  const handleImageClick = useCallback(() => {
    if (wasDragRef.current) {
      wasDragRef.current = false;
      return;
    }
    setIsLightboxOpen(true);
  }, []);

  // Auto-advance every 30 seconds (respects prefers-reduced-motion)
  useEffect(() => {
    if (images.length <= 1) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Visibility observer (fade-in on scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    const el = domRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Lazy video loading: only load video when it becomes the active slide AND section is visible
  useEffect(() => {
    const video = videoRef.current;
    if (video && isVisible) {
      video.load();
      video.play().catch(() => {});
    }
  }, [activeIndex, isVisible]);

  const currentSrc = images[activeIndex] ?? "";
  const isVideo =
    currentSrc.endsWith(".mp4") || currentSrc.endsWith(".webm");
  const isGif = currentSrc.endsWith(".gif");
  const currentDescription = imageDescription(currentSrc, lang);

  return (
    <section
      id={id}
      ref={domRef}
      className={`${styles.section} ${alt ? styles.sectionAlt : ""} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <PentagonTexture />
      <div
        className={`${styles.container} ${images.length > 0 ? "" : styles.containerSingle}`}
      >
        {images.length > 0 && (
          <div className={styles.mediaCol}>
            <div
              className={styles.imageFrame}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onClick={isVideo ? undefined : handleImageClick}
              style={{
                touchAction: "pan-y",
                cursor: isVideo ? "default" : "zoom-in",
              }}
            >
              {isVideo ? (
                <video
                  ref={videoRef}
                  className={styles.photo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                >
                  <source src={currentSrc} type={currentSrc.endsWith(".webm") ? "video/webm" : "video/mp4"} />
                </video>
              ) : isGif ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={currentSrc}
                  alt={`${title} screenshot ${activeIndex + 1}`}
                  className={styles.photo}
                  draggable={false}
                  loading="lazy"
                />
              ) : (
                <Image
                  src={currentSrc}
                  alt={`${title} screenshot ${activeIndex + 1}`}
                  className={styles.photo}
                  draggable={false}
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              )}
              <div className={styles.badgeCounter}>
                {activeIndex + 1} / {images.length}
              </div>
              {currentDescription && (
                <div className={styles.hoverCaption}>{currentDescription}</div>
              )}
            </div>

            {/* Linha de controlo do carrossel (modelo): setas redondas + CTA Github */}
            <div className={styles.carouselNav}>
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goToPrev}
                    className={styles.navBtn}
                    aria-label={lang === "PT" ? "Imagem anterior" : "Previous image"}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className={styles.navBtn}
                    aria-label={lang === "PT" ? "Próxima imagem" : "Next image"}
                  >
                    ›
                  </button>
                </>
              )}
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.repoBtn}
                >
                  {visitGithubLabel}
                </a>
              )}
            </div>
          </div>
        )}

        <div className={styles.contentCol}>
          <div className={styles.kicker}>
            {kickerLabel} {String(index + 1).padStart(2, "0")} · {area}
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p
            className={`${styles.description} ${isDescDimmed ? styles.descriptionDimmed : ""}`}
            onClick={() => setIsDescDimmed((v) => !v)}
          >
            {description}
          </p>

          <div className={styles.techRow}>
            {techStack.map((tech) => (
              <span key={tech.label} className={styles.techBadge}>
                {tech.label}
              </span>
            ))}
          </div>

          {participants.length > 0 && (
            <div className={styles.participantsSection}>
              <p className={styles.participantsTitle}>
                {participantsLabel}
              </p>
              <div className={styles.participantsList}>
                {participants.map((participant) => (
                  <div key={participant.name} className={styles.participantRow}>
                    <span className={styles.participantName}>
                      {participant.name}
                    </span>
                    <div className={styles.participantLinks}>
                      {/* Ordem do modelo: Site · LinkedIn · GitHub */}
                      {[participant.site, participant.linkedin, participant.href]
                        .filter((url): url is string => Boolean(url))
                        .map((url) => (
                          <a
                            key={url}
                            href={url}
                            className={styles.participantIconBtn}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${profileLabel}: ${participant.name}`}
                          >
                            <ParticipantLinkIcon href={url} />
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length === 0 && repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.repoBtnSolo}
            >
              {visitGithubLabel}
            </a>
          )}
        </div>
      </div>

      {isLightboxOpen && !isVideo && (
        <ImageLightbox
          src={currentSrc}
          alt={`${title} screenshot ${activeIndex + 1}`}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </section>
  );
}

/* Ícone do link do participante conforme o destino (modelo: círculos 34px
   com globo/LinkedIn/GitHub) */
function ParticipantLinkIcon({ href }: { href: string }) {
  if (href.includes("github.com")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    );
  }
  if (href.includes("linkedin.com")) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88zM5.25 10.25h3.38V19H5.25v-8.75zM10.75 10.25h3.24v1.2h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V19h-3.38v-4.6c0-1.1-.02-2.5-1.53-2.5-1.54 0-1.78 1.2-1.78 2.43V19h-3.35v-8.75z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

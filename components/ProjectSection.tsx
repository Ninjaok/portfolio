"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProjectSection.module.css";
import type { Lang } from "@/lib/translations";
import { imageDescription } from "@/lib/imageDescriptions";
import ImageLightbox from "./ImageLightbox";
import PentagonTexture from "./PentagonTexture";
import {
  SunLogo,
  NycoLogo,
  GitHubIcon,
  LinkedInIcon,
  GlobeIcon,
} from "./icons";

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
  // Só a imagem inicialmente visível do primeiro projeto: depois de o
  // utilizador avançar o carrossel já não é a que pinta primeiro.
  const isLcpCandidate = index === 0 && activeIndex === 0;
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
                  /* O primeiro slide do primeiro projeto é o candidato a LCP
                     (a intro acima é só texto), por isso carrega com
                     prioridade em vez de lazy — era o aviso "detected as the
                     Largest Contentful Paint" do Next. Os restantes ficam
                     lazy: são slides escondidos ou secções abaixo da dobra.
                     priority e loading são mutuamente exclusivos. */
                  {...(isLcpCandidate
                    ? { priority: true }
                    : { loading: "lazy" as const })}
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
                  aria-label={`${visitGithubLabel}: ${title}`}
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
              aria-label={`${visitGithubLabel}: ${title}`}
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
  /* Sites com marca própria mostram o logo em vez do globo genérico. Quem
     não tiver logo aqui cai no globo, que continua a ser a leitura certa
     para "site pessoal" de terceiros. */
  if (href.includes("ninja0k.com")) {
    return (
      <span className={styles.participantLogo}>
        <SunLogo />
      </span>
    );
  }
  if (href.includes("nycocado.dev")) {
    return (
      <span className={styles.participantLogoNyco}>
        <NycoLogo />
      </span>
    );
  }
  if (href.includes("github.com")) return <GitHubIcon />;
  if (href.includes("linkedin.com")) return <LinkedInIcon />;
  return <GlobeIcon />;
}

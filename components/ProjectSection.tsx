"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProjectSection.module.css";
import type { Lang } from "@/lib/translations";
import { useSidebarState } from "@/context/SidebarContext";
import ImageLightbox from "./ImageLightbox";

type TechItem = { label: string };
type Participant = { name: string; href: string };

type ProjectSectionProps = {
  id?: string;
  title: string;
  description: string;
  techStack: TechItem[];
  participants: Participant[];
  images?: string[];
  lang: Lang;
  participantsLabel: string;
};

export default function ProjectSection({
  id,
  title,
  description,
  techStack,
  participants,
  images = [],
  lang,
  participantsLabel,
}: ProjectSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { state: sidebarState } = useSidebarState();

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

  const isCompact = sidebarState === "compact";
  const currentSrc = images[activeIndex] ?? "";
  const isVideo =
    currentSrc.endsWith(".mp4") || currentSrc.endsWith(".webm");
  const isGif = currentSrc.endsWith(".gif");

  return (
    <section
      id={id}
      ref={domRef}
      className={`${styles.section} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div
        className={`${styles.container} ${images.length > 0 ? "" : styles.containerSingle}`}
      >
        <div className={styles.contentCol}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

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
              <div className={styles.participantsRow}>
                {participants.map((participant) => (
                  <a
                    key={participant.name}
                    href={participant.href}
                    className={styles.participant}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {participant.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {images.length > 0 && (
          <div
            className={`${styles.imageCol} ${isCompact ? styles.imageColLarge : ""}`}
          >
            <div className={styles.carouselContainer}>
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
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                )}
                <div className={styles.badgeCounter}>
                  {activeIndex + 1} / {images.length}
                </div>
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrev();
                      }}
                      className={`${styles.navBtn} ${styles.navPrev}`}
                      aria-label={lang === "PT" ? "Imagem anterior" : "Previous image"}
                    >
                      <ChevronLeftIcon />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}
                      className={`${styles.navBtn} ${styles.navNext}`}
                      aria-label={lang === "PT" ? "Próxima imagem" : "Next image"}
                    >
                      <ChevronRightIcon />
                    </button>
                  </>
                )}
                {images.length > 1 && (
                  <div className={styles.overlayDots}>
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(index);
                        }}
                        className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                        aria-label={`${lang === "PT" ? "Ver imagem" : "View image"} ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
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

function ChevronLeftIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

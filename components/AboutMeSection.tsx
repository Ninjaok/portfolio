"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./AboutMeSection.module.css";
import { useSidebarState } from "@/context/SidebarContext";
import type { Lang, Translations } from "@/lib/translations";
import ImageLightbox from "./ImageLightbox";

const HOBBY_IMAGES = [
  { src: "/images/hobby_0.jpg", caption: "" },
  { src: "/images/hobby_1.jpg", caption: "" },
  { src: "/images/hobby_2.jpg", caption: "" },
  { src: "/images/hobby_3.jpg", caption: "" },
  { src: "/images/hobby_4.jpg", caption: "" },
  { src: "/images/hobby_5.jpg", caption: "" },
  { src: "/images/hobby_6.jpg", caption: "" },
  { src: "/images/hobby_7.jpg", caption: "" },
  { src: "/images/hobby_8.jpg", caption: "" },
];

export default function AboutMeSection({
  lang,
  t,
}: {
  lang: Lang;
  t: Translations;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { setState } = useSidebarState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HOBBY_IMAGES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? HOBBY_IMAGES.length - 1 : prev - 1));
  }, []);

  // Swipe support. wasDragRef distinguishes a drag from a plain click so a
  // swipe gesture doesn't also open the lightbox via the trailing click event.
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const wasDragRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!pointerStart.current) return;
    const dx = e.clientX - pointerStart.current.x;
    const dy = e.clientY - pointerStart.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    wasDragRef.current = absDx > 10 || absDy > 10;
    if (HOBBY_IMAGES.length > 1 && absDx > 40 && absDx > absDy) {
      if (dx < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    pointerStart.current = null;
  }, [goToNext, goToPrev]);

  const handleImageClick = useCallback(() => {
    if (wasDragRef.current) {
      wasDragRef.current = false;
      return;
    }
    setIsLightboxOpen(true);
  }, []);

  // Auto-advance every 30 seconds (respects prefers-reduced-motion)
  useEffect(() => {
    if (HOBBY_IMAGES.length <= 1) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOBBY_IMAGES.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Sidebar auto-expand/collapse based on section visibility.
  // Triggers on the section's edge crossing a fixed band of the viewport
  // (rootMargin) rather than a visible-area ratio: a ratio threshold reacts to
  // the section's own height, which itself changes when this state flips the
  // sidebar width and the layout reflows — that coupling caused an
  // expand/collapse oscillation loop at tablet widths. Using the functional
  // setState form also keeps `state` out of the deps array, so the observer
  // is created once on mount instead of being torn down and recreated (each
  // recreation re-fires IntersectionObserver's initial callback) every time
  // the sidebar state changes.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 860) return;
        if (entry.isIntersecting) {
          setState("about");
        } else {
          setState((prev) => (prev === "about" ? "compact" : prev));
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [setState]);

  return (
    <section id="about-me" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Coluna Esquerda: Conteúdo de Biografia */}
        <div className={styles.bioCol}>
          <h2 className={styles.heading}>{t.aboutHeading}</h2>

          <div className={styles.bioParagraphs}>
            <p className={styles.bioText}>{t.aboutParagraph1}</p>
            <p
              className={styles.bioText}
              dangerouslySetInnerHTML={{ __html: t.aboutParagraph2 }}
            />
            <p
              className={styles.bioText}
              dangerouslySetInnerHTML={{ __html: t.aboutParagraph3 }}
            />
          </div>

          <div className={styles.focusGrid}>
            <div className={styles.focusCard}>
              <h3 className={styles.focusTitle}>{t.focusEducationTitle}</h3>
              <p className={styles.focusDesc}>{t.focusEducationDesc}</p>
            </div>
            <div className={styles.focusCard}>
              <h3 className={styles.focusTitle}>{t.focusStackTitle}</h3>
              <p className={styles.focusDesc}>{t.focusStackDesc}</p>
            </div>
            <div className={styles.focusCard}>
              <h3 className={styles.focusTitle}>{t.focusCreativeTitle}</h3>
              <p className={styles.focusDesc}>{t.focusCreativeDesc}</p>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Carrossel de Hobbies */}
        <div className={styles.rightCol}>
          <div className={styles.carouselContainer}>
            <div
              className={styles.imageFrame}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onClick={handleImageClick}
              style={{ touchAction: "pan-y", cursor: "zoom-in" }}
            >
              <Image
                src={HOBBY_IMAGES[activeIndex].src}
                alt={`Hobby image ${activeIndex + 1}`}
                className={styles.photo}
                draggable={false}
                fill
                sizes="420px"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
              <div className={styles.badgeCounter}>
                {activeIndex + 1} / {HOBBY_IMAGES.length}
              </div>
              {HOBBY_IMAGES[activeIndex].caption && (
                <span className={styles.photoCaption}>
                  {HOBBY_IMAGES[activeIndex].caption}
                </span>
              )}

              {HOBBY_IMAGES.length > 1 && (
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

              <div className={styles.overlayDots}>
                {HOBBY_IMAGES.map((_, index) => (
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
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <ImageLightbox
          src={HOBBY_IMAGES[activeIndex].src}
          alt={`Hobby image ${activeIndex + 1}`}
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

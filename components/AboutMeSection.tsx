"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./AboutMeSection.module.css";
import type { Lang, Translations } from "@/lib/translations";
import { imageDescription } from "@/lib/imageDescriptions";
import ImageLightbox from "./ImageLightbox";
import PentagonTexture from "./PentagonTexture";

const HOBBY_IMAGES = [
  { src: "/images/hobby_0.jpg" },
  { src: "/images/hobby_1.jpg" },
  { src: "/images/hobby_2.jpg" },
  { src: "/images/hobby_3.jpg" },
  { src: "/images/hobby_4.jpg" },
  { src: "/images/hobby_5.jpg" },
  { src: "/images/hobby_6.jpg" },
  { src: "/images/hobby_7.jpg" },
  { src: "/images/hobby_8.jpg" },
];

export default function AboutMeSection({
  lang,
  t,
}: {
  lang: Lang;
  t: Translations;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // Clique na biografia: atenua gradualmente o padrão de fundo só na área
  // do texto (mesma "física" da descrição em ProjectSection).
  const [isBioDimmed, setIsBioDimmed] = useState(false);

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

  return (
    <section id="about-me" className={styles.section}>
      <PentagonTexture />
      <div className={styles.container}>
        {/* Coluna Esquerda: Carrossel de Hobbies (foto 4/5, modelo) */}
        <div className={styles.photoCol}>
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
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <div className={styles.badgeCounter}>
                {activeIndex + 1} / {HOBBY_IMAGES.length}
              </div>
              {imageDescription(HOBBY_IMAGES[activeIndex].src, lang) && (
                <span className={styles.photoCaption}>
                  {imageDescription(HOBBY_IMAGES[activeIndex].src, lang)}
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

        {/* Coluna Direita: eyebrow + nome + biografia + áreas (modelo) */}
        <div className={styles.bioCol}>
          <div className={styles.eyebrow}>{t.aboutHeading}</div>
          <h2 className={styles.heading}>Luan Ribeiro</h2>

          <div
            className={`${styles.bioParagraphs} ${isBioDimmed ? styles.bioParagraphsDimmed : ""}`}
            onClick={() => setIsBioDimmed((v) => !v)}
          >
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

          <div className={styles.areas}>
            <div className={styles.area}>
              <div className={styles.areaKicker}>01 — {t.focusEducationTitle}</div>
              <div className={styles.areaBody}>{t.focusEducationDesc}</div>
            </div>
            <div className={styles.area}>
              <div className={styles.areaKicker}>02 — {t.focusStackTitle}</div>
              <div className={styles.areaBody}>{t.focusStackDesc}</div>
            </div>
            <div className={styles.area}>
              <div className={styles.areaKicker}>03 — {t.focusCreativeTitle}</div>
              <div className={styles.areaBody}>{t.focusCreativeDesc}</div>
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

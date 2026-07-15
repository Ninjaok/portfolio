"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ProjectSection.module.css";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";
import { useSidebarState } from "@/context/SidebarContext";

type TechItem = { label: string };
type Participant = { name: string; href: string };

type ProjectSectionProps = {
  id?: string;
  title: string;
  description: string;
  techStack: TechItem[];
  participants: Participant[];
  images?: string[];
};

export default function ProjectSection({
  id,
  title,
  description,
  techStack,
  participants,
  images = [],
}: ProjectSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const domRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const t = translations[lang];
  const { state: sidebarState } = useSidebarState();

  // Auto-advance every 30 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const el = domRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const isCompact = sidebarState === "compact";

  return (
    <section
      id={id}
      ref={domRef}
      className={`${styles.section} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className={`${styles.container} ${images.length > 0 ? "" : styles.containerSingle}`}>
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
              <p className={styles.participantsTitle}>{t.participantsLabel}</p>
              <div className={styles.participantsRow}>
                {participants.map((participant) => (
                  <a
                    key={participant.name}
                    href={participant.href}
                    className={styles.participant}
                    target="_blank"
                    rel="noreferrer noopener">
                    {participant.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {images.length > 0 && (
          <div className={`${styles.imageCol} ${isCompact ? styles.imageColLarge : ""}`}>
            <div className={styles.carouselContainer}>
              <div className={styles.imageFrame}>
                {images[activeIndex].endsWith('.mp4') ? (
                  <video
                    src={images[activeIndex]}
                    className={styles.photo}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={images[activeIndex]}
                    alt={`${title} screenshot ${activeIndex + 1}`}
                    className={styles.photo}
                  />
                )}
                <div className={styles.badgeCounter}>
                  {activeIndex + 1} / {images.length}
                </div>
                {images.length > 1 && (
                  <div className={styles.overlayDots}>
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
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
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutMeSection.module.css";
import { useSidebarState } from "@/context/SidebarContext";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

const HOBBY_IMAGES = [
  { src: "/images/hobby_0.webp", caption: "" },
  { src: "/images/hobby_1.png", caption: "" },
  { src: "/images/hobby_2.png", caption: "" },
  { src: "/images/hobby_3.png", caption: "" },
  { src: "/images/hobby_4.png", caption: "" },
  { src: "/images/hobby_5.jpg", caption: "" },
  { src: "/images/hobby_6.jpg", caption: "" },
  { src: "/images/hobby_7.jpg", caption: "" },
];

export default function AboutMeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setState } = useSidebarState();
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLang();
  const t = translations[lang];

  // Auto-advance every 30 seconds
  useEffect(() => {
    if (HOBBY_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOBBY_IMAGES.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (window.innerWidth >= 860) {
            setState("about");
          }
        }
      },
      { threshold: 0.3 },
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
            <p className={styles.bioText}>
              {t.aboutParagraph1}
            </p>
            <p className={styles.bioText} dangerouslySetInnerHTML={{ __html: t.aboutParagraph2 }} />
            <p className={styles.bioText} dangerouslySetInnerHTML={{ __html: t.aboutParagraph3 }} />
          </div>

          <div className={styles.focusGrid}>
            <div className={styles.focusCard}>
              <h4 className={styles.focusTitle}>{t.focusEducationTitle}</h4>
              <p className={styles.focusDesc}>{t.focusEducationDesc}</p>
            </div>
            <div className={styles.focusCard}>
              <h4 className={styles.focusTitle}>{t.focusStackTitle}</h4>
              <p className={styles.focusDesc}>{t.focusStackDesc}</p>
            </div>
            <div className={styles.focusCard}>
              <h4 className={styles.focusTitle}>{t.focusCreativeTitle}</h4>
              <p className={styles.focusDesc}>{t.focusCreativeDesc}</p>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Carrossel de Hobbies */}
        <div className={styles.rightCol}>
          <div className={styles.carouselContainer}>
            <div className={styles.imageFrame}>
              <img
                src={HOBBY_IMAGES[activeIndex].src}
                alt={`Hobby image ${activeIndex + 1}`}
                className={styles.photo}
              />
              <div className={styles.badgeCounter}>
                {activeIndex + 1} / {HOBBY_IMAGES.length}
              </div>
              {HOBBY_IMAGES[activeIndex].caption && (
                <span className={styles.photoCaption}>
                  {HOBBY_IMAGES[activeIndex].caption}
                </span>
              )}
              
              <div className={styles.overlayDots}>
                {HOBBY_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                    aria-label={`${lang === "PT" ? "Ver imagem" : "View image"} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

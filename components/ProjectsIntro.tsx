"use client";

import { useEffect, useRef, useState } from "react";
import { useSidebarState } from "@/context/SidebarContext";
import PentagonTexture from "./PentagonTexture";
import styles from "./ProjectsIntro.module.css";

interface ProjectsIntroItem {
  title: string;
  description: string;
  slug: string;
}

interface ProjectsIntroProps {
  heading: string;
  eyebrow: string;
  lead: string;
  viewProjectLabel: string;
  items: ProjectsIntroItem[];
}

export default function ProjectsIntro({
  heading,
  eyebrow,
  lead,
  viewProjectLabel,
  items,
}: ProjectsIntroProps) {
  const [active, setActive] = useState(-1);
  // Clique no lead: atenua gradualmente o padrão de fundo só na área do
  // texto (mesma "física" da descrição em ProjectSection).
  const [isLeadDimmed, setIsLeadDimmed] = useState(false);
  const { setState } = useSidebarState();
  const wasAboutRef = useRef(false);

  // Scroll-spy (modelo/README.md): linha de leitura a 40% da viewport marca
  // o projeto visível no índice; a secção about (ou o fim do scroll) muda a
  // sidebar para o estado "about" e sair dela devolve "expanded".
  useEffect(() => {
    // As leituras de layout (getBoundingClientRect) ficam presas a um único
    // requestAnimationFrame por frame: o evento nativo "scroll" pode disparar
    // muitas vezes entre dois frames pintados, e sem este throttle cada
    // disparo lia o layout de per si — trabalho extra na thread principal
    // (custava TBT no PageSpeed) sem nenhum ganho visual, já que só o valor
    // do último frame chega a ser pintado.
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const line = window.scrollY + window.innerHeight * 0.4;
        let act = -1;
        let about = false;

        items.forEach((item, i) => {
          const el = document.getElementById(item.slug);
          if (el && el.getBoundingClientRect().top + window.scrollY <= line) {
            act = i;
          }
        });

        const aboutEl = document.getElementById("about-me");
        if (aboutEl && aboutEl.getBoundingClientRect().top + window.scrollY <= line) {
          about = true;
        }
        const doc = document.documentElement;
        if (window.scrollY + window.innerHeight >= doc.scrollHeight - 60) {
          about = true;
        }

        setActive(about ? -1 : act);

        // No mobile "expanded"/"about" é o menu fullscreen — o scroll não deve abri-lo.
        if (window.innerWidth < 860) return;
        if (about !== wasAboutRef.current) {
          wasAboutRef.current = about;
          setState((prev) => {
            if (about) return prev === "compact" ? prev : "about";
            return prev === "about" ? "expanded" : prev;
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items, setState]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className={styles.intro}>
      <PentagonTexture />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.heading}>{heading}</h1>
        <p
          className={`${styles.lead} ${isLeadDimmed ? styles.leadDimmed : ""}`}
          onClick={() => setIsLeadDimmed((v) => !v)}
        >
          {lead}
        </p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              onClick={(e) => handleClick(e, item.slug)}
              className={`${styles.card} ${i === active ? styles.cardActive : ""}`}
            >
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardDesc}>{item.description}</span>
              <span className={styles.cardArrow}>{viewProjectLabel} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

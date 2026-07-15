"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Se o navegador suporta nativamente a animação por scroll, deixa a cargo do CSS
    const supportsAnimationTimeline =
      typeof window !== "undefined" &&
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline", "scroll()");
      
    if (supportsAnimationTimeline) return;

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (window.scrollY / docHeight) * 100;
      setWidth(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: width > 0 ? `${width}%` : undefined }}
        aria-hidden="true"
      />
      <div className="aura-top" aria-hidden="true" />
      <div className="aura-bottom" aria-hidden="true" />
    </>
  );
}

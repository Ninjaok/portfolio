"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { LOCALES } from "@/lib/translations";
import sidebarStyles from "./Sidebar.module.css";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const currentLabel = LOCALES.find((l) => l.code === currentLocale)?.label ?? "PT";

  const openMenu = useCallback(() => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const estimatedWidth = 180;
    const estimatedHeight = LOCALES.length * 40 + 12;
    let left = rect.left;
    let top = rect.bottom + 8;
    if (left + estimatedWidth > window.innerWidth - 8) {
      left = Math.max(8, rect.right - estimatedWidth);
    }
    if (top + estimatedHeight > window.innerHeight - 8) {
      top = Math.max(8, rect.top - estimatedHeight - 8);
    }
    setPosition({ top, left });
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    // Deferred so the opening click itself doesn't immediately close the menu
    const timer = setTimeout(() => document.addEventListener("click", onClickOutside), 0);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (isOpen) {
            setIsOpen(false);
          } else {
            openMenu();
          }
        }}
        aria-label="Selecionar idioma"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={sidebarStyles.themeBtn}
        style={{ fontWeight: "700", fontSize: "1.2rem", lineHeight: "1" }}
      >
        {currentLabel}
      </button>
      {/* Portal to document.body: the sidebar has overflow:hidden (needed for
          its own width/height transitions), which would clip a dropdown
          positioned relative to it — same reasoning as ImageLightbox. */}
      {isOpen &&
        position &&
        createPortal(
          <div
            className={styles.menu}
            role="menu"
            style={{ top: position.top, left: position.left }}
          >
            {LOCALES.map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                role="menuitem"
                className={`${styles.menuItem} ${l.code === currentLocale ? styles.menuItemActive : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.menuItemCode}>{l.label}</span>
                <span className={styles.menuItemName}>{l.name}</span>
              </Link>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}

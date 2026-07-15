"use client";

import styles from "./IconLink.module.css";

export default function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={styles.iconLink}>
      {children}
    </a>
  );
}

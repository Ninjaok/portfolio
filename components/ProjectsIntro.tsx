"use client";

import styles from "./ProjectsIntro.module.css";

interface ProjectsIntroItem {
  title: string;
  description: string;
  slug: string;
}

interface ProjectsIntroProps {
  heading: string;
  items: ProjectsIntroItem[];
}

export default function ProjectsIntro({ heading, items }: ProjectsIntroProps) {
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
    <section className={styles.intro}>
      <h1 className={styles.heading}>{heading}</h1>

      <div className={styles.list}>
        {items.map((item) => (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            onClick={(e) => handleClick(e, item.slug)}
            className={styles.listItem}
          >
            <span className={styles.listTitle}>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
              {item.title}
            </span>
            <span className={styles.listDesc}>{item.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

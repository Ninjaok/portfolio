import ProjectSection from "@/components/ProjectSection";
import ProjectsIntro from "@/components/ProjectsIntro";
import AboutMeSection from "@/components/AboutMeSection";
import { slugify } from "@/lib/slugify";
import { translations, localeToLang } from "@/lib/translations";

const projects = [
  {
    title: "Speedy",
    shortDescKey: "speedyShort" as const,
    descKey: "speedyLong" as const,
    techStack: [
      { label: "ROS 2" },
      { label: "C++" },
      { label: "Python" },
      { label: "OpenCV" },
    ],
    images: [
      "/images/speedy_1.jpg",
      "/images/speedy_2.jpg",
      "/images/speedy_3.jpg",
      "/images/speedy_4.jpg",
      "/images/speedy_5.jpg",
      "/images/speedy_6.jpg",
      "/images/speedy_7.jpg",
    ],
    participants: [
      { name: "Luan Ribeiro", href: "https://github.com/Ninjaok" },
      { name: "Nycolas Souza", href: "https://github.com/nycocado" },
      { name: "Lohanne Guedes", href: "https://github.com/lohanneguedes" },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "Wash Buddy",
    shortDescKey: "washBuddyShort" as const,
    descKey: "washBuddyLong" as const,
    techStack: [
      { label: "C++" },
      { label: "Arduino" },
      { label: "PlatformIO" },
      { label: "FreeRTOS" },
    ],
    images: [
      "/images/wash-buddy_1.jpg",
      "/images/wash-buddy_2.jpg",
      "/images/wash-buddy_3.jpg",
      "/images/wash-buddy_4.jpg",
      "/images/wash-buddy_5.jpg",
      "/images/wash-buddy_6.jpg",
      "/images/wash-buddy_7.jpg",
    ],
    participants: [
      { name: "Luan Ribeiro", href: "https://github.com/Ninjaok" },
      { name: "Nycolas Souza", href: "https://github.com/nycocado" },
      { name: "Lohanne Guedes", href: "https://github.com/lohanneguedes" },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "World of Toilets",
    shortDescKey: "worldOfToiletsShort" as const,
    descKey: "worldOfToiletsLong" as const,
    techStack: [
      { label: "Kotlin" },
      { label: "NestJS" },
      { label: "Flask" },
      { label: "Docker" },
    ],
    images: [
      "/images/wot.mp4",
      "/images/wot_1.jpg",
      "/images/wot_2.jpg",
      "/images/wot_3.jpg",
    ],
    participants: [
      { name: "Luan Ribeiro", href: "https://github.com/Ninjaok" },
      { name: "Nycolas Souza", href: "https://github.com/nycocado" },
      { name: "Lohanne Guedes", href: "https://github.com/lohanneguedes" },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "CAPO",
    shortDescKey: "capoShort" as const,
    descKey: "capoLong" as const,
    techStack: [
      { label: "NestJS" },
      { label: "Next.js" },
      { label: "MariaDB" },
      { label: "Socket.IO" },
    ],
    images: [
      "/images/01-cut-workflow.gif",
      "/images/02-assembly-workflow.gif",
      "/images/03-weld-workflow.gif",
      "/images/04-gating.gif",
    ],
    participants: [
      { name: "Luan Ribeiro", href: "https://github.com/Ninjaok" },
      { name: "Nycolas Souza", href: "https://github.com/nycocado" },
      { name: "Lohanne Guedes", href: "https://github.com/lohanneguedes" },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "Angry Duck",
    shortDescKey: "angryDuckShort" as const,
    descKey: "angryDuckLong" as const,
    techStack: [
      { label: "Cisco PT" },
      { label: "Networking" },
      { label: "IoT" },
      { label: "RFID" },
    ],
    images: [],
    participants: [
      { name: "Luan Ribeiro", href: "https://github.com/Ninjaok" },
      { name: "Adjami Regula", href: "https://github.com/CFZ13" },
    ],
  },
  {
    title: "Physics Simulator",
    shortDescKey: "physicsSimShort" as const,
    descKey: "physicsSimLong" as const,
    techStack: [
      { label: "C" },
      { label: "GTK4" },
      { label: "Cairo" },
      { label: "Make" },
    ],
    images: [
      "/images/kinematics-01.png",
      "/images/kinematics-02.png",
      "/images/dynamics-01.png",
      "/images/dynamics-02.png",
    ],
    participants: [
      { name: "Luan Ribeiro", href: "https://github.com/Ninjaok" },
      { name: "Nycolas Souza", href: "https://github.com/nycocado" },
      { name: "Lohanne Guedes", href: "https://github.com/lohanneguedes" },
    ],
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = localeToLang(locale);
  const t = translations[lang];

  return (
    <main>
      <ProjectsIntro
        heading={t.projectsHeading}
        items={projects.map((p) => ({
          title: p.title,
          description: t[p.shortDescKey],
          slug: slugify(p.title),
        }))}
      />

      {projects.map((project) => (
        <ProjectSection
          key={project.title}
          id={slugify(project.title)}
          title={project.title}
          description={t[project.descKey]}
          techStack={project.techStack}
          participants={project.participants}
          images={project.images}
          lang={lang}
          participantsLabel={t.participantsLabel}
        />
      ))}

      <AboutMeSection lang={lang} t={t} />

      <footer
        style={{
          padding: "24px 24px 48px",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
          color: "var(--subtext)",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}
      >
        © {new Date().getFullYear()} Luan Ribeiro. Todos os direitos reservados.
      </footer>
    </main>
  );
}

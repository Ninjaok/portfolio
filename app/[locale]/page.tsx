import ProjectSection from "@/components/ProjectSection";
import ProjectsIntro from "@/components/ProjectsIntro";
import AboutMeSection from "@/components/AboutMeSection";
import { slugify } from "@/lib/slugify";
import { translations, localeToLang } from "@/lib/translations";

// `area` alimenta o kicker "Projeto 0X · Área" (modelo); `repo` o botão
// "Visitar Github" — repositório público de cada projeto.
const projects = [
  {
    title: "Speedy",
    area: "Robotics & AI",
    repo: "https://github.com/nycocado/speedy",
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
      {
        name: "Luan Ribeiro",
        href: "https://github.com/Ninjaok",
        linkedin: "https://www.linkedin.com/in/luan-kacio/",
        site: "https://www.ninja0k.com",
      },
      {
        name: "Nycolas Souza",
        href: "https://github.com/nycocado",
        linkedin: "https://www.linkedin.com/in/nycocado/",
        site: "https://nycocado.dev",
      },
      {
        name: "Lohanne Guedes",
        href: "https://github.com/lohanneguedes",
        linkedin: "https://www.linkedin.com/in/lohanneguedes/",
      },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "Wash Buddy",
    area: "Embedded & Robotics",
    repo: "https://github.com/nycocado/wash-buddy",
    shortDescKey: "washBuddyShort" as const,
    descKey: "washBuddyLong" as const,
    techStack: [
      { label: "C++" },
      { label: "Arduino" },
      { label: "PlatformIO" },
      { label: "FreeRTOS" },
    ],
    images: [
      "/images/wash-buddy_0.png",
      "/images/wash-buddy_1.jpg",
      "/images/wash-buddy_2.jpg",
      "/images/wash-buddy_3.jpg",
      "/images/wash-buddy_4.jpg",
      "/images/wash-buddy_5.jpg",
      "/images/wash-buddy_6.jpg",
      "/images/wash-buddy_7.jpg",
    ],
    participants: [
      {
        name: "Luan Ribeiro",
        href: "https://github.com/Ninjaok",
        linkedin: "https://www.linkedin.com/in/luan-kacio/",
        site: "https://www.ninja0k.com",
      },
      {
        name: "Nycolas Souza",
        href: "https://github.com/nycocado",
        linkedin: "https://www.linkedin.com/in/nycocado/",
        site: "https://nycocado.dev",
      },
      {
        name: "Lohanne Guedes",
        href: "https://github.com/lohanneguedes",
        linkedin: "https://www.linkedin.com/in/lohanneguedes/",
      },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "World of Toilets",
    area: "Mobile & Backend",
    repo: "https://github.com/nycocado/worldoftoilets",
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
    ],
    participants: [
      {
        name: "Luan Ribeiro",
        href: "https://github.com/Ninjaok",
        linkedin: "https://www.linkedin.com/in/luan-kacio/",
        site: "https://www.ninja0k.com",
      },
      {
        name: "Nycolas Souza",
        href: "https://github.com/nycocado",
        linkedin: "https://www.linkedin.com/in/nycocado/",
        site: "https://nycocado.dev",
      },
      {
        name: "Lohanne Guedes",
        href: "https://github.com/lohanneguedes",
        linkedin: "https://www.linkedin.com/in/lohanneguedes/",
      },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "CAPO",
    area: "Web & Real-Time",
    repo: "https://github.com/nycocado/capo",
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
      {
        name: "Luan Ribeiro",
        href: "https://github.com/Ninjaok",
        linkedin: "https://www.linkedin.com/in/luan-kacio/",
        site: "https://www.ninja0k.com",
      },
      {
        name: "Nycolas Souza",
        href: "https://github.com/nycocado",
        linkedin: "https://www.linkedin.com/in/nycocado/",
        site: "https://nycocado.dev",
      },
      {
        name: "Lohanne Guedes",
        href: "https://github.com/lohanneguedes",
        linkedin: "https://www.linkedin.com/in/lohanneguedes/",
      },
      { name: "Kira Sousa", href: "https://github.com/Kira-Sousa" },
    ],
  },
  {
    title: "Angry Duck",
    area: "Networks & IoT",
    repo: "https://github.com/Ninjaok/Angry-Duck",
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
      {
        name: "Luan Ribeiro",
        href: "https://github.com/Ninjaok",
        linkedin: "https://www.linkedin.com/in/luan-kacio/",
        site: "https://www.ninja0k.com",
      },
      { name: "Adjami Regula", href: "https://github.com/CFZ13" },
    ],
  },
  {
    title: "Physics Simulator",
    area: "Desktop & Physics",
    repo: "https://github.com/nycocado/physics-simulator",
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
      {
        name: "Luan Ribeiro",
        href: "https://github.com/Ninjaok",
        linkedin: "https://www.linkedin.com/in/luan-kacio/",
        site: "https://www.ninja0k.com",
      },
      {
        name: "Nycolas Souza",
        href: "https://github.com/nycocado",
        linkedin: "https://www.linkedin.com/in/nycocado/",
        site: "https://nycocado.dev",
      },
      {
        name: "Lohanne Guedes",
        href: "https://github.com/lohanneguedes",
        linkedin: "https://www.linkedin.com/in/lohanneguedes/",
      },
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
        eyebrow={t.projectsEyebrow}
        lead={t.projectsLead}
        viewProjectLabel={t.viewProject}
        items={projects.map((p) => ({
          title: p.title,
          description: t[p.shortDescKey],
          slug: slugify(p.title),
        }))}
      />

      {projects.map((project, i) => (
        <ProjectSection
          key={project.title}
          id={slugify(project.title)}
          index={i}
          alt={i % 2 === 1}
          title={project.title}
          area={project.area}
          description={t[project.descKey]}
          techStack={project.techStack}
          participants={project.participants}
          images={project.images}
          repo={project.repo}
          lang={lang}
          participantsLabel={t.participantsLabel}
          kickerLabel={t.projectKicker}
          visitGithubLabel={t.visitGithub}
          profileLabel={t.profileBtn}
        />
      ))}

      <AboutMeSection lang={lang} t={t} />

      {/* Footer sempre em INK, como o About Me — ver modelo/TEMA.md */}
      <footer
        style={{
          padding: "26px 20px",
          textAlign: "center",
          borderTop: "1px solid #3a3e2b",
          backgroundColor: "var(--ink)",
          color: "#9aa07f",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} Luan Ribeiro. Todos os direitos reservados.
      </footer>
    </main>
  );
}

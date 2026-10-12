import type { ElementType } from "react";
import { Layers, Network, ShieldCheck, Zap } from "lucide-react";
import {
  SiCss, SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiGrafana, SiHtml5,
  SiJavascript, SiMysql, SiNeon, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma,
  SiPrometheus, SiReact, SiShadcnui, SiTailwindcss, SiTypescript, SiVite,
} from "react-icons/si";

interface Tech {
  label: string;
  Icon: ElementType;
  color: string; // brand color, shown on a light tile
}

// Add a new tech: one line here, then use its key in content.ts.
export const techMap = {
  react: { label: "React.js", Icon: SiReact, color: "#149ECA" },
  nextjs: { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  javascript: { label: "JavaScript", Icon: SiJavascript, color: "#D9B800" },
  html5: { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  css3: { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  vite: { label: "Vite", Icon: SiVite, color: "#646CFF" },
  shadcn: { label: "shadcn/ui", Icon: SiShadcnui, color: "#000000" },
  nodejs: { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  express: { label: "Express.js", Icon: SiExpress, color: "#000000" },
  rest: { label: "REST APIs", Icon: Network, color: "#3f3f46" },
  oauth: { label: "OAuth authentication", Icon: ShieldCheck, color: "#3f3f46" },
  serveractions: { label: "Server Actions", Icon: Zap, color: "#3f3f46" },
  middleware: { label: "Middleware", Icon: Layers, color: "#3f3f46" },
  postgresql: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  mysql: { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  prisma: { label: "Prisma ORM", Icon: SiPrisma, color: "#2D3748" },
  neon: { label: "Neon", Icon: SiNeon, color: "#00B37E" },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  git: { label: "Git", Icon: SiGit, color: "#F05032" },
  github: { label: "GitHub", Icon: SiGithub, color: "#181717" },
  githubactions: { label: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  prometheus: { label: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
  grafana: { label: "Grafana", Icon: SiGrafana, color: "#F46800" },
} satisfies Record<string, Tech>;

export type TechId = keyof typeof techMap;

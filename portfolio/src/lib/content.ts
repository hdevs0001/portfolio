// All placeholder content lives here. Replace with your own.
import type {
  NavLink,
  Project,
  SocialLink,
  TechGroup,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Harmanpreet Singh",
  initials: "HS",
  // avatar:"/avatar.jpg",
  logo: "HS",
  role: "Software Developer",
  verified: true,
  bio: "Software developer building web applications and AI-powered products that feel fast and thoughtful.",
  email: "hdevs0001@gmail.com",
  bookingUrl: "https://cal.com/your-handle",
  footerNote: "Built with care, late nights, coffee",
  banner: "/bv.mp4", // e.g. "/banner.jpg" (put the file in /public). Empty = placeholder.
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const techStack: TechGroup[] = [
  {
    title: "Frontend",
    items: [
      "react",
      "nextjs",
      "typescript",
      "javascript",
      "html5",
      "css3",
      "tailwind",
      "vite",
      "shadcn",
    ],
  },
  {
    title: "Backend",
    items: [
      "nodejs",
      "express",
      "rest",
      "oauth",
      "serveractions",
      "middleware",
    ],
  },
  { title: "Database & ORM", items: ["postgresql", "mysql", "prisma", "neon"] },
  {
    title: "DevOps & Tools",
    items: [
      "docker",
      "git",
      "github",
      "githubactions",
      "prometheus",
      "grafana",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "ClientFlow",
    description:
      "Clientflow Manage Clients, Projects & Invoices From OnePowerful Workspace",
    stack: ["nextjs", "typescript", "postgresql", "prisma"],
    liveUrl: "https://clientflow1of1.vercel.app",
    repoUrl: "https://github.com/hdevs0001/clientFlow",
    detailsUrl: "https://github.com/hdevs0001/clientFlow/blob/main/README.md",
    image: "/clientflow.png",
  },
  {
    name: "HireFlow AI",
    description:
      "The main goal of building this project is to fast the hiring process of the candidates and resumes. ",
    stack: ["nextjs", "nodejs", "express", "mysql"],
    liveUrl: "https://github.com/hdevs0001/HireflowAi",
    repoUrl: "https://github.com/hdevs0001/HireflowAi",
    detailsUrl: "https://github.com/hdevs0001/HireflowAi/blob/main/README.md",
    image: "/hireflow.png",
  },
  {
    name: "DOCMIND AI",
    description:
      "Docmind ai is the RAG project through which you can talk to any kind of PDF ",
    stack: ["nextjs", "react", "tailwind", "neon"],
    liveUrl: "https://github.com/hdevs0001/DOCMIND-AI",
    repoUrl: "https://github.com/hdevs0001/DOCMIND-AI",
    detailsUrl: "https://github.com/hdevs0001/DOCMIND-AI",
    image: "/docmind.png",
  },
  {
    name: "Inventory Manager",
    description:
      " The main goal of building this project is to learn monitoring and alerting using Promotheus and Grafana.",
    stack: ["nodejs", "docker", "prometheus", "grafana"],
    liveUrl: "https://github.com/hdevs0001/Inventory-Manager",
    repoUrl: "https://github.com/hdevs0001/Inventory-Manager",
    detailsUrl: "https://github.com/hdevs0001/Inventory-Manager",
    image: "/i.png",
  },
];

export const socials: SocialLink[] = [
  { label: "X", href: "https://x.com/Harman1OF1", icon: "x" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harmanpreet-singh-96292241a",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/hdevs0001", icon: "github" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: "resume",
  },
];

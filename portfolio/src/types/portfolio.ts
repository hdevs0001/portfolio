import type { TechId } from "@/lib/tech";

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  image?: string; // e.g. "/projects/atlas.png" in /public. Empty = placeholder.
  stack: TechId[];
  liveUrl: string;
  repoUrl: string;
  detailsUrl: string;
}

export interface TechGroup {
  title: string;
  items: TechId[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "x" | "github" | "linkedin" | "mail" | "resume";
}

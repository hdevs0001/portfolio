import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig, socials } from "@/lib/content";

const iconBtn =
  "flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:text-foreground";

export default function Footer() {
  const link = (icon: string) => socials.find((s) => s.icon === icon);
  const github = link("github");
  const x = link("x");
  const linkedin = link("linkedin");

  return (
    <footer className="border-t border-line">
      <div className="page-col flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="mt-1 text-muted">{siteConfig.footerNote}</p>
        </div>

        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-700 to-indigo-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,70,255,0.45)] transition-transform duration-200 hover:scale-[1.03]"
            >
              <SocialIcon icon="github" className="size-4" />
              GitHub
            </a>
          )}
          {x && (
            <a href={x.href} target="_blank" rel="noopener noreferrer" aria-label="X" className={iconBtn}>
              <SocialIcon icon="x" className="size-4" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconBtn}>
              <SocialIcon icon="linkedin" className="size-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

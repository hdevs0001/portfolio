import { ArrowRight, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";
import TechTile from "@/components/ui/TechTile";
import { projects } from "@/lib/content";

const iconLink =
  "rounded-md p-2 text-muted transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground";

export default function Projects() {
  return (
    <section id="projects" className="page-col scroll-mt-20">
      <div className="border-t border-line py-14">
        <p className="text-sm text-muted">Featured</p>
        <h2 className="mt-1 text-4xl font-bold tracking-tight">Projects</h2>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-line transition-colors duration-300 hover:border-foreground/40"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-line">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={`${p.name} preview`} className="h-full w-full object-cover" />
                ) : (
                  <div
                    aria-hidden="true"
                    className="banner-placeholder flex h-full w-full items-center justify-center text-6xl font-bold text-foreground/25"
                  >
                    {p.name[0]}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <div className="flex shrink-0">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} live site`} className={iconLink}>
                      <Globe size={18} aria-hidden="true" />
                    </a>
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} source code`} className={iconLink}>
                      <SocialIcon icon="github" className="size-[18px]" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>

                <p className="mt-6 text-sm text-muted">Technologies</p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-2">
                    {p.stack.map((id) => (
                      <li key={id}>
                        <TechTile id={id} size="sm" />
                      </li>
                    ))}
                  </ul>
                  <Button href={p.detailsUrl} variant="secondary" className="shrink-0">
                    View Details <ArrowRight size={14} aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

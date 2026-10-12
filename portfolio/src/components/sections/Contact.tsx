import { siteConfig, socials } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="page-col scroll-mt-20">
      <div className="border-t border-line py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-6 inline-block break-all text-2xl underline decoration-foreground/30 underline-offset-8 transition-colors duration-200 hover:decoration-foreground sm:text-3xl"
        >
          {siteConfig.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {socials
            .filter((s) => s.href.startsWith("http"))
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

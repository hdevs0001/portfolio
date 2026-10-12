import { BadgeCheck, CalendarDays, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig, socials } from "@/lib/content";
import Media from "@/components/ui/Media";

// Each [data-hero-item] is revealed by the intro timeline (fade-up, staggered).
export default function Profile() {
  return (
    <section id="home" className="page-col scroll-mt-20 pb-14 pt-8">
      <div data-hero-item>
        <div className="h-44 w-full overflow-hidden rounded-xl border border-line sm:h-52">
          {siteConfig.banner ? (
            <Media
              src={siteConfig.banner}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="banner-placeholder h-full w-full" />
          )}
        </div>
        <div className="relative -mt-14 ml-2 flex size-28 items-center justify-center rounded-full border-4 border-background bg-foreground text-3xl font-bold text-background sm:-mt-16 sm:size-32">
          {siteConfig.initials}
        </div>
      </div>

      <div data-hero-item className="mt-5">
        <h1 className="flex items-center gap-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
          {siteConfig.verified && (
            <BadgeCheck
              aria-label="Verified"
              className="size-7 shrink-0 fill-sky-500 text-background sm:size-8"
            />
          )}
        </h1>
        <p className="mt-1 text-lg text-muted">{siteConfig.role}</p>
      </div>

      <div data-hero-item className="mt-6 flex flex-wrap gap-3">
        {/* <Button href={siteConfig.bookingUrl}>
          <CalendarDays size={16} aria-hidden="true" /> Book a call
        </Button> */}
        <Button href={`mailto:${siteConfig.email}`} variant="secondary">
          <Mail size={16} aria-hidden="true" /> Email me
        </Button>
      </div>

      <p
        data-hero-item
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
      >
        {siteConfig.bio}
      </p>

      <ul data-hero-item className="mt-6 flex flex-wrap gap-1">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block rounded-md p-2 text-muted transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
            >
              <SocialIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

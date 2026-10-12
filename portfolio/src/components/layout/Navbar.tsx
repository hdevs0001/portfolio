"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { navLinks, siteConfig } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Build one paused timeline: panel height + fade, then links stagger in.
  // play() opens it, reverse() closes it with the exact same motion.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const ctx = gsap.context(() => {
      const items = panel.querySelectorAll("[data-menu-item]");
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        panel,
        { height: 0, autoAlpha: 0 },
        { height: "auto", autoAlpha: 1, duration: 0.45, ease: "power3.inOut" },
      ).fromTo(
        items,
        { y: -12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out", stagger: 0.06 },
        "-=0.2",
      );
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) tl.timeScale(50);
      tlRef.current = tl;
    }, panel);

    return () => {
      ctx.revert();
      tlRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (open) tl.play();
    else if (tl.time() > 0) tl.reverse();
  }, [open]);

  // Close with Escape, or when the viewport grows to desktop size.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="page-col flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight">
          {siteConfig.logo}
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Primary" className="mr-2 hidden items-center md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-foreground/10 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className="menu-panel absolute inset-x-0 top-full border-b border-line bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="page-col flex flex-col py-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-menu-item
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-2xl font-semibold tracking-tight last:border-b-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

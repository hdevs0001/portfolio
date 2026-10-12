import gsap from "gsap";
import { INTRO_TIMING as T } from "@/lib/intro-config";

interface IntroTargets {
  overlay: HTMLElement;
  text: HTMLElement;
  hero: HTMLElement[];
}

/** Builds the whole intro as ONE GSAP timeline (no setTimeout anywhere). */
export function buildIntroTimeline(
  { overlay, text, hero }: IntroTargets,
  onComplete: () => void,
) {
  // Blur is expensive on phones, so only use it on larger screens.
  const blur = window.matchMedia("(min-width: 768px)").matches ? 12 : 0;

  const tl = gsap.timeline({ onComplete });

  tl
    // 1. Entrance
    .fromTo(
      text,
      { opacity: 0, scale: 0.85, filter: `blur(${blur}px)` },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: T.enter, ease: "power3.out" },
    )
    // 2 + 3. Hold, then exit (the hold is just a position offset on the timeline)
    .to(
      text,
      { opacity: 0, scale: 1.08, y: -24, filter: `blur(${blur}px)`, duration: T.exit, ease: "power2.in" },
      `+=${T.hold}`,
    )
    // 4a. Overlay slides out of the viewport
    .to(overlay, { yPercent: -100, duration: T.slide, ease: "power4.inOut" }, ">-0.1")
    // 4b. Hero content fades up while the overlay is leaving
    .fromTo(
      hero,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: T.heroStagger,
        clearProps: "transform",
      },
      `<${T.heroDelay}`,
    );

  return tl;
}

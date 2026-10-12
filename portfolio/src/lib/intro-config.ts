// Tweak the intro here. No GSAP import, so it is safe to use in server files.
export const INTRO_STORAGE_KEY = "portfolio:intro-seen";

export const INTRO_TIMING = {
  enter: 0.8, // "GPT" fades/scales in
  hold: 1.9, // stays centered
  exit: 0.7, // "GPT" fades/blurs out
  slide: 0.9, // overlay slides up
  heroDelay: 0.35, // hero starts this long after the slide begins
  heroStagger: 0.12,
} as const;

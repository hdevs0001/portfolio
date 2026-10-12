"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { buildIntroTimeline } from "@/lib/animations";
import { INTRO_STORAGE_KEY } from "@/lib/intro-config";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Runs the intro only when the inline boot script in layout.tsx set
 * <html data-intro="play">. Safe under React Strict Mode: the effect is
 * reverted by gsap.context().revert() and rebuilt, and the "seen" flag is
 * only written once the timeline actually finishes.
 */
export function useIntroAnimation(
  overlayRef: RefObject<HTMLElement | null>,
  textRef: RefObject<HTMLElement | null>,
) {
  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;
    const overlay = overlayRef.current;
    const text = textRef.current;
    if (!overlay || !text || root.dataset.intro !== "play") return;
    // Start the signature only now, so its own animation is in sync with the timeline.
    text.querySelectorAll<HTMLImageElement>("img[data-src]").forEach((img) => {
      img.src = img.dataset.src ?? "";
    });
    const finish = () => {
      try {
        sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
      } catch {
        /* storage unavailable: intro simply replays next visit */
      }
      root.dataset.intro = "done"; // hides overlay, unlocks scroll
    };

    const ctx = gsap.context(() => {
      const hero = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
      buildIntroTimeline({ overlay, text, hero }, finish);
    });

    return () => ctx.revert();
  }, [overlayRef, textRef]);
}

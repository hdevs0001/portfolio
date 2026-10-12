"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Lenis smooth scrolling, driven by GSAP's ticker so both share one clock.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 } }); // -80 = sticky navbar

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Don't let people scroll while the intro overlay is playing.
    const sync = () => (root.dataset.intro === "play" ? lenis.stop() : lenis.start());
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-intro"] });

    return () => {
      observer.disconnect();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}

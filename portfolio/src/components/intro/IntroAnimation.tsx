// "use client";

// import { useRef } from "react";
// import { useIntroAnimation } from "@/hooks/useIntroAnimation";

// export default function IntroAnimation() {
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLSpanElement>(null);

//   useIntroAnimation(overlayRef, textRef);

//   return (
//     <div
//       ref={overlayRef}
//       aria-hidden="true"
//       className="intro-overlay fixed inset-0 z-[100] h-dvh w-screen items-center justify-center border-b border-line bg-background"
//     >
//       <span
//         ref={textRef}
//         className="select-none text-[clamp(5rem,22vw,16rem)] font-bold leading-none tracking-tighter text-foreground opacity-0"
//       >
//         Harman
//       </span>
//     </div>
//   );
// }


"use client";

import { useRef } from "react";
import { useIntroAnimation } from "@/hooks/useIntroAnimation";

export default function IntroAnimation() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useIntroAnimation(overlayRef, contentRef);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="intro-overlay fixed inset-0 z-[100] h-dvh w-screen items-center justify-center border-b border-line bg-background"
    >
      <div ref={contentRef} className="opacity-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-src="/signature.svg"
          alt=""
          draggable={false}
          className="aspect-[123.3/37.8] w-[min(80vw,640px)] select-none invert dark:invert-0"
        />
      </div>
    </div>
  );
}
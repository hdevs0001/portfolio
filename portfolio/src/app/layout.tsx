import type { Metadata } from "next";
import { Geist } from "next/font/google";
import IntroAnimation from "@/components/intro/IntroAnimation";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { INTRO_STORAGE_KEY } from "@/lib/intro-config";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Harmanpreet Singh | Software Developer",
  description: "Portfolio of a software developer building thoughtful digital experiences.",
};

// Runs before first paint. (1) Theme: dark unless the visitor saved "light".
// (2) Intro: play once per session; reduced-motion users skip it.
const bootScript = `(function(){var d=document.documentElement;try{if(localStorage.getItem("theme")!=="light")d.classList.add("dark");}catch(e){d.classList.add("dark");}try{var m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var s=sessionStorage.getItem("${INTRO_STORAGE_KEY}");d.dataset.intro=(m||s)?"done":"play";}catch(e){d.dataset.intro="done";}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the boot script edits <html> before hydration.
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <IntroAnimation />
        <SmoothScroll />
        <div aria-hidden="true" className="bg-grid pointer-events-none fixed inset-0 -z-10" />
        {children}
      </body>
    </html>
  );
}

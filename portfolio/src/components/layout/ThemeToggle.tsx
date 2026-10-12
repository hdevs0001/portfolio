"use client";

import { Moon, Sun } from "lucide-react";

// No React state needed: the <html class="dark"> flag is the source of truth,
// and the icons swap with the `dark:` variant.
export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="rounded-full p-2 text-muted transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
    >
      <Sun size={18} className="hidden dark:block" aria-hidden="true" />
      <Moon size={18} className="block dark:hidden" aria-hidden="true" />
    </button>
  );
}

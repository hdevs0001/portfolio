import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const variants = {
  primary: "bg-foreground text-background hover:bg-foreground/85",
  secondary: "border border-line text-foreground hover:bg-foreground/10",
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

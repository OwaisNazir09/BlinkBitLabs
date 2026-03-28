"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { springSmooth } from "@/lib/motion-variants";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12)] hover:bg-white/95 hover:shadow-[0_8px_40px_rgba(255,255,255,0.12)]",
  secondary:
    "border border-white/25 bg-transparent text-white backdrop-blur-sm hover:border-white/45 hover:bg-white/[0.06]",
  ghost: "text-white/85 hover:text-white underline-offset-4 hover:underline",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  const content = (
    <motion.span
      className={`${base} ${styles[variant]} ${className}`}
      whileHover={{ scale: variant === "ghost" ? 1 : 1.02 }}
      whileTap={{ scale: 0.985 }}
      transition={springSmooth}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className="inline-block border-0 bg-transparent p-0">
      {content}
    </button>
  );
}

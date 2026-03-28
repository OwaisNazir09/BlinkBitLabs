import type { Variants } from "framer-motion";

/** Smooth deceleration — feels less snappy than default ease-out */
const smooth = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.06,
    },
  },
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.015,
    transition: { duration: 0.45, ease: smooth },
  },
};

export const cardGlow: Variants = {
  rest: { boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" },
  hover: {
    boxShadow: "0 0 48px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
    transition: { duration: 0.45, ease: smooth },
  },
};

export const smoothEase = smooth;

export const springSmooth = { type: "spring" as const, stiffness: 220, damping: 32, mass: 0.85 };

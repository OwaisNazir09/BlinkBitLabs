"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, smoothEase, staggerContainer } from "@/lib/motion-variants";

const HeroCanvas = dynamic(
  () =>
    import("@/components/three/HeroCanvas").then((m) => ({
      default: m.HeroCanvas,
    })),
  { ssr: false, loading: () => null },
);

export function HeroSection() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = { x, y };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-20" aria-hidden />
      {!reduceMotion && <HeroCanvas mouseRef={mouseRef} />}

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/55"
          >
            Digital agency · India
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Innovation at the{" "}
            <span className="text-white/95">Speed of a Blink</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            We design and build modern web, software, and digital solutions that
            empower businesses to grow faster—with clarity, craft, and momentum.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#contact" variant="primary" aria-label="Get started — go to contact">
              Get Started
            </Button>
            <Button href="#portfolio" variant="secondary" aria-label="View our work">
              View Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.1, duration: 0.85, ease: smoothEase }}
        aria-hidden
      >
        <div className="h-10 w-6 rounded-full border border-white/25" />
        <motion.div
          className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/50"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
        />
      </motion.div>
    </section>
  );
}

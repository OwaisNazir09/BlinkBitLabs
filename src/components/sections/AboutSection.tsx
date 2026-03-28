"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

const AboutCanvas = dynamic(
  () =>
    import("@/components/three/AboutCanvas").then((m) => ({
      default: m.AboutCanvas,
    })),
  { ssr: false, loading: () => null },
);

const lines = [
  "BlinkBit Labs is a forward-thinking technology studio founded in 2025. We partner with ambitious teams to ship products that feel fast, polished, and unmistakably modern.",
  "Our stack spans web, mobile, and cloud—with immersive 3D moments where they drive clarity, not clutter. Every interface is built with accessibility and performance in mind.",
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      {!reduceMotion && <AboutCanvas />}
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.25 }}
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <motion.h2
              id="about-heading"
              variants={fadeInUp}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              About BlinkBit Labs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/45"
            >
              Modern tech · Human craft
            </motion.p>
          </div>
          <div className="space-y-6">
            {lines.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-lg leading-relaxed text-white/60"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

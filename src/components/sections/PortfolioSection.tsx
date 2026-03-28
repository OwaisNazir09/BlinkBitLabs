"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

const projects = [
  {
    title: "Commerce Platform",
    tag: "Web · Performance",
    description: "Headless storefront with sub-second interactions and resilient checkout.",
  },
  {
    title: "Operations Dashboard",
    tag: "SaaS · Data",
    description: "Real-time telemetry and role-aware views for distributed teams.",
  },
  {
    title: "Mobile Companion",
    tag: "iOS · Android",
    description: "Offline-first field workflows synced with cloud policy and audit trails.",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springConfig = { stiffness: 120, damping: 34, mass: 0.9 };
  const rotateX = useSpring(
    useTransform(y, [0, 1], [10, -10]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [0, 1], [-14, 14]),
    springConfig,
  );

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformPerspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.h2
            id="portfolio-heading"
            variants={fadeInUp}
            className="font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Selected work
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-white/55">
            Placeholder case studies—swap in real screenshots, metrics, and links when
            ready.
          </motion.p>

          <ul className="mt-14 grid gap-8 lg:grid-cols-3">
            {projects.map((p) => (
              <motion.li key={p.title} variants={fadeInUp}>
                <TiltCard className="h-full">
                  <article
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.02] p-6 backdrop-blur-md transition-[border-color,box-shadow] duration-500 ease-out hover:border-white/20 hover:shadow-[0_28px_70px_rgba(0,0,0,0.65)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="relative z-10 flex flex-1 flex-col">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                        {p.tag}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                        {p.description}
                      </p>
                      <span className="mt-6 inline-flex text-sm font-semibold text-white/80">
                        View case study →
                      </span>
                    </div>
                  </article>
                </TiltCard>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

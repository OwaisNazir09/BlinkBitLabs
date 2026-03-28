"use client";

import { motion } from "framer-motion";
import { fadeInUp, smoothEase, staggerContainer } from "@/lib/motion-variants";

const services = [
  {
    title: "Custom Applications",
    description:
      "Tailored software that fits your workflows—scalable, secure, and built to last.",
  },
  {
    title: "API Integration",
    description:
      "Connect systems and data with robust APIs, webhooks, and observability baked in.",
  },
  {
    title: "Database Design",
    description:
      "Schema design, performance tuning, and migrations you can trust at scale.",
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feel experiences across iOS and Android with a unified product vision.",
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces that feel inevitable—research, systems, and pixel-perfect execution.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.h2
            id="services-heading"
            variants={fadeInUp}
            className="font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-3 max-w-2xl text-white/55"
          >
            End-to-end delivery—from discovery to launch—with motion, depth, and
            performance as first-class citizens.
          </motion.p>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.li
                key={s.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.5, ease: smoothEase },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-[box-shadow,border-color] duration-500 ease-out hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-lg font-bold text-white/90 shadow-inner"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

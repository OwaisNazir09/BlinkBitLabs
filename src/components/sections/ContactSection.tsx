"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.25 }}
          variants={staggerContainer}
          className="overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-black p-8 shadow-[0_0_80px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-12 lg:p-14"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.h2
                id="contact-heading"
                variants={fadeInUp}
                className="font-display text-3xl font-bold text-white sm:text-4xl"
              >
                Let&apos;s build something amazing together
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 text-white/55">
                Tell us about your product, timeline, and goals—we&apos;ll respond with
                next steps.
              </motion.p>
              <motion.ul
                variants={fadeInUp}
                className="mt-8 space-y-4 text-sm text-white/80"
              >
                <li>
                  <span className="text-white/45">Email · </span>
                  <a
                    className="font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href="mailto:blinkbitlabs@gmail.com"
                  >
                    blinkbitlabs@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-white/45">Phone · </span>
                  <a
                    className="font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href="tel:+917006968285"
                  >
                    +91 7006968285
                  </a>
                </li>
                <li>
                  <span className="text-white/45">Location · </span>
                  India
                </li>
              </motion.ul>
            </div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              aria-label="Contact form"
              noValidate
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-white/12 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/35 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-white/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/12 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/35 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-white/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/12 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/35 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-white/40"
                  placeholder="What are we building?"
                />
              </div>
              <div className="pt-2">
                <Button type="submit" variant="primary" aria-label="Send message">
                  Send message
                </Button>
              </div>
              {status === "sent" && (
                <p className="text-sm text-white/70" role="status">
                  Thanks—this demo doesn&apos;t post to a server; wire your API here.
                </p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

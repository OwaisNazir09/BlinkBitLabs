"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { smoothEase } from "@/lib/motion-variants";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] transition-colors duration-500"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: smoothEase }}
      style={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.78)" : "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label="BlinkBit Labs home"
        >
          BlinkBit<span className="text-white/70">Labs</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/55 transition-colors duration-300 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/25 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-out hover:border-white/45 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 text-white transition-colors hover:border-white/25 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span aria-hidden className="flex flex-col gap-1.5">
              <motion.span
                className="block h-0.5 w-5 origin-center rounded bg-white"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: smoothEase }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded bg-white"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.25, ease: smoothEase }}
              />
              <motion.span
                className="block h-0.5 w-5 origin-center rounded bg-white"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: smoothEase }}
              />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="border-t border-white/[0.08] bg-black/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-white/85 transition-colors duration-200 hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="block rounded-full border border-white/20 bg-white/[0.06] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

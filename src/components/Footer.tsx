"use client";

import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion-variants";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/[0.08] px-4 py-14 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">
            BlinkBit<span className="text-white/60">Labs</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-white/45">
            © {new Date().getFullYear()} BlinkBit Labs — Innovation at the Speed of a
            Blink.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <motion.a
                  href={l.href}
                  className="transition-colors duration-300 ease-out hover:text-white"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  {l.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic text-sm text-white/50">
          <a
            href="mailto:blinkbitlabs@gmail.com"
            className="block transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            blinkbitlabs@gmail.com
          </a>
          <a
            href="tel:+917006968285"
            className="mt-2 block transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            +91 7006968285
          </a>
          <span className="mt-2 block">India</span>
        </address>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { smoothEase } from "@/lib/motion-variants";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <motion.main
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className="relative flex min-h-screen flex-col"
      >
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import LandscapeBackground from "./LandscapeBackground";
import { fadeInUp } from "@/lib/animations";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <LandscapeBackground variant="cta" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center px-2 pb-16 pt-24 text-center sm:px-8 sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
          <motion.div
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative max-w-3xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.55)] min-[390px]:text-4xl sm:text-5xl lg:text-6xl">
              Ready to build your app?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-zinc-200 drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:mt-5 sm:text-lg md:text-xl">
              Turn your idea into a real product in the App Store.
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href="/start-project"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black/90 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all hover:bg-black min-[390px]:w-auto"
              >
                Start a Project
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/15" />

        <footer className="flex flex-col items-center justify-between gap-5 py-6 text-center text-sm text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:flex-row sm:gap-6 sm:py-8 sm:text-left md:py-10">
          <p className="order-3 max-w-full sm:order-1">
            © {new Date().getFullYear()} Origin Labs. All rights reserved.
          </p>

          <nav className="order-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:order-2 sm:gap-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:martimicm1010@gmail.com"
            className="order-2 inline-flex max-w-full items-center justify-center gap-2 break-all transition-colors hover:text-white sm:order-3 sm:break-normal"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            martimicm1010@gmail.com
          </a>
        </footer>

        <div
          aria-hidden
          className="pointer-events-none relative -mb-6 overflow-hidden sm:-mb-8 md:-mb-12"
        >
          <p className="select-none text-center text-[clamp(3rem,18vw,13rem)] font-bold uppercase leading-[0.85] tracking-tighter text-white/15 translate-y-[18%]">
            Origin Labs
          </p>
        </div>
      </div>
    </section>
  );
}

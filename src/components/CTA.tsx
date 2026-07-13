"use client";

import { motion } from "framer-motion";
import LandscapeBackground from "./LandscapeBackground";
import { fadeInUp } from "@/lib/animations";
import { CAL_COM_URL } from "@/lib/site";

const footerColumns = [
  {
    title: "Products",
    links: [
      { href: "/products?app=teeup", label: "TeeUp" },
      { href: "/products?app=helixops", label: "HelixOps" },
      { href: "/products?app=multiball.co", label: "MultiBall.co" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/start-project?plan=landing", label: "Landing Pages" },
      { href: "/start-project?plan=business", label: "Business Websites" },
      { href: "/start-project?plan=ai", label: "AI Applications" },
      { href: "/start-project?plan=native", label: "iPhone Apps" },
      { href: "/start-project?plan=native", label: "macOS Apps" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#pricing", label: "Pricing" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://github.com/Martimic10", label: "GitHub", external: true as const },
      { href: "https://x.com/originlabshq", label: "X", external: true as const },
      { href: "https://www.linkedin.com/company/originlabs-v1/", label: "LinkedIn", external: true as const },
    ],
  },
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
              Ready to build something exceptional?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-zinc-200 drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:mt-5 sm:text-lg md:text-xl">
              Whether you&apos;re launching a startup, redesigning your
              business website, building an AI-powered application, or
              creating a native Apple experience, Origin Labs can help bring
              your vision to life.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap min-[390px]:justify-center sm:mt-10 sm:gap-4">
              <a
                href="/start-project"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black/90 px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all hover:bg-black min-[390px]:w-auto"
              >
                Start Your Project
                <span aria-hidden>→</span>
              </a>
              <a
                href={CAL_COM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 min-[390px]:w-auto"
              >
                Book a Discovery Call
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/15" />

        <footer className="py-10 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] sm:py-14 md:py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={
                          "external" in link && link.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          "external" in link && link.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium text-white transition-colors hover:text-white/70"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center text-sm sm:mt-12 sm:flex-row sm:pt-8 sm:text-left">
            <p className="max-w-full text-white/90">
              © {new Date().getFullYear()} Origin Labs. All rights reserved.
            </p>

            <a
              href="mailto:martimicm1010@gmail.com"
              className="inline-flex max-w-full items-center justify-center gap-2 break-all text-white/90 transition-colors hover:text-white sm:break-normal"
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
          </div>
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

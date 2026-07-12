"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { CAL_COM_URL } from "@/lib/site";

const tiers = [
  {
    name: "Landing Page",
    price: "$995",
    priceNote: "starting at",
    description:
      "A beautiful, high-converting page built to turn visitors into customers.",
    features: [
      "Custom design",
      "Responsive development",
      "Contact forms",
      "SEO foundations",
      "Performance optimization",
    ],
    cta: "Get started",
    href: "/start-project?plan=landing",
  },
  {
    name: "Business Website",
    price: "$2,000",
    priceNote: "starting at",
    description:
      "A modern website that helps your business establish credibility and grow online.",
    features: [
      "2–5 pages",
      "Custom design",
      "Responsive development",
      "Analytics",
      "SEO foundations",
      "CMS integration (optional)",
    ],
    cta: "Start a project",
    href: "/start-project?plan=business",
    featured: true,
  },
  {
    name: "AI Applications",
    price: "$5,000",
    priceNote: "starting at",
    description:
      "Intelligent software powered by modern AI technologies, built to scale.",
    features: [
      "AI integrations",
      "Authentication",
      "Backend",
      "APIs",
      "Dashboards",
      "Deployment",
    ],
    cta: "Start a project",
    href: "/start-project?plan=ai",
  },
  {
    name: "Native Apps",
    price: "$3,000",
    priceNote: "starting at",
    description:
      "Beautiful SwiftUI applications built for iPhone and macOS.",
    features: [
      "SwiftUI development",
      "Testing",
      "App Store preparation",
      "Deployment assistance",
    ],
    cta: "Start a project",
    href: "/start-project?plan=native",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tier = tiers[activeIndex];
  const featured = Boolean(tier.featured);

  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Transparent starting prices
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Every project is unique, but these are typical starting points.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-10 flex flex-wrap justify-center gap-2 rounded-3xl border border-white/8 bg-white/3 p-2 sm:mt-12 sm:inline-flex">
            {tiers.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition-all sm:px-5 ${
                  i === activeIndex
                    ? "bg-white text-black shadow-lg shadow-black/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
            >
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {tier.name}
                  </h3>
                  {featured && (
                    <span className="rounded-2xl border border-orange-400/25 bg-orange-400/10 px-3 py-1 text-xs font-medium tracking-wide text-orange-400 uppercase">
                      Most popular
                    </span>
                  )}
                </div>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {tier.description}
                </p>

                <p className="mt-8 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                  Includes
                </p>
                <ul className="mt-4 flex-1 space-y-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:rounded-3xl sm:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(251,146,60,0.22),transparent_60%)]" />
                  <p className="relative text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
                    Origin Labs
                  </p>
                  <p className="relative mt-10 text-xs font-medium tracking-widest text-zinc-400 uppercase">
                    {tier.name}
                  </p>
                  <div className="relative mt-2 flex items-end gap-2">
                    <span className="bg-linear-to-r from-orange-300 to-orange-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                      {tier.price}
                    </span>
                    <span className="mb-1.5 text-sm text-zinc-500">+</span>
                  </div>
                  <p className="relative mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                    {tier.priceNote}
                  </p>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
                  <a
                    href={tier.href}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
                  >
                    {tier.cta}
                  </a>
                  <a
                    href={CAL_COM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
                  >
                    Book a Discovery Call
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-5 border-t border-white/8 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-base text-zinc-400 sm:text-lg">
              Need something custom? Let&apos;s build it together.
            </p>
            <a
              href={CAL_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 sm:w-auto"
            >
              Book a Discovery Call
              <span aria-hidden>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { staggerContainer, scaleIn } from "@/lib/animations";
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

        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:items-center"
        >
          {tiers.map((tier) => {
            const featured = "featured" in tier && tier.featured;

            return (
              <motion.article
                key={tier.name}
                variants={scaleIn}
                whileHover={
                  featured ? { rotate: -1, y: -6 } : { y: -6 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col rounded-2xl border p-6 transition-shadow duration-300 sm:rounded-3xl sm:p-8 md:p-9 ${
                  featured
                    ? "border-white/15 bg-[#0A0A0A] shadow-2xl shadow-black/50 md:-rotate-1 lg:scale-[1.03] lg:py-12"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.14] hover:shadow-xl hover:shadow-black/25"
                }`}
              >
                {featured && (
                  <span className="mb-4 inline-flex w-fit rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-400 uppercase">
                    Most popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <div className="mt-5 flex items-end gap-2">
                    <span
                      className={`text-3xl font-bold tracking-tight min-[390px]:text-4xl sm:text-5xl ${
                        featured
                          ? "bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                          : "text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="mb-1.5 text-sm text-zinc-500">+</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                    {tier.priceNote}
                  </p>
                </div>

                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    featured ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {tier.description}
                </p>

                <p className="mt-8 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                  Includes
                </p>
                <ul className="mt-4 flex-1 space-y-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all sm:w-auto ${
                    featured
                      ? "bg-white text-black hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
                      : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-5 border-t border-white/[0.08] pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
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

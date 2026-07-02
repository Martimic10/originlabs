"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { staggerContainer, scaleIn } from "@/lib/animations";

const tiers = [
  {
    name: "Starter",
    price: "$2,500",
    priceNote: "starting at",
    description:
      "Launch your first version — a polished, production-ready product built for real users on any platform.",
    timeline: "2–3 weeks",
    features: [
      "Core feature set scoped for launch",
      "Native platform build (iOS, macOS, or web)",
      "Platform launch support",
      "Two design revision rounds",
      "Launch-ready polish",
    ],
    cta: "Get started",
    href: "/start-project?plan=mvp",
  },
  {
    name: "Growth",
    price: "$5,000",
    priceNote: "starting at",
    description:
      "Full-featured products with AI, backend integrations, and room to scale.",
    timeline: "4–6 weeks",
    features: [
      "Everything in Starter",
      "Custom design system",
      "Backend, API & AI integrations",
      "Analytics & onboarding flows",
      "90 days post-launch support",
    ],
    cta: "Start a project",
    href: "/start-project?plan=growth",
    featured: true,
  },
  {
    name: "Custom",
    price: "Custom",
    priceNote: "tailored to you",
    description:
      "Complex products, multi-phase roadmaps, and ongoing partnership for ambitious teams.",
    timeline: "Flexible",
    features: [
      "Dedicated product roadmap",
      "Complex AI, API & platform integrations",
      "Multi-platform expansion",
      "Ongoing development retainer",
      "Priority support & strategy",
    ],
    cta: "Let's talk",
    href: "/start-project?plan=custom",
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
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Invest in something
              <br className="hidden sm:block" />
              {" "}worth shipping
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Clear starting points for every stage — from first launch to full
              product builds. No hidden fees, no surprises.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="shrink-0 lg:max-w-xs">
            <p className="text-sm leading-relaxed text-zinc-500 sm:max-w-xs lg:text-right">
              Every project starts with a free discovery call. We&apos;ll scope
              the right fit before you commit.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center"
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

                <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {tier.timeline}
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
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
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.08] pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-zinc-500">
              Not sure which tier fits? We&apos;ll help you figure it out.
            </p>
            <a
              href="mailto:martimicm1010@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              martimicm1010@gmail.com
              <span aria-hidden>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";

const services = [
  {
    title: "Landing Pages",
    description:
      "Beautiful, high-converting landing pages built to turn visitors into customers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-11.18 0M12 3v6m0 0 3-3m-3 3-3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
      </svg>
    ),
    featured: true,
    href: "/start-project?plan=landing",
  },
  {
    title: "Business Websites",
    description:
      "Modern websites designed to help businesses establish credibility and grow online.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    href: "/start-project?plan=business",
  },
  {
    title: "Startup Websites",
    description:
      "Premium marketing websites for startups and SaaS companies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    href: "/start-project?plan=business",
  },
  {
    title: "AI Applications",
    description:
      "Intelligent software powered by modern AI technologies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    href: "/start-project?plan=ai",
  },
  {
    title: "Native iPhone Apps",
    description:
      "Beautiful SwiftUI applications built for Apple's ecosystem.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    href: "/start-project?plan=native",
  },
  {
    title: "Native macOS Apps",
    description:
      "Powerful desktop software designed specifically for macOS.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.129V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    href: "/start-project?plan=native",
  },
  {
    title: "Product Design",
    description:
      "Thoughtful UI/UX design focused on creating exceptional user experiences.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    href: "/start-project",
  },
  {
    title: "Ongoing Support",
    description:
      "Maintenance, feature development, and long-term product improvements.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    href: "/start-project",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              What We Build
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-400 sm:mt-4 sm:text-lg">
              End-to-end product development for founders who care about
              quality.
            </p>
            <p className="mt-1 max-w-lg text-base leading-relaxed text-zinc-500 sm:text-lg">
              From first sketch to launch — and everything after.
            </p>
          </div>

          <a
            href="/start-project"
            className="inline-flex w-full items-center justify-center self-start rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 sm:w-auto"
          >
            Get Started
          </a>
        </div>

        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {services.map((service) => {
            const featured = "featured" in service && service.featured;

            return (
              <motion.article
                key={service.title}
                variants={scaleIn}
                whileHover={featured ? { rotate: -2, y: -4 } : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex min-h-[260px] flex-col rounded-2xl border p-6 transition-shadow duration-300 sm:min-h-[300px] sm:rounded-3xl sm:p-8 md:p-9 ${
                  featured
                    ? "border-white/15 bg-[#0A0A0A] text-white shadow-2xl shadow-black/40 md:-rotate-2"
                    : "border-white/[0.08] bg-white/[0.05] hover:border-white/[0.14] hover:shadow-lg hover:shadow-black/20"
                }`}
              >
                <div
                  className={
                    featured ? "text-white" : "text-zinc-300 group-hover:text-white"
                  }
                >
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white sm:mt-8 sm:text-2xl">
                  {service.title}
                </h3>

                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    featured ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className={`mt-8 inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                    featured
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Learn more
                  <span aria-hidden className="text-base leading-none">
                    ›
                  </span>
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

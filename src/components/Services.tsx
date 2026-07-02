"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";

const services = [
  {
    title: "Product Launch",
    description:
      "From concept to shipped — a polished, production-ready product on any platform, built for real users.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-11.18 0M12 3v6m0 0 3-3m-3 3-3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
      </svg>
    ),
    featured: true,
    href: "/start-project?plan=mvp",
  },
  {
    title: "Product Design",
    description:
      "UX and UI systems for any platform — intuitive flows, sharp visuals, and details that feel inevitable.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    href: "/start-project",
  },
  {
    title: "AI Integration",
    description:
      "LLMs, voice, and smart workflows built into your product's core — not bolted on as an afterthought.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    href: "/start-project",
  },
  {
    title: "Native Development",
    description:
      "iOS, macOS, and beyond — Swift, SwiftUI, and modern platform tools for apps that feel truly at home.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    href: "/start-project",
  },
  {
    title: "Ongoing Support",
    description:
      "Maintenance, updates, and new features to keep your product running smoothly after launch.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    href: "/start-project",
  },
  {
    title: "Platform Launch",
    description:
      "Ship to the App Store, Mac App Store, or the web — with guidance on metadata, strategy, and release.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.105.2-2.164.568-3.147" />
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
              Our Services
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

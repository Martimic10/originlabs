"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const pillars = [
  {
    title: "Design First",
    description: "Every pixel has a purpose.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Product Focused",
    description: "We solve real problems — not just build features.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Built to Scale",
    description: "Built for today and ready for tomorrow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
];

export default function StudioDNA() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-white/2 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            We build products
            <br />
            <span className="bg-linear-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              people remember.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Design isn&apos;t decoration — it&apos;s how software earns trust.
            Whether we&apos;re building a startup website, an AI application,
            or a native Apple app, every interaction is crafted to feel
            intuitive, beautiful, and purposeful.
          </p>
        </ScrollReveal>

        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:mt-20 sm:gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl border border-white/6 bg-white/2 p-6 transition-all duration-300 hover:border-white/12 hover:bg-white/4 sm:rounded-3xl sm:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-300 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400 sm:mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:mt-3">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

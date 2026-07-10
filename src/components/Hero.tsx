"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";

const badges = ["Websites", "AI Applications", "iPhone Apps", "macOS Apps"];

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-black pt-40 sm:pt-52 md:pt-56 lg:pt-64">
      <Image
        src="/OriginLabs-hero-background.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="z-0 object-cover object-[54%_30%] saturate-[0.85] contrast-[1.05]"
      />
      {/* Base tint — brings the whole photo down so text always has a floor to read against */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-black/45" />
      {/* Radial vignette — darkest behind the headline, lighter toward the corners */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_80%_60%_at_50%_42%,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.2)_100%)]" />
      {/* Bottom fade — smooth transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-48 bg-linear-to-t from-black to-transparent sm:h-64" />
      {/* Top fade — keeps the navbar readable over bright sky */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-32 bg-linear-to-b from-black/70 to-transparent sm:h-40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-8 text-center sm:px-6 sm:pb-28 sm:pt-12 lg:pb-36 lg:pt-16">
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-xs font-medium tracking-widest text-zinc-400 uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:mb-4 sm:text-sm"
          >
            Origin Labs — Digital Product Studio
          </motion.p>

          <motion.h1
            variants={slideInLeft}
            className="text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.55)] min-[390px]:text-5xl sm:text-6xl lg:text-7xl"
          >
            Beautiful websites. Powerful apps.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Built to grow your business.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:mt-6 sm:text-lg"
          >
            Origin Labs is a digital product studio creating high-converting
            websites, AI-powered applications, and native Apple experiences.
            We build our own products and partner with ambitious founders and
            businesses to bring exceptional ideas to life.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex w-full flex-col items-center gap-3 min-[390px]:w-auto min-[390px]:flex-row min-[390px]:flex-wrap min-[390px]:justify-center sm:mt-10 sm:gap-4"
          >
            <a
              href="/start-project"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 min-[390px]:w-auto"
            >
              Start Your Project
            </a>
            <a
              href="/products"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/25 bg-black/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/35 min-[390px]:w-auto"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-12"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-2xl border border-white/25 bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.4)] backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

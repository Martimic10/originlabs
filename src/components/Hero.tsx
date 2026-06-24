"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import LandscapeBackground from "./LandscapeBackground";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const badges = ["Swift", "SwiftUI", "iOS Native", "Product Studio"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-40 sm:pt-52 md:pt-56 lg:pt-64"
    >
      <LandscapeBackground variant="hero" containerRef={ref} />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-12 md:gap-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-32 lg:pt-16">
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-xs font-medium tracking-widest text-zinc-400 uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:mb-4 sm:text-sm"
          >
            Origin Labs
          </motion.p>

          <motion.h1
            variants={slideInLeft}
            className="text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.55)] min-[390px]:text-5xl sm:text-6xl lg:text-7xl"
          >
            We build iOS apps that feel{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              inevitable.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300 drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:mt-6 sm:text-lg"
          >
            Design-first mobile apps built in Swift and SwiftUI. Crafted like
            products, not projects.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex w-full flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap sm:mt-10 sm:gap-4"
          >
            <a
              href="/products"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 min-[390px]:w-auto"
            >
              View Work
            </a>
            <a
              href="/start-project"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5 min-[390px]:w-auto"
            >
              Start a Project
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-2 sm:mt-12"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-2xl border border-white/25 bg-black/55 px-3 py-1.5 text-xs font-medium text-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.4)] backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate="visible"
          variants={slideInRight}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-[min(72vw,240px)] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[360px]">
            <Image
              src="/Hero-mockup.png"
              alt="Breezy expense sharing app on iPhone"
              width={1274}
              height={2690}
              priority
              className="h-auto w-full select-none drop-shadow-[0_32px_64px_rgba(0,0,0,0.55)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const badges = ["AI Lab", "Product Studio", "iOS & macOS", "Swift"];

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-black pt-40 sm:pt-52 md:pt-56 lg:pt-64">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      {/* Radial vignette — keeps centre clear, darkens edges for readability on all sizes */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
      {/* Bottom fade — smooth transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-t from-black to-transparent sm:h-56" />
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
            We build products that feel{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              inevitable.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300 drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:mt-6 sm:text-lg"
          >
            An independent AI lab building sharp, focused software. Crafted
            like products, not projects.
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
              src="/IMG_6099_iphone16.png"
              alt="TeeUp golf scoring app on iPhone"
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

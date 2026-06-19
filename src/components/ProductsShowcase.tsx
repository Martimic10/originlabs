"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/products";

function ProductSection({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      id={product.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-36 border-b border-white/[0.08] py-16 last:border-b-0 sm:py-20 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {product.name}
            </h2>
            <span
              className={`rounded-2xl border px-3 py-1 text-xs font-medium ${product.statusColor}`}
            >
              {product.status}
            </span>
          </div>

          <p className="mt-4 text-lg text-zinc-300 sm:text-xl">
            {product.tagline}
          </p>

          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {product.description}
          </p>

          <ul className="mt-8 space-y-3">
            {product.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm text-zinc-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:flex lg:justify-end">
          <ScreenshotCarousel
            screenshots={product.screenshots}
            product={product}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductsShowcase() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const app = searchParams.get("app");
    if (!app) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(app)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [searchParams]);

  return (
    <div className="relative pb-20 pt-44 sm:pb-28 sm:pt-52 md:pt-56">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Our Products
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Apps we&apos;re building
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
            Real products, not client work. Each one designed and built in-house
            with the same care we bring to every project.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {products.map((product, index) => (
            <ProductSection key={product.slug} product={product} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex justify-center border-t border-white/[0.08] pt-14"
        >
          <Link
            href="/start-project"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 min-[390px]:w-auto"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

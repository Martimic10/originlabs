"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import IPhoneMockup from "./IPhoneMockup";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";

const CAROUSEL_ORDER = ["helixops", "teeup"];

const carouselProducts = CAROUSEL_ORDER.map((slug) =>
  products.find((product) => product.slug === slug),
).filter((product): product is Product => Boolean(product));

function ArrowButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous product" : "Next product"}
      className={`absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-white/[0.14] sm:h-13 sm:w-13 ${className}`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        )}
      </svg>
    </button>
  );
}

function MacWindowMockup({ product }: { product: Product }) {
  return (
    <div className="w-[min(82vw,290px)] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 bg-zinc-800/90 px-3 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="mx-auto rounded bg-zinc-700/50 px-6 py-0.5 text-[9px] text-zinc-400">
          {product.name}
        </div>
      </div>
      <div className="flex" style={{ minHeight: 180, background: product.gradient }}>
        <div className="w-18 shrink-0 border-r border-white/[0.07] bg-black/25 p-2 space-y-1">
          <div className="rounded bg-white/[0.14] px-1.5 py-1.5 text-[8px] text-white/75">Today</div>
          <div className="px-1.5 py-1.5 text-[8px] text-white/25">Projects</div>
          <div className="px-1.5 py-1.5 text-[8px] text-white/25">Archive</div>
        </div>
        <div className="flex-1 p-3 space-y-2">
          <div className="flex gap-1.5">
            <div className="rounded bg-emerald-500/25 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-300">On track</div>
            <div className="rounded bg-white/[0.07] px-1.5 py-0.5 text-[8px] text-white/30">3 tasks</div>
          </div>
          <div className="rounded-lg bg-black/40 p-2 font-mono text-[8px] leading-relaxed text-white/60 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Ship landing page
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Review app store copy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserWindowMockup({ product }: { product: Product }) {
  const domain = product.link
    ? product.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : product.name;

  return (
    <div className="w-[min(82vw,290px)] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 bg-zinc-800/90 px-3 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="mx-auto rounded bg-zinc-700/50 px-6 py-0.5 text-[9px] text-zinc-400">
          {domain}
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-6"
        style={{ minHeight: 180, background: product.gradient }}
      >
        <span className="text-sm font-semibold tracking-tight text-white/90">
          {product.name}
        </span>
        <div className="mt-2 w-full space-y-2">
          <div className="h-2 w-2/3 rounded-full bg-white/25" />
          <div className="h-2 w-1/2 rounded-full bg-white/15" />
          <div className="mt-4 h-14 w-full rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function WebsiteScreenshotMockup({ product }: { product: Product }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border-8 border-white bg-white shadow-2xl shadow-black/50 sm:rounded-[1.75rem] sm:border-10">
      <div className="relative aspect-2938/1530 w-full bg-zinc-900">
        <Image
          src={product.image!}
          alt={`${product.name} preview`}
          fill
          sizes="(min-width: 1024px) 70vw, 90vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  if (product.platform === "macos") {
    return <MacWindowMockup product={product} />;
  }
  if (product.platform === "web") {
    return product.image ? (
      <WebsiteScreenshotMockup product={product} />
    ) : (
      <BrowserWindowMockup product={product} />
    );
  }
  return (
    <IPhoneMockup
      image={product.image}
      gradient={product.gradient}
      label={product.name}
      size="lg"
    />
  );
}

export default function FeaturedProducts() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = carouselProducts.length;
  const product = carouselProducts[index];

  const goTo = (nextIndex: number) => {
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((current) => (current - 1 + total) % total);
  };
  const next = () => {
    setDirection(1);
    setIndex((current) => (current + 1) % total);
  };

  return (
    <section id="products" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Products We&apos;re Building
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The best way to build for others is to build ourselves.
          </h2>
          <p className="mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
            Every product in our portfolio is designed, developed, and
            maintained in-house, giving us firsthand experience creating
            software people genuinely enjoy using.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
          {total > 1 && (
            <>
              <ArrowButton direction="prev" onClick={prev} className="left-0 -translate-x-1/2" />
              <ArrowButton direction="next" onClick={next} className="right-0 translate-x-1/2" />
            </>
          )}

          <div className="flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={product.slug}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                {product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${product.name}`}
                    className="flex items-center justify-center"
                  >
                    <ProductVisual product={product} />
                  </a>
                ) : (
                  <div className="flex items-center justify-center">
                    <ProductVisual product={product} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {total > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {carouselProducts.map((item, itemIndex) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => goTo(itemIndex)}
                  aria-label={`Show ${item.name}`}
                  className={`h-2 rounded-full transition-all ${
                    itemIndex === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

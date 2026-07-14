"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";

function MacWorkspacePreview({ product }: { product: Product }) {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        <div className="mx-auto flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-zinc-400">{product.name} — Today</span>
        </div>
      </div>
      <div className="flex" style={{ minHeight: 260 }}>
        <div className="w-44 shrink-0 border-r border-white/6 p-3 space-y-1">
          <p className="px-2 pb-1 text-[10px] font-medium uppercase tracking-widest text-zinc-600">
            Workspace
          </p>
          <div className="flex items-center gap-2 rounded-lg bg-white/8 px-2 py-2">
            <span className="text-xs text-white/70">Today</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2">
            <span className="text-xs text-zinc-500">Projects</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2">
            <span className="text-xs text-zinc-500">Notes</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2">
            <span className="text-xs text-zinc-500">Archive</span>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
              On track
            </div>
            <div className="text-xs text-zinc-600">4 of 6 tasks complete</div>
          </div>
          <div className="rounded-xl bg-black/50 p-4 font-mono text-xs leading-relaxed text-zinc-300 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Ship landing page redesign
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Review App Store copy
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Prep discovery call notes
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
              Plan next sprint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserPreview({ product }: { product: Product }) {
  const domain = product.link
    ? product.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : product.name;

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        <div className="mx-auto flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-zinc-400">{domain}</span>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-3 p-10"
        style={{ minHeight: 260, background: product.gradient }}
      >
        <span className="text-xl font-semibold tracking-tight text-white/90">
          {product.name}
        </span>
        <div className="mt-2 w-full max-w-sm space-y-2">
          <div className="h-2.5 w-2/3 rounded-full bg-white/25" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/15" />
          <div className="mt-4 h-20 w-full rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function WebsiteScreenshotMockup({ product }: { product: Product }) {
  return (
    <div className="relative -mx-4 aspect-3/2 overflow-hidden rounded-none bg-zinc-900 shadow-2xl shadow-black/50 sm:mx-0 sm:rounded-4xl">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("/Card-background.jpeg")' }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950/70 via-zinc-900/20 to-zinc-950/80" />
      <div className="relative z-10 h-full w-full bg-zinc-900/60 p-2 sm:p-3">
        <Image
          src={product.image!}
          alt={`${product.name} preview`}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="rounded-[1.25rem] object-contain object-center"
        />
      </div>
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  if (product.platform === "web" && product.image) {
    return (
      <div className="min-w-0">
        <WebsiteScreenshotMockup product={product} />
      </div>
    );
  }
  if (product.screenshots.length > 0) {
    return (
      <div className="min-w-0 lg:flex lg:justify-end">
        <ScreenshotCarousel screenshots={product.screenshots} product={product} />
      </div>
    );
  }
  if (product.image) {
    return (
      <div className="min-w-0 lg:flex lg:justify-end">
        <ScreenshotCarousel
          screenshots={[{ image: product.image }]}
          product={product}
        />
      </div>
    );
  }
  if (product.platform === "macos") {
    return (
      <div className="min-w-0 lg:flex lg:justify-end">
        <MacWorkspacePreview product={product} />
      </div>
    );
  }
  return (
    <div className="min-w-0 lg:flex lg:justify-end">
      <BrowserPreview product={product} />
    </div>
  );
}

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
      className="scroll-mt-36 border-b border-white/8 py-16 last:border-b-0 sm:py-20 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {product.name}
            </h2>
            <span className="rounded-2xl border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-zinc-300">
              {product.tag}
            </span>
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

          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
            >
              Visit site
              <span aria-hidden>→</span>
            </a>
          )}
        </div>

        {product.link && product.screenshots.length <= 1 ? (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${product.name}`}
            className="block"
          >
            <ProductVisual product={product} />
          </a>
        ) : (
          <ProductVisual product={product} />
        )}
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
            Products We&apos;re Building
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The best way to build for others is to build ourselves.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
            Every product in our portfolio is designed, developed, and
            maintained in-house, giving us firsthand experience creating
            software people genuinely enjoy using.
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
          className="mt-14 flex justify-center border-t border-white/8 pt-14"
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

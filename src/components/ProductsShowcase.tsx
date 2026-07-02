"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";

function MiloSMSPreview() {
  return (
    <div className="w-full max-w-sm">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between bg-zinc-900/80 px-5 py-3 text-[11px]">
          <span className="text-white/40">9:41</span>
          <span className="font-semibold text-white/90">Milo</span>
          <span className="text-white/40">●●●</span>
        </div>
        <div className="space-y-3 bg-black/20 p-4">
          <div className="flex justify-end">
            <div className="max-w-[72%] rounded-2xl rounded-br-md bg-[#2376F5] px-4 py-2.5 text-sm text-white">
              What wine pairs with salmon?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[72%] rounded-2xl rounded-bl-md bg-zinc-800 px-4 py-2.5 text-sm text-white/90">
              A crisp Pinot Gris or lightly oaked Chardonnay. Trimbach from Alsace is a reliable pick.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[72%] rounded-2xl rounded-br-md bg-[#2376F5] px-4 py-2.5 text-sm text-white">
              Any under $25?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[72%] rounded-2xl rounded-bl-md bg-zinc-800 px-4 py-2.5 text-sm text-white/90">
              Hugel &quot;Gentil&quot; or J. Lohr Riverstone Chardonnay — both around $15–20 and great with fish.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900/80 px-4 py-3">
          <div className="flex-1 rounded-2xl border border-white/10 bg-zinc-800/60 px-4 py-2 text-sm text-zinc-500">
            Message
          </div>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2376F5]">
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AtlasMacPreview() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        <div className="mx-auto flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-zinc-400">GET&nbsp;&nbsp;https://api.example.com/users</span>
        </div>
        <div className="ml-2 rounded-lg bg-zinc-700/60 px-4 py-1 text-xs text-white/60">Send</div>
      </div>
      <div className="flex" style={{ minHeight: 260 }}>
        <div className="w-44 shrink-0 border-r border-white/6 p-3 space-y-1">
          <p className="px-2 pb-1 text-[10px] font-medium uppercase tracking-widest text-zinc-600">
            Requests
          </p>
          <div className="flex items-center gap-2 rounded-lg bg-white/8 px-2 py-2">
            <span className="text-[9px] font-semibold text-emerald-400">GET</span>
            <span className="text-xs text-white/70">/users</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2">
            <span className="text-[9px] font-semibold text-blue-400">POST</span>
            <span className="text-xs text-zinc-500">/login</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2">
            <span className="text-[9px] font-semibold text-orange-400">PUT</span>
            <span className="text-xs text-zinc-500">/user/1</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2">
            <span className="text-[9px] font-semibold text-red-400">DEL</span>
            <span className="text-xs text-zinc-500">/user/1</span>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
              200 OK
            </div>
            <div className="text-xs text-zinc-600">142ms · 1.2 KB</div>
          </div>
          <div className="rounded-xl bg-black/50 p-4 font-mono text-xs leading-relaxed text-zinc-300">
            <div className="text-zinc-600">{"["}</div>
            <div className="pl-4">
              <div className="text-zinc-600">{"{"}</div>
              <div className="pl-4">
                <span className="text-sky-400">&quot;id&quot;</span>
                {": "}
                <span className="text-amber-400">1</span>
                {","}
              </div>
              <div className="pl-4">
                <span className="text-sky-400">&quot;name&quot;</span>
                {": "}
                <span className="text-emerald-400">&quot;Michael&quot;</span>
                {","}
              </div>
              <div className="pl-4">
                <span className="text-sky-400">&quot;role&quot;</span>
                {": "}
                <span className="text-emerald-400">&quot;admin&quot;</span>
              </div>
              <div className="text-zinc-600">{"}"}</div>
            </div>
            <div className="text-zinc-600">{"]"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  if (product.screenshots.length > 0) {
    return (
      <div className="min-w-0 lg:flex lg:justify-end">
        <ScreenshotCarousel screenshots={product.screenshots} product={product} />
      </div>
    );
  }
  if (product.platform === "macos") {
    return (
      <div className="min-w-0 lg:flex lg:justify-end">
        <AtlasMacPreview />
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
  return (
    <div className="min-w-0 lg:flex lg:justify-end">
      <MiloSMSPreview />
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

        <ProductVisual product={product} />
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
            Products we&apos;re building
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

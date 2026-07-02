"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IPhoneMockup from "./IPhoneMockup";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import { staggerContainer, scaleIn } from "@/lib/animations";

function MacWindowMockup({ gradient }: { gradient?: string }) {
  return (
    <div className="w-[min(82vw,290px)] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 bg-zinc-800/90 px-3 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="mx-auto rounded bg-zinc-700/50 px-6 py-0.5 text-[9px] text-zinc-400">
          GET /users
        </div>
      </div>
      <div className="flex" style={{ minHeight: 180, background: gradient }}>
        <div className="w-18 shrink-0 border-r border-white/[0.07] bg-black/25 p-2 space-y-1">
          <div className="rounded bg-white/[0.14] px-1.5 py-1.5 text-[8px] text-white/75">GET /users</div>
          <div className="px-1.5 py-1.5 text-[8px] text-white/25">POST /auth</div>
          <div className="px-1.5 py-1.5 text-[8px] text-white/25">DEL /user</div>
        </div>
        <div className="flex-1 p-3 space-y-2">
          <div className="flex gap-1.5">
            <div className="rounded bg-emerald-500/25 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-300">200 OK</div>
            <div className="rounded bg-white/[0.07] px-1.5 py-0.5 text-[8px] text-white/30">128ms</div>
          </div>
          <div className="rounded-lg bg-black/40 p-2 font-mono text-[8px] leading-relaxed text-white/60 space-y-0.5">
            <div className="text-white/25">{"{"}</div>
            <div className="pl-3">
              <span className="text-sky-400">&quot;name&quot;</span>
              {": "}
              <span className="text-emerald-400">&quot;Michael&quot;</span>
            </div>
            <div className="pl-3">
              <span className="text-sky-400">&quot;role&quot;</span>
              {": "}
              <span className="text-emerald-400">&quot;admin&quot;</span>
            </div>
            <div className="text-white/25">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  if (product.platform === "macos") {
    return (
      <div className="relative flex justify-center py-4 sm:py-6">
        <MacWindowMockup gradient={product.gradient} />
      </div>
    );
  }
  return (
    <div className="relative flex justify-center py-4 sm:py-6">
      <IPhoneMockup
        image={product.image}
        gradient={product.gradient}
        label={product.name}
        size="md"
      />
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Our Products
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Products we&apos;re building
          </h2>
          <p className="mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
            Real products, not client work. Each one designed and built in-house
            with the same care we bring to every project.
          </p>
        </ScrollReveal>

        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2"
        >
          {products.filter((p) => p.slug !== "atlas").map((product) => (
            <Link
              key={product.name}
              href={`/products?app=${product.slug}`}
              className="block"
            >
              <motion.article
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 transition-shadow duration-500 hover:border-white/15 hover:shadow-2xl sm:rounded-3xl sm:p-8 ${product.glow}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/4 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <ProductVisual product={product} />

                <div className="relative mt-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {product.name}
                    </h3>
                    <span
                      className={`w-fit shrink-0 rounded-2xl border px-3 py-1 text-xs font-medium ${product.statusColor}`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 sm:text-base">
                    {product.tagline}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

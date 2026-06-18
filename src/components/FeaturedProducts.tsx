"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IPhoneMockup from "./IPhoneMockup";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/lib/products";
import { staggerContainer, scaleIn } from "@/lib/animations";

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Our Products
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Apps we&apos;re building
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
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <Link
              key={product.name}
              href={`/products?app=${product.slug}`}
              className="block"
            >
              <motion.article
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-shadow duration-500 hover:border-white/[0.15] hover:shadow-2xl sm:rounded-3xl sm:p-8 ${product.glow}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex justify-center py-4 sm:py-6">
                  <IPhoneMockup
                    image={product.image}
                    gradient={product.gradient}
                    label={product.name}
                    size="md"
                  />
                </div>

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

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import IPhoneMockup from "./IPhoneMockup";
import type { Product, ProductScreenshot } from "@/lib/products";

type ScreenshotCarouselProps = {
  screenshots: ProductScreenshot[];
  product: Product;
};

export default function ScreenshotCarousel({
  screenshots,
  product,
}: ScreenshotCarouselProps) {
  const [perPage, setPerPage] = useState(2);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.max(1, Math.ceil(screenshots.length / perPage));
  const safePage = Math.min(page, totalPages - 1);
  const visible = screenshots.slice(
    safePage * perPage,
    safePage * perPage + perPage,
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const update = () => setPerPage(media.matches ? 2 : 1);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setPage((current) => Math.min(current, totalPages - 1));
  }, [totalPages]);

  const goTo = useCallback(
    (nextPage: number) => {
      setDirection(nextPage > safePage ? 1 : -1);
      setPage(nextPage);
    },
    [safePage],
  );

  const prev = () => goTo(Math.max(0, safePage - 1));
  const next = () => goTo(Math.min(totalPages - 1, safePage + 1));

  const mockupSize = perPage === 2 ? "lg" : "md";

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative flex w-full max-w-[36rem] items-center justify-center sm:max-w-[34rem] lg:max-w-none lg:justify-end">
        {totalPages > 1 && (
          <button
            type="button"
            onClick={prev}
            disabled={safePage === 0}
            aria-label="Previous screenshots"
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30 sm:-left-1 md:h-11 md:w-11"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        <div className="w-full overflow-hidden px-11 sm:px-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${safePage}-${perPage}`}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-end justify-items-center gap-4 sm:gap-5 ${
                visible.length === 2 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {visible.map((screenshot, screenshotIndex) => (
                <div
                  key={`${product.slug}-${safePage * perPage + screenshotIndex}`}
                  className="flex justify-center"
                >
                  <IPhoneMockup
                    image={screenshot.image}
                    gradient={screenshot.gradient ?? product.gradient}
                    label={screenshot.label ?? product.name}
                    size={mockupSize}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <button
            type="button"
            onClick={next}
            disabled={safePage >= totalPages - 1}
            aria-label="Next screenshots"
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30 sm:-right-1 md:h-11 md:w-11"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              onClick={() => goTo(pageIndex)}
              aria-label={`Screenshot page ${pageIndex + 1}`}
              className={`h-2 rounded-full transition-all ${
                pageIndex === safePage
                  ? "w-8 bg-white"
                  : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

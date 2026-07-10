"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { type RefObject } from "react";

type LandscapeVariant = "hero" | "cta";

type LandscapeBackgroundProps = {
  variant?: LandscapeVariant;
  containerRef?: RefObject<HTMLElement | null>;
};

const variantConfig = {
  hero: {
    src: "/hero-background.jpeg",
    imagePosition: "object-[34%_50%] sm:object-[38%_48%] lg:object-[40%_46%]",
    imageClassName: "saturate-[1.08]",
    objectFit: "object-cover",
    priority: true,
  },
  cta: {
    src: "/OriginLabs-footer-background.jpeg",
    imagePosition: "object-[52%_50%] sm:object-[54%_50%] lg:object-[56%_50%]",
    imageClassName: "brightness-[0.95] contrast-[1.05] saturate-[0.85]",
    objectFit: "object-cover",
    priority: false,
  },
} as const;

function BackgroundImage({
  src,
  imagePosition,
  imageClassName,
  objectFit,
  priority,
}: {
  src: string;
  imagePosition: string;
  imageClassName: string;
  objectFit: string;
  priority: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      fill
      priority={priority}
      sizes="100vw"
      quality={92}
      className={`${objectFit} ${imageClassName} ${imagePosition}`}
    />
  );
}

function ParallaxImage({
  containerRef,
  src,
  imagePosition,
  imageClassName,
  objectFit,
  priority,
}: {
  containerRef: RefObject<HTMLElement | null>;
  src: string;
  imagePosition: string;
  imageClassName: string;
  objectFit: string;
  priority: boolean;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y: imageY }}
    >
      <BackgroundImage
        src={src}
        imagePosition={imagePosition}
        imageClassName={imageClassName}
        objectFit={objectFit}
        priority={priority}
      />
    </motion.div>
  );
}

export default function LandscapeBackground({
  variant = "hero",
  containerRef,
}: LandscapeBackgroundProps) {
  const config = variantConfig[variant];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {variant === "hero" && containerRef ? (
        <ParallaxImage
          containerRef={containerRef}
          src={config.src}
          imagePosition={config.imagePosition}
          imageClassName={config.imageClassName}
          objectFit={config.objectFit}
          priority={config.priority}
        />
      ) : (
        <div className="absolute inset-0">
          <BackgroundImage
            src={config.src}
            imagePosition={config.imagePosition}
            imageClassName={config.imageClassName}
            objectFit={config.objectFit}
            priority={config.priority}
          />
        </div>
      )}

      {variant === "hero" ? (
        <>
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/5 to-transparent sm:from-black/25 sm:via-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0A0A0A]/45" />
        </>
      ) : (
        <>
          {/* Base tint — keeps the whole photo grounded in the dark theme */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Vertical grade — lighter through the ocean band, darkest at the top (headline) and bottom (footer) */}
          <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/20 to-black/85" />
          {/* Radial vignette — keeps the centre clear, darkens the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_38%,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
          {/* Solid fade at the very bottom — this is the last section on the page */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-black sm:h-56" />
        </>
      )}
    </div>
  );
}

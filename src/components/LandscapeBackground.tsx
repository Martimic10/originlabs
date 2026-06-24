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
    src: "/OriginLabs-awesome-background.jpeg",
    imagePosition: "object-[50%_72%] sm:object-[50%_66%] lg:object-[50%_60%]",
    imageClassName: "brightness-[1.1] saturate-[1.12]",
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent sm:from-black/25 sm:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]/45" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/45 via-black/15 to-[#0A0A0A]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_38%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        </>
      )}
    </div>
  );
}

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
    imagePosition: "object-[50%_32%] sm:object-[58%_40%] lg:object-[62%_38%]",
    priority: true,
  },
  cta: {
    imagePosition: "object-[50%_72%] sm:object-[48%_68%] md:object-[50%_64%]",
    priority: false,
  },
} as const;

function BackgroundImage({
  imagePosition,
  priority,
}: {
  imagePosition: string;
  priority: boolean;
}) {
  return (
    <Image
      src="/background-hero.jpeg"
      alt=""
      fill
      priority={priority}
      sizes="100vw"
      quality={92}
      className={`object-cover brightness-110 ${imagePosition}`}
    />
  );
}

function ParallaxImage({
  containerRef,
  imagePosition,
  priority,
}: {
  containerRef: RefObject<HTMLElement | null>;
  imagePosition: string;
  priority: boolean;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.12]);

  return (
    <motion.div
      className="absolute -inset-[8%]"
      style={{ y: imageY, scale: imageScale }}
    >
      <BackgroundImage imagePosition={imagePosition} priority={priority} />
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
          imagePosition={config.imagePosition}
          priority={config.priority}
        />
      ) : (
        <div className="absolute -inset-[6%]">
          <BackgroundImage
            imagePosition={config.imagePosition}
            priority={config.priority}
          />
        </div>
      )}

      {variant === "hero" ? (
        <>
          <div className="absolute inset-0 bg-[#0A0A0A]/8" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/75 to-[#0A0A0A]/35 sm:via-[#0A0A0A]/55 sm:to-[#0A0A0A]/15 lg:via-[#0A0A0A]/25 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_45%,transparent_0%,#0A0A0A_100%)] opacity-15 lg:opacity-10" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#0A0A0A]/8" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/35 to-[#0A0A0A]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_40%,transparent_0%,#0A0A0A_100%)] opacity-20" />
        </>
      )}
    </div>
  );
}

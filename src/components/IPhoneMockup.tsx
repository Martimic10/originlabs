"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type IPhoneMockupProps = {
  gradient?: string;
  image?: string;
  label?: string;
  className?: string;
  floating?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "aspect-[180/380] w-[min(44vw,180px)]",
  md: "aspect-[220/460] w-[min(52vw,220px)]",
  lg: "aspect-[260/540] w-[min(68vw,260px)] sm:w-[260px]",
};

const imageHeights = {
  sm: "h-[340px]",
  md: "h-[400px] sm:h-[460px]",
  lg: "h-[460px] sm:h-[540px]",
};

export default function IPhoneMockup({
  gradient,
  image,
  label,
  className = "",
  floating = false,
  size = "md",
}: IPhoneMockupProps) {
  const Wrapper = floating ? motion.div : "div";
  const wrapperProps = floating
    ? {
        animate: { y: [0, -12, 0] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
      }
    : {};

  if (image) {
    return (
      <Wrapper
        className={`relative flex items-center justify-center ${imageHeights[size]} ${className}`}
        {...wrapperProps}
      >
        <Image
          src={image}
          alt={label ? `${label} app on iPhone` : "iPhone app mockup"}
          width={1400}
          height={2800}
          sizes="260px"
          className="h-full w-auto max-w-none object-contain"
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper
      className={`relative ${sizes[size]} ${className}`}
      {...wrapperProps}
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-2xl shadow-black/60">
        <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
            style={{ background: gradient }}
          >
            {label && (
              <span className="text-center text-sm font-semibold tracking-tight text-white/90">
                {label}
              </span>
            )}
            <div className="mt-4 w-full space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-white/20" />
              <div className="h-2 w-1/2 rounded-full bg-white/15" />
              <div className="mt-6 h-16 w-full rounded-2xl bg-white/10 backdrop-blur-sm" />
              <div className="h-16 w-full rounded-2xl bg-white/10 backdrop-blur-sm" />
              <div className="h-16 w-full rounded-2xl bg-white/10 backdrop-blur-sm" />
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-white/[0.06] to-transparent" />
    </Wrapper>
  );
}

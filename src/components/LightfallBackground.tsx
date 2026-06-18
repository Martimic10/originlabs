"use client";

import Lightfall from "./Lightfall";

type LightfallBackgroundProps = {
  className?: string;
};

export default function LightfallBackground({
  className = "",
}: LightfallBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Lightfall
        className="h-full w-full"
        backgroundColor="#050814"
        colors={["#60a5fa", "#5227FF", "#34d399", "#A6C8FF"]}
        speed={0.45}
        streakCount={3}
        streakWidth={1}
        streakLength={1.1}
        glow={0.9}
        density={0.55}
        twinkle={0.85}
        zoom={3}
        backgroundGlow={0.35}
        opacity={1}
        mouseInteraction={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/25 to-[#0A0A0A]" />
    </div>
  );
}

export type ProductScreenshot = {
  image?: string;
  gradient?: string;
  label?: string;
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  status: string;
  statusColor: string;
  image?: string;
  gradient?: string;
  glow: string;
  highlights: string[];
  screenshots: ProductScreenshot[];
  link?: string;
  platform?: "ios" | "macos" | "web";
};

export const products: Product[] = [
  {
    link: "https://impactai.golf/",
    platform: "ios" as const,
    slug: "teeup",
    name: "TeeUp",
    tag: "iOS",
    tagline: "Every round is a competition.",
    description:
      "A modern golf companion built to make every round more fun through games, achievements, statistics, and friendly competition. Free to play full rounds with friends — Pro adds game modes, deep stats, and season tracking.",
    status: "Launching Soon",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    image: "/IMG_6099_iphone16.png",
    gradient:
      "linear-gradient(160deg, #bef264 0%, #22c55e 42%, #14532d 100%)",
    glow: "group-hover:shadow-lime-500/20",
    highlights: [
      "Live scoring with your crew",
      "Real-time leaderboards & rivalries",
      "Free full rounds with friends",
      "Pro: game modes, stats & seasons",
    ],
    screenshots: [
      { image: "/IMG_6099_iphone16.png" },
      { image: "/IMG_6098_iphone16.png" },
      { image: "/IMG_6101_iphone16.png" },
      { image: "/IMG_6105_iphone16.png" },
      { image: "/IMG_6107_iphone16.png" },
    ],
  },
  {
    link: "https://textmilo.app/",
    platform: "web" as const,
    slug: "milo",
    name: "Milo",
    tag: "AI",
    tagline: "Your AI, in your texts.",
    description:
      "Our flagship AI companion designed to help people stay organized, productive, and supported through natural conversations. No app to download, no new interface to learn — just text it like you'd text anyone.",
    status: "Coming Soon",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    image: "/Milo-mockup.png",
    gradient:
      "linear-gradient(160deg, #818cf8 0%, #6366f1 42%, #1e1b4b 100%)",
    glow: "group-hover:shadow-indigo-500/20",
    highlights: [
      "No app required — works over SMS/iMessage",
      "Responds like a person, not a chatbot",
      "Remembers context across conversations",
      "Always in your pocket, always available",
    ],
    screenshots: [],
  },
  {
    platform: "macos" as const,
    slug: "atlas",
    name: "Atlas",
    tag: "macOS",
    tagline: "Focus, built for macOS.",
    description:
      "A premium macOS productivity application built for the Apple ecosystem. Coming soon.",
    status: "Coming Soon",
    statusColor: "text-slate-400 bg-slate-400/10 border-slate-400/20",
    gradient:
      "linear-gradient(160deg, #94a3b8 0%, #475569 42%, #0f172a 100%)",
    glow: "group-hover:shadow-slate-500/20",
    highlights: [
      "Native macOS experience",
      "Built for the Apple ecosystem",
      "Designed for daily focus",
      "Launching soon",
    ],
    screenshots: [],
  },
];

export function getProductIndex(slug: string | null | undefined): number {
  if (!slug) return 0;
  const index = products.findIndex((product) => product.slug === slug);
  return index >= 0 ? index : 0;
}

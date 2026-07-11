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
    link: "https://helix-ops-eight.vercel.app/",
    platform: "web" as const,
    slug: "helixops",
    name: "HelixOps",
    tag: "AI",
    tagline: "The AI operating system powering tomorrow's factories.",
    description:
      "HelixOps connects every machine, sensor, and operator into a single intelligent system — predicting downtime, optimizing production, and automating operations across your entire manufacturing footprint.",
    status: "Live",
    statusColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    image: "/HelixOps-demo.png",
    gradient:
      "linear-gradient(160deg, #22d3ee 0%, #0891b2 42%, #082f36 100%)",
    glow: "group-hover:shadow-cyan-500/20",
    highlights: [
      "Real-time multi-site deployments",
      "Predicts downtime before it happens",
      "SOC 2 Type II & ISO 27001 certified",
      "99.99% uptime",
    ],
    screenshots: [],
  },
  {
    link: "https://multi-ball-co.vercel.app/",
    platform: "web" as const,
    slug: "multiball",
    name: "MultiBall Co.",
    tag: "Website",
    tagline: "Full tilt. Zero shortcuts.",
    description:
      "MultiBall Co. designs, fabricates, and wires custom pinball machines and arcade cabinets for collectors, arcades, and basements that mean business.",
    status: "Live",
    statusColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    image: "/MultiBall-demo.png",
    gradient:
      "linear-gradient(160deg, #f9a8d4 0%, #ec4899 42%, #1e1b4b 100%)",
    glow: "group-hover:shadow-pink-500/20",
    highlights: [
      "Hand-built in-house since 1987",
      "Custom pinball machines & arcade cabinets",
      "Designed for collectors and arcades",
      "Full-tilt craftsmanship, zero shortcuts",
    ],
    screenshots: [],
  },
];

export function getProductIndex(slug: string | null | undefined): number {
  if (!slug) return 0;
  const index = products.findIndex((product) => product.slug === slug);
  return index >= 0 ? index : 0;
}

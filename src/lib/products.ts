export type ProductScreenshot = {
  image?: string;
  gradient?: string;
  label?: string;
};

export type Product = {
  slug: string;
  name: string;
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
    tagline: "Every round is a competition.",
    description:
      "TeeUp turns every round into a competition with your crew. Track scores live, settle who's actually winning, and build season-long rivalries with the people you play with every week. Free to play full rounds with friends — Pro adds game modes, deep stats, and season tracking.",
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
    tagline: "Your AI, in your texts.",
    description:
      "Milo is a personal AI that lives in your messages. No app to download, no new interface to learn — just text it like you'd text anyone. It meets you where you already are.",
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
    tagline: "Postman without the clutter.",
    description:
      "Atlas is a native macOS API client built for speed. Less bloat than Postman or Insomnia — just open it, test your endpoint, and move on. Built for people who want focus, not features.",
    status: "Coming Soon",
    statusColor: "text-slate-400 bg-slate-400/10 border-slate-400/20",
    gradient:
      "linear-gradient(160deg, #94a3b8 0%, #475569 42%, #0f172a 100%)",
    glow: "group-hover:shadow-slate-500/20",
    highlights: [
      "Native macOS feel",
      "Faster to start than Postman or Insomnia",
      "Focused on the core use case",
      "No account required",
    ],
    screenshots: [],
  },
];

export function getProductIndex(slug: string | null | undefined): number {
  if (!slug) return 0;
  const index = products.findIndex((product) => product.slug === slug);
  return index >= 0 ? index : 0;
}

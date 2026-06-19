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
};

export const products: Product[] = [
  {
    slug: "breezy",
    name: "Breezy",
    tagline: "Split expenses without friction.",
    description:
      "Breezy makes splitting bills with friends effortless. Track shared costs, settle up instantly, and keep every group organized — all with a clean, native iOS experience.",
    status: "Launching Soon",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    image: "/iphone_mockup.png",
    glow: "group-hover:shadow-blue-500/20",
    highlights: [
      "Group expense tracking",
      "Real-time balance updates",
      "Simple settle-up flows",
      "Built with SwiftUI",
    ],
    screenshots: [
      { image: "/iphone_mockup.png" },
      { image: "/mockup_add_expense.png" },
      { image: "/mockup_friends.png" },
      { image: "/mockup_settle_up.png" },
      { image: "/mockup_trip_report.png" },
    ],
  },
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "Your travels, mapped and remembered.",
    description:
      "Atlas is a personal travel map and memory journal. Pin the places you've been, capture moments from each trip, and build a living map of everywhere life has taken you.",
    status: "In Development",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    image: "/iphone16_01_map.png",
    glow: "group-hover:shadow-cyan-500/20",
    highlights: [
      "Interactive personal travel map",
      "Trip memory journal",
      "Photo & note entries",
      "Built with SwiftUI",
    ],
    screenshots: [
      { image: "/iphone16_01_map.png" },
      { image: "/iphone16_02_timeline.png" },
      { image: "/iphone16_03_stats.png" },
      { image: "/iphone16_04_passport.png" },
      { image: "/iphone16_05_location.png" },
      { image: "/iphone16_06_recap.png" },
    ],
  },
  {
    slug: "mend",
    name: "Mend",
    tagline: "Recovery-focused journaling and support app.",
    description:
      "Mend is a thoughtful space for recovery and reflection. Journal privately, track progress, and access supportive tools designed with care and discretion.",
    status: "In Development",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    glow: "group-hover:shadow-violet-500/20",
    image: "/Mend-today-iphone16.png",
    highlights: [
      "Private journaling",
      "Progress tracking",
      "Mindful daily prompts",
      "Privacy-first design",
    ],
    screenshots: [
      { image: "/Mend-today-iphone16.png" },
      { image: "/Mend-checkin-iphone16.png" },
      { image: "/Mend-mood-iphone16.png" },
      { image: "/Mend-insights-iphone16.png" },
      { image: "/Mend-session-iphone16.png" },
      { image: "/Mend-profile-iphone16.png" },
    ],
  },
];

export function getProductIndex(slug: string | null | undefined): number {
  if (!slug) return 0;
  const index = products.findIndex((product) => product.slug === slug);
  return index >= 0 ? index : 0;
}

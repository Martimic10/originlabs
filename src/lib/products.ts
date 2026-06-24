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
    status: "In Development",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
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
    slug: "impact-golf",
    name: "Impact Golf",
    tagline: "Every round is a competition.",
    description:
      "Impact Golf turns every round into a competition with your crew. Track scores live, settle who's actually winning, and build season-long rivalries with the people you play with every week. Free to play full rounds with friends — Pro adds game modes, deep stats, and season tracking.",
    status: "Launching Soon",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
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
      { label: "Live scoring" },
      { label: "Leaderboard" },
      { label: "Season stats" },
      { label: "Game modes" },
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

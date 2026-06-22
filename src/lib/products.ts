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
    slug: "hone",
    name: "Hone",
    tagline: "Plan your work. Stay focused.",
    description:
      "Hone is the simplest way to plan your work, focus without distraction, and stay on top of school or your job.",
    status: "In Development",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    image: "/IMG_6070_iphone16.png",
    gradient:
      "linear-gradient(160deg, #a78bfa 0%, #7c3aed 42%, #4c1d95 100%)",
    glow: "group-hover:shadow-violet-500/20",
    highlights: [
      "Simple work planning",
      "Distraction-free focus mode",
      "School & job task management",
      "Built with SwiftUI",
    ],
    screenshots: [
      { image: "/IMG_6070_iphone16.png" },
      { image: "/IMG_6071_iphone16.png" },
      { image: "/IMG_6072_iphone16.png" },
      { image: "/IMG_6073_iphone16.png" },
      { image: "/IMG_6074_iphone16.png" },
      { image: "/IMG_6075_iphone16.png" },
      { image: "/IMG_6076_iphone16.png" },
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

import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Origin Labs — Digital Product Studio",
  description:
    "Origin Labs is a digital product studio creating high-converting websites, AI-powered applications, and native Apple experiences for founders and businesses.",
  keywords: [
    "digital product studio",
    "web design",
    "landing pages",
    "business websites",
    "AI applications",
    "iOS",
    "macOS",
    "Swift",
    "app development",
    "product design",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Origin Labs — Digital Product Studio",
    description:
      "Origin Labs is a digital product studio creating high-converting websites, AI-powered applications, and native Apple experiences for founders and businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          sizes="180x180"
          type="image/png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full overflow-x-hidden bg-[#0A0A0A] font-serif text-white antialiased">
        {children}
      </body>
    </html>
  );
}

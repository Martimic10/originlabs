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
  title: "Origin Labs — AI Lab",
  description:
    "Origin Labs builds small, sharp products. An independent AI lab making software people actually use.",
  keywords: [
    "AI lab",
    "product studio",
    "iOS",
    "macOS",
    "Swift",
    "app development",
    "software products",
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
    title: "Origin Labs — AI Lab",
    description:
      "Origin Labs builds small, sharp products. An independent AI lab making software people actually use.",
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

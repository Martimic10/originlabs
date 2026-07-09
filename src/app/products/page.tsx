import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProductsShowcase from "@/components/ProductsShowcase";

export const metadata: Metadata = {
  title: "Products — Origin Labs",
  description:
    "Explore the products Origin Labs is building — AI tools, native iOS and macOS apps, all designed and built in-house.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-[#0A0A0A]">
        <Suspense>
          <ProductsShowcase />
        </Suspense>
      </main>
    </>
  );
}

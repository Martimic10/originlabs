import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProductsShowcase from "@/components/ProductsShowcase";

export const metadata: Metadata = {
  title: "Products — Origin Labs",
  description:
    "Explore the iOS apps Origin Labs is building in-house — from expense splitting to event planning and beyond.",
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

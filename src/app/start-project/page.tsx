import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProjectForm from "@/components/ProjectForm";

export const metadata: Metadata = {
  title: "Start a Project — Origin Labs",
  description:
    "Tell us about your iOS app idea. Origin Labs builds design-first Swift and SwiftUI products for founders and startups.",
};

export default function StartProjectPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-[#0A0A0A]">
        <section className="pb-20 pt-40 sm:pb-28 sm:pt-52 md:pt-56">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Suspense>
              <ProjectForm />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}

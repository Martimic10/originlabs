import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import StudioDNA from "@/components/StudioDNA";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <FeaturedProducts />
        <StudioDNA />
        <Process />
        <Services />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}

import Hero from "./components/sections/Hero";

import ClientTrustSection from "./components/sections/ClientTrustSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProductSection from "./components/sections/ProductSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import ArticlesSection from "./components/sections/ArticlesSection";
import FinalCTASection from "./components/sections/FinalCTASection";
import BatterySection from "./components/sections/BatterySection";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Beranda | KEI HAI",
  description: "Halaman Beranda",
};

export default function HomePage() {
  return (
   <main className="w-full pt-[116px] bg-background min-h-screen">
    <div className="flex flex-col w-full">
      <Hero />
      <ClientTrustSection />
      <ServicesSection />
      <ProductSection />
      <BatterySection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <ArticlesSection />
      <FinalCTASection />
   </div>
   </main>
  );
}

import Hero from "./home-components/home-sections/Hero";

import ClientTrustSection from "./home-components/home-sections/ClientTrustSection";
import ServicesSection from "./home-components/home-sections/ServicesSection";
import ProductSection from "./pages/produk/unit-forklift/ForkliftListSection";
import SolutionsSection from "./home-components/home-sections/SolutionsSection";
import WhyChooseUsSection from "./home-components/home-sections/WhyChooseUsSection";
import ArticlesSection from "./home-components/home-sections/ArticlesSection";
import FinalCTASection from "./home-components/home-sections/FinalCTASection";
import BatterySection from "./pages/produk/baterai/component/BatteryListSection";
import TopBannerSlider from "./home-components/home-sections/TopBannerSlider";
import PartnerSection from "./home-components/home-sections/partner"

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Beranda | KEI HAI",
  description: "Halaman Beranda",
};

export default function HomePage() {
  return (
   <main className="w-full pt-[116px] bg-background min-h-screen">
    <div className="flex flex-col w-full">
      <TopBannerSlider />
      <Hero />
      <ClientTrustSection />
      <ServicesSection />
      <ProductSection />
      <BatterySection />
      {/* <SolutionsSection /> */}
      <WhyChooseUsSection />
      <PartnerSection />
      <ArticlesSection />
      <FinalCTASection />
   </div>
   </main>
  );
}

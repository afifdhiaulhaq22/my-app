import BreadcrumbBar from "./component/BreadcrumbBar";
import HeroSection from "./component/HeroSection";
import RentalOverviewSection from "./component/RentalOverviewSection";
import ForkliftCatalogSection from "./component/ForkliftCatalogSection";
import OperationalNeedsSection from "./component/OperationalNeedsSection";
import BenefitsSection from "./component/BenefitsSection";
import CoverageSection from "./component/CoverageSection";
import FinalCTASection from "@/app/home-components/home-sections/FinalCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Unit Foklift | KEI HAI",
  description: "Halaman Sewa Unit Foklift",
};


export default function SewaForkliftPage() {
  return (
    <main className="w-full pt-[120px] bg-surface">
      <BreadcrumbBar />
      <HeroSection />
      <RentalOverviewSection />
      <ForkliftCatalogSection />
      <OperationalNeedsSection />
      <BenefitsSection />
      <CoverageSection />
      <FinalCTASection /> 
    </main>
  );
}

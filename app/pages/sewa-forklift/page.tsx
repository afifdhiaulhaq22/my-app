import BreadcrumbBar from "./component/BreadcrumbBar";
import HeroSection from "./component/HeroSection";
import RentalOverviewSection from "./component/RentalOverviewSection";
import ForkliftCatalogSection from "./component/ForkliftCatalogSection";
import OperationalNeedsSection from "./component/OperationalNeedsSection";
import BenefitsSection from "./component/BenefitsSection";
import RentalProcessSection from "./component/RentalProcessSection";
import FaqSection from "./component/FaqSection";
import QuotationSection from "./component/QuotationSection";
import CoverageSection from "./component/CoverageSection";
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
      <RentalProcessSection />
      <CoverageSection />
      <FaqSection />
      {/* <QuotationSection /> */}
    </main>
  );
}

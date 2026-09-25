import BreadcrumbBar from "./BreadcrumbBar";
import HeroSection from "./HeroSection";
import RentalOverviewSection from "./RentalOverviewSection";
import ForkliftCatalogSection from "./ForkliftCatalogSection";
import OperationalNeedsSection from "./OperationalNeedsSection";
import BenefitsSection from "./BenefitsSection";
import RentalProcessSection from "./RentalProcessSection";
import FaqSection from "./FaqSection";
import QuotationSection from "./QuotationSection";
import CoverageSection from "./CoverageSection";


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
      <QuotationSection />
    </main>
  );
}

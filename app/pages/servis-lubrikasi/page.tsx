import Link from "next/link";

import ServiceHeroSection from "./component/HeroSection";
import ServiceImportanceSection from "./component/ServiceImportanceSection";
import LubricationSection from "./component/LubricationSection";
import ServiceSection from "./component/ServiceSection";
import MaintenanceScheduleSection from "./component/MaintenanceScheduleSection";
import LubricantTypesSection from "./component/LubricantTypesSection";
import ServiceProcessSection from "./component/ServiceProcessSection";
import TechnicianPartsSection from "./component/TechnicianPartsSection";
import ServiceValueSection from "./component/ServiceValueSection";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Servis dan Lubrikasi | KEI HAI",
  description: "Halaman Servis dan Lubrikasi",
};

export default function ServisDanLubrikasiPage() {
  return (
    <main className="w-full pt-[120px] bg-surface">
      <div className="flex flex-col w-full">
        <BreadcrumbSection />

        <ServiceHeroSection />

        <ServiceImportanceSection />

        <LubricationSection />

        <ServiceSection />

        <MaintenanceScheduleSection />

        <LubricantTypesSection />

        <ServiceProcessSection />

        <TechnicianPartsSection />

        <ServiceValueSection />

        {/* <ServiceCTASection /> */}
      </div>
    </main>
  );
}

function BreadcrumbSection() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-surface-container-high">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
          >
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-[16px]">
                home
              </span>

              <span>Beranda</span>
            </Link>

            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>

            <span className="font-bold text-primary">
              Servis & Lubrikasi Forklift
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded font-label-technical text-label-technical text-primary font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[13px] text-secondary">
                verified_user
              </span>

              Layanan Perawatan & Lubrikasi Industri
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed/40 rounded font-label-technical text-label-technical text-on-primary-fixed font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[13px] text-primary">
                location_on
              </span>

              Dukungan Armada Gudang & Pabrik MM2100
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

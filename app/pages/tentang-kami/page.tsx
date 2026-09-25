import AboutCompany from "./component/AboutCompany";
import Solutions from "./component/Solutions";
import WhyChooseUs from "./component/WhyChooseUs";
import CompanyStats from "./component/CompanyStats";
import CompanyValues from "./component/CompanyValues";
import Industries from "./component/Industries";
import PageHeader from "./component/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | KEI HAI",
  description: "Halaman Tentang Kami",
};

export default function TentangKamiPage() {
  return (
    <main className="w-full pt-[120px] bg-surface">
      <PageHeader />
      <AboutCompany />
      <Solutions />
      <WhyChooseUs />
      <CompanyStats />
      <CompanyValues />
      <Industries />
    </main>
  );
}

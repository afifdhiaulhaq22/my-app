import AboutCompany from "./AboutCompany";
import Solutions from "./Solutions";
import WhyChooseUs from "./WhyChooseUs";
import CompanyStats from "./CompanyStats";
import CompanyValues from "./CompanyValues";
import Industries from "./Industries";
import PageHeader from "./PageHeader";
// import CallToAction from "./CallToAction";

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
      {/* <CallToAction /> */}
    </main>
  );
}

import ContactHeader from "./component/ContactHeader";
import ContactSection from "./component/ContactSection";
import LocationSection from "./component/LocationSection";
import FAQAccordion from "./component/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Kami | KEI HAI",
  description: "Halaman Kontak Kami",
};

export default function HubungiKamiPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <ContactHeader />

        <ContactSection />

        <LocationSection />

        <FAQAccordion />
      </div>
    </main>
  );
}

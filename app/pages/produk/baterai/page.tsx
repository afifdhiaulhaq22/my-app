import type { Metadata } from "next";
import BatteryCatalog from "./component/BatteryCatalog";
import BatteryHeader from "./component/BatteryHeader";

const siteUrl = "https://keihaiforklift.com";

export const metadata: Metadata = {
  title: "Jual Baterai Forklift Industri | KEI HAI",
  description:
    "Temukan baterai forklift untuk kebutuhan industri dengan pilihan spesifikasi tegangan dan kapasitas. Konsultasikan kebutuhan baterai forklift Anda bersama KEI HAI.",

  alternates: {
    canonical: `${siteUrl}/produk/baterai`,
  },

  openGraph: {
    title: "Jual Baterai Forklift Industri | KEI HAI",
    description:
      "Cari baterai forklift sesuai kebutuhan operasional industri Anda. Lihat pilihan produk dan konsultasikan spesifikasinya bersama KEI HAI.",
    url: `${siteUrl}/baterai`,
    siteName: "KEI HAI",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jual Baterai Forklift Industri | KEI HAI",
    description:
      "Temukan baterai forklift untuk kebutuhan industri bersama KEI HAI.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BatteryPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <BatteryHeader />
      <BatteryCatalog />
    </main>
  );
}
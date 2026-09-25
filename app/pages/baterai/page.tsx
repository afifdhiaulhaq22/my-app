import type { Metadata } from "next";
import BatteryCatalog from "./component/BatteryCatalog";
import BatteryHeader from "./component/BatteryHeader";
export const metadata: Metadata = {
  title: "Baterai | KEI HAI",
  description: "Halaman Katalog Baterai",
};

export default function BatteryPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <BatteryHeader />
      <BatteryCatalog />
    </main>
  );
}

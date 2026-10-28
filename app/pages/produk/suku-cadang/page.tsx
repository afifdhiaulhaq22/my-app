import SparepartHeader from "./component/SparepartHeader";
import SparepartCatalog from "./component/SparepartCatalog";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Suku Cadang | KEI HAI",
  description: "Halaman Katalog Suku Cadang",
};

export default function SparepartPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <SparepartHeader />
        <SparepartCatalog />
      </div>
    </main>
  );
}

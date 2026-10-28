import Link from "next/link";
import ProductCatalog from "./section/ProductCatalog";
import ProductHeader from "./section/ProductHeader";
import HeaderCatalog from "../component/HeaderCatalog";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Unit Forklift | KEI HAI",
  description: "Halaman Katalog Unit Forklift",
};

export default function UnitForkliftPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-[116px]">
      <div className="flex w-full flex-col">
          <HeaderCatalog
          title="Katalog Unit Forklift"
          description="Temukan berbagai pilihan unit forklift untuk kebutuhan operasional industri Anda, mulai dari forklift diesel hingga forklift elektrik."
          breadcrumbs={[
            { label: "Produk", href: "/produ" },
            { label: "Unit Forklift" },
          ]}
        />
        {/* <ProductHeader /> */}
        <ProductCatalog />
      </div>
    </main>
  );
}

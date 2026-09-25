import Link from "next/link";
import ProductCatalog from "./section/ProductCatalog";
import ProductHeader from "./section/ProductHeader";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Unit Forklift | KEI HAI",
  description: "Halaman Katalog Unit Forklift",
};

export default function UnitForkliftPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-[116px]">
      <div className="flex w-full flex-col">
        <ProductHeader />
        <ProductCatalog />
      </div>
    </main>
  );
}

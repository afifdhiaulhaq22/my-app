"use client";

import { useMemo, useState } from "react";
import BatteryCard, {
  type Battery,
} from "./BatteryCard";
import BatterySidebar from "./BatterySidebar";
import BatteryToolbar from "./BatteryToolbar";

const products: Battery[] = [
  {
    id: 1,
    category: "Lead Acid",
    brand: "KEI HAI Genuine",
    name: "Forklift Battery Heavy Duty 48V",
    partNumber: "KH-BT-48001",
    description:
      "Baterai forklift heavy duty dengan konstruksi industrial untuk kebutuhan operasional intensif.",
    compatibility: "Forklift Electric 2.5–3.5 Ton",
    capacity: "600 Ah",
    voltage: "48",
    visual: "bg-slate-200",
    stock: 12,
  },
  {
    id: 2,
    category: "Maintenance Free",
    brand: "KEI HAI Genuine",
    name: "Maintenance Free Forklift Battery",
    partNumber: "KH-BT-MF002",
    description:
      "Baterai maintenance free dengan perawatan minimal untuk operasional forklift harian.",
    compatibility: "Forklift Electric 1.5–2.5 Ton",
    capacity: "450 Ah",
    voltage: "48",
    visual: "bg-blue-100",
    stock: 8,
  },
  {
    id: 3,
    category: "Deep Cycle",
    brand: "KEI HAI Genuine",
    name: "Deep Cycle Industrial Battery",
    partNumber: "KH-BT-DC003",
    description:
      "Deep cycle battery untuk aplikasi forklift dengan siklus kerja panjang dan penggunaan intensif.",
    compatibility: "Forklift Electric 2.0–3.5 Ton",
    capacity: "625 Ah",
    voltage: "48",
    visual: "bg-amber-100",
    stock: 5,
  },
  {
    id: 4,
    category: "Lithium",
    brand: "KEI HAI Lithium",
    name: "Lithium Ion Forklift Battery",
    partNumber: "KH-LB-48004",
    description:
      "Lithium-ion battery dengan fast charging dan maintenance rendah untuk kebutuhan warehouse modern.",
    compatibility: "Electric Forklift 2.0–3.5 Ton",
    capacity: "560 Ah",
    voltage: "48",
    visual: "bg-emerald-100",
    stock: 4,
  },
  {
    id: 5,
    category: "Lead Acid",
    brand: "KEI HAI Genuine",
    name: "Industrial Traction Battery 48V",
    partNumber: "KH-BT-48005",
    description:
      "Traction battery industrial untuk forklift listrik dengan kebutuhan tenaga stabil.",
    compatibility: "Forklift Electric 3.0–5.0 Ton",
    capacity: "700 Ah",
    voltage: "48",
    visual: "bg-slate-300",
    stock: 7,
  },
  {
    id: 6,
    category: "Maintenance Free",
    brand: "KEI HAI Genuine",
    name: "Compact Forklift Battery",
    partNumber: "KH-BT-MF006",
    description:
      "Baterai compact untuk forklift electric dengan kebutuhan ruang baterai yang terbatas.",
    compatibility: "Forklift Electric 1.5–2.0 Ton",
    capacity: "375 Ah",
    voltage: "36",
    visual: "bg-cyan-100",
    stock: 10,
  },
  {
    id: 7,
    category: "Deep Cycle",
    brand: "KEI HAI Genuine",
    name: "Heavy Duty Deep Cycle Battery",
    partNumber: "KH-BT-DC007",
    description:
      "Deep cycle battery dengan daya tahan tinggi untuk warehouse dan distribusi dengan shift panjang.",
    compatibility: "Forklift Electric 3.0–5.0 Ton",
    capacity: "750 Ah",
    voltage: "48",
    visual: "bg-orange-100",
    stock: 3,
  },
  {
    id: 8,
    category: "Lithium",
    brand: "KEI HAI Lithium",
    name: "Lithium Battery 80V Industrial",
    partNumber: "KH-LB-80008",
    description:
      "Lithium battery 80V untuk forklift heavy duty dengan kebutuhan charging cepat dan uptime tinggi.",
    compatibility: "Forklift Electric 4.0–8.0 Ton",
    capacity: "840 Ah",
    voltage: "80",
    visual: "bg-green-100",
    stock: 2,
  },
  {
    id: 9,
    category: "Lead Acid",
    brand: "KEI HAI Genuine",
    name: "Forklift Traction Battery 36V",
    partNumber: "KH-BT-36009",
    description:
      "Baterai traction 36V untuk forklift electric kelas ringan dan aplikasi indoor.",
    compatibility: "Forklift Electric 1.5–2.0 Ton",
    capacity: "420 Ah",
    voltage: "36",
    visual: "bg-zinc-200",
    stock: 9,
  },
  {
    id: 10,
    category: "Lithium",
    brand: "KEI HAI Lithium",
    name: "Lithium Compact Battery 48V",
    partNumber: "KH-LB-48010",
    description:
      "Lithium compact battery dengan efisiensi charging tinggi untuk aplikasi multi-shift.",
    compatibility: "Forklift Electric 1.5–2.5 Ton",
    capacity: "400 Ah",
    voltage: "48",
    visual: "bg-lime-100",
    stock: 6,
  },
];

const ITEMS_PER_PAGE = 6;

export default function BatteryCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Semua Baterai");
  const [sort, setSort] = useState("rekomendasi");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Semua Baterai" ||
        product.category.toLowerCase() ===
          selectedCategory.toLowerCase();

      const searchableText = [
        product.name,
        product.partNumber,
        product.brand,
        product.category,
        product.description,
        product.compatibility,
        product.capacity,
        product.voltage,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !keyword || searchableText.includes(keyword);

      return matchesCategory && matchesSearch;
    });

    if (sort === "part") {
      result = [...result].sort((a, b) =>
        a.partNumber.localeCompare(b.partNumber)
      );
    }

    if (sort === "nama") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "kapasitas") {
      result = [...result].sort(
        (a, b) =>
          parseInt(a.capacity) - parseInt(b.capacity)
      );
    }

    return result;
  }, [search, selectedCategory, sort]);

  /*
   * Kalau search / kategori / sorting berubah,
   * selalu kembali ke halaman pertama.
   */
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  const safeCurrentPage = Math.min(
    currentPage,
    totalPages
  );

  const paginatedProducts = useMemo(() => {
    const start =
      (safeCurrentPage - 1) * ITEMS_PER_PAGE;

    return filteredProducts.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredProducts, safeCurrentPage]);

  const startItem =
    filteredProducts.length === 0
      ? 0
      : (safeCurrentPage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    safeCurrentPage * ITEMS_PER_PAGE,
    filteredProducts.length
  );

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("Semua Baterai");
    setSort("rekomendasi");
    setCurrentPage(1);
  };

  return (
    <>
      <BatteryToolbar
        search={search}
        onSearchChange={handleSearchChange}
        sort={sort}
        onSortChange={handleSortChange}
      />

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <BatterySidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="flex-1 w-full space-y-8">
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {startItem}–{endItem}
                  </span>{" "}
                  dari{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  baterai
                </p>

                {selectedCategory !== "Semua Baterai" && (
                  <p className="text-xs text-secondary mt-1">
                    Filter: {selectedCategory}
                  </p>
                )}
              </div>

              {(search ||
                selectedCategory !== "Semua Baterai" ||
                sort !== "rekomendasi") && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Reset Filter
                </button>
              )}
            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginatedProducts.map((battery) => (
                  <BatteryCard
                    key={battery.id}
                    battery={battery}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-10 text-center shadow-sm">
                <div className="text-4xl mb-4">⌕</div>

                <h3 className="text-lg font-bold text-primary">
                  Baterai tidak ditemukan
                </h3>

                <p className="text-sm text-on-surface-variant mt-2 max-w-md mx-auto">
                  Coba gunakan kata kunci lain atau pilih
                  kategori baterai yang berbeda.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Tampilkan Semua Baterai
                </button>
              </div>
            )}

            {/* PAGINATION */}
            {filteredProducts.length > 0 && (
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {startItem}–{endItem}
                  </span>{" "}
                  dari{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  baterai
                </p>

                <div className="flex items-center gap-1.5 text-sm">
                  {/* PREVIOUS */}
                  <button
                    type="button"
                    disabled={safeCurrentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(1, page - 1)
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-container transition-colors"
                  >
                    ←
                    <span className="hidden sm:inline">
                      Sebelumnya
                    </span>
                  </button>

                  {/* PAGE NUMBERS */}
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg font-bold transition-colors ${
                        page === safeCurrentPage
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* NEXT */}
                  <button
                    type="button"
                    disabled={
                      safeCurrentPage === totalPages
                    }
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(totalPages, page + 1)
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-container transition-colors"
                  >
                    <span className="hidden sm:inline">
                      Selanjutnya
                    </span>
                    →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

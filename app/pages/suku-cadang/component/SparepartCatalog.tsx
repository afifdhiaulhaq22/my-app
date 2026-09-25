"use client";

import { useMemo, useState } from "react";
import SparepartCard, {
  type Sparepart,
} from "./SparepartCard";
import SparepartSidebar from "./SparepartSidebar";
import SparepartToolbar from "./SparepartToolbar";

const products: Sparepart[] = [
  {
    id: 1,
    category: "Filtration",
    brand: "KEI HAI Genuine",
    name: "Oil Filter Forklift Heavy Duty",
    partNumber: "KH-OF-001",
    description:
      "Filter oli performa tinggi menyaring partikel mikro sistem pelumasan engine.",
    compatibility: "Forklift Diesel 2–3.5 Ton",
    visual: "bg-slate-600",
  },

  // Tambahkan product lainnya di sini
];

const ITEMS_PER_PAGE = 8;

export default function SparepartCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Semua Suku Cadang");
  const [sort, setSort] = useState("rekomendasi");
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * FILTER + SEARCH + SORT
   */
  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Semua Suku Cadang" ||
        product.category.toLowerCase() ===
          selectedCategory.replace(" Parts", "").toLowerCase();

      const searchableText = [
        product.name,
        product.partNumber,
        product.brand,
        product.category,
        product.description,
        product.compatibility,
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

    if (sort === "kompatibilitas") {
      result = [...result].sort((a, b) =>
        a.compatibility.localeCompare(b.compatibility)
      );
    }

    return result;
  }, [search, selectedCategory, sort]);

  /**
   * PAGINATION
   */
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE;

    const endIndex =
      startIndex + ITEMS_PER_PAGE;

    return filteredProducts.slice(
      startIndex,
      endIndex
    );
  }, [filteredProducts, currentPage]);

  /**
   * Reset halaman ketika filter/search/sort berubah
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

  /**
   * RESET SEMUA FILTER
   */
  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("Semua Suku Cadang");
    setSort("rekomendasi");
    setCurrentPage(1);
  };

  /**
   * Pagination range
   *
   * Contoh:
   * 1 2 3 4 5
   *
   * atau:
   * 1 ... 4 5 6 ... 12
   */
  const getPaginationPages = () => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    const pages: (number | "...")[] = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  /**
   * Range item yang sedang ditampilkan
   */
  const startItem =
    filteredProducts.length === 0
      ? 0
      : (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    currentPage * ITEMS_PER_PAGE,
    filteredProducts.length
  );

  return (
    <>
      <SparepartToolbar
        search={search}
        onSearchChange={handleSearchChange}
        sort={sort}
        onSortChange={handleSortChange}
      />

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <SparepartSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="flex-1 w-full space-y-8">
            {/* RESULT HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  suku cadang
                </p>

                {selectedCategory !==
                  "Semua Suku Cadang" && (
                  <p className="text-xs text-secondary mt-1">
                    Filter: {selectedCategory}
                  </p>
                )}

                {search && (
                  <p className="text-xs text-on-surface-variant mt-1">
                    Pencarian:{" "}
                    <span className="font-semibold text-primary">
                      &quot;{search}&quot;
                    </span>
                  </p>
                )}
              </div>

              {(search ||
                selectedCategory !==
                  "Semua Suku Cadang" ||
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
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginatedProducts.map((product) => (
                  <SparepartCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-10 text-center shadow-sm">
                <div className="text-4xl mb-4">
                  ⌕
                </div>

                <h3 className="text-lg font-bold text-primary">
                  Suku cadang tidak ditemukan
                </h3>

                <p className="text-sm text-on-surface-variant mt-2 max-w-md mx-auto">
                  Coba gunakan kata kunci lain atau
                  pilih kategori suku cadang yang
                  berbeda.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Tampilkan Semua Part
                </button>
              </div>
            )}

            {/* PAGINATION */}
            {filteredProducts.length > 0 && (
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* INFO */}
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {startItem} - {endItem}
                  </span>{" "}
                  dari{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  suku cadang
                </p>

                {/* CONTROLS */}
                <div className="flex items-center gap-1.5 text-sm">
                  {/* PREVIOUS */}
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(page - 1, 1)
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface flex items-center gap-1 transition-colors hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span>←</span>
                    <span className="hidden sm:inline">
                      Sebelumnya
                    </span>
                  </button>

                  {/* PAGE NUMBERS */}
                  {getPaginationPages().map(
                    (page, index) => {
                      if (page === "...") {
                        return (
                          <span
                            key={`ellipsis-${index}`}
                            className="px-1 text-outline"
                          >
                            ...
                          </span>
                        );
                      }

                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() =>
                            setCurrentPage(page)
                          }
                          aria-current={
                            currentPage === page
                              ? "page"
                              : undefined
                          }
                          className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-colors ${
                            currentPage === page
                              ? "bg-primary text-on-primary"
                              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                  )}

                  {/* NEXT */}
                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages ||
                      totalPages === 0
                    }
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(
                          page + 1,
                          totalPages
                        )
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface flex items-center gap-1 transition-colors hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="hidden sm:inline">
                      Selanjutnya
                    </span>
                    <span>→</span>
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

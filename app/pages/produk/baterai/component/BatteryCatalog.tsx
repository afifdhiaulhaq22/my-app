
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import BatteryCard, { type Battery } from "./BatteryCard";
import BatterySidebar from "./BatterySidebar";
import BatteryToolbar from "./BatteryToolbar";

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const ITEMS_PER_PAGE = 6;

type PayloadMedia = {
  id: number | string;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
};

type PayloadBatteryImage = {
  id?: string | number;
  image?: number | string | PayloadMedia | null;
};

type PayloadBattery = {
  id: number | string;
  slug?: string | null;
  merk?: string | null;
  category?: string | null;
  noPart?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  tegangan?: string | null;
  kapasitas?: string | null;
  kompatibel?: string | null;
  gambar?: PayloadBatteryImage[] | null;
};

type PayloadResponse = {
  docs?: PayloadBattery[];
};

function getImageUrl(
  image: number | string | PayloadMedia | null | undefined
): string {
  if (!image || typeof image !== "object") {
    return "/images/placeholder-battery.png";
  }

  if (!image.url) {
    return "/images/placeholder-battery.png";
  }

  if (/^https?:\/\//i.test(image.url)) {
    return image.url;
  }

  return `${PAYLOAD_URL}${
    image.url.startsWith("/") ? "" : "/"
  }${image.url}`;
}

function mapBattery(item: PayloadBattery): Battery {
  const firstImage = item.gambar?.find(
    (entry) => entry.image && typeof entry.image === "object"
  )?.image;

  const image =
    firstImage && typeof firstImage === "object"
      ? firstImage
      : null;

  return {
    id: item.id,
    slug: item.slug || "",
    category: item.category || "lainnya",
    brand: item.merk || "-",
    name: item.merk || "Baterai Forklift",
    partNumber: item.noPart || "-",
    description: item.deskripsi || "",
    compatibility: item.kompatibel || "-",
    capacity: item.kapasitas || "-",
    voltage: item.tegangan || "-",
    visual: "bg-slate-200",
    stock: 0,
    image: getImageUrl(image),
    imageAlt:
      image?.alt || image?.filename || item.merk || "Baterai forklift",
    isNew: Boolean(item.isnew),
  };
}

export default function BatteryCatalog() {
  const [products, setProducts] = useState<Battery[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Semua Baterai");
  const [sort, setSort] = useState("rekomendasi");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBatteries = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const query = new URLSearchParams({
        depth: "2",
        limit: "100",
        sort: "merk",
        "where[isaktif][equals]": "true",
      });

      const response = await fetch(
        `${PAYLOAD_URL}/api/baterai?${query.toString()}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error(
          `Gagal mengambil data baterai (HTTP ${response.status}).`
        );
      }

      const data: PayloadResponse = await response.json();

      setProducts((data.docs || []).map(mapBattery));
    } catch (err) {
      console.error("Gagal mengambil data baterai:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat mengambil data baterai."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchBatteries();
  }, [fetchBatteries]);

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
      result = [...result].sort((a, b) => {
        const capacityA = parseFloat(a.capacity) || 0;
        const capacityB = parseFloat(b.capacity) || 0;
        return capacityA - capacityB;
      });
    }

    return result;
  }, [products, search, selectedCategory, sort]);

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

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProducts = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

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

            {loading ? (
              <div className="bg-surface-container-lowest rounded-xl p-10 text-center">
                <p className="text-sm text-on-surface-variant">
                  Memuat katalog baterai...
                </p>
              </div>
            ) : error ? (
              <div className="bg-surface-container-lowest rounded-xl p-10 text-center shadow-sm">
                <h3 className="text-lg font-bold text-primary">
                  Gagal Memuat Baterai
                </h3>

                <p className="text-sm text-on-surface-variant mt-2">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => void fetchBatteries()}
                  className="mt-5 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Coba Lagi
                </button>
              </div>
            ) : filteredProducts.length > 0 ? (
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
                  Belum ada baterai yang sesuai dengan pencarian
                  atau kategori yang dipilih.
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

            {!loading &&
              !error &&
              filteredProducts.length > 0 && (
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

                    <button
                      type="button"
                      disabled={safeCurrentPage === totalPages}
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

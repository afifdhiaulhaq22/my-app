
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";
import ProductToolbar from "./ProductToolbar";

type Product = {
  id: string | number;
  slug: string;
  name: string;
  category: string;
  capacity: number;
  badge: string;
  image: string;
  location: string;
  description: string;
  fuel: string;
  liftHeight: string;
  mast: string;
};

const ITEMS_PER_PAGE = 8;

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

type PayloadMedia = {
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
};

type PayloadImageRelation = PayloadMedia | number | string | null;

type PayloadGalleryItem = {
  image?: PayloadImageRelation;
};

type PayloadForklift = {
  id: string | number;
  slug?: string | null;
  merk?: string | null;
  category?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  kapasitas?: string | number | null;
  garansipabrikan?: string | number | null;
  tinggitiangmast?: string | number | null;
  sertifikasi?: string | null;
  gambar?: PayloadGalleryItem[] | null;
};

type PayloadResponse = {
  docs?: PayloadForklift[];
};

const CATEGORY_LABELS: Record<string, string> = {
  diesel: "Diesel",
  electric: "Electric",
  lpg: "LPG",
  "reach-truck": "Reach Truck",
  "hand-pallet": "Hand Pallet",
  lainnya: "Lainnya",
};

function getCapacityNumber(
  value: string | number | null | undefined
): number {
  if (typeof value === "number") {
    return value;
  }

  if (!value) {
    return 0;
  }

  const text = value.toLowerCase().trim();
  const match = text.match(/[\d.,]+/);

  if (!match) {
    return 0;
  }

  const numberText = match[0];
  let number: number;

  if (numberText.includes(",") && numberText.includes(".")) {
    number =
      numberText.lastIndexOf(",") > numberText.lastIndexOf(".")
        ? Number(numberText.replace(/\./g, "").replace(",", "."))
        : Number(numberText.replace(/,/g, ""));
  } else if (numberText.includes(",")) {
    number = Number(numberText.replace(",", "."));
  } else if (numberText.includes(".")) {
    const parts = numberText.split(".");
    number =
      parts.length === 2 && parts[1].length === 3
        ? Number(numberText.replace(".", ""))
        : Number(numberText);
  } else {
    number = Number(numberText);
  }

  if (!Number.isFinite(number)) {
    return 0;
  }

  if (/\bton\b|\btonase\b/i.test(text)) {
    return number * 1000;
  }

  return number;
}

function getImageUrl(
  relation: PayloadImageRelation | undefined
): string | null {
  if (!relation || typeof relation !== "object") {
    return null;
  }

  const imageUrl = relation.url;

  if (!imageUrl) {
    return null;
  }

  if (/^https?:\/\//i.test(imageUrl)) {
    return imageUrl;
  }

  return `${PAYLOAD_URL}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
}

function toProduct(item: PayloadForklift): Product {
  const firstImage = item.gambar?.[0]?.image;
  const category = item.category || "lainnya";

  return {
    id: item.id,
    slug: item.slug || String(item.id),
    name: item.merk || "Forklift",
    category,
    capacity: getCapacityNumber(item.kapasitas),
    badge: item.isnew ? "New" : "Used",
    image:
      getImageUrl(firstImage) || "/images/placeholder-forklift.png",
    location: "Hubungi kami",
    description:
      item.deskripsi || "Hubungi kami untuk informasi produk.",
    fuel: CATEGORY_LABELS[category] || category,
    liftHeight: item.tinggitiangmast
      ? String(item.tinggitiangmast)
      : "Hubungi kami",
    mast: item.garansipabrikan
      ? String(item.garansipabrikan)
      : "Hubungi kami",
  };
}

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("rekomendasi");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (signal: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const url = new URL(`${PAYLOAD_URL}/api/forklift`);

      url.searchParams.set("depth", "2");
      url.searchParams.set("limit", "100");
      url.searchParams.set("sort", "merk");
      url.searchParams.set("where[isaktif][equals]", "true");

      const response = await fetch(url.toString(), {
        method: "GET",
        signal,
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `Gagal mengambil data forklift (HTTP ${response.status}).`
        );
      }

      const data: PayloadResponse = await response.json();

      setProducts((data.docs || []).map(toProduct));
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }

      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat mengambil data forklift."
      );
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    void fetchProducts(controller.signal);

    return () => controller.abort();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const searchableText = [
        product.name,
        product.category,
        product.fuel,
        String(product.capacity),
        product.description,
        product.location,
        product.liftHeight,
        product.mast,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !keyword || searchableText.includes(keyword);

      return matchesCategory && matchesSearch;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.capacity - b.capacity);
    } else if (sort === "high") {
      result = [...result].sort((a, b) => b.capacity - a.capacity);
    }

    return result;
  }, [products, search, category, sort]);

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const safePage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const paginatedProducts = useMemo(() => {
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;

    return filteredProducts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredProducts, safePage]);

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("rekomendasi");
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  const getPaginationPages = (): (number | "...")[] => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    const pages: (number | "...")[] = [1];

    if (safePage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, safePage - 1);
    const end = Math.min(totalPages - 1, safePage + 1);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (safePage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const startItem =
    filteredProducts.length === 0
      ? 0
      : (safePage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    safePage * ITEMS_PER_PAGE,
    filteredProducts.length
  );

  return (
    <>
      <ProductToolbar
        search={search}
        setSearch={handleSearchChange}
        sort={sort}
        setSort={handleSortChange}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <ProductSidebar
            category={category}
            setCategory={handleCategoryChange}
            resetFilters={resetFilters}
          />

          <div className="w-full flex-1 space-y-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  unit forklift
                </p>

                {category !== "all" && (
                  <p className="mt-1 text-xs text-secondary">
                    Filter: {CATEGORY_LABELS[category] || category}
                  </p>
                )}

                {search && (
                  <p className="mt-1 text-xs text-on-surface-variant">
                    Pencarian:{" "}
                    <span className="font-semibold text-primary">
                      &quot;{search}&quot;
                    </span>
                  </p>
                )}
              </div>

              {(search ||
                category !== "all" ||
                sort !== "rekomendasi") && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  Reset Filter
                </button>
              )}
            </div>

            {loading ? (
              <div
                className="rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm"
                role="status"
              >
                <p className="text-sm text-on-surface-variant">
                  Memuat data forklift...
                </p>
              </div>
            ) : error ? (
              <div className="rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm">
                <h3 className="text-lg font-bold text-primary">
                  Data forklift gagal dimuat
                </h3>

                <p className="mt-2 text-sm text-on-surface-variant">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const controller = new AbortController();
                    void fetchProducts(controller.signal);
                  }}
                  className="mt-5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
                >
                  Coba Lagi
                </button>
              </div>
            ) : paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm">
                <div className="mb-4 text-4xl">⌕</div>

                <h3 className="text-lg font-bold text-primary">
                  Unit forklift tidak ditemukan
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">
                  Coba gunakan kata kunci lain atau pilih kategori
                  forklift yang berbeda.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
                >
                  Tampilkan Semua Unit
                </button>
              </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-sm sm:flex-row">
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {startItem} - {endItem}
                  </span>{" "}
                  dari{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  unit forklift
                </p>

                <div className="flex items-center gap-1.5 text-sm">
                  <button
                    type="button"
                    disabled={safePage === 1}
                    onClick={() =>
                      setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    className="flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-1.5 text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span>←</span>
                    <span className="hidden sm:inline">
                      Sebelumnya
                    </span>
                  </button>

                  {getPaginationPages().map((page, index) =>
                    page === "..." ? (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-1 text-outline"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        aria-current={
                          safePage === page ? "page" : undefined
                        }
                        className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold transition-colors ${
                          safePage === page
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    disabled={safePage >= totalPages || totalPages === 0}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(page + 1, totalPages)
                      )
                    }
                    className="flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-1.5 text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
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

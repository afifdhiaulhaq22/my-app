
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SparepartCard, { type Sparepart } from "./SparepartCard";
import SparepartSidebar from "./SparepartSidebar";
import SparepartToolbar from "./SparepartToolbar";

type PayloadMedia = {
  id?: string | number;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
};

type PayloadImageRelation =
  | PayloadMedia
  | string
  | number
  | null
  | undefined;

type PayloadGalleryItem = {
  id?: string | number;
  image?: PayloadImageRelation;
};

type PayloadSparepart = {
  id: string | number;
  gambar?: PayloadGalleryItem[] | null;
  merk?: string | null;
  slug?: string | null;
  category?: string | null;
  noPart?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  kompatibel?: string | null;
};

type PayloadResponse = {
  docs?: PayloadSparepart[];
  totalDocs?: number;
};

type CatalogSparepart = Sparepart & {
  slug: string;
  image: string;
  imageAlt: string;
  isNew: boolean;
  isActive: boolean;
  categoryValue: string;
};

const ITEMS_PER_PAGE = 8;
const FALLBACK_IMAGE = "/images/placeholder-forklift.png";

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const CATEGORY_LABELS: Record<string, string> = {
  filter: "Filtration",
  ban: "Tires",
  rantai: "Chains",
  rem: "Brakes",
  mesin: "Engine",
  kelistrikan: "Electrical",
  hidrolik: "Hydraulics",
  transmisi: "Transmission",
  lainnya: "Other",
};

function getImageUrl(
  relation: PayloadImageRelation
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

  return `${PAYLOAD_URL}${
    imageUrl.startsWith("/") ? "" : "/"
  }${imageUrl}`;
}

function getCategoryLabel(category?: string | null): string {
  if (!category) return "Other";

  return CATEGORY_LABELS[category.toLowerCase()] || category;
}

function normalizeCategory(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+parts?$/i, "")
    .replace(/[^a-z0-9]/g, "");
}

function mapSparepart(
  item: PayloadSparepart
): CatalogSparepart {
  const gallery = item.gambar ?? [];

  const images = gallery.flatMap((galleryItem) => {
    const relation = galleryItem.image;
    const src = getImageUrl(relation);

    if (!src) return [];

    const alt =
      relation && typeof relation === "object"
        ? relation.alt?.trim() ||
          relation.filename ||
          item.merk ||
          "Gambar suku cadang"
        : item.merk || "Gambar suku cadang";

    return [{ src, alt }];
  });

  const categoryValue = item.category || "lainnya";

  return {
    id: item.id,
    slug: item.slug || String(item.id),
    category: getCategoryLabel(categoryValue),
    categoryValue,
    brand: item.merk || "KEI HAI Genuine",
    name: item.merk || "Suku Cadang",
    partNumber: item.noPart || "-",
    description: item.deskripsi || "Hubungi kami untuk informasi suku cadang.",
    compatibility: item.kompatibel || "Hubungi kami untuk informasi kompatibilitas.",
    visual: "bg-slate-600",
    image: images[0]?.src || FALLBACK_IMAGE,
    imageAlt: images[0]?.alt || item.merk || "Gambar suku cadang",
    isNew: item.isnew ?? false,
    isActive: item.isaktif ?? true,
  };
}

export default function SparepartCatalog() {
  const [products, setProducts] = useState<CatalogSparepart[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Semua Suku Cadang");
  const [sort, setSort] = useState("rekomendasi");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  const fetchSpareparts = useCallback(async (signal: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const url = new URL(`${PAYLOAD_URL}/api/suku-cadang`);

      url.searchParams.set("depth", "2");
      url.searchParams.set("limit", "100");
      url.searchParams.set("sort", "merk");
      url.searchParams.set("where[isaktif][equals]", "true");

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        signal,
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `Gagal mengambil data suku cadang (HTTP ${response.status}).`
        );
      }

      const data: PayloadResponse = await response.json();

      setProducts((data.docs ?? []).map(mapSparepart));
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }

      console.error("Gagal memuat suku cadang:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat mengambil data suku cadang."
      );
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    void fetchSpareparts(controller.signal);

    return () => controller.abort();
  }, [fetchSpareparts, retryKey]);

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const selected = normalizeCategory(selectedCategory);

    let result = products.filter((product) => {
      const categoryLabel = normalizeCategory(product.category);
      const categoryValue = normalizeCategory(product.categoryValue);

      const matchesCategory =
        selectedCategory === "Semua Suku Cadang" ||
        selected === categoryLabel ||
        selected === categoryValue;

      const searchableText = [
        product.name,
        product.partNumber,
        product.brand,
        product.category,
        product.categoryValue,
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
  }, [products, search, selectedCategory, sort]);

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredProducts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredProducts, currentPage]);

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

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("Semua Suku Cadang");
    setSort("rekomendasi");
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

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

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

      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <SparepartSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="w-full flex-1 space-y-8">
            {/* RESULT HEADER */}
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  suku cadang
                </p>

                {selectedCategory !== "Semua Suku Cadang" && (
                  <p className="mt-1 text-xs text-secondary">
                    Filter: {selectedCategory}
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
                selectedCategory !== "Semua Suku Cadang" ||
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

            {/* LOADING */}
            {loading && (
              <div
                className="rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm"
                role="status"
              >
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-surface-container border-t-primary" />
                <p className="text-sm text-on-surface-variant">
                  Memuat data suku cadang...
                </p>
              </div>
            )}

            {/* ERROR */}
            {!loading && error && (
              <div className="rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm">
                <h3 className="text-lg font-bold text-primary">
                  Data suku cadang gagal dimuat
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => setRetryKey((key) => key + 1)}
                  className="mt-5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
                >
                  Coba Lagi
                </button>
              </div>
            )}

            {/* PRODUCT GRID */}
            {!loading && !error && paginatedProducts.length > 0 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedProducts.map((product) => (
                  <SparepartCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}

            {/* EMPTY STATE */}
            {!loading && !error && paginatedProducts.length === 0 && (
              <div className="rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm">
                <div className="mb-4 text-4xl">⌕</div>

                <h3 className="text-lg font-bold text-primary">
                  Suku cadang tidak ditemukan
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">
                  Coba gunakan kata kunci lain atau pilih kategori
                  suku cadang yang berbeda.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
                >
                  Tampilkan Semua Part
                </button>
              </div>
            )}

            {/* PAGINATION */}
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
                  suku cadang
                </p>

                <div className="flex items-center gap-1.5 text-sm">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    className="flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-1.5 text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span>←</span>
                    <span className="hidden sm:inline">Sebelumnya</span>
                  </button>

                  {getPaginationPages().map((page, index) => {
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
                        onClick={() => setCurrentPage(page)}
                        aria-current={
                          currentPage === page ? "page" : undefined
                        }
                        className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold transition-colors ${
                          currentPage === page
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages || totalPages === 0
                    }
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(page + 1, totalPages)
                      )
                    }
                    className="flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-1.5 text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="hidden sm:inline">Selanjutnya</span>
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

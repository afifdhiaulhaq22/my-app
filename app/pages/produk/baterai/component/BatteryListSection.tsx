
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

type PayloadMedia = {
  id: number | string;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
};

type PayloadBatteryImage = {
  id?: number | string;
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

type Product = {
  id: number | string;
  name: string;
  slug: string;
  partNumber: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  specifications: {
    label: string;
    value: string;
  }[];
};

const categoryLabels: Record<string, string> = {
  "lead-acid": "Lead Acid",
  lithium: "Lithium",
  traction: "Traction",
  starter: "Starter",
  lainnya: "Lainnya",
};

function getImageUrl(
  image: number | string | PayloadMedia | null | undefined
): string {
  if (!image || typeof image !== "object" || !image.url) {
    return "/images/placeholder-battery.png";
  }

  if (/^https?:\/\//i.test(image.url)) {
    return image.url;
  }

  return `${PAYLOAD_URL}${
    image.url.startsWith("/") ? "" : "/"
  }${image.url}`;
}

function mapProduct(item: PayloadBattery): Product {
  const firstImage = item.gambar?.find(
    (entry) =>
      entry.image &&
      typeof entry.image === "object" &&
      "url" in entry.image
  )?.image;

  const image =
    firstImage && typeof firstImage === "object"
      ? firstImage
      : null;

  const voltage = item.tegangan?.trim() || "-";
  const capacity = item.kapasitas?.trim() || "-";

  return {
    id: item.id,
    name: item.merk || "Baterai Forklift",
    slug: item.slug || "",
    partNumber: item.noPart || "-",
    category: categoryLabels[item.category || ""] ||
      item.category ||
      "Lainnya",
    description: item.deskripsi || "Informasi produk belum tersedia.",
    image: getImageUrl(image),
    alt:
      image?.alt ||
      image?.filename ||
      item.merk ||
      "Baterai forklift",
    badge: item.isnew ? "Produk Baru" : "Baterai Industri",
    specifications: [
      {
        label: "Tegangan",
        value: voltage === "-" || /\s*V$/i.test(voltage)
          ? voltage
          : `${voltage} V`,
      },
      {
        label: "Kapasitas",
        value: capacity,
      },
      {
        label: "Kategori",
        value:
          categoryLabels[item.category || ""] ||
          item.category ||
          "Lainnya",
      },
      {
        label: "Kompatibilitas",
        value: item.kompatibel || "-",
      },
    ],
  };
}

export default function BatterySection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBatteries = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const query = new URLSearchParams({
        depth: "2",
        limit: "8",
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

      setProducts(
        (data.docs || [])
          .filter((item) => item.isaktif === true)
          .map(mapProduct)
      );
    } catch (err) {
      console.error("Gagal memuat katalog baterai:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat memuat produk baterai."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchBatteries();
  }, [fetchBatteries]);

  const scrollCarousel = (direction: "prev" | "next") => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.8;

    carouselRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-surface-container-low py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-space-lg flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-label-technical text-label-technical font-bold uppercase tracking-widest text-secondary">
              Katalog Utama
            </span>

            <h2 className="mt-1 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
              Produk Baterai Industri
            </h2>

            <p className="mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Temukan pilihan baterai untuk mendukung kebutuhan
              forklift elektrik dan berbagai aplikasi material
              handling Anda.
            </p>
          </div>

          {/* TOMBOL CAROUSEL */}
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <button
              type="button"
              aria-label="Produk baterai sebelumnya"
              onClick={() => scrollCarousel("prev")}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined">
                arrow_back
              </span>
            </button>

            <button
              type="button"
              aria-label="Produk baterai selanjutnya"
              onClick={() => scrollCarousel("next")}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="rounded-xl bg-surface-container-lowest p-10 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Memuat produk baterai...
            </p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-xl bg-surface-container-lowest p-10 text-center">
            <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
              Produk baterai belum dapat dimuat
            </h3>

            <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
              {error}
            </p>

            <button
              type="button"
              onClick={() => void fetchBatteries()}
              className="mt-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* CAROUSEL */}
        {!loading && !error && products.length > 0 && (
          <div
            ref={carouselRef}
            className="flex gap-space-lg overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <article
                key={product.id}
                className="flex min-w-[320px] max-w-[320px] shrink-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md sm:min-w-[360px] sm:max-w-[360px]"
              >
                {/* GAMBAR PRODUK */}
                <div className="group relative h-56 overflow-hidden bg-surface-container-low">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded bg-surface-container-lowest/90 px-2.5 py-1 font-label-technical text-label-technical font-bold uppercase tracking-wider text-on-surface shadow-sm backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                {/* INFORMASI PRODUK */}
                <div className="flex flex-1 flex-col justify-between gap-4 p-space-md">
                  <div>
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="font-label-technical text-label-technical font-bold uppercase tracking-wider text-primary">
                        {product.category}
                      </span>

                      <span className="max-w-[55%] truncate rounded bg-surface-container px-2 py-0.5 font-label-technical text-label-technical font-bold text-secondary">
                        {product.partNumber}
                      </span>
                    </div>

                    <h3 className="mb-2 font-headline-sm text-headline-sm font-bold text-primary">
                      {product.name}
                    </h3>

                    <p className="mb-3 line-clamp-3 font-body-sm text-body-sm text-on-surface-variant">
                      {product.description}
                    </p>

                    {/* SPESIFIKASI DARI CMS */}
                    <div className="grid grid-cols-2 gap-2 rounded-lg bg-surface-container-low p-3 font-label-technical">
                      {product.specifications.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex min-w-0 flex-col"
                        >
                          <span className="font-medium text-on-surface-variant">
                            {spec.label}
                          </span>

                          <span
                            title={spec.value}
                            className="break-words font-bold text-body-sm text-primary"
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LINK DETAIL */}
                  <Link
                    href={`/pages/produk/baterai/${encodeURIComponent(product.slug || product.partNumber)}`}
                    className="group flex w-full items-center justify-center gap-1.5 rounded-lg bg-surface-container-low px-4 py-2.5 text-center font-label-md text-label-md font-bold text-primary transition-colors hover:bg-secondary hover:text-on-secondary"
                  >
                    <span>Lihat Detail Baterai</span>

                    <span className="material-symbols-outlined text-[16px] text-secondary transition-colors group-hover:text-on-secondary">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* DATA KOSONG */}
        {!loading && !error && products.length === 0 && (
          <div className="rounded-xl bg-surface-container-lowest p-10 text-center">
            <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
              Belum Ada Produk Baterai
            </h3>

            <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
              Produk baterai aktif akan ditampilkan di bagian ini.
            </p>
          </div>
        )}

        {/* LIHAT SEMUA */}
        {!loading && !error && products.length > 0 && (
          <div className="mt-6 text-center">
            <Link
              href="/baterai"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
            >
              Lihat Semua Baterai
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

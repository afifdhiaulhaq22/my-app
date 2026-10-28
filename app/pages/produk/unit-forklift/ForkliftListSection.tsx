
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");
const FORKLIFT_API = `${PAYLOAD_URL}/api/forklift?depth=2&limit=10&where[isaktif][equals]=true&sort=merk`;

type Media = {
  url?: string | null;
  alt?: string | null;
};

type ForkliftImage = {
  image?: number | Media | null;
};

type Forklift = {
  id: string | number;
  gambar?: ForkliftImage[] | null;
  merk?: string | null;
  slug?: string | null;
  category?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  kapasitas?: string | null;
  garansipabrikan?: string | null;
  tinggitiangmast?: string | null;
  sertifikasi?: string | null;
};

type PayloadResponse = {
  docs?: Forklift[];
  totalDocs?: number;
  message?: string;
  errors?: { message?: string }[];
};

const CATEGORY_LABELS: Record<string, string> = {
  diesel: "Diesel Forklift",
  electric: "Electric Forklift",
  lpg: "LPG Forklift",
  "reach-truck": "Reach Truck",
  "hand-pallet": "Hand Pallet",
  lainnya: "Lainnya",
};

function getImage(image?: ForkliftImage["image"]): Media | null {
  if (!image || typeof image === "number") return null;
  return image;
}

function getImageUrl(url?: string | null): string | null {
  if (!url) return null;

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${PAYLOAD_URL.replace(/\/+$/, "")}/${url.replace(/^\/+/, "")}`;
}

function truncateDescription(
  description?: string | null,
  maxWords = 18,
): string | null {
  if (!description?.trim()) return null;

  const words = description.trim().split(/\s+/);

  return words.length > maxWords
    ? `${words.slice(0, maxWords).join(" ")}...`
    : description.trim();
}

export default function ProductSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<Forklift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchForklift() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(FORKLIFT_API, {
          signal: controller.signal,
          cache: "no-store",
        });

        const responseText = await response.text();

        let data: PayloadResponse;

        try {
          data = JSON.parse(responseText) as PayloadResponse;
        } catch {
          console.error(
            "[ProductSection] Respons bukan JSON:",
            response.status,
            responseText.slice(0, 500),
          );

          throw new Error(
            `Respons CMS bukan JSON (HTTP ${response.status}).`,
          );
        }

        if (!response.ok) {
          console.error("[ProductSection] CMS error:", {
            status: response.status,
            response: data,
          });

          throw new Error(
            data.message ||
              data.errors?.[0]?.message ||
              `Gagal mengambil data (HTTP ${response.status}).`,
          );
        }

        if (!Array.isArray(data.docs)) {
          console.error("[ProductSection] Format data tidak valid:", data);
          throw new Error("Format data forklift dari CMS tidak valid.");
        }

        console.log(
          "[ProductSection] Produk berhasil dimuat:",
          data.docs.length,
        );

        setProducts(data.docs.filter((product) => product.isaktif !== false));
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("[ProductSection] Gagal memuat forklift:", err);

        setError(
          err instanceof Error
            ? err.message
            : "Terjadi kesalahan saat mengambil data forklift.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchForklift();

    return () => controller.abort();
  }, []);

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
        {/* Section Header */}
        <div className="mb-space-lg flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-label-technical text-label-technical font-bold uppercase tracking-widest text-secondary">
              Katalog Utama
            </span>

            <h2 className="mt-1 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
              Produk Unggulan Forklift
            </h2>

            <p className="mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Temukan pilihan unit forklift yang sesuai dengan kebutuhan
              operasional dan aplikasi industri Anda.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <button
              type="button"
              aria-label="Slide sebelumnya"
              onClick={() => scrollCarousel("prev")}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <button
              type="button"
              aria-label="Slide selanjutnya"
              onClick={() => scrollCarousel("next")}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <p className="py-8 text-center text-on-surface-variant">
            Memuat data forklift...
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="py-8 text-center text-on-surface-variant">
            <p>Data forklift gagal dimuat.</p>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <p className="py-8 text-center text-on-surface-variant">
            Belum ada produk forklift yang tersedia.
          </p>
        )}

        {/* Product Carousel */}
        {!loading && !error && products.length > 0 && (
          <div
            ref={carouselRef}
            className="flex gap-space-lg overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => {
              const firstImage = getImage(product.gambar?.[0]?.image);
              const imageUrl = getImageUrl(firstImage?.url);
              const description = truncateDescription(product.deskripsi);

              const category = product.category
                ? CATEGORY_LABELS[product.category] || product.category
                : null;

              const specifications = [
                { label: "Kapasitas", value: product.kapasitas },
                {
                  label: "Garansi Pabrikan",
                  value: product.garansipabrikan,
                },
                {
                  label: "Tinggi Tiang Mast",
                  value: product.tinggitiangmast,
                },
                { label: "Sertifikasi", value: product.sertifikasi },
              ].filter((spec) => spec.value?.trim());

              const detailUrl = product.slug
                ? `/pages/produk/unit-forklift/${product.slug}`
                : "/pages/produk/unit-forklift";

              return (
                <article
                  key={product.id}
                  className="flex min-w-[320px] max-w-[320px] shrink-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md sm:min-w-[360px] sm:max-w-[360px]"
                >
                  {/* Product Image */}
                  <div className="group relative h-56 overflow-hidden bg-surface-container-low">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={
                          firstImage?.alt ||
                          product.merk ||
                          "Gambar forklift"
                        }
                        loading="lazy"
                        onError={(event) => {
                          console.error(
                            "[ProductSection] Gambar gagal dimuat:",
                            imageUrl,
                          );
                          event.currentTarget.style.display = "none";
                        }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-on-surface-variant">
                        Gambar tidak tersedia
                      </div>
                    )}

                    {/* NEW Badge */}
                    {product.isnew === true && (
                      <span className="absolute left-3 top-3 z-10 rounded-md bg-red-600 px-3 py-1 font-label-technical text-label-technical font-bold uppercase tracking-wider text-white shadow-md">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="flex flex-1 flex-col justify-between gap-4 p-space-md">
                    <div>
                      {category && (
                        <div className="mb-2">
                          <span className="font-label-technical text-label-technical font-bold uppercase tracking-wider text-primary">
                            {category}
                          </span>
                        </div>
                      )}

                      {product.merk && (
                        <h3 className="mb-2 font-headline-sm text-headline-sm font-bold text-primary">
                          {product.merk}
                        </h3>
                      )}

                      {description && (
                        <p className="mb-3 line-clamp-3 font-body-sm text-body-sm text-on-surface-variant">
                          {description}
                        </p>
                      )}

                      {specifications.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 rounded-lg bg-surface-container-low p-3 font-label-technical">
                          {specifications.map((spec) => (
                            <div key={spec.label} className="flex flex-col">
                              <span className="font-medium text-on-surface-variant">
                                {spec.label}
                              </span>
                              <span className="font-bold text-body-sm text-primary">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Detail Link */}
                    <Link
                      href={detailUrl}
                      className="group flex w-full items-center justify-center gap-1.5 rounded-lg bg-surface-container-low px-4 py-2.5 text-center font-label-md text-label-md font-bold text-primary transition-colors hover:bg-secondary hover:text-on-secondary"
                    >
                      <span>Lihat Detail Spesifikasi</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary transition-colors group-hover:text-on-secondary">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

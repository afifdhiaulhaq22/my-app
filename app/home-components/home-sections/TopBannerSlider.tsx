"use client";

import { useEffect, useState } from "react";
import {
  getTopBanners,
  getBannerImageUrl,
  type Banner,
} from "@/lib/topbaner";

export default function TopBannerSlider() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Mengambil banner melalui helper API Payload CMS
  useEffect(() => {
    const controller = new AbortController();

    async function fetchBanners() {
      try {
        setLoading(true);
        setError(false);

        const data = await getTopBanners(controller.signal);
        setBanners(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("Gagal memuat banner:", err);
        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchBanners();

    return () => controller.abort();
  }, []);

  // Reset indeks jika jumlah banner berubah
  useEffect(() => {
    if (current >= banners.length) {
      setCurrent(0);
    }
  }, [banners.length, current]);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    if (isPaused || banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, banners.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  if (loading) {
    return (
      <section className="flex h-[260px] items-center justify-center bg-[#0F2D59] text-white sm:h-[340px] md:h-[420px] lg:h-[480px]">
        Memuat banner...
      </section>
    );
  }

  if (error || banners.length === 0) {
    return (
      <section className="flex h-[260px] items-center justify-center bg-[#0F2D59] px-4 text-center text-white sm:h-[340px] md:h-[420px] lg:h-[480px]">
        {error ? "Banner belum dapat dimuat." : "Belum ada banner aktif."}
      </section>
    );
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0F2D59]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]">
        {banners.map((banner, index) => {
          const imageUrl = getBannerImageUrl(banner.image);

          return (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={index !== current}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={banner.alt || banner.title}
                  className="h-full w-full object-cover"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              )}

              {/* Overlay agar teks lebih mudah dibaca */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

              {(banner.title || banner.description) && (
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-7xl px-6 text-white sm:px-10 lg:px-16">
                    {banner.title && (
                      <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                        {banner.title}
                      </h2>
                    )}

                    {banner.description && (
                      <p className="mt-3 max-w-xl text-sm sm:text-base md:text-lg">
                        {banner.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Tombol navigasi dan pagination */}
        {banners.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Banner sebelumnya"
              className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#D92525] sm:left-6 md:left-8 md:h-12 md:w-12"
            >
              <span className="text-xl" aria-hidden="true">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Banner berikutnya"
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#D92525] sm:right-6 md:right-8 md:h-12 md:w-12"
            >
              <span className="text-xl" aria-hidden="true">
                →
              </span>
            </button>

            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {banners.map((banner, index) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Buka banner ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-9 bg-[#D92525]"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
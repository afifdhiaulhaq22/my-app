
"use client";

import { useEffect, useState } from "react";

const PAYLOAD_URL = "http://localhost:3001";
const BANNERS_API = `${PAYLOAD_URL}/api/banners`;

type HeroSlide = {
  id: string | number;
  image: string | null;
  alt: string;
  icon: string;
  title: string;
  description: string;
};

type PayloadImage = {
  url?: string | null;
  alt?: string | null;
};

type PayloadBanner = {
  id: string | number;
  image?: string | number | PayloadImage | null;
  alt?: string | null;
  icon?: string | null;
  title?: string | null;
  description?: string | null;
};

type PayloadResponse = {
  docs: PayloadBanner[];
};

export default function HeroCarousel() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBanners() {
      try {
        const response = await fetch(
          `${BANNERS_API}?where[isActive][equals]=true&sort=order&limit=20&depth=1`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Gagal mengambil banner: ${response.status}`
          );
        }

        const result: PayloadResponse = await response.json();

        const bannerData: HeroSlide[] = result.docs
          .map((banner) => {
            const image =
              typeof banner.image === "object" &&
              banner.image !== null
                ? banner.image.url
                : null;

            const imageUrl = image
              ? image.startsWith("http")
                ? image
                : `${PAYLOAD_URL.replace(/\/$/, "")}${image.startsWith("/") ? "" : "/"}${image}`
              : null;

            return {
              id: banner.id,
              image: imageUrl,
              alt:
                banner.alt ||
                (typeof banner.image === "object" &&
                banner.image !== null
                  ? banner.image.alt || ""
                  : ""),
              icon: banner.icon || "image",
              title: banner.title || "",
              description: banner.description || "",
            };
          })
          .filter(
            (slide) => slide.image && slide.title
          );

        setSlides(bannerData);
        setActiveIndex(0);
      } catch (err) {
        if (
          err instanceof Error &&
          err.name === "AbortError"
        ) {
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

  const nextSlide = () => {
    setActiveIndex((current) =>
      current >= slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? slides.length - 1 : current - 1
    );
  };

  if (loading) {
    return (
      <div className="relative lg:col-span-5">
        <div className="h-[480px] animate-pulse rounded-2xl bg-surface-container" />
      </div>
    );
  }

  if (error || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  return (
    <div className="relative lg:col-span-5">
      <div className="relative overflow-hidden rounded-2xl bg-surface-container shadow-xl">
        {/* Images */}
        <div className="relative h-[480px] w-full">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image!}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-105 opacity-0"
              }`}
            />
          ))}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Slide sebelumnya"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-lowest/90 text-primary shadow-md backdrop-blur-sm transition-all hover:bg-surface-container-lowest"
        >
          <span className="material-symbols-outlined text-[22px]">
            chevron_left
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide berikutnya"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-lowest/90 text-primary shadow-md backdrop-blur-sm transition-all hover:bg-surface-container-lowest"
        >
          <span className="material-symbols-outlined text-[22px]">
            chevron_right
          </span>
        </button>

        {/* Floating Badge */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-xl bg-surface-container-lowest/95 p-4 shadow-lg backdrop-blur-md">
          {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <span className="material-symbols-outlined text-[22px]">
              {activeSlide.icon}
            </span>
          </div> */}

          <div className="min-w-0">
            <p className="truncate font-title-md text-title-md leading-tight text-primary">
              {activeSlide.title}
            </p>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {activeSlide.description}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ke slide ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-secondary"
                  : "w-1.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

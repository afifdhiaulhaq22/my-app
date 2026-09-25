"use client";

import { useState } from "react";

const slides = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-XjHs9mBTGDc0ULhNed7axcn1inf1-_l302YJREbMk6m57uKoBu4mAMCRPwp-aIV_Xbjau9JCRkYFuwfimFoM8VJzys1etPzjWSmin3sc15slaTbt5FljR1aubnEgQZa7U5nsyIjPVdH5VU_eYAkT4-YuUik_GTd4NPNvuLvfXm89EWR5AqKjK6H-JmBjX7XOD9lFaa5O2DiTHMtjGphLeu1FmEGNomKK6NFw3HCwNwXbG90JmhEE",
    alt: "Forklift Heavy Duty Operasional Pergudangan Industri Logistik Modern PT KEI HAI",
    icon: "workspace_premium",
    title: "Standar Keselamatan K3",
    description:
      "Unit Bergaransi Resmi & Lulus Sertifikasi Uji Depnaker",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116493-da8b7f4a8a34?auto=format&fit=crop&w=1200&q=80",
    alt: "Operasional forklift di gudang industri",
    icon: "engineering",
    title: "Teknisi Profesional",
    description:
      "Didukung teknisi berpengalaman untuk menjaga performa unit Anda.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=80",
    alt: "Forklift dan material handling equipment",
    icon: "local_shipping",
    title: "Armada Siap Pakai",
    description:
      "Pilihan unit forklift untuk berbagai kebutuhan operasional industri.",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <div className="relative lg:col-span-5">
      <div className="relative overflow-hidden rounded-2xl bg-surface-container shadow-xl">
        {/* Images */}
        <div className="relative h-[480px] w-full">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            />
          ))}

          {/* Gradient Scrim */}
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <span className="material-symbols-outlined text-[22px]">
              {activeSlide.icon}
            </span>
          </div>

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
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-0 gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
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

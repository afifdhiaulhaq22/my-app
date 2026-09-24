"use client";

import { useRef } from "react";
import Link from "next/link";

type Product = {
  name: string;
  series: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  href: string;
  specifications: {
    label: string;
    value: string;
  }[];
};

const PRODUCTS: Product[] = [


  {
    name: "Electric Pallet Truck",
    series: "EPT20 Ride-On",
    category: "KEI HAI",
    badge: "Warehouse Stacker",
    description:
      "Unit stacker elektrik lincah dan ergonomis untuk transfer palet dan penataan rak pergudangan intensif.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZiawwm5ybXDA0S4EGFm1H_ium-6cE1GyO-taY3LCUDX3qitBB-BXD5p7TV1xl46lyA6QO5MiKWCUzHzvsznAIrTnYFM4dt3kPdy6kZDqNeXkIXYPQWfcidulBaI01qN-u2SoCy1D0svYNPdNOZbJU2f7goWSxSTrdRa9Y_mkoLJNQrDouejx8m_xj8hDlXc1uHZMK7hU0vcrompaMMAWxQivORDs9F7_CpY7qVghMknHTqKuIZdkH",
    alt: "Electric Pallet Truck Stacker KEI HAI EPT20 Ride-On",
    href: "/unit-forklift/ept20-ride-on",
    specifications: [
      {
        label: "Kapasitas",
        value: "2.0 Ton",
      },
      {
        label: "Jenis Unit",
        value: "Electric Walkie",
      },
      {
        label: "Tinggi Angkat",
        value: "3.6 Meter",
      },
      {
        label: "Radius Putar",
        value: "1.45 Meter",
      },
    ],
  },
];

export default function ProductSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

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
              Produk Unggulan
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
              <span className="material-symbols-outlined">
                arrow_back
              </span>
            </button>

            <button
              type="button"
              aria-label="Slide selanjutnya"
              onClick={() => scrollCarousel("next")}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-space-lg overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.series}
              className="flex min-w-[320px] max-w-[320px] shrink-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md sm:min-w-[360px] sm:max-w-[360px]"
            >
              {/* Product Image */}
              <div className="group relative h-56 overflow-hidden bg-surface-container-low">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Product Badge */}
                <span className="absolute right-3 top-3 rounded bg-surface-container-lowest/90 px-2.5 py-1 font-label-technical text-label-technical font-bold uppercase tracking-wider text-on-surface shadow-sm backdrop-blur">
                  {product.badge}
                </span>
              </div>

              {/* Product Content */}
              <div className="flex flex-1 flex-col justify-between gap-4 p-space-md">
                <div>
                  {/* Brand & Series */}
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="font-label-technical text-label-technical font-bold uppercase tracking-wider text-primary">
                      {product.category}
                    </span>

                    <span className="rounded bg-surface-container px-2 py-0.5 font-label-technical text-label-technical font-bold text-secondary">
                      {product.series}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mb-2 font-headline-sm text-headline-sm font-bold text-primary">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-3 line-clamp-3 font-body-sm text-body-sm text-on-surface-variant">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-2 rounded-lg bg-surface-container-low p-3 font-label-technical">
                    {product.specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex flex-col"
                      >
                        <span className="font-medium text-on-surface-variant">
                          {spec.label}:
                        </span>

                        <span className="font-bold text-body-sm text-primary">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detail Link */}
                <Link
                  href={product.href}
                  className="group flex w-full items-center justify-center gap-1.5 rounded-lg bg-surface-container-low px-4 py-2.5 text-center font-label-md text-label-md font-bold text-primary transition-colors hover:bg-secondary hover:text-on-secondary"
                >
                  <span>Lihat Detail Spesifikasi</span>

                  <span className="material-symbols-outlined text-[16px] text-secondary transition-colors group-hover:text-on-secondary">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

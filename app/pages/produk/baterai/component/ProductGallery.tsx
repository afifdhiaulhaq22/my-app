"use client";

import { useState } from "react";

type ProductImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  product: {
    id: string | number;
    slug: string;
    name: string;
    images: ProductImage[];
  };
};

const FALLBACK_IMAGE = "/images/placeholder-battery.png";

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images =
    product.images.length > 0
      ? product.images
      : [{ src: FALLBACK_IMAGE, alt: product.name }];

  // Mencegah index tidak valid jika jumlah gambar berubah.
  const safeIndex = Math.min(selectedIndex, images.length - 1);
  const selectedImage = images[safeIndex];

  return (
    <div className="flex flex-col gap-4">
      {/* GAMBAR UTAMA */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
        <img
          key={selectedImage.src}
          src={selectedImage.src}
          alt={selectedImage.alt}
          onError={(event) => {
            const image = event.currentTarget;
            image.onerror = null;
            image.src = FALLBACK_IMAGE;
          }}
          className="h-full w-full object-contain p-6 transition-opacity duration-300"
        />

        {/* LABEL GAMBAR */}
        <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)]">
          <span className="inline-block rounded bg-primary px-3 py-1.5 font-label-technical text-xs uppercase text-on-primary shadow-sm">
            {selectedImage.alt}
          </span>
        </div>

        {/* INDIKATOR GAMBAR */}
        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded bg-surface-container-lowest/90 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm">
            {safeIndex + 1} / {images.length}
          </span>
        )}
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => {
            const isActive = index === safeIndex;

            return (
              <button
                key={`${product.slug}-image-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Tampilkan gambar ${
                  image.alt || `baterai ${index + 1}`
                }`}
                aria-pressed={isActive}
                className={`aspect-[4/3] overflow-hidden rounded-lg bg-surface-container-lowest p-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "bg-surface-container ring-2 ring-primary"
                    : "shadow-sm hover:bg-surface-container-high"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt || `${product.name} - gambar ${index + 1}`}
                  loading="lazy"
                  onError={(event) => {
                    const imageElement = event.currentTarget;
                    imageElement.onerror = null;
                    imageElement.src = FALLBACK_IMAGE;
                  }}
                  className="h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

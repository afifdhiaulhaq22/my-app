"use client";

import { useState } from "react";

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = product.images[selectedIndex];

  return (
    <div className="flex flex-col gap-4">

      {/* GAMBAR UTAMA */}
      <div className="relative w-full aspect-[4/3] bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex items-center justify-center">

        <img
          src={selectedImage.src}
          alt={`${product.name} - ${selectedImage.title}`}
          className="w-full h-full object-contain p-6 transition-opacity duration-300"
        />

        {/* TITLE IMAGE */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-on-primary font-label-technical uppercase px-3 py-1.5 rounded shadow-sm">
            {selectedImage.title}
          </span>
        </div>

        {/* INFO BAWAH */}
        <div className="absolute bottom-3 left-4 right-4 bg-primary-container/90 text-on-primary rounded-lg px-4 py-2 flex items-center justify-between shadow-sm">
          <span className="font-label-technical tracking-wider uppercase">
            KODE UNIT: {product.code}
          </span>

          <span className="font-label-technical tracking-wider uppercase font-bold">
            TERSEDIA INSPEKSI LANGSUNG
          </span>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-4 gap-3">
        {product.images.map((image, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={`${product.slug}-image-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`
                aspect-[4/3]
                rounded-lg
                overflow-hidden
                bg-surface-container-lowest
                p-1.5
                transition-all
                ${
                  isActive
                    ? "ring-2 ring-primary bg-surface-container"
                    : "shadow-sm hover:bg-surface-container-high"
                }
              `}
            >
              <img
                src={image.src}
                alt={`${product.name} - ${image.title}`}
                className="w-full h-full object-contain"
              />
            </button>
          );
        })}
      </div>

    </div>
  );
}

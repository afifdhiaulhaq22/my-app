
import Link from "next/link";

export type Sparepart = {
  id: string | number;
  category: string;
  brand: string;
  name: string;
  partNumber: string;
  description: string;
  compatibility: string;
  visual: string;
  slug?: string;
  image?: string;
  imageAlt?: string;
  isNew?: boolean;
};

type Props = {
  product: Sparepart;
};

const PLACEHOLDER_IMAGE = "/images/placeholder-sparepart.png";

export default function SparepartCard({ product }: Props) {
  const imageSrc = product.image || PLACEHOLDER_IMAGE;
  const detailSlug = product.slug || product.partNumber;

  return (
    <article className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-all hover:shadow-md">
      <div className="space-y-4">
        {/* Kategori dan merek */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded bg-surface-container px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            {product.category}
          </span>

          {product.brand && (
            <span className="text-right text-[10px] font-semibold uppercase text-outline">
              {product.brand}
            </span>
          )}
        </div>

        {/* Gambar dari Payload CMS */}
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-surface-bright p-3">
          {product.isNew && (
            <span className="absolute left-2 top-2 z-10 rounded bg-secondary px-2 py-1 text-[10px] font-bold uppercase text-on-secondary">
              Baru
            </span>
          )}

          <img
            src={imageSrc}
            alt={product.imageAlt || product.name}
            loading="lazy"
            className="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
            onError={(event) => {
              const img = event.currentTarget;

              if (img.src !== window.location.origin + PLACEHOLDER_IMAGE) {
                img.src = PLACEHOLDER_IMAGE;
              }
            }}
          />
        </div>

        {/* Informasi produk */}
        <div>
          <h3 className="text-base font-bold text-primary transition-colors group-hover:text-secondary">
            {product.name}
          </h3>

          <div className="mt-2 inline-block rounded bg-surface-container-high px-2 py-1 font-mono text-xs font-bold text-primary">
            Part No: {product.partNumber}
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-on-surface-variant">
          {product.description}
        </p>

        <div className="rounded bg-surface-container-low p-2 text-xs text-on-surface-variant">
          <strong className="font-semibold text-primary">
            Kompatibel:
          </strong>{" "}
          {product.compatibility}
        </div>
      </div>

      {/* Tombol detail */}
      <div className="mt-2 pt-4">
        <Link
          href={` suku-cadang/${encodeURIComponent(detailSlug)}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
        >
          <span>Lihat Detail</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

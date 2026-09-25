import Link from "next/link";

export type Sparepart = {
  id: number;
  category: string;
  brand: string;
  name: string;
  partNumber: string;
  description: string;
  compatibility: string;
  visual: string;
};

type Props = {
  product: Sparepart;
};

export default function SparepartCard({ product }: Props) {
  return (
    <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
            {product.category}
          </span>

          <span className="text-[10px] text-outline uppercase font-semibold text-right">
            {product.brand}
          </span>
        </div>

        <div className="w-full h-44 bg-surface-bright rounded-lg flex items-center justify-center overflow-hidden p-4">
          <div
            className={`w-28 h-28 rounded-full flex items-center justify-center ${product.visual}`}
          >
            <div className="w-16 h-16 rounded-full border-8 border-white/70" />
          </div>
        </div>

        <div>
          <h3 className="text-base text-primary font-bold group-hover:text-secondary transition-colors">
            {product.name}
          </h3>

          <div className="mt-2 inline-block px-2 py-1 rounded bg-surface-container-high text-primary font-mono font-bold text-xs">
            Part No: {product.partNumber}
          </div>
        </div>

        <p className="text-sm text-on-surface-variant line-clamp-2">
          {product.description}
        </p>

        <div className="p-2 rounded bg-surface-container-low text-xs text-on-surface-variant">
          <strong className="text-primary font-semibold">
            Kompatibel:
          </strong>{" "}
          {product.compatibility}
        </div>
      </div>

      <div className="pt-4 mt-2">
        <Link
          href={`/sparepart/${product.partNumber}`}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-on-primary hover:bg-secondary transition-colors text-sm font-semibold"
        >
          <span>Lihat Detail</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

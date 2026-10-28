
import Link from "next/link";

export type Battery = {
  id: number | string;
  slug?: string;
  category: string;
  brand: string;
  name: string;
  partNumber: string;
  description: string;
  compatibility: string;
  capacity: string;
  voltage: string;
  visual: string;
  stock: number;
  image?: string;
  imageAlt?: string;
  isNew?: boolean;
};

type BatteryCardProps = {
  battery: Battery;
};

const categoryLabels: Record<string, string> = {
  "lead-acid": "Lead Acid",
  lithium: "Lithium",
  traction: "Traction",
  starter: "Starter",
  lainnya: "Lainnya",
};

export default function BatteryCard({
  battery,
}: BatteryCardProps) {
  const detailSlug = battery.slug || battery.partNumber;

  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* GAMBAR PRODUK */}
      <div
        className={`relative aspect-[4/3] ${battery.visual || "bg-slate-200"} flex items-center justify-center p-4`}
      >
        {battery.image ? (
          <img
            src={battery.image}
            alt={battery.imageAlt || battery.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <img
            src="/images/placeholder-battery.png"
            alt={battery.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        )}

        {/* KATEGORI */}
        <span className="absolute top-3 left-3 bg-primary text-on-primary px-2.5 py-1 rounded uppercase tracking-wider text-[11px] font-bold">
          {categoryLabels[battery.category] || battery.category}
        </span>

        {/* BADGE PRODUK BARU */}
        {battery.isNew && (
          <span className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded text-[11px] font-bold">
            Baru
          </span>
        )}

        {/* READY STOCK
            Ditampilkan hanya jika data stok tersedia.
            Koleksi Payload saat ini belum memiliki field stok. */}
      </div>

      {/* INFORMASI PRODUK */}
      <div className="p-5 flex-1">
        <div className="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">
          {battery.brand}
        </div>

        <h3 className="text-lg text-primary font-bold leading-tight mb-1">
          {battery.name}
        </h3>

        <div className="font-mono text-sm font-bold text-secondary mb-3">
          {battery.partNumber}
        </div>

        <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
          {battery.description || "Belum ada deskripsi produk."}
        </p>

        {/* SPESIFIKASI */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-surface-container-low rounded-lg px-3 py-2">
            <div className="text-[10px] text-on-surface-variant uppercase">
              Tegangan
            </div>

            <div className="text-sm font-bold text-primary">
              {battery.voltage && battery.voltage !== "-"
                ? `${battery.voltage}${/\s*V$/i.test(battery.voltage) ? "" : " V"}`
                : "-"}
            </div>
          </div>

          <div className="bg-surface-container-low rounded-lg px-3 py-2">
            <div className="text-[10px] text-on-surface-variant uppercase">
              Kapasitas
            </div>

            <div className="text-sm font-bold text-primary">
              {battery.capacity || "-"}
            </div>
          </div>
        </div>

        {/* KOMPATIBILITAS */}
        <div className="text-xs text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg line-clamp-2">
          <span className="font-semibold">Kompatibilitas: </span>
          {battery.compatibility || "-"}
        </div>
      </div>

      {/* TOMBOL DETAIL */}
      <div className="p-5 pt-0">
        <Link
          href={`baterai/${encodeURIComponent(detailSlug)}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container text-primary font-semibold text-sm hover:bg-primary hover:text-on-primary transition-colors"
        >
          <span>Lihat Detail</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

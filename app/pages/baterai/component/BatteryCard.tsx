export type Battery = {
  id: number;
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
};

type BatteryCardProps = {
  battery: Battery;
};

export default function BatteryCard({
  battery,
}: BatteryCardProps) {
  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      <div
        className={`relative aspect-[4/3] ${battery.visual} flex items-center justify-center p-6`}
      >
        <div className="w-32 h-40 rounded-lg bg-zinc-800 shadow-xl relative">
          <div className="absolute top-3 left-3 right-3 h-5 rounded bg-red-600" />

          <div className="absolute top-10 left-4 right-4">
            <div className="text-[9px] text-white font-bold uppercase tracking-wider">
              {battery.brand}
            </div>

            <div className="text-[18px] text-white font-black mt-1">
              {battery.voltage}V
            </div>

            <div className="text-[10px] text-zinc-300 mt-1">
              {battery.capacity}
            </div>
          </div>

          <div className="absolute -top-2 left-5 w-6 h-3 bg-zinc-700 rounded-t" />
          <div className="absolute -top-2 right-5 w-6 h-3 bg-zinc-700 rounded-t" />
        </div>

        <span className="absolute top-3 left-3 bg-primary text-on-primary px-2.5 py-1 rounded uppercase tracking-wider text-[11px] font-bold">
          {battery.category}
        </span>

        {battery.stock > 0 && (
          <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded text-[11px] font-semibold">
            Ready Stock
          </span>
        )}
      </div>

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
          {battery.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-surface-container-low rounded-lg px-3 py-2">
            <div className="text-[10px] text-on-surface-variant uppercase">
              Tegangan
            </div>
            <div className="text-sm font-bold text-primary">
              {battery.voltage}V
            </div>
          </div>

          <div className="bg-surface-container-low rounded-lg px-3 py-2">
            <div className="text-[10px] text-on-surface-variant uppercase">
              Kapasitas
            </div>
            <div className="text-sm font-bold text-primary">
              {battery.capacity}
            </div>
          </div>
        </div>

        <div className="text-xs text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg">
          {battery.compatibility}
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container text-primary font-semibold text-sm hover:bg-primary hover:text-on-primary transition-colors"
        >
          <span>Lihat Detail</span>
          <span>→</span>
        </button>
      </div>
    </article>
  );
}

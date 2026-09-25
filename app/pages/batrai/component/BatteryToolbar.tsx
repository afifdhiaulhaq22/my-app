type BatteryToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
};

export default function BatteryToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: BatteryToolbarProps) {
  return (
    <section className="w-full bg-surface-container-lowest shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div>
            <span className="text-[11px] text-secondary font-bold uppercase tracking-wider">
              Battery & Energy System
            </span>

            <h1 className="text-2xl md:text-3xl font-extrabold text-primary mt-1">
              Katalog Baterai Forklift
            </h1>

            <p className="text-sm text-on-surface-variant mt-1">
              Temukan baterai sesuai tipe forklift, kapasitas, dan kebutuhan
              operasional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                ⌕
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  onSearchChange(event.target.value)
                }
                placeholder="Cari baterai atau part number..."
                className="w-full sm:w-72 pl-9 pr-4 py-2.5 rounded-lg bg-surface-container-low border border-transparent focus:border-primary focus:outline-none text-sm text-primary"
              />
            </div>

            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className="px-4 py-2.5 rounded-lg bg-surface-container-low text-sm text-primary font-semibold focus:outline-none"
            >
              <option value="rekomendasi">Rekomendasi</option>
              <option value="part">Part Number</option>
              <option value="nama">Nama Produk</option>
              <option value="kapasitas">Kapasitas</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
};

export default function SparepartToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <section className="bg-surface-bright border-b border-surface-container sticky top-[116px] z-40 shadow-sm backdrop-blur-md bg-surface-bright/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="relative w-full md:max-w-2xl">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
              ⌕
            </span>

            <input
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari nama, tipe, merek, atau nomor part..."
              className="w-full h-11 pl-11 pr-4 bg-surface-container-lowest rounded-lg text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />

            {search && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                aria-label="Hapus pencarian"
              >
                ×
              </button>
            )}
          </div>

          {/* <div className="flex items-center gap-2 w-full md:w-auto shrink-0 justify-end overflow-x-auto">
            <span className="text-xs uppercase text-on-surface-variant font-bold mr-1 hidden sm:inline">
              Urutkan:
            </span>

            {[
              ["rekomendasi", "Rekomendasi"],
              ["part", "Part Number A-Z"],
              ["kompatibilitas", "Kompatibilitas"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => onSortChange(value)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  sort === value
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

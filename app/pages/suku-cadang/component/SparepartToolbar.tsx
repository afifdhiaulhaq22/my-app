"use client"

type Props = {
  search: string
  onSearchChange: (value: string) => void
  sort: string
  onSortChange: (value: string) => void
}

export default function SparepartToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <section className="w-full bg-surface-container py-4 sticky top-[116px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-outline">
            search
          </span>

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-11 pl-11 pr-10 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            placeholder="Cari nama, tipe, merek, atau nomor part..."
            type="text"
          />

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
              aria-label="Hapus pencarian"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

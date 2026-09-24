"use client"

type ProductSidebarProps = {
  category: string
  setCategory: (value: string) => void
  resetFilters: () => void
}

const categories = [
  ["all", "grid_view", "Semua Forklift", "36"],
  ["diesel", "local_gas_station", "Forklift Diesel", "12"],
  ["electric", "bolt", "Forklift Electric", "10"],
  ["lpg", "propane_tank", "Forklift LPG / Dual Fuel", "6"],
  ["reachtruck", "height", "Forklift Reach Truck", "4"],
  ["pallettruck", "pallet", "Pallet Truck", "8"],
  ["stacker", "layers", "Stacker", "6"],
]

export default function ProductSidebar({
  category,
  setCategory,
  resetFilters,
}: ProductSidebarProps) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
      {/* Category */}
      <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3">
          <h2 className="font-title-md text-title-md text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">
              category
            </span>

            <span>Kategori Forklift</span>
          </h2>

          <button
            onClick={resetFilters}
            className="font-label-technical text-label-technical text-secondary hover:underline uppercase tracking-wider"
          >
            Reset
          </button>
        </div>

        <div className="space-y-1">
          {categories.map(([value, icon, label, count]) => {
            const active = category === value

            return (
              <button
                key={value}
                onClick={() => setCategory(value)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-left font-label-md text-label-md ${
                  active
                    ? "bg-primary-fixed text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">
                    {icon}
                  </span>

                  <span>{label}</span>
                </span>

                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    active
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Technical Filters */}
      <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-5">
        <FilterGroup
          icon="weight"
          title="Kapasitas Beban"
          items={[
            "< 2.0 Ton (Indoor)",
            "2.5 - 3.5 Ton (Standar)",
            "4.0 - 7.0 Ton (Medium)",
            "> 10 Ton (Heavy / Port)",
          ]}
        />

        <FilterGroup
          icon="vertical_align_top"
          title="Tipe Mast / Tiang"
          items={[
            "Simplex (2-Stage Standard)",
            "Duplex Full Free Lift",
            "Triplex (3-Stage High Reach)",
          ]}
        />

        <FilterGroup
          icon="tire_repair"
          title="Tipe Ban (Tires)"
          items={[
            "Pneumatic (Angin / Outdoor)",
            "Solid Rubber (Bantat Anti Bocor)",
          ]}
        />
      </div>

      {/* Consultation */}
      <div className="bg-primary text-on-primary rounded-xl p-5 shadow-md">
        <div className="space-y-3">
          <div className="inline-flex p-2 bg-secondary-container rounded-lg text-on-secondary-container">
            <span className="material-symbols-outlined text-[20px]">
              engineering
            </span>
          </div>

          <h3 className="font-title-md text-title-md font-bold text-on-primary leading-snug">
            Butuh Rekomendasi Unit?
          </h3>

          <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
            Tim spesialis kami siap membantu menghitung beban kerja,
            turning radius, dan spesifikasi mast gudang Anda.
          </p>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/628119208000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg font-semibold hover:bg-secondary-container transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                chat
              </span>
              WhatsApp Konsultan
            </a>

            <a
              href="tel:02189835500"
              className="inline-flex items-center justify-center gap-2 w-full py-2 bg-surface-container-lowest/10 text-on-primary rounded-lg font-label-md text-label-md hover:bg-surface-container-lowest/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                call
              </span>
              (021) 8983-5500
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

function FilterGroup({
  icon,
  title,
  items,
}: {
  icon: string
  title: string
  items: string[]
}) {
  return (
    <div>
      <h3 className="font-label-lg text-label-lg text-primary mb-3 flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[16px] text-secondary">
          {icon}
        </span>

        <span>{title}</span>
      </h3>

      <div className="space-y-2">
        {items.map((item, index) => (
          <label
            key={item}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer font-body-sm text-body-sm"
          >
            <input
              type="checkbox"
              defaultChecked={index === 1}
              className="w-4 h-4 rounded text-primary focus:ring-primary"
            />

            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

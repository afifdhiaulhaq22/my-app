
import ConsultationCard from "../../component/ConsultationCard";

type ProductSidebarProps = {
  category: string;
  setCategory: (value: string) => void;
  resetFilters: () => void;
};

const categories = [
  { label: "Semua Forklift", value: "all" },
  { label: "Forklift Diesel", value: "diesel" },
  { label: "Forklift Electric", value: "electric" },
  { label: "Forklift LPG", value: "lpg" },
  { label: "Reach Truck", value: "reach-truck" },
  { label: "Hand Pallet", value: "hand-pallet" },
  { label: "Lainnya", value: "lainnya" },
];

export default function ProductSidebar({
  category,
  setCategory,
  resetFilters,
}: ProductSidebarProps) {
  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-[270px]">
      {/* KATEGORI */}
      <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between border-b border-surface-container pb-3">
          <h2 className="text-base font-bold text-primary">
            Kategori Forklift
          </h2>

          <span className="text-on-surface-variant">☷</span>
        </div>

        <ul className="space-y-1 text-sm">
          {categories.map((item) => {
            const active = category === item.value;

            return (
              <li key={item.value}>
                <button
                  type="button"
                  onClick={() => setCategory(item.value)}
                  aria-pressed={active}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors ${
                    active
                      ? "bg-primary font-semibold text-on-primary shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {category !== "all" && (
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 w-full rounded-lg border border-surface-container px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-surface-container-low"
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* KONSULTASI */}
      <ConsultationCard
        title="Konsultasi Forklift"
        description="Tim spesialis kami siap membantu menentukan forklift yang sesuai dengan kapasitas beban, turning radius, dan spesifikasi mast gudang Anda."
        icon="?"
      />
    </aside>
  );
}
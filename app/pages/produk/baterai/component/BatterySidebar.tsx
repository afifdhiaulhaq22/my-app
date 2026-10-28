import ConsultationCard from '../../component/ConsultationCard';
type BatterySidebarProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  { label: "Semua Baterai", value: "Semua Baterai" },
  { label: "Baterai Lead Acid", value: "lead-acid" },
  { label: "Baterai Lithium", value: "lithium" },
  { label: "Baterai Traction", value: "traction" },
  { label: "Baterai Starter", value: "starter" },
  { label: "Baterai Lainnya", value: "lainnya" },
];

export default function BatterySidebar({
  selectedCategory,
  onCategoryChange,
}: BatterySidebarProps) {
  return (
    <aside className="w-full lg:w-[270px] shrink-0 space-y-6">
      {/* KATEGORI */}
      <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container">
          <h2 className="text-base text-primary font-bold">
            Kategori Baterai
          </h2>

          <span className="text-on-surface-variant">☷</span>
        </div>

        <ul className="space-y-1 text-sm">
          {categories.map((category) => {
            const active =
              selectedCategory === category.value;

            return (
              <li key={category.value}>
                <button
                  type="button"
                  onClick={() =>
                    onCategoryChange(category.value)
                  }
                  aria-pressed={active}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                    active
                      ? "bg-primary text-on-primary font-semibold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <span>{category.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* KONSULTASI */}
      <ConsultationCard
        title="Konsultasi Baterai"
        description="Bingung menentukan baterai yang sesuai dengan forklift Anda? Kirim informasi unit atau serial plate kepada tim teknis kami."
        icon="?"
      />

    </aside>
  );
}

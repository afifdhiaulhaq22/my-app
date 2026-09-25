type BatterySidebarProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  "Semua Baterai",
  "Lead Acid",
  "Maintenance Free",
  "Deep Cycle",
  "Lithium",
];

export default function BatterySidebar({
  selectedCategory,
  onCategoryChange,
}: BatterySidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 sticky top-24">
        <div className="mb-5">
          <span className="text-[11px] text-secondary font-bold uppercase tracking-wider">
            Filter Katalog
          </span>

          <h2 className="text-lg font-bold text-primary mt-1">
            Kategori Baterai
          </h2>
        </div>

        <div className="space-y-1.5">
          {categories.map((category) => {
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                  active
                    ? "bg-primary text-on-primary font-semibold"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
              >
                <span>{category}</span>

                {active && <span>✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

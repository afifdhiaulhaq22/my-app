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
    <aside className="w-full lg:w-[270px] shrink-0 space-y-6">
      {/* Category */}
      <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container">
          <h2 className="text-base text-primary font-bold">
            Kategori Baterai
          </h2>

          <span className="text-on-surface-variant">☷</span>
        </div>

        <ul className="space-y-1 text-sm">
          {categories.map((category) => {
            const active = selectedCategory === category;

            return (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                    active
                      ? "bg-primary text-on-primary font-semibold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <span>{category}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Consultation */}
      <div className="bg-primary text-on-primary rounded-xl p-5 shadow-md space-y-3 relative overflow-hidden">
        <div className="w-24 h-24 rounded-full bg-primary-container absolute -right-6 -bottom-6 opacity-40" />

        <div className="flex items-center gap-2 text-secondary-fixed">
          <span className="text-xl">?</span>

          <span className="text-xs uppercase tracking-wider font-bold">
            Konsultasi Baterai
          </span>
        </div>

        <p className="text-sm text-on-primary-container leading-relaxed">
          Bingung menentukan baterai yang sesuai dengan forklift Anda?
          Kirim informasi unit atau serial plate kepada tim teknis kami.
        </p>

        <a
          href="https://wa.me/628119208000"
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded bg-secondary text-on-secondary text-sm font-semibold hover:bg-secondary-container transition-all shadow-sm"
        >
          WhatsApp +62 811-920-8000
        </a>
      </div>
    </aside>
  );
}

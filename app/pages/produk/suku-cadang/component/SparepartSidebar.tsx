import ButtonCTACatalog from "../../component/ButtonCTACatalog";
type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  { label: "Semua Suku Cadang", value: "all" },
  { label: "Filter", value: "filter" },
  { label: "Ban", value: "ban" },
  { label: "Rantai", value: "rantai" },
  { label: "Rem", value: "rem" },
  { label: "Mesin", value: "mesin" },
  { label: "Kelistrikan", value: "kelistrikan" },
  { label: "Hidrolik", value: "hidrolik" },
  { label: "Transmisi", value: "transmisi" },
  { label: "Lainnya", value: "lainnya" },
];

export default function SparepartSidebar({
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-[270px]">
      <div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between border-b border-surface-container pb-3">
          <h2 className="text-base font-bold text-primary">
            Kategori Suku Cadang
          </h2>

          <span className="text-on-surface-variant" aria-hidden="true">
            ☷
          </span>
        </div>

        <ul className="space-y-1 text-sm">
          {categories.map((category) => {
            const active = selectedCategory === category.value;

            return (
              <li key={category.value}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(category.value)}
                  aria-pressed={active}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors ${
                    active
                      ? "bg-primary font-semibold text-on-primary shadow-sm"
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

      <div className="relative space-y-3 overflow-hidden rounded-xl bg-primary p-5 text-on-primary shadow-md">
        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary-container opacity-40" />

        <div className="relative flex items-center gap-2 text-secondary-fixed">
          <span className="text-xl" aria-hidden="true">
            ?
          </span>

          <span className="text-xs font-bold uppercase tracking-wider">
            Konsultasi Part
          </span>
        </div>

        <p className="relative text-sm leading-relaxed text-on-primary-container">
          Ragu dengan nomor part forklift Anda? Kirim foto serial plate
          unit Anda ke tim teknis kami.
        </p>

        <ButtonCTACatalog />
      </div>
    </aside>
  );
}

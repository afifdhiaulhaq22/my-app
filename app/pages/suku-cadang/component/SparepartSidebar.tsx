type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  ["Semua Suku Cadang", 180],
  ["Engine Parts", 28],
  ["Transmission Parts", 16],
  ["Hydraulic Parts", 24],
  ["Electrical Parts", 18],
  ["Brake System", 14],
  ["Steering Parts", 12],
  ["Mast & Fork Parts", 20],
  ["Wheel & Tire", 16],
  ["Filter & Lube", 22],
  ["Battery & Charger", 10],
];

export default function SparepartSidebar({
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <aside className="w-full lg:w-[270px] shrink-0 space-y-6">
      <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container">
          <h2 className="text-base text-primary font-bold">
            Kategori Suku Cadang
          </h2>

          <span className="text-on-surface-variant">☷</span>
        </div>

        <ul className="space-y-1 text-sm">
          {categories.map(([name, count]) => {
            const active = selectedCategory === name;

            return (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(String(name))}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                    active
                      ? "bg-primary text-on-primary font-semibold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <span>{name}</span>

                  {/* <span
                    className={`text-xs px-2 py-0.5 rounded font-mono ${
                      active
                        ? "bg-primary-container text-on-primary"
                        : "text-outline"
                    }`}
                  >
                    {count}
                  </span> */}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-6">
        <div>
          <h3 className="text-xs text-primary font-bold mb-3 uppercase tracking-wide">
            Merek / Brand
          </h3>

          <div className="space-y-2 text-sm text-on-surface-variant">
            {[
              "KEI HAI Genuine",
              "OEM Japan Specification",
              "OEM Europe Standard",
            ].map((brand, index) => (
              <label
                key={brand}
                className="flex items-center gap-2 cursor-pointer hover:text-primary"
              >
                <input
                  type="checkbox"
                  defaultChecked={index === 0}
                  className="w-4 h-4 rounded text-primary focus:ring-primary"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-surface-container pt-5">
          <h3 className="text-xs text-primary font-bold mb-3 uppercase tracking-wide">
            Kompatibilitas Tonase
          </h3>

          <div className="space-y-2 text-sm text-on-surface-variant">
            {[
              "Forklift 1.5 – 2.5 Ton",
              "Forklift 3.0 – 5.0 Ton",
              "Forklift > 7.0 Ton (Heavy)",
            ].map((tonnage, index) => (
              <label
                key={tonnage}
                className="flex items-center gap-2 cursor-pointer hover:text-primary"
              >
                <input
                  type="checkbox"
                  defaultChecked={index === 1}
                  className="w-4 h-4 rounded text-primary focus:ring-primary"
                />
                <span>{tonnage}</span>
              </label>
            ))}
          </div>
        </div>
      </div> */}

      <div className="bg-primary text-on-primary rounded-xl p-5 shadow-md space-y-3 relative overflow-hidden">
        <div className="w-24 h-24 rounded-full bg-primary-container absolute -right-6 -bottom-6 opacity-40" />

        <div className="flex items-center gap-2 text-secondary-fixed">
          <span className="text-xl">?</span>
          <span className="text-xs uppercase tracking-wider font-bold">
            Konsultasi Part
          </span>
        </div>

        <p className="text-sm text-on-primary-container leading-relaxed">
          Ragu dengan nomor part forklift Anda? Kirim foto serial plate
          unit Anda ke tim teknis kami.
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

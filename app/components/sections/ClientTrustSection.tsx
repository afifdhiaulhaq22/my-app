const SECTORS = [
  "Manufaktur Otomotif",
  "Pergudangan E-Commerce",
  "Distribusi Logistik",
  "Industri F&B",
  "Kimia & Pelabuhan",
];

export default function ClientTrustSection() {
  return (
    <section className="bg-surface-container-low py-space-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-space-md px-6 md:flex-row">
        {/* Trust Statement */}
        <div className="flex shrink-0 items-center gap-3">
          <span className="material-symbols-outlined text-[24px] text-primary">
            corporate_fare
          </span>

          <span className="font-title-md text-title-md font-bold text-primary">
            Mitra Terpercaya 250+ Perusahaan
          </span>
        </div>

        {/* Sector List */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-on-surface-variant md:justify-end">
          {SECTORS.map((sector) => (
            <span
              key={sector}
              className="rounded-full bg-surface-container-lowest px-3 py-1 font-label-technical text-label-technical font-semibold shadow-sm transition-colors hover:bg-primary hover:text-on-primary"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

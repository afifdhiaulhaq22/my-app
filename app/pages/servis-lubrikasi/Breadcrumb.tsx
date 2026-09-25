export default function Breadcrumb() {
  return (
    <section className="w-full bg-surface-container-lowest shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-label-md text-on-surface-variant"
        >
          <a href="/" className="transition-colors hover:text-primary">
            Beranda
          </a>

          <span className="material-symbols-outlined text-[14px] text-outline">
            chevron_right
          </span>

          <a
            href="/layanan"
            className="transition-colors hover:text-primary"
          >
            Layanan
          </a>

          <span className="material-symbols-outlined text-[14px] text-outline">
            chevron_right
          </span>

          <span className="font-semibold text-primary">
            Servis dan Lubrikasi Forklift
          </span>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded bg-surface-container px-3 py-1 text-label-technical font-bold uppercase tracking-wider text-primary">
            <span className="material-symbols-outlined text-[13px] text-secondary">
              verified_user
            </span>
            Layanan Perawatan & Lubrikasi Industri
          </span>

          <span className="inline-flex items-center gap-1.5 rounded bg-primary-fixed/40 px-3 py-1 text-label-technical font-bold uppercase tracking-wider text-on-primary-fixed">
            <span className="material-symbols-outlined text-[13px] text-primary">
              location_on
            </span>
            Dukungan Armada Gudang & Pabrik MM2100
          </span>
        </div>
      </div>
    </section>
  );
}

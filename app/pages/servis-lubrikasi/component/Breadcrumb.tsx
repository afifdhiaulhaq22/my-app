import Link from "next/link";

export default function Breadcrumb() {
  return (
    <section className="w-full bg-surface-container-lowest shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-[16px]">
              home
            </span>

            <span>Beranda</span>
          </Link>

          <span className="material-symbols-outlined text-[14px] text-outline">
            chevron_right
          </span>

          <span className="font-bold text-primary">
            Servis dan Lubrikasi
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

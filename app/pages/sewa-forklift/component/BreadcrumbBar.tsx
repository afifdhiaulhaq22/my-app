import Link from "next/link";

export default function BreadcrumbBar() {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
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
            Sewa Unit
          </span>
        </nav>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px] text-secondary">
              verified_user
            </span>
            Solusi Rental Fleksibel Industri
          </span>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Armada Terawat &amp; Siap Operasional
          </span>
        </div>
      </div>
    </section>
  );
}

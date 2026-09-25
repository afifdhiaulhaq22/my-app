export default function BreadcrumbBar() {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-on-surface-variant"
        >
          <a href="/" className="hover:text-primary transition-colors">
            Beranda
          </a>

          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>

          <a href="/layanan" className="hover:text-primary transition-colors">
            Layanan
          </a>

          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>

          <span className="text-primary font-semibold">
            Sewa Forklift
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

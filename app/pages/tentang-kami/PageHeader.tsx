export default function PageHeader() {
  return (
    <section className="w-full bg-surface-container-low py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-sm">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
          <a
            href="/"
            className="hover:text-primary transition-colors"
          >
            Beranda
          </a>

          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>

          <span className="text-primary font-semibold">
            Tentang Kami
          </span>
        </nav>

        {/* Status */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-container-highest rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary" />

          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            Profil Perusahaan & Komitmen Layanan Industri
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
          <div className="max-w-3xl flex flex-col gap-2">
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Tentang Kami
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Mengenal PT. KEI HAI sebagai mitra terpercaya dalam pemenuhan
              forklift, material handling equipment, suku cadang OEM,
              baterai traksi, dan layanan pendukung operasional industri
              berskala nasional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs">
            {/* capability badges */}
          </div>
        </div>
      </div>
    </section>
  );
}

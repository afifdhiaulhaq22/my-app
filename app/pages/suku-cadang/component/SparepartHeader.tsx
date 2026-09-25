export default function SparepartHeader() {
  return (
    <section className="bg-surface-container-lowest border-b border-surface-container-high py-10">
      <div className="max-w-7xl mx-auto px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-on-surface-variant mb-6"
        >
          <a href="/" className="hover:text-primary transition-colors">
            Beranda
          </a>

          <span className="text-xs">›</span>

          <a
            href="/produk"
            className="hover:text-primary transition-colors"
          >
            Produk
          </a>

          <span className="text-xs">›</span>

          <span className="text-primary font-semibold">
            Suku Cadang Forklift
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs tracking-wider uppercase font-bold">
              <span className="text-secondary">✓</span>
              <span>100% Suku Cadang Original & OEM Certified</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Catalog Suku Cadang Forklift
            </h1>

            <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
              Temukan berbagai suku cadang forklift untuk mendukung
              perawatan, perbaikan, dan menjaga performa unit Anda.
              Didukung jaminan keaslian, garansi resmi, dan pengiriman
              cepat ke seluruh Indonesia.
            </p>
          </div>

          {/* <div className="bg-surface-container-low rounded-xl p-5 flex items-center gap-4 shadow-sm min-w-[280px]">
            <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0 text-xl">
              ▣
            </div>

            <div className="flex flex-col">
              <span className="text-lg text-primary font-bold">
                3,500+ Part Number
              </span>

              <span className="text-xs text-secondary uppercase tracking-wider font-bold flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Siap Kirim Dari MM2100 Cikarang
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

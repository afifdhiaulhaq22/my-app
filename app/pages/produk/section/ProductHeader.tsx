import Link from "next/link";

export default function ProductHeader() {
  return (
    <section className="bg-surface-container-lowest border-b border-surface-container-high py-10">
      <div className="max-w-7xl mx-auto px-6">
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

          <Link
            href="/produk"
            className="transition-colors hover:text-primary"
          >
            Produk
          </Link>

          <span className="material-symbols-outlined text-[14px] text-outline">
            chevron_right
          </span>

          <span className="font-bold text-primary">
            Unit Forklift
          </span>
        </nav>
        

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">

            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Katalog Unit Forklift
            </h1>

            <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Temukan berbagai pilihan unit forklift untuk mendukung
                kebutuhan operasional dan material handling industri Anda.
                Didukung garansi resmi, suku cadang siap pasang, dan
                dukungan teknisi tersertifikasi di seluruh Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

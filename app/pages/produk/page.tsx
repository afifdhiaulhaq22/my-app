import Link from "next/link";
import ProductCatalog from "../../components/produk/ProductCatalog";

export default function UnitForkliftPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-[116px]">
      <div className="flex w-full flex-col">
        {/* Page Header */}
        <section className="w-full bg-surface-container-lowest">
          <div className="mx-auto max-w-7xl px-6 py-8">
            {/* Breadcrumb */}
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

            {/* Header Content */}
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              {/* Title */}
              <div className="max-w-3xl space-y-2">
                {/* Label */}
                <div className="inline-flex items-center gap-2 rounded bg-primary-fixed px-2.5 py-1 font-label-technical text-label-technical uppercase tracking-wider text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    precision_manufacturing
                  </span>

                  <span>
                    Spesifikasi Industri Standar Jepang &amp; Eropa
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-headline-lg text-headline-lg tracking-tight text-primary">
                  Katalog Produk Forklift
                </h1>

                {/* Description */}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Temukan berbagai pilihan unit forklift untuk mendukung
                  kebutuhan operasional dan material handling industri Anda.
                  Didukung garansi resmi, suku cadang siap pasang, dan
                  dukungan teknisi tersertifikasi di seluruh Indonesia.
                </p>
              </div>

              {/* Armada Counter */}
              {/* <div className="flex items-center gap-4 self-start rounded-xl bg-surface-container-low px-5 py-3.5 lg:self-auto">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-on-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    forklift
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm leading-tight text-primary">
                    48+ Model
                  </span>

                  <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
                    Unit Tersedia Siap Kirim
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* Catalog */}
        <ProductCatalog />

        {/* Fleet Highlight */}
      </div>
    </main>
  );
}

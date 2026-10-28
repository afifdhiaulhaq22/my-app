import Link from "next/link";

export default function ContactHeader() {
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

          <span className="font-bold text-primary">
            Hubungi Kami
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            {/* <span className="font-label-technical text-secondary uppercase tracking-widest font-extrabold">
              // PUSAT LAYANAN & KORESPONDENSI INDUSTRI
            </span> */}

            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Kontak Kami
            </h1>

            <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
              Hubungi PT. KEI HAI untuk kebutuhan forklift, material
              handling, suku cadang, baterai, servis, dan sewa unit.
              Tim spesialis kami siap memberikan respon cepat dan solusi
              tepat untuk fasilitas industri Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

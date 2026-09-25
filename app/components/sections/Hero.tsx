import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest pb-space-xl pt-space-md md:pt-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          {/* Left Hero Content */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Badge */}
            <div className="mb-space-md inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1.5 text-primary shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                verified_user
              </span>

              <span className="font-label-technical text-label-technical font-bold uppercase tracking-wider">
                Mitra Resmi Solusi Material Handling &amp; Forklift Indonesia
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-space-md font-display text-display font-extrabold leading-tight tracking-tight text-primary">
              Solusi Forklift dan Material Handling untuk Kebutuhan Industri
              Anda
            </h1>

            {/* Description */}
            <p className="mb-space-xl max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              PT. KEI HAI menyediakan solusi forklift, suku cadang, baterai,
              servis, lubrikasi, dan sewa unit untuk mendukung kelancaran serta
              efisiensi operasional bisnis Anda di seluruh Indonesia.
            </p>

            {/* CTA */}
            <div className="mb-space-xl flex w-full flex-wrap items-center gap-space-md sm:w-auto">
              <Link
                href="/pages/produk-gateway"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3.5 font-label-lg text-label-lg text-on-secondary shadow-md transition-all hover:bg-secondary-container hover:shadow-lg"
              >
                <span>Lihat Produk</span>

                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>

              <Link
                href="/pages/hubungi-kami"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest px-8 py-3.5 font-label-lg text-label-lg text-primary shadow-sm transition-all hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  support_agent
                </span>

                <span>Hubungi Kami</span>
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="grid w-full grid-cols-3 gap-4 rounded-xl bg-surface-container-low/70 p-space-md">
              <div>
                <div className="font-headline-md text-headline-md font-bold text-primary">
                  500+
                </div>

                <div className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
                  Unit Armada Siap Pakai
                </div>
              </div>

              <div>
                <div className="font-headline-md text-headline-md font-bold text-primary">
                  99.2%
                </div>

                <div className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
                  Uptime Operasional
                </div>
              </div>

              <div>
                <div className="font-headline-md text-headline-md font-bold text-secondary">
                  24/7
                </div>

                <div className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
                  Teknisi Siaga Cepat
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
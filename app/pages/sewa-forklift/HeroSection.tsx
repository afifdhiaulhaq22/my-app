import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-container-high rounded text-on-surface-variant text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-[15px] text-secondary">
                precision_manufacturing
              </span>
              MATERIAL HANDLING RENTAL SERVICES
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
              Sewa Forklift
            </h1>

            <p className="text-lg text-on-surface-variant max-w-2xl">
              Solusi sewa forklift yang fleksibel untuk mendukung kebutuhan
              material handling dan kelancaran operasional Anda.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#quotation-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg shadow-sm transition-all"
              >
                <span>Hubungi Kami</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>

              <a
                href="https://wa.me/628119208000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-lowest text-primary hover:bg-surface-container rounded-lg shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                Konsultasi via WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <Feature
                icon="date_range"
                label="Fleksibilitas Periode"
                value="Harian, Bulanan, Tahunan"
              />

              <Feature
                icon="build_circle"
                label="Kondisi Unit"
                value="Terawat & Siap Kerja"
              />

              <Feature
                icon="hub"
                label="Cakupan Distribusi"
                value="Industri & Logistik"
              />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-xl relative h-[420px] lg:h-[480px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/..."
                alt="Forklift rental PT KEI HAI"
                className="w-full h-[420px] lg:h-[560px] object-cover"
                />


              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />

                  <span className="text-xs text-secondary uppercase tracking-wider">
                    Kesiapan Armada Rental
                  </span>
                </div>

                <h4 className="text-lg text-primary font-bold">
                  Armada Lengkap & Siap Pakai
                </h4>

                <p className="text-sm text-on-surface-variant mt-1">
                  Solusi fleksibel untuk menanggulangi fluktuasi beban gudang,
                  target musiman, dan proyek perakitan industri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container-lowest shadow-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">
        {icon}
      </span>

      <div className="flex flex-col">
        <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">
          {label}
        </span>

        <span className="text-sm text-on-surface leading-snug">
          {value}
        </span>
      </div>
    </div>
  );
}

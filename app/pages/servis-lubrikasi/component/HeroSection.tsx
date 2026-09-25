export default function ServiceHeroSection() {
  return (
    <section className="w-full py-12 lg:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/50 text-primary rounded font-label-technical text-label-technical tracking-wider uppercase font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Solusi Perawatan & Teknik Material Handling
            </div>

            <h1 className="font-display text-display text-primary leading-none tracking-tight mb-5">
              Servis dan Lubrikasi{" "}
              <span className="text-secondary">Forklift</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Menjaga performa forklift tetap optimal melalui layanan servis
              dan lubrikasi yang terarah untuk mendukung kelancaran operasional
              dan keandalan armada industri Anda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              <HeroStat
                label="Dukungan Teknis"
                value="Siap Terjadwal & On-Call"
              />

              <HeroStat
                label="Pelumas & Part Sesuai"
                value="Grade Industri Terstandar"
              />

              <HeroStat
                label="Cakupan Area"
                value="Kawasan & Gudang MM2100"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#kontak-servis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[18px]">
                  build
                </span>

                Hubungi Kami
              </a>

              <a
                href="https://wa.me/628119208000"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  chat
                </span>

                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
      <span className="block font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant mb-1">
        {label}
      </span>

      <span className="font-title-md text-title-md text-primary font-bold">
        {value}
      </span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-primary min-h-[360px] lg:min-h-[430px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-container" />

      <div className="relative z-10 p-8 lg:p-12 text-center text-on-primary">
        <div className="mx-auto w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg">
          <span className="material-symbols-outlined text-[52px] text-on-secondary">
            engineering
          </span>
        </div>

        <span className="block font-label-technical text-label-technical uppercase tracking-widest text-secondary-fixed mb-3">
          PT. KEI HAI
        </span>

        <h2 className="font-headline-md text-headline-md font-bold mb-4">
          Servis & Lubrikasi Forklift
        </h2>

        <p className="font-body-md text-body-md text-on-primary-container max-w-md mx-auto leading-relaxed">
          Dukungan teknis untuk forklift Diesel, Elektrik Counterbalance,
          Reach Truck, dan unit LPG.
        </p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-sm p-4 rounded-xl shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              verified
            </span>
          </div>

          <div>
            <span className="block font-title-md text-title-md text-primary font-bold">
              Standar Keselamatan & Perawatan Terarah
            </span>

            <span className="block font-body-sm text-body-sm text-on-surface-variant">
              Pemeriksaan, servis, lubrikasi, dan dukungan teknis untuk
              kebutuhan material handling.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

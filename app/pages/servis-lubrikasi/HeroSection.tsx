export default function HeroSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded bg-primary-fixed/50 px-3 py-1 text-label-technical font-bold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Solusi Perawatan & Teknik Material Handling
            </div>

            <h1 className="mb-5 font-display text-display leading-none tracking-tight text-primary">
              Servis dan Lubrikasi{" "}
              <span className="text-secondary">Forklift</span>
            </h1>

            <p className="mb-8 text-body-lg leading-relaxed text-on-surface-variant">
              Menjaga performa forklift tetap optimal melalui layanan servis
              dan lubrikasi yang terarah untuk mendukung kelancaran operasional
              dan keandalan armada industri Anda.
            </p>

            <div className="mb-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["Dukungan Teknis", "Siap Terjadwal & On-Call"],
                ["Pelumas & Part Sesuai", "Grade Industri Terstandar"],
                ["Cakupan Area", "Kawasan & Gudang MM2100"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl bg-surface-container-lowest p-3.5 shadow-sm"
                >
                  <span className="mb-1 block text-label-technical uppercase tracking-wider text-on-surface-variant">
                    {label}
                  </span>
                  <span className="text-title-md font-bold text-primary">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-wrap items-center gap-4 sm:w-auto">
              <a
                href="#kontak-servis"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-label-lg text-on-secondary shadow-sm transition-all hover:bg-secondary-container"
              >
                <span className="material-symbols-outlined text-[18px]">
                  build
                </span>
                Hubungi Kami
              </a>

              <a
                href="https://wa.me/628119208000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest px-6 py-3.5 text-label-lg text-on-surface shadow-sm transition-all hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  chat
                </span>
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-primary shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container" />

              <div className="relative z-10 flex flex-col items-center text-center text-on-primary">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary shadow-lg">
                  <span className="material-symbols-outlined text-[52px] text-on-secondary">
                    engineering
                  </span>
                </div>

                <span className="mb-2 text-label-technical font-bold uppercase tracking-[0.2em] text-secondary-fixed">
                  Field Engineering
                </span>

                <h2 className="max-w-md text-headline-md font-bold">
                  Standar Keselamatan & Perawatan Terarah
                </h2>

                <p className="mt-3 max-w-md text-body-md text-on-primary-container">
                  Dukungan teknis untuk unit Diesel, Elektrik Counterbalance,
                  Reach Truck, dan LPG.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["Diesel", "Electric", "LPG"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                    >
                      <span className="text-label-technical font-bold uppercase">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutCompany() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest">
              TENTANG PERUSAHAAN
            </span>

            <h2 className="font-headline-md text-headline-md text-primary">
              Mitra Terpercaya Solusi Material Handling & Alat Berat Industri
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
            <p>
              PT. KEI HAI berdiri dengan dedikasi penuh untuk mendukung
              kelancaran rantai pasok dan produktivitas sektor manufaktur
              serta pergudangan di Indonesia. Berbasis di kawasan industri
              strategis MM2100 Cikarang, kami menghadirkan ekosistem terpadu
              mulai dari penyediaan unit forklift baru dan rekondisi
              bersertifikasi, suku cadang genuine OEM, teknologi traksi
              baterai modern, hingga layanan servis berkala dan perbaikan
              menyeluruh.
            </p>

            <p>
              Dengan komitmen tinggi pada standar keselamatan kerja (K3) dan
              mutu operasional berstandar internasional, PT. KEI HAI senantiasa
              berorientasi pada kebutuhan teknis spesifik setiap fasilitas
              pabrik, gudang logistik, dan depo kontainer yang kami layani.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-3 pt-2">
            {[
              "Penyedia solusi armada forklift diesel, elektrik, dan dual-fuel terintegrasi",
              "Ketersediaan suku cadang genuine OEM dan baterai traksi berkualitas industri",
              "Dukungan teknisi lapangan responsif, tersertifikasi, dan patuh standar keselamatan K3",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    check
                  </span>
                </div>

                <p className="font-title-md text-title-md text-on-surface">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col relative">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-surface-container">
            <img
              className="w-full h-[440px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3-WDz40bY55Kuqrgg_XkPy8Cyx4bq0SvcsozOsc-cZfzd1AX-R_9ZOxiXDCVdJ2gRdQHd3Znp2UNgaBf5pnfryvjVA2KOijZ-ssOTiUDPp9T7BszwFLaJr0Yn5tG_upwB72kor0886ygW5Osm2-ciP75ocA3z9psp9rztB6VAkqFBHopAmqf1cNZ1BTDvBua9UEyyS3sP8fsw3ms-BeV_wqrPnLBr-IJKOl-7wWdyHMaZ3AvczC1b"
              alt="Armada forklift PT. KEI HAI"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                verified_user
              </span>

              <div className="flex flex-col">
                <span className="font-label-technical text-label-technical uppercase tracking-wider text-primary">
                  Fasilitas & Kesiapan Armada PT. KEI HAI
                </span>

                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  Pusat Distribusi & Workshop Cikarang Barat - Kawasan Industri
                  MM2100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LocationSection() {
  return (
    <section className="py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-space-lg">
          <span className="font-label-technical text-secondary uppercase font-extrabold tracking-wider">
            HUB STRATEGIS KAWASAN INDUSTRI
          </span>

          <h2 className="font-headline-lg text-primary font-bold mt-1">
            Lokasi Fasilitas & Pusat Workshop
          </h2>

          <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">
            Berada di jantung kawasan industri strategis MM2100
            Cikarang Barat untuk mendukung mobilisasi teknisi dan
            pengiriman unit.
          </p>
        </div>

        {/* LOCATION CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* MAP */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md">
            <div
              className="w-full h-80 lg:h-96 bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdz59_Ys1DlxAVsskpYXprLu41cs7OYquQMC5Fc2_Sg7tcpSpyWa4KFmaODLLeDu493RwwWxorbDCMwOfrXV7U7_bxAnveJumnemY0ga3U7eTkNorFntj1UBQVveCroeJJWWxwC9HBnMtlzCjWreAEuzXN9Oa7sVkqXw9H-X8oC78wcsRvcemKE-k-OwWVnlufQTTRxUeV2PerdCZYxeVtsp0dGUgWkMgbLH50U3QuEwgjgsTZbcsV')",
              }}
            >
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">
                      pin_drop
                    </span>
                  </div>

                  <div>
                    <h4 className="font-title-md text-primary font-bold">
                      PT. KEI HAI Central Workshop
                    </h4>

                    <p className="font-body-sm text-on-surface-variant">
                      Blok C-4 No. 12, Kawasan Industri MM2100,
                      Cikarang Barat, Bekasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP FOOTER */}
            <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  garage_home
                </span>

                <span className="font-body-sm text-on-surface">
                  Workshop, yard unit siap pakai, dan gudang suku
                  cadang terpadu.
                </span>
              </div>

              <a
                href="https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md font-semibold hover:bg-primary-container"
              >
                <span className="material-symbols-outlined text-[16px]">
                  directions
                </span>
                Buka Google Maps
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* TRAVEL TIME */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md space-y-4">
              <h3 className="font-title-md text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  route
                </span>
                Waktu Tempuh & Radius Depot
              </h3>

              <div className="space-y-3">
                {[
                  ["directions_car", "Akses Tol Cibitung", "5"],
                  [
                    "local_shipping",
                    "KIIC / Suryacipta Karawang",
                    "25",
                  ],
                  ["anchor", "Tanjung Priok Port", "50"],
                ].map(([icon, name, time]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary">
                        {icon}
                      </span>

                      <span className="font-label-lg text-primary font-semibold">
                        {name}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-headline-sm text-secondary font-extrabold">
                        {time}
                      </span>

                      <span className="font-label-md text-on-surface-variant font-bold ml-1">
                        Menit
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA */}
            <div className="bg-primary text-on-primary rounded-2xl p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2 font-label-technical text-secondary-fixed uppercase font-bold tracking-wider">
                <span className="material-symbols-outlined text-[16px]">
                  speed
                </span>
                SLA Respon Darurat
              </div>

              <p className="font-title-md font-bold">
                Garansi Kedatangan Teknisi &lt; 2 Jam
              </p>

              <p className="font-body-sm text-on-primary-container leading-relaxed">
                Khusus kontrak rental dan SLA maintenance berkala
                di area MM2100, Jababeka, Delta Silicon, EJIP, dan
                KIIC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

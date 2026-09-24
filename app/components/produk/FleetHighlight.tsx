export default function FleetHighlight() {
  return (
    <section className="w-full bg-surface-container-low py-10 my-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded font-label-technical text-label-technical uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-[14px]">
                local_shipping
              </span>

              <span>
                Armada Terbesar di Jawa Barat & Jawa Timur
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
              Kesiapan Unit Forklift Siap Kirim Hari Ini
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Semua unit forklift di PT. KEI HAI melalui uji 45 titik
              inspeksi teknis sebelum pengiriman ke lokasi pabrik Anda.
              Dilengkapi surat sertifikasi uji kelayakan Departemen
              Ketenagakerjaan (Disnaker) resmi.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-label-md text-label-md text-primary">
              {[
                "100% Suku Cadang Original",
                "Layanan Darurat 2x24 Jam",
                "Garansi Mesin & Transmisi",
                "Pelatihan Operator Sertifikasi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    verified
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
              <img
                alt="Fleet forklift PT KEI HAI"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XrSl2w6s4H3AFFQlot_g6Tc_czS2sy263LIxn25B9Qq-ll5qrlKRxjA00X-TxBd8DuNVIzaH_M6j11rYzkMq8JFX3YuP6X2U4A-oYg-08YnaKX6sYo17RuU1jOhX6adOPTyEAIa24KYlPV_bhI1QBvLVOwKHQx7YZ4LwJ_F-AQ6U0Fr-KPTL7mDNAgjzs8DzZWBmZimVG17QMrmo9oI9SwWtTsB27LEmZJJc996Ko8L_exowrgcxPjK3I"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-on-primary">
                  <span className="font-label-technical text-label-technical uppercase tracking-wider text-secondary-fixed">
                    Fasilitas Workshop Utama
                  </span>

                  <p className="font-title-md text-title-md font-bold">
                    Kawasan Industri MM2100 Cikarang - Staging & Heavy
                    Rigging Area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-space-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="space-y-1">
              <h2 className="font-headline-sm text-primary font-bold">
                Saluran Komunikasi Resmi
              </h2>

              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Silakan hubungi kami melalui saluran resmi berikut
                atau kunjungi fasilitas pusat workshop kami di
                koridor industri Cikarang.
              </p>
            </div>

            {/* ADDRESS */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    location_on
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical text-secondary uppercase font-bold tracking-wider">
                    Kantor Pusat & Workshop
                  </span>

                  <h3 className="font-title-md text-primary font-bold">
                    Pusat Operasional & Workshop
                  </h3>

                  <p className="font-body-sm text-on-surface leading-snug">
                    Kawasan Industri MM2100, Blok C-4 No. 12,
                    Cikarang Barat, Bekasi, Jawa Barat 17530
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low px-3.5 py-2 rounded-lg flex items-center gap-2 font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  navigation
                </span>

                <span>
                  Akses strategis: 5 menit dari Exit Tol
                  Cibitung / Cikarang Barat
                </span>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    call
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical text-on-surface-variant uppercase font-bold tracking-wider">
                    Saluran Telepon Kantor
                  </span>

                  <h3 className="font-title-md text-primary font-bold">
                    Telepon Kantor (Hunting)
                  </h3>

                  <p className="font-headline-sm text-primary font-extrabold">
                    (021) 8983-5500
                  </p>

                  <p className="font-body-sm text-on-surface-variant">
                    Senin - Sabtu: 08:00 - 17:00 WIB
                  </p>
                </div>
              </div>

              <a
                href="tel:02189835500"
                className="inline-flex items-center justify-center w-full gap-2 py-2.5 px-4 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">
                  phone_forwarded
                </span>
                Hubungi via Telepon
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    chat
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical text-secondary uppercase font-bold tracking-wider">
                    Fast Response Service
                  </span>

                  <h3 className="font-title-md text-primary font-bold">
                    WhatsApp Sales & Emergency Support
                  </h3>

                  <p className="font-headline-sm text-secondary font-extrabold">
                    +62 811-920-8000
                  </p>

                  <p className="font-body-sm text-on-surface-variant">
                    Respons cepat tim sales engineer & teknisi
                    siaga armada
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/628119208000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 py-2.5 px-4 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container transition-all shadow-sm font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">
                  forum
                </span>
                Chat WhatsApp Resmi
              </a>
            </div>

            {/* EMAIL */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    mail
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical text-on-surface-variant uppercase font-bold tracking-wider">
                    Korespondensi RFQ & Legalitas
                  </span>

                  <h3 className="font-title-md text-primary font-bold">
                    Email Resmi Perusahaan
                  </h3>

                  <a
                    href="mailto:sales@keihai-forklift.co.id"
                    className="font-title-md text-primary font-bold hover:text-secondary transition-colors underline block"
                  >
                    sales@keihai-forklift.co.id
                  </a>

                  <p className="font-body-sm text-on-surface-variant">
                    Untuk permohonan penawaran resmi (RFQ),
                    katalog teknis, tender pengadaan, dan faktur.
                  </p>
                </div>
              </div>
            </div>

            {/* OPERATING HOURS */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    schedule
                  </span>
                </div>

                <div className="space-y-1 w-full">
                  <span className="font-label-technical text-on-surface-variant uppercase font-bold tracking-wider">
                    Jadwal & Siaga Teknisi
                  </span>

                  <h3 className="font-title-md text-primary font-bold">
                    Jam Operasional & Siaga
                  </h3>

                  <div className="mt-2 space-y-2 font-body-sm">
                    <div className="flex justify-between gap-3 py-2 bg-surface-container-low px-3 rounded">
                      <span className="text-on-surface-variant font-medium">
                        Kantor & Gudang:
                      </span>

                      <span className="font-semibold text-primary text-right">
                        Senin - Sabtu
                        <br />
                        08:00 - 17:00 WIB
                      </span>
                    </div>

                    <div className="flex justify-between gap-3 py-2 bg-surface-container-low px-3 rounded">
                      <span className="text-on-surface-variant font-medium">
                        Layanan Lapangan Darurat:
                      </span>

                      <span className="font-bold text-secondary text-right">
                        24/7 On-Call Contract
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

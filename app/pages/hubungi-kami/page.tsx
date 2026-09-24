import ContactForm from "./ContactForm";
import FAQAccordion from "./FAQAccordion";
// import FinalCTASection from "../..//FinalCTASection";

export default function HubungiKamiPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <div className="flex flex-col w-full">

        {/* HEADER */}
        <section className="bg-surface-container-low py-space-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">

              <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <a
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Beranda
                </a>

                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>

                <span className="text-secondary font-semibold">
                  Hubungi Kami
                </span>
              </nav>

              <div className="flex flex-wrap items-center gap-2 font-label-technical text-label-technical">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Layanan Respons Cepat B2B
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-[13px]">
                    factory
                  </span>
                  Kawasan Industri MM2100
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-[13px]">
                    verified_user
                  </span>
                  Konsultasi Teknis & Pengadaan
                </span>
              </div>
            </div>

            <div className="mt-space-lg max-w-4xl">
              <span className="font-label-technical text-secondary uppercase tracking-widest font-extrabold">
                // PUSAT LAYANAN & KORESPONDENSI INDUSTRI
              </span>

              <h1 className="font-headline-lg text-primary tracking-tight font-extrabold mt-2">
                Kontak Kami
              </h1>

              <p className="font-body-lg text-on-surface-variant mt-2 max-w-3xl leading-relaxed">
                Hubungi PT. KEI HAI untuk kebutuhan forklift, material
                handling, suku cadang, baterai, servis, dan sewa unit.
                Tim spesialis kami siap memberikan respon cepat dan solusi
                tepat untuk fasilitas industri Anda.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT + FORM */}
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
                        Fast Response B2B Service
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

              {/* CLIENT COMPONENT */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-space-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">

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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

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

              <div className="lg:col-span-4 flex flex-col gap-4">

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
                      ["local_shipping", "KIIC / Suryacipta Karawang", "25"],
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

        {/* FAQ */}
        <FAQAccordion />

        {/* <FinalCTASection /> */}

      </div>
    </main>
  );
}

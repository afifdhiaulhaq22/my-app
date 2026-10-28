import ContactForm from "./ContactForm";
import { getDataPerusahaan } from "@/lib/perusahaan";

export default async function ContactSection() {
  const dataPerusahaan = await getDataPerusahaan();

  const nomorPerusahaan = dataPerusahaan?.nomorPerusahaan || "";
  const nomorSalesWA = dataPerusahaan?.nomorSalesWA || "";
  const email = dataPerusahaan?.email || "";
  const alamat = dataPerusahaan?.alamat || "";
  const linkGoogleMaps = dataPerusahaan?.linkGoogleMaps || "";

  // Normalisasi nomor telepon untuk href
  const phoneHref = nomorPerusahaan.replace(/\D/g, "");

  // Normalisasi nomor WhatsApp ke format internasional
  const whatsappNumber = nomorSalesWA
    .replace(/\D/g, "")
    .replace(/^0/, "62");

  return (
    <section className="py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* LEFT */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="space-y-1">
              <h2 className="font-headline-sm font-bold text-primary">
                Saluran Komunikasi Resmi
              </h2>

              <p className="font-body-sm leading-relaxed text-on-surface-variant">
                Silakan hubungi kami melalui saluran resmi berikut
                atau kunjungi fasilitas pusat workshop kami.
              </p>
            </div>

            {/* ADDRESS */}
            <div className="space-y-3 rounded-xl bg-surface-container-lowest p-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined">
                    location_on
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical font-bold uppercase tracking-wider text-secondary">
                    Kantor Pusat & Workshop
                  </span>

                  <h3 className="font-title-md font-bold text-primary">
                    Pusat Operasional & Workshop
                  </h3>

                  <p className="font-body-sm leading-snug text-on-surface">
                    {alamat || "Alamat perusahaan belum tersedia."}
                  </p>
                </div>
              </div>

              {linkGoogleMaps && (
                <a
                  href={linkGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-surface-container-low px-3.5 py-2 font-label-md text-primary transition-colors hover:bg-surface-container-high"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    navigation
                  </span>

                  Lihat Lokasi di Google Maps
                </a>
              )}
            </div>

            {/* PHONE */}
            <div className="space-y-4 rounded-xl bg-surface-container-lowest p-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined">
                    call
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical font-bold uppercase tracking-wider text-on-surface-variant">
                    Saluran Telepon Kantor
                  </span>

                  <h3 className="font-title-md font-bold text-primary">
                    Telepon Kantor
                  </h3>

                  <p className="font-headline-sm font-extrabold text-primary">
                    {nomorPerusahaan || "Nomor telepon belum tersedia"}
                  </p>

                  <p className="font-body-sm text-on-surface-variant">
                    Senin - Sabtu: 08:00 - 17:00 WIB
                  </p>
                </div>
              </div>

              {phoneHref && (
                <a
                  href={`tel:${phoneHref}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container px-4 py-2.5 font-semibold text-primary transition-colors hover:bg-surface-container-high"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    phone_forwarded
                  </span>
                  Hubungi via Telepon
                </a>
              )}
            </div>

            {/* WHATSAPP */}
            <div className="space-y-4 rounded-xl bg-surface-container-lowest p-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-fixed text-secondary">
                  <span className="material-symbols-outlined">
                    chat
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical font-bold uppercase tracking-wider text-secondary">
                    Fast Response Service
                  </span>

                  <h3 className="font-title-md font-bold text-primary">
                    WhatsApp Sales & Support
                  </h3>

                  <p className="font-headline-sm font-extrabold text-secondary">
                    {nomorSalesWA || "Nomor WhatsApp belum tersedia"}
                  </p>

                  <p className="font-body-sm text-on-surface-variant">
                    Hubungi tim sales untuk informasi produk,
                    sewa forklift, servis, dan permintaan penawaran.
                  </p>
                </div>
              </div>

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 font-semibold text-on-secondary shadow-sm transition-all hover:bg-secondary-container"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    forum
                  </span>
                  Chat WhatsApp Resmi
                </a>
              )}
            </div>

            {/* EMAIL */}
            <div className="space-y-3 rounded-xl bg-surface-container-lowest p-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined">
                    mail
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-label-technical font-bold uppercase tracking-wider text-on-surface-variant">
                    Korespondensi RFQ & Legalitas
                  </span>

                  <h3 className="font-title-md font-bold text-primary">
                    Email Resmi Perusahaan
                  </h3>

                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="block break-all font-title-md font-bold text-primary underline transition-colors hover:text-secondary"
                    >
                      {email}
                    </a>
                  ) : (
                    <p className="font-body-sm text-on-surface-variant">
                      Email perusahaan belum tersedia.
                    </p>
                  )}

                  <p className="font-body-sm text-on-surface-variant">
                    Untuk permohonan penawaran resmi (RFQ),
                    katalog teknis, tender pengadaan, dan faktur.
                  </p>
                </div>
              </div>
            </div>

            {/* OPERATING HOURS */}
            <div className="space-y-3 rounded-xl bg-surface-container-lowest p-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined">
                    schedule
                  </span>
                </div>

                <div className="w-full space-y-1">
                  <span className="font-label-technical font-bold uppercase tracking-wider text-on-surface-variant">
                    Jadwal Operasional
                  </span>

                  <h3 className="font-title-md font-bold text-primary">
                    Jam Operasional
                  </h3>

                  <div className="mt-2 space-y-2 font-body-sm">
                    <div className="flex justify-between gap-3 rounded bg-surface-container-low px-3 py-2">
                      <span className="font-medium text-on-surface-variant">
                        Kantor & Gudang:
                      </span>

                      <span className="text-right font-semibold text-primary">
                        Senin - Sabtu
                        <br />
                        08:00 - 17:00 WIB
                      </span>
                    </div>

                    <div className="flex justify-between gap-3 rounded bg-surface-container-low px-3 py-2">
                      <span className="font-medium text-on-surface-variant">
                        Layanan Darurat:
                      </span>

                      <span className="text-right font-bold text-secondary">
                        Sesuai Kontrak
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
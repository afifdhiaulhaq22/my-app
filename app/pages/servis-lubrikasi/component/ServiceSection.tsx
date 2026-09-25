import SectionHeader from "./SectionHeader";

const serviceItems = [
  [
    "checklist",
    "Pemeriksaan Unit (General Inspection)",
    "Pemeriksaan kondisi umum forklift mencakup kelistrikan, radiator, rem, fungsi hidrolik, tiang mast, serta mekanisme kemudi.",
    "Multi-Point Diagnostic",
  ],
  [
    "update",
    "Preventive Maintenance",
    "Perawatan berkala terencana untuk membantu menjaga kondisi unit, penggantian filter berkala, penyetelan dan pencegahan kendala teknis.",
    "Jadwal Rutin Terencana",
  ],
  [
    "handyman",
    "Corrective Service",
    "Penanganan ketika ditemukan kendala teknis, kebocoran sistem oli hidrolik, atau komponen aus yang memerlukan perbaikan.",
    "Fast Trouble-Solving",
  ],
  [
    "precision_manufacturing",
    "Pemeriksaan Komponen Spesifik",
    "Inspeksi komponen krusial seperti pompa hidrolik, silinder tilt/lift, motor traksi elektrik, alternator, dan sistem transmisi.",
    "Inspeksi Komponen Kritis",
  ],
  [
    "support_agent",
    "Technical Support & Konsultasi",
    "Dukungan teknis untuk troubleshooting, panduan operasional armada, dan rekomendasi langkah perbaikan.",
    "Konsultasi Berpengalaman",
  ],
];

export default function ServiceSection() {
  return (
    <section className="w-full py-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="home_repair_service"
          eyebrow="Kapabilitas Layanan"
          title="Layanan Servis Forklift"
          description="Dukungan perawatan terstruktur untuk membantu menjaga kesiapan armada material handling di fasilitas industri dan gudang logistik Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map(([icon, title, text, label], index) => (
            <div
              key={title}
              className={`bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between ${
                index === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-lg ${
                    index === 1
                      ? "bg-secondary"
                      : index === 3
                        ? "bg-tertiary-container"
                        : "bg-primary"
                  } text-on-primary flex items-center justify-center mb-4`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {icon}
                  </span>
                </div>

                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                  {title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {text}
                </p>
              </div>

              <div className="mt-6 pt-4 flex items-center gap-2 text-primary font-label-technical text-label-technical font-bold uppercase">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>

                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

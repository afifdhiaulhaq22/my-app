const features = [
  {
    icon: "engineering",
    title: "Pengalaman & Keahlian Teknis",
    description:
      "Pemahaman mendalam mengenai karakteristik beragam tipe unit forklift, spesifikasi komponen, dan tantangan kerja di lingkungan pabrik dan pergudangan modern.",
  },
  {
    icon: "verified",
    title: "Jaminan Kualitas Suku Cadang & Baterai",
    description:
      "Penggunaan komponen dan baterai traksi terstandarisasi untuk memastikan keandalan jangka panjang serta keamanan operasional armada tanpa kompromi.",
  },
  {
    icon: "support_agent",
    title: "Layanan Servis & Tanggap Lapangan",
    description:
      "Dukungan perawatan preventif terjadwal serta kesiapan tim servis teknis dalam merespons kebutuhan darurat perawatan di area kawasan industri.",
  },
  {
    icon: "handshake",
    title: "Pendekatan Berorientasi Klien",
    description:
      "Konsultasi spesifikasi yang transparan untuk mencocokkan tonase armada, jenis mast/attachment, dan formula pengadaan yang paling cost-effective.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest">
            KOMITMEN & KEUNGGULAN
          </span>

          <h2 className="font-headline-md text-headline-md text-primary">
            Mengapa Memilih PT. KEI HAI
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Kemitraan berlandaskan integritas teknis, transparansi, dan respon
            cepat terhadap kebutuhan operasional pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  {feature.icon}
                </span>
              </div>

              <h3 className="font-title-md text-title-md text-primary">
                {feature.title}
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: "gavel",
    title: "Integritas",
    subtitle: "Integrity",
    description:
      "Menjunjung tinggi keterbukaan, kejujuran spesifikasi teknis, transparansi kondisi unit, dan kepatuhan penuh pada setiap kesepakatan kerja sama.",
  },
  {
    icon: "health_and_safety",
    title: "Keselamatan Kerja",
    subtitle: "Safety First",
    description:
      "Memprioritaskan standar K3 industri, kelayakan mekanikal armada secara presisi, serta mitigasi risiko untuk melindungi operator dan aset gudang.",
  },
  {
    icon: "verified",
    title: "Keandalan",
    subtitle: "Reliability",
    description:
      "Konsisten menghadirkan unit forklift dalam kondisi prima, ketersediaan suku cadang tepat mutu, serta respon teknisi servis yang dapat diandalkan.",
  },
  {
    icon: "group",
    title: "Fokus Pelanggan",
    subtitle: "Customer-Centric",
    description:
      "Aktif mendengarkan dinamika dan tantangan operasional mitra untuk menyusun solusi penanganan material handling yang paling efektif dan terukur.",
  },
];

export default function CompanyValues() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest">
            BUDAYA PERUSAHAAN
          </span>

          <h2 className="font-headline-md text-headline-md text-primary">
            Nilai-Nilai Utama Perusahaan
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Prinsip fundamental yang memandu setiap interaksi, layanan, dan
            komitmen operasional kami kepada seluruh stakeholder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[24px]">
                  {value.icon}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  {value.title}
                </h3>

                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
                  {value.subtitle}
                </span>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

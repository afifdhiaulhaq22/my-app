const stats = [
  {
    value: "15+",
    title: "Tahun Pengalaman Industri",
    description:
      "Melayani kebutuhan material handling nasional sejak awal pendirian perusahaan.",
  },
  {
    value: "1.200+",
    title: "Unit Armada Terdistribusi",
    description:
      "Mencakup unit forklift diesel, elektrik, reach truck, dan pallet stacker industri.",
  },
  {
    value: "350+",
    title: "Mitra Perusahaan Aktif",
    description:
      "Dipercaya oleh berbagai sektor manufaktur perakitan, rantai dingin, dan logistik 3PL.",
  },
  {
    value: "98.5%",
    title: "Kepuasan & Retensi Klien",
    description:
      "Berdasarkan evaluasi SLA perawatan berkala dan kecepatan pemenuhan suku cadang resmi.",
  },
];

export default function CompanyStats() {
  return (
    <section className="w-full bg-primary text-on-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-technical text-label-technical uppercase text-secondary-fixed tracking-widest">
            REKAM JEJAK PRESTASI
          </span>

          <h2 className="font-headline-md text-headline-md text-on-primary">
            PT. KEI HAI dalam Angka
          </h2>

          <p className="font-body-md text-body-md text-on-primary-container">
            Dedikasi berkesinambungan dalam mendukung efisiensi ekosistem
            logistik dan manufaktur di seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-tertiary-container/80 backdrop-blur rounded-xl p-6 flex flex-col gap-2"
            >
              <span className="font-display text-display text-secondary-fixed font-black tracking-tight">
                {stat.value}
              </span>

              <span className="font-title-md text-title-md text-on-primary">
                {stat.title}
              </span>

              <p className="font-body-sm text-body-sm text-on-primary-container">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

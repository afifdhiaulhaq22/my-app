const industries = [
  {
    icon: "directions_car",
    title: "Manufaktur Otomotif",
    description:
      "Mendukung pergerakan komponen berat mesin, stamping, dan kelancaran aliran lini perakitan berintensitas tinggi.",
  },
  {
    icon: "inventory_2",
    title: "Pergudangan & Logistik (3PL)",
    description:
      "Optimalisasi penataan rak tinggi (high-rack storage) dan akselerasi perputaran pallet keluar-masuk gudang kargo.",
  },
  {
    icon: "local_pharmacy",
    title: "Makanan, Minuman & Farmasi",
    description:
      "Penyediaan forklift elektrik emisi nol (zero emission) yang higienis untuk area steril dan fasilitas cold storage.",
  },
  {
    icon: "sailing",
    title: "Depo Kontainer & Pelabuhan",
    description:
      "Ketahanan armada forklift heavy-duty outdoor diesel untuk penanganan kontainer dan bongkar muat kargo pelabuhan.",
  },
  {
    icon: "science",
    title: "Kimia & Industri Bahan Baku",
    description:
      "Kepatuhan penanganan drum kimia dengan attachment khusus serta protokol proteksi percikan keselamatan kerja.",
  },
  {
    icon: "foundation",
    title: "Konstruksi & Material Bangunan",
    description:
      "Daya angkut handal di medan operasional semi-outdoor untuk penanganan material struktural, baja, pipa, dan semen.",
  },
];

export default function Industries() {
  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest">
            SEKTOR KLIEN
          </span>

          <h2 className="font-headline-md text-headline-md text-primary">
            Industri yang Kami Layani
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Solusi penanganan beban material handling yang telah teruji di
            beragam sektor operasional dengan standar spesifikasi ketat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  {industry.icon}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-title-md text-title-md text-primary">
                  {industry.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

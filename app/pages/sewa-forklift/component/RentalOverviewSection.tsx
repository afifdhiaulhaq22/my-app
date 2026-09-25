const items = [
  {
    icon: "account_balance_wallet",
    title: "Efisiensi Modal Kerja",
    description:
      "Mengurangi kebutuhan investasi awal modal besar untuk pengadaan armada baru. Modal dapat dialokasikan untuk ekspansi bisnis inti manufaktur dan rantai pasok.",
    footer: "Konversi Biaya ke OPEX Terkendali",
  },
  {
    icon: "swap_horiz",
    title: "Fleksibilitas Kapasitas",
    description:
      "Menyesuaikan jumlah armada secara dinamis saat periode puncak produksi, audit logistik, atau lonjakan penanganan kargo.",
    footer: "Skalabilitas Unit Kapan Saja",
  },
  {
    icon: "task_alt",
    title: "Kesiapan Operasional",
    description:
      "Unit yang sesuai kebutuhan operasional dapat disiapkan untuk membantu proses integrasi di lokasi kerja.",
    footer: "Ready-to-Deploy Warehouse Fleet",
  },
];

export default function RentalOverviewSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="max-w-3xl">
          <span className="text-xs text-secondary uppercase tracking-widest">
            SOLUSI RENTAL MATERIAL HANDLING
          </span>

          <h2 className="text-3xl lg:text-4xl text-primary font-bold mt-2">
            Solusi Sewa Forklift untuk Kebutuhan Operasional Anda
          </h2>

          <p className="text-on-surface-variant mt-4">
            Kebutuhan material handling dapat berbeda di setiap operasional.
            Layanan sewa forklift PT. KEI HAI ditujukan untuk membantu
            perusahaan memperoleh dukungan unit sesuai kebutuhan pekerjaan,
            kondisi operasional, dan penggunaan yang direncanakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between gap-6"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-xl text-primary font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-sm text-on-surface-variant mt-2">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                {item.footer}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4 p-5 bg-surface-container rounded-xl">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[24px]">
              support_agent
            </span>

            <span className="text-sm text-on-surface">
              Butuh panduan menghitung jumlah forklift yang ideal untuk denah
              pabrik Anda?
            </span>
          </div>

          <a
            href="#quotation-form"
            className="px-5 py-2 bg-primary hover:bg-primary-container text-on-primary rounded-lg transition-colors"
          >
            Tanyakan Kebutuhan
          </a>
        </div>
      </div>
    </section>
  );
}

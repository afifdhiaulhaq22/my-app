import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: "speed",
    title: "Menjaga Performa Unit",
    text: "Perawatan berkala membantu menjaga forklift tetap bekerja secara optimal sesuai kebutuhan operasional harian di gudang dan lini produksi.",
    label: "Efisiensi Output",
    color: "bg-primary",
  },
  {
    icon: "troubleshoot",
    title: "Mengurangi Risiko Gangguan",
    text: "Pemeriksaan rutin membantu mengidentifikasi kondisi komponen sebelum berkembang menjadi gangguan atau kendala operasional yang lebih besar.",
    label: "Minimalkan Downtime",
    color: "bg-secondary",
  },
  {
    icon: "water_drop",
    title: "Mendukung Umur Komponen",
    text: "Lubrikasi yang sesuai membantu menjaga komponen bergerak bekerja dengan baik dan mengurangi keausan dini akibat beban kerja berat.",
    label: "Proteksi Gesekan",
    color: "bg-primary-container",
  },
  {
    icon: "health_and_safety",
    title: "Mendukung Keselamatan",
    text: "Pemeriksaan kondisi forklift secara terarah membantu memastikan sistem rem, kemudi, hidrolik, dan mast berada dalam kondisi operasional yang sesuai.",
    label: "K3 Terlindungi",
    color: "bg-tertiary-container",
  },
];

export default function ServiceImportanceSection() {
  return (
    <section className="w-full py-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="info"
          eyebrow="Urgensi Perawatan Industri"
          title="Mengapa Servis dan Lubrikasi Itu Penting?"
          description="Forklift merupakan bagian penting dari aktivitas material handling. Penggunaan secara rutin membutuhkan pemeriksaan, perawatan, dan lubrikasi yang tepat agar komponen tetap bekerja sesuai fungsinya dan potensi gangguan operasional dapat diminimalkan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-lg ${item.color} text-on-primary flex items-center justify-center mb-5`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {item.icon}
                  </span>
                </div>

                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                  {item.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>

              <span className="font-label-technical text-label-technical text-outline tracking-wider uppercase mt-6 font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

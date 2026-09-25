import {
  Forklift,
  Weight,
  Timer,
  Building2,
} from "lucide-react";

const needs = [
  {
    icon: Forklift,
    title: "Jenis Pekerjaan",
    description:
      "Sesuaikan pilihan unit dengan jenis material handling yang dilakukan, seperti bongkar muat kontainer, racking gudang vertikal tinggi, atau perpindahan horizontal jarak jauh.",
  },
  {
    icon: Weight,
    title: "Kapasitas & Beban",
    description:
      "Pemilihan unit perlu mempertimbangkan tonase muatan kerja rata-rata, load center spesifik, kondisi elevasi jalur, serta kekuatan slab lantai fasilitas.",
  },
  {
    icon: Timer,
    title: "Intensitas Penggunaan",
    description:
      "Kebutuhan penggunaan forklift dapat berbeda berdasarkan aktivitas operasional, mulai dari satu shift reguler hingga ritme kerja multi-shift.",
  },
  {
    icon: Building2,
    title: "Area & Lingkungan Kerja",
    description:
      "Kondisi lingkungan kerja seperti indoor, outdoor, cold storage, atau lorong gudang sempit menjadi pertimbangan dalam menentukan tipe unit, ban, dan mast.",
  },
];

export default function OperationalNeedsSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="max-w-3xl flex flex-col gap-3">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
            PARAMETER ANALISIS TEKNIS
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
            Sesuai Kebutuhan Operasional
          </h2>

          <p className="text-base lg:text-lg leading-relaxed text-on-surface-variant">
            Kebutuhan sewa forklift sangat bergantung pada kondisi unik setiap
            fasilitas industri. Berikut faktor utama yang perlu dipertimbangkan
            untuk mendukung produktivitas operasional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-primary">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  Settings2,
  HardHat,
  TrendingUp,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: Settings2,
    title: "Pilihan Unit Tepat",
    description:
      "Pilihan unit dapat disesuaikan dengan kebutuhan material handling dan karakteristik operasional fasilitas melalui konsultasi teknis awal.",
  },
  {
    icon: HardHat,
    title: "Dukungan Teknis Siaga",
    description:
      "Kebutuhan terkait kondisi dan optimalisasi penggunaan unit dapat didiskusikan dengan tim teknis sesuai cakupan layanan yang disepakati.",
  },
  {
    icon: TrendingUp,
    title: "Solusi Operasional Fleksibel",
    description:
      "Sewa forklift menjadi alternatif ketika perusahaan membutuhkan tambahan armada sementara tanpa harus melakukan investasi aset baru.",
  },
  {
    icon: Wrench,
    title: "Dukungan Suku Cadang & Servis",
    description:
      "Pemeliharaan rutin, servis berkala, dan kebutuhan suku cadang dapat dikoordinasikan sesuai klausul kontrak sewa.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="max-w-3xl flex flex-col gap-3">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
            NILAI TAMBAH KONTRAK
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
            Keunggulan Layanan Sewa Forklift
          </h2>

          <p className="text-base lg:text-lg leading-relaxed text-on-surface-variant">
            Dukungan profesional terpadu untuk membantu menjaga kelancaran
            produktivitas bisnis dan kebutuhan material handling Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-5 p-6 lg:p-8 rounded-xl bg-surface-container-lowest shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <Icon size={26} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="text-base leading-7 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const steps = [
  {
    number: "1",
    title: "Konsultasi Awal",
    description:
      "Sampaikan kebutuhan unit, kapasitas muatan, estimasi durasi sewa, dan kondisi operasional fasilitas.",
  },
  {
    number: "2",
    title: "Identifikasi Beban",
    description:
      "Tim mengevaluasi profil beban, tipe mast, jam operasional, serta kondisi lintasan dan area kerja.",
  },
  {
    number: "3",
    title: "Rekomendasi Unit",
    description:
      "Kami menyiapkan usulan tipe armada beserta spesifikasi attachment yang sesuai dengan kebutuhan.",
  },
  {
    number: "4",
    title: "Penawaran Resmi",
    description:
      "Penerbitan penawaran harga, periode sewa, skema pemeliharaan, dan kelengkapan administrasi kontrak.",
  },
  {
    number: "5",
    title: "Pelaksanaan Sewa",
    description:
      "Unit diinspeksi sebelum pengiriman dan kemudian dikirim ke lokasi sesuai jadwal yang disepakati.",
  },
];

export default function RentalProcessSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
            ALUR KERJA TERSTRUKTUR
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
            Proses Sewa Forklift
          </h2>

          <p className="text-base lg:text-lg leading-relaxed text-on-surface-variant max-w-2xl">
            Langkah transparan dan sistematis untuk membantu memastikan unit
            tiba di lokasi sesuai kebutuhan dan jadwal operasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-4"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === steps.length - 1
                    ? "bg-secondary text-on-secondary"
                    : "bg-primary text-on-primary"
                }`}
              >
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-primary">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
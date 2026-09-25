const services = [
  {
    icon: "search_check",
    number: "Point 01",
    title: "Pemeriksaan Titik Lubrikasi",
    description:
      "Pengecekan pada nipple grease, bushing tiang mast, steer knuckle, bearing roda, dan joint pergerakan mekanis untuk memastikan kelancaran artikulasi.",
  },
  {
    icon: "oil_barrel",
    number: "Point 02",
    title: "Pemberian Pelumas Sesuai Kebutuhan",
    description:
      "Aplikasi grease tahan tekanan tinggi dan penggantian pelumas fluida sesuai spesifikasi beban kerja komponen dan kapasitas forklift.",
  },
  {
    icon: "leak_remove",
    number: "Point 03",
    title: "Pemeriksaan Kondisi Komponen Terkait",
    description:
      "Pemeriksaan seal karet, filter oli, serta deteksi potensi kontaminasi debu industri atau kebocoran pelumas.",
  },
  {
    icon: "calendar_month",
    number: "Point 04",
    title: "Jadwal Lubrikasi Berkala",
    description:
      "Penyusunan jadwal interval pelumasan yang disesuaikan dengan rotasi shift dan intensitas pemakaian forklift.",
  },
  {
    icon: "receipt_long",
    number: "Point 05",
    title: "Pencatatan Aktivitas Perawatan",
    description:
      "Pencatatan riwayat maintenance untuk membantu tracking kondisi komponen, interval grease, dan histori perawatan berkala.",
  },
];

export default function LubricationSection() {
  return (
    <section className="w-full bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-2 inline-flex items-center gap-1.5 text-label-technical font-bold uppercase tracking-wider text-secondary">
            <span className="material-symbols-outlined text-[14px]">
              opacity
            </span>
            Preventive Lubrication
          </div>

          <h2 className="mb-4 text-headline-lg font-bold tracking-tight text-primary">
            Layanan Lubrikasi Forklift
          </h2>

          <p className="text-body-lg leading-relaxed text-on-surface-variant">
            Lubrikasi yang tepat membantu menjaga komponen bergerak bekerja
            dengan baik serta mendukung keandalan forklift dalam aktivitas
            operasional sehari-hari.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md ${
                index === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                </div>

                <span className="text-label-technical font-bold uppercase tracking-wider text-secondary">
                  {item.number}
                </span>
              </div>

              <h3 className="mb-2 text-title-md font-bold text-primary">
                {item.title}
              </h3>

              <p className="text-body-md leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-surface-container p-4">
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] text-primary">
            notification_important
          </span>

          <p className="text-body-sm text-on-surface-variant">
            <strong className="font-semibold text-primary">
              Catatan Penting:
            </strong>{" "}
            Pemilihan pelumas harus disesuaikan dengan spesifikasi tipe
            forklift, beban angkut, suhu lingkungan kerja, dan anjuran pabrikan
            masing-masing unit.
          </p>
        </div>
      </div>
    </section>
  );
}

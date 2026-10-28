import SectionHeader from "./SectionHeader";

const processItems = [
  [
    "01",
    "Konsultasi & Penjadwalan",
    "Memahami kendala unit, lokasi, tipe forklift, dan jadwal servis.",
    "forum",
    "Koordinasi Awal",
  ],
  [
    "02",
    "Pemeriksaan di Lokasi",
    "Teknisi melakukan inspeksi visual dan pengecekan teknis di fasilitas Anda.",
    "pin_drop",
    "On-Site Diagnostic",
  ],
  [
    "03",
    "Rekomendasi & Estimasi",
    "Hasil pemeriksaan dirangkum dalam rekomendasi tindakan servis dan kebutuhan part.",
    "request_quote",
    "Transparansi Biaya",
  ],
  [
    "04",
    "Pengerjaan Servis & Lubrikasi",
    "Pengerjaan dilakukan sesuai SOP dan kebutuhan teknis unit.",
    "construction",
    "Presisi Eksekusi",
  ],
  [
    "05",
    "Pemeriksaan Akhir & BAST",
    "Pengujian fungsi sebelum unit diserahterimakan.",
    "verified",
    "Quality Approved",
  ],
];

export default function ServiceProcessSection() {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="alt_route"
          eyebrow="Alur Kerja Terstandar"
          title="Proses Pelayanan Servis"
          description="Langkah terarah dari konsultasi awal hingga unit siap beroperasi kembali dengan aman."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {processItems.map(([number, title, text, icon, label]) => (
            <div
              key={number}
              className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between group hover:bg-surface-container-low transition-colors"
            >
              <div>
                <span className="font-display text-display text-primary/20 leading-none mb-3 block group-hover:text-secondary/40 transition-colors">
                  {number}
                </span>

                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                  {title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {text}
                </p>
              </div>

              <div className="mt-4 pt-3 flex items-center gap-1.5 font-label-technical text-label-technical text-primary font-semibold uppercase">
                <span className="material-symbols-outlined text-[14px]">
                  {icon}
                </span>

                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

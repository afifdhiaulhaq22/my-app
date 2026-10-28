const values = [
  [
    "route",
    "Perawatan Terarah",
    "Pendekatan terstruktur untuk menjaga keandalan komponen kerja.",
  ],
  [
    "engineering",
    "Dukungan Teknis",
    "Diskusi teknis bersama tim berpengalaman di sektor forklift.",
  ],
  [
    "history_edu",
    "Pemeriksaan Berkala",
    "Riwayat maintenance yang rapi, transparan, dan terukur.",
  ],
  [
    "warehouse",
    "Dukungan Suku Cadang",
    "Akses komponen pendukung sesuai kebutuhan unit.",
  ],
];

export default function ServiceValueSection() {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-label-technical text-label-technical text-secondary font-bold uppercase tracking-wider block mb-2">
            Nilai Tambah Layanan
          </span>

          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">
            Dukungan Perawatan untuk Operasional Anda
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Solusi terintegrasi yang berorientasi pada kesinambungan kerja
            armada industri Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(([icon, title, text]) => (
            <div
              key={title}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  {icon}
                </span>
              </div>

              <h4 className="font-title-md text-title-md text-primary font-bold mb-2">
                {title}
              </h4>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

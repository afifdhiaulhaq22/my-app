import SectionHeader from "./SectionHeader";

const lubricants = [
  [
    "Industrial Grease",
    "Bushing mast, knuckle steer axle, cross joint propeller shaft, dan bearing roda forklift.",
    "Grade & konsistensi NLGI disesuaikan manual unit.",
  ],
  [
    "Hydraulic Oil",
    "Lift cylinder, tilt cylinder, power steering, dan attachment clamp.",
    "Viskositas ISO VG disesuaikan spesifikasi pompa dan suhu operasional.",
  ],
  [
    "Engine Oil",
    "Sistem pelumasan mesin forklift diesel maupun gasoline/LPG.",
    "SAE & API Service disesuaikan model mesin dan jam kerja.",
  ],
  [
    "Transmission & Torque Converter Oil",
    "Automatic powershift, clutch pack, dan gearbox.",
    "Spesifikasi fluida sesuai standar manufaktur transmisi.",
  ],
  [
    "Differential & Gear Oil",
    "Differential axle dan reduksi roda penggerak.",
    "API GL dan viskositas disesuaikan kebutuhan beban.",
  ],
];

export default function LubricantTypesSection() {
  return (
    <section className="w-full py-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="science"
          eyebrow="Panduan Fluida & Grease"
          title="Jenis Pelumas Forklift"
          description="Setiap komponen forklift memerlukan karakteristik pelumasan khusus guna menahan beban mekanis berat dan temperatur kerja yang berbeda."
        />

        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md text-body-md border-collapse">
              <thead>
                <tr className="bg-surface-container text-primary font-label-technical text-label-technical uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">
                    Jenis Pelumas
                  </th>

                  <th className="py-4 px-6 font-bold">
                    Penggunaan Komponen
                  </th>

                  <th className="py-4 px-6 font-bold">
                    Keterangan Spesifikasi
                  </th>
                </tr>
              </thead>

              <tbody>
                {lubricants.map(
                  ([name, usage, specification], index) => (
                    <tr
                      key={name}
                      className={`${
                        index % 2 === 0
                          ? "bg-surface-container-lowest"
                          : "bg-surface-container-low/40"
                      } hover:bg-surface-container-low transition-colors`}
                    >
                      <td className="py-4 px-6 font-title-md text-title-md text-primary font-bold">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              index % 2 === 0
                                ? "bg-secondary"
                                : "bg-primary"
                            }`}
                          />

                          {name}
                        </div>
                      </td>

                      <td className="py-4 px-6 text-on-surface-variant">
                        {usage}
                      </td>

                      <td className="py-4 px-6 text-on-surface font-label-technical text-label-technical">
                        {specification}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-surface-container p-4 rounded-xl flex items-start gap-3">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
            warning
          </span>

          <p className="font-body-sm text-body-sm text-on-surface">
            <strong className="font-semibold text-primary">
              Peringatan:
            </strong>{" "}
            Pemilihan pelumas harus selalu dikonfirmasi dengan buku pedoman
            operasional masing-masing unit forklift.
          </p>
        </div>
      </div>
    </section>
  );
}

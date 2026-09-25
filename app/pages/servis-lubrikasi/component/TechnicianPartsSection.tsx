export default function TechnicianPartsSection() {
  const technicianItems = [
    "Penanganan beragam tipe unit forklift.",
    "Peralatan diagnostik dan special tools.",
    "Pendekatan sistematis yang mengutamakan K3.",
    "Masukan preventif untuk operator dan supervisor.",
  ];

  const parts = [
    "Filter Oli & Udara",
    "Komponen Hidrolik",
    "Brake System",
    "Seal Kit & Gasket",
    "Battery Connector",
    "Roda Solid Rubber",
  ];

  return (
    <section className="w-full py-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-label-technical text-label-technical text-secondary font-bold tracking-wider uppercase mb-2">
            <span className="material-symbols-outlined text-[14px]">
              hub
            </span>

            Dukungan Terpadu
          </div>

          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
            Teknisi Berpengalaman & Kesiapan Suku Cadang
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Sinergi antara kompetensi teknis di lapangan dan ketersediaan
            komponen pendukung perawatan unit forklift.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-8 rounded-2xl shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-on-primary rounded font-label-technical text-label-technical tracking-wider uppercase font-bold mb-4">
              <span className="material-symbols-outlined text-[14px]">
                badge
              </span>

              Field Engineering Crew
            </div>

            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
              Dukungan Tim Teknisi PT. KEI HAI
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
              Tim teknis berfokus pada penanganan unit material handling,
              mesin diesel, sistem hidrolik, elektrikal forklift baterai,
              serta keselamatan kerja di area industri.
            </p>

            <ul className="space-y-3">
              {technicianItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">
                      done
                    </span>
                  </span>

                  <span className="font-body-md text-body-md text-on-surface">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#kontak-servis"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all mt-8"
            >
              <span className="material-symbols-outlined text-[18px]">
                support_agent
              </span>

              Diskusikan Kebutuhan Servis
            </a>
          </div>

          <div className="bg-surface-container-low p-8 rounded-2xl shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-on-secondary rounded font-label-technical text-label-technical tracking-wider uppercase font-bold mb-4">
              <span className="material-symbols-outlined text-[14px]">
                inventory_2
              </span>

              Genuine & Heavy-Duty Parts
            </div>

            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
              Ketersediaan Suku Cadang Berkualitas
            </h3>

            <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-primary flex items-center justify-center">
              <div className="text-center text-on-primary p-6">
                <span className="material-symbols-outlined text-[64px] text-secondary-fixed mb-3">
                  inventory_2
                </span>

                <span className="block font-label-technical uppercase tracking-wider">
                  Forklift Parts
                </span>

                <span className="block font-body-sm text-on-primary-container mt-2">
                  Komponen maintenance & repair
                </span>
              </div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              Kelancaran servis didukung ketersediaan suku cadang yang tepat
              untuk forklift Anda, mulai dari filter, komponen hidrolik,
              brake system, seal kit, battery connector hingga roda solid
              rubber.
            </p>

            <div className="flex flex-wrap gap-2">
              {parts.map((part) => (
                <span
                  key={part}
                  className="px-3 py-1 bg-surface-container-lowest text-primary rounded font-label-technical text-label-technical uppercase font-bold shadow-xs"
                >
                  {part}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

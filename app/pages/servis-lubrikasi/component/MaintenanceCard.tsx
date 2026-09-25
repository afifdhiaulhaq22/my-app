export default function MaintenanceCard({
  stage,
  label,
  title,
  interval,
  technician,
  items,
  featured = false,
}: {
  stage: string;
  label: string;
  title: string;
  interval: string;
  technician: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between ${
        featured ? "shadow-md relative" : "shadow-sm"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-secondary text-on-secondary px-3 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
          Rekomendasi Utama
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-1 rounded bg-primary-fixed/50 font-label-technical text-label-technical uppercase font-bold text-primary">
            {stage}
          </span>

          <span
            className={`font-label-technical text-label-technical uppercase ${
              featured
                ? "text-secondary font-bold"
                : "text-on-surface-variant"
            }`}
          >
            {label}
          </span>
        </div>

        <h3 className="font-title-md text-title-md text-primary font-bold mb-3">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="bg-surface-container-low p-3 rounded-lg">
            <span className="block font-label-technical text-label-technical text-outline uppercase font-semibold">
              Interval Waktu
            </span>

            <span className="font-body-md text-body-md text-primary font-medium">
              {interval}
            </span>
          </div>

          <div className="bg-surface-container-low p-3 rounded-lg">
            <span className="block font-label-technical text-label-technical text-outline uppercase font-semibold">
              Pelaksana
            </span>

            <span className="font-body-md text-body-md text-primary font-medium">
              {technician}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="block font-label-technical text-label-technical text-primary uppercase font-bold tracking-wider">
            Item Pemeriksaan:
          </span>

          <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                  check
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

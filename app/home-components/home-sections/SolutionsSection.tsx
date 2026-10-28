const SOLUTIONS = [
  "Pengadaan forklift baru & rekondisi berstandar tinggi",
  "Analisis beban material handling spesifik tata letak gudang",
  "Optimasi operasional & efisiensi konsumsi bahan bakar/baterai",
  "Efisiensi siklus perputaran unit di jalur produksi pabrik",
];

const SERVICES = [
  "Servis berkala, overhaul mesin & kalibrasi sistem hidrolik",
  "Pelumasan presisi (lubrikasi) dengan oli standar heavy-duty",
  "Fleksibilitas sewa unit harian, bulanan, hingga tahunan",
  "Ketersediaan suku cadang asli dan tim teknisi standby 24/7",
];

function FeatureList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2"
        >
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-secondary">
            check_circle
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SolutionCard({
  icon,
  title,
  items,
  variant,
}: {
  icon: string;
  title: string;
  items: string[];
  variant: "primary" | "secondary";
}) {
  const iconClass =
    variant === "primary"
      ? "bg-primary text-on-primary"
      : "bg-secondary text-on-secondary";

  return (
    <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div
        className={`mb-space-md flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}
      >
        <span className="material-symbols-outlined text-[22px]">
          {icon}
        </span>
      </div>

      <h3 className="mb-space-sm font-title-md text-title-md font-bold text-primary">
        {title}
      </h3>

      <FeatureList items={items} />
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section className="bg-surface-bright py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-space-xl max-w-3xl">
          <span className="font-label-technical text-label-technical font-bold uppercase tracking-widest text-secondary">
            Integrasi Holistik
          </span>

          <h2 className="mt-1 mb-3 font-headline-lg text-headline-lg font-bold text-primary">
            Solusi dan Layanan untuk Operasional yang Lebih Efisien
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Kami menghadirkan solusi material handling yang disesuaikan secara
            menyeluruh dengan kebutuhan operasional dan tantangan industri
            Anda guna meminimalkan downtime dan memaksimalkan output.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          {/* Left: Solution & Service Cards */}
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:col-span-7">
            <SolutionCard
              icon="precision_manufacturing"
              title="Blok Solusi"
              variant="primary"
              items={SOLUTIONS}
            />

            <SolutionCard
              icon="build"
              title="Blok Layanan"
              variant="secondary"
              items={SERVICES}
            />
          </div>

          {/* Right: Visual Feature */}
          <div className="relative lg:col-span-5">
            {/* Visual Panel */}
            <div className="relative h-[440px] overflow-hidden rounded-2xl bg-primary shadow-xl">
              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "42px 42px",
                  }}
                />
              </div>

              {/* Decorative Circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-secondary/20" />

              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[50px] border-white/5" />

              {/* Center Content */}
              <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary shadow-lg shadow-black/20">
                  <span className="material-symbols-outlined text-[52px] text-on-secondary">
                    engineering
                  </span>
                </div>

                <span className="mb-2 font-label-technical text-label-technical font-bold uppercase tracking-[0.2em] text-secondary">
                  PT. KEI HAI
                </span>

                <h3 className="max-w-sm font-headline-md text-headline-md font-bold text-on-primary">
                  Partner Material Handling Anda
                </h3>

                <p className="mt-3 max-w-sm font-body-sm text-body-sm leading-relaxed text-on-primary-container">
                  Dukungan teknisi berpengalaman untuk menjaga performa unit
                  dan kelancaran operasional bisnis Anda.
                </p>

                {/* Visual Metrics */}
                <div className="mt-8 grid w-full max-w-sm grid-cols-3 gap-2">
                  <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                    <span className="block font-headline-sm text-headline-sm font-bold text-on-primary">
                      24/7
                    </span>
                    <span className="font-label-technical text-[10px] uppercase tracking-wider text-on-primary-container">
                      Support
                    </span>
                  </div>

                  <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                    <span className="block font-headline-sm text-headline-sm font-bold text-on-primary">
                      Fast
                    </span>
                    <span className="font-label-technical text-[10px] uppercase tracking-wider text-on-primary-container">
                      Response
                    </span>
                  </div>

                  <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                    <span className="block font-headline-sm text-headline-sm font-bold text-on-primary">
                      K3
                    </span>
                    <span className="font-label-technical text-[10px] uppercase tracking-wider text-on-primary-container">
                      Safety
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-xl bg-primary p-space-md text-on-primary shadow-xl sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined shrink-0 text-[32px] text-secondary">
                  bolt
                </span>

                <div>
                  <p className="font-title-md text-title-md font-bold leading-tight">
                    Respons Cepat di Lapangan
                  </p>

                  <p className="mt-1 font-body-sm text-body-sm text-on-primary-container">
                    Garansi tanggap teknisi cepat untuk meminimalkan waktu
                    terhenti (zero downtime).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

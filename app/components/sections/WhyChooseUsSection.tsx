const BENEFITS = [
  {
    icon: "hub",
    title: "Solusi Lengkap",
    description:
      "Menyediakan unit forklift, suku cadang, servis, lubrikasi, dan sewa unit dalam satu layanan terintegrasi.",
    variant: "primary",
  },
  {
    icon: "engineering",
    title: "Dukungan Profesional",
    description:
      "Didukung oleh tim teknisi berpengalaman dan tersertifikasi resmi di bidang material handling industri.",
    variant: "secondary",
  },
  {
    icon: "timer",
    title: "Layanan Responsif",
    description:
      "Memberikan dukungan teknis tanggap dan cepat untuk meminimalkan gangguan operasional di pabrik Anda.",
    variant: "primary",
  },
  {
    icon: "tune",
    title: "Fokus Kebutuhan Industri",
    description:
      "Solusi disesuaikan dengan kapasitas beban, tinggi mast, serta kondisi operasional spesifik pelanggan.",
    variant: "secondary",
  },
];

function BenefitCard({
  icon,
  title,
  description,
  variant,
}: {
  icon: string;
  title: string;
  description: string;
  variant: string;
}) {
  const iconStyles =
    variant === "secondary"
      ? "bg-secondary/10 text-secondary"
      : "bg-primary/10 text-primary";

  return (
    <div className="flex flex-col rounded-xl bg-surface-container-low p-space-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${iconStyles}`}
      >
        <span className="material-symbols-outlined text-[20px]">
          {icon}
        </span>
      </div>

      <h3 className="mb-1 font-title-md text-title-md font-bold text-primary">
        {title}
      </h3>

      <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="bg-surface-container-lowest py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          {/* Left: Industrial Operation Visual */}
          <div className="relative order-2 lg:col-span-5 lg:order-1">
            <div className="relative h-[520px] overflow-hidden rounded-2xl bg-primary shadow-xl">
              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Decorative Circles */}
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-secondary/20" />

              <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full border-[50px] border-white/5" />

              {/* Main Visual */}
              <div className="relative flex h-full flex-col items-center justify-center px-8">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-surface-container-lowest/10 shadow-2xl backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[72px] text-secondary">
                    forklift
                  </span>
                </div>

                <span className="mt-8 font-label-technical text-label-technical font-bold uppercase tracking-[0.25em] text-secondary">
                  Material Handling
                </span>

                <h3 className="mt-2 text-center font-headline-md text-headline-md font-bold text-on-primary">
                  Partner Industri Anda
                </h3>

                <p className="mt-3 max-w-sm text-center font-body-sm text-body-sm leading-relaxed text-on-primary-container">
                  Dukungan menyeluruh untuk kebutuhan forklift dan material
                  handling dalam berbagai sektor industri.
                </p>

                {/* Stats */}
                <div className="mt-10 grid w-full max-w-sm grid-cols-3 gap-2">
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <span className="block font-headline-sm text-headline-sm font-bold text-on-primary">
                      250+
                    </span>
                    <span className="font-label-technical text-[10px] uppercase tracking-wider text-on-primary-container">
                      Klien
                    </span>
                  </div>

                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <span className="block font-headline-sm text-headline-sm font-bold text-on-primary">
                      24/7
                    </span>
                    <span className="font-label-technical text-[10px] uppercase tracking-wider text-on-primary-container">
                      Support
                    </span>
                  </div>

                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
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

            {/* Certification Badge */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-lg bg-surface-container-lowest/95 px-4 py-2.5 shadow-md backdrop-blur-md">
              <span className="material-symbols-outlined text-[20px] text-secondary">
                shield
              </span>

              <span className="font-label-technical text-label-technical font-bold uppercase tracking-wider text-primary">
                ISO Certified Practice
              </span>
            </div>
          </div>

          {/* Right: Why Choose Us Content */}
          <div className="order-1 flex flex-col lg:col-span-7 lg:order-2">
            <span className="font-label-technical text-label-technical font-bold uppercase tracking-widest text-secondary">
              Keunggulan Kami
            </span>

            <h2 className="mt-1 mb-space-md font-headline-lg text-headline-lg font-bold text-primary">
              Kenapa Memilih PT. KEI HAI?
            </h2>

            <p className="mb-space-lg font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Kami berkomitmen menjadi mitra strategis logistik dan industri
              Anda dengan memberikan dukungan teknis menyeluruh, unit handal,
              transparansi layanan, dan responsivitas tinggi untuk mendukung
              pertumbuhan bisnis Anda.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <BenefitCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  variant={benefit.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

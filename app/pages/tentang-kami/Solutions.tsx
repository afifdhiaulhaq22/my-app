const solutions = [
  {
    category: "ARMADA INDUSTRI",
    title: "Unit Forklift",
    description:
      "Penyediaan armada forklift diesel, elektrik (counterbalance & reach truck), dan dual-fuel LPG untuk kebutuhan outdoor maupun indoor gudang modern.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WcR5C_ebxiHTqXybTaGWW2d3NUwtVoy_D2ldzVsamsgSBj3jkUU1l1jDMs96cmcJGiux40JfODyCvm6va0SeSv6iy6iaDVgiISTkmbE6FEi11hK5qFu59HSAw_F13TtVOA2gdMKQYAyvmh1C2SewufYTzHiE7R8tj66IYuHAogzC4ktHZSWHuPklbDga4pCGsfLoE-1jic8VeAGzaFQufmIej88yK-QIwbYOzD-ImhMvlve8aT1Wxp_A",
    href: "/unit-forklift",
    link: "Lihat Katalog Forklift",
    objectFit: "object-contain",
  },
  {
    category: "GENUINE PARTS",
    title: "Suku Cadang",
    description:
      "Ketersediaan suku cadang genuine dan OEM (filter oli, komponen hidrolik, sistem rem, mast chain, roda ban solid/pneumatic) untuk keandalan unit.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UcwWRCqa0g-iAjphTb0tQN2gqtth-laWJSbqyztdb83kp9Tq6-QnNfrihnjz2ptN20KIbqRpJDfXM95ubPN5Tq84YzaTLaALTsdwbT8n4R9krf8C9sP74fDZn242xToji5-vhwB-DvxzBRYMkuVBRnm2p2nO6L0mwsjtRPz6o2stxIoLT_vOsbDgClX0YQDuMhFM2TQxi_DY_l_5-_ltu0GtI-XJZLyD2Jaeu2NQd78WRZwUkjvQBdYg",
    href: "/suku-cadang",
    link: "Lihat Katalog Suku Cadang",
    objectFit: "object-cover",
  },
  {
    category: "POWER SOLUTIONS",
    title: "Baterai Forklift",
    description:
      "Solusi traksi baterai lead-acid deep-cycle dan lithium LiFePO4 boks standar DIN/BS serta stasiun pengisian daya (smart charger) industri.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XtCcDyZDGJoWEypb_HICE5JVU1eDRdc0nrz1_sg-SDjx4WcmYRZS37NCjKHFi0aPytN0aPoQ7A2O3hEVv3XbXPK-VyaLQWUQwcjlk_iIgQdCBeq628MVTKu3TFdE5s1rUHp6eG7YDYLEkUTrpcaa6ch4pa45eVJmxebH4cp-nYHR55pwWfQo821w-UJFiXvRoH1xeNwO9qP-s1GuCutfLXmJlM_yI_DHkDyQNe9jtOh_2BGEO2KH7tag",
    href: "/baterai",
    link: "Lihat Katalog Baterai",
    objectFit: "object-contain",
  },
  {
    category: "MAINTENANCE",
    title: "Servis & Lubrikasi",
    description:
      "Layanan perawatan berkala, lubrikasi titik krusial, general inspection, dan penanganan teknis on-call oleh tim spesialis berpengalaman.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0KEVhjAdxtxwmZCTedmqZ5Fv05tKdmVqjhqWLX7-PazZHRNUiGisApm1eiQ_9N9QS0Wwsn4aNhNoGaVPUudUdN2-qWt5xzZ3Ok9Cd4b-jGGHF-hkW4IrXqgJ2y2BDM8DWQB9JPlust-lZxoxQBGM9v4ibanVuLQSGx7Z-vqULiIM6A0uTq3O7lXVnPYOxVfIxXm2ZXKrOD6RSaqUKnqYg4WCAzOT1RNyFEWclP5BO2bxNVAazmtFx",
    href: "/servis-dan-lubrikasi",
    link: "Lihat Layanan Servis",
    objectFit: "object-cover",
  },
];

export default function Solutions() {
  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest">
            PORTFOLIO LENGKAP
          </span>

          <h2 className="font-headline-md text-headline-md text-primary">
            Apa yang Kami Berikan
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Solusi lengkap dan terpadu untuk mendukung efisiensi serta
            kesinambungan aktivitas material handling operasional bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-full h-48 rounded-lg bg-surface-container overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className={`w-full h-full ${solution.objectFit} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-label-technical text-label-technical text-secondary uppercase tracking-wider">
                    {solution.category}
                  </span>

                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {solution.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {solution.description}
                  </p>
                </div>
              </div>

              <a
                href={solution.href}
                className="inline-flex items-center gap-1.5 mt-6 font-title-md text-title-md text-primary hover:text-secondary font-semibold transition-colors"
              >
                <span>{solution.link}</span>

                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}

          {/* Rental */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group lg:col-span-2">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/2 h-48 rounded-lg bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNyIEoji9iMZ3XvA6pmbMszMnzEurigCrlrUD0cgaUQ5QnfeYZoTJmR4qA1BYfCqWwM2sl3RODd5OgrXTZlEkDoMpPSRKMvyZWhTEY_O9HQTreNm1HVOc_XeithKmMDjx_kAIOpwOjDlrD6zhZqklJ8i_cuwJzqUhfO5Jrt1v4e2rJ_DGQg8f2UOquN-TjbNRZK6jorGxUw3BcsXi2Iih9qW32CFJ7K6tCAYRXGzrXrhVYDgAyXe9-"
                  alt="Sewa forklift PT. KEI HAI"
                />
              </div>

              <div className="flex flex-col gap-2 w-full lg:w-1/2">
                <span className="font-label-technical text-label-technical text-secondary uppercase tracking-wider">
                  RENTAL FLEKSIBEL
                </span>

                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Sewa Unit (Rental)
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fleksibilitas sewa forklift harian, bulanan, hingga kontrak
                  tahunan untuk mengatasi lonjakan kapasitas muatan tanpa beban
                  investasi awal yang memberatkan neraca finansial perusahaan
                  Anda. Termasuk opsi pergantian unit cadangan.
                </p>

                <a
                  href="/sewa-unit"
                  className="inline-flex items-center gap-1.5 mt-2 font-title-md text-title-md text-primary hover:text-secondary font-semibold transition-colors"
                >
                  <span>Lihat Solusi Sewa</span>

                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    category: "ARMADA INDUSTRI",
    title: "Unit Forklift",
    description:
      "Penyediaan armada forklift diesel, elektrik (counterbalance & reach truck), dan dual-fuel LPG untuk kebutuhan outdoor maupun indoor gudang modern.",
    image:"/2.jpeg",
    objectFit: "object-fit: cover",
  },
  {
    category: "GENUINE PARTS",
    title: "Suku Cadang",
    description:
      "Ketersediaan suku cadang genuine dan OEM (filter oli, komponen hidrolik, sistem rem, mast chain, roda ban solid/pneumatic) untuk keandalan unit.",
    image:"/6.jpeg",
    objectFit: "object-cover",
  },
  {
    category: "POWER SOLUTIONS",
    title: "Baterai Forklift",
    description:
      "Solusi traksi baterai lead-acid deep-cycle dan lithium LiFePO4 boks standar DIN/BS serta stasiun pengisian daya (smart charger) industri.",
    image:"/batre-forklift3.jpg",
    href: "/pages/baterai",
    objectFit: "object-fit: cover",
  },
  {
    category: "MAINTENANCE",
    title: "Servis & Lubrikasi",
    description:
      "Layanan perawatan berkala, lubrikasi titik krusial, general inspection, dan penanganan teknis on-call oleh tim spesialis berpengalaman.",
    image:"/3.jpeg",
    href: "/pages/servis-lubrikasi",
    objectFit: "object-fit: cover",
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

              {/* <a
                href={solution.href}
                className="inline-flex items-center gap-1.5 mt-6 font-title-md text-title-md text-primary hover:text-secondary font-semibold transition-colors"
              >
                <span>{solution.link}</span>

                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

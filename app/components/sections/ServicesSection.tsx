import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Jual Unit Forklift",
    description:
      "Berbagai pilihan unit forklift untuk mendukung kebutuhan operasional industri.",
    href: "/pages/produk",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 17h1m11 0h1m2 0h1a1 1 0 001-1v-5l-2-4h-4v9"
        />
        <path
          stroke="#bb0413"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
          d="M20 7h3v10"
        />
      </svg>
    ),
  },

  {
    title: "Sewa Unit Forklift",
    description:
      "Solusi sewa forklift yang fleksibel untuk kebutuhan proyek dan operasional bisnis.",
    href: "/sewa-forklift",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
        <path
          stroke="#bb0413"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
          d="M12 14l2 2 4-4"
        />
      </svg>
    ),
  },

  {
    title: "Servis dan Lubrikasi",
    description:
      "Layanan perawatan, servis, dan lubrikasi untuk menjaga performa forklift.",
    href: "/pages/servis-lubrikasi",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <circle cx="12" cy="12" r="3" />
        <path
          stroke="#bb0413"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v2m0 4v2"
        />
      </svg>
    ),
  },

  {
    title: "Suku Cadang",
    description:
      "Suku cadang berkualitas untuk membantu menjaga forklift tetap beroperasi secara optimal.",
    href: "/suku-cadang",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
        <path
          stroke="#bb0413"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
          d="M12 11l4-2m-4 2l-4-2"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-surface-bright py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-space-xl max-w-3xl text-center">
          <div className="mb-2 font-label-technical text-label-technical font-bold uppercase tracking-widest text-secondary">
            Layanan Terpadu
          </div>

          <h2 className="mb-3 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
            Solusi Lengkap untuk Kebutuhan Forklift Anda
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Mulai dari pengadaan unit hingga perawatan dan kebutuhan suku
            cadang, kami membantu menjaga operasional bisnis Anda tetap
            berjalan optimal tanpa kendala.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-start"
            >
              {/* Icon */}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-container text-primary-container transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-md">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2.5 font-headline-sm text-headline-sm font-bold text-primary transition-colors group-hover:text-secondary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {service.description}
              </p>

              {/* Link Indicator */}
              <span className="mt-4 inline-flex items-center gap-1 font-label-md text-label-md font-bold text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Selengkapnya
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

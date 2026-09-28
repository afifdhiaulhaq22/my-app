import Link from "next/link";

const services = [
  {
    title: "Jual Unit Forklift",
    description:
      "Berbagai pilihan unit forklift diesel, elektrik, dan LPG untuk mendukung operasional industri berat.",
    badge: "KAPASITAS 1.5 - 25 TON",
    path: "/produk/unit-forklift",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WcteIXrKgWnilIohEEGxfAAKjibZRwDrB1KwVbGLe7GKZu7R7G9Dv8bmRnqVTwXVA4laQUjjpHVCBq7BSLep17gk9AuihsxaSmo06OX0u8N9MYBGdi_MXiF1WCFL3a2za8pAN2wvxX6b7KpobzoCOv-Ns2WsiLknkyr4H6DN4zpqr8zvffAv2kzWXaOvO5Vag0o3s1fDEnK7y9nKs-ittSa6Ht-fZDNNWjbHEptVcTXnD4lQQlOSZm0w",
    alt: "Jual Unit Forklift Modern PT KEI HAI",
    icon: "forklift",
  },
  {
    title: "Sewa Unit Forklift",
    description:
      "Solusi sewa harian, bulanan, dan tahunan fleksibel dengan armada backup siaga 24 jam.",
    badge: "KONTRAK FLEKSIBEL",
    path: "/layanan/sewa-unit",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VQry0B9MxNJX9UX2cl-qbyWSv18mgvVFOyiQf1f1bqMZWw4PMnFPcIyOqJ12wSqQXP4hZnG15PNZKERMXMs5JoUiioxuoPcXc32YFTS_fM-8WEasJRWW-3QTEuv642JQV8DkfaGXKA0N1PMJNqUSm6Qoq18f1Gyr6MegnXVLD3RSCAs9oQuvZfW77wdC54VpKySyvYt9PLnfiguUVRZLLQNHObwfxftOSTwC-506J8lD9X1GQYl2wFaLI",
    alt: "Sewa Unit Forklift Pergudangan Logistik PT KEI HAI",
    icon: "rental",
  },
  {
    title: "Servis dan Lubrikasi",
    description:
      "Layanan preventive maintenance, overhaul, dan oli industri standar berat bersertifikasi K3.",
    badge: "GARANSI SERVIS",
    path: "/layanan/servis-dan-lubrikasi",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UooZNYT29Qz6O1bkT3JwPWL58M2QVeRjRv3jjI5upYORYbGrfU0Sbm6k_GnVL31n6msmSVVfUak5xfR2vQ0QC0-r7eMW9HpZoRF1o5M59q8kGeHBw1YHCRYpxSAx9ZabitwiLmVN0bweWdaVhasCa93BxcKm0NeqOiisrMj3gaX08jtCeyjk1XHdrTZ2CPd4Ng9PLgb9M2US5aExed0aWeNIKK6vsa5vAMTVE9tkEvRYBcfjKRx0OSBA",
    alt: "Teknisi Melakukan Servis dan Lubrikasi Forklift PT KEI HAI",
    icon: "service",
  },
  {
    title: "Suku Cadang",
    description:
      "Suku cadang 100% original bergaransi resmi untuk memastikan operasional mesin tanpa henti.",
    badge: "OEM GENUINE PARTS",
    path: "/produk/suku-cadang",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1ULCntxBuF3mY8iXJNxvAM5uqfEOEMjrU31fHSNy0DxuxddsjFrtw8rnBQLuDbFWqWmb_nPLLw-OPuVO88l3RryN7ULN4mRpL1sEcOag82HvNdOAV2rEr2abHdW5zPhN3xMW75d27QeShoAh9RK3yaNmtJipgzQRyMVg5mzb0VMfdaFI37UhVKJEMDIj6oN8d_Tg58-8h-YPzf6t29zPauM8DIGBGghbBCDPZieHh6ADM0c7vNIOi7Now",
    alt: "Suku Cadang Asli OEM Forklift PT KEI HAI",
    icon: "parts",
  },
];

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case "forklift":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 16V6a1 1 0 00-1-1H4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 17h1m11 0h1m2 0h1a1 1 0 001-1v-5l-2-4h-4v9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 7h3v10"
            stroke="#ffdad6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      );

    case "rental":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14l2 2 4-4"
            stroke="#ffdad6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      );

    case "service":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" />
          <path
            d="M12 8v2m0 4v2"
            stroke="#ffdad6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );

    case "parts":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11l4-2m-4 2l-4-2"
            stroke="#ffdad6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-label-technical text-secondary font-bold uppercase tracking-widest mb-2">
            Layanan Terpadu
          </div>

          <h2 className="font-headline-lg text-primary font-bold mb-3 tracking-tight">
            Solusi Lengkap untuk Kebutuhan Forklift Anda
          </h2>

          <p className="font-body-md text-on-surface-variant">
            Mulai dari pengadaan unit hingga perawatan dan kebutuhan suku
            cadang, kami membantu menjaga operasional bisnis Anda tetap
            berjalan optimal tanpa kendala.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.path}
              className="group relative h-[340px] md:h-[360px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between p-6"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00183b] via-[#00183b]/75 to-[#00183b]/35 group-hover:via-[#00183b]/70 transition-colors duration-300" />

              {/* Top Content */}
              <div className="relative z-10 flex items-start justify-between gap-3">
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <ServiceIcon type={service.icon} />
                </div>

                {/* Badge */}
                {/* <span className="px-2.5 py-1 rounded bg-[#D92525] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm text-right">
                  {service.badge}
                </span> */}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 flex flex-col">
                <h3 className="text-xl text-white font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="inline-flex items-center gap-1 text-sm text-white font-bold group-hover:text-[#ffdad6] transition-colors">
                  <span>Selengkapnya</span>

                  <span className="text-base group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

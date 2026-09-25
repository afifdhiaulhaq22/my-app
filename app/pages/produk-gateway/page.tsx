import Link from "next/link";

const productCategories = [
  {
    slug: "produk",
    title: "Forklift",
    label: "FORKLIFT",
    icon: "forklift",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Uoz_rXMsZn3ApiGVv3iUOvzohpqZi_96F98SSYKu6BsBrr5B1e9gPQOs2MSoSgYugnl-_A83zzUy-dvNbcP93PA8N3k6yyU1_n2UfxxUoLP0QR9x0FnhDQKXFL85C80Egg1VuXhX1Xdq4lzsh03asRppc4i4b41hwxcBs8sPXRrBENqcPhfLGeCp9R_hC1_u3nTflvIxcwsFGAI1HAfNh83axJ6l3c9TWsU-VodrmksspFwZ1bT30a5Rk",
    badge: "Kapasitas 1.5 - 25 Ton",
    description:
      "Solusi forklift untuk kebutuhan material handling, warehouse, manufaktur, logistik, dan operasional industri berat.",
    specificationLabel: "Kategori Armada",
    specification:
      "Diesel • Electric • LPG/Dual-Fuel • Counterbalance & Reach Truck",
    cta: "Lihat Katalog Forklift",
    meta: "120+ Unit Ready",
  },
  {
    slug: "suku-cadang",
    title: "Sparepart",
    label: "SPAREPART",
    icon: "settings",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1V7uZsVbZYdDZjHhp0qP6_o-hejyTjh_dCguBxvZSjpvSvhJOCHBPD52pPe7ixOzUZPzFuSxFQVEMDXG9f7pgVDbcqISyR_gLZDLenX-Og9YKcHFXmN-9ekjXEpJ6xpoi0tB8EjMqhuB75ECb3WauyDQ6aC9StQJZZlTibS3zBTtL6xYUUsEyeNY1sf0KgU1to-iarQ2P5sM0BZJHvR7_AAnOMNXKhHF4ZRbTu1wsYOYXaIZmGFV8Mk9A",
    badge: "100% Genuine OEM",
    description:
      "Sparepart dan komponen pendukung untuk menjaga performa, keandalan, dan uptime unit forklift Anda secara berkelanjutan.",
    specificationLabel: "Komponen Utama",
    specification:
      "Filter Oli & Udara • Sistem Rem • Komponen Hidrolik • Ban Solid & Roda",
    cta: "Lihat Katalog Sparepart",
    meta: "Garansi Presisi",
  },
  {
    slug: "baterai",
    title: "Battery",
    label: "BATTERY",
    icon: "battery_charging_full",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UomlbPU3h4B1c3FIiI015oroZ42ICaXawTiQQOQuwbycxDdNvAWlw8zStCJosyFshPVRTDcgzZLp4Orq6JnawLDuSyWa31zUZo-Beo1IAWPSDT18O7hArI1nuuZJvin7nrpjx76xw3tajbsYnz78hmOG79xQIAzoB1qa1n8zs0hvs9TFL4E-76dQokhO3foWQq_BM1ZjBl2OZ4PosRC-NHhvdRfceweJHnsgI46eofTnWoXxd40GXquFE",
    badge: "Traction & Li-Ion",
    description:
      "Solusi battery efisiensi tinggi untuk kebutuhan forklift electric dan berbagai aplikasi material handling intensif.",
    specificationLabel: "Sistem Daya",
    specification:
      "Lead-Acid Traction 24V/48V/80V • Lithium LiFePO4 • Industrial Smart Chargers",
    cta: "Lihat Katalog Battery",
    meta: "Sertifikasi CE/ISO",
  },
];

export default function ProdukPage() {
  return (
    <main className="w-full pt-30 bg-surface">
      <div className="flex flex-col w-full">

        {/* Breadcrumb */}
        <div className="w-full bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
            >
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-[16px]">
                  home
                </span>

                <span>Beranda</span>
              </Link>

              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_right
              </span>

              <Link
                href="/produk"
                className="transition-colors hover:text-primary"
              >
                Produk
              </Link>
            </nav>

            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                verified
              </span>

              <span className="font-label-technical text-label-technical text-on-surface uppercase tracking-wider">
                Lini Produk Resmi & Genuine Parts PT. KEI HAI
              </span>
            </div> */}
          </div>
        </div>

        {/* Hero */}
        <section className="w-full bg-surface py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl flex flex-col gap-3">

              {/* <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />

                <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary font-bold">
                  // PORTAL KATALOG RESMI
                </span>
              </div> */}

              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-extrabold">
                Jelajahi Katalog Produk
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Gunakan kategori di bawah untuk masuk ke katalog produk yang
                sesuai dengan kebutuhan operasional Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Product Gateway */}
        <section className="w-full pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* <div className="mb-8">
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary font-bold">
                PILIH KATEGORI PRODUK
              </span>

              <h2 className="mt-2 font-headline-md text-headline-md text-primary font-bold">
                Jelajahi Katalog Produk
              </h2>

              <p className="mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant">
                Gunakan kategori di bawah untuk masuk ke katalog produk yang
                sesuai dengan kebutuhan operasional Anda.
              </p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

              {productCategories.map((product) => (
                <Link
                  key={product.slug}
                  href={`/pages/${product.slug}`}
                  className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">

                    <img
                      src={product.image}
                      alt={`${product.title} PT KEI HAI`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />

                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-on-primary font-label-technical text-label-technical uppercase tracking-wider shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">
                          {product.icon}
                        </span>

                        {product.label}
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-technical text-label-technical">
                      {product.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 lg:p-7 justify-between">

                    <div className="flex flex-col">

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                          {product.title}
                        </h2>

                        <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all">
                          arrow_forward
                        </span>
                      </div>

                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Specification */}
                      <div className="bg-surface-container-low rounded-lg p-3.5 mb-6">
                        <span className="block font-label-technical text-label-technical uppercase tracking-wider text-outline mb-1.5 font-bold">
                          {product.specificationLabel}
                        </span>

                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          {product.specification}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 flex items-center justify-between bg-surface-container-lowest">
                      <span className="inline-flex items-center gap-2 font-label-lg text-label-lg font-bold text-secondary">
                        {product.cta}

                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                          trending_flat
                        </span>
                      </span>

                      <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider text-right">
                        {product.meta}
                      </span>
                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>

        {/* Consultation */}
        <section className="w-full bg-primary-container text-on-primary py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-8 flex flex-col gap-6">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/40 text-on-primary-container font-label-technical text-label-technical uppercase tracking-widest w-fit">
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                    engineering
                  </span>

                  Layanan Konsultasi Teknis
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">
                    Belum Menemukan Produk yang Sesuai?
                  </h2>

                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                    Konsultasikan kebutuhan operasional Anda dengan tim teknis
                    PT. KEI HAI untuk mendapatkan informasi produk yang sesuai
                    dengan kebutuhan material handling Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">
                      query_stats
                    </span>

                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-on-primary">
                        Analisis Kebutuhan
                      </span>

                      <span className="font-body-sm text-body-sm text-on-primary-container">
                        Sesuai aplikasi operasional
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">
                      menu_book
                    </span>

                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-on-primary">
                        Data Produk
                      </span>

                      <span className="font-body-sm text-body-sm text-on-primary-container">
                        Spesifikasi dan katalog
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">
                      verified_user
                    </span>

                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-on-primary">
                        Dukungan Teknis
                      </span>

                      <span className="font-body-sm text-body-sm text-on-primary-container">
                        Tim teknis resmi
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action */}
              <div className="lg:col-span-4 flex flex-col gap-4 bg-primary/60 p-6 lg:p-8 rounded-xl shadow-md">

                <span className="font-label-lg text-label-lg font-bold text-on-primary">
                  Hubungi Tim Teknis
                </span>

                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  Dapatkan informasi produk dan bantuan memilih kategori yang
                  sesuai dengan kebutuhan Anda.
                </p>

                <a
                  href="https://wa.me/628119208000"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:bg-secondary-container transition-all shadow-[0_2px_8px_rgba(217,37,37,0.3)]"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chat
                  </span>

                  Konsultasi dengan Tim Kami
                </a>

                <a
                  href="tel:02189835500"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>

                  Hubungi Kantor (021) 8983-5500
                </a>

              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

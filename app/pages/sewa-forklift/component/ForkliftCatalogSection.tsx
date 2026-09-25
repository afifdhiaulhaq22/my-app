import Image from "next/image";

const forklifts = [
  {
    badge: "HEAVY DUTY",
    fuel: "DIESEL ENGINE",
    title: "Forklift Diesel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8EW-Cj_NpRDxKERVpUrwQcwTAGTlc30lL_PkDYxcl7VPakF6BC61PhU4B2C0KDnvEJo2OGEwmfO4pGqa541D-IZDiCA7s7Dwoadao2-PD9PhbUtejAPg0uiAIIFIgi7XmMu6PwB6H6nHBnHnjZmZ54SaZtTINgcF26zy2pPkurVNDxDoP-T5TC_RBBTLFXk3h9gFb0KHtH2hPfGRIzgG5cpDNXDC-MtdOG-d0m3AzAMCVI5y203hH",
    alt: "Forklift diesel heavy duty",
    description:
      "Pilihan bertenaga untuk operasional outdoor, logistik muatan berat, dan area lapangan industri terbuka.",
    specs: [
      ["Kapasitas", "2.5 - 5.0 Ton"],
      ["Bahan Bakar", "Industrial Diesel"],
      ["Medan Kerja", "Outdoor & Pabrik"],
      ["Transmisi", "Torqflow Automatic"],
    ],
  },
  {
    badge: "ZERO EMISSION",
    fuel: "ELECTRIC / LI-ION",
    title: "Forklift Electric",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3Cgos4Bxqy4J50hwYYQ2_NoeuWV-uxOWG04VZk3Ns-gCXNx9iC0GC7pMRgaXhukPq_IHkjCcuQmXJ5CSSYdv_YTlIELdkKf2SorTbw7YLeYsf1F3ZFGS7LRwdx1MqSG2J-ieABtfRxKWtSXKAtTjId7I93OQu2dn2IGK_9N9bRIm1cJag9OBxdnrA8KKGNg1kNlCROeOtbhkTM7y-KwBsjFnBRJJaIK9MkE41CbCRmJQiBEFeCuB",
    alt: "Forklift electric warehouse",
    description:
      "Solusi bebas emisi dan senyap untuk pergudangan modern, industri makanan, farmasi, dan area indoor.",
    specs: [
      ["Kapasitas", "1.5 - 3.5 Ton"],
      ["Daya Sistem", "Baterai 48V / 80V"],
      ["Medan Kerja", "Indoor & Cold Storage"],
      ["Emisi", "0% Clean Emission"],
    ],
  },
  {
    badge: "VERSATILE DUAL",
    fuel: "LPG / GAS FUEL",
    title: "Forklift LPG / Gas",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UEq7wnyTVsIyZJlDwJ_SIIIJCILqalok9ASY8aNvWxftgFrcfT2un43t9wfEKIrpsU_gA1Uc6VmIV29OnWy93OG9M0uYL_z2-erIbfNWI-ZdB27SPVCea3R2iurl6dNcZKfg0vhoKibBRCAAOzsPTQjPzYEXSK4jpvsw8gCZiPsprE8YOJvMYFrb3cOur2TcA6G6tMsE5YpLwCADMqJsSyvcbnvOGG3wV1Hj5GL3chbDYfbHxZS9h-D7E",
    alt: "Forklift LPG gas",
    description:
      "Fleksibilitas tinggi untuk kombinasi operasional indoor dan outdoor dengan pengisian bahan bakar cepat.",
    specs: [
      ["Kapasitas", "2.0 - 3.5 Ton"],
      ["Bahan Bakar", "LPG / Dual-Fuel"],
      ["Medan Kerja", "Semi-Outdoor / Indoor"],
      ["Fleksibilitas", "Continuous Shift"],
    ],
  },
];

export default function ForkliftCatalogSection() {
  return (
    <section className="w-full bg-surface py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs text-secondary uppercase tracking-widest">
              PILIHAN TIPE UNIT
            </span>

            <h2 className="text-3xl lg:text-4xl text-primary font-bold mt-2">
              Pilihan Forklift
            </h2>

            <p className="text-on-surface-variant max-w-2xl mt-2">
              Pilih unit forklift yang sesuai dengan kebutuhan material
              handling dan kondisi operasional Anda.
            </p>
          </div>

          <span className="text-xs text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded">
            3 KATEGORI DAYA UTAMA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forklifts.map((forklift) => (
            <ForkliftCard key={forklift.title} {...forklift} />
          ))}
        </div>

        <div className="mt-6 p-5 rounded-lg bg-surface-container-low text-on-surface-variant text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">
            info
          </span>

          <span>
            <strong className="text-on-surface">Catatan Ketersediaan:</strong>{" "}
            Ketersediaan tipe dan spesifikasi detail disesuaikan dengan
            alokasi unit rental yang aktif. Silakan hubungi tim PT. KEI HAI
            untuk verifikasi kesiapan unit dan attachment.
          </span>
        </div>
      </div>
    </section>
  );
}

function ForkliftCard({
  badge,
  fuel,
  title,
  image,
  alt,
  description,
  specs,
}: (typeof forklifts)[number]) {
  return (
    <article className="rounded-xl bg-surface-container-lowest shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow">
      <div className="p-4 bg-surface-container-low flex items-center justify-between gap-2">
        <span className="px-2 py-0.5 rounded bg-surface-container text-primary text-[10px] uppercase tracking-wider">
          {badge}
        </span>

        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface text-[10px] uppercase tracking-wider">
          {fuel}
        </span>
      </div>

      <div className="relative aspect-[4/3] bg-surface-container-lowest p-4 overflow-hidden">
        <img
            src={image}
            alt={alt}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />

      </div>

      <div className="p-6 flex flex-col flex-grow justify-between gap-6">
        <div>
          <h3 className="text-xl text-primary font-bold">{title}</h3>

          <p className="text-sm text-on-surface-variant mt-2">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 bg-surface-container-low rounded-lg">
          {specs.map(([label, value]) => (
            <div key={label} className="flex flex-col">
              <span className="text-[10px] text-on-surface-variant uppercase">
                {label}
              </span>
              <span className="text-sm text-on-surface font-bold">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* <a
          href="#quotation-form"
          className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-semibold text-center transition-colors"
        >
          Tanyakan Ketersediaan
        </a> */}
      </div>
    </article>
  );
}

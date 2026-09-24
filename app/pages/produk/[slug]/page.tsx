// app/produk/[id]/page.jsx

import { notFound } from "next/navigation";
import ProductGallery from "./ProductGallery";
import FinalCTASection from "../../../components/sections/FinalCTASection";
import ProductSection from "../../../components/sections/ProductSection";



const products = [
  {
    id: 1,
    slug: "seris-fd50-hd-diesel",
    name: "Seri FD50 HD Diesel",
    brand: "PT. KEI HAI INDUSTRIAL",
    series: "FD30 Heavy Duty",
    engine: "Diesel Direct Injection",
    capacity: "3.000 kg",
    capacityLabel: "3.0 Ton",
    mastHeight: "4.500 mm",
    mast: "Triplex FFL",
    warranty: "18 Bulan / 2.000 Jam",
    certification: "Inspeksi K3 Disnaker",
    fuel: "Diesel",
    location: "MM2100 Cikarang",
    code: "FD30T-KEIHAI",

    description:
      "Forklift diesel dengan performa kuat dan stabil untuk mendukung kebutuhan material handling di berbagai lingkungan industri manufaktur, pergudangan berat, pelabuhan, dan konstruksi.",

    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc4bDBdI1tCWlf9eTSUMAeGEGn5dnEjABSlksv2BCpOCGq3JNYPNF4ReTcuqSw3zmdjdhfE3QYHjSlkPIvrVDAzHTGh6meQadN3RqGbJyZPAr9NUS5U0PEJjlrg19Rex6ldAqm1i0z8YX8yGobnuw5JyI6LOpGVKLyafzIjsBpP-yzNS9VNzcu6Ur9_jVkfuF3MhFFj4NhbkI3avpMx55HtG0LBZ7oVMlfRzi_o1uySAkG5U1xJWXS",
        title: "Tampak Samping (Main FD30)",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-XjHs9mBTGDc0ULhNed7axcn1inf1-_l302YJREbMk6m57uKoBu4mAMCRPwp-aIV_Xbjau9JCRkYFuwfimFoM8VJzys1etPzjWSmin3sc15slaTbt5FljR1aubnEgQZa7U5nsyIjPVdH5VU_eYAkT4-YuUik_GTd4NPNvuLvfXm89EWR5AqKjK6H-JmBjX7XOD9lFaa5O2DiTHMtjGphLeu1FmEGNomKK6NFw3HCwNwXbG90JmhEE",
        title: "Tampak Depan / 3/4 Studio",
      },
     
    ],

    highlights: [
      {
        icon: "weight",
        label: "Kapasitas Angkat",
        value: "3.0 Ton (3.000 kg)",
      },
      {
        icon: "vertical_align_top",
        label: "Tinggi Tiang Mast",
        value: "4.5 Meter (Triplex)",
      },
      {
        icon: "security",
        label: "Garansi Pabrikan",
        value: "18 Bulan / 2.000 Jam",
      },
      {
        icon: "assignment_turned_in",
        label: "Sertifikasi Legal",
        value: "Inspeksi K3 Disnaker",
      },
    ],

    specifications: {
      "Informasi Dasar": [
        ["Merek Unit", "PT. KEI HAI"],
        ["Model / Kode Seri", "FD30 / FD30T-17 HD"],
        ["Kategori Desain Unit", "Counterbalance Industrial"],
        ["Tipe Penggerak Utama", "Internal Combustion (Diesel)"],
        ["Tipe Pengemudi", "Seated Rider (Duduk)"],
      ],

      "Kapasitas & Beban": [
        ["Kapasitas Angkat Nominal (Q)", "3.000 kg"],
        ["Jarak Titik Beban (Load Center c)", "500 mm"],
        ["Sudut Kemiringan Tiang", "6° / 12°"],
        ["Beban Gandar Depan", "6.450 kg"],
        ["Beban Gandar Belakang", "850 kg"],
      ],

      "Dimensi & Manuver": [
        ["Panjang Total", "2.720 mm"],
        ["Lebar Keseluruhan", "1.230 mm"],
        ["Tinggi Overhead Guard", "2.110 mm"],
        ["Radius Putar Minimum", "2.420 mm"],
        ["Lebar Lorong Minimum", "4.150 mm"],
      ],

      "Performa & Kecepatan": [
        ["Kecepatan Tempuh", "19 / 20 km/h"],
        ["Kecepatan Angkat", "480 / 530 mm/s"],
        ["Gradeability", "20 %"],
        ["Service Brake", "Hidrolik Booster"],
        ["Parking Brake", "Mekanis Lever Lock"],
      ],

      "Mesin & Daya": [
        ["Model Mesin", "4-Cylinder In-Line Diesel"],
        ["Tenaga Nominal", "42 kW @ 2.300 rpm"],
        ["Torsi Maksimum", "195 Nm @ 1.600 rpm"],
        ["Kapasitas Tangki Solar", "60 Liter"],
        ["Sistem Kelistrikan", "12 Volt / 80 Ah"],
      ],

      "Tiang, Garpu & Roda": [
        ["Jenis Tiang", "Triplex 3-Stage Full Free Lift"],
        ["Dimensi Garpu", "45 x 125 x 1.070 mm"],
        ["Ban Depan", "28 x 9 - 15 - 12PR"],
        ["Ban Belakang", "6.50 - 10 - 10PR"],
        ["Wheelbase", "1.700 mm"],
      ],
    },
  },
];

function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;


  const product = getProduct(slug);


  if (!product) {
    notFound();
  }


  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <div className="flex flex-col w-full">

        {/* BREADCRUMB */}
        <div className="w-full bg-surface-container-low py-3">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <a href="/" className="hover:text-primary">
                Beranda
              </a>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <a href="/produk" className="hover:text-primary">
                Produk
              </a>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <span className="text-primary font-bold">
                {product.name}
              </span>
            </nav>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest text-[#047857] font-label-technical uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#047857] animate-pulse" />
                READY STOCK - {product.location}
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-lowest text-on-primary-fixed-variant font-label-technical uppercase tracking-wider shadow-sm">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                100% GENUINE INDUSTRIAL UNIT
              </span>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section className="w-full py-space-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* GALLERY */}
              <div className="lg:col-span-7">
                <ProductGallery product={product} />
              </div>

              {/* PRODUCT INFO */}
              <div className="lg:col-span-5 flex flex-col gap-5">

                <div className="flex items-center gap-2">
                  <span className="font-label-technical tracking-wider text-on-surface-variant uppercase flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[16px] text-[#047857]">
                      check_circle
                    </span>
                    MEREK: {product.brand}
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="font-headline-lg text-headline-lg text-primary leading-tight font-extrabold">
                    {product.name}
                  </h1>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-technical uppercase font-bold">
                      Seri {product.series}
                    </span>

                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-technical uppercase">
                      Tipe Mesin: {product.engine}
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-2 gap-2.5">
                  {product.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 bg-surface-container-lowest rounded-lg shadow-sm flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          {item.icon}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="font-label-technical text-on-surface-variant uppercase">
                          {item.label}
                        </span>

                        <span className="font-label-lg text-primary font-bold">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <a
                    href="/pages/hubungi-kami"
                    className="w-full bg-secondary hover:bg-secondary-container text-on-secondary px-6 py-3.5 rounded-lg font-label-lg flex items-center justify-center gap-2 shadow-md"
                  >
                    <span className="material-symbols-outlined">
                      request_quote
                    </span>
                    Hubungi Kami / Minta Penawaran
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href="https://wa.me/628119208000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#047857] hover:bg-[#065f46] text-white px-4 py-3 rounded-lg font-label-lg flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined">
                        chat
                      </span>
                      Konsultasi WhatsApp
                    </a>

                    {/* <button
                      type="button"
                      onClick={() =>
                        alert(
                          `Mengunduh brosur ${product.name}`
                        )
                      }
                      className="w-full bg-surface-container-lowest hover:bg-surface-container text-primary px-4 py-3 rounded-lg font-label-lg flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined">
                        download
                      </span>
                      Download Brosur
                    </button> */}
                  </div>
                </div>

                {/* ASSURANCES */}
                <div className="bg-surface-container-low rounded-lg p-4 space-y-2.5">
                  <Assurance
                    icon="local_shipping"
                    text={`Unit Tersedia Siap Kirim (${product.location})`}
                  />

                  <Assurance
                    icon="build_circle"
                    text="Layanan Teknisi & Suku Cadang Darurat 2x24 Jam Kerja"
                  />

                  <Assurance
                    icon="payments"
                    text="Skema Pembelian Tunai, Kredit B2B, atau Sewa Operasional"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC HIGHLIGHTS */}
        <section className="w-full py-space-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-8">
              <span className="font-label-technical text-secondary uppercase tracking-widest font-bold">
                HIGHLIGHT TEKNIS
              </span>

              <h2 className="font-headline-lg text-primary font-bold">
                Spesifikasi Umum
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <SpecCard
                label="Kapasitas Angkat"
                value={product.capacity}
                description={`(${product.capacityLabel})`}
              />

              <SpecCard
                label="Tipe Bahan Bakar"
                value={product.fuel}
                description="Industrial Grade Engine"
              />

              <SpecCard
                label="Tinggi Angkat Maks"
                value={product.mastHeight}
                description="Jangkauan Angkat"
              />

              <SpecCard
                label="Jenis Tiang / Mast"
                value={product.mast}
                description="Full Free Lift Mast"
              />

              <SpecCard
                label="Garansi"
                value={product.warranty}
                description="Garansi Pabrikan"
              />
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="w-full py-space-xl">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="font-label-technical text-secondary uppercase tracking-widest font-bold">
                REKAYASA INDUSTRIAL
              </span>

              <h2 className="font-headline-lg text-primary font-bold">
                Keunggulan Produk
              </h2>

              <p className="font-body-md text-on-surface-variant mt-2">
                Fitur dan karakteristik utama yang mendukung kebutuhan
                operasional material handling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Feature
                icon="speed"
                title="Performa Andal & Torsi Kuat"
                description="Dirancang untuk mendukung aktivitas material handling dengan performa mesin stabil dan torsi optimal."
              />

              <Feature
                icon="energy_savings_leaf"
                title="Efisiensi Operasional"
                description="Mendukung aktivitas pemindahan material secara efektif untuk kebutuhan operasional harian."
              />

              <Feature
                icon="airline_seat_recline_extra"
                title="Ergonomis & Pandangan Luas"
                description="Operator cabin dirancang untuk posisi kerja nyaman dan visibilitas area kerja yang baik."
              />

              <Feature
                icon="home_repair_service"
                title="Perawatan Mudah"
                description="Akses komponen utama dirancang untuk membantu proses inspeksi dan perawatan rutin."
              />

              <Feature
                icon="factory"
                title="Fleksibilitas Industri"
                description="Dapat digunakan pada berbagai kebutuhan pabrik, warehouse, logistik dan konstruksi."
              />
            </div>
          </div>
        </section>

        {/* DATASHEET */}
        <section
          id="tabel-detail"
          className="w-full py-space-xl bg-surface-container-low"
        >
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="font-label-technical text-secondary uppercase tracking-widest font-bold">
                  TECHNICAL DATASHEET
                </span>

                <h2 className="font-headline-lg text-primary font-bold">
                  Spesifikasi Detail
                </h2>

                <p className="font-body-md text-on-surface-variant max-w-2xl mt-1">
                  Tabel spesifikasi teknis lengkap {product.name}.
                </p>
              </div>

              {/* <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary flex items-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">
                  print
                </span>
                Cetak Data Sheet
              </button> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(
                ([category, rows], index) => (
                  <SpecTable
                    key={category}
                    category={category}
                    rows={rows}
                    index={index + 1}
                  />
                )
              )}
            </div>
          </div>
        </section>
        <ProductSection />
        <FinalCTASection />

      </div>
    </main>
  );
}




function Assurance({ icon, text }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
        {icon}
      </span>

      <span className="font-body-sm text-on-surface">
        {text}
      </span>
    </div>
  );
}


function SpecCard({ label, value, description }) {
  return (
    <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm">
      <span className="font-label-technical text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>

      <div className="mt-2">
        <span className="font-headline-sm text-primary font-bold block">
          {value}
        </span>

        <span className="font-body-sm text-on-surface-variant">
          {description}
        </span>
      </div>
    </div>
  );
}


function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3 bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
        <span className="material-symbols-outlined text-[26px]">
          {icon}
        </span>
      </div>

      <h3 className="font-title-md text-primary font-bold">
        {title}
      </h3>

      <p className="font-body-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}


function SpecTable({ category, rows, index }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">

      <div className="bg-primary px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-on-primary">
          <span className="material-symbols-outlined text-secondary-fixed">
            settings
          </span>

          <h3 className="font-title-md font-bold">
            Kategori {index}: {category}
          </h3>
        </div>

        <span className="font-label-technical text-on-primary-container uppercase">
          SPEC-{String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="p-2">
        <table className="w-full text-left font-body-sm">
          <tbody>
            {rows.map(([label, value], rowIndex) => (
              <tr
                key={label}
                className={
                  rowIndex % 2 === 0
                    ? "bg-surface-container-lowest"
                    : "bg-surface-container-low"
                }
              >
                <td className="py-2.5 px-4 text-on-surface-variant font-medium">
                  {label}
                </td>

                <td className="py-2.5 px-4 text-primary font-bold text-right">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

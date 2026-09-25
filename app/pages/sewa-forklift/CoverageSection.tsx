import Image from "next/image";
import { MapPin, Phone, Building2, Truck } from "lucide-react";

const areas = [
  {
    name: "MM2100 Cikarang",
    description: "Main Central Depo",
  },
  {
    name: "Karawang & KIIC",
    description: "Automotive Corridor",
  },
  {
    name: "Surabaya",
    description: "East Java Logistics",
  },
  {
    name: "Jabodetabek",
    description: "Warehousing Hub",
  },
  {
    name: "Jawa Tengah",
    description: "Semarang & Kendal",
  },
  {
    name: "Sumatera & Lainnya",
    description: "Project Based",
  },
];

export default function CoverageSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-6 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-container-high rounded text-primary text-xs font-bold uppercase tracking-widest">
              <MapPin size={16} className="text-secondary" />
              Logistics Coverage
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
                Area Layanan Seluruh Indonesia
              </h2>

              <p className="text-base leading-7 text-on-surface-variant">
                Kebutuhan sewa forklift dapat berasal dari berbagai wilayah
                dan kawasan industri. PT. KEI HAI melayani kebutuhan pelanggan
                di berbagai area sentra logistik dan manufaktur sesuai cakupan
                dan ketersediaan layanan operasional.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-1"
                >
                  <span className="text-sm font-bold text-primary">
                    {area.name}
                  </span>

                  <span className="text-[11px] uppercase tracking-wider text-on-surface-variant">
                    {area.description}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:02189835500"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-semibold transition-colors"
              >
                <Phone size={18} />
                Tanyakan Area Layanan
              </a>

              <span className="text-sm text-on-surface-variant">
                Area disesuaikan dengan kuota armada aktif.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDq2A1v_h9z6SPq5_HDdrZigiw3SvBwMxMreztH1c7KDJOzdzR0JF8e3d9d9CTlCtYV_47SoP3UDAyNxgAWrneUX2-93yvy5OyMq1rUqhXuWkjiUxp5pbrkE3_vVIeQUoLCITBb83P2efUlGSUeDmhV_nOJUs_77uGZ2NxF-UBmryBAo_pXz-74hS8l6XxSDaC4rnC7ULvdMcRGIfXJ82IYUPMXlodr2nKEc5VD40IvYvQIE5WD3xR"
                alt="Area layanan forklift PT KEI HAI"
                className="absolute inset-0 w-full h-full object-cover"
                />


              <div className="absolute inset-0 bg-primary/20" />

              <div className="absolute top-4 left-4 p-3 rounded-lg bg-white/95 backdrop-blur-md shadow-md flex items-center gap-3">
                <Building2 className="text-secondary" size={24} />

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">
                    Hub MM2100 & Depo Cabang
                  </span>

                  <span className="text-[11px] text-on-surface-variant">
                    Depo dukungan teknis & mobilisasi
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 p-3 rounded-full bg-secondary text-on-secondary shadow-lg">
                <Truck size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
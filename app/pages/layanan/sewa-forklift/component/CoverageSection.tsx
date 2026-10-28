import { MapPin, Building2, Truck } from "lucide-react";
import { getDataPerusahaan } from "@/lib/perusahaan";

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

export default async function CoverageSection() {
  const dataPerusahaan = await getDataPerusahaan();

  const latitude = dataPerusahaan?.koordinat?.latitude;
  const longitude = dataPerusahaan?.koordinat?.longitude;

  const hasCoordinates =
    latitude?.trim() !== undefined &&
    longitude?.trim() !== undefined &&
    latitude.trim() !== "" &&
    longitude.trim() !== "" &&
    Number.isFinite(Number(latitude)) &&
    Number.isFinite(Number(longitude));

  const coordinates = hasCoordinates
    ? `${latitude},${longitude}`
    : "";

  const mapUrl = hasCoordinates
    ? `https://maps.google.com/maps?q=${encodeURIComponent(
        coordinates,
      )}&z=15&output=embed`
    : null;

  const directionsUrl =
    dataPerusahaan?.linkGoogleMaps?.trim() ||
    (hasCoordinates
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
          coordinates,
        )}`
      : null);

  return (
    <section className="w-full bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-surface-container-lowest p-6 shadow-sm lg:grid-cols-12 lg:gap-16 lg:p-10">
          {/* INFORMASI CAKUPAN LAYANAN */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 self-start rounded bg-surface-container-high px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <MapPin size={16} className="text-secondary" />
              Logistics Coverage
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                Area Layanan Seluruh Indonesia
              </h2>

              <p className="text-base leading-7 text-on-surface-variant">
                Kebutuhan sewa forklift dapat berasal dari berbagai wilayah
                dan kawasan industri. PT. KEI HAI melayani kebutuhan pelanggan
                di berbagai area sentra logistik dan manufaktur sesuai cakupan
                dan ketersediaan layanan operasional.
              </p>
            </div>

            {/* DAFTAR AREA LAYANAN */}
            {/* <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4"
                >
                  <span className="text-sm font-bold text-primary">
                    {area.name}
                  </span>

                  <span className="text-[11px] uppercase tracking-wider text-on-surface-variant">
                    {area.description}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* PETA DAN ALAMAT PERUSAHAAN */}
          <div className="relative lg:col-span-6">
            <div className="relative h-80 w-full overflow-hidden rounded-xl bg-surface-container-low shadow-inner sm:h-96">
              {mapUrl ? (
                <iframe
                  title="Lokasi PT KEI HAI"
                  src={mapUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-on-surface-variant">
                  <MapPin size={32} />
                  <p className="text-sm">
                    Koordinat lokasi belum tersedia.
                  </p>
                </div>
              )}

              {/* INFORMASI ALAMAT */}
              <div className="pointer-events-none absolute left-3 right-3 top-3 flex items-start gap-3 rounded-lg bg-white/95 p-3 shadow-md backdrop-blur-md sm:left-4 sm:right-4 sm:top-4">
                <Building2
                  className="mt-1 shrink-0 text-secondary"
                  size={24}
                />

                <div className="min-w-0">
                  <span className="block text-sm font-bold text-primary">
                    PT KEI HAI
                  </span>

                  <span className="mt-1 block text-xs leading-relaxed text-on-surface-variant">
                    {dataPerusahaan?.alamat || "Alamat belum tersedia"}
                  </span>
                </div>
              </div>

              {/* TOMBOL PETUNJUK ARAH */}
              {directionsUrl && (
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                >
                  <Truck size={18} />
                  Petunjuk Arah
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { getDataPerusahaan } from "@/lib/perusahaan";

export default async function LocationSection() {
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

  const mapEmbedUrl = hasCoordinates
    ? `https://maps.google.com/maps?q=${encodeURIComponent(
        coordinates,
      )}&z=15&output=embed`
    : null;

  const googleMapsUrl =
    dataPerusahaan?.linkGoogleMaps?.trim() ||
    (hasCoordinates
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
          coordinates,
        )}`
      : null);

  return (
    <section className="bg-surface-container-low py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-space-lg max-w-3xl">
          <span className="font-label-technical font-extrabold uppercase tracking-wider text-secondary">
            HUB STRATEGIS KAWASAN INDUSTRI
          </span>

          <h2 className="mt-1 font-headline-lg font-bold text-primary">
            Lokasi Fasilitas & Pusat Workshop
          </h2>

          <p className="mt-2 font-body-md leading-relaxed text-on-surface-variant">
            Kunjungi lokasi fasilitas dan pusat workshop PT. KEI HAI.
            Informasi alamat dan lokasi dapat dilihat melalui
            Google Maps untuk membantu mobilisasi teknisi
            dan pengiriman unit.
          </p>
        </div>

        {/* LOCATION CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* MAP */}
          <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-md lg:col-span-8">
            <div className="relative h-80 w-full bg-surface-container-low lg:h-96">
              {/* GOOGLE MAPS */}
              {mapEmbedUrl ? (
                <iframe
                  title="Lokasi PT KEI HAI Central Workshop"
                  src={mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl">
                    location_off
                  </span>

                  <p className="font-body-sm">
                    Koordinat lokasi belum tersedia.
                  </p>
                </div>
              )}

              {/* ADDRESS CARD */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-xl bg-surface-container-lowest/95 p-4 shadow-lg backdrop-blur-md sm:right-auto sm:max-w-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-on-secondary">
                    <span className="material-symbols-outlined">
                      pin_drop
                    </span>
                  </div>

                  <div>
                    <h4 className="font-title-md font-bold text-primary">
                      PT. KEI HAI Central Workshop
                    </h4>

                    <p className="mt-1 font-body-sm leading-relaxed text-on-surface-variant">
                      {dataPerusahaan?.alamat ||
                        "Alamat perusahaan belum tersedia."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP FOOTER */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-secondary">
                  garage_home
                </span>

                <span className="font-body-sm text-on-surface">
                  Workshop, yard unit siap pakai, dan gudang
                  suku cadang terpadu.
                </span>
              </div>

              {/* GOOGLE MAPS LINK */}
              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    directions
                  </span>

                  Buka Google Maps
                </a>
              )}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* TRAVEL TIME */}
            <div className="space-y-4 rounded-2xl bg-surface-container-lowest p-6 shadow-md">
              <h3 className="flex items-center gap-2 font-title-md font-bold text-primary">
                <span className="material-symbols-outlined text-secondary">
                  route
                </span>
                Waktu Tempuh & Radius Depot
              </h3>

              <div className="space-y-3">
                {[
                  [
                    "directions_car",
                    "Akses Tol Cibitung",
                    "5",
                  ],
                  [
                    "local_shipping",
                    "KIIC / Suryacipta Karawang",
                    "25",
                  ],
                  [
                    "anchor",
                    "Tanjung Priok Port",
                    "50",
                  ],
                ].map(([icon, name, time]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl bg-surface-container-low p-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary">
                        {icon}
                      </span>

                      <span className="font-label-lg font-semibold text-primary">
                        {name}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-headline-sm font-extrabold text-secondary">
                        {time}
                      </span>

                      <span className="ml-1 font-label-md font-bold text-on-surface-variant">
                        Menit
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA */}
            <div className="space-y-3 rounded-2xl bg-primary p-6 text-on-primary shadow-md">
              <div className="flex items-center gap-2 font-label-technical font-bold uppercase tracking-wider text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">
                  speed
                </span>

                SLA Respon Darurat
              </div>

              <p className="font-title-md font-bold">
                Garansi Kedatangan Teknisi &lt; 2 Jam
              </p>

              <p className="font-body-sm leading-relaxed text-on-primary-container">
                Khusus kontrak rental dan SLA maintenance berkala
                di area MM2100, Jababeka, Delta Silicon, EJIP, dan
                KIIC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useEffect, useState } from "react";

type PartnerMedia = {
  url?: string | null;
  alt?: string | null;
};

type PartnerLogo = number | string | PartnerMedia | null;

type Partner = {
  id: number | string;
  nama: string;
  logo: PartnerLogo;
  url?: string | null;
  urutan?: number;
  isAktif?: boolean;
};

type PayloadResponse = {
  docs?: Partner[];
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

function getLogoUrl(logo: PartnerLogo): string {
  if (!logo || typeof logo !== "object" || !logo.url) {
    return "";
  }

  if (/^https?:\/\//i.test(logo.url)) {
    return logo.url;
  }

  return `${PAYLOAD_URL}${logo.url.startsWith("/") ? "" : "/"}${logo.url}`;
}

export default function PartnerSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchPartners() {
      try {
        const query = new URLSearchParams({
          depth: "1",
          limit: "100",
          sort: "urutan",
          "where[isAktif][equals]": "true",
        });

        const response = await fetch(
          `${PAYLOAD_URL}/api/mitra?${query.toString()}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error(`Gagal mengambil data mitra: ${response.status}`);
        }

        const result: PayloadResponse = await response.json();

        const activePartners = (result.docs ?? []).filter(
          (partner) =>
            partner.isAktif !== false && Boolean(getLogoUrl(partner.logo))
        );

        if (!cancelled) {
          setPartners(activePartners);
        }
      } catch (error) {
        console.error("Gagal mengambil data mitra Payload CMS:", error);
      }
    }

    fetchPartners();

    return () => {
      cancelled = true;
    };
  }, []);

  if (partners.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-12">
        <span className="mb-4 inline-block h-1 w-12 bg-red-600" />

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Mitra Kerja Kami
        </p>

        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Perusahaan yang Telah Mempercayai Kami
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Kami berkomitmen menyediakan solusi forklift dan material
          handling untuk mendukung kebutuhan operasional bisnis.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-label="Daftar mitra perusahaan"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div
          className={`flex w-max items-center ${
            paused ? "[animation-play-state:paused]" : "animate-partner-marquee"
          }`}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
              aria-hidden={group === 1}
            >
              {partners.map((partner) => {
                const logoUrl = getLogoUrl(partner.logo);

                const logo = (
                  <img
                    src={logoUrl}
                    alt={group === 0 ? partner.nama : ""}
                    loading="lazy"
                    className="max-h-12 max-w-32 object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                );

                return (
                  <div
                    key={`${group}-${partner.id}`}
                    className="flex h-16 min-w-28 shrink-0 items-center justify-center sm:min-w-32"
                  >
                    {partner.url && group === 0 ? (
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Kunjungi website ${partner.nama}`}
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes partner-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-partner-marquee {
          animation: partner-marquee 35s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-partner-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

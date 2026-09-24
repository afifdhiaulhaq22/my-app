import Link from "next/link";

const CTA_DATA = {
  badge: {
    icon: "handshake",
    text: "Mitra Material Handling Anda",
  },

  title: "Siap Menemukan Solusi Forklift untuk Bisnis Anda?",

  description:
    "Diskusikan kebutuhan unit, sewa, servis, suku cadang, dan solusi material handling bersama tim ahli PT. KEI HAI hari ini.",

  primaryAction: {
    label: "Hubungi Kami Sekarang",
    href: "/pages/hubungi-kami",
    icon: "call",
  },

  secondaryAction: {
    label: "Konsultasi via WhatsApp",
    href: "https://wa.me/628119208000",
    icon: "chat",
  },

  response: {
    icon: "schedule",
    text: "Respon cepat dalam waktu kurang dari 15 menit pada jam operasional kerja.",
  },
};

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-space-xl text-on-primary">
      {/* Blueprint Background */}
      <BlueprintPattern />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-space-md inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/10 px-3 py-1.5 text-on-primary">
          <span className="material-symbols-outlined text-[18px] text-secondary">
            {CTA_DATA.badge.icon}
          </span>

          <span className="font-label-technical text-label-technical font-bold uppercase tracking-wider">
            {CTA_DATA.badge.text}
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-space-md font-headline-lg text-headline-lg font-bold tracking-tight text-on-primary">
          {CTA_DATA.title}
        </h2>

        {/* Description */}
        <p className="mx-auto mb-space-xl max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary-container">
          {CTA_DATA.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          {/* Primary CTA */}
          <Link
            href={CTA_DATA.primaryAction.href}
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 font-label-lg text-label-lg text-on-secondary shadow-lg transition-all hover:bg-secondary-container hover:shadow-xl"
          >
            <span className="material-symbols-outlined text-[20px]">
              {CTA_DATA.primaryAction.icon}
            </span>

            <span>{CTA_DATA.primaryAction.label}</span>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href={CTA_DATA.secondaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-surface-container-lowest px-8 py-3.5 font-label-lg text-label-lg text-primary shadow-md transition-all hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">
              {CTA_DATA.secondaryAction.icon}
            </span>

            <span>{CTA_DATA.secondaryAction.label}</span>
          </a>
        </div>

        {/* Response Information */}
        <div className="mt-space-md flex items-center justify-center gap-2 font-body-sm text-body-sm text-on-primary-container">
          <span className="material-symbols-outlined text-[16px] text-secondary">
            {CTA_DATA.response.icon}
          </span>

          <span>{CTA_DATA.response.text}</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Blueprint decorative background
 */
function BlueprintPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-5"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="industrialGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#industrialGrid)"
        />
      </svg>
    </div>
  );
}

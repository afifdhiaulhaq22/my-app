import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const FOOTER_DATA = {
  brand: {
    logo: "https://lh3.googleusercontent.com/aida/AEtjO1X7Vk6NDRYMHsBNkNyNJEHlcsgM_j2h9cXRP7AwJejCvZj5B8bH8DSCrwVnQM0Tv8ihUJcn0_2sc8HSaQ1lD5Orl4h6Dl7keZ7By0A2To1wS6N12Rp77Nl-k_w47QjQmvRXJywB0qItf_9ObKCnu1-JiS0v071iYulm8QtRXwqTF7LD7HBEx0viPun2onG6krU0NvUmpZMpsbJM-aPSSIj8m6LSE_ZusJYN7_IK9RYrE2Z4HPoDPrARxjA",
    logoAlt: "PT. KEI HAI Corporate Logo",
    name: "PT. KEI HAI",
    description:
      "Mitra terpercaya solusi material handling, rental forklift, suku cadang original, dan servis profesional untuk seluruh sektor industri manufaktur dan logistik di Indonesia.",
    certification: "ISO 9001:2015 Certified Service",
  },

  columns: [
    {
      title: "Produk",
      links: [
        {
          label: "Unit Forklift (Diesel, Electric, LPG)",
          href: "#",
        },
        {
          label: "Suku Cadang Original",
          href: "#",
        },
        {
          label: "Baterai & Industrial Charger",
          href: "#",
        },
        {
          label: "Electric Pallet Truck",
          href: "#",
        },
        {
          label: "Attachment Forklift Spesialis",
          href: "#",
        },
      ],
    },

    {
      title: "Layanan",
      links: [
        {
          label: "Servis dan Lubrikasi Berkala",
          href: "#",
        },
        {
          label: "Sewa Unit Forklift Harian & Tahunan",
          href: "#",
        },
        {
          label: "Maintenance Kontrak Industri",
          href: "#",
        },
        {
          label: "Inspeksi Rutin & Uji Kelayakan",
          href: "#",
        },
        {
          label: "Overhaul Engine & Transmisi",
          href: "#",
        },
      ],
    },

    {
      title: "Perusahaan & Kontak",
      links: [
        {
          label: "Tentang Kami",
          href: "#",
        },
        {
          label: "Artikel & Berita Industri",
          href: "#",
        },
        {
          label: "Kontak Kami",
          href: "#",
        },
      ],
    },
  ] satisfies FooterColumn[],

  contact: {
    address: "Kawasan Industri MM2100, Cikarang Barat, Bekasi, Jawa Barat",
    phone: "(021) 8983-5500 / +62 811-920-8000",
    email: "sales@keihai.co.id",
  },

  legal: {
    copyright:
      "© 2026 PT. KEI HAI. All rights reserved. Solusi Forklift & Material Handling Terpercaya.",
    links: [
      {
        label: "Kebijakan Privasi",
        href: "#",
      },
      {
        label: "Syarat & Ketentuan",
        href: "#",
      },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container">
      <div className="max-w-7xl mx-auto px-6 pt-space-xl pb-space-lg">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          <BrandSection />

          {FOOTER_DATA.columns.map((column) => (
            <FooterColumn
              key={column.title}
              column={column}
            />
          ))}
        </div>

        {/* Bottom Footer */}
        <FooterBottom />
      </div>
    </footer>
  );
}

/**
 * Brand Section
 */
function BrandSection() {
  const { brand } = FOOTER_DATA;

  return (
    <div className="space-y-space-md">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-space-sm"
      >
        <img
          src={brand.logo}
          alt={brand.logoAlt}
          className="h-9 w-auto object-contain"
        />

        <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
          {brand.name}
        </span>
      </Link>

      {/* Description */}
      <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
        {brand.description}
      </p>

      {/* Certification */}
      <div className="flex items-center gap-2 pt-2">
        <span className="material-symbols-outlined text-[18px] text-secondary-container">
          shield
        </span>

        <span className="font-label-technical text-label-technical text-on-primary uppercase tracking-wider">
          {brand.certification}
        </span>
      </div>
    </div>
  );
}

/**
 * Footer Column
 */
function FooterColumn({
  column,
}: {
  column: FooterColumn;
}) {
  return (
    <div className="space-y-space-md">
      <h3 className="font-title-md text-title-md text-on-primary tracking-tight uppercase">
        {column.title}
      </h3>

      <ul className="space-y-space-xs font-body-sm text-body-sm">
        {column.links.map((link) => (
          <li
            key={link.label}
            className="hover:text-on-primary transition-colors"
          >
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact hanya untuk kolom Perusahaan & Kontak */}
      {column.title === "Perusahaan & Kontak" && (
        <ContactInfo />
      )}
    </div>
  );
}

/**
 * Contact Information
 */
function ContactInfo() {
  const { contact } = FOOTER_DATA;

  return (
    <div className="space-y-1.5 pt-2 font-body-sm text-body-sm">
      <ContactItem icon="location_on">
        {contact.address}
      </ContactItem>

      <ContactItem icon="call">
        {contact.phone}
      </ContactItem>

      <ContactItem icon="mail">
        {contact.email}
      </ContactItem>
    </div>
  );
}

/**
 * Contact Item
 */
function ContactItem({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary-container mt-0.5">
        {icon}
      </span>

      <span>{children}</span>
    </div>
  );
}

/**
 * Footer Bottom
 */
function FooterBottom() {
  const { legal } = FOOTER_DATA;

  return (
    <div className="pt-space-md border-t border-tertiary-container flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-primary-container">
      <p>{legal.copyright}</p>

      <div className="flex items-center gap-space-lg font-label-md text-label-md">
        {legal.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-on-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

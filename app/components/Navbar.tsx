"use client";

import { useState } from "react";
import Link from "next/link";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const NAVBAR_DATA = {
  topBar: {
    operationalHours: "Jam Operasional: Senin - Sabtu (08:00 - 17:00 WIB)",
    authorization:
      "Authorized Material Handling Equipment & Genuine Parts",
    hotline: "(021) 8983-5500",
    whatsapp: "+62 811-920-8000",
  },

  brand: {
    logo: "https://lh3.googleusercontent.com/aida/AEtj...",
    logoAlt: "PT. KEI HAI Corporate Logo",
    name: "PT. KEI HAI",
    tagline: "Forklift & Material Handling",
  },

  navigation: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Produk",
      href: "#",
      children: [
        {
          label: "Unit Forklift",
          href: "/pages/produk",
        },
        {
          label: "Suku Cadang",
          href: "#",
        },
        {
          label: "Baterai & Charger",
          href: "#",
        },
      ],
    },
    {
      label: "Layanan",
      href: "#",
      children: [
        {
          label: "Servis dan Lubrikasi",
          href: "#",
        },
        {
          label: "Sewa Unit Forklift",
          href: "#",
        },
      ],
    },
    {
      label: "Tentang Kami",
      href: "#",
    },
    {
      label: "Artikel",
      href: "#",
    },
  ] satisfies NavItem[],

  actions: {
    contact: {
      label: "Hubungi Kami",
      href: "/pages/hubungi-kami",
      icon: "call",
    },
    profile: {
      icon: "person",
    },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      {/* Top Bar */}
      <TopBar />

      {/* Main Navigation */}
      <div className="bg-surface-container-lowest/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-space-md px-4 sm:px-6">
          <Brand />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Actions */}
          <div className="hidden lg:block">
            <Actions />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container text-primary transition-colors hover:bg-surface-container-highest lg:hidden"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}

/**
 * Top information bar
 */
function TopBar() {
  const { topBar } = NAVBAR_DATA;

  return (
    <div className="bg-primary text-on-primary">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 overflow-hidden px-4 font-label-technical text-label-technical sm:px-6">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-space-lg">
          <InfoItem icon="schedule" className="flex shrink-0">
            <span className="hidden sm:inline">
              {topBar.operationalHours}
            </span>

            <span className="sm:hidden">Senin - Sabtu • 08:00 - 17:00</span>
          </InfoItem>

          <InfoItem
            icon="verified"
            className="hidden md:flex"
          >
            {topBar.authorization}
          </InfoItem>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-space-lg">
          <InfoItem
            icon="support_agent"
            iconClassName="text-secondary-fixed"
          >
            <span className="hidden sm:inline">
              Hotline: {topBar.hotline}
            </span>

            <span className="sm:hidden">{topBar.hotline}</span>
          </InfoItem>

          <InfoItem
            icon="chat"
            iconClassName="text-secondary-fixed"
            className="hidden md:flex"
          >
            WhatsApp: {topBar.whatsapp}
          </InfoItem>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable information item
 */
function InfoItem({
  icon,
  children,
  className = "",
  iconClassName = "text-on-primary-container",
}: {
  icon: string;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={`items-center gap-1.5 ${className}`}>
      <span
        className={`material-symbols-outlined text-[14px] ${iconClassName}`}
      >
        {icon}
      </span>

      <span className="truncate">{children}</span>
    </div>
  );
}

/**
 * Brand / Logo
 */
function Brand() {
  const { brand } = NAVBAR_DATA;

  return (
    <Link
      href="/"
      className="flex min-w-0 items-center gap-space-md"
    >
      {/* Jika ingin menggunakan logo:
      <img
        src={brand.logo}
        alt={brand.logoAlt}
        className="h-8 w-auto object-contain"
      />
      */}

      <div className="flex min-w-0 flex-col">
        <span className="font-headline-sm text-headline-sm leading-tight tracking-tight text-primary">
          {brand.name}
        </span>

        <span className="truncate font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
          {brand.tagline}
        </span>
      </div>
    </Link>
  );
}

/**
 * Desktop Navigation
 */
function Navigation() {
  return (
    <nav className="hidden items-center gap-space-lg font-label-lg text-label-lg lg:flex">
      {NAVBAR_DATA.navigation.map((item, index) => (
        <NavItem
          key={`${item.label}-${index}`}
          item={item}
          active={index === 0}
        />
      ))}
    </nav>
  );
}

/**
 * Desktop Navigation Item
 */
function NavItem({
  item,
  active = false,
}: {
  item: NavItem;
  active?: boolean;
}) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={
          active
            ? "py-2 font-bold text-secondary transition-colors"
            : "py-2 text-on-surface-variant transition-colors hover:text-primary"
        }
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative py-2">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-on-surface-variant transition-colors hover:text-primary"
      >
        <span>{item.label}</span>

        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-180">
          expand_more
        </span>
      </Link>

      {/* Desktop Dropdown */}
      <div className="invisible absolute left-0 top-full flex w-56 translate-y-2 flex-col rounded-lg bg-surface-container-lowest py-space-xs opacity-0 shadow-[0_10px_25px_rgba(15,37,69,0.1)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children?.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="px-space-md py-2.5 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Mobile Navigation
 */
function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="border-t border-outline-variant/20 bg-surface-container-lowest shadow-lg lg:hidden">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex flex-col">
          {NAVBAR_DATA.navigation.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = openDropdown === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between border-b border-outline-variant/20 py-3.5 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
                >
                  <span>{item.label}</span>

                  {item.label === "Beranda" && (
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      home
                    </span>
                  )}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="border-b border-outline-variant/20"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(isOpen ? null : item.label)
                  }
                  className="flex w-full items-center justify-between py-3.5 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
                  aria-expanded={isOpen}
                >
                  <span>{item.label}</span>

                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Mobile Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "max-h-96 pb-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3 border-l-2 border-secondary/20 pl-4">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2.5 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile Contact */}
          <div className="pt-4">
            <Link
              href={NAVBAR_DATA.actions.contact.href}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-space-lg py-3 font-label-lg text-label-lg text-on-secondary shadow-[0_2px_8px_rgba(217,37,37,0.3)] transition-all hover:bg-secondary-container"
            >
              <span className="material-symbols-outlined text-[18px]">
                {NAVBAR_DATA.actions.contact.icon}
              </span>

              <span>{NAVBAR_DATA.actions.contact.label}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

/**
 * Desktop Actions
 */
function Actions() {
  const { contact, profile } = NAVBAR_DATA.actions;

  return (
    <div className="flex items-center gap-space-md">
      <Link
        href={contact.href}
        className="inline-flex items-center gap-2 rounded-lg bg-secondary px-space-lg py-2.5 font-label-lg text-label-lg text-on-secondary shadow-[0_2px_8px_rgba(217,37,37,0.3)] transition-all hover:bg-secondary-container"
      >
        <span className="material-symbols-outlined text-[18px]">
          {contact.icon}
        </span>

        <span>{contact.label}</span>
      </Link>

      {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
        <span className="material-symbols-outlined text-[18px] text-on-primary">
          {profile.icon}
        </span>
      </div> */}
    </div>
  );
}

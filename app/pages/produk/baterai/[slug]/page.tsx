
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "../component/ProductGallery";
import FinalCTASection from "../../../../home-components/home-sections/FinalCTASection";
import BatterySection from "../component/BatteryListSection";
import ButtonCTADetail from "../../component/ButtonCTADetail";

type ProductImage = {
  src: string;
  alt: string;
};

type ProductHighlight = {
  icon: string;
  label: string;
  value: string;
};

type BatteryProduct = {
  id: string | number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  code: string;
  description: string;
  voltage: string;
  capacity: string;
  compatibility: string;
  isNew: boolean;
  images: ProductImage[];
  highlights: ProductHighlight[];
};

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

type AssuranceProps = {
  icon: string;
  text: string;
};

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

type PayloadMedia = {
  id?: string | number;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
};

type PayloadImageRelation =
  | PayloadMedia
  | string
  | number
  | null
  | undefined;

type PayloadGalleryItem = {
  id?: string | number;
  image?: PayloadImageRelation;
};

type PayloadBattery = {
  id: string | number;
  slug?: string | null;
  merk?: string | null;
  category?: string | null;
  noPart?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  tegangan?: string | null;
  kapasitas?: string | null;
  kompatibel?: string | null;
  gambar?: PayloadGalleryItem[] | null;
};

type PayloadResponse = {
  docs?: PayloadBattery[];
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const FALLBACK_IMAGE = "/images/placeholder-battery.png";

const CATEGORY_LABELS: Record<string, string> = {
  "lead-acid": "Lead Acid",
  lithium: "Lithium",
  traction: "Traction",
  starter: "Starter",
  lainnya: "Lainnya",
};

function getImageUrl(
  relation: PayloadImageRelation
): string | null {
  if (!relation || typeof relation !== "object") {
    return null;
  }

  if (!relation.url) {
    return null;
  }

  if (/^https?:\/\//i.test(relation.url)) {
    return relation.url;
  }

  return `${PAYLOAD_URL}${
    relation.url.startsWith("/") ? "" : "/"
  }${relation.url}`;
}

function formatValue(
  value: string | null | undefined,
  fallback = "Hubungi kami"
): string {
  const normalized = value?.trim();
  return normalized || fallback;
}

function formatVoltage(value: string | null | undefined): string {
  const voltage = value?.trim();

  if (!voltage) {
    return "Hubungi kami";
  }

  return /\s*V$/i.test(voltage) ? voltage : `${voltage} V`;
}

function getProductImages(
  gallery: PayloadGalleryItem[] | null | undefined,
  productName: string
): ProductImage[] {
  if (!gallery?.length) {
    return [{ src: FALLBACK_IMAGE, alt: productName }];
  }

  const images = gallery.flatMap((item, index) => {
    const image = item.image;
    const src = getImageUrl(image);

    if (!src) {
      return [];
    }

    const alt =
      image && typeof image === "object"
        ? image.alt?.trim() ||
          image.filename ||
          `${productName} - Foto ${index + 1}`
        : `${productName} - Foto ${index + 1}`;

    return [{ src, alt }];
  });

  return images.length > 0
    ? images
    : [{ src: FALLBACK_IMAGE, alt: productName }];
}

function toProduct(item: PayloadBattery): BatteryProduct {
  const name = item.merk || "Baterai Forklift";
  const category = item.category || "lainnya";
  const voltage = formatVoltage(item.tegangan);
  const capacity = formatValue(item.kapasitas);
  const compatibility = formatValue(item.kompatibel);

  const highlights: ProductHighlight[] = [
    {
      icon: "bolt",
      label: "Tegangan",
      value: voltage,
    },
    {
      icon: "battery_charging_full",
      label: "Kapasitas",
      value: capacity,
    },
    {
      icon: "forklift",
      label: "Kompatibilitas",
      value: compatibility,
    },
    {
      icon: "qr_code",
      label: "Nomor Part",
      value: formatValue(item.noPart),
    },
  ].filter((highlight) => highlight.value !== "Hubungi kami");

  return {
    id: item.id,
    slug: item.slug || String(item.id),
    name,
    brand: "PT. KEI HAI",
    category: CATEGORY_LABELS[category] || category,
    code: item.noPart || String(item.id),
    description:
      item.deskripsi || "Hubungi kami untuk informasi produk.",
    voltage,
    capacity,
    compatibility,
    isNew: Boolean(item.isnew),
    images: getProductImages(item.gambar, name),
    highlights,
  };
}

async function getProduct(
  slug: string
): Promise<BatteryProduct | null> {
  const url = new URL(`${PAYLOAD_URL}/api/baterai`);

  url.searchParams.set("depth", "2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("where[slug][equals]", slug);
  url.searchParams.set("where[isaktif][equals]", "true");

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Gagal mengambil detail baterai dari Payload CMS (HTTP ${response.status}).`
    );
  }

  const data: PayloadResponse = await response.json();
  const item = data.docs?.[0];

  if (!item || item.isaktif !== true) {
    return null;
  }

  return toProduct(item);
}

export default async function BatteryDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const quoteUrl = `/pages/hubungi-kami?produk=${encodeURIComponent(
    product.name
  )}`;

  const whatsappUrl = `https://wa.me/628119208000?text=${encodeURIComponent(
    `Halo PT. KEI HAI, saya ingin menanyakan produk baterai ${product.name} dengan nomor part ${product.code}. Mohon informasi spesifikasi dan penawarannya.`
  )}`;

  return (
    <main className="w-full min-h-screen bg-background pt-[116px]">
      <div className="flex w-full flex-col">
        {/* BREADCRUMB */}
        <div className="w-full bg-surface-container-low py-3">
          <div className="mx-auto max-w-7xl px-6">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 font-label-md text-label-md text-on-surface-variant"
            >
              <Link href="/" className="hover:text-primary">
                Beranda
              </Link>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <Link href="/baterai" className="hover:text-primary">
                Baterai
              </Link>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <span className="font-bold text-primary">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* HERO PRODUK */}
        <section className="w-full py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* GALERI */}
              <div className="lg:col-span-7">
                <ProductGallery product={product} />
              </div>

              {/* INFORMASI PRODUK */}
              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-primary-fixed px-2.5 py-1 font-label-technical font-bold uppercase text-on-primary-fixed">
                      {product.category}
                    </span>

                    {product.isNew && (
                      <span className="rounded bg-red-600 px-2.5 py-1 font-label-technical font-bold uppercase text-white">
                        Produk Baru
                      </span>
                    )}
                  </div>

                  <h1 className="font-headline-lg text-headline-lg font-extrabold leading-tight text-primary">
                    {product.name}
                  </h1>

                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Nomor Part:{" "}
                    <span className="font-bold text-secondary">
                      {product.code}
                    </span>
                  </p>
                </div>

                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  {product.description}
                </p>

                {/* HIGHLIGHTS DARI CMS */}
                {product.highlights.length > 0 && (
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {product.highlights.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 rounded-lg bg-surface-container-lowest p-3 shadow-sm"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
                          <span className="material-symbols-outlined text-[20px]">
                            {item.icon}
                          </span>
                        </div>

                        <div className="flex min-w-0 flex-col">
                          <span className="font-label-technical uppercase text-on-surface-variant">
                            {item.label}
                          </span>

                          <span className="break-words font-label-lg font-bold text-primary">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <ButtonCTADetail />

                {/* ASSURANCE */}
                <div className="space-y-2.5 rounded-lg bg-surface-container-low p-4">
                  <Assurance
                    icon="support_agent"
                    text="Konsultasikan kebutuhan baterai dengan tim PT. KEI HAI."
                  />

                  <Assurance
                    icon="build_circle"
                    text="Sampaikan tipe forklift agar tim kami dapat membantu mengecek kompatibilitas baterai."
                  />

                  <Assurance
                    icon="inventory_2"
                    text="Hubungi kami untuk informasi ketersediaan, harga, dan waktu pengadaan."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPESIFIKASI DAN KOMPATIBILITAS */}
        <section className="w-full bg-surface-container-low py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 max-w-3xl">
              <span className="font-label-technical font-bold uppercase tracking-widest text-secondary">
                INFORMASI PRODUK
              </span>

              <h2 className="mt-1 font-headline-lg font-bold text-primary">
                Spesifikasi Baterai
              </h2>

              <p className="mt-2 font-body-md text-on-surface-variant">
                Detail spesifikasi berdasarkan informasi yang tersedia
                pada katalog produk.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-title-md font-bold text-primary">
                  <span className="material-symbols-outlined">
                    battery_charging_full
                  </span>
                  Spesifikasi Utama
                </h3>

                <dl className="divide-y divide-surface-container">
                  <SpecRow label="Merek" value={product.name} />
                  <SpecRow label="Nomor Part" value={product.code} />
                  <SpecRow label="Kategori" value={product.category} />
                  <SpecRow label="Tegangan" value={product.voltage} />
                  <SpecRow label="Kapasitas" value={product.capacity} />
                </dl>
              </div>

              <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-title-md font-bold text-primary">
                  <span className="material-symbols-outlined">
                    forklift
                  </span>
                  Kompatibilitas
                </h3>

                <p className="font-body-md leading-relaxed text-on-surface-variant">
                  {product.compatibility !== "Hubungi kami"
                    ? product.compatibility
                    : "Informasi kompatibilitas belum tersedia. Hubungi tim kami dengan menyertakan merek, tipe, dan nomor seri forklift Anda."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN LAYANAN */}
        <section className="w-full py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="font-label-technical font-bold uppercase tracking-widest text-secondary">
                SOLUSI MATERIAL HANDLING
              </span>

              <h2 className="mt-1 font-headline-lg font-bold text-primary">
                Dukungan untuk Kebutuhan Baterai Anda
              </h2>

              <p className="mt-2 font-body-md text-on-surface-variant">
                Dapatkan informasi yang diperlukan sebelum menentukan
                baterai untuk operasional forklift Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Feature
                icon="battery_charging_full"
                title="Spesifikasi Produk"
                description="Periksa tegangan dan kapasitas baterai berdasarkan data produk yang tersedia."
              />

              <Feature
                icon="forklift"
                title="Kesesuaian Unit"
                description="Cocokkan tipe baterai dengan merek dan model forklift yang digunakan."
              />

              <Feature
                icon="support_agent"
                title="Konsultasi Teknis"
                description="Diskusikan kebutuhan baterai dan penggunaan bersama tim kami."
              />

              <Feature
                icon="request_quote"
                title="Permintaan Penawaran"
                description="Hubungi tim kami untuk mendapatkan informasi harga dan ketersediaan."
              />
            </div>
          </div>
        </section>

        <BatterySection />

        <FinalCTASection />
      </div>
    </main>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <dt className="font-body-sm text-on-surface-variant">
        {label}
      </dt>

      <dd className="break-words font-label-md font-bold text-primary sm:max-w-[60%] sm:text-right">
        {value}
      </dd>
    </div>
  );
}

function Assurance({ icon, text }: AssuranceProps) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-secondary">
        {icon}
      </span>

      <span className="font-body-sm text-on-surface">{text}</span>
    </div>
  );
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl bg-surface-container-lowest p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-primary">
        <span className="material-symbols-outlined text-[26px]">
          {icon}
        </span>
      </div>

      <h3 className="font-title-md font-bold text-primary">
        {title}
      </h3>

      <p className="font-body-sm leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

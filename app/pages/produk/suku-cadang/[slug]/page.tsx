
import Link from "next/link";
import { notFound } from "next/navigation";
import FinalCTASection from "../../../../home-components/home-sections/FinalCTASection";
import ButtonCTADetail from "../../component/ButtonCTADetail";

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

type PayloadSparepart = {
  id: string | number;
  slug?: string | null;
  merk?: string | null;
  category?: string | null;
  noPart?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  kompatibel?: string | null;
  gambar?: PayloadGalleryItem[] | null;
};

type PayloadResponse = {
  docs?: PayloadSparepart[];
};

type SparepartImage = {
  src: string;
  alt: string;
};

type Sparepart = {
  id: string | number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  categoryValue: string;
  partNumber: string;
  description: string;
  compatibility: string;
  isNew: boolean;
  images: SparepartImage[];
};

type PageProps = {
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

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const FALLBACK_IMAGE = "/images/placeholder-sparepart.png";

const CATEGORY_LABELS: Record<string, string> = {
  filter: "Filter",
  ban: "Ban",
  rantai: "Rantai",
  rem: "Rem",
  mesin: "Mesin",
  kelistrikan: "Kelistrikan",
  hidrolik: "Hidrolik",
  transmisi: "Transmisi",
  lainnya: "Lainnya",
};

function formatValue(
  value: string | number | null | undefined,
  fallback = "Hubungi kami"
): string {
  if (value === null || value === undefined || String(value).trim() === "") {
    return fallback;
  }

  return String(value);
}

function getCategoryLabel(category?: string | null): string {
  if (!category) return "Lainnya";

  return (
    CATEGORY_LABELS[category.toLowerCase()] ||
    category.replace(/[-_]/g, " ")
  );
}

function getImageUrl(
  relation: PayloadImageRelation
): string | null {
  if (!relation || typeof relation !== "object") {
    return null;
  }

  const imageUrl = relation.url;

  if (!imageUrl) return null;

  if (/^https?:\/\//i.test(imageUrl)) {
    return imageUrl;
  }

  return `${PAYLOAD_URL}${
    imageUrl.startsWith("/") ? "" : "/"
  }${imageUrl}`;
}

function getProductImages(
  gallery: PayloadGalleryItem[] | null | undefined,
  productName: string
): SparepartImage[] {
  if (!gallery?.length) {
    return [{ src: FALLBACK_IMAGE, alt: productName }];
  }

  const images = gallery.flatMap((item, index) => {
    const image = item.image;
    const src = getImageUrl(image);

    if (!src) return [];

    const alt =
      image && typeof image === "object"
        ? image.alt?.trim() ||
          image.filename ||
          `${productName} - Foto ${index + 1}`
        : `${productName} - Foto ${index + 1}`;

    return [{ src, alt }];
  });

  return images.length
    ? images
    : [{ src: FALLBACK_IMAGE, alt: productName }];
}

function toSparepart(item: PayloadSparepart): Sparepart {
  const name = formatValue(item.merk, "Suku Cadang");

  return {
    id: item.id,
    slug: item.slug || String(item.id),
    name,
    brand: "PT. KEI HAI",
    category: getCategoryLabel(item.category),
    categoryValue: item.category || "lainnya",
    partNumber: formatValue(item.noPart, "-"),
    description: formatValue(
      item.deskripsi,
      "Hubungi tim PT. KEI HAI untuk informasi produk ini."
    ),
    compatibility: formatValue(
      item.kompatibel,
      "Hubungi tim kami untuk memastikan kompatibilitas suku cadang."
    ),
    isNew: item.isnew ?? false,
    images: getProductImages(item.gambar, name),
  };
}

async function getSparepart(
  slug: string
): Promise<Sparepart | null> {
  const url = new URL(`${PAYLOAD_URL}/api/suku-cadang`);

  url.searchParams.set("depth", "2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("where[slug][equals]", slug);
  url.searchParams.set("where[isaktif][equals]", "true");

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Gagal mengambil detail suku cadang dari Payload CMS (HTTP ${response.status}).`
    );
  }

  const data: PayloadResponse = await response.json();
  const item = data.docs?.[0];

  if (!item) return null;

  return toSparepart(item);
}

export default async function SparepartDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  let product: Sparepart | null;

  try {
    product = await getSparepart(slug);
  } catch (error) {
    console.error("Gagal memuat detail suku cadang:", error);
    throw error;
  }

  if (!product) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/628119208000?text=${encodeURIComponent(
    `Halo PT. KEI HAI, saya ingin menanyakan suku cadang ${product.name} dengan nomor part ${product.partNumber}. Mohon informasi harga, ketersediaan, dan kompatibilitasnya.`
  )}`;

  return (
    <main className="min-h-screen w-full bg-background pt-[116px]">
      <div className="flex w-full flex-col">
        {/* BREADCRUMB */}
        <div className="w-full bg-surface-container-low py-3">
          <div className="mx-auto max-w-7xl px-6">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-label-md font-label-md text-on-surface-variant"
            >
              <Link href="/" className="hover:text-primary">
                Beranda
              </Link>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <Link href="/sparepart" className="hover:text-primary">
                Suku Cadang
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

        {/* HERO DAN INFORMASI PRODUK */}
        <section className="w-full py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* GALERI */}
              <div className="space-y-4 lg:col-span-7">
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-xl bg-surface-container-low p-5 sm:min-h-[480px]">
                  {product.isNew && (
                    <span className="absolute left-4 top-4 z-10 rounded bg-secondary px-3 py-1 font-label-technical font-bold uppercase text-on-secondary">
                      Produk Baru
                    </span>
                  )}

                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="max-h-[440px] w-full object-contain"
                  />
                </div>

                {product.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {product.images.slice(1).map((image, index) => (
                      <div
                        key={`${image.src}-${index}`}
                        className="flex h-24 items-center justify-center overflow-hidden rounded-lg bg-surface-container-low p-2 sm:h-28"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-xs text-on-surface-variant">
                  Gambar produk sebagai referensi. Konfirmasikan spesifikasi
                  dan kecocokan part kepada tim kami sebelum melakukan pemesanan.
                </p>
              </div>

              {/* INFORMASI PRODUK */}
              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="space-y-3">
                  <h1 className="font-headline-lg text-headline-lg font-extrabold leading-tight text-primary">
                    {product.name}
                  </h1>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-primary-fixed px-2.5 py-1 font-label-technical font-bold uppercase text-on-primary-fixed">
                      {product.partNumber}
                    </span>

                    <span className="rounded bg-surface-container px-2.5 py-1 font-label-technical uppercase text-on-surface">
                      {product.category}
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  {product.description}
                </p>

                {/* INFORMASI UTAMA */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <InfoCard
                    icon="inventory_2"
                    label="Nomor Part"
                    value={product.partNumber}
                  />

                  <InfoCard
                    icon="category"
                    label="Kategori"
                    value={product.category}
                  />

                  <InfoCard
                    icon="precision_manufacturing"
                    label="Merek / Penyedia"
                    value={product.brand}
                  />

                  <InfoCard
                    icon="handyman"
                    label="Kompatibilitas"
                    value={product.compatibility}
                  />
                </div>

                {/* CTA */}
                <ButtonCTADetail />

                {/* JAMINAN INFORMASI */}
                <div className="space-y-2.5 rounded-lg bg-surface-container-low p-4">
                  <Assurance
                    icon="fact_check"
                    text="Konfirmasikan nomor part dan kecocokan komponen sebelum memesan."
                  />

                  <Assurance
                    icon="support_agent"
                    text="Tim kami siap membantu pertanyaan terkait suku cadang forklift."
                  />

                  <Assurance
                    icon="local_shipping"
                    text="Tanyakan harga, stok, dan opsi pengiriman kepada tim kami."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMASI DAN KEUNGGULAN */}
        <section className="w-full py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="font-label-technical font-bold uppercase tracking-widest text-secondary">
                SOLUSI SUKU CADANG FORKLIFT
              </span>

              <h2 className="font-headline-lg font-bold text-primary">
                Informasi Suku Cadang
              </h2>

              <p className="mt-2 font-body-md text-on-surface-variant">
                Gunakan informasi produk untuk membantu memastikan komponen
                yang dipilih sesuai dengan kebutuhan operasional Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon="qr_code_2"
                title="Identifikasi Nomor Part"
                description="Gunakan nomor part sebagai referensi saat menanyakan ketersediaan atau melakukan pemesanan."
              />

              <Feature
                icon="settings"
                title="Kompatibilitas Komponen"
                description="Periksa kecocokan suku cadang berdasarkan tipe dan spesifikasi forklift yang digunakan."
              />

              <Feature
                icon="support_agent"
                title="Konsultasi Teknis"
                description="Hubungi tim PT. KEI HAI untuk bantuan identifikasi komponen dan informasi produk."
              />
            </div>

            {/* KETERANGAN PRODUK */}
            <div className="mt-10 grid grid-cols-1 gap-6 rounded-xl bg-surface-container-low p-6 md:grid-cols-2 md:p-8">
              <div>
                <h3 className="mb-2 font-title-md font-bold text-primary">
                  Deskripsi Produk
                </h3>

                <p className="whitespace-pre-line font-body-md leading-relaxed text-on-surface-variant">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-title-md font-bold text-primary">
                  Informasi Kompatibilitas
                </h3>

                <p className="whitespace-pre-line font-body-md leading-relaxed text-on-surface-variant">
                  {product.compatibility}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  Jika informasi kompatibilitas belum cukup, siapkan nomor
                  seri unit atau foto part lama untuk membantu proses
                  identifikasi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTASection />
      </div>
    </main>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-surface-container-lowest p-3 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
        <span className="material-symbols-outlined text-[20px]">
          {icon}
        </span>
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="font-label-technical uppercase text-on-surface-variant">
          {label}
        </span>

        <span className="break-words font-label-lg font-bold text-primary">
          {value}
        </span>
      </div>
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

      <h3 className="font-title-md font-bold text-primary">{title}</h3>

      <p className="font-body-sm leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}


import { notFound } from "next/navigation";
import ButtonCTADetail from "../../component/ButtonCTADetail";
import ProductGallery from "./ProductGallery";
import FinalCTASection from "../../../../home-components/home-sections/FinalCTASection";
import ProductSection from "../ForkliftListSection";

type ProductImage = {
  src: string;
  alt: string;
};

type ProductHighlight = {
  icon: string;
  label: string;
  value: string;
};

type SpecRow = [string, string];

type Product = {
  id: string | number;
  slug: string;
  name: string;
  brand: string;
  series: string;
  engine: string;
  capacity: string;
  capacityLabel: string;
  mastHeight: string;
  mast: string;
  warranty: string;
  certification: string;
  fuel: string;
  location: string;
  code: string;
  description: string;
  images: ProductImage[];
  highlights: ProductHighlight[];
  specifications: Record<string, SpecRow[]>;
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

type PayloadForklift = {
  id: string | number;
  slug?: string | null;
  merk?: string | null;
  category?: string | null;
  isnew?: boolean | null;
  isaktif?: boolean | null;
  deskripsi?: string | null;
  kapasitas?: string | number | null;
  garansipabrikan?: string | number | null;
  tinggitiangmast?: string | number | null;
  sertifikasi?: string | null;
  gambar?: PayloadGalleryItem[] | null;
};

type PayloadResponse = {
  docs?: PayloadForklift[];
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const CATEGORY_LABELS: Record<string, string> = {
  diesel: "Diesel",
  electric: "Electric",
  lpg: "LPG",
  "reach-truck": "Reach Truck",
  "hand-pallet": "Hand Pallet",
  lainnya: "Lainnya",
};

const FALLBACK_IMAGE = "/images/placeholder-forklift.png";

function getImageUrl(
  relation: PayloadImageRelation
): string | null {
  if (!relation || typeof relation !== "object") {
    return null;
  }

  const imageUrl = relation.url;

  if (!imageUrl) {
    return null;
  }

  if (/^https?:\/\//i.test(imageUrl)) {
    return imageUrl;
  }

  return `${PAYLOAD_URL}${
    imageUrl.startsWith("/") ? "" : "/"
  }${imageUrl}`;
}

function formatValue(
  value: string | number | null | undefined,
  fallback = "Hubungi kami"
): string {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  return String(value);
}

function getCapacityNumber(
  value: string | number | null | undefined
): number {
  if (typeof value === "number") {
    return value;
  }

  if (!value) {
    return 0;
  }

  const text = value.toLowerCase().trim();
  const match = text.match(/[\d.,]+/);

  if (!match) {
    return 0;
  }

  const numberText = match[0];
  let number: number;

  if (numberText.includes(",") && numberText.includes(".")) {
    number =
      numberText.lastIndexOf(",") > numberText.lastIndexOf(".")
        ? Number(numberText.replace(/\./g, "").replace(",", "."))
        : Number(numberText.replace(/,/g, ""));
  } else if (numberText.includes(",")) {
    number = Number(numberText.replace(",", "."));
  } else if (numberText.includes(".")) {
    const parts = numberText.split(".");
    number =
      parts.length === 2 && parts[1].length === 3
        ? Number(numberText.replace(".", ""))
        : Number(numberText);
  } else {
    number = Number(numberText);
  }

  if (!Number.isFinite(number)) {
    return 0;
  }

  if (/\bton\b|\btonase\b/i.test(text)) {
    return number * 1000;
  }

  return number;
}

function formatCapacity(
  value: string | number | null | undefined
): string {
  if (value === null || value === undefined || value === "") {
    return "Hubungi kami";
  }

  if (typeof value === "string") {
    const text = value.trim();

    // Pertahankan satuan dan format dari CMS.
    if (/[a-z]/i.test(text)) {
      return text;
    }
  }

  const capacity = getCapacityNumber(value);

  if (capacity <= 0) {
    return "Hubungi kami";
  }

  return `${capacity.toLocaleString("id-ID")} kg`;
}

function getProductImages(
  gallery: PayloadGalleryItem[] | null | undefined,
  productName: string
): ProductImage[] {
  if (!gallery?.length) {
    return [
      {
        src: FALLBACK_IMAGE,
        alt: productName,
      },
    ];
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
    : [
        {
          src: FALLBACK_IMAGE,
          alt: productName,
        },
      ];
}

function toProduct(item: PayloadForklift): Product {
  const name = item.merk || "Forklift";
  const category = item.category || "lainnya";
  const capacity = formatCapacity(item.kapasitas);

  const mastHeight = item.tinggitiangmast
    ? formatValue(item.tinggitiangmast)
    : "Hubungi kami";

  const warranty = formatValue(item.garansipabrikan);
  const certification = formatValue(item.sertifikasi);
  const engine = CATEGORY_LABELS[category] || category;

  const highlights: ProductHighlight[] = [
    {
      icon: "weight",
      label: "Kapasitas Angkat",
      value: capacity,
    },
    {
      icon: "vertical_align_top",
      label: "Tinggi Tiang Mast",
      value: mastHeight,
    },
    {
      icon: "security",
      label: "Garansi Pabrikan",
      value: warranty,
    },
    {
      icon: "assignment_turned_in",
      label: "Sertifikasi",
      value: certification,
    },
  ].filter((highlight) => highlight.value !== "Hubungi kami");

  return {
    id: item.id,
    slug: item.slug || String(item.id),
    name,
    brand: "PT. KEI HAI",
    series: name,
    engine,
    capacity,
    capacityLabel:
      getCapacityNumber(item.kapasitas) > 0
        ? `${(
            getCapacityNumber(item.kapasitas) / 1000
          ).toLocaleString("id-ID")} Ton`
        : "Hubungi kami",
    mastHeight,
    mast: "Hubungi kami",
    warranty,
    certification,
    fuel: engine,
    location: "Hubungi kami",
    code: String(item.slug || item.id),
    description:
      item.deskripsi || "Hubungi kami untuk informasi produk.",
    images: getProductImages(item.gambar, name),
    highlights,
    specifications: {},
  };
}

async function getProduct(slug: string): Promise<Product | null> {
  const url = new URL(`${PAYLOAD_URL}/api/forklift`);

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
      `Gagal mengambil detail forklift dari Payload CMS (HTTP ${response.status}).`
    );
  }

  const data: PayloadResponse = await response.json();
  const item = data.docs?.[0];

  if (!item) {
    return null;
  }

  return toProduct(item);
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  let product: Product | null;

  try {
    product = await getProduct(slug);
  } catch (error) {
    console.error("Gagal memuat detail forklift:", error);
    throw error;
  }

  if (!product) {
    notFound();
  }

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
              <a href="#" className="hover:text-primary">
                Beranda
              </a>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <a href="#" className="hover:text-primary">
                Produk
              </a>

              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>

              <span className="font-bold text-primary">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="w-full py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* GALLERY */}
              <div className="lg:col-span-7">
                <ProductGallery product={product} />
              </div>

              {/* PRODUCT INFO */}
              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="space-y-2">
                  <h1 className="font-headline-lg text-headline-lg font-extrabold leading-tight text-primary">
                    {product.name}
                  </h1>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-primary-fixed px-2.5 py-1 font-label-technical font-bold uppercase text-on-primary-fixed">
                      {product.series}
                    </span>

                    <span className="rounded bg-surface-container px-2.5 py-1 font-label-technical uppercase text-on-surface">
                      Kategori: {product.engine}
                    </span>
                  </div>
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
                        className="flex items-center gap-3 rounded-lg bg-surface-container-lowest p-3 shadow-sm"
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

                <ButtonCTADetail />

                {/* ASSURANCES */}
                <div className="space-y-2.5 rounded-lg bg-surface-container-low p-4">
                  <Assurance
                    icon="build_circle"
                    text="Hubungi tim kami untuk informasi layanan teknisi dan suku cadang."
                  />

                  <Assurance
                    icon="payments"
                    text="Konsultasikan kebutuhan pembelian atau sewa forklift dengan tim kami."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="w-full py-space-xl">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="font-label-technical font-bold uppercase tracking-widest text-secondary">
                SOLUSI MATERIAL HANDLING
              </span>

              <h2 className="font-headline-lg font-bold text-primary">
                Keunggulan Produk
              </h2>

              <p className="mt-2 font-body-md text-on-surface-variant">
                Informasi produk untuk membantu Anda mengevaluasi kebutuhan
                material handling.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
              <Feature
                icon="inventory_2"
                title="Informasi Produk"
                description="Lihat informasi unit dan spesifikasi yang tersedia untuk membantu memilih forklift sesuai kebutuhan."
              />

              <Feature
                icon="scale"
                title="Kapasitas Angkat"
                description="Pertimbangkan kapasitas angkat unit berdasarkan beban yang ditangani dalam operasional."
              />

              <Feature
                icon="height"
                title="Tinggi Angkat"
                description="Sesuaikan tinggi mast dengan kebutuhan rak penyimpanan dan area kerja."
              />

              <Feature
                icon="support_agent"
                title="Konsultasi"
                description="Diskusikan kebutuhan unit, penggunaan, dan pilihan produk dengan tim PT. KEI HAI."
              />

              <Feature
                icon="factory"
                title="Kebutuhan Industri"
                description="Konsultasikan pilihan forklift untuk kegiatan pergudangan, manufaktur, dan logistik."
              />
            </div>
          </div>
        </section>

        <ProductSection />
        <FinalCTASection />
      </div>
    </main>
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

import Link from "next/link";

type PayloadImage = {
  url?: string;
  alt?: string;
};

type ArticleCMS = {
  id: string | number;
  judul?: string;
  kategori?: string;
  gambar?: PayloadImage | number | null;
  createdAt?: string;
  slug?: string;
  isaktif?: boolean;
  body?: unknown;
};

type Article = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  accent: "primary" | "secondary";
  image?: string;
  imageAlt?: string;
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/$/, "");

function extractText(value: unknown): string {
  if (!value) return "";

  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value.map(extractText).filter(Boolean).join(" ");
  }

  if (typeof value === "object") {
    const node = value as Record<string, unknown>;

    if (typeof node.text === "string") {
      return node.text;
    }

    return Object.values(node)
      .map(extractText)
      .filter(Boolean)
      .join(" ");
  }

  return "";
}

function formatDate(date?: string): string {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

function estimateReadTime(body: unknown): string {
  const text = extractText(body);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} Min Baca`;
}

function getDescription(body: unknown): string {
  const text = extractText(body).replace(/\s+/g, " ").trim();

  if (!text) {
    return "Baca artikel ini untuk mendapatkan informasi lebih lanjut.";
  }

  return text.length > 180 ? `${text.slice(0, 177)}...` : text;
}

async function getArticles(): Promise<Article[]> {
  try {
    const query = new URLSearchParams({
      limit: "3",
      depth: "1",
      sort: "-createdAt",
      "where[isaktif][equals]": "true",
    });

    const response = await fetch(
      `${PAYLOAD_URL}/api/artikel?${query.toString()}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      throw new Error(`Gagal mengambil artikel: HTTP ${response.status}`);
    }

    const result = (await response.json()) as {
      docs?: ArticleCMS[];
    };

    return (result.docs ?? [])
      .filter((item) => item.isaktif !== false)
      .map((item, index) => {
        const image =
          item.gambar && typeof item.gambar === "object"
            ? item.gambar
            : undefined;

        return {
          category: item.kategori || "Artikel",
          date: formatDate(item.createdAt),
          readTime: estimateReadTime(item.body),
          title: item.judul || "Artikel tanpa judul",
          description: getDescription(item.body),
          href: `/pages/artikel/${item.slug || item.id}`,
          icon: "article",
          accent: index % 2 === 0 ? "secondary" : "primary",
          image: image?.url
            ? image.url.startsWith("http")
              ? image.url
              : `${PAYLOAD_URL}${image.url}`
            : undefined,
          imageAlt: image?.alt || item.judul || "Gambar artikel",
        };
      });
  } catch (error) {
    console.error("Gagal mengambil data artikel:", error);
    return [];
  }
}

function ArticleVisual({
  icon,
  category,
  accent,
  image,
  imageAlt,
}: {
  icon: string;
  category: string;
  accent: "primary" | "secondary";
  image?: string;
  imageAlt?: string;
}) {
  const accentColor =
    accent === "secondary"
      ? "text-secondary bg-secondary/10"
      : "text-primary bg-primary/10";

  return (
    <div className="group relative h-48 overflow-hidden bg-surface-container">
      {image ? (
        <img
          src={image}
          alt={imageAlt || category}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-40">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(15,37,69,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(15,37,69,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-primary/5 transition-transform duration-500 group-hover:scale-110" />

          <div className="relative flex h-full items-center justify-center">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:-translate-y-1 ${accentColor}`}
            >
              <span className="material-symbols-outlined text-[42px]">
                {icon}
              </span>
            </div>
          </div>
        </>
      )}

      <span className="absolute left-3 top-3 rounded bg-surface-container-lowest/95 px-2.5 py-1 font-label-technical text-label-technical font-bold uppercase text-primary shadow-sm backdrop-blur">
        {category}
      </span>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <ArticleVisual
        icon={article.icon}
        category={article.category}
        accent={article.accent}
        image={article.image}
        imageAlt={article.imageAlt}
      />

      <div className="flex flex-1 flex-col justify-between p-space-md">
        <div>
          <div className="mb-2 font-label-technical text-label-technical text-on-surface-variant">
            {article.date}
            <span className="mx-1">•</span>
            {article.readTime}
          </div>

          <h3 className="mb-2 font-title-md text-title-md font-bold text-primary">
            <Link
              href={article.href}
              className="transition-colors hover:text-secondary"
            >
              {article.title}
            </Link>
          </h3>

          <p className="mb-4 line-clamp-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {article.description}
          </p>
        </div>

        <Link
          href={article.href}
          className="group inline-flex items-center gap-1 font-label-md text-label-md font-bold text-secondary transition-all hover:gap-2"
        >
          <span>Baca Selengkapnya</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
}

export default async function ArticlesSection() {
  const articles = await getArticles();

  return (
    <section className="bg-surface-bright py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-space-xl flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-label-technical text-label-technical font-bold uppercase tracking-widest text-secondary">
              Pusat Informasi
            </span>

            <h2 className="mt-1 font-headline-lg text-headline-lg font-bold text-primary">
              Artikel Pilihan
            </h2>

            <p className="mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Wawasan dan panduan praktis seputar forklift, efisiensi gudang,
              dan perawatan alat berat industri.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/pages/artikel"
              className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary transition-colors hover:text-secondary"
            >
              <span>Lihat Semua Artikel</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard
                key={`${article.title}-${index}`}
                article={article}
              />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center font-body-md text-on-surface-variant">
            Artikel belum tersedia.
          </p>
        )}
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import ArticleBody from "./ArticleBody";

type PayloadMedia = {
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
};

type PayloadArticle = {
  id: number | string;
  judul?: string | null;
  slug?: string | null;
  kategori?: string | null;
  gambar?: number | string | PayloadMedia | null;
  body?: unknown;
  isaktif?: boolean;
  createdAt?: string;
};

type PayloadResponse = {
  docs?: PayloadArticle[];
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

function getImageUrl(
  image?: number | string | PayloadMedia | null
): string {
  if (!image || typeof image !== "object" || !image.url) {
    return "";
  }

  if (/^https?:\/\//i.test(image.url)) {
    return image.url;
  }

  return `${PAYLOAD_URL}${
    image.url.startsWith("/") ? "" : "/"
  }${image.url}`;
}

function formatDate(date?: string): string {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

async function getArticle(
  slug: string
): Promise<PayloadArticle | null> {
  const query = new URLSearchParams({
    depth: "1",
    limit: "1",
    "where[slug][equals]": slug,
    "where[isaktif][equals]": "true",
  });

  try {
    const response = await fetch(
      `${PAYLOAD_URL}/api/artikel?${query.toString()}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      console.error(
        "Gagal mengambil artikel dari Payload CMS:",
        response.status
      );
      return null;
    }

    const result: PayloadResponse = await response.json();

    return result.docs?.[0] ?? null;
  } catch (error) {
    console.error("Error mengambil artikel:", error);
    return null;
  }
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const title = article.judul || "Artikel";
  const category = article.kategori || "Artikel";
  const date = formatDate(article.createdAt);
  const imageUrl = getImageUrl(article.gambar);

  const imageAlt =
    article.gambar &&
    typeof article.gambar === "object" &&
    "alt" in article.gambar
      ? article.gambar.alt || title
      : title;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
          >
            <a href="/" className="transition hover:text-red-600">
              Beranda
            </a>

            <span>/</span>

            <a
              href="/pages/company/artikel"
              className="transition hover:text-red-600"
            >
              Artikel
            </a>

            <span>/</span>

            <span className="max-w-[240px] truncate font-medium text-gray-800">
              {title}
            </span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="mb-5">
          <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
            {category}
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {date && (
          <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
            <span aria-hidden="true">📅</span>
            <time dateTime={article.createdAt || undefined}>
              {date}
            </time>
          </div>
        )}
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <figure className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-h-[560px] w-full object-cover"
              fetchPriority="high"
            />
          </figure>
        </section>
      )}

      {/* Article Content */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article>
          <ArticleBody content={article.body} />
        </article>

        {/* Back to Articles */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <a
            href="/pages/perusahaan/artikel"
            className="inline-flex items-center gap-2 font-semibold text-red-700 transition hover:text-red-800"
          >
            <span aria-hidden="true">←</span>
            Kembali ke daftar artikel
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Butuh solusi forklift untuk bisnis Anda?
            </h2>

            <p className="mt-2 leading-7 text-gray-600">
              Hubungi tim PT. KEI HAI untuk informasi produk,
              suku cadang, penyewaan, dan layanan forklift.
            </p>
          </div>

          <a
            href="/pages/perusahaan/hubungi-kami"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  );
}

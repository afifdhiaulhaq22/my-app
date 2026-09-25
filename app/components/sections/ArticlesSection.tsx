import Link from "next/link";

type Article = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  accent: "primary" | "secondary";
};

const ARTICLES: Article[] = [
  {
    category: "Teknologi Armada",
    date: "10 April 2026",
    readTime: "6 Min Baca",
    title: "Mengenal Perbedaan Forklift Diesel dan Electric",
    description:
      "Ulasan mendalam perbandingan efisiensi konsumsi energi, emisi gas buang, performa medan outdoor versus indoor untuk manajemen pabrik modern.",
    href: "/artikel/forklift-diesel-vs-electric",
    icon: "electric_bolt",
    accent: "secondary",
  },
];

function ArticleVisual({
  icon,
  category,
  accent,
}: {
  icon: string;
  category: string;
  accent: "primary" | "secondary";
}) {
  const accentColor =
    accent === "secondary"
      ? "text-secondary bg-secondary/10"
      : "text-primary bg-primary/10";

  return (
    <div className="group relative h-48 overflow-hidden bg-surface-container">
      {/* Decorative background */}
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

      {/* Decorative circle */}
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

      {/* Category */}
      <span className="absolute left-3 top-3 rounded bg-surface-container-lowest/95 px-2.5 py-1 font-label-technical text-label-technical font-bold uppercase text-primary shadow-sm backdrop-blur">
        {category}
      </span>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Visual */}
      <ArticleVisual
        icon={article.icon}
        category={article.category}
        accent={article.accent}
      />

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-space-md">
        <div>
          {/* Meta */}
          <div className="mb-2 font-label-technical text-label-technical text-on-surface-variant">
            {article.date} <span className="mx-1">•</span>{" "}
            {article.readTime}
          </div>

          {/* Title */}
          <h3 className="mb-2 font-title-md text-title-md font-bold text-primary">
            <Link
              href={article.href}
              className="transition-colors hover:text-secondary"
            >
              {article.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {article.description}
          </p>
        </div>

        {/* Read More */}
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

export default function ArticlesSection() {
  return (
    <section className="bg-surface-bright py-space-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
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

          {/* All Articles */}
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

        {/* Article Grid */}
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

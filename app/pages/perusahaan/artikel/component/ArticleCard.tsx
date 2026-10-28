
"use client";

import { useState } from "react";
import { Article } from "./type";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);

  const formattedDate = (() => {
    const date = new Date(article.date);

    if (Number.isNaN(date.getTime())) {
      return article.date;
    }

    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  })();

  const imageSrc =
    imageError || !article.image
      ? "/images/placeholder-article.png"
      : article.image;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Gambar artikel */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
        <img
          src={imageSrc}
          alt={article.imageAlt || article.title}
          loading="lazy"
          onError={() => {
            if (!imageError) {
              setImageError(true);
            }
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3">
          <span className="rounded bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
            {article.categoryLabel}
          </span>
        </div>
      </div>

      {/* Konten artikel */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-on-surface-variant">
            <span>{formattedDate}</span>
            <span aria-hidden="true">•</span>
            <span>{article.readTime}</span>
          </div>

          <h4 className="line-clamp-2 text-xl font-bold text-primary transition-colors group-hover:text-secondary">
            {article.title}
          </h4>

          <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
            {article.excerpt || "Baca artikel ini untuk mengetahui informasi selengkapnya."}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-outline-variant/20 pt-4">
          <span className="line-clamp-1 text-xs uppercase tracking-wider text-outline">
            {article.tag || article.categoryLabel}
          </span>

         <a
          href={article.slug ? `/pages/perusahaan/artikel/${article.slug}` : "/artikel"}
          aria-label={`Baca selengkapnya: ${article.title}`}
          className="inline-flex shrink-0 items-center gap-1 font-bold text-secondary transition-colors hover:text-primary"
        >
          Baca Selengkapnya
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[16px]"
          >
            arrow_forward
          </span>
        </a>
        </div>
      </div>
    </article>
  );
}

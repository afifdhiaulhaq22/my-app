import Image from "next/image";
import { Article } from "./type";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded bg-white/90 backdrop-blur text-xs text-primary font-bold uppercase tracking-wider shadow-sm">
            {article.categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant uppercase tracking-wider">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h4 className="text-xl text-primary font-bold group-hover:text-secondary transition-colors line-clamp-2">
            {article.title}
          </h4>

          <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-outline">
            {article.tag}
          </span>

          <a
            href={article.href}
            className="inline-flex items-center gap-1 font-bold text-secondary"
          >
            Baca Selengkapnya
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

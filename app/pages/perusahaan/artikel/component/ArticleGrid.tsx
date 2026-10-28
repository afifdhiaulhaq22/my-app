
import { Article } from "./type";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (!articles.length) {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-sm">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container text-outline">
          <span className="material-symbols-outlined text-[32px]">
            manage_search
          </span>
        </div>

        <h4 className="mb-2 text-xl font-bold text-primary">
          Artikel Tidak Ditemukan
        </h4>

        <p className="max-w-lg leading-relaxed text-on-surface-variant">
          Maaf, kami tidak dapat menemukan artikel yang cocok dengan kata kunci
          pencarian Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

import { Article } from "./type";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (!articles.length) {
    return (
      <div className="w-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl shadow-sm">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-4">
          <span className="material-symbols-outlined text-[32px]">
            manage_search
          </span>
        </div>

        <h4 className="text-xl text-primary font-bold mb-2">
          Artikel Tidak Ditemukan
        </h4>

        <p className="text-on-surface-variant max-w-lg leading-relaxed">
          Maaf, kami tidak dapat menemukan artikel yang cocok dengan kata kunci
          pencarian Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
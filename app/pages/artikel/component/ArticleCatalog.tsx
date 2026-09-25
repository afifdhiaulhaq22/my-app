"use client";

import { useMemo, useState } from "react";
import { articles, categories, featuredArticle } from "./data";
import { ArticleCategory } from "./type";
import ArticleHero from "./ArticleHero";
import ArticleSearch from "./ArticleSearch";
import ArticleGrid from "./ArticleGrid";
import ArticlePagination from "./ArticlePagination";
// import ArticleCTA from "./ArticleCTA";

export default function ArticleCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | ArticleCategory>("all");
  const [sort, setSort] = useState("terbaru");
  const [page, setPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = articles.filter((article) => {
      const matchesCategory =
        category === "all" || article.category === category;

      const searchableText = [
        article.title,
        article.excerpt,
        article.keywords,
        article.categoryLabel,
        article.tag,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });

    return [...result].sort((a, b) => {
      if (sort === "terbaru") {
        return (
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
        );
      }

      if (sort === "rekomendasi") {
        return Number(b.category === "k3") - Number(a.category === "k3");
      }

      return 0;
    });
  }, [query, category, sort]);

  const pageSize = 6;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / pageSize),
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleCategoryChange = (
    value: "all" | ArticleCategory,
  ) => {
    setCategory(value);
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setPage(1);
  };

  return (
    <main className="w-full pt-[120px] bg-surface">
      <div className="flex flex-col w-full">
        {/* Breadcrumb */}
        <section className="w-full bg-surface-container-low py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-on-surface-variant"
            >
              <a href="/" className="hover:text-primary">
                Beranda
              </a>

              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>

              <span className="font-semibold text-on-surface">
                Artikel & Wawasan Industri
              </span>
            </nav>

            <div className="flex items-center gap-2 text-on-surface-variant text-xs uppercase tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              Pusat Informasi Teknis K3 & Logistik
            </div>
          </div>
        </section>

        <ArticleSearch
          query={query}
          category={category}
          categories={categories}
          count={filteredArticles.length}
          sort={sort}
          onQueryChange={handleQueryChange}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
        />

        <ArticleHero article={featuredArticle} />

        <section className="w-full bg-surface py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                  Wawasan Mendalam
                </span>

                <h3 className="text-3xl text-primary font-extrabold tracking-tight">
                  Katalog Artikel & Tutorial Teknis
                </h3>
              </div>

              <p className="text-sm text-on-surface-variant max-w-md">
                Materi edukasi berkala yang disusun langsung oleh tim teknisi
                bersertifikasi dan spesialis penanganan beban industri PT.
                KEI HAI.
              </p>
            </div>

            <ArticleGrid articles={paginatedArticles} />

            {filteredArticles.length > 0 && (
              <ArticlePagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </div>
        </section>

      </div>
    </main>
  );
}

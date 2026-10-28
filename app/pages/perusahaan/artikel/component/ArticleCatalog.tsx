
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Article } from "./type";
import ArticleSearch from "./ArticleSearch";
import ArticleGrid from "./ArticleGrid";
import ArticlePagination from "./ArticlePagination";

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const PAGE_SIZE = 6;
const PLACEHOLDER_IMAGE = "/images/placeholder-article.png";

type PayloadMedia = {
  url?: string;
  alt?: string;
  filename?: string;
};

type PayloadArticle = {
  id: string | number;
  judul: string;
  slug: string;
  kategori: string;
  gambar?: string | number | PayloadMedia | null;
  body?: unknown;
  isaktif: boolean;
  createdAt: string;
};

type PayloadResponse = {
  docs?: PayloadArticle[];
  totalDocs?: number;
};

function getImageUrl(image?: PayloadArticle["gambar"]): string {
  if (!image || typeof image !== "object" || !image.url) {
    return PLACEHOLDER_IMAGE;
  }

  if (/^https?:\/\//i.test(image.url)) {
    return image.url;
  }

  return `${PAYLOAD_URL}${image.url.startsWith("/") ? "" : "/"}${image.url}`;
}

function extractText(value: unknown): string {
  if (!value || typeof value !== "object") {
    return "";
  }

  if (Array.isArray(value)) {
    return value.map(extractText).filter(Boolean).join(" ");
  }

  const node = value as {
    text?: string;
    children?: unknown[];
    root?: unknown;
  };

  if (typeof node.text === "string") {
    return node.text;
  }

  if (Array.isArray(node.children)) {
    return node.children.map(extractText).filter(Boolean).join(" ");
  }

  if (node.root) {
    return extractText(node.root);
  }

  return "";
}

function mapArticle(item: PayloadArticle): Article {
  const bodyText = extractText(item.body).replace(/\s+/g, " ").trim();
  const wordCount = bodyText ? bodyText.split(/\s+/).length : 0;

  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} menit baca`;

  const imageAlt =
    item.gambar &&
    typeof item.gambar === "object" &&
    item.gambar.alt
      ? item.gambar.alt
      : item.judul;

  return {
    id: item.id,
    title: item.judul,
    slug: item.slug,
    category: item.kategori,
    categoryLabel: item.kategori,
    tag: item.kategori,
    date: item.createdAt,
    image: getImageUrl(item.gambar),
    imageAlt,
    excerpt:
      bodyText.length > 180
        ? `${bodyText.slice(0, 180).trim()}...`
        : bodyText,
    keywords: `${item.judul} ${item.kategori} ${bodyText}`,
    readTime,
    href: `/artikel/${item.slug}`,
  };
}

export default function ArticleCatalog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const params = new URLSearchParams({
        depth: "1",
        limit: "100",
        sort: "-createdAt",
        "where[isaktif][equals]": "true",
      });

      const response = await fetch(
        `${PAYLOAD_URL}/api/artikel?${params.toString()}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error(`Gagal mengambil artikel. HTTP ${response.status}`);
      }

      const result: PayloadResponse = await response.json();

      setArticles(
        (result.docs ?? [])
          .filter((item) => item.isaktif)
          .map(mapArticle)
      );

      setPage(1);
    } catch (err) {
      console.error("Gagal mengambil data artikel:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchArticles();
  }, [fetchArticles]);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return articles;
    }

    return articles.filter((article) => {
      const searchableText = [
        article.title,
        article.excerpt,
        article.keywords,
        article.categoryLabel,
        article.tag,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [articles, query]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <main className="w-full bg-surface">
      <div className="flex w-full flex-col">
        <ArticleSearch
          query={query}
          count={filteredArticles.length}
          onQueryChange={handleQueryChange}
        />

        <section className="w-full bg-surface py-10 lg:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:px-12">
            {loading ? (
              <div className="py-16 text-center text-on-surface-variant">
                Memuat artikel...
              </div>
            ) : error ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <p className="text-on-surface-variant">
                  Artikel gagal dimuat. Periksa koneksi ke Payload CMS.
                </p>

                <button
                  type="button"
                  onClick={() => void fetchArticles()}
                  className="rounded-lg bg-primary px-5 py-3 font-semibold text-on-primary"
                >
                  Coba Lagi
                </button>
              </div>
            ) : paginatedArticles.length > 0 ? (
              <>
                <ArticleGrid articles={paginatedArticles} />

                <ArticlePagination
                  page={currentPage}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </>
            ) : (
              <div className="py-16 text-center">
                <h2 className="text-xl font-bold text-primary">
                  Artikel tidak ditemukan
                </h2>

                <p className="mt-2 text-on-surface-variant">
                  Coba gunakan kata kunci pencarian lainnya.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import { Category } from "./type";

interface ArticleSearchProps {
  query: string;
  category: Category["value"];
  categories: Category[];
  count: number;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: Category["value"]) => void;
  onSortChange: (value: string) => void;
  sort: string;
}

export default function ArticleSearch({
  query,
  category,
  categories,
  count,
  onQueryChange,
  onCategoryChange,
  onSortChange,
  sort,
}: ArticleSearchProps) {
  return (
    <section className="w-full bg-surface-container py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
        {/* <div className="flex flex-col items-start gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-primary font-label-technical text-label-technical uppercase tracking-wider">
            <span className="material-symbols-outlined text-[15px]">
              menu_book
            </span>
            <span>Pusat Informasi & Pengetahuan Industri</span>
          </div>

          <h1 className="font-display text-headline-lg lg:text-display text-primary leading-tight font-extrabold tracking-tight">
            Wawasan & Artikel Industri
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Informasi komprehensif, panduan teknis rekayasa, dan pengetahuan
            praktis seputar armada forklift, pemeliharaan fluid & filter,
            efisiensi traksi baterai, serta keselamatan kerja (K3).
          </p>
        </div> */}

        <form
          className="relative flex items-center w-full max-w-3xl mt-4 bg-white rounded-xl shadow-sm p-1.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="pl-4 pr-2 text-outline">
            <span className="material-symbols-outlined">search</span>
          </div>

          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Cari artikel, topik material handling, suku cadang, baterai..."
            className="w-full h-11 bg-transparent text-on-surface placeholder:text-outline focus:outline-none"
          />

          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="p-2 text-outline hover:text-on-surface"
              aria-label="Hapus pencarian"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          )}

          <button
            type="submit"
            className="ml-2 inline-flex items-center gap-1.5 px-6 h-11 bg-primary hover:bg-primary-container text-on-primary rounded-lg shrink-0"
          >
            Cari
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </button>
        </form>

        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
          {/* <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((item) => {
              const active = category === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => onCategoryChange(item.value)}
                  className={`shrink-0 px-4 py-2 rounded-full transition-all ${
                    active
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div> */}

          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <span className="text-xs text-on-surface-variant uppercase tracking-wider">
              Menampilkan:{" "}
              <strong className="text-primary">{count} Artikel</strong>
            </span>

            {/* <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-white text-on-surface px-3 py-2 rounded-lg shadow-sm focus:outline-none"
            >
              <option value="terbaru">Urutkan: Terbaru</option>
              <option value="populer">Urutkan: Terpopuler</option>
              <option value="rekomendasi">Urutkan: Panduan K3</option>
            </select> */}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

interface ArticleSearchProps {
  query: string;
  count: number;
  onQueryChange: (value: string) => void;
}

export default function ArticleSearch({
  query,
  count,
  onQueryChange,
}: ArticleSearchProps) {
  return (
    <section className="w-full bg-surface-container py-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-12">
        <form
          className="relative mt-4 flex w-full max-w-3xl items-center rounded-xl bg-white p-1.5 shadow-sm"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="pl-4 pr-2 text-outline">
            <span className="material-symbols-outlined">
              search
            </span>
          </div>

          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Cari artikel, suku cadang, baterai..."
            aria-label="Cari artikel"
            className="h-11 w-full bg-transparent text-on-surface placeholder:text-outline focus:outline-none"
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
            className="ml-2 inline-flex h-11 shrink-0 items-center gap-1.5 rounded-lg bg-primary px-6 text-on-primary hover:bg-primary-container"
          >
            Cari
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </button>
        </form>

        <div className="mt-2 flex w-full items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-wider text-on-surface-variant">
            Menampilkan:{" "}
            <strong className="text-primary">
              {count} Artikel
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
}

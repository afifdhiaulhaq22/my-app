interface ArticlePaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ArticlePagination({
  page,
  totalPages,
  onPageChange,
}: ArticlePaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-white text-on-surface shadow-sm disabled:opacity-50"
      >
        <span className="material-symbols-outlined text-[16px]">
          arrow_back
        </span>
        <span className="hidden sm:inline">Sebelumnya</span>
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (item) => (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={`w-10 h-10 rounded-lg font-bold ${
              page === item
                ? "bg-primary text-on-primary"
                : "bg-white text-on-surface hover:bg-surface-container"
            }`}
          >
            {item}
          </button>
        ),
      )}

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-white text-on-surface shadow-sm disabled:opacity-50"
      >
        <span className="hidden sm:inline">Selanjutnya</span>
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </button>
    </div>
  );
}

"use client"

import { useMemo, useState } from "react"
import ProductCard from "./ProductCard"
import ProductSidebar from "./ProductSidebar"
import ProductToolbar from "./ProductToolbar"

const products = [
  {
    id: 1,
    slug: "seris-fd50-hd-diesel",
    name: "Seri FD50 HD Diesel",
    category: "diesel",
    capacity: 5000,
    badge: "Heavy Payload",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCc4bDBdI1tCWlf9eTSUMAeGEGn5dnEjABSlksv2BCpOCGq3JNYPNF4ReTcuqSw3zmdjdhfE3QYHjSlkPIvrVDAzHTGh6meQadN3RqGbJyZPAr9NUS5U0PEJjlrg19Rex6ldAqm1i0z8YX8yGobnuw5JyI6LOpGVKLyafzIjsBpP-yzNS9VNzcu6Ur9_jVkfuF3MhFFj4NhbkI3avpMx55HtG0LBZ7oVMlfRzi_o1uySAkG5U1xJWXS",
    location: "Ready MM2100",
    description:
      "Daya angkat optimal untuk pabrik baja, beton pracetak, dan bongkar muat muatan berat industri.",
    fuel: "Turbo Diesel",
    liftHeight: "3.000 - 6.000 mm",
    mast: "Duplex Wide-View",
  },

  // Tambahkan product lainnya di sini
]

const ITEMS_PER_PAGE = 8

export default function ProductCatalog() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("rekomendasi")
  const [currentPage, setCurrentPage] = useState(1)

  /**
   * FILTER + SEARCH + SORT
   */
  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase()

    let result = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category

      const searchableText = [
        product.name,
        product.category,
        product.fuel,
        product.capacity.toString(),
        product.description,
        product.location,
        product.liftHeight,
        product.mast,
      ]
        .join(" ")
        .toLowerCase()

      const matchesSearch =
        !keyword || searchableText.includes(keyword)

      return matchesCategory && matchesSearch
    })

    if (sort === "low") {
      result = [...result].sort(
        (a, b) => a.capacity - b.capacity
      )
    }

    if (sort === "high") {
      result = [...result].sort(
        (a, b) => b.capacity - a.capacity
      )
    }

    return result
  }, [search, category, sort])

  /**
   * PAGINATION
   */
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  )

  const paginatedProducts = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE

    const endIndex =
      startIndex + ITEMS_PER_PAGE

    return filteredProducts.slice(
      startIndex,
      endIndex
    )
  }, [filteredProducts, currentPage])

  /**
   * RESET HALAMAN SAAT FILTER BERUBAH
   */
  const handleSearchChange = (value: string) => {
    setSearch(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    setCurrentPage(1)
  }

  /**
   * RESET SEMUA FILTER
   */
  const resetFilters = () => {
    setSearch("")
    setCategory("all")
    setSort("rekomendasi")
    setCurrentPage(1)
  }

  /**
   * PAGINATION RANGE
   */
  const getPaginationPages = () => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      )
    }

    const pages: (number | "...")[] = []

    pages.push(1)

    if (currentPage > 3) {
      pages.push("...")
    }

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    )

    for (let page = start; page <= end; page++) {
      pages.push(page)
    }

    if (currentPage < totalPages - 2) {
      pages.push("...")
    }

    pages.push(totalPages)

    return pages
  }

  /**
   * RANGE ITEM
   */
  const startItem =
    filteredProducts.length === 0
      ? 0
      : (currentPage - 1) * ITEMS_PER_PAGE + 1

  const endItem = Math.min(
    currentPage * ITEMS_PER_PAGE,
    filteredProducts.length
  )

  return (
    <>
      <ProductToolbar
        search={search}
        setSearch={handleSearchChange}
        sort={sort}
        setSort={handleSortChange}
      />

      <section className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* SIDEBAR */}
          <ProductSidebar
            category={category}
            setCategory={handleCategoryChange}
            resetFilters={resetFilters}
          />

          <div className="flex-1 w-full space-y-8">
            {/* RESULT HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  unit forklift
                </p>

                {category !== "all" && (
                  <p className="text-xs text-secondary mt-1">
                    Filter: {category}
                  </p>
                )}

                {search && (
                  <p className="text-xs text-on-surface-variant mt-1">
                    Pencarian:{" "}
                    <span className="font-semibold text-primary">
                      &quot;{search}&quot;
                    </span>
                  </p>
                )}
              </div>

              {(search ||
                category !== "all" ||
                sort !== "rekomendasi") && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Reset Filter
                </button>
              )}
            </div>

            {/* PRODUCT GRID */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-10 text-center shadow-sm">
                <div className="text-4xl mb-4">
                  ⌕
                </div>

                <h3 className="text-lg font-bold text-primary">
                  Unit forklift tidak ditemukan
                </h3>

                <p className="text-sm text-on-surface-variant mt-2 max-w-md mx-auto">
                  Coba gunakan kata kunci lain atau
                  pilih kategori forklift yang berbeda.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Tampilkan Semua Unit
                </button>
              </div>
            )}

            {/* PAGINATION */}
            {filteredProducts.length > 0 && (
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* INFO */}
                <p className="text-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-primary">
                    {startItem} - {endItem}
                  </span>{" "}
                  dari{" "}
                  <span className="font-bold text-primary">
                    {filteredProducts.length}
                  </span>{" "}
                  unit forklift
                </p>

                {/* CONTROLS */}
                <div className="flex items-center gap-1.5 text-sm">
                  {/* PREVIOUS */}
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(page - 1, 1)
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface flex items-center gap-1 transition-colors hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span>←</span>

                    <span className="hidden sm:inline">
                      Sebelumnya
                    </span>
                  </button>

                  {/* PAGE NUMBERS */}
                  {getPaginationPages().map(
                    (page, index) => {
                      if (page === "...") {
                        return (
                          <span
                            key={`ellipsis-${index}`}
                            className="px-1 text-outline"
                          >
                            ...
                          </span>
                        )
                      }

                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() =>
                            setCurrentPage(page)
                          }
                          aria-current={
                            currentPage === page
                              ? "page"
                              : undefined
                          }
                          className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-colors ${
                            currentPage === page
                              ? "bg-primary text-on-primary"
                              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    }
                  )}

                  {/* NEXT */}
                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages ||
                      totalPages === 0
                    }
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(
                          page + 1,
                          totalPages
                        )
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface flex items-center gap-1 transition-colors hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="hidden sm:inline">
                      Selanjutnya
                    </span>

                    <span>→</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

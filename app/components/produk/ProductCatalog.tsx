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

]

export default function ProductCatalog() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("rekomendasi")

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category

      const query = search.toLowerCase()

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.fuel.toLowerCase().includes(query) ||
        product.capacity.toString().includes(query)

      return matchesCategory && matchesSearch
    })

    if (sort === "low") {
      return [...result].sort((a, b) => a.capacity - b.capacity)
    }

    if (sort === "high") {
      return [...result].sort((a, b) => b.capacity - a.capacity)
    }

    return result
  }, [search, category, sort])

  const resetFilters = () => {
    setSearch("")
    setCategory("all")
    setSort("rekomendasi")
  }

  return (
    <>
      <ProductToolbar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <section className="w-full py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar
              category={category}
              setCategory={setCategory}
              resetFilters={resetFilters}
            />

            <div className="flex-1 w-full space-y-6">
              {/* Count */}
              <div className="flex items-center justify-between bg-surface-container-lowest px-4 py-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
                    Menampilkan:
                  </span>

                  <span className="font-label-md text-label-md font-bold text-primary">
                    {filteredProducts.length} dari {products.length} Unit
                    Forklift
                  </span>
                </div>

                <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                  <span className="hidden sm:inline">
                    Lokasi Armada: MM2100 Cikarang & Surabaya
                  </span>

                  <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
                </div>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-surface-container-lowest rounded-xl p-12 text-center space-y-4 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-surface-container mx-auto flex items-center justify-center text-outline">
                    <span className="material-symbols-outlined text-[32px]">
                      inventory_2
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Unit Tidak Ditemukan
                    </h3>

                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                      Tidak ada produk forklift yang cocok dengan kriteria
                      pencarian Anda.
                    </p>
                  </div>

                  <button
                    onClick={resetFilters}
                    className="px-5 py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-semibold hover:bg-primary-container transition-colors shadow-sm"
                  >
                    Reset Semua Filter
                  </button>
                </div>
              )}

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-variant">
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Menampilkan{" "}
                  <span className="font-bold text-on-surface">
                    {filteredProducts.length > 0 ? 1 : 0} -{" "}
                    {filteredProducts.length}
                  </span>{" "}
                  dari{" "}
                  <span className="font-bold text-on-surface">
                    {filteredProducts.length}
                  </span>{" "}
                  unit forklift
                </div>

                <div className="flex items-center gap-1">
                  <button
                    disabled
                    className="px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center gap-1 font-label-md text-label-md disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_back
                    </span>
                    Sebelumnya
                  </button>

                  <button className="w-9 h-9 rounded-lg bg-primary text-on-primary font-bold">
                    1
                  </button>

                  <button className="px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center gap-1">
                    Selanjutnya
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

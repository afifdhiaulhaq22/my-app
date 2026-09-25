type Product = {
  id: number
  slug: string
  name: string
  category: string
  capacity: number
  badge?: string
  badgeClass?: string
  image: string
  location: string
  description: string
  fuel: string
  liftHeight: string
  mast: string
}

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
      data-capacity={product.capacity}
      data-category={product.category}
    >
      {/* Image */}
      <div className="relative bg-surface-container-low p-4 h-48 flex items-center justify-center overflow-hidden">
        {/* {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shadow-sm ${
              product.badgeClass ||
              "bg-primary-fixed text-on-primary-fixed"
            }`}
          >
            {product.badge}
          </span>
        )} */}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-surface-container-lowest/85 backdrop-blur-sm rounded text-[10px] font-mono text-primary">
          {product.location}
        </span> */}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="font-label-technical text-label-technical text-outline uppercase tracking-wider block">
            Merek: KEI HAI
          </span>

          <h3 className="font-title-md text-title-md text-primary font-bold group-hover:text-secondary transition-colors">
            {product.name}
          </h3>

          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-2.5 rounded-lg text-[11px]">
          <div>
            <span className="text-on-surface-variant block font-medium">
              Kapasitas:
            </span>
            <strong className="text-primary font-bold">
              {product.capacity.toLocaleString("id-ID")} kg
            </strong>
          </div>

          <div>
            <span className="text-on-surface-variant block font-medium">
              Bahan Bakar:
            </span>
            <strong className="text-primary font-bold">
              {product.fuel}
            </strong>
          </div>

          <div>
            <span className="text-on-surface-variant block font-medium">
              Tinggi Angkat:
            </span>
            <strong className="text-primary font-bold">
              {product.liftHeight}
            </strong>
          </div>

          <div>
            <span className="text-on-surface-variant block font-medium">
              Tipe Mast:
            </span>
            <strong className="text-primary font-bold">
              {product.mast}
            </strong>
          </div>
        </div>

        <a
          href={`/pages/produk/${product.slug}`}
        //   href="/detail"
          className="w-full py-2 bg-primary text-on-primary hover:bg-secondary rounded-lg font-label-md text-label-md font-semibold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <span>Lihat Detail</span>

          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>
    </article>
  )
}

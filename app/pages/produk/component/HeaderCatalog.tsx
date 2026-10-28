import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ProductHeaderProps = {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export default function HeaderCatalog({
  title,
  description,
  breadcrumbs,
}: ProductHeaderProps) {
  return (
    <section className="bg-surface-container-lowest border-b border-surface-container-high py-10">
      <div className="max-w-7xl mx-auto px-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex flex-wrap items-center gap-2 font-label-md text-label-md text-on-surface-variant"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-[16px]">
              home
            </span>
            <span>Beranda</span>
          </Link>

          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <span
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[14px] text-outline"
                >
                  chevron_right
                </span>

                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? "font-bold text-primary"
                        : "text-on-surface-variant"
                    }
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              {title}
            </h1>

            <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
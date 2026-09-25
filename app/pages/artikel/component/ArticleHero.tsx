import Image from "next/image";
import { Article } from "./type";

interface ArticleHeroProps {
  article: Article;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <section className="w-full bg-surface py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-on-secondary rounded-full text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">
                    star
                  </span>
                  Pilihan Redaksi
                </span>

                <span className="px-3 py-1 bg-white/90 backdrop-blur text-primary rounded-full text-xs uppercase">
                  {article.categoryLabel}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs text-on-surface-variant uppercase">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl text-primary font-bold leading-snug">
                  {article.title}
                </h2>

                <p className="text-on-surface-variant leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold">
                    KH
                  </div>

                  <div>
                    <span className="block font-bold text-on-surface">
                      Tim Engineering & K3
                    </span>
                    <span className="text-sm text-on-surface-variant">
                      Divisi Keselamatan PT. KEI HAI
                    </span>
                  </div>
                </div>

                <a
                  href={article.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-on-secondary rounded-lg"
                >
                  Baca Panduan
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

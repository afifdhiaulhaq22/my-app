import { Metadata } from "next";
import ArticleCatalog from "./component/ArticleCatalog";
import ArticleHeader from "./component/ArticleHeader";

export const metadata: Metadata = {
  title: "Wawasan & Artikel Industri | PT. KEI HAI",
  description:
    "Artikel dan wawasan teknis seputar forklift, armada, baterai, servis, suku cadang, K3, dan manajemen logistik.",
};

export default function ArtikelPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <ArticleHeader />
      <ArticleCatalog />;
    </main>
  )
}

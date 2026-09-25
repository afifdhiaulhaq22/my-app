import { Metadata } from "next";
import ArticleCatalog from "./component/ArticleCatalog";

export const metadata: Metadata = {
  title: "Wawasan & Artikel Industri | PT. KEI HAI",
  description:
    "Artikel dan wawasan teknis seputar forklift, armada, baterai, servis, suku cadang, K3, dan manajemen logistik.",
};

export default function ArtikelPage() {
  return <ArticleCatalog />;
}

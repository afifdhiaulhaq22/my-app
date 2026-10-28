export type ArticleCategory =
  | "armada"
  | "servis"
  | "sparepart"
  | "baterai"
  | "k3"
  | "logistik";

export interface Article {
id: string | number;  
title: string;
slug: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  keywords: string;
  tag: string;
  href: string;
  featured?: boolean;
}

export interface Category {
  value: "all" | ArticleCategory;
  label: string;
}

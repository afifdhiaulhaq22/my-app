import { Article, Category } from "./type";

export const categories: Category[] = [
  { value: "all", label: "Semua Topik" },
  { value: "armada", label: "Forklift & Armada" },
  { value: "servis", label: "Servis & Perawatan" },
  { value: "sparepart", label: "Suku Cadang" },
  { value: "baterai", label: "Baterai & Charging" },
  { value: "k3", label: "Keselamatan Kerja (K3)" },
  { value: "logistik", label: "Manajemen Logistik" },
];

export const articles: Article[] = [
  {
    id: 1,
    category: "baterai",
    categoryLabel: "Baterai & Charging",
    date: "22 April 2026",
    readTime: "5 Min Baca",
    tag: "Industrial Battery",
    title:
      "Optimalisasi Umur Pakai Traction Battery: Panduan Charging & Maintenance Rutin",
    excerpt:
      "Pahami siklus depth of discharge (DoD), teknik equalizing charge, dan jadwal pengecekan air demineralisasi agar performa baterai traksi tetap prima melampaui 1.500 siklus operasional.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtay6KKglnqaddAK1TDjaj3-829D3ErcgHxVWmmYZ-d6oJiTezhh9gQi1s0ZQ5uTQd0TqHkJIxNmMz8TQD5IsOftGutCn5gC20x79OQNIELnDBMeNEMO3IEqFP9Vvq_6Z-P4n99nuRtSSxw7gfgkUaE9z0YSiMcQ1VtisiJRLMVkOHIbBJx_E64WtSm1f2DF7mp2bihKg9IfuzCAM_AIeBABjRCnX7Jci-JT-n39jenU1tpdtGKjuE",
    imageAlt: "Ruang charging hub baterai lithium ion forklift elektrik",
    keywords:
      "baterai charging traction lithium asam timbal deep discharge charging hub umur baterai",
    href: "#",
  },
];

export const featuredArticle: Article = {
  id: 7,
  category: "k3",
  categoryLabel: "K3 Pergudangan",
  date: "28 April 2026",
  readTime: "6 Min Baca",
  tag: "Pilihan Redaksi",
  title:
    "Panduan Komprehensif Inspeksi Harian (Pre-Shift Inspection) Forklift di Area Pabrik & Pergudangan",
  excerpt:
    "Pemeriksaan fisik dan mekanikal terstruktur sebelum setiap shift operasional terbukti menekan risiko kecelakaan fatal hingga 78%. Temukan checklist standar OSHA & K3 Indonesia yang mencakup mast lift, tekanan hidrolik, sistem pengereman, dan peringatan sensor mundur.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBux42ZcpABRS0NToJ-jjw_HXIMuFR4RgTFpXj1DMsV_qnuQLl0jD-YEqZgV4b3GFrH3fbmn11Zt5dppC3saza4ExoqIFW9-e_-8x1PLt3Wex4REzmTraCrn6OmX9rcvkebof4wMqdwBpOzuuuDqdAbRYFfnUc4QWMuoTZbGnvn29luMQUNXSOz4XhFQ0LHl1KsTGd1ng4X-4MPVKcygfnloaXgZzSrVIt3XY4ENOLmLYX3qIttek-o",
  imageAlt:
    "Supervisor keselamatan kerja memeriksa forklift di gudang",
  keywords: "k3 forklift inspeksi pre shift keselamatan gudang",
  href: "#",
  featured: true,
};
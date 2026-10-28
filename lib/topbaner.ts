const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const BANNERS_API = `${PAYLOAD_URL}/api/topbanners?depth=1&limit=10&sort=order`;

export type PayloadImage = {
  url?: string;
  filename?: string;
  alt?: string;
};

export type Banner = {
  id: string | number;
  title: string;
  image: string | PayloadImage;
  alt: string;
  description?: string;
  order?: number;
  isActive?: boolean;
};

type PayloadResponse = {
  docs?: Banner[];
  totalDocs?: number;
};

export function getBannerImageUrl(
  image: string | PayloadImage | null | undefined
): string {
  const imageUrl = typeof image === "string" ? image : image?.url;

  if (!imageUrl) return "";

  if (/^https?:\/\//i.test(imageUrl)) {
    return imageUrl;
  }

  return `${PAYLOAD_URL}/${imageUrl.replace(/^\/+/, "")}`;
}

export async function getTopBanners(
  signal?: AbortSignal
): Promise<Banner[]> {
  const response = await fetch(BANNERS_API, {
    signal,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Gagal mengambil data banner dari Payload CMS");
  }

  const data: PayloadResponse = await response.json();

  return (data.docs || [])
    .filter((banner) => banner.isActive !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

const BANNERS_API = `${PAYLOAD_URL}/api/banners`;

export type HeroSlide = {
  id: string | number;
  image: string | null;
  alt: string;
  icon: string;
  title: string;
  description: string;
};

type PayloadImage = {
  url?: string | null;
  alt?: string | null;
};

type PayloadBanner = {
  id: string | number;
  image?: string | number | PayloadImage | null;
  alt?: string | null;
  icon?: string | null;
  title?: string | null;
  description?: string | null;
};

type PayloadResponse = {
  docs?: PayloadBanner[];
};

function getImageUrl(
  image: PayloadBanner["image"]
): string | null {
  if (!image || typeof image !== "object") {
    return null;
  }

  const url = image.url;

  if (!url) {
    return null;
  }

  // URL gambar sudah lengkap
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  // URL gambar relatif terhadap server Payload CMS
  return `${PAYLOAD_URL}/${url.replace(/^\/+/, "")}`;
}

export async function getHeroSlides(
  signal?: AbortSignal
): Promise<HeroSlide[]> {
  const response = await fetch(
    `${BANNERS_API}?where[isActive][equals]=true&sort=order&limit=20&depth=1`,
    {
      signal,
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Gagal mengambil banner dari Payload CMS: ${response.status}`
    );
  }

  const result: PayloadResponse = await response.json();

  return (result.docs ?? [])
    .map((banner): HeroSlide => {
      const imageUrl = getImageUrl(banner.image);

      const imageAlt =
        typeof banner.image === "object" && banner.image !== null
          ? banner.image.alt
          : null;

      return {
        id: banner.id,
        image: imageUrl,
        alt: banner.alt || imageAlt || banner.title || "",
        icon: banner.icon || "image",
        title: banner.title || "",
        description: banner.description || "",
      };
    })
    .filter(
      (slide) => Boolean(slide.image && slide.title)
    );
}

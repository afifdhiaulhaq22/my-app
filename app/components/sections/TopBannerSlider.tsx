"use client";

import { useEffect, useState } from "react";

const banners = [
  {
    image: 
      "https://lh3.googleusercontent.com/aida/AEtjO1WcteIXrKgWnilIohEEGxfAAKjibZRwDrB1KwVbGLe7GKZu7R7G9Dv8bmRnqVTwXVA4laQUjjpHVCBq7BSLep17gk9AuihsxaSmo06OX0u8N9MYBGdi_MXiF1WCFL3a2za8pAN2wvxX6b7KpobzoCOv-Ns2WsiLknkyr4H6DN4zpqr8zvffAv2kzWXaOvO5Vag0o3s1fDEnK7y9nKs-ittSa6Ht-fZDNNWjbHEptVcTXnD4lQQlOSZm0w",
    alt: "Forklift industri PT KEI HAI",
  },
  {
    image: 
      "https://lh3.googleusercontent.com/aida/AEtjO1VQry0B9MxNJX9UX2cl-qbyWSv18mgvVFOyiQf1f1bqMZWw4PMnFPcIyOqJ12wSqQXP4hZnG15PNZKERMXMs5JoUiioxuoPcXc32YFTS_fM-8WEasJRWW-3QTEuv642JQV8DkfaGXKA0N1PMJNqUSm6Qoq18f1Gyr6MegnXVLD3RSCAs9oQuvZfW77wdC54VpKySyvYt9PLnfiguUVRZLLQNHObwfxftOSTwC-506J8lD9X1GQYl2wFaLI",
    alt: "Rental forklift PT KEI HAI",
  },
  {
    image: 
      "https://lh3.googleusercontent.com/aida/AEtjO1UooZNYT29Qz6O1bkT3JwPWL58M2QVeRjRv3jjI5upYORYbGrfU0Sbm6k_GnVL31n6msmSVVfUak5xfR2vQ0QC0-r7eMW9HpZoRF1o5M59q8kGeHBw1YHCRYpxSAx9ZabitwiLmVN0bweWdaVhasCa93BxcKm0NeqOiisrMj3gaX08jtCeyjk1XHdrTZ2CPd4Ng9PLgb9M2US5aExed0aWeNIKK6vsa5vAMTVE9tkEvRYBcfjKRx0OSBA",
    alt: "Service forklift PT KEI HAI",
  },
];

export default function TopBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0F2D59]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner */}
      <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]">
        {banners.map((banner, index) => (
          <div
            key={banner.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Banner sebelumnya"
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#D92525] sm:left-6 md:left-8 md:h-12 md:w-12"
        >
          <span className="text-xl">←</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Banner berikutnya"
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#D92525] sm:right-6 md:right-8 md:h-12 md:w-12"
        >
          <span className="text-xl">→</span>
        </button>

        {/* Pagination */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {banners.map((banner, index) => (
            <button
              key={banner.image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Buka banner ${index + 1}`}
              aria-current={index === current}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-9 bg-[#D92525]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

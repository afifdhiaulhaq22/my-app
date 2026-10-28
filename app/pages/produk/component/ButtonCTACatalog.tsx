"use client";

import { useEffect, useState } from "react";

type DataPerusahaan = {
  nomorSalesWA?: string;
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/$/, "");

export default function ButtonCTACatalog() {
  const [nomorSalesWA, setNomorSalesWA] = useState("");

  useEffect(() => {
    async function fetchPerusahaan() {
      try {
        const response = await fetch(
          `${PAYLOAD_URL}/api/globals/perusahaan`
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil nomor WhatsApp sales");
        }

        const data: DataPerusahaan = await response.json();

        setNomorSalesWA(
          (data.nomorSalesWA ?? "").replace(/\D/g, "")
        );
      } catch (error) {
        console.error("Gagal mengambil data perusahaan:", error);
      }
    }

    fetchPerusahaan();
  }, []);

  if (!nomorSalesWA) return null;

  return (
    <a
      href={`https://wa.me/${nomorSalesWA}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex w-full items-center justify-center gap-2 rounded bg-secondary px-3 py-2 text-sm font-semibold text-on-secondary shadow-sm transition-all hover:bg-secondary-container"
    >
      <span className="material-symbols-outlined text-[18px]">
        chat
      </span>
            Hubungi via WhatsApp
    </a>
  );
}
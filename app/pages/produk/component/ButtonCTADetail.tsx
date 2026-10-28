"use client";

import { useEffect, useState } from "react";

type DataPerusahaan = {
  nomorSalesWA?: string;
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/$/, "");

export default function ButtonCTADetail() {
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
    <div className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
        <a
        href={`https://wa.me/${nomorSalesWA}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-lg bg-[#075E54] px-4 py-3.5 text-center font-label-lg text-white hover:bg-[#065f46]"
        >
        <span className="material-symbols-outlined shrink-0">
            chat
        </span>
        <span>Konsultasi WhatsApp</span>
        </a>
        <a
        href="/pages/perusahaan/hubungi-kami"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3.5 text-center font-label-lg text-white hover:bg-[#065f46]"
        >
        <span className="material-symbols-outlined shrink-0">
            chat
        </span>
        <span>Hubungi Kami / Minta Penawaran</span>
        </a>
    </div>
  );
}
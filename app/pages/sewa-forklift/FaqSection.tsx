"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah tersedia berbagai jenis forklift untuk disewa?",
    answer:
      "Ya, kami menyediakan pilihan forklift tipe Diesel, Elektrik, dan LPG/Gas. Pilihan unit disesuaikan dengan tipe forklift yang tersedia pada jadwal sewa dan kebutuhan operasional pelanggan.",
  },
  {
    question: "Bagaimana cara menentukan forklift yang sesuai untuk fasilitas kami?",
    answer:
      "Pemilihan dapat mempertimbangkan jenis pekerjaan, beban tonase barang, ketinggian angkat mast, kondisi area kerja, serta ketersediaan tipe unit.",
  },
  {
    question: "Berapa lama periode sewa forklift yang tersedia?",
    answer:
      "Periode sewa dapat disesuaikan dengan kebutuhan dan kesepakatan layanan, mulai dari harian, mingguan, bulanan, hingga kontrak tahunan.",
  },
  {
    question: "Apakah forklift dapat digunakan untuk kebutuhan industri berat?",
    answer:
      "Forklift dapat digunakan untuk berbagai aktivitas material handling sesuai kapasitas nominal unit dan ketentuan operasional yang berlaku.",
  },
  {
    question: "Apakah tersedia dukungan servis dan suku cadang selama masa sewa?",
    answer:
      "Dukungan pemeliharaan preventif, servis berkala, dan suku cadang dapat dikoordinasikan sesuai klausul perjanjian layanan sewa.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi harga sewa forklift?",
    answer:
      "Tarif disesuaikan dengan tipe unit, kapasitas, durasi sewa, lokasi pengantaran, dan cakupan servis. Hubungi tim PT. KEI HAI untuk mendapatkan penawaran.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <span className="text-xs text-secondary uppercase tracking-widest">
            INFORMASI SEWA LENGKAP
          </span>

          <h2 className="text-3xl lg:text-4xl text-primary font-bold mt-2">
            Pertanyaan Umum (FAQ)
          </h2>

          <p className="text-on-surface-variant mt-3">
            Jawaban atas hal-hal yang sering ditanyakan seputar layanan sewa
            forklift PT. KEI HAI.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-surface-container-low shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-primary font-bold"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`material-symbols-outlined transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-on-surface-variant">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

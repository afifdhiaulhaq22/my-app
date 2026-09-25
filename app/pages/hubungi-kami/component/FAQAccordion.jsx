"use client";

import { useState } from "react";

const faqs = [
  {
    icon: "timer",
    question:
      "Berapa lama tim PT. KEI HAI merespons permintaan penawaran (RFQ)?",
    answer:
      "Tim Sales Engineer kami merespons dalam waktu 1x24 jam kerja untuk proposal formal komprehensif, atau respon cepat untuk pengecekan ketersediaan stok sewa unit dan suku cadang melalui WhatsApp resmi.",
  },
  {
    icon: "engineering",
    question:
      "Apakah PT. KEI HAI melayani survei lapangan atau inspeksi unit ke pabrik?",
    answer:
      "Ya, tim teknisi dapat membantu melakukan inspeksi kebutuhan operasional seperti kapasitas forklift, ketinggian mast, radius putar lorong gudang, serta evaluasi armada yang sudah tersedia.",
  },
  {
    icon: "quick_reference",
    question:
      "Bagaimana prosedur pemesanan sewa unit atau suku cadang darurat?",
    answer:
      "Untuk kebutuhan darurat, Anda dapat menghubungi WhatsApp resmi kami. Sertakan foto unit, nomor seri, atau informasi suku cadang yang dibutuhkan agar tim dapat melakukan verifikasi kebutuhan.",
  },
  {
    icon: "local_shipping",
    question:
      "Apakah melayani pengiriman ke luar kawasan Jabodetabek?",
    answer:
      "PT. KEI HAI melayani pengadaan unit, kontrak rental korporat, serta distribusi suku cadang ke berbagai wilayah Indonesia sesuai kebutuhan dan cakupan layanan.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFaq(index) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <section className="py-space-xl">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center space-y-2 mb-10">
          <span className="font-label-technical text-secondary uppercase font-extrabold tracking-wider">
            INFORMASI KONTRAK & LAYANAN
          </span>

          <h2 className="font-headline-lg text-primary font-bold tracking-tight">
            Pertanyaan Seputar Layanan & Pemesanan
          </h2>

          <p className="font-body-md text-on-surface-variant">
            Ketahui prosedur operasional dan standarisasi layanan
            PT. KEI HAI sebelum melakukan permohonan penawaran.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-title-md text-primary font-bold hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      {faq.icon}
                    </span>

                    <span>{faq.question}</span>
                  </div>

                  <span
                    className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-on-surface-variant font-body-md leading-relaxed">
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

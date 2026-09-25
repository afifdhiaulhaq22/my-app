"use client";

import { FormEvent } from "react";
import { Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function QuotationSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(
      "Terima kasih. Tim Sales Engineer PT. KEI HAI akan segera menghubungi Anda."
    );
  };

  return (
    <section
      id="quotation-form"
      className="w-full bg-primary text-on-primary py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-tertiary-container rounded text-primary text-xs font-bold uppercase tracking-wider">
              Hubungi Sales Engineer
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Butuh Forklift untuk Mendukung Operasional Anda?
              </h2>

              <p className="text-base lg:text-lg leading-7 text-on-primary-container max-w-xl">
                Hubungi tim PT. KEI HAI untuk mendiskusikan kebutuhan sewa
                forklift, pilihan unit yang tersedia, dan kebutuhan operasional
                fasilitas industri Anda.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:02189835500"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg font-semibold transition-colors"
              >
                <Phone size={18} />
                (021) 8983-5500
              </a>

              <a
                href="https://wa.me/628119208000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-container hover:bg-tertiary-container text-on-primary rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                "Konsultasi Kebutuhan Beban Kerja",
                "Rekomendasi Unit Terarah",
                "Dukungan Armada Terawat",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-on-primary-container"
                >
                  <CheckCircle2
                    size={16}
                    className="text-secondary-fixed"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary">
                Formulir Rencana Sewa
              </h3>

              <p className="text-sm text-on-surface-variant mt-1">
                Lengkapi data untuk menerima penawaran unit sewa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="company_name"
                  className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                >
                  Nama Perusahaan / PT
                </label>

                <input
                  id="company_name"
                  name="company_name"
                  type="text"
                  placeholder="Contoh: PT Surya Logistik Prima"
                  required
                  className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact_name"
                    className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                  >
                    Nama PIC
                  </label>

                  <input
                    id="contact_name"
                    name="contact_name"
                    type="text"
                    placeholder="Nama Anda"
                    required
                    className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone_number"
                    className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                  >
                    No. Telp / WhatsApp
                  </label>

                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    placeholder="0812xxxxxxx"
                    required
                    className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="forklift_type"
                    className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                  >
                    Tipe Forklift
                  </label>

                  <select
                    id="forklift_type"
                    name="forklift_type"
                    className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="diesel">
                      Diesel (2.5 - 5.0 Ton)
                    </option>
                    <option value="electric">
                      Electric (1.5 - 3.5 Ton)
                    </option>
                    <option value="lpg">
                      LPG / Gas (2.0 - 3.5 Ton)
                    </option>
                    <option value="custom">
                      Rekomendasikan untuk Saya
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="duration"
                    className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                  >
                    Estimasi Periode
                  </label>

                  <select
                    id="duration"
                    name="duration"
                    className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="bulanan">Sewa Bulanan</option>
                    <option value="harian">Sewa Harian / Mingguan</option>
                    <option value="tahunan">
                      Kontrak Tahunan (Long Term)
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="location"
                  className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                >
                  Lokasi Operasional Fasilitas
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Contoh: Kawasan Industri GIIC Cikarang"
                  required
                  className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-1 py-3 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Kirim Permintaan Sewa
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

type InputProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  icon: string;
  type?: string;
  required?: boolean;
};

type ContactResponse = {
  success: boolean;
  message?: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setSubmitted(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      corporateEmail: String(
        formData.get("corporateEmail") ?? ""
      ),
      phoneNum: String(formData.get("phoneNum") ?? ""),
      needCategory: String(
        formData.get("needCategory") ?? ""
      ),
      facilityLocation: String(
        formData.get("facilityLocation") ?? ""
      ),
      messageDetail: String(
        formData.get("messageDetail") ?? ""
      ),
      catalogConsent:
        formData.get("catalogConsent") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: ContactResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Gagal mengirim permintaan."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan. Silakan coba kembali."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-md">
      <div className="space-y-2 mb-6">
        <h2 className="font-headline-md text-primary font-bold">
          Kirim Pesan & Permohonan Penawaran
        </h2>

        <p className="font-body-md text-on-surface-variant">
          Lengkapi formulir di bawah ini. Tim Sales Engineer PT. KEI HAI
          akan menghubungi Anda dalam waktu maksimal 1x24 jam kerja.
        </p>
      </div>

      {/* Pesan berhasil */}
      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-surface-container text-primary">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[24px] text-secondary">
              check_circle
            </span>

            <div className="space-y-1">
              <h4 className="font-title-md font-bold">
                Pesan Berhasil Dikirim!
              </h4>

              <p className="font-body-sm text-on-surface-variant">
                Terima kasih telah menghubungi PT. KEI HAI.
                Permintaan Anda telah diterima dan tim kami
                akan segera menghubungi Anda.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pesan error */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[24px]">
              error
            </span>

            <div className="space-y-1">
              <h4 className="font-title-md font-bold">
                Pesan Gagal Dikirim
              </h4>

              <p className="font-body-sm">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="fullName"
            name="fullName"
            label="Nama Lengkap"
            placeholder="e.g. Hendra Gunawan"
            icon="person"
            required
          />

          <Input
            id="companyName"
            name="companyName"
            label="Nama Perusahaan / PT"
            placeholder="e.g. PT. Sumber Logistik Mandiri"
            icon="corporate_fare"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="corporateEmail"
            name="corporateEmail"
            label="Alamat Email Perusahaan"
            placeholder="procurement@perusahaan.com"
            icon="mail"
            type="email"
            required
          />

          <Input
            id="phoneNum"
            name="phoneNum"
            label="Nomor Telepon / WhatsApp"
            placeholder="+62 812 3456 7890"
            icon="call"
            type="tel"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="needCategory"
              className="block font-label-md text-primary font-semibold"
            >
              Kategori Kebutuhan{" "}
              <span className="text-secondary">*</span>
            </label>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                category
              </span>

              <select
                id="needCategory"
                name="needCategory"
                required
                defaultValue=""
                className="w-full h-11 pl-10 pr-9 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Pilih Kategori Kebutuhan...
                </option>

                <option value="unit">
                  Unit Forklift (Diesel / Electric / LPG)
                </option>

                <option value="rental">
                  Sewa Forklift (Rental)
                </option>

                <option value="parts">
                  Suku Cadang (Spare Parts OEM)
                </option>

                <option value="battery">
                  Baterai Traksi & Charger
                </option>

                <option value="service">
                  Servis, Maintenance & Lubrikasi
                </option>

                <option value="consultation">
                  Konsultasi Teknis & K3
                </option>

                <option value="other">
                  Lainnya
                </option>
              </select>

              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          <Input
            id="facilityLocation"
            name="facilityLocation"
            label="Lokasi Pabrik / Gudang / Fasilitas"
            placeholder="e.g. MM2100 Cikarang, KIIC Karawang"
            icon="storefront"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="messageDetail"
            className="block font-label-md text-primary font-semibold"
          >
            Pesan atau Rincian Kebutuhan{" "}
            <span className="text-secondary">*</span>
          </label>

          <textarea
            id="messageDetail"
            name="messageDetail"
            required
            rows={4}
            placeholder="Jelaskan spesifikasi muatan, kapasitas tonase, durasi sewa, kebutuhan suku cadang, atau kendala unit forklift Anda..."
            className="w-full p-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all"
          />
        </div>

        <div className="flex items-center gap-3 pt-1">
          <input
            id="catalogConsent"
            name="catalogConsent"
            type="checkbox"
            className="w-4 h-4 rounded bg-surface-container-low text-primary accent-primary cursor-pointer"
          />

          <label
            htmlFor="catalogConsent"
            className="font-body-sm text-on-surface cursor-pointer select-none"
          >
            Saya ingin dikirimkan katalog resmi lini produk PT. KEI HAI
            ke email.
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-lg bg-secondary text-on-secondary font-label-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary-container transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-[20px]">
              {loading ? "progress_activity" : "send"}
            </span>

            <span>
              {loading
                ? "Mengirim..."
                : "Kirim Pesan & Permohonan Penawaran"}
            </span>
          </button>
        </div>

        <div className="flex items-start gap-2.5 pt-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">
            lock
          </span>

          <p className="font-body-sm leading-snug">
            Data perusahaan Anda dijamin kerahasiaannya dan hanya
            digunakan untuk keperluan komunikasi penawaran resmi
            PT. KEI HAI.
          </p>
        </div>
      </form>
    </div>
  );
}

function Input({
  id,
  name,
  label,
  placeholder,
  icon,
  type = "text",
  required = false,
}: InputProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block font-label-md text-primary font-semibold"
      >
        {label}

        {required && (
          <span className="text-secondary"> *</span>
        )}
      </label>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
          {icon}
        </span>

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all"
        />
      </div>
    </div>
  );
}

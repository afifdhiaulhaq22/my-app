
import { NextRequest, NextResponse } from "next/server";

const PAYLOAD_URL = (
  process.env.PAYLOAD_API_URL ||
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  "http://localhost:3001"
).replace(/\/$/, "");

const ALLOWED_CATEGORIES = [
  "unit",
  "rental",
  "parts",
  "battery",
  "service",
  "consultation",
  "other",
];

export async function POST(request: NextRequest) {
  try {
    // Membaca body request
    const body = await request.json();

    // Pastikan body berupa object
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format data tidak valid.",
        },
        { status: 400 }
      );
    }

    // Validasi field wajib
    const requiredFields = [
      "fullName",
      "companyName",
      "corporateEmail",
      "phoneNum",
      "needCategory",
      "messageDetail",
    ];

    for (const field of requiredFields) {
      if (
        typeof body[field] !== "string" ||
        !body[field].trim()
      ) {
        return NextResponse.json(
          {
            success: false,
            message: `${field} wajib diisi.`,
          },
          { status: 400 }
        );
      }
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.corporateEmail.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Format email tidak valid.",
        },
        { status: 400 }
      );
    }

    // Validasi kategori kebutuhan
    if (!ALLOWED_CATEGORIES.includes(body.needCategory)) {
      return NextResponse.json(
        {
          success: false,
          message: "Kategori kebutuhan tidak valid.",
        },
        { status: 400 }
      );
    }

    // Data yang akan disimpan ke Payload CMS
    const payloadData = {
      fullName: body.fullName.trim(),
      companyName: body.companyName.trim(),
      corporateEmail: body.corporateEmail.trim(),
      phoneNum: body.phoneNum.trim(),
      needCategory: body.needCategory,
      facilityLocation:
        typeof body.facilityLocation === "string"
          ? body.facilityLocation.trim()
          : "",
      messageDetail: body.messageDetail.trim(),
      catalogConsent: body.catalogConsent === true,
      status: "baru",
    };

    // Kirim data ke Payload CMS
    const response = await fetch(
      `${PAYLOAD_URL}/api/permintaan-penawaran`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadData),
        cache: "no-store",
      }
    );

    // Membaca response Payload CMS
    const result = await response.json();

    // Jika Payload gagal menyimpan
    if (!response.ok) {
      console.error("Payload CMS error:", result);

      return NextResponse.json(
        {
          success: false,
          message:
            "Permintaan belum berhasil disimpan. Silakan coba kembali.",
        },
        { status: 502 }
      );
    }

    // Jika berhasil
    return NextResponse.json(
      {
        success: true,
        message:
          "Pesan dan permohonan penawaran berhasil dikirim.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Terjadi kesalahan pada server. Silakan coba kembali.",
      },
      { status: 500 }
    );
  }
}

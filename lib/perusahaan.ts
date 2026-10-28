
const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'
).replace(/\/$/, '')

export type DataPerusahaan = {
  nomorPerusahaan?: string
  nomorSalesWA?: string
  email?: string
  alamat?: string
  koordinat?: {
    latitude?: string
    longitude?: string
  }
  linkGoogleMaps?: string
}

export async function getDataPerusahaan(): Promise<DataPerusahaan | null> {
  try {
    const response = await fetch(
      `${PAYLOAD_URL}/api/globals/perusahaan`,
      {
        next: { revalidate: 300 },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    return (await response.json()) as DataPerusahaan
  } catch (error) {
    console.error('Gagal mengambil data perusahaan:', error)
    return null
  }
}

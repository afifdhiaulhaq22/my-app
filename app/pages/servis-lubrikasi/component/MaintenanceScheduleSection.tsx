import SectionHeader from "./SectionHeader";
import MaintenanceCard from "./MaintenanceCard";

export default function MaintenanceScheduleSection() {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="event_note"
          eyebrow="Perencanaan Terstruktur"
          title="Jadwal Layanan Perawatan"
          description="Perawatan berkala membantu menjaga kondisi forklift tetap siap mendukung aktivitas operasional. Interval waktu disesuaikan dengan rekomendasi unit, intensitas kerja, dan lingkungan pabrik."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <MaintenanceCard
            stage="Tahap 1"
            label="Pre-Shift"
            title="Pemeriksaan Harian"
            interval="Sebelum unit dioperasikan"
            technician="Operator forklift / Supervisor shift"
            items={[
              "Level oli mesin & hidrolik",
              "Kondisi tekanan & keausan fisik ban",
              "Fungsi rem utama, handbrake & klakson",
              "Level air aki & terminal kabel",
              "Pengecekan kebocoran fluida visual",
            ]}
          />

          <MaintenanceCard
            stage="Tahap 2"
            label="Scheduled PM"
            title="Perawatan Berkala (Periodic)"
            interval="Sesuaikan rekomendasi unit & jam kerja"
            technician="Teknisi spesialis PT. KEI HAI"
            featured
            items={[
              "Penggantian oli mesin & filter",
              "Pelumasan nipple grease chassis & mast",
              "Pengecekan ketegangan & alignment rantai",
              "Pemeriksaan sistem pengereman",
              "Pemeriksaan alternator dan V-belt fan",
            ]}
          />

          <MaintenanceCard
            stage="Tahap 3"
            label="Comprehensive"
            title="Pemeriksaan Menyeluruh"
            interval="Tahunan / evaluasi intensif berkala"
            technician="Teknisi senior PT. KEI HAI"
            items={[
              "Uji tekanan pompa hidrolik & relief valve",
              "Inspeksi fork tine, hanger & mast",
              "Pemeriksaan sistem pendingin radiator",
              "Uji beban fungsional dan keselamatan K3",
              "Pemeriksaan transmisi & differential axle",
            ]}
          />
        </div>

        <div className="bg-primary-fixed/30 p-4 rounded-xl flex items-start gap-3">
          <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
            lightbulb
          </span>

          <p className="font-body-sm text-body-sm text-on-surface">
            <strong className="font-semibold text-primary">
              Panduan Lapangan:
            </strong>{" "}
            Jadwal perawatan dipengaruhi oleh jenis forklift, intensitas jam
            kerja, kondisi lingkungan, serta rekomendasi manual unit.
          </p>
        </div>
      </div>
    </section>
  );
}

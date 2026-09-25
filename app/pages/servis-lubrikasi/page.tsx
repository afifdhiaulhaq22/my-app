export default function ServisDanLubrikasiPage() {
  return (
    <main className="w-full pt-[120px] bg-surface">
      <div className="flex flex-col w-full">
        {/* BREADCRUMB */}
        <section className="w-full bg-surface-container-lowest shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
            >
              <a
                className="hover:text-primary transition-colors"
                href="/"
              >
                Beranda
              </a>

              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_right
              </span>

              <a
                className="hover:text-primary transition-colors"
                href="/layanan"
              >
                Layanan
              </a>

              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_right
              </span>

              <span className="text-primary font-semibold">
                Servis dan Lubrikasi Forklift
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded font-label-technical text-label-technical text-primary font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[13px] text-secondary">
                  verified_user
                </span>
                Layanan Perawatan &amp; Lubrikasi Industri
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed/40 rounded font-label-technical text-label-technical text-on-primary-fixed font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[13px] text-primary">
                  location_on
                </span>
                Dukungan Armada Gudang &amp; Pabrik MM2100
              </span>
            </div>
          </div>
        </section>

        {/* HERO */}
        <section className="w-full py-12 lg:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/50 text-primary rounded font-label-technical text-label-technical tracking-wider uppercase font-bold mb-4">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Solusi Perawatan &amp; Teknik Material Handling
                </div>

                <h1 className="font-display text-display text-primary leading-none tracking-tight mb-5">
                  Servis dan Lubrikasi{" "}
                  <span className="text-secondary">Forklift</span>
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Menjaga performa forklift tetap optimal melalui layanan servis
                  dan lubrikasi yang terarah untuk mendukung kelancaran
                  operasional dan keandalan armada industri Anda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
                  <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                    <span className="block font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant mb-1">
                      Dukungan Teknis
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Siap Terjadwal &amp; On-Call
                    </span>
                  </div>

                  <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                    <span className="block font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant mb-1">
                      Pelumas &amp; Part Sesuai
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Grade Industri Terstandar
                    </span>
                  </div>

                  <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                    <span className="block font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant mb-1">
                      Cakupan Area
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Kawasan &amp; Gudang MM2100
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200"
                    href="#kontak-servis"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      build
                    </span>
                    Hubungi Kami
                  </a>

                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200"
                    href="https://wa.me/628119208000"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      chat
                    </span>
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>

              {/* HERO VISUAL TANPA IMAGE */}
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-primary min-h-[360px] lg:min-h-[430px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-container" />

                  <div className="relative z-10 p-8 lg:p-12 text-center text-on-primary">
                    <div className="mx-auto w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg">
                      <span className="material-symbols-outlined text-[52px] text-on-secondary">
                        engineering
                      </span>
                    </div>

                    <span className="block font-label-technical text-label-technical uppercase tracking-widest text-secondary-fixed mb-3">
                      PT. KEI HAI
                    </span>

                    <h2 className="font-headline-md text-headline-md font-bold mb-4">
                      Servis &amp; Lubrikasi Forklift
                    </h2>

                    <p className="font-body-md text-body-md text-on-primary-container max-w-md mx-auto leading-relaxed">
                      Dukungan teknis untuk forklift Diesel, Elektrik
                      Counterbalance, Reach Truck, dan unit LPG.
                    </p>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-sm p-4 rounded-xl shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          verified
                        </span>
                      </div>

                      <div>
                        <span className="block font-title-md text-title-md text-primary font-bold">
                          Standar Keselamatan &amp; Perawatan Terarah
                        </span>
                        <span className="block font-body-sm text-body-sm text-on-surface-variant">
                          Pemeriksaan, servis, lubrikasi, dan dukungan teknis
                          untuk kebutuhan material handling.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA PENTING */}
        <section className="w-full py-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-1.5 font-label-technical text-label-technical text-secondary font-bold tracking-wider uppercase mb-2">
                <span className="material-symbols-outlined text-[14px]">
                  info
                </span>
                Urgensi Perawatan Industri
              </div>

              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
                Mengapa Servis dan Lubrikasi Itu Penting?
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Forklift merupakan bagian penting dari aktivitas material
                handling. Penggunaan secara rutin membutuhkan pemeriksaan,
                perawatan, dan lubrikasi yang tepat agar komponen tetap bekerja
                sesuai fungsinya dan potensi gangguan operasional dapat
                diminimalkan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "speed",
                  title: "Menjaga Performa Unit",
                  text: "Perawatan berkala membantu menjaga forklift tetap bekerja secara optimal sesuai kebutuhan operasional harian di gudang dan lini produksi.",
                  label: "Efisiensi Output",
                  color: "bg-primary",
                },
                {
                  icon: "troubleshoot",
                  title: "Mengurangi Risiko Gangguan",
                  text: "Pemeriksaan rutin membantu mengidentifikasi kondisi komponen sebelum berkembang menjadi gangguan atau kendala operasional yang lebih besar.",
                  label: "Minimalkan Downtime",
                  color: "bg-secondary",
                },
                {
                  icon: "water_drop",
                  title: "Mendukung Umur Komponen",
                  text: "Lubrikasi yang sesuai membantu menjaga komponen bergerak bekerja dengan baik dan mengurangi keausan dini akibat beban kerja berat.",
                  label: "Proteksi Gesekan",
                  color: "bg-primary-container",
                },
                {
                  icon: "health_and_safety",
                  title: "Mendukung Keselamatan",
                  text: "Pemeriksaan kondisi forklift secara terarah membantu memastikan sistem rem, kemudi, hidrolik, dan mast berada dalam kondisi operasional yang sesuai.",
                  label: "K3 Terlindungi",
                  color: "bg-tertiary-container",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-lg ${item.color} text-on-primary flex items-center justify-center mb-5`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {item.icon}
                      </span>
                    </div>

                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <span className="font-label-technical text-label-technical text-outline tracking-wider uppercase mt-6 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LUBRIKASI */}
        <section className="w-full py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon="opacity"
              eyebrow="Preventive Lubrication"
              title="Layanan Lubrikasi Forklift"
              description="Lubrikasi yang tepat membantu menjaga komponen bergerak bekerja dengan baik serta mendukung keandalan forklift dalam aktivitas operasional sehari-hari."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                [
                  "search_check",
                  "Pemeriksaan Titik Lubrikasi",
                  "Pengecekan nipple grease, bushing tiang mast, steer knuckle, bearing roda, dan joint pergerakan mekanis untuk memastikan kelancaran artikulasi.",
                ],
                [
                  "oil_barrel",
                  "Pemberian Pelumas Sesuai Kebutuhan",
                  "Aplikasi gemuk (grease) tahan tekanan tinggi dan penggantian pelumas fluida sesuai spesifikasi beban kerja komponen dan kapasitas forklift.",
                ],
                [
                  "leak_remove",
                  "Pemeriksaan Kondisi Komponen Terkait",
                  "Pemeriksaan seal karet, kebersihan filter oli, dan deteksi potensi kontaminasi atau kebocoran pelumas.",
                ],
                [
                  "calendar_month",
                  "Jadwal Lubrikasi Berkala",
                  "Penyusunan jadwal interval pelumasan yang terkoordinasi dengan rotasi shift dan intensitas pemakaian forklift.",
                ],
                [
                  "receipt_long",
                  "Pencatatan Aktivitas Perawatan",
                  "Pencatatan riwayat maintenance log sheet untuk setiap unit guna memudahkan tracking kondisi komponen dan interval perawatan.",
                ],
              ].map(([icon, title, text], index) => (
                <div
                  key={title}
                  className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                    index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        {icon}
                      </span>
                    </div>

                    <span className="font-label-technical text-label-technical text-secondary font-bold uppercase tracking-wider">
                      Point {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                    {title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-surface-container p-4 rounded-xl flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                notification_important
              </span>

              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="text-primary font-semibold">
                  Catatan Penting:
                </strong>{" "}
                Pemilihan pelumas harus disesuaikan dengan spesifikasi tipe
                forklift, beban angkut, suhu lingkungan kerja, dan anjuran
                pabrikan masing-masing unit.
              </p>
            </div>
          </div>
        </section>

        {/* SERVIS */}
        <section className="w-full py-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon="home_repair_service"
              eyebrow="Kapabilitas Layanan"
              title="Layanan Servis Forklift"
              description="Dukungan perawatan terstruktur untuk memastikan kesiapan armada material handling di fasilitas industri dan gudang logistik Anda."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                [
                  "checklist",
                  "Pemeriksaan Unit (General Inspection)",
                  "Pemeriksaan kondisi umum forklift mencakup kelistrikan, radiator, rem, fungsi hidrolik, tiang mast, serta mekanisme kemudi.",
                  "Multi-Point Diagnostic",
                ],
                [
                  "update",
                  "Preventive Maintenance",
                  "Perawatan berkala terencana untuk membantu menjaga kondisi unit, penggantian filter berkala, penyetelan dan pencegahan kendala teknis.",
                  "Jadwal Rutin Terencana",
                ],
                [
                  "handyman",
                  "Corrective Service",
                  "Penanganan ketika ditemukan kendala teknis, kebocoran sistem oli hidrolik, atau komponen aus yang memerlukan perbaikan.",
                  "Fast Trouble-Solving",
                ],
                [
                  "precision_manufacturing",
                  "Pemeriksaan Komponen Spesifik",
                  "Inspeksi komponen krusial seperti pompa hidrolik, silinder tilt/lift, motor traksi elektrik, alternator, dan sistem transmisi.",
                  "Inspeksi Komponen Kritis",
                ],
                [
                  "support_agent",
                  "Technical Support & Konsultasi",
                  "Dukungan teknis untuk troubleshooting, panduan operasional armada, dan rekomendasi langkah perbaikan.",
                  "Konsultasi Berpengalaman",
                ],
              ].map(([icon, title, text, label], index) => (
                <div
                  key={title}
                  className={`bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between ${
                    index === 3 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        index === 1
                          ? "bg-secondary"
                          : index === 3
                            ? "bg-tertiary-container"
                            : "bg-primary"
                      } text-on-primary flex items-center justify-center mb-4`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {icon}
                      </span>
                    </div>

                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {title}
                    </h3>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center gap-2 text-primary font-label-technical text-label-technical font-bold uppercase">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE SCHEDULE */}
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
                Jadwal perawatan dipengaruhi oleh jenis forklift, intensitas
                jam kerja, kondisi lingkungan, serta rekomendasi manual unit.
              </p>
            </div>
          </div>
        </section>

        {/* JENIS PELUMAS */}
        <section className="w-full py-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon="science"
              eyebrow="Panduan Fluida & Grease"
              title="Jenis Pelumas Forklift"
              description="Setiap komponen forklift memerlukan karakteristik pelumasan khusus guna menahan beban mekanis berat dan temperatur kerja yang berbeda."
            />

            <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-body-md border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-primary font-label-technical text-label-technical uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold">
                        Jenis Pelumas
                      </th>
                      <th className="py-4 px-6 font-bold">
                        Penggunaan Komponen
                      </th>
                      <th className="py-4 px-6 font-bold">
                        Keterangan Spesifikasi
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      [
                        "Industrial Grease",
                        "Bushing mast, knuckle steer axle, cross joint propeller shaft, dan bearing roda forklift.",
                        "Grade & konsistensi NLGI disesuaikan manual unit.",
                      ],
                      [
                        "Hydraulic Oil",
                        "Lift cylinder, tilt cylinder, power steering, dan attachment clamp.",
                        "Viskositas ISO VG disesuaikan spesifikasi pompa dan suhu operasional.",
                      ],
                      [
                        "Engine Oil",
                        "Sistem pelumasan mesin forklift diesel maupun gasoline/LPG.",
                        "SAE & API Service disesuaikan model mesin dan jam kerja.",
                      ],
                      [
                        "Transmission & Torque Converter Oil",
                        "Automatic powershift, clutch pack, dan gearbox.",
                        "Spesifikasi fluida sesuai standar manufaktur transmisi.",
                      ],
                      [
                        "Differential & Gear Oil",
                        "Differential axle dan reduksi roda penggerak.",
                        "API GL dan viskositas disesuaikan kebutuhan beban.",
                      ],
                    ].map(([name, usage, specification], index) => (
                      <tr
                        key={name}
                        className={`${
                          index % 2 === 0
                            ? "bg-surface-container-lowest"
                            : "bg-surface-container-low/40"
                        } hover:bg-surface-container-low transition-colors`}
                      >
                        <td className="py-4 px-6 font-title-md text-title-md text-primary font-bold">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                index % 2 === 0
                                  ? "bg-secondary"
                                  : "bg-primary"
                              }`}
                            />
                            {name}
                          </div>
                        </td>

                        <td className="py-4 px-6 text-on-surface-variant">
                          {usage}
                        </td>

                        <td className="py-4 px-6 text-on-surface font-label-technical text-label-technical">
                          {specification}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-surface-container p-4 rounded-xl flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                warning
              </span>

              <p className="font-body-sm text-body-sm text-on-surface">
                <strong className="font-semibold text-primary">
                  Peringatan:
                </strong>{" "}
                Pemilihan pelumas harus selalu dikonfirmasi dengan buku
                pedoman operasional masing-masing unit forklift.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w-full py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon="alt_route"
              eyebrow="Alur Kerja Terstandar"
              title="Proses Pelayanan Servis"
              description="Langkah terarah dari konsultasi awal hingga unit siap beroperasi kembali dengan aman."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                [
                  "01",
                  "Konsultasi & Penjadwalan",
                  "Memahami kendala unit, lokasi, tipe forklift, dan jadwal servis.",
                  "forum",
                  "Koordinasi Awal",
                ],
                [
                  "02",
                  "Pemeriksaan di Lokasi",
                  "Teknisi melakukan inspeksi visual dan pengecekan teknis di fasilitas Anda.",
                  "pin_drop",
                  "On-Site Diagnostic",
                ],
                [
                  "03",
                  "Rekomendasi & Estimasi",
                  "Hasil pemeriksaan dirangkum dalam rekomendasi tindakan servis dan kebutuhan part.",
                  "request_quote",
                  "Transparansi Biaya",
                ],
                [
                  "04",
                  "Pengerjaan Servis & Lubrikasi",
                  "Pengerjaan dilakukan sesuai SOP dan kebutuhan teknis unit.",
                  "construction",
                  "Presisi Eksekusi",
                ],
                [
                  "05",
                  "Pemeriksaan Akhir & BAST",
                  "Pengujian fungsi sebelum unit diserahterimakan.",
                  "verified",
                  "Quality Approved",
                ],
              ].map(([number, title, text, icon, label]) => (
                <div
                  key={number}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between group hover:bg-surface-container-low transition-colors"
                >
                  <div>
                    <span className="font-display text-display text-primary/20 leading-none mb-3 block group-hover:text-secondary/40 transition-colors">
                      {number}
                    </span>

                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {title}
                    </h3>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {text}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 flex items-center gap-1.5 font-label-technical text-label-technical text-primary font-semibold uppercase">
                    <span className="material-symbols-outlined text-[14px]">
                      {icon}
                    </span>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEKNISI & PART */}
        <section className="w-full py-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              icon="hub"
              eyebrow="Dukungan Terpadu"
              title="Teknisi Berpengalaman & Kesiapan Suku Cadang"
              description="Sinergi antara kompetensi teknis di lapangan dan ketersediaan komponen pendukung perawatan unit forklift."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-8 rounded-2xl shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-on-primary rounded font-label-technical text-label-technical tracking-wider uppercase font-bold mb-4">
                  <span className="material-symbols-outlined text-[14px]">
                    badge
                  </span>
                  Field Engineering Crew
                </div>

                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
                  Dukungan Tim Teknisi PT. KEI HAI
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Tim teknis berfokus pada penanganan unit material handling,
                  mesin diesel, sistem hidrolik, elektrikal forklift baterai,
                  serta keselamatan kerja di area industri.
                </p>

                <ul className="space-y-3">
                  {[
                    "Penanganan beragam tipe unit forklift.",
                    "Peralatan diagnostik dan special tools.",
                    "Pendekatan sistematis yang mengutamakan K3.",
                    "Masukan preventif untuk operator dan supervisor.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[14px]">
                          done
                        </span>
                      </span>

                      <span className="font-body-md text-body-md text-on-surface">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontak-servis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all mt-8"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    support_agent
                  </span>
                  Diskusikan Kebutuhan Servis
                </a>
              </div>

              <div className="bg-surface-container-low p-8 rounded-2xl shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-on-secondary rounded font-label-technical text-label-technical tracking-wider uppercase font-bold mb-4">
                  <span className="material-symbols-outlined text-[14px]">
                    inventory_2
                  </span>
                  Genuine &amp; Heavy-Duty Parts
                </div>

                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
                  Ketersediaan Suku Cadang Berkualitas
                </h3>

                {/* Visual pengganti image */}
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-primary flex items-center justify-center">
                  <div className="text-center text-on-primary p-6">
                    <span className="material-symbols-outlined text-[64px] text-secondary-fixed mb-3">
                      inventory_2
                    </span>
                    <span className="block font-label-technical uppercase tracking-wider">
                      Forklift Parts
                    </span>
                    <span className="block font-body-sm text-on-primary-container mt-2">
                      Komponen maintenance &amp; repair
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Kelancaran servis didukung ketersediaan suku cadang yang
                  tepat untuk forklift Anda, mulai dari filter, komponen
                  hidrolik, brake system, seal kit, battery connector hingga
                  roda solid rubber.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Filter Oli & Udara",
                    "Komponen Hidrolik",
                    "Brake System",
                    "Seal Kit & Gasket",
                    "Battery Connector",
                    "Roda Solid Rubber",
                  ].map((part) => (
                    <span
                      key={part}
                      className="px-3 py-1 bg-surface-container-lowest text-primary rounded font-label-technical text-label-technical uppercase font-bold shadow-xs"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE */}
        <section className="w-full py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-label-technical text-label-technical text-secondary font-bold uppercase tracking-wider block mb-2">
                Nilai Tambah Layanan
              </span>

              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">
                Dukungan Perawatan untuk Operasional Anda
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Solusi terintegrasi yang berorientasi pada kesinambungan kerja
                armada industri Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                [
                  "route",
                  "Perawatan Terarah",
                  "Pendekatan terstruktur untuk menjaga keandalan komponen kerja.",
                ],
                [
                  "engineering",
                  "Dukungan Teknis",
                  "Diskusi teknis bersama tim berpengalaman di sektor forklift.",
                ],
                [
                  "history_edu",
                  "Pemeriksaan Berkala",
                  "Riwayat maintenance yang rapi, transparan, dan terukur.",
                ],
                [
                  "warehouse",
                  "Dukungan Suku Cadang",
                  "Akses komponen pendukung sesuai kebutuhan unit.",
                ],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="bg-surface-container-lowest p-6 rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      {icon}
                    </span>
                  </div>

                  <h4 className="font-title-md text-title-md text-primary font-bold mb-2">
                    {title}
                  </h4>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="w-full py-16 bg-primary text-on-primary"
          id="kontak-servis"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container rounded border border-outline/20 font-label-technical text-label-technical text-tertiary-fixed tracking-wider uppercase font-bold mb-6">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  support_agent
                </span>
                Konsultasi Perawatan &amp; Lubrikasi
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight mb-4">
                Butuh Servis atau Lubrikasi untuk Forklift Anda?
              </h2>

              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mb-8 leading-relaxed">
                Hubungi tim PT. KEI HAI untuk mendiskusikan kebutuhan servis
                berkala, pelumasan komponen, perbaikan teknis, dan dukungan
                suku cadang forklift Anda.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <a
                  href="tel:+628119208000"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    phone_in_talk
                  </span>
                  Hubungi Kami
                </a>

                <a
                  href="https://wa.me/628119208000"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-tertiary-container hover:bg-tertiary-container/80 text-on-primary font-label-lg text-label-lg rounded-lg border border-outline-variant/30 shadow-sm transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    chat
                  </span>
                  Tanyakan via WhatsApp
                </a>
              </div>

              <p className="font-label-technical text-label-technical text-on-primary-container uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  schedule
                </span>
                Respon cepat dalam waktu operasional kerja PT. KEI HAI • MM2100
                Cikarang Barat
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  icon,
  eyebrow,
  title,
  description,
}: {
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center gap-1.5 font-label-technical text-label-technical text-secondary font-bold tracking-wider uppercase mb-2">
        <span className="material-symbols-outlined text-[14px]">
          {icon}
        </span>
        {eyebrow}
      </div>

      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
        {title}
      </h2>

      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function MaintenanceCard({
  stage,
  label,
  title,
  interval,
  technician,
  items,
  featured = false,
}: {
  stage: string;
  label: string;
  title: string;
  interval: string;
  technician: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between ${
        featured ? "shadow-md relative" : "shadow-sm"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-secondary text-on-secondary px-3 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
          Rekomendasi Utama
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-1 rounded bg-primary-fixed/50 font-label-technical text-label-technical uppercase font-bold text-primary">
            {stage}
          </span>

          <span
            className={`font-label-technical text-label-technical uppercase ${
              featured
                ? "text-secondary font-bold"
                : "text-on-surface-variant"
            }`}
          >
            {label}
          </span>
        </div>

        <h3 className="font-title-md text-title-md text-primary font-bold mb-3">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="bg-surface-container-low p-3 rounded-lg">
            <span className="block font-label-technical text-label-technical text-outline uppercase font-semibold">
              Interval Waktu
            </span>

            <span className="font-body-md text-body-md text-primary font-medium">
              {interval}
            </span>
          </div>

          <div className="bg-surface-container-low p-3 rounded-lg">
            <span className="block font-label-technical text-label-technical text-outline uppercase font-semibold">
              Pelaksana
            </span>

            <span className="font-body-md text-body-md text-primary font-medium">
              {technician}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="block font-label-technical text-label-technical text-primary uppercase font-bold tracking-wider">
            Item Pemeriksaan:
          </span>

          <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                  check
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

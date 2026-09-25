export default function SparepartAssurance() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12 w-full">
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
        <div className="min-h-[300px] p-8 md:p-12 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed text-xs uppercase tracking-wider font-bold w-fit">
            <span>▣</span>
            <span>Central Logistics & Distribution Hub</span>
          </div>

          <h2 className="text-3xl font-bold text-primary leading-tight max-w-3xl">
            Kesiapan Gudang Suku Cadang MM2100 Cikarang
          </h2>

          <p className="text-base text-on-surface-variant leading-relaxed max-w-3xl">
            Semua spare part melalui quality inspection ketat, 100%
            genuine guaranteed, ready stock same-day delivery Jabodetabek
            & express ke seluruh Indonesia untuk menjamin zero downtime
            operasional forklift Anda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-3">
              <span className="text-secondary text-xl">✓</span>

              <div>
                <h4 className="text-sm font-bold text-primary">
                  Garansi Resmi
                </h4>

                <p className="text-sm text-on-surface-variant">
                  Suku cadang original bersertifikasi pabrik.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-secondary text-xl">✓</span>

              <div>
                <h4 className="text-sm font-bold text-primary">
                  Same-Day Dispatch
                </h4>

                <p className="text-sm text-on-surface-variant">
                  Kirim hari yang sama untuk area industri Jabodetabek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import ButtonCTACatalog from "./ButtonCTACatalog";

type ConsultationCardProps = {
  title?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  icon?: string;
};

export default function ConsultationCard({
  title = "Konsultasi Produk",
  description,
  icon = "?",
}: ConsultationCardProps) {
  return (
    <div className="bg-primary text-on-primary rounded-xl p-5 shadow-md space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 rounded-full bg-primary-container absolute -right-6 -bottom-6 opacity-40" />

      <div className="flex items-center gap-2 text-secondary-fixed relative z-10">
        <span className="text-xl">{icon}</span>

        <span className="text-xs uppercase tracking-wider font-bold">
          {title}
        </span>
      </div>

      <p className="text-sm text-on-primary-container leading-relaxed relative z-10">
        {description}
      </p>

      <div className="relative z-10">
        <ButtonCTACatalog />
      </div>
    </div>
  );
}
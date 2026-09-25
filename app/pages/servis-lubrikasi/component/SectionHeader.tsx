export default function SectionHeader({
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

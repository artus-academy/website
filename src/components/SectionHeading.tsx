export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-slate-600 mt-3">{subtitle}</p>}
    </div>
  );
}

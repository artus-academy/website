import { ReactNode } from "react";

export default function FeatureCard({
  icon,
  title,
  children,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-3">
        {icon && <div className="text-brand-600">{icon}</div>}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}

import SectionHeading from "@/components/SectionHeading";
export const metadata = { title: "Digital Marketing" };

export default function DMPage() {
  const topics = [
    "Marketing Fundamentals & Positioning",
    "SEO (On-page, Technical, Content)",
    "Meta & Google Ads (Performance + Creatives)",
    "Analytics (GA4, GSC, Tag Manager)",
    "Content Strategy + Reels / Shorts",
    "Email & Marketing Automation",
    "Landing Pages & CRO",
  ];
  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        title="Digital Marketing"
        subtitle="Performance + content, taught together."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Topics</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Projects</h3>
          <p className="text-slate-600">
            Run real campaigns, build reports, and present insights like a pro.
          </p>
          <a href="/admissions" className="btn-primary mt-4 inline-block">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

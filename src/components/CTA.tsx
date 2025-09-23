import Link from "next/link";

export default function CTA() {
  return (
    <div className="card p-8 text-center">
      <h3 className="text-2xl font-semibold">Ready to start learning?</h3>
      <p className="text-slate-600 mt-2">
        Join our next cohort and build real projects from day one.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="/admissions" className="btn-primary">
          Apply Now
        </Link>
        <Link href="/courses" className="btn-ghost">
          Explore Courses
        </Link>
      </div>
    </div>
  );
}

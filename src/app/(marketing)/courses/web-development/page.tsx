import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  const courses = [
    {
      title: "Web Development (MERN + Next.js)",
      href: "/courses/web-development",
      desc: "Frontend, backend, and deployment.",
    },
    {
      title: "Digital Marketing (Performance + Content)",
      href: "/courses/digital-marketing",
      desc: "SEO, Ads, Analytics, and strategy.",
    },
  ];
  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        title="Courses"
        subtitle="Choose your track and start building."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="card p-6 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-slate-600 mt-2">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

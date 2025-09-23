import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-20">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-xl">
            <span className="text-brand-600">ArtUs</span> Academy
          </div>
          <p className="text-slate-600 mt-2">
            Web Development & Digital Marketing in Kochi, India.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/admissions">Admissions</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-slate-700">
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="container py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} ArtUs Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

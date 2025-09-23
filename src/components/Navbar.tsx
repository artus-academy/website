"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-xl">
          <span className="text-brand-600">ArtUs</span> Academy
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-700 hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/admissions" className="btn-primary">
            Apply
          </Link>
        </nav>

        <button
          className="md:hidden btn-ghost"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              onClick={() => setOpen(false)}
              className="btn-primary w-fit"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";
import YouTubeSection from "@/components/YoutubeSection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-14 pb-10 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block mb-4 text-xs uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              Learn by Building
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Become a{" "}
              <span className="text-brand-600">Full-Stack Developer</span> or
              <br className="hidden md:block" /> a{" "}
              <span className="text-brand-600">Digital Marketer</span>
            </h1>
            <p className="text-slate-600 mt-4">
              Industry-ready curriculum, real projects, and job-focused
              mentorship — delivered in Kochi & online.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="/admissions">
                Apply Now
              </a>
              <a className="btn-ghost" href="/courses">
                View Courses
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              <span className="kbd">Next.js</span>{" "}
              <span className="kbd">Tailwind</span>{" "}
              <span className="kbd">Framer Motion</span>
            </div>
          </div>
          <div className="relative">
            <div className="card p-4 aspect-video">
              {/* Replace with real image/video later */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-brand-200 to-brand-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border border-slate-100 rounded-xl px-4 py-2 shadow-smooth">
              ⚡ Fast · SEO-ready · Animated
            </div>
          </div>
        </div>
      </section>

      <YouTubeSection />

      {/* Features */}
      <MotionSection className="container py-12 md:py-16">
        <SectionHeading
          title="Why choose ArtUs Academy?"
          subtitle="A modern stack, practical learning, and a strong portfolio."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Modern Tech Stack">
            Learn with Next.js, React, Tailwind, and industry-standard tools.
          </FeatureCard>
          <FeatureCard title="Project-First Learning">
            Build real products for your portfolio from week one.
          </FeatureCard>
          <FeatureCard title="Career Support">
            Interview prep, LinkedIn optimization, and referral network.
          </FeatureCard>
        </div>
      </MotionSection>

      {/* CTA */}
      <section className="container py-16">
        <CTA />
      </section>
    </>
  );
}

import MotionSection from "@/components/MotionSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";
import YouTubeSection from "@/components/landing/YoutubeSection";
import { HeroContent } from "@/components/landing/HeroContent";
import FAQSection from "@/components/landing/FaqSection";
import MentorSection from "@/components/landing/MentorSection";

export default function HomePage() {
  return (
    <>
      <HeroContent />

      <YouTubeSection />

      <MentorSection />

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

      <FAQSection />
    </>
  );
}

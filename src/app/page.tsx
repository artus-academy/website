import YouTubeSection from "@/components/landing/YoutubeSection";
import { HeroContent } from "@/components/landing/HeroContent";
import FAQSection from "@/components/landing/FaqSection";
import MentorSection from "@/components/landing/MentorSection";
import AboutSection from "@/components/landing/AboutSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import CoursesSection from "@/components/landing/CoursesSection";
import BlogSection from "@/components/landing/BlogSection";

export default function HomePage() {
  return (
    <>
      <HeroContent />

      <AboutSection />

      <CoursesSection />

      <MentorSection />

      <WhyUsSection />

      <YouTubeSection />

      <BlogSection />

      <FAQSection />
    </>
  );
}

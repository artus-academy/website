import YouTubeSection from "@/components/landing/YoutubeSection";
import { HeroContent } from "@/components/landing/HeroContent";
import FAQSection from "@/components/landing/FaqSection";
import MentorSection from "@/components/landing/MentorSection";
import AboutSection from "@/components/landing/AboutSection";
import WhyUsSection from "@/components/landing/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <HeroContent />

      <AboutSection />

      <MentorSection />

      <WhyUsSection />

      <YouTubeSection />

      <FAQSection />
    </>
  );
}

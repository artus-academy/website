"use client";

import MobileCTABar from "@/components/courses/MobileCTABar";
import TestimonialsCarousel from "@/components/courses/TestimonialsCarousel";
import TitleSection from "@/components/courses/TitleSection";
import { courses } from "@/data/courses";
import OverviewSection from "@/components/courses/OverviewSection";
import CurriculumSection from "@/components/courses/CurriculumSection";
import CTASection from "@/components/courses/CTASection";
import WhyUsSection from "@/components/courses/WhyUsSection";
import AchievementsSection from "@/components/courses/AchievementsSection";
import MentorSection from "@/components/courses/MentorSection";
import TechnologiesSection from "@/components/courses/TechnologiesSection";

export default function DigitalMarketingCoursePage() {
  return (
    <section className="relative px-6 py-16 md:py-24 w-full">
      <div className="absolute inset-0 bg-linear-to-b from-pink-500/10 via-background to-background pointer-events-none z-0 max-h-96" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        <TitleSection {...courses.digitalMarketing} />

        <OverviewSection overview={courses.digitalMarketing.overview} />

        <CurriculumSection syllabus={courses.digitalMarketing.syllabus} />

        <MentorSection mentors={courses.digitalMarketing.mentors} />

        <AchievementsSection
          achievements={courses.digitalMarketing.achievements}
        />

        <TechnologiesSection
          technologies={courses.digitalMarketing.technologies}
        />

        <WhyUsSection whyUs={courses.digitalMarketing.whyUs} />

        <CTASection role="Digital marketer" />

        <TestimonialsCarousel
          testimonials={courses.digitalMarketing.testimonials}
        />

        <MobileCTABar />
      </div>
    </section>
  );
}

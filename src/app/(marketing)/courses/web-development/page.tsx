"use client";

import MobileCTABar from "@/components/courses/MobileCTABar";
import TestimonialsCarousel from "@/components/courses/TestimonialsCarousel";
import TitleSection from "@/components/courses/TitleSection";
import CurriculumSection from "@/components/courses/CurriculumSection";
import { courses } from "@/data/courses";
import OverviewSection from "@/components/courses/OverviewSection";
import CTASection from "@/components/courses/CTASection";
import WhyUsSection from "@/components/courses/WhyUsSection";
import AchievementsSection from "@/components/courses/AchievementsSection";
import TechnologiesSection from "@/components/courses/TechnologiesSection";
import MentorSection from "@/components/courses/MentorSection";

export default function FullStackCoursePage() {
  return (
    <section className="relative px-6 py-16 md:py-24 w-full">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-background to-background pointer-events-none z-0 max-h-96" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        <TitleSection {...courses.webDevelopment} />

        <OverviewSection overview={courses.webDevelopment.overview} />

        <CurriculumSection syllabus={courses.webDevelopment.syllabus} />

        <MentorSection mentors={courses.webDevelopment.mentors} />

        <AchievementsSection
          achievements={courses.webDevelopment.achievements}
        />

        <TechnologiesSection
          technologies={courses.webDevelopment.technologies}
        />

        <WhyUsSection whyUs={courses.webDevelopment.whyUs} />

        <CTASection role="Full-Stack Developer" />

        <TestimonialsCarousel
          testimonials={courses.webDevelopment.testimonials}
        />

        <MobileCTABar />
      </div>
    </section>
  );
}

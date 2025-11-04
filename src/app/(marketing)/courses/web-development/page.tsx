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
import BreadcrumbList from "@/components/BreadcrumbList";
import { fullStackCourseSchema } from "@/data/schema/courses";
import { StructuredData } from "@/components/StructuredData";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/courses",
    label: "Courses",
  },
  {
    href: `/courses/${courses.webDevelopment.id}`,
    label: courses.webDevelopment.title,
  },
];

export default function FullStackCoursePage() {
  return (
    <>
      <StructuredData data={fullStackCourseSchema} />
      <section className="relative px-6 pb-16 md:pb-24 w-full">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-background to-background pointer-events-none z-0 max-h-96" />
        <BreadcrumbList
          links={links}
          className="justify-center flex md:pt-12 md:pb-10 pt-6 pb-5 relative z-10"
        />
        <div className="max-w-7xl mx-auto relative z-10 space-y-14">
          <TitleSection {...courses.webDevelopment} />

          <OverviewSection overview={courses.webDevelopment.overview} />

          <CurriculumSection
            syllabus={courses.webDevelopment.syllabus}
            section="developer"
          />

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
    </>
  );
}

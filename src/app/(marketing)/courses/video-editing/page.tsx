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
import { videoEditingCourseSchema } from "@/data/schema/courses";
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
    href: `/courses/${courses.videoEditing.id}`,
    label: courses.videoEditing.title,
  },
];

export default function VideoEditingCoursePage() {
  return (
    <>
      <StructuredData data={videoEditingCourseSchema} />
      <section className="relative px-6 pb-16 md:pb-24 w-full">
        <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 via-background to-background pointer-events-none z-0 max-h-96" />
        <BreadcrumbList
          links={links}
          className="justify-center flex md:pt-12 md:pb-10 pt-6 pb-5 relative z-10"
        />
        <div className="max-w-7xl mx-auto relative z-10 space-y-14">
          <TitleSection {...courses.videoEditing} />

          <OverviewSection overview={courses.videoEditing.overview} />

          <CurriculumSection
            syllabus={courses.videoEditing.syllabus}
            section="video editor"
          />

          <MentorSection mentors={courses.videoEditing.mentors} />

          <AchievementsSection
            achievements={courses.videoEditing.achievements}
          />

          <TechnologiesSection
            technologies={courses.videoEditing.technologies}
          />

          <WhyUsSection whyUs={courses.videoEditing.whyUs} />

          <CTASection role="Video Editor" />

          {/* <TestimonialsCarousel
            testimonials={courses.videoEditing.testimonials}
          /> */}

          <MobileCTABar />
        </div>
      </section>
    </>
  );
}

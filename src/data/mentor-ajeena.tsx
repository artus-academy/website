import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Mentor } from "./mentors";
import { DigitalMarketingBadge } from "@/components/CourseBadges";

export const ajeena: Mentor = {
  name: "Ajeena Ali",
  image: "/images/mentor-ajeena.webp",
  title: "CEO ArtUs Brand",
  badge: <DigitalMarketingBadge />,
  description: (
    <>
      Ajeena has over <b className="font-semibold text-foreground">5+ years</b>{" "}
      of experience in branding & digital marketing, leading campaign strategy
      and performance for{" "}
      <b className="font-semibold text-foreground">70+ companies</b> across
      India and GCC. She specializes in Meta ads, SEO, analytics, content
      strategy, and brand communication.
    </>
  ),
  quote:
    "With years of experience building brand presence across digital platforms, I help learners master marketing strategy, paid ads, and analytics to create real impact online.",
  highlights: [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Experience",
      value: "5+ yrs (Digital Marketing)",
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      label: "Specialization",
      value: "Ads & Analytics",
    },
    {
      icon: <Trophy className="h-4 w-4" />,
      label: "Impact",
      value: "70+ Successfull companies",
    },
  ],
  achievements: [
    <>
      <b>5+ years</b> in digital marketing and brand strategy
    </>,
    <>
      Managed ad campaigns with <b>1M+ reach</b> across Meta, Google & Other
      platforms
    </>,
    <>
      Created and managed digital marketing strategies for <b>50+ companies</b>{" "}
      across diverse industries
    </>,
    <>
      Specialist in <b>SEO, SEM,</b> and <b>Social Media Branding</b>
    </>,
  ],
};

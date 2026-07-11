import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Mentor } from "./mentors";
import { VideoEditingBadge } from "@/components/CourseBadges";

export const sidhique: Mentor = {
  name: "Sidhique P A",
  image: "/images/mentor-sidhique.webp",
  title: "Senior Videographer & Video Editor",
  badge: <VideoEditingBadge />,
  description: (
    <>
      Sidhique has over{" "}
      <b className="font-semibold text-foreground">3+ years</b> of experience
      specializing in video editing, motion graphics, cinematic edits, reels, and
      creative content creation using Adobe Premiere Pro and After Effects. He
      has successfully completed{" "}
      <b className="font-semibold text-foreground">350+ videos</b> for over{" "}
      <b className="font-semibold text-foreground">50+ brands</b>.
    </>
  ),
  quote:
    "I believe visual storytelling is about finding the perfect rhythm between audio and video. I help learners master professional workflows in Premiere Pro and After Effects to create high-impact content.",
  highlights: [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Experience",
      value: "3+ yrs (Video Editing)",
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      label: "Specialization",
      value: "Motion Graphics & Cinematic",
    },
    {
      icon: <Trophy className="h-4 w-4" />,
      label: "Impact",
      value: "350+ Videos, 50+ Brands",
    },
  ],
  achievements: [
    <>
      <b>3+ years</b> of experience in Adobe Premiere Pro & After Effects
    </>,
    <>
      Edited and delivered <b>350+ videos</b> across various formats
    </>,
    <>
      Collaborated with <b>50+ brands</b> to build creative content and campaigns
    </>,
    <>
      Specialist in <b>cinematic edits, motion graphics,</b> and <b>social media reels</b>
    </>,
  ],
};

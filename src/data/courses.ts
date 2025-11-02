import { LucideIcon } from "lucide-react";
import { Mentor } from "./mentors";
import { webDevelopment } from "./course-web-development";
import { digitalMarketing } from "./course-digital-marketing";

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  overview: string[];
  icon: LucideIcon;
  duration: string;
  mentors: Mentor[];
  syllabus: Syllabus[];
  technologies: string[];
  achievements: Achievements;
  whyUs: WhyUs;
  lightGradient: string;
  darkGradient: string;
  border: string;
  badgeLight: string;
  badgeDark: string;
  testimonials: Testimonial[];
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export type Achievements = {
  Icon: LucideIcon;
  points: string[];
};

export type WhyUs = {
  subtitle: string;
  points: {
    Icon: LucideIcon;
    label: string;
  }[];
};

export type Syllabus = {
  label: string;
  title: string;
  points: string[];
  projects?: string[];
};

export const courses = {
  webDevelopment,
  digitalMarketing,
};

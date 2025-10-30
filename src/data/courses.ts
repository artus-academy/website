import { Code2, Rocket } from "lucide-react";
import { mentors } from "./mentors";

export const courses = [
  {
    id: "web-development",
    title: "Full Stack Web Development",
    subtitle: "Master both front-end and back-end development",
    description:
      "Learn to build complete web applications from scratch using HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL. Get hands-on with real projects, version control, and modern deployment workflows.",
    duration: "6 Months",
    mentors: [mentors.nikhil],
    icon: Code2,
    lightGradient: "from-blue-400/10 via-cyan-300/10 to-transparent",
    darkGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    border: "border-blue-400/30 dark:border-blue-500/30",
    badgeLight: "bg-blue-100 text-blue-700",
    badgeDark: "bg-blue-500/10 text-blue-400",
  },
  {
    id: "digital-marketing",
    title: "Professional Digital Marketing Course",
    subtitle: "Learn how to grow brands in the digital world",
    description:
      "Gain practical skills in SEO, paid advertising, social media marketing, analytics, and campaign strategy. Create and manage marketing plans for real businesses guided by industry professionals.",
    duration: "4 Months",
    mentors: [mentors.ajeena],
    icon: Rocket,
    lightGradient: "from-pink-300/10 via-orange-300/10 to-transparent",
    darkGradient: "from-pink-500/20 via-orange-500/10 to-transparent",
    border: "border-pink-400/30 dark:border-pink-500/30",
    badgeLight: "bg-pink-100 text-pink-700",
    badgeDark: "bg-pink-500/10 text-pink-400",
  },
];

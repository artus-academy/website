import {
  CheckCircle2,
  LineChart,
  Megaphone,
  PenTool,
  Rocket,
  Target,
} from "lucide-react";
import { Course } from "./courses";
import { mentors } from "./mentors";

export const digitalMarketing: Course = {
  id: "digital-marketing",
  title: "Professional Digital Marketing Course",
  subtitle: "Learn how to grow brands in the digital world",
  description:
    "Gain practical skills in SEO, paid advertising, social media marketing, analytics, and campaign strategy. Create and manage marketing plans for real businesses guided by industry professionals.",
  overview: [
    "In today's digital-first world, businesses demand marketers who understand how to create campaigns that drive real results. This course equips you with hands-on skills in SEO, Social Media Marketing, Google Ads, Content Creation, Branding, and Performance Analytics.",
    "Whether you're a student, entrepreneur, freelancer, or career-switcher, this program prepares you to confidently manage and grow brands in the real market environment.",
  ],
  duration: "4 Months",
  mentors: [mentors.ajeena],
  icon: Rocket,
  syllabus: [
    {
      label: "Month 1",
      title: "Foundations & Core Skills",
      points: [
        "SEO, Content Creation, Branding, Copywriting",
        "Facebook & Instagram Marketing",
        "WordPress Website Creation",
        "Personal Branding + LinkedIn Optimization",
      ],
    },
    {
      label: "Month 2",
      title: "Live Projects & Implementation",
      points: [
        "Variables, Functions, Scope & Events",
        "DOM Manipulation & Browser APIs",
        "ES6+ Features, Async/Await, Fetch API",
        "JSON, LocalStorage & Form Handling",
      ],
      projects: [
        "Google Ads Campaign Execution",
        "SEO for E-Commerce",
        "Social Media Brand Growth",
        "Analytics + CRO",
      ],
    },
    {
      label: "Month 3",
      title: "Specialization & Portfolio",
      points: [
        "Choose: SEO / PPC / Social Media",
        "Work on Real Brand Projects",
        "Portfolio, Resume, Job Readiness",
      ],
      projects: ["Dashboard App", "E-Commerce Frontend", "Social Feed App"],
    },
  ],
  achievements: {
    Icon: CheckCircle2,
    points: [
      "Develop complete digital marketing strategies",
      "Run SEO, SMM & PPC campaigns independently",
      "Create high-quality brand content & messaging",
      "Manage live business pages & growth",
      "Build a strong personal brand",
      "Get ready for job placement with mock interviews",
    ],
  },
  whyUs: {
    subtitle:
      "Learn directly from real professionals working with real brands.",
    points: [
      { Icon: Megaphone, label: "Live Client Projects" },
      { Icon: LineChart, label: "Performance-Based Learning" },
      { Icon: PenTool, label: "Creative Content Training" },
      { Icon: Target, label: "Placement Assistance" },
    ],
  },
  lightGradient: "from-pink-300/10 via-orange-300/10 to-transparent",
  darkGradient: "from-pink-500/20 via-orange-500/10 to-transparent",
  border: "border-pink-400/30 dark:border-pink-500/30",
  badgeLight: "bg-pink-100 text-pink-700",
  badgeDark: "bg-pink-500/10 text-pink-400",
  technologies: [
    "google analytics",
    "wordpress",
    "canva",
    "meta",
    "semrush",
    "youtube",
    "google my business",
    "linkedin",
    "rankmath",
    "yoast",
    "google trends",
    "google search console",
  ],
  testimonials: [
    {
      name: "Sandra M.",
      role: "Digital Marketing Course",
      avatar: "/images/testimonials/sandra.png",
      quote:
        "The live projects and mentor sessions gave me real agency experience. Running actual ad campaigns for clients made all the difference — this wasn’t just theory.",
    },
    {
      name: "Rahul V.",
      role: "Digital Marketing Course",
      avatar: "/images/testimonials/rahul.png",
      quote:
        "I started as a complete beginner, but within two months I was confidently handling Meta Ads and SEO projects. The structure and support were top-notch.",
    },
    {
      name: "Adithya K.",
      role: "Digital Marketing Course",
      avatar: "/images/testimonials/adithya.png",
      quote:
        "Artus Academy made learning marketing fun and real. I got to work on influencer campaigns and ad reports — exactly what I needed to start my career.",
    },
  ],
};

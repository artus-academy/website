import { Code2, Cpu, Gem, GitBranch, Globe } from "lucide-react";
import { Course } from "./courses";
import { mentors } from "./mentors";

export const webDevelopment: Course = {
  id: "web-development",
  title: "Full Stack Web Development",
  subtitle: "Master both front-end and back-end development",
  description:
    "Learn to build complete web applications from scratch using HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL. Get hands-on with real projects, version control, and modern deployment workflows.",
  overview: [
    "This Full Stack Web Development program is designed to guide learners from the fundamentals to an industry-ready skill level. Through structured modules, hands-on assignments, and real project experience, you will gain the ability to build complete web applications using modern technologies.",
    "The training is conducted by experienced developers who have worked on real-world software projects. You will be learning coding best practices, application architecture, debugging strategies, and collaborative workflows followed in professional tech teams.",
  ],
  duration: "6 Months",
  mentors: [mentors.nikhil],
  icon: Code2,
  syllabus: [
    {
      label: "Month 1",
      title: "Web Foundations + Git",
      points: [
        "How the Internet Works, HTTP/HTTPS & DevTools",
        "Semantic HTML, Layouts with Flexbox & Grid",
        "Responsive Design for all screen sizes",
        "Version Control with Git & GitHub",
        "Linux Basics & Terminal Commands",
      ],
      projects: ["Portfolio Webpage", "Responsive Business Landing Page"],
    },
    {
      label: "Month 2",
      title: "JavaScript & UI Development",
      points: [
        "Variables, Functions, Scope & Events",
        "DOM Manipulation & Browser APIs",
        "ES6+ Features, Async/Await, Fetch API",
        "JSON, LocalStorage & Form Handling",
      ],
      projects: [
        "Weather App",
        "Interactive Blog UI",
        "Calculator & Game Projects",
      ],
    },
    {
      label: "Month 3",
      title: "React & UI Frameworks",
      points: [
        "React Components, Props & State",
        "Hooks, Context API & Routing",
        "Reusable UI Patterns & State Management",
        "Tailwind + shadcn + Material UI",
        "API Integration & Error Handling",
      ],
      projects: ["Dashboard App", "E-Commerce Frontend", "Social Feed App"],
    },
    {
      label: "Month 4",
      title: "Java + OOP + Databases",
      points: [
        "Java Syntax & Control Flow",
        "Objects, Classes & OOP Concepts",
        "Collections, Exceptions & Streams",
        "MySQL + Relational Database Design",
        "JDBC & DAO Design Patterns",
      ],
      projects: ["CLI Employee Manager", "Library Records Management System"],
    },
    {
      label: "Month 5",
      title: "Spring Boot + Backend APIs",
      points: [
        "REST API Design & Controllers",
        "Dependency Injection & Beans",
        "DTOs, Service Layer & Repositories",
        "Authentication with JWT",
        "API Testing with Postman",
      ],
      projects: ["User Auth API", "Task Manager Backend", "Blog REST Service"],
    },
    {
      label: "Month 6",
      title: "Full-Stack Project + Deployment + Placement Prep",
      points: [
        "Integrate React Frontend + Spring Boot Backend",
        "Team Workflow: Git Branching + Code Reviews",
        "Deploy Full-Stack App to Cloud",
        "Resume, LinkedIn, GitHub Profile Optimization",
        "Mock Interviews & Coding Practice",
      ],
      projects: ["Full-Stack Team Project (Demo Day Presentation)"],
    },
  ],
  technologies: [
    "html",
    "css",
    "javascript",
    "react",
    "tailwind",
    "git",
    "java",
    "mysql",
    "springboot",
    "postman",
    "vercel",
    "linux",
  ],
  achievements: {
    Icon: Gem,
    points: [
      "Be able to build and deploy real web applications",
      "Master React and Java + Spring Boot with confidence",
      "Understand how backend, APIs, and databases work together",
      "Develop strong problem-solving & debugging skills",
      "Build a GitHub portfolio that impresses recruiters",
      "Become interview ready with career mentorship",
    ],
  },
  whyUs: {
    subtitle: "Learn the skills that get you hired - not just theory.",
    points: [
      { Icon: Code2, label: "Real Projects" },
      { Icon: Cpu, label: "Industry Curriculum" },
      { Icon: GitBranch, label: "Team Workflows" },
      { Icon: Globe, label: "Placement Assistance" },
    ],
  },
  testimonials: [
    {
      name: "Jithin K.",
      role: "Full Stack Web Development",
      avatar: "/images/testimonials/jithin.png",
      quote:
        "Felt like real-deal team vibes with Git and PRs. Demo Day? A whole mood. Got serious confidence and literally started getting interview pings right after. Bet!",
    },
    {
      name: "Athira P.",
      role: "Full Stack Web Development",
      avatar: "/images/testimonials/athira.png",
      quote:
        "Built a React dashboard that's low-key my flex in interviews now. Legit boosted my portfolio.",
    },
    {
      name: "Neha S.",
      role: "Full Stack Web Development",
      avatar: "/images/testimonials/neha.png",
      quote:
        "Non-CS background here, but the structure was a total game-changer. The projects slapped, and getting doubts cleared was super smooth. No cap, it was awesome.",
    },
  ],
  lightGradient: "from-blue-400/10 via-cyan-300/10 to-transparent",
  darkGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  border: "border-blue-400/30 dark:border-blue-500/30",
  badgeLight: "bg-blue-100 text-blue-700",
  badgeDark: "bg-blue-500/10 text-blue-400",
};

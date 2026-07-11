import { Film, Video, Tv, Layers } from "lucide-react";
import { Course } from "./courses";
import { mentors } from "./mentors";

export const videoEditing: Course = {
  id: "video-editing",
  title: "Video Editing Foundations",
  tagline: "Master the art of cutting, motion graphics, and delivery",
  subtitle:
    "A complete beginner-to-confident course covering professional tools",
  description:
    "Learn to cut, organize, and deliver professional video using essential editing tools, audio mixing, and basic color grading in Adobe Premiere Pro. Master motion graphics, text animation, shape layers, and visual effects compositing in After Effects. Combine both tools using Dynamic Link to produce professional content, social media promos, and build your final portfolio.",
  overview: [
    "This Video Editing Foundations program is a 3 month (12 weeks) intensive, project-based program designed to guide beginners to a confident level. Through structured modules, hands-on projects, and professional workflows, you will gain the creative and technical skills required to build professional-quality video content.",
    "The course covers industry-standard tools like Adobe Premiere Pro, After Effects, and Media Encoder. You will learn the exact workflows used by professionals, get direct feedback on your edits, and walk away with a ready-to-show client portfolio, alongside career and freelance guidance.",
  ],
  duration: "3 Months",
  mentors: [mentors.sidhique],
  icon: Video,
  syllabus: [
    {
      label: "Month 1",
      title: "Phase 01: Premiere Pro Foundations",
      points: [
        "Interface overview, workspace layout, sequence settings, and importing media (video, audio, images)",
        "Understanding frame rates & resolutions",
        "Editing Tools: Selection, Razor & Ripple tools. Cut, trim, split & rearrange clips",
        "In/Out points, three-point editing, B-roll, and sequence nesting",
        "Audio levels, mixing, background music, voice-overs, and Essential Sound basics",
        "Video & audio transitions (cross-dissolve, dip to black)",
        "Lumetri Colour basics, applying LUTs, adding text & lower thirds",
        "Export settings for YouTube, Instagram & web",
      ],
      projects: ["Edit a 60-second short film"],
    },
    {
      label: "Month 2",
      title: "Phase 02: After Effects Foundations",
      points: [
        "Interface overview, compositions vs sequences, layers (video, shape, text, null), timeline & time remapping, and import methods",
        "Setting keyframes (position, scale, rotation, opacity), easing with the Graph Editor, motion paths, parenting layers, and pre-composing",
        "Text animators & presets, animated lower thirds, creating shapes, stroke effects, trim paths, and basic masking & track mattes",
        "Customizing built-in effects, Chroma key (green screen) basics, blend modes, Render queue & Media Encoder export",
      ],
      projects: ["Animated intro sequence"],
    },
    {
      label: "Month 3",
      title: "Phase 03: Integration & Real-World Projects",
      points: [
        "Dynamic Integration: Sending clips via Dynamic Link, replacing clips with AE compositions, roundtrip workflows, and proxy workflow for performance",
        "Social Media Content: Editing YouTube vlogs, animated thumbnails, Reels & Shorts (vertical format), captions & subtitles, pacing & engagement techniques",
        "Commercial Video: Planning & scripting a 30-second promo, motion graphics for brand elements, music sync, sound design, and color grading for mood",
        "Portfolio & Freelancing: Peer feedback, basic editing portfolio creation, freelance tips (rates, tools & pitching), and client delivery formats",
      ],
      projects: ["90-second branded video & Portfolio Assembly"],
    },
  ],
  technologies: [
    "adobe premiere pro",
    "adobe after effects",
    "media encoder",
    "lumetricolour",
    "dynamicslink",
    "essentialssound",
    "essentialsgraphics",
    "adobefonts",
  ],
  achievements: {
    Icon: Film,
    points: [
      "Cut, trim and assemble professional-quality videos from raw footage with precise pacing and audio design",
      "Design animated titles, lower thirds, graphic sequences, and visual effects directly in After Effects",
      "Apply professional color correction (LUTs) and mood grading using Lumetri Colour",
      "Master the seamless roundtrip workflow between Premiere Pro and After Effects using Dynamic Link",
      "Optimize and export files correctly for any platform (YouTube, Instagram, Reels, Web) via Media Encoder",
      "Walk away with 3 finished projects ready to present to clients and kickstart a freelance career",
    ],
  },
  whyUs: {
    subtitle:
      "Learn industry-standard workflows through hands-on studio or remote experiences.",
    points: [
      { Icon: Video, label: "Industry-Standard Tools" },
      { Icon: Film, label: "Hands-On Projects" },
      { Icon: Layers, label: "Professional Workflows" },
      { Icon: Tv, label: "Career Guidance" },
    ],
  },
  testimonials: [], // Provide testimonials if available or populate dynamically
  lightGradient: "from-purple-400/10 via-pink-300/10 to-transparent",
  darkGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  border: "border-purple-400/30 dark:border-purple-500/30",
  badgeLight: "bg-purple-100 text-purple-700",
  badgeDark: "bg-purple-500/10 text-purple-400",
};

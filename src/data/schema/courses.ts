import { digitalMarketing } from "@/data/course-digital-marketing";
import { webDevelopment } from "@/data/course-web-development";

export const fullStackCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: webDevelopment.title,
  provider: {
    "@type": "Organization",
    name: "ArtUs Academy",
    url: "https://artusacademy.com",
  },
  description: webDevelopment.description,
  timeRequired: "P6M",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["online", "offline"],
    location: {
      "@type": "Place",
      name: "ArtUs Academy, Kochi",
      address:
        "3rd Floor, SF Arcade Building, Kunnumpuram, Kakkanad, Kochi, Kerala - 682030",
    },
  },
};

export const digitalMarketingCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: digitalMarketing.title,
  provider: {
    "@type": "Organization",
    name: "ArtUs Academy",
    url: "https://artusacademy.com",
  },
  description: digitalMarketing.description,
  timeRequired: "P3M",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["online", "offline"],
    location: {
      "@type": "Place",
      name: "ArtUs Academy, Kochi",
      address:
        "3rd Floor, SF Arcade Building, Kunnumpuram, Kakkanad, Kochi, Kerala - 682030",
    },
  },
};

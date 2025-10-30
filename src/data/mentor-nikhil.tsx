import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import { Mentor } from "./mentors";
import { WebDevelopmentBadge } from "@/components/CourseBadges";

export const nikhil: Mentor = {
  name: "Nikhil Nath R",
  image: "/images/mentor-nikhil.png",
  title: "Senior Software Engineer (ex-Oracle)",
  badge: <WebDevelopmentBadge />,
  description: (
    <>
      Nikhil is a former Senior Software Engineer at{" "}
      <b className="font-semibold text-foreground">Oracle</b> with{" "}
      <b className="font-semibold text-foreground">over 3 years</b> of
      experience in backend microservices, full-stack development, and scalable
      architectures. He specializes in Java, Spring Boot, React, and DevOps
      workflows, bringing real-world project experience straight into the
      classroom.
    </>
  ),
  quote:
    "I believe the best way to learn code is by building real things. My goal is to transform beginners into confident, industry-ready developers.",
  highlights: [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Experience",
      value: "3+ yrs (Oracle)",
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      label: "Education",
      value: "NIT Calicut (B.Tech CSE)",
    },
    {
      icon: <Trophy className="h-4 w-4" />,
      label: "Award",
      value: "Best Paper - CINS 2023",
    },
  ],
  achievements: [
    <>
      <b>3+ years</b> experience in Java Microservices at Oracle
    </>,
    <>
      B.Tech in CSE from <b>NIT Calicut</b>
    </>,
    <div className="flex flex-col" key="paper">
      <span>
        Co-authored award-winning paper at <b>CINS 2023</b>
      </span>
      <Link
        href="https://www.researchgate.net/publication/367967693_A_Verifiable_Multi-Secret_Multi-Use_Secret_Sharing_Scheme_using_Sponge_functions_and_Cellular_Automata"
        target="_blank"
        rel="noreferrer noopener"
        className="text-sm text-muted-foreground hover:text-primary"
      >
        (A Verifiable, Multi-Secret, Multi-Use Secret Sharing Scheme using
        Sponge functions and Cellular Automata)
      </Link>
    </div>,
    <>
      Contributor to open-source & core member of <b>FOSSCell</b> (NITC)
    </>,
  ],
};

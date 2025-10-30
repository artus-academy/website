import { ReactNode } from "react";
import { nikhil } from "./mentor-nikhil";
import { ajeena } from "./mentor-ajeena";

export type Mentor = {
  name: string;
  image: string;
  title: string;
  badge: ReactNode;
  quote: string;
  description: string | ReactNode;
  achievements: (string | React.ReactNode)[];
  highlights: { icon: React.ReactNode; label: string; value: string }[];
};
export const mentors = {
  nikhil,
  ajeena,
};

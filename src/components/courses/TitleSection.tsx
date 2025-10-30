import { easeOut, motion } from "framer-motion";
import { Blend, Calendar, Globe, Wallet } from "lucide-react";
import { Badge } from "../ui/badge";
import { Mentor } from "@/data/mentors";
import Image from "next/image";
import { Separator } from "../ui/separator";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true },
};

export default function TitleSection({
  title,
  subtitle,
  duration,
  mentors,
}: {
  title: string;
  subtitle: string;
  duration: string;
  mentors: Mentor[];
}) {
  const mentor = mentors[0];
  return (
    <>
      <motion.div
        {...fadeUp}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg">{subtitle}</p>

        {/* Highlight Badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge className="bg-primary/20 text-primary border-primary/40">
            <Calendar /> {duration}
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-600 border-blue-400/30">
            <Blend /> Online + Offline
          </Badge>
          <Badge className="bg-green-500/20 text-green-600 border-green-400/30">
            <Wallet /> EMI Available
          </Badge>
          <Badge className="bg-rose-500/20 text-rose-600 border-rose-400/30">
            <Globe /> Placement Support
          </Badge>
        </div>
      </motion.div>

      {/* Mentor */}
      <motion.div
        {...fadeUp}
        className="flex flex-wrap justify-center items-center gap-6 mx-auto text-center"
        key={mentor.name}
      >
        <Image
          src={mentor.image}
          alt={mentor.name}
          width={80}
          height={80}
          className="rounded-full border shadow object-contain size-24"
        />
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg">{mentor.name}</h3>
          <p className="text-muted-foreground text-sm">{mentor.title}</p>
        </div>
      </motion.div>

      <Separator />
    </>
  );
}

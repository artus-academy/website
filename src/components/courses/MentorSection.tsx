import { easeOut, motion } from "framer-motion";
import { Mentor } from "@/data/mentors";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Star } from "lucide-react";
import { ApplyNowDialog } from "../ApplyNowDialog";
import { Badge } from "../ui/badge";

export default function MentorSection({ mentors }: { mentors: Mentor[] }) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: easeOut },
    viewport: { once: true },
  };

  return (
    <section className="relative py-8 md:py-10 px-6 overflow-hidden flex flex-col items-center">
      <motion.div
        {...fadeUp}
        className="mb-12 flex flex-col items-center gap-3 relative z-10"
      >
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Mentor
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center">
          Meet Your Mentor
        </h2>
      </motion.div>
      {mentors.map((mentor) => (
        <div
          key={mentor.name}
          className="relative grid items-stretch gap-5 lg:gap-10 md:grid-cols-5 max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative md:col-span-2 flex items-center justify-center"
          >
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={320}
              height={320}
              className="object-contain"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-3 z-10 bg-card border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {mentor.name}
                </h3>
                <p className="text-muted-foreground">{mentor.title}</p>
              </div>
            </div>

            <Separator className="my-4" />

            <p className="text-muted-foreground leading-relaxed mb-6">
              {mentor.description}
            </p>

            {/* Highlights */}
            <div className="grid gap-3 sm:grid-cols-3 mb-6">
              {mentor.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-2"
                >
                  {h.icon}
                  <div className="text-sm leading-tight">
                    <div className="font-medium">{h.label}</div>
                    <div className="text-muted-foreground">{h.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <ul className="space-y-3 text-sm text-muted-foreground">
              {mentor.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Star className="text-primary mt-0.5 size-4" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 text-center md:text-left">
              <ApplyNowDialog />
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

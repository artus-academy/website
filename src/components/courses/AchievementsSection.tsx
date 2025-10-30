import { easeOut, motion } from "framer-motion";
import { Achievements } from "@/data/courses";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true },
};

export default function AchievementsSection({
  achievements,
}: {
  achievements: Achievements;
}) {
  return (
    <section className="py-8 space-y-8">
      <motion.h2 {...fadeUp} className="text-center text-3xl font-bold">
        What Will You Achieve?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.points.map((point, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 text-sm bg-card p-4 rounded-lg border"
          >
            <achievements.Icon className="text-primary mt-0.5" />
            {point}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

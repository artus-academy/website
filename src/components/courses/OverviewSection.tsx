import { easeOut, motion } from "framer-motion";

export default function OverviewSection({ overview }: { overview: string[] }) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: easeOut },
    viewport: { once: true },
  };
  return (
    <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Course Overview</h2>

      {overview.map((o) => (
        <p key={o} className="text-muted-foreground text-lg leading-relaxed">
          {o}
        </p>
      ))}
    </motion.div>
  );
}

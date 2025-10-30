import { easeOut, motion } from "framer-motion";
import { WhyUs } from "@/data/courses";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true },
};

export default function WhyUsSection({ whyUs }: { whyUs: WhyUs }) {
  return (
    <section className="py-12">
      <motion.div {...fadeUp} className="text-center space-y-2 mb-10">
        <h2 className="text-3xl font-bold">Why Choose Artus Academy?</h2>
        <p className="text-muted-foreground">{whyUs.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {whyUs.points.map(({ Icon, label }, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            className="rounded-xl border p-6 text-center bg-card"
          >
            <Icon className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 font-medium">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

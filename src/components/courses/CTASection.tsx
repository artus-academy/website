import { easeOut, motion } from "framer-motion";
import { ApplyNowDialog } from "../ApplyNowDialog";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true },
};

export default function CTASection({ role }: { role: string }) {
  return (
    <motion.div {...fadeUp} className="text-center space-y-4 pt-10">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Ready to Become a {role}?
      </h2>
      <p className="text-muted-foreground">
        Join the program and start building real production-grade projects.
      </p>
      <ApplyNowDialog />
    </motion.div>
  );
}

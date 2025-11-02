import { easeOut, motion } from "framer-motion";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export default function CTACommon({ className }: { className?: string }) {
  return (
    <motion.div
      {...fadeUp}
      className={cn("text-center max-w-xl mx-auto space-y-5", className)}
    >
      <h3 className="text-3xl font-bold">Ready to Begin?</h3>
      <p className="text-muted-foreground">
        Take your first step into tech and digital careers with mentors guiding
        you every step of the way.
      </p>
      <ApplyNowDialog
        trigger={
          <Button size="lg" className="px-8 py-6 text-base">
            Apply Now
          </Button>
        }
      />
    </motion.div>
  );
}

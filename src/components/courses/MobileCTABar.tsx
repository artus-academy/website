"use client";

import { ApplyNowDialog } from "@/components/ApplyNowDialog";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden max-w-screen"
    >
      <div className="mx-3 mb-3 rounded-xl border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/70 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-sm">
            <div className="font-medium">Start your journey today</div>
            <div className="text-muted-foreground text-xs">
              <Badge variant="secondary" className="text-xs">
                EMI available
              </Badge>
              Online / Offline
            </div>
          </div>
          <ApplyNowDialog
            trigger={
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white shadow hover:bg-primary/90">
                Apply <ArrowRight className="h-4 w-4" />
              </button>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

// const variants = {
//   initial: { opacity: 0, x: 24 },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
//   },
//   exit: {
//     opacity: 0,
//     x: -24,
//     transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
//   },
// };

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    first.current = false;
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        // variants={variants}
        initial={first.current ? false : "initial"} // no initial on first load
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

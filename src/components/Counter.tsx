"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ to }: { to: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2600 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, to, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) =>
      setValue(Math.round(v))
    );
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>{value}</span>;
}

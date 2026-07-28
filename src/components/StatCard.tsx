import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { StatItem } from "@/types/timeline";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

export default function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-ink/5 bg-white/70 p-8 text-center shadow-soft"
    >
      <div className="font-display text-5xl text-gold">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.25em] text-ink-soft">{stat.label}</div>
    </motion.div>
  );
}

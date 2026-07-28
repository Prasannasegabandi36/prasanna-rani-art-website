import { motion } from "framer-motion";

interface MandalaMotifProps {
  className?: string;
  speed?: "slow" | "slower";
}

/**
 * The site's signature motif — a hand-drawn-style mandala/rangoli line drawing,
 * referencing the artist's Rangoli & Traditional Art category. Rotates slowly
 * as ambient motion behind hero and section content.
 */
export default function MandalaMotif({ className = "", speed = "slow" }: MandalaMotifProps) {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className={`${className} ${speed === "slow" ? "animate-spin-slow" : "animate-spin-slower"}`}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.5">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="160" />
        <circle cx="200" cy="200" r="130" strokeDasharray="2 6" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2="200"
              y2="10"
              transform={`rotate(${angle} 200 200)`}
              opacity="0.35"
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <ellipse
              key={i}
              cx="200"
              cy="70"
              rx="14"
              ry="34"
              transform={`rotate(${angle} 200 200)`}
            />
          );
        })}
        <circle cx="200" cy="200" r="40" />
        <circle cx="200" cy="200" r="18" />
      </g>
    </motion.svg>
  );
}

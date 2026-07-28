import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 block font-body text-xs tracking-[0.35em] uppercase ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl font-medium leading-tight ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-ivory/80" : "text-ink-soft"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold via-gold-light to-transparent md:left-1/2" />
      <ul className="space-y-14">
        {timeline.map((item, i) => {
          const isRight = i % 2 === 1;
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: isRight ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                isRight ? "md:ml-auto md:pl-14 md:text-left" : "md:pr-14 md:text-right"
              }`}
            >
              <span
                className="absolute left-2.5 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-gold"
                style={{ left: "0.625rem" }}
              />
              <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">{item.year}</span>
              <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

import { motion } from "framer-motion";
import { Leaf, Heart, Palette } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Leaf,
    title: "To notice the overlooked",
    description:
      "A mango branch, a stray flower, an ordinary afternoon — art is a way of paying closer attention to the world.",
  },
  {
    icon: Heart,
    title: "To express devotion",
    description:
      "Painting Krishna, Hanuman, and Jagannath is a quiet form of prayer, translating faith into colour and line.",
  },
  {
    icon: Palette,
    title: "To keep learning",
    description:
      "Every new medium and subject is a chance to grow — art as a lifelong, unfinished practice.",
  },
];

export default function WhyICreate() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeading eyebrow="Purpose" title="Why I Create Art" align="center" />

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            className="group rounded-3xl border border-ink/5 bg-white/60 p-8 shadow-soft backdrop-blur transition-transform hover:-translate-y-2"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light/40 to-blush/40">
              <reason.icon className="text-gold" size={26} strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-display text-2xl text-ink">{reason.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

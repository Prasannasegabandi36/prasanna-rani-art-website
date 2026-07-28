import { motion } from "framer-motion";
import MandalaMotif from "./MandalaMotif";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ivory md:py-36">
      <MandalaMotif className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 text-gold-light/10" />
      <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl italic leading-relaxed text-ivory md:text-4xl"
        >
          "Every colour I choose carries a little of home — the flowers in the courtyard, the
          diyas at Diwali, the faces I grew up watching. Art, for me, is simply paying attention
          with love."
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 block font-signature text-sm tracking-widest text-gold-light"
        >
          — Prasanna Rani
        </motion.span>
      </div>
    </section>
  );
}

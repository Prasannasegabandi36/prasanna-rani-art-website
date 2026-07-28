import { motion } from "framer-motion";
import { Button } from "./Button";

export default function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush/50 via-cream to-peach/40 px-8 py-16 text-center shadow-soft md:py-20"
      >
        <h2 className="font-display text-4xl font-medium text-ink md:text-5xl">
          Have an artwork in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          Commissions, collaborations, or simply a hello — reach out and let's talk about bringing
          your idea to life on paper or canvas.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact" variant="solid">
            Start a Conversation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

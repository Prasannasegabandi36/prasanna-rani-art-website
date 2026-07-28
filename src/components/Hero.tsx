import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";
import MandalaMotif from "./MandalaMotif";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-ivory to-blush/30">
      {/* Ambient motifs */}
      <MandalaMotif className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-gold/25 md:h-[560px] md:w-[560px]" />
      <MandalaMotif
        speed="slower"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] text-lilac/30 md:h-[480px] md:w-[480px]"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-peach/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-lilac/30 blur-3xl animate-float-delayed" />

      <div className="container-px relative z-10 mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-block font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          Kolakaluru · Andhra Pradesh
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-display text-6xl font-medium leading-[1.05] text-ink sm:text-7xl md:text-8xl"
        >
          Prasanna <span className="text-gradient-gold italic">Rani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          Pencil sketches and paintings inspired by nature, Indian culture, devotional themes,
          and everyday life — created with colour, patience, and quiet meaning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button to="/gallery" variant="solid">
            Explore Gallery
          </Button>
          <Button to="/about" variant="outline">
            About Artist
          </Button>
          <Button to="/contact" variant="ghost">
            Contact
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ink-soft"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/Button";
import MandalaMotif from "@/components/MandalaMotif";
import { useSeo } from "@/hooks/useSeo";

export default function NotFound() {
  useSeo("Page Not Found", "The page you're looking for could not be found.");

  return (
    <PageTransition>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <MandalaMotif className="pointer-events-none absolute h-[420px] w-[420px] text-gold/15" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <span className="font-display text-8xl text-gold/70">404</span>
          <h1 className="mt-4 font-display text-3xl text-ink">This page hasn't been painted yet</h1>
          <p className="mx-auto mt-3 max-w-sm text-ink-soft">
            The page you're looking for doesn't exist. Let's get you back to the gallery.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/">Back Home</Button>
            <Button to="/gallery" variant="outline">
              Visit Gallery
            </Button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}

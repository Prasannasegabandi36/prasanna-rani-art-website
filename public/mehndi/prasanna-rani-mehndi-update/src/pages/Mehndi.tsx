import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/Button";
import { useSeo } from "@/hooks/useSeo";

const categories = [
  "Simple Mehndi",
  "Floral Mehndi",
  "Arabic Mehndi",
  "Festival Mehndi",
  "Bridal Mehndi",
];

const mehndiPhotos = Array.from({ length: 40 }, (_, index) => ({
  src: `/mehndi/mehndi-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Handmade mehndi design ${index + 1} by Prasanna Rani`,
}));

export default function Mehndi() {
  useSeo(
    "Mehndi Art & Sessions",
    "Explore handmade simple, floral, Arabic, festival, and bridal mehndi designs by Prasanna Rani."
  );

  return (
    <PageTransition>
      <main className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 block font-body text-xs uppercase tracking-[0.35em] text-gold">
            Traditional Beauty
          </span>
          <h1 className="font-display text-5xl font-medium text-ink md:text-6xl">
            Mehndi Art & Sessions
          </h1>
          <p className="mt-5 leading-7 text-ink-soft">
            Explore my handmade mehndi designs for festivals, weddings, and
            special occasions. Simple, floral, Arabic, bridal, and customized
            designs are available.
          </p>
        </header>

        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-sm text-ink-soft"
            >
              {category}
            </span>
          ))}
        </div>

        <section
          aria-label="Mehndi design gallery"
          className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          {mehndiPhotos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "80px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
              className="mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                className="h-auto w-full transition duration-500 hover:scale-[1.02]"
              />
            </motion.figure>
          ))}
        </section>

        <section className="mt-20 rounded-3xl bg-gradient-to-br from-cream via-blush/30 to-lilac/20 px-6 py-14 text-center md:px-12">
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-gold">
            <Sparkles size={21} />
          </span>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Book a Mehndi Session
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink-soft">
            Contact me for availability, customized designs, festivals,
            celebrations, and special occasions.
          </p>
          <div className="mt-8">
            <Button to="/contact">Contact Me</Button>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

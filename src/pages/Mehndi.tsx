import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

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

const mehndiPhotos = Array.from(
  { length: 40 },
  (_, index) => ({
    src: `/mehndi/mehndi-${String(
      index + 1
    ).padStart(2, "0")}.webp`,
    alt: `Handmade mehndi design ${
      index + 1
    } by Prasanna Rani`,
  })
);

export default function Mehndi() {
  useSeo(
    "Mehndi Art & Sessions",
    "Explore handmade simple, floral, Arabic, festival, and bridal mehndi designs by Prasanna Rani."
  );

  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const activePhoto =
    activeIndex === null
      ? null
      : mehndiPhotos[activeIndex] ?? null;

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + mehndiPhotos.length) %
          mehndiPhotos.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) %
          mehndiPhotos.length
    );
  };

  useEffect(() => {
    if (!activePhoto) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activePhoto]);

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
            Explore my handmade mehndi designs for
            festivals, weddings, and special occasions.
            Simple, floral, Arabic, bridal, and customized
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
            <motion.button
              key={photo.src}
              type="button"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "80px",
              }}
              transition={{
                duration: 0.4,
                delay: (index % 6) * 0.04,
              }}
              onClick={() =>
                setActiveIndex(index)
              }
              aria-label={`Open ${photo.alt}`}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-white text-left shadow-soft"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={
                  index < 3
                    ? "eager"
                    : "lazy"
                }
                decoding="async"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
              />
            </motion.button>
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
            Contact me for availability, customized
            designs, festivals, celebrations, and special
            occasions.
          </p>

          <div className="mt-8">
            <Button to="/contact">
              Contact Me
            </Button>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mehndi design enlarged view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={closeViewer}
              aria-label="Close mehndi design"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous mehndi design"
              className="absolute left-3 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:left-8"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.figure
              initial={{
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="max-h-[88vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[78vh] w-full object-contain"
              />

              <figcaption className="px-5 py-4 text-center text-sm text-ink-soft">
                Mehndi design{" "}
                {(activeIndex ?? 0) + 1} of{" "}
                {mehndiPhotos.length}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next mehndi design"
              className="absolute right-3 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:right-8"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
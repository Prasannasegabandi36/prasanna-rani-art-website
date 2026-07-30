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

const rangoliPhotos = [
  "IMG-20241231-WA0116.jpg",
  "IMG-20241231-WA0120.jpg",
  "IMG-20250101-WA0034.jpg",
  "IMG-20250105-WA0013.jpg",
  "IMG-20250105-WA0014.jpg",
  "IMG_20211231_225729.jpg",
  "IMG_20220121_093054.jpg",
  "IMG_20221225_081535.jpg",
  "IMG_20221225_082605.jpg",
  "IMG_20221231_230627.jpg",
  "IMG_20230114_091715.jpg",
  "IMG_20230114_213153.jpg",
  "IMG_20231112_103835.jpg",
  "IMG_20240101_080309.jpg",
  "IMG_20240101_085535.jpg",
  "IMG_20240101_085603.jpg",
  "IMG_20240114_145607.jpg",
  "IMG_20240114_152148.jpg",
  "IMG_20241231_221332.jpg",
  "IMG_20241231_233839.jpg",
  "IMG_20250113_083209.jpg",
  "IMG_20250113_172817.jpg",
  "IMG_20250115_185954.jpg",
  "IMG_20250330_063136.jpg",
  "IMG_20251231_222300_739.jpg",
  "IMG_20251231_231845_372.jpg",
  "IMG_20251231_233552_010.jpg",
  "IMG_20260114_082021_344.jpg",
  "IMG_20260114_213459_606.jpg",
  "IMG_20260114_224822_154.jpg",
  "Snapchat-743416018.jpg",
].map((filename, index) => ({
  src: `/Rangoli/Rangoli/${filename}`,
  alt: `Handmade rangoli design ${index + 1} by Prasanna Rani`,
}));

export default function Rangoli() {
  useSeo(
    "Rangoli Art",
    "Explore handmade traditional, floral, festival, and colourful rangoli designs by Prasanna Rani."
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(
    null
  );

  const activePhoto =
    activeIndex === null
      ? null
      : rangoliPhotos[activeIndex] ?? null;

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + rangoliPhotos.length) %
          rangoliPhotos.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % rangoliPhotos.length
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
            Traditional Art
          </span>

          <h1 className="font-display text-5xl font-medium text-ink md:text-6xl">
            Rangoli Art
          </h1>

          <p className="mt-5 leading-7 text-ink-soft">
            Explore my handmade rangoli designs created for
            festivals, celebrations, and special occasions.
            Each design combines traditional patterns, floral
            details, and vibrant colours.
          </p>
        </header>

        <section
          aria-label="Rangoli design gallery"
          className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          {rangoliPhotos.map((photo, index) => (
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
            Custom Rangoli Designs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink-soft">
            Contact me for customized rangoli designs for
            festivals, celebrations, competitions, and
            special occasions.
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
            aria-label="Rangoli design enlarged view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={closeViewer}
              aria-label="Close rangoli design"
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
              aria-label="Previous rangoli design"
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
                Rangoli design{" "}
                {(activeIndex ?? 0) + 1} of{" "}
                {rangoliPhotos.length}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next rangoli design"
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
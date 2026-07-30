import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import PageTransition from "@/components/PageTransition";
import { useSeo } from "@/hooks/useSeo";

type ArtSize = "A3" | "A4";

type GalleryPhoto = {
  src: string;
  alt: string;
  size: ArtSize;
};

const createWebpPhotos = (
  size: ArtSize,
  count: number
): GalleryPhoto[] =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const folder = size.toLowerCase();

    return {
      src: `/gallery/${folder}/${folder}-art-${number}.webp`,
      alt: `${size} handmade artwork ${index + 1} by Prasanna Rani`,
      size,
    };
  });

const newA4Photos: GalleryPhoto[] = [
  {
    src: "/gallery/a4/IMG_20251018_163625_882.jpg",
    alt: "Handmade artwork 90 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250914_144249.jpg",
    alt: "Handmade artwork 91 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250822_103626.jpg",
    alt: "Handmade artwork 92 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250929_144921_189.jpg",
    alt: "Handmade artwork 93 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250407_191702.jpg",
    alt: "Handmade artwork 94 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20251018_164317_656.jpg",
    alt: "Handmade artwork 95 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250929_144453_238.jpg",
    alt: "Handmade artwork 96 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20251009_144029_526.jpg",
    alt: "Handmade artwork 97 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250824_120825.jpg",
    alt: "Handmade artwork 98 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250329_172940.jpg",
    alt: "Handmade artwork 99 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20251009_144113_480.jpg",
    alt: "Handmade artwork 100 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20211123_143930.jpg",
    alt: "Handmade artwork 101 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20250415_135930.jpg",
    alt: "Handmade artwork 102 by Prasanna Rani",
    size: "A4",
  },
  {
    src: "/gallery/a4/IMG_20251018_165246_519.jpg",
    alt: "Handmade artwork 103 by Prasanna Rani",
    size: "A4",
  },
];

const allPhotos: GalleryPhoto[] = [
  ...createWebpPhotos("A3", 24),
  ...createWebpPhotos("A4", 89),
  ...newA4Photos,
];

export default function Gallery() {
  useSeo(
    "Art Gallery",
    "Explore A3 and A4 handmade drawings and paintings by Prasanna Rani."
  );

  const [filter, setFilter] = useState<"All" | ArtSize>("All");

  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const visiblePhotos = useMemo(
    () =>
      filter === "All"
        ? allPhotos
        : allPhotos.filter(
            (photo) => photo.size === filter
          ),
    [filter]
  );

  const activePhoto =
    activeIndex === null
      ? null
      : visiblePhotos[activeIndex] ?? null;

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + visiblePhotos.length) %
          visiblePhotos.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % visiblePhotos.length
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
  }, [activePhoto, visiblePhotos.length]);

  return (
    <PageTransition>
      <main className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 block font-body text-xs uppercase tracking-[0.35em] text-gold">
            The Collection
          </span>

          <h1 className="font-display text-5xl font-medium text-ink md:text-6xl">
            Art Gallery
          </h1>

          <p className="mt-5 leading-7 text-ink-soft">
            Explore my handmade A3 and A4 drawings,
            created with patience, imagination, and
            attention to detail.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {(["All", "A3", "A4"] as const).map(
            (option) => {
              const count =
                option === "All"
                  ? allPhotos.length
                  : allPhotos.filter(
                      (photo) =>
                        photo.size === option
                    ).length;

              const selected =
                filter === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setFilter(option);
                    closeViewer();
                  }}
                  aria-pressed={selected}
                  className={`rounded-full border px-5 py-2 text-sm transition ${
                    selected
                      ? "border-gold bg-gold text-white shadow-soft"
                      : "border-gold/20 bg-white/70 text-ink-soft hover:border-gold/50"
                  }`}
                >
                  {option === "All"
                    ? "All Art"
                    : `${option} Drawings`}{" "}
                  ({count})
                </button>
              );
            }
          )}
        </div>

        <p className="mb-6 text-center text-sm text-ink-soft">
          Showing {visiblePhotos.length} artworks
        </p>

        <section
          aria-label={`${filter} artwork gallery`}
          className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          {visiblePhotos.map(
            (photo, index) => (
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
            )
          )}
        </section>
      </main>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Artwork enlarged view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={closeViewer}
              aria-label="Close artwork"
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
              aria-label="Previous artwork"
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
                Artwork {(activeIndex ?? 0) + 1} of{" "}
                {visiblePhotos.length}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next artwork"
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
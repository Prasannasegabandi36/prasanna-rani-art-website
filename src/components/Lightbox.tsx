import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Artwork } from "@/types/artwork";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import ArtworkImage from "./ArtworkImage";

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ artwork, onClose, onPrev, onNext }: LightboxProps) {
  useLockBodyScroll(Boolean(artwork));

  useEffect(() => {
    if (!artwork) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [artwork, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${artwork.title} — enlarged view`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 text-ivory/80 transition-colors hover:text-gold-light"
          >
            <X size={30} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-2 text-ivory transition-colors hover:bg-ivory/20 md:left-8"
          >
            <ChevronLeft size={26} />
          </button>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl bg-ivory shadow-2xl"
          >
            <div className="max-h-[65vh] overflow-hidden">
              <ArtworkImage
                src={artwork.image}
                alt={artwork.title}
                category={artwork.category}
                className="h-full max-h-[65vh] w-full object-contain bg-cream"
                eager
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-ink">{artwork.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-soft">
                {artwork.category} · {artwork.medium} · {artwork.year}
              </p>
            </div>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next artwork"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-2 text-ivory transition-colors hover:bg-ivory/20 md:right-8"
          >
            <ChevronRight size={26} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

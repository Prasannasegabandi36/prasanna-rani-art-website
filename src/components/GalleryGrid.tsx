import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Artwork } from "@/types/artwork";
import ArtworkImage from "./ArtworkImage";

interface GalleryGridProps {
  artworks: Artwork[];
  onSelect: (artwork: Artwork) => void;
  pageSize?: number;
}

export default function GalleryGrid({ artworks, onSelect, pageSize = 9 }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [artworks, pageSize]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((v) => Math.min(v + pageSize, artworks.length));
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [artworks.length, pageSize]);

  const visible = artworks.slice(0, visibleCount);

  if (artworks.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-ink/15 py-24 text-center">
        <p className="font-display text-2xl text-ink-soft">No artworks match your search.</p>
        <p className="mt-2 text-sm text-ink-soft/70">Try a different category or search term.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {visible.map((art, i) => (
          <motion.button
            key={art.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 9) * 0.05 }}
            onClick={() => onSelect(art)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-2xl text-left shadow-soft"
            aria-label={`Open ${art.title} in lightbox`}
          >
            <div className="relative overflow-hidden">
              <ArtworkImage
                src={art.image}
                alt={art.title}
                category={art.category}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-display text-lg text-ivory">{art.title}</h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-ivory/70">
                  {art.category}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {visibleCount < artworks.length && (
        <div ref={sentinelRef} className="flex justify-center py-10">
          <span className="text-xs uppercase tracking-[0.25em] text-ink-soft">Loading more…</span>
        </div>
      )}
    </div>
  );
}

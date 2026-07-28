import { useMemo, useState } from "react";
import PageTransition from "@/components/PageTransition";
import GalleryFilterBar from "@/components/GalleryFilterBar";
import GalleryGrid from "@/components/GalleryGrid";
import Lightbox from "@/components/Lightbox";
import { artworks } from "@/data/artworks";
import { filterArtworks } from "@/utils/filterArtworks";
import { useDebounce } from "@/hooks/useDebounce";
import { useSeo } from "@/hooks/useSeo";
import type { Artwork, ArtworkCategory } from "@/types/artwork";

export default function Gallery() {
  useSeo(
    "Gallery",
    "Browse the full gallery of pencil sketches, paintings, devotional art, portraits, and nature studies by Prasanna Rani."
  );

  const [category, setCategory] = useState<ArtworkCategory | "All">("All");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);
  const [active, setActive] = useState<Artwork | null>(null);

  const filtered = useMemo(
    () => filterArtworks(artworks, { category, query: debouncedQuery }),
    [category, debouncedQuery]
  );

  const activeIndex = active ? filtered.findIndex((a) => a.id === active.id) : -1;

  const goPrev = () => {
    if (activeIndex === -1) return;
    const prevIndex = (activeIndex - 1 + filtered.length) % filtered.length;
    setActive(filtered[prevIndex]);
  };

  const goNext = () => {
    if (activeIndex === -1) return;
    const nextIndex = (activeIndex + 1) % filtered.length;
    setActive(filtered[nextIndex]);
  };

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 block font-body text-xs uppercase tracking-[0.35em] text-gold">
            The Collection
          </span>
          <h1 className="font-display text-5xl font-medium text-ink md:text-6xl">Gallery</h1>
          <p className="mt-4 text-ink-soft">
            Every piece created so far, spanning pencil sketches, paintings, devotional art, and more.
          </p>
        </div>

        <GalleryFilterBar
          activeCategory={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          resultCount={filtered.length}
        />

        <GalleryGrid artworks={filtered} onSelect={setActive} />
      </section>

      <Lightbox artwork={active} onClose={() => setActive(null)} onPrev={goPrev} onNext={goNext} />
    </PageTransition>
  );
}

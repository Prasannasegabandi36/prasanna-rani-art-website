import { Search } from "lucide-react";
import type { ArtworkCategory } from "@/types/artwork";
import { categories } from "@/data/categories";

interface GalleryFilterBarProps {
  activeCategory: ArtworkCategory | "All";
  onCategoryChange: (category: ArtworkCategory | "All") => void;
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
}

export default function GalleryFilterBar({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  resultCount,
}: GalleryFilterBarProps) {
  const allCategories: (ArtworkCategory | "All")[] = ["All", ...categories];

  return (
    <div className="sticky top-20 z-30 -mx-6 mb-12 bg-ivory/90 px-6 py-4 backdrop-blur-md md:top-24 md:-mx-12 md:px-12 xl:-mx-24 xl:px-24">
      <div className="flex flex-col gap-5">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" size={17} />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search artworks..."
            aria-label="Search artworks"
            className="w-full rounded-full border border-ink/10 bg-white/70 py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter by category">
          {allCategories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                onClick={() => onCategoryChange(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "border-gold bg-gold text-ivory"
                    : "border-ink/15 bg-white/50 text-ink-soft hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-ink-soft" aria-live="polite">
          {resultCount} artwork{resultCount !== 1 ? "s" : ""} found
        </p>
      </div>
    </div>
  );
}

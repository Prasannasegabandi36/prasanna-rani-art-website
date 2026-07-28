import { useState } from "react";
import { Flower2 } from "lucide-react";
import type { ArtworkCategory } from "@/types/artwork";

interface ArtworkImageProps {
  src: string;
  alt: string;
  category?: ArtworkCategory;
  className?: string;
  eager?: boolean;
}

/**
 * Renders the artwork image, falling back to an elegant generated placeholder
 * (gradient + motif) if the file hasn't been added yet at `src`.
 * Once you drop a real image at the same path, it will display automatically.
 */
const gradientByCategory: Record<string, string> = {
  "Pencil Sketches": "from-ink-soft/20 via-cream to-lilac/30",
  Paintings: "from-peach/40 via-cream to-gold-light/40",
  "Devotional Art": "from-gold/30 via-blush to-peach/40",
  Portraits: "from-lilac/30 via-cream to-blush/40",
  "Nature & Floral Art": "from-blush/30 via-cream to-gold-light/30",
  "Rangoli & Traditional Art": "from-gold/40 via-peach/30 to-lilac/30",
  "Creative Artwork": "from-lilac/30 via-blush/20 to-gold-light/30",
};

export default function ArtworkImage({ src, alt, category, className = "", eager = false }: ArtworkImageProps) {
  const [errored, setErrored] = useState(false);
  const gradient = gradientByCategory[category ?? ""] ?? "from-cream via-blush/30 to-gold-light/30";

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradient} text-ink-soft ${className}`}
        role="img"
        aria-label={alt}
      >
        <Flower2 className="h-8 w-8 opacity-50" strokeWidth={1.25} />
        <span className="font-display text-sm italic tracking-wide opacity-70">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}

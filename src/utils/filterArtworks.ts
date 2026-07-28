import type { Artwork, ArtworkCategory } from "@/types/artwork";

interface FilterOptions {
  category?: ArtworkCategory | "All";
  query?: string;
}

export function filterArtworks(artworks: Artwork[], { category, query }: FilterOptions): Artwork[] {
  let result = artworks;

  if (category && category !== "All") {
    result = result.filter((art) => art.category === category);
  }

  if (query && query.trim().length > 0) {
    const q = query.trim().toLowerCase();
    result = result.filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.description.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.medium.toLowerCase().includes(q)
    );
  }

  return result;
}

export function getRelatedArtworks(artworks: Artwork[], current: Artwork, limit = 4): Artwork[] {
  return artworks
    .filter((art) => art.id !== current.id && art.category === current.category)
    .slice(0, limit)
    .concat(
      artworks.filter((art) => art.id !== current.id && art.category !== current.category)
    )
    .slice(0, limit);
}

export type ArtworkCategory =
  | "Pencil Sketches"
  | "Paintings"
  | "Devotional Art"
  | "Portraits"
  | "Nature & Floral Art"
  | "Rangoli & Traditional Art"
  | "Creative Artwork";

export type Medium =
  | "Pencil Sketch"
  | "Colour Pencil"
  | "Watercolour"
  | "Oil Pastel"
  | "Fabric Colours"
  | "Painting Colours";

export interface Artwork {
  id: string;
  title: string;
  /** Path to the artwork image. Drop a real file at this path to replace the placeholder. */
  image: string;
  category: ArtworkCategory;
  medium: Medium;
  year: number;
  description: string;
  featured: boolean;
}

import type { Artwork } from "@/types/artwork";

/**
 * Artwork catalogue.
 * Add as many entries as you like — the Gallery, Home, and Artwork Detail
 * pages all render dynamically from this array, so no component code needs
 * to change. Replace each `image` path with your own photographed artwork
 * (recommended: 1200px on the longest side, .jpg or .webp) using the same
 * filename, and the placeholder will automatically be replaced.
 */
export const artworks: Artwork[] = [
  {
    id: "krishna-flute-01",
    title: "Melody of Vrindavan",
    image: "/artworks/krishna-flute-01.jpg",
    category: "Devotional Art",
    medium: "Colour Pencil",
    year: 2024,
    description:
      "Lord Krishna lost in the melody of his flute beneath a moonlit Vrindavan sky. This piece explores gentle blues and golds to capture the stillness of devotion.",
    featured: true,
  },
  {
    id: "hanuman-devotion-01",
    title: "Boundless Devotion",
    image: "/artworks/hanuman-devotion-01.jpg",
    category: "Devotional Art",
    medium: "Pencil Sketch",
    year: 2024,
    description:
      "A detailed graphite study of Lord Hanuman, focused on capturing strength and unwavering devotion through expressive linework and deep shading.",
    featured: true,
  },
  {
    id: "jagannath-rath-01",
    title: "Rath Yatra",
    image: "/artworks/jagannath-rath-01.jpg",
    category: "Devotional Art",
    medium: "Painting Colours",
    year: 2023,
    description:
      "Lord Jagannath rendered in bold traditional colours, inspired by the energy and devotion of the annual chariot festival.",
    featured: false,
  },
  {
    id: "village-portrait-01",
    title: "Grandmother's Gaze",
    image: "/artworks/village-portrait-01.jpg",
    category: "Portraits",
    medium: "Pencil Sketch",
    year: 2024,
    description:
      "A tender graphite portrait study focused on capturing the warmth and wisdom carried in a lifetime of quiet expressions.",
    featured: true,
  },
  {
    id: "girl-jasmine-01",
    title: "Jasmine in Her Hair",
    image: "/artworks/girl-jasmine-01.jpg",
    category: "Portraits",
    medium: "Colour Pencil",
    year: 2023,
    description:
      "A young woman adorned with fresh jasmine flowers, a quiet everyday moment of South Indian tradition rendered in soft colour.",
    featured: false,
  },
  {
    id: "lotus-pond-01",
    title: "Lotus Pond at Dawn",
    image: "/artworks/lotus-pond-01.jpg",
    category: "Nature & Floral Art",
    medium: "Watercolour",
    year: 2024,
    description:
      "Soft washes of watercolour capture the first light falling across a still pond of blooming lotus flowers.",
    featured: true,
  },
  {
    id: "hibiscus-study-01",
    title: "Hibiscus Study",
    image: "/artworks/hibiscus-study-01.jpg",
    category: "Nature & Floral Art",
    medium: "Oil Pastel",
    year: 2023,
    description:
      "A vibrant close study of the hibiscus flower, built up in layers of oil pastel to capture texture and saturated colour.",
    featured: false,
  },
  {
    id: "mango-branch-01",
    title: "Mango Branch",
    image: "/artworks/mango-branch-01.jpg",
    category: "Nature & Floral Art",
    medium: "Watercolour",
    year: 2022,
    description:
      "A quiet still-life of a mango branch, painted to celebrate the small, overlooked beauty of everyday nature.",
    featured: false,
  },
  {
    id: "rangoli-festival-01",
    title: "Festival of Colours",
    image: "/artworks/rangoli-festival-01.jpg",
    category: "Rangoli & Traditional Art",
    medium: "Fabric Colours",
    year: 2024,
    description:
      "A symmetrical rangoli-inspired composition celebrating the geometry and colour that mark festival mornings across South India.",
    featured: true,
  },
  {
    id: "rangoli-diya-01",
    title: "Diya Rangoli",
    image: "/artworks/rangoli-diya-01.jpg",
    category: "Rangoli & Traditional Art",
    medium: "Painting Colours",
    year: 2023,
    description:
      "A rangoli motif built around a central diya, echoing the light and warmth of Diwali celebrations.",
    featured: false,
  },
  {
    id: "saree-drape-01",
    title: "The Drape of Tradition",
    image: "/artworks/saree-drape-01.jpg",
    category: "Paintings",
    medium: "Painting Colours",
    year: 2024,
    description:
      "A woman in a traditional silk saree, painted to honour the colour, texture, and grace of South Indian dress.",
    featured: true,
  },
  {
    id: "temple-evening-01",
    title: "Temple at Dusk",
    image: "/artworks/temple-evening-01.jpg",
    category: "Paintings",
    medium: "Watercolour",
    year: 2023,
    description:
      "Warm evening light settles over a temple gopuram, painted with loose, glowing washes of colour.",
    featured: false,
  },
  {
    id: "fisherman-life-01",
    title: "Morning Catch",
    image: "/artworks/fisherman-life-01.jpg",
    category: "Creative Artwork",
    medium: "Colour Pencil",
    year: 2022,
    description:
      "A study of everyday coastal life, capturing the quiet rhythm and dignity of a fisherman's morning routine.",
    featured: false,
  },
  {
    id: "peacock-study-01",
    title: "Peacock Study",
    image: "/artworks/peacock-study-01.jpg",
    category: "Nature & Floral Art",
    medium: "Oil Pastel",
    year: 2022,
    description:
      "India's national bird, rendered feather by feather in richly layered oil pastel to capture its iridescent colour.",
    featured: false,
  },
  {
    id: "child-festival-01",
    title: "First Diwali",
    image: "/artworks/child-festival-01.jpg",
    category: "Creative Artwork",
    medium: "Pencil Sketch",
    year: 2023,
    description:
      "A graphite study of a child's wide-eyed wonder while holding sparklers on Diwali night.",
    featured: false,
  },
  {
    id: "krishna-radha-01",
    title: "Eternal Bond",
    image: "/artworks/krishna-radha-01.jpg",
    category: "Devotional Art",
    medium: "Painting Colours",
    year: 2024,
    description:
      "Radha and Krishna painted together in a garden setting, exploring the devotional theme of divine love.",
    featured: false,
  },
];

export const totalArtworks = artworks.length;

import type { TimelineItem, StatItem } from "@/types/timeline";

export const timeline: TimelineItem[] = [
  {
    id: "beginnings",
    year: "Childhood",
    title: "First strokes",
    description:
      "Drawing on the margins of notebooks in Kolakaluru, first discovering a love for capturing the world in pencil.",
  },
  {
    id: "sketching",
    year: "Early Years",
    title: "Falling in love with graphite",
    description:
      "Spent years mastering shading and proportion through pencil sketches of family, neighbours, and daily village life.",
  },
  {
    id: "colour",
    year: "Growth",
    title: "Discovering colour",
    description:
      "Expanded into colour pencil, watercolour, and oil pastel — learning to translate the warmth of Indian festivals and nature into colour.",
  },
  {
    id: "devotional",
    year: "Recent Years",
    title: "Devotional themes",
    description:
      "Began focusing on devotional art — Krishna, Hanuman, and Jagannath — finding deep meaning in painting figures of faith.",
  },
  {
    id: "today",
    year: "Today",
    title: "Sharing the work",
    description:
      "Now creating and sharing artwork widely, from portraits and rangoli-inspired pieces to nature studies, while continuing to grow with every new piece.",
  },
];

export const stats: StatItem[] = [
  { id: "experience", label: "Years of Practice", value: 8, suffix: "+" },
  { id: "artworks", label: "Artworks Created", value: 120, suffix: "+" },
  { id: "categories", label: "Art Categories", value: 7 },
  { id: "competitions", label: "Competitions & Exhibits", value: 6, suffix: "+" },
];

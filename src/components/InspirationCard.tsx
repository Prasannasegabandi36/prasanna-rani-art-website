import { motion } from "framer-motion";
import type { InspirationItem } from "@/types/inspiration";
import ArtworkImage from "./ArtworkImage";

export default function InspirationCard({ item, index = 0 }: { item: InspirationItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07 }}
      className="group relative overflow-hidden rounded-3xl shadow-soft"
    >
      <div className="aspect-square w-full overflow-hidden">
        <ArtworkImage
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-6">
        <h3 className="font-display text-xl text-ivory">{item.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-ivory/75">{item.description}</p>
      </div>
    </motion.div>
  );
}

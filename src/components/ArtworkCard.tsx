import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import type { Artwork } from "@/types/artwork";
import ArtworkImage from "./ArtworkImage";

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06, ease: "easeOut" }}
      className="group"
    >
      <Link to={`/gallery/${artwork.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl shadow-soft">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <ArtworkImage
              src={artwork.image}
              alt={artwork.title}
              category={artwork.category}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="translate-y-3 p-5 transition-transform duration-500 group-hover:translate-y-0">
              <span className="mb-1 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold-light">
                <Eye size={13} /> View artwork
              </span>
            </div>
          </div>
          <span className="absolute right-3 top-3 rounded-full bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-ink-soft backdrop-blur">
            {artwork.medium}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-gold">
            {artwork.title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-soft">
            {artwork.category} · {artwork.year}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

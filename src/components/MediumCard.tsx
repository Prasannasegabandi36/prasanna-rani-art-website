import { motion } from "framer-motion";
import { Pencil, Palette, Droplets, Brush, Shirt, Paintbrush } from "lucide-react";
import type { MediumInfo } from "@/types/mediumInfo";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  pencil: Pencil,
  palette: Palette,
  droplets: Droplets,
  brush: Brush,
  shirt: Shirt,
  paintbrush: Paintbrush,
};

export default function MediumCard({ medium, index = 0 }: { medium: MediumInfo; index?: number }) {
  const Icon = iconMap[medium.icon] ?? Palette;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-ink/5 bg-white/70 p-8 shadow-soft transition-transform hover:-translate-y-2"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-gold-light/30 to-blush/30 blur-xl transition-transform duration-500 group-hover:scale-150" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cream to-blush/50">
        <Icon size={26} strokeWidth={1.5} className="text-gold" />
      </div>
      <h3 className="relative mt-6 font-display text-2xl text-ink">{medium.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{medium.description}</p>
    </motion.div>
  );
}

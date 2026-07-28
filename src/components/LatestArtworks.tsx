import { artworks } from "@/data/artworks";
import SectionHeading from "./SectionHeading";
import ArtworkCard from "./ArtworkCard";

export default function LatestArtworks() {
  const latest = [...artworks].sort((a, b) => b.year - a.year).slice(0, 3);

  return (
    <section className="bg-cream/60 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Fresh from the Studio"
          title="Latest Artworks"
          description="The most recent pieces to leave the easel."
        />
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((art, i) => (
            <ArtworkCard key={art.id} artwork={art} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

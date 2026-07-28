import { artworks } from "@/data/artworks";
import SectionHeading from "./SectionHeading";
import ArtworkCard from "./ArtworkCard";
import { Button } from "./Button";

export default function FeaturedArtworks() {
  const featured = artworks.filter((a) => a.featured).slice(0, 6);

  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Artworks"
        description="A closer look at pieces that best capture the range of subject and technique in the studio."
      />

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((art, i) => (
          <ArtworkCard key={art.id} artwork={art} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button to="/gallery" variant="outline">
          View Full Gallery
        </Button>
      </div>
    </section>
  );
}

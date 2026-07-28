import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import MediumCard from "@/components/MediumCard";
import { mediums } from "@/data/mediums";
import { useSeo } from "@/hooks/useSeo";

export default function Mediums() {
  useSeo(
    "Mediums",
    "Explore the mediums Prasanna Rani works in — pencil sketch, colour pencil, watercolour, oil pastel, fabric colours, and painting colours."
  );

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <SectionHeading
          eyebrow="Materials & Craft"
          title="Mediums"
          description="Each medium brings its own texture, pace, and mood to a piece — here's a look at the tools behind the artwork."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mediums.map((medium, i) => (
            <MediumCard key={medium.id} medium={medium} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

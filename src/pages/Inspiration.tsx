import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import InspirationCard from "@/components/InspirationCard";
import { inspirations } from "@/data/inspirations";
import { useSeo } from "@/hooks/useSeo";

export default function Inspiration() {
  useSeo(
    "Inspiration",
    "The sources of inspiration behind Prasanna Rani's artwork — nature, flowers, Indian culture, festivals, and devotional figures."
  );

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <SectionHeading
          eyebrow="Where It Comes From"
          title="Inspiration"
          description="The people, places, and beliefs that shape every piece of art created in the studio."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inspirations.map((item, i) => (
            <InspirationCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

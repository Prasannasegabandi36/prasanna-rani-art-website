import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import StatCard from "@/components/StatCard";
import ArtworkImage from "@/components/ArtworkImage";
import { stats } from "@/data/timeline";
import { useSeo } from "@/hooks/useSeo";

export default function About() {
  useSeo(
    "About the Artist",
    "Learn about Prasanna Rani's journey, creative process, inspirations, and artistic philosophy."
  );

  return (
    <PageTransition>
      <section className="container-px mx-auto grid max-w-7xl gap-16 pb-24 pt-36 md:grid-cols-2 md:items-center md:pt-44">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 block font-body text-xs uppercase tracking-[0.35em] text-gold">
            The Artist
          </span>
          <h1 className="font-display text-5xl font-medium leading-tight text-ink md:text-6xl">
            Segabandi Prasanna Rani
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            I am a passionate artist who enjoys creating pencil sketches and paintings. My
            artwork is inspired by nature, Indian culture, devotional themes, portraits, and
            everyday life. I enjoy experimenting with different colours and techniques while
            keeping my artwork simple, expressive, and meaningful.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Working from Kolakaluru in Guntur District, Andhra Pradesh, every piece begins with
            something familiar — a flower from the courtyard, a story from scripture, a face from
            memory — and grows, layer by layer, into a finished artwork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <ArtworkImage
              src="/artist/prasanna-rani-portrait.jpg"
              alt="Portrait of the artist, Prasanna Rani"
              className="h-full w-full object-cover"
              eager
            />
          </div>
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-gold-shimmer bg-[length:200%_auto] animate-shimmer opacity-80 md:h-36 md:w-36" />
        </motion.div>
      </section>

      <section className="bg-cream/60 py-24 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="By the Numbers" title="Journey So Far" />
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <SectionHeading
          eyebrow="The Journey"
          title="Artist's Timeline"
          description="From first pencil marks to a growing body of devotional and cultural artwork."
        />
        <div className="mt-16">
          <Timeline />
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-ink/5 bg-white/70 p-10 shadow-soft"
          >
            <h3 className="font-display text-2xl text-ink">Creative Process</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Every artwork begins with observation — of light, colour, and gesture — followed by
              rough thumbnail sketches to plan composition. From there, the piece is built slowly
              in layers, whether graphite tone or washes of colour, with frequent pauses to study
              the work from a distance before continuing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-ink/5 bg-white/70 p-10 shadow-soft"
          >
            <h3 className="font-display text-2xl text-ink">Art Philosophy</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Art doesn't need to be complicated to be meaningful. Whether the subject is a deity
              or a mango branch, the goal is the same: to render it with honesty, patience, and
              enough simplicity that the feeling behind it comes through clearly.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

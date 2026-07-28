import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/Button";
import { useSeo } from "@/hooks/useSeo";

const categories = [
  {
    title: "Simple Mehndi",
    description: "Elegant and minimal designs suitable for any occasion.",
  },
  {
    title: "Floral Mehndi",
    description: "Beautiful floral patterns with leaves, flowers, and vines.",
  },
  {
    title: "Arabic Mehndi",
    description: "Stylish Arabic-inspired designs with bold flowing patterns.",
  },
  {
    title: "Festival Mehndi",
    description: "Special designs for festivals and family celebrations.",
  },
  {
    title: "Bridal Mehndi",
    description: "Detailed and customized designs for weddings and brides.",
  },
];

export default function Mehndi() {
  useSeo(
    "Mehndi Art & Sessions",
    "Explore handmade simple, floral, Arabic, festival, and bridal mehndi designs by Prasanna Rani."
  );

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block font-body text-xs uppercase tracking-[0.35em] text-gold">
            Traditional Beauty
          </span>

          <h1 className="font-display text-5xl font-medium text-ink md:text-6xl">
            Mehndi Art & Sessions
          </h1>

          <p className="mt-5 leading-7 text-ink-soft">
            Explore my handmade mehndi designs for festivals, weddings, and
            special occasions. Simple, floral, Arabic, bridal, and customized
            designs are available.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-ink/5 bg-white/70 p-8 shadow-soft"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold">
                <Sparkles size={21} />
              </span>

              <h2 className="font-display text-2xl text-ink">
                {category.title}
              </h2>

              <p className="mt-3 leading-7 text-ink-soft">
                {category.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-br from-cream via-blush/30 to-lilac/20 px-6 py-14 text-center md:px-12">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Mehndi Gallery Coming Soon
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink-soft">
            My mehndi photographs will be added here soon. Contact me for
            availability, customized designs, and session bookings.
          </p>

          <div className="mt-8">
            <Button to="/contact">Book a Mehndi Session</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
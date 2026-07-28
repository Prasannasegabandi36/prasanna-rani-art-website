import { motion } from "framer-motion";
import { Mail, Youtube, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ContactForm from "@/components/ContactForm";
import SocialIcons from "@/components/SocialIcons";
import { useSeo } from "@/hooks/useSeo";

export default function Contact() {
  useSeo(
    "Contact",
    "Get in touch with artist Prasanna Rani for commissions, collaborations, or general inquiries."
  );

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 block font-body text-xs uppercase tracking-[0.35em] text-gold">
            Let's Talk
          </span>
          <h1 className="font-display text-5xl font-medium text-ink md:text-6xl">Contact</h1>
          <p className="mt-4 text-ink-soft">
            For commissions, collaborations, or just to say hello — reach out any time.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="space-y-6 rounded-3xl border border-ink/5 bg-white/70 p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">Email</p>
                  <a
                    href="mailto:segabandiprasannarani7@gmail.com"
                    className="text-sm font-medium text-ink hover:text-gold"
                  >
                    segabandiprasannarani7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                  <Youtube size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">YouTube</p>
                  <a
                    href="https://www.youtube.com/@Prasukrish3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink hover:text-gold"
                  >
                    @Prasukrish3
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">Location</p>
                  <p className="text-sm font-medium text-ink">
                    Kolakaluru, Guntur District, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-soft">Follow</p>
                <SocialIcons />
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/5 shadow-soft">
              <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-cream via-blush/30 to-lilac/20 text-ink-soft">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-gold" size={26} />
                  <p className="text-xs uppercase tracking-[0.2em]">
                    Map — Kolakaluru, Guntur District
                  </p>
                  <p className="mt-1 text-[11px] text-ink-soft/70">
                    Embed a Google Map here with your location
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-ink/5 bg-white/70 p-8 shadow-soft md:col-span-3 md:p-10"
          >
            <h2 className="mb-6 font-display text-2xl text-ink">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

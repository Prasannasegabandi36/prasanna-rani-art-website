import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Connect this handler to your email service or form backend of choice
    // (e.g. Formspree, EmailJS) — the UI flow is already wired up below.
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-3xl border border-gold/30 bg-cream/60 px-8 py-16 text-center"
      >
        <CheckCircle2 className="text-gold" size={36} />
        <h3 className="font-display text-2xl text-ink">Message sent</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Thank you for reaching out — a reply will come by email as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ink-soft">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ink-soft">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ink-soft">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink focus:border-gold"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink focus:border-gold"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-ivory shadow-soft transition-colors hover:bg-gold disabled:opacity-60"
      >
        <Send size={16} />
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

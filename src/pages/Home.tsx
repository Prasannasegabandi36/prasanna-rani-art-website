import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import { useSeo } from "@/hooks/useSeo";

export default function Home() {
  useSeo(
    "Artist Portfolio",
    "Prasanna Rani is a traditional Indian artist creating pencil sketches, paintings, devotional art, rangoli, and mehndi designs inspired by nature and Indian culture."
  );

  return (
    <PageTransition>
      <Hero />
      <QuoteSection />
      <CTASection />
    </PageTransition>
  );
}
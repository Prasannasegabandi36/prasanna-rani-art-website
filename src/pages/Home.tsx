import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import WhyICreate from "@/components/WhyICreate";
import LatestArtworks from "@/components/LatestArtworks";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import { useSeo } from "@/hooks/useSeo";

export default function Home() {
  useSeo(
    "Artist Portfolio",
    "Prasanna Rani is a traditional Indian artist creating pencil sketches, paintings, and devotional art inspired by nature, culture, and everyday life."
  );

  return (
    <PageTransition>
      <Hero />
      <FeaturedArtworks />
      <WhyICreate />
      <LatestArtworks />
      <QuoteSection />
      <CTASection />
    </PageTransition>
  );
}

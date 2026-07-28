import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Share2, Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkImage from "@/components/ArtworkImage";
import { Button } from "@/components/Button";
import { artworks } from "@/data/artworks";
import { getRelatedArtworks } from "@/utils/filterArtworks";
import { useSeo } from "@/hooks/useSeo";
import NotFound from "./NotFound";

export default function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const index = artworks.findIndex((a) => a.id === id);
  const artwork = index !== -1 ? artworks[index] : undefined;

  useSeo(
    artwork ? artwork.title : "Artwork",
    artwork ? artwork.description : "Artwork by Prasanna Rani."
  );

  if (!artwork) return <NotFound />;

  const prevArtwork = artworks[(index - 1 + artworks.length) % artworks.length];
  const nextArtwork = artworks[(index + 1) % artworks.length];
  const related = getRelatedArtworks(artworks, artwork, 3);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: artwork.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // user cancelled share — no action needed
    }
  };

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-6xl pb-24 pt-32 md:pt-40">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold"
        >
          <ArrowLeft size={15} /> Back to Gallery
        </button>

        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-soft"
          >
            <ArtworkImage
              src={artwork.image}
              alt={artwork.title}
              category={artwork.category}
              className="aspect-[4/5] w-full object-cover"
              eager
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {artwork.category}
            </span>
            <h1 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">
              {artwork.title}
            </h1>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/10 py-6 text-sm">
              <div>
                <dt className="text-ink-soft">Medium</dt>
                <dd className="mt-1 font-medium text-ink">{artwork.medium}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Year</dt>
                <dd className="mt-1 font-medium text-ink">{artwork.year}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Category</dt>
                <dd className="mt-1 font-medium text-ink">{artwork.category}</dd>
              </div>
            </dl>

            <p className="mt-6 text-base leading-relaxed text-ink-soft">{artwork.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="solid">
                Inquire About This Piece
              </Button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm uppercase tracking-[0.12em] text-ink transition-colors hover:border-gold hover:text-gold"
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                {copied ? "Link Copied" : "Share"}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-ink/10 pt-8">
          <Link
            to={`/gallery/${prevArtwork.id}`}
            className="group flex items-center gap-3 text-ink-soft transition-colors hover:text-gold"
          >
            <ArrowLeft size={18} />
            <span className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.2em]">Previous</span>
              <span className="font-display text-lg">{prevArtwork.title}</span>
            </span>
          </Link>
          <Link
            to={`/gallery/${nextArtwork.id}`}
            className="group flex items-center gap-3 text-right text-ink-soft transition-colors hover:text-gold"
          >
            <span>
              <span className="block text-[10px] uppercase tracking-[0.2em]">Next</span>
              <span className="font-display text-lg">{nextArtwork.title}</span>
            </span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl text-ink">Related Artworks</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((art, i) => (
                <ArtworkCard key={art.id} artwork={art} index={i} />
              ))}
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
}

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import { useSeo } from "@/hooks/useSeo";

const rangoliImages = [
  "IMG-20241231-WA0116.jpg",
  "IMG-20241231-WA0120.jpg",
  "IMG-20250101-WA0034.jpg",
  "IMG-20250105-WA0013.jpg",
  "IMG-20250105-WA0014.jpg",
  "IMG_20211231_225729.jpg",
  "IMG_20220121_093054.jpg",
  "IMG_20221225_081535.jpg",
  "IMG_20221225_082605.jpg",
  "IMG_20221231_230627.jpg",
  "IMG_20230114_091715.jpg",
  "IMG_20230114_213153.jpg",
  "IMG_20231112_103835.jpg",
  "IMG_20240101_080309.jpg",
  "IMG_20240101_085535.jpg",
  "IMG_20240101_085603.jpg",
  "IMG_20240114_145607.jpg",
  "IMG_20240114_152148.jpg",
  "IMG_20241231_221332.jpg",
  "IMG_20241231_233839.jpg",
  "IMG_20250113_083209.jpg",
  "IMG_20250113_172817.jpg",
  "IMG_20250115_185954.jpg",
  "IMG_20250330_063136.jpg",
  "IMG_20251231_222300_739.jpg",
  "IMG_20251231_231845_372.jpg",
  "IMG_20251231_233552_010.jpg",
  "IMG_20260114_082021_344.jpg",
  "IMG_20260114_213459_606.jpg",
  "IMG_20260114_224822_154.jpg",
  "Snapchat-743416018.jpg",
];

export default function Rangoli() {
  useSeo(
    "Rangoli",
    "Explore colourful and traditional rangoli designs created by Prasanna Rani."
  );

  return (
    <PageTransition>
      <section className="container-px mx-auto max-w-7xl pb-24 pt-32 md:pt-40">
        <SectionHeading
          eyebrow="Colours of Tradition"
          title="Rangoli"
          description="A collection of colourful rangoli designs created for festivals, celebrations, and special occasions."
        />

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {rangoliImages.map((image, index) => (
            <motion.figure
              key={image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.04, 0.3),
              }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <img
                src={`${import.meta.env.BASE_URL}Rangoli/Rangoli/${image}`}
                alt={`Rangoli design ${index + 1} by Prasanna Rani`}
                loading={index < 3 ? "eager" : "lazy"}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
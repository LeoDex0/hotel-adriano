import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Gallery from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery — Hotel Adriano Rimini",
  description:
    "The hotel, the rooftop, the old town, and the shoreline beyond it — a full set of stills from Hotel Adriano.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Rimini, in frames"
        description="A fuller set of stills from the hotel, the rooftop, and the shoreline beyond it."
        image="/images/gallery-umbrellas.jpg"
      />
      <Gallery heading={false} />
    </>
  );
}

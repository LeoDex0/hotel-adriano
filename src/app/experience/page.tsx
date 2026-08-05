import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { EXPERIENCES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiences — Hotel Fellini Rimini",
  description:
    "Sunset sails, a Romagna cooking class, an Adriatic spa ritual, and a private Fellini film night — six ways to spend a day at Hotel Fellini.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Ways to spend a day here"
        description="Beyond the room and the beach — six experiences our concierge team can arrange, most of them with a day or two of notice."
        image="/images/gallery-dining.jpg"
      />
      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {EXPERIENCES.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </>
  );
}

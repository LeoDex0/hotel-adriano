import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BedDouble, Eye, Maximize } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import RoomCard from "@/components/ui/RoomCard";
import { ROOMS } from "@/lib/data";

const SECONDARY_IMAGE: Record<string, { src: string; caption: string }> = {
  amarcord: {
    src: "/images/gallery-piazza-malatesta.jpg",
    caption: "A five-minute walk to the old town this room is named for the memory of.",
  },
  "dolce-vita": {
    src: "/images/gallery-pool.jpg",
    caption: "Evenings usually end on the rooftop, one floor above this room.",
  },
  "otto-e-mezzo": {
    src: "/images/gallery-coast-day.jpg",
    caption: "The same stretch of Adriatic the room's balcony looks straight out to.",
  },
};

export async function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.id === slug);
  if (!room) return {};
  return {
    title: `${room.name} — Hotel Adriano`,
    description: room.description,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.id === slug);
  if (!room) notFound();

  const secondary = SECONDARY_IMAGE[room.id];
  const otherRooms = ROOMS.filter((r) => r.id !== room.id);

  return (
    <>
      <section className="relative flex min-h-[64vh] items-end overflow-hidden bg-ink pt-32">
        <div className="absolute inset-0">
          <Image
            src={room.image}
            alt={room.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
          <Link
            href="/rooms"
            className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper/60 hover:text-paper"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Rooms & Suites
          </Link>
          <p className="mb-4 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-gold-bright">
            <span className="h-px w-10 bg-gold-bright" />
            {room.film}
          </p>
          <RevealText
            as="h1"
            text={room.name}
            inView={false}
            className="font-display text-5xl leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-7xl"
          />
          <p className="mt-4 font-display text-xl italic text-gold-bright sm:text-2xl">
            {room.tagline}
          </p>
        </div>
      </section>

      <section className="bg-ink pb-24 pt-4 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-10">
          <div>
            <p className="max-w-xl text-base leading-relaxed text-paper/70 lg:text-lg">
              {room.description}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-y border-ink-line py-6">
              <div className="flex flex-col items-start gap-2">
                <Maximize className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span className="text-sm text-paper/80">{room.size} m²</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <BedDouble className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span className="text-sm text-paper/80">{room.bed}</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Eye className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span className="text-sm text-paper/80">{room.view}</span>
              </div>
            </div>

            {secondary && (
              <figure className="mt-10">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={secondary.src}
                    alt={secondary.caption}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-paper/50">
                  {secondary.caption}
                </figcaption>
              </figure>
            )}
          </div>

          <aside className="h-fit border border-ink-line bg-ink-soft p-8">
            <p className="font-display text-3xl text-paper">
              &euro;{room.price}
              <span className="text-base text-paper/50"> / night</span>
            </p>
            <p className="mt-2 text-sm text-paper/50">
              Includes breakfast &amp; private beach access
            </p>
            <Link
              href={`/book?room=${room.id}`}
              data-cursor="Book"
              className="mt-8 block rounded-full bg-gold px-8 py-3.5 text-center font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright"
            >
              Reserve This Room
            </Link>
            <Link
              href="/contact"
              className="mt-4 block text-center text-xs uppercase tracking-[0.2em] text-paper/50 hover:text-paper"
            >
              Have a question first? →
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-ink-soft py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-8 font-sans text-xs uppercase tracking-[0.3em] text-gold">
            The Other Rooms
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {otherRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

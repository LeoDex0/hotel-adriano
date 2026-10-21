import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RoomCard from "@/components/ui/RoomCard";
import { ROOMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rooms & Suites — Hotel Adriano",
  description:
    "Three rooms, three Fellini films — Amarcord, La Dolce Vita, and 8½ — each with its own mood and view on the seafront.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Suites"
        title="Three rooms, three films"
        description="Forty-two keys across the building, but only three characters. Each room borrows its name, and its mood, from a different Fellini picture."
        image="/images/room-otto-e-mezzo.jpg"
      />
      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-10">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </>
  );
}

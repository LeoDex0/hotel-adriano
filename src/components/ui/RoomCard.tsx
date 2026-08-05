import Image from "next/image";
import Link from "next/link";
import type { RoomType } from "@/lib/data";

export default function RoomCard({ room }: { room: RoomType }) {
  return (
    <article className="group relative flex w-full flex-col overflow-hidden bg-ink-soft">
      <Link
        href={`/rooms/${room.id}`}
        data-cursor="View"
        className="relative aspect-[4/2.9] w-full overflow-hidden lg:aspect-[4/3.1]"
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-paper/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-paper/80 backdrop-blur-sm">
          {room.film}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/rooms/${room.id}`}>
          <h3 className="font-display text-2xl text-paper transition-colors group-hover:text-gold-bright">
            {room.name}
          </h3>
        </Link>
        <p className="mt-1 font-display italic text-gold-bright">
          {room.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">
          {room.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ink-line pt-4 text-xs uppercase tracking-wide text-paper/50">
          <span>{room.size} m²</span>
          <span>{room.bed}</span>
          <span>{room.view}</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="font-display text-2xl text-paper">
            &euro;{room.price}
            <span className="text-sm text-paper/50"> / night</span>
          </p>
          <Link
            href={`/book?room=${room.id}`}
            data-cursor="Book"
            className="inline-block rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Reserve
          </Link>
        </div>
      </div>
    </article>
  );
}

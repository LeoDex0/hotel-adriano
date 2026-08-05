import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/data";

export default function JournalCard({ post }: { post: JournalPost }) {
  return (
    <Link
      href={`/journal/${post.id}`}
      data-cursor="Read"
      className="group flex flex-col overflow-hidden bg-ink-soft"
    >
      <div className="relative aspect-[4/2.6] w-full overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-paper/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-paper/80 backdrop-blur-sm">
          {post.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-paper/40">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.readTime}
        </p>
        <h3 className="mt-3 font-display text-xl text-paper transition-colors group-hover:text-gold-bright">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">
          {post.excerpt}
        </p>
        <span className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-bright">
          Read the story →
        </span>
      </div>
    </Link>
  );
}

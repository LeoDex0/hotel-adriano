import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import JournalCard from "@/components/ui/JournalCard";
import { JOURNAL } from "@/lib/data";

export async function generateStaticParams() {
  return JOURNAL.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL.find((p) => p.id === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Hotel Fellini Journal`,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = JOURNAL.find((p) => p.id === slug);
  if (!post) notFound();

  const otherPosts = JOURNAL.filter((p) => p.id !== post.id);

  return (
    <>
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-ink pt-32">
        <div className="absolute inset-0">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 lg:px-10">
          <Link
            href="/journal"
            className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper/60 hover:text-paper"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Journal
          </Link>
          <p className="mb-4 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-gold-bright">
            <span className="h-px w-10 bg-gold-bright" />
            {post.tag}
          </p>
          <RevealText
            as="h1"
            text={post.title}
            inView={false}
            className="font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl"
          />
          <p className="mt-5 text-sm uppercase tracking-[0.15em] text-paper/50">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
        </div>
      </section>

      <article className="bg-ink pb-24 pt-4 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-paper/75 lg:text-lg">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4 border-t border-ink-line pt-10">
            <Link
              href="/book"
              className="inline-block rounded-full bg-gold px-8 py-3.5 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright"
            >
              Reserve Your Stay
            </Link>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 font-sans text-[13px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper"
            >
              More from the Journal
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-ink-soft py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-8 font-sans text-xs uppercase tracking-[0.3em] text-gold">
            More Stories
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <JournalCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

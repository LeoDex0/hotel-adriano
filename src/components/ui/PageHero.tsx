import Image from "next/image";
import RevealText from "./RevealText";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[44vh] items-end overflow-hidden bg-ink pt-32">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
        <p className="mb-4 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-gold-bright">
          <span className="h-px w-10 bg-gold-bright" />
          {eyebrow}
        </p>
        <RevealText
          as="h1"
          text={title}
          inView={false}
          className="font-display text-5xl leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-7xl"
        />
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

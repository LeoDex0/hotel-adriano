import { cn } from "@/lib/utils";

export default function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative h-14 w-full overflow-hidden md:h-20",
        flip && "rotate-180",
        className
      )}
    >
      <svg
        className="animate-marquee-reverse absolute -left-1/4 h-full w-[160%]"
        viewBox="0 0 1600 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0,50 C200,95 400,5 600,50 C800,95 1000,5 1200,50 C1400,95 1600,5 1800,50 L1800,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

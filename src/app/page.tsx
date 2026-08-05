import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import JournalTeaser from "@/components/sections/JournalTeaser";
import ClosingCta from "@/components/sections/ClosingCta";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="bg-ink">
        <WaveDivider className="text-paper" />
      </div>
      <Rooms />
      <Experience />
      <Gallery limit={6} />
      <div className="bg-ink">
        <WaveDivider className="text-paper" />
      </div>
      <Testimonials />
      <JournalTeaser />
      <div className="bg-paper">
        <WaveDivider className="text-ink" />
      </div>
      <ClosingCta />
    </>
  );
}

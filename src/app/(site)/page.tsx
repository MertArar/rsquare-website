import Hero from "@/features/home/hero/Hero";
import About from "@/features/home/about/About";
import Games from "@/features/home/games/Games";
import Publish from "@/features/home/publish/Publish";
import Career from "@/features/home/career/Career";
import Partners from "@/features/home/partners/Partners";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Games />
      <Publish />
      <Career />
      <Partners />
    </main>
  );
}
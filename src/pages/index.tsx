import Hero from "@/components/hero/hero";
import Particle from "@/components/hero/particle";
import About from "@/components/about";
import Work from "@/components/work";

function HomePage() {
  return (
    <>
      <Particle />
      <Hero />
      <About />
      <Work />
    </>
  );
}

export default HomePage;

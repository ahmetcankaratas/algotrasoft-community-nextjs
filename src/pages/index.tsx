import Hero from "@/components/hero/hero";
import Particle from "@/components/hero/particle";
import Layout from "@/components/layout/layout";
import About from "@/components/about";
import Work from "@/components/work";

function HomePage() {
  return (
    <Layout>
      <Particle />
      <Hero />
      <About />
      <Work />
    </Layout>
  );
}

export default HomePage;

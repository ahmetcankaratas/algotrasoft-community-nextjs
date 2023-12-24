import Head from "next/head";
import Hero from "@/components/hero/hero";
import Particle from "@/components/hero/particle";
import About from "@/components/about";
import Work from "@/components/work";

function HomePage() {
  return (
    <>
      <Head>
        <title>Algotrasoft</title>
        <meta
          name="description"
          content="The Algorithmic Trading Society of Turkey was founded in March 2020 with the aim of bringing people together to develop their understanding of the application algorithms in a financially driven context."
        ></meta>
      </Head>
      <Particle />
      <Hero />
      <About />
      <Work />
    </>
  );
}

export default HomePage;

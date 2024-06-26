import Container from "@/components/container";
import MainLayout from "@/components/main-layout";
import Hero from "./hero";
import About from "./about";
import Project from "./project";
import Contact from "./contact";
import MarqueeText from "./marquee-text";

const Home = () => {
  return (
    <MainLayout>
      <section className="w-full min-h-screen pt-[70px] text-light">
        <Container>
          <Hero />
        </Container>
        <MarqueeText baseVelocity={-5} fontSize="48px" color="text-acceent">
          Frontend Website Developer.
        </MarqueeText>
        <MarqueeText baseVelocity={5} fontSize="48px" color="text-acceent">
          Frontend Website Developer.
        </MarqueeText>
        <Container>
          <About />
          <Project />
          <Contact />
        </Container>
      </section>
    </MainLayout>
  );
};

export default Home;

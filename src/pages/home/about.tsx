import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <main
      className="pt-[80px] flex flex-col items-start justify-start gap-y-4"
    >
      <header className="w-full">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold relative w-fit before:absolute before:w-full before:h-[4px] before:rounded-full before:top-full before:bg-light">
          About Me
        </h1>
      </header>
      <div className="flex flex-col items-start justify-start gap-y-2">
        <p className="text-base sm:text-lg md:text-xl">
          Hello! I'm Muhamad Kopal Aljamili, a passionate Frontend Website
          Engineer based in Bogor, Indonesia. With a keen eye for design and a
          love for coding, I specialize in creating visually stunning and
          user-friendly web interfaces. I honed my skills at Alterra Academy,
          where I developed a strong foundation in web development and a deep
          understanding of modern technologies. My journey in web development is
          driven by the desire to deliver exceptional digital experiences,
          blending creativity with cutting-edge technology. When I'm not coding,
          you can find me exploring the vibrant culture and lush landscapes of
          Bogor, always seeking inspiration from the world around me. Let's
          build something amazing together!
        </p>
        <Button className="mt-4 flex items-center justify-center gap-x-2">
          Download CV <Download />
        </Button>
      </div>
    </main>
  );
};

export default About;

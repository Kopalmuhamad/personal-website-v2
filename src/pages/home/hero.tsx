import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Hero = () => {
  return (
    <main className="flex items-center justify-start pt-[40px] pb-[40px]">
      <div className="flex items-start justify-start flex-col gap-y-2">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold">
          Hello my name is
        </h1>
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-acceent">
          Muhamad Kopal Aljamili
        </h3>
        <p className="text-base sm:text-xl md:text-2xl font-normal mt-2">
          I'm a Frontend Web Engineer based in Bogor,Indonesia
        </p>
        <Button className="flex items-center justify-center gap-x-2">
          Hire Me <User />
        </Button>
      </div>
    </main>
  );
};

export default Hero;

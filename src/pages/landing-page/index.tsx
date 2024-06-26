import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slideFromBottom = {
  initial: { opacity: 0, y: 200 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      delay: index * 0.1,
    },
  }),
  exit: { opacity: 0, y: -100 },
};
const slideFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
};

const letters = [
  { char: "H", color: "text-light", weight: "font-semibold" },
  { char: "E", color: "text-light", weight: "font-semibold" },
  { char: "Y", color: "text-light", weight: "font-semibold" },
  { char: "P", color: "text-acceent", weight: "font-bold" },
  { char: "A", color: "text-acceent", weight: "font-bold" },
  { char: "L", color: "text-acceent", weight: "font-bold" },
  { char: "!", color: "text-acceent", weight: "font-bold" },
];

const LandingPage = () => {
  const [visibleLetters, setVisibleLetters] = useState(
    new Array(letters.length).fill(false)
  );

  return (
    <section className="w-full min-h-screen overflow-hidden">
      <main className="container mx-auto min-h-screen grid grid-cols-1 grid-rows-2">
        <header className="w-full h-full flex flex-col md:flex-row items-start justify-between py-2">
          <motion.h1
            variants={slideFromTop}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              delay: 0.5,
            }}
            className="text-xl font-semibold"
          >
            Kopal Muhamad
          </motion.h1>
          <div className="flex flex-col md:flex-row items-start justify-start gap-x-6">
            <motion.span
              variants={slideFromTop}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                delay: 0.8,
              }}
              className="flex max-w-[300px] pl-4 relative mt-4 md:mt-0 py-4 before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:rounded-full before:bg-light text-light before:md:w-2 before:md:h-full"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error
              voluptatibus expedita sed mollitia eaque incidunt pariatur aut
              officia ipsa.
            </motion.span>
            <motion.span
              variants={slideFromTop}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                delay: 1,
              }}
              className="flex max-w-[300px] pl-4 relative mt-4 md:mt-0 py-4 before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:rounded-full before:bg-acceent text-acceent before:md:w-2 before:md:h-full"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              tempore voluptatibus quia vero. Sapiente neque reiciendis,
              repellendus consectetur voluptas placeat.
            </motion.span>
          </div>
        </header>
        <div className="min-h-full flex flex-col items-center justify-start md:flex-row md:justify-between">
          <h1 className="text-[16vw] flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={slideFromBottom}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`${letter.color} ${letter.weight}`}
                style={{
                  display: visibleLetters[index] ? "inline-block" : "none",
                }}
                onAnimationComplete={() => {
                  const newVisibleLetters = [...visibleLetters];
                  newVisibleLetters[index] = true;
                  setVisibleLetters(newVisibleLetters);
                }}
              >
                {letter.char}
              </motion.span>
            ))}
          </h1>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              delay: 1.2,
            }}
          >
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full w-max h-max p-2 text-acceent"
            >
              <Link to={"/home"}>
                <ChevronRight className="h-20 w-20" />
              </Link>
            </Button>
          </motion.button>
        </div>
      </main>
    </section>
  );
};

export default LandingPage;

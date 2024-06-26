import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  fontSize?: string;
  color?: string;
}

const MarqueeText: React.FC<ParallaxProps> = ({
  children,
  baseVelocity = 100,
  fontSize = "64px",
  color,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="tracking-[-2px] leading-[4rem] whitespace-nowrap overflow-hidden flex flex-nowrap">
      <motion.div
        className="font-medium uppercase flex whitespace-nowrap"
        style={{ x, fontSize }}
      >
        <span className={`block mr-8 ${color}`}>{children} </span>
        <span className={`block mr-8 ${color}`}>{children} </span>
        <span className={`block mr-8 ${color}`}>{children} </span>
        <span className={`block mr-8 ${color}`}>{children} </span>
      </motion.div>
    </div>
  );
};

export default MarqueeText;

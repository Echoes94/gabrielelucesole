import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  parallax?: boolean;
  parallaxIntensity?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  parallax = false,
  parallaxIntensity = 50
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(
    scrollYProgress, 
    [0, 1], 
    [parallaxIntensity, -parallaxIntensity]
  );

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 60, x: 0 };
      case "down": return { y: -60, x: 0 };
      case "left": return { x: 60, y: 0 };
      case "right": return { x: -60, y: 0 };
      case "none": return { x: 0, y: 0 };
      default: return { y: 60, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition(),
      filter: "blur(8px)",
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (parallax) {
    return (
      <motion.div
        ref={ref}
        style={{ y: parallaxY }}
        className={className}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

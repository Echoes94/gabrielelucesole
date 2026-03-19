import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionLiteProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
  blur?: boolean;
  staggerChildren?: number;
}

const AnimatedSectionLite = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  scale = false,
  blur = false,
  staggerChildren,
}: AnimatedSectionLiteProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 30, x: 0 };
      case "down": return { y: -30, x: 0 };
      case "left": return { x: -40, y: 0 };
      case "right": return { x: 40, y: 0 };
      case "none": return { x: 0, y: 0 };
      default: return { y: 30, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition(),
      ...(scale ? { scale: 0.95 } : {}),
      ...(blur ? { filter: "blur(6px)" } : {}),
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      ...(scale ? { scale: 1 } : {}),
      ...(blur ? { filter: "blur(0px)" } : {}),
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...(staggerChildren ? { staggerChildren } : {}),
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSectionLite;

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionLiteProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

// Lightweight version of AnimatedSection without parallax and heavy effects
const AnimatedSectionLite = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up"
}: AnimatedSectionLiteProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 20, x: 0 };
      case "down": return { y: -20, x: 0 };
      case "left": return { x: 20, y: 0 };
      case "right": return { x: -20, y: 0 };
      case "none": return { x: 0, y: 0 };
      default: return { y: 20, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition()
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSectionLite;

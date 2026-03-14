import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fade" | "blur" | "scale" | "slide";

interface AnimatedSectionLiteProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  type?: AnimationType;
  staggerChildren?: number;
}

const AnimatedSectionLite = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  type = "fade",
  staggerChildren,
}: AnimatedSectionLiteProps) => {
  const distance = type === "slide" ? 40 : 20;
  
  const getOffset = () => {
    switch (direction) {
      case "up": return { y: distance };
      case "down": return { y: -distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
      case "none": return {};
      default: return { y: distance };
    }
  };

  const transition: Transition = {
    duration: type === "slide" ? 0.7 : 0.6,
    delay,
    ease: [0.16, 1, 0.3, 1],
    ...(staggerChildren ? { staggerChildren } : {}),
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
      ...(type === "blur" ? { filter: "blur(8px)" } : {}),
      ...(type === "scale" ? { scale: 0.92 } : {}),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      ...(type === "blur" ? { filter: "blur(0px)" } : {}),
      ...(type === "scale" ? { scale: 1 } : {}),
      transition,
    },
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

// Child item for staggered animations
export const AnimatedItem = ({ 
  children, 
  className = "",
  type = "fade",
  direction = "up",
}: { 
  children: ReactNode; 
  className?: string;
  type?: AnimationType;
  direction?: "up" | "down" | "left" | "right" | "none";
}) => {
  const distance = type === "slide" ? 30 : 16;
  const getOffset = () => {
    switch (direction) {
      case "up": return { y: distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
      default: return { y: distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
      ...(type === "blur" ? { filter: "blur(6px)" } : {}),
      ...(type === "scale" ? { scale: 0.9 } : {}),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      ...(type === "blur" ? { filter: "blur(0px)" } : {}),
      ...(type === "scale" ? { scale: 1 } : {}),
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSectionLite;

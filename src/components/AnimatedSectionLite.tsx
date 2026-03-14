import { motion, Variants } from "framer-motion";
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
  const getInitialPosition = () => {
    const distance = type === "slide" ? 40 : 20;
    switch (direction) {
      case "up": return { y: distance, x: 0 };
      case "down": return { y: -distance, x: 0 };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
      case "none": return { x: 0, y: 0 };
      default: return { y: distance, x: 0 };
    }
  };

  const getHiddenState = () => {
    const base = { opacity: 0, ...getInitialPosition() };
    switch (type) {
      case "blur":
        return { ...base, filter: "blur(8px)" };
      case "scale":
        return { ...base, scale: 0.92 };
      case "slide":
        return { ...base };
      default:
        return base;
    }
  };

  const getVisibleState = () => {
    const base: Record<string, unknown> = { 
      opacity: 1, y: 0, x: 0,
      transition: {
        duration: type === "slide" ? 0.7 : 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
        ...(staggerChildren ? { staggerChildren } : {}),
      }
    };
    switch (type) {
      case "blur":
        return { ...base, filter: "blur(0px)" };
      case "scale":
        return { ...base, scale: 1 };
      default:
        return base;
    }
  };

  const variants: Variants = {
    hidden: getHiddenState(),
    visible: getVisibleState(),
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
  const getPos = () => {
    switch (direction) {
      case "up": return { y: distance, x: 0 };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
      default: return { y: distance, x: 0 };
    }
  };

  const hidden: Record<string, unknown> = { opacity: 0, ...getPos() };
  const visible: Record<string, unknown> = { 
    opacity: 1, y: 0, x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  if (type === "blur") {
    hidden.filter = "blur(6px)";
    visible.filter = "blur(0px)";
  }
  if (type === "scale") {
    hidden.scale = 0.9;
    visible.scale = 1;
  }

  return (
    <motion.div variants={{ hidden, visible }} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSectionLite;

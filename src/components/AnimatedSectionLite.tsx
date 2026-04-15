import { ReactNode, useRef, useEffect, useState, CSSProperties } from "react";

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
}: AnimatedSectionLiteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-60px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    const transforms: string[] = [];
    if (!isVisible) {
      switch (direction) {
        case "up": transforms.push("translateY(30px)"); break;
        case "down": transforms.push("translateY(-30px)"); break;
        case "left": transforms.push("translateX(-40px)"); break;
        case "right": transforms.push("translateX(40px)"); break;
      }
      if (scale) transforms.push("scale(0.95)");
    } else {
      transforms.push("translate(0, 0)");
      if (scale) transforms.push("scale(1)");
    }
    return transforms.join(" ") || "none";
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    filter: blur && !isVisible ? "blur(6px)" : "blur(0px)",
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, filter 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSectionLite;

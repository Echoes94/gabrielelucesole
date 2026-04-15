import { ReactNode, useRef, useEffect, useState, CSSProperties } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  parallax?: boolean;
  parallaxIntensity?: number;
  scale?: boolean;
  blur?: boolean;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  scale = false,
  blur = false,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
      { rootMargin: "-100px", threshold: 0 }
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
        case "left": transforms.push("translateX(30px)"); break;
        case "right": transforms.push("translateX(-30px)"); break;
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
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSection;

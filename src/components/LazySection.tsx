import { useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
}

const LazySection = ({ 
  children, 
  className = ""
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" as any });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? children : (
        <div className="min-h-[200px] animate-pulse bg-muted/10 rounded-2xl" />
      )}
    </div>
  );
};

export default LazySection;

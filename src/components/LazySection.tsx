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
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? children : (
        <div className="min-h-[200px] animate-pulse bg-muted/10 rounded-2xl" />
      )}
    </div>
  );
};

export default LazySection;

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
}

const BlurImage = ({
  src,
  alt,
  placeholder,
  className,
  imgClassName,
  loading = "lazy",
}: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === "eager");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === "eager") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Blur placeholder */}
      {placeholder && !isLoaded && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg"
        />
      )}
      {!placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-muted/20 animate-pulse" aria-hidden="true" />
      )}
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            imgClassName
          )}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default BlurImage;

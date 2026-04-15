import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-200"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-colors duration-300"
        aria-label="Torna all'inizio della pagina"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ScrollToTop;

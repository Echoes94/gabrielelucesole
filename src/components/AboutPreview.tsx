import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSectionLite from "./AnimatedSectionLite";
import gabrielePhoto from "@/assets/gabriele-photo.webp";

const AboutPreview = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="about-preview-heading">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/[0.02] to-transparent" aria-hidden="true" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image - simplified, no parallax */}
          <div className="relative order-2 lg:order-1">
            <AnimatedSectionLite direction="left" className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:mx-0">
              {/* Single decorative frame */}
              <div className="absolute -inset-2 sm:-inset-3 border border-cyan/10 rounded-xl sm:rounded-2xl" aria-hidden="true" />
              
              {/* Main image with lazy loading */}
              <div className="relative h-full rounded-lg sm:rounded-xl overflow-hidden">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted/20 animate-pulse" aria-hidden="true" />
                )}
                <img
                  ref={imgRef}
                  src={gabrielePhoto}
                  alt="Gabriele Lucesole - Coach Professionista"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" aria-hidden="true" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:right-auto lg:-left-3 glass rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <p className="font-display text-base sm:text-lg text-cyan">13 Anni</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">di ricerche sul campo</p>
              </div>
            </AnimatedSectionLite>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSectionLite direction="right">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground border border-border rounded-full mb-5 sm:mb-8">
                Non sei solo! Ti capisco, ci sono passato anch'io…
              </span>

              <h2 id="about-preview-heading" className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-8 leading-[1.15]">
                <span className="block text-foreground/80">Piacere,</span>
                <span className="text-gradient block">Gabriele Lucesole</span>
                <span className="block text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 text-muted-foreground font-serif font-normal">
                  Coach Professionista
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <p className="font-serif text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Soffrivo per il male che vedevo nel mondo. Mi sentivo solo e senza punti di riferimento. Ho fatto terra bruciata intorno a me e sono andato all in per cercare il senso della vita.
                </p>
                <p className="font-serif text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Dopo <span className="text-cyan">13 Anni di ricerche sul campo</span>: l'epifania!
                </p>
                <p className="font-serif text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                  🧩 Tutti i pezzi del puzzle si sono uniti nel <span className="text-cyan">Metodo EFO – Essere Felici Ora</span>
                </p>
              </div>

              <Button variant="hero" className="w-full sm:w-auto" asChild>
                <Link to="/chi-sono" aria-label="Leggi la storia completa di Gabriele Lucesole">
                  Leggi la mia storia
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedSectionLite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setImageLoaded(true);
  }, []);
  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Static Background image with lazy fade-in */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Simplified background elements - no continuous animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan/5 rounded-full blur-[80px] md:blur-[120px] opacity-40" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--cyan) / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        className="container-narrow relative z-10 text-center px-5"
        style={{
          opacity,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan/80 border border-cyan/20 rounded-full mb-6 sm:mb-10">
            Con il Metodo EFO®
          </span>
        </motion.div>

        {/* Main headline - simplified animation */}
        <motion.h1
          id="hero-heading"
          className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-5 sm:mb-8"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <span className="block">Dalla crisi esistenziale</span>
          <span className="text-gradient block">alla tua Autorealizzazione</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-serif text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          Supera l'inquietudine con un nuovo approccio integrato tra antica saggezza e neuroscienze moderne
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-20"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10"
            asChild
          >
            <a href="mailto:gabriele.lucesole@gmail.com" aria-label="Fissa una sessione gratuita - invia email">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Fissa Sessione GRATIS
            </a>
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10"
            asChild
          >
            <a href="#problema" aria-label="Scopri come riempire il vuoto interiore">
              Riempi il Vuoto
              <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        {/* Trust indicators - enhanced visibility */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          {[
            { text: "13+ anni di ricerca" },
            { icon: "📚", text: "526 libri letti" },
            { icon: "🎓", text: "Diploma ICF Coach" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-cyan/20 backdrop-blur-sm"
            >
              <span className="text-base" aria-hidden="true">
                {item.icon}
              </span>
              <span className="text-sm sm:text-base font-medium text-foreground/90">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - CSS animation instead of framer-motion */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
      </div>
    </section>
  );
};
export default HeroSection;

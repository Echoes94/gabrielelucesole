import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="hero-heading">
      {/* Pure gradient background - no image */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/20 to-background" />

      {/* Subtle vignette effect for depth */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(250 30% 3% / 0.5) 100%)'
      }} />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan/8 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-accent/5 rounded-full blur-[60px] md:blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--cyan) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div className="container-narrow relative z-10 text-center px-5" style={{
        opacity
      }}>
        {/* Eyebrow - more visible */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan border border-cyan/40 rounded-full mb-8 sm:mb-12">
            Con il Metodo EFO®
          </span>
        </motion.div>

        {/* Main headline - more breathing room */}
        <motion.h1 id="hero-heading" className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-8 sm:mb-10" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
          <span className="block">Dalla crisi esistenziale</span>
          <span className="text-gradient block">alla tua Autorealizzazione</span>
        </motion.h1>

        {/* Subheadline - larger on mobile */}
        <motion.p className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-10 sm:mb-14 leading-relaxed px-2" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
          Supera l'inquietudine con un nuovo approccio integrato tra antica saggezza e neuroscienze moderne
        </motion.p>

        {/* CTA buttons - better mobile spacing */}
        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-20" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com" aria-label="Fissa una sessione gratuita - invia email">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Fissa Sessione GRATIS
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
            <a href="#problema" aria-label="Scopri come riempire il vuoto interiore">
              Riempi il Vuoto
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        {/* Trust indicators - more prominent */}
        <motion.div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-xs sm:text-sm text-foreground/70" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }}>
          {["13+ anni di ricerca", "526 libri letti", "Diploma ICF Coach Professionista"].map((item, index) => <div key={index} className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" aria-hidden="true" />
              <span>{item}</span>
            </div>)}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - subtle, no bounce */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 opacity-40 hover:opacity-60 transition-opacity" aria-hidden="true">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>;
};
export default HeroSection;

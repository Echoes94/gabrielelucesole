import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: backgroundY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan/5 rounded-full blur-[80px] md:blur-[120px]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--cyan) / 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <motion.div 
        className="container-narrow relative z-10 text-center px-5"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan/80 border border-cyan/20 rounded-full mb-6 sm:mb-10">
            Con il Metodo EFO®
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-5 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Dalla crisi esistenziale
          </motion.span>
          <motion.span 
            className="text-gradient block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            alla tua Autorealizzazione
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="font-serif text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Supera l'inquietudine con un nuovo approccio integrato tra antica saggezza e neuroscienze moderne
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Fissa Sessione Gratuita
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
            <a href="#problema">
              Riempi il Vuoto
              <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-8 md:gap-12 text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            "13+ anni di ricerca",
            "526 libri letti", 
            "Diploma ICF Coach Professionista"
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.15, duration: 0.4 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

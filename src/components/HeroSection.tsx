import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--cyan) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-narrow relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-cyan border border-cyan/30 rounded-full mb-8">
            Con il Metodo EFO®
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dalla crisi esistenziale<br />
          <span className="text-gradient">alla tua Autorealizzazione</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Supera l'inquietudine con un nuovo approccio integrato tra antica saggezza e neuroscienze moderne
        </motion.p>

        <motion.p 
          className="font-serif text-base text-cyan mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Continua a leggere… 👇🏻
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              <Mail className="h-5 w-5" />
              Fissa Sessione Gratuita
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#problema">
              Riempi il Vuoto
              <ArrowDown className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.span 
              className="w-2 h-2 rounded-full bg-cyan"
              animate={{ boxShadow: ["0 0 10px hsl(197 65% 70% / 0.3)", "0 0 20px hsl(197 65% 70% / 0.6)", "0 0 10px hsl(197 65% 70% / 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>13+ anni di ricerca</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.span 
              className="w-2 h-2 rounded-full bg-cyan"
              animate={{ boxShadow: ["0 0 10px hsl(197 65% 70% / 0.3)", "0 0 20px hsl(197 65% 70% / 0.6)", "0 0 10px hsl(197 65% 70% / 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <span>Coach ICF Certificato</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.span 
              className="w-2 h-2 rounded-full bg-cyan"
              animate={{ boxShadow: ["0 0 10px hsl(197 65% 70% / 0.3)", "0 0 20px hsl(197 65% 70% / 0.6)", "0 0 10px hsl(197 65% 70% / 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <span>526 libri letti</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6 text-cyan/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section className="section-padding bg-card/50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan/[0.03] rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection className="text-center">
          {/* Icon */}
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-8 sm:mb-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
          </motion.div>

          {/* Content */}
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground border border-border rounded-full mb-5 sm:mb-8">
            Conosciamoci
          </span>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 leading-tight">
            <span className="block text-foreground/80">Fissa una sessione di</span>
            <span className="text-gradient block">professional coaching GRATIS</span>
          </h2>

          <p className="font-serif text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-3 sm:mb-4 italic leading-relaxed px-2">
            "Il vero viaggio non consiste nel cercare nuove terre, ma nell'avere nuovi occhi che guardino queste stesse terre."
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/50 mb-8 sm:mb-12">
            — Marcel Proust
          </p>

          {/* CTA button */}
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Inizia la Tua Trasformazione
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>

          {/* Trust note */}
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-6 sm:mt-8">
            Senza impegno • 30+ minuti di conversazione autentica
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;

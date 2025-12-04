import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-card to-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection className="text-center">
          {/* Icon */}
          <motion.div 
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center"
            animate={{ 
              boxShadow: ["0 0 20px hsl(197 65% 70% / 0.2)", "0 0 40px hsl(197 65% 70% / 0.4)", "0 0 20px hsl(197 65% 70% / 0.2)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mail className="h-10 w-10 text-cyan" />
          </motion.div>

          {/* Content */}
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            Conosciamoci
          </span>
          
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            Fissa una sessione di<br />
            <span className="text-gradient">professional coaching GRATIS</span>
          </h2>

          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 italic">
            "Il vero viaggio non consiste nel cercare nuove terre, ma nell'avere nuovi occhi che guardino queste stesse terre."
          </p>
          <p className="text-sm text-muted-foreground/60 mb-10">— Marcel Proust</p>

          {/* CTA button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="mailto:gabriele.lucesole@gmail.com">
                <Mail className="h-5 w-5" />
                Inizia la Tua Trasformazione
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Trust note */}
          <p className="text-xs text-muted-foreground mt-6">
            Senza impegno • 30+ minuti di conversazione autentica
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;

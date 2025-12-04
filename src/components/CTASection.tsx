import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background via-card to-primary relative overflow-hidden">
      {/* Parallax background effects */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan/30" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="container-narrow relative z-10"
        style={{ scale }}
      >
        <AnimatedSection className="text-center">
          {/* Icon with pulse */}
          <motion.div 
            className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center relative"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-cyan/30"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border border-cyan/30"
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mail className="h-12 w-12 text-cyan" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.span 
            className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conosciamoci
          </motion.span>
          
          <motion.h2 
            className="font-display text-3xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Fissa una sessione di
            </motion.span>
            <motion.span 
              className="text-gradient block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              professional coaching GRATIS
            </motion.span>
          </motion.h2>

          <motion.p 
            className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 italic"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            "Il vero viaggio non consiste nel cercare nuove terre, ma nell'avere nuovi occhi che guardino queste stesse terre."
          </motion.p>
          <motion.p 
            className="text-sm text-muted-foreground/60 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            — Marcel Proust
          </motion.p>

          {/* CTA button with advanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-accent/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Mail className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Inizia la Tua Trasformazione</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 relative z-10" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust note */}
          <motion.p 
            className="text-xs text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Senza impegno • 30+ minuti di conversazione autentica
          </motion.p>
        </AnimatedSection>
      </motion.div>
    </section>
  );
};

export default CTASection;

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import gabrielePhoto from "@/assets/gabriele-photo.webp";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Animated background accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(to left, hsl(var(--cyan) / 0.05), transparent)"
        }}
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-cyan/10 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border border-accent/10 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with parallax */}
          <motion.div 
            className="relative order-2 lg:order-1"
            style={{ y: imageY }}
          >
            <AnimatedSection direction="left" className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frames with animation */}
              <motion.div 
                className="absolute -inset-4 border border-cyan/20 rounded-3xl"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute -inset-8 border border-cyan/10 rounded-3xl"
                initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              />
              
              {/* Main image with reveal */}
              <motion.div 
                className="relative h-full rounded-2xl overflow-hidden glow-cyan"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={gabrielePhoto}
                  alt="Gabriele Lucesole - Coach Professionista"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Badge with bounce */}
              <motion.div 
                className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 glass rounded-xl px-4 py-3"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <motion.p 
                  className="font-display text-lg text-cyan"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  13 Anni
                </motion.p>
                <p className="text-xs text-muted-foreground">di ricerche sul campo</p>
              </motion.div>
            </AnimatedSection>
          </motion.div>

          {/* Content with parallax */}
          <motion.div className="order-1 lg:order-2" style={{ y: contentY }}>
            <AnimatedSection direction="right">
              <motion.span 
                className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Non sei solo! Ti capisco, ci sono passato anch'io…
              </motion.span>

              <motion.h2 
                className="font-display text-3xl md:text-4xl lg:text-5xl mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Piacere,
                </motion.span>
                <motion.span 
                  className="text-gradient block"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Gabriele Lucesole
                </motion.span>
                <motion.span 
                  className="block text-xl md:text-2xl mt-2 text-muted-foreground font-serif"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Coach Professionista
                </motion.span>
              </motion.h2>

              <div className="space-y-4 mb-8">
                {[
                  "Soffrivo per il male che vedevo nel mondo. Mi sentivo solo e senza punti di riferimento. Ho fatto terra bruciata intorno a me e sono andato all in per cercare il senso della vita.",
                  null,
                  "🧩 Tutti i pezzi del puzzle si sono uniti nel Metodo EFO – Essere Felici Ora"
                ].map((text, index) => (
                  text === null ? (
                    <motion.p 
                      key={index}
                      className="font-serif text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      Dopo <span className="text-cyan font-medium">13 Anni di ricerche sul campo</span>: l'epifania!
                    </motion.p>
                  ) : (
                    <motion.p 
                      key={index}
                      className={`font-serif leading-relaxed ${index === 2 ? 'text-foreground text-lg' : 'text-muted-foreground'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {index === 2 ? (
                        <>
                          {text.split('Metodo EFO')[0]}
                          <span className="text-cyan font-medium">Metodo EFO – Essere Felici Ora</span>
                        </>
                      ) : text}
                    </motion.p>
                  )
                ))}
              </div>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" asChild>
                    <Link to="/chi-sono">
                      Leggi la mia storia
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

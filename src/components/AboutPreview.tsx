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

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/[0.02] to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image with parallax */}
          <motion.div 
            className="relative order-2 lg:order-1"
            style={{ y: imageY }}
          >
            <AnimatedSection direction="left" className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:mx-0">
              {/* Single decorative frame */}
              <motion.div 
                className="absolute -inset-2 sm:-inset-3 border border-cyan/10 rounded-xl sm:rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
              
              {/* Main image */}
              <motion.div 
                className="relative h-full rounded-lg sm:rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={gabrielePhoto}
                  alt="Gabriele Lucesole - Coach Professionista"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Badge */}
              <motion.div 
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:right-auto lg:-left-3 glass rounded-lg px-3 sm:px-4 py-2 sm:py-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <p className="font-display text-base sm:text-lg text-cyan">13 Anni</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">di ricerche sul campo</p>
              </motion.div>
            </AnimatedSection>
          </motion.div>

          {/* Content */}
          <motion.div className="order-1 lg:order-2" style={{ y: contentY }}>
            <AnimatedSection direction="right">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground border border-border rounded-full mb-5 sm:mb-8">
                Non sei solo! Ti capisco, ci sono passato anch'io…
              </span>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-8 leading-[1.15]">
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
                <Link to="/chi-sono">
                  Leggi la mia storia
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

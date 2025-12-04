import { Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Nicolò E.",
    text: "La mia esperienza con Gabriele è stata molto positiva. In poche sessioni di professional coaching è riuscito a darmi un nuovo punto di vista, che non avevo mai preso in considerazione, aiutandomi a migliorare sensibilmente il mio focus durante le 4 sessioni previste (cosa fondamentale per un freelance come me). Il risultato è stato raggiunto grazie a domande mirate ed esercizi pratici, veloci e dall'effetto immediato come la mindfulness. Oltre questo, è da segnalare il lato umano di Gabriele, che guida le sessioni con metodo e molta empatia, rendendosi sempre disponibile a chiarire ogni singolo dubbio.",
    videoId: "1c_-VgFLzRPyl5aJE2f456NaduPodUYNx"
  },
  {
    name: "Luca L.",
    text: "Il risultato è stato raggiunto grazie a domande mirate ed esercizi pratici, veloci e dall'effetto immediato come la mindfulness. Oltre questo, è da segnalare il lato umano di Gabriele, che guida le sessioni con metodo e molta empatia.",
    videoId: null
  },
  {
    name: "Luca G.",
    text: "Gabriele ha una capacità rara di vedere ciò che non riesci a vedere da solo. Mi ha aiutato a ritrovare energia, ho perso 4kg e gestisco meglio lo stress quotidiano. La trasformazione è stata più rapida di anni di terapia.",
    videoId: "1bXnXExxCKSBGn66dOWjcInfud0NF9qWi"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: patternY }}
      >
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--cyan)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-cyan/10 rounded-full"
        animate={{ y: [0, -30, 0], rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 border border-accent/10 rounded-full"
        animate={{ y: [0, 30, 0], rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6"
            animate={{ 
              boxShadow: ["0 0 0 0 hsl(197 65% 70% / 0)", "0 0 0 15px hsl(197 65% 70% / 0.1)", "0 0 0 0 hsl(197 65% 70% / 0)"]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Testimonianze
          </motion.span>
          <motion.h2 
            className="font-display text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Storie di <span className="text-gradient">Trasformazione</span>
          </motion.h2>
          <motion.p 
            className="font-serif text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Le parole di chi ha già iniziato il viaggio verso l'autorealizzazione
          </motion.p>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="space-y-12 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className={`grid ${testimonial.videoId ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-3xl mx-auto'} gap-8 items-center gradient-border rounded-2xl p-6 md:p-8 bg-gradient-card`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px hsl(197 65% 70% / 0.2)"
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Video embed with reveal animation */}
                {testimonial.videoId && (
                  <motion.div 
                    className="relative aspect-video rounded-xl overflow-hidden bg-background/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <iframe 
                      src={`https://drive.google.com/file/d/${testimonial.videoId}/preview`}
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      className="absolute inset-0 w-full h-full"
                      title={`Video testimonianza di ${testimonial.name}`}
                    />
                  </motion.div>
                )}

                {/* Content */}
                <div className={testimonial.videoId ? '' : 'text-center'}>
                  {/* Quote icon with animation */}
                  <motion.div 
                    className={`w-10 h-10 rounded-full bg-cyan flex items-center justify-center mb-6 ${!testimonial.videoId ? 'mx-auto' : ''}`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Quote className="h-5 w-5 text-background" />
                  </motion.div>

                  <motion.p 
                    className="font-serif text-muted-foreground leading-relaxed mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    "{testimonial.text}"
                  </motion.p>

                  {/* Author with stagger */}
                  <motion.div 
                    className={`flex items-center gap-3 ${!testimonial.videoId ? 'justify-center' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-accent flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="font-display text-lg text-background">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-display text-lg text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Coachee</p>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div 
                    className={`mt-6 ${!testimonial.videoId ? 'flex justify-center' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" size="sm" asChild>
                        <a href="mailto:gabriele.lucesole@gmail.com">
                          Fissa Sessione Gratis
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

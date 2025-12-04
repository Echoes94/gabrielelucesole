import { Quote } from "lucide-react";
import { motion } from "framer-motion";
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
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--cyan)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            Testimonianze
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Storie di <span className="text-gradient">Trasformazione</span>
          </h2>
          <p className="font-serif text-muted-foreground max-w-xl mx-auto">
            Le parole di chi ha già iniziato il viaggio verso l'autorealizzazione
          </p>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="space-y-12 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
            >
              <motion.div
                className={`grid ${testimonial.videoId ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-3xl mx-auto'} gap-8 items-center gradient-border rounded-2xl p-6 md:p-8 bg-gradient-card`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Video embed */}
                {testimonial.videoId && (
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-background/50">
                    <iframe 
                      src={`https://drive.google.com/file/d/${testimonial.videoId}/preview`}
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      className="absolute inset-0 w-full h-full"
                      title={`Video testimonianza di ${testimonial.name}`}
                    />
                  </div>
                )}

                {/* Content */}
                <div className={testimonial.videoId ? '' : 'text-center'}>
                  {/* Quote icon */}
                  <div className={`w-10 h-10 rounded-full bg-cyan flex items-center justify-center mb-6 ${!testimonial.videoId ? 'mx-auto' : ''}`}>
                    <Quote className="h-5 w-5 text-background" />
                  </div>

                  <p className="font-serif text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className={`flex items-center gap-3 ${!testimonial.videoId ? 'justify-center' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-accent flex items-center justify-center">
                      <span className="font-display text-lg text-background">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-lg text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Coachee</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`mt-6 ${!testimonial.videoId ? 'flex justify-center' : ''}`}>
                    <Button variant="hero" size="sm" asChild>
                      <a href="mailto:gabriele.lucesole@gmail.com">
                        Fissa Sessione Gratis
                      </a>
                    </Button>
                  </div>
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

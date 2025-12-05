import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Nicolò E.",
    role: "Copywriter",
    text: "Ho aperto partita IVA, un obiettivo che sembrava irraggiungibile fino a pochi mesi fa a causa della mia bassa autostima e della sindrome dell'impostore. Avevo ansia a propormi ai potenziali clienti, ma ho deciso di cambiare. Grazie al coaching di Gabriele, ho trasformato il mio mindset e la mia autostima. Ora ho i miei primi clienti e guadagno.",
    videoId: "1c_-VgFLzRPyl5aJE2f456NaduPodUYNx",
  },
  {
    name: "Luca L.",
    role: "Brand Strategist",
    text: "La mia esperienza con Gabriele è stata molto positiva. In poche sessioni di professional coaching è riuscito a darmi un nuovo punto di vista, che non avevo mai preso in considerazione, aiutandomi a migliorare sensibilmente il mio focus. Il risultato è stato raggiunto grazie a domande mirate ed esercizi pratici.",
    videoId: null,
  },
  {
    name: "Luca G.",
    role: "Media Buyer",
    text: "Gabriele ha una capacità rara di vedere ciò che non riesci a vedere da solo. Mi ha aiutato a ritrovare energia, ho perso 4kg e gestisco meglio lo stress quotidiano. La trasformazione è stata più rapida di anni di terapia.",
    videoId: "1bXnXExxCKSBGn66dOWjcInfud0NF9qWi",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-cyan/[0.02] rounded-full blur-[120px] md:blur-[150px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground border border-border rounded-full mb-5 sm:mb-8">
            Testimonianze
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
            Storie di <span className="text-gradient">Trasformazione</span>
          </h2>
          <p className="font-serif text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-2">
            Le parole di chi ha già iniziato il viaggio verso l'autorealizzazione
          </p>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                className={`grid ${testimonial.videoId ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-2xl mx-auto"} gap-5 sm:gap-8 items-center gradient-border rounded-xl p-5 sm:p-6 md:p-8 bg-card`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Video embed */}
                {testimonial.videoId && (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-background/50">
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
                <div className={testimonial.videoId ? "" : "text-center"}>
                  {/* Quote icon */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 sm:mb-5 ${!testimonial.videoId ? "mx-auto" : ""}`}>
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-cyan" />
                  </div>

                  <p className="font-serif text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className={`flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 ${!testimonial.videoId ? "justify-center" : ""}`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan/20 flex items-center justify-center">
                      <span className="font-display text-xs sm:text-sm text-cyan">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm sm:text-base text-foreground">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={!testimonial.videoId ? "flex justify-center" : ""}>
                    <Button variant="heroOutline" size="sm" className="text-xs sm:text-sm w-full sm:w-auto" asChild>
                      <a href="mailto:gabriele.lucesole@gmail.com">Fissa Sessione Gratis</a>
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

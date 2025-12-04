import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Nicolò E.",
    text: "La mia esperienza con Gabriele è stata molto positiva. In poche sessioni di professional coaching è riuscito a darmi un nuovo punto di vista, che non avevo mai preso in considerazione, aiutandomi a migliorare sensibilmente il mio focus durante le 4 sessioni previste.",
    highlight: "Risultato raggiunto grazie a domande mirate ed esercizi pratici"
  },
  {
    name: "Luca L.",
    text: "Il risultato è stato raggiunto grazie a domande mirate ed esercizi pratici, veloci e dall'effetto immediato come la mindfulness. Oltre questo, è da segnalare il lato umano di Gabriele, che guida le sessioni con metodo e molta empatia.",
    highlight: "Metodo ed empatia straordinari"
  },
  {
    name: "Luca G.",
    text: "Gabriele ha una capacità rara di vedere ciò che non riesci a vedere da solo. Mi ha aiutato a ritrovare energia, ho perso 4kg e gestisco meglio lo stress quotidiano. La trasformazione è stata più rapida di anni di terapia.",
    highlight: "Trasformazione rapida e tangibile"
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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            Testimonianze
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Storie di <span className="text-gradient">Trasformazione</span>
          </h2>
          <p className="font-serif text-muted-foreground max-w-xl mx-auto">
            Le parole di chi ha già iniziato il viaggio verso l'autorealizzazione
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative gradient-border rounded-2xl p-6 md:p-8 bg-gradient-card group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-cyan flex items-center justify-center">
                <Quote className="h-4 w-4 text-background" />
              </div>

              {/* Content */}
              <div className="pt-4">
                <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="px-3 py-2 rounded-lg bg-cyan/10 border border-cyan/20 mb-6">
                  <p className="text-xs text-cyan font-medium">
                    {testimonial.highlight}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-accent flex items-center justify-center">
                    <span className="font-display text-sm text-background">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Coachee</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              Inizia la Tua Trasformazione
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

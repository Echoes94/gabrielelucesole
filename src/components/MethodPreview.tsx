import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, History, Clock, Target } from "lucide-react";

const dimensions = [
  {
    icon: History,
    number: "1D",
    title: "Trasforma il Tuo Passato",
    description: "Da scheletro nell'armadio a trampolino di lancio"
  },
  {
    icon: Clock,
    number: "2D",
    title: "Vivi Solo il Presente",
    description: "Con la tecnica life-changing \"Al di là del Tempo nello Spazio\""
  },
  {
    icon: Target,
    number: "3D",
    title: "Attrai il Futuro Desiderato",
    description: "Senza la fuffa della legge d'attrazione, con strumenti scientificamente provati"
  }
];

const MethodPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            Metodo EFO®
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Essere Felici <span className="text-gradient">ORA</span>
          </h2>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            L'Approccio Integrato Definitivo che Trasforma la Tua Vita in 3D
          </p>
        </div>

        {/* 3 Dimensions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dimensions.map((dim, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector line */}
              {index < dimensions.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-cyan/30 via-cyan/10 to-transparent z-0" />
              )}

              <div className="relative gradient-border rounded-2xl p-8 bg-gradient-card hover:scale-[1.02] transition-all duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center">
                  <span className="font-display text-lg text-cyan">{dim.number}</span>
                </div>

                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <dim.icon className="h-7 w-7 text-cyan" />
                </div>

                <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground">
                  {dim.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-12">
          <p className="text-center font-serif text-muted-foreground mb-6">
            Il distillato di 13 anni di ricerche, decine di migliaia di euro investiti e 526 libri letti
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              Laurea Magistrale in Scienze Religiose
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              Master ICF in Life Coaching
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              Psicologia Positiva (Penn)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              Mindfulness Certificata ECM
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/metodo-efo">
              Scopri il Metodo EFO®
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodPreview;

import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-card to-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center pulse-glow">
            <Mail className="h-10 w-10 text-cyan" />
          </div>

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
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              <Mail className="h-5 w-5" />
              Inizia la Tua Trasformazione
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Trust note */}
          <p className="text-xs text-muted-foreground mt-6">
            Senza impegno • 30+ minuti di conversazione autentica
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--cyan) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-narrow relative z-10 text-center">
        {/* Eyebrow */}
        <div className="fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-cyan border border-cyan/30 rounded-full mb-8">
            Con il Metodo EFO®
          </span>
        </div>

        {/* Main headline */}
        <h1 className="fade-in-up opacity-0 font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Dalla crisi esistenziale<br />
          <span className="text-gradient">alla tua Autorealizzazione</span>
        </h1>

        {/* Subheadline */}
        <p className="fade-in-up opacity-0 font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Supera l'inquietudine con un nuovo approccio integrato tra antica saggezza e neuroscienze moderne
        </p>

        {/* CTA buttons */}
        <div className="fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              <Mail className="h-5 w-5" />
              Fissa Sessione Gratuita
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#problema">
              Scopri di più
              <ArrowDown className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="fade-in-up opacity-0 flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm text-muted-foreground" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-glow" />
            <span>13+ anni di ricerca</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-glow" />
            <span>Coach ICF Certificato</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-glow" />
            <span>Risultati misurabili</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-cyan/50" />
      </div>
    </section>
  );
};

export default HeroSection;

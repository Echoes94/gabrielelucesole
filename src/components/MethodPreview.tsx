import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, History, Clock, Target } from "lucide-react";
import AnimatedSectionLite from "./AnimatedSectionLite";

// Credential logos
import logoPul from "@/assets/logo-pul.png";
import logoIcf from "@/assets/logo-icf.webp";
import logoPenn from "@/assets/logo-penn.webp";
import logoMinistero from "@/assets/logo-ministero.webp";

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
    description: "Senza la fuffa della legge d'attrazione… ma con strumenti scientificamente provati"
  }
];

const credentials = [
  { logo: logoPul, name: "Pontificia Università Lateranense" },
  { logo: logoIcf, name: "International Coaching Federation" },
  { logo: logoPenn, name: "University of Pennsylvania" },
  { logo: logoMinistero, name: "Ministero della Salute" }
];

const credentialsList = [
  "Laurea Magistrale in Scienze Religiose (PUL)",
  "Master Universitario di 1° livello in Coaching Umanistico e PNL",
  "Master internazionale in Life Coaching (ICF)",
  "Specializzazione in Psicologia Positiva (Penn)",
  "Facilitatore in Mindfulness (50 crediti ECM) Ministero della Salute",
  "Master in Ipnosi"
];

const MethodPreview = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden" aria-labelledby="method-preview-heading">

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSectionLite className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan border border-cyan/30 rounded-full mb-5 sm:mb-8">
            Metodo EFO®
          </span>
          <h2 id="method-preview-heading" className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
            Essere Felici <span className="text-gradient">ORA</span>
          </h2>
          <p className="font-serif text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            L'Approccio Integrato Definitivo che Trasforma la Tua Vita in 3D
          </p>
        </AnimatedSectionLite>

        {/* 3 Dimensions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {dimensions.map((dim, index) => (
            <AnimatedSectionLite
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <div className="relative rounded-xl p-5 sm:p-6 md:p-8 bg-card border border-border/60 shadow-[0_8px_40px_-8px_hsl(var(--navy-950)/0.15)] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_-8px_hsl(var(--navy-950)/0.22)] hover:border-cyan/30">
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/15 border border-violet-400/30 flex items-center justify-center" aria-hidden="true">
                  <span className="font-display text-xs sm:text-sm text-violet-400">{dim.number}</span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 sm:mb-5" aria-hidden="true">
                  <dim.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan" />
                </div>

                <h3 className="font-display text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">
                  {dim.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {dim.description}
                </p>
              </div>
            </AnimatedSectionLite>
          ))}
        </div>

        {/* Formazione Section */}
        <AnimatedSectionLite delay={0.2}>
          <div className="rounded-xl border border-border/60 bg-card shadow-[0_8px_40px_-8px_hsl(var(--navy-950)/0.15)] p-5 sm:p-6 md:p-10 mb-8 sm:mb-12">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-3 sm:mb-4">
              Formazione
            </h3>
            <p className="text-center font-serif text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Il Viaggio che farai attraverso questo Per–Corso esclusivo è il distillato di <span className="text-cyan">13 anni di ricerche sul campo</span>, 
              decine di migliaia di euro investiti in corsi di formazione e <span className="text-cyan">526 libri letti</span>…
            </p>
            
            <p className="text-center font-serif text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6">
              Ho anche conseguito:
            </p>
            
            {/* Credentials list */}
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 max-w-3xl mx-auto mb-8 sm:mb-10">
              {credentialsList.map((credential, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 mt-1.5 shrink-0" aria-hidden="true" />
                  <span className="font-serif text-xs sm:text-sm text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>

            {/* Credential logos */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/90 rounded-lg p-1.5 sm:p-2 border border-border/40 transition-transform duration-200 hover:scale-105"
                >
                  <img 
                    src={cred.logo} 
                    alt={`Logo ${cred.name}`} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSectionLite>

        {/* CTA */}
        <AnimatedSectionLite className="text-center" delay={0.3}>
          <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/metodo-efo" aria-label="Scopri di più sul Metodo EFO">
              Scopri di più
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
          </Button>
        </AnimatedSectionLite>
      </div>
    </section>
  );
};

export default MethodPreview;

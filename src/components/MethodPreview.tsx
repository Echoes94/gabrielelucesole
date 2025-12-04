import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, History, Clock, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import methodBanner from "@/assets/method-banner.jpg";

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
    <section className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Banner background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={methodBanner} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card/90 to-background" />
      </div>

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            Metodo EFO®
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Essere Felici <span className="text-gradient">ORA</span>
          </h2>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            L'Approccio Integrato Definitivo che Trasforma la Tua Vita in 3D
          </p>
        </AnimatedSection>

        {/* 3 Dimensions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dimensions.map((dim, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
              className="group relative"
            >
              {/* Connector line */}
              {index < dimensions.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-cyan/30 via-cyan/10 to-transparent z-0" />
              )}

              <motion.div 
                className="relative gradient-border rounded-2xl p-8 bg-gradient-card hover:scale-[1.02] transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
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
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Formazione Section */}
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-2xl p-6 md:p-10 mb-12">
            <h3 className="font-display text-2xl md:text-3xl text-center mb-4">
              Formazione
            </h3>
            <p className="text-center font-serif text-muted-foreground mb-8 max-w-3xl mx-auto">
              Il Viaggio che farai attraverso questo Per–Corso esclusivo è il distillato di <span className="text-cyan">13 anni di ricerche sul campo</span>, 
              decine di migliaia di euro investiti in corsi di formazione e <span className="text-cyan">526 libri letti</span>…
            </p>
            
            <p className="text-center font-serif text-foreground mb-6">Ho anche conseguito:</p>
            
            {/* Credentials list */}
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
              {credentialsList.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                  <span className="font-serif text-sm text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>

            {/* Credential logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/90 rounded-xl p-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={cred.logo} 
                    alt={cred.name} 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.5}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/metodo-efo">
              Scopri di più
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MethodPreview;

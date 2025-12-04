import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Parallax banner background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img 
          src={methodBanner} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card/90 to-background" />
      </motion.div>

      {/* Animated background accents */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2"
        animate={{ 
          x: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2"
        animate={{ 
          x: [0, -50, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6"
            whileHover={{ scale: 1.05, borderColor: "hsl(197 65% 70% / 0.5)" }}
          >
            Metodo EFO®
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Essere Felici <motion.span 
              className="text-gradient inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ORA
            </motion.span>
          </h2>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            L'Approccio Integrato Definitivo che Trasforma la Tua Vita in 3D
          </p>
        </AnimatedSection>

        {/* 3 Dimensions with connected line animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Animated connecting line */}
          <motion.div 
            className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {dimensions.map((dim, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="group relative"
            >
              <motion.div 
                className="relative gradient-border rounded-2xl p-8 bg-gradient-card h-full"
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 30px 60px -15px hsl(197 65% 70% / 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Number badge with pulse */}
                <motion.div 
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center"
                  animate={{ 
                    boxShadow: ["0 0 0 0 hsl(197 65% 70% / 0.4)", "0 0 0 10px hsl(197 65% 70% / 0)", "0 0 0 0 hsl(197 65% 70% / 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <span className="font-display text-lg text-cyan">{dim.number}</span>
                </motion.div>

                <motion.div 
                  className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <dim.icon className="h-7 w-7 text-cyan" />
                </motion.div>

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
          <motion.div 
            className="glass rounded-2xl p-6 md:p-10 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-display text-2xl md:text-3xl text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Formazione
            </motion.h3>
            <motion.p 
              className="text-center font-serif text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Il Viaggio che farai attraverso questo Per–Corso esclusivo è il distillato di <span className="text-cyan">13 anni di ricerche sul campo</span>, 
              decine di migliaia di euro investiti in corsi di formazione e <span className="text-cyan">526 libri letti</span>…
            </motion.p>
            
            <motion.p 
              className="text-center font-serif text-foreground mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ho anche conseguito:
            </motion.p>
            
            {/* Credentials list with stagger */}
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
              {credentialsList.map((credential, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-cyan shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  />
                  <span className="font-serif text-sm text-muted-foreground">{credential}</span>
                </motion.div>
              ))}
            </div>

            {/* Credential logos with hover effects */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/90 rounded-xl p-3 cursor-pointer"
                  initial={{ opacity: 0, y: 30, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)"
                  }}
                >
                  <img 
                    src={cred.logo} 
                    alt={cred.name} 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.5}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/metodo-efo">
                Scopri di più
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MethodPreview;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    emoji: "😩",
    titleEmoji: "🌀",
    title: "Perso nel vortice della vita moderna",
    items: [
      "Il mondo va troppo veloce e fatichi tenere il passo",
      "L'apparente successo altrui ti fa sentire indietro",
      "Hai studiato tanto ma non sai ancora cosa fare della tua vita"
    ]
  },
  {
    emoji: "🪨",
    titleEmoji: "😬",
    title: "Schiacciato da paure e aspettative",
    items: [
      "Temi di vivere una vita non tua, ma quella che gli altri si aspettano da te",
      "Hai fatto tutto ciò che andava fatto (studio, lavoro, famiglia…), ma ti senti ancora insoddisfatto",
      "Il tempo passa in fretta: hai esaudito i desideri del tuo cuore?"
    ]
  },
  {
    emoji: "🔎",
    titleEmoji: "👀",
    title: "Alla ricerca di un senso più profondo",
    items: [
      "Le soluzioni superficiali non ti bastano più",
      "Vedi la società contemporanea incapace di dissetare la tua sete di senso",
      "Vivi con il pilota automatico e sei stanco dell'effimero: cerchi significato e senti il bisogno di una mappa per gestire la tua vita"
    ]
  }
];

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="problema" className="section-padding bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6"
            animate={{ 
              boxShadow: ["0 0 0 0 hsl(197 65% 70% / 0)", "0 0 0 10px hsl(197 65% 70% / 0.1)", "0 0 0 0 hsl(197 65% 70% / 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⬇️ Ti riconosci in questa storia? ⬇️
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            <span className="text-gradient">Riempi il Vuoto</span>
          </h2>
        </AnimatedSection>

        {/* Problem cards with stagger */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="h-full"
            >
              <motion.div 
                className="gradient-border rounded-2xl p-6 md:p-8 bg-gradient-card card-shadow h-full flex flex-col"
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px hsl(197 65% 70% / 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.span 
                    className="text-4xl"
                    animate={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {problem.emoji}
                  </motion.span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground">
                    {problem.title} {problem.titleEmoji}
                  </h3>
                </motion.div>
                <ul className="space-y-3 flex-grow">
                  {problem.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: itemIndex * 0.2 }}
                      />
                      <span className="font-serif text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                  className="mt-6 pt-4 border-t border-border/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      Fissa Sessione Gratis
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

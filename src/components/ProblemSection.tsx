import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    emoji: "😩",
    title: "Perso nel vortice della vita moderna",
    items: [
      "Il mondo va troppo veloce e fatichi tenere il passo",
      "L'apparente successo altrui ti fa sentire indietro",
      "Hai studiato tanto ma non sai ancora cosa fare della tua vita"
    ]
  },
  {
    emoji: "🪨",
    title: "Schiacciato da paure e aspettative",
    items: [
      "Temi di vivere una vita non tua, ma quella che gli altri si aspettano da te",
      "Hai fatto tutto ciò che andava fatto (studio, lavoro, famiglia…), ma ti senti ancora insoddisfatto",
      "Il tempo passa in fretta: hai esaudito i desideri del tuo cuore?"
    ]
  },
  {
    emoji: "🔎",
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={sectionRef} id="problema" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Subtle background */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan/3 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full mb-8">
            Ti riconosci in questa storia?
          </span>
          <h2 className="font-display text-3xl md:text-5xl">
            <span className="text-gradient">Riempi il Vuoto</span>
          </h2>
        </AnimatedSection>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problems.map((problem, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
              className="h-full"
            >
              <motion.div 
                className="gradient-border rounded-xl p-6 md:p-8 bg-card h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{problem.emoji}</span>
                  <h3 className="font-display text-lg md:text-xl text-foreground leading-snug">
                    {problem.title}
                  </h3>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {problem.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan/50 mt-2.5 shrink-0" />
                      <span className="font-serif text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <Button variant="heroOutline" size="sm" className="w-full" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      Fissa Sessione Gratis
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

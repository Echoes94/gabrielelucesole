import { Button } from "@/components/ui/button";
import AnimatedSectionLite from "./AnimatedSectionLite";

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
  return (
    <section id="problema" className="section-padding bg-card/30 relative overflow-hidden" aria-labelledby="problema-heading">
      {/* Static subtle background */}
      <div className="absolute inset-0 opacity-50" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan/3 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <AnimatedSectionLite className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground border border-border rounded-full mb-5 sm:mb-8">
            Ti riconosci in questa storia?
          </span>
          <h2 id="problema-heading" className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-gradient">Riempi il Vuoto</span>
          </h2>
        </AnimatedSectionLite>

        {/* Problem cards - simplified hover with CSS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <AnimatedSectionLite
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="gradient-border rounded-xl p-5 sm:p-6 md:p-8 bg-card h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl" aria-hidden="true">{problem.emoji}</span>
                  <h3 className="font-display text-base sm:text-lg md:text-xl text-foreground leading-snug">
                    {problem.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 flex-grow">
                  {problem.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1 h-1 rounded-full bg-cyan/50 mt-2 shrink-0" aria-hidden="true" />
                      <span className="font-serif text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
                  <Button variant="heroOutline" size="sm" className="w-full text-xs sm:text-sm" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com" aria-label={`Fissa sessione gratis per ${problem.title}`}>
                      Fissa Sessione Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSectionLite>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

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
  return (
    <section id="problema" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-wide">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            ⬇️ Ti riconosci in questa storia? ⬇️
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            <span className="text-gradient">Riempi il Vuoto</span>
          </h2>
        </AnimatedSection>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
              className="h-full"
            >
              <div className="gradient-border rounded-2xl p-6 md:p-8 bg-gradient-card card-shadow hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{problem.emoji}</span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground">
                    {problem.title} {problem.titleEmoji}
                  </h3>
                </div>
                <ul className="space-y-3 flex-grow">
                  {problem.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                      <span className="font-serif text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      Fissa Sessione Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

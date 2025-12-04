import { Compass, Mountain, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Compass,
    title: "Perso nel vortice della vita moderna",
    items: [
      "Il mondo va troppo veloce e fatichi a tenere il passo",
      "L'apparente successo altrui ti fa sentire indietro",
      "Hai studiato tanto ma non sai ancora cosa fare della tua vita"
    ]
  },
  {
    icon: Mountain,
    title: "Schiacciato da paure e aspettative",
    items: [
      "Temi di vivere una vita non tua, ma quella che gli altri si aspettano da te",
      "Hai fatto tutto ciò che andava fatto, ma ti senti ancora insoddisfatto",
      "Il tempo passa in fretta: hai esaudito i desideri del tuo cuore?"
    ]
  },
  {
    icon: Search,
    title: "Alla ricerca di un senso più profondo",
    items: [
      "Le soluzioni superficiali non ti bastano più",
      "Vedi la società incapace di dissetare la tua sete di senso",
      "Vivi con il pilota automatico e sei stanco dell'effimero"
    ]
  }
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
            Ti riconosci?
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            <span className="text-gradient">Riempi il Vuoto</span>
          </h2>
          <p className="font-serif text-muted-foreground max-w-xl mx-auto">
            Se ti riconosci in una di queste situazioni, sappi che non sei solo. Ci sono passato anch'io.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 md:p-8 bg-gradient-card card-shadow hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                <problem.icon className="h-7 w-7 text-cyan" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-4 text-foreground">
                {problem.title}
              </h3>
              <ul className="space-y-3">
                {problem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                    <span className="font-serif text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              Fissa una Sessione Gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

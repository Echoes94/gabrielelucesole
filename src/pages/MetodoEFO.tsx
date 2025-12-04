import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Mail, ArrowRight, History, Clock, Target, Brain, 
  BookOpen, MessageCircle, CheckCircle, Sparkles, 
  Users, Zap, Shield, Star
} from "lucide-react";
import { Link } from "react-router-dom";

const forYouIf = [
  {
    title: "Ricercatore Autentico",
    description: "Non ti accontenti delle risposte superficiali. Hai letto libri di crescita personale, provato app di meditazione. Ma dentro sai che serve qualcosa di più profondo."
  },
  {
    title: "Leader Silenzioso",
    description: "Forse hai responsabilità importanti — team da guidare, decisioni da prendere. Ma sai che per aiutare gli altri devi prima aiutare te stesso."
  },
  {
    title: "Professionista del Paradosso",
    description: "Sulla carta hai 'successo': carriera che avanza, riconoscimenti. Ma dentro c'è un vuoto che non riesci a colmare."
  },
  {
    title: "Cercatore di Senso",
    description: "Per te il lavoro non deve essere solo un mezzo per pagare le bollette. Vuoi che la tua vita significhi qualcosa."
  }
];

const notForYouIf = [
  "Cerchi soluzioni magiche immediate senza impegno personale",
  "Vuoi solo ottimizzare la produttività senza toccare la tua interiorità",
  "Non sei disposto a dedicare 20-30 min/giorno alla tua trasformazione",
  "Hai bisogno di supporto clinico per disturbi psichiatrici"
];

const dimensions = [
  {
    icon: History,
    number: "1D",
    title: "Trasforma il Tuo Passato",
    subtitle: "Da peso a trampolino di lancio",
    benefits: [
      "Liberarti da schemi inconsci che sabotano la tua felicità",
      "Riscrivere narrazioni limitanti",
      "Riconnetterti con parti di te sacrificate"
    ],
    result: "Il passato diventa risorsa, energia, non prigione."
  },
  {
    icon: Clock,
    number: "2D",
    title: "Vivi Pienamente il Presente",
    subtitle: "Dal pilota automatico a una presenza radicale",
    benefits: [
      "Accesso allo stato di flow anche nella quotidianità",
      "Gestione dello stress attraverso mindfulness applicata",
      "Capacità di essere qui e ora, senza ansia"
    ],
    result: "Lavori meglio, senza consumarti. Vivi davvero."
  },
  {
    icon: Target,
    number: "3D",
    title: "Attrai il Futuro Desiderato",
    subtitle: "Dalla confusione alla chiarezza",
    benefits: [
      "Ridefinire le priorità oltre la carriera",
      "Allineamento tra chi sei e cosa fai",
      "Piano d'azione per la vita che vuoi vivere"
    ],
    result: "Non rincorri più obiettivi altrui. Crei il tuo destino."
  }
];

const included = [
  { icon: Users, text: "Sessioni live di Professional Coaching 1-to-1" },
  { icon: MessageCircle, text: "Supporto WhatsApp 24/7 per 3 mesi" },
  { icon: Brain, text: "Training progressivi: Mindfulness, Bambino Interiore, Adulto" },
  { icon: BookOpen, text: "Libro 'Felicità Esistenzialista ORA'" },
  { icon: Sparkles, text: "Self Authoring Suite di Jordan Peterson" },
  { icon: Shield, text: "Tecniche esclusive testate a Harvard" }
];

const MetodoEFO = () => {
  return (
    <>
      <Helmet>
        <title>Metodo EFO® | Essere Felici Ora - Gabriele Lucesole</title>
        <meta 
          name="description" 
          content="Il Metodo EFO®: sistema integrato per trasformare il passato, vivere il presente e attrarre il futuro. 13+ settimane di coaching professionale." 
        />
        <link rel="canonical" href="https://gabrielelucesole.com/metodo-efo" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative z-10 text-center">
            <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
              Metodo EFO®
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Hai Fatto Tutto.<br />
              <span className="text-gradient">Ma Manca Ancora Qualcosa.</span>
            </h1>

            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Forse hai successo sulla carta, ma senti un vuoto che non riesci a colmare. 
              Il Metodo EFO® ti offre un sistema integrato per ritrovare te stesso — senza sacrificare il successo.
            </p>

            <Button variant="hero" size="xl" asChild>
              <a href="mailto:gabriele.lucesole@gmail.com">
                <Mail className="h-5 w-5" />
                Fissa Sessione Gratuita
              </a>
            </Button>
          </div>
        </section>

        {/* For You If */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Questo percorso è <span className="text-gradient">per te</span> se...
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {forYouIf.map((item, index) => (
                <div key={index} className="gradient-border rounded-2xl p-6 bg-gradient-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2 text-foreground">
                        Sei un {item.title}
                      </h3>
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Not for you */}
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="font-display text-xl mb-6 text-center">
                <span className="text-muted-foreground">❌</span> Non è per te se...
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {notForYouIf.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 italic">
                Non è giudizio. È allineamento. Il Metodo EFO® funziona solo con chi si sente pronto.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Dimensions */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
                Le 3 Dimensioni
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Essere Felici <span className="text-gradient">ORA</span>
              </h2>
              <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
                Un sistema integrato che unisce neuroscienze, saggezza millenaria e risultati misurabili.
              </p>
            </div>

            <div className="space-y-8">
              {dimensions.map((dim, index) => (
                <div
                  key={index}
                  className="gradient-border rounded-2xl p-8 bg-gradient-card"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Header */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-cyan/10 flex items-center justify-center">
                          <dim.icon className="h-8 w-8 text-cyan" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center">
                          <span className="font-display text-lg text-cyan">{dim.number}</span>
                        </div>
                      </div>
                      <h3 className="font-display text-2xl mb-2 text-foreground">
                        {dim.title}
                      </h3>
                      <p className="text-cyan text-sm">{dim.subtitle}</p>
                    </div>

                    {/* Benefits */}
                    <div className="lg:col-span-1">
                      <p className="text-sm text-muted-foreground mb-4 font-medium">Per te significa:</p>
                      <ul className="space-y-3">
                        {dim.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Zap className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="lg:col-span-1">
                      <div className="h-full flex items-center">
                        <div className="p-4 rounded-xl bg-cyan/10 border border-cyan/20">
                          <p className="text-sm text-foreground font-medium mb-1">Risultato:</p>
                          <p className="text-sm text-cyan">{dim.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Cosa è <span className="text-gradient">incluso</span>
              </h2>
              <p className="font-serif text-muted-foreground">
                Percorso completo di 13+ settimane
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-background/50">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-cyan" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Promise */}
            <div className="glass rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <Star className="h-10 w-10 text-cyan mx-auto mb-4" />
              <h3 className="font-display text-2xl mb-4">La mia promessa</h3>
              <p className="font-serif text-muted-foreground leading-relaxed">
                Non diventerai "illuminato" in 13 settimane. Ma imparerai a stare con te stesso senza fuggire. 
                Svilupperai strumenti concreti per superare lo stress invece di subirlo. 
                Ritroverai pezzi di te che avevi sepolto sotto le macerie della frenesia quotidiana.
              </p>
              <p className="font-display text-cyan mt-4">
                Non ti prometto la perfezione. Ti offro la trasformazione.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-card to-primary">
          <div className="container-narrow text-center">
            <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
              Inizia il viaggio
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Il primo passo?<br />
              <span className="text-gradient">Una conversazione.</span>
            </h2>

            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Sessione gratuita di professional coaching. Senza impegno. 
              Per conoscerci e scoprire se il Metodo EFO® fa per te.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com">
                  <Mail className="h-5 w-5" />
                  Fissa Sessione Gratuita
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/chi-sono">
                  Leggi la mia storia
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              30+ minuti • Senza impegno • Online
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MetodoEFO;

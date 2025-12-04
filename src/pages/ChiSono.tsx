import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, BookOpen, Award, Heart, Sparkles } from "lucide-react";
import gabrielePhoto from "@/assets/gabriele-photo.webp";
import { Link } from "react-router-dom";

const milestones = [
  {
    title: "Il mondo incompreso",
    description: "Ero un adolescente che soffriva del male che vedeva nel mondo. Una società che mi appariva malata: superficiale, liquida, arrivista. Mi sentivo solo, in un mondo che va troppo veloce."
  },
  {
    title: "Il bivio: terra bruciata",
    description: "Scelsi me stesso. Aprii bocca e dissi ciò che pensavo. Feci terra bruciata intorno a me. Trasformai la mia solitudine in spazio di crescita. Lessi voracemente — più di cento libri l'anno."
  },
  {
    title: "L'errore: il Super-Ego",
    description: "Trovai conferma del mio pessimismo nelle filosofie orientali. Mi ci buttai a capofitto... ma invece di liberarmi dall'ego, ne stavo forgiando uno ancora più grande."
  },
  {
    title: "La svolta: arrenditi e ritrovati",
    description: "Nel momento più buio, mi arresi. Mi aprii a qualcosa più grande di me. Mi sentii avvolto da una 'luce'. Il dolore si sciolse come neve al sole, e il vuoto fu riempito."
  },
  {
    title: "L'epifania: nasce il Metodo EFO",
    description: "Dopo 13 anni di ricerca, tutti i 18.000 pezzi del puzzle si unirono. Nacque il Metodo EFO: Essere Felici Ora. Un approccio integrato per trasformare passato, presente e futuro."
  }
];

const credentials = [
  "Laurea Magistrale in Scienze Religiose (PUL)",
  "Master Universitario di 1° livello in Coaching Umanistico e PNL",
  "Master internazionale in Life Coaching (ICF)",
  "Specializzazione in Psicologia Positiva (Penn)",
  "Facilitatore in Mindfulness (50 crediti ECM)",
  "Master in Ipnosi"
];

const ChiSono = () => {
  return (
    <>
      <Helmet>
        <title>Chi Sono | Gabriele Lucesole - Coach Professionista</title>
        <meta 
          name="description" 
          content="La mia storia: da giovane inquieto alla scoperta del Metodo EFO. 13 anni di ricerca, 526 libri, formazione certificata per aiutarti a trovare il tuo senso." 
        />
        <link rel="canonical" href="https://gabrielelucesole.com/chi-sono" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
                  Il viaggio più importante
                </span>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                  La mia <span className="text-gradient">storia</span>
                </h1>

                <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                  Nella vita, c'è un tempo in cui tutto ciò che hai costruito — titolo di studio, lavoro, aspettative realizzate — improvvisamente non basta più...
                </p>
                
                <p className="font-serif text-muted-foreground leading-relaxed mb-8">
                  Guardi il tuo percorso e ti chiedi: "È davvero tutto qui?" Una presenza assente, un vuoto interiore che nessun successo esterno sembra riuscire a colmare.
                </p>

                <p className="font-display text-xl text-cyan mb-8">
                  Fu questo il punto di partenza del mio viaggio...
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto">
                  <div className="absolute -inset-4 border border-cyan/20 rounded-3xl" />
                  <div className="relative h-full rounded-2xl overflow-hidden glow-cyan">
                    <img
                      src={gabrielePhoto}
                      alt="Gabriele Lucesole"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="font-display text-2xl text-foreground mb-1">Gabriele Lucesole</h2>
                    <p className="text-cyan text-sm">Coach Professionista ICF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Il <span className="text-gradient">Viaggio</span>
              </h2>
              <p className="font-serif text-muted-foreground">
                5 tappe che hanno trasformato l'inquietudine in missione
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-accent to-cyan" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="gradient-border rounded-xl p-6 bg-gradient-card">
                      <span className="inline-block px-2 py-1 text-xs font-sans uppercase tracking-wider text-cyan bg-cyan/10 rounded mb-3">
                        Tappa {index + 1}
                      </span>
                      <h3 className="font-display text-xl mb-3 text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-accent/5" />
          <div className="container-narrow relative z-10">
            <blockquote className="text-center">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-foreground mb-6">
                "Noi non vediamo le cose come sono; vediamo le cose come siamo."
              </p>
              <cite className="text-cyan font-sans text-sm uppercase tracking-wider">— Talmud</cite>
            </blockquote>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="gradient-border rounded-2xl p-6 bg-gradient-card text-center">
                  <BookOpen className="h-8 w-8 text-cyan mx-auto mb-3" />
                  <p className="font-display text-3xl text-foreground mb-1">526</p>
                  <p className="text-sm text-muted-foreground">Libri letti</p>
                </div>
                <div className="gradient-border rounded-2xl p-6 bg-gradient-card text-center">
                  <Sparkles className="h-8 w-8 text-cyan mx-auto mb-3" />
                  <p className="font-display text-3xl text-foreground mb-1">13+</p>
                  <p className="text-sm text-muted-foreground">Anni di ricerca</p>
                </div>
                <div className="gradient-border rounded-2xl p-6 bg-gradient-card text-center">
                  <Award className="h-8 w-8 text-cyan mx-auto mb-3" />
                  <p className="font-display text-3xl text-foreground mb-1">6</p>
                  <p className="text-sm text-muted-foreground">Certificazioni</p>
                </div>
                <div className="gradient-border rounded-2xl p-6 bg-gradient-card text-center">
                  <Heart className="h-8 w-8 text-cyan mx-auto mb-3" />
                  <p className="font-display text-3xl text-foreground mb-1">∞</p>
                  <p className="text-sm text-muted-foreground">Passione</p>
                </div>
              </div>

              {/* Credentials list */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  <span className="text-gradient">Formazione</span>
                </h2>
                <p className="font-serif text-muted-foreground mb-8">
                  Il Metodo EFO è il distillato di anni di studio rigoroso e formazione multidisciplinare.
                </p>
                <ul className="space-y-4">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan mt-2 shrink-0" />
                      <span className="font-serif text-foreground">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-card to-primary">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Se la mia storia ti risuona...
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Sappi che non sei solo. Ci sono passato anch'io. E da oggi possiamo camminare insieme, 
              mettendoti a disposizione tutto ciò che ho imparato lungo il cammino della vita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com">
                  <Mail className="h-5 w-5" />
                  Fissa Sessione Gratuita
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/metodo-efo">
                  Scopri il Metodo EFO
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChiSono;

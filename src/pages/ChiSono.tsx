import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, BookOpen, Award, Heart, Sparkles, Quote, History, Clock, Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import gabrielePhoto from "@/assets/gabriele-photo.webp";
import chiSonoMondo from "@/assets/chi-sono-mondo.jpg";
import chiSonoBivio from "@/assets/chi-sono-bivio.jpg";
import chiSonoErrore from "@/assets/chi-sono-errore.jpg";
import chiSonoSvolta from "@/assets/chi-sono-svolta.jpg";
import chiSonoEpifania from "@/assets/chi-sono-epifania.jpg";
import { Link } from "react-router-dom";

// Credential logos
import logoPul from "@/assets/logo-pul.png";
import logoIcf from "@/assets/logo-icf.webp";
import logoPenn from "@/assets/logo-penn.webp";
import logoMinistero from "@/assets/logo-ministero.webp";

const credentials = [
  { logo: logoPul, name: "Pontificia Università Lateranense" },
  { logo: logoIcf, name: "International Coaching Federation" },
  { logo: logoPenn, name: "University of Pennsylvania" },
  { logo: logoMinistero, name: "Ministero della Salute" }
];

const credentialsList = [
  "Laurea in Scienze Religiose (PUL)",
  "Master Universitario di 1° livello in Coaching Umanistico e PNL",
  "Master internazionale in Professional Coaching (ICF)",
  "Specializzazione in Psicologia Positiva (Penn University)",
  "Facilitatore in Meditazione Mindfulness",
  "Master in Ipnosi"
];

const GlassQuote = ({ quote, author }: { quote: string; author?: string }) => (
  <AnimatedSection className="my-8 md:my-12">
    <motion.blockquote 
      className="glass rounded-xl p-6 md:p-8 relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <Quote className="absolute top-4 left-4 h-6 w-6 text-cyan/20" />
      <p className="font-serif text-base md:text-lg text-foreground italic leading-relaxed text-center relative z-10">
        "{quote}"
      </p>
      {author && (
        <cite className="block text-center mt-3 text-cyan font-sans text-xs uppercase tracking-wider not-italic">
          — {author}
        </cite>
      )}
    </motion.blockquote>
  </AnimatedSection>
);

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl my-8 md:my-10">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>
    </div>
  );
};

const ChiSono = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
        <section ref={heroRef} className="min-h-screen flex items-center section-padding bg-gradient-hero relative overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ y: heroY }}
          >
            <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            className="container-wide relative z-10"
            style={{ opacity: heroOpacity }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <AnimatedSection direction="left">
                <motion.span 
                  className="inline-block px-3 py-1.5 text-xs font-sans uppercase tracking-[0.15em] text-cyan/70 border border-cyan/20 rounded-full mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Il viaggio più importante?
                </motion.span>

                <motion.h1 
                  className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  La mia <span className="text-gradient">storia</span>
                </motion.h1>

                <motion.p 
                  className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Nella vita, c'è un tempo in cui tutto ciò che hai costruito — titolo di studio, lavoro, aspettative realizzate — improvvisamente non basta più…
                </motion.p>
                
                <motion.p 
                  className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Guardi il tuo percorso e ti chiedi: "È davvero tutto qui?"
                </motion.p>

                <motion.p 
                  className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  Una presenza assente, un vuoto interiore che nessun successo esterno sembra riuscire a colmare.
                </motion.p>

                <motion.p 
                  className="font-display text-lg md:text-xl text-cyan"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Fu questo il punto di partenza del mio viaggio…
                </motion.p>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection direction="right" className="relative">
                <motion.div 
                  className="relative aspect-[4/5] max-w-sm mx-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="absolute -inset-3 border border-cyan/20 rounded-2xl" />
                  <div className="relative h-full rounded-xl overflow-hidden">
                    <img
                      src={gabrielePhoto}
                      alt="Gabriele Lucesole"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h2 className="font-display text-xl md:text-2xl text-foreground mb-1">Gabriele Lucesole</h2>
                    <p className="text-cyan text-xs md:text-sm">ICF Professional Coaching</p>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Il Mondo Incompreso */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                Il Mondo <span className="text-gradient">Incompreso</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoMondo} alt="Il mondo incompreso - alienazione giovanile" />

            <AnimatedSection className="prose-custom">
              <p>
                Ero un adolescente che soffriva del male che vedeva nel mondo. Una società che mi appariva malata: superficiale, liquida, arrivista.
              </p>
              <p>
                A scuola, nelle relazioni interpersonali, ovunque: vedevo maschere, non volti. Un fare senza senso, dovere per il dovere senza un perché.
              </p>
              <p>
                Per un po', anch'io sacrificai il mio volto in cambio di qualche maschera; rinunciai al mio essere per conformarmi agli altri… Ma non capivo.
              </p>
              <p>
                Dentro di me cresceva una domanda:
              </p>
            </AnimatedSection>

            <GlassQuote quote="Perché? Perché vivere così? Non c'è un'altra strada?" />
          </div>
        </section>

        {/* Section 2: Il Bivio */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                Il Bivio: <span className="text-gradient">Terra Bruciata e Nella Fine l'Inizio</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoBivio} alt="Il bivio - scelta del proprio cammino" />

            <AnimatedSection className="prose-custom">
              <p>
                Dovetti scegliere: continuare a sacrificare la mia profondità sull'altare della superficialità contemporanea oppure ascoltarmi ed essere coerente a me stesso.
              </p>
              <p className="text-cyan font-medium text-base md:text-lg">
                Non mi disunii. Scelsi me stesso.
              </p>
              <p>
                Diedi forma ai miei pensieri: aprii bocca e dissi ciò che pensavo. Feci terra bruciata intorno a me: avevo bisogno di tornare a respirare l'aria che sceglievo io.
              </p>
              <p>
                Trasformai la mia solitudine in spazio di crescita. Feci l'amore con il sapere. Lessi voracemente — più di cento libri l'anno.
              </p>
              <p>
                Dovevo rispondere alle domande che titolano uno dei quadri più famosi di Gauguin:
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Da dove veniamo? Chi siamo? Dove andiamo?" 
              author="Paul Gauguin"
            />
          </div>
        </section>

        {/* Section 3: L'Errore */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                L'Errore: <span className="text-gradient">Il Super-Ego e la Sua Prigione</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoErrore} alt="L'errore - prigione dell'ego" />

            <AnimatedSection className="prose-custom">
              <p>
                Alla ricerca di senso, trovai conferma del mio pessimismo nelle antiche tradizioni orientali. Mi ci buttai a capofitto…
              </p>
              <p>
                Credevo che distaccarmi dal mondo, dai desideri, dalle relazioni mi avrebbe reso un uomo libero.
              </p>
              <p className="text-cyan font-medium">
                … Ma desiderare di non desiderare non è esso stesso desiderare?! 🤔
              </p>
              <p>
                Mi stavo costruendo una prigione ancora più stretta e subdola. Invece di liberarmi dal peso dell'ego, ne stavo forgiando uno ancora più grande.
              </p>
              <p>
                Le relazioni — massima fonte di felicità per l'uomo secondo le scienze psicologiche — erano distrazioni dalla meta del mio viaggio interiore.
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Quindi, in generale, tu, la tua gente, dovresti mantenere le tue tradizioni" 
              author="Dalai Lama, 1999"
            />

            <AnimatedSection className="prose-custom">
              <p className="italic text-muted-foreground text-sm">
                Lo stesso Dalai Lama sconsiglia le pratiche orientali agli occidentali. Ci sarà un motivo?!
              </p>
              <p>
                La protesta del mio corpo non si fece attendere… La voragine del mio vuoto interiore mi portò a soffrire di tremende emicranie con aura.
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Qualcosa di misterioso in questo universo è complice di quelli che amano solo il bene" 
              author="Simone Weil"
            />
          </div>
        </section>

        {/* Section 4: La Svolta */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                La Svolta: <span className="text-gradient">Arrenditi e Ritrovati</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoSvolta} alt="La svolta spirituale - monastero all'alba" />

            <AnimatedSection className="prose-custom">
              <p>
                Nel momento più buio, quando tutte le strategie di controllo fallirono, feci l'unica cosa che non avevo mai fatto: mi arresi.
              </p>
              <p>
                Mi aprii a qualcosa più grande di me e, con rabbia, sfidai Dio: se esisteva, avrebbe dovuto "rispondermi"...
              </p>
              <p className="text-cyan font-medium text-base md:text-lg">
                Mi sentii avvolto da una "luce". Una presenza, un calore… Il dolore si sciolse come neve al sole, e il vuoto fu riempito…
              </p>
              <p>
                Da quel momento in poi, non ebbi più mal di testa.
              </p>
              <p>
                Presentatasi l'occasione, andai a vivere — nove mesi — in un monastero. Lì sperimentai ciò che gli psicologi chiamano <em>peak experiences</em>: momenti di <em>flow</em>, presenza totale.
              </p>
              <p className="text-cyan font-medium">
                Il problema non era il mondo: era il mio sguardo sul mondo.
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Noi non vediamo le cose come sono; vediamo le cose come siamo." 
              author="Talmud"
            />

            <AnimatedSection className="prose-custom">
              <p className="text-cyan font-medium text-base md:text-lg">
                Ciò non cambiò niente, se non il mio sguardo, e questo cambiò tutto…
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 5: L'Epifania */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                L'Epifania: <span className="text-gradient">Nasce il Metodo EFO</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoEpifania} alt="L'epifania - illuminazione e connessione" />

            <AnimatedSection className="prose-custom">
              <p>
                Ritornato dal monastero, cercai di custodire i tesori che avevo scoperto. Decisi di studiare seriamente e con metodo fino a laurearmi in Scienze Religiose.
              </p>
              <p>
                Contemporaneamente conseguii:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm md:text-base">
                <li>Master Universitario di 1° Livello in coaching umanistico e PNL</li>
                <li>Master internazionale — certificato ICF — in professional coaching</li>
                <li>Specializzazione in Psicologia Positiva (Penn University)</li>
                <li>Facilitatore in meditazione mindfulness</li>
                <li>Master in ipnosi</li>
              </ul>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection delay={0.2}>
              <div className="glass rounded-xl p-5 md:p-8 my-8 md:my-10">
                <h3 className="font-display text-xl md:text-2xl text-center mb-6">La mia Formazione</h3>
                
                <div className="grid md:grid-cols-2 gap-2 md:gap-3 max-w-3xl mx-auto mb-8">
                  {credentialsList.map((credential, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      <span className="font-serif text-xs md:text-sm text-muted-foreground">{credential}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                  {credentials.map((cred, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/90 rounded-lg p-1.5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <img src={cred.logo} alt={cred.name} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                E poi, mentre stavo pensando all'indice della mia tesi… un'epifania. Tutti i <span className="text-cyan">18.000 pezzi del puzzle</span> — dopo 10+ anni di ricerca — si unirono in un disegno coerente…
              </p>
              <p className="text-xl md:text-2xl font-display text-center my-6">
                🧩 Nacque il <span className="text-gradient">Metodo EFO: Essere Felici Ora</span>
              </p>
            </AnimatedSection>

            {/* 3 Dimensions */}
            <div className="grid md:grid-cols-3 gap-4 my-8 md:my-10">
              {[
                { icon: History, title: "Trasforma il Tuo Passato", desc: "Da scheletro nell'armadio a trampolino di lancio" },
                { icon: Clock, title: "Vivi Solo il Presente", desc: "Uno stratagemma che ti riporta qui e ora, oltre il tempo" },
                { icon: Target, title: "Attrai il Futuro Desiderato", desc: "Con strumenti scientificamente provati" }
              ].map((dim, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="gradient-border rounded-lg p-4 md:p-5 bg-gradient-card h-full text-center"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <dim.icon className="h-6 w-6 md:h-7 md:w-7 text-cyan mx-auto mb-3" />
                    <h4 className="font-display text-base md:text-lg mb-1">{dim.title}</h4>
                    <p className="font-serif text-xs md:text-sm text-muted-foreground">{dim.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Dall'interno all'esterno */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                Dall'Interno <span className="text-gradient">all'Esterno</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                Ebbi un'altra rivelazione quando iniziai a lavorare come Coach Professionista… Scoprii che gli strumenti appresi erano sorprendentemente trasformativi…
              </p>
              <p className="text-cyan font-medium">
                Non solo per me, ma anche per gli altri…
              </p>
              <p>
                Vedevo i miei coachees trasformarsi sotto i miei occhi.
              </p>
              <p className="italic text-muted-foreground text-sm">
                Ho cercato solo di riflettere la luce che avevano sempre avuto dentro.
              </p>
              <p className="font-display text-base md:text-lg text-center my-4">
                Questo è il potere socratico del professional coaching: <span className="text-cyan">partorire se stessi</span>.
              </p>
            </AnimatedSection>

            <GlassQuote quote="Basta essere presenza: creare lo spazio sicuro dove la luce può entrare, crescere, irradiarsi…" />

            <AnimatedSection className="prose-custom">
              <p className="text-base md:text-lg">
                Avevo trovato il mio <span className="text-cyan font-bold">IKIGAI</span>: aiutare giovani adulti ad autorealizzarsi ed essere felici esistenzialmente.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 7: Il Mondo Nuovo */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                Il Mondo <span className="text-gradient">Nuovo</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                Oggi, quando guardo indietro al me stesso adolescente che soffriva per il male del mondo, vedo cosa quell'inquietudine mi ha permesso di costruire.
              </p>
              <p>
                Avevo ragione a soffrire — ma mi sbagliavo a pensare di essere solo…
              </p>
            </AnimatedSection>

            <GlassQuote quote="La paura non dice mai la verità." />

            <AnimatedSection className="prose-custom">
              <p>
                Se la mia storia ti risuona, se anche tu senti che c'è qualcosa di più oltre la monotonia — sappi che non sei solo…
              </p>
              <p className="text-cyan font-medium text-base md:text-lg">
                Ci sono passato anch'io. E da oggi possiamo camminare insieme.
              </p>
              <p className="font-display text-lg md:text-xl text-center my-6">
                Il <span className="text-gradient">Metodo EFO</span> non è una teoria da leggere: sintetizza esperienze da vivere.<br />
                E tutto comincia con una conversazione…
              </p>
              <p className="text-center text-sm text-muted-foreground">
                Approfitta di una sessione gratuita. Senza impegno. Il primo passo è sempre il più difficile, ma è anche quello che può cambiare tutto.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: BookOpen, value: "526", label: "Libri letti" },
                { icon: Sparkles, value: "13+", label: "Anni di ricerca" },
                { icon: Award, value: "6", label: "Certificazioni" },
                { icon: Heart, value: "∞", label: "Passione" }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="gradient-border rounded-xl p-4 md:p-5 bg-gradient-card text-center"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-cyan mx-auto mb-2" />
                    <motion.p 
                      className="font-display text-2xl md:text-3xl text-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-card to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-48 md:w-64 h-48 md:h-64 bg-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-40 md:w-56 h-40 md:h-56 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <AnimatedSection className="text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4">
                Inizia il <span className="text-gradient">Tuo Viaggio</span>
              </h2>
              <p className="font-serif text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
                La sessione di professional coaching gratuita serve a conoscerci e scoprire se il Metodo EFO è adatto a te.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="mailto:gabriele.lucesole@gmail.com">
                    <Mail className="h-4 w-4" />
                    Prenota Sessione Gratuita
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/metodo-efo">
                    Scopri il Metodo EFO
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChiSono;

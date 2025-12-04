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
  "Laurea Magistrale in Scienze Religiose (PUL)",
  "Master Universitario di 1° livello in Coaching Umanistico e PNL",
  "Master internazionale in Life Coaching (ICF)",
  "Specializzazione in Psicologia Positiva (Penn)",
  "Facilitatore in Mindfulness (50 crediti ECM)",
  "Master in Ipnosi"
];

const GlassQuote = ({ quote, author }: { quote: string; author?: string }) => (
  <AnimatedSection className="my-16">
    <motion.blockquote 
      className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Quote className="absolute top-4 left-4 h-8 w-8 text-cyan/20" />
      <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed text-center relative z-10">
        "{quote}"
      </p>
      {author && (
        <cite className="block text-center mt-4 text-cyan font-sans text-sm uppercase tracking-wider not-italic">
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
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden rounded-2xl my-12">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-[140%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            className="container-wide relative z-10"
            style={{ opacity: heroOpacity }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <AnimatedSection direction="left">
                <motion.span 
                  className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Il viaggio più importante
                </motion.span>

                <motion.h1 
                  className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  La mia <span className="text-gradient">storia</span>
                </motion.h1>

                <motion.p 
                  className="font-serif text-lg text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Nella vita, c'è un tempo in cui tutto ciò che hai costruito — titolo di studio, lavoro, aspettative realizzate — improvvisamente non basta più…
                </motion.p>
                
                <motion.p 
                  className="font-serif text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Guardi il tuo percorso e ti chiedi: "È davvero tutto qui?" Una presenza assente, un vuoto interiore che nessun successo esterno sembra riuscire a colmare. Una sottile solitudine che continua a crescere, nonostante tu sia circondato da persone.
                </motion.p>

                <motion.p 
                  className="font-display text-xl text-cyan"
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
                  className="relative aspect-[4/5] max-w-md mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <motion.div 
                    className="absolute -inset-4 border border-cyan/20 rounded-3xl"
                    animate={{ rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <div className="relative h-full rounded-2xl overflow-hidden glow-cyan">
                    <motion.img
                      src={gabrielePhoto}
                      alt="Gabriele Lucesole"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h2 className="font-display text-2xl text-foreground mb-1">Gabriele Lucesole</h2>
                    <p className="text-cyan text-sm">Coach Professionista ICF</p>
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
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                Il Mondo <span className="text-gradient">Incompreso</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoMondo} alt="Il mondo incompreso - alienazione giovanile" />

            <AnimatedSection className="prose-custom">
              <p>
                Ero un adolescente che soffriva del male che vedeva nel mondo. Una società che mi appariva malata: superficiale, liquida, arrivista. Un consumismo che ti promette felicità, ma ti lascia più vuoto di prima.
              </p>
              <p>
                A scuola, nelle relazioni interpersonali, ovunque: vedevo maschere, non volti. Un fare senza senso, dovere per il dovere senza un perché. Apparire, avere senza essere…
              </p>
              <p>
                Gli altri sono affidabili? Il futuro — per noi giovani — è promettente o minaccioso? Mi sentivo solo, in un mondo che va troppo veloce. Cosa mi chiede il mondo? Essere me stesso o qualcun altro?
              </p>
              <p>
                Per un po', anch'io sacrificai il mio volto in cambio di qualche maschera; rinunciai al mio essere per conformarmi agli altri, apparire… Ma non capivo.
              </p>
            </AnimatedSection>

            <GlassQuote quote="Perché? Perché vivere così? Non c'è un'altra strada?" />
          </div>
        </section>

        {/* Section 2: Il Bivio */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                Il Bivio: <span className="text-gradient">Terra Bruciata</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoBivio} alt="Il bivio - scelta del proprio cammino" />

            <AnimatedSection className="prose-custom">
              <p>
                Dovetti scegliere: continuare a sacrificare la mia profondità sull'altare della superficialità contemporanea oppure ascoltarmi ed essere coerente a me stesso.
              </p>
              <p className="text-cyan font-medium text-lg">
                Non mi disunii. Scelsi me stesso.
              </p>
              <p>
                Diedi forma ai miei pensieri: aprii bocca e dissi ciò che pensavo, a chi dovevo. Feci terra bruciata intorno a me: avevo bisogno di tornare a respirare l'aria che sceglievo di respirare io — non quella che gli altri avevano scelto per me.
              </p>
              <p>
                Trasformai la mia solitudine in spazio di crescita. Dopo il diploma, mi presi diversi anni sabbatici per tuffarmi nel mare della vita e fare più esperienze nutrienti possibili — prima di morire.
              </p>
              <p>
                Dissetare la sete di senso che il mondo non sarebbe mai riuscito a placare: il mio imperativo categorico. Feci l'amore con il sapere. Lessi voracemente — più di cento libri l'anno — spaziando tra filosofia, psicologia, spiritualità…
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Da dove veniamo? Chi siamo? Dove andiamo?" 
              author="Paul Gauguin"
            />

            <AnimatedSection className="prose-custom">
              <p className="italic text-muted-foreground">
                Cosa rende la vita degna di essere vissuta? Qual è la mappa per trovare il tesoro nascosto nella vita?
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 3: L'Errore */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                L'Errore: <span className="text-gradient">Il Super-Ego</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                Alla ricerca di senso, trovai conferma del mio pessimismo nelle antiche tradizioni orientali. Mi ci buttai a capofitto…
              </p>
              <p>
                Credevo che — come insegnano le filosofie orientali — distaccarmi dal mondo, dai desideri, dalle relazioni mi avrebbe reso un uomo libero. Desiderare di non desiderare è la via per il Nirvana, insegna il Buddha nelle Quattro Nobili Verità.
              </p>
              <p className="text-cyan">
                … Ma desiderare di non desiderare non è esso stesso desiderare?! 🤔
              </p>
              <p>
                Mi stavo costruendo una prigione ancora più stretta e subdola. Invece di liberarmi dal peso dell'ego, ne stavo forgiando uno ancora più grande: un Super-Ego. Come il titano Atlante, dovevo portare il peso del mondo da solo.
              </p>
              <p>
                Le relazioni — massima fonte di felicità per l'uomo secondo le scienze psicologiche — erano distrazioni dalla meta del mio viaggio interiore. Guardavo dentro me stesso e mi allontanavo dagli altri; ma senza mettersi in discussione relazionandoci con gli altri non c'è vera crescita, sviluppo, fioritura…
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Quindi, in generale, tu, la tua gente, dovresti mantenere le tue tradizioni" 
              author="Dalai Lama, 1999"
            />

            <AnimatedSection className="prose-custom">
              <p>
                La protesta del mio corpo — anch'esso illusione da superare — non si fece attendere… La voragine sempre più profonda del mio vuoto interiore mi portò a soffrire di tremende emicranie con aura: dovetti isolarmi sempre di più…
              </p>
              <p className="italic text-muted-foreground">
                La mia esperienza personale, e la vita stessa mi suggerirono: "Stop, fermati. Cambia rotta. Non è questa la via"…
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 4: La Svolta */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                La Svolta: <span className="text-gradient">Arrenditi e Ritrovati</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoSvolta} alt="La svolta spirituale - monastero all'alba" />

            <AnimatedSection className="prose-custom">
              <p>
                Nel momento più buio, quando tutte le strategie di controllo fallirono, feci l'unica cosa che non avevo mai fatto: mi arresi. Sconfitto, perso, disperato…
              </p>
              <p>
                Mi aprii a qualcosa più grande di me e, con rabbia, sfidai Dio: se esisteva, avrebbe dovuto "rispondermi"... E accadde qualcosa di inaspettato…
              </p>
              <p className="text-cyan font-medium text-lg">
                Mi sentii avvolto da una "luce". Una presenza, un calore… Il dolore si sciolse come neve al sole, e il vuoto fu riempito…
              </p>
              <p>
                Da quel momento in poi, non ebbi più mal di testa. Uscito — in tutti i sensi — dal buio di camera mia, mi impegnai ad accogliere, accettare la realtà così com'è, smettere di combattere i mulini a vento…
              </p>
              <p>
                Presentatasi l'occasione, colsi la palla al balzo e andai a vivere — nove mesi — in un monastero, insieme ad altri giovani cercatori di senso come me. Nove mesi di gestazione monastica, per partorire un nuovo me.
              </p>
              <p>
                Lì, lontano dalle pressioni sociali, vissi forse il periodo più bello della mia vita. Sperimentai ciò che gli psicologi chiamano <em>peak experiences</em>: momenti di <em>flow</em>, presenza totale, connessione con qualcosa di superiore.
              </p>
              <p>
                Fu così che scoprii la "bellezza collaterale": la capacità di vedere il sacro, lo straordinario, nell'ordinario. Di riconoscere che la vita, la realtà — nonostante tutto — è intrinsecamente buona…
              </p>
            </AnimatedSection>

            <GlassQuote 
              quote="Noi non vediamo le cose come sono; vediamo le cose come siamo." 
              author="Talmud"
            />

            <AnimatedSection className="prose-custom">
              <p>
                Trasformai il mio pessimismo adolescenziale in speranza. Non una speranza ingenua, ma una speranza fondata sull'esperienza diretta di qualcosa che trascende la mia comprensione razionale.
              </p>
              <p className="text-cyan font-medium">
                Ciò non cambiò niente, se non il mio sguardo, e questo cambiò tutto…
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 5: L'Epifania */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                L'Epifania: <span className="text-gradient">Nasce il Metodo EFO</span>
              </h2>
            </AnimatedSection>

            <ParallaxImage src={chiSonoEpifania} alt="L'epifania - illuminazione e connessione" />

            <AnimatedSection className="prose-custom">
              <p>
                Ritornato dal monastero, cercai di custodire i tesori che avevo scoperto nel mondo ordinario… Fallii miseramente, e sentii il bisogno di riorganizzare tutto ciò che avevo sperimentato.
              </p>
              <p>
                Decisi di abbandonare la frenesia dell'autodidatta e iniziai a studiare seriamente e con metodo… Fino a laurearmi in Scienze Religiose, per cercare di conoscere — a fondo — l'antica saggezza di altre tradizioni millenarie.
              </p>
              <p>
                Ricercai anche differenze e similitudini con ciò che dice la scienza moderna, le neuroscienze, le scienze umane. Fu questo l'oggetto della mia tesi di laurea: antica saggezza vs scienza moderna per l'autorealizzazione e la felicità esistenzialista.
              </p>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection delay={0.2}>
              <div className="glass rounded-2xl p-6 md:p-10 my-12">
                <h3 className="font-display text-2xl text-center mb-8">La mia Formazione</h3>
                
                <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
                  {credentialsList.map((credential, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                      <span className="font-serif text-sm text-muted-foreground">{credential}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                  {credentials.map((cred, index) => (
                    <motion.div
                      key={index}
                      className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/90 rounded-xl p-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <img src={cred.logo} alt={cred.name} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                E poi, mentre stavo pensando all'indice della mia tesi di laurea… un'epifania. Grazie a un'intuizione improvvisa, finalmente tutti i <span className="text-cyan">18.000 pezzi del puzzle</span> — dopo 10+ anni di ricerca sul campo, decine di migliaia di euro investiti in formazione, 526 libri letti e numerose esperienze di vita vissuta — si unirono in un disegno coerente…
              </p>
              <p className="text-2xl font-display text-center my-8">
                🧩 Nacque il <span className="text-gradient">Metodo EFO: Essere Felici Ora</span>
              </p>
            </AnimatedSection>

            {/* 3 Dimensions */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { icon: History, title: "Trasforma il Tuo Passato", desc: "Da scheletro nell'armadio a trampolino di lancio" },
                { icon: Clock, title: "Vivi Solo il Presente", desc: "Con la tecnica life-changing 'Al di là del Tempo nello Spazio'" },
                { icon: Target, title: "Attrai il Futuro Desiderato", desc: "Senza la fuffa della legge d'attrazione, con strumenti scientificamente provati" }
              ].map((dim, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div 
                    className="gradient-border rounded-xl p-6 bg-gradient-card h-full text-center"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <dim.icon className="h-8 w-8 text-cyan mx-auto mb-4" />
                    <h4 className="font-display text-lg mb-2">{dim.title}</h4>
                    <p className="font-serif text-sm text-muted-foreground">{dim.desc}</p>
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
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                Dall'Interno <span className="text-gradient">all'Esterno</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                Ebbi un'altra rivelazione quando iniziai a lavorare come Coach Professionista… Scoprii che gli strumenti appresi e padroneggiati con la pratica negli anni di <em>studio matto e disperatissimo</em>, applicati durante sessioni di professional coaching — integrati con le mie conoscenze psicologiche e spirituali tramandate da millenni — erano sorprendentemente trasformativi…
              </p>
              <p className="text-cyan font-medium">
                Non solo per me, ma anche per gli altri… A volte perfino più efficaci — e meno dispendiosi in termini di tempo e denaro — di anni di analisi.
              </p>
              <p>
                Vedevo i miei coachees trasformarsi sotto i miei occhi, e mi chiedevo: com'è possibile in così poco tempo? Ho cercato solo di riflettere la luce che avevano sempre avuto dentro, ma che non riuscivano — ancora — a vedere.
              </p>
              <p className="font-display text-lg text-center my-6">
                Questo è il potere socratico del professional coaching: <span className="text-cyan">partorire se stessi</span>.
              </p>
              <p>
                Mi meravigliai. Fui profondamente grato e orgoglioso dei miei coachees e della loro trasformazione. Quello stesso senso di meraviglia — tipico dell'innocenza infantile — lo ritrovai osservando la fioritura degli altri.
              </p>
            </AnimatedSection>

            <GlassQuote quote="Basta essere presenza: creare lo spazio sicuro dove la luce può entrare, crescere, irradiarsi…" />

            <AnimatedSection className="prose-custom">
              <p className="text-lg">
                Avevo trovato il mio <span className="text-cyan font-bold">IKIGAI</span>: aiutare giovani adulti — proprio come me — ad autorealizzarsi ed essere felici esistenzialmente. Indipendenti dalla precarietà del mondo esterno, ma capaci di attingere alla ricchezza interiore inesauribile che già possiedono.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 7: Il Mondo Nuovo */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
                Il Mondo <span className="text-gradient">Nuovo</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                Oggi, quando guardo indietro al me stesso adolescente che soffriva per il male del mondo, vedo cosa quell'inquietudine mi ha permesso di costruire.
              </p>
              <p>
                Avevo ragione a soffrire — ma mi sbagliavo a pensare di essere solo… Siamo in molti a scandalizzarci per ciò che potrebbe essere altrimenti, ed è proprio grazie a chi si scandalizza come noi che le cose possono migliorare.
              </p>
              <p>
                Mi sbagliavo a credere che la soluzione fosse la fuga, l'isolamento, la mania di controllare tutto ciò che mi capitava a tiro… La vera soluzione era aprirmi al mondo — nonostante il timore di rimanerne scottato. Nell'accettazione. Nel coraggio di guardare il dolore senza distogliere lo sguardo e nel trovare — proprio lì — il seme della trasformazione.
              </p>
            </AnimatedSection>

            <GlassQuote quote="La paura non dice mai la verità." />
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, value: "526", label: "Libri letti" },
                { icon: Sparkles, value: "13+", label: "Anni di ricerca" },
                { icon: Award, value: "6", label: "Certificazioni" },
                { icon: Heart, value: "∞", label: "Passione" }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="gradient-border rounded-2xl p-6 bg-gradient-card text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <stat.icon className="h-8 w-8 text-cyan mx-auto mb-3" />
                    <motion.p 
                      className="font-display text-3xl md:text-4xl text-foreground mb-1"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-card to-primary relative overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, hsl(197 65% 70% / 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, hsl(197 65% 70% / 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, hsl(197 65% 70% / 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="container-narrow text-center relative z-10">
            <AnimatedSection>
              <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Se la mia storia ti risuona, se anche tu senti che c'è qualcosa di più oltre la monotonia — qualcosa che ancora non sai nominare — sappi che non sei solo…
              </p>
              <p className="font-display text-2xl md:text-3xl mb-8">
                <span className="text-cyan">Ci sono passato anch'io.</span><br />
                E da oggi possiamo camminare insieme.
              </p>
              <p className="font-serif text-muted-foreground mb-4">
                Non ti posso promettere magie o miracoli. Ma ti offrirò un metodo — corroborato da tradizioni millenarie e dalla scienza — e una mappa per diventare il <em>capitano della tua anima</em>.
              </p>
              <p className="font-display text-lg text-foreground mb-10">
                Il Metodo EFO non è una teoria da leggere: sintetizza esperienze da vivere.<br />
                E tutto comincia con una conversazione…
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      <Mail className="h-5 w-5" />
                      Fissa Sessione Gratuita
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="heroOutline" size="xl" asChild>
                    <Link to="/metodo-efo">
                      Scopri il Metodo EFO
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChiSono;

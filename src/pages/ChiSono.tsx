import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, BookOpen, Award, Heart, Sparkles, Quote, History, Clock, Target } from "lucide-react";
import AnimatedSectionLite from "@/components/AnimatedSectionLite";
// Use lite version for better performance
const AnimatedSection = AnimatedSectionLite;
import gabrielePhoto from "@/assets/chi-sono-gabriele.webp";
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
const credentials = [{
  logo: logoPul,
  name: "Pontificia Università Lateranense"
}, {
  logo: logoIcf,
  name: "International Coaching Federation"
}, {
  logo: logoPenn,
  name: "University of Pennsylvania"
}, {
  logo: logoMinistero,
  name: "Ministero della Salute"
}];
const credentialsList = ["Laurea Magistrale in Scienze Religiose (PUL)", "Master Universitario di 1° livello in Coaching Umanistico e PNL", "Master internazionale in Professional Coaching (ICF)", "Specializzazione in Psicologia Positiva (Penn University)", "Facilitatore in Meditazione Mindfulness (50 crediti ECM) Ministero della Salute", "Master in Ipnosi"];
const GlassQuote = ({
  quote,
  author
}: {
  quote: string;
  author?: string;
}) => <AnimatedSection className="my-8 md:my-12">
    <blockquote className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
      <Quote className="absolute top-4 left-4 h-6 w-6 text-cyan/20" aria-hidden="true" />
      <p className="font-serif text-base md:text-lg text-foreground italic leading-relaxed text-center relative z-10">
        "{quote}"
      </p>
      {author && <cite className="block text-center mt-3 text-cyan font-sans text-xs uppercase tracking-wider not-italic">
          — {author}
        </cite>}
    </blockquote>
  </AnimatedSection>;

// Simple lazy image without heavy parallax for performance
const LazyImage = ({
  src,
  alt
}: {
  src: string;
  alt: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      rootMargin: "100px"
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl my-8 md:my-10" role="img" aria-label={alt}>
      {!isLoaded && <div className="absolute inset-0 bg-muted/20 animate-pulse" aria-hidden="true" />}
      {isInView && <img src={src} alt={alt} className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} loading="lazy" onLoad={() => setIsLoaded(true)} />}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" aria-hidden="true" />
    </div>;
};
const ChiSono = () => {
  const heroRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return <>
      <Helmet>
        <title>Chi Sono | Gabriele Lucesole - Coach Professionista</title>
        <meta name="description" content="La mia storia: da giovane inquieto alla scoperta del Metodo EFO. 13 anni di ricerca, 526 libri, formazione certificata per aiutarti a trovare il tuo senso." />
        <link rel="canonical" href="https://gabrielelucesole.com/chi-sono" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section ref={heroRef} className="min-h-screen flex items-center section-padding bg-gradient-hero relative overflow-hidden" aria-labelledby="chi-sono-heading">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <motion.div className="container-wide relative z-10" style={{
          opacity: heroOpacity
        }}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <AnimatedSection direction="left">
                <span className="inline-block px-3 py-1.5 text-xs font-sans uppercase tracking-[0.15em] text-cyan/70 border border-cyan/20 rounded-full mb-4 md:mb-6">
                  Il viaggio più importante?
                </span>

                <h1 id="chi-sono-heading" className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                  La mia <span className="text-gradient">storia</span>
                </h1>

                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Nella vita, c'è un tempo in cui tutto ciò che hai costruito — titolo di studio, lavoro, aspettative realizzate — improvvisamente non basta più…
                </p>
                
                <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                  Guardi il tuo percorso e ti chiedi: "È davvero tutto qui?"
                </p>

                <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                  Una presenza assente, un vuoto interiore che nessun successo esterno sembra riuscire a colmare. Una sottile solitudine che continua a crescere, nonostante tu sia circondato da persone.
                </p>

                <p className="font-display text-lg md:text-xl text-cyan">
                  Fu questo il punto di partenza del mio viaggio…
                </p>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection direction="right" className="relative">
                <div className="relative aspect-[4/5] max-w-sm md:max-w-md mx-auto">
                  <div className="absolute -inset-3 border border-cyan/20 rounded-2xl" />
                  <div className="relative h-full rounded-xl overflow-hidden">
                    <img src={gabrielePhoto} alt="Gabriele Lucesole" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <h2 className="font-display text-xl md:text-2xl text-foreground mb-1">Gabriele Lucesole</h2>
                    <p className="text-cyan text-sm">ICF Professional Coaching</p>
                  </div>
                </div>
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

            <LazyImage src={chiSonoMondo} alt="Il mondo incompreso - alienazione giovanile" />

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

            <LazyImage src={chiSonoBivio} alt="Il bivio - scelta del proprio cammino" />

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
                Dissetare la sete di senso che il mondo non sarebbe mai riuscito a placare: il mio imperativo categorico.
              </p>
              <p>
                Feci l'amore con il sapere. Lessi voracemente — più di cento libri l'anno — spaziando tra filosofia, psicologia, spiritualità… Frequentai tanti corsi di formazione, viaggi spirituali, assorbii ogni insegnamento come se fosse l'ultimo.
              </p>
              <p>
                Dovevo rispondere alle domande che titolano uno dei quadri più famosi di Gauguin:
              </p>
            </AnimatedSection>

            <GlassQuote quote="Da dove veniamo? Chi siamo? Dove andiamo?" author="Paul Gauguin" />

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
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
                L'Errore: <span className="text-gradient">Il Super-Ego e la Sua Prigione</span>
              </h2>
            </AnimatedSection>

            <LazyImage src={chiSonoErrore} alt="L'errore - prigione dell'ego" />

            <AnimatedSection className="prose-custom">
              <p>
                Alla ricerca di senso, trovai conferma del mio pessimismo nelle antiche tradizioni orientali. Mi ci buttai a capofitto…
              </p>
              <p>
                Credevo che — come insegnano le filosofie orientali — distaccarmi dal mondo, dai desideri, dalle relazioni (Illusioni! Riflessi di maya…) mi avrebbe reso un uomo libero. Desiderare di non desiderare è la via per il Nirvana, insegna il Buddha nelle Quattro Nobili Verità.
              </p>
              <p className="text-cyan font-medium">
                … Ma desiderare di non desiderare non è esso stesso desiderare?! 🤔
              </p>
              <p>
                Mi stavo costruendo una prigione ancora più stretta e subdola. Invece di liberarmi dal peso dell'ego, ne stavo forgiando uno ancora più grande: un Super-Ego. Come il titano Atlante, dovevo portare il peso del mondo da solo.
              </p>
              <p>
                La realtà dei sensi — per le religioni orientali — è una proiezione mentale: come quando sogniamo, al risveglio, riconosciamo le cose sognate frutto della nostra immaginazione… così, per gli orientali, la vita di tutti i giorni è un sogno ancora più grande da cui svegliarsi.
              </p>
              <p>
                Bisogna vedere tutte le altre persone — eccetto me: creatore del mio sogno, dunque del mondo — come proiezioni frutto del karma da bruciare nel fuoco dell'indifferenza, del non attaccamento. Gli altri erano ostacoli da superare verso l'«illuminazione», non fonti — nell'incontro — di ricchezza.
              </p>
              <p>
                Le relazioni — massima fonte di felicità per l'uomo secondo le scienze psicologiche — erano distrazioni dalla meta del mio viaggio interiore. Guardavo dentro me stesso e mi allontanavo dagli altri; ma senza mettersi in discussione relazionandoci con gli altri non c'è vera crescita, sviluppo, fioritura…
              </p>
              <p>
                Le filosofie orientali — tanto di moda oggi — facendo leva sul pessimismo contemporaneo e sulla paura del futuro: mascherano la pandemia della solitudine con il successo, l'individualismo diffuso come via per l'illuminazione, il narcisismo (disturbo di personalità) con il Nirvana.
              </p>
            </AnimatedSection>

            <GlassQuote quote="Quindi, in generale, tu, la tua gente, dovresti mantenere le tue tradizioni" author="Dalai Lama, 1999" />

            <AnimatedSection className="prose-custom">
              <p className="italic text-muted-foreground">
                Lo stesso Dalai Lama sconsiglia le pratiche orientali agli occidentali. Ci sarà un motivo?!
              </p>
              <p>
                Investivo l'energia della mia inquietudine per cercare il senso, ma — come un cane che si morde la coda — non lo trovavo, cercandolo nei posti sbagliati…
              </p>
            </AnimatedSection>

            <GlassQuote quote="Qualcosa di misterioso in questo universo è complice di quelli che amano solo il bene" author="Simone Weil" />

            <AnimatedSection className="prose-custom">
              <p>
                La protesta del mio corpo — anch'esso illusione da superare per vedersi solo puro spirito senza corpo — non si fece attendere… La voragine sempre più profonda del mio vuoto interiore mi portò — probabilmente — a soffrire di tremende emicranie con aura: dovetti isolarmi sempre di più — al buio — affinché mi passassero prima le fasi acute…
              </p>
              <p className="italic text-muted-foreground">
                La mia esperienza personale, e la vita stessa — per quanto illusoria — mi suggerirono: "Stop, fermati. Cambia rotta. Non è questa la via"…
              </p>
            </AnimatedSection>
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

            <LazyImage src={chiSonoSvolta} alt="La svolta spirituale - monastero all'alba" />

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
                Da quel momento in poi, non ebbi più mal di testa.
              </p>
              <p>
                Uscito — in tutti i sensi — dal buio di camera mia, mi impegnai ad accogliere, accettare la realtà così com'è, smettere di combattere i mulini a vento…
              </p>
              <p>
                Presentatasi l'occasione, colsi la palla al balzo e andai a vivere — nove mesi — in un monastero, insieme ad altri giovani cercatori di senso come me, per approfondire anche altre dimensioni del sapere. Nove mesi di gestazione monastica, per partorire un nuovo me.
              </p>
              <p>
                Lì, lontano dalle pressioni sociali, vissi forse il periodo più bello della mia vita. Sperimentai ciò che gli psicologi chiamano <em>peak experiences</em>: momenti di <em>flow</em>, presenza totale, connessione con qualcosa di superiore.
              </p>
              <p>
                Fu così che scoprii la "bellezza collaterale": la capacità di vedere il sacro, lo straordinario, nell'ordinario. Di riconoscere che la vita, la realtà — nonostante tutto — è intrinsecamente buona… Non un'illusione, non un sogno da cui svegliarsi.
              </p>
              <p className="text-cyan font-medium">
                Il problema non era il mondo: era il mio sguardo sul mondo.
              </p>
            </AnimatedSection>

            <GlassQuote quote="Noi non vediamo le cose come sono; vediamo le cose come siamo." author="Talmud" />

            <AnimatedSection className="prose-custom">
              <p>
                Trasformai il mio pessimismo adolescenziale in speranza. Non una speranza ingenua, ma una speranza fondata sull'esperienza diretta di qualcosa che trascende la mia comprensione razionale.
              </p>
              <p className="text-cyan font-medium text-lg">
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

            <LazyImage src={chiSonoEpifania} alt="L'epifania - illuminazione e connessione" />

            <AnimatedSection className="prose-custom">
              <p>
                Ritornato dal monastero, cercai di custodire i tesori che avevo scoperto nel mondo ordinario… Fallii miseramente, e sentii il bisogno di riorganizzare tutto ciò che avevo sperimentato.
              </p>
              <p>
                Decisi di abbandonare la frenesia dell'autodidatta e iniziai a studiare seriamente e con metodo… Fino a laurearmi in Scienze Religiose, per cercare di conoscere — a fondo — l'antica saggezza di altre tradizioni millenarie.
              </p>
              <p>
                Come hanno fatto mistici, filosofi, saggi di tutti i tempi a realizzarsi ed essere felici, prima dell'avvento del metodo scientifico? C'è qualcosa in noi — oltre la razionalità pura della scienza — che può guidarci sulla via della pace? Quali segreti hanno scoperto gli antichi? Ci hanno lasciato qualche indizio?
              </p>
              <p>
                Non contento di aver trovato queste risposte oltre ad altre domande con una laurea… Ricercai anche differenze e similitudini con ciò che dice la scienza moderna, le neuroscienze, le scienze umane. Fu questo l'oggetto della mia tesi di laurea: <em>antica saggezza vs scienza moderna per l'autorealizzazione e la felicità esistenzialista</em>…
              </p>
              <p>
                Ovvero: cosa che può fare l'essere umano — autonomamente e prescindendo dagli altri: incontrollabili, non manipolabili, altri da noi — per essere felice?
              </p>
              <p>
                Contemporaneamente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Conseguì un Master Universitario di 1° Livello in coaching umanistico e PNL</li>
                <li>Un altro master internazionale — certificato ICF — in professional coaching</li>
                <li>Mi specializzai in Psicologia Positiva presso la Penn University dell'Ivy League</li>
                <li>Diventai facilitatore in meditazione mindfulness (scoprendo le differenze con lo yoga che praticai in passato)</li>
                <li>Approfondii l'ipnosi con un altro master…</li>
              </ul>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-xl p-5 md:p-8 my-8 md:my-10">
                <h3 className="font-display text-xl md:text-2xl text-center mb-6">La mia Formazione</h3>
                
                <div className="grid md:grid-cols-2 gap-2 md:gap-3 max-w-3xl mx-auto mb-8">
                  {credentialsList.map((credential, index) => <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      <span className="font-serif text-xs md:text-sm text-muted-foreground">{credential}</span>
                    </div>)}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                  {credentials.map((cred, index) => <div key={index} className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/90 rounded-lg p-1.5 transition-transform duration-300 hover:scale-105">
                      <img src={cred.logo} alt={cred.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>)}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="prose-custom">
              <p>
                E poi, mentre stavo pensando all'indice della mia tesi di laurea… un'epifania. Grazie a un'intuizione improvvisa, finalmente tutti i <span className="text-cyan">18.000 pezzi del puzzle</span> — dopo 10+ anni di ricerca sul campo, decine di migliaia di euro investiti in formazione, 526 libri letti e numerose esperienze di vita vissuta — si unirono in un disegno coerente…
              </p>
              <p>
                … e anche grazie ai 9 mesi — e oltre — di gestazione in monastero:
              </p>
              <p className="text-2xl font-display text-center my-8">
                🧩 Nacque il <span className="text-gradient">Metodo EFO: Essere Felici Ora</span>
              </p>
              <p>
                Un approccio integrato che abbraccia le tre dimensioni fondamentali della nostra vita:
              </p>
            </AnimatedSection>

            {/* 3 Dimensions */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-8 md:my-10">
              {[{
              icon: History,
              title: "Trasforma il Tuo Passato",
              desc: "Da scheletro nell'armadio a trampolino di lancio"
            }, {
              icon: Clock,
              title: "Vivi Solo il Presente",
              desc: "Grazie a uno stratagemma brevettato da me che ti riporta — \"ingannando\" il cervello — qui e ora, oltre il tempo, nel tuo spazio interiore"
            }, {
              icon: Target,
              title: "Attrai il Futuro Desiderato",
              desc: "Senza la fuffa della legge d'attrazione, ma con strumenti scientificamente provati"
            }].map((dim, index) => <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="gradient-border rounded-xl p-4 md:p-6 bg-gradient-card h-full text-center transition-transform duration-300 hover:-translate-y-1">
                    <dim.icon className="h-6 w-6 md:h-8 md:w-8 text-cyan mx-auto mb-3" />
                    <h4 className="font-display text-base md:text-lg mb-2">{dim.title}</h4>
                    <p className="font-serif text-xs md:text-sm text-muted-foreground">{dim.desc}</p>
                  </div>
                </AnimatedSection>)}
            </div>

            <AnimatedSection className="prose-custom">
              <p>
                Grazie a quell'intuizione inaspettata, trovai la sintesi definitiva del mio viaggio interiore… E ora — finalmente — potevo mettere nero su bianco i tesori che avevo scoperto, condividerli con chi desidera autorealizzarsi e iniziare il viaggio più importante: dentro di sé.
              </p>
              <p>
                Fenomenologia, Jung, Maslow, Peterson, psicologia positiva, bioenergetica, mindfulness, ipnosi: tutto trova posto in questo sistema innovativo integrato.
              </p>
              <p className="text-cyan font-medium text-lg text-center my-6">
                Vuoi avere a disposizione tutti gli strumenti migliori per realizzarti anche tu? Senza nemmeno alzarti dalla sedia di casa tua… Risparmieresti 13 anni di vita vissuta e tutti i soldi che ho investito in formazione ed esperienze (decine di migliaia di euro) — al posto tuo.
              </p>
            </AnimatedSection>
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
                Ebbi un'altra rivelazione quando iniziai a lavorare come Coach Professionista… Scoprii che gli strumenti appresi e padroneggiati con la pratica negli anni di <em>studio matto e disperatissimo</em>, applicati durante sessioni di professional coaching — integrati con le mie conoscenze psicologiche e spirituali tramandate da millenni — erano sorprendentemente trasformativi…
              </p>
              <p className="text-cyan font-medium">
                Non solo per me, ma anche per gli altri… A volte perfino più efficaci — e meno dispendiosi in termini di tempo e denaro — di anni di analisi.
              </p>
              <p>
                Come successo a Liana che, dopo anni passati di psicoterapeuta in psicoterapeuta prima di trovare la sua strada, attraverso sessioni di professional coaching, riuscì finalmente a individuare e sciogliere vecchi meccanismi di difesa che si portava sul groppone da decenni: ora inutili, da adulta. Più libera e senza il peso del passato, con la tecnica mindfulness che le trasmisi, riuscì — rapidamente — a gestire i suoi pensieri e a migliorare, di settimana in settimana, la sua ansia costante per il futuro…
              </p>
              <p>
                Vedevo i miei coachees trasformarsi sotto i miei occhi, e mi chiedevo: com'è possibile in così poco tempo? Abituati come siamo ad anni di terapia… per poi vedersi sempre gli stessi, dall'altra parte dello specchio…
              </p>
              <p className="italic text-muted-foreground">
                Ho cercato solo di riflettere la luce che avevano sempre avuto dentro, ma che non riuscivano — ancora — a vedere.
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
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
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

            <AnimatedSection className="prose-custom">
              <p>
                Se la mia storia ti risuona, se anche tu senti che c'è qualcosa di più oltre la monotonia — qualcosa che ancora non sai nominare — sappi che non sei solo…
              </p>
              <p className="text-cyan font-medium text-lg">
                Ci sono passato anch'io. E da oggi possiamo camminare insieme, mettendoti a disposizione tutto ciò che ho imparato lungo il cammino della vita.
              </p>
              <p>
                Non ti posso promettere magie o miracoli. Ma ti offrirò un metodo — corroborato da tradizioni millenarie e dalla scienza — e una mappa per diventare il capitano della tua anima, fino a scoprire anche tu i tesori nascosti dentro di te.
              </p>
              <p>
                Presenza, e dialoghi autentici tra cercatori di senso, per esplorare insieme da dove vieni, chi sei e dove vuoi andare: verso l'infinito e oltre…
              </p>
              <p className="font-display text-xl text-center my-8">
                Il <span className="text-gradient">Metodo EFO</span> non è una teoria da leggere: sintetizza esperienze da vivere.<br />
                E tutto comincia con una conversazione…
              </p>
              <p className="text-center text-muted-foreground">
                Approfitta di una sessione gratuita. Senza impegno. Per conoscerci e scoprire se il Metodo EFO fa per te. Se senti la chiamata: rispondi. Il primo passo è sempre il più difficile, ma è anche quello che può cambiare tutto: a cominciare dalla tua vita…
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[{
              icon: BookOpen,
              value: "526",
              label: "Libri letti"
            }, {
              icon: Sparkles,
              value: "13+",
              label: "Anni di ricerca"
            }, {
              icon: Award,
              value: "6",
              label: "Certificazioni"
            }, {
              icon: Heart,
              value: "∞",
              label: "Passione"
            }].map((stat, index) => <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="gradient-border rounded-xl p-4 md:p-6 bg-gradient-card text-center transition-transform duration-300 hover:-translate-y-1">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-cyan mx-auto mb-2 md:mb-3" />
                    <p className="font-display text-2xl md:text-3xl text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-card to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow text-center relative z-10">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-6">
                Fissa una Sessione Gratuita:<br />
                <span className="text-gradient">Inizia la Tua Trasformazione!</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                  <a href="mailto:gabriele.lucesole@gmail.com">
                    <Mail className="h-5 w-5" />
                    Fissa Sessione GRATIS
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                  <Link to="/metodo-efo">
                    Scopri il Metodo EFO
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>;
};
export default ChiSono;
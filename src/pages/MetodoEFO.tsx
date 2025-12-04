import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Mail, ArrowRight, History, Clock, Target, Brain, 
  BookOpen, MessageCircle, CheckCircle, Sparkles, 
  Users, Zap, Shield, Star, XCircle, Lock, Unlock,
  AlertTriangle, TrendingUp, ArrowDown, Gift, Award,
  Search, Heart, Compass, Flame
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import gabrielePhoto from "@/assets/gabriele-photo.webp";

// Credential logos
import logoPul from "@/assets/logo-pul.png";
import logoIcf from "@/assets/logo-icf.webp";
import logoPenn from "@/assets/logo-penn.webp";
import logoMinistero from "@/assets/logo-ministero.webp";

const forYouIf = [
  {
    icon: Search,
    title: "Ricercatore Autentico",
    description: "Non ti accontenti delle risposte superficiali. Hai letto libri di crescita personale, provato app di meditazione, seguito corsi motivazionali. Ma dentro sai che serve qualcosa di più profondo. Non cerchi trucchi o scorciatoie. Cerchi trasformazione reale."
  },
  {
    icon: Users,
    title: "Leader Silenzioso",
    description: "Non hai bisogno di urlare per essere ascoltato. Forse hai responsabilità importanti — team da guidare, persone che dipendono da te, decisioni da prendere. Ma sai che per aiutare gli altri devi prima aiutare te stesso."
  },
  {
    icon: Star,
    title: "Professionista del Paradosso",
    description: "Sulla carta hai \"successo\": carriera che avanza, riconoscimenti professionali, stipendio dignitoso. Ma dentro c'è un vuoto che non riesci a colmare. È qualcosa di più sottile e profondo: la sensazione di vivere la vita di qualcun altro."
  },
  {
    icon: Compass,
    title: "Cercatore di Senso",
    description: "Per te il lavoro non deve essere solo un mezzo per pagare le bollette. Vuoi che la tua vita significhi qualcosa. Vuoi guardare indietro a 70 anni e dire: \"Ho vissuto davvero.\""
  },
  {
    icon: Flame,
    title: "Pronto a Scendere Prima di Risalire",
    description: "Non cerchi motivazione superficiale o pensiero positivo tossico. Sei disposto a guardarti dentro anche dove fa male. Sai che la vera trasformazione passa attraverso l'oscurità, non intorno ad essa."
  }
];

const notForYouIf = [
  "Cerchi soluzioni magiche immediate senza impegno personale",
  "Vuoi solo ottimizzare la produttività senza toccare la tua interiorità",
  "Non sei disposto a dedicare 20-30 min/giorno alla tua trasformazione",
  "Cerchi qualcuno che ti dica cosa fare invece di aiutarti a scoprirlo",
  "Hai bisogno di supporto clinico per disturbi psichiatrici (in quel caso ti indirizzo allo specialista giusto)"
];

const problems = [
  { title: "Burnout mascherato da produttività", desc: "Lavori tante ore, ma senti di aver fatto poco o niente che conta davvero. Il burnout arriva in silenzio." },
  { title: "Successo vuoto", desc: "Hai la promozione che volevi, ma c'è un buco nel petto che non si riempie con i complimenti del capo." },
  { title: "Tempo rubato", desc: "Tuo figlio ti chiede di giocare. Tu dici 'tra cinque minuti' mentre controlli le email. Il tempo scorre, ma tu non ci sei." },
  { title: "Stress cronico normalizzato", desc: "Tachicardia prima delle riunioni. Nodo allo stomaco. Risveglio alle 3 del mattino con l'ansia. Il tuo corpo parla, ma tu non ascolti." },
  { title: "Ricerca di senso oltre la carriera", desc: "Hai provato app di meditazione, libri di self-help. Ma senti il bisogno di qualcosa di più profondo." }
];

const roadmapLevels = [
  {
    level: "0",
    title: "Punto di Partenza",
    subtitle: "Sessione Gratuita",
    week: "Inizia",
    unlocked: true,
    content: ["Analizziamo la tua situazione", "Identifichiamo il tuo gap trasformativo", "Decidi se procedere"],
    badge: "Analisi personalizzata",
    time: "30+ min"
  },
  {
    level: "1",
    title: "Fondamenta",
    subtitle: "Installazione Mindfulness",
    week: "Settimana 1",
    unlocked: true,
    content: ["Pratica mindfulness 10+ min/giorno", "Prime transizioni tra stati di coscienza", "Primi benefici tangibili"],
    badge: "Libro 'Felicità Esistenzialista ORA'",
    time: "10 min/giorno"
  },
  {
    level: "2",
    title: "Cura",
    subtitle: "Training Bambino Interiore",
    week: "Settimane 2-4",
    unlocked: false,
    content: ["Tecniche di reparenting", "Integrazione degli archetipi", "Liberare energie bloccate"],
    badge: "Past Authoring + Assistenza 24/7",
    time: "15 min/giorno"
  },
  {
    level: "3",
    title: "Sovranità",
    subtitle: "Training Personalità Adulta",
    week: "Settimane 5-10",
    unlocked: false,
    content: ["Sbloccare i 'poteri' dell'adulto", "Identificazione con l'eroe adulto", "Accesso al flow avanzato"],
    badge: "Formula della Trasformazione",
    time: "20 min/giorno"
  },
  {
    level: "4",
    title: "Visione",
    subtitle: "Training Apertura al Futuro",
    week: "Settimane 11-13",
    unlocked: false,
    content: ["Visualizzazioni strategiche", "Identificazione valori autentici", "Allineamento azioni quotidiane"],
    badge: "Future Authoring",
    time: "20 min/giorno"
  },
  {
    level: "∞",
    title: "Maestria",
    subtitle: "Presenza Radicale + Attrazione Consapevole",
    week: "Ongoing",
    unlocked: false,
    content: ["Tecnica 'Al di là del Tempo nello Spazio'", "Coaching ipnotico 1-to-1", "Trasformazione continua"],
    badge: "Achievement: Essere Felici ORA",
    time: "Vita quotidiana"
  }
];

const faqs = [
  {
    q: "Non ho tempo. Sono sempre oberato di lavoro.",
    a: "Il Metodo EFO® richiede circa 3 ore/settimana per 13 settimane. La domanda giusta non è \"Ho tempo?\", ma: \"Quanto mi sta costando vivere così?\" Stress, relazioni disfunzionali, salute a rischio... hanno un costo molto più alto."
  },
  {
    q: "Il coaching non è meno profondo della psicoterapia?",
    a: "Il Metodo EFO® integra gli strumenti di entrambi: tecniche psicologiche (ipnosi, reparenting, psicologia positiva) + professional coaching (mindfulness, goal-setting, action plan). Se hai bisogno di supporto clinico, te lo dirò onestamente."
  },
  {
    q: "Devo essere credente o spirituale per farlo?",
    a: "No. Il Metodo integra saggezza spirituale, ma non è religioso né dogmatico. È adatto per atei razionalisti, credenti e agnostici. Ciò che serve: apertura mentale e desiderio sincero di trasformazione."
  },
  {
    q: "Ho già provato altri coach. Perché tu saresti diverso?",
    a: "Integro neuroscienze, psicologia, filosofia e pratiche contemplative millenarie. Non ti motivo con slogan: facilito la tua trasformazione con strumenti concreti. E ho attraversato la crisi personalmente."
  },
  {
    q: "Funziona anche online o serve presenza fisica?",
    a: "Funziona benissimo online. Ricerche scientifiche dimostrano che il coaching online funziona come quello dal vivo. Il supporto WhatsApp 24/7 crea continuità tra le sessioni."
  },
  {
    q: "Quanto dura davvero? Posso fare meno settimane?",
    a: "Il percorso completo è 13+ settimane perché la trasformazione profonda richiede tempo. Posso offrire un pacchetto ridotto se il training passato non risuona con te, ma non avrai la potenza del percorso integrato 3D."
  },
  {
    q: "E se non funziona? Ci sono garanzie?",
    a: "La sessione gratuita (30+ min) serve a valutare se il Metodo EFO® può fare al caso tuo. Se ti impegni davvero nel percorso, funzionerà. I risultati dipendono dal metodo (te lo do io) e dal tuo impegno."
  },
  {
    q: "Costa troppo. Non posso permettermelo.",
    a: "789€ per 13 settimane = 60€/settimana. Meno di una cena fuori. Meno di uno psicoterapeuta. E imparerai strumenti che saranno a tua disposizione per sempre. Stai investendo nella tua libertà interiore."
  }
];

const credentials = [
  { logo: logoPul, name: "Pontificia Università Lateranense" },
  { logo: logoIcf, name: "International Coaching Federation" },
  { logo: logoPenn, name: "University of Pennsylvania" },
  { logo: logoMinistero, name: "Ministero della Salute" }
];

const MetodoEFO = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
        <section ref={heroRef} className="min-h-screen flex items-center section-padding bg-gradient-hero relative overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
                ⚡ Metodo EFO®
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Hai Fatto Tutto.<br />
                <span className="text-gradient">Ma Manca Ancora Qualcosa.</span>
              </h1>

              <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
                Forse hai successo sulla carta, ma senti un vuoto che non riesci a colmare. 
                La carriera avanza. Il conto in banca cresce. Ma la sensazione di vivere davvero... quella no.
              </p>
              
              <p className="font-serif text-foreground max-w-2xl mx-auto mb-8">
                Il Metodo EFO® non ti promette "work-life balance" con frasi fatte. Ti offre un <span className="text-cyan">sistema integrato per ritrovare te stesso</span> — senza sacrificare il successo.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <a href="mailto:gabriele.lucesole@gmail.com">
                    <Mail className="h-5 w-5" />
                    Fissa Sessione Gratuita
                  </a>
                </Button>
              </motion.div>

              <motion.p 
                className="text-cyan mt-8 flex items-center justify-center gap-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
                Scopri se è il momento giusto per te
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* For You If */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                👤 Questo percorso è <span className="text-cyan">per te</span> se...
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {forYouIf.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="gradient-border rounded-2xl p-6 bg-gradient-card h-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg mb-2 text-foreground">
                          Sei un {item.title}
                        </h3>
                        <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Not for you */}
            <AnimatedSection delay={0.4}>
              <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-red-500/20">
                <h3 className="font-display text-xl mb-6 text-center flex items-center justify-center gap-2">
                  <XCircle className="h-6 w-6 text-red-400" />
                  <span>Questo percorso NON è per te se...</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {notForYouIf.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6 italic">
                  Non è giudizio. È allineamento. Il Metodo EFO® funziona solo con chi si sente pronto.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Problems / Signals */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                🎯 Riconosci <span className="text-gradient">Questi Segnali?</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="p-6 rounded-xl bg-card border border-border/50 h-full"
                    whileHover={{ borderColor: "hsl(197 65% 70% / 0.5)" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-cyan" />
                      <h3 className="font-display text-lg text-foreground">{problem.title}</h3>
                    </div>
                    <p className="font-serif text-sm text-muted-foreground">{problem.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Good news */}
            <AnimatedSection delay={0.5}>
              <div className="glass rounded-2xl p-8 max-w-3xl mx-auto text-center border border-emerald-500/20">
                <h3 className="font-display text-2xl mb-4 flex items-center justify-center gap-2">
                  <Heart className="h-6 w-6 text-emerald-400" />
                  <span className="text-emerald-400">Ma C'È Una Buona Notizia</span>
                </h3>
                <p className="font-serif text-muted-foreground mb-4">
                  Se hai riconosciuto anche solo 2 di questi segnali, significa che la tua consapevolezza è già attiva.
                  <span className="text-foreground font-medium"> Non sei "rotto". Non hai fallito.</span> Sei semplicemente arrivato a un punto di svolta.
                </p>
                <p className="text-cyan font-display">
                  La trasformazione non è un'eccezione. È la regola, quando hai il metodo giusto.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Two Scenarios */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                🔄 La Tua Vita <span className="text-gradient">Tra 90 Giorni</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Scenario A */}
              <AnimatedSection direction="left">
                <motion.div 
                  className="rounded-2xl p-8 bg-red-950/30 border border-red-500/30 h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <XCircle className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-red-400">SCENARIO A</h3>
                      <p className="text-sm text-muted-foreground">Se Non Cambi Nulla</p>
                    </div>
                  </div>
                  <div className="space-y-4 font-serif text-sm text-muted-foreground">
                    <p>È lunedì mattina, ore 7:00. La sveglia suona e il primo pensiero è già una scadenza. Ti alzi con quel peso familiare sul petto.</p>
                    <p>Alle 23:00 sei ancora al computer. Il collo fa male. Gli occhi bruciano. "Cos'ho fatto oggi che conta davvero?"</p>
                    <p className="text-red-400">Tra tre mesi sarai esattamente dove sei adesso, forse più stanco, forse più vuoto.</p>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Scenario B */}
              <AnimatedSection direction="right">
                <motion.div 
                  className="rounded-2xl p-8 bg-emerald-950/30 border border-emerald-500/30 h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-emerald-400">SCENARIO B</h3>
                      <p className="text-sm text-muted-foreground">Dopo il Metodo EFO®</p>
                    </div>
                  </div>
                  <div className="space-y-4 font-serif text-sm text-muted-foreground">
                    <p>È lunedì mattina, ore 7:00. La sveglia suona ma tu sei già sveglio, seduto in meditazione. Sei presente. Sei semplicemente qui.</p>
                    <p>Alle 18:00 chiudi il computer. Davvero. Senza sensi di colpa. La sera leggi, giochi con tuo figlio, sei completamente lì.</p>
                    <p className="text-emerald-400">Sorridi. Sei tornato a casa, dentro te stesso.</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="text-center mt-8">
              <p className="font-display text-2xl text-cyan">Quale scenario vuoi vivere?</p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3 Dimensions */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
                🧩 Metodo EFO®
              </span>
              <h2 className="font-display text-3xl md:text-5xl mb-4">
                Essere Felici <span className="text-gradient">ORA</span>
              </h2>
              <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
                Il sistema integrato che unisce 🧠 Neuroscienze + 🏛️ Saggezza millenaria + 🔢 Risultati misurabili
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              {[
                { icon: History, num: "1D", title: "Trasforma il Tuo Passato", sub: "Da peso a trampolino di lancio", benefits: ["Liberarti da schemi inconsci", "Riscrivere narrazioni limitanti", "Riconnetterti con parti di te sacrificate"], result: "Il passato diventa risorsa, energia, non prigione." },
                { icon: Clock, num: "2D", title: "Vivi Pienamente il Presente", sub: "Dal pilota automatico a una presenza radicale", benefits: ["Accesso allo stato di flow", "Gestione stress con mindfulness applicata", "Essere qui e ora, senza ansia"], result: "Lavori meglio, senza consumarti. Vivi davvero." },
                { icon: Target, num: "3D", title: "Attrai il Futuro Desiderato", sub: "Dalla confusione alla chiarezza", benefits: ["Ridefinire priorità oltre la carriera", "Allineamento tra chi sei e cosa fai", "Piano d'azione concreto"], result: "Non rincorri più obiettivi altrui. Crei il tuo destino." }
              ].map((dim, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div 
                    className="gradient-border rounded-2xl p-8 bg-gradient-card"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl bg-cyan/10 flex items-center justify-center">
                            <dim.icon className="h-8 w-8 text-cyan" />
                          </div>
                          <div className="w-12 h-12 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center">
                            <span className="font-display text-lg text-cyan">{dim.num}</span>
                          </div>
                        </div>
                        <h3 className="font-display text-2xl mb-2">{dim.title}</h3>
                        <p className="text-cyan text-sm">{dim.sub}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-4 font-medium">🔑 Per te significa:</p>
                        <ul className="space-y-3">
                          {dim.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Zap className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                              <span className="text-sm text-muted-foreground">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center h-full">
                        <div className="p-4 rounded-xl bg-cyan/10 border border-cyan/20 w-full">
                          <p className="text-sm text-foreground font-medium mb-1">✅ Risultato:</p>
                          <p className="text-sm text-cyan">{dim.result}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap - Gamified Levels */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                🗺️ La Tua Mappa di <span className="text-gradient">Trasformazione</span>
              </h2>
              <p className="font-serif text-muted-foreground">
                Ogni livello è un livello da completare. Ogni livello sblocca nuove abilità.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapLevels.map((level, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className={`rounded-2xl p-6 h-full ${level.unlocked ? 'bg-gradient-card border border-cyan/30' : 'bg-background/50 border border-border/30'}`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${level.unlocked ? 'bg-cyan/20' : 'bg-muted/20'}`}>
                          {level.unlocked ? (
                            <Unlock className={`h-5 w-5 ${level.unlocked ? 'text-cyan' : 'text-muted-foreground'}`} />
                          ) : (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <span className={`font-display text-2xl ${level.unlocked ? 'text-cyan' : 'text-muted-foreground'}`}>
                            LV {level.level}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{level.week}</span>
                    </div>

                    <h3 className="font-display text-xl mb-1">{level.title}</h3>
                    <p className="text-sm text-cyan mb-4">{level.subtitle}</p>

                    <ul className="space-y-2 mb-4">
                      {level.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-cyan mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-cyan" />
                        <span className="text-xs text-muted-foreground">{level.badge}</span>
                      </div>
                      <span className="text-xs text-cyan">⏱️ {level.time}</span>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-8">
              <p className="font-display text-lg text-foreground">
                Non è un corso. Non è un percorso qualsiasi. È una <span className="text-cyan">quest di trasformazione esistenziale.</span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing & Urgency */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                💰 <span className="text-gradient">Investimento</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="gradient-border rounded-2xl p-8 bg-gradient-card mb-8">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground mb-2">Prezzo Early Bird</p>
                  <p className="font-display text-5xl text-foreground mb-2">
                    <span className="text-muted-foreground line-through text-3xl mr-3">987€</span>
                    789€
                  </p>
                  <p className="text-cyan text-sm">Con sconto doppio riservato a te</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <p className="text-emerald-400 text-sm font-medium mb-1">✅ Sconto 10%</p>
                    <p className="text-xs text-muted-foreground">In cambio di testimonianza sincera</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <p className="text-emerald-400 text-sm font-medium mb-1">✅ Sconto "Men in Black"</p>
                    <p className="text-xs text-muted-foreground">Disponibile per chi inizia ora</p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  789€ per 13 settimane = <span className="text-cyan">60€/settimana</span>. Meno di una cena fuori.
                </p>
              </div>
            </AnimatedSection>

            {/* Urgency */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl p-8 bg-red-950/30 border border-red-500/30 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  <h3 className="font-display text-xl text-red-400">⚠️ Disponibilità Limitata</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-background/30 text-center">
                    <p className="text-red-400 font-display text-lg">Posto 1</p>
                    <p className="text-xs text-muted-foreground">OCCUPATO</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/30 text-center">
                    <p className="text-red-400 font-display text-lg">Posto 2</p>
                    <p className="text-xs text-muted-foreground">OCCUPATO</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-center">
                    <p className="text-emerald-400 font-display text-lg">Posto 3</p>
                    <p className="text-xs text-emerald-400">🟢 DISPONIBILE</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Posso seguire solo <span className="text-red-400 font-medium">3 nuovi coachee a trimestre</span>. 
                  Prossima disponibilità se questo posto viene occupato: <span className="text-red-400">Gennaio 2026</span>
                </p>
              </div>
            </AnimatedSection>

            {/* Price increase */}
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl p-6 bg-amber-950/30 border border-amber-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-5 w-5 text-amber-400" />
                  <h4 className="font-display text-lg text-amber-400">💰 Aumento Prezzo Imminente</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Il prezzo attuale (789€) è valido fino al <span className="text-amber-400 font-medium">30 novembre 2025</span>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Chi inizia ORA riceverà tutti gli aggiornamenti GRATIS. Nuovo prezzo: <span className="text-amber-400">2072€</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                ❓ Domande <span className="text-gradient">Frequenti</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="gradient-border rounded-xl bg-gradient-card px-6 border-0"
                  >
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-serif text-muted-foreground pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Chi Sono Preview */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute -inset-4 border border-cyan/20 rounded-3xl" />
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <img src={gabrielePhoto} alt="Gabriele Lucesole" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  👤 <span className="text-gradient">Gabriele Lucesole</span>
                </h2>
                <p className="text-cyan mb-6">Coach Professionista</p>
                
                <p className="font-serif text-muted-foreground mb-4">
                  Ho attraversato la crisi che stai vivendo. Da adolescente, soffrivo per il male che vedevo nel mondo. 
                  Finii in un vicolo cieco: più cercavo fuori, più mi sentivo vuoto dentro.
                </p>
                <p className="font-serif text-foreground mb-6">
                  <span className="text-cyan">Il Metodo EFO®</span> — la sintesi di 13 anni di ricerca, 526 libri letti, decine di migliaia di euro investiti in formazione.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {credentials.map((cred, i) => (
                    <div key={i} className="w-12 h-12 bg-white/90 rounded-lg p-2 flex items-center justify-center">
                      <img src={cred.logo} alt={cred.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>

                <Button variant="heroOutline" asChild>
                  <Link to="/chi-sono">
                    Leggi la mia storia completa
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                🛣️ Due Strade Davanti a Te
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                <div className="p-6 rounded-xl bg-red-950/30 border border-red-500/30">
                  <h3 className="font-display text-lg text-red-400 mb-3">STRADA 1: Continuare Così</h3>
                  <p className="text-sm text-muted-foreground">
                    Tornare al lavoro, alle scadenze, allo stress. Tra un anno sarai esattamente dove sei ora.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <h3 className="font-display text-lg text-emerald-400 mb-3">STRADA 2: Decidere</h3>
                  <p className="text-sm text-muted-foreground">
                    Tra 3-4 mesi sarai una persona diversa: più centrata, più presente, più libera, più te stesso.
                  </p>
                </div>
              </div>

              <p className="font-display text-xl mb-2">Il viaggio più importante è quello dentro di te.</p>
              <p className="text-cyan mb-8">E inizia con una conversazione.</p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="mailto:gabriele.lucesole@gmail.com">
                    <Mail className="h-5 w-5" />
                    Fissa Sessione Gratuita
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground mt-6">
                30+ minuti • Senza impegno • Zero pressione • Solo chiarezza
              </p>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MetodoEFO;

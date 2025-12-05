import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, ArrowRight, CheckCircle, Sparkles, Users, Star, XCircle, Lock, Unlock, Clock, Target, Zap, Shield, TrendingUp, History, AlertTriangle, ArrowDown, Gift, Search, Heart, Compass, Flame, Play, Instagram, Linkedin, Check, Briefcase, GraduationCap, Quote } from "lucide-react";
import AnimatedSectionLite from "@/components/AnimatedSectionLite";
const AnimatedSection = AnimatedSectionLite;
import LazySection from "@/components/LazySection";
import { Link } from "react-router-dom";
import gabrielePhoto from "@/assets/gabriele-photo.webp";

// Credential logos
import logoPul from "@/assets/logo-pul.png";
import logoIcf from "@/assets/logo-icf.webp";
import logoPenn from "@/assets/logo-penn.webp";
import logoMinistero from "@/assets/logo-ministero.webp";

const forYouIf = [{
  icon: Search,
  title: "Ricercatore Autentico",
  description: "Non ti accontenti delle risposte superficiali. Cerchi trasformazione reale."
}, {
  icon: Users,
  title: "Leader Silenzioso",
  description: "Hai responsabilità importanti ma sai che per aiutare gli altri devi prima aiutare te stesso."
}, {
  icon: Star,
  title: "Professionista del Paradosso",
  description: "Hai \"successo\" sulla carta ma senti un vuoto che non riesci a colmare."
}, {
  icon: Compass,
  title: "Cercatore di Senso",
  description: "Vuoi che la tua vita significhi qualcosa. Vuoi svegliarti con uno scopo."
}, {
  icon: Flame,
  title: "Pronto a Scendere Prima di Risalire",
  description: "Sei disposto a guardarti dentro anche dove fa male."
}];

const notForYouIf = [
  "Cerchi soluzioni magiche immediate senza impegno personale",
  "Vuoi solo ottimizzare la produttività senza toccare la tua interiorità",
  "Non sei disposto a dedicare 20-30 min/giorno alla tua trasformazione",
  "Cerchi qualcuno che ti dica cosa fare invece di aiutarti a scoprirlo",
  "Hai bisogno di supporto clinico per disturbi psichiatrici"
];

const problems = [{
  title: "Burnout mascherato da produttività",
  desc: "È sera tardi. Sei ancora davanti allo schermo, gli occhi bruciano. Chiudi l'ultimo file e senti quel vuoto allo stomaco. \"Cos'ho fatto oggi di davvero importante?\""
}, {
  title: "Successo vuoto",
  desc: "Hai la promozione che volevi. Lo stipendio è aumentato. Ma la sera, quando sei solo con te stesso, senti quel buco nel petto che non si riempie."
}, {
  title: "Tempo rubato",
  desc: "Domenica pomeriggio. Tuo figlio ti chiede di giocare. Tu dici \"tra cinque minuti\" mentre controlli le email. Il tempo scorre, ma tu non ci sei."
}, {
  title: "Stress cronico normalizzato",
  desc: "La tachicardia prima delle riunioni. Il nodo allo stomaco quando vedi il nome del capo. L'ansia è diventata la tua nuova compagna."
}, {
  title: "Ricerca di senso oltre la carriera",
  desc: "Hai provato app di meditazione, libri di self-help. Ma senti il bisogno di qualcosa di più profondo."
}];

const roadmapLevels = [{
  level: "0",
  title: "Punto di Partenza",
  subtitle: "Sessione Professional Coaching Gratuita",
  week: "Inizia",
  unlocked: true,
  content: ["Analizziamo la tua situazione attuale", "Identifichiamo il tuo \"gap trasformativo\"", "Ti spiego come funziona il Metodo EFO®"],
  badge: "Analisi personalizzata del tuo gap trasformativo",
  time: "30+ min"
}, {
  level: "1",
  title: "Fondamenta",
  subtitle: "Installazione Pratica Mindfulness",
  week: "Settimana 1",
  unlocked: true,
  content: ["Avvio pratica mindfulness (10+ min/giorno)", "Prime transizioni tra stati di coscienza", "Primi benefici (riduzione stress, focus)"],
  badge: "Libro \"Felicità Esistenzialista ORA\"",
  time: "10 min/giorno",
  achievement: "Primo Passo Consapevole"
}, {
  level: "2",
  title: "Cura",
  subtitle: "Training Bambino Interiore",
  week: "Settimane 2-4",
  unlocked: false,
  content: ["Tecniche di reparenting", "Integrazione degli archetipi", "Liberazione del bambino interiore"],
  badge: "Past Authoring + Pratiche contemplative",
  time: "15 min/giorno",
  achievement: "Cura del Bambino Interiore",
  dimension: "1D - TRASFORMA IL TUO PASSATO"
}, {
  level: "3",
  title: "Sovranità",
  subtitle: "Training Personalità Adulta",
  week: "Settimane 5-10",
  unlocked: false,
  content: ["Sblocco \"poteri\" dell'adulto", "Identificazione con l'eroe adulto", "Accesso allo stato di flow"],
  badge: "Formula della Trasformazione",
  time: "20 min/giorno",
  achievement: "Padrone di Te Stesso",
  dimension: "1D - TRASFORMA IL TUO PASSATO"
}, {
  level: "4",
  title: "Visione",
  subtitle: "Training Apertura al Futuro",
  week: "Settimane 11-13",
  unlocked: false,
  content: ["Visualizzazioni strategiche", "Esplorazione nuove possibilità", "Allineamento valori-azioni"],
  badge: "Future Authoring",
  time: "20 min/giorno",
  achievement: "Architetto del Destino",
  dimension: "1D - TRASFORMA IL TUO PASSATO"
}];

const maestriaLevels = [{
  title: "Presenza Radicale",
  subtitle: "Al di là del tempo nello spazio",
  content: ["Tecnica meditativa per accesso immediato al \"Potere di Adesso\"", "Mindfulness somatica profonda", "Capacità di vivere nell'eterno presente"],
  badge: "Present Authoring + Tecniche meditative avanzate",
  dimension: "2D - VIVI PIENAMENTE IL PRESENTE"
}, {
  title: "Attrazione Consapevole",
  subtitle: "Tra lo stimolo e la risposta c'è uno spazio — Viktor Frankl",
  content: ["Professional Coaching 1-to-1: Ruota della vita, Valori guida, Goal-setting", "Allineamento valori, azioni e obiettivi", "Micro-commitments quotidiani"],
  badge: "Stazione di Servizio Platonica",
  dimension: "3D - ATTRAI IL FUTURO DESIDERATO"
}];

const inclusions = [
  "Sessioni live di Professional Coaching 1-to-1",
  "Supporto WhatsApp 24/7 per 3 mesi",
  "Training Bambino Interiore",
  "Training Personalità Adulta",
  "Training Futuro & Visione",
  "Tecniche contemplative personalizzate",
  "Guide scientifiche per ogni fase"
];

const bonuses = [
  "Libro \"Felicità Esistenzialista ORA\"",
  "Guida \"Creazione della Pietra Filosofale\"",
  "Tecniche EMDR e metodi Harvard",
  "Tecniche meditative avanzate"
];

const comingSoon = [{
  name: "Saggio \"Essere Felici ORA\"",
  value: "98€"
}, {
  name: "Video Corso Metodo EFO completo",
  value: "987€"
}];

const faqs = [{
  q: "\"Non ho tempo. Sono sempre oberato di lavoro.\"",
  a: "Il Metodo EFO® richiede solo 3 ore/settimana per 13 settimane. La domanda giusta non è \"Ho tempo?\", ma: \"Quanto mi sta costando vivere così?\""
}, {
  q: "\"Il coaching non è meno profondo della psicoterapia?\"",
  a: "Il Metodo EFO® integra tecniche psicologiche (ipnosi, reparenting, psicologia positiva) + Professional Coaching (mindfulness, goal-setting, action plan). Se hai bisogno di supporto clinico, te lo condividerò onestamente."
}, {
  q: "\"Devo essere credente o spirituale per farlo?\"",
  a: "No. Il Metodo EFO® integra saggezza spirituale ma non è religioso né dogmatico. Ciò che serve: apertura mentale e desiderio sincero di trasformazione."
}, {
  q: "\"Ho già provato altri coach. Perché tu saresti diverso?\"",
  a: "Integro neuroscienze, psicologia, filosofia e pratiche contemplative millenarie. Ho attraversato la crisi personalmente. La sessione gratuita serve proprio a verificare se c'è risonanza."
}, {
  q: "\"Funziona anche online?\"",
  a: "Ricerche scientifiche dimostrano che il Professional Coaching online funziona come quello dal vivo. Il supporto WhatsApp 24/7 crea continuità tra le sessioni."
}, {
  q: "\"Quanto dura davvero?\"",
  a: "13+ settimane (circa 3 mesi). La trasformazione profonda richiede tempo per sedimentarsi. Ogni fase si basa sulla precedente."
}, {
  q: "\"E se non funziona?\"",
  a: "Sessione gratuita (30+ min) senza impegno. Se ti impegni davvero nel percorso, funzionerà. I risultati dipendono dal Metodo (te lo do io) e dal tuo impegno."
}, {
  q: "\"Costa troppo.\"",
  a: "789€ per 13 settimane = 60€/settimana. Meno di una cena fuori. Stai investendo nella tua libertà interiore."
}];

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

const credentialsList = [
  "🎓 Laurea Magistrale in Scienze Religiose",
  "🏆 Master Universitario Coaching Umanistico e PNL",
  "🌍 Diploma Coach Professionista ICF",
  "🧠 Psicologia Positiva (Penn University)",
  "🧘 Facilitatore Mindfulness",
  "🌀 Master in Ipnosi"
];

const testimonials = [{
  name: "Nicolò E.",
  role: "Copywriter",
  title: "Da Insicuro a Libero Professionista",
  quote: "In poche sessioni, Gabriele mi ha dato un punto di vista che non avevo mai considerato. Ha migliorato drasticamente il mio focus.",
  results: ["Superata sindrome dell'impostore", "Aperto partita IVA", "Chiarezza professionale"],
  videoId: "1c_-VgFLzRPyl5aJE2f456NaduPodUYNx"
}, {
  name: "Luca G.",
  role: "Media Buyer",
  title: "Da Bloccato a Trasformato",
  quote: "Gabriele ha una capacità unica di leggere tra le righe. Ho riacquistato fiducia nelle mie capacità.",
  results: ["Perdita 4kg", "Superamento blocchi emotivi", "Stress management"],
  videoId: "1bXnXExxCKSBGn66dOWjcInfud0NF9qWi"
}, {
  name: "Luca L.",
  role: "Brand Strategist",
  title: "Da Disperso a Focalizzato",
  quote: "Domande mirate ed esercizi pratici dall'effetto immediato. Guida le sessioni con metodo e molta empatia.",
  results: ["Aumento del focus", "Riduzione compulsione", "Maggiore produttività"],
  videoId: null
}];

const MetodoEFO = () => {
  return <>
    <Helmet>
      <title>Metodo EFO® | Essere Felici Ora - Gabriele Lucesole</title>
      <meta name="description" content="Il Metodo EFO®: sistema integrato per trasformare il passato, vivere il presente e attrarre il futuro. 13+ settimane di coaching professionale." />
      <link rel="canonical" href="https://gabrielelucesole.com/metodo-efo" />
    </Helmet>

    <Layout>
      {/* Hero */}
      <section className="min-h-screen flex items-center section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative z-10 text-center">
          <AnimatedSectionLite>
            <span className="inline-block px-3 py-1.5 text-xs font-sans uppercase tracking-[0.15em] text-cyan/70 border border-cyan/20 rounded-full mb-4 md:mb-6">METODO EFO®</span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              Hai Fatto Tutto.<br />
              <span className="text-gradient">Ma Manca Ancora Qualcosa.</span>
            </h1>

            <p className="font-serif text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 leading-relaxed">
              Forse hai successo sulla carta, ma senti un vuoto che non riesci a colmare.
            </p>
            
            <p className="font-serif text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-3">
              Tra scadenze e meeting, ti stai perdendo per strada.
            </p>

            <p className="font-serif text-sm md:text-base text-foreground max-w-2xl mx-auto mb-6">
              Il Metodo EFO® ti offre un <span className="text-cyan">sistema integrato per ritrovare te stesso</span> — senza sacrificare il successo.
            </p>

            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:gabriele.lucesole@gmail.com">
                <Mail className="h-4 w-4" />
                Fissa Sessione Gratuita
              </a>
            </Button>

            <p className="text-cyan mt-6 flex items-center justify-center gap-2 text-sm">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              Scopri se è il momento giusto per te
            </p>
          </AnimatedSectionLite>
        </div>
      </section>

      {/* For You If */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              👤 Questo percorso è <span className="text-cyan">per te</span> se...
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
            {forYouIf.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="gradient-border rounded-xl p-4 md:p-5 bg-gradient-card h-full transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-base md:text-lg mb-1 text-foreground">
                        Sei un {item.title}
                      </h3>
                      <p className="font-serif text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Not for you */}
          <AnimatedSection delay={0.3}>
            <div className="glass rounded-xl p-5 md:p-6 max-w-3xl mx-auto border border-red-500/20">
              <h3 className="font-display text-lg md:text-xl mb-4 text-center flex items-center justify-center gap-2">
                <XCircle className="h-5 w-5 text-red-400" />
                <span>NON è per te se...</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-2 md:gap-3 mb-4">
                {notForYouIf.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs md:text-sm text-muted-foreground italic">
                Non è giudizio. È allineamento. Il Metodo EFO® funziona solo con chi si sente pronto.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problems / Signals */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-3">IL PROBLEMA</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              🎯 Riconosci <span className="text-gradient">Questi Segnali?</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
            {problems.map((problem, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="p-4 md:p-5 rounded-lg bg-card border border-border/50 transition-colors duration-200 hover:border-cyan/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-cyan shrink-0" />
                    <h3 className="font-display text-sm md:text-base text-foreground">{problem.title}</h3>
                  </div>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground leading-relaxed">{problem.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Good news */}
          <AnimatedSection delay={0.3}>
            <div className="glass rounded-xl p-5 md:p-6 max-w-3xl mx-auto text-center border border-emerald-500/20">
              <h3 className="font-display text-lg md:text-xl mb-3 flex items-center justify-center gap-2">
                <Heart className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-400">Ma c'è una buona notizia...</span>
              </h3>
              <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3">
                Se hai riconosciuto anche solo 2 di questi segnali, significa che la tua consapevolezza è già attiva.
              </p>
              <p className="font-serif text-sm md:text-base text-foreground mb-3">
                <span className="font-medium">Non sei "rotto". Non hai fallito.</span> Sei semplicemente arrivato a un punto di svolta.
              </p>
              <p className="text-cyan font-display text-base md:text-lg">
                La trasformazione non è un'eccezione. È la regola, quando hai il metodo giusto.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Scenarios */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              🔄 La Tua Vita <span className="text-gradient">Tra 90 Giorni</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Scenario A */}
            <AnimatedSection direction="left">
              <div className="rounded-xl p-5 md:p-6 bg-red-950/30 border border-red-500/30 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-red-400">SCENARIO A</h3>
                    <p className="text-xs text-muted-foreground">Se Non Cambi Nulla</p>
                  </div>
                </div>
                <div className="space-y-2 font-serif text-xs md:text-sm text-muted-foreground">
                  <p>Lunedì mattina, ore 7:00. La sveglia suona e il primo pensiero è già una scadenza.</p>
                  <p>Alle 23:00 sei ancora al computer. "Cos'ho fatto oggi che conta davvero?"</p>
                  <p className="text-red-400">Tra tre mesi sarai esattamente dove sei adesso, forse più stanco.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Scenario B */}
            <AnimatedSection direction="right">
              <div className="rounded-xl p-5 md:p-6 bg-emerald-950/30 border border-emerald-500/30 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-emerald-400">SCENARIO B</h3>
                    <p className="text-xs text-muted-foreground">Dopo il Metodo EFO®</p>
                  </div>
                </div>
                <div className="space-y-2 font-serif text-xs md:text-sm text-muted-foreground">
                  <p>Lunedì mattina, ore 7:00. Sei già sveglio, seduto in meditazione. Sei semplicemente presente.</p>
                  <p>Alle 9:00 inizi a lavorare con focus. Tre ore di deep work senza distrazioni.</p>
                  <p className="text-emerald-400">Sorridi. Sei tornato a casa, dentro te stesso.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-6">
            <p className="font-display text-lg md:text-xl text-cyan">Quale scenario vuoi vivere?</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 Dimensions */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <span className="inline-block px-3 py-1.5 text-xs font-sans uppercase tracking-[0.15em] text-cyan/70 border border-cyan/20 rounded-full mb-4">
              🧩 Metodo EFO®
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              Essere Felici <span className="text-gradient">ORA</span>
            </h2>
            <p className="font-serif text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Sistema integrato che unisce neuroscienze, saggezza millenaria e risultati misurabili.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10">
            {[
              { icon: History, title: "1D: Passato", desc: "Trasforma il tuo passato da peso a risorsa", color: "cyan" },
              { icon: Clock, title: "2D: Presente", desc: "Vivi pienamente il momento presente", color: "cyan" },
              { icon: Target, title: "3D: Futuro", desc: "Attrai il futuro che desideri davvero", color: "cyan" }
            ].map((dim, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="gradient-border rounded-xl p-5 md:p-6 bg-gradient-card h-full text-center"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <dim.icon className="h-8 w-8 text-cyan mx-auto mb-3" />
                  <h3 className="font-display text-lg md:text-xl mb-2">{dim.title}</h3>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground">{dim.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              🗺️ La Mappa del <span className="text-gradient">Viaggio</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">13+ settimane di trasformazione</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
            {roadmapLevels.map((level, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className={`rounded-xl p-4 md:p-5 h-full ${level.unlocked ? 'bg-gradient-card border border-cyan/20' : 'bg-card border border-border/50 opacity-80'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${level.unlocked ? 'bg-cyan/20' : 'bg-muted/20'}`}>
                      {level.unlocked ? <Unlock className="h-4 w-4 text-cyan" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <span className="font-display text-lg">LV {level.level}</span>
                  </div>
                  
                  <p className="text-xs text-cyan mb-1">{level.week}</p>
                  <h3 className="font-display text-base mb-1">{level.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{level.subtitle}</p>

                  <ul className="space-y-1 mb-3">
                    {level.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-cyan mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">⏱️ {level.time}</span>
                    {level.achievement && <span className="text-amber-400">🏆 {level.achievement}</span>}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Maestria Levels */}
            {maestriaLevels.map((level, index) => (
              <AnimatedSection key={`maestria-${index}`} delay={(roadmapLevels.length + index) * 0.05}>
                <div className="rounded-xl p-4 md:p-5 h-full bg-gradient-to-br from-amber-950/30 to-card border border-amber-500/30">
                  <div className="mb-3 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block">
                    <span className="text-xs text-amber-400">{level.dimension}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-500/20">
                      <Sparkles className="h-4 w-4 text-amber-400" />
                    </div>
                    <span className="font-display text-lg text-amber-400">LV ∞</span>
                  </div>

                  <h3 className="font-display text-base mb-1 text-amber-400">MAESTRIA</h3>
                  <p className="text-xs text-foreground mb-1">{level.title}</p>
                  <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">{level.subtitle}</p>

                  <ul className="space-y-1 mb-3">
                    {level.content.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              💎 Cosa È <span className="text-gradient">Incluso</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <AnimatedSection>
              <div className="glass rounded-xl p-5 md:p-6 border border-cyan/20 h-full">
                <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan" />
                  Il Percorso Include:
                </h3>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass rounded-xl p-5 md:p-6 border border-amber-500/20 h-full">
                <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-amber-400" />
                  Bonus Inclusi:
                </h3>
                <ul className="space-y-2 mb-4">
                  {bonuses.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-amber-500/20 pt-4">
                  <p className="text-xs text-amber-400 font-medium mb-2">COMING SOON (GRATIS per chi inizia ora):</p>
                  <ul className="space-y-1">
                    {comingSoon.map((item, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <span className="text-amber-400">📚</span>
                        <span>{item.name} <span className="text-amber-400">({item.value})</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              💰 <span className="text-gradient">Investimento</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="gradient-border rounded-xl p-5 md:p-6 bg-gradient-card mb-6">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-1">Prezzo Early Bird</p>
                <p className="font-display text-4xl md:text-5xl text-foreground mb-1">
                  <span className="text-muted-foreground line-through text-2xl mr-2">987€</span>
                  789€
                </p>
                <p className="text-cyan text-xs">Con sconto riservato a te!</p>
                <p className="text-sm text-muted-foreground mt-2">= <span className="text-cyan">60€/settimana</span> — Meno di una cena fuori</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-center">
                  <p className="text-emerald-400 text-xs font-medium">✅ Sconto 10%</p>
                  <p className="text-xs text-muted-foreground">Per testimonianza sincera</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-center">
                  <p className="text-emerald-400 text-xs font-medium">✅ Early Bird</p>
                  <p className="text-xs text-muted-foreground">Per chi inizia ora</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Urgency */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl p-5 md:p-6 bg-red-950/30 border border-red-500/30 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h3 className="font-display text-lg text-red-400">DISPONIBILITÀ LIMITATA</h3>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground mb-3">
                Posso seguire solo <span className="text-red-400 font-medium">3 nuovi coachee a trimestre</span>.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="p-2 rounded-lg bg-background/30 text-center">
                  <p className="text-red-400 text-xs font-medium">Posto 1</p>
                  <p className="text-xs text-muted-foreground">✅ Occupato</p>
                </div>
                <div className="p-2 rounded-lg bg-background/30 text-center">
                  <p className="text-red-400 text-xs font-medium">Posto 2</p>
                  <p className="text-xs text-muted-foreground">✅ Occupato</p>
                </div>
                <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-center">
                  <p className="text-emerald-400 text-xs font-medium">Posto 3</p>
                  <p className="text-xs text-emerald-400">🟢 Disponibile</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                ⏰ Prossima disponibilità se occupato: <span className="text-red-400">Gennaio 2026</span>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:gabriele.lucesole@gmail.com">
                <Mail className="h-4 w-4" />
                Fissa Sessione Gratuita
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Chi Sono Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute -inset-3 border border-cyan/20 rounded-2xl" />
                <div className="relative h-full rounded-xl overflow-hidden">
                  <img src={gabrielePhoto} alt="Gabriele Lucesole" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h3 className="font-display text-xl md:text-2xl mb-1">
                👤 <span className="text-gradient">Gabriele Lucesole</span>
              </h3>
              <p className="text-cyan text-sm mb-4">Coach Professionista</p>
              
              <p className="font-display text-base md:text-lg text-foreground mb-3">Ho attraversato la crisi che stai vivendo.</p>
              
              <div className="space-y-2 text-xs md:text-sm text-muted-foreground mb-4">
                <p>📖 Da adolescente, soffrivo per il male che vedevo nel mondo. Cercai risposte ovunque.</p>
                <p><span className="text-cyan">Il punto di svolta:</span> Un'esperienza mistica. 9 mesi in monastero. Un'epifania che unì tutti i pezzi.</p>
                <p className="text-cyan font-medium">Non vendo teoria. Offro ciò che ha salvato me.</p>
              </div>

              <Button variant="heroOutline" size="default" className="w-full sm:w-auto" asChild>
                <Link to="/chi-sono">
                  Leggi la mia storia
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>

          {/* Credentials */}
          <AnimatedSection className="mt-10">
            <div className="glass rounded-xl p-5 md:p-6 border border-cyan/20">
              <h3 className="font-display text-lg mb-4 text-center flex items-center justify-center gap-2">
                <GraduationCap className="h-5 w-5 text-cyan" />
                Certificazioni
              </h3>
              <div className="grid md:grid-cols-2 gap-2 mb-6">
                {credentialsList.map((cred, index) => (
                  <div key={index} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <span className="shrink-0">{cred.split(' ')[0]}</span>
                    <span>{cred.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {credentials.map((cred, i) => (
                  <div key={i} className="w-12 h-12 bg-white/90 rounded-lg p-1.5 flex items-center justify-center">
                    <img src={cred.logo} alt={cred.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              Testimonianze di <span className="text-gradient">Trasformazione</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-5">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="gradient-border rounded-xl p-4 md:p-5 bg-gradient-card h-full flex flex-col">
                  <div className="mb-3">
                    <h3 className="font-display text-base text-cyan">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                  
                  <div className="mb-3 flex-1">
                    <Quote className="h-5 w-5 text-cyan/50 mb-1" />
                    <p className="font-serif text-xs text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-xs text-muted-foreground mb-1">Risultati:</p>
                    <ul className="space-y-0.5">
                      {testimonial.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-emerald-400">
                          <Check className="h-3 w-3 mt-0.5 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {testimonial.videoId && (
                    <div className="mt-3">
                      <div className="aspect-video rounded-lg overflow-hidden bg-muted/30">
                        <iframe 
                          src={`https://drive.google.com/file/d/${testimonial.videoId}/preview`} 
                          className="w-full h-full" 
                          allow="autoplay" 
                          title={`Testimonianza di ${testimonial.name}`} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
              ❓ Domande <span className="text-gradient">Frequenti</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="gradient-border rounded-lg bg-gradient-card px-4 border-0"
                >
                  <AccordionTrigger className="text-left font-display text-sm md:text-base hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-serif text-xs md:text-sm text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-card to-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-48 md:w-64 h-48 md:h-64 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-40 md:w-56 h-40 md:h-56 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative z-10">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4">
              🛣️ Due Strade <span className="text-gradient">Davanti a Te</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <AnimatedSection direction="left">
              <div className="p-4 md:p-5 rounded-xl bg-red-950/30 border border-red-500/30 h-full">
                <h3 className="font-display text-lg text-red-400 mb-2">Continuare Così</h3>
                <p className="font-serif text-xs md:text-sm text-muted-foreground">
                  Tornare al lavoro, allo stress. Sperare che qualcosa cambi da solo.
                </p>
                <p className="font-serif text-xs text-red-400 mt-2">
                  Tra un anno sarai esattamente dove sei ora.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="p-4 md:p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 h-full">
                <h3 className="font-display text-lg text-emerald-400 mb-2">Decidere</h3>
                <p className="font-serif text-xs md:text-sm text-muted-foreground">
                  Trovare il coraggio di fermarti, guardarti dentro, trasformarti.
                </p>
                <p className="font-serif text-xs text-emerald-400 mt-2">
                  Tra 3-4 mesi sarai una persona diversa: più centrata, più presente, più libera.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="gradient-border rounded-xl p-5 md:p-6 bg-gradient-card text-center">
              <h3 className="font-display text-xl mb-3">📞 Il Primo Passo È Semplice</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                Prenota la tua sessione di Professional Coaching gratuita. Pochi minuti che possono cambiare tutto.
              </p>
              <p className="text-cyan text-sm mb-4">Senza impegno. Solo chiarezza.</p>

              <Button variant="hero" size="lg" className="w-full sm:w-auto mb-4" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com">
                  <Mail className="h-4 w-4" />
                  Fissa Sessione Gratuita
                </a>
              </Button>

              <div className="flex justify-center gap-3">
                <Button variant="heroOutline" size="sm" asChild>
                  <a href="https://www.instagram.com/gabrielelucesole/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button variant="heroOutline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/gabrielelucesole" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection className="text-center">
            <blockquote className="glass rounded-xl p-5 md:p-6 border border-cyan/20">
              <p className="font-serif text-base md:text-lg text-foreground italic mb-2">
                "Ho tutto quello che pensavo di volere, ma non riesco a sentirmi realizzato."
              </p>
              <p className="font-serif text-xs md:text-sm text-muted-foreground">
                Questa frase non è una condanna. È un invito.
              </p>
            </blockquote>

            <div className="mt-6 p-4 md:p-5 rounded-lg bg-cyan/5 border border-cyan/20">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Non ti dico cosa pensare. <span className="text-cyan">Ti porto a incontrarti.</span></p>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Non ti offro risposte. <span className="text-cyan">Ti aiuto a farti le domande giuste.</span></p>
              <p className="text-xs md:text-sm text-muted-foreground">Non ti prometto magia. <span className="text-cyan">Ti offro un metodo.</span></p>
            </div>

            <p className="text-cyan font-display text-lg mt-6">Ricorda: la paura non dice mai la verità!</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 md:py-10 bg-background border-t border-border/50">
        <div className="container-narrow">
          <div className="text-center text-xs text-muted-foreground space-y-3">
            <p>© 2025 Gabriele Lucesole. Tutti i diritti riservati.</p>
            <div className="max-w-2xl mx-auto text-left">
              <p className="font-medium mb-1">Disclaimer legale</p>
              <p className="text-xs leading-relaxed">
                Il Metodo EFO® è un per-corso di professional coaching e crescita personale. Non è un trattamento sanitario e non sostituisce diagnosi, terapie mediche o psicoterapie. I risultati possono variare in base all'impegno individuale.
              </p>
            </div>
            <p className="italic mt-3">"Solo la verità che edifica è verità per te." — Søren Kierkegaard</p>
          </div>
        </div>
      </section>
    </Layout>
  </>;
};

export default MetodoEFO;

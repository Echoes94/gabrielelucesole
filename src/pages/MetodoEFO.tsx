import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, ArrowRight, CheckCircle, Sparkles, Users, Star, XCircle, Lock, Unlock, Clock, Target, Zap, Shield, TrendingUp, History, AlertTriangle, ArrowDown, Gift, Search, Heart, Compass, Flame, Play, Instagram, Linkedin, Check, Briefcase, GraduationCap, Quote } from "lucide-react";
import AnimatedSectionLite from "@/components/AnimatedSectionLite";
// Alias for backward compatibility - using lite version for performance
const AnimatedSection = AnimatedSectionLite;
import LazySection from "@/components/LazySection";
import { Link } from "react-router-dom";
import gabrielePhoto from "@/assets/gabriele-photo.webp";
import BlurImage from "@/components/BlurImage";
import { gabrielePhotoPlaceholder } from "@/lib/image-placeholders";

// Credential logos
import logoPul from "@/assets/logo-pul.png";
import logoIcf from "@/assets/logo-icf.webp";
import logoPenn from "@/assets/logo-penn.webp";
import logoMinistero from "@/assets/logo-ministero.webp";
const forYouIf = [{
  icon: Search,
  title: "Ricercatore Autentico",
  description: "Non ti accontenti delle risposte superficiali. Hai letto libri di crescita personale, provato app di meditazione, seguito corsi motivazionali. Ma dentro sai che serve qualcosa di più profondo. Non cerchi trucchi o scorciatoie. Cerchi trasformazione reale."
}, {
  icon: Users,
  title: "Leader Silenzioso",
  description: "Non hai bisogno di urlare per essere ascoltato. Forse hai responsabilità importanti — team da guidare, persone che dipendono da te, decisioni da prendere. Ma sai che per aiutare gli altri devi prima aiutare te stesso. E in questo momento, senti di esserti perso per strada."
}, {
  icon: Star,
  title: "Professionista del Paradosso",
  description: 'Sulla carta hai "successo": carriera che avanza, riconoscimenti professionali, stipendio dignitoso. Ma dentro c\'è un vuoto che non riesci a colmare. Non è depressione clinica. È qualcosa di più sottile e profondo: la sensazione di vivere la vita di qualcun altro.'
}, {
  icon: Compass,
  title: "Cercatore di Senso",
  description: 'Per te il lavoro non deve essere solo un mezzo per pagare le bollette. Vuoi che la tua vita significhi qualcosa. Vuoi svegliarti la mattina con uno scopo che va oltre la prossima promozione. Vuoi guardare indietro a 70 anni e dire: "Ho vissuto davvero."'
}, {
  icon: Flame,
  title: "Pronto a Scendere Prima di Risalire",
  description: "Non cerchi motivazione superficiale o pensiero positivo tossico. Sei disposto a guardarti dentro anche dove fa male. Sai che la vera trasformazione passa attraverso l'oscurità, non intorno ad essa. Hai il coraggio di attraversare il fuoco per rinascere dalle ceneri."
}];
const notForYouIf = ["Cerchi soluzioni magiche immediate senza impegno personale", "Vuoi solo ottimizzare la produttività senza toccare la tua interiorità", "Non sei disposto a dedicare 20-30 min/giorno alla tua trasformazione", "Cerchi qualcuno che ti dica cosa fare invece di aiutarti a scoprirlo", "Hai bisogno di supporto clinico per disturbi psichiatrici (in quel caso ti indirizzo allo specialista giusto)"];
const problems = [{
  title: "Burnout mascherato da produttività",
  desc: 'È sera tardi. Sei ancora davanti allo schermo, gli occhi bruciano per la luce blu. Il collo è rigido, le spalle tese come corde di violino. Chiudi l\'ultimo file, spegni il computer... e senti quel vuoto allo stomaco. "Cos\'ho fatto oggi di davvero importante?" La risposta non arriva. Solo sabbia che scorre tra le dita. Hai lavorato tante ore, ma senti di aver fatto poco o niente che conta davvero. Il burnout non arriva con le sirene. Arriva in silenzio, mascherato da "produttività". Finché un giorno ti svegli e non riconosci più la persona riflessa nello specchio.'
}, {
  title: "Successo vuoto",
  desc: 'Forse hai la promozione che volevi. Lo stipendio è aumentato. I colleghi ti rispettano. Ma la sera, quando sei solo con te stesso, senti quel buco nel petto che non si riempie con i complimenti del capo o con l\'estratto conto. "Ho quello che speravo di avere, ma non riesco a sentirmi ancora realizzato." È come scalare una montagna per anni e scoprire che la vetta non è quella giusta.'
}, {
  title: "Tempo rubato",
  desc: 'Domenica pomeriggio. Tuo figlio ti chiede di giocare. Tu dici "tra cinque minuti" mentre controlli le email. Passano venti minuti. Lui non chiede più. Il tuo partner parla del suo progetto. Tu annuisci ma la tua mente è già alla riunione di lunedì. Niente spazio per te, per relazioni autentiche, per capire chi sei oltre il ruolo professionale. Il tempo scorre, ma tu non ci sei. Sei un fantasma nella tua stessa vita.'
}, {
  title: "Stress cronico normalizzato",
  desc: 'La tachicardia prima delle riunioni importanti. Il nodo allo stomaco quando vedi il nome del capo sullo schermo. Il risveglio alle 3 del mattino con l\'ansia che ti stringe la gola. "È normale", ti dici. "Tutti sono stressati." Ma non è normale. L\'ansia è diventata la tua nuova compagna: a causa dell\'insicurezza lavorativa o della corsa verso la prossima promozione. Il tuo corpo parla, ma tu hai imparato a non ascoltare.'
}, {
  title: "Ricerca di senso oltre la carriera",
  desc: "Hai provato superficiali rimedi fai-da-te: app di meditazione che usi per pochi giorni e poi abbandoni. Libri di self-help che leggi ma non applichi. Video motivazionali su YouTube che ti gasano per un'ora e poi svaniscono. Ma troppa fuffa, senti il bisogno di qualcosa di più profondo. Qualcosa che tocchi l'anima, non solo la mente. Qualcosa che trasformi, non che consoli."
}];
const roadmapLevels = [{
  level: "0",
  title: "Punto di Partenza",
  subtitle: "Sessione Professional Coaching Gratuita",
  week: "Inizia",
  unlocked: true,
  content: ["Analizziamo la tua situazione attuale (stress, vuoto esistenziale, ricerca di senso)", 'Identifichiamo il tuo "gap trasformativo"', "Ti spiego come funziona il Metodo EFO® e se è adatto al tuo caso specifico", "Decidi cosa fare della tua vita"],
  badge: "Analisi personalizzata del tuo gap trasformativo",
  time: "⏱️ 30+ min"
}, {
  level: "1",
  title: "Fondamenta",
  subtitle: "Installazione Pratica Mindfulness",
  week: "Settimana 1",
  unlocked: true,
  content: ["Sessione 1-to-1 per avviare la pratica mindfulness (10+ min/giorno)", "Prime transizioni tra stati di coscienza", "Sperimentazione dei primi benefici (riduzione stress, maggiore focus)"],
  badge: 'Libro "Felicità Esistenzialista ORA"',
  time: "⏱️ 10 min/giorno",
  achievement: "Primo Passo Consapevole"
}, {
  level: "2",
  title: "Cura",
  subtitle: "Training Bambino Interiore",
  week: "Settimane 2-4",
  unlocked: false,
  content: ["Tecniche di reparenting", "Integrazione degli archetipi nella coscienza", "Training guidato per liberare il bambino interiore"],
  badge: "Past Authoring + Pratiche contemplative + Guida completa + Assistenza WhatsApp 24/7",
  time: "⏱️ 15 min/giorno",
  achievement: "Cura del Bambino Interiore",
  skill: "Integrazione Archetipi",
  dimension: "1D - TRASFORMA IL TUO PASSATO"
}, {
  level: "3",
  title: "Sovranità",
  subtitle: "Training Personalità Adulta",
  week: "Settimane 5-10",
  unlocked: false,
  content: ['Training guidato per sbloccare i "poteri" dell\'adulto', "Identificazione con l'eroe adulto dentro di te", "Accesso allo stato di flow avanzato"],
  badge: "Formula della Trasformazione + Nuove pratiche contemplative + Assistenza 24/7",
  time: "⏱️ 20 min/giorno",
  achievement: "Padrone di Te Stesso",
  skill: "Risposta Consapevole vs Reazione",
  dimension: "1D - TRASFORMA IL TUO PASSATO"
}, {
  level: "4",
  title: "Visione",
  subtitle: "Training Apertura al Futuro",
  week: "Settimane 11-13",
  unlocked: false,
  content: ["Training guidato focus futuro con visualizzazioni strategiche (non fantasie, ma nuove mappe neurali)", "Esplorazione di nuove possibilità oltre la monotonia", "Identificazione di valori autentici e allineamento con azioni quotidiane"],
  badge: "Future Authoring + Nuove pratiche contemplative + Assistenza 24/7",
  time: "⏱️ 20 min/giorno",
  achievement: "Architetto del Destino",
  skill: "Allineamento Valori-Azioni",
  dimension: "1D - TRASFORMA IL TUO PASSATO"
}];
const maestriaLevels = [{
  title: "Presenza Radicale",
  subtitle: "Al di là del tempo nello spazio",
  content: ['Tecnica meditativa esclusiva per accesso immediato al "Potere di Adesso"', "Mindfulness somatica profonda (body scan evoluto)", "Capacità di vivere nell'eterno presente, oltre il tempo lineare", "Coaching ipnotico 1-to-1 per automatizzare la presenza mentale"],
  badge: 'Guida "Creazione della Pietra Filosofale" + Present Authoring + Tecniche segrete (EMDR, metodi Harvard) + Nuove tecniche meditative',
  dimension: "2D - VIVI PIENAMENTE IL PRESENTE"
}, {
  title: "Attrazione Consapevole",
  subtitle: "\"Tra lo stimolo e la risposta c'è uno spazio. In quello spazio risiede il potere di scegliere la nostra risposta. Nella nostra risposta c'è la nostra crescita e libertà.\" – Viktor Frankl",
  content: ["Professional Coaching 1-to-1: Ruota della vita UPGRADED, Individuazione valori guida + trasformazione dello stress, Goal-setting avanzato", "Training guidato futuro", "Allineamento valori, azioni e obiettivi", "Micro-commitments quotidiani (regola dell'1% → dal circolo vizioso al circolo virtuoso → vizio della virtù)"],
  badge: 'Stazione di Servizio Platonica + Scrittura Creativa Archetipica + Su richiesta: Saggio "La Ginnastica del Desiderio"',
  dimension: "3D - ATTRAI IL FUTURO DESIDERATO"
}];
const inclusions = ["Sessioni live di Professional Coaching 1-to-1 (30+ min ciascuna, personalizzate per il tuo profilo)", "Supporto WhatsApp 24/7 per 3 mesi — Domande, dubbi, perplessità? Scrivi quando vuoi. Rispondo io, personalmente, subito.", "Training Bambino Interiore", "Training Personalità Adulta", "Training Futuro & Visione", "Mindfulness somatica profonda", "Tecniche contemplative personalizzate", "Visualizzazioni guidate registrate", 'Meditazione segreta "Al di là del Tempo nello Spazio"', "Self Authoring Suite di Jordan Peterson (Past-Present-Future)", "Guide scientifiche dettagliate per ogni fase del percorso", "Roadmap di lavoro ed esercizi pratici", "Registrazioni per pratica autonoma"];
const bonuses = ['Libro "Felicità Esistenzialista ORA"', 'Guida "Creazione della Pietra Filosofale"', "Tecniche segrete di trasformazione (EMDR, metodi testati a Harvard)", "Tecniche meditative (Esercizi di ricarica, Radicamento, meditazione della montagna, ecc.)", "Stazione di Servizio Platonica (incarna idee platoniche)", "Scrittura Creativa Archetipica (avvicinati alla vita dei sogni)", 'Su richiesta: Saggio accademico "La Ginnastica del Desiderio"'];
const comingSoon = [{
  name: "Saggio \"Essere Felici ORA: L'Arte Suprema dell'Alterità\"",
  value: "98€"
}, {
  name: "Video Corso Metodo EFO completo",
  value: "987€"
}, {
  name: "Aggiornamenti lifetime del Metodo EFO",
  value: "incalcolabile"
}];
const faqs = [{
  q: '"Non ho tempo. Sono sempre oberato di lavoro."',
  a: 'Capisco. Anche altri pensano la stessa cosa.\n\nMa ecco la verità: Non hai tempo proprio perché non investi tempo su te stesso.\n\nIl Metodo EFO® richiede:\n• 1 sessione/fase (90 min ca.) → poco più di 1 ora quando scegli di liberare il tempo per te stesso\n• 15-20 min/giorno di pratica passiva (anche nel dormiveglia)\n• 10+ min/giorno di meditazione "Al di là del tempo nello spazio"\n\nTotale: 3 ore/settimana per 13 settimane.\n\nLa domanda giusta non è "Ho tempo?", ma: "Quanto mi sta costando vivere così?"\n\nSete di senso, stress, relazioni disfunzionali, salute a rischio… hanno un costo molto più alto di 3 ore/settimana.'
}, {
  q: '"Il coaching non è meno profondo della psicoterapia?"',
  a: "Dipende.\n\nLa psicoterapia è eccellente per:\n• Trattare disturbi di personalità\n• Psicopatologie diagnosticate (depressione, disturbo d'ansia cronica, ecc.)\n• Rielaborazione profonda di traumi passati\n\nIl Professional Coaching è efficace per:\n• Trasformazione spesso più rapida (mesi vs anni)\n• Visione, direzione, scopo: missione\n• Azioni concrete e risultati misurabili\n\nIl Metodo EFO® integra gli strumenti di entrambi: Tecniche psicologiche (ipnosi, reparenting, psicologia positiva) + Professional Coaching (mindfulness, goal-setting, action plan)\n\nSe hai bisogno di supporto clinico, e se il Professional Coaching non è adatto, te lo condividerò onestamente e ti indirizzerò al professionista giusto."
}, {
  q: '"Devo essere credente o spirituale per farlo?"',
  a: "No.\n\nIl Metodo EFO® integra saggezza spirituale, ma non è religioso né dogmatico.\n\nÈ adatto per:\n✅ Atei razionalisti → ti do strumenti basati su ricerche accademiche\n✅ Credenti → integriamo la tua fede con la trasformazione\n✅ Agnostici/Ricercatori → esploriamo insieme senza imposizioni\n\nCiò che serve:\n• Apertura mentale\n• Desiderio sincero di trasformazione\n• Disponibilità a guardarsi dentro (anche dove fa male)\n\nTu decidi. Io facilito il raggiungimento del tuo obiettivo di senso."
}, {
  q: '"Ho già provato altri coach. Perché tu saresti diverso?"',
  a: "Capisco lo scetticismo. Anche io ho provato molti approcci diversi prima di trovare la sintesi.\n\nEcco le differenze concrete:\n🔬 Non solo coaching standard: Integro neuroscienze, psicologia, filosofia e pratiche contemplative millenarie.\n🎯 Non ti motivo con slogan: Facilito la tua trasformazione con strumenti concreti e progressivi.\n👤 Non uso cose preconfezionate: Ogni sessione è personalizzata su di te (biografia, credenze limitanti, obiettivi).\n🐦‍🔥 Ho attraversato la crisi personalmente: Non insegno da un libro. Condivido ciò che ha funzionato per me e per le altre persone che ho seguito.\n\nLa sessione gratuita serve proprio a questo: Verificare se c'è risonanza. Se non la senti, nessun problema. Fidati del tuo intuito."
}, {
  q: '"Funziona anche online o serve presenza fisica?"',
  a: "Ricerche scientifiche e diverse meta-analisi hanno dimostrato che il Professional Coaching online funziona come quello dal vivo. Funziona benissimo anche online.\n\nQuasi tutti i miei coachee hanno lavorato via Meet con risultati invariati.\n\nPerché funziona online:\n• Il lavoro è interiore, non dipende dal luogo fisico\n• Le tecniche (mindfulness, visualizzazioni, professional coaching) sono a volte perfino più efficaci a distanza\n• Il supporto WhatsApp 24/7 crea continuità tra le sessioni\n\nN.B. Lavorando a distanza, diventerai più autonomo e indipendente dal coach!"
}, {
  q: '"Quanto dura davvero? Posso fare meno settimane?"',
  a: "Il percorso completo è 13+ settimane (circa 3 mesi) perché:\n✅ La trasformazione profonda richiede tempo per sedimentarsi\n✅ Ogni fase si basa sulla precedente (passato → presente → futuro)\n✅ Il cervello ha bisogno di ripetizione e pratica per creare nuovi pattern\n\nPosso offrire un pacchetto ridotto (presente-futuro) se il training passato non risuona con te…\nMa non avrai la potenza del percorso integrato 3D.\n\nLa sessione gratuita serve anche a valutare insieme cosa è meglio per te…"
}, {
  q: '"E se non funziona? Ci sono garanzie?"',
  a: 'Sessione Professional Coaching gratuita (30+ min) — Ci conosciamo, analizziamo la tua situazione, vediamo se il Metodo EFO® può fare al caso tuo. Zero stress. Zero costo.\n\nMa ecco la verità: se ti impegni davvero nel percorso, funzionerà.\n\nI risultati dipendono da:\n• Il Metodo (te lo do io)\n• Tuo impegno (pratica, apertura, trasparenza)\n\nNessuno può garantirti che diventi "illuminato" in 13 settimane. Ma posso garantire che sarai una persona migliore — più centrata, presente, libera…'
}, {
  q: '"Costa troppo. Non posso permettermelo."',
  a: 'Capisco. Ho investito decine di migliaia di euro in 13 anni per arrivare qui.\n\nLa vera domanda non è "Quanto costa?", ma:\n💰 "Quanto mi sta costando rimanere dove sono?"\n\nFacciamo due conti:\n• Burnout → produttività dimezzata → opportunità perse (valore: ?)\n• Stress cronico → salute a rischio → spese mediche future (valore: ?)\n• Relazioni disfunzionali → litigi → isolamento (valore emotivo: ?)\n• Vita vissuta con il freno a mano tirato → rimpianti a 50 anni (valore: inestimabile)\n\n789€ per 13 settimane = 60€/settimana.\nMeno di una cena fuori. Meno di uno psicoterapeuta… ma imparerai strumenti che saranno a tua disposizione per sempre!\n\nStai investendo nella tua libertà interiore.'
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
const credentialsList = ["🎓 Laurea Magistrale in Scienze Religiose (Pontificia Università Lateranense)", "🏆 Master Universitario Coaching Umanistico e PNL (1° Livello)", "🌍 Diploma Coach Professionista ICF (International Coaching Federation)", "🧠 Psicologia Positiva (University of Pennsylvania — Ivy League)", "🧘 Facilitatore Mindfulness (50 crediti ECM — Ministero della Salute)", "🌀 Master in Ipnosi"];
const testimonials = [{
  name: "Nicolò E.",
  role: "Copywriter",
  title: "Da Insicuro a Libero Professionista Freelance",
  quote: "In poche sessioni, Gabriele mi ha dato un punto di vista che non avevo mai considerato. Ha migliorato drasticamente il mio focus — fondamentale per un freelance. Non solo è competente, ma sa ascoltare con empatia reale. È stato decisivo per la mia svolta professionale.",
  results: ["Superata sindrome dell'impostore", "Aperto partita IVA e ottenuto primi clienti", "Chiarezza sulla direzione professionale"],
  videoId: "1c_-VgFLzRPyl5aJE2f456NaduPodUYNx"
}, {
  name: "Luca G.",
  role: "Media Buyer",
  title: "Da Bloccato a Trasformato (-4kg + Nuova Autostima)",
  quote: "Gabriele ha una capacità unica di leggere tra le righe e fare le domande giuste. Mi ha aiutato a vedere ciò che io stesso non riuscivo a vedere. Non solo ho perso 4kg, ma ho riacquistato fiducia nelle mie capacità e gestisco meglio lo stress quotidiano.",
  results: ["Perdita di peso fisica e mentale", "Superamento di blocchi emotivi inconsci", "Maggiore energia e stress management"],
  videoId: "1bXnXExxCKSBGn66dOWjcInfud0NF9qWi"
}, {
  name: "Luca L.",
  role: "Brand Strategist",
  title: "Da Disperso a Focalizzato",
  quote: "La mia esperienza con Gabriele è stata molto positiva. In poche sessioni di professional coaching è riuscito a darmi un nuovo punto di vista, che non avevo mai preso in considerazione, aiutandomi a migliorare sensibilmente il mio focus durante le 4 sessioni previste (cosa fondamentale per un freelance come me). Il risultato è stato raggiunto grazie a domande mirate ed esercizi pratici, veloci e dall'effetto immediato come la mindfulness. Oltre questo, è da segnalare il lato umano di Gabriele, che guida le sessioni con metodo e molta empatia, rendendosi sempre disponibile a chiarire ogni singolo dubbio.",
  results: ["Aumento del focus lavorativo", "Riduzione compulsione (da dipendenza a consapevolezza)", "Maggiore produttività e presenza"],
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
        {/* Hero - No lazy load, critical content */}
        <section className="relative min-h-[100svh] flex items-center justify-center section-padding bg-gradient-hero overflow-hidden" aria-labelledby="metodo-efo-heading">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative z-10 text-center w-full">
            <AnimatedSectionLite blur>
              <span className="inline-block px-3 py-1.5 text-xs font-sans uppercase tracking-[0.15em] text-cyan/70 border border-cyan/20 rounded-full mb-4 md:mb-6">
                METODO EFO®
              </span>

              <h1 id="metodo-efo-heading" className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                Hai Fatto Tutto.
                <br />
                <span className="text-gradient">Ma Manca Ancora Qualcosa.</span>
              </h1>

              <p className="font-serif text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 leading-relaxed">
                Forse hai successo sulla carta, ma senti un vuoto che non riesci a colmare. La carriera avanza. Il conto
                in banca cresce. Ma la sensazione di vivere davvero... quella no.
              </p>

              <p className="font-serif text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-3">
                Tra scadenze e meeting, ti stai perdendo per strada.
              </p>

              <p className="font-serif text-sm md:text-base text-foreground max-w-2xl mx-auto mb-6 md:mb-8">
                Il Metodo EFO® non ti promette "work-life balance" con frasi fatte. Ti offre un{" "}
                <span className="text-cyan">sistema integrato per ritrovare te stesso</span> — senza sacrificare il
                successo.
              </p>

              <Button variant="hero" size="xl" className="w-full sm:w-auto transition-transform hover:scale-105" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com" aria-label="Fissa una sessione gratuita - invia email">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Fissa Sessione GRATIS
                </a>
              </Button>

              <p className="text-cyan mt-6 md:mt-8 flex items-center justify-center gap-2" aria-hidden="true">
                <ArrowDown className="h-4 w-4" />
                Scopri se è il momento giusto per te
              </p>
            </AnimatedSectionLite>
          </div>
        </section>

        {/* For You If */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                🫵🏻 Questo percorso è <span className="text-cyan">per te</span> se...
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
              {forYouIf.map((item, index) => <AnimatedSection key={index} delay={index * 0.08} scale>
                  <div className="gradient-border rounded-xl p-4 md:p-6 bg-gradient-card h-full transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-base md:text-lg mb-1.5 text-foreground">
                          Sei un {item.title}
                        </h3>
                        <p className="font-serif text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>)}
            </div>

            {/* Not for you */}
            <AnimatedSection delay={0.3} scale>
              <div className="max-w-4xl mx-auto">
                {/* Card principale - Lista "Non per te" */}
                <div className="glass rounded-xl p-5 md:p-8 border border-red-500/20">
                  <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center flex items-center justify-center gap-2">
                    <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-400" aria-hidden="true" />
                    <span>Questo percorso NON è per te se...</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    {notForYouIf.map((item, index) => <div key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" aria-hidden="true" />
                        <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                      </div>)}
                  </div>
                </div>

                {/* Testo di chiusura - separato con margini corretti */}
                <div className="space-y-3 text-center mt-10 md:mt-16 mb-10 md:mb-16">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Se ti riconosci nel primo gruppo, continua a leggere.
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Se ti riconosci nel secondo, ti auguro di trovare ciò che cerchi altrove.
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground italic">
                    Non è giudizio. È allineamento. Il Metodo EFO® funziona solo con chi si sente pronto.
                  </p>
                  <p className="text-cyan font-display text-base md:text-lg mt-4 md:mt-5">Sei pronto?</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Problems / Signals */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <p className="text-muted-foreground uppercase tracking-wider text-xs mb-3">
                IL PROBLEMA CHE CONOSCIAMO TROPPO BENE
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                🎯 Riconosci <span className="text-gradient">Questi Segnali?</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {problems.map((problem, index) => <AnimatedSection key={index} delay={index * 0.08} scale>
                  <div className="p-4 md:p-6 rounded-xl bg-card border border-border/50 transition-colors duration-300 hover:border-cyan/50">
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-cyan shrink-0" />
                      <h3 className="font-display text-base md:text-lg text-foreground">{problem.title}</h3>
                    </div>
                    <p className="font-serif text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {problem.desc}
                    </p>
                  </div>
                </AnimatedSection>)}
            </div>

            {/* Good news */}
            <AnimatedSection delay={0.4} scale>
              <div className="glass rounded-xl p-5 md:p-8 max-w-4xl mx-auto text-center border border-emerald-500/20">
                <h3 className="font-display text-xl md:text-2xl mb-3 md:mb-4 flex items-center justify-center gap-2">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                  <span className="text-emerald-400">Ma c'è una buona notizia...</span>
                </h3>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-3">
                  Se hai riconosciuto anche solo 2 di questi segnali, significa che la tua consapevolezza è già attiva.
                </p>
                <p className="font-serif text-sm md:text-base text-foreground mb-3">
                  <span className="text-foreground font-medium">Non sei "rotto". Non hai fallito.</span> Sei
                  semplicemente arrivato a un punto di svolta.
                </p>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-3">
                  Molti prima di te hanno attraversato esattamente questo momento. Prima di emergere trasformati.
                </p>
                <div className="space-y-1.5 text-xs md:text-sm text-muted-foreground mb-3">
                  <p>
                    <span className="text-cyan">Nicolò</span> era bloccato dall'insicurezza. Oggi è un freelance
                    affermato con clienti importanti.
                  </p>
                  <p>
                    <span className="text-cyan">Luca G.</span> aveva perso fiducia in sé stesso. Oggi ha ritrovato
                    energia, perso 4kg e gestisce meglio lo stress quotidiano.
                  </p>
                  <p>
                    <span className="text-cyan">Luca L.</span> era disperso e compulsivo. Oggi vive con focus e maggiore
                    presenza.
                  </p>
                </div>
                <p className="text-cyan font-display text-base md:text-lg">
                  La trasformazione non è un'eccezione. È la regola, quando hai il metodo giusto.
                </p>
                <p className="text-muted-foreground mt-3 italic text-sm">Lascia che ti presenti il mio metodo…</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Paradox section */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection className="text-center" blur scale>
              <div className="glass rounded-xl p-5 md:p-8 border border-cyan/20">
                <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-cyan mx-auto mb-4 md:mb-6" />
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">
                  Il Paradosso del Professionista e del Successo Esteriore
                </h2>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-3">
                  Forse sei un Professionista impegnato. Management o ruoli di responsabilità. Ma quando si tratta della
                  tua vita interiore... non sai da dove iniziare.
                </p>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Il problema non è mancanza di volontà. Il problema è che nessuno ti ha mai insegnato a gestire la
                  risorsa più importante che hai:
                </p>
                <p className="font-serif text-sm md:text-base text-foreground mb-2">I soldi? Il tempo?</p>
                <p className="font-display text-xl md:text-2xl text-cyan mb-4 md:mb-6">Te stesso!</p>

                <div className="border-t border-border/50 pt-4 md:pt-6">
                  <p className="text-muted-foreground mb-2 text-sm md:text-base">
                    <span className="font-display">⚠️ La Verità Che Nessuno Ti Dice:</span>
                  </p>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3">
                    Non hai bisogno di un altro corso di produttività. Non hai bisogno di ottimizzare ulteriormente le
                    tue performance. Hai bisogno di fermarti, guardarti dentro e ripartire dalle fondamenta.
                  </p>
                  <p className="text-cyan font-medium text-sm md:text-base">
                    E per farlo serve un metodo, non solo buone intenzioni.
                  </p>
                </div>

                <div className="mt-6 md:mt-8">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      <Mail className="h-5 w-5" />
                      Fissa Sessione GRATIS
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Two Scenarios */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                La Tua Vita <span className="text-gradient">Tra 90 Giorni</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {/* Scenario A */}
              <AnimatedSection direction="left" scale>
                <div className="rounded-xl p-5 md:p-8 bg-red-950/30 border border-red-500/30 h-full">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl text-red-400">SCENARIO A</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Se Non Cambi Nulla</p>
                    </div>
                  </div>
                  <div className="space-y-3 font-serif text-xs md:text-sm text-muted-foreground">
                    <p>
                      È lunedì mattina, ore 7:00. La sveglia suona e il primo pensiero è già una scadenza. Ti alzi con
                      quel peso familiare sul petto. Durante la colazione scorri le email con una mano mentre l'altra
                      tiene il caffè che ormai è freddo. Il tuo partner ti parla ma tu annuisci senza ascoltare davvero
                      — la tua mente è già in ufficio.
                    </p>
                    <p>
                      Alle 23:00 sei ancora al computer. Il collo fa male. Gli occhi bruciano. Chiudi il laptop con
                      quella sensazione di vuoto: "Cos'ho fatto oggi che conta davvero?"
                    </p>
                    <p className="text-red-400">
                      Domani sarà uguale. E dopodomani. Tra tre mesi sarai esattamente dove sei adesso, forse più
                      stanco, forse più vuoto. Forse con una promozione in più e un pezzo di te in meno.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Scenario B */}
              <AnimatedSection direction="right" scale>
                <div className="rounded-xl p-5 md:p-8 bg-emerald-950/30 border border-emerald-500/30 h-full">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl text-emerald-400">SCENARIO B</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Dopo il Metodo EFO®</p>
                    </div>
                  </div>
                  <div className="space-y-3 font-serif text-xs md:text-sm text-muted-foreground">
                    <p>
                      È lunedì mattina, ore 7:00. La sveglia suona ma tu sei già sveglio, seduto in meditazione. Senti
                      il respiro che entra ed esce. Sei presente. Non pensi al lavoro. Non pensi a niente. Sei
                      semplicemente qui.
                    </p>
                    <p>
                      Durante la colazione guardi il tuo partner negli occhi mentre parla dei suoi sogni — e per la
                      prima volta dopo mesi ascolti davvero. Senti il sapore del caffè. Noti il sole che entra dalla
                      finestra. Ti accorgi di essere vivo.
                    </p>
                    <p>
                      Alle 9:00 inizi a lavorare con focus — tre ore di deep work senza distrazioni, senza ansia.
                      Produci più in tre ore di quanto facevi nel doppio del tempo, perché sei presente.
                    </p>
                    <p>
                      Alle 18:00 chiudi il computer. Davvero. Senza sensi di colpa. La sera leggi un libro, giochi con
                      tuo figlio, fai l'amore essendo completamente lì.
                    </p>
                    <p className="text-emerald-400">Sorridi. Sei tornato a casa, dentro te stesso.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="text-center mt-6 md:mt-8" blur>
              <p className="font-display text-xl md:text-2xl text-cyan">Quale scenario vuoi vivere?</p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3 Dimensions */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <p className="text-muted-foreground uppercase tracking-wider text-xs mb-3">LA SOLUZIONE</p>
              <span className="inline-block px-3 py-1.5 text-xs font-sans uppercase tracking-[0.15em] text-cyan/70 border border-cyan/20 rounded-full mb-4 md:mb-6">
                Metodo EFO®
              </span>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl mb-3">
                🧩 Essere Felici <span className="text-gradient">ORA</span>
              </h2>
              <p className="font-serif text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-3">
                Il sistema integrato che può trasformarti da professionista in crisi a leader centrato, presente e
                realizzato a 360°.
              </p>
              <p className="font-serif text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Non terapia per psicopatologie. Non sterile motivazione. Non fuffa new age. Ma un percorso rigoroso,
                definitivo, che unisce:
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6">
                <span className="px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-xs md:text-sm">
                  🧠 Neuroscienze (Professional Coaching ICF, Psicologia Positiva, Mindfulness, Ipnosi…)
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-xs md:text-sm">
                  🏛️ Saggezza millenaria (Filosofia, pratiche contemplative, archetipi)
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-xs md:text-sm">
                  🔢 Risultati misurabili (13+ settimane di pratica, non solo teoria)
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection className="text-center mb-6 md:mb-8" blur>
              <p className="text-muted-foreground text-xs md:text-sm">Perché "EFO"?</p>
              <h3 className="font-display text-xl md:text-2xl text-cyan">Le 3 Dimensioni della Trasformazione</h3>
            </AnimatedSection>

            <div className="space-y-4 md:space-y-8">
              {[{
              icon: History,
              num: "1️⃣",
              title: "1️⃣ TRASFORMA IL TUO PASSATO",
              sub: "Da peso a trampolino di lancio",
              intro: "Le tue ferite interiori, i condizionamenti ricevuti, le aspettative altrui interiorizzate... Possono smettere di governarti.",
              benefits: ["Liberarti da schemi inconsci che sabotano la tua felicità", 'Riscrivere narrazioni limitanti ("Non basta mai", "Devo apparire perfetto", "Devo dimostrare di essere qualcuno")', "Riconnetterti con parti di te sacrificate sull'altare del lavoro fine a se stesso"],
              result: "Il passato diventa risorsa, energia, non prigione. Le catene vengono spezzate…"
            }, {
              icon: Clock,
              num: "2️⃣",
              title: "2️⃣ VIVI PIENAMENTE IL PRESENTE",
              sub: "Dal pilota automatico della frenesia contemporanea a una presenza radicale",
              intro: 'Quante volte ti senti "presente" solo fisicamente e con la testa da un\'altra parte? Quanti momenti con i tuoi cari hai passato pensando alle scadenze del giorno dopo?',
              benefits: ["Accesso allo stato di flow anche nella quotidianità lavorativa (deep work)", "Gestione dello stress attraverso mindfulness applicata (non solo teoria)", "Capacità di essere qui e ora, senza ansia per il futuro o rimpianti per il passato"],
              result: "Lavori meglio, senza consumarti. Vivi davvero, invece di essere perseguitato dallo stress."
            }, {
              icon: Target,
              num: "3️⃣",
              title: "3️⃣ ATTRAI IL FUTURO DESIDERATO",
              sub: "Dalla confusione alla chiarezza di chi vuoi essere davvero",
              intro: 'Non "legge di attrazione" magica. Ma visione chiara + valori autentici + azioni coerenti.',
              benefits: ["Ridefinire le priorità oltre la carriera (affetti, spiritualità, mission)", "Allineamento tra chi sei e cosa fai (no dissonanza cognitiva)", 'Piano d\'azione per trasformare la vita che "dovresti" vivere nella vita che vuoi vivere'],
              result: "Non rincorri più obiettivi altrui. Crei il tuo destino."
            }].map((dim, index) => <AnimatedSection key={index} delay={index * 0.12} scale>
                  <div className="gradient-border rounded-xl p-4 md:p-8 bg-gradient-card">
                    <div className="grid lg:grid-cols-3 gap-4 md:gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-cyan/10 flex items-center justify-center">
                            <dim.icon className="h-6 w-6 md:h-8 md:w-8 text-cyan" />
                          </div>
                        </div>
                        <h3 className="font-display text-lg md:text-2xl mb-1.5 md:mb-2">{dim.title}</h3>
                        <p className="text-cyan text-xs md:text-sm mb-3 md:mb-4">{dim.sub}</p>
                        <p className="text-muted-foreground text-xs md:text-sm italic">{dim.intro}</p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 font-medium">
                          Per te significa:
                        </p>
                        <ul className="space-y-2 md:space-y-3">
                          {dim.benefits.map((b, i) => <li key={i} className="flex items-start gap-2 md:gap-3">
                              <Zap className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />
                              <span className="text-xs md:text-sm text-muted-foreground">{b}</span>
                            </li>)}
                        </ul>
                      </div>
                      <div className="flex items-center h-full">
                        <div className="p-3 md:p-4 rounded-xl bg-cyan/10 border border-cyan/20 w-full">
                          <p className="text-xs md:text-sm text-foreground font-medium mb-1">Risultato:</p>
                          <p className="text-xs md:text-sm text-cyan">{dim.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* Roadmap - Gamified Levels */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <p className="text-muted-foreground uppercase tracking-wider text-xs mb-3">
                COME FUNZIONA: LA ROADMAP COMPLETA
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                🗺️ La Tua Mappa di <span className="text-gradient">Trasformazione</span>
              </h2>
              <p className="font-serif text-sm md:text-base text-muted-foreground">
                Ogni fase è un livello da completare. Ogni livello sblocca nuove abilità e bonus esclusivi.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              {roadmapLevels.map((level, index) => <AnimatedSection key={index} delay={index * 0.08} scale>
                  <div className={`rounded-xl p-4 md:p-6 h-full transition-transform duration-300 hover:-translate-y-1 ${level.unlocked ? "bg-gradient-card border border-cyan/30" : "bg-card/50 border border-border/30"}`}>
                    {level.dimension && <div className="mb-3 md:mb-4 px-2 py-1 rounded-full bg-cyan/10 border border-cyan/20 inline-block">
                        <span className="text-xs text-cyan font-medium">{level.dimension}</span>
                      </div>}
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${level.unlocked ? "bg-cyan/20" : "bg-muted/20"}`}>
                          {level.unlocked ? <Unlock className={`h-4 w-4 md:h-5 md:w-5 ${level.unlocked ? "text-cyan" : "text-muted-foreground"}`} /> : <Lock className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />}
                        </div>
                        <div>
                          <span className={`font-display text-xl md:text-2xl ${level.unlocked ? "text-cyan" : "text-muted-foreground"}`}>
                            LV {level.level}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{level.week}</span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl mb-1">{level.title}</h3>
                    <p className="text-xs md:text-sm text-cyan mb-3 md:mb-4">{level.subtitle}</p>

                    <p className="text-xs text-muted-foreground mb-2">Cosa succede/faremo:</p>
                    <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                      {level.content.map((item, i) => <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-cyan mt-1.5 shrink-0" />
                          {item}
                        </li>)}
                    </ul>

                    <div className="space-y-1.5 md:space-y-2 pt-3 md:pt-4 border-t border-border/50">
                      <div className="flex items-start gap-1.5 md:gap-2">
                        <Gift className="h-3 w-3 md:h-4 md:w-4 text-cyan shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{level.badge}</span>
                      </div>
                      <div className="flex flex-col gap-0.5 md:gap-1">
                        <span className="text-xs text-cyan">{level.time}</span>
                        {level.skill && <span className="text-xs text-emerald-400">💪🏻 Nuova Abilità: "{level.skill}"</span>}
                        {level.achievement && <span className="text-xs text-amber-400">🎖️ "{level.achievement}"</span>}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>)}

              {/* Maestria Levels */}
              {maestriaLevels.map((level, index) => <AnimatedSection key={`maestria-${index}`} delay={(roadmapLevels.length + index) * 0.08}>
                  <div className="rounded-xl p-4 md:p-6 h-full bg-gradient-to-br from-amber-950/30 to-card border border-amber-500/30 transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-3 md:mb-4 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block">
                      <span className="text-xs text-amber-400 font-medium">{level.dimension}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-amber-500/20">
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
                      </div>
                      <span className="font-display text-xl md:text-2xl text-amber-400">LV {5 + index} </span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl mb-1 text-amber-400">MAESTRIA</h3>
                    <p className="text-xs md:text-sm text-foreground mb-1">{level.title}</p>
                    <p className="text-xs text-muted-foreground italic mb-3 md:mb-4">{level.subtitle}</p>

                    <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                      {level.content.map((item, i) => <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          {item}
                        </li>)}
                    </ul>

                    <div className="pt-3 md:pt-4 border-t border-amber-500/30">
                      <div className="flex items-start gap-1.5 md:gap-2">
                        <Gift className="h-3 w-3 md:h-4 md:w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{level.badge}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>)}
            </div>

            {/* Progress bar */}
            <AnimatedSection className="max-w-2xl mx-auto mb-6 md:mb-8" scale>
              <div className="glass rounded-xl p-4 md:p-6 border border-cyan/20">
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">IL TUO PROGRESSO</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-3 md:h-4 bg-muted/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/6 bg-gradient-to-r from-cyan to-accent rounded-full" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Livello 0 → Inizia il Viaggio</p>
                <p className="text-xs text-muted-foreground mt-1.5 md:mt-2">
                  Ogni settimana che completi, sali di livello. Ogni pratica che esegui, accumuli esperienza. Ogni
                  insight che integri, sblocchi nuove possibilità.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="text-center" blur scale>
              <p className="font-display text-base md:text-lg text-foreground">
                Non è un corso. Non è un percorso qualsiasi. È una{" "}
                <span className="text-cyan">quest di trasformazione esistenziale.</span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pause section */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection className="text-center" blur scale>
              <div className="glass rounded-xl p-5 md:p-8 border border-border/50">
                <p className="text-2xl md:text-3xl mb-3 md:mb-4">⏸️</p>
                <h2 className="font-display text-xl md:text-2xl mb-4 md:mb-6">PAUSA. Respira.</h2>
                <div className="space-y-3 md:space-y-4 font-serif text-sm md:text-base text-muted-foreground text-left max-w-2xl mx-auto">
                  <p>Se sei arrivato fin qui, probabilmente la tua testa sta girando.</p>
                  <p className="italic text-xs md:text-sm">
                    "Sembra troppo bello per essere vero." "Funzionerà davvero per me?" "E se fosse l'ennesima
                    delusione?"
                  </p>
                  <p className="font-display text-foreground">Voglio essere onesto con te:</p>
                  <p className="text-xs md:text-sm">
                    Non diventerai "illuminato" in 13 settimane. Non risolverai tutti i problemi della tua vita. Non
                    smetterai magicamente di avere giorni difficili.
                  </p>
                  <p className="font-display text-foreground">Ma ecco cosa succederà davvero:</p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-1 shrink-0" />
                      <span className="text-xs md:text-sm">Imparerai a stare con te stesso senza fuggire.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-1 shrink-0" />
                      <span className="text-xs md:text-sm">
                        Svilupperai strumenti concreti per superare lo stress invece di subirlo.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-1 shrink-0" />
                      <span className="text-xs md:text-sm">
                        Ritroverai pezzi di te che avevi sepolto sotto le macerie della frenesia quotidiana.
                      </span>
                    </li>
                  </ul>
                  <p className="text-cyan font-display text-center pt-3 md:pt-4 text-sm md:text-base">
                    Non ti prometto la perfezione. Ti offro la trasformazione.
                  </p>
                  <p className="text-center text-xs md:text-sm">
                    E la trasformazione, a differenza della perfezione, è reale.
                  </p>
                  <p className="text-center text-foreground mt-3 md:mt-4 text-xs md:text-sm">
                    Ancora con me? Bene. Continuiamo.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What's included */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                💎 Cosa È <span className="text-gradient">Incluso</span> Nel Percorso
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Percorso Completo Metodo EFO® (13+ settimane)
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <AnimatedSection scale>
                <div className="glass rounded-xl p-5 md:p-8 border border-cyan/20 h-full">
                  <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-cyan" />
                    Il Percorso Include:
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {inclusions.map((item, index) => <li key={index} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-emerald-400 mt-0.5 shrink-0" />
                        {item}
                      </li>)}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1} scale>
                <div className="glass rounded-xl p-5 md:p-8 border border-amber-500/20 h-full">
                  <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-2">
                    <Gift className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
                    Bonus Inclusi:
                  </h3>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {bonuses.map((item, index) => <li key={index} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-amber-400 mt-0.5 shrink-0" />
                        {item}
                      </li>)}
                  </ul>

                  <div className="border-t border-amber-500/20 pt-4 md:pt-6">
                    <p className="text-xs md:text-sm text-amber-400 font-medium mb-2 md:mb-3">
                      COMING SOON (GRATIS solo per chi inizia ora):
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {comingSoon.map((item, index) => <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                          <span className="text-amber-400">​✨</span>
                          <span>
                            {item.name} <span className="text-amber-400">(valore {item.value})</span>
                          </span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing & Urgency */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                <span className="text-gradient">Investimento</span>
              </h2>
            </AnimatedSection>

            {/* Value breakdown */}
            <AnimatedSection className="mb-6 md:mb-8" scale>
              <div className="glass rounded-xl p-5 md:p-8 border border-border/50">
                <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center">Il Valore Reale:</h3>
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-xs md:text-sm text-muted-foreground">
                  <li>
                    • Libri letti: 526x15€ = <span className="text-foreground">7.890,00 €</span>
                  </li>
                  <li>
                    • Decine di migliaia di euro investiti in corsi (universitari e non) tra cui:
                    <ul className="ml-4 md:ml-6 mt-1.5 md:mt-2 space-y-0.5 md:space-y-1">
                      <li>- 2 master universitari</li>
                      <li>- 1 master internazionale (ICF) che mi ha diplomato Coach Professionista</li>
                      <li>- Psicologia Positiva presso University of Pennsylvania (Ivy League)</li>
                      <li>- Corso ECM (Ministero della Salute) Facilitatore in Mindfulness</li>
                      <li>- Master Ipnosi</li>
                      <li>- ecc.</li>
                    </ul>
                  </li>
                  <li>
                    • 10+ anni di ricerca ed esperienza sul campo —{" "}
                    <span className="text-cyan">Che prezzo daresti a più di 10 anni di tempo?!</span>
                  </li>
                </ul>
                <p className="text-center text-xs md:text-sm text-muted-foreground">
                  Risparmia tentativi ed errori che ho fatto io, 10+ anni di ricerca sul campo e decine di migliaia di
                  euro grazie al Metodo EFO!
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection scale>
              <div className="gradient-border rounded-xl p-5 md:p-8 bg-gradient-card mb-6 md:mb-8">
                <div className="text-center mb-6 md:mb-8">
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">
                    Vendere Metodo EFO a +10k€? Perché no… e invece…
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">5 cifre? No! 4 cifre?! Nemmeno!</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 mb-2">Prezzo Early Bird</p>
                  <p className="font-display text-4xl md:text-5xl text-foreground mb-2">
                    <span className="text-muted-foreground line-through text-2xl md:text-3xl mr-2 md:mr-3">987€</span>
                    789€
                  </p>
                  <p className="text-cyan text-xs md:text-sm">Con sconto doppio riservato a te!</p>
                  <p className="text-xs text-muted-foreground mt-2">BONUS assurdi inclusi nel prezzo!</p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <p className="text-emerald-400 text-xs md:text-sm font-medium mb-0.5 md:mb-1">✅ Sconto 10%</p>
                    <p className="text-xs text-muted-foreground">In cambio di testimonianza sincera</p>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <p className="text-emerald-400 text-xs md:text-sm font-medium mb-0.5 md:mb-1">
                      ✅ Sconto "Men in Black"
                    </p>
                    <p className="text-xs text-muted-foreground">Disponibile per chi inizia ora!</p>
                  </div>
                </div>

                <p className="text-center text-xs md:text-sm text-muted-foreground">
                  Solo <span className="text-cyan font-medium">789€</span> grazie allo sconto doppio! ={" "}
                  <span className="text-cyan">60€/settimana</span>. Meno di una cena fuori.
                </p>
              </div>
            </AnimatedSection>

            {/* Urgency */}
            <AnimatedSection delay={0.15} scale>
              <div className="rounded-xl p-5 md:p-8 bg-red-950/30 border border-red-500/30 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-red-400" />
                  <h3 className="font-display text-lg md:text-xl text-red-400">DISPONIBILITÀ LIMITATA</h3>
                </div>

                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  Perché posso seguire solo{" "}
                  <span className="text-red-400 font-medium">3 nuovi coachee a trimestre</span>:
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Non è una strategia di marketing. È una scelta di integrità professionale. Ogni percorso Metodo EFO®
                  richiede:
                </p>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                  <li>✅ Sessioni personalizzate 1-to-1 (non standardizzate)</li>
                  <li>✅ Supporto WhatsApp 24/7 con risposta personale (non assistenti o bot)</li>
                  <li>✅ Revisione settimanale dei tuoi progressi</li>
                  <li>✅ Adattamento continuo del percorso alle tue esigenze</li>
                </ul>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                  Seguire più di 3 persone contemporaneamente comprometterebbe la qualità che voglio garantire.
                </p>

                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">STATO ATTUALE TRIMESTRE:</p>
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="p-2 md:p-4 rounded-lg md:rounded-xl bg-background/30 text-center">
                    <p className="text-red-400 font-display text-sm md:text-lg">Posto 1</p>
                    <p className="text-xs text-muted-foreground">OCCUPATO</p>
                  </div>
                  <div className="p-2 md:p-4 rounded-lg md:rounded-xl bg-background/30 text-center">
                    <p className="text-red-400 font-display text-sm md:text-lg">Posto 2</p>
                    <p className="text-xs text-muted-foreground">OCCUPATO</p>
                  </div>
                  <div className="p-2 md:p-4 rounded-lg md:rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-center">
                    <p className="text-emerald-400 font-display text-sm md:text-lg">Posto 3</p>
                    <p className="text-xs text-emerald-400">DISPONIBILE</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  Prossima disponibilità se questo posto viene occupato:{" "}
                  <span className="text-red-400 font-medium">Aprile 2026</span>
                </p>
              </div>
            </AnimatedSection>

            {/* Price increase */}
            <AnimatedSection delay={0.2} scale>
              <div className="rounded-xl p-4 md:p-6 bg-amber-950/30 border border-amber-500/30 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
                  <h4 className="font-display text-base md:text-lg text-amber-400">AUMENTO PREZZO IMMINENTE</h4>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                  Il prezzo attuale (789€ con sconto doppio) è valido fino al{" "}
                  <span className="text-amber-400 font-medium">31 marzo 2026</span>.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                  <span className="font-medium">Perché aumenterà:</span> Da marzo introdurrò nuovi contenuti…
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                  Chi inizia ORA riceverà tutti gli aggiornamenti GRATIS (valore totale 1.085€).
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Chi inizierà dopo, pagherà il nuovo prezzo: <span className="text-amber-400 font-medium">2072€</span>
                </p>
                <p className="text-base md:text-lg text-amber-400 font-display text-center mt-3 md:mt-4">
                  Risparmia 1283€ e agisci ora!
                </p>
              </div>
            </AnimatedSection>

            {/* Urgency summary */}
            <AnimatedSection delay={0.25} scale>
              <div className="glass rounded-xl p-4 md:p-6 border border-cyan/20 mb-6 md:mb-8">
                <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-center">RIEPILOGO URGENZA:</h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-center">
                  <li className="text-red-400">Solo 1 posto disponibile questo trimestre</li>
                  <li className="text-red-400">Prezzo aumenta tra pochi giorni</li>
                  <li className="text-emerald-400">Bonus futuri inclusi GRATIS solo per chi inizia ora</li>
                </ul>
                <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">
                  La domanda non è "se" trasformarti. È <span className="text-cyan">"quando"</span>.
                </p>
                <p className="text-center text-xs md:text-sm text-muted-foreground">
                  E "quando" potrebbe essere adesso, oppure tra 3 mesi (se trovi ancora posto).
                </p>
              </div>
            </AnimatedSection>

            {/* Guarantee */}
            <AnimatedSection delay={0.3} scale>
              <div className="gradient-border rounded-xl p-5 md:p-8 bg-gradient-card text-center">
                <Shield className="h-10 w-10 md:h-12 md:w-12 text-cyan mx-auto mb-3 md:mb-4" />
                <h3 className="font-display text-xl md:text-2xl mb-3 md:mb-4">
                  Sessione Professional Coaching Gratuita
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  Prima di investire, parliamo. Gratuitamente.
                </p>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 text-left max-w-md mx-auto">
                  <li>✅ 30+ minuti per conoscerci davvero</li>
                  <li>✅ Analisi del tuo gap trasformativo</li>
                  <li>✅ Presentazione del Metodo EFO® se e solo se potrebbe fare al caso tuo</li>
                  <li>✅ Zero pressione. Zero vendita. Solo chiarezza.</li>
                </ul>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                  Se dopo la call gratuita decidi di non procedere: Avrai comunque guadagnato insight utili.
                </p>
                <div>
                  <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      <Mail className="h-5 w-5" />
                      Fissa Sessione GRATIS
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison Tables */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                Perché Metodo EFO® <span className="text-gradient">(E Non Altro)</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">Il Confronto</p>
            </AnimatedSection>

            <div className="space-y-4 md:space-y-8">
              {/* VS Psicoterapia */}
              <AnimatedSection scale>
                <div className="glass rounded-xl p-4 md:p-6 border border-border/50">
                  <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center">
                    VS Psicoterapia Tradizionale
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-muted/20">
                      <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-muted-foreground">
                        Psicoterapia
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span>•</span> Focus sul problema
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Anni di sedute settimanali
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Analizza il passato
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Pratica clinica vs psicopatologia
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> "Perché sono così?"
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-cyan/10 border border-cyan/20">
                      <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-cyan">Metodo EFO®</h4>
                      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Focus sulla trasformazione</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">3-4 mesi intensivi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Integra passato-presente-futuro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Professional Coaching ICF + Saggezza millenaria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">"Chi voglio essere?"</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 italic">
                    Non sostituisco la terapia. La integro e la accelero. Se hai bisogno di supporto clinico, ti
                    indirizzo al professionista giusto.
                  </p>
                </div>
              </AnimatedSection>

              {/* VS Altri Coach */}
              <AnimatedSection delay={0.1} scale>
                <div className="glass rounded-xl p-4 md:p-6 border border-border/50">
                  <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center">VS Altri "Coach"</h3>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-muted/20">
                      <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-muted-foreground">
                        Altri "Coach"
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span>•</span> Motivazione con slogan
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Focus su obiettivi esterni
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Approccio standard (fuffa?)
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> "Diventa la migliore versione di te stesso"
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Spesso senza neanche certificazioni
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-cyan/10 border border-cyan/20">
                      <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-cyan">Metodo EFO®</h4>
                      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Trasformazione con metodo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Riconnessione al tuo centro interiore</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Approccio integrato (scienza + spirito)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">"Diventa chi sei sempre stato"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">
                            Professional Coaching ICF + LM + Psicologia Positiva + Mindfulness + Ipnosi
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* VS App/Libri */}
              <AnimatedSection delay={0.15} scale>
                <div className="glass rounded-xl p-4 md:p-6 border border-border/50">
                  <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center">
                    VS App di Meditazione & Libri Self-Help
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-muted/20">
                      <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-muted-foreground">
                        App/Libri
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span>•</span> Contenuti generici
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Fai-da-te
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> 10 min/giorno isolati
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span> Abbandoni dopo 1 settimana
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-cyan/10 border border-cyan/20">
                      <h4 className="font-display text-base md:text-lg mb-3 md:mb-4 text-cyan">Metodo EFO®</h4>
                      <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Percorso personalizzato su di te</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Accompagnamento 1-to-1</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Sistema integrato + supporto continuo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5 shrink-0" />{" "}
                          <span className="text-foreground">Impegno strutturato con risultati misurabili</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* What makes unique */}
            <AnimatedSection delay={0.2} className="mt-8 md:mt-12" scale>
              <div className="gradient-border rounded-xl p-5 md:p-8 bg-gradient-card">
                <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center">
                  Cosa Rende Unico il Metodo EFO®
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl mb-1.5 md:mb-2">🔬</p>
                    <p className="font-display text-sm md:text-base text-foreground mb-0.5 md:mb-1">
                      Evidence-based + soul-based
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Non scelgo tra scienza e spirito. Li integro.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-2xl mb-1.5 md:mb-2">🎯</p>
                    <p className="font-display text-sm md:text-base text-foreground mb-0.5 md:mb-1">
                      Risultati in 13 settimane
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Non anni di analisi. Mesi di trasformazione.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-2xl mb-1.5 md:mb-2">🧠</p>
                    <p className="font-display text-sm md:text-base text-foreground mb-0.5 md:mb-1">
                      Non solo mindset, ma embodiment
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Non cambi solo come pensi. Cambi come senti e agisci.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-2xl mb-1.5 md:mb-2">👤</p>
                    <p className="font-display text-sm md:text-base text-foreground mb-0.5 md:mb-1">
                      Personalizzazione
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Non sei un numero. Sei un universo da esplorare.
                    </p>
                  </div>
                  <div className="text-center col-span-2 lg:col-span-1">
                    <p className="text-xl md:text-2xl mb-1.5 md:mb-2">🧘</p>
                    <p className="font-display text-sm md:text-base text-foreground mb-0.5 md:mb-1">
                      Esperienza vissuta
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Non insegno teoria. Condivido ciò che ho attraversato.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Chi Sono Preview */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">CHI SONO</h2>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <AnimatedSection direction="left" scale>
                <div className="relative aspect-square max-w-sm md:max-w-md mx-auto">
                  <div className="absolute -inset-3 border border-cyan/20 rounded-2xl md:rounded-3xl" />
                  <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden">
                    <BlurImage src={gabrielePhoto} alt="Gabriele Lucesole" placeholder={gabrielePhotoPlaceholder} className="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" scale>
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl mb-1.5 md:mb-2">
                  <span className="text-gradient">Gabriele Lucesole</span>
                </h3>
                <p className="text-cyan text-sm md:text-base mb-4 md:mb-6">Coach Professionista</p>

                <p className="font-display text-base md:text-lg text-foreground mb-3 md:mb-4">
                  Ho attraversato la crisi che stai vivendo.
                </p>

                <div className="prose-custom mb-4 md:mb-6 space-y-2 md:space-y-3">
                  <p className="font-serif text-xs md:text-sm text-muted-foreground">
                    Da adolescente, soffrivo per il male che vedevo nel mondo. Cercai risposte ovunque: filosofia
                    orientale, spiritualità new age, meditazione trascendentale.
                    <br />​
                  </p>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground">
                    Ma finii in un vicolo cieco: più cercavo fuori, più mi sentivo vuoto dentro.
                  </p>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground">
                    <span className="text-cyan">Il punto di svolta:</span> Un'esperienza mistica durante una crisi
                    esistenziale profonda. 9 mesi vissuti in monastero per tirare le somme. Un'epifania che unì tutti i
                    pezzi del puzzle.
                  </p>
                  <p className="font-serif text-xs md:text-sm text-foreground">
                    <span className="text-cyan">Risultato:</span> Il Metodo EFO® — la sintesi di 13 anni di ricerca,
                    526 libri letti, decine di migliaia di euro investiti in formazione.
                  </p>
                  <p className="font-serif text-xs md:text-sm text-cyan font-medium">
                    Non vendo teoria. Offro ciò che ha salvato me.
                  </p>
                </div>

                <Button variant="heroOutline" className="w-full sm:w-auto" asChild>
                  <Link to="/chi-sono">
                    Leggi la mia storia completa
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>

            {/* Credentials */}
            <AnimatedSection className="mt-8 md:mt-12" scale>
              <div className="glass rounded-xl p-5 md:p-8 border border-cyan/20">
                <h3 className="font-display text-lg md:text-xl mb-4 md:mb-6 text-center flex items-center justify-center gap-2">
                  <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-cyan" />
                  Certificazioni
                </h3>
                <p className="text-center text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                  13 anni di ricerca + Formazione accademica + Certificazioni internazionali
                </p>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
                  {credentialsList.map((cred, index) => <div key={index} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="shrink-0">{cred.split(" ")[0]}</span>
                      <span>{cred.split(" ").slice(1).join(" ")}</span>
                    </div>)}
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {credentials.map((cred, i) => <div key={i} className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-lg p-1.5 md:p-2 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                      <img src={cred.logo} alt={cred.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>)}
                </div>
                <p className="text-center text-xs md:text-sm text-muted-foreground mt-4 md:mt-6 italic">
                  Non sono un teorico da scrivania. Sono un praticante che ha trasformato il proprio dolore in un metodo
                  unico nel suo genere – dopo essere emerso dal caos.
                </p>
                <p className="text-center text-cyan text-sm mt-1.5 md:mt-2">Può succedere lo stesso anche a te…</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                Testimonianze di <span className="text-gradient">Trasformazione</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {testimonials.map((testimonial, index) => <AnimatedSection key={index} delay={index * 0.08} scale>
                  <div className="gradient-border rounded-xl p-4 md:p-6 bg-gradient-card h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-3 md:mb-4">
                      <h3 className="font-display text-base md:text-lg text-cyan">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>

                    <div className="mb-3 md:mb-4 flex-1">
                      <Quote className="h-4 w-4 md:h-6 md:w-6 text-cyan/50 mb-1.5 md:mb-2" />
                      <p className="font-serif text-xs md:text-sm text-muted-foreground italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="border-t border-border/50 pt-3 md:pt-4">
                      <p className="text-xs text-muted-foreground mb-1.5 md:mb-2">Risultati misurabili:</p>
                      <ul className="space-y-0.5 md:space-y-1">
                        {testimonial.results.map((result, i) => <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs text-emerald-400">
                            <Check className="h-3 w-3 mt-0.5 shrink-0" />
                            {result}
                          </li>)}
                      </ul>
                    </div>

                    {testimonial.videoId && <div className="mt-3 md:mt-4">
                        <div className="aspect-video rounded-lg overflow-hidden bg-muted/30">
                          <iframe src={`https://drive.google.com/file/d/${testimonial.videoId}/preview`} className="w-full h-full" allow="autoplay" title={`Testimonianza di ${testimonial.name}`} loading="lazy" />
                        </div>
                        <Button variant="ghost" size="sm" className="mt-1.5 md:mt-2 text-cyan text-xs" asChild>
                          <a href={`https://drive.google.com/file/d/${testimonial.videoId}/view`} target="_blank" rel="noopener noreferrer">
                            <Play className="h-3 w-3 md:h-4 md:w-4" />
                            Guarda Video Testimonianza
                          </a>
                        </Button>
                      </div>}
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3">
                Domande <span className="text-gradient">Frequenti</span> (FAQ)
              </h2>
            </AnimatedSection>

            <AnimatedSection scale>
              <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="gradient-border rounded-lg md:rounded-xl bg-gradient-card px-4 md:px-6 border-0">
                    <AccordionTrigger className="text-left font-display text-sm md:text-lg hover:no-underline py-4 md:py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-serif text-xs md:text-sm text-muted-foreground pb-4 md:pb-6 whitespace-pre-line">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-b from-background to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <AnimatedSection className="text-center mb-8 md:mb-12" blur>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-3"> 🛣️ Due Strade Davanti a Te 🛣️ </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <AnimatedSection direction="left" scale>
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-950/30 border border-red-500/30 h-full">
                  <h3 className="font-display text-lg md:text-xl text-red-400 mb-3 md:mb-4">
                    STRADA 1: Continuare Così
                  </h3>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Tornare al lavoro, alle scadenze, allo stress. Sperare che qualcosa cambi da solo.
                  </p>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Cercare di zittire quella voce che ti dice che il cambiamento dipende solo da te.
                  </p>
                  <p className="font-serif text-xs md:text-sm text-red-400">
                    Tra un anno sarai esattamente dove sei ora. O forse più indietro?
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" scale>
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-emerald-950/30 border border-emerald-500/30 h-full">
                  <h3 className="font-display text-lg md:text-xl text-emerald-400 mb-3 md:mb-4">STRADA 2: Decidere</h3>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Trovare il coraggio di fermarti, guardarti dentro, trasformarti.
                  </p>
                  <p className="font-serif text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Tra 3-4 mesi sarai una persona diversa:
                  </p>
                  <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm text-emerald-400">
                    <li>• Più centrata</li>
                    <li>• Più presente</li>
                    <li>• Più libera</li>
                    <li>• Più te stesso</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection scale>
              <div className="glass rounded-xl md:rounded-2xl p-5 md:p-8 border border-cyan/20 text-center mb-6 md:mb-8">
                <h3 className="font-display text-xl md:text-2xl mb-4 md:mb-6">La Chiamata (Per Chi È Pronto)</h3>
                <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Se sei arrivato fino a qui, non è un caso.
                </p>
                <p className="font-serif text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Il Metodo EFO® non è per tutti. È per chi:
                </p>
                <div className="grid grid-cols-2 gap-1.5 md:gap-2 text-xs md:text-sm text-left max-w-xl mx-auto mb-4 md:mb-6">
                  <div className="flex items-start gap-1.5 md:gap-2">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5" /> Non si accontenta di sopravvivere
                  </div>
                  <div className="flex items-start gap-1.5 md:gap-2">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5" /> Non crede alle soluzioni magiche
                  </div>
                  <div className="flex items-start gap-1.5 md:gap-2">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5" /> È pronto a guardarsi dentro
                  </div>
                  <div className="flex items-start gap-1.5 md:gap-2">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5" /> Cerca profondità, non superficialità
                  </div>
                  <div className="flex items-start gap-1.5 md:gap-2">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5" /> Vuole un compagno di viaggio
                  </div>
                  <div className="flex items-start gap-1.5 md:gap-2">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-cyan mt-0.5" /> Sente che manca ancora qualcosa
                  </div>
                </div>
                <p className="text-cyan font-display text-base md:text-lg">Se ti riconosci, rispondi alla chiamata.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} scale>
              <div className="gradient-border rounded-xl md:rounded-2xl p-5 md:p-8 bg-gradient-card text-center">
                <h3 className="font-display text-xl md:text-2xl mb-3 md:mb-4">Il Primo Passo È Semplice</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Prenota la tua sessione di Professional Coaching gratuita. Pochi minuti che possono cambiare tutto.
                </p>
                <div className="text-left max-w-md mx-auto mb-4 md:mb-6">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">Cosa succederà?</p>
                  <ol className="space-y-0.5 md:space-y-1 text-xs md:text-sm text-muted-foreground list-decimal list-inside">
                    <li>Ci conosciamo (sì, sono una persona vera, non un bot)</li>
                    <li>Analizziamo insieme la tua situazione</li>
                    <li>Ti mostro il Metodo EFO® se può fare al caso tuo</li>
                    <li>Decidi di procedere</li>
                  </ol>
                </div>
                <p className="text-cyan text-xs md:text-sm mb-4 md:mb-6">
                  Senza impegno. Niente vendita. Solo chiarezza.
                </p>
                <p className="font-display text-sm md:text-base text-foreground mb-4 md:mb-6">
                  Il viaggio più importante è quello dentro di te. E inizia con una conversazione.
                </p>

                <div className="mb-3 md:mb-4">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      <Mail className="h-5 w-5" />
                      Fissa Sessione GRATIS
                    </a>
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground space-y-0.5 md:space-y-1">
                  <p>
                    <span className="font-medium">Come Funziona:</span>
                  </p>
                  <p>1️⃣ Clicca il pulsante → 2️⃣ Inviami la mail → 3️⃣ Ricevi conferma → 4️⃣ Ci incontriamo</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Alternative contact */}
            <AnimatedSection delay={0.2} className="mt-6 md:mt-8 text-center" blur scale>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Preferisci Scrivermi Prima?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
                <Button variant="heroOutline" size="sm" className="w-full sm:w-auto" asChild>
                  <a href="https://www.instagram.com/gabrielelucesole/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    @gabrielelucesole
                  </a>
                </Button>
                <Button variant="heroOutline" size="sm" className="w-full sm:w-auto" asChild>
                  <a href="https://www.linkedin.com/in/gabrielelucesole" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 md:mt-2">
                Rispondo personalmente a ogni messaggio entro 24h.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Closing evocative */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection className="text-center" blur scale>
              <div className="prose-custom max-w-2xl mx-auto">
                <blockquote className="glass rounded-xl md:rounded-2xl p-5 md:p-8 border border-cyan/20 italic">
                  <p className="font-serif text-sm md:text-lg text-foreground mb-3 md:mb-4">
                    "Ho tutto quello che pensavo di volere, ma non riesco a sentirmi davvero realizzato."
                  </p>
                  <p className="font-serif text-xs md:text-base text-muted-foreground">
                    Questa frase non è una condanna. È un invito.
                  </p>
                </blockquote>

                <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-xs md:text-sm text-muted-foreground">
                  <p>
                    L'invito a smettere di rincorrere ciò che "dovresti" volere. E iniziare a costruire ciò che davvero
                    desideri.
                  </p>
                  <p>
                    Non ti dico che sarà facile. Ti offro un metodo, una mappa e la mia presenza (che ha già
                    attraversato il buio).
                  </p>
                  <p className="text-foreground">Il resto lo farai tu. Ma non sarai solo.</p>
                </div>

                <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-lg md:rounded-xl bg-cyan/5 border border-cyan/20">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Non ti dico cosa pensare. <span className="text-cyan">Ti porto a incontrarti.</span>
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Non ti offro risposte. <span className="text-cyan">Ti aiuto a farti le domande giuste.</span>
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Non ti prometto magia. <span className="text-cyan">Ti offro un metodo.</span>
                  </p>
                  <p className="text-sm md:text-base text-foreground mt-3 md:mt-4 font-medium">
                    E il coraggio di attraversare le tue paure.
                  </p>
                </div>

                <p className="text-cyan font-display text-lg md:text-xl mt-6 md:mt-8">
                  Ricorda: la paura non dice mai la verità!
                </p>
                <p className="text-sm md:text-base text-foreground mt-1.5 md:mt-2">
                  Se il Metodo EFO® ha funzionato per me, può farlo anche per te!
                </p>

                <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">
                  Coach Professionista specializzato Psicologia Positiva | Facilitatore Mindfulness | Ipnotista
                </p>
              </div>
            </AnimatedSection>

            {/* PS */}
            <AnimatedSection delay={0.15} className="mt-8 md:mt-12" scale>
              <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50">
                <p className="font-display text-base md:text-lg mb-3 md:mb-4">
                  🔮 P.S. Se sei abituato a decidere in fretta…
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  A valutare ROI, costi-benefici, investimenti. Ecco i numeri:
                </p>
                <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  <li>
                    • <span className="text-foreground">Investimento:</span> 987€ (Early Bird) — con doppio sconto:{" "}
                    <span className="text-cyan">789€</span>
                  </li>
                  <li>
                    • <span className="text-foreground">Tempo:</span> 13 settimane (3h/settimana)
                  </li>
                  <li>
                    • <span className="text-foreground">ROI:</span> Chiarezza mentale, gestione stress, equilibrio
                    vita-lavoro, presenza mentale, senso della vita…
                  </li>
                </ul>
                <p className="text-cyan font-display text-sm md:text-base">Ma il vero ROI? Ritrovare te stesso.</p>
                <p className="text-xs md:text-sm text-foreground mt-1.5 md:mt-2">E quello non ha prezzo.</p>

                <div className="mt-4 md:mt-6 text-center">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                    <a href="mailto:gabriele.lucesole@gmail.com">
                      <Mail className="h-5 w-5" />
                      Fissa Sessione GRATIS
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-background border-t border-border/50">
          <div className="container-narrow">
            <div className="text-center text-xs text-muted-foreground space-y-4">
              <p>© 2026 Gabriele Lucesole. Tutti i diritti riservati.</p>
              <div className="max-w-3xl mx-auto text-left">
                <p className="font-medium mb-2">Disclaimer legale</p>
                <p>
                  Il Metodo EFO® è un per-corso di professional coaching e crescita personale. Non è un trattamento
                  sanitario e non sostituisce diagnosi, terapie mediche o psicoterapie. Per condizioni cliniche (fisiche
                  o psichiche) è necessario rivolgersi al proprio medico o a uno specialista qualificato. In caso di
                  emergenza, contatta immediatamente i numeri di soccorso o i servizi competenti.
                </p>
                <p className="mt-2">
                  I risultati ottenuti dai partecipanti possono variare in base all'impegno individuale. Le
                  testimonianze e gli esempi presenti sul sito rappresentano esperienze personali e non costituiscono
                  garanzia di risultato. Il supporto via WhatsApp o altri canali è di natura dialogica e non rappresenta
                  un servizio di emergenza o intervento psicologico.
                </p>
                <p className="mt-2">
                  Le informazioni contenute nel presente sito e nei materiali del Metodo EFO® hanno finalità
                  divulgative e formative. Non costituiscono in alcun modo consulenza medica o psicologica. Prezzi,
                  disponibilità e contenuti possono variare senza preavviso. EFO® è marchio registrato; ogni uso non
                  autorizzato è vietato.
                </p>
              </div>
              <p className="italic mt-4">"Solo la verità che edifica è verità per te." — Søren Kierkegaard</p>
            </div>
          </div>
        </section>
      </Layout>
    </>;
};
export default MetodoEFO;
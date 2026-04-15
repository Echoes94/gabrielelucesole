import { Search, Users, Star, Compass, Flame } from "lucide-react";
import logoPul from "@/assets/logo-pul.png";
import logoIcf from "@/assets/logo-icf.webp";
import logoPenn from "@/assets/logo-penn.webp";
import logoMinistero from "@/assets/logo-ministero.webp";

export const forYouIf = [{
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

export const notForYouIf = [
  "Cerchi soluzioni magiche immediate senza impegno personale",
  "Vuoi solo ottimizzare la produttività senza toccare la tua interiorità",
  "Non sei disposto a dedicare 20-30 min/giorno alla tua trasformazione",
  "Cerchi qualcuno che ti dica cosa fare invece di aiutarti a scoprirlo",
  "Hai bisogno di supporto clinico per disturbi psichiatrici (in quel caso ti indirizzo allo specialista giusto)"
];

export const problems = [{
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

export const roadmapLevels = [{
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

export const maestriaLevels = [{
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

export const inclusions = [
  "Sessioni live di Professional Coaching 1-to-1 (30+ min ciascuna, personalizzate per il tuo profilo)",
  "Supporto WhatsApp 24/7 per 3 mesi — Domande, dubbi, perplessità? Scrivi quando vuoi. Rispondo io, personalmente, subito.",
  "Training Bambino Interiore",
  "Training Personalità Adulta",
  "Training Futuro & Visione",
  "Mindfulness somatica profonda",
  "Tecniche contemplative personalizzate",
  "Visualizzazioni guidate registrate",
  'Meditazione segreta "Al di là del Tempo nello Spazio"',
  "Self Authoring Suite di Jordan Peterson (Past-Present-Future)",
  "Guide scientifiche dettagliate per ogni fase del percorso",
  "Roadmap di lavoro ed esercizi pratici",
  "Registrazioni per pratica autonoma"
];

export const bonuses = [
  'Libro "Felicità Esistenzialista ORA"',
  'Guida "Creazione della Pietra Filosofale"',
  "Tecniche segrete di trasformazione (EMDR, metodi testati a Harvard)",
  "Tecniche meditative (Esercizi di ricarica, Radicamento, meditazione della montagna, ecc.)",
  "Stazione di Servizio Platonica (incarna idee platoniche)",
  "Scrittura Creativa Archetipica (avvicinati alla vita dei sogni)",
  'Su richiesta: Saggio accademico "La Ginnastica del Desiderio"'
];

export const comingSoon = [{
  name: "Saggio \"Essere Felici ORA: L'Arte Suprema dell'Alterità\"",
  value: "98€"
}, {
  name: "Video Corso Metodo EFO completo",
  value: "987€"
}, {
  name: "Aggiornamenti lifetime del Metodo EFO",
  value: "incalcolabile"
}];

export const faqs = [{
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

export const credentials = [{
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

export const credentialsList = [
  "🎓 Laurea Magistrale in Scienze Religiose (Pontificia Università Lateranense)",
  "🏆 Master Universitario Coaching Umanistico e PNL (1° Livello)",
  "🌍 Diploma Coach Professionista ICF (International Coaching Federation)",
  "🧠 Psicologia Positiva (University of Pennsylvania — Ivy League)",
  "🧘 Facilitatore Mindfulness (50 crediti ECM — Ministero della Salute)",
  "🌀 Master in Ipnosi"
];

export const testimonials = [{
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

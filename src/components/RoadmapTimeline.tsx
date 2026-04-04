import { useState, useRef, useEffect } from "react";
import { Unlock, Lock, Gift, Sparkles } from "lucide-react";
import AnimatedSectionLite from "@/components/AnimatedSectionLite";

const AnimatedSection = AnimatedSectionLite;

// Dimension color config
type DimensionKey = "start" | "1D" | "2D" | "3D";

const dimensionColors: Record<DimensionKey, {
  accent: string;
  accentLight: string;
  bg: string;
  border: string;
  dot: string;
  badge: string;
  badgeBorder: string;
  bulletBg: string;
  progressSegment: string;
}> = {
  start: {
    accent: "text-cyan",
    accentLight: "text-cyan-light",
    bg: "bg-cyan/10",
    border: "border-cyan/30",
    dot: "bg-cyan",
    badge: "bg-cyan/10",
    badgeBorder: "border-cyan/20",
    bulletBg: "bg-cyan",
    progressSegment: "bg-cyan",
  },
  "1D": {
    accent: "text-cyan",
    accentLight: "text-cyan-light",
    bg: "bg-cyan/10",
    border: "border-cyan/30",
    dot: "bg-cyan",
    badge: "bg-cyan/10",
    badgeBorder: "border-cyan/20",
    bulletBg: "bg-cyan",
    progressSegment: "bg-cyan",
  },
  "2D": {
    accent: "text-violet",
    accentLight: "text-violet-light",
    bg: "bg-violet/10",
    border: "border-violet/30",
    dot: "bg-violet",
    badge: "bg-violet/10",
    badgeBorder: "border-violet/20",
    bulletBg: "bg-violet",
    progressSegment: "bg-violet",
  },
  "3D": {
    accent: "text-amber-400",
    accentLight: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
    badge: "bg-amber-500/10",
    badgeBorder: "border-amber-500/20",
    bulletBg: "bg-amber-400",
    progressSegment: "bg-amber-400",
  },
};

interface RoadmapLevel {
  level: string;
  title: string;
  subtitle: string;
  week: string;
  unlocked: boolean;
  content: string[];
  badge: string;
  time: string;
  achievement?: string;
  skill?: string;
  dimension?: string;
  isMaestria?: boolean;
}

const allLevels: RoadmapLevel[] = [
  {
    level: "0",
    title: "Punto di Partenza",
    subtitle: "Sessione Professional Coaching Gratuita",
    week: "Inizia",
    unlocked: true,
    content: [
      "Analizziamo la tua situazione attuale (stress, vuoto esistenziale, ricerca di senso)",
      'Identifichiamo il tuo "gap trasformativo"',
      "Ti spiego come funziona il Metodo EFO® e se è adatto al tuo caso specifico",
      "Decidi cosa fare della tua vita",
    ],
    badge: "Analisi personalizzata del tuo gap trasformativo",
    time: "⏱️ 30+ min",
  },
  {
    level: "1",
    title: "Fondamenta",
    subtitle: "Installazione Pratica Mindfulness",
    week: "Settimana 1",
    unlocked: true,
    content: [
      "Sessione 1-to-1 per avviare la pratica mindfulness (10+ min/giorno)",
      "Prime transizioni tra stati di coscienza",
      "Sperimentazione dei primi benefici (riduzione stress, maggiore focus)",
    ],
    badge: 'Libro "Felicità Esistenzialista ORA"',
    time: "⏱️ 10 min/giorno",
    achievement: "Primo Passo Consapevole",
  },
  {
    level: "2",
    title: "Cura",
    subtitle: "Training Bambino Interiore",
    week: "Settimane 2-4",
    unlocked: false,
    content: [
      "Tecniche di reparenting",
      "Integrazione degli archetipi nella coscienza",
      "Training guidato per liberare il bambino interiore",
    ],
    badge: "Past Authoring + Pratiche contemplative + Guida completa + Assistenza WhatsApp 24/7",
    time: "⏱️ 15 min/giorno",
    achievement: "Cura del Bambino Interiore",
    skill: "Integrazione Archetipi",
    dimension: "1D - TRASFORMA IL TUO PASSATO",
  },
  {
    level: "3",
    title: "Sovranità",
    subtitle: "Training Personalità Adulta",
    week: "Settimane 5-10",
    unlocked: false,
    content: [
      'Training guidato per sbloccare i "poteri" dell\'adulto',
      "Identificazione con l'eroe adulto dentro di te",
      "Accesso allo stato di flow avanzato",
    ],
    badge: "Formula della Trasformazione + Nuove pratiche contemplative + Assistenza 24/7",
    time: "⏱️ 20 min/giorno",
    achievement: "Padrone di Te Stesso",
    skill: "Risposta Consapevole vs Reazione",
    dimension: "1D - TRASFORMA IL TUO PASSATO",
  },
  {
    level: "4",
    title: "Visione",
    subtitle: "Training Apertura al Futuro",
    week: "Settimane 11-13",
    unlocked: false,
    content: [
      "Training guidato focus futuro con visualizzazioni strategiche (non fantasie, ma nuove mappe neurali)",
      "Esplorazione di nuove possibilità oltre la monotonia",
      "Identificazione di valori autentici e allineamento con azioni quotidiane",
    ],
    badge: "Future Authoring + Nuove pratiche contemplative + Assistenza 24/7",
    time: "⏱️ 20 min/giorno",
    achievement: "Architetto del Destino",
    skill: "Allineamento Valori-Azioni",
    dimension: "1D - TRASFORMA IL TUO PASSATO",
  },
  {
    level: "5",
    title: "Presenza Radicale",
    subtitle: "Al di là del tempo nello spazio",
    week: "Maestria",
    unlocked: false,
    isMaestria: true,
    content: [
      'Tecnica meditativa esclusiva per accesso immediato al "Potere di Adesso"',
      "Mindfulness somatica profonda (body scan evoluto)",
      "Capacità di vivere nell'eterno presente, oltre il tempo lineare",
      "Coaching ipnotico 1-to-1 per automatizzare la presenza mentale",
    ],
    badge:
      'Guida "Creazione della Pietra Filosofale" + Present Authoring + Tecniche segrete (EMDR, metodi Harvard) + Nuove tecniche meditative',
    time: "",
    dimension: "2D - VIVI PIENAMENTE IL PRESENTE",
  },
  {
    level: "6",
    title: "Attrazione Consapevole",
    subtitle:
      '"Tra lo stimolo e la risposta c\'è uno spazio. In quello spazio risiede il potere di scegliere la nostra risposta. Nella nostra risposta c\'è la nostra crescita e libertà." – Viktor Frankl',
    week: "Maestria",
    unlocked: false,
    isMaestria: true,
    content: [
      "Professional Coaching 1-to-1: Ruota della vita UPGRADED, Individuazione valori guida + trasformazione dello stress, Goal-setting avanzato",
      "Training guidato futuro",
      "Allineamento valori, azioni e obiettivi",
      "Micro-commitments quotidiani (regola dell'1% → dal circolo vizioso al circolo virtuoso → vizio della virtù)",
    ],
    badge:
      'Stazione di Servizio Platonica + Scrittura Creativa Archetipica + Su richiesta: Saggio "La Ginnastica del Desiderio"',
    time: "",
    dimension: "3D - ATTRAI IL FUTURO DESIDERATO",
  },
];

function getDimensionKey(level: RoadmapLevel): DimensionKey {
  if (!level.dimension) return "start";
  if (level.dimension.startsWith("1D")) return "1D";
  if (level.dimension.startsWith("2D")) return "2D";
  if (level.dimension.startsWith("3D")) return "3D";
  return "start";
}

const RoadmapTimeline = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const levelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll to update active level
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;
      levelRefs.current.forEach((ref, i) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const top = rect.top + window.scrollY + rect.height / 2;
          const dist = Math.abs(scrollY - top);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        }
      });
      setActiveLevel(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLevel = (index: number) => {
    const ref = levelRefs.current[index];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const progress = ((activeLevel + 1) / allLevels.length) * 100;

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
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

        {/* Interactive Progress Bar */}
        <AnimatedSection className="max-w-3xl mx-auto mb-10 md:mb-16" scale>
          <div className="glass rounded-xl p-4 md:p-6 border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs md:text-sm text-muted-foreground font-medium">IL TUO PROGRESSO</p>
              <span className="text-xs text-cyan font-medium">
                LV {activeLevel} / {allLevels.length - 1}
              </span>
            </div>
            {/* Clickable level dots */}
            <div className="relative mb-3">
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-cyan via-violet to-amber-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* Level dots on the progress bar */}
              <div className="absolute inset-0 flex items-center">
                {allLevels.map((level, i) => {
                  const dimKey = getDimensionKey(level);
                  const colors = dimensionColors[dimKey];
                  const leftPercent = (i / (allLevels.length - 1)) * 100;
                  return (
                    <button
                      key={i}
                      onClick={() => scrollToLevel(i)}
                      className={`absolute w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-background transition-all duration-300 hover:scale-125 cursor-pointer ${
                        i <= activeLevel ? colors.dot : "bg-muted/50"
                      } ${i === activeLevel ? "scale-125 ring-2 ring-offset-1 ring-offset-background ring-cyan/50" : ""}`}
                      style={{ left: `${leftPercent}%`, transform: `translateX(-50%) ${i === activeLevel ? "scale(1.25)" : ""}` }}
                      aria-label={`Vai al livello ${level.level}`}
                    >
                      <span className="sr-only">LV {level.level}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Current level label */}
            <p className="text-xs text-muted-foreground">
              Livello {activeLevel} →{" "}
              <span className="text-foreground">{allLevels[activeLevel]?.title}</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {allLevels.map((level, index) => {
            const dimKey = getDimensionKey(level);
            const colors = dimensionColors[dimKey];
            const isEven = index % 2 === 0;
            const isActive = index === activeLevel;

            return (
              <div
                key={index}
                ref={(el) => { levelRefs.current[index] = el; }}
                className="relative mb-8 md:mb-12 last:mb-0"
              >
                <AnimatedSection
                  delay={index * 0.06}
                  direction={isEven ? "left" : "right"}
                  className={`
                    md:grid md:grid-cols-2 md:gap-10
                    ${isEven ? "" : "md:direction-rtl"}
                  `}
                >
                  {/* Timeline dot - mobile: left aligned, desktop: center */}
                  <div
                    className={`absolute left-6 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full z-10 transition-all duration-500
                    ${isActive ? `${colors.dot} scale-150 shadow-lg` : index <= activeLevel ? colors.dot : "bg-muted/50"}
                    md:-translate-x-1/2 -translate-x-1/2`}
                    style={{ top: "1.5rem" }}
                  />

                  {/* Card */}
                  <div
                    className={`
                      ml-14 md:ml-0
                      ${isEven ? "md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"}
                    `}
                  >
                    <div
                      className={`rounded-xl p-4 md:p-6 transition-all duration-500
                        ${level.isMaestria
                          ? `bg-gradient-to-br from-amber-950/20 to-card/80 ${colors.border}`
                          : isActive
                            ? `bg-gradient-card ${colors.border} shadow-lg`
                            : "bg-card/40 border-border/20"
                        } border`}
                    >
                      {/* Dimension badge */}
                      {level.dimension && (
                        <div className={`mb-3 px-2.5 py-1 rounded-full ${colors.badge} border ${colors.badgeBorder} inline-block`}>
                          <span className={`text-[10px] md:text-xs font-medium ${colors.accent}`}>
                            {level.dimension}
                          </span>
                        </div>
                      )}

                      {/* Level header */}
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 ${
                            level.isMaestria
                              ? "bg-amber-500/20"
                              : level.unlocked
                                ? `${colors.bg}`
                                : "bg-muted/20"
                          }`}
                        >
                          {level.isMaestria ? (
                            <Sparkles className={`h-4 w-4 md:h-5 md:w-5 ${colors.accent}`} />
                          ) : level.unlocked ? (
                            <Unlock className={`h-4 w-4 md:h-5 md:w-5 ${colors.accent}`} />
                          ) : (
                            <Lock className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className={isEven ? "md:text-right" : ""}>
                          <span className={`font-display text-xl md:text-2xl ${colors.accent}`}>
                            LV {level.level}
                          </span>
                          <span className="text-xs text-muted-foreground block">{level.week}</span>
                        </div>
                      </div>

                      {/* Title & subtitle */}
                      <h3 className={`font-display text-lg md:text-xl mb-1 ${level.isMaestria ? colors.accent : ""}`}>
                        {level.isMaestria ? "MAESTRIA" : level.title}
                      </h3>
                      {level.isMaestria && (
                        <p className="text-xs md:text-sm text-foreground mb-1">{level.title}</p>
                      )}
                      <p className={`text-xs md:text-sm mb-3 md:mb-4 ${colors.accent}`}>
                        {level.subtitle}
                      </p>

                      {/* Content list */}
                      <p className="text-[10px] md:text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                        Cosa succede/faremo:
                      </p>
                      <ul className={`space-y-1.5 md:space-y-2 mb-3 md:mb-4 ${isEven ? "md:text-left" : ""}`}>
                        {level.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs text-muted-foreground">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bulletBg} mt-1.5 shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Footer: badge, time, skills */}
                      <div className={`space-y-1.5 md:space-y-2 pt-3 md:pt-4 border-t border-border/30 ${isEven ? "md:text-left" : ""}`}>
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <Gift className={`h-3 w-3 md:h-4 md:w-4 shrink-0 mt-0.5 ${colors.accent}`} />
                          <span className="text-xs text-muted-foreground">{level.badge}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                          {level.time && <span className={`text-xs ${colors.accent}`}>{level.time}</span>}
                          {level.skill && (
                            <span className="text-xs text-emerald-400">💪🏻 Nuova Abilità: "{level.skill}"</span>
                          )}
                          {level.achievement && (
                            <span className={`text-xs ${colors.accentLight}`}>🎖️ "{level.achievement}"</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for opposite side on desktop */}
                  {isEven ? <div className="hidden md:block" /> : <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                </AnimatedSection>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <AnimatedSection className="text-center mt-10 md:mt-16" blur scale>
          <p className="font-display text-base md:text-lg text-foreground">
            Non è un corso. Non è un percorso qualsiasi. È una{" "}
            <span className="text-cyan">quest di trasformazione esistenziale.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RoadmapTimeline;

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Gift, Lock, Unlock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RoadmapLevel {
  level: string;
  title: string;
  subtitle: string;
  week?: string;
  unlocked?: boolean;
  content: string[];
  badge: string;
  time?: string;
  achievement?: string;
  skill?: string;
  dimension?: string;
  isMaestria?: boolean;
}

interface RoadmapCarouselProps {
  levels: RoadmapLevel[];
}

const RoadmapCarousel: React.FC<RoadmapCarouselProps> = ({ levels }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: false,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const progress = ((currentIndex + 1) / levels.length) * 100;
  const current = levels[currentIndex];
  const isMaestriaProgress = currentIndex >= 5;

  const levelLabels = [
    "Inizia il Viaggio",
    "Fondamenta della Pratica",
    "Cura del Passato",
    "Padronanza di Sé",
    "Visione del Futuro",
    "Presenza Radicale",
    "Attrazione Consapevole",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {levels.map((level, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "transition-all duration-300 rounded-full",
              i === currentIndex
                ? level.isMaestria
                  ? "w-8 h-3 bg-amber-400"
                  : "w-8 h-3 bg-cyan"
                : i < currentIndex
                  ? level.isMaestria
                    ? "w-3 h-3 bg-amber-400/50"
                    : "w-3 h-3 bg-cyan/50"
                  : "w-3 h-3 bg-muted/40"
            )}
            aria-label={`Vai al livello ${level.level}`}
          />
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Nav arrows - desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={cn(
            "absolute -left-14 top-1/2 -translate-y-1/2 z-10 hidden md:flex",
            "h-10 w-10 rounded-full border border-border/50 hover:border-cyan/40 hover:bg-card/80",
            "disabled:opacity-20"
          )}
          aria-label="Livello precedente"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={cn(
            "absolute -right-14 top-1/2 -translate-y-1/2 z-10 hidden md:flex",
            "h-10 w-10 rounded-full border border-border/50 hover:border-cyan/40 hover:bg-card/80",
            "disabled:opacity-20"
          )}
          aria-label="Livello successivo"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>

        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
          <div className="flex">
            {levels.map((level, index) => {
              const isMaestria = level.isMaestria;
              const accentColor = isMaestria ? "amber" : "cyan";

              return (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full px-1"
                >
                  <div
                    className={cn(
                      "rounded-2xl p-5 md:p-8 transition-all duration-500",
                      isMaestria
                        ? "bg-gradient-to-br from-amber-950/30 to-card border border-amber-500/30"
                        : level.unlocked
                          ? "bg-gradient-card border border-cyan/30"
                          : "bg-card/60 border border-border/40"
                    )}
                    style={{
                      boxShadow: index === currentIndex
                        ? isMaestria
                          ? "0 0 40px hsl(38 92% 50% / 0.1)"
                          : "0 0 40px hsl(190 80% 65% / 0.1)"
                        : "none",
                    }}
                  >
                    {/* Dimension badge */}
                    {level.dimension && (
                      <div
                        className={cn(
                          "mb-4 px-3 py-1 rounded-full inline-block text-xs font-medium",
                          isMaestria
                            ? "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                            : "bg-cyan/10 border border-cyan/20 text-cyan"
                        )}
                      >
                        {level.dimension}
                      </div>
                    )}

                    {/* Level + lock + week row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-11 h-11 rounded-full flex items-center justify-center",
                            isMaestria
                              ? "bg-amber-500/20"
                              : level.unlocked
                                ? "bg-cyan/20"
                                : "bg-muted/20"
                          )}
                        >
                          {isMaestria ? (
                            <Sparkles className="h-5 w-5 text-amber-400" />
                          ) : level.unlocked ? (
                            <Unlock className="h-5 w-5 text-cyan" />
                          ) : (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "font-display text-2xl",
                            isMaestria
                              ? "text-amber-400"
                              : level.unlocked
                                ? "text-cyan"
                                : "text-muted-foreground"
                          )}
                        >
                          LV {level.level}
                        </span>
                      </div>
                      {level.week && (
                        <span className="text-xs text-muted-foreground bg-muted/20 px-2.5 py-1 rounded-full">
                          {level.week}
                        </span>
                      )}
                    </div>

                    {/* Title & subtitle */}
                    {isMaestria && (
                      <h3 className="font-display text-lg text-amber-400 mb-1">MAESTRIA</h3>
                    )}
                    <h3
                      className={cn(
                        "font-display text-xl md:text-2xl mb-1",
                        isMaestria && "text-foreground"
                      )}
                    >
                      {level.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm mb-5",
                        isMaestria
                          ? "text-muted-foreground italic"
                          : "text-cyan"
                      )}
                    >
                      {level.subtitle}
                    </p>

                    {/* Content list */}
                    {!isMaestria && (
                      <p className="text-xs text-muted-foreground mb-2">
                        Cosa succede/faremo:
                      </p>
                    )}
                    <ul className="space-y-2 mb-5">
                      {level.content.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className={cn(
                              "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                              isMaestria ? "bg-amber-400" : "bg-cyan"
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div
                      className={cn(
                        "space-y-2 pt-4 border-t",
                        isMaestria ? "border-amber-500/30" : "border-border/50"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        <Gift
                          className={cn(
                            "h-4 w-4 shrink-0 mt-0.5",
                            isMaestria ? "text-amber-400" : "text-cyan"
                          )}
                        />
                        <span className="text-xs text-muted-foreground">
                          {level.badge}
                        </span>
                      </div>
                      {level.time && (
                        <span
                          className={cn(
                            "text-xs block",
                            isMaestria ? "text-amber-400" : "text-cyan"
                          )}
                        >
                          {level.time}
                        </span>
                      )}
                      {level.skill && (
                        <span className="text-xs text-emerald-400 block">
                          💪🏻 Nuova Abilità: "{level.skill}"
                        </span>
                      )}
                      {level.achievement && (
                        <span className="text-xs text-amber-400 block">
                          🎖️ "{level.achievement}"
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation label */}
      <div className="flex items-center justify-between mt-5 px-2">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors md:hidden flex items-center gap-1"
        >
          <ArrowLeft className="h-3 w-3" /> Precedente
        </button>
        <p className="text-xs text-muted-foreground text-center flex-1">
          LV {current?.level} di {levels.length - 1} —{" "}
          <span className={isMaestriaProgress ? "text-amber-400" : "text-cyan"}>
            {current?.title}
          </span>
        </p>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors md:hidden flex items-center gap-1"
        >
          Successivo <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="glass rounded-xl p-4 md:p-6 border border-cyan/20 mt-6">
        <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
          IL TUO PROGRESSO
        </p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 h-3 md:h-4 bg-muted/30 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progress}%`,
                background: isMaestriaProgress
                  ? "linear-gradient(90deg, hsl(190 85% 55%), hsl(38 92% 50%))"
                  : "linear-gradient(90deg, hsl(190 85% 55%), hsl(220 90% 56%))",
              }}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Livello {current?.level} →{" "}
          <span className={isMaestriaProgress ? "text-amber-400" : "text-cyan"}>
            {levelLabels[currentIndex] || current?.title}
          </span>
        </p>
        <p className="text-xs text-muted-foreground mt-1.5 md:mt-2">
          Ogni settimana che completi, sali di livello. Ogni pratica che esegui,
          accumuli esperienza. Ogni insight che integri, sblocchi nuove
          possibilità.
        </p>
      </div>
    </div>
  );
};

export default RoadmapCarousel;

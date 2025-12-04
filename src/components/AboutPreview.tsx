import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gabrielePhoto from "@/assets/gabriele-photo.webp";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/5 to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-cyan/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-cyan/10 rounded-3xl" />
              
              {/* Main image */}
              <div className="relative h-full rounded-2xl overflow-hidden glow-cyan">
                <img
                  src={gabrielePhoto}
                  alt="Gabriele Lucesole - Coach Professionista"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 glass rounded-xl px-4 py-3">
                <p className="font-display text-lg text-cyan">13+ anni</p>
                <p className="text-xs text-muted-foreground">di ricerca sul campo</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
              Non sei solo
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Ti capisco,<br />
              <span className="text-gradient">ci sono passato anch'io</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-serif text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Piacere, Gabriele Lucesole – Coach Professionista.</strong>
              </p>
              <p className="font-serif text-muted-foreground leading-relaxed">
                Soffrivo per il male che vedevo nel mondo. Mi sentivo solo e senza punti di riferimento. 
                Ho fatto terra bruciata intorno a me e sono andato all in per cercare il senso della vita.
              </p>
              <p className="font-serif text-muted-foreground leading-relaxed">
                Dopo 13 anni di ricerche sul campo, tutti i pezzi del puzzle si sono uniti nel 
                <span className="text-cyan font-medium"> Metodo EFO – Essere Felici Ora.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <Link to="/chi-sono">
                  Leggi la mia storia
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/metodo-efo">
                  Scopri il Metodo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background image */}
      <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`,
      y: backgroundY
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-cyan/30 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0]
      }} transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "easeInOut"
      }} />)}

        {/* Gradient orbs with parallax */}
        <motion.div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" animate={{
        y: [0, 30, 0],
        x: [0, -20, 0],
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--cyan) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      </div>

      <motion.div className="container-narrow relative z-10 text-center" style={{
      y: textY,
      opacity
    }}>
        {/* Eyebrow with stagger */}
        <motion.div initial={{
        opacity: 0,
        y: 30,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.1,
        type: "spring",
        stiffness: 100
      }}>
          <span className="inline-block px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-cyan border border-cyan/30 rounded-full mb-8">
            Con il Metodo EFO®
          </span>
        </motion.div>

        {/* Main headline with character stagger */}
        <motion.h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <motion.span initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring"
        }} className="block">
            Dalla crisi esistenziale
          </motion.span>
          <motion.span className="text-gradient block" initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5,
          type: "spring"
        }}>
            alla tua Autorealizzazione
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed" initial={{
        opacity: 0,
        y: 30,
        filter: "blur(10px)"
      }} animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }}>
          Supera l'inquietudine con un nuovo approccio integrato tra antica saggezza e neuroscienze moderne
        </motion.p>

        

        {/* CTA buttons with hover effects */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }}>
          <motion.div whileHover={{
          scale: 1.05,
          y: -3
        }} whileTap={{
          scale: 0.98
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:gabriele.lucesole@gmail.com">
                <Mail className="h-5 w-5" />
                Fissa Sessione Gratuita
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{
          scale: 1.05,
          y: -3
        }} whileTap={{
          scale: 0.98
        }}>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#problema">
                Riempi il Vuoto
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators with stagger */}
        <motion.div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm text-muted-foreground" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.1
      }}>
          {[{
          text: "13+ anni di ricerca",
          delay: 0
        }, {
          text: "Coach ICF Certificato",
          delay: 0.3
        }, {
          text: "526 libri letti",
          delay: 0.6
        }].map((item, index) => <motion.div key={index} className="flex items-center gap-2" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 1.2 + item.delay,
          duration: 0.5
        }}>
              <motion.span className="w-2 h-2 rounded-full bg-cyan" animate={{
            boxShadow: ["0 0 10px hsl(197 65% 70% / 0.3)", "0 0 25px hsl(197 65% 70% / 0.8)", "0 0 10px hsl(197 65% 70% / 0.3)"],
            scale: [1, 1.3, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            delay: item.delay
          }} />
              <span>{item.text}</span>
            </motion.div>)}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
      y: [0, 15, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        <motion.div animate={{
        opacity: [0.3, 1, 0.3]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <ArrowDown className="h-6 w-6 text-cyan" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;
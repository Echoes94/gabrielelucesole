import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container-wide py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="L.G. Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
              <div>
                <span className="font-display text-base sm:text-lg text-foreground block">L.G.</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">Coach Professionista</span>
              </div>
            </Link>
            <p className="font-serif text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Autorealizzazione e felicità esistenzialista attraverso il Metodo EFO®
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-sans text-xs sm:text-sm font-medium text-foreground uppercase tracking-wider">Navigazione</h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Home
              </Link>
              <Link to="/chi-sono" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Chi Sono
              </Link>
              <Link to="/metodo-efo" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Metodo EFO®
              </Link>
              <Link to="/blog" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-sans text-xs sm:text-sm font-medium text-foreground uppercase tracking-wider">Contatti</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="mailto:gabriele.lucesole@gmail.com"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                gabriele.lucesole@gmail.com
              </a>
              <a
                href="https://instagram.com/gabrielelucesole"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                @gabrielelucesole
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Gabriele Lucesole. Tutti i diritti riservati.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Creato per i cercatori di senso
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo-lg.png";
const Footer = () => {
  return <footer className="bg-card/30 border-t border-border/50" role="contentinfo" aria-label="Footer del sito">
      <div className="container-wide py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 rounded-md w-fit" aria-label="Vai alla homepage">
              <img src={logo} alt="" aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10" />
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
            <h4 className="font-sans text-xs sm:text-sm font-medium text-foreground uppercase tracking-wider" id="footer-nav-heading">Navigazione</h4>
            <nav className="flex flex-col gap-2 sm:gap-3" aria-labelledby="footer-nav-heading">
              <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-sm w-fit">
                Home
              </Link>
              <Link to="/chi-sono" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-sm w-fit">
                Chi Sono
              </Link>
              <Link to="/metodo-efo" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-sm w-fit">
                Metodo EFO®
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-sans text-xs sm:text-sm font-medium text-foreground uppercase tracking-wider" id="footer-contact-heading">Contatti</h4>
            <address className="flex flex-col gap-2 sm:gap-3 not-italic" aria-labelledby="footer-contact-heading">
              <a href="mailto:gabriele.lucesole@gmail.com" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-sm w-fit" aria-label="Invia email a gabriele.lucesole@gmail.com">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                gabriele.lucesole@gmail.com
              </a>
              <a href="https://instagram.com/gabrielelucesole" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-sm w-fit" aria-label="Seguici su Instagram @gabrielelucesole (apre in nuova finestra)">
                <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                @gabrielelucesole
              </a>
              <a href="https://linkedin.com/in/gabrielelucesole" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-sm w-fit" aria-label="Connettiti su LinkedIn (apre in nuova finestra)">
                <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </address>
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
    </footer>;
};
export default Footer;
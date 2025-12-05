import { Link } from "react-router-dom";
import { Instagram, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary to-background border-t border-border/30">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="L.G. Logo" className="h-12 w-12" />
              <div>
                <span className="font-display text-xl text-foreground block">L.G.</span>
                <span className="text-xs text-muted-foreground">Coach Professionista</span>
              </div>
            </Link>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed max-w-xs">
              Autorealizzazione e felicità esistenzialista attraverso il Metodo EFO®
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Navigazione</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                Home
              </Link>
              <Link to="/chi-sono" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                Chi Sono
              </Link>
              <Link to="/metodo-efo" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                Metodo EFO®
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Contatti</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:gabriele.lucesole@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors"
              >
                <Mail className="h-4 w-4" />
                gabriele.lucesole@gmail.com
              </a>
              <a
                href="https://instagram.com/gabrielelucesole"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @gabrielelucesole
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gabriele Lucesole. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Creato per i cercatori di senso <Heart className="h-3 w-3 text-cyan" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

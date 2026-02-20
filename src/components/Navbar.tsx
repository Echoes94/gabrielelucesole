import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-lg.png";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chi-sono", label: "Chi Sono" },
    { href: "/metodo-efo", label: "Metodo EFO" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" role="banner">
      <nav className="container-wide flex items-center justify-between h-14 sm:h-16 md:h-18" aria-label="Navigazione principale">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 sm:gap-3 group rounded-md"
          aria-label="Vai alla homepage - Gabriele Lucesole Coach"
        >
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-base sm:text-lg text-foreground">
            L.G.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10" role="navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative font-sans text-sm tracking-wide transition-colors duration-300 rounded-sm px-1 py-0.5 ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-cyan"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          <ThemeToggle />
          <a
            href="https://instagram.com/gabrielelucesole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/gabrielelucesole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href="mailto:gabriele.lucesole@gmail.com">
              <Mail className="h-4 w-4" />
              Contattami
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="container-wide py-4 sm:py-6 flex flex-col gap-3 sm:gap-5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-sm sm:text-base block py-1 rounded-sm transition-colors duration-300 ${
                      isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-5 border-t border-border/50">
                <ThemeToggle />
                <a
                  href="https://instagram.com/gabrielelucesole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-md p-1"
                  aria-label="Seguici su Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/gabrielelucesole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-md p-1"
                  aria-label="Seguici su LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <Button variant="hero" size="sm" className="flex-1 text-xs sm:text-sm" asChild>
                  <a href="mailto:gabriele.lucesole@gmail.com" aria-label="Invia email a Gabriele">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contattami
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

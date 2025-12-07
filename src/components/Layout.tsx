import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Skip to content link for keyboard users */}
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={0}
      >
        Vai al contenuto principale
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-16 md:pt-20" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

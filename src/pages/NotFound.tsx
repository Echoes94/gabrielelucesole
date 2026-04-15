import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Pagina non trovata | Gabriele Lucesole</title>
        <meta name="description" content="La pagina che stai cercando non esiste." />
      </Helmet>
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center container-narrow">
            <h1 className="mb-4 font-display text-6xl md:text-8xl text-cyan">404</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              La pagina che stai cercando non esiste.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors duration-300 underline underline-offset-4"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;

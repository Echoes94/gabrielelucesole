import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AboutPreview from "@/components/AboutPreview";
import MethodPreview from "@/components/MethodPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gabriele Lucesole | Coach Professionista - Metodo EFO®</title>
        <meta 
          name="description" 
          content="Dalla crisi esistenziale all'autorealizzazione. Professional coaching con il Metodo EFO®: antica saggezza e neuroscienze per trasformare la tua vita." 
        />
        <meta name="keywords" content="life coaching, professional coaching, metodo EFO, autorealizzazione, mindfulness, Gabriele Lucesole" />
        <link rel="canonical" href="https://gabrielelucesole.com" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <ProblemSection />
        <AboutPreview />
        <MethodPreview />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

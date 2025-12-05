import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { blogPosts, getAllCategories } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | Gabriele Lucesole - Articoli su Crescita Personale</title>
        <meta 
          name="description" 
          content="Articoli su crescita personale, mindfulness, coaching e autorealizzazione. Contenuti di valore per chi cerca profondità e trasformazione." 
        />
        <link rel="canonical" href="https://gabrielelucesole.com/blog" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative">
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center mb-10 md:mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-sans uppercase tracking-[0.2em] text-cyan/80 border border-cyan/20 rounded-full mb-6">
                Blog
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
                Riflessioni per <span className="text-gradient">cercatori di senso</span>
              </h1>
              <p className="font-serif text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Articoli su crescita personale, mindfulness e trasformazione interiore. 
                Senza fuffa, con profondità.
              </p>
            </AnimatedSection>

            {/* Categories */}
            <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 md:gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  !selectedCategory 
                    ? 'bg-cyan text-background' 
                    : 'bg-card/50 border border-border/50 text-muted-foreground hover:border-cyan/30 hover:text-foreground'
                }`}
              >
                Tutti
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-cyan text-background' 
                      : 'bg-card/50 border border-border/50 text-muted-foreground hover:border-cyan/30 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && !selectedCategory && (
          <section className="py-8 md:py-12 bg-card/30">
            <div className="container-wide px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <Link to={`/blog/${featuredPost.slug}`} className="block group">
                  <div className="border border-border/30 rounded-2xl p-6 md:p-10 lg:p-12 bg-card/50 hover:-translate-y-1 transition-all duration-500">
                    <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-center">
                      <div className="lg:col-span-3">
                        <span className="inline-block px-3 py-1 text-xs font-sans uppercase tracking-wider text-cyan bg-cyan/10 rounded-full mb-4">
                          In evidenza
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground group-hover:text-cyan transition-colors duration-300">
                          {featuredPost.title}
                        </h2>
                        <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(featuredPost.publishedAt)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime} min
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-cyan font-medium group-hover:gap-3 transition-all duration-300">
                          Leggi l'articolo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="hidden lg:block lg:col-span-2">
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan/10 to-accent/5 border border-border/20 flex items-center justify-center">
                          <span className="font-display text-7xl text-cyan/20">{featuredPost.category.charAt(0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {regularPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.05}>
                  <Link to={`/blog/${post.slug}`} className="block group h-full">
                    <motion.article 
                      className="border border-border/30 rounded-xl p-5 md:p-6 bg-card/30 h-full flex flex-col hover:border-cyan/20 transition-all duration-300"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Category */}
                      <span className="inline-block px-3 py-1 text-xs font-sans uppercase tracking-wider text-cyan/70 bg-cyan/5 rounded-full mb-4 self-start">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-lg md:text-xl mb-3 text-foreground group-hover:text-cyan transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/30">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                    </motion.article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                Vuoi andare <span className="text-gradient">più in profondità</span>?
              </h2>
              <p className="font-serif text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                Gli articoli sono solo l'inizio. Se senti che è il momento di trasformare la teoria in pratica, 
                possiamo iniziare con una conversazione.
              </p>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com">
                  <Mail className="h-5 w-5" />
                  Fissa Sessione Gratuita
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
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
  const filteredPosts = selectedCategory ? blogPosts.filter(post => post.category === selectedCategory) : blogPosts;
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  return <>
      <Helmet>
        <title>Blog | Gabriele Lucesole - Articoli su Crescita Personale</title>
        <meta name="description" content="Articoli su crescita personale, mindfulness, coaching e autorealizzazione. Contenuti di valore per chi cerca profondità e trasformazione." />
        <link rel="canonical" href="https://gabrielelucesole.com/blog" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-cyan/70 border border-cyan/20 rounded-full mb-6">
                Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Cerca il senso,   <span className="text-gradient">trovalo qui... </span>
              </h1>
              <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                Articoli di crescita personale, meditazione e trasformazione interiore. Senza fuffa, con profondità, per la tua autorealizzazione e felicità esistenzialista GRATIS.
              </p>
            </AnimatedSection>

            {/* Categories */}
            <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
              <button onClick={() => setSelectedCategory(null)} className={`px-4 py-2 rounded-full text-sm transition-all ${!selectedCategory ? 'bg-cyan text-background' : 'bg-card border border-border text-muted-foreground hover:border-cyan/50'}`}>
                Tutti
              </button>
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === category ? 'bg-cyan text-background' : 'bg-card border border-border text-muted-foreground hover:border-cyan/50'}`}>
                  {category}
                </button>)}
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && !selectedCategory && <section className="py-12 bg-card">
            <div className="container-wide">
              <AnimatedSection>
                <Link to={`/blog/${featuredPost.slug}`} className="block group">
                  <div className="gradient-border rounded-2xl p-8 md:p-12 bg-gradient-card hover:scale-[1.01] transition-transform duration-300">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-sans uppercase tracking-wider text-cyan bg-cyan/10 rounded-full mb-4">
                          In evidenza
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground group-hover:text-cyan transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="font-serif text-muted-foreground leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(featuredPost.publishedAt)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime} min
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-cyan font-medium group-hover:gap-3 transition-all">
                          Leggi l'articolo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="hidden lg:block">
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan/20 to-accent/20 flex items-center justify-center">
                          <span className="font-display text-6xl text-cyan/30">{featuredPost.category.charAt(0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </section>}

        {/* Posts Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularPosts.map((post, index) => <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Link to={`/blog/${post.slug}`} className="block group h-full">
                    <motion.article className="gradient-border rounded-2xl p-6 bg-gradient-card h-full flex flex-col" whileHover={{
                  y: -5,
                  scale: 1.02
                }} transition={{
                  duration: 0.3
                }}>
                      {/* Category */}
                      <span className="inline-block px-3 py-1 text-xs font-sans uppercase tracking-wider text-cyan/70 bg-cyan/10 rounded-full mb-4 self-start">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-cyan transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                    </motion.article>
                  </Link>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Vuoi andare <span className="text-gradient">più in profondità</span>?
              </h2>
              <p className="font-serif text-muted-foreground max-w-xl mx-auto mb-8">
                Queste letture sono solo l'inizio. Se senti che è il momento di trasformare la teoria in pratica, possiamo iniziare con una conversazione...
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:gabriele.lucesole@gmail.com">
                  <Mail className="h-5 w-5" />
                  Fissa Sessione Professional Coaching GRATIS  
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>;
};
export default Blog;
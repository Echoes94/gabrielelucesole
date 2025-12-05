import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, ArrowRight, Mail, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copiato!",
        description: "Il link dell'articolo è stato copiato negli appunti.",
      });
    }
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 shrink-0" />
                <span className="font-serif text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushList();
        return;
      }

      // Headers
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="font-display text-xl md:text-2xl text-foreground mt-10 mb-4">
            {trimmed.slice(4)}
          </h3>
        );
        return;
      }

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-6">
            {trimmed.slice(3)}
          </h2>
        );
        return;
      }

      // Blockquote
      if (trimmed.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={index} className="border-l-4 border-cyan pl-6 py-2 my-8 italic">
            <p className="font-serif text-lg text-foreground/90">{trimmed.slice(2)}</p>
          </blockquote>
        );
        return;
      }

      // List items
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        listItems.push(trimmed.slice(2));
        return;
      }

      // Numbered list
      if (/^\d+\.\s/.test(trimmed)) {
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ''));
        return;
      }

      // Regular paragraph
      flushList();
      
      // Parse bold text
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      const parsedParts = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-foreground font-medium">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      elements.push(
        <p key={index} className="font-serif text-muted-foreground leading-relaxed mb-6">
          {parsedParts}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Gabriele Lucesole</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://gabrielelucesole.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Layout>
        {/* Header */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            {/* Back link */}
            <AnimatedSection>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Torna al blog
              </Link>
            </AnimatedSection>

            {/* Meta */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 text-xs font-sans uppercase tracking-wider text-cyan bg-cyan/10 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min di lettura
                </span>
              </div>
            </AnimatedSection>

            {/* Title */}
            <AnimatedSection delay={0.2}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
                {post.title}
              </h1>
            </AnimatedSection>

            {/* Excerpt */}
            <AnimatedSection delay={0.3}>
              <p className="font-serif text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 md:py-20 bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="prose prose-invert max-w-none">
                {renderContent(post.content)}
              </div>
            </AnimatedSection>

            {/* Share */}
            <AnimatedSection delay={0.1} className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Ti è piaciuto questo articolo?
                </p>
                <Button variant="heroOutline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                  Condividi
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </article>

        {/* Author CTA */}
        <section className="py-12 bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="gradient-border rounded-2xl p-8 bg-gradient-card text-center">
                <h3 className="font-display text-2xl mb-4">
                  Vuoi approfondire?
                </h3>
                <p className="font-serif text-muted-foreground mb-6 max-w-lg mx-auto">
                  Se questo articolo ti ha fatto riflettere, immagina cosa potrebbe fare una conversazione 
                  personalizzata. Prenota una sessione gratuita.
                </p>
                <Button variant="hero" asChild>
                  <a href="mailto:gabriele.lucesole@gmail.com">
                    <Mail className="h-4 w-4" />
                    Fissa Sessione Gratuita
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-background border-t border-border">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-6">
              {prevPost && (
                <AnimatedSection direction="left">
                  <Link to={`/blog/${prevPost.slug}`} className="block group">
                    <motion.div 
                      className="gradient-border rounded-xl p-6 bg-gradient-card h-full"
                      whileHover={{ x: -5 }}
                    >
                      <span className="text-xs text-muted-foreground flex items-center gap-2 mb-3">
                        <ArrowLeft className="h-3 w-3" />
                        Articolo precedente
                      </span>
                      <h4 className="font-display text-lg text-foreground group-hover:text-cyan transition-colors">
                        {prevPost.title}
                      </h4>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              )}
              {nextPost && (
                <AnimatedSection direction="right" className={!prevPost ? 'md:col-start-2' : ''}>
                  <Link to={`/blog/${nextPost.slug}`} className="block group">
                    <motion.div 
                      className="gradient-border rounded-xl p-6 bg-gradient-card h-full text-right"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-xs text-muted-foreground flex items-center justify-end gap-2 mb-3">
                        Articolo successivo
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <h4 className="font-display text-lg text-foreground group-hover:text-cyan transition-colors">
                        {nextPost.title}
                      </h4>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPost;

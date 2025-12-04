import { Link } from 'wouter';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/constants';
import heroBg from '@assets/generated_images/premium_dark_gradient_hero_background.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary via-cyan to-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-4">
            {personalInfo.title}
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-view-resume"
            >
              <Button size="lg" className="gap-2 bg-peach text-peach-foreground border-peach">
                <FileText className="h-5 w-5" />
                View Resume
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="button-contact-me"
              >
                Contact Me
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

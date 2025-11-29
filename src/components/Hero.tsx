import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-peach/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-sage/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container-narrow text-center text-primary-foreground pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Instant Digital Downloads</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-in-up">
            Beautiful Printables
            <span className="block font-script text-peach mt-2">for Every Celebration</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-1">
            Instantly download stunning templates, checklists, and party planners. 
            Print at home and create unforgettable moments.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Button variant="hero" size="xl" className="group">
              Shop Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              Browse Categories
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in-delay-2">
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold">100+</div>
              <div className="text-sm text-primary-foreground/70">Templates</div>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold">Instant</div>
              <div className="text-sm text-primary-foreground/70">Download</div>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold">Fillable</div>
              <div className="text-sm text-primary-foreground/70">PDFs</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100V50C240 83 480 100 720 83C960 67 1200 17 1440 0V100H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

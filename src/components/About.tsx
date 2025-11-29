import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import logoCircle from "@/assets/logo-circle.png";

const features = [
  "Fillable PDF templates",
  "Instant digital download",
  "Print unlimited copies",
  "Works on any device",
  "High-quality designs",
  "Easy to customize",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Logo Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-peach/30 via-muted to-sage/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent rounded-3xl transform -rotate-3" />
              
              {/* Main Image */}
              <div className="relative bg-card rounded-3xl p-8 shadow-elevated flex items-center justify-center">
                <img 
                  src={logoCircle} 
                  alt="Wooddale Digital" 
                  className="w-full max-w-xs rounded-full shadow-card animate-float"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-elevated">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-coral fill-coral" />
                  <span className="font-heading font-medium">Made with love</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2 mb-6">
              Designs That Make
              <span className="font-script text-primary block mt-1">Every Moment Special</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Wooddale Digital, we create beautiful, thoughtfully designed printables that help you 
              plan and celebrate life's special moments. From holiday checklists to party planners, 
              our digital downloads make organization effortless and stylish.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every template is designed to be both beautiful and functional – fillable PDFs that 
              you can customize on any device, then print at home or at your favorite print shop.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg">
              Explore Our Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

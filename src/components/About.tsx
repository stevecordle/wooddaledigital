import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const productImages = [
  "https://i.etsystatic.com/12518337/r/il/236d64/7500843943/il_340x270.7500843943_66dh.jpg",
  "https://i.etsystatic.com/12518337/r/il/8860bf/7449261446/il_340x270.7449261446_5fna.jpg",
  "https://i.etsystatic.com/12518337/r/il/6585ad/7441527942/il_340x270.7441527942_p9t2.jpg",
  "https://i.etsystatic.com/12518337/r/il/8cd370/7414673156/il_340x270.7414673156_a8d2.jpg",
];

const features = [
  "Fillable PDF templates",
  "Instant digital download",
  "Print unlimited copies",
  "Works on any device",
  "High-quality designs",
  "Easy to customize",
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Start with a random image
    setCurrentImageIndex(Math.floor(Math.random() * productImages.length));
    
    // Rotate through images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
              <div className="relative bg-card rounded-3xl p-4 shadow-elevated flex items-center justify-center overflow-hidden">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt="Featured product from Wooddale Digital" 
                  className="w-full h-full object-cover rounded-2xl transition-opacity duration-500"
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

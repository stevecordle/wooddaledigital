import { Link } from "react-router-dom";
import { Home, ShoppingBag, Grid3X3, HelpCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const helpfulLinks = [
    { to: "/", label: "Home", icon: Home, description: "Return to homepage" },
    { to: "/products", label: "Products", icon: ShoppingBag, description: "Browse all products" },
    { to: "/categories", label: "Categories", icon: Grid3X3, description: "Explore categories" },
    { to: "/faq", label: "FAQ", icon: HelpCircle, description: "Get answers" },
    { to: "/contact", label: "Contact", icon: Mail, description: "Get in touch" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-primary/20 mb-4">
            404
          </h1>
          
          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Let's help you find your way back.
          </p>
          
          {/* Primary CTA */}
          <Button asChild size="lg" className="mb-12">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          {/* Helpful Links */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-6">Or explore these pages:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {helpfulLinks.slice(1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <link.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

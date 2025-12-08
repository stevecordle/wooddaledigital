import { Heart, Download, Sparkles, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every design is crafted with care and attention to detail, ensuring your special moments are beautifully captured.",
  },
  {
    icon: Download,
    title: "Instant Access",
    description: "Download your printables immediately after purchase. No waiting, no shipping—just beautiful designs ready to print.",
  },
  {
    icon: Sparkles,
    title: "Quality Designs",
    description: "Professional, elegant designs that look stunning when printed at home or at your local print shop.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We're here to help with any questions about our products or printing.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-cream/30 py-8 md:py-12">
          <div className="container-narrow">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="text-center">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">Our Story</span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2 mb-4">
                About Wooddale Digital
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Creating beautiful printables to help you celebrate life's special moments
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-sage/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-12 h-12 text-primary" />
                      </div>
                      <p className="font-heading text-xl text-foreground">Est. 2020</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-peach/30 rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-sage/20 rounded-full -z-10" />
              </div>
              
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-medium mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Wooddale Digital creates beautiful, professionally designed printables that help 
                    you celebrate life's special moments with style and ease.
                  </p>
                  <p>
                    Our collection includes everything from party invitations and event planners to 
                    holiday checklists and organizational tools. Each design is crafted to be both 
                    beautiful and functional—ready to customize and print in minutes.
                  </p>
                  <p>
                    We believe professional-quality designs should be accessible to everyone. That's 
                    why we offer instant digital downloads at affordable prices, with easy-to-use 
                    fillable PDF templates that work on any device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-cream/30">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 className="font-heading text-2xl md:text-3xl font-medium mt-2">
                What We Stand For
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center p-6 rounded-2xl bg-card border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-medium text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="bg-gradient-to-br from-primary/5 to-sage/5 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Have questions about our products or need help with printing? 
                We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

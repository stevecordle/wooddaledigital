import { Gift, Calendar, PartyPopper, Baby, Heart, Cake, Sparkles, BookOpen, ClipboardList } from "lucide-react";
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

const categories = [
  {
    name: "Christmas",
    icon: Gift,
    description: "Holiday checklists, planners, gift tags & festive decorations",
    count: 24,
    color: "bg-coral/10 text-coral",
    href: "/products?category=christmas",
  },
  {
    name: "Party Planning",
    icon: PartyPopper,
    description: "Guest lists, event templates, invitations & party games",
    count: 18,
    color: "bg-primary/10 text-primary",
    href: "/products?category=party-planning",
  },
  {
    name: "Baby Showers",
    icon: Baby,
    description: "Games, decorations, invitations & registry checklists",
    count: 15,
    color: "bg-peach/50 text-foreground",
    href: "/products?category=baby-showers",
  },
  {
    name: "Weddings",
    icon: Heart,
    description: "Invitations, planners, seating charts & save-the-dates",
    count: 32,
    color: "bg-sage/10 text-sage",
    href: "/products?category=weddings",
  },
  {
    name: "Birthdays",
    icon: Cake,
    description: "Party printables, invitations, banners & decorations",
    count: 21,
    color: "bg-coral/10 text-coral",
    href: "/products?category=birthdays",
  },
  {
    name: "Calendars & Planners",
    icon: Calendar,
    description: "Monthly planners, weekly trackers & goal setting sheets",
    count: 28,
    color: "bg-primary/10 text-primary",
    href: "/products?category=calendars",
  },
  {
    name: "Journals & Stationery",
    icon: BookOpen,
    description: "Printable journals, note paper & writing templates",
    count: 16,
    color: "bg-sage/10 text-sage",
    href: "/products?category=journals",
  },
  {
    name: "Organization",
    icon: ClipboardList,
    description: "To-do lists, meal planners & household organizers",
    count: 19,
    color: "bg-peach/50 text-foreground",
    href: "/products?category=organization",
  },
  {
    name: "Special Occasions",
    icon: Sparkles,
    description: "Graduation, anniversaries, holidays & celebrations",
    count: 14,
    color: "bg-primary/10 text-primary",
    href: "/products?category=special-occasions",
  },
];

const CategoriesPage = () => {
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
                  <BreadcrumbPage>Categories</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="text-center">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">Browse</span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2 mb-4">
                Shop by Category
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Find the perfect printables for your next celebration, event, or everyday organization
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="font-heading font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <span className="text-sm text-muted-foreground">{category.count} items</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-cream/30">
          <div className="container-narrow text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Browse all our products or contact us for custom requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View All Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;

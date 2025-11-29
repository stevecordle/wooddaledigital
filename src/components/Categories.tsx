import { Gift, Calendar, PartyPopper, Baby, Heart, Cake } from "lucide-react";

const categories = [
  {
    name: "Christmas",
    icon: Gift,
    description: "Holiday checklists & planners",
    color: "bg-coral/10 text-coral",
  },
  {
    name: "Party Planning",
    icon: PartyPopper,
    description: "Guest lists & event templates",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Baby Showers",
    icon: Baby,
    description: "Games & decorations",
    color: "bg-peach/50 text-foreground",
  },
  {
    name: "Weddings",
    icon: Heart,
    description: "Invitations & planners",
    color: "bg-sage/10 text-sage",
  },
  {
    name: "Birthdays",
    icon: Cake,
    description: "Party printables",
    color: "bg-coral/10 text-coral",
  },
  {
    name: "Calendars",
    icon: Calendar,
    description: "Planners & trackers",
    color: "bg-primary/10 text-primary",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">Browse</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find the perfect printables for your next celebration or event
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-medium text-foreground mb-1">{category.name}</h3>
              <p className="text-xs text-muted-foreground">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

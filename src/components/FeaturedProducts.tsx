import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Christmas Party Guest List",
    category: "Christmas",
    price: 2.97,
    originalPrice: 3.49,
    image: "https://i.etsystatic.com/12518337/r/il/236d64/7500843943/il_340x270.7500843943_66dh.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Christmas Gift Wish List",
    category: "Christmas",
    price: 2.97,
    originalPrice: 3.49,
    image: "https://i.etsystatic.com/12518337/r/il/8860bf/7449261446/il_340x270.7449261446_5fna.jpg",
    badge: "Sale",
  },
  {
    id: 3,
    name: "Christmas Gift Checklist",
    category: "Christmas",
    price: 2.97,
    originalPrice: 3.49,
    image: "https://i.etsystatic.com/12518337/r/il/6585ad/7441527942/il_340x270.7441527942_p9t2.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Hand Drawn Lights Checklist",
    category: "Christmas",
    price: 2.97,
    originalPrice: 3.49,
    image: "https://i.etsystatic.com/12518337/r/il/8cd370/7414673156/il_340x270.7414673156_a8d2.jpg",
    badge: "New",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="bestsellers" className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sage font-medium text-sm uppercase tracking-widest">Featured</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
              Best Sellers
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    product.badge === 'Best Seller' ? 'bg-primary text-primary-foreground' :
                    product.badge === 'Sale' ? 'bg-coral text-primary-foreground' :
                    'bg-sage text-primary-foreground'
                  }`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full" size="sm">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</span>
                <h3 className="font-heading font-medium text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-peach text-peach" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(Digital Download)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

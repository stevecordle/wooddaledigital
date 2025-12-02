import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const favoriteProducts = [
  {
    id: 1,
    name: "Minimalist Daily Planner Bundle",
    price: 12.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Watercolor Floral Wall Art Set",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Budget Tracker Spreadsheet",
    price: 6.99,
    originalPrice: 9.99,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
    rating: 4,
    reviews: 156,
  },
  {
    id: 4,
    name: "Wedding Invitation Templates",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop",
    rating: 5,
    reviews: 234,
  },
];

const Favorites = () => {
  const isEmpty = false; // Toggle for empty state demo

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Page Header */}
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Favorites</span>
            </nav>
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <h1 className="text-3xl md:text-4xl font-serif text-foreground">My Favorites</h1>
            </div>
            <p className="text-muted-foreground mt-2">
              {favoriteProducts.length} items saved for later
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {isEmpty ? (
            /* Empty State */
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-serif text-foreground mb-3">Your favorites list is empty</h2>
              <p className="text-muted-foreground mb-8">
                Browse our collection and click the heart icon to save items you love for later.
              </p>
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <p className="text-muted-foreground">
                  Showing {favoriteProducts.length} saved items
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add All to Cart
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {favoriteProducts.map((product) => (
                  <div key={product.id} className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                          Sale
                        </span>
                      )}
                      <button className="absolute top-3 right-3 w-9 h-9 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors group/btn">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-primary">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button size="sm" variant="outline" className="h-8">
                          <ShoppingBag className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;

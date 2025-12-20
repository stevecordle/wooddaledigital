import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Grid3X3, List, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "All Products", count: 156 },
  { name: "Birthday", count: 42 },
  { name: "Baby Shower", count: 28 },
  { name: "Wedding", count: 35 },
  { name: "Holiday", count: 24 },
  { name: "Everyday", count: 27 },
];

const products = [
  {
    id: 1,
    name: "Wildflower Birthday Invitation",
    price: 8.99,
    originalPrice: 12.99,
    image: "https://i.etsystatic.com/27698741/r/il/d5b33a/3012178889/il_570xN.3012178889_1234.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Boho Baby Shower Bundle",
    price: 14.99,
    image: "https://i.etsystatic.com/27698741/r/il/a5c2b1/3059667080/il_570xN.3059667080_5678.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Elegant Wedding Suite",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://i.etsystatic.com/27698741/r/il/b8d4e2/3106155271/il_570xN.3106155271_9012.jpg",
  },
  {
    id: 4,
    name: "Garden Party Invitation",
    price: 7.99,
    image: "https://i.etsystatic.com/27698741/r/il/c9e5f3/3152643462/il_570xN.3152643462_3456.jpg",
  },
  {
    id: 5,
    name: "Rustic Bridal Shower Set",
    price: 12.99,
    image: "https://i.etsystatic.com/27698741/r/il/d0f6g4/3199131653/il_570xN.3199131653_7890.jpg",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Minimalist Thank You Cards",
    price: 5.99,
    image: "https://i.etsystatic.com/27698741/r/il/e1g7h5/3245619844/il_570xN.3245619844_1234.jpg",
  },
  {
    id: 7,
    name: "Floral Menu Template",
    price: 6.99,
    originalPrice: 9.99,
    image: "https://i.etsystatic.com/27698741/r/il/f2h8i6/3292108035/il_570xN.3292108035_5678.jpg",
  },
  {
    id: 8,
    name: "Vintage Birthday Bundle",
    price: 18.99,
    image: "https://i.etsystatic.com/27698741/r/il/g3i9j7/3338596226/il_570xN.3338596226_9012.jpg",
    badge: "Best Seller",
  },
];

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm mb-4">
              <ol className="flex items-center gap-2 text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li>/</li>
                <li className="text-foreground">All Products</li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">Our Collection</h1>
            <p className="text-muted-foreground mt-2">Discover our beautiful printable templates</p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <button
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`w-full flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                            selectedCategory === cat.name
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span>{cat.name}</span>
                          <span className="text-sm">({cat.count})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {["Under $10", "$10 - $20", "$20 - $30", "Over $30"].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-muted-foreground">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Type</h3>
                  <div className="space-y-2">
                    {["Invitations", "Thank You Cards", "Bundles", "Menus", "Signs"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-border">
                  <p className="text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">1-8</span> of{" "}
                    <span className="font-semibold text-foreground">156</span> products
                  </p>
                  <div className="flex items-center gap-4">
                    <select className="border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>Sort by: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest First</option>
                      <option>Best Selling</option>
                    </select>
                    <div className="flex border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-secondary"}`}
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-secondary"}`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grid */}
                <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                  {products.map((product) => (
                    <div key={product.id} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                        {product.badge && (
                          <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
                            product.badge === "Best Seller" ? "bg-primary text-primary-foreground" :
                            product.badge === "New" ? "bg-accent text-accent-foreground" :
                            "bg-secondary text-secondary-foreground"
                          }`}>
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-background transition-colors shadow-sm">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm">
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2">Digital Download</p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-lg font-bold text-primary">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <nav className="flex justify-center items-center gap-2 mt-10">
                  <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[1, 2, 3, "...", 12].map((page, i) => (
                    <button
                      key={i}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        page === 1
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

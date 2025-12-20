import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ExternalLink, ChevronRight, Download, FileText, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const product = {
  id: 1,
  name: "Romantic Floral Wedding Invitation Suite",
  category: "Wedding Invitations",
  price: 12.99,
  originalPrice: 24.99,
  description: "Create the perfect first impression for your special day with this elegant romantic floral wedding invitation suite. Features delicate watercolor florals in soft blush and sage tones, perfect for a romantic garden wedding.",
  features: [
    "Fully editable in Canva (free version)",
    "Instant digital download",
    "Print-ready PDF files included",
    "Multiple sizes available",
    "Easy to customize text and colors",
    "High-resolution 300 DPI"
  ],
  includes: [
    "Main Invitation (5x7\")",
    "RSVP Card (5x3.5\")",
    "Details Card (5x3.5\")",
    "Thank You Card (5x7\")",
    "Envelope Liner Template"
  ],
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ],
  badge: "Best Seller",
  etsyUrl: "https://www.etsy.com/shop/WooddaleDigital"
};

const relatedProducts = [
  {
    id: 2,
    name: "Minimalist Save the Date",
    price: 8.99,
    originalPrice: 14.99,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Boho Wedding Menu Template",
    price: 6.99,
    originalPrice: 12.99,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Elegant Table Numbers",
    price: 5.99,
    originalPrice: 9.99,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Floral Welcome Sign",
    price: 9.99,
    originalPrice: 16.99,
    image: "/placeholder.svg"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-coral text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>
                

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="bg-sage/20 text-sage px-2 py-1 rounded text-sm font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Shop on Etsy */}
              <div className="flex gap-3">
                <Button asChild variant="default" size="lg" className="flex-1">
                  <a href={product.etsyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Shop on Etsy
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Digital Download Info */}
              <div className="bg-sage/10 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-sage">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Instant Digital Download</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your files will be available immediately after purchase. No physical item will be shipped.
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="font-display text-lg mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-display text-lg mb-3">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-sage rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link 
                key={item.id} 
                to={`/product/${item.id}`}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-primary font-semibold">${item.price}</span>
                  <span className="text-xs text-muted-foreground line-through">${item.originalPrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

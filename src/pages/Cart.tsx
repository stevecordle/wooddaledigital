import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Botanical Wedding Invitation Suite",
      category: "Wedding Invitations",
      price: 12.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Minimalist Save the Date",
      category: "Save the Dates",
      price: 8.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Floral RSVP Card Template",
      category: "RSVP Cards",
      price: 6.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1595508064774-5ff825a07b23?w=150&h=150&fit=crop",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Shopping Cart</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground">Cart</span>
            </div>
          </div>
        </section>

        {cartItems.length > 0 ? (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-secondary/50 border-b border-border">
                      <div className="col-span-6 font-medium text-foreground">Product</div>
                      <div className="col-span-2 font-medium text-foreground text-center">Price</div>
                      <div className="col-span-2 font-medium text-foreground text-center">Quantity</div>
                      <div className="col-span-2 font-medium text-foreground text-center">Total</div>
                    </div>

                    {/* Cart Items */}
                    {cartItems.map((item) => (
                      <div key={item.id} className="grid md:grid-cols-12 gap-4 p-6 border-b border-border last:border-b-0 items-center">
                        {/* Product */}
                        <div className="md:col-span-6 flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium text-foreground mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-1 text-sm text-destructive hover:text-destructive/80 mt-2 md:hidden"
                            >
                              <Trash2 className="w-4 h-4" />
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="md:col-span-2 text-center">
                          <span className="md:hidden text-muted-foreground mr-2">Price:</span>
                          <span className="text-foreground">${item.price.toFixed(2)}</span>
                        </div>

                        {/* Quantity */}
                        <div className="md:col-span-2 flex items-center justify-center">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Minus className="w-4 h-4 text-foreground" />
                            </button>
                            <span className="w-10 text-center text-foreground">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Plus className="w-4 h-4 text-foreground" />
                            </button>
                          </div>
                        </div>

                        {/* Total */}
                        <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                          <span className="md:hidden text-muted-foreground">Total:</span>
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="hidden md:block text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Continue Shopping */}
                  <div className="mt-6">
                    <Link to="/products">
                      <Button variant="outline" className="gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                    <h2 className="font-display text-2xl text-foreground mb-6">Order Summary</h2>

                    {/* Coupon Code */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Coupon Code
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Enter code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="outline">Apply</Button>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Discount</span>
                        <span>$0.00</span>
                      </div>
                      <div className="border-t border-border pt-4 flex justify-between text-lg font-medium text-foreground">
                        <span>Total</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Digital Download Notice */}
                    <p className="text-sm text-muted-foreground mb-6 p-4 bg-secondary/50 rounded-lg">
                      All items are digital downloads. You'll receive instant access after purchase.
                    </p>

                    {/* Checkout Button */}
                    <Link to="/checkout">
                      <Button className="w-full gap-2">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Empty Cart */
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary/50 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="font-display text-3xl text-foreground mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Explore our beautiful digital designs!
              </p>
              <Link to="/products">
                <Button className="gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Browse Products
                </Button>
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

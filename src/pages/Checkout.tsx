import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, Lock, CreditCard, ShieldCheck } from "lucide-react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Botanical Wedding Invitation Suite",
      price: 24.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Minimalist Save the Date Template",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=100&h=100&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Continue Shopping
          </Link>

          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="font-display text-xl text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      Your digital downloads will be sent to this email
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First name" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last name" className="mt-1.5" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="font-display text-xl text-foreground mb-6">Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="card" />
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">Credit / Debit Card</span>
                  </label>
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "paypal"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="paypal" />
                    <span className="font-bold text-[#003087]">Pay</span>
                    <span className="font-bold text-[#009cde]">Pal</span>
                  </label>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1.5"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1.5" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="Full name as shown on card" className="mt-1.5" />
                    </div>
                  </div>
                )}
              </section>

              {/* Terms & Conditions */}
              <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" className="mt-0.5" />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Digital Product License Agreement
                    </a>
                    . I understand that digital products are non-refundable once downloaded.
                  </Label>
                </div>
              </section>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border sticky top-24">
                <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground truncate">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Code */}
                <div className="flex gap-2 mb-6">
                  <Input placeholder="Coupon code" className="flex-1" />
                  <Button variant="outline">Apply</Button>
                </div>

                {/* Totals */}
                <div className="space-y-3 border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">$0.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t border-border pt-3">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Complete Purchase Button */}
                <Button className="w-full h-12 text-base font-semibold gap-2">
                  <Lock className="w-4 h-4" />
                  Complete Purchase
                </Button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure checkout powered by SSL encryption</span>
                </div>

                {/* Digital Delivery Note */}
                <div className="mt-6 p-4 bg-accent/50 rounded-xl">
                  <h4 className="font-medium text-foreground text-sm mb-2">Instant Digital Delivery</h4>
                  <p className="text-xs text-muted-foreground">
                    After purchase, you'll receive an email with download links. Files are also available in your account dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
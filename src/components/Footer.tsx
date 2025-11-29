import { Instagram, Facebook, Mail, Heart } from "lucide-react";
import logoCircle from "@/assets/logo-circle.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "All Products", href: "#" },
      { name: "Christmas", href: "#" },
      { name: "Party Planning", href: "#" },
      { name: "Calendars", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@wooddaledigital.com" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-3 mb-4">
              <img 
                src={logoCircle} 
                alt="Wooddale Digital" 
                className="w-12 h-12 rounded-full"
              />
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Beautiful digital printables for every celebration. Instant downloads, endless possibilities.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-peach text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-peach text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-peach text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Wooddale Digital. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for celebrations everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

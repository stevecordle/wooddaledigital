import { Instagram, Facebook, Heart, Youtube } from "lucide-react";
import logo from "@/assets/wooddale-digital-logo.png";

// Custom Pinterest icon since lucide doesn't have one
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

// Custom TikTok icon since lucide doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom Etsy icon
const EtsyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.559 4.674c0-.312.044-.519.152-.59.108-.071.376-.112.794-.112h2.396c1.424 0 2.467.219 3.121.655.654.436 1.076 1.206 1.265 2.31l.167.937h.722l-.085-4.811h-.669l-.403.906c-.101.227-.193.39-.276.486s-.195.157-.339.183c-.143.026-.587.052-1.332.078-.744.026-1.753.039-3.027.039H6.168l-.039 1.136c.464.026.786.058.966.099.18.04.318.119.414.237.097.117.163.262.2.434.036.172.054.452.054.841v10.697c0 .389-.019.669-.058.841-.039.171-.107.316-.208.433-.101.118-.241.197-.421.237-.18.041-.495.073-.944.099l.039 1.136h5.947c1.449 0 2.637.013 3.563.039.927.026 1.475.052 1.646.078.17.026.299.087.385.183.087.097.166.259.238.486l.356.906h.669l.26-5.218h-.695l-.234 1.11c-.202 1.065-.588 1.792-1.159 2.181-.571.39-1.476.584-2.718.584H9.392c-.364 0-.601-.041-.71-.125-.109-.083-.163-.26-.163-.533V12.39h3.027c.563 0 .969.062 1.219.186.25.124.42.313.511.569.091.255.147.616.169 1.084l.039.919h.842V9.874h-.842l-.039.906c-.022.468-.08.824-.173 1.071-.094.246-.27.43-.529.553-.26.122-.673.183-1.238.183H8.559V4.674z"/>
  </svg>
);

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
    { name: "Etsy", icon: EtsyIcon, href: "https://www.etsy.com/shop/wooddaledigital" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583825485646" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/wooddaledigital/" },
    { name: "Pinterest", icon: PinterestIcon, href: "https://www.pinterest.com/wooddaledigital/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCwilyUFNRxpfTkz_V8nit7A" },
    { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@wooddaledigital" },
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
                src={logo} 
                alt="Wooddale Digital" 
                className="h-10 w-auto brightness-0 invert"
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

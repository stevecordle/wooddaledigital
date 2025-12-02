import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: December 2, 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Wooddale Digital's website and purchasing our digital products, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">2. Digital Products & Downloads</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All products sold on Wooddale Digital are digital downloads. Upon successful payment, you will receive immediate access to download your purchased files. Please note:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Digital products are delivered electronically and are non-refundable once downloaded</li>
                <li>Download links are available in your order confirmation email and account dashboard</li>
                <li>You are responsible for downloading and saving your files within the provided timeframe</li>
                <li>We recommend backing up your purchased files immediately after download</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">3. License & Permitted Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you purchase a digital product from Wooddale Digital, you receive a personal use license that allows you to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Print unlimited copies for personal, non-commercial use</li>
                <li>Use the designs for personal events and celebrations</li>
                <li>Share printed copies with family and friends for personal occasions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                You may NOT:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Resell, redistribute, or share the digital files</li>
                <li>Use designs for commercial purposes without a commercial license</li>
                <li>Claim the designs as your own original work</li>
                <li>Modify and resell the designs</li>
                <li>Include designs in any product intended for resale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">4. Payment & Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are listed in USD unless otherwise specified. We accept major credit cards and other payment methods as displayed at checkout. Prices are subject to change without notice, but changes will not affect orders already placed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">5. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Due to the digital nature of our products, all sales are final once the download link has been accessed. However, we want you to be completely satisfied with your purchase:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>If you experience technical issues with your download, please contact us immediately</li>
                <li>If the product is significantly different from its description, we may offer a refund or exchange</li>
                <li>Refund requests must be made within 7 days of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All designs, graphics, and content on this website are the intellectual property of Wooddale Digital and are protected by copyright laws. Unauthorized reproduction, distribution, or use of our designs is strictly prohibited and may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wooddale Digital provides digital products "as is" and makes no warranties regarding the suitability of products for any particular purpose. We are not liable for any damages arising from the use or inability to use our products, including but not limited to printing quality issues resulting from user's printer or paper choices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at hello@wooddaledigital.com or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: December 2, 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Wooddale Digital, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our digital products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
                <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through our payment provider)</li>
                <li><strong>Order Information:</strong> Products purchased, order history, and download activity</li>
                <li><strong>Communication Data:</strong> Information you provide when contacting customer support or subscribing to our newsletter</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                We also automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages viewed and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and fulfill your orders and provide download access</li>
                <li>Send order confirmations and download links</li>
                <li>Communicate with you about your purchases and respond to inquiries</li>
                <li>Send promotional emails and newsletters (with your consent)</li>
                <li>Improve our website, products, and customer service</li>
                <li>Detect and prevent fraud or unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Payment Processors:</strong> To process your transactions securely</li>
                <li><strong>Email Service Providers:</strong> To send transactional and marketing emails</li>
                <li><strong>Analytics Providers:</strong> To help us understand website usage</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">5. Cookies & Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience. These include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality and secure checkout</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology, and we never store complete credit card information on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Order history and download access are maintained to provide ongoing customer support and allow re-downloading of purchased products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Wooddale Digital</p>
                <p>Email: hello@wooddaledigital.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;

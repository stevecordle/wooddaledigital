import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail } from "lucide-react";

const faqCategories = [
  {
    title: "Ordering & Downloads",
    faqs: [
      {
        question: "How do I download my purchase?",
        answer: "After completing your purchase, you'll receive an email with a download link. You can also access your files anytime by logging into your account and visiting the 'My Downloads' section. Downloads are available immediately after payment is confirmed.",
      },
      {
        question: "How long do I have to download my files?",
        answer: "Your download links never expire! You can access and re-download your purchased files at any time through your account. We recommend saving the files to your computer or cloud storage for easy access.",
      },
      {
        question: "What file formats are included?",
        answer: "Most of our printables come in high-resolution PDF format, which is universally compatible with all printers. Some products also include editable versions in formats like DOCX or PNG. Check each product description for specific file formats included.",
      },
      {
        question: "Can I download my files on multiple devices?",
        answer: "Yes! Once purchased, you can download your files on any device—computer, tablet, or phone. Simply log into your account from any device to access your downloads.",
      },
    ],
  },
  {
    title: "Printing & Quality",
    faqs: [
      {
        question: "What paper should I use for printing?",
        answer: "For best results, we recommend using cardstock (65-110 lb) for invitations, cards, and signs. Standard printer paper works well for checklists, planners, and organizational printables. Matte or glossy photo paper gives a professional finish for photo-heavy designs.",
      },
      {
        question: "Can I print these at home?",
        answer: "Absolutely! Our printables are designed to work with standard home inkjet or laser printers. For the best quality, ensure your printer settings are set to 'High Quality' or 'Best' and select the correct paper type in your print settings.",
      },
      {
        question: "Can I have these printed professionally?",
        answer: "Yes! Our files are print-ready and work great with professional print shops like FedEx, Staples, or local printers. Simply upload the PDF files and choose your paper preferences. Professional printing is especially recommended for large quantities.",
      },
      {
        question: "What size are the printables?",
        answer: "Most of our printables are designed for standard US Letter size (8.5\" x 11\"). Some products include multiple sizes or are designed for specific dimensions like 5x7 for invitations. Check each product description for exact dimensions.",
      },
    ],
  },
  {
    title: "Editing & Customization",
    faqs: [
      {
        question: "Can I edit the printables?",
        answer: "Many of our products include editable versions that allow you to customize text, names, dates, and sometimes colors. Editable files typically use Canva (free), Adobe Acrobat, or Microsoft Word. Check the product description for editing capabilities.",
      },
      {
        question: "Do I need special software to edit?",
        answer: "It depends on the product. Many of our editable designs use Canva (free to use) or fillable PDFs that work with free Adobe Acrobat Reader. Some products may require Microsoft Word. Software requirements are listed in each product description.",
      },
      {
        question: "Can you customize a design for me?",
        answer: "While we don't offer individual customization services at this time, many of our products are fully editable so you can personalize them yourself. If you need help with editing, feel free to contact us and we'll do our best to guide you.",
      },
    ],
  },
  {
    title: "Payments & Refunds",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal. All payments are processed securely through our payment partners.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes! We use industry-standard SSL encryption and never store your credit card information. All payments are processed through secure, PCI-compliant payment processors.",
      },
      {
        question: "What is your refund policy?",
        answer: "Due to the digital nature of our products, we generally cannot offer refunds once files have been downloaded. However, if you experience technical issues or receive a damaged file, please contact us within 7 days and we'll make it right.",
      },
      {
        question: "I haven't received my download email. What should I do?",
        answer: "First, check your spam/junk folder as emails sometimes end up there. If you still can't find it, log into your account to access your downloads directly, or contact us with your order number and we'll resend the link right away.",
      },
    ],
  },
  {
    title: "Licensing & Usage",
    faqs: [
      {
        question: "Can I use these for commercial purposes?",
        answer: "Our standard license is for personal use only. This includes personal events, home organization, and gifts. If you'd like to use our designs for commercial purposes (reselling, client work, etc.), please contact us about our commercial licensing options.",
      },
      {
        question: "Can I share the files with friends or family?",
        answer: "Our license is for single-user, personal use. While you can print copies for your own event, please don't share the digital files. If friends love your printables, we'd appreciate you directing them to our shop!",
      },
      {
        question: "Can I resell or redistribute the files?",
        answer: "No, reselling or redistributing our digital files is not permitted. Each purchase is licensed for personal use by the purchaser only. Unauthorized distribution is a violation of copyright.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-cream/30 py-8 md:py-12">
          <div className="container-narrow">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>FAQ</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="text-center">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">Help Center</span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Find answers to common questions about our digital printables, downloads, and printing tips
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding">
          <div className="container-narrow max-w-3xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-10 last:mb-0">
                <h2 className="font-heading text-xl md:text-2xl font-medium mb-4 pb-2 border-b border-border">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-xl px-4 data-[state=open]:bg-cream/30"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-cream/30">
          <div className="container-narrow text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;

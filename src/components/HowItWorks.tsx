import { Download, Printer, PartyPopper, CreditCard } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Purchase",
    description: "Choose your favorite printables and complete your secure checkout",
  },
  {
    icon: Download,
    title: "Download",
    description: "Instantly access your files – no waiting for shipping",
  },
  {
    icon: Printer,
    title: "Print",
    description: "Print at home or at your local print shop",
  },
  {
    icon: PartyPopper,
    title: "Celebrate!",
    description: "Enjoy your beautiful printables at your event",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-peach font-medium text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Get your printables in minutes – it's that easy!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              {/* Number & Icon */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-foreground/20 group-hover:scale-110">
                  <step.icon className="w-8 h-8" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-peach text-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="font-heading text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.description}</p>
              
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-primary-foreground/20" style={{ left: 'calc(100% + 1rem)', width: 'calc(100% - 2rem)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

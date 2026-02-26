import { MessageSquare, Ruler, Wrench, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin with an in-depth discussion to understand your vision and goals.',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Design',
    description: 'Our engineers create a comprehensive plan tailored to your space.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installation',
    description: 'Expert technicians install and integrate all systems with precision.',
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing maintenance and 24/7 support ensure flawless operation.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            How We
            <span className="text-gradient"> Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial concept to ongoing support, we guide you through every
            step of your smart home journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="glass-card p-6 rounded-xl h-full hover-lift">

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="text-primary" size={24} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  features: Feature[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
}

export const ServicePageLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  icon: Icon,
  features,
  benefits,
  process,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[70vh]">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>
        
        <div className="relative container mx-auto px-6 pt-20 pb-32">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Services</span>
          </Link>
          
          <div className="max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-background/20">
              <Icon className="text-background" size={32} />
            </div>
            
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              {subtitle}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-3 mb-6">
              {title}
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-8">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Features
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              What's Included
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Why Choose Our {title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Experience the difference with our premium solutions designed for modern living.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how we can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Request Consultation
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

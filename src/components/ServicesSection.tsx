import { Link } from 'react-router-dom';
import { Lightbulb, Shield, Thermometer, Tv, Wifi, Home, ArrowRight } from 'lucide-react';
import serviceLighting from '@/assets/service-lighting.jpg';
import serviceSecurity from '@/assets/service-security.jpg';
import serviceClimate from '@/assets/service-climate.jpg';
import serviceEntertainment from '@/assets/service-entertainment.jpg';

const services = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Automated lighting systems that adapt to your mood and schedule.',
    image: serviceLighting,
    link: '/services/smart-lighting',
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Advanced surveillance and access control for complete peace of mind.',
    image: serviceSecurity,
    link: '/services/security-systems',
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Intelligent HVAC management for optimal comfort and efficiency.',
    image: serviceClimate,
    link: '/services/climate-control',
  },
  {
    icon: Tv,
    title: 'Entertainment',
    description: 'Immersive audio-visual experiences throughout your home.',
    image: serviceEntertainment,
    link: '/services/entertainment',
  },
];

const reasons = [
  {
    icon: Home,
    title: 'Custom Solutions',
    description: 'Every project is tailored to your specific needs and preferences.',
  },
  {
    icon: Wifi,
    title: 'Seamless Integration',
    description: 'All systems work together flawlessly through a unified platform.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We use only the finest components from trusted manufacturers.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Complete Home
            <span className="text-gradient"> Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intelligent lighting to comprehensive security, we offer end-to-end 
            solutions for your connected home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover-lift block"
            >
              {/* Image */}
              <div className="aspect-[16/10]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-background/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-background/20">
                  <service.icon className="text-background" size={24} />
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold text-background mb-2">
                  {service.title}
                </h3>
                <p className="text-background/80 text-sm md:text-base">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-accent font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              The <span className="text-gradient">ecotonics</span> Advantage
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h4>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

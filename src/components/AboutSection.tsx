import { CheckCircle } from 'lucide-react';
import aboutImage from '@/assets/about-office.jpg';

const features = [
  'Industry-leading smart home technology',
  'Custom solutions for every space',
  'Award-winning design & installation',
  '24/7 support & maintenance',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Our modern office"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[260px] shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2 font-display">15+</div>
              <p className="text-muted-foreground text-sm">
                Years of excellence in home automation
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Pioneering the Future of
              <span className="text-gradient"> Smart Living</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Automex, we believe that technology should enhance life, not complicate it. 
              Since 2009, we've been at the forefront of home automation, crafting intelligent 
              environments that blend luxury, convenience, and sustainability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of certified engineers and designers work closely with each client 
              to create customized solutions that transform houses into truly smart homes.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

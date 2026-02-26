import { ArrowLeft, Check, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const recentProjects = [
  {
    title: 'Modern Villa Automation',
    location: 'Beverly Hills, CA',
    image: '/hero.jpg',
    tag: 'Full Home',
  },
  {
    title: 'Luxury Penthouse Setup',
    location: 'New York, NY',
    image: '/about.jpg',
    tag: 'Lighting & Security',
  },
  {
    title: 'Smart Office Complex',
    location: 'San Francisco, CA',
    image: '/service-lighting.jpg',
    tag: 'Commercial',
  },
  {
    title: 'Beachfront Residence',
    location: 'Miami, FL',
    image: '/service-security.jpg',
    tag: 'Climate & Audio',
  },
];

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  icon: Icon,
  features,
  benefits,
  process,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-24 pt-32">
          <div className="max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-background/20">
              <Icon className="text-background" size={32} />
            </div>

            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-3 mb-6">
              {title}
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-10">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Get a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              What's Included
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 rounded-xl hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
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
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Why Choose Our {title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Experience the difference with our premium solutions designed for modern living.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-background">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              A glimpse into some of our most recent installations and transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentProjects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm border border-background/20 text-background text-xs font-medium">
                    {project.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-background font-semibold text-base mb-1">
                    {project.title}
                  </h3>
                  <p className="text-background/70 text-xs">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="w-full max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how we can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Request Consultation
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Call Us Now
            </Button>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Shield, Thermometer, Tv, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    subtitle: 'Intelligent Lighting Solutions',
    description:
      'Transform your home with adaptive lighting that responds to your lifestyle. Automate schedules, create scenes, and control every light from one app.',
    image: '/service-lighting.jpg',
    link: '/services/details?service=smart-lighting',
    highlights: [
      'Automated scheduling & scenes',
      'Voice and app control',
      'Energy monitoring & savings',
      'Motion-based automation',
    ],
  },
  {
    icon: Shield,
    title: 'Security Systems',
    subtitle: 'Advanced Home Security',
    description:
      'Protect your home and family with state-of-the-art surveillance, smart access control, and 24/7 professional monitoring.',
    image: '/service-security.jpg',
    link: '/services/details?service=security-systems',
    highlights: [
      '4K cameras with night vision',
      'Smart locks & access control',
      'Real-time alerts & AI detection',
      '24/7 professional monitoring',
    ],
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    subtitle: 'Intelligent HVAC Management',
    description:
      'Achieve perfect comfort in every room while dramatically reducing energy costs with our intelligent climate control systems.',
    image: '/service-climate.jpg',
    link: '/services/details?service=climate-control',
    highlights: [
      'Smart learning thermostats',
      'Room-by-room zone control',
      'Air quality monitoring',
      'Weather-adaptive adjustments',
    ],
  },
  {
    icon: Tv,
    title: 'Entertainment',
    subtitle: 'Immersive Audio-Visual Experiences',
    description:
      'From dedicated home theatres to whole-home audio, we create cinema-quality entertainment environments tailored to your lifestyle.',
    image: '/service-entertainment.jpg',
    link: '/services/details?service=entertainment',
    highlights: [
      'Home theatre & Dolby Atmos',
      'Whole-home audio distribution',
      'Unified streaming interface',
      'Outdoor AV systems',
    ],
  },
];

const whyUs = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Our services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-24 pt-36">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-3 mb-6 max-w-2xl">
            Complete Home
            <span className="block text-accent">Automation Services</span>
          </h1>
          <p className="text-background/80 text-lg max-w-xl leading-relaxed">
            End-to-end smart home solutions designed to elevate your living experience,
            from lighting to security, climate to entertainment.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      {/* <section className="py-12 bg-primary">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {whyUs.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{value}</div>
                <div className="text-primary-foreground/70 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Everything You Need for a
              <span className="text-gradient"> Smarter Home</span>
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden glass-card hover-lift ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-95">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent lg:bg-none" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="text-primary" size={24} />
                  </div>

                  <span className="text-primary font-medium text-xs tracking-wider uppercase mb-2">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="text-primary shrink-0" size={16} />
                        <span className="text-foreground text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button className="w-full sm:w-auto">
                      Explore {service.title}
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="w-full max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and our experts will design the perfect automation
            package for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
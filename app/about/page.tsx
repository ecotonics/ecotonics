import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, Award, Clock, Target, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Engineers' },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every installation is executed with meticulous attention to detail and engineering excellence.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are deeply passionate about technology and the positive impact it has on everyday life.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay at the forefront of smart home technology to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We treat every client as a long-term partner, not just a project.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Award-winning design and installation that sets the industry benchmark.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: '24/7 support and maintenance ensuring your systems always perform flawlessly.',
  },
];

const team = [
  {
    name: 'Arun Menon',
    role: 'Founder & CEO',
    image: '/hero.jpg',
    bio: '20+ years in building automation and smart systems.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Design',
    image: '/about.jpg',
    bio: 'Award-winning interior tech integration specialist.',
  },
  {
    name: 'Rahul Krishnan',
    role: 'Lead Engineer',
    image: '/service-lighting.jpg',
    bio: 'Certified automation engineer with 12 years of experience.',
  },
  {
    name: 'Sneha Thomas',
    role: 'Client Relations',
    image: '/service-security.jpg',
    bio: 'Dedicated to ensuring every client has a seamless experience.',
  },
];

const milestones = [
  { year: '2009', title: 'Founded', description: 'Ecotonics was established in Payyanur, Kerala with a vision to bring smart automation to every home.' },
  { year: '2013', title: 'First 100 Projects', description: 'Reached our first 100 completed installations across Kerala and Karnataka.' },
  { year: '2017', title: 'National Expansion', description: 'Expanded operations to major metros including Bangalore, Chennai, and Kochi.' },
  { year: '2020', title: 'Award Recognition', description: 'Received the National Smart Home Excellence Award for innovation in residential automation.' },
  { year: '2023', title: '500+ Projects', description: 'Surpassed 500 completed projects with a 98% client satisfaction rate.' },
  { year: '2024', title: 'New Horizons', description: 'Launched commercial automation division and expanded our engineering team.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Ecotonics office"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-24 pt-36">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-3 mb-6 max-w-2xl">
            Building the Future of
            <span className="block text-accent">Smart Living</span>
          </h1>
          <p className="text-background/80 text-lg md:text-xl max-w-xl leading-relaxed">
            Since 2009, Ecotonics has been transforming spaces with intelligent automation
            that blends luxury, convenience, and sustainability.
          </p>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-16 bg-primary">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{value}</div>
                <div className="text-primary-foreground/70 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                From a Vision to
                <span className="text-gradient"> Industry Leaders</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ecotonics was born from a simple belief — technology should enhance life,
                not complicate it. Founded in 2009 in Payyanur, Kerala, we started as a
                small team of passionate engineers determined to bring world-class home
                automation to Indian homes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over 15 years, we have grown into one of India's most trusted automation
                companies, completing over 500 projects across residential, commercial, and
                hospitality sectors. Our philosophy has always remained the same — deliver
                precision-engineered solutions with a personal touch.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, our team of certified engineers and designers work hand-in-hand with
                each client to craft environments that are intelligent, beautiful, and built
                to last.
              </p>
              <Link href="/#contact">
                <Button size="lg">Work With Us</Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Ecotonics team"
                  width={600}
                  height={500}
                  className="w-full h-125 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-55 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground text-sm">Years of excellence in home automation</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-card p-6 rounded-xl hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Milestones That
              <span className="text-gradient"> Shaped Us</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`glass-card p-6 rounded-xl ${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                    <span className="text-primary font-bold text-sm">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  {/* Empty column for alternating layout */}
                  {index % 2 !== 0 && <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              The People
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, image, bio }) => (
              <div key={name} className="glass-card rounded-2xl overflow-hidden hover-lift">
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{name}</h3>
                  <p className="text-primary text-sm font-medium mt-0.5 mb-2">{role}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{bio}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let's build something extraordinary together. Reach out for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Get In Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
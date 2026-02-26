'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: <>123 Innovation Drive, Suite 500<br />San Francisco, CA 94102</>,
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+91 7510 348 448',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@ecotonics.in',
  },
];

export default function ContactSection() {
//   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Message sent!",
    //   description: "We'll get back to you within 24 hours.",
    // });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Column - Info */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Let's Create Your
              <span className="text-gradient"> Smart Home</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to transform your living space? Contact us for a free consultation.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                    <p className="text-muted-foreground text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-5">
              Request a Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e:any) => setFormData({ ...formData, name: e.target.value })}
                className="h-11 bg-background border-border focus:border-primary"
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e:any) => setFormData({ ...formData, email: e.target.value })}
                  className="h-11 bg-background border-border focus:border-primary"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e:any) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11 bg-background border-border focus:border-primary"
                />
              </div>

              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e:any) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-30 bg-background border-border focus:border-primary resize-none"
                required
              />

              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
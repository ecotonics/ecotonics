'use client';

import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import logoBlack from '@/public/logo-black.png';

const footerLinks = {
  Services: ['Smart Lighting', 'Security Systems', 'Climate Control', 'Entertainment'],
  Company: ['About Us', 'Our Team', 'Careers', 'News'],
  Support: ['Help Center', 'Documentation', 'Community', 'Contact'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                <Image
                  src={logoBlack}
                  alt="ecotonics logo"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-lg font-semibold text-foreground">
                ecotonics
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-5">
              Transforming spaces with intelligent automation. Creating homes that
              think, adapt, and respond to your every need.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-6 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © 2024 ecotonics. All rights reserved.
          </p>
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
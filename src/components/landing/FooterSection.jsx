import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function FooterSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">A</span>
              </div>
              <span className="text-foreground font-display font-bold text-xl">ACOPERIȘURI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Construim acoperișuri premium care definesc orizontul. 
              Calitate, garanție și profesionalism de peste 18 ani.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigare
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Acasă', href: '#hero' },
                { label: 'Servicii', href: '#servicii' },
                { label: 'De ce noi', href: '#de-ce-noi' },
                { label: 'Testimoniale', href: '#testimoniale' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
 

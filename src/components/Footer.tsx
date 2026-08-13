import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-xl text-white">Kamala Wellness</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Proactive immune strengthening and holistic health for your mind, body, and spirit.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Quantum Resonance Magnetic Analyzer", "Non-Linear Scanner", "Holistic Consultation"].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Products', path: '/products' },
                { label: 'About', path: '/about' },
                { label: 'Book a Session', path: '/booking' },
                { label: 'Contact', path: '/contact' },
                { label: 'Admin Dashboard', path: '/admin' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-sage-light" />
                <span>
                  {CONTACT_INFO.phones[0]}
                  <br />
                  {CONTACT_INFO.phones[1]}
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-sage-light" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-sage-light" />
                <span>
                  {CONTACT_INFO.hours.weekdays}
                  <br />
                  {CONTACT_INFO.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} KINETIC ARCHIVE / Kamala Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/products" className="hover:text-white/70 transition-colors">
              Gfrag® Supplements
            </Link>
            <Link to="/booking" className="hover:text-white/70 transition-colors">
              Bookings
            </Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation as useRouterLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useRouterLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <RouterLink
            to="/"
            className={`flex items-center group transition-colors duration-500 ${
              scrolled ? 'text-sage' : 'text-sage md:text-white'
            }`}
          >
            <Logo className="h-12 w-12 md:h-14 md:w-14" />
          </RouterLink>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className={`font-sans text-sm transition-colors duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-sage'
                    : scrolled
                    ? 'text-foreground/80 hover:text-sage'
                    : 'text-foreground/90 md:text-white/90 hover:text-sage md:hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sage" />
                )}
              </RouterLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <RouterLink
              to="/booking"
              className="hidden md:inline-flex items-center gap-2 bg-sage text-white px-5 py-2.5 text-sm font-sans hover:bg-sage-dark transition-colors duration-300"
            >
              Book Now
            </RouterLink>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-foreground p-2"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-8 transition-all">
          <div className="flex justify-between items-center mb-12">
            <RouterLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-sage"
            >
              <Logo className="h-12 w-12" />
            </RouterLink>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground p-2"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-left">
            {navLinks.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-2xl ${
                  isActive(link.path) ? 'text-sage font-semibold' : 'text-foreground'
                }`}
              >
                {link.label}
              </RouterLink>
            ))}

            <RouterLink
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 bg-sage text-white text-center py-4 text-sm font-sans hover:bg-sage-dark transition-colors"
            >
              Book a Session
            </RouterLink>
          </div>
        </div>
      )}
    </>
  );
};

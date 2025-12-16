import React, { useState, useEffect } from 'react';
import { PSLogo } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Practice Areas', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-legal-50/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 mr-12">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="text-legal-gold transition-colors">
                 <PSLogo className="h-12 w-auto sm:h-16" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg sm:text-xl font-bold tracking-wide uppercase ${scrolled ? 'text-legal-900' : 'text-legal-900'}`}>
                  Legally
                </span>
                <span className="hidden sm:block text-[0.6rem] tracking-[0.2em] text-legal-gold uppercase font-bold">
                  Document Center
                </span>
              </div>
            </a>
          </div>
          
          {/* Desktop Nav Links - Shifted to Left */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-legal-900 hover:text-legal-gold transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Spacer to push buttons to right */}
          <div className="flex-grow"></div>

          {/* Desktop Action Buttons - Far Right */}
          <div className="hidden md:flex items-center gap-4">
                <a
                    href="#contact"
                    className="text-legal-900 border border-legal-900 px-4 py-2 text-sm font-medium hover:bg-legal-gold hover:border-legal-gold hover:text-white transition-all backdrop-blur-sm bg-white/10"
                >
                    Contact Us
                </a>
          </div>

          {/* Mobile Menu Button (Right Aligned) */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-legal-900 hover:text-legal-gold focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-legal-50 shadow-xl border-t border-legal-100 absolute w-full top-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-legal-900 hover:bg-legal-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
                 <a
                    href="#contact"
                    className="block text-center w-full border border-legal-900 text-legal-900 px-4 py-3 rounded-none text-base font-medium hover:bg-legal-gold hover:border-legal-gold hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact Us
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
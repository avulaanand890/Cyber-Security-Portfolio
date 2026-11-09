import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'home', href: '#home' },
  { name: 'about', href: '#about' },
  { name: 'skills', href: '#skills' },
  { name: 'projects', href: '#projects' },
  { name: 'certifications', href: '#certifications' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const current = navLinks.find((link) => {
        const el = document.getElementById(link.href.substring(1));
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.href.substring(1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black border-b border-green-600">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#home" onClick={(e) => goTo(e, '#home')} className="font-bold text-green-400 text-lg">
          {'>'} anand<span className="term-cursor" aria-hidden="true"></span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="nav-link py-1"
                aria-current={activeSection === link.href.substring(1)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden btn-term !p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="lg:hidden bg-black border-t border-green-600 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="nav-link inline-block py-1"
                aria-current={activeSection === link.href.substring(1)}
              >
                {'> '}{link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

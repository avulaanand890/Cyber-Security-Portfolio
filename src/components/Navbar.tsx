import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, User, Briefcase, Award, Mail, Sparkles } from 'lucide-react';

interface NavbarProps {
  onPageChange?: (page: string) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Only update active section if we're on the home page
      if (currentPage === 'home') {
        const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: User, page: 'home' },
    { name: 'About', href: '#about', icon: Code, page: 'home' },
    { name: 'Skills', href: '#skills', icon: Zap, page: 'home' },
    { name: 'Projects', href: '#projects', icon: Briefcase, page: 'home' },
    { name: 'Certifications', href: '#certifications', icon: Award, page: 'home' },
    { name: 'Contact', href: '#contact', icon: Mail, page: 'home' },
    { name: 'Freelance', href: '#freelance', icon: Sparkles, page: 'freelance' },
  ];

  const handleNavClick = (link: any) => {
    setIsOpen(false);
    
    if (link.page === 'freelance') {
      onPageChange?.('freelance');
    } else if (link.page === 'home') {
      if (currentPage !== 'home') {
        onPageChange?.('home');
        setTimeout(() => {
          if (link.href !== '#home') {
            const element = document.querySelector(link.href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Floating Navigation Orb */}
      <div 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
          scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-gradient-shift"></div>
        
        {/* Main Navigation Container */}
        <nav className={`relative bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-full px-8 py-4 shadow-2xl transition-all duration-500 ${
          scrolled ? 'shadow-green-500/20' : 'shadow-black/50'
        }`}>
          
          {/* Morphing Border Animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/30 via-blue-400/30 to-purple-400/30 animate-morph-bg opacity-50"></div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Logo with Animated Elements */}
            <div className="flex items-center mr-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative bg-black px-3 py-2 rounded-lg border border-green-500/30">
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient-shift">
                    Anand
                  </span>
                </div>
              </div>
              
              {/* Floating Code Particles */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400 rounded-full animate-float-particle-delayed opacity-80"></div>
            </div>

            {/* Navigation Links with Advanced Hover Effects */}
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = currentPage === 'home' ? activeSection === link.href.substring(1) : currentPage === link.page;
              
              return (
                <div key={link.name} className="relative group">
                  {/* Active Section Indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-scale-in"></div>
                  )}
                  
                  {/* Special Freelance Button Styling */}
                  {link.page === 'freelance' ? (
                    <button
                      onClick={() => handleNavClick(link)}
                      className={`relative flex items-center px-4 py-2 rounded-full transition-all duration-300 group-hover:scale-110 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-400/50 ${
                        currentPage === 'freelance' 
                          ? 'text-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/20' 
                          : 'text-purple-300 hover:text-purple-200'
                      }`}
                    >
                      {/* Icon with Special Animation */}
                      <Icon 
                        size={16} 
                        className={`mr-2 transition-all duration-300 ${
                          currentPage === 'freelance' ? 'animate-sparkle' : 'group-hover:rotate-12'
                        }`} 
                      />
                      
                      {/* Text with Gradient */}
                      <span className="text-sm font-medium relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {link.name}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${
                          currentPage === 'freelance' ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></div>
                      </span>
                      
                      {/* Special Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link)}
                      className={`relative flex items-center px-4 py-2 rounded-full transition-all duration-300 group-hover:scale-110 ${
                        isActive 
                          ? 'text-green-400 bg-green-500/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {/* Icon with Rotation Animation */}
                      <Icon 
                        size={16} 
                        className={`mr-2 transition-all duration-300 ${
                          isActive ? 'animate-rotate-in' : 'group-hover:rotate-12'
                        }`} 
                      />
                      
                      {/* Text with Typewriter Effect on Hover */}
                      <span className="text-sm font-medium relative overflow-hidden">
                        {link.name}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></div>
                      </span>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/0 to-blue-400/0 group-hover:from-green-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                    </button>
                  )}
                  
                  {/* Floating Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {link.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                  </div>
                </div>
              );
            })}

            {/* Status Indicator */}
            <div className="flex items-center ml-6 pl-6 border-l border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div className="flex items-center">
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Anand
              </span>
            </div>
            
            <button
              className="relative p-2 text-gray-300 hover:text-green-400 focus:outline-none group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-blue-400/0 group-hover:from-green-400/10 group-hover:to-blue-400/10 rounded-lg transition-all duration-300"></div>
              <div className="relative">
                {isOpen ? (
                  <X size={24} className="animate-rotate-in" />
                ) : (
                  <Menu size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className="absolute top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl animate-slide-in-bottom">
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white mb-2">Navigation</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = currentPage === 'home' ? activeSection === link.href.substring(1) : currentPage === link.page;
                  
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                        link.page === 'freelance'
                          ? currentPage === 'freelance'
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30'
                            : 'text-purple-300 hover:text-purple-200 hover:bg-purple-500/10 border border-transparent hover:border-purple-600/50'
                          : isActive 
                            ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border border-green-500/30' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-gray-600/50'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon 
                        size={20} 
                        className={`mr-3 transition-all duration-300 ${
                          isActive ? (link.page === 'freelance' ? 'text-purple-400' : 'text-green-400') : 'group-hover:rotate-12'
                        }`} 
                      />
                      <span className="font-medium">{link.name}</span>
                      
                      {isActive && (
                        <div className={`ml-auto w-2 h-2 rounded-full animate-pulse ${
                          link.page === 'freelance' ? 'bg-purple-400' : 'bg-green-400'
                        }`}></div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Status */}
              <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Cursor Trail (Desktop Only) */}
      <div 
        className="hidden lg:block fixed pointer-events-none z-30 w-4 h-4 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-sm transition-all duration-300"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${scrolled ? 1.2 : 1})`,
        }}
      ></div>
    </>
  );
};

export default Navbar;
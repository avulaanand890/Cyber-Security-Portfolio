import React from 'react';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* CTA Box */}
          <div className="bg-gradient-to-r from-green-900/40 to-gray-800 p-8 rounded-lg shadow-lg border border-green-500/30 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to level up your digital presence?
                </h3>
                <p className="text-gray-300">
                  Let's build your next web app – together.
                </p>
              </div>
              
              <a 
                href="#contact"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center md:justify-start"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
          
          {/* Main Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-400">
                  © 2025 Anand | Built with ❤️ using React
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:avulaanand890@gmail.com" 
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
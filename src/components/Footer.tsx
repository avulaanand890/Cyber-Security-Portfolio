import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-green-600 pt-10 pb-8 relative z-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-300 text-sm">© 2025 Anand | Built with ❤️ using React</p>
        <div className="flex space-x-6">
          <a href="#" className="nav-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="#" className="nav-link" aria-label="GitHub"><Github size={20} /></a>
          <a href="mailto:avulaanand890@gmail.com" className="nav-link" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

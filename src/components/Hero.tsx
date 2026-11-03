import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const automationTexts = [
    "Building Scalable Solutions",
    "Automating Complex Workflows", 
    "Crafting Digital Experiences",
    "Optimizing System Performance",
    "Implementing IAM Solutions"
  ];

  useEffect(() => {
    // Simulate image loading delay for dramatic entrance
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % automationTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-12 bg-black overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(25,245,208,0.15),transparent_70%)]"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-green-400/20 text-6xl font-mono animate-float">{'<>'}</div>
        <div className="absolute bottom-32 right-16 text-blue-400/20 text-4xl font-mono animate-float-particle">{'{}'}</div>
        <div className="absolute top-1/2 right-20 text-purple-400/20 text-5xl font-mono animate-float-particle-delayed">[]</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl animate-fadeIn">
              {/* Main Title with Gradient Animation */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white block mb-2">Anand – </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-shift">
                  Software Engineer
                </span>
              </h1>
              
              {/* Automation Typewriter Effect */}
              <div className="h-16 mb-6">
                <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                  <span className="text-green-400 font-mono">{'> '}</span>
                  <span className="animate-typewriter border-r-2 border-green-400">
                    {automationTexts[textIndex]}
                  </span>
                </h2>
              </div>
              
              {/* Enhanced Description */}
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Specialized in <span className="text-green-400 font-semibold">Identity & Access Management</span>, 
                building secure, scalable web applications with <span className="text-blue-400 font-semibold">React</span>, 
                <span className="text-purple-400 font-semibold"> Node.js</span>, and enterprise IAM solutions. 
                Certified in <span className="text-yellow-400 font-semibold">ForgeRock IAM</span> with expertise in automation and DevOps.
              </p>
              
              {/* Unique Glowing Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <button 
                  onClick={() => setShowModal(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
                >
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Hire Me
                    <div className="ml-2 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <span className="text-yellow-300">✨</span>
                    </div>
                  </span>
                  
                  {/* Particle Effects */}
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-twinkle"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-twinkle-delayed"></div>
                </button>
                
                <a 
                  href="/anand-resume.pdf" 
                  download
                  className="group relative px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
                >
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  
                  {/* Fill Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/20 transition-all duration-500"></div>
                  
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-green-400/50 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center justify-center group-hover:text-green-300 transition-colors duration-300">
                    <span className="mr-2">📄</span>
                    Download Resume
                    <div className="ml-2 transform group-hover:rotate-12 transition-transform duration-300">
                      <span>⬇️</span>
                    </div>
                  </span>
                </a>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'ForgeRock IAM', 'JavaScript', 'TypeScript'].map((tech, index) => (
                  <div 
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-green-500/50 hover:text-green-400 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Revolutionary Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Loading Placeholder */}
              {!imageLoaded && (
                <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center animate-pulse">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 text-sm">Loading Profile...</p>
                  </div>
                </div>
              )}

              {/* Main Image with Dramatic Entrance */}
              <div className={`transition-all duration-2000 ${
                imageLoaded 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-50 rotate-45'
              }`}>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center animate-float shadow-lg shadow-green-500/50">
                  <span className="text-white font-bold text-lg">⚛️</span>
                </div>
                
                <div className="absolute -top-4 -right-12 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center animate-float-particle shadow-lg shadow-blue-500/50">
                  <span className="text-white font-bold">🔧</span>
                </div>
                
                <div className="absolute -bottom-6 -left-10 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center animate-float-particle-delayed shadow-lg shadow-purple-500/50">
                  <span className="text-white font-bold">🛡️</span>
                </div>

                {/* Multi-layered Glow Effects */}
                <div className="absolute -inset-8 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-600/20 blur-2xl animate-gradient-shift"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 to-blue-500/30 blur-xl animate-pulse"></div>
                
                {/* Professional Image Container */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-1 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-1000">
                  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl overflow-hidden">
                    
                    {/* Profile Image */}
                    <img 
                      src="/src/assets/IMG_20200105_083735_800.jpg"
                      alt="Anand - Software Engineer" 
                      className="w-full h-full object-cover filter brightness-110 contrast-110 hover:brightness-125 transition-all duration-500"
                      onLoad={() => setImageLoaded(true)}
                    />
                    
                    {/* Code Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 text-green-400 font-mono text-xs">
                        <div className="animate-typewriter">const developer = "Anand";</div>
                        <div className="animate-typewriter" style={{ animationDelay: '1s' }}>console.log("Ready to code!");</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-2 left-1/2 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                  <div className="absolute top-1/2 -right-2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                  <div className="absolute top-1/2 -left-2 w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                </div>

                {/* Status Indicator */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 animate-fade-in-up">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Hero;
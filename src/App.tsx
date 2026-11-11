import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ParallaxBackground from './components/ParallaxBackground';
import { handleCallback } from './auth/oauth';

const App: React.FC = () => {
  const [authResult] = useState(() => handleCallback());
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = "Anand | Full Stack Developer";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="bg-black text-white relative">
      <ParallaxBackground />
      
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Navbar />
        {authResult !== 'none' && (
          <div
            role="status"
            className="fixed top-20 right-4 z-50 bg-black border border-green-600 text-green-400 px-4 py-2 text-sm font-mono"
          >
            {authResult === 'success' ? '> Logged in' : '> Login failed: state mismatch'}
          </div>
        )}
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
};

export default App;
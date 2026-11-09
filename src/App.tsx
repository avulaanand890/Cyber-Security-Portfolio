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

const App: React.FC = () => {
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
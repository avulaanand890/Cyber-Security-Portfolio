import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ParallaxBackground from './components/ParallaxBackground';
import FreelancePage from './components/FreelancePage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (currentPage === 'freelance') {
    return (
      <div className="bg-black text-white relative">
        <ParallaxBackground />
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
          <FreelancePage onPageChange={handlePageChange} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white relative">
      <ParallaxBackground />
      
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
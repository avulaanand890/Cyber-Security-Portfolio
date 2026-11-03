import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Initializing secure session...' },
      { progress: 40, text: 'Loading security modules...' },
      { progress: 60, text: 'Verifying integrity...' },
      { progress: 80, text: 'Establishing encrypted channel...' },
      { progress: 100, text: 'Access granted.' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 500);
        }, 800);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element w-32 h-32 top-1/4 left-1/4 animate-parallax-float"></div>
        <div className="parallax-element w-24 h-24 top-3/4 right-1/4 animate-parallax-float" style={{ animationDelay: '2s' }}></div>
        <div className="parallax-element w-16 h-16 top-1/2 left-3/4 animate-parallax-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        <div className="loading-logo animate-loading-pulse">
          Anand
        </div>
        
        <div className="loading-bar mb-4">
          <div 
            className="loading-progress animate-gradient-shift"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loading-text animate-fade-in-up">
          {loadingText}
        </div>
        
        {/* Loading percentage */}
        <div className="text-green-400 text-2xl font-bold mt-4 animate-scale-in">
          {progress}%
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-twinkle"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-twinkle-delayed"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle-slow"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-green-400 rounded-full animate-twinkle"></div>
    </div>
  );
};

export default LoadingScreen;
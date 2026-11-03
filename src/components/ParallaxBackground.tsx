import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-bg">
      {/* Large floating elements */}
      <div 
        className="parallax-element w-96 h-96 top-1/4 -left-48 opacity-30"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
          background: 'radial-gradient(circle, rgba(25, 245, 208, 0.1) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="parallax-element w-80 h-80 top-3/4 -right-40 opacity-20"
        style={{ 
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
          background: 'radial-gradient(circle, rgba(56, 213, 240, 0.1) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="parallax-element w-64 h-64 top-1/2 left-1/4 opacity-25"
        style={{ 
          transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * -0.03}px)`,
          background: 'radial-gradient(circle, rgba(74, 125, 240, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* Medium floating elements */}
      <div 
        className="parallax-element w-32 h-32 top-1/3 right-1/3 opacity-40"
        style={{ 
          transform: `translateY(${scrollY * -0.12}px) translateX(${scrollY * 0.06}px)`,
          background: 'linear-gradient(45deg, rgba(25, 245, 208, 0.15), rgba(56, 213, 240, 0.15))'
        }}
      />
      
      <div 
        className="parallax-element w-24 h-24 top-2/3 left-1/6 opacity-35"
        style={{ 
          transform: `translateY(${scrollY * 0.18}px) translateX(${scrollY * -0.09}px)`,
          background: 'linear-gradient(135deg, rgba(74, 125, 240, 0.15), rgba(25, 245, 208, 0.15))'
        }}
      />

      {/* Small floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * (0.05 + Math.random() * 0.1)}px)`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
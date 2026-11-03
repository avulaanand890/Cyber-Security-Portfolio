import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface SkillItemProps {
  name: string;
  level: number;
  isVisible: boolean;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, isVisible, delay }) => {
  return (
    <div 
      className={`mb-4 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-green-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'animate-gradient-shift' : ''
          }`}
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay + 200}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef: frontendRef, visibleItems: frontendVisible } = useStaggeredAnimation(4, 150);
  const { containerRef: backendRef, visibleItems: backendVisible } = useStaggeredAnimation(4, 150);
  const { containerRef: toolsRef, visibleItems: toolsVisible } = useStaggeredAnimation(4, 150);

  const frontendSkills = [
    { name: 'ReactJS', level: 90 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'REST APIs', level: 90 },
  ];

  const toolsSkills = [
    { name: 'GitHub', level: 90 },
    { name: 'Jenkins', level: 75 },
    { name: 'Kubernetes', level: 65 },
    { name: 'CI/CD', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-typewriter">Skills Snapshot</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            <span className="text-green-400 animate-twinkle">💡</span> Each skill backed by hands-on projects, not just tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            ref={frontendRef}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover-lift animate-morph-bg"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center animate-fade-in-up">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                isVisible={frontendVisible[index]}
                delay={index * 100}
              />
            ))}
          </div>

          <div 
            ref={backendRef}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover-lift animate-morph-bg"
            style={{ animationDelay: '2s' }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center animate-fade-in-up">Backend</h3>
            {backendSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                isVisible={backendVisible[index]}
                delay={index * 100}
              />
            ))}
          </div>

          <div 
            ref={toolsRef}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover-lift animate-morph-bg"
            style={{ animationDelay: '4s' }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center animate-fade-in-up">Tools</h3>
            {toolsSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                isVisible={toolsVisible[index]}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { CheckCircle, Award, Shield, Code, Cloud, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const certifications = [
    { 
      name: 'ForgeRock IAM Certified Professional', 
      completed: true, 
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Enterprise Identity & Access Management expertise'
    },
    { 
      name: 'AWS Cloud Practitioner', 
      completed: false, 
      icon: Cloud,
      color: 'from-orange-500 to-yellow-500',
      description: 'Cloud infrastructure and services'
    },
    { 
      name: 'Certified JavaScript Developer', 
      completed: false, 
      icon: Code,
      color: 'from-yellow-500 to-green-500',
      description: 'Advanced JavaScript and ES6+ features'
    },
    { 
      name: 'GitHub Campus Expert', 
      completed: false, 
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      description: 'Open source leadership and community building'
    },
  ];

  const achievements = [
    {
      title: 'IAM Implementation Expert',
      description: 'Successfully deployed ForgeRock IAM solutions for enterprise clients',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      title: 'Full-Stack Development',
      description: '3+ years building scalable web applications with modern technologies',
      icon: Code,
      color: 'text-green-400'
    },
    {
      title: 'Security Specialist',
      description: 'Specialized in OAuth 2.0, SAML, JWT, and multi-factor authentication',
      icon: Award,
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-shift">
                Certifications & Achievements
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8 animate-scale-in"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Continuous learning and professional development in cutting-edge technologies and industry best practices.
            </p>
          </div>

          <div 
            ref={contentRef}
            className={`transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Certifications Section */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover-lift">
                <div className="flex items-center mb-6">
                  <Award className="text-yellow-400 mr-3 animate-rotate-in" size={28} />
                  <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
                </div>

                <div className="space-y-6">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <div 
                        key={index} 
                        className={`flex items-start p-4 rounded-xl border transition-all duration-300 hover-lift ${
                          cert.completed 
                            ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/50' 
                            : 'bg-gray-700/30 border-gray-600/30 hover:border-gray-500/50'
                        }`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {/* Certification Icon */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r ${cert.color} shadow-lg`}>
                          <Icon size={24} className="text-white" />
                        </div>

                        {/* Certification Details */}
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className={`font-semibold ${cert.completed ? 'text-green-400' : 'text-gray-300'}`}>
                              {cert.name}
                            </h4>
                            {cert.completed && (
                              <div className="ml-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                                <CheckCircle size={16} className="text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {cert.description}
                          </p>
                          
                          {/* Status Badge */}
                          <div className="mt-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              cert.completed 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>
                              {cert.completed ? '✓ Certified' : '⏳ In Progress'}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover-lift">
                <div className="flex items-center mb-6">
                  <Star className="text-purple-400 mr-3 animate-rotate-in" size={28} />
                  <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                </div>

                <div className="space-y-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div 
                        key={index}
                        className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover-lift"
                        style={{ animationDelay: `${(index + 4) * 200}ms` }}
                      >
                        <div className="flex items-start">
                          <Icon size={24} className={`mr-4 mt-1 ${achievement.color} animate-float`} />
                          <div>
                            <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Learning Goals */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">🎯</span>
                    Current Learning Goals
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                      Advanced React patterns and performance optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                      Cloud architecture and serverless technologies
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                      Advanced DevOps and container orchestration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Quote */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <blockquote className="text-gray-300 italic text-lg mb-4">
                "Continuous learning isn't just about staying current – it's about pushing the boundaries of what's possible in software development."
              </blockquote>
              <footer className="text-green-400 font-semibold">
                – Commitment to Excellence
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
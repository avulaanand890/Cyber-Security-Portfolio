import React from 'react';
import SectionHeading from './SectionHeading';
import { Shield, GitBranch, Settings, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollAnimation();

  const tools = [
    { name: 'ForgeRock IAM', icon: Shield, color: 'from-red-500 to-orange-500', certified: true },
    { name: 'Confluence', icon: GitBranch, color: 'from-blue-500 to-indigo-500', certified: false },
    { name: 'Jira', icon: Settings, color: 'from-blue-600 to-blue-800', certified: false },
    { name: 'GitHub', icon: GitBranch, color: 'from-gray-600 to-gray-800', certified: false },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <SectionHeading label="about" subtitle="Hi, I'm Anand. Let's build secure identity systems." />
          </div>

          <div 
            ref={contentRef}
            className={`prose prose-lg prose-invert max-w-none transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              I specialize in <span className="text-green-400 font-semibold">Identity & Access Management</span> – 
              crafting secure, scalable solutions on the ForgeRock / Ping Identity platform that protect digital assets while 
              delivering exceptional user experiences. With expertise in enterprise IAM systems, 
              I bridge the gap between security and usability.
            </p>

            <div 
              ref={cardsRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-500 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 hover-lift animate-fade-in-left stagger-1">
                <div className="flex items-center mb-4">
                  <Shield className="text-green-500 mr-3 animate-rotate-in" size={24} />
                  <h3 className="text-xl font-semibold text-white">IAM & Security</h3>
                </div>
                <p className="text-gray-400">
                  PingAM (ForgeRock AM), PingIDM, PingDS, PingGateway, OAuth 2.0, SAML 2.0, Multi-factor Authentication
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 hover-lift animate-fade-in-left stagger-3">
                <div className="flex items-center mb-4">
                  <GitBranch className="text-green-500 mr-3 animate-rotate-in" size={24} />
                  <h3 className="text-xl font-semibold text-white">ForgeOps & Automation</h3>
                </div>
                <p className="text-gray-400">
                  ForgeOps, GitHub, Jenkins, Kubernetes, Docker, Automation Scripts
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 hover-lift animate-fade-in-right stagger-4">
                <div className="flex items-center mb-4">
                  <Award className="text-green-500 mr-3 animate-rotate-in" size={24} />
                  <h3 className="text-xl font-semibold text-white">Certified Expert</h3>
                </div>
                <p className="text-gray-400">
                  ForgeRock IAM Certified, Enterprise Security Specialist
                </p>
              </div>
            </div>

            {/* Tools & Technologies Section */}
            <div 
              ref={toolsRef}
              className={`mb-12 transition-all duration-1000 delay-700 ${
                toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Tools & Technologies
                </span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div 
                      key={tool.name}
                      className="group relative bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover-lift"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Certification Badge */}
                      {tool.certified && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      )}
                      
                      {/* Tool Icon with Gradient Background */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      
                      {/* Tool Name */}
                      <h4 className="text-white font-semibold text-center text-sm group-hover:text-green-400 transition-colors duration-300">
                        {tool.name}
                      </h4>
                      
                      {/* Certification Label */}
                      {tool.certified && (
                        <p className="text-yellow-400 text-xs text-center mt-1 font-medium">
                          Certified
                        </p>
                      )}
                      
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Quote */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-green-500/30 animate-morph-bg backdrop-blur-sm">
              <blockquote className="text-gray-300 italic text-lg text-center">
                "Security isn't just about building walls – it's about creating intelligent, user-friendly systems that protect without compromising experience."
                <footer className="text-green-400 mt-4 font-semibold">– Anand, IAM Specialist</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
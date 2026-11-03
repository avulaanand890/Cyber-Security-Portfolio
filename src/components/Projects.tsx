import React from 'react';
import { ExternalLink, Github, Shield, Calculator, Palette, Globe } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface ProjectProps {
  title: string;
  tech: string;
  description: string;
  link: string;
  github?: string;
  imageUrl: string;
  icon: React.ComponentType<any>;
  isVisible: boolean;
  delay: number;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  tech, 
  description, 
  link, 
  github, 
  imageUrl, 
  icon: Icon, 
  isVisible, 
  delay, 
  featured = false 
}) => {
  return (
    <div 
      className={`bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all duration-700 border border-gray-700 hover:border-green-500/50 group hover-lift relative ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      } ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          ⭐ Featured
        </div>
      )}

      {/* Project Image with Advanced Hover Effects */}
      <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Tech Icon Overlay */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-600 group-hover:border-green-500/50 transition-all duration-300">
          <Icon className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={24} />
        </div>
        
        {/* Animated Code Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-700">
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-green-400 font-mono text-xs">
              <div className="animate-typewriter">// {title.toLowerCase().replace(/\s+/g, '_')}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className={`p-6 ${featured ? 'p-8' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <h3 className={`font-bold text-white group-hover:text-green-400 transition-colors duration-300 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>
        </div>
        
        {/* Tech Stack Badge */}
        <div className="flex items-center mb-4">
          <span className="text-xs font-medium bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 animate-pulse">
            {tech}
          </span>
        </div>
        
        {/* Description */}
        <p className={`text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed ${
          featured ? 'text-base mb-6' : 'text-sm mb-4'
        }`}>
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 transform hover:translate-x-1 group/link"
          >
            <ExternalLink size={16} className="mr-2 animate-float group-hover/link:rotate-12 transition-transform duration-300" />
            <span className="font-medium">Live Demo</span>
          </a>
          
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 group/github"
            >
              <Github size={16} className="mr-2 group-hover/github:rotate-12 transition-transform duration-300" />
              <span className="font-medium">Code</span>
            </a>
          )}
        </div>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-blue-500/0 group-hover:from-green-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef: projectsRef, visibleItems: projectsVisible } = useStaggeredAnimation(6, 200);

  const projects = [
    {
      title: 'IAM Security Dashboard',
      tech: 'React, ForgeRock, TypeScript',
      description: 'Enterprise-grade Identity & Access Management dashboard with real-time user provisioning, role management, and security analytics. Features advanced authentication flows and compliance reporting.',
      link: 'https://iam-dashboard-demo.netlify.app',
      github: 'https://github.com/anand/iam-dashboard',
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: Shield,
      featured: true
    },
    {
      title: 'Interactive Counter App',
      tech: 'HTML, CSS, JavaScript',
      description: 'Sleek, responsive counter application with smooth animations, local storage persistence, and customizable themes. Demonstrates clean UI/UX principles and DOM manipulation mastery.',
      link: 'https://counter-modification.netlify.app',
      github: 'https://github.com/anand/counter-app',
      imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: Calculator
    },
    {
      title: 'RGB Color Picker Pro',
      tech: 'HTML, CSS, JavaScript',
      description: 'Advanced color picker tool with real-time RGB/HEX conversion, color palette generation, and accessibility contrast checking. Features gradient preview and export functionality.',
      link: 'https://color-pick-project.netlify.app',
      github: 'https://github.com/anand/color-picker',
      imageUrl: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: Palette
    },
    {
      title: 'Heritage Website Clone',
      tech: 'HTML, CSS, JavaScript',
      description: 'Pixel-perfect recreation of a popular FMCG website with responsive design, optimized performance, and enhanced accessibility features. Showcases attention to detail and modern web standards.',
      link: 'https://heritageproject.netlify.app',
      github: 'https://github.com/anand/heritage-clone',
      imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: Globe
    },
    {
      title: 'Task Automation Suite',
      tech: 'Node.js, Express, MongoDB',
      description: 'Comprehensive task automation platform with workflow builder, scheduled jobs, and integration APIs. Features real-time monitoring and custom trigger configurations.',
      link: 'https://automation-suite-demo.netlify.app',
      github: 'https://github.com/anand/automation-suite',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: Shield
    },
    {
      title: 'Weather Analytics Dashboard',
      tech: 'React, Chart.js, API Integration',
      description: 'Real-time weather analytics with interactive charts, forecasting models, and location-based insights. Integrates multiple weather APIs for comprehensive data visualization.',
      link: 'https://weather-analytics-demo.netlify.app',
      github: 'https://github.com/anand/weather-dashboard',
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-shift">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up text-lg">
            From enterprise IAM solutions to creative web applications – each project showcases 
            <span className="text-green-400 font-semibold"> technical excellence</span> and 
            <span className="text-blue-400 font-semibold"> innovative problem-solving</span>.
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              tech={project.tech}
              description={project.description}
              link={project.link}
              github={project.github}
              imageUrl={project.imageUrl}
              icon={project.icon}
              isVisible={projectsVisible[index]}
              delay={index * 200}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate on your next project and create solutions that make a difference.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="mr-2">🚀</span>
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
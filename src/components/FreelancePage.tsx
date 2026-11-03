import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Palette, 
  Code, 
  Rocket, 
  Star, 
  CheckCircle, 
  Users, 
  Award,
  Brain,
  Wand2,
  Globe,
  Smartphone,
  Monitor,
  Send,
  Mail,
  Phone
} from 'lucide-react';

interface FreelancePageProps {
  onPageChange: (page: string) => void;
}

const FreelancePage: React.FC<FreelancePageProps> = ({ onPageChange }) => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      title: 'AI-Powered Portfolio Design',
      description: 'Create stunning, unique portfolios that make you stand out from the crowd',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Custom AI-generated designs', 'Responsive layouts', 'Interactive animations', 'SEO optimized']
    },
    {
      title: 'Student-Friendly Websites',
      description: 'Affordable, professional websites designed specifically for students and fresh graduates',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: ['Budget-friendly pricing', 'Modern designs', 'Mobile-first approach', 'Fast delivery']
    },
    {
      title: 'Business Web Solutions',
      description: 'Complete web solutions for small businesses and startups',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      features: ['E-commerce integration', 'CMS solutions', 'Analytics setup', 'Maintenance support']
    },
    {
      title: 'AI Design Tools Integration',
      description: 'Leverage cutting-edge AI tools to create designs that were impossible before',
      icon: Wand2,
      color: 'from-orange-500 to-red-500',
      features: ['AI-generated graphics', 'Smart color palettes', 'Automated layouts', 'Content optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Computer Science Student',
      text: 'Anand created an amazing portfolio for me that helped me land my first internship! The AI-powered design was exactly what I needed.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Rahul Patel',
      role: 'Startup Founder',
      text: 'The website Anand built for our startup exceeded all expectations. The AI tools integration made our brand look incredibly professional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Sneha Reddy',
      role: 'Freelance Designer',
      text: 'Working with Anand was a game-changer. His use of AI design tools helped me create a portfolio that tripled my client inquiries.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const pricingPlans = [
    {
      name: 'Student Special',
      price: '₹2,999',
      originalPrice: '₹5,999',
      description: 'Perfect for students and fresh graduates',
      features: [
        'Custom portfolio design',
        'Mobile responsive',
        'Basic animations',
        '3 revisions',
        '1 month support'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '₹7,999',
      originalPrice: '₹12,999',
      description: 'Ideal for professionals and small businesses',
      features: [
        'AI-powered design',
        'Advanced animations',
        'SEO optimization',
        'Contact forms',
        'Unlimited revisions',
        '3 months support'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '₹15,999',
      originalPrice: '₹25,999',
      description: 'Complete solution for businesses',
      features: [
        'Full AI integration',
        'E-commerce ready',
        'CMS integration',
        'Analytics setup',
        'Performance optimization',
        '6 months support',
        'Priority delivery'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Header Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => onPageChange('home')}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </button>

          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Hero Title */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient-shift">
                  AI-Powered
                </span>
                <br />
                <span className="text-white">Design Magic</span>
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Sparkles className="text-purple-400 animate-sparkle" size={32} />
                <p className="text-xl text-gray-300 max-w-3xl">
                  Transform your digital presence with cutting-edge AI design tools that create 
                  <span className="text-purple-400 font-semibold"> stunning, unique websites</span> that 
                  make you stand out from the competition.
                </p>
                <Wand2 className="text-pink-400 animate-float" size={32} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: '50+', label: 'Happy Clients', icon: Users },
                { number: '100%', label: 'Satisfaction Rate', icon: Star },
                { number: '24h', label: 'Quick Delivery', icon: Zap },
                { number: '∞', label: 'Creative Possibilities', icon: Brain }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Icon className="text-purple-400 mx-auto mb-3 animate-float" size={32} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center">
                  <Rocket className="mr-2 animate-float" size={20} />
                  Start Your Project
                  <Sparkles className="ml-2 animate-sparkle" size={16} />
                </span>
              </button>
              
              <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/20 transition-all duration-500"></div>
                <span className="relative z-10 flex items-center justify-center group-hover:text-purple-300 transition-colors duration-300">
                  <Palette className="mr-2" size={20} />
                  View Portfolio
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  What I Create
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Using the latest AI tools and technologies to bring your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover-lift cursor-pointer ${
                      activeService === index ? 'ring-2 ring-purple-500/50' : ''
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
                  Student-Friendly Pricing
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Quality doesn't have to be expensive. Choose a plan that fits your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover-lift ${
                    plan.popular 
                      ? 'border-purple-500/50 ring-2 ring-purple-500/30 scale-105' 
                      : 'border-gray-700/50 hover:border-gray-600/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Star className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                    </div>
                    <span className="text-green-400 text-sm font-medium">50% OFF Limited Time</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
                  What Students Say
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Real feedback from real students who transformed their careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and bring your vision to life with the power of AI-driven design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:avulaanand890@gmail.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Mail className="mr-2" size={20} />
                    Email Me
                  </span>
                </a>
                
                <button 
                  onClick={() => onPageChange('home')}
                  className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center group-hover:text-purple-300 transition-colors duration-300">
                    <Phone className="mr-2" size={20} />
                    View Portfolio
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreelancePage;
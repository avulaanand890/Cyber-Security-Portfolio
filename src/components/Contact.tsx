import React, { useState } from 'react';
import { Send, Mail, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Messages from the form are delivered to this address (same one shown below).
const CONTACT_EMAIL = 'avulaanand890@gmail.com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, // used as the reply-to address
          phone: formData.phone || 'Not provided',
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || `Request failed (${response.status})`);
      }

      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        type: 'success'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus({
        message: `Sorry, your message could not be sent. Please try again or email ${CONTACT_EMAIL} directly.`,
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-typewriter">Let's Talk</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8 animate-scale-in"></div>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
              Got a project in mind? Let's build it together.
            </p>
          </div>

          <div 
            ref={formRef}
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-xl hover-lift transition-all duration-1000 ${
              formVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 bg-gradient-to-br from-gray-900 to-black animate-gradient-shift">
                <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in-left">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start animate-fade-in-left stagger-1">
                    <Mail className="text-green-400 mr-4 mt-1 animate-float" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a href="mailto:avulaanand890@gmail.com" className="text-white hover:text-green-400 transition-colors">
                        avulaanand890@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-in-left stagger-2">
                    <Phone className="text-green-400 mr-4 mt-1 animate-float" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <p className="text-white">Available upon request</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 animate-fade-in-left stagger-3">
                  <p className="text-gray-400 mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8">
                {formStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg flex items-start animate-slide-in-bottom ${formStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="mr-2 flex-shrink-0 mt-0.5 animate-scale-in\" size={18} />
                    ) : (
                      <AlertCircle className="mr-2 flex-shrink-0 mt-0.5 animate-scale-in" size={18} />
                    )}
                    <span>{formStatus.message}</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="animate-fade-in-right stagger-1">
                      <label htmlFor="name" className="block text-gray-400 mb-2">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 focus:scale-105"
                        required
                      />
                    </div>
                    
                    <div className="animate-fade-in-right stagger-2">
                      <label htmlFor="email" className="block text-gray-400 mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 focus:scale-105"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="animate-fade-in-right stagger-3">
                    <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="animate-fade-in-right stagger-4">
                    <label htmlFor="message" className="block text-gray-400 mb-2">Message / Project Details*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 focus:scale-105"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6 animate-fade-in-right stagger-5">
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 animate-twinkle">🔒</span> Your information stays private. No spam, ever.
                    </p>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/20 transform hover:scale-105 animate-fade-in-right stagger-6 ${isSubmitting ? 'opacity-75 cursor-not-allowed animate-pulse' : ''}`}
                  >
                    <Send className="mr-2 animate-float" size={18} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
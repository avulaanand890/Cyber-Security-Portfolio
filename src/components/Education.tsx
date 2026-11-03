import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Education: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-6 flex justify-between items-center focus:outline-none hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl font-bold text-green-400">Educational Background</span>
              {isOpen ? (
                <ChevronUp className="text-green-400" size={24} />
              ) : (
                <ChevronDown className="text-green-400" size={24} />
              )}
            </button>

            {isOpen && (
              <div className="p-6 border-t border-gray-700 animate-fadeIn">
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-green-500">
                    <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      B.Tech – Electronics and Communication Engineering
                    </h3>
                    <p className="text-gray-400 mb-2">Bharat Institute of Engineering & Technology</p>
                    <p className="text-green-400 font-medium">CGPA: 7.04</p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-green-500">
                    <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Intermediate
                    </h3>
                    <p className="text-gray-400 mb-2">Sri Chaitanya Junior Kalasala</p>
                    <p className="text-green-400 font-medium">CGPA: 9.07</p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-green-500">
                    <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Schooling
                    </h3>
                    <p className="text-gray-400 mb-2">Shivani Techno School</p>
                    <p className="text-green-400 font-medium">CGPA: 9.3</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
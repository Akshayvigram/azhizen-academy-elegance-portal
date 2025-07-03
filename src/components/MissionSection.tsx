
import React from 'react';

const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-dark-blue-600 to-light-blue-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2826&q=80"
                alt="Mission - Future leaders and education growth"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border border-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-900/20 to-transparent rounded-2xl" />
            </div>
          </div>
          
          <div className="scroll-reveal order-1 lg:order-2">
            <div className="mb-6">
              <span className="bg-dark-blue-100 text-dark-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                Our Mission
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-dark-blue-900 leading-[1.2]">
              Empowering Through
              <span className="bg-gradient-to-r from-dark-blue-600 to-light-blue-600 bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide exceptional educational experiences that empower students 
              to achieve academic excellence, develop professional expertise, and 
              cultivate the skills necessary for lifelong success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through innovative programs, dedicated mentorship, and immersive 
              learning opportunities, we bridge the gap between theoretical 
              knowledge and practical application.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-to-r from-dark-blue-500 to-light-blue-600 rounded-full"></div>
              <span className="text-dark-blue-600 font-semibold text-sm uppercase tracking-wide">Excellence in Education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

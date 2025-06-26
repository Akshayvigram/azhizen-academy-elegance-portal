
import React from 'react';

const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-gradient-to-b from-slate-200 to-slate-300 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2826&q=80"
                alt="Mission - Future leaders and education growth"
                className="rounded-2xl luxury-shadow w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
          </div>
          
          <div className="scroll-reveal order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#03045E]">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide exceptional educational experiences that empower students 
              to achieve academic excellence, develop professional expertise, and 
              cultivate the skills necessary for lifelong success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through innovative programs, dedicated mentorship, and immersive 
              learning opportunities, we bridge the gap between theoretical 
              knowledge and practical application.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <span className="text-gold-600 font-semibold">Excellence in Education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

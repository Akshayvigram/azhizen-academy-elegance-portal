
import React from 'react';
import { ArrowUp } from 'lucide-react';

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-maroon-950 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What We're Here To Do
          </h2>
          <p className="text-xl text-cream-200 max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between academic excellence and professional success through 
            comprehensive programs designed for the modern world.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Internship Programs */}
          <div className="scroll-reveal">
            <div className="bg-gradient-to-br from-royal-900/30 to-black/30 p-10 rounded-2xl glass-effect luxury-shadow hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-500 to-royal-600 rounded-full flex items-center justify-center mb-6">
                  <ArrowUp className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-gold-400">
                  Internship Programs
                </h3>
              </div>
              
              <p className="text-cream-200 text-lg leading-relaxed mb-6">
                Connect with industry leaders and gain hands-on experience in your field. 
                Our carefully curated internship opportunities provide real-world exposure 
                and professional networking that accelerates your career trajectory.
              </p>
              
              <ul className="space-y-3 text-cream-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Industry partnerships with leading organizations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Mentorship from experienced professionals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Portfolio development and skill assessment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Career placement assistance
                </li>
              </ul>
            </div>
          </div>
          
          {/* Training Programs */}
          <div className="scroll-reveal">
            <div className="bg-gradient-to-br from-maroon-900/30 to-black/30 p-10 rounded-2xl glass-effect luxury-shadow hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-maroon-500 to-maroon-600 rounded-full flex items-center justify-center mb-6">
                  <ArrowUp className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-gold-400">
                  Training Programs
                </h3>
              </div>
              
              <p className="text-cream-200 text-lg leading-relaxed mb-6">
                Comprehensive skill development programs designed to meet the evolving 
                demands of today's competitive landscape. Build expertise through 
                immersive learning experiences and practical application.
              </p>
              
              <ul className="space-y-3 text-cream-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Cutting-edge curriculum and methodologies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Expert instructors and guest speakers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Hands-on projects and case studies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Certification and continuing education
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

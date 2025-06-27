
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-blue-100 to-indigo-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#5F22B6] leading-[1.2] overflow-visible">
              Our Program
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive cohort-based learning journey designed to transform students into industry-ready professionals.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-2xl scroll-reveal">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl luxury-shadow hover:transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="mb-6">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#5F22B6] leading-[1.2] overflow-visible">
                0 to Skilled: Cohort Program
                </h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                A cohort-based learning journey for students from 3rd to 6th semester that includes value-added courses, two internships, and a domain-specific capstone project. Transform from zero to skilled professional with our structured approach to career development.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.location.href = '/cohort-program'}
                  className="bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 luxury-shadow flex items-center gap-2"
                >
                  Explore More
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

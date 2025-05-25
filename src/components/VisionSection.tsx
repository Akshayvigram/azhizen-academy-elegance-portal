
import React from 'react';

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-royal-900">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be the premier educational institution that cultivates innovative leaders, 
              critical thinkers, and compassionate global citizens who shape the future 
              of our world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where every student discovers their unique potential, 
              develops mastery in their chosen field, and contributes meaningfully to 
              society through ethical leadership and transformative action.
            </p>
          </div>
          
          <div className="scroll-reveal">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2671&q=80"
                alt="Vision - Students collaborating and learning together"
                className="rounded-2xl luxury-shadow w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

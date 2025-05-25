
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('vision');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-royal-950 to-maroon-950"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=4392&q=80')] bg-cover bg-center opacity-20" 
           style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-gradient animate-fade-in-up">Azhizen</span>
          <br />
          <span className="text-cream-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Academy</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cream-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Elevating minds, shaping futures through excellence in education and transformative learning experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 luxury-shadow"
          >
            Join Our Cohort Program
          </button>
          <button 
            onClick={() => window.location.href = '/cohort-program'}
            className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Cohort
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button onClick={scrollToNext} className="text-cream-300 hover:text-gold-400 transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

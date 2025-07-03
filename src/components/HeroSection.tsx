
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import acvideo from '../assets/ac_video.mp4'; 

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
    const nextSection = document.getElementById('featured-courses');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={acvideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Dark Overlay - Reduced opacity */}
      <div className="absolute inset-0 bg-dark-blue-900/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="font-bold text-4xl lg:text-8xl leading-tight">
          <span className="bg-gradient-to-r from-dark-blue-600 to-light-blue-600 bg-clip-text text-transparent">
            Azhizen
          </span>
          <br />
          <span
            className="text-white animate-fade-in-up block mt-2"
            style={{ animationDelay: '0.2s' }}
          >
            Academy
          </span>
        </h1>
        <br/>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Elevating minds, shaping futures through excellence in education and transformative learning experiences.
        </p>
      
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={scrollToContact}
            size="lg"
          >
            Join Our Cohort Program
          </Button>
          <Button 
            onClick={() => window.location.href = '/courses'}
            variant="outline"
            size="lg"
          >
            Explore Courses
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button onClick={scrollToNext} className="text-light-blue-300 hover:text-light-blue-400 transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

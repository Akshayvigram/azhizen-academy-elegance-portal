
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gold-300/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="font-serif text-2xl font-bold text-gradient">
            Azhizen Academy
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => window.location.href = '/'}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('values')}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Values
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Programs
            </button>
            <button 
              onClick={() => window.location.href = '/cohort-program'}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Cohort Program
            </button>
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

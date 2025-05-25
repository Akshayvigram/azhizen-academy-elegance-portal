
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
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    if (window.location.pathname === '/') {
      // If already on home page, scroll to hero
      scrollToSection('hero');
    } else {
      // Navigate to home page
      window.location.href = '/';
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
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={navigateToHome}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => window.location.href = '/cohort-program'}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Cohort Program
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

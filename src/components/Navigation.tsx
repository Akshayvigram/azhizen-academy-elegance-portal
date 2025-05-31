
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const handleCohortClick = () => {
    window.location.href = '/cohort-program';
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    scrollToSection('contact');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gold-300/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/25c647a5-da36-4f96-bcbc-910332cbb5a2.png" 
              alt="Azhizen Academy Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={navigateToHome}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={handleCohortClick}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Cohort Program
            </button>
            <button 
              onClick={handleContactClick}
              className="text-cream-100 hover:text-gold-400 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-cream-100">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 backdrop-blur-md border-l border-gold-300/20">
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={navigateToHome}
                    className="text-cream-100 hover:text-gold-400 transition-colors font-medium text-left py-2"
                  >
                    Home
                  </button>
                  <button 
                    onClick={handleCohortClick}
                    className="text-cream-100 hover:text-gold-400 transition-colors font-medium text-left py-2"
                  >
                    Cohort Program
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="text-cream-100 hover:text-gold-400 transition-colors font-medium text-left py-2"
                  >
                    Contact Us
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCoursesSection from '@/components/FeaturedCoursesSection';
import ProgramsSection from '@/components/ProgramsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedCoursesSection />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

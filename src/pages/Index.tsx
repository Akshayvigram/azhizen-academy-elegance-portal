
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCoursesSection from '@/components/FeaturedCoursesSection';
import ProgramsSection from '@/components/ProgramsSection';
// import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CompanyLogoSlider from '@/components/CompanyLogoSlider';
import CollegeLogoSlider from '@/components/CollegeLogoSlider'

const Index = () => {
  useScrollReveal();
  useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedCoursesSection />
      <ProgramsSection />
      {/* <ContactSection /> */}
      <StatsSection />
      <TestimonialsSection />
      <CompanyLogoSlider />
      <CollegeLogoSlider />
      <Footer />
    </div>
  );
};

export default Index;

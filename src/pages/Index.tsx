
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import MissionSection from '@/components/MissionSection';
import ValuesSection from '@/components/ValuesSection';
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
      <VisionSection />
      <MissionSection />
      <ValuesSection />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

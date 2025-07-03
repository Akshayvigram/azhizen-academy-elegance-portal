
import React from 'react';
import Navigation from '@/components/Navigation';
import VisionSection from '@/components/VisionSection';
import MissionSection from '@/components/MissionSection';
import ValuesSection from '@/components/ValuesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section for About Page */}
      <section className="section-padding bg-gradient-to-b from-royal-900 to-royal-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Azhizen Academy
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed">
            Discover our journey, values, and commitment to transforming education through innovation and excellence.
          </p>
        </div>
      </section>

      <VisionSection />
      <MissionSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;

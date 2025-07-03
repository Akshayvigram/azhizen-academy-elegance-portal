
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-light-blue-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-light-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-light-blue-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block mb-6">
              <span className="bg-light-blue-500/20 text-light-blue-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-light-blue-400/30">
                About Us
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-light-blue-300 to-light-blue-500 bg-clip-text text-transparent">
                Azhizen Academy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Discover our journey, values, and commitment to transforming education through innovation and excellence.
            </p>
          </div>
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

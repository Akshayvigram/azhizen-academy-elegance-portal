
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/ac_logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-cream-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <img 
              src={logo}
              alt="Azhizen Academy Logo" 
              className="h-32 w-auto"
            />
            <p className="text-cream-300 leading-relaxed">
              Elevating minds, shaping futures through excellence in education and transformative learning experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-cream-300 hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="/cohort-program" className="text-cream-300 hover:text-gold-400 transition-colors">Cohort Program</a></li>
              <li><a href="/#contact" className="text-cream-300 hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-gold-400">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
              <Phone className="text-gold-400 mt-1" size={20} />
              <div className="flex flex-col text-cream-300">
                <span>+91 7010682506</span>
                <span>+91 9750603988</span>
              </div>
            </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gold-400" size={20} />
                <span className="text-cream-300">academy@azhizen.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-400 mt-1" size={20} />
                <span className="text-cream-300">
                  R-NO:309, Mercury Block<br />
                  KSRCE, Tiruchengode, Namakkal, Tamil Nadu
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-cream-400">
            © 2024 Azhizen Academy. All rights reserved.
          </p>
           <div className="mt-3 space-x-4">
      <a
  href="https://azhizen.com" // or your actual portfolio URL
  className="text-azhizen-lightPurple hover:underline"
  target="_blank"
  rel="noopener noreferrer"
>
  Azhizen Portfolio
</a>


      <span className="text-azhizen-neutralGray">|</span>
      <a
        href="https://media.azhizen.com"
        className="text-azhizen-lightPurple hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Azhizen Media
      </a>
    </div>
  </div>
        </div>
    </footer>
  );
};

export default Footer;

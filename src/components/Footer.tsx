
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/78210c81-224f-49fc-a9ed-d86bf544c479.png" 
              alt="Azhizen Academy Logo" 
              className="h-16 w-auto mr-4"
            />
            <div className="font-serif text-4xl font-bold text-white">
              Azhizen Academy
            </div>
          </div>
          
          <p className="text-cream-300 text-lg mb-8 max-w-2xl mx-auto">
            Empowering the next generation of leaders through excellence in education 
            and transformative learning experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-r from-royal-600 to-maroon-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-r from-royal-600 to-maroon-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-r from-royal-600 to-maroon-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-r from-royal-600 to-maroon-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-cream-400">
              © 2024 Azhizen Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

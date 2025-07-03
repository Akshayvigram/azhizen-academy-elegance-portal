
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue-950 via-black to-dark-blue-950">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-light-blue-400/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => window.location.href = '/'}
              className="font-serif text-2xl font-bold bg-gradient-to-r from-dark-blue-600 to-light-blue-600 bg-clip-text text-transparent"
            >
              Azhizen Academy
            </button>
            <Button 
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Ready to begin your journey with Azhizen Academy? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-light-blue-400/20 luxury-shadow">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6 text-light-blue-400">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-gray-300/30 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/5 border-gray-300/30 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/5 border-gray-300/30 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/5 border-gray-300/30 text-white placeholder:text-gray-400 min-h-32"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-light-blue-400/20 luxury-shadow">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-light-blue-400">
                    Get in Touch
                  </h3>
                  <div className="space-y-4 text-gray-200">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p>info@azhizenacademy.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Address</h4>
                      <p>123 Academy Street<br />Education District<br />City, State 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-white/10 backdrop-blur-md border-light-blue-400/20 luxury-shadow">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-dark-blue-900/50 to-dark-blue-900/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-300 text-lg">Interactive Map Coming Soon</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/10 backdrop-blur-md border-light-blue-400/20 luxury-shadow">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-light-blue-400">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Facebook size={20} className="text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Instagram size={20} className="text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Youtube size={20} className="text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

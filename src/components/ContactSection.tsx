
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', mobile: '', message: '' });
    // You can add toast notification here
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black to-royal-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Contact Us
          </h2>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey with Azhizen Academy? Get in touch with us and let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-bold mb-6 text-gold-400">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-gold-400" size={20} />
                <span className="text-cream-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gold-400" size={20} />
                <span className="text-cream-200">admissions@azhizen.academy</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-gold-400" size={20} />
                <span className="text-cream-200">Azhizen Academy Campus, Education City</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <Card className="bg-white/10 backdrop-blur-md border-gold-300/20 luxury-shadow">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-cream-300/30 text-white placeholder:text-cream-400 h-12"
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
                      className="bg-white/5 border-cream-300/30 text-white placeholder:text-cream-400 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="mobile"
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="bg-white/5 border-cream-300/30 text-white placeholder:text-cream-400 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/5 border-cream-300/30 text-white placeholder:text-cream-400 min-h-32"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 py-3 text-lg font-semibold h-12"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

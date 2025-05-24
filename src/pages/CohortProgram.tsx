
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Users, Award, Code, Shield, Brain, Layers } from 'lucide-react';

const CohortProgram = () => {
  useScrollReveal();

  const timelinePhases = [
    {
      phase: "Foundation",
      semester: "3rd Sem",
      description: "Programming, Web Basics, Git, Soft Skills",
      icon: Code,
      color: "from-royal-500 to-royal-600"
    },
    {
      phase: "Specialization",
      semester: "4th Sem", 
      description: "Choose from Full Stack, AI, Cybersecurity, etc.",
      icon: Layers,
      color: "from-maroon-500 to-maroon-600"
    },
    {
      phase: "Internship I",
      semester: "5th Sem",
      description: "Guided real-world experience",
      icon: Users,
      color: "from-gold-500 to-gold-600"
    },
    {
      phase: "Internship II + Capstone",
      semester: "6th Sem",
      description: "Final project & evaluation",
      icon: Award,
      color: "from-royal-700 to-maroon-700"
    }
  ];

  const specializationTracks = [
    {
      title: "Full Stack Development",
      description: "Master frontend and backend technologies to build complete web applications",
      tools: "React, Node.js, MongoDB, Express",
      projects: "E-commerce Platform, Social Media App",
      icon: Code
    },
    {
      title: "AI/ML Engineering", 
      description: "Dive into machine learning, data science, and artificial intelligence",
      tools: "Python, TensorFlow, Scikit-learn, Pandas",
      projects: "Recommendation System, Image Classifier",
      icon: Brain
    },
    {
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and digital forensics",
      tools: "Kali Linux, Wireshark, Metasploit, OWASP",
      projects: "Penetration Testing, Security Audit",
      icon: Shield
    },
    {
      title: "Cloud & DevOps",
      description: "Master cloud platforms and automated deployment pipelines",
      tools: "AWS, Docker, Kubernetes, Jenkins",
      projects: "Microservices Architecture, CI/CD Pipeline",
      icon: Layers
    }
  ];

  const outcomes = [
    { icon: Users, title: "2 Internships", description: "Real industry experience" },
    { icon: Award, title: "1 Certification", description: "Industry-recognized credential" },
    { icon: Code, title: "1 Capstone Project", description: "Portfolio showcase piece" },
    { icon: CheckCircle, title: "Strong Portfolio", description: "Resume-ready projects" }
  ];

  const faqs = [
    {
      question: "Who is eligible for the cohort program?",
      answer: "Students currently in their 3rd to 6th semester of any technical degree program are eligible to apply."
    },
    {
      question: "How long is the program duration?",
      answer: "The program spans across 4 semesters (3rd to 6th), with each phase building upon the previous one."
    },
    {
      question: "Can I change my specialization track?",
      answer: "Specialization selection happens in the 4th semester. While changes are possible, we recommend choosing based on your career goals."
    },
    {
      question: "Are the internships paid?",
      answer: "Yes, both internship opportunities are paid positions with our industry partners."
    },
    {
      question: "What support is provided during internships?",
      answer: "Each student is assigned a mentor who provides guidance throughout the internship period."
    },
    {
      question: "Is there any fee for the program?",
      answer: "The program has a nominal fee structure. Financial assistance is available for deserving candidates."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-royal-950 to-maroon-950" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">From Zero to Skilled</span>
            <br />
            <span className="text-cream-100">Your Career Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Join our exclusive cohort program for 3rd to 6th semester students to gain real-world skills, 
            internships, and project experience that transforms you into an industry-ready professional.
          </p>
          
          <Button 
            className="bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 luxury-shadow animate-fade-in-up"
            style={{animationDelay: '0.6s'}}
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* About the Cohort Program */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-royal-900">
            About the Cohort Program
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our comprehensive cohort program is designed to transform ambitious students into industry-ready professionals. 
            Through a carefully structured curriculum spanning four semesters, students progress from foundational concepts 
            to specialized expertise, gaining hands-on experience through internships and culminating in a capstone project 
            that showcases their skills to potential employers.
          </p>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="section-padding bg-gradient-to-b from-royal-950 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Program Timeline
            </h2>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              A structured 4-phase journey designed to build expertise progressively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelinePhases.map((phase, index) => (
              <div 
                key={index}
                className="scroll-reveal text-center"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6 luxury-shadow`}>
                  <phase.icon className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-gold-400">
                  {phase.phase}
                </h3>
                <p className="text-cream-300 font-semibold mb-4">{phase.semester}</p>
                <p className="text-cream-200 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-royal-900">
              Specialization Tracks
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose your path and master cutting-edge technologies in your field of interest
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specializationTracks.map((track, index) => (
              <div 
                key={index}
                className="scroll-reveal bg-white p-8 rounded-2xl luxury-shadow hover:transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-royal-500 to-royal-600 rounded-lg flex items-center justify-center mr-4">
                    <track.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-royal-900">{track.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{track.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-maroon-700 mb-2">Tools & Technologies:</h4>
                  <p className="text-gray-600">{track.tools}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-maroon-700 mb-2">Sample Projects:</h4>
                  <p className="text-gray-600">{track.projects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships & Certification */}
      <section className="section-padding bg-gradient-to-b from-maroon-950 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Internships & Certification
              </h2>
              <p className="text-lg text-cream-200 leading-relaxed mb-6">
                Gain real-world experience through two structured internship programs with our industry partners. 
                Each student also receives one value-added certification course to enhance their professional profile.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-gold-400 mr-3" size={20} />
                  <span className="text-cream-200">Two paid internship opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-gold-400 mr-3" size={20} />
                  <span className="text-cream-200">Industry-recognized certification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-gold-400 mr-3" size={20} />
                  <span className="text-cream-200">Dedicated mentor support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-gold-400 mr-3" size={20} />
                  <span className="text-cream-200">Direct placement opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3543&q=80"
                alt="Programming and internships"
                className="rounded-2xl luxury-shadow w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capstone Mini Project */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=3882&q=80"
                alt="Capstone project development"
                className="rounded-2xl luxury-shadow w-full h-96 object-cover"
              />
            </div>
            
            <div className="scroll-reveal order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-royal-900">
                Capstone Mini Project
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The culmination of your learning journey is a comprehensive capstone project where you'll apply 
                all the skills and knowledge gained throughout the program. Working under the guidance of industry 
                mentors, you'll build a real-world application that solves actual business problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your project will be evaluated by a panel of industry experts and becomes a centerpiece of your 
                professional portfolio, demonstrating your readiness for the workforce and opening doors to 
                exciting career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-gradient-to-b from-royal-950 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Program Outcomes
            </h2>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              What you'll achieve by the end of the program
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="scroll-reveal text-center bg-gradient-to-br from-royal-900/30 to-black/30 p-8 rounded-2xl glass-effect luxury-shadow hover:transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <outcome.icon className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gold-400">
                  {outcome.title}
                </h3>
                <p className="text-cream-200">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-200">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-royal-900">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            <strong>Eligibility:</strong> Open for 3rd–6th semester students from any technical degree program
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Applications are reviewed on a rolling basis. Early applications receive priority consideration.
          </p>
          <Button 
            className="bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 luxury-shadow"
          >
            Apply Now - Start Your Journey
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-maroon-950 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="scroll-reveal bg-gradient-to-br from-royal-900/30 to-black/30 p-8 rounded-2xl glass-effect luxury-shadow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="font-serif text-xl font-bold mb-4 text-gold-400">
                  {faq.question}
                </h3>
                <p className="text-cream-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CohortProgram;

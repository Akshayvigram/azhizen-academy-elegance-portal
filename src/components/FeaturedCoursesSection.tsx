
import React from 'react';
import { Star, Users, Clock, ArrowRight, GraduationCap, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedCoursesSection = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Generative AI with Python - Prompt Engineering",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      studentCount: 1250,
      description: "Applied Machine Learning with ChatGPT, LLM Integrations (LangChain / RAG) - Data Analysis (Pandas, NumPy, Matplotlib)",
      price: "xxxx",
      duration: "12 weeks",
      level: "Intermediate",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 2,
      title: "Embedded C & RTOS for Beginners - IoT with ESP32",
      instructor: "Prof. Priya Sharma",
      rating: 4.9,
      studentCount: 980,
      description: "Cloud (Firebase, Azure) - LoRa, MQTT, Edge Node Communication - Core-engineering focused, job-market ready",
      price: "xxxx",
      duration: "16 weeks",
      level: "Beginner",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      instructor: "Arjun Menon",
      rating: 4.7,
      studentCount: 750,
      description: "Frontend Dev with React + Tailwind - Next.js with TypeScript - Backend with Node.js + MongoDB - Web3 DApps with Solidity & Hardhat - DevOps for Web Apps (CI/CD, Docker)",
      price: "xxxx",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 4,
      title: "ROS2 with Python / C++ - Arduino + Sensors & Actuators",
      instructor: "Dr. Sneha Patel",
      rating: 4.6,
      studentCount: 650,
      description: "Projects - Raspberry Pi Automation - Vision Navigation (OpenCV) - AI-powered Robotics (YOLO, TensorFlow Lite)",
      price: "xxxx",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 5,
      title: "VHDL/Verilog for Beginners - ASIC Flow using Synopsys Tools",
      instructor: "Vikram Singh",
      rating: 4.5,
      studentCount: 580,
      description: "FPGA-based System Design - Cadence Design Flow - Python for VLSI Test Automation. Aligned with India Semiconductor Mission",
      price: "xxxx",
      duration: "15 weeks",
      level: "Advanced",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 6,
      title: "CEH (Certified Ethical Hacking) Prep - Bug Bounty & Web Security",
      instructor: "Ravi Kumar",
      rating: 4.8,
      studentCount: 2100,
      description: "Penetration Testing - Network Security Essentials - Linux Hardening - Digital Forensics Basics. High-demand across government & private sectors",
      price: "xxxx",
      duration: "8 weeks",
      level: "Beginner",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 7,
      title: "AI for Edge Devices / TinyML",
      instructor: "Dr. Ankit Sharma",
      rating: 4.6,
      studentCount: 480,
      description: "TensorFlow Lite, Edge AI deployment, Microcontroller ML, Optimization techniques for resource-constrained devices",
      price: "xxxx",
      duration: "10 weeks",
      level: "Advanced",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 8,
      title: "Industrial Automation with PLC & SCADA",
      instructor: "Eng. Rohit Verma",
      rating: 4.7,
      studentCount: 620,
      description: "Programmable Logic Controllers, SCADA systems, Industrial communication protocols, Factory automation",
      price: "xxxx",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 9,
      title: "IoT Security & OTA Updates",
      instructor: "Dr. Kavya Singh",
      rating: 4.5,
      studentCount: 390,
      description: "IoT device security, Over-the-Air updates, Secure communication protocols, Device authentication",
      price: "xxxx",
      duration: "12 weeks",
      level: "Advanced",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    }
  ];

  const statistics = [
    {
      icon: GraduationCap,
      number: "50+",
      label: "Expert Courses",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Students",
      color: "text-green-500"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      color: "text-pink-500"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Job Placement",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="featured-courses" className="section-padding bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-dark-blue-900 leading-[1.2]">
            Trending Courses
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and trending courses designed by industry experts. Coming soon to help you achieve your career goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <Card 
              key={course.id}
              className="scroll-reveal hover:transform hover:scale-105 transition-all duration-300 luxury-shadow border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-dark-blue-600">
                  {course.level}
                </div>
                {course.comingSoon && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-dark-blue-900 mb-2">
                  {course.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-center pt-2">
                  <div className="text-2xl font-bold text-dark-blue-600">
                    ₹{course.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.location.href = '/courses'}
            size="lg"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
